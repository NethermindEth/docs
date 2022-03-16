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
    "PivotNumber": 14393000,
    "PivotHash": "0xaf7550e260fb7991dc0391098b4c69eda167fed0ab8d2620f8308dd03e369ca0",
    "PivotTotalDifficulty": "43861904252039042406974",
    "FastBlocks": true,
    "AncientBodiesBarrier": 11052984,
    "AncientReceiptsBarrier": 11052984,
    "WitnessProtocolEnabled": true
  },
  "EthStats": {
    "Server": "wss://ethstats.net/api"
  },
  "Metrics": {
    "NodeName": "Mainnet"
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
    "PivotNumber": 6510000,
    "PivotHash": "0x63aa8ae3faf1a63aa5613c94506c0b154cef84f077aaa5f610f582bb5d032edb",
    "PivotTotalDifficulty": "9573097",
    "FastBlocks": true,
    "UseGethLimitsInFastBlocks": true,
    "WitnessProtocolEnabled": true
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
    "PivotNumber": 10320000,
    "PivotHash": "0x8dd85b28209e228b68001214cdf125beb36f129bd43b11829c55068373ee5b31",
    "PivotTotalDifficulty": "17163340",
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
    "FastBlocks": true,
    "UseGethLimitsInFastBlocks": true,
    "PivotNumber": 12080000,
    "PivotHash": "0xe8d2adc0f0f19f49a3eab07bdd6b723e5506ce3b05c8e11e9c33842ba6f6a9b7",
    "PivotTotalDifficulty": "40147042992955918"
  },
  "EthStats": {
    "Server": "ws://ropsten-stats.parity.io/api"
  },
  "Metrics": {
    "NodeName": "Ropsten"
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
