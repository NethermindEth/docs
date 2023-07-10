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
    "PivotNumber": 17651000,
    "PivotHash": "0xdae9a85421c95ceb5bc9b0411237aa06b62a2f0d9dc89f04f0bb0e976988c283",
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
  "Blocks": {
    "TargetBlockGasLimit": 30000000
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
    "PivotNumber": 9300000,
    "PivotHash": "0x6dd218260870814ca3c4de400679335a5263626a29cd53e8301fd922c2be2c3e",
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
  "Blocks": {
    "TargetBlockGasLimit": 30000000
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
{% tab title="sepolia.cfg" %}
```yaml
{
  "Init": {
    "ChainSpecPath": "chainspec/sepolia.json",
    "GenesisHash": "0x25a5cc106eea7138acab33231d7160d69cb777ee0c2c553fcddf5138993e6dd9",
    "BaseDbPath": "nethermind_db/sepolia",
    "LogFileName": "sepolia.logs.txt",
    "StaticNodesPath": "Data/static-nodes-sepolia.json",
    "MemoryHint": 1024000000
  },
  "TxPool": {
    "Size": 1024
  },
  "Metrics": {
    "NodeName": "Sepolia"
  },
  "Sync": {
    "FastSync": true,
    "FastBlocks": true,
    "SnapSync": true,
    "UseGethLimitsInFastBlocks": true,
    "PivotNumber": 3852000,
    "PivotHash": "0x5cf42af73060a579343e48d91d4575eb8e09efad47a382f5c51d68c1abf8e90e",
    "PivotTotalDifficulty": "17000018015853232",
    "FastSyncCatchUpHeightDelta": "10000000000"
  },
  "Blocks": {
    "TargetBlockGasLimit": 30000000
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
