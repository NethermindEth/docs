---
description: Networks currently supported by Nethermind Client
---

# Networks

By default Nethermind launches with mainnet network configuration but you can sync any of the below networks by adding a command line switch:

```text
--config [NETWORK_NAME]
```

Network name can be any of the following

* mainnet
* goerli
* rinkeby
* ropsten
* xdai
* poacore
* sokol
* energyweb
* volta
* kovan \(only fast sync and may fail if pWASM transactions appear\)

### Mainnet

This is the main public Ethereum network secured by the ethash PoW algorithm.

```text
Nethermind.Runner --config mainnet
```

{% embed url="https://ethstats.net/" caption="" %}

### Görli \(goerli\)

This is a Clique-PoA based testnet supported by all major clients. It has a 15 seconds delay between blocks that are sealed by Goerli validators.

```text
Nethermind.Runner --config goerli
```

{% embed url="https://stats.goerli.net/" %}

{% embed url="https://gitter.im/goerli/testnet" %}

### Ropsten

This is a test network secured by ethash PoW algorithm which resembles mainnet most closely but is prone to hashrate-based attacks.

```text
Nethermind.Runner --config ropsten
```

{% embed url="https://ropsten-stats.parity.io/" %}

### Rinkeby

This is a Clique-PoA based testnet supported by Geth and Nethermind. It has a 15 seconds delay between blocks.

```text
Nethermind.Runner --config rinkeby
```

{% embed url="https://www.rinkeby.io/\#stats" %}

