---
title: Running a node
sidebar_position: 0
---

:::info Before you begin

- Ensure Nethermind is installed according to the [installation guide](../../get-started/installing-nethermind.md).
- Check out the [security considerations](../../fundamentals/security.md) before using Nethermind for critical operations.

:::

In addition to the foundational Layer 1 networks, Nethermind supports various Layer 2 networks and sidechains out of the box. Running Nethermind on a supported network is as simple as specifying the respective [configuration file](../../fundamentals/configuration.md#configuration-file) with the [`-c, --config`](../../fundamentals/configuration.md#config) option.

:::tip
We urge you to always [explicitly specify](../../fundamentals/configuration.md#datadir) Nethermind's data directory outside of the Nethermind installation directory to avoid data loss during upgrades or reinstallation. The data directory must be on a disk with sufficient space and read/write permissions.
:::

## Ethereum

**Supported networks**

- [Mainnet](https://ethereum.org/en/developers/docs/networks/#ethereum-mainnet) - configurations: `mainnet` `mainnet_archive`
- [Holesky](https://github.com/eth-clients/holesky) (testnet) - configurations: `holesky` `holesky_archive`
- [Sepolia](https://github.com/eth-clients/sepolia) (testnet) - configurations: `sepolia` `sepolia_archive`

:::tip
We highly recommend checking out the [Spin up your own Ethereum node](https://ethereum.org/en/developers/docs/nodes-and-clients/run-a-node/) guide by the Ethereum Foundation.
:::

:::warning Important
A [consensus client](consensus-clients.md) of your choice must be running before you start Nethermind.
:::

For instance, to launch the client with the default configuration for the Mainnet and custom data directory, run:

```bash
nethermind \
  -c mainnet \
  --data-dir path/to/data/dir \
  --jsonrpc-jwtsecretfile path/to/jwt.hex
```

For more info about configuring the JWT secret, see [Configuring JSON-RPC interface](./consensus-clients.md#configuring-json-rpc-interface).

For archive (aka full) nodes, Nethermind provides separate configuration files prefixed with `_archive`. Thus, to run Nethermind on the Mainnet as an archive node, simply change `mainnet` to `mainnet_archive` in the above command as follows:

```bash
nethermind \
  -c mainnet_archive \
  --data-dir path/to/data/dir \
  --jsonrpc-jwtsecretfile path/to/jwt.hex
```

Archive nodes are generally more resource-demanding. If you intend to run one, we recommend checking out the [hardware requirements](../system-requirements.md#hardware-requirements).

## Gnosis Chain

**Supported networks**

- [Gnosis](https://docs.gnosischain.com/about/networks/mainnet) - configurations: `gnosis` `gnosis_archive`
- [Chiado](https://docs.gnosischain.com/about/networks/chiado) (testnet) - configurations: `chiado` `chiado_archive`

To run Nethermind on the Gnosis Chain, see the [Gnosis Chain documentation](https://docs.gnosischain.com/node).

## OP Stack

**Supported networks**

- Optimism
  - [OP Mainnet](https://docs.optimism.io/chain/networks#op-mainnet) - configurations: `op-mainnet` `op-mainnet_archive`
  - [OP Sepolia](https://docs.optimism.io/chain/networks#op-sepolia) (testnet) - configurations: `op-sepolia` `op-sepolia_archive`
- Base
  - [Base Mainnet](https://docs.base.org/network-information/#base-mainnet) - configurations: `base-mainnet` `base-mainnet_archive`
  - [Base Sepolia](https://docs.base.org/network-information/#base-testnet-sepolia) (testnet) - configurations: `base-sepolia` `base-sepolia_archive`

To run Nethermind on an OP Stack network, see [Layer 2 networks](l2-networks.md#op-stack).

## Taiko

**Supported networks**

- [Taiko Mainnet](https://docs.taiko.xyz/network-reference/rpc-configuration#taiko-mainnet) - configurations: `taiko-mainnet` `taiko-mainnet_archive`
- [Taiko Hekla](https://docs.taiko.xyz/network-reference/rpc-configuration#taiko-hekla) (testnet) - configurations: `taiko-hekla` `taiko-hekla_archive`

To run Nethermind on Taiko, see [Layer 2 networks](l2-networks.md#taiko).

## Linea

**Supported networks**

- [Linea Mainnet](https://docs.linea.build/get-started/build/network-info) - configurations: `linea-mainnet` `linea-mainnet_archive`
- [Linea Sepolia](https://docs.linea.build/get-started/build/network-info) (testnet) - configurations: `linea-sepolia` `linea-sepolia_archive`

To run Nethermind on Linea, use the respective network configuration. For instance:

```bash
nethermind \
  -c linea-mainnet \
  --data-dir path/to/data/dir
```

For more info about running a Linea node, see the [Linea documentation](https://docs.linea.build/get-started/how-to/run-a-node).

## Energy Web Chain

**Supported networks**

- [Energy Web](https://energy-web-foundation.gitbook.io/energy-web/ew-dos-technology-components-2023/trust-layer-energy-web-chain) - configurations: `energyweb` `energyweb_archive`
- [Volta](https://energy-web-foundation.gitbook.io/energy-web/ew-dos-technology-components-2023/trust-layer-energy-web-chain/ewc-guides-and-tutorials/testnet-and-mainnet#developing-on-volta-test-network) (testnet) - configurations: `volta` `volta_archive`

:::info
As the Energy Web Chain is an Aura-based network, running a node does not require a consensus client.
:::

To run Nethermind on the Energy Web Chain, see the [Energy Web Chain documentation](https://energy-web-foundation.gitbook.io/energy-web/ew-dos-technology-components-2023/trust-layer-energy-web-chain/ewc-guides-and-tutorials/running-a-local-node).

