---
title: Running a node
sidebar_position: 0
---

:::info Before you begin

- Ensure Nethermind is installed according to the [installation guide](../../get-started/installing-nethermind.md).
- Check out the [security considerations](../../fundamentals/security.md) before using Nethermind for critical operations.

:::

Besides the foundational Layer 1 networks, Nethermind supports various Layer 2 networks and sidechains out of the box. Running Nethermind on a supported network is as simple as specifying the respective [configuration file](../../fundamentals/configuration.md#configuration-file) with the [`-c, --config`](../../fundamentals/configuration.md#config) option.

## Ethereum

**Supported networks**

- [Mainnet](https://ethereum.org/en/developers/docs/networks/#ethereum-mainnet)
- [Holesky](https://github.com/eth-clients/holesky) (testnet)
- [Sepolia](https://github.com/eth-clients/sepolia) (testnet)

:::tip
We highly recommend checking out the [Spin up your own Ethereum node](https://ethereum.org/en/developers/docs/nodes-and-clients/run-a-node/) guide by Ethereum Foundation.
:::

:::warning Important
A [consensus client](consensus-clients.md) of your choice must be running before you start Nethermind.
:::

For instance, to launch the client with the default configuration for the Mainnet and custom data directory, run:

```bash
nethermind \
  -c mainnet \
  -dd path/to/data/dir \
  --JsonRpc.JwtSecretFile path/to/jwt.hex
```

For more info about configuring the JWT secret, see [Configuring JSON-RPC interface](./consensus-clients.md#configuring-json-rpc-interface).

For archive (aka full) nodes, Nethermind provides separate configuration files prefixed with `_archive`. Thus, to run Nethermind on the Mainnet as an archive node, simply change `mainnet` to `mainnet_archive` in the above command as follows:

```bash
nethermind \
  -c mainnet_archive \
  -dd path/to/data/dir \
  --JsonRpc.JwtSecretFile path/to/jwt.hex
```

Generally, archive nodes are more resource-demanding. We recommend checking out the [hardware requirements](../system-requirements.md#hardware-requirements) if you intend to run an archive node.

If you intend to run Nethermind as a validator, see [Validators](../../validators/validators.md).

## OP Stack

**Supported networks**

- Optimism
  - [OP Mainnet](https://docs.optimism.io/chain/networks#op-mainnet)
  - [OP Sepolia](https://docs.optimism.io/chain/networks#op-sepolia) (testnet)
- Base
  - [Base Mainnet](https://docs.base.org/network-information/#base-mainnet)
  - [Base Sepolia](https://docs.base.org/network-information/#base-testnet-sepolia) (testnet)

To run Nethermind on an OP Stack network, see [Layer 2 networks](l2-networks.md#op-stack).

## Gnosis Chain

**Supported networks**

- [Gnosis](https://docs.gnosischain.com/about/networks/mainnet)
- [Chiado](https://docs.gnosischain.com/about/networks/chiado) (testnet)

To run Nethermind on the Gnosis Chain, see the [Gnosis Chain documentation](https://docs.gnosischain.com/node).

## Energy Web Chain

**Supported networks**

- [Energy Web](https://energy-web-foundation.gitbook.io/energy-web/ew-dos-technology-components-2023/trust-layer-energy-web-chain)
- [Volta](https://energy-web-foundation.gitbook.io/energy-web/ew-dos-technology-components-2023/trust-layer-energy-web-chain/ewc-guides-and-tutorials/testnet-and-mainnet#developing-on-volta-test-network) (testnet)

:::info
As the Energy Web Chain is an Aura-based network, running a node does not require a consensus client.
:::

To run Nethermind on the Energy Web Chain, see the [Energy Web Chain documentation](https://energy-web-foundation.gitbook.io/energy-web/ew-dos-technology-components-2023/trust-layer-energy-web-chain/ewc-guides-and-tutorials/running-a-local-node).
