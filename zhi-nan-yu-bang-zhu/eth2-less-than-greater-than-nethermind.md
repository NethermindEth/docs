---
description: 如何运行 Nethermind 作为 ETH 2.0 客户端的 ETH 1.0 端点
---

# ETH2 &lt;-&gt; Nethermind

## 将 Nethermind 客户端作为 ETH 1.0 端点

{% hint style="warning" %}
You should always consider being able to switch to Infura or another provider as a backup for safety \(or run two nodes yourself\)👈
{% endhint %}

{% hint style="warning" %}
For a more comprehensive step-by-step guide, you should look into one of these awesome guides -&gt; [https://someresat.medium.com/](https://someresat.medium.com/). Below you will find instructions on how to run Nethermind node -&gt; **Step 6 — Set up an Ethereum \(Eth1\) Node**
{% endhint %}

### 下载和运行 Nethermind

* [x] 下载 Nethermind 客户端

您可以从 Github 版本发布页或我们的官网下载页获取 Nethermind：

{% page-ref page="../yi-tai-fang-ke-hu-duan/download-sources/" %}

* \[x\]unzip软件包
* [x] 运行 Nethermind 节点（使用 `Nethermind.Launcher` 或更改 `configs/mainnet.cfg` 并运行 `Nethermind.Runner --config mainnet`）

{% hint style="info" %}
use the Linux **screen** utility to keep your node working in the background
{% endhint %}

```text
screen -S nethermind
./Nethermind.Launcher
```

![](../.gitbook/assets/image%20%2810%29%20%281%29%20%281%29%20%281%29.png)

{% hint style="danger" %}
Enable **JSON RPC** service so that your ETH2 Beacon node will be able to communicate
{% endhint %}

{% page-ref page="../nethermind-de-ru-men-zhi-nan/firewall-configuration.md" %}

如有需要，可为您的节点配置 EthStats：

![](../.gitbook/assets/image%20%283%29.png)

您会看到节点启动：

![](../.gitbook/assets/image%20%281%29.png)

{% hint style="info" %}
**Tip:** Ctrl + A + D to leave the **screen**
{% endhint %}

### 将Nethermind作为系统服务运行

{% page-ref page="../nethermind-de-ru-men-zhi-nan/manage-nethermind-with-systemd.md" %}

### 监控 Nethermind 节点的健康状况

根据以下指南设置基于 Prometheus/Grafana 的本地设置，即可监控您的节点的重要统计信息。

{% page-ref page="../yi-tai-fang-ke-hu-duan/metrics/setting-up-local-metrics-infrastracture.md" %}

![](../.gitbook/assets/image.png)

{% hint style="info" %}
The Block Number will be **0** for the **unsynced** node
{% endhint %}

如需检查您的节点是否同步，可执行 `eth_syncing` 调用来检查其结果。

```text
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_syncing","params":[],"id":1}' localhost:8545
```

如果结果显示为 `false`，则表示您的节点已**同步**。

```text
{"jsonrpc":"2.0","result":false,"id":1}
```

查看以下指南以获得更好的节点运行状况监视：

{% page-ref page="../yi-tai-fang-ke-hu-duan/monitoring-node-health.md" %}

