---
description: 当前版本的Nethermind存在几个已知问题。
---

# 已知的问题

## 泄漏套接字描述符（Socket Descriptors）

在Linux上，我们的网络库未正确关闭套接字描述符。这导致该进程的打开文件数无限期增长。对于root用户和其他用户，每个进程打开文件的数量限制是不同的。 对于root来说，限制通常很高，套接字描述符不应该造成太大的麻烦。默认情况下，许多云运营商启动具有root用户访问权限的虚拟机\( VM \)。如果Nethermind进程经常被操作系统终止，可能需要更改最大打开文件数的配置。

## macOS上的RocksDB

RocksDB库不是每一次都能在macOS上正确加载。运行brew installrocksdb来安装最新版本的RocksDB，这就是一种很好的解决方法。

## 跳过共识问题的块

我们在Nethermind尽力避免与客户达成共识问题。但是之前已发生了一些共识问题。在这种情况下，我们立即开始处理修补程序，并在数小时内将其释放。如果您需要节点尽快运行并且不等待修补程序，则可以选择实现。Nethermind节点允许您快速同步到最近的块和状态。当节点进行快速同步时，它可以跳过处理出现问题的块。 要快速同步，我们需要将SyncConfig.FastSync设置为‘true’。您还需要将SyncConfig.FastSyncCatchUpHeightDelta设置为一个值，该值小于节点在链后的距离。SyncConfig.FastSyncCatchUpHeightDelta是当节点可以从完全同步\(块处理\) 切换到快速同步时，当前链高和链头块数之间的最小差异。默认情况下，设置为1024。请注意，在正常情况下，我们不建议此值设置为32或更低。 设置完这些值并重新启动节点后，该节点将下载块标头、主体\(如果SyncConfig.DownloadBodiesInFastSync为'true'\)，收据\（如果SyncConfig.DownloadReceiptsInFastSync为'true'\）和当前状态。 之后，该节点从新的头块恢复处理。请注意，跳过块的历史状态可能不可用。这可能导致对历史状态的某些JSON RPC调用不起作用-与这些块状态被修剪的情况相同。

例如，如果当前链头块数为10,000,100，而节点由于共识问题而无法处理10,000,000，那么如果设置FastSync：true和FastSyncCatchUpHeightDelta：100 \(或低至32 \) ，并且节点应切换到快速同步，赶上当前的链头并切换回完全同步。

快速同步到当前链头所需的时间甚至可能长达2个小时，具体取决于要下载多少个块和多少个新状态。

