---
title: Layer 2 networks
sidebar_position: 2
---

## OP Stack

An Optimism node [consists of two nodes](https://docs.optimism.io/builders/node-operators/architecture)—op-node, a rollup node, analogous to a consensus client in Ethereum, paired with a Layer 2 (L2) execution client, and a Layer 1 (L1) node of a pair of execution and consensus clients.

:::info Before you begin
- Running the OP stack requires running two instances of Nethermind—one for the L1 node and another for the L2 node, replacing op-geth.
- Depending on which OP Stack network you want to run on, the L1 node must be configured respectively. For instance, for OP Mainnet, the L1 node must run on Ethereum Mainnet. For OP Sepolia, on Sepolia.
- Ensure your L1 node is up and running on the respective network before running the OP Stack. See [Running a node on Ethereum](running-node.md#ethereum).
:::

:::warning Important
- Similar to the L1 node, the L2 instance of Nethermind also requires a [properly configured](consensus-clients.md#configuring-json-rpc-interface) Engine API to communicate to op-node.
- If both the L1 and L2 nodes run on the same machine, ensure they use different ports and data directories.
:::

To run Nethermind on the OP Mainnet, use the following command:

```bash
nethermind -c op_mainnet --JsonRpc.JwtSecretFile path/to/jwt.hex
```

Below is a sample command to run `op-node` paired with Nethermind:

```bash
export L1_RPC_URL=... # The URL of the L1 node RPC interface
export L1_BEACON_URL=... # The URL of the L1 node Beacon interface

op-node \
  --l1=$L1_RPC_URL \
  --l1.rpckind=standard \
  --l1.beacon=$L1_BEACON_URL \
  --l2=http://localhost:8551 \
  --l2.jwt-secret=path/to/jwt.hex \
  --syncmode=execution-layer \
  --network=op-mainnet
```

For the full list of the configuration options, see the [op-node documentation](https://docs.optimism.io/builders/node-operators/configuration/consensus-config).
