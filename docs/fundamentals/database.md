---
title: Database
sidebar_position: 5
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Nethermind uses the [RocksDB](https://rocksdb.org) database to store the state. By default, the database is located in the
same directory where the Nethermind executable is. You can change the database location using the [`--db-dir`](configuration.md#db-dir) command line option.

## Database directory structure

| Directory         | Description                                                                                                                              |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| blockInfos        | Information about blocks at each level of the block tree (canonical chain and branches)                                                  |
| blocks            | Block bodies (block transactions and uncles)                                                                                             |
| bloom             | Bloom indices for fast log searches                                                                                                      |
| canonicalHashTrie | LES protocol related data                                                                                                                |
| code              | Contract bytecodes                                                                                                                       |
| discoveryNodes    | Peers discovered via discovery protocol - used for quick peering after restarts (you can copy this DB between nodes to speed up peering) |
| flat              | Blockchain state including accounts and contract storage in the flat layout, the default since 2.0.0                                     |
| headers           | Block headers only                                                                                                                       |
| pendingTx         | The second level cache of pending transactions/mempool (the first level is in memory). Wiped out on each restart.                        |
| peers             | Additional sync peers information (like peer reputation) - you can copy this DB between nodes to speed up peering on fresh sync          |
| receipts          | Transaction receipts                                                                                                                     |
| state             | Blockchain state as Patricia trie nodes, used instead of `flat` when `FlatDb.Enabled` is `false`                                         |

You can use `rsync` between your nodes to clone the database (One of our users copied the entire 4.5TB archive state this
way while the node was running and only stopped the node for the very last stage of `rsync` ). You can also copy
the database between Linux, Windows, and macOS.

## Database size

Below are the database sizes of the supported chains, broken down by database directory. Mainnet and Sepolia were measured on Nethermind 2.2.0 nodes snap-synced with the default configuration, which keeps block bodies and receipts only from the [ancient barrier](configuration.md#sync-ancientbodiesbarrier) onward (block 24,600,000 on Mainnet). The Gnosis node runs with `Sync.DownloadBodiesInFastSync` and `Sync.DownloadReceiptsInFastSync` set to `false`, so its `blocks` and `receipts` hold only the blocks since the sync.

<!--[start autogen]-->

<Tabs>
<TabItem value="mainnet" label="Mainnet">

- `flat`: 304 GB
- `receipts`: 78 GB
- `blocks`: 115 GB
- `headers`: 12 GB
- `code`: 8.6 GB
- `blobTransactions`: 478 MB
- ...
- **Total: 519 GB**

</TabItem>
<TabItem value="sepolia" label="Sepolia">

- `flat`: 181 GB
- `receipts`: 132 GB
- `blocks`: 548 GB
- `headers`: 5.1 GB
- `code`: 24 GB
- `blobTransactions`: 1.3 GB
- ...
- **Total: 893 GB**

</TabItem>
<TabItem value="gnosis" label="Gnosis">

- `flat`: 189 GB
- `receipts`: 333 MB
- `blocks`: 425 MB
- `headers`: 17 GB
- `code`: 1021 MB
- `blobTransactions`: 43 MB
- ...
- **Total: 211 GB**

</TabItem>
</Tabs>

<!--[end autogen]-->

## Reducing database size

The Nethermind database can experience substantial growth over time, starting from an initial size of approximately 650
GB. As a result, many node setups are configured to run on 1 TB disks. However, even with settings
designed to slow the growth rate, these disks may eventually run out of free space.

The current options to reduce the database size are as follows:

- [Resyncing database from scratch](./sync.md#resync)
- [Pruning](./state-pruning.md)

The table below presents a short comparison of these methods including possible fine-tuning of each method. Data was
fetched from a node running on a machine with the below specifications:

- **Nethermind**: v1.18.0
- **Consensus client**: Lighthouse
- **CPU**: AMD EPYC 7713 (16 cores allocated for the VM)
- **RAM**: 64 GB
- **Disk size**: 1.2 TB
- **Disk IOPS**: 70,000 to 80,000

| Metric                                                             | Resync                                                                                                                                           | Pruning                                                             | Pruning and memory budget (4 GB)                               |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- | -------------------------------------------------------------- |
| **Execution time**                                                 | ~4h                                                                                                                                              | ~24h                                                                | ~12h                                                           |
| **Minimum free disk space**                                        | N/A. You can execute resync even if there is 0 free space (avoid such a case).                                                                   | 250 GB                                                              | 250 GB                                                         |
| **Attestation rate drop**                                          | 100%. No attestation rewards during that time or highly reduced.                                                                                 | 5–10% during that time                                              | N/A                                                            |
| **Average block processing time of new blocks during the process** | N/A. New blocks are processed after state but are significantly slower until old bodies/receipts are downloaded. Afterward, average about 0.35s. | 0.7s                                                                | 1.0s                                                           |
| **Is the node online during the process?**                         | No, unless the state is synced.                                                                                                                  | Yes. The node follows the chain, and all modules are still enabled. | Yes. The node follows chain and all modules are still enabled. |

The command used for testing disk IOPS was as follows:

```bash
fio --randrepeat=1 --ioengine=libaio --direct=1 --gtod_reduce=1 --name=test --filename=test --bs=4k --iodepth=64 --size=4G --readwrite=randrw
```
