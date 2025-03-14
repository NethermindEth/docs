---
title: Performance tuning
sidebar_position: 7
---

By default, Nethermind is configured for general use cases that fit well for most users. However, to improve various aspects of Nethermind performance, there are options for different subsystems that can be configured for your specific needs.

:::info
This guide uses some undocumented configuration options that are not intended for the general public and may change in future releases.
:::

## Peer discovery

To connect to the Ethereum network, Nethermind needs to maintain connections to other clients. The number of connections can be configured with [`Network.MaxActivePeers`](./configuration.md#network-maxactivepeers) configuration option. The default value depends on the network. Increasing this number may reduce syncing time, while reducing this number may help with attestation performance.
Also, you can increase the rate at which a new connection is established with `Network.MaxOutgoingConnectPerSec`. The default value is 20 while 50 would be a reasonable higher value. This tends to reduce the snap sync time; however, some ISPs may throttle your Internet connection if you set this value too high. Also, some Wi-Fi routers may hang if the value is set too high.

## Port forwarding

While port forwarding is not strictly required, it helps significantly with finding peers and is essential for the network's overall health. The exact steps for port forwarding highly depend on your environment, router, and ISP. For most home configurations, automatic port forwarding can be turned on with [`Network.EnableUPnP`](./configuration.md#network-enableupnp).
Some ISPs are more restrictive and do not support port forwarding and/or utilize provider-level NAT. In such cases, your best option is to use a VPN that supports port forwarding. Keep in mind that consensus clients need a separate port forwarding.

## Sync time

On the Ethereum mainnet, most of the syncing time is split into three phases: snap sync, old bodies, and old receipts. Strictly speaking, there are also fast sync, full sync, and state sync phases. However, they usually complete in less than a minute, with state sync usually taking up to 3 minutes.

At the moment, the best test case sync time is 1 hour 50 minutes for all phases with the following configuration:

- CPU: AMD Ryzen 9 7950X
- Memory: 128GB RAM
- Storage: Intel Optane SSD 905P Series 900GB
- Network: 1 Gbps Internet with TorGuard VPN with WireGuard protocol. Both execution and consensus clients port forwarding are set up manually.
- Command line options:

    ```
    --network-enableupnp
    --network-maxoutgoingconnectpersec 50
    --network-processingthreadcount 32
    --sync-tunedbmode HeavyWrite
    ```

## Snap sync

Snap sync is the process of downloading the Ethereum state tree. After it is complete, and after the state sync phase, Nethermind can process and follow the chain. The fastest tested snap sync and state sync time is 25 minutes.
This phase is the most I/O-intensive sync phase, and therefore, assuming a fast internet, the sync time highly depends on your SSD's write speed. Remember that most SSDs only advertise peak write speed, usually above 5GB/s. However, they tend to slow down significantly to around 0.5GB/s (or even less for a QLC SSD) after a few seconds. Therefore, look for SSDs with high sustained write speed.

Also, ensuring your SSD is sufficiently cooled to prevent thermal throttling is essential. This is often overlooked as most workloads rarely stress SSD as much; however, to reduce sync time, Nethermind will utilize your SSD to its limit.

Nethermind temporarily changes the database configuration during sync to optimize it for writing, notably the option `Sync.TuneDbMode` is set to `HeavyWrite` by default. On some systems with slow SSDs, the setting the `Sync.TuneDbMode` to `AggressiveHeavyWrite` may give some boost. Also, the compaction can be disabled altogether by setting the `Sync.TuneDbMode` to `DisableCompaction`. This is likely faster for systems using entry-level NVMe SSDs and is also useful to extend the lifespan of your SSD as it provides the lowest total writes possible. However, it uses about 3GB of extra memory during snap sync. The state sync phase may appear to hang for about 10 minutes as the whole database compacts for the first time after snap sync.

## Old bodies and receipts

Old bodies and old receipts are the process of downloading block bodies and receipts. This is required for some RPC methods, such as `eth_getLogs`, and for consensus clients to work correctly. If you don't need them, skip this phase by setting the [`Sync.DownloadBodiesInFastSync`](../fundamentals/configuration.md#sync-downloadbodiesinfastsync) to `false`, [`Sync.DownloadReceiptsInFastSync`](../fundamentals/configuration.md#sync-downloadreceiptsinfastsync) to `false`, and [`Sync.NonValidatorNode`](../fundamentals/configuration.md#sync-nonvalidatornode) to `true`.

Old bodies and receipts are mainly limited by your Internet connection. With a 1Gbps connection, they consume around 250MB/s and 500MB/s of writes, respectively, which is generally reasonable for most PCIE SSDs. On older systems or VPS with low single thread performance and high Internet speed, the block body deserialization may be a bottleneck, in which case, you can increase the number of network processing threads by setting `Network.ProcessingThreadCount` to `32`. However, this may impact block processing time.

## Block processing time and attestation

Block processing time is primarily limited by SSD performance. In practice, it is the SSD's _response time_, not just its IOPS, that matters. However, since most SSDs don't advertise response times, IOPS often serves as a useful approximation.

Nethermind includes a _prewarming_ feature that parallelizes state reads by executing transactions concurrently, warming up state reads for the main block processing. This effectively hides SSD latency, although it increases CPU usage. For non-validator nodes, where RPC throughput is more important, you can turn off this optimization by setting the [`Blocks.PreWarmStateOnBlockProcessing`](../fundamentals/configuration.md#blocks-prewarmstateonblockprocessing) option to `false`. While disabling prewarming may conserve CPU resources, the benefits are typically minor.

## Memory

Ethereum aims to be maximally decentralized, so the default Nethermind configuration minimizes system resource usage. However, several tunable parameters are available if your system has large enough memory.

### At least 32 GB

For systems with at least 32 GB of memory, the following configuration is recommended:

- `Pruning.CacheMb: 2000`

  The [pruning cache](../fundamentals/pruning.md#in-memory-cache-size) increased from 1 GB to 2 GB, reducing total SSD writes by roughly a factor of 3 (note that ~500 MB of cache is retained for snap serving).

- `Db.StateDbWriteBufferSize: 100000000`

  The write buffer size should be increased proportionally with the pruning cache to avoid extended pruning times that might block attestation.

- `Db.StateDbAdditionalRocksDbOptions: "block_based_table_factory={index_type=kBinarySearch;partition_filters=0;};"`

  Changes the database index not to use the partitioned index, improving latency at the cost of ~500 MB of additional memory.

### At least 128 GB

For systems with at least 128 GB of memory, the following configuration is recommended:

- `Pruning.CacheMb: 4000`

  The [pruning cache](../fundamentals/pruning.md#in-memory-cache-size) is increased to 4 GB, and the write buffer size to 200 MB.

- `Db.StateDbWriteBufferSize: 200000000`
- `Db.StateDbAdditionalRocksDbOptions: "block_based_table_factory={index_type=kBinarySearch;partition_filters=0;};"`
- `Db.StateDbEnableFileWarmer: true`

  Enabling the file warmer primes the OS cache by reading the database files at startup. Without this option, the OS cache can take several weeks to warm up naturally.

### At least 350 GB

For systems with at least 350 GB of memory, where the entire state can be loaded into memory, beneficial for RPC providers, the following configuration is recommended:

- `Pruning.CacheMb: 4000`

  The [pruning cache](../fundamentals/pruning.md#in-memory-cache-size) is increased to 4 GB, and the write buffer size to 200 MB.

- `Db.StateDbWriteBufferSize: 200000000`

- `Db.StateDbAdditionalRocksDbOptions: "block_based_table_factory={index_type=kBinarySearch;block_size=4092;block_restart_interval=2;partition_filters=0};compression=kNoCompression;allow_mmap_reads=1;"`

  Turning off the database compression and using a less compact encoding increases the database size (approximately 280 GB compared to the standard 160 GB) but offers a more CPU-efficient encoding for block processing. It also enables memory-mapped (MMAP) reads, which skip RocksDB's internal block cache and the memory allocator. Note, however, that to enable MMAP verification, checksum needs to be disabled.

- `Db.StateDbVerifyChecksum: false`

  In addition to prewarming, state access typically accounts for less than 10% of block processing time. This is notable, especially with server CPU, where the low frequency tends to result in higher block processing latency.
