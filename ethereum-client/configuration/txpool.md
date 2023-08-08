# TxPool



| Property | Env Variable | Description | Default |
| :--- | :--- | :--- | :--- |
| GasLimit | NETHERMIND_TXPOOLCONFIG_GASLIMIT | Max transaction gas allowed. | null |
| HashCacheSize | NETHERMIND_TXPOOLCONFIG_HASHCACHESIZE | Max number of cached hashes of already known transactions.It is set automatically by the memory hint. | 524288 |
| PeerNotificationThreshold | NETHERMIND_TXPOOLCONFIG_PEERNOTIFICATIONTHRESHOLD | Defines average percent of tx hashes from persistent broadcast send to peer together with hashes of last added txs. | 5 |
| ReportMinutes | NETHERMIND_TXPOOLCONFIG_REPORTMINUTES | Minutes between reporting on current state of tx pool. | null |
| Size | NETHERMIND_TXPOOLCONFIG_SIZE | Max number of transactions held in mempool (more transactions in mempool mean more memory used | 2048 |
