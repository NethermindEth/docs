---
description: Networks currently supported by Nethermind Client
sidebar_position: 5
---

# Networks

By default Nethermind launches with mainnet network configuration, but it is possible to sync other networks by adding a
command line switch:

```
--config [NETWORK_NAME]
```

Network name can be any of the following

* mainnet
* goerli
* sepolia
* gnosis
* poacore
* energyweb
* volta
* kovan (only fast sync and may fail if pWASM transactions appear)

### Mainnet

This is the main Ethereum network. It can be run using config below and this is default setting - mainnet will run
if `--config` is not specified as well.

```
Nethermind.Runner --config mainnet
```

[Ethereum Mainnet Status](https://ethstats.net/)

### Görli (goerli)

This is a Clique-PoA based testnet supported by all major clients. It has 15 seconds between blocks that are sealed by
Goerli validators.

```
Nethermind.Runner --config goerli
```

[Goerli Status](https://stats.goerli.net/)

[Goerli Gitter Space](https://gitter.im/goerli/testnet)


