# Pipeline Plugins

Nethermind `Pipeline.Plugins` solution provides plugins which can be used to streaming data like **Transactions** or **Blocks**.

{% hint style="info" %}
If you have any problems with running Nethermind Pipeline Plugins - please contact our developers on the [discord channel](https://discord.com/invite/PaCMRFdvWT).
{% endhint %}

### Available plugins:

| Plugin type | What can it be used for? | Publisher | Source |
| :--- | :--- | :--- | :--- |
| Erc20Transactions | Streaming Erc20 transactions from the last block. | WebSockets | Block |
| Erc721Transactions | Streaming Erc721 transactions from the last block. | Log | Block |
| NewPendingTransactions | Streaming new pending transactions from transaction pool. | Log | TxPool |
| NewDiscoveredTransactions | Streaming new discovered transactions from transaction pool. | Log | TxPool |
| RemovedPendingTransactions | Streaming removed pending transactions from transaction pool. | Log | TxPool |

### Publishers

#### Log

Streaming data using logs. Log publisher also save the data to separate file which can be found here: `../pipeline/pipeline_data.txt`

![Data from Erc721 plugin streaming through log publisher.](../../.gitbook/assets/image%20%28152%29.png)

#### Web Sockets

{% hint style="info" %}
Make sure that in the config file you are using - web sockets are enabled.
{% endhint %}

Streaming data through web sockets. For example: [**wscat**](https://github.com/websockets/wscat) can be used to get the data - by entering this command in console:

```csharp
wscat -c http://127.0.0.1:8545/erc20
```

![Data from Erc20 plugin streaming through web sockets publisher.](../../.gitbook/assets/image%20%2820%29.png)

### Enable plugin

To enable the plugins include the section defined below in config file you will be using.

```csharp
"PipelinePlugins": { 
    "Enabled": ["Erc20Transactions", "Erc721Transactions"] 
}
```

Exemplary config file **mainnet\_pruned** with enabled web sockets and enabled plugins

```csharp
{
  "Init": {
    "WebSocketsEnabled": true,
    "StoreReceipts": true,
    "IsMining": false,
    "ChainSpecPath": "chainspec/foundation.json",
    "GenesisHash": "0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3",
    "BaseDbPath": "nethermind_db/mainnet",
    "LogFileName": "mainnet.logs.txt",
    "DiagnosticMode": "None",
    "MemoryHint": 2048000000
  },
  "Network": {
    "DiscoveryPort": 30303,
    "P2PPort": 30303,
    "ActivePeersMaxCount": 100
  },
  "JsonRpc": {
    "Enabled": false,
    "Timeout": 20000,
    "Host": "127.0.0.1",
    "Port": 8545
  },
  "TxPool": {
    "Size": 2048
  },
  "Db": {
    "CacheIndexAndFilterBlocks": false
  },
  "Pruning": {
    "Enabled": true,
    "CacheMb": 1024,
    "PersistenceInterval": 16384
  },
  "Sync": {
    "FastSync": true,
    "PivotNumber": 12250000,
    "PivotHash": "0xf7f0319814443a5ed3bf4b183ec5d6cb744320306bc659319744d8dcb34203fd",
    "PivotTotalDifficulty": "23357362752867948016185",
    "FastBlocks": true,
    "DownloadBodiesInFastSync": true,
    "DownloadReceiptsInFastSync": true,
    "AncientBodiesBarrier": 11052984,
    "AncientReceiptsBarrier": 11052984,
    "UseGethLimitsInFastBlocks": true,
    "WitnessProtocolEnabled": true
  },
  "EthStats": {
    "Enabled": false,
    "Server": "wss://ethstats.net/api",
    "Name": "Nethermind",
    "Secret": "secret",
    "Contact": "hello@nethermind.io"
  },
  "Metrics": {
    "NodeName": "Mainnet",
    "Enabled": false,
    "PushGatewayUrl": "http://localhost:9091/metrics",
    "IntervalSeconds": 5
  },
  "Analytics": {
    "LogPublishedData": false,
    "PluginsEnabled": false
  },
  "PipelinePlugins": { 
    "Enabled": ["Erc20Transactions", "Erc721Transactions"] 
  }
}
```

## Running with pipeline plugins

* [ ] Download Nethermind from the [page](https://downloads.nethermind.io/).
* [ ] Add Pipeline Plugins section to config file.
* [ ] Run Nethermind node and wait for the sync.
* [ ] Once the node is synchronized you can connect through the web sockets to get the data.

