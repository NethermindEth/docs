# Network module

| Propiedad | Descripción | Predeterminado |
| :--- | :--- | :--- |
| ActivePeersMaxCount | [OBSOLETE](https://github.com/NethermindEth/docs/tree/b8c795545ab876ff12dec434d0cd00585f2ba346/ethereum-client/configuration/Use%20MaxActivePeers%20instead/README.md) Max number of connected peers. | 50 |
| DiagTracerEnabled | Se habilita archivos detallados de seguimiento de diagnóstico de red para fines de DEV \(específico de Nethermind\) | false |
| DiscoveryPort | UDP port number for incoming discovery connections. Keep same as TCP/IP port because using different values has never been tested. | 30303 |
| ExternalIp | Úsalo solamente si su nodo no puede resolver IP externas automáticamente | null |
| LocalIp | Úsalo solamente si su nodo no puede resolver IP local automáticamente | null |
| MaxActivePeers | Same as ActivePeersMaxCount. | 50 |
| NettyArenaOrder | \[TÉCNICO\] Define el tamaño de un buffer asignado a cada par; el valor predeterminado es 8192 &lt; & lt; 11 entonces 16 MB donde el pedido es 11 | 11 |
| OnlyStaticPeers | If set to 'true' then no connections will be made to non-static peers. | false |
| P2PPort | Número del puerto TCP/IP para conexiones P2P entrantes | 30303 |
| StaticPeers | Lista de nodos para los cuales mantenemos la conexión. Los nodos estáticos no se cuentan hasta el límite del número máximo de nodos | null |

