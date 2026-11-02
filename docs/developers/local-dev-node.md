---
title: Local development node
description: Run one Nethermind node with the Spaceneth configuration for local development. No consensus client and no peers are necessary.
sidebar_position: 1
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Use the `spaceneth` configuration to run one Nethermind node on your computer for development and tests.
This mode is similar to the `--dev` mode of other execution clients:

- You do not need a consensus client.
- The node does not connect to peers and does not sync.
- The node makes a new block when a transaction is in the transaction pool.
- Ten development accounts have funds, and the node keeps their keys.

To run a multi-node private network with consensus clients, see [Private networks](../fundamentals/private-networks.md).

## Start the node

<Tabs groupId="install">
<TabItem value="docker" label="Docker">

```bash
docker run -it -p 127.0.0.1:8545:8545 \
  nethermind/nethermind \
  -c spaceneth \
  --jsonrpc-host 0.0.0.0
```

The configuration binds the JSON-RPC server to `127.0.0.1`.
In a container, the `--jsonrpc-host 0.0.0.0` option is necessary to make the JSON-RPC server available from the host.
The `127.0.0.1:` prefix of the `-p` option makes the port available only on your computer, not on your network.

</TabItem>
<TabItem value="standalone" label="Standalone">

```bash
nethermind \
  -c spaceneth \
  --data-dir path/to/data/dir
```

Use a data directory that you can write to. The node keeps its logs and keystore in this directory.
For more info, see [`--data-dir`](../fundamentals/configuration.md#data-dir).

</TabItem>
</Tabs>

The JSON-RPC server is at `http://localhost:8545`.

:::warning
Use this mode only for development. The development accounts have known private keys, and the JSON-RPC server can sign transactions for them.
:::

## Default settings

- **Chain ID:** `99` (`0x63`)
- **Hard fork rules:** Prague from the genesis block
- **Block gas limit:** `16777216`
- **JSON-RPC namespaces:** `admin`, `debug`, `eth`, `evm`, `health`, `net`, `parity`, `personal`, `proof`, `subscribe`, `trace`, `txpool`, `web3`
- **Transaction pool size:** 128 transactions

To change these settings, use the [configuration options](../fundamentals/configuration.md). For example, use [`--jsonrpc-enabledmodules`](../fundamentals/configuration.md#jsonrpc-enabledmodules) to set the JSON-RPC namespaces.

## Development accounts

The genesis block gives 1,000,000 ETH to each of the accounts below.
The node keeps these accounts unlocked, and `eth_accounts` returns them.
Thus, you can send transactions from them with `eth_sendTransaction`.
The private keys are the numbers from 1 to 10 as 32-byte values.

```text
Address:     0x7e5f4552091a69125d5dfcb7b8c2659029395bdf
Private key: 0x0000000000000000000000000000000000000000000000000000000000000001

Address:     0x2b5ad5c4795c026514f8317c7a215e218dccd6cf
Private key: 0x0000000000000000000000000000000000000000000000000000000000000002

Address:     0x6813eb9362372eef6200f3b1dbc3f819671cba69
Private key: 0x0000000000000000000000000000000000000000000000000000000000000003

Address:     0x1eff47bc3a10a45d4b230b5d10e37751fe6aa718
Private key: 0x0000000000000000000000000000000000000000000000000000000000000004

Address:     0xe1ab8145f7e55dc933d51a18c793f901a3a0b276
Private key: 0x0000000000000000000000000000000000000000000000000000000000000005

Address:     0xe57bfe9f44b819898f47bf37e5af72a0783e1141
Private key: 0x0000000000000000000000000000000000000000000000000000000000000006

Address:     0xd41c057fd1c78805aac12b0a94a405c0461a6fbb
Private key: 0x0000000000000000000000000000000000000000000000000000000000000007

Address:     0xf1f6619b38a98d6de0800f1defc0a6399eb6d30c
Private key: 0x0000000000000000000000000000000000000000000000000000000000000008

Address:     0xf7edc8fa1ecc32967f827c9043fcae6ba73afa5c
Private key: 0x0000000000000000000000000000000000000000000000000000000000000009

Address:     0x4cceba2d7d2b4fdce4304d3e09a1fea9fbeb1528
Private key: 0x000000000000000000000000000000000000000000000000000000000000000a
```

## Block production

The node checks the transaction pool every 200 ms.
If the pool has a transaction, the node makes a new block with that transaction.
Each block contains one transaction only.
If the pool is empty, the node does not make blocks.

To make an empty block, call `evm_mine`:

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","id":1,"method":"evm_mine","params":[]}'
```

## Send a transaction

With [Foundry](https://getfoundry.sh) `cast`, sign the transaction with a development key:

```bash
cast send \
  --rpc-url http://localhost:8545 \
  --private-key 0x0000000000000000000000000000000000000000000000000000000000000001 \
  0x2b5ad5c4795c026514f8317c7a215e218dccd6cf \
  --value 1ether
```

With `curl`, let the node sign the transaction with `eth_sendTransaction`:

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "eth_sendTransaction",
    "params": [{
      "from": "0x7e5f4552091a69125d5dfcb7b8c2659029395bdf",
      "to": "0x2b5ad5c4795c026514f8317c7a215e218dccd6cf",
      "value": "0xde0b6b3a7640000",
      "gas": "0x5208",
      "maxFeePerGas": "0x3b9aca00",
      "maxPriorityFeePerGas": "0x1"
    }]
  }'
```

:::note
With `eth_sendTransaction`, always set the `gas` and fee fields:

- If `gas` is not set, the node rejects the transaction because its gas limit is more than the block gas limit.
- If the fee fields are not set, the fee is 0. The transaction stays in the pool because its fee is less than the base fee.

:::

## Data persistence

The `spaceneth` configuration keeps all data in memory.
When the node stops, it loses all blocks and state. On the next start, the chain starts again from the genesis block.

To keep the data between restarts, use the `spaceneth_persistent` configuration.
It has the same chain and accounts, but it keeps the database on the disk in the `spaceneth_db` directory of the data directory.
It also does not enable the `health` JSON-RPC namespace.

For example, with Docker and a named volume:

```bash
docker run -it -p 127.0.0.1:8545:8545 \
  -v nethermind-dev:/data \
  nethermind/nethermind \
  -c spaceneth_persistent \
  --data-dir /data \
  --jsonrpc-host 0.0.0.0
```

To start a new chain, delete the `spaceneth_db` directory.
With the Docker example above, delete the volume with `docker volume rm nethermind-dev`.

## Limitations

- The node has no peers. You cannot connect other nodes to it.
- Blob transactions are not supported.
- The chain uses the Prague rules. Osaka (Fusaka) is not enabled.
