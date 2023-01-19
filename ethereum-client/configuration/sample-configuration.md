---
description: Sample Fast Sync configurations for Nethermind
---

# Sample configuration

{% tabs %}
{% tab title="mainnet.cfg" %}
```yaml
{
  "Init": {
    "ChainSpecPath": "chainspec/foundation.json",
    "GenesisHash": "0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3",
    "BaseDbPath": "nethermind_db/mainnet",
    "LogFileName": "mainnet.logs.txt",
    "MemoryHint": 2048000000
  },
  "Network": {
    "ActivePeersMaxCount": 100
  },
  "Sync": {
    "FastSync": true,
    "SnapSync": true,
    "PivotNumber": 16432000,
    "PivotHash": "0xae9e2590438a807056bf04a41c338c3d6ee00ab93c9bebf1fc232f6ebe711d81",
    "PivotTotalDifficulty": "58750003716598352816469",
    "FastBlocks": true,
    "AncientBodiesBarrier": 11052984,
    "AncientReceiptsBarrier": 11052984,
    "FastSyncCatchUpHeightDelta": "10000000000"
  },
  "EthStats": {
    "Server": "wss://ethstats.net/api"
  },
  "Metrics": {
    "NodeName": "Mainnet"
  },
  "JsonRpc": {
    "Enabled": true,
    "Timeout": 20000,
    "Host": "127.0.0.1",
    "Port": 8545,
    "AdditionalRpcUrls": [
      "http://localhost:8551|http;ws|net;eth;subscribe;engine;web3;client"
    ]
  },
  "Merge": {
    "Enabled": true
  }
}
```
{% endtab %}
{% tab title="goerli.cfg" %}
```yaml
{
  "Init": {
    "ChainSpecPath": "chainspec/goerli.json",
    "GenesisHash": "0xbf7e331f7f7c1dd2e05159666b3bf8bc7a8a3a9eb1d518969eab529dd9b88c1a",
    "BaseDbPath": "nethermind_db/goerli",
    "LogFileName": "goerli.logs.txt",
    "MemoryHint": 768000000
  },
  "TxPool": {
    "Size": 1024
  },
  "Db": {
    "EnableMetricsUpdater": true
  },
  "Sync": {
    "FastSync": true,
    "SnapSync": true,
    "PivotNumber": 8310000,
    "PivotHash": "0xab5c0c413f6d7f97f6002a0cb2f23c00ae151cf7f107d0e9181b6aba4fce6190",
    "PivotTotalDifficulty": "10790000",
    "FastBlocks": true,
    "UseGethLimitsInFastBlocks": true,
    "FastSyncCatchUpHeightDelta": "10000000000"
  },
  "EthStats": {
    "Server": "wss://stats.goerli.net/api",
    "Name": "Nethermind"
  },
  "Metrics": {
    "NodeName": "Goerli"
  },
  "Bloom": {
    "IndexLevelBucketSizes": [
      16,
      16,
      16,
      16
    ]
  },
  "JsonRpc": {
    "Enabled": true,
    "Timeout": 20000,
    "Host": "127.0.0.1",
    "Port": 8545,
    "AdditionalRpcUrls": [
      "http://localhost:8551|http;ws|net;eth;subscribe;engine;web3;client"
    ]
  },
  "Merge": {
    "Enabled": true
  }
}
```
{% endtab %}
{% tab title="rinkeby.cfg" %}
```yaml
{
  "Init": {
    "ChainSpecPath": "chainspec/rinkeby.json",
    "GenesisHash": "0x6341fd3daf94b748c72ced5a5b26028f2474f5f00d824504e4fa37a75767e177",
    "BaseDbPath": "nethermind_db/rinkeby",
    "LogFileName": "rinkeby.logs.txt",
    "MemoryHint": 1024000000
  },
  "TxPool": {
    "Size": 1024
  },
  "Sync": {
    "FastSync": true,
    "PivotNumber": 11460000,
    "PivotHash": "0xcd2a9b5d3f5b541c28355c2aa565c84b5c8d174a6d5e0c07e4af55ad40d20376",
    "PivotTotalDifficulty": "18634200",
    "FastBlocks": true
  },
  "Metrics": {
    "NodeName": "Rinkeby"
  }
}
```
{% endtab %}
{% tab title="ropsten.cfg" %}
```yaml
{
  "Init": {
    "ChainSpecPath": "chainspec/ropsten.json",
    "GenesisHash": "0x41941023680923e0fe4d74a34bdac8141f2540e3ae90623718e47d66d1ca4a2d",
    "BaseDbPath": "nethermind_db/ropsten",
    "LogFileName": "ropsten.logs.txt",
    "MemoryHint": 1024000000
  },
  "TxPool": {
    "Size": 1024
  },
  "Sync": {
    "FastSync": true,
    "SnapSync": true,
    "FastBlocks": true,
    "UseGethLimitsInFastBlocks": true,
    "PivotNumber": 13070000,
    "PivotHash": "0x1b3bd0a74ae9df08574c6696ff3ce60a31cce51de8eb4ceb34fb2d05f78b46c6",
    "PivotTotalDifficulty": "50000820485795157",
    "FastSyncCatchUpHeightDelta": "10000000000"
  },
  "EthStats": {
    "Server": "ws://localhost:3000/api"
  },
  "Metrics": {
    "NodeName": "Ropsten"
  },
  "JsonRpc": {
    "Enabled": true,
    "Timeout": 20000,
    "Host": "127.0.0.1",
    "Port": 8545,
    "EnabledModules": [
      "Eth",
      "Subscribe",
      "Trace",
      "TxPool",
      "Web3",
      "Personal",
      "Proof",
      "Net",
      "Parity",
      "Health"
    ],
    "AdditionalRpcUrls": [
      "http://localhost:8551|http;ws|net;eth;subscribe;engine;web3;client"
    ]
  },
  "Merge": {
    "Enabled": true
  }
}
```
{% endtab %}
{% tab title="mainnet_env" %}
```yaml
NETHERMIND_CONFIG=mainnet
NETHERMIND_LOG_LEVEL=INFO
NETHERMIND_JSONRPCCONFIG_ENABLEDMODULES=[Web3,Eth,Subscribe,Net]
NETHERMIND_METRICSCONFIG_ENABLED=false
NETHERMIND_METRICSCONFIG_NODENAME=Nethermind
NETHERMIND_METRICSCONFIG_PUSHGATEWAYURL=http://localhost:9090/metrics
NETHERMIND_HEALTHCHECKSCONFIG_ENABLED=false
NETHERMIND_PRUNINGCONFIG_CACHEMB=2048
NETHERMIND_ETHSTATSCONFIG_ENABLED=false
NETHERMIND_ETHSTATSCONFIG_SERVER=http://localhost:3000/api
NETHERMIND_ETHSTATSCONFIG_NAME=Nethermind
NETHERMIND_ETHSTATSCONFIG_SECRET=secret
NETHERMIND_ETHSTATSCONFIG_CONTACT=hello@nethermind.io
NETHERMIND_SYNCCONFIG_FASTSYNC=true
NETHERMIND_SYNCCONFIG_PIVOTNUMBER=13486000
NETHERMIND_SYNCCONFIG_PIVOTHASH=0x98a267b3c1d4d6f543bdf542ced1066e55185a87c67b059ec7f406b64b30cac9
NETHERMIND_SYNCCONFIG_PIVOTTOTALDIFFICULTY=33073173643303586419891
NETHERMIND_SYNCCONFIG_FASTBLOCKS=true
NETHERMIND_SYNCCONFIG_DOWNLOADBODIESINFASTSYNC=true
NETHERMIND_SYNCCONFIG_DOWNLOADRECEIPTSINFASTSYNC=true
NETHERMIND_SYNCCONFIG_ANCIENTBODIESBARRIER=11052984
NETHERMIND_SYNCCONFIG_ANCIENTRECEIPTSBARRIER=11052984
NETHERMIND_SYNCCONFIG_USEGETHLIMITSINFASTBLOCKS=true
NETHERMIND_SYNCCONFIG_WITNESSPROTOCOLENABLED=true
```
{% endtab %}
{% endtabs %}
