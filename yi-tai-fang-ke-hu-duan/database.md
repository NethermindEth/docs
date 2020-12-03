---
description: 关于数据库路径和数据库的信息
---

# 数据库

Nethermind 使用 [RocksDB](https://rocksdb.org) 数据库来存储状态。默认情况下，数据库会存储于客户端的二进制文件所在的目录。如有需要，您可以在命令行中加入一个 `--baseDbPath` 配置开关来切换存储目录，例如，`./Nethermind.Runner --config goerli --baseDbPath /home/username/nethermind_db`

Nethermind 启动后，您将看到 _baseDbPath_ 目录下出现多个目录。

![&#x4F8B;&#xFF1A;&#x5728;&#x4E00;&#x4E2A;&#x65B0;&#x90E8;&#x7F72;&#x7684; Ubuntu &#x865A;&#x62DF;&#x673A;&#x4E2D;&#x542F;&#x52A8; Nethermind &#x65F6;&#x51FA;&#x73B0;&#x7684;&#x6570;&#x636E;&#x5E93;&#x76EE;&#x5F55;&#x3002;](../.gitbook/assets/image%20%2861%29.png)

| 数据库目录 | 内容 |
| :--- | :--- |
| blockInfos | 区块树（包括正统链及其分支）上各层级区块的信息。 |
| blocks | 区块体\（包含区块内的交易和叔块数据\）。 |
| bloom | 用于快速日志搜索的 bloom 索引。 |
| canonicalHashTrie | 以太坊轻客户端协议相关数据。 |
| code | 合同字节码。 |
| discoveryNodes | 通过节点发现协议找到的对等节点。节点发现协议可用来在重启后快速找到对等节点\（您可以在节点之间复制该数据库来加速这一过程\）。 |
| headers | 仅包含区块头。 |
| pendingTx | \（该数据库会在每次重启时被清除。 \）待打包交易/交易池的二级缓存 \（一级缓存在内存中\）。 |
| peers | 存储额外的对等节点信息\（例如，对等节点的声誉\）。您可以在节点之间复制该数据库，以便在新的同步流程中加速与对等节点建立连接。 |
| receipts | 交易收据数据 |
| state | 区块链状态，包括帐户和合约存储\（帕特里夏树节点\） |

您可以使用 `rsync` 在您的节点之间克隆该数据库\（我们的一位用户曾使用这种方法复制了一个归档节点的全部 4.5 TB 状态数据。在此期间，节点始终保持运行，仅在 `rsync` 的最后阶段中止）。您也可以直接在 Unix 和 Windows 系统\（macOS 或许也可以\）之间复制数据库。

