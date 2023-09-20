---
description: Run Nethermind on a platform of your choice
---

# System Requirements

Learn about the hardware and software requirements to run Nethermind.&#x20;

### Disk requirements

Running an Ethereum Mainnet full node requires at least a 1 TB fast disk, such as **NVMe or a fast SSD**. However, **2 TB is recommended** to minimize maintenance requirements. To choose a concrete disk model we recommend checking [Great and less great SSDs for Ethereum nodes](https://gist.github.com/yorickdowne/f3a3e79a573bf35767cd002cc977b038#the-good).\
\
Choosing a 2 TB disk is a comfortable option for most common Mainnet node usage patterns, including staking. Nonetheless, for a comprehensive understanding of disk growth and usage, we recommend delving further into the topic.

#### Database growth

Nethermind requires approximately 504 GB of disk space (as of May 2023) after a fresh Ethereum Mainnet sync using default parameters. This size increases over time as the Ethereum chain grows. The node's database is in its most optimal state immediately after a sync or full pruning. Following the initial sync, the database grows at a rate of approximately 27 GB per week. To maintain this process, occasional resyncing or pruning of the node is necessary to bring it back to its optimal database size. For more info on managing node disk growth, see [How to reduce database size](https://docs.nethermind.io/nethermind/guides-and-helpers/how-to-reduce-database-size). \
Having a larger disk space allocation reduces the need for frequent maintenance and alleviates concerns about the chain outgrowing the available space. It's worth noting that the only drawback of running a smaller disk is the requirement for more regular resyncing or pruning. We believe that a 2 TB disk will suffice for most users. However, the choice between 1 TB and 2 TB depends on factors such as hardware costs, cloud provider expenses, and individual requirements.

#### Disk speed

The speed of the disk often acts as a bottleneck for the node's performance. It is crucial for optimizing your validator's performance rewards and the syncing process. We highly recommend a disk with a minimum of 10,000 IOPS for both write and read operations. Slower disks may hinder your ability to synchronize the blockchain successfully.

#### Sync modes and disk usage

A node can be run using different syncing options, and each option has different characteristics of disk space usage.

* **Archive node.** This mode stores the full historical state for all blocks. As of July 2023, an archive node requires at least 14 TB of disk space, and it grows by approximately 60 GB per week.&#x20;
* **Ancient barriers.** Nethermind allows you to specify how many old block bodies and receipts you want to store. By default, Nethermind sets the ancient barrier at block 11052984. This block is significant because it marks the deployment of the deposit contract required for consensus client deposit scanning for validators. Peers and JSON-RPC requests will not have access to block bodies and receipts older than the ancient barrier.
* **NonValidatorMode.** This mode drops all historical receipts and bodies, but it cannot be used as a validator node.

For more detailed information about the various sync modes, see [Sync modes](https://docs.nethermind.io/nethermind/ethereum-client/sync-modes).

#### Database size with different configuration

The below table presents the Nethermind database size after fresh sync with different configurations and networks (as of May 2023).

| Network/configuration                   | Database size after fresh sync |
| --------------------------------------- | ------------------------------ |
| Mainnet (default settings)              | 504 GB                         |
| Mainnet without ancient barriers        | 664 GB                         |
| Mainnet archive                         | 14 TB                          |
| Mainnet without old bodies and receipts | 178 GB                         |
| Gnosis                                  | 112 GB                         |
| Goerli                                  | 240 GB                         |

#### Database in details

A freshly fast synced Mainnet disk space with details about concrete databases (as of May 2023).

<table><thead><tr><th width="238">Database</th><th width="251.33333333333331">Mainnet</th><th>Mainnet with Ancient Barriers</th></tr></thead><tbody><tr><td>State</td><td>161 GB</td><td>161 GB</td></tr><tr><td>Receipts</td><td>152 GB</td><td>104 GB</td></tr><tr><td>Blocks</td><td>334 GB</td><td>222 GB</td></tr><tr><td>Bloom</td><td>5.3 GB</td><td>5.3 GB</td></tr><tr><td>Headers</td><td>8.1 GB</td><td>8.1 GB</td></tr><tr><td>Code</td><td>3 GB</td><td>3 GB</td></tr><tr><td>Other</td><td>...</td><td>..</td></tr><tr><td><strong>Total</strong></td><td><strong>664 GB</strong></td><td><strong>504 GB</strong></td></tr></tbody></table>

#### Other chains in details

Nethermind officially supports multiple chains. Provided below is a comprehensive list of these chains along with a detailed breakdown of their respective database directories. For reference, the database sizes listed are based on data from July 2023 and have been determined using the standard configurations provided by Nethermind.

{% tabs %}
{% tab title="Chiado" %}
| Directory         | Size       |
| ----------------- | ---------- |
| State             | 1.6 GB     |
| Receipts          | 646 MB     |
| Blocks            | 2.3 GB     |
| Code              | 22 MB      |
| Peers             | 8 KB       |
| Witness           | 4.1 MB     |
| BlockInfos        | 224 MB     |
| Bloom             | 1.4 GB     |
| Headers           | 1.1 GB     |
| CanonicalHashTrie | 4.1 MB     |
| Metadata          | 4.1 MB     |
| DiscoveryNodes    | 1.7 MB     |
| **TOTAL**         | **7.1 GB** |
{% endtab %}

{% tab title="Gnosis" %}
| Directory         | Size   |
| ----------------- | ------ |
| State             | 40 GB  |
| Receipts          | 21 GB  |
| Blocks            | 43 GB  |
| Code              | 350 MB |
| Peers             | 8 KB   |
| Witness           | 4.1 MB |
| BlockInfos        | 1.5 GB |
| Bloom             | 7.5 GB |
| Headers           | 9.4 GB |
| CanonicalHashTrie | 4.1 MB |
| Metadata          | 4.2 MB |
| DiscoveryNodes    | 1.8 MB |
| **TOTAL**         | 121 GB |
{% endtab %}

{% tab title="Sepolia" %}
| Directory         | Size      |
| ----------------- | --------- |
| State             | 8.5 GB    |
| Receipts          | 8.2 GB    |
| Blocks            | 36 GB     |
| Code              | 1.5 GB    |
| Peers             | 8 KB      |
| Witness           | 4.1 MB    |
| BlockInfos        | 177 MB    |
| Bloom             | 1.3 GB    |
| Headers           | 1.2 GB    |
| CanonicalHashTrie | 4.1 MB    |
| Metadata          | 4.1 MB    |
| DiscoveryNodes    | 1.7 MB    |
| **TOTAL**         | **56 GB** |
{% endtab %}

{% tab title="Goerli" %}
| Directory         | Size       |
| ----------------- | ---------- |
| State             | 51 GB      |
| Receipts          | 35 GB      |
| Blocks            | 185 GB     |
| Code              | 7.4 GB     |
| Peers             | 8 KB       |
| Witness           | 4.1 MB     |
| BlockInfos        | 417 MB     |
| Bloom             | 2.5 GB     |
| Headers           | 3.5 GB     |
| CanonicalHashTrie | 4.1 MB     |
| Metadata          | 4.4 MB     |
| DiscoveryNodes    | 1.5 MB     |
| **TOTAL**         | **283 GB** |
{% endtab %}

{% tab title="Volta" %}
| Directory         | Size         |
| ----------------- | ------------ |
| State             | 35.71 GB     |
| Receipts          | 7.67 GB      |
| Blocks            | 25.11 GB     |
| Code              | 75.14 MB     |
| Peers             | 616 B        |
| Witness           | 119.95 KB    |
| BlockInfos        | 1.15 GB      |
| Bloom             | 7.40 GB      |
| Headers           | 6.94 GB      |
| CanonicalHashTrie | 120.00 KB    |
| Metadata          | 119.97 KB    |
| DiscoveryNodes    | 1.55 MB      |
| **TOTAL**         | **84.06 GB** |
{% endtab %}

{% tab title="Energyweb" %}
| Directory         | Size         |
| ----------------- | ------------ |
| State             | 31.13 GB     |
| Receipts          | 5.13 GB      |
| Blocks            | 15.55 GB     |
| Code              | 7.20 MB      |
| Peers             | 311 B        |
| Witness           | 103.11 KB    |
| BlockInfos        | 1.22 GB      |
| Bloom             | 7.78 GB      |
| Headers           | 6.70 GB      |
| CanonicalHashTrie | 103.35 KB    |
| Metadata          | 103.31 KB    |
| DiscoveryNodes    | 1.68 MB      |
| **TOTAL**         | **67.52 GB** |
{% endtab %}
{% endtabs %}

