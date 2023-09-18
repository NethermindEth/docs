---
title: Pruning
sidebar_position: 5
---

## Overview

Full Pruning pertains to the elimination or cleanup of obsolete historical data to optimize disk space. Clients are
responsible for maintaining the world state, which comprises a database that portrays the current Ethereum network
status. The world state encompasses accounts, contracts, and other information.

The goal of Full Pruning is to reduce disk requirements by storing only the current world state and removing historical
data. This differs from archive nodes that retain complete transaction and state history. Full Pruning is useful for
users who don't require historical data and prefer to interact solely with the current state of the network. However,
Full Pruning may limit the client's ability to fulfill requests that depend on historical information.

## How it works

During synchronization using the Snap Sync method, the Nethermind client produces a local copy of the Ethereum Network
state, which typically amounts to approximately 160 GB (state database). Entire database may rise up to 600-650GB.
Although this size increases by around 30 GB each week, certain historical data is retained that is not necessary for
node operation or to maintain a current Ethereum state.

When Full Pruning is activated and initiated, it conducts a thorough examination of the entire state tree to determine
which data is no longer required and can be treated as historical. It then determines which information corresponds to
the current state, and duplicates it alongside the existing version. During verification of each node in the state, the
new pruned state replaces the previous one. Once the verifier confirms that everything is functioning correctly, the old
state database is eliminated, resulting in significant disk space savings. As a result, the size of the database will be
close to its initial size again.

## Preparation for Full Pruning

Because Full Pruning is executed while the node is connected to the network, it can affect the performance of the node.
The process can consume significant amounts of RAM, CPU, and disk resources, which can impact block processing time.
This, in turn, can lead to reduced rewards for Validator setups, particularly for PoS chains.

Currently, Full Pruning takes between 20 to 30 hours to complete, although the duration may vary based on the user's
hardware configuration. To ensure that the process runs smoothly, a minimum of 200 GB of free disk space is required.
However, it's recommended to have at least 300 GB or more of free disk space.

Do not enable Full Pruning on an Archive node, as these are two opposing features. Archive nodes are designed to store
complete historical data, whereas Full Pruning eliminates it. To ensure that Pruning.Mode is disabled for
both `InMemory` and `Full`, set the flag `Pruning.Mode=None`.

## How to configure Full Pruning

As a very first point please review a Pruning configuration options from this documentation
page: [pruning.md](configuration.md#pruning).

To activate the Full Pruning feature, you must set either the `Pruning.Mode=Hybrid` or `Pruning.Mode=Full` flag for your
node.

:::info
Setting `Pruning.Mode=Hybrid` enables both `InMemory` and `Full` modes. `InMemory` mode helps the node grow at a slower
rate compared to `Pruning.Mode=Full`. With this configuration, Full Pruning is executed less frequently, promoting
healthier disk operation. Since Full Pruning is hardware-intensive, this configuration is also beneficial for
attestation results.
:::

The next step is to determine the trigger conditions for Full Pruning. Currently, there are three options available:

1. Manual
2. Size of state database
3. Amount of free disk space

Below is a brief explanation of each option.

### Manual trigger

Manual mode enables Full Pruning to be triggered only upon request, providing full control over this functionality. To
configure this mode, add the following flags to your node: `--Pruning.Mode=Hybrid --Pruning.FullPruningTrigger=Manual`.

Additionally, you can add an Admin module to your JsonRPC to
execute [#admin\_prune](../interacting/json-rpc-ns/admin.md#admin_prune) command. Here's how
to do it:

1. Add `Admin` module to `EnabledModules` on current JsonRpc port (below example - append Admin as last value if you are
   overriding it already):\
   `JsonRpc.EnabledModules=[Eth, Subscribe, Trace, TxPool, Web3, Personal, Proof, Net, Parity, Health, Rpc, Admin]`
2. Create a separate port only for `Admin` module:\
   `JsonRpc.AdditionalRpcUrls=http://127.0.0.1:8555|http|admin`

Now restart a node and if everything is properly configured, you should be able to
trigger [#admin\_prune](../interacting/json-rpc-ns/admin.md#admin_prune) command and Full
Pruning should
be started.

:::caution
One potential disadvantage of Manual mode is that if Full Pruning is not triggered in time (due to insufficient disk
space), it cannot be executed. In such cases, the only option to free up disk space would be to resync the node from
scratch.
:::

### Size of state database

`StateDbSize` mode enables Full Pruning to be triggered automatically when the state database reaches a specified size.
To enable this mode, add the following
flags: `--Pruning.Mode=Hybrid --Pruning.FullPruningTrigger=StateDbSize --Pruning.FullPruningThresholdMb=256000`, where
256000 should be set based on current requirements.

With this configuration, Full Pruning will be triggered automatically whenever the state database size exceeds 256000
MB (250 GB). Since the state database initially has around 160 GB, pruning will be triggered when the database size
grows beyond 90 GB.

:::info
To avoid unexpected behavior and ensure that Full Pruning can be completed in full, it's recommended to set the
threshold value to trigger pruning before the free disk space drops below 250 GB as a minimum. This ensures that there
is sufficient free disk space available for the Full Pruning process.
:::

### Free disk space left on machine

> This is a recommended approach as it ensures, that pruning will be executed on time

`VolumeFreeSpace` mode allows Full Pruning to be triggered when the amount of free disk space reaches a selected
minimum. To enable this mode, add the following
flags: `--Pruning.Mode=Hybrid --Pruning.FullPruningTrigger=VolumeFreeSpace--Pruning.FullPruningThresholdMb=256000`,
where 256000 should be set based on current requirements. However, it should never be set below the default value of

256000.

This configuration will trigger Full Pruning whenever the amount of free disk space drops to 250 GB. This ensures that
pruning is invoked as infrequently as possible while also ensuring that there is always sufficient free space available
to trigger it.

:::danger
It's recommended not to set the value below 250 GB for stability reasons. In reality, Full Pruning should require
approximately the same amount of space as a fresh state database (around 160 GB), but it also needs a threshold for
processing and other operations since it creates a copy of the existing state database. Therefore, it's essential to
maintain a minimum amount of free disk space to ensure stable and reliable pruning performance.
:::

## Monitoring progress of Full Pruning

When Full Pruning is triggered correctly, several messages will be visible in the logs of the Nethermind process.

Very first ones should be:

> Full Pruning Ready to start: pruning garbage before state BLOCK\_NUMBER with root ROOT\_HASH.\
> **WARN**: Full Pruning Started on root hash ROOT\_HASH: do not close the node until finished or progress will be lost.

From that moment ensure that no restarts will be performed on a node to ensure that Full pruning will be done properly.
After few minutes first logs with progress would start to appear:

> Full Pruning In Progress: 00:00:57.0603307 1.00 mln nodes mirrored.\
> Full Pruning In Progress: 00:01:40.3677103 2.00 mln nodes mirrored.\
> Full Pruning In Progress: 00:02:25.6437030 3.00 mln nodes mirrored.

Pruning may take even **more than 30 hours** (this depends on CPU and IO operations on disk).

Whenever pruning will be completed, there will be a log message:

> Full Pruning Finished: 15:25:59.1620756 1,560.29 mln nodes mirrored.

As you can notice, on this example it took around 15 hours.

:::info
Since the amount of mirrored nodes is not a static value, it's not possible to provide a simple progress indicator in
percentage. Therefore, the approximate value given should be used to determine when Full Pruning is expected to be
completed.
:::

## Additional settings

### FullPruningMemoryBudgetMb

The `FullPruningMemoryBudgetMb` configuration parameter controls the memory budget allocated for the trie visit during
the full pruning process. By increasing this value, the number of required read IOPS (Input/Output Operations Per
Second) can be significantly reduced, which results in a faster full pruning operation. However, this improvement comes
at the expense of increased RAM usage.\
\
Assuming your system has a total of 64GB of RAM, with the application, CL client, and system expenses consuming 20GB,
you need to determine the maximum value for `FullPruningMemoryBudgetMb` while ensuring that the system remains stable
and respecting the given limit.

In this case, you have 44GB (64GB - 20GB) of available RAM for increasing the `FullPruningMemoryBudgetMb` value. To
calculate the maximum value in megabytes, multiply the available RAM by 1024 (since 1GB = 1024MB):

```
44GB * 1024MB/GB = 45056MB
```

:::info
Setting the `FullPruningMemoryBudgetMb` value higher than 16GB may not provide any additional performance benefits.
:::

However, there is a recommendation that the value of `FullPruningMemoryBudgetMb` should not be higher than 16GB. So,
considering this guideline, you can set the `FullPruningMemoryBudgetMb` value to a maximum of 16GB, which is equivalent
to:

```
16GB * 1024MB/GB = 16384MB
```

To apply this value, update the configuration file as follows:

```
Pruning.FullPruningMemoryBudgetMb=16384
```

Please note that this example assumes that the remaining 44GB of RAM is sufficient for the full pruning memory budget.
Depending on the specific use case and system requirements, it may be necessary to further adjust the value to optimize
performance and resource usage.

### FullPruningCompletionBehavior

This setting determines the behavior of the node after Full Pruning has completed. By default, the node will continue to
progress as usual. However, if the user wishes to shut down the node after Full Pruning has completed, there are two
options available:

1. `None`: No special action will be taken.
2. `ShutdownOnSuccess`: Nethermind will shut down if the Full Pruning process is successful.
3. `AlwaysShutdown`: Nethermind will shut down once Full Pruning completes, regardless of whether it succeeded or
   failed.

### FullPruningMaxDegreeOfParallelism

This setting determines the number of parallel tasks and threads that can be used by Full Pruning:

1. 0: the number of logical processors
2. 1: Full Pruning will run on a single thread.

The recommended value depends on the type of node being used. If the node needs to be responsive (e.g., RPC or Validator
node), it's recommended to use a value below the number of logical processors. If the node doesn't have many other
responsibilities but needs to reliably follow the chain without delays and produce live logs, the default value is
recommended. If the node doesn't need to be responsive, has very fast I/O (such as NVME), and the shortest pruning time
is desired, this can be set to 2-3 times the number of logical processors.

## Side notes

During the Full Pruning process, several things should be kept in mind:

1. Full Pruning is a very heavy task, but it's performed in the background, so the node continues to progress and follow
   the chain.
2. Due to the heaviness of the task, it may affect validator rewards effectiveness, but since it's executed only once
   every few months, it shouldn't have a significant impact on overall results (we've experienced approximately 5-10%
   loss of rewards during Full Pruning).
3. Ensure that your disk has at least 250 GB of free space after syncing the node. Otherwise, Full Pruning will never
   complete successfully.
4. Several things can be done to reduce the size of the database after syncing (such as setting AncientBarriers to a
   proper value higher than 0, using CL which requires less disk space, and setting logs to the lowest level to avoid
   log spamming).