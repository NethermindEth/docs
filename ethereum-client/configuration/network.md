# Network



| Property | Env Variable | Description | Default |
| :--- | :--- | :--- | :--- |
| ActivePeersMaxCount | NETHERMIND_NETWORKCONFIG_ACTIVEPEERSMAXCOUNT | [OBSOLETE](Use MaxActivePeers instead) Max number of connected peers. | 50 |
| Bootnodes | NETHERMIND_NETWORKCONFIG_BOOTNODES | Bootnodes |  |
| DiagTracerEnabled | NETHERMIND_NETWORKCONFIG_DIAGTRACERENABLED | Enabled very verbose diag network tracing files for DEV purposes (Nethermind specific) | false |
| DiscoveryPort | NETHERMIND_NETWORKCONFIG_DISCOVERYPORT | UDP port number for incoming discovery connections. Keep same as TCP/IP port because using different values has never been tested. | 30303 |
| EnableUPnP | NETHERMIND_NETWORKCONFIG_ENABLEUPNP | Enable automatic port forwarding via UPnP | false |
| ExternalIp | NETHERMIND_NETWORKCONFIG_EXTERNALIP | Use only if your node cannot resolve external IP automatically. | null |
| LocalIp | NETHERMIND_NETWORKCONFIG_LOCALIP | Use only if your node cannot resolve local IP automatically. | null |
| MaxActivePeers | NETHERMIND_NETWORKCONFIG_MAXACTIVEPEERS | Same as ActivePeersMaxCount. | 50 |
| NettyArenaOrder | NETHERMIND_NETWORKCONFIG_NETTYARENAORDER | [TECHNICAL] Defines the size of a buffer allocated to each peer - default is 8192 << 11 so 16MB where order is 11. | 11 |
| OnlyStaticPeers | NETHERMIND_NETWORKCONFIG_ONLYSTATICPEERS | If set to 'true' then no connections will be made to non-static peers. | false |
| P2PPort | NETHERMIND_NETWORKCONFIG_P2PPORT | TPC/IP port number for incoming P2P connections. | 30303 |
| PriorityPeersMaxCount | NETHERMIND_NETWORKCONFIG_PRIORITYPEERSMAXCOUNT | Max number of priority peers. Can be overwritten by value from plugin config. | 0 |
| StaticPeers | NETHERMIND_NETWORKCONFIG_STATICPEERS | List of nodes for which we will keep the connection on. Static nodes are not counted to the max number of nodes limit. | null |
