---
description: 当前版本的Nethermind存在几个已知问题。
---

# 已知的问题

## 泄漏套接字描述符（Socket Descriptors）

在Linux上，我们的网络库未正确关闭套接字描述符。这导致该进程的打开文件数无限期增长。对于root用户和其他用户，每个进程打开文件的数量限制是不同的。 对于root来说，限制通常很高，套接字描述符不应该造成太大的麻烦。默认情况下，许多云运营商启动具有root用户访问权限的虚拟机( VM )。如果Nethermind进程经常被操作系统终止，可能需要更改最大打开文件数的配置。

## macOS上的RocksDB

RocksDB库不是每一次都能在macOS上正确加载。运行brew installrocksdb来安装最新版本的RocksDB，这就是一种很好的解决方法。

## Skipping consensus issues blocks

We do our best in Nethermind not to have consensus issues with other clients. But historically consensus issues had happened. In that case we start working on a hotfix immediately and release it within hours time. If you need your node to be operational ASAP and can’t wait for hotfix you do have an option to achieve that. Nethermind node allows you to fast sync to recent blocks and state. When node does fast sync it can skip over processing problematic blocks. In order to be able to fast sync we need SyncConfig.FastSync to be set to ‘true’. You also need to set SyncConfig.FastSyncCatchUpHeightDelta to a value lower than how far your node is behind the chain. SyncConfig.FastSyncCatchUpHeightDelta is the minimum difference between current chain height and chain head block number when node can switch from full sync \(block processing\) to fast sync. By default it is set to 1024. Please note that we don’t recommend setting this value to less than 32 in normal circumstances. After setting those values and restarting node, the node will download block headers, bodies \(if SyncConfig.DownloadBodiesInFastSync is ‘true’\), receipts \(if SyncConfig.DownloadReceiptsInFastSync is ‘true’\) and current state. After that it will resume processing from new head block. Please note that the historical state for skipped blocks might not be available. This can cause some JSON RPC calls on the historical state not to work - same situation as if these blocks state was pruned.

For example if current chain head block number is 10,000,100 and node couldn’t process block 10,000,000 due to consensus issue, if you set FastSync:true and FastSyncCatchUpHeightDelta:100 \(or as low as 32\) and node should switch to fast sync, catch up with current chain head and switch back to full sync.

The time that it will take to fast sync to current chain head can take even up to 2 hours depending how many blocks and how much new state there is to be downloaded.

