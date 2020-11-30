---
description: Check if you can run Nethermind with your current setup
---

# Hardware Requirements

Generally **the faster IO operations the better**. For this reason [Digital Ocean](https://www.digitalocean.com/) and [UpCloud](https://upcloud.com/) are so far the best cloud providers we have tested when running Nethermind nodes.

When syncing locally make sure that you get the fastest SSD possible. Assume that any storage at HDD speed level is not supported \(most likely will take many times longer to sync and possibly will not be able to catch up with the network\).

After startup the node will display the estimated max memory usage but not everything is accounted for and some block processing / some fast sync temporary caches may go above these values.

You can use the config option --Init.MemoryHint to suggest the amount of memory to be used by the database and some network operations. During the sync process there will be more memory used for caches.

Suggested requirements can be found below.

You can try much lower setups with smaller networks. You can also downgrade the VM after initial sync \(if you have used 16GB RAM for sync then 4GB RAM should be enough to run a synced mainnet node with --Init.MemoryHint 1500000000

| Network | Disk space | Memory | Cores |
| :--- | :--- | :--- | :--- |
| **Goerli Fast Sync** | 20+ GB | 4 GB | 2 |
| **Mainnet Fast Sync** | 350+ GB | 16 GB | 4 |
| **Rinkeby Fast Sync** | 50+ GB | 8 GB | 4 |
| **Ropsten Fast Sync** | 100+ GB | 8 GB | 4 |
| **Mainnet Full Archive** | 4.5+ TB | 32 GB | 6 |

Disk space requirements:

A freshly fast synced mainnet disk space usage \(as of July 2020\):

![If you sync without receipts the 160GB space can be saved. Without bodies - 99GB more.](../.gitbook/assets/image%20%2856%29.png)





