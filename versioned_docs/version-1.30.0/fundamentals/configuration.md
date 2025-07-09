---
title: Configuration
sidebar_position: 1
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Nethermind is highly configurable. There are 3 ways of configuring it, listed by priority:

- [Command line options](#basic-command-line-options) (aka arguments or flags)
- [Environment variables](#environment-variables)
- [Configuration file](#configuration-file)

:::note
Given the above priority list, an option defined in a more priority way overrides the same option defined elsewhere if any.
:::

The full list of configuration options can be displayed by running:

```bash
nethermind -h
```

Below is the list of the basic command line options followed by an exhaustive list of configuration options by namespace.

:::warning
The configuration options are case-sensitive and can be defined only once unless stated otherwise.
:::

## Basic command line options

- #### `-c, --config <value>` \{#config\}

  The path to the [configuration file](#configuration-file) or the file name (also without extension) of any of the configuration files in the configuration files directory. Defaults to `mainnet`.

  <details>
  <summary>Available configurations</summary>

  Nethermind provides the following pre-built configurations named as the networks they are for. Their respective versions for archive nodes are suffixed `_archive`.

  - `base-mainnet` `base-mainnet_archive`
  - `base-sepolia` `base-sepolia_archive`
  - `chiado` `chiado_archive`
  - `energyweb` `energyweb_archive`
  - `gnosis` `gnosis_archive`
  - `holesky` `holesky_archive`
  - `linea-mainnet` `linea-mainnet_archive`
  - `linea-sepolia` `linea-sepolia_archive`
  - `mainnet` `mainnet_archive`
  - `op-mainnet` `op-mainnet_archive`
  - `op-sepolia` `op-sepolia_archive`
  - `sepolia` `sepolia_archive`
  - `taiko-hekla`
  - `taiko-mainnet`
  - `volta` `volta_archive`

  </details>

  Alternatively, the configuration file can also be set by the `NETHERMIND_CONFIG` environment variable.

- #### `--configs-dir <path>` \{#configs-dir\}

  The path to the configuration files directory. Defaults to `configs`.\
  Deprecates `--configsDirectory` `-cd`.

  :::note
  This option is ignored if the [`-c, --config`](#config) option is set to a path:

  ```bash
  # Ignored for
  -c ./mainnet.json
  -c path/to/mainnet.json
  # Respected for
  -c mainnet
  -c mainnet.json
  ```

  :::

- #### `--data-dir <path>` \{#data-dir\}

  The path to the Nethermind data directory. Defaults to Nethermind's current directory.\
  Deprecates `--datadir` `-dd`.

  :::warning
  The absolute paths set by [`Init.BaseDbPath`](#init-basedbpath), [`Init.LogDirectory`](#init-logdirectory), or [`KeyStore.KeyStoreDirectory`](#keystore-keystoredirectory) options in a configuration file are not overridden by `--data-dir`.
  :::

- #### `--db-dir <path>` \{#db-dir\}

  The path to the Nethermind database directory. Defaults to `db`.\
  Deprecates `--baseDbPath` `-d`.

- #### `-?, -h, --help` \{#help\}

  Shows the full list of available command line options.

- #### `-l, --log <level>` \{#log\}

  Log level (severity). Allowed values: `off` `trace` `debug` `info` `warn` `error`. Defaults to `info`.

- #### `--logger-config <path>` \{#logger-config\}

  The path to the logging configuration file. Defaults to `NLog.config`.\
  Deprecates `--loggerConfigSource` `-lcs`.

- #### `--plugins-dir <path>` \{#plugins-dir\}

  The path to the Nethermind plugins directory. Defaults to `plugins`.\
  Deprecates `--pluginsDirectory` `-pd`.

- #### `--version` \{#version\}

  Shows the Nethermind version information.

## Options by namespaces

<!--[start autogen]-->

### Aura

- #### `Aura.AllowAuRaPrivateChains` \{#aura-allowauraprivatechains\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --aura-allowauraprivatechains <value>
  --Aura.AllowAuRaPrivateChains <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_AURACONFIG_ALLOWAURAPRIVATECHAINS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Aura": {
      "AllowAuRaPrivateChains": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to allow private Aura-based chains only. Do not use with existing Aura-based chains. Allowed values: `true` `false`. Defaults to `false`.

- #### `Aura.ForceSealing` \{#aura-forcesealing\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --aura-forcesealing <value>
  --Aura.ForceSealing <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_AURACONFIG_FORCESEALING=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Aura": {
      "ForceSealing": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to seal empty blocks if mining. Allowed values: `true` `false`. Defaults to `true`.

- #### `Aura.Minimum2MlnGasPerBlockWhenUsingBlockGasLimitContract` \{#aura-minimum2mlngasperblockwhenusingblockgaslimitcontract\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --aura-minimum2mlngasperblockwhenusingblockgaslimitcontract <value>
  --Aura.Minimum2MlnGasPerBlockWhenUsingBlockGasLimitContract <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_AURACONFIG_MINIMUM2MLNGASPERBLOCKWHENUSINGBLOCKGASLIMITCONTRACT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Aura": {
      "Minimum2MlnGasPerBlockWhenUsingBlockGasLimitContract": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to use 2M gas if the contract returns less than that when using `BlockGasLimitContractTransitions`. Allowed values: `true` `false`. Defaults to `false`.

- #### `Aura.TxPriorityConfigFilePath` \{#aura-txpriorityconfigfilepath\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --aura-txpriorityconfigfilepath <value>
  --Aura.TxPriorityConfigFilePath <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_AURACONFIG_TXPRIORITYCONFIGFILEPATH=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Aura": {
      "TxPriorityConfigFilePath": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The path to the transaction priority rules file to use when selecting transactions from the transaction pool. Defaults to `null`.

- #### `Aura.TxPriorityContractAddress` \{#aura-txprioritycontractaddress\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --aura-txprioritycontractaddress <value>
  --Aura.TxPriorityContractAddress <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_AURACONFIG_TXPRIORITYCONTRACTADDRESS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Aura": {
      "TxPriorityContractAddress": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The address of the transaction priority contract to use when selecting transactions from the transaction pool. Defaults to `null`.

### Blocks

- #### `Blocks.BlockProductionTimeoutMs` \{#blocks-blockproductiontimeoutms\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --blocks-blockproductiontimeoutms <value>
  --Blocks.BlockProductionTimeoutMs <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BLOCKSCONFIG_BLOCKPRODUCTIONTIMEOUTMS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Blocks": {
      "BlockProductionTimeoutMs": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The block production timeout, in milliseconds. Defaults to `4000`.

- #### `Blocks.ExtraData` \{#blocks-extradata\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --blocks-extradata <value>
  --Blocks.ExtraData <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BLOCKSCONFIG_EXTRADATA=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Blocks": {
      "ExtraData": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The block header extra data up to 32 bytes in length. Defaults to `Nethermind`.

- #### `Blocks.GenesisTimeoutMs` \{#blocks-genesistimeoutms\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --blocks-genesistimeoutms <value>
  --Blocks.GenesisTimeoutMs <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BLOCKSCONFIG_GENESISTIMEOUTMS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Blocks": {
      "GenesisTimeoutMs": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The genesis block load timeout, in milliseconds. Defaults to `40000`.

- #### `Blocks.MinGasPrice` \{#blocks-mingasprice\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --blocks-mingasprice <value>
  --Blocks.MinGasPrice <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BLOCKSCONFIG_MINGASPRICE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Blocks": {
      "MinGasPrice": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The minimum gas premium (or the gas price before the London hard fork) for transactions accepted by the block producer. Defaults to `1`.

- #### `Blocks.PreWarmStateOnBlockProcessing` \{#blocks-prewarmstateonblockprocessing\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --blocks-prewarmstateonblockprocessing <value>
  --Blocks.PreWarmStateOnBlockProcessing <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BLOCKSCONFIG_PREWARMSTATEONBLOCKPROCESSING=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Blocks": {
      "PreWarmStateOnBlockProcessing": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to pre-warm the state when processing blocks. This can lead to an up to 2x speed-up in the main loop block processing. Allowed values: `true` `false`. Defaults to `True`.

- #### `Blocks.RandomizedBlocks` \{#blocks-randomizedblocks\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --blocks-randomizedblocks <value>
  --Blocks.RandomizedBlocks <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BLOCKSCONFIG_RANDOMIZEDBLOCKS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Blocks": {
      "RandomizedBlocks": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to change the difficulty of the block randomly within the constraints. Used in NethDev only. Allowed values: `true` `false`. Defaults to `false`.

- #### `Blocks.SecondsPerSlot` \{#blocks-secondsperslot\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --blocks-secondsperslot <value>
  --Blocks.SecondsPerSlot <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BLOCKSCONFIG_SECONDSPERSLOT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Blocks": {
      "SecondsPerSlot": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The block time slot, in seconds. Defaults to `12`.

- #### `Blocks.TargetBlockGasLimit` \{#blocks-targetblockgaslimit\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --blocks-targetblockgaslimit <value>
  --Blocks.TargetBlockGasLimit <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BLOCKSCONFIG_TARGETBLOCKGASLIMIT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Blocks": {
      "TargetBlockGasLimit": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The block gas limit that the block producer should try to reach in the fastest possible way based on the protocol rules. If not specified, then the block producer should follow others. Defaults to `null`.

### Bloom

- #### `Bloom.Index` \{#bloom-index\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --bloom-index <value>
  --Bloom.Index <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BLOOMCONFIG_INDEX=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Bloom": {
      "Index": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to use the Bloom index. The Bloom index speeds up the RPC log searches. Allowed values: `true` `false`. Defaults to `true`.

- #### `Bloom.IndexLevelBucketSizes` \{#bloom-indexlevelbucketsizes\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --bloom-indexlevelbucketsizes <value>
  --Bloom.IndexLevelBucketSizes <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BLOOMCONFIG_INDEXLEVELBUCKETSIZES=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Bloom": {
      "IndexLevelBucketSizes": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  An array of multipliers for index levels. Can be tweaked per chain to boost performance. Defaults to `[4, 8, 8]`.

- #### `Bloom.Migration` \{#bloom-migration\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --bloom-migration <value>
  --Bloom.Migration <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BLOOMCONFIG_MIGRATION=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Bloom": {
      "Migration": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to migrate the previously downloaded blocks to the Bloom index. Allowed values: `true` `false`. Defaults to `false`.

- #### `Bloom.MigrationStatistics` \{#bloom-migrationstatistics\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --bloom-migrationstatistics <value>
  --Bloom.MigrationStatistics <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BLOOMCONFIG_MIGRATIONSTATISTICS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Bloom": {
      "MigrationStatistics": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether the migration statistics should be calculated and output. Allowed values: `true` `false`. Defaults to `false`.

### CensorshipDetector

- #### `CensorshipDetector.AddressesForCensorshipDetection` \{#censorshipdetector-addressesforcensorshipdetection\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --censorshipdetector-addressesforcensorshipdetection <value>
  --CensorshipDetector.AddressesForCensorshipDetection <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_CENSORSHIPDETECTORCONFIG_ADDRESSESFORCENSORSHIPDETECTION=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "CensorshipDetector": {
      "AddressesForCensorshipDetection": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The addresses to detect censorship for. Defaults to `null`.

- #### `CensorshipDetector.BlockCensorshipThreshold` \{#censorshipdetector-blockcensorshipthreshold\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --censorshipdetector-blockcensorshipthreshold <value>
  --CensorshipDetector.BlockCensorshipThreshold <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_CENSORSHIPDETECTORCONFIG_BLOCKCENSORSHIPTHRESHOLD=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "CensorshipDetector": {
      "BlockCensorshipThreshold": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The number of the consecutive blocks with detected potential censorship to report. Defaults to `2`.

- #### `CensorshipDetector.Enabled` \{#censorshipdetector-enabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --censorshipdetector-enabled <value>
  --CensorshipDetector.Enabled <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_CENSORSHIPDETECTORCONFIG_ENABLED=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "CensorshipDetector": {
      "Enabled": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to enable censorship detection. Allowed values: `true` `false`. Defaults to `false`.

### Clique

### EthStats

- #### `EthStats.Contact` \{#ethstats-contact\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --ethstats-contact <value>
  --EthStats.Contact <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_ETHSTATSCONFIG_CONTACT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "EthStats": {
      "Contact": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The node owner contact details displayed on Ethstats. Defaults to `hello@nethermind.io`.

- #### `EthStats.Enabled` \{#ethstats-enabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --ethstats-enabled <value>
  --EthStats.Enabled <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_ETHSTATSCONFIG_ENABLED=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "EthStats": {
      "Enabled": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to use Ethstats publishing. Allowed values: `true` `false`. Defaults to `false`.

- #### `EthStats.Name` \{#ethstats-name\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --ethstats-name <value>
  --EthStats.Name <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_ETHSTATSCONFIG_NAME=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "EthStats": {
      "Name": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The node name displayed on Ethstats. Defaults to `Nethermind`.

- #### `EthStats.Secret` \{#ethstats-secret\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --ethstats-secret <value>
  --EthStats.Secret <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_ETHSTATSCONFIG_SECRET=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "EthStats": {
      "Secret": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The Ethstats secret. Defaults to `secret`.

- #### `EthStats.SendInterval` \{#ethstats-sendinterval\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --ethstats-sendinterval <value>
  --EthStats.SendInterval <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_ETHSTATSCONFIG_SENDINTERVAL=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "EthStats": {
      "SendInterval": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The stats update interval, in seconds. Defaults to `15`.

- #### `EthStats.Server` \{#ethstats-server\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --ethstats-server <value>
  --EthStats.Server <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_ETHSTATSCONFIG_SERVER=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "EthStats": {
      "Server": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The Ethstats server URL. Defaults to `ws://localhost:3000/api`.

### HealthChecks

- #### `HealthChecks.Enabled` \{#healthchecks-enabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --healthchecks-enabled <value>
  --HealthChecks.Enabled <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_HEALTHCHECKSCONFIG_ENABLED=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "HealthChecks": {
      "Enabled": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to enable the health check. Allowed values: `true` `false`. Defaults to `false`.

- #### `HealthChecks.LowStorageCheckAwaitOnStartup` \{#healthchecks-lowstoragecheckawaitonstartup\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --healthchecks-lowstoragecheckawaitonstartup <value>
  --HealthChecks.LowStorageCheckAwaitOnStartup <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_HEALTHCHECKSCONFIG_LOWSTORAGECHECKAWAITONSTARTUP=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "HealthChecks": {
      "LowStorageCheckAwaitOnStartup": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to check for low disk space on startup and suspend until enough space is available. Allowed values: `true` `false`. Defaults to `false`.

- #### `HealthChecks.LowStorageSpaceShutdownThreshold` \{#healthchecks-lowstoragespaceshutdownthreshold\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --healthchecks-lowstoragespaceshutdownthreshold <value>
  --HealthChecks.LowStorageSpaceShutdownThreshold <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_HEALTHCHECKSCONFIG_LOWSTORAGESPACESHUTDOWNTHRESHOLD=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "HealthChecks": {
      "LowStorageSpaceShutdownThreshold": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The percentage of available disk space below which Nethermind shuts down. `0` to disable. Defaults to `1`.

- #### `HealthChecks.LowStorageSpaceWarningThreshold` \{#healthchecks-lowstoragespacewarningthreshold\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --healthchecks-lowstoragespacewarningthreshold <value>
  --HealthChecks.LowStorageSpaceWarningThreshold <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_HEALTHCHECKSCONFIG_LOWSTORAGESPACEWARNINGTHRESHOLD=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "HealthChecks": {
      "LowStorageSpaceWarningThreshold": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The percentage of available disk space below which a warning is displayed. `0` to disable. Defaults to `5`.

- #### `HealthChecks.MaxIntervalClRequestTime` \{#healthchecks-maxintervalclrequesttime\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --healthchecks-maxintervalclrequesttime <value>
  --HealthChecks.MaxIntervalClRequestTime <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_HEALTHCHECKSCONFIG_MAXINTERVALCLREQUESTTIME=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "HealthChecks": {
      "MaxIntervalClRequestTime": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The max request interval, in seconds, in which the consensus client is assumed healthy. Defaults to `300`.

- #### `HealthChecks.MaxIntervalWithoutProcessedBlock` \{#healthchecks-maxintervalwithoutprocessedblock\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --healthchecks-maxintervalwithoutprocessedblock <value>
  --HealthChecks.MaxIntervalWithoutProcessedBlock <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_HEALTHCHECKSCONFIG_MAXINTERVALWITHOUTPROCESSEDBLOCK=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "HealthChecks": {
      "MaxIntervalWithoutProcessedBlock": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The max interval, in seconds, in which the block processing is assumed healthy. Defaults to `null`.

- #### `HealthChecks.MaxIntervalWithoutProducedBlock` \{#healthchecks-maxintervalwithoutproducedblock\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --healthchecks-maxintervalwithoutproducedblock <value>
  --HealthChecks.MaxIntervalWithoutProducedBlock <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_HEALTHCHECKSCONFIG_MAXINTERVALWITHOUTPRODUCEDBLOCK=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "HealthChecks": {
      "MaxIntervalWithoutProducedBlock": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The max interval, in seconds, in which the block production is assumed healthy. Defaults to `null`.

- #### `HealthChecks.PollingInterval` \{#healthchecks-pollinginterval\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --healthchecks-pollinginterval <value>
  --HealthChecks.PollingInterval <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_HEALTHCHECKSCONFIG_POLLINGINTERVAL=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "HealthChecks": {
      "PollingInterval": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The health check updates polling interval, in seconds. Defaults to `5`.

- #### `HealthChecks.Slug` \{#healthchecks-slug\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --healthchecks-slug <value>
  --HealthChecks.Slug <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_HEALTHCHECKSCONFIG_SLUG=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "HealthChecks": {
      "Slug": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The URL slug the health checks service is exposed at. Defaults to `/health`.

- #### `HealthChecks.UIEnabled` \{#healthchecks-uienabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --healthchecks-uienabled <value>
  --HealthChecks.UIEnabled <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_HEALTHCHECKSCONFIG_UIENABLED=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "HealthChecks": {
      "UIEnabled": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to enable the health checks UI. Allowed values: `true` `false`. Defaults to `false`.

- #### `HealthChecks.WebhooksEnabled` \{#healthchecks-webhooksenabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --healthchecks-webhooksenabled <value>
  --HealthChecks.WebhooksEnabled <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_HEALTHCHECKSCONFIG_WEBHOOKSENABLED=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "HealthChecks": {
      "WebhooksEnabled": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to enable web hooks. Allowed values: `true` `false`. Defaults to `false`.

- #### `HealthChecks.WebhooksPayload` \{#healthchecks-webhookspayload\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --healthchecks-webhookspayload <value>
  --HealthChecks.WebhooksPayload <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_HEALTHCHECKSCONFIG_WEBHOOKSPAYLOAD=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "HealthChecks": {
      "WebhooksPayload": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  An escaped JSON paylod to be sent to the web hook on failure.
  Defaults to:

  ```json
  {
    "attachments": [
      {
        "color": "#FFCC00",
        "pretext": "Health Check Status :warning:",
        "fields": [
          {
            "title": "Details",
            "value": "More details available at /healthchecks-ui",
            "short": false
          },
          {
            "title": "Description",
            "value": "[[DESCRIPTIONS]]",
            "short": false
          }
        ]
      }
    ]
  }
  ```

- #### `HealthChecks.WebhooksRestorePayload` \{#healthchecks-webhooksrestorepayload\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --healthchecks-webhooksrestorepayload <value>
  --HealthChecks.WebhooksRestorePayload <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_HEALTHCHECKSCONFIG_WEBHOOKSRESTOREPAYLOAD=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "HealthChecks": {
      "WebhooksRestorePayload": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  An escaped JSON paylod to be sent to the web hook on recovery.
  Defaults to:

  ```json
  {
    "attachments": [
      {
        "color": "#36a64f",
        "pretext": "Health Check Status :+1:",
        "fields": [
          {
            "title": "Details",
            "value": "More details available at /healthchecks-ui",
            "short": false
          },
          {
            "title": "description",
            "value": "The HealthCheck `[[LIVENESS]]` is recovered. Everything is up and running.",
            "short": false
          }
        ]
      }
    ]
  }
  ```

- #### `HealthChecks.WebhooksUri` \{#healthchecks-webhooksuri\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --healthchecks-webhooksuri <value>
  --HealthChecks.WebhooksUri <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_HEALTHCHECKSCONFIG_WEBHOOKSURI=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "HealthChecks": {
      "WebhooksUri": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The web hook URL. Defaults to `null`.

### Hive

- #### `Hive.BlocksDir` \{#hive-blocksdir\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --hive-blocksdir <value>
  --Hive.BlocksDir <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_HIVECONFIG_BLOCKSDIR=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Hive": {
      "BlocksDir": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The path to the directory with additional blocks. Defaults to `/blocks`.

- #### `Hive.ChainFile` \{#hive-chainfile\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --hive-chainfile <value>
  --Hive.ChainFile <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_HIVECONFIG_CHAINFILE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Hive": {
      "ChainFile": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The path to the chain definition should be specified as an RLP-encoded block sequence. Defaults to `/chain.rlp`.

- #### `Hive.Enabled` \{#hive-enabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --hive-enabled <value>
  --Hive.Enabled <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_HIVECONFIG_ENABLED=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Hive": {
      "Enabled": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to enable Hive for debugging. Allowed values: `true` `false`. Defaults to `false`.

- #### `Hive.GenesisFilePath` \{#hive-genesisfilepath\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --hive-genesisfilepath <value>
  --Hive.GenesisFilePath <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_HIVECONFIG_GENESISFILEPATH=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Hive": {
      "GenesisFilePath": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The path to the genesis block file. Defaults to `/genesis.json`.

- #### `Hive.KeysDir` \{#hive-keysdir\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --hive-keysdir <value>
  --Hive.KeysDir <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_HIVECONFIG_KEYSDIR=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Hive": {
      "KeysDir": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The path to the keystore directory. Defaults to `/keys`.

### Init

- #### `Init.AutoDump` \{#init-autodump\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --init-autodump <value>
  --Init.AutoDump <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_INITCONFIG_AUTODUMP=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Init": {
      "AutoDump": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Auto-dump on bad blocks for diagnostics.

  Allowed values:

  - `None`: None.
  - `Receipts`: Dumps block receipts traces.
  - `Parity`: Dumps Parity-like traces.
  - `Geth`: Dumps Geth-like traces.
  - `Rlp`: Dumps RLP data to a `.rlp` file with the block hash in the file name.
  - `RlpLog`: Dumps RLP data to the log output.
  - `Default`: Combines the `Receipts` `Rlp` options.
  - `All`: Combines the `Geth` `Parity` `Receipts` `Rlp` options.

  Defaults to `Default`.

- #### `Init.BadBlocksStored` \{#init-badblocksstored\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --init-badblocksstored <value>
  --Init.BadBlocksStored <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_INITCONFIG_BADBLOCKSSTORED=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Init": {
      "BadBlocksStored": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The maximum number of bad blocks observed on the network that will be stored on disk. Defaults to `100`.

- #### `Init.BaseDbPath` \{#init-basedbpath\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --init-basedbpath <value>
  --Init.BaseDbPath <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_INITCONFIG_BASEDBPATH=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Init": {
      "BaseDbPath": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The base path for all Nethermind databases. Defaults to `db`.

- #### `Init.ChainSpecPath` \{#init-chainspecpath\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --init-chainspecpath <value>
  --Init.ChainSpecPath <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_INITCONFIG_CHAINSPECPATH=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Init": {
      "ChainSpecPath": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The path to the chain spec file. Defaults to `chainspec/foundation.json`.

- #### `Init.DiagnosticMode` \{#init-diagnosticmode\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --init-diagnosticmode <value>
  --Init.DiagnosticMode <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_INITCONFIG_DIAGNOSTICMODE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Init": {
      "DiagnosticMode": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The diagnostic mode.

  Allowed values:

  - `None`: None.
  - `MemDb`: Uses an in-memory DB.
  - `RpcDb`: Uses a remote DB.
  - `ReadOnlyDb`: Uses a read-only DB.
  - `VerifyRewards`: Scans rewards for blocks and genesis.
  - `VerifySupply`: Scans and sums supply on all accounts.
  - `VerifyTrie`: Verifies if full state trie is stored.

  Defaults to `None`.

- #### `Init.DiscoveryEnabled` \{#init-discoveryenabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --init-discoveryenabled <value>
  --Init.DiscoveryEnabled <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_INITCONFIG_DISCOVERYENABLED=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Init": {
      "DiscoveryEnabled": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to enable the node discovery. If disabled, Nethermind doesn't look for other nodes beyond the bootnodes specified. Allowed values: `true` `false`. Defaults to `true`.

- #### `Init.EnableUnsecuredDevWallet` \{#init-enableunsecureddevwallet\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --init-enableunsecureddevwallet <value>
  --Init.EnableUnsecuredDevWallet <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_INITCONFIG_ENABLEUNSECUREDDEVWALLET=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Init": {
      "EnableUnsecuredDevWallet": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to enable the in-app wallet/keystore. Allowed values: `true` `false`. Defaults to `false`.

- #### `Init.GenesisHash` \{#init-genesishash\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --init-genesishash <value>
  --Init.GenesisHash <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_INITCONFIG_GENESISHASH=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Init": {
      "GenesisHash": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The hash of the genesis block. If not specified, the genesis block validity is not checked which is useful in the case of ad hoc test/private networks. Defaults to `null`.

- #### `Init.HiveChainSpecPath` \{#init-hivechainspecpath\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --init-hivechainspecpath <value>
  --Init.HiveChainSpecPath <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_INITCONFIG_HIVECHAINSPECPATH=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Init": {
      "HiveChainSpecPath": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The path to the chain spec file for Hive tests. Defaults to `chainspec/test.json`.

- #### `Init.IsMining` \{#init-ismining\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --init-ismining <value>
  --Init.IsMining <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_INITCONFIG_ISMINING=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Init": {
      "IsMining": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to seal/mine new blocks. Allowed values: `true` `false`. Defaults to `false`.

- #### `Init.KeepDevWalletInMemory` \{#init-keepdevwalletinmemory\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --init-keepdevwalletinmemory <value>
  --Init.KeepDevWalletInMemory <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_INITCONFIG_KEEPDEVWALLETINMEMORY=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Init": {
      "KeepDevWalletInMemory": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to create session-only accounts and delete them on shutdown. Allowed values: `true` `false`. Defaults to `false`.

- #### `Init.KzgSetupPath` \{#init-kzgsetuppath\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --init-kzgsetuppath <value>
  --Init.KzgSetupPath <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_INITCONFIG_KZGSETUPPATH=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Init": {
      "KzgSetupPath": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The path to KZG trusted setup file. Defaults to `null`.

- #### `Init.LogDirectory` \{#init-logdirectory\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --init-logdirectory <value>
  --Init.LogDirectory <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_INITCONFIG_LOGDIRECTORY=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Init": {
      "LogDirectory": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The path to the Nethermind logs directory. Defaults to `logs`.

- #### `Init.LogFileName` \{#init-logfilename\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --init-logfilename <value>
  --Init.LogFileName <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_INITCONFIG_LOGFILENAME=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Init": {
      "LogFileName": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The name of the log file. Defaults to `log.txt`.

- #### `Init.LogRules` \{#init-logrules\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --init-logrules <value>
  --Init.LogRules <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_INITCONFIG_LOGRULES=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Init": {
      "LogRules": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The logs format as `LogPath:LogLevel;*` Defaults to `null`.

- #### `Init.MemoryHint` \{#init-memoryhint\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --init-memoryhint <value>
  --Init.MemoryHint <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_INITCONFIG_MEMORYHINT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Init": {
      "MemoryHint": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The hint on the max memory limit, in bytes, to configure the database and networking memory allocations. Defaults to `null`.

- #### `Init.PeerManagerEnabled` \{#init-peermanagerenabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --init-peermanagerenabled <value>
  --Init.PeerManagerEnabled <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_INITCONFIG_PEERMANAGERENABLED=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Init": {
      "PeerManagerEnabled": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to connect to newly discovered peers. Allowed values: `true` `false`. Defaults to `true`.

- #### `Init.ProcessingEnabled` \{#init-processingenabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --init-processingenabled <value>
  --Init.ProcessingEnabled <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_INITCONFIG_PROCESSINGENABLED=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Init": {
      "ProcessingEnabled": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to download/process new blocks. Allowed values: `true` `false`. Defaults to `true`.

- #### `Init.RpcDbUrl` \{#init-rpcdburl\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --init-rpcdburl <value>
  --Init.RpcDbUrl <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_INITCONFIG_RPCDBURL=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Init": {
      "RpcDbUrl": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The URL of the remote node used as a database source when `DiagnosticMode` is set to `RpcDb`.

- #### `Init.StaticNodesPath` \{#init-staticnodespath\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --init-staticnodespath <value>
  --Init.StaticNodesPath <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_INITCONFIG_STATICNODESPATH=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Init": {
      "StaticNodesPath": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The path to the static nodes file. Defaults to `Data/static-nodes.json`.

- #### `Init.WebSocketsEnabled` \{#init-websocketsenabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --init-websocketsenabled <value>
  --Init.WebSocketsEnabled <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_INITCONFIG_WEBSOCKETSENABLED=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Init": {
      "WebSocketsEnabled": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to enable WebSocket service for the default JSON-RPC port on startup. Allowed values: `true` `false`. Defaults to `true`.

### JsonRpc

- #### `JsonRpc.AdditionalRpcUrls` \{#jsonrpc-additionalrpcurls\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-additionalrpcurls <value>
  --JsonRpc.AdditionalRpcUrls <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_ADDITIONALRPCURLS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "AdditionalRpcUrls": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  An array of additional JSON-RPC URLs to listen at with protocol and JSON-RPC namespace list. For instance, `[http://localhost:8546|http;ws|eth;web3]`. Defaults to `[]`.

- #### `JsonRpc.BufferResponses` \{#jsonrpc-bufferresponses\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-bufferresponses <value>
  --JsonRpc.BufferResponses <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_BUFFERRESPONSES=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "BufferResponses": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to buffer responses before sending them. This allows using of `Content-Length` instead of `Transfer-Encoding: chunked`. Note that it may degrade performance on large responses. The max buffered response length is 2GB. Chunked responses can be larger. Allowed values: `true` `false`. Defaults to `false`.

- #### `JsonRpc.CallsFilterFilePath` \{#jsonrpc-callsfilterfilepath\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-callsfilterfilepath <value>
  --JsonRpc.CallsFilterFilePath <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_CALLSFILTERFILEPATH=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "CallsFilterFilePath": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The path to a file with the list of new-line-separated JSON-RPC calls. If specified, only the calls from that file are allowed. Defaults to `Data/jsonrpc.filter`.

- #### `JsonRpc.CorsOrigins` \{#jsonrpc-corsorigins\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-corsorigins <value>
  --JsonRpc.CorsOrigins <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_CORSORIGINS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "CorsOrigins": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The JSON-RPC server CORS origins. Defaults to `*`.

- #### `JsonRpc.Enabled` \{#jsonrpc-enabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-enabled <value>
  --JsonRpc.Enabled <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_ENABLED=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "Enabled": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to enable the JSON-RPC service. Allowed values: `true` `false`. Defaults to `false`.

- #### `JsonRpc.EnabledModules` \{#jsonrpc-enabledmodules\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-enabledmodules <value>
  --JsonRpc.EnabledModules <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_ENABLEDMODULES=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "EnabledModules": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  An array of JSON-RPC namespaces to enable. For instance, `[debug,eth]`.

  Built-in namespaces:

  - `admin`
  - `client`
  - `debug`
  - `engine`
  - `eth`
  - `evm`
  - `health`
  - `net`
  - `parity`
  - `personal`
  - `proof`
  - `rpc`
  - `subscribe`
  - `trace`
  - `txpool`
  - `web3`

  Defaults to `[Eth,Subscribe,Trace,TxPool,Web3,Personal,Proof,Net,Parity,Health,Rpc]`.

- #### `JsonRpc.EngineEnabledModules` \{#jsonrpc-engineenabledmodules\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-engineenabledmodules <value>
  --JsonRpc.EngineEnabledModules <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_ENGINEENABLEDMODULES=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "EngineEnabledModules": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  An array of additional JSON-RPC URLs to listen at with protocol and JSON-RPC namespace list for Engine API. Defaults to `[Net,Eth,Subscribe,Web3]`.

- #### `JsonRpc.EngineHost` \{#jsonrpc-enginehost\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-enginehost <value>
  --JsonRpc.EngineHost <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_ENGINEHOST=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "EngineHost": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The Engine API host. Defaults to `127.0.0.1`.

- #### `JsonRpc.EnginePort` \{#jsonrpc-engineport\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-engineport <value>
  --JsonRpc.EnginePort <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_ENGINEPORT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "EnginePort": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The Engine API port. Defaults to `null`.

- #### `JsonRpc.EstimateErrorMargin` \{#jsonrpc-estimateerrormargin\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-estimateerrormargin <value>
  --JsonRpc.EstimateErrorMargin <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_ESTIMATEERRORMARGIN=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "EstimateErrorMargin": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The error margin used in the `eth_estimateGas` JSON-RPC method, in basis points. Defaults to `150`.

- #### `JsonRpc.EthModuleConcurrentInstances` \{#jsonrpc-ethmoduleconcurrentinstances\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-ethmoduleconcurrentinstances <value>
  --JsonRpc.EthModuleConcurrentInstances <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_ETHMODULECONCURRENTINSTANCES=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "EthModuleConcurrentInstances": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The number of concurrent instances for non-sharable calls:

  - `eth_call`
  - `eth_estimateGas`
  - `eth_getLogs`
  - `eth_newBlockFilter`
  - `eth_newFilter`
  - `eth_newPendingTransactionFilter`
  - `eth_uninstallFilter`

  This limits the load on the CPU and I/O to reasonable levels. If the limit is exceeded, HTTP 503 is returned along with the JSON-RPC error. Defaults to the number of logical processors.

- #### `JsonRpc.GasCap` \{#jsonrpc-gascap\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-gascap <value>
  --JsonRpc.GasCap <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_GASCAP=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "GasCap": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The gas limit for `eth_call` and `eth_estimateGas`. Defaults to `100000000`.

- #### `JsonRpc.Host` \{#jsonrpc-host\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-host <value>
  --JsonRpc.Host <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_HOST=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "Host": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The JSON-RPC service host. Defaults to `127.0.0.1`.

- #### `JsonRpc.IpcUnixDomainSocketPath` \{#jsonrpc-ipcunixdomainsocketpath\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-ipcunixdomainsocketpath <value>
  --JsonRpc.IpcUnixDomainSocketPath <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_IPCUNIXDOMAINSOCKETPATH=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "IpcUnixDomainSocketPath": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The path to connect a UNIX domain socket over.

- #### `JsonRpc.JwtSecretFile` \{#jsonrpc-jwtsecretfile\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-jwtsecretfile <value>
  --JsonRpc.JwtSecretFile <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_JWTSECRETFILE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "JwtSecretFile": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The path to the JWT secret file required for the Engine API authentication. Defaults to `keystore/jwt-secret`.

- #### `JsonRpc.MaxBatchResponseBodySize` \{#jsonrpc-maxbatchresponsebodysize\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-maxbatchresponsebodysize <value>
  --JsonRpc.MaxBatchResponseBodySize <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_MAXBATCHRESPONSEBODYSIZE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "MaxBatchResponseBodySize": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The max batch size limit for batched JSON-RPC calls. Defaults to `33554432`.

- #### `JsonRpc.MaxBatchSize` \{#jsonrpc-maxbatchsize\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-maxbatchsize <value>
  --JsonRpc.MaxBatchSize <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_MAXBATCHSIZE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "MaxBatchSize": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The max number of JSON-RPC requests in a batch. Defaults to `1024`.

- #### `JsonRpc.MaxLoggedRequestParametersCharacters` \{#jsonrpc-maxloggedrequestparameterscharacters\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-maxloggedrequestparameterscharacters <value>
  --JsonRpc.MaxLoggedRequestParametersCharacters <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_MAXLOGGEDREQUESTPARAMETERSCHARACTERS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "MaxLoggedRequestParametersCharacters": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The max number of characters of a JSON-RPC request parameter printing to the log. Defaults to `null`.

- #### `JsonRpc.MaxLogsPerResponse` \{#jsonrpc-maxlogsperresponse\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-maxlogsperresponse <value>
  --JsonRpc.MaxLogsPerResponse <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_MAXLOGSPERRESPONSE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "MaxLogsPerResponse": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The max number of logs per response for the `eth_getLogs` JSON-RPC method. `0` to lift the limit. Defaults to `20000`.

- #### `JsonRpc.MaxRequestBodySize` \{#jsonrpc-maxrequestbodysize\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-maxrequestbodysize <value>
  --JsonRpc.MaxRequestBodySize <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_MAXREQUESTBODYSIZE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "MaxRequestBodySize": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The max length of HTTP request body, in bytes. Defaults to `30000000`.

- #### `JsonRpc.MaxSimulateBlocksCap` \{#jsonrpc-maxsimulateblockscap\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-maxsimulateblockscap <value>
  --JsonRpc.MaxSimulateBlocksCap <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_MAXSIMULATEBLOCKSCAP=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "MaxSimulateBlocksCap": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The max block count limit for the `eth_simulate` JSON-RPC method. Defaults to `256`.

- #### `JsonRpc.MethodsLoggingFiltering` \{#jsonrpc-methodsloggingfiltering\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-methodsloggingfiltering <value>
  --JsonRpc.MethodsLoggingFiltering <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_METHODSLOGGINGFILTERING=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "MethodsLoggingFiltering": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  An array of the method names not to log. Defaults to `[engine_newPayloadV1,engine_newPayloadV2,engine_newPayloadV3,engine_forkchoiceUpdatedV1,engine_forkchoiceUpdatedV2]`.

- #### `JsonRpc.Port` \{#jsonrpc-port\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-port <value>
  --JsonRpc.Port <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_PORT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "Port": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The JSON-RPC service HTTP port. Defaults to `8545`.

- #### `JsonRpc.ReportIntervalSeconds` \{#jsonrpc-reportintervalseconds\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-reportintervalseconds <value>
  --JsonRpc.ReportIntervalSeconds <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_REPORTINTERVALSECONDS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "ReportIntervalSeconds": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The interval, in seconds, between the JSON-RPC stats report log. Defaults to `300`.

- #### `JsonRpc.RequestQueueLimit` \{#jsonrpc-requestqueuelimit\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-requestqueuelimit <value>
  --JsonRpc.RequestQueueLimit <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_REQUESTQUEUELIMIT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "RequestQueueLimit": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The max number of concurrent requests in the queue for:

  - `eth_call`
  - `eth_estimateGas`
  - `eth_getLogs`
  - `eth_newFilter`
  - `eth_newBlockFilter`
  - `eth_newPendingTransactionFilter`
  - `eth_uninstallFilter`

  `0` to lift the limit. Defaults to `500`.

- #### `JsonRpc.RpcRecorderBaseFilePath` \{#jsonrpc-rpcrecorderbasefilepath\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-rpcrecorderbasefilepath <value>
  --JsonRpc.RpcRecorderBaseFilePath <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_RPCRECORDERBASEFILEPATH=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "RpcRecorderBaseFilePath": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The path to the base file for diagnostic recording. Defaults to `logs/rpc.{counter}.txt`.

- #### `JsonRpc.RpcRecorderState` \{#jsonrpc-rpcrecorderstate\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-rpcrecorderstate <value>
  --JsonRpc.RpcRecorderState <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_RPCRECORDERSTATE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "RpcRecorderState": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The diagnostic recording mode.

  Allowed values:

  - `None`: None.
  - `Request`: Records requests.
  - `Response`: Records responses.
  - `All`: Records both requests and responses.

  Defaults to `None`.

- #### `JsonRpc.Timeout` \{#jsonrpc-timeout\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-timeout <value>
  --JsonRpc.Timeout <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_TIMEOUT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "Timeout": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The request timeout, in milliseconds. Defaults to `20000`.

- #### `JsonRpc.WebSocketsPort` \{#jsonrpc-websocketsport\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-websocketsport <value>
  --JsonRpc.WebSocketsPort <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_WEBSOCKETSPORT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "WebSocketsPort": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The JSON-RPC service WebSockets port. Defaults to `8545`.

### KeyStore

- #### `KeyStore.BlockAuthorAccount` \{#keystore-blockauthoraccount\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --keystore-blockauthoraccount <value>
  --KeyStore.BlockAuthorAccount <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_KEYSTORECONFIG_BLOCKAUTHORACCOUNT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "KeyStore": {
      "BlockAuthorAccount": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  An account to use as the block author (coinbase).

- #### `KeyStore.Cipher` \{#keystore-cipher\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --keystore-cipher <value>
  --KeyStore.Cipher <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_KEYSTORECONFIG_CIPHER=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "KeyStore": {
      "Cipher": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  See [Web3 secret storage definition][web3-secret-storage]. Defaults to `aes-128-ctr`.

- #### `KeyStore.EnodeAccount` \{#keystore-enodeaccount\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --keystore-enodeaccount <value>
  --KeyStore.EnodeAccount <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_KEYSTORECONFIG_ENODEACCOUNT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "KeyStore": {
      "EnodeAccount": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  An account to use for networking (enode). If neither this nor the `EnodeKeyFile` option is specified, the key is autogenerated in `node.key.plain` file.

- #### `KeyStore.EnodeKeyFile` \{#keystore-enodekeyfile\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --keystore-enodekeyfile <value>
  --KeyStore.EnodeKeyFile <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_KEYSTORECONFIG_ENODEKEYFILE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "KeyStore": {
      "EnodeKeyFile": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The path to the key file to use by for networking (enode). If neither this nor the `EnodeAccount` is specified, the key is autogenerated in `node.key.plain` file.

- #### `KeyStore.IVSize` \{#keystore-ivsize\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --keystore-ivsize <value>
  --KeyStore.IVSize <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_KEYSTORECONFIG_IVSIZE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "KeyStore": {
      "IVSize": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  See [Web3 secret storage definition][web3-secret-storage]. Defaults to `16`.

- #### `KeyStore.Kdf` \{#keystore-kdf\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --keystore-kdf <value>
  --KeyStore.Kdf <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_KEYSTORECONFIG_KDF=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "KeyStore": {
      "Kdf": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  See [Web3 secret storage definition][web3-secret-storage]. Defaults to `scrypt`.

- #### `KeyStore.KdfparamsDklen` \{#keystore-kdfparamsdklen\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --keystore-kdfparamsdklen <value>
  --KeyStore.KdfparamsDklen <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_KEYSTORECONFIG_KDFPARAMSDKLEN=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "KeyStore": {
      "KdfparamsDklen": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  See [Web3 secret storage definition][web3-secret-storage]. Defaults to `32`.

- #### `KeyStore.KdfparamsN` \{#keystore-kdfparamsn\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --keystore-kdfparamsn <value>
  --KeyStore.KdfparamsN <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_KEYSTORECONFIG_KDFPARAMSN=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "KeyStore": {
      "KdfparamsN": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  See [Web3 secret storage definition][web3-secret-storage]. Defaults to `262144`.

- #### `KeyStore.KdfparamsP` \{#keystore-kdfparamsp\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --keystore-kdfparamsp <value>
  --KeyStore.KdfparamsP <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_KEYSTORECONFIG_KDFPARAMSP=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "KeyStore": {
      "KdfparamsP": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  See [Web3 secret storage definition][web3-secret-storage]. Defaults to `1`.

- #### `KeyStore.KdfparamsR` \{#keystore-kdfparamsr\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --keystore-kdfparamsr <value>
  --KeyStore.KdfparamsR <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_KEYSTORECONFIG_KDFPARAMSR=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "KeyStore": {
      "KdfparamsR": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  See [Web3 secret storage definition][web3-secret-storage]. Defaults to `8`.

- #### `KeyStore.KdfparamsSaltLen` \{#keystore-kdfparamssaltlen\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --keystore-kdfparamssaltlen <value>
  --KeyStore.KdfparamsSaltLen <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_KEYSTORECONFIG_KDFPARAMSSALTLEN=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "KeyStore": {
      "KdfparamsSaltLen": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  See [Web3 secret storage definition][web3-secret-storage]. Defaults to `32`.

- #### `KeyStore.KeyStoreDirectory` \{#keystore-keystoredirectory\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --keystore-keystoredirectory <value>
  --KeyStore.KeyStoreDirectory <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_KEYSTORECONFIG_KEYSTOREDIRECTORY=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "KeyStore": {
      "KeyStoreDirectory": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The path to the keystore directory. Defaults to `keystore`.

- #### `KeyStore.KeyStoreEncoding` \{#keystore-keystoreencoding\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --keystore-keystoreencoding <value>
  --KeyStore.KeyStoreEncoding <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_KEYSTORECONFIG_KEYSTOREENCODING=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "KeyStore": {
      "KeyStoreEncoding": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  See [Web3 secret storage definition][web3-secret-storage]. Defaults to `UTF-8`.

- #### `KeyStore.PasswordFiles` \{#keystore-passwordfiles\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --keystore-passwordfiles <value>
  --KeyStore.PasswordFiles <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_KEYSTORECONFIG_PASSWORDFILES=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "KeyStore": {
      "PasswordFiles": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  An array of password files paths used to unlock the accounts set with `UnlockAccounts`. Defaults to `[]`.

- #### `KeyStore.Passwords` \{#keystore-passwords\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --keystore-passwords <value>
  --KeyStore.Passwords <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_KEYSTORECONFIG_PASSWORDS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "KeyStore": {
      "Passwords": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  An array of passwords used to unlock the accounts set with `UnlockAccounts`. Defaults to `[]`.

- #### `KeyStore.SymmetricEncrypterBlockSize` \{#keystore-symmetricencrypterblocksize\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --keystore-symmetricencrypterblocksize <value>
  --KeyStore.SymmetricEncrypterBlockSize <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_KEYSTORECONFIG_SYMMETRICENCRYPTERBLOCKSIZE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "KeyStore": {
      "SymmetricEncrypterBlockSize": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  See [Web3 secret storage definition][web3-secret-storage]. Defaults to `128`.

- #### `KeyStore.SymmetricEncrypterKeySize` \{#keystore-symmetricencrypterkeysize\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --keystore-symmetricencrypterkeysize <value>
  --KeyStore.SymmetricEncrypterKeySize <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_KEYSTORECONFIG_SYMMETRICENCRYPTERKEYSIZE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "KeyStore": {
      "SymmetricEncrypterKeySize": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  See [Web3 secret storage definition][web3-secret-storage]. Defaults to `128`.

- #### `KeyStore.TestNodeKey` \{#keystore-testnodekey\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --keystore-testnodekey <value>
  --KeyStore.TestNodeKey <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_KEYSTORECONFIG_TESTNODEKEY=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "KeyStore": {
      "TestNodeKey": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  A plaintext private key to use for testing purposes.

- #### `KeyStore.UnlockAccounts` \{#keystore-unlockaccounts\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --keystore-unlockaccounts <value>
  --KeyStore.UnlockAccounts <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_KEYSTORECONFIG_UNLOCKACCOUNTS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "KeyStore": {
      "UnlockAccounts": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  An array of accounts to unlock on startup using passwords either in `PasswordFiles` and `Passwords`. Defaults to `[]`.

### Merge

- #### `Merge.BuilderRelayUrl` \{#merge-builderrelayurl\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --merge-builderrelayurl <value>
  --Merge.BuilderRelayUrl <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_MERGECONFIG_BUILDERRELAYURL=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Merge": {
      "BuilderRelayUrl": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The URL of a builder relay. If specified, blocks are sent to the relay. Defaults to `null`.

- #### `Merge.CollectionsPerDecommit` \{#merge-collectionsperdecommit\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --merge-collectionsperdecommit <value>
  --Merge.CollectionsPerDecommit <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_MERGECONFIG_COLLECTIONSPERDECOMMIT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Merge": {
      "CollectionsPerDecommit": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The number of requests to the garbage collector (GC) to release the process memory.

  Allowed values:

  - `-1`: No requests.
  - `0`: Requests every time.
  - A positive number: Requests after that many Engine API calls.

  Defaults to `25`.

- #### `Merge.CompactMemory` \{#merge-compactmemory\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --merge-compactmemory <value>
  --Merge.CompactMemory <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_MERGECONFIG_COMPACTMEMORY=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Merge": {
      "CompactMemory": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The memory compaction mode. When set to `Full`, compacts the large object heap (LOH) if `SweepMemory` is set to `Gen2`.

  Allowed values:

  - `No`: Disables memory compaction.
  - `Yes`: Enables memory compaction.
  - `Full`: Enables memory compaction with the large object heap (LOH) if `SweepMemory` is set to `Gen2`.

  Defaults to `Yes`.

- #### `Merge.Enabled` \{#merge-enabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --merge-enabled <value>
  --Merge.Enabled <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_MERGECONFIG_ENABLED=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Merge": {
      "Enabled": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to enable the Merge hard fork. Allowed values: `true` `false`. Defaults to `true`.

- #### `Merge.FinalTotalDifficulty` \{#merge-finaltotaldifficulty\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --merge-finaltotaldifficulty <value>
  --Merge.FinalTotalDifficulty <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_MERGECONFIG_FINALTOTALDIFFICULTY=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Merge": {
      "FinalTotalDifficulty": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The total difficulty of the last PoW block. Must be greater than or equal to the terminal total difficulty (TTD). Defaults to `null`.

- #### `Merge.PrioritizeBlockLatency` \{#merge-prioritizeblocklatency\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --merge-prioritizeblocklatency <value>
  --Merge.PrioritizeBlockLatency <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_MERGECONFIG_PRIORITIZEBLOCKLATENCY=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Merge": {
      "PrioritizeBlockLatency": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to reduce block latency by disabling garbage collection during Engine API calls. Allowed values: `true` `false`. Defaults to `true`.

- #### `Merge.SweepMemory` \{#merge-sweepmemory\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --merge-sweepmemory <value>
  --Merge.SweepMemory <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_MERGECONFIG_SWEEPMEMORY=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Merge": {
      "SweepMemory": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The garbage collection (GC) mode between Engine API calls.

  Allowed values:

  - `NoGC`: Disables garbage collection.
  - `Gen0`: Enables garbage collection of generation 0.
  - `Gen1`: Enables garbage collection of generation 1.
  - `Gen2`: Enables garbage collection of generation 2.

  Defaults to `Gen1`.

- #### `Merge.TerminalBlockHash` \{#merge-terminalblockhash\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --merge-terminalblockhash <value>
  --Merge.TerminalBlockHash <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_MERGECONFIG_TERMINALBLOCKHASH=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Merge": {
      "TerminalBlockHash": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The terminal PoW block hash used for the transition. Defaults to `null`.

- #### `Merge.TerminalBlockNumber` \{#merge-terminalblocknumber\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --merge-terminalblocknumber <value>
  --Merge.TerminalBlockNumber <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_MERGECONFIG_TERMINALBLOCKNUMBER=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Merge": {
      "TerminalBlockNumber": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The terminal PoW block number used for the transition.

- #### `Merge.TerminalTotalDifficulty` \{#merge-terminaltotaldifficulty\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --merge-terminaltotaldifficulty <value>
  --Merge.TerminalTotalDifficulty <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_MERGECONFIG_TERMINALTOTALDIFFICULTY=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Merge": {
      "TerminalTotalDifficulty": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The terminal total difficulty (TTD) used for the transition. Defaults to `null`.

### Metrics

- #### `Metrics.CountersEnabled` \{#metrics-countersenabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --metrics-countersenabled <value>
  --Metrics.CountersEnabled <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_METRICSCONFIG_COUNTERSENABLED=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Metrics": {
      "CountersEnabled": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to publish metrics using .NET diagnostics that can be collected with dotnet-counters. Allowed values: `true` `false`. Defaults to `false`.

- #### `Metrics.Enabled` \{#metrics-enabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --metrics-enabled <value>
  --Metrics.Enabled <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_METRICSCONFIG_ENABLED=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Metrics": {
      "Enabled": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to publish various metrics to Prometheus Pushgateway at a given interval. Allowed values: `true` `false`. Defaults to `false`.

- #### `Metrics.EnableDbSizeMetrics` \{#metrics-enabledbsizemetrics\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --metrics-enabledbsizemetrics <value>
  --Metrics.EnableDbSizeMetrics <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_METRICSCONFIG_ENABLEDBSIZEMETRICS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Metrics": {
      "EnableDbSizeMetrics": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to publish database size metrics. Allowed values: `true` `false`. Defaults to `true`.

- #### `Metrics.ExposeHost` \{#metrics-exposehost\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --metrics-exposehost <value>
  --Metrics.ExposeHost <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_METRICSCONFIG_EXPOSEHOST=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Metrics": {
      "ExposeHost": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The IP address to expose Prometheus metrics at. The value of `+` means listening on all available hostnames. Setting this to `localhost` prevents remote access. Defaults to `+`.

- #### `Metrics.ExposePort` \{#metrics-exposeport\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --metrics-exposeport <value>
  --Metrics.ExposePort <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_METRICSCONFIG_EXPOSEPORT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Metrics": {
      "ExposePort": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The port to expose Prometheus metrics at.

- #### `Metrics.IntervalSeconds` \{#metrics-intervalseconds\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --metrics-intervalseconds <value>
  --Metrics.IntervalSeconds <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_METRICSCONFIG_INTERVALSECONDS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Metrics": {
      "IntervalSeconds": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The frequency of pushing metrics to Prometheus, in seconds. Defaults to `5`.

- #### `Metrics.MonitoringGroup` \{#metrics-monitoringgroup\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --metrics-monitoringgroup <value>
  --Metrics.MonitoringGroup <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_METRICSCONFIG_MONITORINGGROUP=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Metrics": {
      "MonitoringGroup": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The Prometheus metrics group name. Defaults to `nethermind`.

- #### `Metrics.MonitoringJob` \{#metrics-monitoringjob\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --metrics-monitoringjob <value>
  --Metrics.MonitoringJob <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_METRICSCONFIG_MONITORINGJOB=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Metrics": {
      "MonitoringJob": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The Prometheus metrics job name. Defaults to `nethermind`.

- #### `Metrics.NodeName` \{#metrics-nodename\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --metrics-nodename <value>
  --Metrics.NodeName <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_METRICSCONFIG_NODENAME=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Metrics": {
      "NodeName": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The name to display on the Grafana dashboard. Defaults to `Nethermind`.

- #### `Metrics.PushGatewayUrl` \{#metrics-pushgatewayurl\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --metrics-pushgatewayurl <value>
  --Metrics.PushGatewayUrl <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_METRICSCONFIG_PUSHGATEWAYURL=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Metrics": {
      "PushGatewayUrl": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The Prometheus Pushgateway instance URL.

### Mining

- #### `Mining.Enabled` \{#mining-enabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --mining-enabled <value>
  --Mining.Enabled <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_MININGCONFIG_ENABLED=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Mining": {
      "Enabled": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to produce blocks. Allowed values: `true` `false`. Defaults to `false`.

- #### `Mining.Signer` \{#mining-signer\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --mining-signer <value>
  --Mining.Signer <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_MININGCONFIG_SIGNER=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Mining": {
      "Signer": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The URL of an external signer like [Clef](https://github.com/ethereum/go-ethereum/blob/master/cmd/clef/tutorial.md). Defaults to `null`.

### Network

- #### `Network.Bootnodes` \{#network-bootnodes\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --network-bootnodes <value>
  --Network.Bootnodes <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_NETWORKCONFIG_BOOTNODES=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Network": {
      "Bootnodes": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  A comma-separated enode list to be used as boot nodes.

- #### `Network.DiagTracerEnabled` \{#network-diagtracerenabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --network-diagtracerenabled <value>
  --Network.DiagTracerEnabled <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_NETWORKCONFIG_DIAGTRACERENABLED=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Network": {
      "DiagTracerEnabled": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to enable a verbose diagnostic tracing. Allowed values: `true` `false`. Defaults to `false`.

- #### `Network.DiscoveryDns` \{#network-discoverydns\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --network-discoverydns <value>
  --Network.DiscoveryDns <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_NETWORKCONFIG_DISCOVERYDNS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Network": {
      "DiscoveryDns": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Use tree is available through a DNS name. For the default of `<chain name>.ethdisco.net`, leave unspecified. Defaults to `null`.

- #### `Network.DiscoveryPort` \{#network-discoveryport\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --network-discoveryport <value>
  --Network.DiscoveryPort <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_NETWORKCONFIG_DISCOVERYPORT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Network": {
      "DiscoveryPort": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The UDP port number for incoming discovery connections. It's recommended to keep it the same as the TCP port (`P2PPort`) because other values have not been tested yet. Defaults to `30303`.

- #### `Network.EnableUPnP` \{#network-enableupnp\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --network-enableupnp <value>
  --Network.EnableUPnP <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_NETWORKCONFIG_ENABLEUPNP=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Network": {
      "EnableUPnP": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to enable automatic port forwarding via UPnP. Allowed values: `true` `false`. Defaults to `false`.

- #### `Network.ExternalIp` \{#network-externalip\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --network-externalip <value>
  --Network.ExternalIp <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_NETWORKCONFIG_EXTERNALIP=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Network": {
      "ExternalIp": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The external IP. Use only when the external IP cannot be resolved automatically. Defaults to `null`.

- #### `Network.LocalIp` \{#network-localip\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --network-localip <value>
  --Network.LocalIp <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_NETWORKCONFIG_LOCALIP=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Network": {
      "LocalIp": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The local IP. Use only when the local IP cannot be resolved automatically. Defaults to `null`.

- #### `Network.MaxActivePeers` \{#network-maxactivepeers\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --network-maxactivepeers <value>
  --Network.MaxActivePeers <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_NETWORKCONFIG_MAXACTIVEPEERS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Network": {
      "MaxActivePeers": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The max allowed number of connected peers. Defaults to `50`.

- #### `Network.MaxNettyArenaCount` \{#network-maxnettyarenacount\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --network-maxnettyarenacount <value>
  --Network.MaxNettyArenaCount <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_NETWORKCONFIG_MAXNETTYARENACOUNT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Network": {
      "MaxNettyArenaCount": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The maximum DotNetty arena count. Increasing this on a high-core CPU without increasing the memory budget may reduce chunk size so much that it causes a huge memory allocation. Defaults to `8`.

- #### `Network.NettyArenaOrder` \{#network-nettyarenaorder\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --network-nettyarenaorder <value>
  --Network.NettyArenaOrder <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_NETWORKCONFIG_NETTYARENAORDER=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Network": {
      "NettyArenaOrder": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The size of the DotNetty arena order. `-1` to depend on the memory hint. Defaults to `-1`.

- #### `Network.OnlyStaticPeers` \{#network-onlystaticpeers\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --network-onlystaticpeers <value>
  --Network.OnlyStaticPeers <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_NETWORKCONFIG_ONLYSTATICPEERS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Network": {
      "OnlyStaticPeers": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to use static peers only. Allowed values: `true` `false`. Defaults to `false`.

- #### `Network.P2PPort` \{#network-p2pport\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --network-p2pport <value>
  --Network.P2PPort <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_NETWORKCONFIG_P2PPORT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Network": {
      "P2PPort": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The TCP port for incoming P2P connections. Defaults to `30303`.

- #### `Network.PriorityPeersMaxCount` \{#network-prioritypeersmaxcount\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --network-prioritypeersmaxcount <value>
  --Network.PriorityPeersMaxCount <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_NETWORKCONFIG_PRIORITYPEERSMAXCOUNT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Network": {
      "PriorityPeersMaxCount": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The max number of priority peers. Can be overridden by a plugin. Defaults to `0`.

- #### `Network.StaticPeers` \{#network-staticpeers\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --network-staticpeers <value>
  --Network.StaticPeers <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_NETWORKCONFIG_STATICPEERS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Network": {
      "StaticPeers": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  A list of peers to keep connection for. Static peers are affected by `MaxActivePeers`. Defaults to `null`.

### Optimism

- #### `Optimism.SequencerUrl` \{#optimism-sequencerurl\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --optimism-sequencerurl <value>
  --Optimism.SequencerUrl <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_OPTIMISMCONFIG_SEQUENCERURL=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Optimism": {
      "SequencerUrl": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The sequencer address. Defaults to `null`.

### Pruning

- #### `Pruning.AvailableSpaceCheckEnabled` \{#pruning-availablespacecheckenabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --pruning-availablespacecheckenabled <value>
  --Pruning.AvailableSpaceCheckEnabled <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_PRUNINGCONFIG_AVAILABLESPACECHECKENABLED=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Pruning": {
      "AvailableSpaceCheckEnabled": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to enables available disk space check. Allowed values: `true` `false`. Defaults to `true`.

- #### `Pruning.CacheMb` \{#pruning-cachemb\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --pruning-cachemb <value>
  --Pruning.CacheMb <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_PRUNINGCONFIG_CACHEMB=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Pruning": {
      "CacheMb": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The in-memory cache size, in MB. The bigger the cache size, the bigger the disk space savings. Defaults to `1024`.

- #### `Pruning.FullPruningCompletionBehavior` \{#pruning-fullpruningcompletionbehavior\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --pruning-fullpruningcompletionbehavior <value>
  --Pruning.FullPruningCompletionBehavior <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_PRUNINGCONFIG_FULLPRUNINGCOMPLETIONBEHAVIOR=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Pruning": {
      "FullPruningCompletionBehavior": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The action to take on pruning completion.

  Allowed values:

  - `None`: No action.
  - `ShutdownOnSuccess`: Shuts Nethermind down when pruning succeeds but leaves it running when fails.
  - `AlwaysShutdown`: Shuts Nethermind down when pruning completes, regardless of its status.

  Defaults to `None`.

- #### `Pruning.FullPruningDisableLowPriorityWrites` \{#pruning-fullpruningdisablelowprioritywrites\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --pruning-fullpruningdisablelowprioritywrites <value>
  --Pruning.FullPruningDisableLowPriorityWrites <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_PRUNINGCONFIG_FULLPRUNINGDISABLELOWPRIORITYWRITES=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Pruning": {
      "FullPruningDisableLowPriorityWrites": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to disable low-priority for pruning writes. Full pruning uses low-priority write operations to prevent blocking block processing. If block processing is not high-priority, set this option to `true` for faster pruning. Allowed values: `true` `false`. Defaults to `false`.

- #### `Pruning.FullPruningMaxDegreeOfParallelism` \{#pruning-fullpruningmaxdegreeofparallelism\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --pruning-fullpruningmaxdegreeofparallelism <value>
  --Pruning.FullPruningMaxDegreeOfParallelism <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_PRUNINGCONFIG_FULLPRUNINGMAXDEGREEOFPARALLELISM=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Pruning": {
      "FullPruningMaxDegreeOfParallelism": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The max number of parallel tasks that can be used by full pruning.

  Allowed values:

  - `-1`: Uses the number of logical processors.
  - `0`: Uses 25% of logical processors.
  - `1`: Runs on a single thread.

  The recommended value depends on the type of the node:

  - If the node needs to be responsive (serves for RPC or validator), then the recommended value is `0` or `-1`.
  - If the node doesn't have many other responsibilities but needs to be able to follow the chain reliably without any delays and produce live logs, the `0` or `1` is recommended.
  - If the node doesn't have to be responsive, has very fast I/O (like NVMe) and the shortest pruning time is to be achieved, then `-1` is recommended. Defaults to `0`.

- #### `Pruning.FullPruningMemoryBudgetMb` \{#pruning-fullpruningmemorybudgetmb\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --pruning-fullpruningmemorybudgetmb <value>
  --Pruning.FullPruningMemoryBudgetMb <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_PRUNINGCONFIG_FULLPRUNINGMEMORYBUDGETMB=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Pruning": {
      "FullPruningMemoryBudgetMb": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The memory budget, in MB, used for the trie visit. Increasing this value significantly reduces the IOPS requirement at the expense of memory usage. `0` to disable. Defaults to `4000`.

- #### `Pruning.FullPruningMinimumDelayHours` \{#pruning-fullpruningminimumdelayhours\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --pruning-fullpruningminimumdelayhours <value>
  --Pruning.FullPruningMinimumDelayHours <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_PRUNINGCONFIG_FULLPRUNINGMINIMUMDELAYHOURS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Pruning": {
      "FullPruningMinimumDelayHours": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The minimum delay, in hours, between full pruning operations not to exhaust disk writes. Defaults to `240`.

- #### `Pruning.FullPruningThresholdMb` \{#pruning-fullpruningthresholdmb\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --pruning-fullpruningthresholdmb <value>
  --Pruning.FullPruningThresholdMb <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_PRUNINGCONFIG_FULLPRUNINGTHRESHOLDMB=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Pruning": {
      "FullPruningThresholdMb": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The threshold, in MB, to trigger full pruning. Depends on `Mode` and `FullPruningTrigger`. Defaults to `256000`.

- #### `Pruning.FullPruningTrigger` \{#pruning-fullpruningtrigger\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --pruning-fullpruningtrigger <value>
  --Pruning.FullPruningTrigger <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_PRUNINGCONFIG_FULLPRUNINGTRIGGER=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Pruning": {
      "FullPruningTrigger": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The full pruning trigger.

  Allowed values:

  - `Manual`: Does not trigger. Pruning can be triggered manually.
  - `StateDbSize`: Triggers when the state DB size is above the specified threshold.
  - `VolumeFreeSpace`: Triggers when the free disk space where the state DB is stored is below the specified threshold.

  Defaults to `Manual`.

- #### `Pruning.Mode` \{#pruning-mode\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --pruning-mode <value>
  --Pruning.Mode <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_PRUNINGCONFIG_MODE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Pruning": {
      "Mode": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The pruning mode.

  Allowed values:

  - `None`: No pruning (archive).
  - `Memory`: In-memory pruning.
  - `Full`: Full pruning.
  - `Hybrid`: Combined in-memory and full pruning.

  Defaults to `Hybrid`.

- #### `Pruning.PersistenceInterval` \{#pruning-persistenceinterval\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --pruning-persistenceinterval <value>
  --Pruning.PersistenceInterval <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_PRUNINGCONFIG_PERSISTENCEINTERVAL=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Pruning": {
      "PersistenceInterval": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The block persistence frequency. If set to `N`, it caches after each `Nth` block even if not required by cache memory usage. Defaults to `8192`.

- #### `Pruning.PruningBoundary` \{#pruning-pruningboundary\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --pruning-pruningboundary <value>
  --Pruning.PruningBoundary <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_PRUNINGCONFIG_PRUNINGBOUNDARY=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Pruning": {
      "PruningBoundary": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The number of past states before the state gets pruned. Used to determine how old of a state to keep from the head. Defaults to `64`.

- #### `Pruning.TrackedPastKeyCountMemoryRatio` \{#pruning-trackedpastkeycountmemoryratio\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --pruning-trackedpastkeycountmemoryratio <value>
  --Pruning.TrackedPastKeyCountMemoryRatio <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_PRUNINGCONFIG_TRACKEDPASTKEYCOUNTMEMORYRATIO=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Pruning": {
      "TrackedPastKeyCountMemoryRatio": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The ratio of memory out of `Pruning.CacheMb` to allocate for the LRU cache, used to track past keys for live pruning. Defaults to `0.1`.

### Receipt

- #### `Receipt.CompactReceiptStore` \{#receipt-compactreceiptstore\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --receipt-compactreceiptstore <value>
  --Receipt.CompactReceiptStore <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_RECEIPTCONFIG_COMPACTRECEIPTSTORE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Receipt": {
      "CompactReceiptStore": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to compact receipts database size at the expense of RPC performance. Allowed values: `true` `false`. Defaults to `true`.

- #### `Receipt.CompactTxIndex` \{#receipt-compacttxindex\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --receipt-compacttxindex <value>
  --Receipt.CompactTxIndex <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_RECEIPTCONFIG_COMPACTTXINDEX=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Receipt": {
      "CompactTxIndex": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to compact receipts transaction index database size at the expense of RPC performance. Allowed values: `true` `false`. Defaults to `true`.

- #### `Receipt.ReceiptsMigration` \{#receipt-receiptsmigration\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --receipt-receiptsmigration <value>
  --Receipt.ReceiptsMigration <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_RECEIPTCONFIG_RECEIPTSMIGRATION=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Receipt": {
      "ReceiptsMigration": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to migrate the receipts database to the new schema. Allowed values: `true` `false`. Defaults to `false`.

- #### `Receipt.StoreReceipts` \{#receipt-storereceipts\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --receipt-storereceipts <value>
  --Receipt.StoreReceipts <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_RECEIPTCONFIG_STORERECEIPTS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Receipt": {
      "StoreReceipts": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to store receipts after a new block is processed. This setting is independent from downloading receipts in fast sync mode. Allowed values: `true` `false`. Defaults to `true`.

- #### `Receipt.TxLookupLimit` \{#receipt-txlookuplimit\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --receipt-txlookuplimit <value>
  --Receipt.TxLookupLimit <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_RECEIPTCONFIG_TXLOOKUPLIMIT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Receipt": {
      "TxLookupLimit": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The number of recent blocks to maintain transaction index for. `0` to never remove indices, `-1` to never index. Defaults to `2350000`.

### Seq

- #### `Seq.ApiKey` \{#seq-apikey\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --seq-apikey <value>
  --Seq.ApiKey <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SEQCONFIG_APIKEY=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Seq": {
      "ApiKey": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The Seq API key.

- #### `Seq.MinLevel` \{#seq-minlevel\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --seq-minlevel <value>
  --Seq.MinLevel <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SEQCONFIG_MINLEVEL=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Seq": {
      "MinLevel": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The min log level to sent to Seq. Defaults to `Off`.

- #### `Seq.ServerUrl` \{#seq-serverurl\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --seq-serverurl <value>
  --Seq.ServerUrl <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SEQCONFIG_SERVERURL=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Seq": {
      "ServerUrl": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The Seq instance URL. Defaults to `http://localhost:5341`.

### Shutter

- #### `Shutter.BootnodeP2PAddresses` \{#shutter-bootnodep2paddresses\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --shutter-bootnodep2paddresses <value>
  --Shutter.BootnodeP2PAddresses <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SHUTTERCONFIG_BOOTNODEP2PADDRESSES=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Shutter": {
      "BootnodeP2PAddresses": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The p2p addresses of the Shutter Keyper network bootnodes.

- #### `Shutter.Enabled` \{#shutter-enabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --shutter-enabled <value>
  --Shutter.Enabled <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SHUTTERCONFIG_ENABLED=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Shutter": {
      "Enabled": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to enable Shutter. Allowed values: `true` `false`. Defaults to `false`.

- #### `Shutter.InstanceID` \{#shutter-instanceid\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --shutter-instanceid <value>
  --Shutter.InstanceID <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SHUTTERCONFIG_INSTANCEID=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Shutter": {
      "InstanceID": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Instance ID of Shutter keyper set. Defaults to `0`.

- #### `Shutter.KeyBroadcastContractAddress` \{#shutter-keybroadcastcontractaddress\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --shutter-keybroadcastcontractaddress <value>
  --Shutter.KeyBroadcastContractAddress <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SHUTTERCONFIG_KEYBROADCASTCONTRACTADDRESS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Shutter": {
      "KeyBroadcastContractAddress": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The address of the Shutter key broadcast contract. Defaults to `null`.

- #### `Shutter.KeyperSetManagerContractAddress` \{#shutter-keypersetmanagercontractaddress\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --shutter-keypersetmanagercontractaddress <value>
  --Shutter.KeyperSetManagerContractAddress <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SHUTTERCONFIG_KEYPERSETMANAGERCONTRACTADDRESS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Shutter": {
      "KeyperSetManagerContractAddress": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The address of the Shutter keyper set manager contract. Defaults to `null`.

- #### `Shutter.P2PPort` \{#shutter-p2pport\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --shutter-p2pport <value>
  --Shutter.P2PPort <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SHUTTERCONFIG_P2PPORT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Shutter": {
      "P2PPort": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The port to connect to Shutter P2P network with. Defaults to `23102`.

- #### `Shutter.SequencerContractAddress` \{#shutter-sequencercontractaddress\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --shutter-sequencercontractaddress <value>
  --Shutter.SequencerContractAddress <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SHUTTERCONFIG_SEQUENCERCONTRACTADDRESS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Shutter": {
      "SequencerContractAddress": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The address of the Shutter sequencer contract. Defaults to `null`.

- #### `Shutter.ShutterKeyFile` \{#shutter-shutterkeyfile\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --shutter-shutterkeyfile <value>
  --Shutter.ShutterKeyFile <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SHUTTERCONFIG_SHUTTERKEYFILE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Shutter": {
      "ShutterKeyFile": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The filename to use for the Shutter P2P key. If this not specified, the key is autogenerated in `shutter.key.plain` file.

- #### `Shutter.ValidatorInfoFile` \{#shutter-validatorinfofile\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --shutter-validatorinfofile <value>
  --Shutter.ValidatorInfoFile <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SHUTTERCONFIG_VALIDATORINFOFILE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Shutter": {
      "ValidatorInfoFile": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The filepath of the validator info json file. Defaults to `null`.

- #### `Shutter.ValidatorRegistryContractAddress` \{#shutter-validatorregistrycontractaddress\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --shutter-validatorregistrycontractaddress <value>
  --Shutter.ValidatorRegistryContractAddress <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SHUTTERCONFIG_VALIDATORREGISTRYCONTRACTADDRESS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Shutter": {
      "ValidatorRegistryContractAddress": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The address of the Shutter validator registry contract. Defaults to `null`.

### Snapshot

- #### `Snapshot.Checksum` \{#snapshot-checksum\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --snapshot-checksum <value>
  --Snapshot.Checksum <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SNAPSHOTCONFIG_CHECKSUM=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Snapshot": {
      "Checksum": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The SHA-256 checksum of the snapshot file. Defaults to `null`.

- #### `Snapshot.DownloadUrl` \{#snapshot-downloadurl\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --snapshot-downloadurl <value>
  --Snapshot.DownloadUrl <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SNAPSHOTCONFIG_DOWNLOADURL=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Snapshot": {
      "DownloadUrl": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The URL of the snapshot file. Defaults to `null`.

- #### `Snapshot.Enabled` \{#snapshot-enabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --snapshot-enabled <value>
  --Snapshot.Enabled <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SNAPSHOTCONFIG_ENABLED=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Snapshot": {
      "Enabled": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to enable the Snapshot plugin. Allowed values: `true` `false`. Defaults to `false`.

- #### `Snapshot.SnapshotDirectory` \{#snapshot-snapshotdirectory\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --snapshot-snapshotdirectory <value>
  --Snapshot.SnapshotDirectory <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SNAPSHOTCONFIG_SNAPSHOTDIRECTORY=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Snapshot": {
      "SnapshotDirectory": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The path to the directory to store the snapshot file. Defaults to `snapshot`.

- #### `Snapshot.SnapshotFileName` \{#snapshot-snapshotfilename\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --snapshot-snapshotfilename <value>
  --Snapshot.SnapshotFileName <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SNAPSHOTCONFIG_SNAPSHOTFILENAME=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Snapshot": {
      "SnapshotFileName": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The name of the snapshot file. Defaults to `snapshot.zip`.

### Sync

- #### `Sync.AncientBodiesBarrier` \{#sync-ancientbodiesbarrier\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --sync-ancientbodiesbarrier <value>
  --Sync.AncientBodiesBarrier <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SYNCCONFIG_ANCIENTBODIESBARRIER=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Sync": {
      "AncientBodiesBarrier": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The earliest body downloaded with fast sync when `DownloadBodiesInFastSync` is set to `true`. The actual value is determined as follows:

  ```
  max{ 1, min{ PivotNumber, AncientBodiesBarrier } }
  ```

  Defaults to `0`.

- #### `Sync.AncientReceiptsBarrier` \{#sync-ancientreceiptsbarrier\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --sync-ancientreceiptsbarrier <value>
  --Sync.AncientReceiptsBarrier <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SYNCCONFIG_ANCIENTRECEIPTSBARRIER=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Sync": {
      "AncientReceiptsBarrier": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The earliest receipt downloaded with fast sync when `DownloadReceiptsInFastSync` is set to `true`. The actual value is determined as follows:

  ```
  max{ 1, min{ PivotNumber, max{ AncientBodiesBarrier, AncientReceiptsBarrier } } }
  ```

  Defaults to `0`.

- #### `Sync.DownloadBodiesInFastSync` \{#sync-downloadbodiesinfastsync\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --sync-downloadbodiesinfastsync <value>
  --Sync.DownloadBodiesInFastSync <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SYNCCONFIG_DOWNLOADBODIESINFASTSYNC=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Sync": {
      "DownloadBodiesInFastSync": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to download the block bodies in the Fast sync mode. Allowed values: `true` `false`. Defaults to `true`.

- #### `Sync.DownloadHeadersInFastSync` \{#sync-downloadheadersinfastsync\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --sync-downloadheadersinfastsync <value>
  --Sync.DownloadHeadersInFastSync <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SYNCCONFIG_DOWNLOADHEADERSINFASTSYNC=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Sync": {
      "DownloadHeadersInFastSync": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to download the old block headers in the Fast sync mode. If `false`, Nethermind downloads only recent blocks headers. Allowed values: `true` `false`. Defaults to `true`.

- #### `Sync.DownloadReceiptsInFastSync` \{#sync-downloadreceiptsinfastsync\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --sync-downloadreceiptsinfastsync <value>
  --Sync.DownloadReceiptsInFastSync <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SYNCCONFIG_DOWNLOADRECEIPTSINFASTSYNC=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Sync": {
      "DownloadReceiptsInFastSync": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to download receipts in the Fast sync mode. This slows down the process by a few hours but allows to interact with dApps that perform extensive historical logs searches. Allowed values: `true` `false`. Defaults to `true`.

- #### `Sync.ExitOnSynced` \{#sync-exitonsynced\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --sync-exitonsynced <value>
  --Sync.ExitOnSynced <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SYNCCONFIG_EXITONSYNCED=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Sync": {
      "ExitOnSynced": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to shut down Nethermind once sync is finished. Allowed values: `true` `false`. Defaults to `false`.

- #### `Sync.ExitOnSyncedWaitTimeSec` \{#sync-exitonsyncedwaittimesec\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --sync-exitonsyncedwaittimesec <value>
  --Sync.ExitOnSyncedWaitTimeSec <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SYNCCONFIG_EXITONSYNCEDWAITTIMESEC=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Sync": {
      "ExitOnSyncedWaitTimeSec": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The time, in seconds, to wait before shutting down Nethermind once sync is finished. Defaults to `60`.

- #### `Sync.FastSync` \{#sync-fastsync\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --sync-fastsync <value>
  --Sync.FastSync <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SYNCCONFIG_FASTSYNC=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Sync": {
      "FastSync": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to use the Fast sync mode (the eth/63 synchronization algorithm). Allowed values: `true` `false`. Defaults to `false`.

- #### `Sync.FastSyncCatchUpHeightDelta` \{#sync-fastsynccatchupheightdelta\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --sync-fastsynccatchupheightdelta <value>
  --Sync.FastSyncCatchUpHeightDelta <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SYNCCONFIG_FASTSYNCCATCHUPHEIGHTDELTA=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Sync": {
      "FastSyncCatchUpHeightDelta": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  In Fast sync mode, the min height threshold limit up to which the Full sync, if already on, stays on when the chain is behind the network head. If the limit is exceeded, it switches back to Fast sync. For regular usage scenarios, setting this value lower than 32 is not recommended as this can cause issues with chain reorgs. Note that the last 2 blocks are always processed in Full sync, so setting it lower than 2 has no effect. Defaults to `8192`.

- #### `Sync.FixReceipts` \{#sync-fixreceipts\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --sync-fixreceipts <value>
  --Sync.FixReceipts <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SYNCCONFIG_FIXRECEIPTS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Sync": {
      "FixReceipts": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to enable receipts validation that checks for receipts that might be missing because of a bug. If needed, receipts are downloaded from the network. If `true`, the pivot number must be same one used originally as it's used as a cut-off point. Allowed values: `true` `false`. Defaults to `false`.

- #### `Sync.FixTotalDifficulty` \{#sync-fixtotaldifficulty\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --sync-fixtotaldifficulty <value>
  --Sync.FixTotalDifficulty <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SYNCCONFIG_FIXTOTALDIFFICULTY=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Sync": {
      "FixTotalDifficulty": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to recalculate the total difficulty from `FixTotalDifficultyStartingBlock` to `FixTotalDifficultyLastBlock`. Allowed values: `true` `false`. Defaults to `false`.

- #### `Sync.FixTotalDifficultyLastBlock` \{#sync-fixtotaldifficultylastblock\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --sync-fixtotaldifficultylastblock <value>
  --Sync.FixTotalDifficultyLastBlock <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SYNCCONFIG_FIXTOTALDIFFICULTYLASTBLOCK=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Sync": {
      "FixTotalDifficultyLastBlock": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The last block to recalculate the total difficulty for. If not specified, the best known block is used.
  Defaults to `null`.

- #### `Sync.FixTotalDifficultyStartingBlock` \{#sync-fixtotaldifficultystartingblock\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --sync-fixtotaldifficultystartingblock <value>
  --Sync.FixTotalDifficultyStartingBlock <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SYNCCONFIG_FIXTOTALDIFFICULTYSTARTINGBLOCK=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Sync": {
      "FixTotalDifficultyStartingBlock": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The first block to recalculate the total difficulty for. Defaults to `1`.

- #### `Sync.MaxAttemptsToUpdatePivot` \{#sync-maxattemptstoupdatepivot\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --sync-maxattemptstoupdatepivot <value>
  --Sync.MaxAttemptsToUpdatePivot <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SYNCCONFIG_MAXATTEMPTSTOUPDATEPIVOT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Sync": {
      "MaxAttemptsToUpdatePivot": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The max number of attempts to update the pivot block based on the FCU message from the consensus client. Defaults to `2147483647`.

- #### `Sync.MaxProcessingThreads` \{#sync-maxprocessingthreads\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --sync-maxprocessingthreads <value>
  --Sync.MaxProcessingThreads <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SYNCCONFIG_MAXPROCESSINGTHREADS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Sync": {
      "MaxProcessingThreads": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The max number of threads used for syncing. `0` to use the number of logical processors. Defaults to `0`.

- #### `Sync.NetworkingEnabled` \{#sync-networkingenabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --sync-networkingenabled <value>
  --Sync.NetworkingEnabled <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SYNCCONFIG_NETWORKINGENABLED=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Sync": {
      "NetworkingEnabled": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to connect to peers and sync. Allowed values: `true` `false`. Defaults to `true`.

- #### `Sync.NonValidatorNode` \{#sync-nonvalidatornode\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --sync-nonvalidatornode <value>
  --Sync.NonValidatorNode <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SYNCCONFIG_NONVALIDATORNODE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Sync": {
      "NonValidatorNode": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to operate as a non-validator. If `true`, the `DownloadReceiptsInFastSync` and `DownloadBodiesInFastSync` can be set to `false`. Allowed values: `true` `false`. Defaults to `false`.

- #### `Sync.PivotHash` \{#sync-pivothash\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --sync-pivothash <value>
  --Sync.PivotHash <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SYNCCONFIG_PIVOTHASH=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Sync": {
      "PivotHash": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The hash of the pivot block for the Fast sync mode. Defaults to `null`.

- #### `Sync.PivotNumber` \{#sync-pivotnumber\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --sync-pivotnumber <value>
  --Sync.PivotNumber <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SYNCCONFIG_PIVOTNUMBER=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Sync": {
      "PivotNumber": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The number of the pivot block for the Fast sync mode. Defaults to `0`.

- #### `Sync.PivotTotalDifficulty` \{#sync-pivottotaldifficulty\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --sync-pivottotaldifficulty <value>
  --Sync.PivotTotalDifficulty <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SYNCCONFIG_PIVOTTOTALDIFFICULTY=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Sync": {
      "PivotTotalDifficulty": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The total difficulty of the pivot block for the Fast sync mode. Defaults to `null`.

- #### `Sync.SnapSync` \{#sync-snapsync\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --sync-snapsync <value>
  --Sync.SnapSync <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SYNCCONFIG_SNAPSYNC=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Sync": {
      "SnapSync": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to use the Snap sync mode. Allowed values: `true` `false`. Defaults to `false`.

- #### `Sync.SnapSyncAccountRangePartitionCount` \{#sync-snapsyncaccountrangepartitioncount\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --sync-snapsyncaccountrangepartitioncount <value>
  --Sync.SnapSyncAccountRangePartitionCount <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SYNCCONFIG_SNAPSYNCACCOUNTRANGEPARTITIONCOUNT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Sync": {
      "SnapSyncAccountRangePartitionCount": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The number of account range partitions to create. Increases the Snap sync request concurrency. Allowed values are between between 1 and 256. Defaults to `8`.

- #### `Sync.StrictMode` \{#sync-strictmode\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --sync-strictmode <value>
  --Sync.StrictMode <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SYNCCONFIG_STRICTMODE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Sync": {
      "StrictMode": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to disable some optimizations and do a more extensive sync. Useful when sync state is corrupted. Allowed values: `true` `false`. Defaults to `false`.

- #### `Sync.SynchronizationEnabled` \{#sync-synchronizationenabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --sync-synchronizationenabled <value>
  --Sync.SynchronizationEnabled <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SYNCCONFIG_SYNCHRONIZATIONENABLED=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Sync": {
      "SynchronizationEnabled": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to download and process new blocks. Allowed values: `true` `false`. Defaults to `true`.

- #### `Sync.UseGethLimitsInFastBlocks` \{#sync-usegethlimitsinfastblocks\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --sync-usegethlimitsinfastblocks <value>
  --Sync.UseGethLimitsInFastBlocks <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SYNCCONFIG_USEGETHLIMITSINFASTBLOCKS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Sync": {
      "UseGethLimitsInFastBlocks": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to make smaller requests, in Fast Blocks mode, to avoid Geth from disconnecting. On the Geth-heavy networks (e.g., Mainnet), it's a desired behavior while on Nethermind- or OpenEthereum-heavy networks (Aura), it slows down the sync by a factor of ~4. Allowed values: `true` `false`. Defaults to `true`.

### TraceStore

- #### `TraceStore.BlocksToKeep` \{#tracestore-blockstokeep\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --tracestore-blockstokeep <value>
  --TraceStore.BlocksToKeep <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TRACESTORECONFIG_BLOCKSTOKEEP=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TraceStore": {
      "BlocksToKeep": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The number of blocks to store, counting from the head. If `0`, all traces of the processed blocks are stored. Defaults to `10000`.

- #### `TraceStore.DeserializationParallelization` \{#tracestore-deserializationparallelization\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --tracestore-deserializationparallelization <value>
  --TraceStore.DeserializationParallelization <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TRACESTORECONFIG_DESERIALIZATIONPARALLELIZATION=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TraceStore": {
      "DeserializationParallelization": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The max parallelization when deserialization requests the `trace_filter` method. `0` to use the number of logical processors. If you experience a resource shortage, set to a low number. Defaults to `0`.

- #### `TraceStore.Enabled` \{#tracestore-enabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --tracestore-enabled <value>
  --TraceStore.Enabled <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TRACESTORECONFIG_ENABLED=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TraceStore": {
      "Enabled": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to enable the TraceStore plugin. If enabled, traces come from the database whenever possible. Allowed values: `true` `false`. Defaults to `false`.

- #### `TraceStore.TraceTypes` \{#tracestore-tracetypes\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --tracestore-tracetypes <value>
  --TraceStore.TraceTypes <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TRACESTORECONFIG_TRACETYPES=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TraceStore": {
      "TraceTypes": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The type of traces to store.

  Allowed values:

  - `None`: None.
  - `VmTrace`: Provides a full trace of the EVM state throughout the execution of transactions at each op-code, including subcalls.
  - `StateDiff`: Provides Ethereum state difference detailing all altered portions of the state made due to the execution of transactions.
  - `Trace`: Provides transaction trace, including subcalls.
  - `Rewards`: Includes block rewards in the trace when tracing full blocks.
  - `All`: Combines the `Rewards` `StateDiff` `Trace` `VmTrace` options.

  Defaults to `Trace, Rewards`.

### TxPool

- #### `TxPool.BlobCacheSize` \{#txpool-blobcachesize\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --txpool-blobcachesize <value>
  --TxPool.BlobCacheSize <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TXPOOLCONFIG_BLOBCACHESIZE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TxPool": {
      "BlobCacheSize": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The max number of full blob transactions cached in memory. The default value uses max 200MB for 6 blobs where one blob is 33MB (256 \* 128KB) Defaults to `256`.

- #### `TxPool.BlobsSupport` \{#txpool-blobssupport\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --txpool-blobssupport <value>
  --TxPool.BlobsSupport <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TXPOOLCONFIG_BLOBSSUPPORT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TxPool": {
      "BlobsSupport": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The blobs support mode.

  Allowed values:

  - `Disabled`: Disables support for blob transactions.
  - `InMemory`: Stores the blob transactions in memory only.
  - `Storage`: Stores the blob transactions in the permanent storage.
  - `StorageWithReorgs`: Stores the blob transactions in the permanent storage with support for restoring reorganized transactions to the blob pool.

  Defaults to `StorageWithReorgs`.

- #### `TxPool.GasLimit` \{#txpool-gaslimit\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --txpool-gaslimit <value>
  --TxPool.GasLimit <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TXPOOLCONFIG_GASLIMIT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TxPool": {
      "GasLimit": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The max transaction gas allowed. Defaults to `null`.

- #### `TxPool.HashCacheSize` \{#txpool-hashcachesize\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --txpool-hashcachesize <value>
  --TxPool.HashCacheSize <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TXPOOLCONFIG_HASHCACHESIZE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TxPool": {
      "HashCacheSize": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The max number of cached hashes of already known transactions. Set automatically by the memory hint. Defaults to `524288`.

- #### `TxPool.InMemoryBlobPoolSize` \{#txpool-inmemoryblobpoolsize\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --txpool-inmemoryblobpoolsize <value>
  --TxPool.InMemoryBlobPoolSize <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TXPOOLCONFIG_INMEMORYBLOBPOOLSIZE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TxPool": {
      "InMemoryBlobPoolSize": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The max number of full blob transactions stored in memory. Used only if persistent storage is disabled. Defaults to `512`.

- #### `TxPool.MaxPendingBlobTxsPerSender` \{#txpool-maxpendingblobtxspersender\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --txpool-maxpendingblobtxspersender <value>
  --TxPool.MaxPendingBlobTxsPerSender <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TXPOOLCONFIG_MAXPENDINGBLOBTXSPERSENDER=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TxPool": {
      "MaxPendingBlobTxsPerSender": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The max number of pending blob transactions per single sender. `0` to lift the limit. Defaults to `16`.

- #### `TxPool.MaxPendingTxsPerSender` \{#txpool-maxpendingtxspersender\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --txpool-maxpendingtxspersender <value>
  --TxPool.MaxPendingTxsPerSender <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TXPOOLCONFIG_MAXPENDINGTXSPERSENDER=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TxPool": {
      "MaxPendingTxsPerSender": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The max number of pending transactions per single sender. `0` to lift the limit. Defaults to `0`.

- #### `TxPool.MinBaseFeeThreshold` \{#txpool-minbasefeethreshold\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --txpool-minbasefeethreshold <value>
  --TxPool.MinBaseFeeThreshold <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TXPOOLCONFIG_MINBASEFEETHRESHOLD=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TxPool": {
      "MinBaseFeeThreshold": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The minimal percentage of the current base fee that must be surpassed by the max fee (`max_fee_per_gas`) for the transaction to be broadcasted. Defaults to `70`.

- #### `TxPool.PeerNotificationThreshold` \{#txpool-peernotificationthreshold\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --txpool-peernotificationthreshold <value>
  --TxPool.PeerNotificationThreshold <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TXPOOLCONFIG_PEERNOTIFICATIONTHRESHOLD=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TxPool": {
      "PeerNotificationThreshold": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The average percentage of transaction hashes from persistent broadcast sent to a peer together with hashes of the last added transactions. Defaults to `5`.

- #### `TxPool.PersistentBlobStorageSize` \{#txpool-persistentblobstoragesize\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --txpool-persistentblobstoragesize <value>
  --TxPool.PersistentBlobStorageSize <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TXPOOLCONFIG_PERSISTENTBLOBSTORAGESIZE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TxPool": {
      "PersistentBlobStorageSize": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The max number of full blob transactions stored in the database (increasing the number of transactions in the blob pool also results in higher memory usage). The default value uses max 13GB for 6 blobs where one blob is 2GB (16386 \* 128KB). Defaults to `16384`.

- #### `TxPool.ReportMinutes` \{#txpool-reportminutes\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --txpool-reportminutes <value>
  --TxPool.ReportMinutes <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TXPOOLCONFIG_REPORTMINUTES=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TxPool": {
      "ReportMinutes": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The current transaction pool state reporting interval, in minutes. Defaults to `null`.

- #### `TxPool.Size` \{#txpool-size\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --txpool-size <value>
  --TxPool.Size <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TXPOOLCONFIG_SIZE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TxPool": {
      "Size": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The max number of transactions held in the mempool (the more transactions in the mempool, the more memory used). Defaults to `2048`.

### Wallet

- #### `Wallet.DevAccounts` \{#wallet-devaccounts\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --wallet-devaccounts <value>
  --Wallet.DevAccounts <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_WALLETCONFIG_DEVACCOUNTS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Wallet": {
      "DevAccounts": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The number of autogenerated developer accounts to work with. Developer accounts have private keys from `00...01` to `00...n`. Defaults to `10`.

<!--[end autogen]-->

## Environment variables

All configuration options have their environment variable counterparts, so Nethermind can be configured with environment variables the same way as with command line options. The environment variables follow this naming convention:

```text
NETHERMIND_{NAMESPACE}CONFIG_{OPTION}
```

For instance, the environment variable equivalent of the `JsonRpc.JwtSecretFile` option is `NETHERMIND_JSONRPCCONFIG_JWTSECRETFILE`. For the full list of the available environment variables, see [Options by namespaces](#options-by-namespaces).

## Configuration file

The configuration files use JSON format. The bundled configuration files are located in the `configs` directory and named after the network they are used for. For instance, see the Mainnet configuration file [`mainnet.json`](https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Runner/configs/mainnet.json).

[web3-secret-storage]: https://ethereum.org/en/developers/docs/data-structures-and-encoding/web3-secret-storage
