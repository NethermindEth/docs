---
description: Check if you can run Nethermind with your current setup
---

# Hardware Requirements

Generally **the faster IO operations the better**. For this reason [Digital Ocean](https://www.digitalocean.com/) and [UpCloud](https://upcloud.com/) are so far the best cloud providers we have tested when running Nethermind nodes. 

After startup the node will display the estimated max memory usage but not everything is accounted for and some block processing / some fast sync temporary caches may go above these values.

Minimum requirements can be found below.

| Network | Disk space | Memory | Cores |
| :--- | :--- | :--- | :--- |
| **Goerli Fast Sync** | 10+ GB | 1 GB | 1 |
| **Mainnet Fast Sync** | 350+ GB | 4 GB | 2 |
| **Rinkeby Fast Sync** | 50+ GB | 4 GB | 2 |
| **Ropsten Fast Sync** | 100+ GB | 8 GB | 4 |
| **Mainnet Full Archive** | 4.3+ TB | 16 GB | 4 |

