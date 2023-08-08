# Bloom



| Property | Env Variable | Description | Default |
| :--- | :--- | :--- | :--- |
| Index | NETHERMIND_BLOOMCONFIG_INDEX | Defines whether the Bloom index is used. Bloom index speeds up rpc log searches. | true |
| IndexLevelBucketSizes | NETHERMIND_BLOOMCONFIG_INDEXLEVELBUCKETSIZES | Defines multipliers for index levels. Can be tweaked per chain to boost performance. | [4, 8, 8] |
| Migration | NETHERMIND_BLOOMCONFIG_MIGRATION | Defines if migration of previously downloaded blocks to Bloom index will be done. | false |
| MigrationStatistics | NETHERMIND_BLOOMCONFIG_MIGRATIONSTATISTICS | Defines if migration statistics are to be calculated and output. | false |
