# Init

| 属性名称 | 描述 | 默认值 |
| :--- | :--- | ---: |
| `BaseDbPath` | 所有 Nethermind 数据库的基本目录路径 | `db` |
| `ChainSpecPath` | 通往区块链定义文件（例如，Parity 的 chainspec 文件或 Geth 的 genesis 文件）的路径。 | `null` |
| `DiscoveryEnabled` | 如果被设置为 `false`，则除已配置好的 bootnode 以外，该节点不会尝试寻找其它节点。 | `true` |
| `EnableUnsecuredDevWallet` | 如果被设置为 `true` ，则在该应用中启用钱包/密钥库。 | `false` |
| `GenesisHash` | 创世块的哈希值。如果保留默认空值，则不会检查创世块的有效性，这对临时测试网/私有网络来说很有用。 | `null` |
| `IsMining` | 如果被设置为 `true` ，则节点将尝试打包/挖掘新的区块。 | `false` |
| `KeepDevWalletInMemory` | 如果被设置为 `true`，则所有已创建帐户仅在会话期间有效，并且会在应用关闭时被删除。 | `false` |
| `LogDirectory` | 如果为空值，该路径将被设置为 \[应用目录\] 日志。 | `null` |
| `LogFileName` | 已生成日志文件的名称（在启动多个共享日志文件夹的网络时很有用）。 | `log.txt` |
| `PeerManagerEnabled` | 如果被设置为 `false`，则该节点不会与新发现的对等节点建立连接。 | `true` |
| `ProcessingEnabled` | 如果被设置为 `false`，则该节点不会下载/处理新的区块。 | `true` |
| `StaticNodesPath` | 通往带有静态节点列表的文件的路径。 | `Data/static-nodes.json` |
| `StoreReceipts` | 如果被设置为 `false`，则新区块处理完成后，交易收据不会存储在数据库中。该设置与快速同步模式中的下载收据设置相互独立。 | `true` |
| `UseMemDb` | 使用内存数据库的诊断模式。 | `false` |
| `WebSocketsEnabled` | 定义是否在节点启动时通过 `HttpPort` 启用 WebSockets 服务。例如，ws://localhost:8545/ws/json-rpc。 | `false` |

