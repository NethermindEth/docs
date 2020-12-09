---
description: 如何在 Aura（Authority Round）共识算法中设置 Nethermind 验证者
---

# Aura 验证者

本文将引导您完成 **Nethermind Aura 验证者** 的 docker-compose 设置（本文以 xDai 链为例）。您既可以[下载](../../yi-tai-fang-ke-hu-duan/download-sources/) 并[运行 Nethermind](../../yi-tai-fang-ke-hu-duan/running-nethermind/running-the-client.md) 的程序包，也可以使用源代码来[构建 Nethermind](../../yi-tai-fang-ke-hu-duan/building-nethermind.md)。

如果你不使用 docker-compose，可以跳过 docker-compose 的部分，仅阅读[配置文件](aura-validator.md#config-file)和[私钥配置](aura-validator.md#mining-private-key)的部分。

## 必备条件

* [x] docker-compose
* [x] docker
* [x] 建议使用内存不低于 4GB 的计算机

```bash
sudo apt-get install docker docker-compose -y
```

## 时钟同步

您需要同步系统时钟，否则可能会遇到跳过区块打包的情况。默认情况下，`stepDuration` 被设置为 `5s`。

为了验证您的系统时钟是否已同步，请您键入 `timedatectl status`，将得到如下所示的输出：

```bash
Local time: Tue 2020-06-30 17:16:19 UTC
Universal time: Tue 2020-06-30 17:16:19 UTC
RTC time: Tue 2020-06-30 17:16:19
Time zone: Etc/UTC (UTC, +0000)
System clock synchronized: yes
systemd-timesyncd.service active: yes
RTC in local TZ: no
```

如果 `System clock synchronized` （系统时钟已同步）显示 `yes`，则表明设置完成。否则，您可能需要：

* [x] 将系统时钟与 NTP 服务器同步（允许通过 **UDP** 端口 **123** 传入和传出流量）
* [x] 使用以下脚本与 google.com 同步：

创建 `fixtime.sh` 脚本并在 `screen` 中使用 `watch -n 60` 命令运行该脚本

```bash
echo sudo date -s '"$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"' > fixtime.sh
chmod +x fixtime.sh
screen -S time
watch -n 60 ./fixtime.sh
```

按 `Ctrl+A+D` 退出 `screen`。

## Docker-compose 文件示例

创建并编辑 `docker-compose.yml` 文件

```bash
nano docker-compose.yml
```

{% tabs %}
{% tab title="docker-compose.yml" %}
```yaml
version: '3.5'

services:
  nethermind-validator:
    image: nethermind/nethermind
    container_name: nethermind-validator
    restart: unless-stopped
    ports:
      - 8545:8545
      - 30303:30303
    network_mode: host
    environment:
      - NETHERMIND_CONFIG=xdai
    volumes:
      - ${PWD}/nethermind_db:/nethermind/nethermind_db
      - ${PWD}/keystore:/nethermind/keystore
      - ${PWD}/logs:/nethermind/logs
      - ${PWD}/xdai.cfg:/nethermind/configs/xdai.cfg 
      - ${PWD}/NLog.config:/nethermind/NLog.config
      - ${PWD}/static-nodes.json:/nethermind/Data/static-nodes.json

volumes:
  nethermind_db:
    driver: local
    name: nethermind_db
  keystore:
    driver: local
    name: keystore
  logs:
    driver: local
    name: logs
```
{% endtab %}
{% endtabs %}

通过环境变量配置 Nethermind 节点，或将本地配置文件映射到容器中（在上例中，指的是 `xdai.cfg` 文件）。

{% hint style="info" %}
确保已映射 `nethermind_db`, `keystore`（`logs`可选），否则可能会丢失数据库或密钥。
{% endhint %}

[`NLog.config`](../../yi-tai-fang-ke-hu-duan/running-nethermind/runtime.md#nlog-config) 文件是可选的。 [`static-nodes.json`](../../yi-tai-fang-ke-hu-duan/running-nethermind/runtime.md#static-nodes) 可以使用一组 enode 来填充，这也是可选的。

## 挖矿**私钥**

{% hint style="danger" %}
确保文件名包含密钥的**公共地址**，否则 Nethermind 客户端不会将其识别为密钥文件。

正确的 `keyfile` 名称：**key-a5237f7f43cc46cba43ac212dabd0c45e3e3050a**

`keyfile` 应该存储在 `keystore` 卷中。
{% endhint %}

## 配置文件

需要配置的内容：

* [ ] 将 `Init.IsMining` 设置为 true
* [ ] `Init.MemoryHint` 可保留为默认值，我们建议根据计算机的硬件设置对其进行相应配置（对于 `xdai` 来说，设置为 1000000000 就够了）
* [ ] `EthStats` 部分，如果您想将节点状态报告给指定网络的 ethstats 页面
* [\[ \] `Metrics` 部分，如果您想要运行本地/远程 Metrics 基础设施](../../yi-tai-fang-ke-hu-duan/metrics/setting-up-local-metrics-infrastracture.md)
* [ ] `KeyStore.PasswordFiles`，即，通往包含**挖矿私钥**密码的文件的路径
* [ ] `KeyStore.UnlockAccounts` **\*\*，即，一组账户，此处应提供**挖矿公共地址\*\*
* [ ] `KeyStore.BlockAuthorAccount`，此处也应该提供**挖矿公共地址**
* [ ] 将 `Aura.ForceSealing` 设置为 true

{% tabs %}
{% tab title="xdai.cfg" %}
```bash
{
  "Init": {
    "WebSocketsEnabled": false,
    "StoreReceipts": true,
    "IsMining": true,
    "ChainSpecPath": "chainspec/xdai.json",
    "GenesisHash": "0x4f1dd23188aab3a76b463e4af801b52b1248ef073c648cbdc4c9333d3da79756",
    "BaseDbPath": "nethermind_db/xdai",
    "LogFileName": "xdai.logs.txt",
    "MemoryHint": 3000000000,
    "StaticNodesPath": "Data/static-nodes.json"
  },
  "Network": {
    "DiscoveryPort": 30303,
    "P2PPort": 30303
  },
  "JsonRpc": {
    "Enabled": false,
    "Host": "127.0.0.1",
    "Port": 8545,
    "WebSocketsPort": 8546
  },
  "Db": {
    "HeadersDbCacheIndexAndFilterBlocks": false,
    "BlocksDbCacheIndexAndFilterBlocks": false,
    "ReceiptsDbCacheIndexAndFilterBlocks": false,
    "BlockInfosDbCacheIndexAndFilterBlocks": false
  },
  "Sync": {
    "FastSync": true,
    "PivotNumber": 10410000,
    "PivotHash": "0x806f498fdde010f25bd3beb18e6f8a9c9450752f8c0e27da2cd2465ff184628c",
    "PivotTotalDifficulty": "3542339439646969404653729663364707080928280566",
    "FastBlocks": true,
    "UseGethLimitsInFastBlocks": false,
    "FastSyncCatchUpHeightDelta": 10000000000
  },
  "EthStats": {
    "Enabled": false,
    "Server": "ws://localhost:3000/api",
    "Name": "Nethermind xDai",
    "Secret": "secret",
    "Contact": "hello@nethermind.io"
  },
  "Metrics": {
    "NodeName": "Nethermind xDai",
    "Enabled": false,
    "PushGatewayUrl": "http://localhost:9091/metrics",
    "IntervalSeconds": 5
  },
  "KeyStore": {
    "PasswordFiles": ["keystore/password.file"],
    "UnlockAccounts": ["0x..."],
    "BlockAuthorAccount": "0x..." 
  },
  "Aura": {
    "ForceSealing": true
  },
  "Bloom": {
    "IndexLevelBucketSizes": [
      16,
      16,
      16
    ]
  }
}
```
{% endtab %}
{% endtabs %}

## 运行验证者节点

使用简单的 docker-compose 命令运行它。

```bash
docker-compose up -d
```

您需要等到节点完全**同步**。

检查日志，并验证该节点是否如预期那样打包区块（查找 `Sealed block` 日志）。

```bash
docker-compose logs -f nethermind-validator
```

![](../../.gitbook/assets/image%20%2837%29.png)

