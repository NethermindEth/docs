---
title: History expiry
sidebar_position: 9
---

History expiry is a feature set that aims to reduce disk requirement for the node, by removing old historical data. It is covered in [EIP-4444](https://eips.ethereum.org/EIPS/eip-4444).

The goal is to remove the requirement from nodes to store _all_ the historical data, but make sure that the old data is preserved and accessible for anyone that needs it.

:::info
The EIP-4444 is currently in development phase, with the goal to ship initial implementation across all of the clients by May 1, 2025. The agreement is to stop serving pre-Merge history (blocks and receipts).
:::

## Era1 archive import/export

Era1 is an archival format that was initially designed for Consensus Layer for pre-merge history. It is based on [Era spec](https://github.com/status-im/nimbus-eth2/blob/613f4a9a50c9c4bd8568844eaffb3ac15d067e56/docs/e2store.md#era-files) by Nimbus team.

### Specification

An Era1 archive can be expressed like so:

```cfg
   era1 := Version | block-tuple* | other-entries* | Accumulator | BlockIndex
   block-tuple :=  CompressedHeader | CompressedBody | CompressedReceipts | TotalDifficulty
   block-index := starting-number | index | index | index ... | count
```

Headers, bodies and receipts are compressed using the [snappy framing format](https://github.com/google/snappy/blob/main/framing_format.txt).
Additionally, each file contains a block index for fast lookup, and an [Epoch accumulator](https://github.com/ethereum/portal-network-specs/blob/master/history-network.md#execution-chain-history-network) for verification.

The Epoch accumulator can be used to verify the entire archive with accumulators from a trusted source. Additionally it allows a node to download a header with a merkle-proof, that proves it belongs to a certain epoch.

The Epoch accumulator is defined in the portal network spec [here](https://github.com/ethereum/portal-network-specs/blob/master/history-network.md#the-header-accumulator).

### Functionality

There are 2 actions nodes could perform:

- Era1 Export: exports a range of blocks from the node's database.
- Era1 Import: imports a range of blocks from a provided location into the database.

During import, block range before head will be inserted in parallel like old bodies, and after head will be "suggested" like forward sync. So it will process new imported block.

- It will not complete until the blocks are processed, and will pause adding if the processing queue reaches 2000 block.
- An exception to this is if fastsync is enabled and the head is 0, in which case, it will only insert blocks like old bodies.
- Accumulator and content is always verified/checksummed.

There are also 2 ways to execute both actions:

- via CLI flags.
- via Admin RPC endpoints.

### CLI flags

When Era export/import flags are set, on EL restart, the export/import would be executed.
In this case, the execution is blocking, meaning the CLI flags will block application from starting until the process is completed.

#### Import flags

```cfg
--Era.ImportDirectory=/path/to/dir
--Era.From=0
--Era.To=25349536
--Era.TrustedAccumulatorFile=/path/to/dir/accumulators.txt
```

Notes:

- `From`, `To` and `TrustedAccumulatorFile` are optional.
- If range is set to 0;0, it will import everything.
- Will trust the era directory if TrustedAccumulatorFile is not specified.

#### Export flags

```cfg
--Era.ExportDirectory=/path/to/dir
--Era.From=0
--Era.To=25349536
```

Notes:

- `From`, `To` and `TrustedAccumulatorFile` are optional.
- If range is set to 0;0, it will export everything.
- `accumulators.txt` and `checksums.txt` are always created.

### RPC endpoints

RPC does not block but only one import/export can run at the same time. The process uses only 1 thread, so it will be slower than CLI option.
Admin RPC endpoint is required to use below endpoints.

### admin_importHistory

```bash
curl localhost:8545 \
-X POST \
-H "Content-Type: application/json" \
--data '{"jsonrpc": "2.0", "id": 0, "method": "admin_importHistory","params": ["/path/to/dir", 0,25349536, "/path/to/dir/accumulators.txt"]}'
```

### admin_exportHistory

```bash
curl localhost:8545 \
-X POST \
-H "Content-Type: application/json" \
--data '{"jsonrpc": "2.0", "id": 0, "method": "admin_exportHistory","params": ["/path/to/dir", 0,25349536]}'
```
