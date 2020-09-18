---
description: 关于dbpath和数据库的信息
---

# 数据库

Nethermind使用[RocksDB](https://rocksdb.org)数据库存储状态。默认情况下，数据库存储在客户端二进制文件所在的目录中。要进行更改，可以在命令行中提供 `--baseDbPath` 配置开关，例如.`./Nethermind.Runner --config goerli --baseDbPath /home/username/nethermind_db`

启动Nethermind之后，您将看到_baseDbPath_目录中出现多个目录。

![Example of the DB directory on a freshly deployed Ubuntu VM with Nethermind.](../.gitbook/assets/image%20%2861%29.png)

| 数据库目录 | 内容 |
| :--- | :--- |
| blockInfos | 块树的每个层次上的块信息（规范链和分支） |
| blocks | 块体\(区块交易和叔块数据\) |
| bloom | 快速日志搜索的bloom索引 |
| canonicalHashTrie | LES协议相关数据 |
| code | 合同字节码 |
| discoveryNodes | 通过发现协议发现的对等体-用于重新启动后的快速对等\（可以在节点之间复制此数据库以加快对等\） |
| headers | 仅有块标头 |
| pendingTx | \(此数据库在每次重新启动时都会被清除 \) 待处理事务/内存池的第二级缓存 \( 第一级在内存中 \)  |
| peers | 存储其他同步对等方信息\(l如对等方信誉\) - 为了加快新同步时的对等，可以在节点之间复制此数据库  |
| receipts | 交易收据数据 |
| state | 区块链状态，包括帐户和合同存储\(Patricia trie节点\) |

可以在节点之间使用`rsync`来克隆数据库\（我们的一位用户在节点运行时以此方式复制了整个4.5TB归档状态，并且仅在`rsync` \的最后阶段才停止了该节点）。 也可以简单地在Unix和Windows系统\（最可能是macOS \）之间复制数据库。

