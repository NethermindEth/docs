# 同步模式

## 同步模式共有主要三种

* 快速同步
  * 仅下载最新状态，标头以及可选的块体和收据
  * 您可以这样运行： `./Nethermind.Runner --config mainnet`
  * 如果您拥有良好的连接和计算机，则MaxActiveSyncpeers设置为256 \(请参阅配置中的SyncConfig部分\) 应该会提供更好的快速同步时间 \(我们使用256个对等方获得5个小时的同步\)
* Beam 同步
  * 与快速同步相同，但也允许在启动后的前几分钟内查询链
  * 您可以这样运行：`./Nethermind.Runner --config mainnet_beam`
* 存档同步
  * 大量的历史同步，验证所有交易并保持所有历史状态
  * 您可以这样运行：`./Nethermind.Runner --config mainnet_archive`

| 同步模式 | 所需磁盘空间 | 全电流状态 | 全电流和所有历史状态 | 可以同步完整存档节点 | 同步时间 | RPC时间 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 封存 | ~5TB | ✓ | ✓ | ✓ | ~3周 | ~3周 |
| 快速同步 | ~300GB | ✓ | x | ✓ | ~15个小时 | ~15个小时 |
| 未收据的快速同步 | ~120GB | ✓ | x | ✓ | ~10个小时 | ~10个小时 |
| 未收据和块体的快速同步 | ~60GB | ✓ | x | x | ~6个小时 | ~6个小时 |
| Beam 同步 | ~320GB | ✓ | x | ✓ | ~30个小时 | ~20个小时 |
| 未收据的beam同步 | ~140GB | ✓ | x | ✓ | ~20个小时 | ~20个小时 |
| 未收据和块体的beam同步 | ~80GB | ✓ | x | x | ~10个小时 | ~20分钟 |
| 未历史标题的beam同步 | ~60GB | ✓ | x | x | ~9个小时 | ~5分钟 |

## 快速同步

快速同步可能是最流行的同步方法。 完成快速同步后，您的节点将能够回答_'我的帐户余额**现在**是什么'_，_'SomeExchange**目前**持有多少个XYZ令牌'_等问题。

快速同步是Nethermind中默认的同步方法，因此，每当启动标准配置时，都将使用快速同步。

`./Nethermind.Runner --config mainnet`

`./Nethermind.Runner --config goerli`

快速同步有多个阶段。 Nethermind使用 `pivot block` 编号来提高快速同步性能。`pivot block`数据在配置文件中提供，并由`block number`（块号）， `block hash`（块哈希）和 `block total difficulty` （块总难度） \组成 \(请注意， `total difficulty` （总难度）与 `difficulty`（难度）不同\)。 请注意， `pivot block` 在Nethermind中的含义与在其他客户机中的含义不同。在同步状态数据之前，Nethermind在两个方向上进行同步-对于标头，从`pivot block`向后同步到0，对于标头，块和收据，向前同步到链的头部。前向同步可能非常慢\(5-50 bps\) ，因此在同步之前使用最新配置十分重要，若没有最新的配置应更新。

块数据下载完之后，Nethermind将启动状态同步 \(下载最新的状态Trie节点\)。我们提供了下载大小和进度的估计值，但实际值可能与估计值不同\(特别是如果使用的不是最新的Nethermind版本 \)。

状态同步完成后，能看到_'Processed ...'_消息，就像在存档同步中一样-这意味着节点已同步，并且正在处理最新的块。

在撰写 \(2020年7月\) 时，主网同步在UpCloud $ 40 VM上大约需要6个小时\(如果在配置中启用了收据和快体，则它们将在后台同步。Goerli同步大约需要40分钟 \)。

![Fast sync logs example for mainnet.](../.gitbook/assets/image%20%2859%29.png)

状态同步日志消息显示多个值。第一个 `dd.HH:mm:ss`显示总状态同步时间，然后显示估计的同步进度\(占数据库数据同步总数的百分比\)，然后显示当前下载速度\(有时它会减速到0或个位数，尤其是在同步的结尾\)。通常，我们实现的6个小时同步时间约为2000 kB / s \（千字节每秒\）。您可以在示例中将其计算为~45GB / \(2MB/s\) ~ 22500 秒 ~6.25 小时。我们还以 _\[number\_of\_pending\_requests\]的格式显示已同步的状态帐户数量，已同步的trie节点数量和诊断消息。 \[在响应处理程序上花费的平均时间显示为毫秒\]_ 。 因此， `5.6.20ms` 正在等待对已发送给对等方的5个请求的响应，而处理单个响应所需的平均时间为6.20ms。 响应处理时间将因缓存了多少个trie节点而有所不同\(在节点重新启动后，当必须重建缓存时，这些节点在一段时间内会明显变慢\)以及数据库IO的速度\(SSD 相对 NVMe 相对 云驱动器\)。对于合理的同步时间，可以预期这些值低于15ms \（但重新启动节点后一段时间内它们可能高达700ms）。

![](../.gitbook/assets/image%20%2864%29.png)

![](../.gitbook/assets/image%20%2862%29.png)

## Beam 同步

解释Beam同步的最简单方法是说Beam同步与快速同步完全相同，但是它另外还会下载最新块的状态数据 \(目击者\)。 它还允许在快速同步完成之前通过JSON RPC执行一些有关当前状态的查询。 当前，Beam同步比快速同步占用更多的资源，并且大大降低了快速同步的速度，但是它允许您在启动后的几分钟内查询区块链。

![Beam sync logs example.](../.gitbook/assets/image%20%2860%29.png)

当显示_'Beam sync is ON'_消息时, 这通常意味着您可以询问最新的标头、最新的交易，可以询问`eth_getBalance`, `eth_getCode`, `eth_call`, `debug_trace`, `trace_replayTransactions`等。您无法询问有关交易收据或日志的信息，因为大多数收据或日志尚未处理的。使用Beam同步，可以从节点创建并广播以太或令牌传输交易。

![](../.gitbook/assets/image%20%2865%29.png)

## 存档同步

存档同步是“最重”，最慢的同步模式，但允许您提出相同问题：_'两年前我的帐户余额是多少？'_, _'2017年SomeExchange托管中持有多少XYZ令牌?'_.

我们已经准备好默认的存档同步配置，可以从Nethermind Launcher 启动 \(只需选择存档选项\)，也可以在启动`./Nethermind.Runner --config mainnet_archive`时加载相应的配置。

`./Nethermind.Runner --config goerli_archive`

尽管对于某些小型网络，归档同步可以完成得很快（数分钟数小时内）但根据IO的速度（使用SSD还是NVMe，取决于云提供商IOPS\) 主网络同步将需要2到6周的时间。因为您将存储所有历史数据，存档同步中的数据库大小是所有模式中最大的。

![Example of the archive sync logs](../.gitbook/assets/image%20%2858%29.png)

![](../.gitbook/assets/image%20%2857%29.png)

说明日志中一些数据：

* 一开始，当节点尝试发现可以与之同步的节点时，可能会看到一条 _'Waiting for peers...'_（正在等待对等...）的消息。
* _'Downloaded 1234/8000000'_ 显示了从网络下载的未处理区块\（包含交易\）的数量。对于`主网`，此值可能比起初要慢，但过了一会就能看到块下载快比快处理的速度更快。空块可以小到512字节\(只有没有事务的标头\)，而具有大量事务的完整块可以达到几百千字节。自启动节点以来，我们同时显示当前下载速度\(在最后一秒中计算得出\)和平均 \(总\)速度。
* _'Processed ...'_ 显示已被EVM处理的块。第一个数字显示当前头块编号，然后可以看到 `mgasps` \(每秒百万个气体\) -当前和总计，再有 `tps` \(每秒事务数\)-当前和总计， `bps` \(每秒块数\)。 然后是 `recv queue` \(交易签名公共密钥恢复队列\)，`proc queue` \(处理器队列\)。 恢复队列和处理器队列，当等待处理的块太多时，只有其哈希值保留在内存中，而其余数据则存储在数据库中。 因此，可以看到的队列编号将被某个编号所限制。
* _'Cache for epoch...'_ 通知块密封验证所需的`ethash`缓存（只在`主网`和`ropsten`上）缓存将每30000个块 \(一个历元的长度\) 计算一次，但也可以计算网络上正在广播的最新块。
* 存档同步完成后，处理新块时，平均每15秒就会出现_'Processed ...'_消息。
* `mgasps`, `tps`和 `bps值不应被视为可比的，因为它们在链的不同部分可能存在巨大差异。例如，当块为空时，可能会看到非常高的`bps`值，而`bps`值非常低（甚至为零）`tps'和`mgasps`值，因为没有交易，没有用于EVM处理的气体，并且块非常轻。 另一方面，当块中充满非常繁重的交易时，`bps`可能会非常低，而`mgasps`会非常高。 甚至有可能会看到很多非常轻巧的交易，其中`tps`较高，而`bps`和`mgasps`则平均。
