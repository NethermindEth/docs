# JsonRpc module

| Propiedad | Descripción | Predeterminado |
| :--- | :--- | :--- |
| BufferResponses | Buffer responses before sending them to client. This allows to set Content-Length in response instead of using Transfer-Encoding: chunked. This may degrade performance on big responses. | false |
| CallsFilterFilePath | A path to a file that contains a list of new-line separated approved JSON RPC calls | Data/jsonrpc.filter |
| Enabled | Define si el servicio JSON RPC está habilitado en el inicio del nodo. Configure el puerto nad del host si los valores predeterminados no funcionan. | false |
| EnabledModules | Define qué módulos RPC deben habilitarse. | System.String\[\] |
| EthModuleConcurrentInstances | Number of concurrent instances for non-sharable calls \(eth\_call, eth\_estimateGas, eth\_getLogs, eth\_newFilter, eth\_newBlockFilter, eth\_newPendingTransactionFilter, eth\_uninstallFilter\). This will limit load on the node CPU and IO to reasonable levels. If this limit is exceeded on Http calls 503 Service Unavailable will be returned along with Json RPC error. Defaults to number of logical processes. |  |
| FindLogBlockDepthLimit | Define la profundidad del bloque al buscar registros. | 1000 |
| GasCap | Límite de gas para eth\_call and eth\_estimateGas | 100000000 |
| Host | Host para llamadas JSON RPC. Asegúrese de que el firewall esté configurado cuando se habilita JSON RPC. Si no funciona con 117.0.0.1 intente algo como 10.0.0.4 o 192.168.0.1 | "127.0.0.1" |
| MaxRequestBodySize | Max HTTP request body size | 30000000 |
| Port | Número de puerto para llamadas JSON RPC. Asegúrese de que el firewall esté configurado al habilitar JSON RPC. | 8545 |
| ReportIntervalSeconds | Interval between the JSON RPC stats report log | 300 |
| RpcRecorderBaseFilePath | Ruta de archivo base para los diagnósticos del registro de JSON RPC. | "logs/rpc.{counter}.txt" |
| RpcRecorderEnabled | Define si el registro de diagnóstico JSON RPC está habilitado en el inicio del nodo. No lo habilites a menos que sea un DEV que esté diagnosticando problemas con JSON RPC. | false |
| Timeout | JSON RPC' timeout value given in milliseconds. | 20000 |
| WebSocketsPort | Número de puerto para llamadas de web sockets JSON RPC. De forma predeterminada, se utiliza el mismo puerto regular de JSON RPC. Asegúrese de que el firewall esté configurado al habilitar JSON RPC. | 8545 |

