---
description: Nethermind 客户端当前支持的网络
---

# 网络

默认情况下，Nethermind 在启动时会使用主网配置，但是您也可以添加一个命令行开关，同步下方任何一个网络：

```text
--config [NETWORK_NAME]
```

可选择的网络名称如下

* mainnet 
* goerli
* rinkeby
* ropsten
* xdai
* poacore
* sokol
* volta

### 主网

这是由 ethash PoW 算法保护的主要公共以太坊网络。

```text
Nethermind.Runner --config mainnet
```

{% embed url="https://ethstats.net/" caption="" %}

### Görli \(goerli\)

该测试网基于 Clique PoA 算法，已获得所有主要客户端的支持。区块之间有 15 秒的延迟，由 Goerli 验证者负责打包。

```text
Nethermind.Runner --config goerli
```

{% embed url="https://stats.goerli.net/" %}

{% embed url="https://gitter.im/goerli/testnet" %}

### Ropsten

该测试网基于 ethash PoW 算法，最接近主网，但是容易受到算力攻击。

```text
Nethermind.Runner --config ropsten
```

{% embed url="https://ropsten-stats.parity.io/" %}

### Rinkeby

该测试网基于 Clique PoA 算法，已获得 Geth 和 Nethermind 客户端的支持。区块之间有 15 秒的延迟。

```text
Nethermind.Runner --config rinkeby
```

{% embed url="https://www.rinkeby.io/\#stats" %}

