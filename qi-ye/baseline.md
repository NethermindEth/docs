---
description: 本地 Baseline 设置示例
---

# Baseline

如需启动本地节点来试验 Baseline 命令，请尝试以下示例：

Baseline 配置文件已禁用网络发现进程。在本例中，我们改用静态节点。静态节点的配置可在 `Data / static-nodes-baseline.json` 文件中找到。每个静态节点都有一个配有公钥的 enode 入口、IP 地址和端口。其中，公钥由静态节点的私钥推导而来（本例使用的是 `TestNodeKey` 设置）。

启动节点 A（该测试节点的密钥与 Data/static-nodes-baseline.json 中的一致）

```text
./Nethermind.Runner --config baseline --JsonRpc.Enabled true --JsonRpc.Port 8511 --Network.DiscoveryPort 30111 --Network.P2PPort 30111 --KeyStore.TestNodeKey 120102030405060708090a0b0c0d0e0f000102030405060708090a0b0c0d0e0f
```

启动节点 B（该测试节点的密钥与 Data/static-nodes-baseline.json 中的一致）

```text
./Nethermind.Runner --config baseline --JsonRpc.Enabled true --JsonRpc.Port 8522 --Network.DiscoveryPort 30222 --Network.P2PPort 30222 --KeyStore.TestNodeKey 020102030405060708090a0b0c0d0e0f000102030405060708090a0b0c0d0e0f
```

![&#x9996;&#x6B21;&#x8FDE;&#x63A5;&#x4E24;&#x4E2A;&#x8282;&#x70B9;&#x5E76;&#x90E8;&#x7F72; baseline &#x9ED8;&#x514B;&#x5C14;&#x6811;&#x5408;&#x7EA6;](../.gitbook/assets/image%20%2833%29.png)

![&#x5411;&#x4E00;&#x4E2A;&#x8282;&#x70B9;&#x53D1;&#x9001;&#x4EA4;&#x6613;&#xFF0C;&#x8BE5;&#x8282;&#x70B9;&#x4F1A;&#x521B;&#x5EFA;&#x4E00;&#x4E2A;&#x65B0;&#x533A;&#x5757;&#x5E76;&#x5E7F;&#x64AD;&#x5B83;](../.gitbook/assets/image%20%2832%29.png)

![&#x4E0E;&#x65B0;&#x90E8;&#x7F72;&#x7684; Baseline &#x9ED8;&#x514B;&#x5C14;&#x6811;&#x5408;&#x7EA6;&#x4EA4;&#x4E92;&#x7684;&#x793A;&#x4F8B;&#xFF08;&#x5982;&#x9047;&#x9519;&#x8BEF;&#xFF0C;&#x8BF7;&#x53C2;&#x9605;&#x201C;&#x5E38;&#x89C1;&#x95EE;&#x9898;&#x201D;&#xFF09;](../.gitbook/assets/image%20%2834%29.png)

![&#x6B64;&#x5904;&#x6211;&#x4EEC;&#x5C06;&#x4E00;&#x4E9B;&#x6570;&#x636E;&#x6DFB;&#x52A0;&#x5230;&#x4E86;&#x9ED8;&#x514B;&#x5C14;&#x6811;&#x4E0A;&#xFF0C;&#x7136;&#x540E;&#x8BF7;&#x6C42;&#xFF08;&#x65C1;&#x652F;&#x8DEF;&#x5F84;&#x7684;&#xFF09;&#x9ED8;&#x514B;&#x5C14;&#x8BC1;&#x660E;](../.gitbook/assets/image%20%2835%29.png)

![&#x4F7F;&#x7528;&#x9ED8;&#x514B;&#x5C14;&#x6839;&#x548C;&#x65C1;&#x652F;&#x8DEF;&#x5F84;&#x6765;&#x9A8C;&#x8BC1;&#x67D0;&#x4E2A;&#x53F6;&#x8282;&#x70B9;](../.gitbook/assets/image%20%2836%29.png)

下图高度概括了 Baseline 协议的原子化工作流。该流程使用 Provide 的基础设施，并以 Nethermind 节点充当以太坊主网网关，维护 Baseline 默克尔树的数据。

![](../.gitbook/assets/provide_neth%20%281%29%20%281%29%20%284%29%20%284%29.png)

