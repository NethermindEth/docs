# Init module

| Property Name | Description | Default |
| :--- | :--- | ---: |
| BaseDbPath | Base directoy path for all the nethermind databases. | "db" |
| ChainSpecPath | Path to the chain definition file \(Parity chainspec or Geth genesis file\). | chainspec/foundation.json |
| DiagnosticMode | Diagnostics modes | None |
| DiscoveryEnabled | If 'false' then the node does not try to find nodes beyond the bootnodes configured. | true |
| EnableUnsecuredDevWallet | If 'true' then it enables the wallet / key store in the application. | false |
| GenesisHash | Hash of the genesis block - if the default null value is left then the genesis block validity will not be checked which is useful for ad hoc test/private networks. | null |
| HiveChainSpecPath | Path to the chain definition file created by Hive for test purpouse | chainspec/test.json |
| IsMining | If 'true' then the node will try to seal/mine new blocks | false |
| KeepDevWalletInMemory | If 'true' then any accounts created will be only valid during the session and deleted when application closes. | false |
| LogDirectory | In case of null, the path is set to \[applicationDirectiory\]\logs | logs |
| LogFileName | Name of the log file generated \(useful when launching multiple networks with the same log folder\). | "log.txt" |
| MemoryHint | A hint for the max memory that will allow us to configure the DB and Netty memory allocations. | null |
| PeerManagerEnabled | If 'false' then the node does not connect to newly discovered peers.. | true |
| PluginsDirectory | Directory for Nethermind plugins like NDM. | plugins |
| ProcessingEnabled | If 'false' then the node does not download/process new blocks.. | true |
| ReceiptsMigration | If set to 'true' then receipts db will be migrated to new schema. | false |
| RpcDbUrl | Url for remote node that will be used as DB source when 'DiagnosticMode' is set to'RpcDb' |  |
| StaticNodesPath | Path to the file with a list of static nodes. | "Data/static-nodes.json" |
| StoreReceipts | If set to 'false' then transaction receipts will not be stored in the database after a new block is processed. This setting is independent from downloading receipts in fast sync mode. | true |
| WebSocketsEnabled | Defines whether the WebSockets service is enabled on node startup at the 'HttpPort' - e.g. ws://localhost:8545/ws/json-rpc | false |

