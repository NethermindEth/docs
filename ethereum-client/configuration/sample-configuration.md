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
    "PivotNumber": 12050000,
    "PivotHash": "0xf47c01daaa84236e041be78543842cf6d84c33a4610d0c4b72cc26629040d6d4",
    "PivotTotalDifficulty": "22109905244488724249261",
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
    "MemoryHint": 384000000
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
    "CacheIndexAndFilterBlocks": false
  },
  "Sync": {
    "FastSync": true,
    "PivotNumber": 4440000,
    "PivotHash": "0xf6083b0827255e841548303f6a90553f56e7f17d4637f553ec93b2956a86b103",
    "PivotTotalDifficulty": "6550936",
    "FastBlocks": true,
    "BeamSync": false,
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
    "BeamSync": false,
    "PivotNumber": 8220000,
    "PivotHash": "0x685a645a61e509b2d178c3ef1c4d80844397c7016563bf21c5a96963cdaf78c9",
    "PivotTotalDifficulty": "14226699",
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
    "BeamSync": false,
    "UseGethLimitsInFastBlocks": true,
    "PivotNumber": 9840000,
    "DownloadBodiesInFastSync": true,
    "DownloadReceiptsInFastSync": true,
    "PivotHash": "0xd8f4d4b930d54de236284beddff3cbd1c98f4f15e900ee91c9380d4fdc38143d",
    "PivotTotalDifficulty": "32973619534061190"
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

