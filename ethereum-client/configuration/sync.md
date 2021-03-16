# Sync module

| Property Name | Description | Default |
| :--- | :--- | ---: |
| AncientBodiesBarrier | \[EXPERIMENTAL\] Defines the earliest body downloaded in fast sync when DownloadBodiesInFastSync is enabled. Actual values used will be Math.Max\(1, Math.Min\(PivotNumber, AncientBodiesBarrier\)\) | 0 |
| AncientReceiptsBarrier | \[EXPERIMENTAL\] Defines the earliest receipts downloaded in fast sync when DownloadReceiptsInFastSync is enabled. Actual value used will be Math.Max\(1, Math.Min\(PivotNumber, Math.Max\(AncientBodiesBarrier, AncientReceiptsBarrier\)\)\) | 0 |
| BeamSync | Enables beam sync that can be useful to create some JSON RPC queries while the node is fast syncing in the background. | false |
| BeamSyncContextTimeout | Number of seconds before a single beam sync request expires and throw an exception. If you want your JSON RPC requests to keep trying then set this value to a higher number. | 4 |
| BeamSyncFixMode | Should use beam sync to fix corrupted state DB \(dev use\). | false |
| BeamSyncPreProcessorTimeout | Number of seconds to pass without progress before beam sync stops trying to process a single block. | 15 |
| BeamSyncVerifiedMode | When beam syncing should verify each state item loaded from DB \(dev use\). | false |
| DownloadBodiesInFastSync | If set to 'true' then the block bodies will be downloaded in the Fast Sync mode. | true |
| DownloadHeadersInFastSync | If set to 'false' then beam sync will only download recent blocks. | true |
| DownloadReceiptsInFastSync | If set to 'true' then the receipts will be downloaded in the Fast Sync mode. This will slow down the process by a few hours but will allow you to interact with dApps that execute extensive historical logs searches \(like Maker CDPs\). | true |
| FastBlocks | If set to 'true' then in the Fast Sync mode blocks will be first downloaded from the provided PivotNumber downwards. This allows for parallelization of requests with many sync peers and with no need to worry about syncing a valid branch \(syncing downwards to 0\). You need to enter the pivot block number, hash and total difficulty from a trusted source \(you can use etherscan and confirm with other sources if you wan to change it\). | false |
| FastSync | If set to 'true' then the Fast Sync \(eth/63\) synchronization algorithm will be used. | false |
| FastSyncCatchUpHeightDelta | Relevant only if 'FastSync' is 'true'. If set to a value, then it will set a minimum height threshold limit up to which FullSync, if already on, will stay on when chain will be behind network. If this limit will be exceeded, it will switch back to FastSync. In normal usage we do not recommend setting this to less than 32 as this can cause issues with chain reorgs. Please note that last 2 blocks will always be processed in FullSync, so setting it to less than 2 will have no effect. | 8192 |
| FixReceipts | \[ONLY FOR MISSING RECEIPTS ISSUE\] Turns on receipts validation that checks for ones that might be missing due to previous bug. It downloads them from network if needed.If used please check that PivotNumber is same as original used when syncing the node as its used as a cut-off point. | false |
| PivotHash | Hash of the pivot block for the Fast Blocks sync. | null |
| PivotNumber | Number of the pivot block for the Fast Blocks sync. | null |
| PivotTotalDifficulty | Total Difficulty of the pivot block for the Fast Blocks sync \(not - this is total difficulty and not difficulty\). | null |
| SynchronizationEnabled | If 'false' then the node does not download/process new blocks.. | true |
| UseGethLimitsInFastBlocks | If set to 'true' then in the Fast Blocks mode Nethermind generates smaller requests to avoid Geth from disconnecting. On the Geth heavy networks \(mainnet\) it is desired while on Parity or Nethermind heavy networks \(Goerli, AuRa\) it slows down the sync by a factor of ~4 | true |
| WitnessProtocolEnabled | Enables witness protocol. | false |

