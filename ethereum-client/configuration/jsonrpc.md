# JsonRpc



| Property | Description | Default |
| :--- | :--- | :--- |
| AdditionalRPCUrls | Defines additional RPC urls to listen on. Example url format: http://localhost:8550|http,wss|engine,eth,net,subscribe | [] |
| BufferResponses | Buffer responses before sending them to client. This allows to set Content-Length in response instead of using Transfer-Encoding: chunked. This may degrade performance on big responses. Max buffered response size is 2GB, chunked responses can be bigger. | false |
| CallsFilterFilePath | A path to a file that contains a list of new-line separated approved JSON RPC calls | Data/jsonrpc.filter |
| Enabled | Defines whether the JSON RPC service is enabled on node startup. Configure host nad port if default values do not work for you. | false |
| EnabledModules | Defines which RPC modules should be enabled. Built in modules are: Admin, Baseline, Clique, Consensus, Db, Debug, Deposit, Erc20, Eth, Evm, Health Mev, NdmConsumer, NdmProvider, Net, Nft, Parity, Personal, Proof, Subscribe, Trace, TxPool, Vault, Web3. | [Eth, Subscribe, Trace, TxPool, Web3, Personal, Proof, Net, Parity, Health] |
| EthModuleConcurrentInstances | Number of concurrent instances for non-sharable calls (eth_call, eth_estimateGas, eth_getLogs, eth_newFilter, eth_newBlockFilter, eth_newPendingTransactionFilter, eth_uninstallFilter). This will limit load on the node CPU and IO to reasonable levels. If this limit is exceeded on Http calls 503 Service Unavailable will be returned along with Json RPC error. Defaults to number of logical processes. |  |
| GasCap | Gas limit for eth_call and eth_estimateGas | 100000000 |
| Host | Host for JSON RPC calls. Ensure the firewall is configured when enabling JSON RPC. If it does not work with 117.0.0.1 try something like 10.0.0.4 or 192.168.0.1 | "127.0.0.1" |
| IpcUnixDomainSocketPath | The path to connect a unix domain socket over. |  |
| MaxRequestBodySize | Max HTTP request body size | 30000000 |
| Port | Port number for JSON RPC calls. Ensure the firewall is configured when enabling JSON RPC. | 8545 |
| ReportIntervalSeconds | Interval between the JSON RPC stats report log | 300 |
| RpcRecorderBaseFilePath | Base file path for diagnostic JSON RPC recorder. | "logs/rpc.{counter}.txt" |
| RpcRecorderState | Defines whether the JSON RPC diagnostic recording is enabled on node startup. Do not enable unless you are a DEV diagnosing issues with JSON RPC. Possible values: None/Request/Response/All. | None |
| Timeout | JSON RPC' timeout value given in milliseconds. | 20000 |
| WebSocketsPort | Port number for JSON RPC web sockets calls. By default same port is used as regular JSON RPC. Ensure the firewall is configured when enabling JSON RPC. | 8545 |
