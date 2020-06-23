---
description: Check if you can run Nethermind with your current setup
---

# Hardware Requirements

Generally **the faster IO operations the better**. For this reason [Digital Ocean](https://www.digitalocean.com/) and [UpCloud](https://upcloud.com/) are so far the best cloud providers we have tested when running Nethermind nodes. 

After startup the node will display the estimated max memory usage but not everything is accounted for and some block processing / some fast sync temporary caches may go above these values.

For smaller networks (since version 1.8.50) you can use --Init.MemoryHint to limit the amount of memory used by the database. --Init.MemoryHint 256000000 will try to keep most of the DB caches under 256MB. This number does not include any sync caches and blockchain processing memory so the overall node memory can be beyond the configured number.

Minimum requirements can be found below.

| Network | Disk space | Memory | Cores |
| :--- | :--- | :--- | :--- |
| **Goerli Fast Sync** | 20+ GB | 2 GB | 3 |
| **Mainnet Fast Sync** | 350+ GB | 4 GB | 4 |
| **Rinkeby Fast Sync** | 50+ GB | 4 GB | 4 |
| **Ropsten Fast Sync** | 100+ GB | 8 GB | 4 |
| **Mainnet Full Archive** | 4.5+ TB | 16 GB | 6 |

