---
description: 本地Baseline设置示例
---

# Baseline

要尝试使用一些Baseline 命令，启动本地节点，尝试以下示例：

Baseline 配置文件已禁用网络发现过程，在本示例中，我们改用静态节点。静态节点配置可以在`Data / static-nodes-baseline.json`文件中找到。那里的每个静态节点都有一个enode条目，其中包含从节点 \(the `TestNodeKey` settings in our example\), 的私钥派生的公钥，IP地址和端口。

启动节点A\(the test node keys are consistent with Data/static-nodes-baseline.json\)

```text
./Nethermind.Runner --config baseline --JsonRpc.Enabled true --JsonRpc.Port 8511 --Network.DiscoveryPort 30111 --Network.P2PPort 30111 --KeyStore.TestNodeKey 120102030405060708090a0b0c0d0e0f000102030405060708090a0b0c0d0e0f
```

启动节点B \(the test node keys are consistent with Data/static-nodes-baseline.json\)

```text
./Nethermind.Runner --config baseline --JsonRpc.Enabled true --JsonRpc.Port 8522 --Network.DiscoveryPort 30222 --Network.P2PPort 30222 --KeyStore.TestNodeKey 020102030405060708090a0b0c0d0e0f000102030405060708090a0b0c0d0e0f
```

![到两个节点的初始连接和 baseline tree 协定的部署](../.gitbook/assets/image%20%2833%29.png)

![交易发送到一个节点后创建并同步新块](../.gitbook/assets/image%20%2832%29.png)

![与新部署的Baseline Merkle Tree合同的交互示例\(在回答常见问题时保留错误\)](../.gitbook/assets/image%20%2834%29.png)

![这里我们向树中添加一些数据，并请求Merkle证明\(同级路径\)](../.gitbook/assets/image2835%29.png)

![根据根和同级路径验证叶子节点 .](../.gitbook/assets/image%20%2836%29.png)

以下可以找到 Baseline Protocol Atomic Workflow Step，其中Provide基础结构和Nethermind节点充当以太坊主网的网关，并维护Baseline Merkle trees中的数据。

![](../.gitbook/assets/provide_neth%20%281%29.png)





