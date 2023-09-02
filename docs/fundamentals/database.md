---
title: Database
sidebar_position: 5
---

Nethermind uses the [RocksDB](https://rocksdb.org) database to store state. By default the database is stored in the
same directory where the client binaries are. You can change it by providing a `--baseDbPath` config switch in the
command line, e.g.`./Nethermind.Runner --config goerli --baseDbPath /home/username/nethermind_db`

After Nethermind is started, you will see multiple directories appearing in the _baseDbPath_ directory.

![Example of the DB directory on a freshly deployed Ubuntu VM with Nethermind.](</img/image(61).png>)

| DB Directory      | Content                                                                                                                                  |
|-------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| blockInfos        | information about blocks at each level of the block tree (canonical chain and branches)                                                  |
| blocks            | block bodies (block transactions and uncle data)                                                                                         |
| bloom             | bloom indexes for fast log searches                                                                                                      |
| canonicalHashTrie | LES protocol related data                                                                                                                |
| code              | contract bytecodes                                                                                                                       |
| discoveryNodes    | peers discovered via discovery protocol - used for quick peering after restarts (you can copy this DB between nodes to speed up peering) |
| headers           | block headers only                                                                                                                       |
| pendingTx         | (this DB is wiped out on each restart) 2nd level cache of pending transactions / mempool (1st level is in memory)                        |
| peers             | stores additional sync peers information (like peer reputation) - you can copy this DB between nodes to speed up peering on fresh sync   |
| receipts          | transaction receipts data                                                                                                                |
| state             | blockchain state including accounts and contract storage (Patricia trie nodes)                                                           |

You can use `rsync` between your nodes to clone the database (One of our users copied entire 4.5TB archive state this
way while the node was running and only stopped the node for the very last stage of `rsync` ). You can also simply copy
the database between Unix and Windows systems (and most likely macOS).

## How to reduce database size

The Nethermind database can experience substantial growth over time, starting from an initial size of approximately 650
GB. As a result, many node-setups are configured to run on 1TB disks. However, even with the application of settings
designed to slow the growth rate, these disks may eventually run out of free space.

Current options to reduce db size are:

1. [Re-sync database from scratch](sync.md#resync-a-node-from-scratch)
2. [Full pruning](pruning.md)

The table below presents a short comparison of these methods including possible fine-tuning of each method. Data was
fetched from a node running on a machine with the below specifications:\
\
**Node Version**: 1.18.0\
**Consensus Client**: Lighthouse\
**CPU**: AMD EPYC 7713 64-Core Processor (16 cores allocated for this VM)\
**RAM**: 64GB\
**Disk Size**: 1.2 TB\
**IOPS of the disk\***: 70,000 - 80,000 IOPS (results vary in this range)

| Metric                                                         | Resync                                                                                                                                                        | Full Pruning                                                | Full Pruning + Memory Budget (4 GB)                         |
|----------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|
| **Time of execution**                                          | ~4h                                                                                                                                                           | ~24h                                                        | ~12h                                                        |
| **Minimum free disk space**                                    | N/A - you can execute resync even if there is 0 free space (avoid such case)                                                                                  | 250 GB                                                      | 250 GB                                                      |
| **Attestation rate drop**                                      | 100% - no attestation rewards during that time or highly reduced                                                                                              | 5-10% during that time.                                     | TBC - not enough data yet                                   |
| **Average block processing time of new blocks during process** | N/A - new blocks are being processed after state but are significantly slower until OldBodies and OldReceipts are downloaded. Afterwards, average about 0.35s | 0.7s                                                        | 1.0s                                                        |
| **Is node online during process?**                             | No - unless State is synced                                                                                                                                   | Yes - node follows chain and all modules are still enabled. | Yes - node follows chain and all modules are still enabled. |

:::info
Command used for testing IOPS of disk:\
`fio --randrepeat=1 --ioengine=libaio --direct=1 --gtod_reduce=1 --name=test --filename=test --bs=4k --iodepth=64 --size=4G --readwrite=randrw`
:::
