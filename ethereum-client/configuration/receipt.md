# Receipt



| Property | Env Variable | Description | Default |
| :--- | :--- | :--- | :--- |
| CompactReceiptStore | NETHERMIND_RECEIPTCONFIG_COMPACTRECEIPTSTORE | If set to 'true' then reduce receipt db size at expense of rpc performance. | true |
| CompactTxIndex | NETHERMIND_RECEIPTCONFIG_COMPACTTXINDEX | If set to 'true' then reduce receipt tx index db size at expense of rpc performance. | true |
| ReceiptsMigration | NETHERMIND_RECEIPTCONFIG_RECEIPTSMIGRATION | If set to 'true' then receipts db will be migrated to new schema. | false |
| StoreReceipts | NETHERMIND_RECEIPTCONFIG_STORERECEIPTS | If set to 'false' then transaction receipts will not be stored in the database after a new block is processed. This setting is independent from downloading receipts in fast sync mode. | true |
| TxLookupLimit | NETHERMIND_RECEIPTCONFIG_TXLOOKUPLIMIT | Number of recent blocks to maintain transaction index. 0 to never remove tx index. -1 to never index. | 2350000 |
