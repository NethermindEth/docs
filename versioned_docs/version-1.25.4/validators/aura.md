---
title: Aura-based validators
sidebar_position: 0
---

This guide will walk you through configuring an Aura-based validator with Nethermind in a Docker container using the Energy Web chain as an example.

:::info
Your machine's clock has to be synchronized. Otherwise, you might miss block sealing. By default, the block time is set to 5 seconds.
:::

## Configuring a Docker container

The example below shows how to configure a Docker container for an Aura-based validator on the Energy Web chain:

```yaml title="docker-compose.yml"
services:
  nethermind-validator:
    image: nethermind/nethermind:latest
    container_name: nethermind-validator
    restart: unless-stopped
    ports:
      - 8545:8545
      - 30303:30303
    ulimits:
      nofile:
        soft: 1000000
        hard: 1000000
    environment:
      - NETHERMIND_CONFIG=energyweb
    volumes:
      - ${PWD}/keystore:/nethermind/keystore
      - ${PWD}/logs:/nethermind/logs
      - ${PWD}/nethermind_db:/nethermind/nethermind_db
```

## Configuring keyfile

Make sure that the keyfile name contains the public key (address). Otherwise, Nethermind doesn't recognize it as such. 
For instance, a keyfile can be named `key-0x1234567890123456789012345678901234567890`.

The keyfile must be stored in the `keystore` directory located in the Nethermind base data directory.

## Configuration settings

Here is an example of recommended settings for a validator. The most convenient way to configure these settings is either defining them in the configuration file or passing them as environment variables.

- `Init.IsMining`: `true`
- `Init.MemoryHint`: Can be left unspecified. It's recommended to configure it accordingly to the machine specification(for Eneergy Web, 768000000 is enough).
- `EthStats` namespace parameters if you want to report node status to Ethstats for your network.
- `Metrics` namespace parameters to enable node monitoring.
- `KeyStore.PasswordFiles`: The  path to the file containing the password for the mining private key.
- `KeyStore.UnlockAccounts`: An array of accounts. Provide the miner public address here.
- `KeyStore.BlockAuthorAccount`: The miner public address should be provided here as well.
- `Aura.ForceSealing`: `true`
- `Merge.Enabled`: `false`

Here's an example of above settings in the Energy Web configuration file:

```json title="energyweb.cfg"
{
  "Init": {
    "ChainSpecPath": "chainspec/energyweb.json",
    "GenesisHash": "0x0b6d3e680af2fc525392c720666cce58e3d8e6fe75ba4b48cb36bcc69039229b",
    "BaseDbPath": "nethermind_db/energyweb",
    "LogFileName": "energyweb.log",
    "MemoryHint": 768000000
  },
  "Sync": {
    "FastSync": true,
    "PivotNumber": 26940000,
    "PivotHash": "0x8835983de9578a4355313afd2a43d8eada6f2a4ddbd9c51da103e0d5f53c4d8b",
    "PivotTotalDifficulty": "9167206964850082205703311924211835616257898274",
    "FastBlocks": true,
    "UseGethLimitsInFastBlocks": false,
    "FastSyncCatchUpHeightDelta": 10000000000
  },
  "EthStats": {
    "Enabled": true,
    "Name": "Nethermind Energy Web",
    "Secret": "secret...",
    "Url": "ws://localhost:3000/api"
  },
  "Metrics": {
    "Enabled": true,
    "NodeName": "Energy Web",
    "PushGatewayUrl": "http://localhost:9091/metrics"
  },
  "Mining": {
    "MinGasPrice": 1
  },
  "Merge": {
    "Enabled": false
  },
  "Aura": {
    "ForceSealing": true
  },
  "KeyStore": {
    "PasswordFiles": ["keystore/password"],
    "UnlockAccounts": ["0x..."],
    "BlockAuthorAccount": "0x..." 
  },
}
```

## Running the validator

The above Docker Compose file can be run from the directory the `docker-compose.yml` is located in as follows:

```bash
docker-compose up -d
```

To check the logs and verify the sealing of blocks, run:

```bash
docker-compose logs -f nethermind-validator
```