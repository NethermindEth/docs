# JsonRpc

| Property Name | Description | Default |
| :--- | :--- | ---: |
| `Enabled` | Defines whether the JSON RPC service is enabled on node startup. Configure host nad port if default values do not work for you | `false` |
| `EnabledModules` | Defines which RPC modules should be enabled | `all` |
| `FindLogBlockDepthLimit` | Defines block depth when finding logs | `1000` |
| `GasCap` | Gas limit for eth\_call and eth\_estimateGas | `null` |
| `Host` | Host for JSON RPC calls. Ensure the firewall is configured when enabling JSON RPC. If it does not work with 127.0.0.1 try something like 0.0.0.0 | `127.0.0.1` |
| `Port` | Port number for JSON RPC calls. Ensure the firewall is configured when enabling JSON RPC | `8545` |
| `RpcRecorderBaseFilePath` | Base file path for diagnostic JSON RPC recorder | `logs/rpc.log_1.txt` |
| `RpcRecorderEnabled` | Defines whether the JSON RPC diagnostic recording is enabled on node startup. Do not enable unless you are a DEV diagnosing issues with JSON RPC | `false` |
| `WebSocketsPort` | Port number for JSON RPC web sockets calls. By default same port is used as regular JSON RPC. Ensure the firewall is configured when enabling JSON RPC | `8545` |
| `BufferResponses` | Defines whether the JSON RPC service will buffer responses in order to set the Content-Length header, otherwise it uses HTTP/1.1 Chunked Transfer Encoding | `false` |

