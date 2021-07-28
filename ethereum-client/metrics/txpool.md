# TxPool module

| Metric | Description |
| :--- | :--- |
| nethermind\_dark\_pool\_ratio\_level1 | Ratio of transactions in the block absent in hashCache. |
| nethermind\_dark\_pool\_ratio\_level2 | Ratio of transactions in the block absent in pending transactions. |
| nethermind\_eip1559\_transactions\_ratio | Ratio of 1559-type transactions in the block. |
| nethermind\_pending1559\_transactions\_added | Number of pending 1559-type transactions added to transaction pool. |
| nethermind\_pending\_transactions\_added | Number of pending transactions added to transaction pool. |
| nethermind\_pending\_transactions\_discarded | Number of pending transactions received that were ignored. |
| nethermind\_pending\_transactions\_evicted | Number of pending transactions evicted from transaction pool. |
| nethermind\_pending\_transactions\_known | Number of already known pending transactions. |
| nethermind\_pending\_transactions\_received | Number of pending transactions received from peers. |
| nethermind\_pending\_transactions\_sent | Number of pending transactions broadcasted to peers. |
| nethermind\_pending\_transactions\_too\_far\_in\_future | Number of pending transactions received that were ignored because of nonce bigger than current nonce about more than FutureNonceRetention. |
| nethermind\_pending\_transactions\_too\_low\_fee | Number of pending transactions received that were ignored because of effective fee lower than the lowest effective fee in transaction pool. |

