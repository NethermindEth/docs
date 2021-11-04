---
description: Sample Fast Sync configurations for Nethermind
---

# Sample configuration

{% tabs %}
{% tab title="mainnet.cfg" %}
```yaml
{
  "Init": {
    "WebSocketsEnabled": false,
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
  "Sync": {
    "FastSync": true,
    "PivotNumber": 13544000,
    "PivotHash": "0x65d8f63590251e4452a664ae09551a14bcd57e68b434e830611deadf231ae221",
    "PivotTotalDifficulty": "33665249308679674847066",
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
  }
}
```
{% endtab %}
{% tab title="goerli.cfg" %}
```yaml
{
  "Init": {
    "WebSocketsEnabled": false,
    "StoreReceipts": true,
    "EnableUnsecuredDevWallet": false,
    "IsMining": false,
    "ChainSpecPath": "chainspec/goerli.json",
    "GenesisHash": "0xbf7e331f7f7c1dd2e05159666b3bf8bc7a8a3a9eb1d518969eab529dd9b88c1a",
    "BaseDbPath": "nethermind_db/goerli",
    "LogFileName": "goerli.logs.txt",
    "MemoryHint": 768000000
  },
  "Network": {
    "DiscoveryPort": 30303,
    "P2PPort": 30303,
    "DiagTracerEnabled": false
  },
  "JsonRpc": {
    "Enabled": false,
    "Timeout": 20000,
    "Host": "127.0.0.1",
    "Port": 8545
  },
  "TxPool": {
    "Size": 1024
  },
  "Db": {
    "CacheIndexAndFilterBlocks": false,
    "EnableMetricsUpdater": true,
    "EnableDbStatistics": false
  },
  "Sync": {
    "FastSync": true,
    "PivotNumber": 5760000,
    "PivotHash": "0xd19286f1c7f48ee5b4e05b0182b210cb61c8ec36365e33b1b7df38c9f8bb54fb",
    "PivotTotalDifficulty": "8447763",
    "FastBlocks": true,
    "DownloadBodiesInFastSync": true,
    "DownloadReceiptsInFastSync": true,
    "UseGethLimitsInFastBlocks": true,
    "WitnessProtocolEnabled": true
  },
  "EthStats": {
    "Enabled": false,
    "Server": "wss://stats.goerli.net/api",
    "Name": "Nethermind",
    "Secret": "secret",
    "Contact": "hello@nethermind.io"
  },
  "Metrics": {
    "NodeName": "Goerli",
    "Enabled": false,
    "PushGatewayUrl": "http://localhost:9091/metrics",
    "IntervalSeconds": 5
  },
  "Bloom": {
    "IndexLevelBucketSizes": [
      16,
      16,
      16,
      16
    ]
  }
}
```
{% endtab %}
{% tab title="rinkeby.cfg" %}
```yaml
{
  "Init": {
    "WebSocketsEnabled": false,
    "StoreReceipts": true,
    "IsMining": false,
    "ChainSpecPath": "chainspec/rinkeby.json",
    "GenesisHash": "0x6341fd3daf94b748c72ced5a5b26028f2474f5f00d824504e4fa37a75767e177",
    "BaseDbPath": "nethermind_db/rinkeby",
    "LogFileName": "rinkeby.logs.txt",
    "MemoryHint": 1024000000
  },
  "Network": {
    "DiscoveryPort": 30303,
    "P2PPort": 30303
  },
  "TxPool": {
    "Size": 1024
  },
  "JsonRpc": {
    "Enabled": false,
    "Timeout": 20000,
    "Host": "127.0.0.1",
    "Port": 8545
  },
  "Db": {
    "CacheIndexAndFilterBlocks": false
  },
  "Sync": {
    "FastSync": true,
    "PivotNumber": 9570000,
    "PivotHash": "0x1547387c2a0000bff7bf34c430c1fb36edae176d3f496d373e8fc80bdf4bae49",
    "PivotTotalDifficulty": "16107003",
    "FastBlocks": true,
    "DownloadBodiesInFastSync": true,
    "DownloadReceiptsInFastSync": true,
    "UseGethLimitsInFastBlocks": true
  },
  "EthStats": {
    "Enabled": false,
    "Server": "ws://localhost:3000/api",
    "Name": "Nethermind",
    "Secret": "secret",
    "Contact": "hello@nethermind.io"
  },
  "Metrics": {
    "NodeName": "Rinkeby",
    "Enabled": false,
    "PushGatewayUrl": "http://localhost:9091/metrics",
    "IntervalSeconds": 5
  }
}
```
{% endtab %}
{% tab title="ropsten.cfg" %}
```yaml
{
  "Init": {
    "WebSocketsEnabled": false,
    "StoreReceipts": true,
    "IsMining": false,
    "ChainSpecPath": "chainspec/ropsten.json",
    "GenesisHash": "0x41941023680923e0fe4d74a34bdac8141f2540e3ae90623718e47d66d1ca4a2d",
    "BaseDbPath": "nethermind_db/ropsten",
    "LogFileName": "ropsten.logs.txt",
    "MemoryHint": 1024000000
  },
  "Network": {
    "DiscoveryPort": 30303,
    "P2PPort": 30303
  },
  "TxPool": {
    "Size": 1024
  },
  "JsonRpc": {
    "Enabled": false,
    "Timeout": 20000,
    "Host": "127.0.0.1",
    "Port": 8545
  },
  "Db": {
    "CacheIndexAndFilterBlocks": false
  },
  "Sync": {
    "FastSync": true,
    "FastBlocks": true,
    "UseGethLimitsInFastBlocks": true,
    "PivotNumber": 11340000,
    "DownloadBodiesInFastSync": true,
    "DownloadReceiptsInFastSync": true,
    "PivotHash": "0xfb773413a0569193b33d0fb6b8f77e13fcca51e3cc6596463b120788f02742f4",
    "PivotTotalDifficulty": "35516591109556671"
  },
  "EthStats": {
    "Enabled": false,
    "Server": "ws://ropsten-stats.parity.io/api",
    "Name": "Nethermind",
    "Secret": "secret",
    "Contact": "hello@nethermind.io"
  },
  "Metrics": {
    "NodeName": "Ropsten",
    "Enabled": false,
    "PushGatewayUrl": "http://localhost:9091/metrics",
    "IntervalSeconds": 5
  }
}
```
{% endtab %}
{% endtabs %}
