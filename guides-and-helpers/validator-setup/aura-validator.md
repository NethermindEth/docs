---
description: >-
  How to setup a Nethermind Validator in Aura (Authority Round) consensus
  algorithm
---

# Aura Validator

This article will lead you through docker-compose setup of **Nethermind Aura Validator** \(xDai chain in this example\). Same result can be obtained by [Downloading](../../ethereum-client/download-sources/) & [Running Nethermind](../../ethereum-client/running-nethermind/running-the-client.md) package or by [Building Nethermind](../../ethereum-client/building-nethermind.md) from the source code. 

If you chose not to use docker-compose, you can skip docker-compose related sections and read about [config file](aura-validator.md#config-file) and [private key ](aura-validator.md#mining-private-key)configuration only.

## Prerequisites

* [x] docker-compose
* [x] docker
* [x] machine with at least 4GB RAM is recommended

```bash
sudo apt-get install docker docker-compose -y
```

## Clock synchronization

You system clock needs to be synchronized otherwise you might encounter skipping block sealing. By default `stepDuration` is configured to `5s`.

Verify if your system clock is synchronized, type `timedatectl status` and you should see similar output:

```bash
Local time: Tue 2020-06-30 17:16:19 UTC
Universal time: Tue 2020-06-30 17:16:19 UTC
RTC time: Tue 2020-06-30 17:16:19
Time zone: Etc/UTC (UTC, +0000)
System clock synchronized: yes
systemd-timesyncd.service active: yes
RTC in local TZ: no
```

If `System clock synchronized` displays `yes` you are all set, otherwise you may need to either:

* [x] synchronize clock with NTP servers \(allow **UDP** port **123** for both incoming and outgoing traffic\)
* [x] use below script to sync with google.com:

Create `fixtime.sh` script and run it with `watch -n 60` command in a `screen`

```bash
echo sudo date -s '"$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"' > fixtime.sh
chmod +x fixtime.sh
screen -S time
watch -n 60 ./fixtime.sh
```

Press `Ctrl+A+D` to leave the `screen`

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
    image: nethermind/nethermind
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

* [ ] `Init.IsMining` true
* [ ] `Init.MemoryHint` can be left default, recommended to configure it accordingly to the machine hardware setup \(for `xdai` 1000000000 is enough\)
* [ ] `EthStats` section if you wish to report node status to the ethstats page for a given network
* [ ] `Metrics` section if running local/remote [Metrics infrastructure](../../ethereum-client/metrics/setting-up-local-metrics-infrastracture.md)
* [ ] `KeyStore.PasswordFiles` path to the file containing password for **mining private key**
* [ ] `KeyStore.UnlockAccounts` ****an array of accounts, provide **mining public address** here
* [ ] `KeyStore.BlockAuthorAccount` **mining public address** should be provided here as well
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



