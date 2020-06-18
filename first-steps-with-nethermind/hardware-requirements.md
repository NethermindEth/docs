---
description: Check if you can run Nethermind with your current setup
---

# Hardware Requirements

Generally **the faster IO operations the better**. For this reason [Digital Ocean](https://www.digitalocean.com/) and [UpCloud](https://upcloud.com/) are so far the best cloud providers we have tested when running Nethermind nodes. 

After startup the node will display the estimated max memory usage but not everything is accounted for and some block processing / some fast sync temporary caches may go above these values.

Minimum requirements can be found below.

### Goerli Fast Sync

| Disk space | Memory | Cores |
| :--- | :--- | :--- |
| 10+ GB | 1 GB | 1 |

### Mainnet Fast Sync

| Disk space | Memory | Cores |
| :--- | :--- | :--- |
| 350+ GB | 4 GB | 2 |

### Rinkeby Fast Sync

| Disk space | Memory | Cores |
| :--- | :--- | :--- |
| 50+ GB | 4 GB | 2 |

### Ropsten Fast Sync

| Disk space | Memory | Cores |
| :--- | :--- | :--- |
| 100+ GB | 4 GB | 2 |

### Mainnet Full Archive

| Disk space | Memory | Cores |
| :--- | :--- | :--- |
| 4.3+ TB | 16 GB | 4 |

