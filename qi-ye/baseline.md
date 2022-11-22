---
description: 本地 Baseline 设置示例
---

# Baseline

如需启动本地节点来试验 Baseline 命令，请尝试以下示例：

Baseline 配置文件已禁用网络发现进程。在本例中，我们改用静态节点。静态节点的配置可在 `Data / static-nodes-baseline.json` 文件中找到。每个静态节点都有一个配有公钥的 enode 入口、IP 地址和端口。其中，公钥由静态节点的私钥推导而来（本例使用的是 `TestNodeKey` 设置）。

启动节点 A（该测试节点的密钥与 Data/static-nodes-baseline.json 中的一致）

```
./Nethermind.Runner --config baseline --JsonRpc.Enabled true --JsonRpc.Port 8511 --Network.DiscoveryPort 30111 --Network.P2PPort 30111 --KeyStore.TestNodeKey 120102030405060708090a0b0c0d0e0f000102030405060708090a0b0c0d0e0f
```

启动节点 B（该测试节点的密钥与 Data/static-nodes-baseline.json 中的一致）

```
./Nethermind.Runner --config baseline --JsonRpc.Enabled true --JsonRpc.Port 8522 --Network.DiscoveryPort 30222 --Network.P2PPort 30222 --KeyStore.TestNodeKey 020102030405060708090a0b0c0d0e0f000102030405060708090a0b0c0d0e0f
```

![首次连接两个节点并部署 baseline 默克尔树合约](<../.gitbook/assets/image (33).png>)

![向一个节点发送交易，该节点会创建一个新区块并广播它](<../.gitbook/assets/image (32).png>)

![与新部署的 Baseline 默克尔树合约交互的示例（如遇错误，请参阅“常见问题”）](<../.gitbook/assets/image (34).png>)

![此处我们将一些数据添加到了默克尔树上，然后请求（旁支路径的）默克尔证明](<../.gitbook/assets/image (35).png>)

![使用默克尔根和旁支路径来验证某个叶节点](<../.gitbook/assets/image (36).png>)

下图高度概括了 Baseline 协议的原子化工作流。该流程使用 Provide 的基础设施，并以 Nethermind 节点充当以太坊主网网关，维护 Baseline 默克尔树的数据。

![](<../.gitbook/assets/provide\_neth (1) (1) (4) (4) (4).png>)
