---
description: Run Nethermind from any platform of your choice
---

# System Requirements

This page describes the **supported operating systems** and **hardware requirements** to run the Nethermind client.&#x20;

## Supported operating systems

### Linux

{% embed url="https://docs.microsoft.com/en-us/dotnet/core/install/linux?tabs=netcore31&pivots=os-linux" %}
Supported operating systems
{% endembed %}

| Operating System             | Version |    Architecture   | Tested by us |
| ---------------------------- | ------- | :---------------: | :----------: |
| Red Hat Enterprise Linux     | 7+      |        x64        |       ❌      |
| CentOS                       | 8+      |        x64        |       ✔      |
| Ubuntu                       | 16.04+  | x64, ARM64, ARM32 |       ✔      |
| Fedora                       | 32+     |        x64        |       ✔      |
| Debian                       | 9+      | x64, ARM64, ARM32 |       ✔      |
| Linux Mint                   | 18+     |        x64        |       ❌      |
| openSUSE                     | 15+     |        x64        |       ❌      |
| SUSE Enterprise Linux (SLES) | 12 SP2+ |        x64        |       ❌      |
| Alpine Linux                 | 3.11+   |     x64, ARM64    |       ✔      |
| Raspberry PI4                | -       |    ARM64, ARM32   |       ✔      |
| Gentoo Linux                 | -       |       ARM64       |       ✔      |

### Windows

{% embed url="https://docs.microsoft.com/en-us/dotnet/core/install/windows?tabs=netcore31&pivots=os-windows" %}
Supported operating systems
{% endembed %}

| Windows 11          | 22H2+          |    x64   |  ✔  |
| ------------------- | -------------- | :------: | :-: |
| Windows 10 Client   | 1607+          | x64, x86 |  ✔  |
| Windows Client      | 7 SP1(\*), 8.1 | x64, x86 |  ✔  |
| Windows Server      | 2012 R2+       | x64, x86 |  ✔  |
| Windows Server Core | 2012 R2+       | x64, x86 |  ❌  |
| Nano Server         | 1809+          |    x64   |  ❌  |

### MacOS

{% embed url="https://docs.microsoft.com/en-us/dotnet/core/install/macos?tabs=netcore31&pivots=os-macos" %}
Supported operating systems
{% endembed %}

| macOS 10+ | x64, ARM (M1, M2) |  ✔  |
| --------- | :---------------: | :-: |

## Hardware requirements

Generally **the faster IO operations the better**. For this reason [Digital Ocean](https://www.digitalocean.com/) and [UpCloud](https://upcloud.com/) are so far the best cloud providers we have tested when running Nethermind nodes.

When syncing locally make sure that you get the fastest SSD possible. Assume that any storage at HDD speed level is not supported (most likely will take many times longer to sync and possibly will not be able to catch up with the network).

Internal testing showed the following IOPS required to sync mainnet, please note that this was a test environement ans results may vary. We recommend **at least 5000 IOPS** to properly sync mainnet. &#x20;

| IOPS  | Sync time |
| ----- | --------- |
| 2000  | \~15:30h  |
| 3000  | \~12:00h  |
| 5000  | \~12:00h  |
| 10000 | \~12:00h  |

After startup the node will display the estimated max memory usage but not everything is accounted for and some block processing / some fast sync temporary caches may go above these values.

You can use the config option --Init.MemoryHint to suggest the amount of memory to be used by the database and some network operations. During the sync process there will be more memory used for caches.

Suggested requirements can be found below.

You can try much lower setups with smaller networks.

| **Mainnet**         |      800+      |  16 |  4  |
| ------------------- | :------------: | :-: | :-: |
| **Mainnet Archive** | 14000+ (14 TB) | 128 |  8  |
| **Goerli**          |      100+      |  8  |  2  |
| **Goerli Archive**  |      400+      |  8  |  4  |
| **Gnosis**          |      120+      |  16 |  2  |
| **EnergyWeb**       |      120+      |  8  |  2  |
| **Volta**           |      200+      |  8  |  2  |

### Disk space requirements:

A freshly fast synced Mainnet disk space usage (as of May 2023)

<table><thead><tr><th width="238">Database</th><th width="251.33333333333331">Mainnet</th><th>Mainnet with Ancient Barriers</th></tr></thead><tbody><tr><td>State</td><td>161 GB</td><td>161 GB</td></tr><tr><td>Receipts</td><td>152 GB</td><td>104 GB</td></tr><tr><td>Blocks</td><td>334 GB</td><td>222 GB</td></tr><tr><td>Bloom</td><td>5.3 GB</td><td>5.3 GB</td></tr><tr><td>Headers</td><td>8.1 GB</td><td>8.1 GB</td></tr><tr><td>Code</td><td>3 GB</td><td>3 GB</td></tr><tr><td>Other</td><td>...</td><td>..</td></tr><tr><td><strong>Total</strong></td><td><strong>664 GB</strong></td><td><strong>504 GB</strong></td></tr></tbody></table>

