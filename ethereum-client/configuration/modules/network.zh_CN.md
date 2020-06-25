# Network

| Property Name | Description | Default |
| :--- | :--- | ---: |
| `ActivePeersMaxCount` | Max number of connected peers | `25` |
| `CandidatePeerCountCleanupThreshold` | None | `11000` |
| `DiagTracerEnabled` | Enabled very verbose diag network tracing files for DEV purposes \(Nethermind specific\) | `false` |
| `DiscoveryPort` | UDP port number for incoming discovery connections | `30303` |
| `ExternalIp` | Use only if your node cannot resolve external IP automatically | `null` |
| `IsPeersPersistenceOn` | If `false` then discovered node list will be cleared on each restart | `true` |
| `LocalIp` | Use only if your node cannot resolve local IP automatically | `null` |
| `MaxCandidatePeerCount` | None | `10000` |
| `MaxPersistedPeerCount` | None | `2000` |
| `NettyArenaOrder` | \[TECHNICAL\] Defines the size of a buffer allocated to each peer - default is 8192 &lt;&lt; 11 so 16MB where order is 11 | `11` |
| `P2PPingInterval` | None | `10000` |
| `P2PPort` | TPC/IP port number for incoming P2P connections | `30303` |
| `PeersPersistenceInterval` | None | `5000` |
| `PeersUpdateInterval` | None | `100` |
| `PersistedPeerCountCleanupThreshold` | None | `2200` |
| `StaticPeers` | List of nodes for which we will keep the connection on. Static nodes are not counted to the max number of nodes limit | `null` |
| `TrustedPeers` | Currently ignored | `null` |

