---
title: Archive nodes
sidebar_position: 8
---

Starting with Nethermind 2.0, archive functionality is built on the flat database: per-block state changesets captured during ordinary syncing answer historical queries, with no extra database and no special sync mode. Three archive shapes are available, all reached the same two ways - a full sync from genesis, or a snap sync to the tip that captures history from the pivot onwards.

Two independent groups of configuration options compose:

- `FlatDb.History*` governs historical **state** - what answers `eth_call`, `eth_getBalance`, and `eth_getStorageAt` at old blocks.
- `History.*` governs historical **blocks and receipts** - what answers `eth_getBlockBy*`, `eth_getTransactionReceipt`, and `eth_getLogs`. See [History pruning](./history-pruning.md).

## Archive shapes

- **Full archive** answers every historical query at every height, state and receipts, from genesis.
- **Windowed archive** answers everything a full archive does, but only for the last [`FlatDb.HistoryRetentionBlocks`](./configuration.md#flatdb-historyretentionblocks) blocks. Older queries are refused with a pruned-history error - never answered wrongly from live state. Disk stays bounded: the pruner reclaims continuously as the window rolls.
- **Address-slice archive** is a windowed node whose named contracts additionally answer to their full slice depth - state, logs, and transactions - while everything else rolls with the window.

## Configuration

| Setting | Full archive | Windowed archive | Address-slice archive | What it controls |
|---|---|---|---|---|
| [`FlatDb.Enabled`](./configuration.md#flatdb-enabled) | `true` | `true` | `true` | The flat database; everything below builds on it. |
| [`FlatDb.HistoryEnabled`](./configuration.md#flatdb-historyenabled) | `true` | `true` | `true` | Captures per-block state changesets - historical state queries answer from these. |
| [`FlatDb.HistoryRetentionBlocks`](./configuration.md#flatdb-historyretentionblocks) | `0` (default) | e.g. `450000` | e.g. `450000` | The state-history window, in blocks below the tip. `0` keeps state history from genesis. |
| [`FlatDb.HistorySliceAddresses`](./configuration.md#flatdb-historysliceaddresses) | unset | unset | e.g. `0xC02a...,0xA0b8...:2000000` | Contracts kept queryable beyond the general window: their state rows survive pruning, and every block one of these addresses appears in keeps its receipts and full body, so logs and transactions stay answerable. `addr` retains forever; `addr:N` retains while a height is within `N` blocks of the head. |
| [`History.Pruning`](./configuration.md#history-pruning) | `Disabled` (default) | `Rolling` | `Rolling` | Block-and-receipt expiry. Independent of state history, but a windowed node normally rolls both. |
| [`History.RetentionEpochs`](./configuration.md#history-retentionepochs) | - | default `82125` | default `82125` | How many epochs (32 blocks each) of bodies and receipts the rolling pruner keeps. Must be at least the chain's `minHistoryRetentionEpochs` chainspec parameter. |
| [`LogIndex.Enabled`](./configuration.md#logindex-enabled) | recommended | recommended | recommended | The address/topic to block-number index behind fast `eth_getLogs`. Builds over whatever receipts the node stores. |
| [`Receipt.TxLookupLimit`](./configuration.md#receipt-txlookuplimit) | `0` | `0` | `0` | `0` keeps the transaction-hash lookup index for every stored height; retained sliced heights keep their entries either way. |
| [`Sync.AncientBodiesBarrier`](./configuration.md#sync-ancientbodiesbarrier) / [`Sync.AncientReceiptsBarrier`](./configuration.md#sync-ancientreceiptsbarrier) | `0` | - | - | A full archive that should serve receipts from genesis must also download them; see [History pruning](./history-pruning.md). |

Every archive setting is default-off: a node that configures none of them behaves exactly as before.

:::warning Important
Setting `FlatDb.HistoryRetentionBlocks` to a non-zero value selects the windowed row format and requires fresh flat history: enabling it on an existing unwindowed flat-history database is refused, and there is no in-place conversion. Start with a fresh sync.
:::

:::warning Important
Do not turn on [full state pruning](./state-pruning.md) on an archive node, as these are two opposing features. Set [`Pruning.Mode`](./configuration.md#pruning-mode) to `None`.
:::

## Historical queries and the window

Within the window, the node answers historical RPC exactly like a full archive. Below it, queries fail closed: historical state reads (`eth_call`, `eth_getBalance`, `eth_getStorageAt`) below the window return a pruned-history error instead of resolving against live state.

On an address-slice node, reads below the general window serve only the sliced addresses and fail closed for everything else. Answering sliced logs below a previously pruned boundary requires `History.Pruning` to stay enabled: at startup, the pruner validates from which depth each slice's logs are provably retained, and without it those reads fail closed.

## Notes

- A slice retention shallower than the general window is refused at startup, because it would delete an address's rows inside the advertised window.
- The state-history pruner paces itself with [`FlatDb.HistoryPruneIntervalBlocks`](./configuration.md#flatdb-historypruneintervalblocks) (default `1024`) and [`FlatDb.HistoryPrunePassBudgetSeconds`](./configuration.md#flatdb-historyprunepassbudgetseconds) (default `5`). The pass budget must exceed the longest historical query the node serves, since deletes wait for in-flight historical reads.
- [`FlatDb.HistoryVerifyEveryBlock`](./configuration.md#flatdb-historyverifyeveryblock) (default off) runs a one-shot background proof on unwindowed archives: it rebuilds the state root from history rows at every covered block and compares it against the node's own headers. Memory usage follows state size.
