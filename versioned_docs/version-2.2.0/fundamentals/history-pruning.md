---
title: History pruning
sidebar_position: 7
---

History pruning is a feature set that aims to reduce storage space requirements for a node by removing old historical data. The goal is to remove the requirement from nodes to store all the historical data but ensure the old data is preserved and accessible for anyone who needs it. For details, see [EIP-4444][eip444].

:::info
On networks that support it, a fresh sync stops downloading bodies and receipts below the ancient barriers, so the node holds history only from that point onwards. To download the entire history instead, set [`Sync.AncientBodiesBarrier`](./configuration.md#sync-ancientbodiesbarrier) and [`Sync.AncientReceiptsBarrier`](./configuration.md#sync-ancientreceiptsbarrier) to `0`.

Removing history that is already stored is a separate, opt-in step controlled by [`History.Pruning`](./configuration.md#history-pruning).
:::

## Pruning modes

[`History.Pruning`](./configuration.md#history-pruning) selects how stored historical blocks and receipts are removed as the node runs.

- `Disabled` (default) — nothing already stored is removed.
- `UseAncientBarriers` — removes stored block bodies and receipts below the lower of the two ancient barriers.
- `Rolling` — keeps a moving window of the most recent [`History.RetentionEpochs`](./configuration.md#history-retentionepochs) epochs and prunes below it as the head advances. The configured window must be at least the `minHistoryRetentionEpochs` chainspec parameter of the network, and a node that has just synced only starts pruning once its stored history grows past the window.

Pruning publishes the new retention boundary first and reclaims the space below it in the background, in bounded passes that do not block block processing. Disk space returns gradually as the database rewrites its files.

Pruning never removes the genesis block or anything at or above the sync pivot. Use [`History.PruningInterval`](./configuration.md#history-pruninginterval) and [`History.PruningTimeoutSeconds`](./configuration.md#history-pruningtimeoutseconds) to control how often it runs and how long a single pass may take.

Blocks containing any address in [`FlatDb.HistorySliceAddresses`](./configuration.md#flatdb-historysliceaddresses) retain their receipts and bodies beyond the rolling window, so logs and transactions for those contracts stay answerable; see [Archive nodes](./archive-nodes.md).

`eth_getLogs` over a range covering pruned heights returns an error rather than silently returning fewer logs than the range holds, and block queries below the earliest block the node still serves answer with a pruned-history error.

`History.Pruning` removes blocks and receipts only. Historical state has its own, independent retention; see [Archive nodes](./archive-nodes.md).

## Era1 format

The pre-Merge historical data is serviced in [Era1](https://github.com/status-im/nimbus-eth2/blob/stable/docs/e2store.md#era-files) format, which is an archival format initially designed for the consensus layer by Nimbus.

An Era1 archive can be expressed as follows:

```
era1 := Version | block-tuple* | other-entries* | Accumulator | BlockIndex
block-tuple :=  CompressedHeader | CompressedBody | CompressedReceipts | TotalDifficulty
block-index := starting-number | index | index | index ... | count
```

Block headers, bodies, and receipts are compressed using the [Snappy framing format](https://github.com/google/snappy/blob/main/framing_format.txt). Each file contains a block index for fast lookup and an [epoch accumulator](https://github.com/ethereum/portal-network-specs/blob/master/history/history-network.md#the-historical-hashes-accumulator) for verification. The epoch accumulator can verify the entire archive with accumulators from a trusted source. It also allows a node to download a block header with a Merkle proof, proving it belongs to a particular epoch.

## EraE format

EraE is the archival format used for post-Merge history, as specified in [ere.md](https://github.com/eth-clients/e2store-format-specs/blob/main/formats/ere.md). An EraE file holds up to 8192 blocks and is laid out as follows:

```
Version | CompressedHeader* | CompressedBody* | CompressedSlimReceipts* | TotalDifficulty* | AccumulatorRoot? | ComponentIndex
```

Receipts are stored slim, as `rlp([txType, postStateOrStatus, cumulativeGas, logs])` with no bloom filter; readers recompute it from the logs. Exported files use the `.ere` extension and carry the `noproofs` profile suffix, since Nethermind does not write `Proof` entries. The older `.erae` extension is still accepted on import.

The `Era.*` options and `admin_importHistory`/`admin_exportHistory` described below apply to Era1. EraE has its own equivalents:

- Import: [`EraE.ImportDirectory`](./configuration.md#erae-importdirectory), or the `admin_importEraHistory` JSON-RPC method.
- Export: [`EraE.ExportDirectory`](./configuration.md#erae-exportdirectory), or the `admin_exportEraHistory` JSON-RPC method. Set [`EraE.BeaconNodeUrl`](./configuration.md#erae-beaconnodeurl) to supply beacon block and state roots during post-Merge export.
- Range and verification: [`EraE.From`](./configuration.md#erae-from), [`EraE.To`](./configuration.md#erae-to), and [`EraE.TrustedAccumulatorFile`](./configuration.md#erae-trustedaccumulatorfile). For export, `EraE.To` set to `0` means the node's current head; for import, it means the last block available in the archive.

### Remote archives

When importing, set [`EraE.RemoteBaseUrl`](./configuration.md#erae-remotebaseurl) to download archive files that are missing from the import directory. You must still provide a local source directory through `EraE.ImportDirectory` or the `admin_importEraHistory` method. Downloaded files are verified against the SHA-256 hashes in the server's `checksums_sha256.txt` manifest and cached in [`EraE.RemoteDownloadDirectory`](./configuration.md#erae-remotedownloaddirectory), which defaults to the import directory.

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
