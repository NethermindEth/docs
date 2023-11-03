# Init



| Property | Env Variable | Description | Default |
| :--- | :--- | :--- | :--- |
| AutoDump | NETHERMIND_INITCONFIG_AUTODUMP | Auto dump on bad blocks for diagnostics, Possible values [None, Receipts, Parity, Geth, Rlp, RlpLog, All, Default], Default = Receipts, Rlp | Default |
| BaseDbPath | NETHERMIND_INITCONFIG_BASEDBPATH | Base directory path for all the nethermind databases. | "db" |
| ChainSpecPath | NETHERMIND_INITCONFIG_CHAINSPECPATH | Path to the chain definition file (Parity chainspec or Geth genesis file). | chainspec/foundation.json |
| DiagnosticMode | NETHERMIND_INITCONFIG_DIAGNOSTICMODE | Diagnostics modes | None |
| DiscoveryEnabled | NETHERMIND_INITCONFIG_DISCOVERYENABLED | If 'false' then the node does not try to find nodes beyond the bootnodes configured. | true |
| EnableUnsecuredDevWallet | NETHERMIND_INITCONFIG_ENABLEUNSECUREDDEVWALLET | If 'true' then it enables the wallet / key store in the application. | false |
| GenesisHash | NETHERMIND_INITCONFIG_GENESISHASH | Hash of the genesis block - if the default null value is left then the genesis block validity will not be checked which is useful for ad hoc test/private networks. | null |
| HiveChainSpecPath | NETHERMIND_INITCONFIG_HIVECHAINSPECPATH | Path to the chain definition file created by Hive for test purpouse | chainspec/test.json |
| IsMining | NETHERMIND_INITCONFIG_ISMINING | If 'true' then the node will try to seal/mine new blocks | false |
| KeepDevWalletInMemory | NETHERMIND_INITCONFIG_KEEPDEVWALLETINMEMORY | If 'true' then any accounts created will be only valid during the session and deleted when application closes. | false |
| KzgSetupPath | NETHERMIND_INITCONFIG_KZGSETUPPATH | Kzg trusted setup file path | null |
| LogDirectory | NETHERMIND_INITCONFIG_LOGDIRECTORY | In case of null, the path is set to [applicationDirectiory]\logs | logs |
| LogFileName | NETHERMIND_INITCONFIG_LOGFILENAME | Name of the log file generated (useful when launching multiple networks with the same log folder). | "log.txt" |
| LogRules | NETHERMIND_INITCONFIG_LOGRULES | Overrides for default logs in format LogPath:LogLevel;* | null |
| MemoryHint | NETHERMIND_INITCONFIG_MEMORYHINT | A hint for the max memory that will allow us to configure the DB and Netty memory allocations. | null |
| PeerManagerEnabled | NETHERMIND_INITCONFIG_PEERMANAGERENABLED | If 'false' then the node does not connect to newly discovered peers.. | true |
| ProcessingEnabled | NETHERMIND_INITCONFIG_PROCESSINGENABLED | If 'false' then the node does not download/process new blocks.. | true |
| RpcDbUrl | NETHERMIND_INITCONFIG_RPCDBURL | Url for remote node that will be used as DB source when 'DiagnosticMode' is set to'RpcDb' |  |
| StaticNodesPath | NETHERMIND_INITCONFIG_STATICNODESPATH | Path to the file with a list of static nodes. | "Data/static-nodes.json" |
| WebSocketsEnabled | NETHERMIND_INITCONFIG_WEBSOCKETSENABLED | Defines whether the WebSockets service is enabled on node startup at the 'HttpPort' - e.g. ws://localhost:8545/ws/json-rpc | true |
