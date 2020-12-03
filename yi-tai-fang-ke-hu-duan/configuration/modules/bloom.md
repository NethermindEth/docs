# Bloom

| 属性名称 | 描述 | 默认值 |
| :--- | :--- | ---: |
| `Index` | 定义是否使用 Bloom 索引。Bloom 索引会加快 rpc 日志的搜索速度。 | `null` |
| `IndexLevelBucketSizes` | 定义索引层级的乘数，可针对每条链进行调整，以便提高性能。 | `[4, 8, 8]` |
| `Migration` | 定义是否将之前下载的区块迁移至 Bloom 索引。 | `false` |
| `MigrationStatistics` | 定义是否计算并输出迁移统计数据。 | `false` |

