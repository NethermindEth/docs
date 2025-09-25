---
title: Layer 2 networks
sidebar_position: 2
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

:::info Before you begin

- Running a Layer 2 (L2) node requires access to a Layer (L1) node—either on-premises or an external RPC provider. If you also plan to [run an L1 node with Nethermind](running-node.md#ethereum), note that you will need two Nethermind instances—one for the L1 node and another for the L2 node.
- If both the L1 and L2 nodes run on the same machine, ensure they use different ports and data directories.

:::

## OP Stack

An [Optimism node](https://docs.optimism.io/builders/node-operators/architecture) consists of two parts: a Rollup node, analogous to a consensus client in Ethereum, paired with an L2 execution client. The official Rollup node is `op-node`, developed and maintained by the Optimism Collective. Alternatively, Nethermind is also bundled with its own Rollup node, developed and maintained by the Nethermind team.

### Running Nethermind with `op-node`

:::warning Important
Similar to the L1 node, the L2 instance of Nethermind also requires a [properly configured](consensus-clients.md#configuring-json-rpc-interface) Engine API to communicate to `op-node`.

:::

<Tabs groupId="network">
<TabItem value="op-mainnet" label="OP Mainnet">

:::info Note
For OP Mainnet, the L1 node must be running on Ethereum Mainnet.
:::

To run Nethermind on the OP Mainnet, use the following command:

```bash
nethermind \
  -c op-mainnet \
  --data-dir path/to/data/dir \
  --jsonrpc-jwtsecretfile path/to/jwt.hex
```

Below is a sample command to run `op-node` paired with Nethermind, assuming they both are running on the same machine:

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

</TabItem>
<TabItem value="op-sepolia" label="OP Sepolia">

:::info Note
For OP Sepolia, the L1 node must be running on Sepolia.
:::

To run Nethermind on the OP Sepolia, use the following command:

```bash
nethermind \
  -c op-sepolia \
  --data-dir path/to/data/dir \
  --jsonrpc-jwtsecretfile path/to/jwt.hex
```

Below is a sample command to run `op-node` paired with Nethermind, assuming they both are running on the same machine:

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
  --network=op-sepolia
```

</TabItem>
</Tabs>

For available settings, see [`op-node` configuration options](https://docs.optimism.io/builders/node-operators/configuration/consensus-config).

### Running Nethermind with the built-in Rollup node

Instead of running a separate `op-node` instance alongside Nethermind, it's enough to run only Nethermind with Rollup node enabled. That simplifies the setup and configuration, and just like the `op-node`, Nethermind will need to know about an L1 RPC and Beacon nodes.

<Tabs groupId="network">
<TabItem value="op-mainnet" label="OP Mainnet">

:::info Note
For OP Mainnet, the L1 node must be running on Ethereum Mainnet.
:::

To run Nethermind on the OP Mainnet using the built-in Rollup node, use the following command:

```bash
export L1_RPC_URL=... # The URL of the L1 node RPC interface
export L1_BEACON_URL=... # The URL of the L1 node Beacon interface

nethermind \
  -c op-mainnet \
  --data-dir path/to/data/dir \
  --jsonrpc-jwtsecretfile path/to/jwt.hex \
  --optimism-clenabled \
  --optimism-l1ethapiendpoint $L1_RPC_URL \
  --optimism-l1beaconapiendpoint $L1_BEACON_URL
```

</TabItem>
<TabItem value="op-sepolia" label="OP Sepolia">

:::info Note
For OP Sepolia, the L1 node must be running on Sepolia.
:::

To run Nethermind on the OP Sepolia using the built-in Rollup node, use the following command:

```bash
nethermind \
  -c op-sepolia \
  --data-dir path/to/data/dir \
  --jsonrpc-jwtsecretfile path/to/jwt.hex \
  --optimism-clenabled \
  --optimism-l1ethapiendpoint $L1_RPC_URL \
  --optimism-l1beaconapiendpoint $L1_BEACON_URL
```

</TabItem>
</Tabs>

**See also**

- [Optimism configuration](../../fundamentals/configuration.md#optimism)
- [Run a node in the Superchain](https://docs.optimism.io/builders/node-operators/rollup-node)

## Taiko

A [Taiko node](https://docs.taiko.xyz/taiko-alethia-protocol/taiko-alethia-nodes) consists of two parts: taiko-client, analogous to a consensus client in Ethereum paired with an L2 execution client.

:::warning Important
Similar to the L1 node, the L2 instance of Nethermind also requires a [properly configured](consensus-clients.md#configuring-json-rpc-interface) Engine API to communicate to taiko-client.
:::

<Tabs groupId="network">
<TabItem value="taiko-alethia" label="Taiko Alethia">

:::info Note
For Taiko Alethia, the L1 node must be running on Ethereum Mainnet.
:::

To run Nethermind on Taiko Alethia, use the following command:

```bash
nethermind \
  -c taiko-alethia \
  --data-dir path/to/data/dir \
  --jsonrpc-jwtsecretfile path/to/jwt.hex
```

Below is a sample command to run taiko-client paired with Nethermind, assuming they both are running on the same machine:

```bash
export L1_WS_URL=... # The URL of the L1 node WebSocket interface
export L1_BEACON_URL=... # The URL of the L1 node Beacon interface

taiko-client driver \
  --l1.ws $L1_WS_URL \
  --l1.beacon $L1_BEACON_URL \
  --l2.ws ws://localhost:8545 \
  --taikoL1 0x06a9Ab27c7e2255df1815E6CC0168d7755Feb19a \
  --taikoL2 0x1670000000000000000000000000000000010001 \
  --jwtSecret path/to/jwt.hex \
  --l2.auth http://localhost:8551 \
  --verbosity 3 \
  --p2p.sync \
  --p2p.checkPointSyncUrl https://rpc.mainnet.taiko.xyz
```

</TabItem>
<TabItem value="taiko-hekla" label="Taiko Hekla">

:::info Note
For Taiko Hekla, the L1 node must be running on Holesky.
:::

To run Nethermind on Taiko Hekla, use the following command:

```bash
nethermind \
  -c taiko-hekla \
  --data-dir path/to/data/dir \
  --jsonrpc-jwtsecretfile path/to/jwt.hex
```

Below is a sample command to run taiko-client paired with Nethermind, assuming they both are running on the same machine:

```bash
export L1_WS_URL=... # The URL of the L1 node WebSocket interface
export L1_BEACON_URL=... # The URL of the L1 node Beacon interface

taiko-client driver \
  --l1.ws $L1_WS_URL \
  --l1.beacon $L1_BEACON_URL \
  --l2.ws ws://localhost:8545 \
  --taikoL1 0x79C9109b764609df928d16fC4a91e9081F7e87DB \
  --taikoL2 0x1670090000000000000000000000000000010001 \
  --jwtSecret path/to/jwt.hex \
  --l2.auth http://localhost:8551 \
  --verbosity 3 \
  --p2p.sync \
  --p2p.checkPointSyncUrl https://rpc.hekla.taiko.xyz
```

</TabItem>
</Tabs>

For more information about the taiko-client, see its [README](https://github.com/taikoxyz/taiko-mono/tree/main/packages/taiko-client#readme).

**See also**

- [Run a Taiko proposer](https://docs.taiko.xyz/guides/node-operators/enable-a-proposer/)
