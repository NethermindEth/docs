# TxPool



| Property | Env Variable | Description | Default |
| :--- | :--- | :--- | :--- |
| BlobCacheSize | NETHERMIND_TXPOOLCONFIG_BLOBCACHESIZE | Max number of full blob transactions stored in memory as a cache for persistent storage. Default value use max 200MB (256*128KB*6blobs), for 1-blob txs it's 33MB (256*128KB) | 256 |
| BlobSupportEnabled | NETHERMIND_TXPOOLCONFIG_BLOBSUPPORTENABLED | If true, blob transactions support will be enabled | false |
| GasLimit | NETHERMIND_TXPOOLCONFIG_GASLIMIT | Max transaction gas allowed. | null |
| HashCacheSize | NETHERMIND_TXPOOLCONFIG_HASHCACHESIZE | Max number of cached hashes of already known transactions.It is set automatically by the memory hint. | 524288 |
| InMemoryBlobPoolSize | NETHERMIND_TXPOOLCONFIG_INMEMORYBLOBPOOLSIZE | Max number of full blob transactions stored in memory. Used only if persistent storage is disabled | 512 |
| MaxPendingBlobTxsPerSender | NETHERMIND_TXPOOLCONFIG_MAXPENDINGBLOBTXSPERSENDER | Max number of pending blob transactions per single sender. Set it to 0 to disable the limit. | 16 |
| MaxPendingTxsPerSender | NETHERMIND_TXPOOLCONFIG_MAXPENDINGTXSPERSENDER | Max number of pending transactions per single sender. Set it to 0 to disable the limit. | 0 |
| PeerNotificationThreshold | NETHERMIND_TXPOOLCONFIG_PEERNOTIFICATIONTHRESHOLD | Defines average percent of tx hashes from persistent broadcast send to peer together with hashes of last added txs. Set this value to 100 if you want to broadcast all transactions. | 5 |
| PersistentBlobStorageEnabled | NETHERMIND_TXPOOLCONFIG_PERSISTENTBLOBSTORAGEENABLED | If true, all blob transactions would be stored in persistent db | false |
| PersistentBlobStorageSize | NETHERMIND_TXPOOLCONFIG_PERSISTENTBLOBSTORAGESIZE | Max number of full blob transactions stored in the database (increasing the number of transactions in the blob pool also results in higher memory usage). Default value use max 13GB (16386*128KB*6blobs), for 1-blob txs it's 2GB (16386*128KB) | 16384 |
| ReportMinutes | NETHERMIND_TXPOOLCONFIG_REPORTMINUTES | Minutes between reporting on current state of tx pool. | null |
| Size | NETHERMIND_TXPOOLCONFIG_SIZE | Max number of transactions held in mempool (more transactions in mempool mean more memory used | 2048 |
