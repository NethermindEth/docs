---
description: Check if you can run Nethermind with your current setup
---

# Hardware Requirements

Generally **the faster IO operations the better**. For this reason [Digital Ocean](https://www.digitalocean.com/) and [UpCloud](https://upcloud.com/) are so far the best cloud providers we have tested when running Nethermind nodes.

When syncing locally make sure that you get the fastest SSD possible. Assume that any storage at HDD speed level is not supported (most likely will take many times longer to sync and possibly will not be able to catch up with the network).

After startup the node will display the estimated max memory usage but not everything is accounted for and some block processing / some fast sync temporary caches may go above these values.

You can use the config option --Init.MemoryHint to suggest the amount of memory to be used by the database and some network operations. During the sync process there will be more memory used for caches.

Suggested requirements can be found below.

You can try much lower setups with smaller networks.

| Network                  | Disk space (GB) | Memory (GB) | Cores |
| ------------------------ | :-------------: | :---------: | :---: |
| **Mainnet Fast Sync**    |       600+      |      16     |   4   |
| **Mainnet Full Archive** |  12000+ (12 TB) |     128     |   8   |
| **Goerli Fast Sync**     |       100+      |      8      |   2   |
| **Goerli Full Archive**  |       400+      |      8      |   4   |
| **Ropsten Fast Sync**    |       200+      |      8      |   4   |
| **Gnosis Fast Sync**     |       120+      |      16     |   2   |
| **Rinkeby Fast Sync**    |       100+      |      4      |   2   |
| **Poacore Fast Sync**    |       100+      |      4      |   2   |
| **EnergyWeb Fast Sync**  |       120+      |      8      |   2   |
| **Volta Fast Sync**      |       200+      |      8      |   2   |
| **Sokol Fast Sync**      |       100+      |      4      |   2   |
| **Sokol Full Archive**   |       600+      |      8      |   2   |

Disk space requirements:

A freshly fast synced mainnet disk space usage (as of July 2020):

![If you sync without receipts the 160GB space can be saved. Without bodies - 99GB more.](<../.gitbook/assets/image (56).png>)



