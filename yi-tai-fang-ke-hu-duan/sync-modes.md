# 同步模式

## 同步模式主要有三种。

* 快速同步
  * 仅下载最新状态和区块头，也可选择下载区块体和收据
  * 如需启用该模式，您可以运行：`./Nethermind.Runner --config mainnet`
  * 如果您具备良好的网络条件和硬件条件，可将--Network.MaxActiveSyncPeers 设置为 256（详见“配置”中的“NetworkConfig”部分），这样可以大幅提高快速同步速度（假设连接 256 个对等节点，则同步用时为 5 小时） [https://docs.nethermind.io/nethermind/ethereum-client/configuration/modules/network](https://docs.nethermind.io/nethermind/ethereum-client/configuration/modules/network)
* Beam 同步
  * 与快速同步相同，区别在于您可以在同步开始后的前几分钟内查询区块链
  * 如需启用该模式，您可以运行：`./Nethermind.Runner --config mainnet_beam`
* 存档同步
  * 会同步大量历史记录，验证所有交易并保存所有历史状态
  * 如需启用该模式，您可以运行：`./Nethermind.Runner --config mainnet_archive`

| 同步模式 | 硬盘需求 | 是否同步完整的最新状态 | 是否同步完整的最新状态和所有历史状态 | 是否可以用来同步完整的归档节点 | 同步用时 | RPC 用时 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 归档同步 | ~5TB | ✓ | ✓ | ✓ | ~3 周 | ~3 周 |
| 默认快速同步（同步屏障被设置为支持 Eth2.0） | ~100GB | ✓ | x | x | ~11 小时 | ~11 小时 |
| 快速同步（下载区块体和收据） | ~320GB | ✓ | x | ✓ | ~20 小时 | ~20 小时 |
| 快速同步（不下载收据） | ~130GB | ✓ | x | ✓ | ~12 小时 | ~12 小时 |
| 快速同步（不下载区块体和收据） | ~70GB | ✓ | x | x | ~9 小时 | ~9 小时 |
| Beam 同步 | ~320GB | ✓ | x | ✓ | ~30 小时 | ~20 分钟 |
| beam 同步（不下载收据） | ~140GB | ✓ | x | ✓ | ~20 小时 | ~20 分钟 |
| beam 同步（不下载区块体和收据） | ~80GB | ✓ | x | x | ~10 小时 | ~20 分钟 |
| beam 同步（不下载历史区块头） | ~60GB | ✓ | x | x | ~9 小时 | ~5 分钟 |

## 快速同步

快速同步可能是最常用的同步方法。完成快速同步后，您的节点将掌握_“您的账户的**当前**余额”_、_“某交易所账户的**当前**持币情况”_等信息。

Nethermind 默认采用快速同步模式。因此，每当您启动标准配置时，都将使用快速同步。

`./Nethermind.Runner --config mainnet`

`./Nethermind.Runner --config goerli`

快速同步有多个阶段。Nethermind 使用 `pivot block` 区块号来提高快速同步性能。`pivot block` 数据由配置文件提供，并由 `block number`（区块号）、`block hash`（区块哈希）和 `block total difficulty` （区块总难度）组成【请注意区分 `total difficulty`（总难度）与 `difficulty`（难度）】。请注意，在 Nethermind 客户端中，`pivot block` 的含义与在其它客户端中不同。在同步状态数据之前，Nethermind 会从两个方向进行同步：从 `pivot block` 向后同步到创世块，仅同步区块头；向前同步到链首块，仅同步区块头、区块体和收据。向前同步可能非常慢（每秒同步 5-50 个区块）。因此，在同步之前，请务必使用最新配置，或更新到最新配置。

下载完区块数据后，Nethermind 将启动状态同步（下载最新状态树节点）。我们会提供下载大小和进度的预估值，但是实际值可能与预估值不同（尤其是当您正在使用旧版 Nethermind 时，因为我们有时会基于对链增长速度的观察结果手动调整预估值）。因此，有时会出现这样的情况：即使同步完成进度显示的是 ~100%，您的同步依然在继续。另一个重要因素是您的同步速度。如果您的 IO /网络/文件系统导致状态同步的平均速度远低于每秒 1.5 MB ，您的 Nethermind 节点会反复下载状态树的某些部分。在这种情况下，您可能会惊讶地看到如 58000MB / 53000MB（100%）之类的同步进度显示。这意味着您下载了大约 5 GB 的无用数据。如果您的同步速度非常慢（超过两天），您的设置很有可能跟不上链的增长。

状态同步完成后，您将看到 _'Processed...'_ 消息，就像在归档同步中那样。这意味着，您的节点正在同步，并且正在处理最新的区块。

截至文档撰写完成（2020 年 12 月），使用 UpCloud 16GB 内存 8 CPU 上月租费 40 美元的虚拟机进行主网同步需要约 8 小时，然后在后台同步收据和区块体（如果您在配置中启用了这两项）。Goerli 测试网同步需要约 40分钟。

![Fast sync logs example for mainnet.](../.gitbook/assets/image%20%2859%29.png)

状态同步的日志消息会显示多个值。第一个值 `dd.HH:mm:ss` 显示的是状态同步所花费的总时间，第二个值显示的是预估的同步进度（已同步数据占数据库总数据的百分比），第三个值显示的是当前下载速度（有时会降至 0 或个位数，尤其是在同步快结束时）。通常而言， 同步速度约为 2000 kB/s，需要 6 小时的同步时间，即，~45GB/（2MB/s）= ~ 22500 秒 = ~6.25 小时。我们还会显示已完成状态同步的账户数量、已同步的状态树节点数量和一个诊断消息。该诊断消息的格式是 _\[number\_of\_pending\_requests\].\[average time spent in response handler displayed as milliseconds\]_【待处理请求的数量；处理响应所花费的平均时间（ms）】。例如， `5.6.20ms` 指的是我们已经向对等节点发送了 5 个请求，正在等待响应，而我们处理单个响应所花费的平均时间为6.20ms。响应处理时间会因已缓存的状态树节点数量以及数据库 IO 速度（固态硬盘 /NVMe/云存储）而有所不同（因此，如果节点重启，必须重建缓存，就会严重影响响应处理速度）。如果您想获得一个理想的同步时间，响应处理时间应低于 15ms（但是，节点刚重启时，该值可能高达 700ms）。

在快速同步期间，重启一次节点可能会将同步时间延长 2 个小时，因为节点必须从数据库读取数百万个值来重建缓存。

在快速同步的最后阶段，该节点将反复显示分支的同步进度，并将区块号改成它想要同步到的目标区块的编号。这一阶段需要 30 分钟至 2 个小时。如果严重超时，该节点有可能无法赶上网络的进度。

即将完成同步的最佳指标之一是，状态大小同步进度达到 ~100%，且分支同步进度达到 100% 左右。

![](../.gitbook/assets/image%20%2864%29.png)

![](../.gitbook/assets/image%20%2862%29.png)

## Beam 同步

WARNING: we suggest that you do not pick the beam sync without the full understanding of its current downsides and benefits. Generally beam sync can only be useful for you if you know how to query the beam synced JSON RPC and you need it within the first 30 minutes of sync or so.

Current downsides of beam sync:

* JSON RPC queries have to be executed in a specific way \(they may timeout multiple times before you finally receive a valid response\)
* background state sync will be significantly slower \(and may be syncing long after the downloaded state shows 100%\)
* because of the longer sync times we test beam sync less thoroughly and we think there may be still some issues with the transition between the state sync and full sync at the last stages of the beam sync \(in fact we are just addressing on of such issues in the current 'wit' protocol testing that should be coming in early 1.10.x versions\)
* without the 'wit' protocol that we are currently working on, the mainnet beam sync can be quite inefficient in querying the recent blocks

Current benefits of the beam sync:

* if you know what you are doing, beam sync can give you state access very, very quickly \(within 10 - 30 minutes from starting the sync\)
* similarly to the above, if you know how to work with beam sync, you can start sending transactions from the beam sync node very quickly

简单来说，Beam 同步与快速同步基本相同，唯一的差别是前者会下载最新区块的状态数据（见证消息）。相比快速同步，Beam 同步可以让您更早通过 JSON RPC 执行一些关于当前状态的查询。目前，Beam 同步比快速同步消耗的资源更多，同步速度也慢得多。但是，它可以让您在同步启动后的几分钟内查询区块链。

![Beam sync logs example.](../.gitbook/assets/image%20%2860%29.png)

当_'Beam sync is ON'_消息出现时，您可以开始查询最新区块头、最新交易、`eth_getBalance`、 `eth_getCode`、`eth_call`、`debug_trace` 和 `trace_replayTransactions` 等数据。但是，您无法查询交易收据或日志，因为它们多数还未经过处理。使用 Beam 同步，节点就有可能创建并广播以太币或其它代币的转账交易。

![](../.gitbook/assets/image%20%2865%29.png)

## 归档同步

存档同步是“最重”且最慢的同步模式，但是可以让您的节点掌握_“您的帐户在两年前的余额”_、_“某交易所账户在 2017 年的持币情况”_等信息。

我们已经准备好归档同步的默认配置。该配置可以通过 Nethermind Launcher 启动（只需选择归档选项），也可以启动以下命令行来载入合适的配置：`./Nethermind.Runner --config mainnet_archive`

`./Nethermind.Runner --config goerli_archive`

虽然对于某些小型网络来说，归档同步可以快速完成（数分钟或数小时内），但是对于主网来说，归档同步需要 2 - 6 周的时间，具体取决于 IO 速度（即，您使用的是固态硬盘、NVMe，还是云提供商）。存档同步的数据库规模也是所有模式中最大的，因为您将存储所有历史数据。

![Example of the archive sync logs](../.gitbook/assets/image%20%2858%29.png)

![](../.gitbook/assets/image%20%2857%29.png)

日志中部分数据的说明：

* 一开始，当节点正在寻找可以连接的对等节点时，您可能会看到 _'Waiting for peers...'（正在等待与对等节点连接...）_的消息。
* _'Downloaded 1234/8000000'_ 显示的是已从网络中下载的待处理区块（包含交易）的数量。就`主网`而言，起初下载速度可能比处理速度慢，但是前者很快就会超过后者。空块可以小到只有 512 字节（只有区块头，没有交易），然而被大量交易填满的区块可以达到数十万字节。我们会同时显示当前下载速度（根据上一秒计算得出），以及自节点启动以来的平均（总）下载速度。
* _'Processed ...'_ 显示的是 EVM 已处理过的区块。第一个数值是当前链首块的编号，之后是当前和总的 `mgasps`（百万 gas/秒）、当前和总的 `tps`（每秒处理交易数）、`bps`（每秒处理区块数）。再之后是 `recv queue`（交易签名公钥恢复队列）、`proc queue`（处理器队列）。恢复队列和处理器队列的设计用意是，当等待处理的区块太多时，只将其哈希值保留在内存中，其余数据则存储在数据库中。因此，队列值是有上限的。
* _'Cache for epoch...'_ 显示的是区块验证所需的 `ethash` 缓存（仅用于 `主网` 和 `ropsten` 测试网）。缓存每 30000 个块（即，一个 epoch）计算一次，也可以为了正在网络上广播的最新区块计算。
* 归档同步完成后，平均每 15 秒就会出现一次_'Processed ...'_消息，表示新区块已处理完成。
* `mgasps`、`tps` 和 `bps` 这几个值没有比较意义，因为在区块链上的不同部分，这些值可能存在巨大差异。例如，如果是空块，`bps` 的值可能很高，而 `tps` 和 `mgasps` 的值可能很低（接近于零），因为空块很轻，既不包含交易，也不会在 EVM 处理上消耗 gas；如果区块被大量交易填满，`bps` 的值可能很低，而 `mgasps` 的值可能很高。您甚至有可能看到很多轻交易，导致 `tps` 的值很高，而 `bps` 和 `mgasps` 的值为平均水平。

