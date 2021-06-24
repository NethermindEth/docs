# Sync module

| 属性 | 描述 | 默认值 |
| :--- | :--- | :--- |
| AncientBodiesBarrier | \[EXPERIMENTAL\] Defines the earliest body downloaded in fast sync when DownloadBodiesInFastSync is enabled. Actual values used will be Math.Max\(1, Math.Min\(PivotNumber, AncientBodiesBarrier\)\) | 0 |
| AncientReceiptsBarrier | \[EXPERIMENTAL\] Defines the earliest receipts downloaded in fast sync when DownloadReceiptsInFastSync is enabled. Actual value used will be Math.Max\(1, Math.Min\(PivotNumber, Math.Max\(AncientBodiesBarrier, AncientReceiptsBarrier\)\)\) | 0 |
| BeamSync | Enables beam sync that can be useful to create some JSON RPC queries while the node is fast syncing in the background. | false |
| BeamSyncContextTimeout | Number of seconds before a single beam sync request expires and throw an exception. If you want your JSON RPC requests to keep trying then set this value to a higher number. | 4 |
| BeamSyncFixMode | Should use beam sync to fix corrupted state DB \(dev use\). | false |
| BeamSyncPreProcessorTimeout | Number of seconds to pass without progress before beam sync stops trying to process a single block. | 15 |
| BeamSyncVerifiedMode | When beam syncing should verify each state item loaded from DB \(dev use\). | false |
| DownloadBodiesInFastSync | 如果被设置为 `true`，快速同步模式将下载区块体。 | true |
| DownloadHeadersInFastSync | If set to 'false' then beam sync will only download recent blocks. | true |
| DownloadReceiptsInFastSync | 如果被设置为 `true`，快速同步模式将下载收据。这会导致进程拖慢数个小时，但是可以让您与执行大量历史日志搜索的 dApp（例如 Maker 的抵押债仓）交互。 | true |
| FastBlocks | 如果设置为`true`，在快速同步模式下首先从提供的PivotNumber向下下载块。这允许将请求与多个同步对等点并行，无需担心同步有效的分支 \(向下同步到0\)。需要输入来自受信任源的数据透视块编号、哈希和总难度 \(如果要更改，可以使用etherscan并与其他源确认\)。 | false |
| FastSync | 如果被设置为 `true`，将启用 Fast Sync \(eth/63\) 同步算法。 | false |
| FastSyncCatchUpHeightDelta | Relevant only if 'FastSync' is 'true'. If set to a value, then it will set a minimum height threshold limit up to which FullSync, if already on, will stay on when chain will be behind network. If this limit will be exceeded, it will switch back to FastSync. In normal usage we do not recommend setting this to less than 32 as this can cause issues with chain reorgs. Please note that last 2 blocks will always be processed in FullSync, so setting it to less than 2 will have no effect. | 8192 |
| FixReceipts | \[ONLY FOR MISSING RECEIPTS ISSUE\] Turns on receipts validation that checks for ones that might be missing due to previous bug. It downloads them from network if needed.If used please check that PivotNumber is same as original used when syncing the node as its used as a cut-off point. | false |
| PivotHash | Fast Blocks 同步中 pivot 区块的哈希值。 | null |
| PivotNumber | Fast Blocks 同步中 pivot 区块的编号。 | null |
| PivotTotalDifficulty | Fast Blocks 同步中 pivot 区块的总难度值（请注意，这里是总难度值，而非难度值）。 | null |
| SynchronizationEnabled | 如果被设置为 `false`，则该节点不会下载/处理新的区块。 | true |
| UseGethLimitsInFastBlocks | 如果被设置为 `true`，则在 Fast Blocks 模式下，Nethermind 节点会产生较小的请求，以避免 Geth 节点中断连接。该设置适用于 Geth 节点占比较大的网络 \（如，主网\）。但是，在 Parity 或 Nethermind 节点占比较大的网络\（如 Goerli、AuRa\）中，这会导致同步速度降低 ~4 倍。 | true |
| WitnessProtocolEnabled | Enables witness protocol. | false |

