# Merge



| Property | Env Variable | Description | Default |
| :--- | :--- | :--- | :--- |
| BuilderRelayUrl | NETHERMIND_MERGECONFIG_BUILDERRELAYURL | URL to Builder Relay. If set when building blocks nethermind will send them to the relay. | null |
| CollectionsPerDecommit | NETHERMIND_MERGECONFIG_COLLECTIONSPERDECOMMIT | Requests the GC to release process memory back to OS. Accept values `-1` which disables it, `0` which releases every time, and any positive integer which does it after that many EngineApi calls. | 75 |
| CompactMemory | NETHERMIND_MERGECONFIG_COMPACTMEMORY | Reduces process used memory. Accept values `No` which disables it, `Yes` which compacts normal heaps, `Full` compacts large object heap too (only when SweepMemory is set to `Gen2`). | Yes |
| Enabled | NETHERMIND_MERGECONFIG_ENABLED | Defines whether the Merge plugin is enabled bundles are allowed. | true |
| FinalTotalDifficulty | NETHERMIND_MERGECONFIG_FINALTOTALDIFFICULTY | Final total difficulty is total difficulty of the last PoW block. FinalTotalDifficulty >= TerminalTotalDifficulty. | null |
| PrioritizeBlockLatency | NETHERMIND_MERGECONFIG_PRIORITIZEBLOCKLATENCY | Reduces block EngineApi latency by disabling Garbage Collection during EngineApi calls. | true |
| SecondsPerSlot | NETHERMIND_MERGECONFIG_SECONDSPERSLOT | Deprecated since v1.14.7. Please use Blocks.SecondsPerSlot. Seconds per slot. | 12 |
| SweepMemory | NETHERMIND_MERGECONFIG_SWEEPMEMORY | Reduces memory usage by forcing Garbage Collection between EngineApi calls. Accept values `NoGc` (-1), Gen0 (0), Gen1 (1), Gen2 (2). | Gen1 |
| TerminalBlockHash | NETHERMIND_MERGECONFIG_TERMINALBLOCKHASH | Terminal PoW block hash used for transition process. | null |
| TerminalBlockNumber | NETHERMIND_MERGECONFIG_TERMINALBLOCKNUMBER | Terminal PoW block number used for transition process. |  |
| TerminalTotalDifficulty | NETHERMIND_MERGECONFIG_TERMINALTOTALDIFFICULTY | Terminal total difficulty used for transition process. | null |
