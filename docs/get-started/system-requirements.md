---
title: System requirements
sidebar_position: 1
---

## Supported operating systems

Nethermind supports a broad range of modern operating systems (64-bit-only) including but not limited to:

- **Linux**
	- Alpine 3.19+
	- CentOS Stream 9+
	- Debian 12+
	- Fedora 40+
	- openSUSE 15+
	- RHEL 8+
	- SLES 15+
	- Ubuntu 20.04+
- **Windows**
	- Windows 10+
	- Windows Server 2012+
- **macOS** 13+

## Hardware requirements

Suggested requirements can be found below.

| Network             | Memory | CPU cores |
|---------------------|:------:|:---------:|
| **Mainnet**         | 16 GB  | 4         |
| **Mainnet archive** | 128 GB | 8         |
| **Gnosis**          | 16 GB  | 2         |
| **Energy Web**      | 8 GB   | 2         |
| **Volta**           | 8 GB   | 2         |

### Disk requirements

As of October 2024, running an Ethereum Mainnet node with Nethermind's default configuration requires at least 2 TB of storage space. Nethermind itself takes around 1 TB, leaving the rest for the needs of the consensus client. Choosing a 2 TB disk is a comfortable option for most common Mainnet node usage patterns, including staking. Nonetheless, we recommend delving further into the topic to gain a comprehensive understanding of disk growth and usage.

#### Database growth

The database size increases over time as the Ethereum chain grows. The database is in its most optimal state immediately after a sync or full pruning. To maintain this process, occasional resyncing or pruning of the node is necessary to bring it back to its optimal database size. For more info on managing node disk usage growth, see [how to reduce database size](../fundamentals/database.md#reducing-database-size).\
A larger disk space allocation reduces the need for frequent maintenance and alleviates concerns about the chain outgrowing the available space. It's worth noting that the only drawback of running a smaller disk is the requirement for more regular resyncing or pruning.

For more up-to-date details about storage requirements for a specific network, see [Database size](../fundamentals/database.md#database-size).

#### Disk speed

The speed of the disk often acts as a bottleneck for the node's performance. It is crucial for optimizing your validator's performance rewards and the syncing process. We highly recommend a disk with a minimum of 10,000 IOPS for both write and read operations. Slower disks may hinder your ability to synchronize the blockchain successfully.

:::tip
Choosing SSD over spinning disks is essential for running a node. To choose a specific disk model, check out [Great and less great SSDs for Ethereum nodes](https://gist.github.com/yorickdowne/f3a3e79a573bf35767cd002cc977b038#the-good).
:::

#### Sync modes and disk usage

A node can be run using different syncing options, and each option has different characteristics of disk space usage.

- **Archive node.** This mode stores the full historical state for all blocks. As of July 2023, an archive node requires at least 14 TB of disk space, and it grows by approximately 60 GB per week.
- **Ancient barriers.** Nethermind allows you to specify how many old block bodies and receipts you want to store. By default, Nethermind sets the ancient barrier at block 11052984. This block is significant because it marks the deployment of the deposit contract required for consensus client deposit scanning for validators. Peers and JSON-RPC requests will not have access to block bodies and receipts older than the ancient barrier.
- **Non-validator mode.** This mode drops all historical receipts and bodies, but it cannot be used for validation.

For more details, see [sync modes](../fundamentals/sync.md).
