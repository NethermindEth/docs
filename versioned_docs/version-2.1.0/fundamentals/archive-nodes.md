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
- **Since-block archive** keeps everything from a fixed block onward, forever: set [`FlatDb.HistoryRetention`](./configuration.md#flatdb-historyretention) to `SinceBlock` and [`FlatDb.HistoryRetentionSinceBlock`](./configuration.md#flatdb-historyretentionsinceblock) to that block. Nothing below it is captured and queries there fail closed; nothing above it is ever pruned. Tracing a block replays it over the state of its parent, so a node that must trace from a given block sets the floor one block below it. For blocks and receipts from the same point, use `History.Pruning=UseAncientBarriers` with the ancient barriers set to that block; see [History pruning](./history-pruning.md). Slices (`FlatDb.HistorySliceAddresses`) keep their block-and-receipt retention in this mode; their flat-history side has nothing to keep, since nothing is ever pruned. This suits operators whose indexers only need history from a known starting point that never moves.

## Configuration

Each option is documented in its own section of the [configuration reference](./configuration.md); this page is the archive-node view of them. The table shows which options make up each shape - follow the links for what every option does.

| Setting | Full archive | Windowed archive | Address-slice archive | Since-block archive | Role |
|---|---|---|---|---|---|
| [`FlatDb.Enabled`](./configuration.md#flatdb-enabled) | `true` | `true` | `true` | `true` | The flat database itself. |
| [`FlatDb.HistoryEnabled`](./configuration.md#flatdb-historyenabled) | `true` | `true` | `true` | `true` | Captures the per-block state changesets. |
| [`FlatDb.HistoryRetention`](./configuration.md#flatdb-historyretention) | `None` (default) | `Rolling` | `Rolling` | `SinceBlock` | Whether flat history is kept unbounded, in a rolling window, or from a fixed block onward. |
| [`FlatDb.HistoryRetentionBlocks`](./configuration.md#flatdb-historyretentionblocks) | - | the window size, in blocks | the window size, in blocks | - | Size of the rolling window. Required with `Rolling`, rejected otherwise. |
| [`FlatDb.HistoryRetentionSinceBlock`](./configuration.md#flatdb-historyretentionsinceblock) | - | - | - | the first block to keep | First block to keep. Required with `SinceBlock`, rejected otherwise. |
| [`FlatDb.HistorySliceAddresses`](./configuration.md#flatdb-historysliceaddresses) | unset | unset | the sliced addresses | optional | Contracts kept queryable beyond the general window. |
| [`History.Pruning`](./configuration.md#history-pruning) | `Disabled` (default) | `Rolling` | `Rolling` | `UseAncientBarriers` | Block-and-receipt expiry; see [History pruning](./history-pruning.md). |
| [`History.RetentionEpochs`](./configuration.md#history-retentionepochs) | - | the retention window, in epochs | the retention window, in epochs | - | How much block-and-receipt history the rolling pruner keeps. |
| [`LogIndex.Enabled`](./configuration.md#logindex-enabled) | recommended | recommended | recommended | recommended | The index behind fast `eth_getLogs`. |
| [`Receipt.TxLookupLimit`](./configuration.md#receipt-txlookuplimit) | `0` | `0` | `0` | `0` | `0` keeps the transaction-hash lookup index for every stored height. |
| [`Receipt.DeriveFromState`](./configuration.md#receipt-derivefromstate) | optional; not indexable | - | - | - | The receiptless variant; see [Receiptless archive](#receiptless-archive). |
| [`Sync.AncientBodiesBarrier`](./configuration.md#sync-ancientbodiesbarrier) / [`Sync.AncientReceiptsBarrier`](./configuration.md#sync-ancientreceiptsbarrier) | `0` | - | - | the same block | A full archive that should serve receipts from genesis must also download them; a since-block archive downloads and keeps them from its first block. |

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

## Per-transaction changeset index

An archive node re-executes a block to trace it: a trace of the last transaction of a block first runs every transaction before it, and a whole-block trace runs the transactions in order because each needs the state the previous one left behind. The per-transaction changeset index removes that cost. For every transaction of an indexed block it records what the transaction wrote, in a column family of its own next to the flat history rows, so the state before any transaction is known without executing the ones ahead of it.

The index is off by default and requires flat history. It is turned on with [`FlatDb.HistoryTransactionIndexEnabled`](./configuration.md#flatdb-historytransactionindexenabled); everything else about it has a default that works.

### What it speeds up

- **Single-transaction traces** (`debug_traceTransaction`, `trace_transaction`, `trace_replayTransaction`) of an indexed block start at their target. The writes of the transactions before it are laid over the parent state on the read path of the trace, and only the target executes.
- **Whole-block traces** (`debug_traceBlockByNumber`, `debug_traceBlockByHash`, `trace_block`, `trace_replayBlockTransactions`, `trace_filter`) of an indexed block trace their transactions concurrently, one per worker, each from its own seeded prefix, and return or stream the results in block order. Native and struct-log tracers take this path; a JavaScript tracer keeps the sequential replay, since it owns a script engine. [`FlatDb.HistoryTransactionIndexTraceParallelism`](./configuration.md#flatdb-historytransactionindextraceparallelism) bounds the workers, and the bound is shared by the `debug` and `trace` namespaces.
- **Consecutive indexed blocks.** Once a block has been traced whole, its final writes are kept in memory and the next block's workers read through them before the parent state, so `trace_filter` over a range, or a client walking blocks one by one, reads a key the earlier blocks touched from memory and goes to disk only for keys they never touched.

Whatever the index cannot serve falls back to the replay the node did before, never to a wrong answer: a block whose hash is not the one the rows were built from, a prefix with a row missing, a request with a state or block override, a block whose access list is being constructed, a target at index zero.

### How it is built

- **Inline while syncing.** A node syncing from genesis executes every block once anyway; the capture rides along on that execution and writes each block's rows, once the block is far enough below the best header that no reorg reaches it. Rows written this way are claimed only once the block is confirmed canonical, so a block that is later rejected never leaves a claim behind.
- **At the tip.** A builder thread follows the flat-history watermark and re-executes each newly captured block on a processing environment of its own, never on the one processing the chain. Coverage is one contiguous range of blocks and survives restarts.
- **Backwards, for an archive that already exists.** [`FlatDb.HistoryTransactionIndexRetrofitFromBlock`](./configuration.md#flatdb-historytransactionindexretrofitfromblock) tells the builder to also index down to that block once it has caught up with the tip; `1` covers the whole chain. Two mechanisms can do it:
  - **Retrofit workers**, sized by [`FlatDb.HistoryTransactionIndexWorkers`](./configuration.md#flatdb-historytransactionindexworkers), take chunks of blocks downward from the coverage edge and re-execute each block against the flat history. Coverage grows downward as chunks complete, so recent blocks become traceable first. Every block costs the random history reads of the state it touches, which is what bounds the rate on a disk-bound archive.
  - **Bulk fill**, with [`FlatDb.HistoryTransactionIndexBulkFillEnabled`](./configuration.md#flatdb-historytransactionindexbulkfillenabled), replaces the workers with one ascending replay from the retrofit block over an isolated, disk-backed scratch state. The state at the starting block is imported from the history rows, or seeded from the chain-spec allocations when the start is genesis, verified against that block's state root, and then carried forward block by block, so nothing is read from history twice. The replay checkpoints after every block and resumes from the checkpoint after a restart. Coverage joins the existing range only when the replay reaches it, and the scratch is released afterwards. [`FlatDb.HistoryTransactionIndexBulkFillMaxGiB`](./configuration.md#flatdb-historytransactionindexbulkfillmaxgib) caps the scratch: reaching it pauses the replay with its checkpoint kept. Bulk fill is experimental and currently limited to mainnet with unwindowed flat history.

The builder and the bulk replay pace themselves with [`FlatDb.HistoryTransactionIndexDutyCyclePercent`](./configuration.md#flatdb-historytransactionindexdutycyclepercent), the share of wall clock they may spend working; they sleep out the rest so re-execution stays invisible to the RPC the node is serving.

### Configuration

| Setting | Role |
|---|---|
| [`FlatDb.HistoryTransactionIndexEnabled`](./configuration.md#flatdb-historytransactionindexenabled) | Build and serve the index. Requires `FlatDb.HistoryEnabled`. |
| [`FlatDb.HistoryTransactionIndexDutyCyclePercent`](./configuration.md#flatdb-historytransactionindexdutycyclepercent) | Share of wall clock the builder and the bulk replay may spend working. |
| [`FlatDb.HistoryTransactionIndexRetrofitFromBlock`](./configuration.md#flatdb-historytransactionindexretrofitfromblock) | Also index backwards down to this block; `1` covers the whole chain. Never below the flat-history floor. |
| [`FlatDb.HistoryTransactionIndexWorkers`](./configuration.md#flatdb-historytransactionindexworkers) | Threads for the chunked backwards retrofit. |
| [`FlatDb.HistoryTransactionIndexBulkFillEnabled`](./configuration.md#flatdb-historytransactionindexbulkfillenabled) | Backwards retrofit on an isolated scratch state instead of the workers. Mainnet with unwindowed flat history only. |
| [`FlatDb.HistoryTransactionIndexBulkFillMaxGiB`](./configuration.md#flatdb-historytransactionindexbulkfillmaxgib) | Cap on the scratch database; reaching it pauses the replay and keeps its checkpoint. |
| [`FlatDb.HistoryTransactionIndexTraceParallelism`](./configuration.md#flatdb-historytransactionindextraceparallelism) | Workers for whole-block traces of indexed blocks, shared by `debug` and `trace`. |
| [`JsonRpc.TraceModuleConcurrentInstances`](./configuration.md#jsonrpc-tracemoduleconcurrentinstances) | Concurrent instances of the `trace` namespace. Each holds block-processing environments for the life of the process, so raise it only where the memory is available. |

- On a windowed node the index follows the flat-history floor: rows below it are deleted as the window rolls, and a trace there fails closed like any other historical query.
- The lowest and highest indexed block, and the count of index rows that could not be read, are exported as metrics.
- The column is small next to the history rows themselves, and its size follows the number of transactions, so recent blocks cost far more per block than early ones.

:::warning Important
Coverage is contiguous by design. Until a backwards retrofit reaches a block, traces there use the ordinary replay; with bulk fill that means nothing below the existing coverage is served faster until the whole replay from the retrofit block has finished.
:::

## Notes

- A slice retention shallower than the general window is refused at startup, because it would delete an address's rows inside the advertised window.
- The state-history pruner paces itself with [`FlatDb.HistoryPruneIntervalBlocks`](./configuration.md#flatdb-historypruneintervalblocks) and [`FlatDb.HistoryPrunePassBudgetSeconds`](./configuration.md#flatdb-historyprunepassbudgetseconds). The pass budget must exceed the longest historical query the node serves, since deletes wait for in-flight historical reads.
- [`FlatDb.HistoryVerifyEveryBlock`](./configuration.md#flatdb-historyverifyeveryblock) (default off) runs a one-shot background proof on unwindowed archives: it rebuilds the state root from history rows at every covered block and compares it against the node's own headers. Memory usage follows state size.
