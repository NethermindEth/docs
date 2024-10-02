---
title: Running a node
sidebar_position: 0
---

Before spinning up your node, we highly recommend checking out the [excellent guide](https://ethereum.org/en/developers/docs/nodes-and-clients/run-a-node/) by Ethereum Foundation.

## Prerequisites

- Ensure Nethermind is installed according to the [installation guide](../../get-started/installing-nethermind.md).
- A [consensus client](consensus-clients.md) of your choice must be running before you start Nethermind.
- Check out the [security considerations](../../fundamentals/security.md) before using Nethermind for critical operations.


## Running Nethermind {#running}

Nethermind is mainly controlled by command line options (aka arguments or flags).

The full list of options can be displayed by running:

```bash
nethermind -h
```

For instance, to launch the client with the default configuration for the Mainnet and custom data directory, run:

```bash
nethermind -c mainnet -dd path/to/data/dir
```

For detailed info about the available configuration options, see [Configuration](../../fundamentals/configuration.md).

### Supported networks

To run Nethermind on a specific network, use the [`-c, --config`](../../fundamentals/configuration.md#basic-options) command line option. Currently, the following networks are supported out of the box:

- **Ethereum**
  - [Mainnet](https://ethereum.org/en/developers/docs/networks/#ethereum-mainnet)
  - [Holesky](https://github.com/eth-clients/holesky) (testnet)
  - [Sepolia](https://github.com/eth-clients/sepolia) (testnet)
- **Base**
  - [Base Mainnet](https://docs.base.org/network-information/#base-mainnet)
  - [Base Sepolia](https://docs.base.org/network-information/#base-testnet-sepolia) (testnet)
- **Energy Web Chain**
  - [Energy Web](https://energy-web-foundation.gitbook.io/energy-web/ew-dos-technology-components-2023/trust-layer-energy-web-chain)
  - [Volta](https://energy-web-foundation.gitbook.io/energy-web/ew-dos-technology-components-2023/trust-layer-energy-web-chain/ewc-guides-and-tutorials/testnet-and-mainnet#developing-on-volta-test-network) (testnet)
- **Gnosis Chain**
  - [Gnosis](https://docs.gnosischain.com/about/networks/mainnet)
  - [Chiado](https://docs.gnosischain.com/about/networks/chiado) (testnet)
- **Optimism**
  - [OP Mainnet](https://docs.optimism.io/chain/networks#op-mainnet)
  - [OP Sepolia](https://docs.optimism.io/chain/networks#op-sepolia) (testnet)
