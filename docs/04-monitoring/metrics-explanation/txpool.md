# TxPool

| Metric | Description |
| :--- | :--- |
| nethermind_dark_pool_ratio_level1 | Ratio of transactions in the block absent in hashCache. |
| nethermind_dark_pool_ratio_level2 | Ratio of transactions in the block absent in pending transactions. |
| nethermind_eip1559_transactions_ratio | Ratio of 1559-type transactions in the block. |
| nethermind_pending1559_transactions_added | Number of pending 1559-type transactions added to transaction pool. |
| nethermind_pending_transactions_added | Number of pending transactions added to transaction pool. |
| nethermind_pending_transactions_balance_below_value | Number of pending transactions received that were ignored because balance is less than txn value. |
| nethermind_pending_transactions_discarded | Number of pending transactions received that were ignored. |
| nethermind_pending_transactions_evicted | Number of pending transactions evicted from transaction pool. |
| nethermind_pending_transactions_gas_limit_too_high | Number of pending transactions received that were ignored because the gas limit was to high for the block. |
| nethermind_pending_transactions_hashes_sent | Number of hashes of pending transactions broadcasted to peers. |
| nethermind_pending_transactions_known | Number of already known pending transactions. |
| nethermind_pending_transactions_low_nonce | Number of transactions with already used nonce. |
| nethermind_pending_transactions_malformed | Number of malformed transactions. |
| nethermind_pending_transactions_nonce_gap | Number of pending transactions received that were ignored because of not having preceding nonce of this sender in TxPool. |
| nethermind_pending_transactions_passed_filters_but_cannot_compete_on_fees | Number of pending transactions received that were ignored after passing early rejections as balance is too low to compete with lowest effective fee in transaction pool. |
| nethermind_pending_transactions_received | Number of pending transactions received from peers. |
| nethermind_pending_transactions_sent | Number of pending transactions broadcasted to peers. |
| nethermind_pending_transactions_too_low_balance | Number of pending transactions received that were ignored because balance too low for fee to be higher than the lowest fee in transaction pool. |
| nethermind_pending_transactions_too_low_fee | Number of pending transactions received that were ignored because of fee lower than the lowest fee in transaction pool. |
| nethermind_pending_transactions_unresolvable_sender | Number of pending transactions received that were ignored because the sender couldn't be resolved. |
| nethermind_pending_transactions_with_expensive_filtering | Number of pending transactions that reached filters which are resource expensive |
| nethermind_pending_transactions_zero_balance | Number of pending transactions received that were ignored because balance is zero and cannot pay gas. |
| nethermind_transaction_count | Number of transactions in pool. |
