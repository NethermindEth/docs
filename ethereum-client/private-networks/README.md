---
description: Nethermind客户端的专用网络
---

# 专用网络

使用Nethermind节点可以配置专用网络 \(专用区块链\)。在建立专用网络之前，需要做出一些决定。其中之一是选择一种将用于保护网络安全的共识协议。

## 共识算法

Nethermind支持以下共识算法：

* ethash \(PoW\)
* AuRa \(PoA\)
* Clique \(PoA\)
* NethDev \(debug / dev\)

#### PoW

在工作量证明共识算法中，某些节点参与了通过解决数学难题来挖掘新区块的竞赛。调整难题的难度\(找到解决方案所需的计算量\)，以使区块链在一定的平均频率出现\(以太坊主网上每15秒出现一次\) 当前PoW是用于保护公共以太坊主网和Ropsten测试网。以太坊中用于PoW的唯一挖掘算法称为ethash，其设计为严格的内存硬性\(请参阅[严格的内存硬性散列函数 ](http://www.hashcash.org/papers/memohash.pdf)\).

#### Clique

Clique是授权证明\(PoA\)共识算法的实现。PoA背后的想法是选择网络中具有真实性的一组节点来创建\(密封\) 新块。在Clique中，这些节点称为signers ，在初始设置后，signers 可以投票将新的signers 添加到组中或删除任何现有的signers 。 目前 Clique受到Geth，Parity，Nethermind和Pantheon的支持，并用于保护Goerli和Rinkeby测试网。

#### AuRa

AuRa是权威证明共识算法的另一种实现。当前仅收到Nethermind和Parity Ethereum客户端的支持。 Aura保护Kovan测试网和POA网络。

#### NethDev\(也称为 Spaceneth\)

NethDev是一种非常简单的共识算法\(简单的来说-它缺乏共识算法\)。NethDev可用于为开发和测试目的设置节点。在NethDev网络上，任何节点都可以创建带有事务的块，只要是有效的以太坊块，其他所有的节点都会接受它。

### 配置

Nethermind使用可用于在Parity中设置专用网络的相同格式chainspec文件。 Nethermind支持chainspec文件的大多数元素：

* 共识引擎及其参数\(Ethash，Clique，AuRa或NethDev之间进行选择\)
* 起源块规范
* EIP 转换
* 初始帐户分配
* 引导节点

目前不支持以下元素：

* 硬编码同步块哈希
* 预编译定义和预编译激活块

在下面可以找到一些用于定义各种以太坊网络的chainspec文件的链接：

* [foundation](https://github.com/NethermindEth/nethermind/blob/09389fc28b37605acc5eaed764d3e973969fe319/src/Nethermind/Chains/foundation.json) - 以太坊公共主网
* [rinkeby](https://github.com/NethermindEth/nethermind/blob/09389fc28b37605acc5eaed764d3e973969fe319/src/Nethermind/Chains/rinkeby.json) - 基于原始集团的测试网
* [goerli](https://github.com/NethermindEth/nethermind/blob/09389fc28b37605acc5eaed764d3e973969fe319/src/Nethermind/Chains/goerli.json) - 基于Clique的新测试网
* [spaceneth](https://github.com/NethermindEth/nethermind/blob/09389fc28b37605acc5eaed764d3e973969fe319/src/Nethermind/Chains/spaceneth.json) - 专用网络示例NethDev

