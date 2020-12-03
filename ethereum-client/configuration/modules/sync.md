# Sync

| 属性名称 | 描述 | 默认值 |
| :--- | :--- | ---: |
| `BeamSync` | Beam Sync 仅用于调试/开发，在生产环境中还不可用。 | `false` |
| `DownloadBodiesInFastSync` | 如果被设置为 `true`，快速同步模式将下载区块体。 | `false` |
| `DownloadReceiptsInFastSync` | 如果被设置为 `true`，快速同步模式将下载收据。这会导致进程拖慢数个小时，但是可以让您与执行大量历史日志搜索的 dApp（例如 Maker 的抵押债仓）交互。 | `false` |
| `FastBlocks` | 如果被设置为 `true`，则在快速同步模式下，将首先根据 PivotNumber 定义的区块高度开始向下下载区块。 这样可以通过并行化方式向多个对等节点发起同步请求，无需担心正在同步的分支的有效性（因为同步进程会向下同步至 0 为止）。您需要输入从可信来源处获得的 pivot 区块编号、哈希值和总难度（您也可以使用 etherscan 获得这些数据，并通过其它来源进行确认）。 | `false` |
| `FastSync` | 如果被设置为 `true`，将启用 Fast Sync \(eth/63\) 同步算法。 | `false` |
| `FastSyncCatchUpHeightDelta` | 仅当 `FastSync` 为 `true` 时才需设置该项。一旦设置为某个值，则在节点与网络之间的区块高度差达到该值前，始终使用完全同步模式（如已启用）同步区块。当区块高度差超过该值后，则切换至快速同步模式同步区块。请注意，当区块高度差不超过 32 时，始终使用完全同步模式同步区块，因此设定值在小于或等于 32 时无效。 | `null` |
| `PivotHash` | Fast Blocks 同步中 pivot 区块的哈希值。 | `null` |
| `PivotNumber` | Fast Blocks 同步中 pivot 区块的编号。 | `null` |
| `PivotTotalDifficulty` | Fast Blocks 同步中 pivot 区块的总难度值（请注意，这里是总难度值，而非难度值）。 | `null` |
| `SynchronizationEnabled` | 如果被设置为 `false`，则该节点不会下载/处理新的区块。 | `true` |
| `UseGethLimitsInFastBlocks` | 如果被设置为 `true`，则在 Fast Blocks 模式下，Nethermind 节点会产生较小的请求，以避免 Geth 节点中断连接。该设置适用于 Geth 节点占比较大的网络 \（如，主网\）。但是，在 Parity 或 Nethermind 节点占比较大的网络\（如 Goerli、AuRa\）中，这会导致同步速度降低 ~4 倍。 | `true` |

