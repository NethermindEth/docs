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

A [Taiko node](https://docs.taiko.xyz/taiko-alethia-protocol/protocol-architecture/taiko-alethia-nodes) consists of two parts: [taiko-client](https://github.com/taikoxyz/taiko-mono/tree/main/packages/taiko-client#readme), analogous to a consensus client in Ethereum paired with an L2 execution client.

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
  --l2.auth http://localhost:8551 \
  --taikoInbox 0x06a9Ab27c7e2255df1815E6CC0168d7755Feb19a \
  --taikoAnchor 0x1670000000000000000000000000000000010001 \
  --jwtSecret path/to/jwt.hex \
  --p2p.sync \
  --p2p.checkPointSyncUrl https://rpc.mainnet.taiko.xyz
```

For more information, see [Run a node for Taiko Alethia](https://docs.taiko.xyz/guides/node-operators/run-a-node-for-taiko-alethia/).

</TabItem>
<TabItem value="taiko-hoodi" label="Taiko Hoodi">

:::info Note
For Taiko Hoodi, the L1 node must be running on Hoodi.
:::

To run Nethermind on Taiko Hoodi, use the following command:

```bash
nethermind \
  -c taiko-hoodi \
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
  --l2.auth http://localhost:8551 \
  --taikoInbox 0x50A576435E2D9c179124D657d804eb56A10b6999 \
  --taikoAnchor 0x1670130000000000000000000000000000010001 \
  --jwtSecret path/to/jwt.hex \
  --p2p.sync \
  --p2p.checkPointSyncUrl https://rpc.hoodi.taiko.xyz
```

For more information, see [Run a node for Taiko Hoodi](https://docs.taiko.xyz/guides/node-operators/run-a-node-for-taiko-hoodi/).

</TabItem>
</Tabs>

**See also**

- [Enable a prover](https://docs.taiko.xyz/guides/node-operators/enable-a-prover/)

## Arbitrum

An [Arbitrum node](https://docs.arbitrum.io/run-arbitrum-node/overview) consists of two parts: [Nitro](https://github.com/OffchainLabs/nitro), the rollup node developed and maintained by Offchain Labs, paired with an L2 execution client. Nitro drives sequencing and validation; Nethermind owns the execution layer - chain state, EVM and Stylus VM, and user-facing JSON-RPC. The two communicate over a JWT-authenticated Engine API.

The supported launch path is Docker Compose, which runs Nethermind and Nitro side by side with JWT authentication wired up automatically. The compose file and `.env.example` template live in the [`nethermind-arbitrum` repository](https://github.com/NethermindEth/nethermind-arbitrum).

:::warning Important
Similar to the L1 node, the L2 instance of Nethermind also requires a [properly configured](consensus-clients.md#configuring-json-rpc-interface) Engine API to communicate with Nitro. The shipped Docker Compose wires JWT authentication up automatically; if you run Nethermind outside Docker Compose you must configure the JWT secret yourself.
:::

### Prerequisites

- Docker and Docker Compose.
- An Ethereum L1 RPC endpoint with archive access for blob data, and an L1 Beacon API endpoint. Nitro reads L1 batches from these. If you don't already run an L1 node, the Arbitrum docs list [recommended Arbitrum node providers](https://docs.arbitrum.io/build-decentralized-apps/reference/node-providers) that expose both.
- Disk and memory budget. Mainnet pruned: ~2 TB disk, 24+ GiB RAM. Mainnet archive: 4+ TB. Sepolia is roughly half the size.
- A modern host with a fast NVMe drive - RocksDB is I/O-sensitive.

### Setup

1. **Clone the repository.**

   ```bash
   git clone https://github.com/NethermindEth/nethermind-arbitrum.git
   cd nethermind-arbitrum
   ```

2. **Copy the environment template.**

   ```bash
   cp .env.example .env
   ```

3. **Configure `.env`** with your L1 endpoints and target network:

   <Tabs groupId="network">
   <TabItem value="arb-mainnet" label="Arbitrum One">

   :::info Note
   For Arbitrum One, the L1 node must be running on Ethereum Mainnet.
   :::

   ```bash
   PARENT_CHAIN_RPC_URL=https://your-l1-rpc.example.com
   PARENT_CHAIN_BEACON_URL=https://your-l1-beacon.example.com

   NETWORK=arbitrum-mainnet
   CHAIN_ID=42161
   ```

   </TabItem>
   <TabItem value="arb-sepolia" label="Arbitrum Sepolia">

   :::info Note
   For Arbitrum Sepolia, the L1 node must be running on Sepolia.
   :::

   ```bash
   PARENT_CHAIN_RPC_URL=https://your-l1-rpc.example.com
   PARENT_CHAIN_BEACON_URL=https://your-l1-beacon.example.com

   NETWORK=arbitrum-sepolia
   CHAIN_ID=421614
   ```

   </TabItem>
   </Tabs>

   For the full list of shipped configs (archive variants, validator profiles, local development), see the [Arbitrum config inventory](../../fundamentals/configuration.md#arbitrum-config-inventory).

4. **Start the stack.**

   ```bash
   docker compose up -d
   ```

   On startup, Nethermind auto-generates a JWT secret at `./nethermind-data/jwt.hex` if one is missing, then exposes the Engine API on port `20551` and the public RPC on port `20545`. Nitro waits for Nethermind's TCP healthcheck on port `20551`, then mounts the JWT secret read-only and connects.

### Verification

The node is healthy when:

- Nethermind's logs stop printing `Waiting for connection from consensus layer...` (this happens once the first message from Nitro arrives).
- Block height advances in steady state (Arbitrum's 250 ms slot time).

Sample checks against the public RPC port:

```bash
# Block height
curl -s http://localhost:20545 -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'

# Sync state (false = synced; otherwise sync object)
curl -s http://localhost:20545 -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","method":"eth_syncing","params":[],"id":1}'

# Chain ID - should match the CHAIN_ID set in .env
curl -s http://localhost:20545 -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","method":"eth_chainId","params":[],"id":1}'
```

### Overriding settings

To override individual settings without editing the JSON config, pass `NETHERMIND_*` environment variables or extra CLI flags through the `command:` section of `docker-compose.yml`. For example, to enable [block-hash verification](../../fundamentals/configuration.md#verifyblockhash-enabled):

```yaml
services:
  nethermind-arbitrum:
    environment:
      NETHERMIND_VERIFYBLOCKHASHCONFIG_ENABLED: "true"
      NETHERMIND_VERIFYBLOCKHASHCONFIG_VERIFYEVERYNBLOCKS: 10000
```

### Going further

The pages above cover the default external-execution setup. For deeper topics, refer to the [`nethermind-arbitrum` repository documentation](https://github.com/NethermindEth/nethermind-arbitrum/tree/0.2.0/docs):

- [Architecture](https://github.com/NethermindEth/nethermind-arbitrum/blob/0.2.0/docs/architecture.md) - operational mental model of the Nitro/Nethermind boundary, block production, validation, and sequencer flows.
- [External execution role](https://github.com/NethermindEth/nethermind-arbitrum/blob/0.2.0/docs/roles/external-execution.md) - production hardening for a regular node.
- [Validator role](https://github.com/NethermindEth/nethermind-arbitrum/blob/0.2.0/docs/roles/validator.md) (Beta) - stateless validation against the Arbitrum protocol.
- [Sequencer role](https://github.com/NethermindEth/nethermind-arbitrum/blob/0.2.0/docs/roles/sequencer.md) (Experimental) - Nethermind as a block-producing sequencer with Timeboost express-lane support.
- [Troubleshooting](https://github.com/NethermindEth/nethermind-arbitrum/blob/0.2.0/docs/troubleshooting.md) - symptom-first index covering FD exhaustion, JWT mismatch, sync stalls, and Stylus binary incompatibilities.
- [RPC API reference](https://github.com/NethermindEth/nethermind-arbitrum/blob/0.2.0/docs/rpc-api.md) - `nitroexecution` and `arbitrum` JSON-RPC namespaces (contributor-facing).
