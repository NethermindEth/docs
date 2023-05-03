---
description: Description of all possible options, their pros and cons
---

# How to reduce database size

The Nethermind database can experience substantial growth over time, starting from an initial size of approximately 650 GB. As a result, many node-setups are configured to run on 1TB disks. However, even with the application of settings designed to slow the growth rate, these disks may eventually run out of free space.

Current options to reduce db size are:

1. [resync-database-from-scratch.md](resync-database-from-scratch.md "mention")
2. [full-pruning.md](full-pruning.md "mention")

The table below presents a short comparison of these methods including possible fine-tuning of each method. Data was fetched from a node running on a machine with the below specifications:\
\
**Node Version**: 1.18.0\
**Consensus Client**: Lighthouse\
**CPU**: AMD EPYC 7713 64-Core Processor (16 cores allocated for this VM)\
**RAM**: 64GB\
**Disk Size**: 1.2 TB\
**IOPS of the disk\***: 70,000 - 80,000 IOPS (results vary in this range)

| Metric                                                         | Resync                                                                                                                                                        | Full Pruning                                                | Full Pruning + Memory Budget (4 GB)                         |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| **Time of execution**                                          | \~4h                                                                                                                                                          | \~24h                                                       | \~12h                                                       |
| **Minimum free disk space**                                    | N/A - you can execute resync even if there is 0 free space (avoid such case)                                                                                  | 250 GB                                                      | 250 GB                                                      |
| **Attestation rate drop**                                      | 100% - no attestation rewards during that time or highly reduced                                                                                              | 5-10% during that time.                                     | TBC - not enough data yet                                   |
| **Average block processing time of new blocks during process** | N/A - new blocks are being processed after state but are significantly slower until OldBodies and OldReceipts are downloaded. Afterwards, average about 0.35s | 0.7s                                                        | 1.0s                                                        |
| **Is node online during process?**                             | No - unless State is synced                                                                                                                                   | Yes - node follows chain and all modules are still enabled. | Yes - node follows chain and all modules are still enabled. |

{% hint style="info" %}
Command used for testing IOPS of disk:\
`fio --randrepeat=1 --ioengine=libaio --direct=1 --gtod_reduce=1 --name=test --filename=test --bs=4k --iodepth=64 --size=4G --readwrite=randrw`
{% endhint %}
