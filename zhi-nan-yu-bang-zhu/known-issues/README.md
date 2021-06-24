---
description: 当前版本的 Nethermind 存在一些已知问题。
---

# 已知问题

## RocksDB 校验和问题

我们注意到，在一些磁盘上，RocksDB 可能会因为出现以下异常而失败：

2020-11-29 12:02:01.1968\|BlockchainProcessor 遇到异常。 RocksDbSharp.RocksDbException：损坏：区块校验和不匹配：期望值为 2087346143，C:\Nethermind\nethermind\_db/mainnet\state/037463.sst 中的实际值为 2983326672 偏移量为 33439089 大小为 16319

有趣的是，部分用户可以通过关闭 Nethermind，重启虚拟机并再次启动 Nethermind 来解决这一问题。这恰好是某些云提供商系统上的 RocksDB 问题。在深入了解该问题后，我们将提供更多详细信息。

## RocksDB 未删除数据库锁定文件

如果节点抱怨锁定文件，可能有两点原因：

（1）另一个 Nethermind 进程正在运行，并且使用同一个数据库

（2）之前的进程没有正确关闭数据库

当（2）发生时，您可以运行数据库文件夹中的

`find . -type f -name 'LOCK' -delete`

。

## socket 描述符泄露

在 Linux 上，我们的网络库没有正确关闭 socket 描述符。这会导致该进程的打开文件数量无限增长。对于 root 用户和其他用户来说，每个进程的打开文件数上限是不同的。对于 root 用户来说，这一限制通常很高，而且 socket 描述符可能不会造成太大麻烦。许多云运营商的虚拟机都默认提供 root 用户权限。如果 Nethermind 进程经常被操作系统终止，您可能需要修改最大打开文件数的配置。

## macOS 上的 RocksDB

RocksDB 库在 macOS 上加载时有可能出错。一种（比较麻烦的）应对方法是执行 brew install rocksdb 命令来安装最新版本的 RocksDB。

## 跳过有共识问题的区块

我们会尽力避免 Nethermind 客户端与其它客户端达成共识。但是，之间已经发生过一些共识问题。在这种情况下，我们会立即开始进行热修复，并在数小时内将其释放。如果您需要尽快运行节点，无法等待热修复，您也可以采用另一种方法。Nethermind 节点可以让您快速同步至最新的区块和状态。在进行快速同步时，节点可以跳过有问题的区块。为了能够进行快速同步，您需要将 SyncConfig.FastSync 设置为 ‘true’。您还需要为 SyncConfig.FastSyncCatchUpHeightDelta 设置一个值。这个值必须小于节点落后网络的距离。 SyncConfig.FastSyncCatchUpHeightDelta 是节点本地区块高度与链首块编号之差的最小阈值。一旦节点落后网络的距离超过该阈值，节点将从完全同步（区块处理）模式切换至快速同步模式。默认情况下，该参数被设置为 1024。请注意，在正常情况下，我们不建议将该参数的值设为 32 以下。在设置完这些参数并重启节点后，该节点将下载区块头、区块体（如果 SyncConfig.DownloadBodiesInFastSync 被设置为 'true'）、收据（如果 SyncConfig.DownloadReceiptsInFastSync 被设置为 'true'）和当前状态。之后，该节点将从新的链首块开始恢复区块处理。请注意，已跳过区块的历史状态可能不可用。这可能导致某些对历史状态的 JSON RPC 调用无法正常工作，就好像这些区块状态被修剪过一样。

假设当前链首块编号为 10,000,100，且节点由于共识问题无法处理区块 10,000,000。那么，如果您将 FastSync 设置为 true，并将 FastSyncCatchUpHeightDelta 设置为 100（或 32），节点会切换至快速同步模式，等赶上当前链首块后切换回完全同步模式。

快速同步至当前链首块所需时间可能长达 2 个小时，具体取决于需要下载多少区块和多少新状态。

