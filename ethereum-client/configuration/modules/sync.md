# Sync

| Property Name | Description | Default |
| :--- | :--- | :--- |
| `BeamSync` | Beam Sync - only for DEBUG / DEV - not working in prod yet | `false` |
| `DownloadBodiesInFastSync` | If set to `true` then the block bodies will be downloaded in the Fast Sync mode | `true` |
| `DownloadReceiptsInFastSync` | If set to `true` then the receipts will be downloaded in the Fast Sync mode. This will slow down the process by a few hours but will allow you to interact with dApps that execute extensive historical logs searches \(like Maker CDPs\) | `true` |
| `FastBlocks` | If set to `true` then in the Fast Sync mode blocks will be first downloaded from the provided PivotNumber downwards. This allows for parallelization of requests with many sync peers and with no need to worry about syncing a valid branch \(syncing downwards to 0\). You need to enter the pivot block number, hash and total difficulty from a trusted source \(you can use etherscan and confirm with other sources if you wan to change it\) | `false` |
| `FastSync` | If set to `true` then the Fast Sync \(eth/63\) synchronization algorithm will be used | `false` |
| `FastSyncCatchUpHeightDelta` | Relevant only if `FastSync` is `true`. If set to a value, then it will set a minimum height threshold limit up to which FullSync, if already on, will stay on when chain will be behind network. If this limit will be exceeded, it will switch back to FastSync. Please note that last 32 blocks will always be processed in FullSync, so setting it to less or equal to 32 will have no effect | `null` |
| `PivotHash` | Hash of the pivot block for the Fast Blocks sync | `null` |
| `PivotNumber` | Number of the pivot block for the Fast Blocks sync | `null` |
| `PivotTotalDifficulty` | Total Difficulty of the pivot block for the Fast Blocks sync \(not - this is total difficulty and not difficulty\) | `null` |
| `SynchronizationEnabled` | If `false` then the node does not download/process new blocks | `true` |
| `UseGethLimitsInFastBlocks` | If set to `true` then in the Fast Blocks mode Nethermind generates smaller requests to avoid Geth from disconnecting. On the Geth heavy networks \(mainnet\) it is desired while on Parity or Nethermind heavy networks \(Goerli, AuRa\) it slows down the sync by a factor of ~4 | `true` |

