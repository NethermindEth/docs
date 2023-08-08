# Trie.Pruning

| Metric | Description |
| :--- | :--- |
| nethermind_cached_nodes_count | Nodes that are currently kept in cache (either persisted or not) |
| nethermind_committed_nodes_count | Nodes that have been committed since the session start. These nodes may have been pruned, persisted or replaced. |
| nethermind_deep_pruned_persisted_nodes_count | Nodes that have been removed from the cache during deep pruning because they have been persisted before. |
| nethermind_deep_pruning_time | Time taken by the last deep pruning. |
| nethermind_last_persisted_block_number | Last persisted block number (snapshot). |
| nethermind_loaded_from_cache_nodes_count | Number of reads from the node cache. |
| nethermind_loaded_from_db_nodes_count | Number of DB reads. |
| nethermind_loaded_from_rlp_cache_nodes_count | Number of reads from the RLP cache. |
| nethermind_memory_used_by_cache | Estimated memory used by cache. |
| nethermind_persisted_node_count | Nodes that have been persisted since the session start. |
| nethermind_pruned_persisted_nodes_count | Nodes that have been removed from the cache during pruning because they have been persisted before. |
| nethermind_pruned_transient_nodes_count | Nodes that have been removed from the cache during pruning because they were no longer needed. |
| nethermind_pruning_time | Time taken by the last pruning. |
| nethermind_replaced_nodes_count | Number of nodes that have been exactly the same as other nodes in the cache when committing. |
| nethermind_snapshot_persistence_time | Time taken by the last snapshot persistence. |
