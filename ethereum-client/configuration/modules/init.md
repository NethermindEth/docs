# Init

| 属性名称 | 说明 | 默认值 |
| :--- | :--- | ---: |
| `BaseDbPath` | 所有nethermind数据库的基本目录路径 | `db` |
| `ChainSpecPath` | 链定义文件（奇偶校验chainspec或Geth生成文件）的路径。 | `null` |
| `DiscoveryEnabled` | 如果为`false` 该节点不会尝试查找已配置的引导节点之外的节点。 | `true` |
| `EnableUnsecuredDevWallet` | 如果为`true` ，将在应用程序中启用钱包/密钥存储。 | `false` |
| `GenesisHash` | 创世块的哈希-如果保留 null 默认值，不检查创世块的有效性，这对临时测试/专用网络很有用。 | `null` |
| `IsMining` | 如果为`true` ，则节点将设法密封/挖掘新块。 | `false` |
| `KeepDevWalletInMemory` | 如果为 `true` 任何创建的帐户仅在会话期间有效，并在应用程序关闭时删除。 | `false` |
| `LogDirectory` | 如果为null，路径设置为 \[applicationDirectiory\] logs | `null` |
| `LogFileName` | 生成的日志文件名称（在启动具有相同日志文件夹的多个网络时很有用）。 | `log.txt` |
| `PeerManagerEnabled` | 如果为`false` 该节点连不到新发现的对等方。 | `true` |
| `ProcessingEnabled` | 如果为`false` ，该节点不下载/处理新块。 | `true` |
| `StaticNodesPath` | 带有静态节点列表的文件路径。 | `Data/static-nodes.json` |
| `StoreReceipts` | 如果设置为`false`，在处理新的块之后，交易收据将不会存储在数据库中。此设置独立于在快速同步模式下下载收据。 | `true` |
| `UseMemDb` | 使用内存数据库的诊断模式。 | `false` |
| `WebSocketsEnabled` | 定义是否在`HttpPort`的节点启动时启用WebSockets服务-例如ws://localhost:8545/ws/json-rpc | `false` |



