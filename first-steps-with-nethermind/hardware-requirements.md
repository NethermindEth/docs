---
description: Check if you can run Nethermind with your current setup
---

# Hardware Requirements

Generally **the faster IO operations the better**. For this reason [Digital Ocean](https://www.digitalocean.com/) and [UpCloud](https://upcloud.com/) are so far the best cloud providers we have tested when running Nethermind nodes.

After startup the node will display the estimated max memory usage but not everything is accounted for and some block processing / some fast sync temporary caches may go above these values.

You can use the config option --Init.MemoryHint to suggest the amount of memory to be used by the database and some network operations. During the sync process there will be more memory used for caches.

Suggested requirements can be found below.

You can try much lower setups with smaller networks. You can also downgrade the VM after initial sync \(if you have used 16GB RAM for sync then 4GB RAM should be enough to run a synced mainnet node with --Init.MemoryHint 1500000000

| Network | Disk space | Memory | Cores |
| :--- | :--- | :--- | :--- |
| **Goerli Fast Sync** | 20+ GB | 3 GB | 2 |
| **Mainnet Fast Sync** | 350+ GB | 6 GB | 4 |
| **Rinkeby Fast Sync** | 50+ GB | 6 GB | 4 |
| **Ropsten Fast Sync** | 100+ GB | 6 GB | 4 |
| **Mainnet Full Archive** | 4.5+ TB | 16 GB | 6 |

