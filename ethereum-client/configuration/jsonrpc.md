# JsonRpc



| Property | Env Variable | Description | Default |
| :--- | :--- | :--- | :--- |
| AdditionalRpcUrls | NETHERMIND_JSONRPCCONFIG_ADDITIONALRPCURLS | Defines additional RPC urls to listen on. Example url format: http://localhost:8550|http;wss|engine;eth;net;subscribe | [] |
| BufferResponses | NETHERMIND_JSONRPCCONFIG_BUFFERRESPONSES | Buffer responses before sending them to client. This allows to set Content-Length in response instead of using Transfer-Encoding: chunked. This may degrade performance on big responses. Max buffered response size is 2GB, chunked responses can be bigger. | false |
| CallsFilterFilePath | NETHERMIND_JSONRPCCONFIG_CALLSFILTERFILEPATH | A path to a file that contains a list of new-line separated approved JSON RPC calls | Data/jsonrpc.filter |
| Enabled | NETHERMIND_JSONRPCCONFIG_ENABLED | Defines whether the JSON RPC service is enabled on node startup. Configure host and port if default values do not work for you. | false |
| EnabledModules | NETHERMIND_JSONRPCCONFIG_ENABLEDMODULES | Defines which RPC modules should be enabled. Built in modules are: Admin, Clique, Consensus, Db, Debug, Deposit, Erc20, Eth, Evm, Health Mev, NdmConsumer, NdmProvider, Net, Nft, Parity, Personal, Proof, Subscribe, Trace, TxPool, Vault, Web3. | [Eth, Subscribe, Trace, TxPool, Web3, Personal, Proof, Net, Parity, Health, Rpc] |
| EngineEnabledModules | NETHERMIND_JSONRPCCONFIG_ENGINEENABLEDMODULES | Defines which RPC modules should be enabled Execution Engine port. Built in modules are: Admin, Clique, Consensus, Db, Debug, Deposit, Erc20, Eth, Evm, Health Mev, NdmConsumer, NdmProvider, Net, Nft, Parity, Personal, Proof, Subscribe, Trace, TxPool, Vault, Web3. | [Net, Eth, Subscribe, Web3] |
| EngineHost | NETHERMIND_JSONRPCCONFIG_ENGINEHOST | Host for Execution Engine calls. Ensure the firewall is configured when enabling JSON RPC. If it does not work with 127.0.0.1 try something like 10.0.0.4 or 192.168.0.1 | "127.0.0.1" |
| EnginePort | NETHERMIND_JSONRPCCONFIG_ENGINEPORT | Port for Execution Engine calls. Ensure the firewall is configured when enabling JSON RPC. | null |
| EthModuleConcurrentInstances | NETHERMIND_JSONRPCCONFIG_ETHMODULECONCURRENTINSTANCES | Number of concurrent instances for non-sharable calls (eth_call, eth_estimateGas, eth_getLogs, eth_newFilter, eth_newBlockFilter, eth_newPendingTransactionFilter, eth_uninstallFilter). This will limit load on the node CPU and IO to reasonable levels. If this limit is exceeded on Http calls 503 Service Unavailable will be returned along with Json RPC error. Defaults to number of logical processes. |  |
| GasCap | NETHERMIND_JSONRPCCONFIG_GASCAP | Gas limit for eth_call and eth_estimateGas | 100000000 |
| Host | NETHERMIND_JSONRPCCONFIG_HOST | Host for JSON RPC calls. Ensure the firewall is configured when enabling JSON RPC. If it does not work with 127.0.0.1 try something like 10.0.0.4 or 192.168.0.1 | "127.0.0.1" |
| IpcUnixDomainSocketPath | NETHERMIND_JSONRPCCONFIG_IPCUNIXDOMAINSOCKETPATH | The path to connect a unix domain socket over. |  |
| JwtSecretFile | NETHERMIND_JSONRPCCONFIG_JWTSECRETFILE | Path to file with hex encoded secret for jwt authentication | keystore/jwt-secret |
| MaxBatchResponseBodySize | NETHERMIND_JSONRPCCONFIG_MAXBATCHRESPONSEBODYSIZE | Max response body size when using batch requests, subsequent requests are trimmed | 30000000 |
| MaxBatchSize | NETHERMIND_JSONRPCCONFIG_MAXBATCHSIZE | Limit batch size for batched json rpc call | 1024 |
| MaxLoggedRequestParametersCharacters | NETHERMIND_JSONRPCCONFIG_MAXLOGGEDREQUESTPARAMETERSCHARACTERS | Limits the Maximum characters printing to log for parameters of any Json RPC service request | null |
| MaxRequestBodySize | NETHERMIND_JSONRPCCONFIG_MAXREQUESTBODYSIZE | Max HTTP request body size | 30000000 |
| MethodsLoggingFiltering | NETHERMIND_JSONRPCCONFIG_METHODSLOGGINGFILTERING | Defines method names of Json RPC service requests to NOT log. Example: {"eth_blockNumber"} will not log "eth_blockNumber" requests. | [engine_newPayloadV1, engine_newPayloadV2, engine_forkchoiceUpdatedV1, engine_forkchoiceUpdatedV2] |
| Port | NETHERMIND_JSONRPCCONFIG_PORT | Port number for JSON RPC calls. Ensure the firewall is configured when enabling JSON RPC. | 8545 |
| ReportIntervalSeconds | NETHERMIND_JSONRPCCONFIG_REPORTINTERVALSECONDS | Interval between the JSON RPC stats report log | 300 |
| RpcRecorderBaseFilePath | NETHERMIND_JSONRPCCONFIG_RPCRECORDERBASEFILEPATH | Base file path for diagnostic JSON RPC recorder. | "logs/rpc.{counter}.txt" |
| RpcRecorderState | NETHERMIND_JSONRPCCONFIG_RPCRECORDERSTATE | Defines whether the JSON RPC diagnostic recording is enabled on node startup. Do not enable unless you are a DEV diagnosing issues with JSON RPC. Possible values: None/Request/Response/All. | None |
| Timeout | NETHERMIND_JSONRPCCONFIG_TIMEOUT | JSON RPC' timeout value given in milliseconds. | 20000 |
| WebSocketsPort | NETHERMIND_JSONRPCCONFIG_WEBSOCKETSPORT | Port number for JSON RPC web sockets calls. By default same port is used as regular JSON RPC. Ensure the firewall is configured when enabling JSON RPC. | 8545 |
