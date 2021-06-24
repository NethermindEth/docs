---
description: Nethermind 客户端的私有网络
---

# 私有网络

您可以使用 Nethermind 节点来配置私有网络（私有链）。在设置私有网络之前，您需要做一些决定。其中之一就是选择一种共识协议来保护网络的安全。

## 共识算法

Nethermind 支持以下共识算法：

* ethash \(PoW\)
* AuRa \(PoA\)
* Clique \(PoA\)
* NethDev \(debug / dev\)

#### PoW

在工作量证明（PoW）共识算法中，一些节点需要参与竞赛，通过解决数学难题来挖出新的区块。难题的难度（找到答案所需的计算量）会不断调整，将平均出块频率维持在一定水平（在以太坊主网上，平均每 15 秒挖出一个区块）。目前，PoW 被用来保护公共以太坊主网和 Ropsten 测试网。在以太坊上，ethash 是唯一的 PoW 挖矿算法，在设计上具有内存密集型的特点。（请参阅[《内存密集型哈希函数》](http://www.hashcash.org/papers/memohash.pdf)\）。

#### Clique

Clique 是授权证明（PoA）共识算法的实现。PoA 的设计思路是选择网络中的一组节点，授权它们来创建（打包）新的区块。在 Clique 中，这些节点被称为签名者。在初始化设置后，签名者可以通过投票让新的签名者加入，或删除现有签名者。目前，Clique 已经得到 Geth、Parity、Nethermind 和 Pantheon 这些客户端的支持，并应用于 Goerli 和 Rinkeby 测试网。

#### AuRa

AuRa 是授权证明（PoA）共识算法的另一种实现。目前，AuRa 仅获得 Nethermind 和 Parity 客户端的支持，并应用于 Kovan 测试网和 POA Network。

#### NethDev（又称 Spaceneth）

NethDev 是一种非常简单的共识算法（更准确地说，它是一种缺乏共识算法）。NethDev 可用于为开发和测试目的而设置节点。在 NethDev 网络中，任何节点都可以将交易打包成区块。只要是有效的以太坊区块，其它节点都会接受。

### 配置

Nethermind 使用的链规范文件也可以用来设置由 Parity 节点运行的私有网络。Nethermind 支持链规范文件中的大部分元素：

* 共识引擎及其参数（可以在 Ethash、Clique、AuRa 或 NethDev 之间进行选择）
* 创世块规范
* EIP 过渡
* 初始帐户分配
* 引导节点

暂不支持以下元素：

* 硬编码同步区块的哈希值
* 预编译定义和预编译激活块

点击以下链接，即可找到一些用于定义不同以太坊网络的链规范文件：

* [基础网络](https://github.com/NethermindEth/nethermind/blob/09389fc28b37605acc5eaed764d3e973969fe319/src/Nethermind/Chains/foundation.json) ——公共以太坊主网
* [rinkeby](https://github.com/NethermindEth/nethermind/blob/09389fc28b37605acc5eaed764d3e973969fe319/src/Nethermind/Chains/rinkeby.json) ——基于 Clique 的原始测试网
* [goerli](https://github.com/NethermindEth/nethermind/blob/09389fc28b37605acc5eaed764d3e973969fe319/src/Nethermind/Chains/goerli.json) ——基于 Clique 的新测试网
* [spaceneth](https://github.com/NethermindEth/nethermind/blob/09389fc28b37605acc5eaed764d3e973969fe319/src/Nethermind/Chains/spaceneth.json) ——基于 NethDev 的私有网络示例

