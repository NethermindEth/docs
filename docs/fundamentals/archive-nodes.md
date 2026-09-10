---
title: Archive nodes
sidebar_position: 8
---

Starting with Nethermind 2.0, archive functionality is built on the flat database: per-block state changesets captured during ordinary syncing answer historical queries, with no extra database and no special sync mode. Four archive shapes are available, all reached the same two ways - a full sync from genesis, or a snap sync to the tip that captures history from the pivot onwards.

Two independent groups of configuration options compose:

- `FlatDb.History*` governs historical **state** - what answers `eth_call`, `eth_getBalance`, and `eth_getStorageAt` at old blocks.
- `History.*` governs historical **blocks and receipts** - what answers `eth_getBlockBy*`, `eth_getTransactionReceipt`, and `eth_getLogs`. See [History pruning](./history-pruning.md).

## Archive shapes

- **Full archive** answers every historical query at every height, state and receipts, from genesis.
- **Windowed archive** answers everything a full archive does, but only for the last [`FlatDb.HistoryRetentionBlocks`](./configuration.md#flatdb-historyretentionblocks) blocks, with [`FlatDb.HistoryRetention`](./configuration.md#flatdb-historyretention) set to `Rolling`. Older queries are refused with a pruned-history error - never answered wrongly from live state. Disk stays bounded: the pruner reclaims continuously as the window rolls.
- **Address-slice archive** is a windowed node whose named contracts additionally answer to their full slice depth - state, logs, and transactions - while everything else rolls with the window.
- **Since-block archive** keeps everything from a fixed block onward, forever: set [`FlatDb.HistoryRetention`](./configuration.md#flatdb-historyretention) to `SinceBlock` and [`FlatDb.HistoryRetentionSinceBlock`](./configuration.md#flatdb-historyretentionsinceblock) to that block. Nothing below it is captured and queries there fail closed; nothing above it is ever pruned. For blocks and receipts from the same point, use `History.Pruning=UseAncientBarriers` with the ancient barriers set to that block; see [History pruning](./history-pruning.md). Slices (`FlatDb.HistorySliceAddresses`) keep their block-and-receipt retention in this mode; their flat-history side has nothing to keep, since nothing is ever pruned. This suits operators whose indexers only need history from a known starting point that never moves.

## Configuration

Each option is documented in its own section of the [configuration reference](./configuration.md); this page is the archive-node view of them. The table shows which options make up each shape - follow the links for what every option does.

| Setting | Full archive | Windowed archive | Address-slice archive | Role |
|---|---|---|---|---|
| [`FlatDb.Enabled`](./configuration.md#flatdb-enabled) | `true` | `true` | `true` | The flat database itself. |
| [`FlatDb.HistoryEnabled`](./configuration.md#flatdb-historyenabled) | `true` | `true` | `true` | Captures the per-block state changesets. |
| [`FlatDb.HistoryRetention`](./configuration.md#flatdb-historyretention) | `None` (default) | `Rolling` | `Rolling` | Whether flat history is kept unbounded, in a rolling window, or from a fixed block onward (`SinceBlock`, see below). |
| [`FlatDb.HistoryRetentionBlocks`](./configuration.md#flatdb-historyretentionblocks) | - | the window size, in blocks | the window size, in blocks | Size of the rolling window. Required with `Rolling`, rejected otherwise. |
| [`FlatDb.HistoryRetentionSinceBlock`](./configuration.md#flatdb-historyretentionsinceblock) | - | - | - | First block to keep. Required with `SinceBlock`, rejected otherwise. |
| [`FlatDb.HistorySliceAddresses`](./configuration.md#flatdb-historysliceaddresses) | unset | unset | the sliced addresses | Contracts kept queryable beyond the general window. |
| [`History.Pruning`](./configuration.md#history-pruning) | `Disabled` (default) | `Rolling` | `Rolling` | Block-and-receipt expiry; see [History pruning](./history-pruning.md). |
| [`History.RetentionEpochs`](./configuration.md#history-retentionepochs) | - | the retention window, in epochs | the retention window, in epochs | How much block-and-receipt history the rolling pruner keeps. |
| [`LogIndex.Enabled`](./configuration.md#logindex-enabled) | recommended | recommended | recommended | The index behind fast `eth_getLogs`. |
| [`Receipt.TxLookupLimit`](./configuration.md#receipt-txlookuplimit) | `0` | `0` | `0` | `0` keeps the transaction-hash lookup index for every stored height. |
| [`Receipt.DeriveFromState`](./configuration.md#receipt-derivefromstate) | optional; not indexable | - | - | The receiptless variant; see [Receiptless archive](#receiptless-archive). |
| [`Sync.AncientBodiesBarrier`](./configuration.md#sync-ancientbodiesbarrier) / [`Sync.AncientReceiptsBarrier`](./configuration.md#sync-ancientreceiptsbarrier) | `0` | - | - | A full archive that should serve receipts from genesis must also download them. |

Every archive setting is default-off: a node that configures none of them behaves exactly as before.

:::warning Important
`FlatDb.HistoryRetention=Rolling` or `SinceBlock` selects the windowed row format and requires fresh flat history: enabling it on an existing unwindowed flat-history database is refused, and there is no in-place conversion. Start with a fresh sync.
:::

:::warning Important
Do not turn on [full state pruning](./state-pruning.md) on an archive node, as these are two opposing features. Set [`Pruning.Mode`](./configuration.md#pruning-mode) to `None`.
:::

## Historical queries and the window

Within the window, the node answers historical RPC exactly like a full archive. Below it, queries fail closed rather than answering wrongly:

- Historical state reads (`eth_call`, `eth_getBalance`, `eth_getStorageAt`) below the window return a pruned-history error instead of resolving against live state.
- `eth_getLogs` over a range covering pruned heights returns an error rather than silently returning fewer logs than the range holds.
- Block and receipt queries below the earliest block the node still serves return a pruned-history error, consistent with the block range the node advertises to its peers.

On an address-slice node, reads below the general window serve only the sliced addresses and fail closed for everything else. Log queries filtered to sliced addresses keep answering below the general boundary, served from the log index at the cost of the matches rather than the size of the range. Answering sliced logs below a previously pruned boundary requires `History.Pruning` to stay enabled: at startup, the pruner validates from which depth each slice's logs are provably retained, and without it those reads fail closed.

## Receiptless archive

[`Receipt.DeriveFromState`](./configuration.md#receipt-derivefromstate) trades the receipt store for computation: receipt writes are skipped, and a receipt query re-executes the block over its parent state, serving the result only when it reproduces the block header's receipts root. It requires state history for the queried block, so it pairs with a full archive.

- Receipts already on disk are still served, and pre-Byzantium receipts and the transaction index are always written.
- A skipped receipt is retained in memory until history capture durably covers its block, and is persisted if capture permanently stops, so a capture breakdown does not lose receipts.
- A query that misses the cache costs a full block execution, so a public endpoint should be rate limited; concurrency is bounded by [`JsonRpc.EthModuleConcurrentInstances`](./configuration.md#jsonrpc-ethmoduleconcurrentinstances).
- Peers are told no receipts are available.
- The log index does not cover blocks whose receipts were skipped: its builder reads stored receipts without regenerating them, so it stops advancing where they are absent. `eth_getLogs` over those heights falls back to scanning block blooms and re-executing every candidate block, bloom false positives included. Keep receipts on nodes where `eth_getLogs` matters.

## Historical proofs

A full archive can also answer `eth_getProof` (and the `proof` namespace) at historical heights, from a commitment layer written next to the flat history rows. It is off by default and has two independent switches:

- [`FlatDb.ArchiveProofBuildEnabled`](./configuration.md#flatdb-archiveproofbuildenabled) writes the commitments. A node syncing from genesis builds them at the tip as blocks are captured, with nothing else to run. An already synced archive is retrofitted by the every-block walk: with [`FlatDb.HistoryVerifyEveryBlock`](./configuration.md#flatdb-historyverifyeveryblock) also on, the walk emits commitments while it verifies, and publishes coverage only behind a passing verdict. The walk resumes across restarts.
- [`FlatDb.ArchiveProofServeEnabled`](./configuration.md#flatdb-archiveproofserveenabled) answers `eth_getProof` below the flat state boundary from them. Heights the commitments do not cover are refused with a pruned-history error, never answered from live state.

Historical proofs need unwindowed flat history: [`FlatDb.HistoryRetention`](./configuration.md#flatdb-historyretention) must be `None`. On a `Rolling` or `SinceBlock` node the rows are pre-values behind a retention floor, which a proof cannot replay, so both switches are ignored there and a warning is logged.

### How a proof is checked

The commitment layer is a cache over the history rows, not a second source of truth. Every trie node a proof uses is verified against the reference its parent commits to, starting from the state root in the block header. A node that fails that check is rebuilt from the history rows; a second failure refuses the proof. A proof that would have to scan more than [`FlatDb.ArchiveProofMaxScannedRows`](./configuration.md#flatdb-archiveproofmaxscannedrows) history rows is also refused, because that means the commitments do not really cover the height. The commitments can therefore be partial, stale, or damaged and a proof is still either correct or refused, never wrong.

Inside one proof, [`FlatDb.ArchiveProofFanOut`](./configuration.md#flatdb-archiveprooffanout) bounds how many child nodes are resolved concurrently. The number of proofs served at once is bounded by the JSON-RPC module pool, not by this option.

### Shapes

Commitment rows are grouped by epoch, so a whole epoch can be kept or dropped as a unit. Two options choose the shape; both are off by default, which keeps every epoch in full:

- [`FlatDb.ArchiveProofFineEpochs`](./configuration.md#flatdb-archiveprooffineepochs) keeps the per-block rows only for that many most recent epochs. Older epochs keep their checkpoint rows, so proofs there are still served and still verified, at the cost of more rebuilding per proof. The per-block rows are most of the layer's size, so this is the option that trades disk for older-proof latency.
- [`FlatDb.ArchiveProofRecentEpochs`](./configuration.md#flatdb-archiveproofrecentepochs) keeps only that many most recent epochs and deletes the rest. Proofs below the retained floor are refused. This is the one shape that stops serving old heights rather than serving them more slowly, and a retrofit on such a node walks only the range it will serve.

Before an epoch is dropped, the node carries every node that has no newer row into the epoch that survives, so the retained range stays self-contained whatever built it. The served floor moves first and only ever rises; a read that lands between the floor moving and the space being reclaimed resolves from what is still on disk.

### Layout

[`FlatDb.ArchiveProofCheckpointIntervalLog2`](./configuration.md#flatdb-archiveproofcheckpointintervallog2) (window width) and [`FlatDb.ArchiveProofEpochLog2`](./configuration.md#flatdb-archiveproofepochlog2) (epoch length) are stamped into the commitment columns. Changing either invalidates commitments already built: by default the node refuses to build over a mismatched layout and keeps the rows; with [`FlatDb.ArchiveProofDiscardMismatchedLayout`](./configuration.md#flatdb-archiveproofdiscardmismatchedlayout) it deletes them and rebuilds. Nothing is deleted while the layout matches.

| Setting | Role |
|---|---|
| [`FlatDb.ArchiveProofBuildEnabled`](./configuration.md#flatdb-archiveproofbuildenabled) | Writes the commitments, at the tip and, with `FlatDb.HistoryVerifyEveryBlock`, along the retrofit walk. |
| [`FlatDb.ArchiveProofServeEnabled`](./configuration.md#flatdb-archiveproofserveenabled) | Serves historical `eth_getProof` from them. |
| [`FlatDb.HistoryVerifyEveryBlock`](./configuration.md#flatdb-historyverifyeveryblock) | Retrofits an already synced archive; not needed when syncing from genesis. |
| [`FlatDb.ArchiveProofFineEpochs`](./configuration.md#flatdb-archiveprooffineepochs) | Fast proofs for recent epochs, slower but still served below. |
| [`FlatDb.ArchiveProofRecentEpochs`](./configuration.md#flatdb-archiveproofrecentepochs) | Proofs for recent epochs only; older heights refused. |
| [`FlatDb.ArchiveProofFanOut`](./configuration.md#flatdb-archiveprooffanout) | Concurrent child resolutions inside one proof. |
| [`FlatDb.ArchiveProofMaxScannedRows`](./configuration.md#flatdb-archiveproofmaxscannedrows) | Rows one proof may read from history before it is refused. |
| [`FlatDb.ArchiveProofCheckpointIntervalLog2`](./configuration.md#flatdb-archiveproofcheckpointintervallog2) | Window width; stamped into the columns. |
| [`FlatDb.ArchiveProofEpochLog2`](./configuration.md#flatdb-archiveproofepochlog2) | Epoch length; stamped into the columns. |
| [`FlatDb.ArchiveProofDiscardMismatchedLayout`](./configuration.md#flatdb-archiveproofdiscardmismatchedlayout) | Rebuild instead of refusing when the stored layout differs. |

:::warning Important
Historical proofs are served only where the commitments cover the height. A node that enables serving without having built, or whose build has not yet reached a height, refuses proofs there rather than answering from live state.
:::

## Notes

- A slice retention shallower than the general window is refused at startup, because it would delete an address's rows inside the advertised window.
- The state-history pruner paces itself with [`FlatDb.HistoryPruneIntervalBlocks`](./configuration.md#flatdb-historypruneintervalblocks) and [`FlatDb.HistoryPrunePassBudgetSeconds`](./configuration.md#flatdb-historyprunepassbudgetseconds). The pass budget must exceed the longest historical query the node serves, since deletes wait for in-flight historical reads.
- [`FlatDb.HistoryVerifyEveryBlock`](./configuration.md#flatdb-historyverifyeveryblock) (default off) runs a one-shot background proof on unwindowed archives: it rebuilds the state root from history rows at every covered block and compares it against the node's own headers. Memory usage follows state size.
