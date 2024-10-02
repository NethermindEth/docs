---
title: Layer 2 and sidechains
sidebar_label: L2 and sidechains
sidebar_position: 2
---

Running Nethermind on a supported Layer 2 or sidechain network is as simple as specifying the respective configuration file with the [`-c, --config`](../../fundamentals/configuration.md#basic-options) option.

## Optimism

An Optimism node [consists of two clients](https://docs.optimism.io/builders/node-operators/architecture)—`op-node`, a rollup node, analogous to a consensus client in Ethereum, and an execution client paired with a consensus client.

:::warning Important
Before running OP stack, [choose a consensus client](consensus-clients.md#choosing-a-consensus-client) and ensure the JSON-RPC interface is [properly configured](consensus-clients.md#configuring-json-rpc-interface).
:::



To run Nethermind on the OP Mainnet, use the following command:

```bash
nethermind -c op_mainnet --JsonRpc.JwtSecretFile path/to/jwt.hex
```

Below is a sample command to run `op-node` paired with Nethermind:

```bash
op-node \
  --l1=http://localhost:8545 \
  --l1.rpckind=standard \
  --l1.beacon=http://localhost:4000 \
  --l2=http://localhost:8553 \
  --l2.jwt-secret=path/to/jwt.hex \
  --syncmode=execution-layer \
  --network=op-mainnet
```

For the detailed configuration options, see the [`op-node` documentation](https://docs.optimism.io/builders/node-operators/configuration/consensus-config).

:::info
Currently, the Optimism documentation is fucused on `op-geth` as the execution client. If you are using Nethermind as the execution client, you can safely skip `op-geth`-related content.
:::

## Base

## Gnosis

## Energy Web
