---
description: Nethermind客户端当前支持的网络
---

# 网络

默认情况下，Nethermind使用主网网络配置启动，但是您也可以添加命令行，开关来同步以下任意网络：：

```text
--config [NETWORK_NAME]
```

网络名称可以是以下任何一个

* mainnet （主网）
* goerli
* rinkeby
* ropsten
* xdai
* poacore
* sokol
* volta

## mainnet （主网）

这是由ethash PoW算法保护的主要公共以太坊网络。

```text
Nethermind.Runner --config mainnet
```

{% embed url="https://ethstats.net/" caption="" %}

## Görli \(goerli\)

这是所有主要客户支持的, 基于Clique-PoA的testnet。由Goerli验证程序密封的块之间有15秒的延迟。

```text
Nethermind.Runner --config goerli
```

{% embed url="https://stats.goerli.net/" caption="" %}

{% embed url="https://gitter.im/goerli/testnet" caption="" %}

## Ropsten

这是一个受ethash PoW算法保护的测试网络，该算法最接近主网 \( mainnet \)，但容易受到基于哈希率的攻击

```text
Nethermind.Runner --config ropsten
```

{% embed url="https://ropsten-stats.parity.io/" caption="" %}

## Rinkeby

这是Geth和Nethermind支持的基于Clique-PoA的testnet。块之间有15秒的延迟。

```text
Nethermind.Runner --config rinkeby
```

{% embed url="https://www.rinkeby.io/\#stats" caption="" %}

