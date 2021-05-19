# Network module

| 属性 | 描述 | 默认值 |
| :--- | :--- | :--- |
| ActivePeersMaxCount | [OBSOLETE](https://github.com/NethermindEth/docs/tree/b8c795545ab876ff12dec434d0cd00585f2ba346/ethereum-client/configuration/Use%20MaxActivePeers%20instead/README.md) Max number of connected peers. | 50 |
| DiagTracerEnabled | 出于开发目的而启用的非常详细的诊断网络追踪文件（Nethermind 特有功能） | false |
| DiscoveryPort | UDP port number for incoming discovery connections. Keep same as TCP/IP port because using different values has never been tested. | 30303 |
| ExternalIp | 仅限您的节点无法自动解析外部 IP 时使用。 | null |
| LocalIp | 仅限您的节点无法自动解析本地 IP 时使用 | null |
| MaxActivePeers | 相同 ActivePeersMaxCount. | 50 |
| NettyArenaOrder | [技术] 定义分配给每个对等节点的缓冲区大小。默认值为 8192 &lt;&lt; 11，因此当次方数是 11 时，缓冲区大小是 16MB。 | 11 |
| OnlyStaticPeers | If set to 'true' then no connections will be made to non-static peers. | false |
| P2PPort | 传入 P2P 连接的 TPC/IP 端口号。 | 30303 |
| StaticPeers | 我们将保持连接的节点的列表。静态节点数量不计入最大节点数量。 | null |

