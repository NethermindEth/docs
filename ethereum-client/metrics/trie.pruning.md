# Pruning module

| Metric | Description |
| :--- | :--- |
| nethermind\_cached\_nodes\_count | Nodes that are currently kept in cache \(either persisted or not\) |
| nethermind\_committed\_nodes\_count | Nodes that have been committed since the session start. These nodes may have been pruned, persisted or replaced. |
| nethermind\_deep\_pruned\_persisted\_nodes\_count | Nodes that have been removed from the cache during deep pruning because they have been persisted before. |
| nethermind\_deep\_pruning\_time | Time taken by the last deep pruning. |
| nethermind\_last\_persisted\_block\_number | Last persisted block number \(snapshot\). |
| nethermind\_loaded\_from\_cache\_nodes\_count | Number of reads from the node cache. |
| nethermind\_loaded\_from\_db\_nodes\_count | Number of DB reads. |
| nethermind\_loaded\_from\_rlp\_cache\_nodes\_count | Number of redas from the RLP cache. |
| nethermind\_memory\_used\_by\_cache | Estimated memory used by cache. |
| nethermind\_persisted\_node\_count | Nodes that have been persisted since the session start. |
| nethermind\_pruned\_persisted\_nodes\_count | Nodes that have been removed from the cache during pruning because they have been persisted before. |
| nethermind\_pruned\_transient\_nodes\_count | Nodes that have been removed from the cache during pruning because they were no longer needed. |
| nethermind\_pruning\_time | Time taken by the last pruning. |
| nethermind\_replaced\_nodes\_count | Number of nodes that have been exactly the same as other nodes in the cache when committing. |
| nethermind\_snapshot\_persistence\_time | Time taken by the last snapshot persistence. |

