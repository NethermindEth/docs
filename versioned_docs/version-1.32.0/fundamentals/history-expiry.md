---
title: History expiry
sidebar_position: 9
---

History expiry is a feature set that aims to reduce storage space requirements for a node by removing old historical data. The goal is to remove the requirement from nodes to store all the historical data but ensure the old data is preserved and accessible for anyone who needs it. For details, see [EIP-4444][eip444].

:::info
History expiry is enabled by default for the networks supporting it. To disable, set [`Sync.AncientBodiesBarrier`](./configuration.md#sync-ancientbodiesbarrier) and [`Sync.AncientReceiptsBarrier`](./configuration.md#sync-ancientreceiptsbarrier) to `0`.
:::

## Era1 format

The pre-Merge historical data is serviced in [Era1](https://github.com/status-im/nimbus-eth2/blob/stable/docs/e2store.md#era-files) format, which is an archival format initially designed for the consensus layer by Nimbus.

An Era1 archive can be expressed as follows:

```
era1 := Version | block-tuple* | other-entries* | Accumulator | BlockIndex
block-tuple :=  CompressedHeader | CompressedBody | CompressedReceipts | TotalDifficulty
block-index := starting-number | index | index | index ... | count
```

Block headers, bodies, and receipts are compressed using the [Snappy framing format](https://github.com/google/snappy/blob/main/framing_format.txt). Each file contains a block index for fast lookup and an [epoch accumulator](https://github.com/ethereum/portal-network-specs/blob/master/history/history-network.md#the-historical-hashes-accumulator) for verification. The epoch accumulator can verify the entire archive with accumulators from a trusted source. It also allows a node to download a block header with a Merkle proof, proving it belongs to a particular epoch.

## Import

Nethermind allows importing of a historical block range from a specified location to the database. During import, the block range before the head will be inserted in parallel like old bodies, and after the head will be "suggested" like forward sync. So, it will process a new imported block.

- Import will not complete until the blocks are processed and will pause adding them if the processing queue reaches 2000 blocks.
- An exception to this is if fast sync is enabled and the head is 0, in which case, it will only insert blocks like old bodies.
- Accumulator and content are always verified/checksummed.

The data can be imported using the following configuration options on Nethermind startup. Note that this is a blocking operation and puts other activities on hold until it is completed:

- [`Era.ImportDirectory`](./configuration.md#era-importdirectory)
- [`Era.From`](./configuration.md#era-from) (optional)
- [`Era.To`](./configuration.md#era-to) (optional)
- [`Era.TrustedAccumulatorFile`](./configuration.md#era-trustedaccumulatorfile) (optional). If not specified, it trusts the import directory.

If both `Era.From` and `Era.To` are set to 0, it imports all blocks.

Alternatively, the data can be imported using the [`admin_importHistory`](../interacting/json-rpc-ns/admin.md#admin_importhistory) JSON-RPC method. This is a non-blocking operation. However, it can be run only one at a time, making it slower than the configuration option.

## Export

Nethermind allows exporting a block range from the database to a specified location. It can be done using the following configuration options on Nethermind startup. Note that this is a blocking operation and puts other activities on hold until it is completed:

- [`Era.ExportDirectory`](./configuration.md#era-exportdirectory)
- [`Era.From`](./configuration.md#era-from) (optional)
- [`Era.To`](./configuration.md#era-to) (optional)

If both `Era.From` and `Era.To` are set to 0, it exports all blocks. It also always creates the `accumulators.txt` and `checksums.txt` files.

Alternatively, the data can be exported using the [`admin_exportHistory`](../interacting/json-rpc-ns/admin.md#admin_exporthistory) JSON-RPC method. This is a non-blocking operation. However, it can be run only one at a time, making it slower than the configuration option.

[eip444]: https://eips.ethereum.org/EIPS/eip-4444
