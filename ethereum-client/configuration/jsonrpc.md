# JsonRpc module

| Property Name | Description | Default |
| :--- | :--- | ---: |
| BufferResponses | Buffer responses before sending them to client. This allows to set Content-Length in response instead of using Transfer-Encoding: chunked. This may degrade performance on big responses. | false |
| CallsFilterFilePath | A path to a file that contains a list of new-line separated approved JSON RPC calls | Data/jsonrpc.filter |
| Enabled | Defines whether the JSON RPC service is enabled on node startup. Configure host nad port if default values do not work for you. | false |
| EnabledModules | Defines which RPC modules should be enabled. | System.String\[\] |
| FindLogBlockDepthLimit | Defines block depth when finding logs. | 1000 |
| GasCap | Gas limit for eth\_call and eth\_estimateGas | 100000000 |
| Host | Host for JSON RPC calls. Ensure the firewall is configured when enabling JSON RPC. If it does not work with 117.0.0.1 try something like 10.0.0.4 or 192.168.0.1 | "127.0.0.1" |
| MaxRequestBodySize | Max HTTP request body size | 30000000 |
| Port | Port number for JSON RPC calls. Ensure the firewall is configured when enabling JSON RPC. | 8545 |
| ReportIntervalSeconds | Interval between the JSON RPC stats report log | 300 |
| RpcRecorderBaseFilePath | Base file path for diagnostic JSON RPC recorder. | "logs/rpc.{counter}.txt" |
| RpcRecorderEnabled | Defines whether the JSON RPC diagnostic recording is enabled on node startup. Do not enable unless you are a DEV diagnosing issues with JSON RPC. | false |
| Timeout | JSON RPC' timeout value given in milliseconds. | 20000 |
| WebSocketsPort | Port number for JSON RPC web sockets calls. By default same port is used as regular JSON RPC. Ensure the firewall is configured when enabling JSON RPC. | 8545 |

