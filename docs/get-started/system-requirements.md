---
title: System requirements
sidebar_label: System requirements
sidebar_position: 1
---

## Supported operating systems

Nethermind supports a broad range of modern _64-bit_ operating systems including but not limited to:

- **Linux**
	- Alpine (3.15 and later)
	- CentOS (Stream 8 and later)
	- Debian (10 and later)
	- Fedora (37 and later)
	- openSUSE (15.4 and later)
	- RHEL (8 and later)
	- SLES (15 and later)
	- Ubuntu (18.04 and later)
- **Windows**
	- Windows 10 and later
	- Windows Server 2012 and later
- **macOS** (10.15 Catalina and later)

:::info
Nethermind for Windows doesn't support AArch64 (ARM64) architecture.
:::

## Hardware requirements

Suggested requirements can be found below.

| Network             | Memory | CPU cores |
|---------------------|:------:|:---------:|
| **Mainnet**         | 16 GB  | 4         |
| **Mainnet archive** | 128 GB | 8         |
| **Goerli**          | 8 GB   | 2         |
| **Goerli archive**  | 8 GB   | 4         |
| **Gnosis**          | 16 GB  | 2         |
| **Energy Web**      | 8 GB   | 2         |
| **Volta**           | 8 GB   | 2         |

### Disk requirements

Running an Ethereum Mainnet full node requires at least a 1 TB fast disk, such as NVMe or a fast SSD. However, **2
TB is recommended** to minimize maintenance requirements. To choose a specific disk model, we recommend
checking out [this guide](https://gist.github.com/yorickdowne/f3a3e79a573bf35767cd002cc977b038#the-good). <br />
Choosing a 2 TB disk is a comfortable option for most common Mainnet node usage patterns, including staking.
Nonetheless, for a comprehensive understanding of disk growth and usage, we recommend delving further into the topic.

#### Database growth

Nethermind requires approximately 504 GB of disk space (as of May 2023) after a fresh Ethereum Mainnet sync using default parameters. This size increases over time as the Ethereum chain grows. The node's database is in its most optimal state immediately after a sync or full pruning. Following the initial sync, the database grows at a rate of approximately 27 GB per week. To maintain this process, occasional resyncing or pruning of the node is necessary to bring it back to its optimal database size. For more info on managing node disk usage growth, see [how to reduce database size](../02-fundamentals/08-how-to-reduce-database-size/README.md).<br />
Having a larger disk space allocation reduces the need for frequent maintenance and alleviates concerns about the chain outgrowing the available space. It's worth noting that the only drawback of running a smaller disk is the requirement for more regular resyncing or pruning. We believe that a 2 TB disk will suffice for most users. However, the choice between 1 TB and 2 TB depends on factors such as hardware costs, cloud provider expenses, and individual requirements.

#### Disk speed

The speed of the disk often acts as a bottleneck for the node's performance. It is crucial for optimizing your validator's performance rewards and the syncing process. We highly recommend a disk with a minimum of 10,000 IOPS for both write and read operations. Slower disks may hinder your ability to synchronize the blockchain successfully.

#### Sync modes and disk usage

A node can be run using different syncing options, and each option has different characteristics of disk space usage.

- **Archive node.** This mode stores the full historical state for all blocks. As of July 2023, an archive node requires at least 14 TB of disk space, and it grows by approximately 60 GB per week. 
- **Ancient barriers.** Nethermind allows you to specify how many old block bodies and receipts you want to store. By default, Nethermind sets the ancient barrier at block 11052984. This block is significant because it marks the deployment of the deposit contract required for consensus client deposit scanning for validators. Peers and JSON-RPC requests will not have access to block bodies and receipts older than the ancient barrier.
- **Non-validator mode.** This mode drops all historical receipts and bodies, but it cannot be used for validation.

For more details, see [sync modes](../02-fundamentals/03-sync-modes.md).

#### Database size with different configurations

The below table presents the Nethermind database size after fresh sync with different configurations and networks (as of
May 2023).

| Network/configuration                   | Database size after fresh sync |
|-----------------------------------------|--------------------------------|
| Mainnet (default)                       | 504 GB                         |
| Mainnet without ancient barriers        | 664 GB                         |
| Mainnet archive                         | 14 TB                          |
| Mainnet without old bodies and receipts | 178 GB                         |
| Gnosis                                  | 112 GB                         |
| Goerli                                  | 240 GB                         |

#### Database in details

A freshly fast-synced Mainnet disk space with details about specific databases (as of May 2023).

| Database  | Mainnet    | Mainnet with ancient barriers |
|-----------|------------|-------------------------------|
| State     | 161 GB     | 161 GB                        |
| Receipts  | 152 GB     | 104 GB                        |
| Blocks    | 334 GB     | 222 GB                        |
| Bloom     | 5.3 GB     | 5.3 GB                        |
| Headers   | 8.1 GB     | 8.1 GB                        |
| Code      | 3 GB       | 3 GB                          |
| Other     | ...        | ..                            |
| **Total** | **664 GB** | **504 GB**                    |
