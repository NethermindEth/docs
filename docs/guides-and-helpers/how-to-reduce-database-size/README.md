---
description: Description of all possible options, their pros and cons
---

# How to reduce database size

The Nethermind database can experience substantial growth over time, starting from an initial size of approximately 650
GB. As a result, many node-setups are configured to run on 1TB disks. However, even with the application of settings
designed to slow the growth rate, these disks may eventually run out of free space.

Current options to reduce db size are:

1. [Re-sync database from scratch](resync-database-from-scratch.md)
2. [Full pruning](full-pruning.md)

The table below presents a short comparison of these methods including possible fine-tuning of each method. Data was
fetched from a node running on a machine with the below specifications:\
\
**Node Version**: 1.18.0\
**Consensus Client**: Lighthouse\
**CPU**: AMD EPYC 7713 64-Core Processor (16 cores allocated for this VM)\
**RAM**: 64GB\
**Disk Size**: 1.2 TB\
**IOPS of the disk\***: 70,000 - 80,000 IOPS (results vary in this range)

<table><thead><tr><th width="156">Metric</th><th width="186">Resync</th><th width="226">Full Pruning</th><th>Full Pruning + Memory Budget (4 GB)</th></tr></thead><tbody><tr><td><strong>Time of execution</strong></td><td>~4h</td><td>~24h</td><td>~12h</td></tr><tr><td><strong>Minimum free disk space</strong></td><td>N/A - you can execute resync even if there is 0 free space (avoid such case)</td><td>250 GB</td><td>250 GB</td></tr><tr><td><strong>Attestation rate drop</strong> </td><td>100% - no attestation rewards during that time or highly reduced</td><td>5-10% during that time.</td><td>TBC - not enough data yet</td></tr><tr><td><strong>Average block processing time of new blocks during process</strong></td><td>N/A - new blocks are being processed after state but are significantly slower until OldBodies and OldReceipts are downloaded. Afterwards, average about 0.35s</td><td>0.7s</td><td>1.0s</td></tr><tr><td><strong>Is node online during process?</strong></td><td>No - unless State is synced</td><td>Yes - node follows chain and all modules are still enabled.</td><td>Yes - node follows chain and all modules are still enabled.</td></tr></tbody></table>

:::info
Command used for testing IOPS of disk:\
`fio --randrepeat=1 --ioengine=libaio --direct=1 --gtod_reduce=1 --name=test --filename=test --bs=4k --iodepth=64 --size=4G --readwrite=randrw`
:::
