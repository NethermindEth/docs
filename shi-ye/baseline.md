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

![&#x5230;&#x4E24;&#x4E2A;&#x8282;&#x70B9;&#x7684;&#x521D;&#x59CB;&#x8FDE;&#x63A5;&#x548C; baseline tree &#x534F;&#x5B9A;&#x7684;&#x90E8;&#x7F72;](../.gitbook/assets/image%20%2833%29.png)

![&#x4EA4;&#x6613;&#x53D1;&#x9001;&#x5230;&#x4E00;&#x4E2A;&#x8282;&#x70B9;&#x540E;&#x521B;&#x5EFA;&#x5E76;&#x540C;&#x6B65;&#x65B0;&#x5757;](../.gitbook/assets/image%20%2832%29.png)

![&#x4E0E;&#x65B0;&#x90E8;&#x7F72;&#x7684;Baseline Merkle Tree&#x5408;&#x540C;&#x7684;&#x4EA4;&#x4E92;&#x793A;&#x4F8B;\(&#x5728;&#x56DE;&#x7B54;&#x5E38;&#x89C1;&#x95EE;&#x9898;&#x65F6;&#x4FDD;&#x7559;&#x9519;&#x8BEF;\)](../.gitbook/assets/image%20%2834%29.png)

![&#x8FD9;&#x91CC;&#x6211;&#x4EEC;&#x5411;&#x6811;&#x4E2D;&#x6DFB;&#x52A0;&#x4E00;&#x4E9B;&#x6570;&#x636E;&#xFF0C;&#x5E76;&#x8BF7;&#x6C42;Merkle&#x8BC1;&#x660E;\(&#x540C;&#x7EA7;&#x8DEF;&#x5F84;\)](https://github.com/NethermindEth/docs/tree/58eef1a58fe7ef05a6348eb69b332823f417e020/.gitbook/assets/image2835%29.png)

![&#x6839;&#x636E;&#x6839;&#x548C;&#x540C;&#x7EA7;&#x8DEF;&#x5F84;&#x9A8C;&#x8BC1;&#x53F6;&#x5B50;&#x8282;&#x70B9; .](../.gitbook/assets/image%20%2836%29.png)

以下可以找到 Baseline Protocol Atomic Workflow Step，其中Provide基础结构和Nethermind节点充当以太坊主网的网关，并维护Baseline Merkle trees中的数据。

![](../.gitbook/assets/provide_neth%20%281%29.png)

