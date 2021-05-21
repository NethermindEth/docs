# Init module

| Propiedad | Descripción | Predeterminado |
| :--- | :--- | :--- |
| BaseDbPath | Ruta del directorio base para todas las bases de datos de nethermind. | "db" |
| ChainSpecPath | Ruta al archivo de definición de cadena \ (Especificación de cadena de paridad o archivo Geth genesis\). | chainspec/foundation.json |
| DiagnosticMode | Diagnostics modes | Ninguna |
| DiscoveryEnabled | Si es `false` entonces el nodo no intenta encontrar nodos más allá de los nodos de arranque configurados. | true |
| EnableUnsecuredDevWallet | Si es `true` entonces habilita la billetera de almacenamiento / llave clave en la aplicación. | false |
| GenesisHash | Hash del bloque de génesis - si se deja el valor nulo predeterminado, entonces no se verificará la validez del bloque de génesis, lo cual es útil para pruebas ad hoc / redes privadas. | null |
| HiveChainSpecPath | Path to the chain definition file created by Hive for test purpouse | chainspec/test.json |
| IsMining | Si es `true` entonces el nodo intentará sellar / minar nuevos bloques. | false |
| KeepDevWalletInMemory | Si es `true` entonces cualquier cuenta creada solo serán válidas durante la sesión y se eliminarán cuando se cierre la aplicación | false |
| LogDirectory | En caso de que sea nulo, la ruta se establece en \[applicationDirectiory\]\ registro | logs |
| LogFileName | Nombre del archivo de registro generado  \(útil al iniciar varias networks con la misma carpeta de registro\). | "log.txt" |
| MemoryHint | A hint for the max memory that will allow us to configure the DB and Netty memory allocations. | null |
| PeerManagerEnabled | Si es `false` entonces el nodo no se conecta a los pares recién descubiertos. | true |
| PluginsDirectory | Directory for Nethermind plugins like NDM. | plugins |
| ProcessingEnabled | Si es `falso` entonces el nodo no descarga / procesa nuevos bloques. | true |
| ReceiptsMigration | If set to 'true' then receipts db will be migrated to new schema. | false |
| RpcDbUrl | Url for remote node that will be used as DB source when 'DiagnosticMode' is set to'RpcDb' |  |
| StaticNodesPath | Ruta al archivo con una lista de nodos estáticos. | "Data/static-nodes.json" |
| StoreReceipts | Si se establece en `false` entonces los recibos de transacciones no se almacenados en la base de datos después de que un nuevo bloque se procese. Esta configuración es independiente de la descarga de recibos en el modo de sincronización rápida | true |
| WebSocketsEnabled | Define si el servicio WebSockets está habilitado en el inicio del nodo en el `HttpPort` - p. Ej. ws://localhost:8545/ws/json-rpc | false |

