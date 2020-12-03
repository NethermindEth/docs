---
description: 如何在Aura（权威回合）共识算法中设置Nethermind验证程序
---

# Aura 验证器

本文将引导您完成docker-compose **Nethermind Aura 验证器**  设置\(在此示例中为xDai链/\)。通过[下载](../../yi-tai-fang-ke-hu-duan/download-sources/) 后[运行Nethermind](../../yi-tai-fang-ke-hu-duan/running-nethermind/running-the-client.md)程序包,或从源代码[构建Nethermind](../../yi-tai-fang-ke-hu-duan/building-nethermind.md)可以获得相同的结果。

如果选择不使用docker-compose，可以跳过docker-compose的相关部分，而仅阅读 [配置文件](aura-validator.md#config-file)和 [私钥配置](aura-validator.md#mining-private-key)

## 先决条件

* [x] docker-compose
* [x] docker
* \[x\]建议使用至少4GB RAM的计算机

```bash
sudo apt-get install docker docker-compose -y
```

## 时钟同步

系统时钟需要同步，否则可能会遇到跳过块密封的情况。默认情况下，`stepDuration`配置为`5s`。

验证系统时钟是否同步，键入 `timedatectl status`，后应该看到类似的输出：

```bash
Local time: Tue 2020-06-30 17:16:19 UTC
Universal time: Tue 2020-06-30 17:16:19 UTC
RTC time: Tue 2020-06-30 17:16:19
Time zone: Etc/UTC (UTC, +0000)
System clock synchronized: yes
systemd-timesyncd.service active: yes
RTC in local TZ: no
```

如果`System clock synchronized` （已同步系统时钟）显示`yes`（是），这说明一切就绪，否则，可能需要：

* [x] 同步时钟和NTP服务器 \(允许**UDP**端口**123**用于传入和传出流量\)
* \[x\]使用以下脚本与google.com同步：

创建 `fixtime.sh` 脚本并在 `屏幕` 中使用 `watch -n 60` 命令运行它

```bash
echo sudo date -s '"$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"' > fixtime.sh
chmod +x fixtime.sh
screen -S time
watch -n 60 ./fixtime.sh
```

按`Ctrl+A+D` 退出`屏幕`。

## Docker-compose文件样本

创建和编辑`docker-compose.yml`文件

```bash
nano docker-compose.yml
```

{% tabs %}
{% tab title="docker-compose.yml" %}
```yaml
version: '3.5'

services:
  nethermind-validator:
    image: nethermind/nethermind:alpine
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

通过环境变量配置Nethermind节点，或者使用本地配置文件并将其映射到容器 \(在上面的示例中的`xdai.cfg`文件\)中存在的那个节点。

{% hint style="info" %}
Make sure that `nethermind_db`, `keystore`\(`logs` - optional \) are mapped, otherwise you might lose database or keys
{% endhint %}

[`NLog.config`](../../yi-tai-fang-ke-hu-duan/running-nethermind/runtime.md#nlog-config)可选文件。 [`static-nodes.json`](../../yi-tai-fang-ke-hu-duan/running-nethermind/runtime.md#static-nodes) 可以填充一个enode数组（可选 ）

## 挖矿**私钥**

{% hint style="danger" %}
确保文件名包含密钥的**公共地址**，否则Nethermind客户端不会将其识别为密钥文件。

`密钥文件`正确命名 : **key-a5237f7f43cc46cba43ac212dabd0c45e3e3050a**

然后，`密钥文件` 该存储在`密钥库卷` 中。
{% endhint %}

## 配置文件

要配置的内容：

* [ ] `Init.IsMining` 为 true
* [ ] `Init.MemoryHint` 可以保留为默认值，建议根据机器硬件设置对其进行相应配置 \(对于`xdai`1000000000已足够\)
* [ ] `EthStats` ，要将给定网络的节点状态报告给ethstats页面
* [ ] `Metrics`  如果运行本地/远程 [度量基础结构](../../yi-tai-fang-ke-hu-duan/metrics/setting-up-local-metrics-infrastracture.md)
* [ ] `KeyStore.PasswordFiles` 包含用于**挖掘私钥**的密码的文件的路径
* [ ] `KeyStore.UnlockAccounts`  **\*\*一系列帐户，在此处提供**挖掘公共地址\*\*
* [ ] `KeyStore.BlockAuthorAccount` **挖掘公共地址**也应在此处提供
* [ ] `Aura.ForceSealing`  设置为true

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

## 运行验证器节点

使用简单的docker-compose命令运行它。

```bash
docker-compose up -d
```

将要等到节点完全**同步**。

要检查日志，确认是否按预期密封块\(查找`Sealed block` （密封块）日志\)。

```bash
docker-compose logs -f nethermind-validator
```

![](../../.gitbook/assets/image%20%2837%29.png)

