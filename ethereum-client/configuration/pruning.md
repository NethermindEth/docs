# Pruning module

Configuration of the pruning parameters \(pruning is the process of removing some of the intermediary state nodes - it saves some disk space but makes most of the historical state queries fail\).

| Property Name | Description | Default |
| :--- | :--- | ---: |
| CacheMb | Pruning cache size in MB \(amount if historical nodes data to store in cache - the bigger the cache the bigger the disk space savings\). | 512 |
| Enabled | Enables pruning. | false |
| PersistenceInterval | Defines how often blocks will be persisted even if not required by cache memory usage \(the bigger the value the bigger the disk space savings\) | 8192 |

