# Sync

| Property Name | Description | Default |
| :--- | :--- | ---: |
| `FixReceipts` | \(ETH2 relevant\) Set it to true once \(--Sync.FixReceipts when starting\) if you have a pre-1.9.39 node synced. It fixes an issue that was causing some blocks to not have receipts stored and causing Eth2 clients to reject Eth1 data from Nethermind. | `false` |
| `BeamSync` | Beam Sync - only for DEBUG / DEV - not working in prod yet | `false` |
| `DownloadBodiesInFastSync` | If set to `true` then the block bodies will be downloaded in the Fast Sync mode | `false` |
| `AncientBodiesBarrier` | Allows to set a block number down to which historical block bodies will be downloaded when `DownloadBodiesInFastSync` is enabled. | 0 |
| `DownloadReceiptsInFastSync` | If set to `true` then the receipts will be downloaded in the Fast Sync mode. This will slow down the process by a few hours but will allow you to interact with dApps that execute extensive historical logs searches \(like Maker CDPs\) | `false` |
| `AncientReceiptsBarrier` | Allows to set a block number down to which historical receipts will be downloaded when `DownloadReceiptsInFastSync` is enabled. | 0 |
| `FastBlocks` | If set to `true` then in the Fast Sync mode blocks will be first downloaded from the provided PivotNumber downwards. This allows for parallelization of requests with many sync peers and with no need to worry about syncing a valid branch \(syncing downwards to 0\). You need to enter the pivot block number, hash and total difficulty from a trusted source \(you can use etherscan and confirm with other sources if you want to change it\) | `false` |
| `FastSync` | If set to `true` then the Fast Sync \(eth/63\) synchronization algorithm will be used | `false` |
| `FastSyncCatchUpHeightDelta` | Relevant only if `FastSync` is `true`. If set to a value, then it will set a minimum height threshold limit up to which FullSync, if already on, will stay on when chain will be behind network. If this limit will be exceeded, it will switch back to FastSync. Please note that last 32 blocks will always be processed in FullSync, so setting it to less or equal to 32 will have no effect | `null` |
| `PivotHash` | Hash of the pivot block for the Fast Blocks sync | `null` |
| `PivotNumber` | Number of the pivot block for the Fast Blocks sync | `null` |
| `PivotTotalDifficulty` | Total Difficulty of the pivot block for the Fast Blocks sync \(not - this is total difficulty and not difficulty\) | `null` |
| `SynchronizationEnabled` | If `false` then the node does not download/process new blocks | `true` |
| `UseGethLimitsInFastBlocks` | If set to `true` then in the Fast Blocks mode Nethermind generates smaller requests to avoid Geth from disconnecting. On the Geth heavy networks \(mainnet\) it is desired while on Parity or Nethermind heavy networks \(Goerli, AuRa\) it slows down the sync by a factor of ~4 | `true` |

