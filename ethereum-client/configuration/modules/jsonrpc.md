# JsonRpc

| 属性名称 | 说明 | 默认值 |
| :--- | :--- | ---: |
| `Enabled` | 定义是否在节点启动时启用JSON RPC服务。如果默认值不起作用，请配置主机nad端口。 | `false` |
| `EnabledModules` | 定义应启用的RPC模块。 | `all` |
| `FindLogBlockDepthLimit` | 定义查找日志时的块深度。 | `1000` |
| `GasCap` | eth\_call 和 eth\_estimateGas 的气体限制。 | `null` |
| `Host` | JSON RPC调用的主机。启用JSON RPC时，确保已配置防火墙。如果跟 127.0.0.1不起作用，试试相似0.0.0.0 | `127.0.0.1` |
| `Port` | JSON RPC调用的端口号。启用JSON RPC时，确保已配置防火墙。 | `8545` |
| `RpcRecorderBaseFilePath` | 诊断JSON RPC记录器的基本文件路径。 | `logs/rpc.log_1.txt` |
| `RpcRecorderEnabled` | 定义是否在节点启动时启用JSON RPC诊断记录。除非您是诊断JSON-RPC问题的开发人员，否则不要启用。 | `false` |
| `WebSocketsPort` | JSON RPC web sockets 调用的端口号。默认情况下，相同的端口用作常规 JSON RPC 。启用 JSON RPCC 时，确保已配置防火墙。 | `8545` |

