# TxPool

| Metric | Description |
| :--- | :--- |
| nethermind_dark_pool_ratio_level1 | Ratio of transactions in the block absent in hashCache. |
| nethermind_dark_pool_ratio_level2 | Ratio of transactions in the block absent in pending transactions. |
| nethermind_eip1559_transactions_ratio | Ratio of 1559-type transactions in the block. |
| nethermind_pending1559_transactions_added | Number of pending 1559-type transactions added to transaction pool. |
| nethermind_pending_transactions_added | Number of pending transactions added to transaction pool. |
| nethermind_pending_transactions_discarded | Number of pending transactions received that were ignored. |
| nethermind_pending_transactions_evicted | Number of pending transactions evicted from transaction pool. |
| nethermind_pending_transactions_known | Number of already known pending transactions. |
| nethermind_pending_transactions_received | Number of pending transactions received from peers. |
| nethermind_pending_transactions_sent | Number of pending transactions broadcasted to peers. |
| nethermind_pending_transactions_stored | Number of already stored pending transactions. |
| nethermind_pending_transactions_too_far_in_future | Number of pending transactions received that were ignored because of nonce bigger than current nonce about more than FutureNonceRetention. |
| nethermind_pending_transactions_too_low_fee | Number of pending transactions received that were ignored because of effective fee lower than the lowest effective fee in transaction pool. |
