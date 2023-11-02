---
title: Troubleshooting
sidebar_position: 8
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## File descriptor limits

In some cases, file descriptor limits may cause issues like "Too many open files". To solve that, see the instructions for your platform below.

<Tabs groupId="os">
<TabItem value="linux" label="Linux">

To increase the limits for the user running Nethermind (e.g., `nethermind`), run:

```bash
sudo echo "nethermind soft nofile 100000" > /etc/security/limits.d/nethermind.conf
sudo echo "nethermind hard nofile 100000" >> /etc/security/limits.d/nethermind.conf
```

</TabItem>
<TabItem value="macos" label="macOS">

To increase the limits, run:

```bash
ulimit -n 10000
```

If you run into issues with the above command, see the [workaround](https://developer.apple.com/forums/thread/735798?answerId=762679022#762679022).

Note that the changes above are temporary and will be reset after the system reboot. To make them permanent, you can add them to your `~/.bashrc` or `~/.bash_profile` shell configuration file.

</TabItem>
</Tabs>

## RocksDB checksum issue

Sometimes RocksDB may fail with an exception similar to the one below:

2020-11-29 12:02:01.1968|BlockchainProcessor encountered an exception. RocksDbSharp.RocksDbException: Corruption: block
checksum mismatch: expected 2087346143, got 2983326672 in C:\Nethermind\nethermind\_db/mainnet\state/037463.sst offset
33439089 size 16319

On XFS file system under very high memory pressure, this tend to happen. Turning on the
flag `--Db.UseDirectIoForFlushAndCompactions true`will help, although it might reduce performance.

On most cases however, this is due to RAM module issue. Please run [memtest86](https://www.memtest86.com/) to check your
memory module.&#x20;

## Database LOCK files not removed by RocksDB

If the node complains about the LOCK files it may mean one of the two things:

(1) another Nethermind process is running and using the same DB

(2) previous process did not close the DB properly

When (2) happens you can run

`find . -type f -name 'LOCK' -delete`

in the database folder.

## Leaking Socket Descriptors

On Linux our networking library is not closing socket descriptors properly. This results in the number of open files for
the process growing indefinitely. Limits for the number of open files per process are different for root and other
users. For root the limits are usually very high and the socket descriptors would probably not cause much trouble. Many
of the cloud operators are launching VMs with root user access by default. If Nethermind process is frequently killed by
OS then you may need to change the configuration for the maximum number of open files.

## RocksDB on macOS

RocksDB library does not always load properly on macOS. One (hacky) workaround is to install the latest version of
RocksDB by running brew install rocksdb.

## Skipping consensus issues blocks

We do our best in Nethermind not to have consensus issues with other clients. But historically consensus issues had
happened. In that case we start working on a hotfix immediately and release it within hours time. If you need your node
to be operational ASAP and can’t wait for hotfix you do have an option to achieve that. Nethermind node allows you to
fast sync to recent blocks and state. When node does fast sync it can skip over processing problematic blocks. In order
to be able to fast sync we need SyncConfig.FastSync to be set to ‘true’. You also need to set
SyncConfig.FastSyncCatchUpHeightDelta to a value lower than how far your node is behind the chain.
SyncConfig.FastSyncCatchUpHeightDelta is the minimum difference between current chain height and chain head block number
when node can switch from full sync (block processing) to fast sync. By default it is set to 1024. Please note that we
don’t recommend setting this value to less than 32 in normal circumstances. After setting those values and restarting
node, the node will download block headers, bodies (if SyncConfig.DownloadBodiesInFastSync is ‘true’), receipts (if
SyncConfig.DownloadReceiptsInFastSync is ‘true’) and current state. After that it will resume processing from new head
block. Please note that the historical state for skipped blocks might not be available. This can cause some JSON RPC
calls on the historical state not to work - same situation as if these blocks state was pruned.

For example if current chain head block number is 10,000,100 and node couldn’t process block 10,000,000 due to consensus
issue, if you set FastSync:true and FastSyncCatchUpHeightDelta:100 (or as low as 32) and node should switch to fast
sync, catch up with current chain head and switch back to full sync.

The time that it will take to fast sync to current chain head can take even up to 2 hours depending how many blocks and
how much new state there is to be downloaded.

# ETH2 issues

## Main issues reported so far when using Nethermind for Eth2 (30.11.2020)

:::warning

* users who synced before version **1.9.41** and were not aware that old configs were **not** supporting Eth2 by default
  had to resync with **1.9.41** (and they are reporting successful setups now)&#x20;
* users who synced with `AncientReceiptsBarrier` (limiting disk space) cannot use **Teku** and **have to switch** to *
  *Prysm** or **Lighthouse**
* two users reported that their fully synced nodes on Windows 10 Pro failed after a few blocks (please let us know if
  you have seen a similar issue)
* (fixed in 1.9.45) users are reporting issues on a hard shutdown of VMs / machines with Nethermind running - some
  database corruptions occur often **requiring a resync**
* users had trouble to sync node on a ZFS file system but this has been **resolved after removing ZFS**
* users reported an issue where RocksDB was displaying a `checksum mismatch` error in the logs -> **restarting a VM (not
  Nethermind, but the machine) helped**
* if you tried to launch Lighthouse with the old Nethermind (pre **1.9.41**) which failed and then resynced Nethermind
  and you are still getting errors then **wiping the Lighthouse DB and starting again will solve it.**
  :::

