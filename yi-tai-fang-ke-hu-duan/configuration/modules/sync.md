# Sync

| 属性名称 | 说明 | 默认值 |
| :--- | :--- | ---: |
| `BeamSync` | Beam Sync 同步 - 仅用于DEBUG / DEV-尚未在PROD中不能操作。 | `false` |
| `DownloadBodiesInFastSync` | 如果设置为 `true` 将在快速同步模式下下载块体。 | `true` |
| `DownloadReceiptsInFastSync` | 如果设置为 `true`，则收据将以“快速同步”模式下载。这使该过程减慢几个小时，但允许您与执行大量历史日志搜索的dApp \(例如 Maker CDPs\) 进行交互。 | `true` |
| `FastBlocks` | If set to `true` then in the Fast Sync mode blocks will be first downloaded from the provided PivotNumber downwards. This allows for parallelization of requests with many sync peers and with no need to worry about syncing a valid branch \(syncing downwards to 0\). You need to enter the pivot block number, hash and total difficulty from a trusted source \(you can use etherscan and confirm with other sources if you want to change it\) | `false` |
| `FastSync` | 如果设置为`true`，使用快速同步 \(eth/63\)同步算法。 | `false` |
| `FastSyncCatchUpHeightDelta` | 仅当`FastSync` 为 `true`时才相关。如果设置为value, 设置最小高度阈值限制，当链在网络后面时，FullSync（如果已启用）保持开启状态。如果超过此限制，它将切换回FastSync。请注意，最后32个块始终以FullSync处理，因此其设置为小于或等于32将无效。 | `null` |
| `PivotHash` | 快速块同步的枢轴块的哈希。 | `null` |
| `PivotNumber` | 快速块同步的枢轴块编号。 | `null` |
| `PivotTotalDifficulty` | 快速块同步的枢轴块的总难度（not-这是总难度而不是难度） | `null` |
| `SynchronizationEnabled` | 如果为`false`，则该节点不下载/处理新块 | `true` |
| `UseGethLimitsInFastBlocks` | 如果设置为 `true`，在快速阻止模式下，Nethermind 会生成较小的请求，以避免Geth断开连接。在Geth重型网络 \(主网络\) 上是非常好的，而在Parity或Nethermind重型网络\(Goerli，AuRa\) 上，会使同步速度降低约~4倍。 | `true` |

