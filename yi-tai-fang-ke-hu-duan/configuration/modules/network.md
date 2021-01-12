# Network

| 属性名称 | 描述 | 默认值 |
| :--- | :--- | ---: |
| `ActivePeersMaxCount` | 可连接对等节点的最大数量。 | `25` |
| `CandidatePeerCountCleanupThreshold` | 无 | `11000` |
| `DiagTracerEnabled` | 出于开发目的而启用的非常详细的诊断网络追踪文件（Nethermind 特有功能） | `false` |
| `DiscoveryPort` | 传入发现连接的 UDP 端口号。 | `30303` |
| `ExternalIp` | 仅限您的节点无法自动解析外部 IP 时使用。 | `null` |
| `IsPeersPersistenceOn` | 如果被设置为 `false`，则每次重启时已发现节点列表都将被清除。 | `true` |
| `LocalIp` | 仅限您的节点无法自动解析本地 IP 时使用 | `null` |
| `MaxCandidatePeerCount` | 无 | `10000` |
| `MaxPersistedPeerCount` | 无 | `2000` |
| `NettyArenaOrder` | \[技术\] 定义分配给每个对等节点的缓冲区大小。默认值为 8192 &lt;&lt; 11，因此当次方数是 11 时，缓冲区大小是 16MB。 | `11` |
| `P2PPingInterval` | 无 | `10000` |
| `P2PPort` | 传入 P2P 连接的 TPC/IP 端口号。 | `30303` |
| `PeersPersistenceInterval` | 无 | `5000` |
| `PeersUpdateInterval` | 无 | `100` |
| `PersistedPeerCountCleanupThreshold` | 无 | `2200` |
| `StaticPeers` | 我们将保持连接的节点的列表。静态节点数量不计入最大节点数量。 | `null` |
| `TrustedPeers` | 目前暂时忽略。 | `null` |

