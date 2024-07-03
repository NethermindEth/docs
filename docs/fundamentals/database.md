---
title: Database
sidebar_position: 5
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Nethermind uses the [RocksDB](https://rocksdb.org) database to store the state. By default, the database is located in the
same directory where the Nethermind executable is. You can change the database location using the [`-d, --baseDbPath`](configuration.md#basic-options) command line option.

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

- `state`: 153 GB
- `receipts`: 196 GB
- `blocks`: 571 GB
- `bloom`: 6.2 GB
- `headers`: 8.6 GB
- `code`: 4.4 GB
- `blobTransactions`: 1.4 GB
- ...
- **Total: 942 GB**

</TabItem>
<TabItem value="sepolia" label="Sepolia">

- `state`: 35 GB
- `receipts`: 32 GB
- `blocks`: 218 GB
- `bloom`: 1.9 GB
- `headers`: 2.0 GB
- `code`: 5.3 GB
- `blobTransactions`: 925 MB
- ...
- **Total: 295 GB**

</TabItem>
<TabItem value="holesky" label="Holesky">

- `state`: 16 GB
- `receipts`: 8.8 GB
- `blocks`: 44 GB
- `bloom`: 541 MB
- `headers`: 667 MB
- `code`: 376 MB
- `blobTransactions`: 1.1 GB
- ...
- **Total: 70 GB**

</TabItem>
<TabItem value="gnosis" label="Gnosis">

- `state`: 61 GB
- `receipts`: 209 GB
- `blocks`: 188 GB
- `bloom`: 8.8 GB
- `headers`: 9.6 GB
- `code`: 669 MB
- `blobTransactions`: 75 MB
- ...
- **Total: 479 GB**

</TabItem>
<TabItem value="chiado" label="Chiado">

- `state`: 2.5 GB
- `receipts`: 1.4 GB
- `blocks`: 7.7 GB
- `bloom`: 2.7 GB
- `headers`: 1.9 GB
- `code`: 51 MB
- `blobTransactions`: 2.8 GB
- ...
- **Total: 20 GB**

</TabItem>
<TabItem value="energyweb" label="Energyweb">

- `state`: 26 GB
- `receipts`: 4.3 GB
- `blocks`: 24 GB
- `bloom`: 9.4 GB
- `headers`: 6.6 GB
- `code`: 13 MB
- `blobTransactions`: 
- ...
- **Total: 72 GB**

</TabItem>
<TabItem value="volta" label="Volta">

- `state`: 34 GB
- `receipts`: 8.2 GB
- `blocks`: 32 GB
- `bloom`: 8.7 GB
- `headers`: 6.6 GB
- `code`: 92 MB
- `blobTransactions`: 
- ...
- **Total: 91 GB**

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
