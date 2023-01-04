# Merge



| Property | Env Variable | Description | Default |
| :--- | :--- | :--- | :--- |
| BuilderRelayUrl | NETHERMIND_MERGECONFIG_BUILDERRELAYURL | URL to Builder Relay. If set when building blocks nethermind will send them to the relay. | null |
| Enabled | NETHERMIND_MERGECONFIG_ENABLED | Defines whether the Merge plugin is enabled bundles are allowed. | true |
| FinalTotalDifficulty | NETHERMIND_MERGECONFIG_FINALTOTALDIFFICULTY | Final total difficulty is total difficulty of the last PoW block. FinalTotalDifficulty >= TerminalTotalDifficulty. | null |
| SecondsPerSlot | NETHERMIND_MERGECONFIG_SECONDSPERSLOT | Deprecated since v1.14.7. Please use BlocksConfig.SecondsPerSlot. Seconds per slot. | 12 |
| TerminalBlockHash | NETHERMIND_MERGECONFIG_TERMINALBLOCKHASH | Terminal PoW block hash used for transition process. | null |
| TerminalBlockNumber | NETHERMIND_MERGECONFIG_TERMINALBLOCKNUMBER | Terminal PoW block number used for transition process. |  |
| TerminalTotalDifficulty | NETHERMIND_MERGECONFIG_TERMINALTOTALDIFFICULTY | Terminal total difficulty used for transition process. | null |
