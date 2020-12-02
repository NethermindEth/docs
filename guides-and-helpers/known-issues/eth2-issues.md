# ETH2 issues

## Main issues reported so far when using Nethermind for Eth2 \(30.11.2020\)

{% hint style="warning" %}
* users who synced before version **1.9.41** and were not aware that old configs were **not** supporting Eth2 by default had to resync with **1.9.41** \(and they are reporting successful setups now\) 
* users who synced with `AncientReceiptsBarrier` \(limiting disk space\) cannot use **Teku** and **have to switch** to **Prysm** or **Lighthouse**
* two users reported that their fully synced nodes on Windows 10 Pro failed after a few blocks \(please let us know if you have seen a similar issue\)
* \(fixed in 1.9.45\) users are reporting issues on a hard shutdown of VMs / machines with Nethermind running - some database corruptions occur often **requiring a resync**
* users had trouble to sync node on a ZFS file system but this has been **resolved after removing ZFS**
* users reported an issue where RocksDB was displaying a `checksum mismatch` error in the logs -&gt; **restarting a VM \(not Nethermind, but the machine\) helped**
* if you tried to launch Lighthouse with the old Nethermind \(pre **1.9.41**\) which failed and then resynced Nethermind and you are still getting errors then **wiping the Lighthouse DB and starting again will solve it.**
{% endhint %}



