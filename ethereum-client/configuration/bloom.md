# Bloom module

| Property Name | Description | Default |
| :--- | :--- | ---: |
| Index | Defines whether the Bloom index is used. Bloom index speeds up rpc log searches. | true |
| IndexLevelBucketSizes | Defines multipliers for index levels. Can be tweaked per chain to boost performance. | \[4, 8, 8\] |
| Migration | Defines if migration of previously downloaded blocks to Bloom index will be done. | false |
| MigrationStatistics | Defines if migration statistics are to be calculated and output. | false |

