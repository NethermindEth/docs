---
description: How to setup a Nethermind Validator with docker-compose file
---

# With docker-compose

## Prerequisites

* [x] docker-compose
* [x] docker
* [x] machine with at least 4GB RAM is recommended

```bash
sudo apt-get install docker docker-compose -y
```

## Docker-compose file sample

Create and edit`docker-compose.yml` file

```bash
nano docker-compose.yml
```

{% tabs %}
{% tab title="docker-compose.yml" %}
```yaml
version: '3.5'

services:
  nethermind-validator:
    image: nethermind/nethermind:alpine
    container_name: nethermind-validator
    restart: unless-stopped
    ports:
      - 8545:8545
      - 30303:30303
    network_mode: host
    environment:
      - NETHERMIND_CONFIG=xdai
    volumes:
      - ${PWD}/nethermind_db:/nethermind/nethermind_db
      - ${PWD}/keystore:/nethermind/keystore
      - ${PWD}/logs:/nethermind/logs
      - ${PWD}/xdai.cfg:/nethermind/configs/xdai.cfg 
      - ${PWD}/NLog.config:/nethermind/NLog.config
      - ${PWD}/static-nodes.json:/nethermind/Data/static-nodes.json

volumes:
  nethermind_db:
    driver: local
    name: nethermind_db
  keystore:
    driver: local
    name: keystore
  logs:
    driver: local
    name: logs
```
{% endtab %}
{% endtabs %}

Configure Nethermind node via environment variables or use local config file and map it to the one, existing inside container \(`xdai.cfg` file in above example\).

{% hint style="info" %}
Make sure that `nethermind_db`, `keystore`\(`logs` - optional \) are mapped, otherwise you might lose database or keys
{% endhint %}

[`NLog.config`](../../ethereum-client/running-nethermind/runtime.md#nlog-config) file is optional.  
[`static-nodes.json`](../../ethereum-client/running-nethermind/runtime.md#static-nodes) can be filled with an array of enodes, this is also optional.

## Mining **P**rivate key

{% hint style="danger" %}
Make sure that the filename contains key's **public address** otherwise it won't be recognized by Nethermind Client as a keyfile.  
  
Correct naming of a `keyfile`: **key-a5237f7f43cc46cba43ac212dabd0c45e3e3050a**

The `keyfile` should be then stored inside `keystore` volume.
{% endhint %}

## Config file

Things to be configured:

* [ ] `IsMining` true
* [ ] `Init.MemoryHint` can be left default, recommended to configure it accordingly to the machine hardware setup \(for `xdai` 1000000000 is enough\)
* [ ] `EthStats` section if you wish to report node status to the ethstats page for a given network
* [ ] `Metrics` section if running local/remote [Metrics infrastructure](../../ethereum-client/metrics/setting-up-local-metrics-infrastracture.md)
* [ ] `KeyStore.PasswordFiles` path to the file containing password for **mining private key**
* [ ] `UnlockAccounts` ****an array of accounts, provide **mining public address** here
* [ ] `BlockAuthorAccount` **mining public address** should be provided here as well
* [ ] `Aura.ForceSealing` set to true

{% tabs %}
{% tab title="xdai.cfg" %}
```bash
{
  "Init": {
    "WebSocketsEnabled": false,
    "StoreReceipts": true,
    "IsMining": true,
    "ChainSpecPath": "chainspec/xdai.json",
    "GenesisHash": "0x4f1dd23188aab3a76b463e4af801b52b1248ef073c648cbdc4c9333d3da79756",
    "BaseDbPath": "nethermind_db/xdai",
    "LogFileName": "xdai.logs.txt",
    "MemoryHint": 3000000000,
    "StaticNodesPath": "Data/static-nodes.json"
  },
  "Network": {
    "DiscoveryPort": 30303,
    "P2PPort": 30303
  },
  "JsonRpc": {
    "Enabled": false,
    "Host": "127.0.0.1",
    "Port": 8545,
    "WebSocketsPort": 8546
  },
  "Db": {
    "HeadersDbCacheIndexAndFilterBlocks": false,
    "BlocksDbCacheIndexAndFilterBlocks": false,
    "ReceiptsDbCacheIndexAndFilterBlocks": false,
    "BlockInfosDbCacheIndexAndFilterBlocks": false
  },
  "Sync": {
    "FastSync": true,
    "PivotNumber": 10410000,
    "PivotHash": "0x806f498fdde010f25bd3beb18e6f8a9c9450752f8c0e27da2cd2465ff184628c",
    "PivotTotalDifficulty": "3542339439646969404653729663364707080928280566",
    "FastBlocks": true,
    "UseGethLimitsInFastBlocks": false,
    "FastSyncCatchUpHeightDelta": 10000000000
  },
  "EthStats": {
    "Enabled": false,
    "Server": "ws://localhost:3000/api",
    "Name": "Nethermind xDai",
    "Secret": "secret",
    "Contact": "hello@nethermind.io"
  },
  "Metrics": {
    "NodeName": "Nethermind xDai",
    "Enabled": false,
    "PushGatewayUrl": "http://localhost:9091/metrics",
    "IntervalSeconds": 5
  },
  "KeyStore": {
    "PasswordFiles": ["keystore/password.file"],
    "UnlockAccounts": ["0x..."],
    "BlockAuthorAccount": "0x..." 
  },
  "Aura": {
    "ForceSealing": true
  },
  "Bloom": {
    "IndexLevelBucketSizes": [
      16,
      16,
      16
    ]
  }
}

```
{% endtab %}
{% endtabs %}

## Running Validator node

Run it with a simple docker-compose command.

```bash
docker-compose up -d
```

You will need to wait for the node to be fully **synchronized**.

To check the logs and verify if it is sealing blocks as expected \(look for the `Sealed block` log\).

```bash
docker-compose logs -f nethermind-validator
```

![](../../.gitbook/assets/image%20%2837%29.png)

