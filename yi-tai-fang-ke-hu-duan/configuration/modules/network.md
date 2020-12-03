# 网络

| 属性名称 | 说明 | 默认值 |
| :--- | :--- | ---: |
| `ActivePeersMaxCount` |  |  |

连接的对等体的最大数量。 \| `25` \| \| `CandidatePeerCountCleanupThreshold` \| None \| `11000` \| \| `DiagTracerEnabled` \| 为开发目的启用非常详细的诊断网络跟踪文件（特定于Nethermind） \| `false` \| \| `DiscoveryPort` \| 传入发现连接的UDP端口号。 \| `30303` \| \| `ExternalIp` \| 仅当节点无法自动解析外部IP时使用。 \| `null` \| \| `IsPeersPersistenceOn` \| 如果为 `false`则每次重新启动时将清除发现的节点列表。 \| `true` \| \| `LocalIp` \| 仅当节点无法自动解析本地IP时使用 \| `null` \| \| `MaxCandidatePeerCount` \| None \| `10000` \| \| `MaxPersistedPeerCount` \| None \| `2000` \| \| `NettyArenaOrder` \| \[技术\] 定义分配给每个对等方的缓冲区的大小-默认值为 8192 &lt;&lt; 11，因此16MB，其中顺序为11。 \| `11` \| \| `P2PPingInterval` \| None \| `10000` \| \| `P2PPort` \| 传入P2P连接的TPC/IP端口号。 \| `30303` \| \| `PeersPersistenceInterval` \| None \| `5000` \| \| `PeersUpdateInterval` \| None \| `100` \| \| `PersistedPeerCountCleanupThreshold` \| None \| `2200` \| \| `StaticPeers` \| 我们将保持连接的节点列表。静态节点不计入最大节点数限制。 \| `null` \| \| `TrustedPeers` \| 目前被忽略。 \| `null` \|

