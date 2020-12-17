# JsonRpc

| 属性名称 | 描述 | 默认值 |
| :--- | :--- | ---: |
| `Enabled` | 定义是否在节点启动时启用 JSON RPC 服务。如果默认值不适用，请配置主机 nad 端口。 | `false` |
| `EnabledModules` | 定义应该启用的 RPC 模块。 | `all` |
| `FindLogBlockDepthLimit` | 定义查找日志时的区块深度。 | `1000` |
| `GasCap` | eth\_call 和 eth\_estimateGas 的 gas 上限。 | `null` |
| `Host` | JSON RPC 调用的主机 IP 地址。在启用 JSON RPC 时，请确定您已配置防火墙。如果 127.0.0.1 地址不可用，请尝试将主机地址设置成 0.0.0.0 等。 | `127.0.0.1` |
| `Port` | JSON RPC 调用的端口号。在启用 JSON RPC 时，请确定您已配置防火墙。 | `8545` |
| `RpcRecorderBaseFilePath` | 诊断 JSON RPC 记录器的基本文件路径。 | `logs/rpc.log_1.txt` |
| `RpcRecorderEnabled` | 定义是否在节点启动时启用 JSON RPC 诊断记录。除非您是诊断 JSON-RPC 问题的开发人员，否则请不要启用。 | `false` |
| `WebSocketsPort` | JSON RPC WebSockets 调用的端口号。默认情况下，该端口也用于普通 JSON RPC 调用。在启用 JSON RPC 时，请确保您已配置防火墙。 | `8545` |
| `BufferResponses` | 定义 JSON RPC 服务是否会缓冲响应来设置 Content-Length 头。如果该属性被设置为 False，JSON RPC 服务会使用 HTTP/1.1 分块传输编码。 | `false` |

