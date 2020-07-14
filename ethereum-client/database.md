---
description: dbpath and databases info
---

# Database

Nethermind uses the [RocksDB](https://rocksdb.org) database to store state. By default the database is stored in the same directory where the client binaries are. You can change it by providing a `--baseDbPath` config switch in the command line, e.g.`./Nethermind.Runner --config goerli --baseDbPath /home/username/nethermind_db`

After Nethermind is started, you will see multiple directories appearing in the _baseDbPath_ directory.

![Example of the DB directory on a freshly deployed Ubuntu VM with Nethermind.](../.gitbook/assets/image%20%2861%29.png)

| DB Directory | Content |
| :--- | :--- |
| blockInfos | information about blocks at each level of the block tree \(canonical chain and branches\) |
| blocks | block bodies \(block transactions and uncle data\) |
| bloom | bloom indexes for fast log searches |
| canonicalHashTrie | LES protocol related data |
| code | contract bytecodes |
| discoveryNodes | peers discovered via discovery protocol - used for quick peering after restarts \(you can copy this DB between nodes to speed up peering\) |
| headers | block headers only |
| pendingTx | \(this DB is wiped out on each restart\) 2nd level cache of pending transactions / mempool \(1st level is in memory\) |
| peers | stores additional sync peers information \(like peer reputation\) - you can copy this DB between nodes to speed up peering on fresh sync  |
| receipts | transaction receipts data |
| state | blockchain state including accounts and contract storage \(Patricia trie nodes\) |

You can use `rsync` between your nodes to clone the database \(One of our users copied entire 4.5TB archive state this way while the node was running and only stopped the node for the very last stage of `rsync` \). You can also simply copy the database between Unix and Windows systems \(and most likely macOS\).

