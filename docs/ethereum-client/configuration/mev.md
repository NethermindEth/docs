# Mev



| Property | Env Variable | Description | Default |
| :--- | :--- | :--- | :--- |
| BundleHorizon | NETHERMIND_MEVCONFIG_BUNDLEHORIZON | Defines how long MEV bundles will be kept in memory by clients | 3600 |
| BundlePoolSize | NETHERMIND_MEVCONFIG_BUNDLEPOOLSIZE | Defines the maximum number of MEV bundles that can be kept in memory by clients | 200 |
| Enabled | NETHERMIND_MEVCONFIG_ENABLED | Defines whether the MEV bundles are allowed. | false |
| MaxMergedBundles | NETHERMIND_MEVCONFIG_MAXMERGEDBUNDLES | Defines the maximum number of MEV bundles to be included within a single block | 1 |
| TrustedRelays | NETHERMIND_MEVCONFIG_TRUSTEDRELAYS | Defines the list of trusted relay addresses to receive megabundles from as a comma separated string |  |
