---
title: Database
sidebar_position: 5
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Nethermind uses the [RocksDB](https://rocksdb.org) database to store the state. By default, the database is located in the
same directory where the Nethermind executable is. You can change the database location using the [`-d, --baseDbPath`](configuration.md#basedbpath) command line option.

## Database directory structure

| Directory         | Description |
| -                 | - |
| blockInfos        | Information about blocks at each level of the block tree (canonical chain and branches) |
| blocks            | Block bodies (block transactions and uncles) |
| bloom             | Bloom indices for fast log searches |
| canonicalHashTrie | LES protocol related data |
| code              | Contract bytecodes |
| discoveryNodes    | Peers discovered via discovery protocol - used for quick peering after restarts (you can copy this DB between nodes to speed up peering) |
| headers           | Block headers only |
| pendingTx         | The second level cache of pending transactions/mempool (the first level is in memory). Wiped out on each restart. |
| peers             | Additional sync peers information (like peer reputation) - you can copy this DB between nodes to speed up peering on fresh sync |
| receipts          | Transaction receipts |
| state             | Blockchain state including accounts and contract storage (Patricia trie nodes) |

You can use `rsync` between your nodes to clone the database (One of our users copied the entire 4.5TB archive state this
way while the node was running and only stopped the node for the very last stage of `rsync` ). You can also copy
the database between Linux, Windows, and macOS.

## Database size

Below is a comprehensive list of the supported chains, along with a detailed breakdown of their respective database directories. For reference, the database sizes listed have been determined using the standard configurations provided.

<!--[start autogen]-->

<Tabs>
<TabItem value="mainnet" label="Mainnet">

- `state`: 158 GB
- `receipts`: 209 GB
- `blocks`: 595 GB
- `bloom`: 6.4 GB
- `headers`: 8.9 GB
- `code`: 4.7 GB
- `blobTransactions`: 1.7 GB
- ...
- **Total: 985 GB**

</TabItem>
<TabItem value="sepolia" label="Sepolia">

- `state`: 42 GB
- `receipts`: 39 GB
- `blocks`: 293 GB
- `bloom`: 2.1 GB
- `headers`: 2.3 GB
- `code`: 6.5 GB
- `blobTransactions`: 1.3 GB
- ...
- **Total: 386 GB**

</TabItem>
<TabItem value="holesky" label="Holesky">

- `state`: 18 GB
- `receipts`: 14 GB
- `blocks`: 55 GB
- `bloom`: 738 MB
- `headers`: 967 MB
- `code`: 506 MB
- `blobTransactions`: 737 MB
- ...
- **Total: 90 GB**

</TabItem>
<TabItem value="gnosis" label="Gnosis">

- `state`: 66 GB
- `receipts`: 216 GB
- `blocks`: 199 GB
- `bloom`: 9.2 GB
- `headers`: 11 GB
- `code`: 668 MB
- `blobTransactions`: 75 MB
- ...
- **Total: 503 GB**

</TabItem>
<TabItem value="chiado" label="Chiado">

- `state`: 2.6 GB
- `receipts`: 1.4 GB
- `blocks`: 9.0 GB
- `bloom`: 3.1 GB
- `headers`: 2.3 GB
- `code`: 67 MB
- `blobTransactions`: 656 MB
- ...
- **Total: 20 GB**

</TabItem>
<TabItem value="energyweb" label="Energyweb">

- `state`: 27 GB
- `receipts`: 4.5 GB
- `blocks`: 25 GB
- `bloom`: 9.8 GB
- `headers`: 7.0 GB
- `code`: 14 MB
- `blobTransactions`:
- ...
- **Total: 75 GB**

</TabItem>
<TabItem value="volta" label="Volta">

- `state`: 34 GB
- `receipts`: 8.3 GB
- `blocks`: 33 GB
- `bloom`: 9.0 GB
- `headers`: 6.9 GB
- `code`: 95 MB
- `blobTransactions`:
- ...
- **Total: 93 GB**

</TabItem>
</Tabs>

<!--[end autogen]-->

## Reducing database size

The Nethermind database can experience substantial growth over time, starting from an initial size of approximately 650
GB. As a result, many node setups are configured to run on 1 TB disks. However, even with settings
designed to slow the growth rate, these disks may eventually run out of free space.

The current options to reduce the database size are as follows:

- [Resyncing database from scratch](sync.md#resync-a-node-from-scratch)
- [Pruning](pruning.md)

The table below presents a short comparison of these methods including possible fine-tuning of each method. Data was
fetched from a node running on a machine with the below specifications:

- **Node.js**: v1.18.0
- **Consensus client**: Lighthouse
- **CPU**: AMD EPYC 7713 (16 cores allocated for the VM)
- **RAM**: 64 GB
- **Disk size**: 1.2 TB
- **Disk IOPS**: 70,000 to 80,000

| Metric | Resync | Pruning | Pruning and memory budget (4 GB) |
| - | - | - | - |
| **Execution time** | ~4h | ~24h | ~12h |
| **Minimum free disk space** | N/A. You can execute resync even if there is 0 free space (avoid such a case). | 250 GB | 250 GB |
| **Attestation rate drop** | 100%. No attestation rewards during that time or highly reduced. | 5–10% during that time | N/A |
| **Average block processing time of new blocks during the process** | N/A. New blocks are processed after state but are significantly slower until old bodies/receipts are downloaded. Afterward, average about 0.35s. | 0.7s | 1.0s |
| **Is the node online during the process?** | No, unless the state is synced. | Yes. The node follows the chain, and all modules are still enabled. | Yes. The node follows chain and all modules are still enabled. |

The command used for testing disk IOPS was as follows:

```bash
fio --randrepeat=1 --ioengine=libaio --direct=1 --gtod_reduce=1 --name=test --filename=test --bs=4k --iodepth=64 --size=4G --readwrite=randrw
```
