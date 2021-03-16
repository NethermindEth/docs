# Network module

| Property Name | Description | Default |
| :--- | :--- | ---: |
| ActivePeersMaxCount | [OBSOLETE](https://github.com/NethermindEth/docs/tree/2cd8f2b57405dd98d031ae74bd097b4f540015fa/ethereum-client/configuration/modules/Use%20MaxActivePeers%20instead/README.md) Max number of connected peers. | 50 |
| DiagTracerEnabled | Enabled very verbose diag network tracing files for DEV purposes \(Nethermind specific\) | false |
| DiscoveryPort | UDP port number for incoming discovery connections. Keep same as TCP/IP port because using different values has never been tested. | 30303 |
| ExternalIp | Use only if your node cannot resolve external IP automatically. | null |
| LocalIp | Use only if your node cannot resolve local IP automatically. | null |
| MaxActivePeers | Same as ActivePeersMaxCount. | 50 |
| NettyArenaOrder | \[TECHNICAL\] Defines the size of a buffer allocated to each peer - default is 8192 &lt;&lt; 11 so 16MB where order is 11. | 11 |
| OnlyStaticPeers | If set to 'true' then no connections will be made to non-static peers. | false |
| P2PPort | TPC/IP port number for incoming P2P connections. | 30303 |
| StaticPeers | List of nodes for which we will keep the connection on. Static nodes are not counted to the max number of nodes limit. | null |

