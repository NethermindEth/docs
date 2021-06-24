# JsonRpc module

| 属性 | 描述 | 默认值 |
| :--- | :--- | :--- |
| BufferResponses | Buffer responses before sending them to client. This allows to set Content-Length in response instead of using Transfer-Encoding: chunked. This may degrade performance on big responses. | false |
| CallsFilterFilePath | A path to a file that contains a list of new-line separated approved JSON RPC calls | Data/jsonrpc.filter |
| Enabled | 定义是否在节点启动时启用 JSON RPC 服务。如果默认值不适用，请配置主机 nad 端口。 | false |
| EnabledModules | 定义应该启用的 RPC 模块。 | System.String\[\] |
| EthModuleConcurrentInstances | Number of concurrent instances for non-sharable calls \(eth\_call, eth\_estimateGas, eth\_getLogs, eth\_newFilter, eth\_newBlockFilter, eth\_newPendingTransactionFilter, eth\_uninstallFilter\). This will limit load on the node CPU and IO to reasonable levels. If this limit is exceeded on Http calls 503 Service Unavailable will be returned along with Json RPC error. Defaults to number of logical processes. |  |
| FindLogBlockDepthLimit | 定义查找日志时的区块深度。 | 1000 |
| GasCap | eth\_call 和 eth\_estimateGas 的 gas 上限。 | 100000000 |
| Host | JSON RPC 调用的主机 IP 地址。在启用 JSON RPC 时，请确定您已配置防火墙。如果 127.0.0.1 地址不可用，请尝试将主机地址设置成 0.0.0.0 等。 | "127.0.0.1" |
| MaxRequestBodySize | Max HTTP request body size | 30000000 |
| Port | JSON RPC 调用的端口号。在启用 JSON RPC 时，请确定您已配置防火墙。 | 8545 |
| ReportIntervalSeconds | Interval between the JSON RPC stats report log | 300 |
| RpcRecorderBaseFilePath | 诊断 JSON RPC 记录器的基本文件路径。 | "logs/rpc.{counter}.txt" |
| RpcRecorderEnabled | 定义是否在节点启动时启用 JSON RPC 诊断记录。除非您是诊断 JSON-RPC 问题的开发人员，否则请不要启用。 | false |
| Timeout | JSON RPC' timeout value given in milliseconds. | 20000 |
| WebSocketsPort | JSON RPC WebSockets 调用的端口号。默认情况下，该端口也用于普通 JSON RPC 调用。在启用 JSON RPC 时，请确保您已配置防火墙。 | 8545 |

