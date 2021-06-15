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
    "PivotNumber": 12632000,
    "PivotHash": "0x2f1e7be6bcb478e30ec2f1e890d0cd584a257cd76a154c9566a26941759f1ccb",
    "PivotTotalDifficulty": "26226452634198647079260",
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
    "PivotNumber": 4950000,
    "PivotHash": "0x6f5b34f24b89e6e807ac1aaac2c5048a5a914ece79accc7d3cc1422d9775e447",
    "PivotTotalDifficulty": "7245380",
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
    "PivotNumber": 8730000,
    "PivotHash": "0xc63b046fd2a43b43b2480b85bb67907b5e2346709b4e2a667d957d94e74c85ea",
    "PivotTotalDifficulty": "14963926",
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
    "PivotNumber": 10430000,
    "DownloadBodiesInFastSync": true,
    "DownloadReceiptsInFastSync": true,
    "PivotHash": "0xd15b994df75dbe8a02b7f850a8608b1e1ed63668506b617ed67a5adf627581ae",
    "PivotTotalDifficulty": "33789818474312458"
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
