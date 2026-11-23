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
  - `chiado` `chiado_archive`
  - `energyweb` `energyweb_archive`
  - `gnosis` `gnosis_archive`
  - `hoodi` `hoodi_archive`
  - `linea-mainnet` `linea-mainnet_archive`
  - `linea-sepolia` `linea-sepolia_archive`
  - `mainnet` `mainnet_archive`
  - `op-mainnet` `op-mainnet_archive`
  - `op-sepolia` `op-sepolia_archive`
  - `sepolia` `sepolia_archive`
  - `taiko-alethia`
  - `taiko-hekla`
  - `volta` `volta_archive`
  - `worldchain-mainnet` `worldchain-mainnet_archive`
  - `worldchain-sepolia` `worldchain-sepolia_archive`

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

- #### `--force-resync` \{#force-resync\}

  Deletes all database files except peer and discovery data, forcing a full resync on startup.

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

- #### `--purge-db` \{#purge-db\}

  Deletes the entire database directory, including peer and discovery data.

- #### `--version` \{#version\}

  Shows the Nethermind version information.

## Options by namespaces

<!--[start autogen]-->

### Aura

- #### `Aura.AllowAuRaPrivateChains` \{#aura-allowauraprivatechains\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --aura-allowauraprivatechains [true|false]
  --Aura.AllowAuRaPrivateChains [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_AURACONFIG_ALLOWAURAPRIVATECHAINS=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Aura": {
      "AllowAuRaPrivateChains": true|false
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
  --aura-forcesealing [true|false]
  --Aura.ForceSealing [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_AURACONFIG_FORCESEALING=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Aura": {
      "ForceSealing": true|false
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
  --aura-minimum2mlngasperblockwhenusingblockgaslimitcontract [true|false]
  --Aura.Minimum2MlnGasPerBlockWhenUsingBlockGasLimitContract [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_AURACONFIG_MINIMUM2MLNGASPERBLOCKWHENUSINGBLOCKGASLIMITCONTRACT=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Aura": {
      "Minimum2MlnGasPerBlockWhenUsingBlockGasLimitContract": true|false
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

### BalRecorder

- #### `BalRecorder.Path` \{#balrecorder-path\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --balrecorder-path <value>
  --BalRecorder.Path <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BALRECORDERCONFIG_PATH=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "BalRecorder": {
      "Path": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Directory (relative to BaseDbPath) used to store recorded block access list era files. Defaults to `recordedBal`.

- #### `BalRecorder.RecordingEnabled` \{#balrecorder-recordingenabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --balrecorder-recordingenabled [true|false]
  --BalRecorder.RecordingEnabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BALRECORDERCONFIG_RECORDINGENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "BalRecorder": {
      "RecordingEnabled": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to record block access lists to disk after block processing. Allowed values: `true` `false`. Defaults to `false`.

- #### `BalRecorder.ReplayEnabled` \{#balrecorder-replayenabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --balrecorder-replayenabled [true|false]
  --BalRecorder.ReplayEnabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BALRECORDERCONFIG_REPLAYENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "BalRecorder": {
      "ReplayEnabled": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to replay recorded block access lists during block processing. Allowed values: `true` `false`. Defaults to `false`.

### BeaconApi

- #### `BeaconApi.Enabled` \{#beaconapi-enabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --beaconapi-enabled [true|false]
  --BeaconApi.Enabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BEACONAPICONFIG_ENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "BeaconApi": {
      "Enabled": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to serve the Beacon API (REST/SSE) surface. Requires BeaconChain.Enabled. Allowed values: `true` `false`. Defaults to `false`.

- #### `BeaconApi.Host` \{#beaconapi-host\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --beaconapi-host <value>
  --BeaconApi.Host <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BEACONAPICONFIG_HOST=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "BeaconApi": {
      "Host": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The host the Beacon API Kestrel listener binds to. Loopback listeners accept only loopback IP or localhost Host headers and same-origin browser requests. Defaults to `"127.0.0.1"`.

- #### `BeaconApi.MaxConcurrentStateRequests` \{#beaconapi-maxconcurrentstaterequests\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --beaconapi-maxconcurrentstaterequests <value>
  --BeaconApi.MaxConcurrentStateRequests <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BEACONAPICONFIG_MAXCONCURRENTSTATEREQUESTS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "BeaconApi": {
      "MaxConcurrentStateRequests": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The maximum concurrent Beacon API state requests in each of three independent pools: block/envelope/blob and debug/fork_choice responses, state downloads (/eth/v2/debug/beacon/states and the registry-sized /eth/v1/beacon/states routes validators, validator_balances, validator_identities, committees and sync_committees, plus non-head validators/\{validator_id}, pending_deposits, pending_partial_withdrawals, pending_consolidations and proposer_lookahead) and other /eth/v1/beacon/states queries, which exclude root and fork. Each pool refuses excess requests with 503 without queuing; per-client limits return 429. Defaults to `2`.

- #### `BeaconApi.MaxConcurrentStateRequestsPerClient` \{#beaconapi-maxconcurrentstaterequestsperclient\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --beaconapi-maxconcurrentstaterequestsperclient <value>
  --BeaconApi.MaxConcurrentStateRequestsPerClient <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BEACONAPICONFIG_MAXCONCURRENTSTATEREQUESTSPERCLIENT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "BeaconApi": {
      "MaxConcurrentStateRequestsPerClient": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The maximum number of requests in each independent pool (as counted by `MaxConcurrentStateRequests`) one client address may have in flight at once; an IPv6 client is counted by its /64 prefix, and loopback is limited like any other address. Raise it for tooling or a proxy that fronts several clients from one address. Requests beyond it are refused with 429. Must be at least 1. Defaults to `1`.

- #### `BeaconApi.Port` \{#beaconapi-port\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --beaconapi-port <value>
  --BeaconApi.Port <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BEACONAPICONFIG_PORT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "BeaconApi": {
      "Port": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The port the Beacon API listens on. Defaults to `5052`.

- #### `BeaconApi.StateDownloadsPerMinutePerClient` \{#beaconapi-statedownloadsperminuteperclient\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --beaconapi-statedownloadsperminuteperclient <value>
  --BeaconApi.StateDownloadsPerMinutePerClient <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BEACONAPICONFIG_STATEDOWNLOADSPERMINUTEPERCLIENT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "BeaconApi": {
      "StateDownloadsPerMinutePerClient": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The maximum number of downloads (as counted by `MaxConcurrentStateRequests`) per minute from one client address (an IPv6 client is counted by its /64 prefix). Requests beyond it are refused with 429. `0` disables the limit. Defaults to `30`.

- #### `BeaconApi.StateQueriesPerMinutePerClient` \{#beaconapi-statequeriesperminuteperclient\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --beaconapi-statequeriesperminuteperclient <value>
  --BeaconApi.StateQueriesPerMinutePerClient <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BEACONAPICONFIG_STATEQUERIESPERMINUTEPERCLIENT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "BeaconApi": {
      "StateQueriesPerMinutePerClient": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The maximum number of /eth/v1/beacon/states queries other than downloads, root and fork (as counted by `MaxConcurrentStateRequests`) per minute from one client address (an IPv6 client is counted by its /64 prefix). Requests beyond it are refused with 429. `0` disables the limit. Defaults to `600`.

- #### `BeaconApi.StateResponseIdleTimeoutSeconds` \{#beaconapi-stateresponseidletimeoutseconds\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --beaconapi-stateresponseidletimeoutseconds <value>
  --BeaconApi.StateResponseIdleTimeoutSeconds <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BEACONAPICONFIG_STATERESPONSEIDLETIMEOUTSECONDS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "BeaconApi": {
      "StateResponseIdleTimeoutSeconds": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The maximum idle time in seconds between response writes. POST requests are also bounded from admission through their first write. GET preparation is bounded by StateResponseTimeoutSeconds. HTTP/1.x responses additionally require 64 KiB/s after a ten-second grace period. Expiry aborts the request and releases its permits. Must be between 1 and 4294967 and large enough for one 64 KiB chunk at the total timeout's minimum throughput. Defaults to `120`.

- #### `BeaconApi.StateResponseTimeoutSeconds` \{#beaconapi-stateresponsetimeoutseconds\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --beaconapi-stateresponsetimeoutseconds <value>
  --BeaconApi.StateResponseTimeoutSeconds <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BEACONAPICONFIG_STATERESPONSETIMEOUTSECONDS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "BeaconApi": {
      "StateResponseTimeoutSeconds": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The most time, in seconds, one limited request may take in total, however steadily its response is written. When it passes, the response is aborted and the request's permits are released. Set it generously: a slow but steady download of a large state must finish inside it. Must be between 1 and 4294967. Defaults to `3600`.

### BeaconChain

- #### `BeaconChain.Bootnodes` \{#beaconchain-bootnodes\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --beaconchain-bootnodes <value>
  --BeaconChain.Bootnodes <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BEACONCHAINCONFIG_BOOTNODES=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "BeaconChain": {
      "Bootnodes": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Comma-separated beacon chain bootnode ENRs. When empty, the built-in bootnodes of the network selected via the execution layer's chain id are used. Defaults to `null`.

- #### `BeaconChain.CheckpointStateFile` \{#beaconchain-checkpointstatefile\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --beaconchain-checkpointstatefile <value>
  --BeaconChain.CheckpointStateFile <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BEACONCHAINCONFIG_CHECKPOINTSTATEFILE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "BeaconChain": {
      "CheckpointStateFile": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  A local SSZ-encoded beacon state file to bootstrap from. Requires a sibling block file with the extension replaced by .block.ssz. For a state advanced beyond its block, also requires the block's post-state in a sibling file with the extension replaced by .post-state.ssz. Defaults to `null`.

- #### `BeaconChain.CheckpointSyncUrl` \{#beaconchain-checkpointsyncurl\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --beaconchain-checkpointsyncurl <value>
  --BeaconChain.CheckpointSyncUrl <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BEACONCHAINCONFIG_CHECKPOINTSYNCURL=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "BeaconChain": {
      "CheckpointSyncUrl": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The beacon API URL to checkpoint-sync the finalized beacon state and block from. When unset, defaults to a provider for the network selected via the execution layer's chain id. Defaults to `null`.

- #### `BeaconChain.CustodyGroupCount` \{#beaconchain-custodygroupcount\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --beaconchain-custodygroupcount <value>
  --BeaconChain.CustodyGroupCount <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BEACONCHAINCONFIG_CUSTODYGROUPCOUNT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "BeaconChain": {
      "CustodyGroupCount": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Number of PeerDAS custody groups, from 4 to 128. Use at least 64 to reconstruct blobs for the Beacon API, or 128 to serve all columns. Default: 4 groups. Defaults to `4`.

- #### `BeaconChain.DisableOnExternalCl` \{#beaconchain-disableonexternalcl\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --beaconchain-disableonexternalcl [true|false]
  --BeaconChain.DisableOnExternalCl [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BEACONCHAINCONFIG_DISABLEONEXTERNALCL=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "BeaconChain": {
      "DisableOnExternalCl": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  A successful external engine progression call disables the embedded driver until process restart, including a transient caller. Whether to permanently disable the embedded driver when an external consensus client calls the engine API. Allowed values: `true` `false`. Defaults to `true`.

- #### `BeaconChain.Discv5Port` \{#beaconchain-discv5port\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --beaconchain-discv5port <value>
  --BeaconChain.Discv5Port <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BEACONCHAINCONFIG_DISCV5PORT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "BeaconChain": {
      "Discv5Port": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The UDP port for the beacon chain discv5 discovery. Defaults to `9060`.

- #### `BeaconChain.EnableFastConfirmation` \{#beaconchain-enablefastconfirmation\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --beaconchain-enablefastconfirmation [true|false]
  --BeaconChain.EnableFastConfirmation [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BEACONCHAINCONFIG_ENABLEFASTCONFIRMATION=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "BeaconChain": {
      "EnableFastConfirmation": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Use the Fast Confirmation Rule for the execution layer's safe block tag, as required by consensus-specs v1.7.0-beta.4. Assumes slot synchrony and at most 25% Byzantine stake; falls back to finalized when confirmation conditions fail. Enabled by default; when disabled, safe follows the justified checkpoint. Does not change finalized. Allowed values: `true` `false`. Defaults to `true`.

- #### `BeaconChain.Enabled` \{#beaconchain-enabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --beaconchain-enabled [true|false]
  --BeaconChain.Enabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BEACONCHAINCONFIG_ENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "BeaconChain": {
      "Enabled": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to enable the embedded beacon chain consensus driver. Supports Mainnet, Sepolia, Hoodi, Gnosis and Chiado, selected by the execution layer's configured network, without an external consensus client. Allowed values: `true` `false`. Defaults to `false`.

- #### `BeaconChain.FaultDisconnectsBeforeBan` \{#beaconchain-faultdisconnectsbeforeban\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --beaconchain-faultdisconnectsbeforeban <value>
  --BeaconChain.FaultDisconnectsBeforeBan <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BEACONCHAINCONFIG_FAULTDISCONNECTSBEFOREBAN=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "BeaconChain": {
      "FaultDisconnectsBeforeBan": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Recent fault disconnects from the same peer id before it is added to the in-memory ban list, which then refuses every further dial or reconnection attempt for that id regardless of the address it is next seen at. Defaults to `3`.

- #### `BeaconChain.GloasForkVersion` \{#beaconchain-gloasforkversion\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --beaconchain-gloasforkversion <value>
  --BeaconChain.GloasForkVersion <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BEACONCHAINCONFIG_GLOASFORKVERSION=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "BeaconChain": {
      "GloasForkVersion": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The Gloas fork version, as 4 bytes of hex (for example 0x90000076), for a network whose chainspec schedules Amsterdam before this release knows its published Gloas version. The Gloas epoch always follows the Amsterdam timestamp of the chainspec (see Init.ChainSpecPath). Must differ from every earlier fork version of the network. When unset, the published version is used. Defaults to `null`.

- #### `BeaconChain.GossipMaxPendingValidationBytes` \{#beaconchain-gossipmaxpendingvalidationbytes\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --beaconchain-gossipmaxpendingvalidationbytes <value>
  --BeaconChain.GossipMaxPendingValidationBytes <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BEACONCHAINCONFIG_GOSSIPMAXPENDINGVALIDATIONBYTES=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "BeaconChain": {
      "GossipMaxPendingValidationBytes": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The most bytes of gossip messages that may await a validation verdict at once, the messages of one received RPC aside. A message received past it is not validated, forwarded or charged to its sender. Must be at least 1. Defaults to `16777216`.

- #### `BeaconChain.GossipMaxPendingValidations` \{#beaconchain-gossipmaxpendingvalidations\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --beaconchain-gossipmaxpendingvalidations <value>
  --BeaconChain.GossipMaxPendingValidations <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BEACONCHAINCONFIG_GOSSIPMAXPENDINGVALIDATIONS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "BeaconChain": {
      "GossipMaxPendingValidations": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The most gossip messages that may await a validation verdict at once. A message received past it is not validated, forwarded or charged to its sender, so a later copy can still be. Must be at least 1. Defaults to `128`.

- #### `BeaconChain.MaxConcurrentOutboundDials` \{#beaconchain-maxconcurrentoutbounddials\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --beaconchain-maxconcurrentoutbounddials <value>
  --BeaconChain.MaxConcurrentOutboundDials <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BEACONCHAINCONFIG_MAXCONCURRENTOUTBOUNDDIALS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "BeaconChain": {
      "MaxConcurrentOutboundDials": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The max number of outbound dials the peer manager will have in flight at once, static and discovered peers combined. Defaults to `8`.

- #### `BeaconChain.MaxPeerCount` \{#beaconchain-maxpeercount\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --beaconchain-maxpeercount <value>
  --BeaconChain.MaxPeerCount <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BEACONCHAINCONFIG_MAXPEERCOUNT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "BeaconChain": {
      "MaxPeerCount": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The high watermark. Above this many connected peers, the peer manager trims the worst peers back down to this many. Defaults to `80`.

- #### `BeaconChain.MinPeerCount` \{#beaconchain-minpeercount\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --beaconchain-minpeercount <value>
  --BeaconChain.MinPeerCount <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BEACONCHAINCONFIG_MINPEERCOUNT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "BeaconChain": {
      "MinPeerCount": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The low watermark: below this many connected peers the node is under-peered, and the peer manager runs its maintenance round (static-peer reconnect, health checks) on a shorter cadence. Candidate discovery pacing is still BeaconDiscovery's own concern, not this config's. Defaults to `20`.

- #### `BeaconChain.P2PPort` \{#beaconchain-p2pport\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --beaconchain-p2pport <value>
  --BeaconChain.P2PPort <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BEACONCHAINCONFIG_P2PPORT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "BeaconChain": {
      "P2PPort": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The TCP port for the beacon chain libp2p host. Defaults to `9060`.

- #### `BeaconChain.PeerBanMinutes` \{#beaconchain-peerbanminutes\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --beaconchain-peerbanminutes <value>
  --BeaconChain.PeerBanMinutes <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BEACONCHAINCONFIG_PEERBANMINUTES=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "BeaconChain": {
      "PeerBanMinutes": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  How long, in minutes, a banned peer id is refused before it may connect again. Fault history expires after this duration without another fault. Defaults to `30`.

- #### `BeaconChain.StaticPeers` \{#beaconchain-staticpeers\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --beaconchain-staticpeers <value>
  --BeaconChain.StaticPeers <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BEACONCHAINCONFIG_STATICPEERS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "BeaconChain": {
      "StaticPeers": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Comma-separated static beacon chain peer multiaddrs to keep persistent connections to. Each multiaddr must name an /ip4 or /ip6 address, or a /dns, /dns4 or /dns6 TCP endpoint, and include the /p2p/\<peer-id> component. Defaults to `null`.

- #### `BeaconChain.TargetPeerCount` \{#beaconchain-targetpeercount\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --beaconchain-targetpeercount <value>
  --BeaconChain.TargetPeerCount <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BEACONCHAINCONFIG_TARGETPEERCOUNT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "BeaconChain": {
      "TargetPeerCount": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The target number of beacon chain peers. Defaults to `50`.

- #### `BeaconChain.WeakSubjectivityCheckpoint` \{#beaconchain-weaksubjectivitycheckpoint\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --beaconchain-weaksubjectivitycheckpoint <value>
  --BeaconChain.WeakSubjectivityCheckpoint <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BEACONCHAINCONFIG_WEAKSUBJECTIVITYCHECKPOINT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "BeaconChain": {
      "WeakSubjectivityCheckpoint": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  An independently trusted weak subjectivity checkpoint as block_root:epoch_number, for example 0x8584188b86a9296932785cc2827b925f9deebacce6d72ad8d53171fa046b43d9:9544. Checkpoint sync fails unless its anchor block is this checkpoint's block at the start of the epoch, so supply the checkpoint's state with CheckpointStateFile or a source serving it as finalized; a proven checkpoint stays accepted for the same database, and any other fails startup. When unset, checkpoint sync trusts the configured checkpoint source, or the default provider for the network when CheckpointSyncUrl is also unset. Defaults to `null`.

### Blocks

- #### `Blocks.BlockProcessingTimeoutMs` \{#blocks-blockprocessingtimeoutms\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --blocks-blockprocessingtimeoutms <value>
  --Blocks.BlockProcessingTimeoutMs <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BLOCKSCONFIG_BLOCKPROCESSINGTIMEOUTMS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Blocks": {
      "BlockProcessingTimeoutMs": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The longest a single block may take to process, in milliseconds. It is checked between transactions and as the next block starts, so a single long transaction or the final commit can run past it. A block that runs out of time is abandoned without being marked invalid, and each retry of it gets twice the time, up to 16 times this value. `0` or a negative value disables it. Defaults to `180000`.

- #### `Blocks.BlockProductionBlobLimit` \{#blocks-blockproductionbloblimit\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --blocks-blockproductionbloblimit <value>
  --Blocks.BlockProductionBlobLimit <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BLOCKSCONFIG_BLOCKPRODUCTIONBLOBLIMIT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Blocks": {
      "BlockProductionBlobLimit": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The max blob count after which the block producer should stop adding blobs. Minimum value is `0`. Defaults to `null`.

- #### `Blocks.BlockProductionMaxTxKilobytes` \{#blocks-blockproductionmaxtxkilobytes\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --blocks-blockproductionmaxtxkilobytes <value>
  --Blocks.BlockProductionMaxTxKilobytes <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BLOCKSCONFIG_BLOCKPRODUCTIONMAXTXKILOBYTES=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Blocks": {
      "BlockProductionMaxTxKilobytes": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The max transaction bytes to add in block production, in kilobytes. Defaults to `7936`.

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

- #### `Blocks.ParallelExecution` \{#blocks-parallelexecution\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --blocks-parallelexecution [true|false]
  --Blocks.ParallelExecution [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BLOCKSCONFIG_PARALLELEXECUTION=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Blocks": {
      "ParallelExecution": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Parallelize transaction execution when Block Level Access Lists are available. Experimental Amsterdam/BAL path; disabling falls back to sequential execution and the option is ignored for blocks without BAL bodies. Allowed values: `true` `false`. Defaults to `true`.

- #### `Blocks.ParallelExecutionBatchRead` \{#blocks-parallelexecutionbatchread\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --blocks-parallelexecutionbatchread [true|false]
  --Blocks.ParallelExecutionBatchRead [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BLOCKSCONFIG_PARALLELEXECUTIONBATCHREAD=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Blocks": {
      "ParallelExecutionBatchRead": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Use parallel state reads when Block Level Access Lists are available. Experimental Amsterdam/BAL path; disabling falls back to sequential reads and the option is ignored for blocks without BAL bodies. Allowed values: `true` `false`. Defaults to `true`.

- #### `Blocks.PreWarming` \{#blocks-prewarming\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --blocks-prewarming <value>
  --Blocks.PreWarming <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BLOCKSCONFIG_PREWARMING=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Blocks": {
      "PreWarming": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  State pre-warming level while processing blocks: `None`, `Block` (warm the block's own transactions), or `BlockAndMempool` (also speculatively warm from the mempool between blocks).

  Allowed values:
  - `None`
  - `Block`
  - `BlockAndMempool`

  Defaults to `BlockAndMempool`.

- #### `Blocks.RandomizedBlocks` \{#blocks-randomizedblocks\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --blocks-randomizedblocks [true|false]
  --Blocks.RandomizedBlocks [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BLOCKSCONFIG_RANDOMIZEDBLOCKS=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Blocks": {
      "RandomizedBlocks": true|false
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

- #### `Blocks.SlowBlockPerTxThresholdMs` \{#blocks-slowblockpertxthresholdms\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --blocks-slowblockpertxthresholdms <value>
  --Blocks.SlowBlockPerTxThresholdMs <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BLOCKSCONFIG_SLOWBLOCKPERTXTHRESHOLDMS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Blocks": {
      "SlowBlockPerTxThresholdMs": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The per-transaction threshold in milliseconds for detailed transaction-level logging within slow blocks. Transactions slower than this value are included individually in the slow block JSON log. Set to `0` to log all transactions. Set to `-1` to disable per-transaction logging. Defaults to `-1`.

- #### `Blocks.SlowBlockThresholdMs` \{#blocks-slowblockthresholdms\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --blocks-slowblockthresholdms <value>
  --Blocks.SlowBlockThresholdMs <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_BLOCKSCONFIG_SLOWBLOCKTHRESHOLDMS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Blocks": {
      "SlowBlockThresholdMs": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The threshold in milliseconds for logging slow block diagnostics. Blocks processed slower than this value are logged with detailed JSON metrics. Set to `0` to log all blocks. Set to `-1` to disable slow block logging entirely. Defaults to `-1`.

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
  --censorshipdetector-enabled [true|false]
  --CensorshipDetector.Enabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_CENSORSHIPDETECTORCONFIG_ENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "CensorshipDetector": {
      "Enabled": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to enable censorship detection. Allowed values: `true` `false`. Defaults to `false`.

### Clique

### Era

- #### `Era.ExportDirectory` \{#era-exportdirectory\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --era-exportdirectory <value>
  --Era.ExportDirectory <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_ERACONFIG_EXPORTDIRECTORY=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Era": {
      "ExportDirectory": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Directory of archive export. Defaults to `null`.

- #### `Era.From` \{#era-from\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --era-from <value>
  --Era.From <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_ERACONFIG_FROM=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Era": {
      "From": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Block number to import/export from. Defaults to `0`.

- #### `Era.ImportDirectory` \{#era-importdirectory\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --era-importdirectory <value>
  --Era.ImportDirectory <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_ERACONFIG_IMPORTDIRECTORY=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Era": {
      "ImportDirectory": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Directory of era1 archives to be imported. Defaults to `null`.

- #### `Era.To` \{#era-to\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --era-to <value>
  --Era.To <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_ERACONFIG_TO=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Era": {
      "To": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Block number to import/export to. Defaults to `0`.

- #### `Era.TrustedAccumulatorFile` \{#era-trustedaccumulatorfile\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --era-trustedaccumulatorfile <value>
  --Era.TrustedAccumulatorFile <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_ERACONFIG_TRUSTEDACCUMULATORFILE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Era": {
      "TrustedAccumulatorFile": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Accumulator file to be used for trusting era files. Defaults to `null`.

### EraE

- #### `EraE.BeaconNodeUrl` \{#erae-beaconnodeurl\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --erae-beaconnodeurl <value>
  --EraE.BeaconNodeUrl <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_ERAECONFIG_BEACONNODEURL=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "EraE": {
      "BeaconNodeUrl": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Beacon node URL for fetching beacon block roots and state roots during post-merge EraE export. When set, enables BeaconApiRootsProvider and HistoricalSummariesRpcProvider. Defaults to `null`.

- #### `EraE.ExportDirectory` \{#erae-exportdirectory\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --erae-exportdirectory <value>
  --EraE.ExportDirectory <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_ERAECONFIG_EXPORTDIRECTORY=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "EraE": {
      "ExportDirectory": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Directory for EraE archive export. Defaults to `null`.

- #### `EraE.From` \{#erae-from\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --erae-from <value>
  --EraE.From <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_ERAECONFIG_FROM=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "EraE": {
      "From": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Block number to import/export from. Defaults to `0`.

- #### `EraE.ImportDirectory` \{#erae-importdirectory\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --erae-importdirectory <value>
  --EraE.ImportDirectory <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_ERAECONFIG_IMPORTDIRECTORY=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "EraE": {
      "ImportDirectory": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Directory of EraE archives to be imported. Defaults to `null`.

- #### `EraE.RemoteBaseUrl` \{#erae-remotebaseurl\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --erae-remotebaseurl <value>
  --EraE.RemoteBaseUrl <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_ERAECONFIG_REMOTEBASEURL=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "EraE": {
      "RemoteBaseUrl": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Base URL of a remote EraE archive server (e.g. https://data.ethpandaops.io/erae/\{network}/). When set, missing local epoch files are downloaded on demand. Defaults to `null`.

- #### `EraE.RemoteDownloadDirectory` \{#erae-remotedownloaddirectory\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --erae-remotedownloaddirectory <value>
  --EraE.RemoteDownloadDirectory <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_ERAECONFIG_REMOTEDOWNLOADDIRECTORY=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "EraE": {
      "RemoteDownloadDirectory": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Local directory where remotely downloaded EraE files are cached. Defaults to ImportDirectory when null. Defaults to `null`.

- #### `EraE.To` \{#erae-to\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --erae-to <value>
  --EraE.To <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_ERAECONFIG_TO=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "EraE": {
      "To": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Block number to import/export to. 0 means head. Defaults to `0`.

- #### `EraE.TrustedAccumulatorFile` \{#erae-trustedaccumulatorfile\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --erae-trustedaccumulatorfile <value>
  --EraE.TrustedAccumulatorFile <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_ERAECONFIG_TRUSTEDACCUMULATORFILE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "EraE": {
      "TrustedAccumulatorFile": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Accumulator file for trusting EraE archives. Defaults to `null`.

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
  --ethstats-enabled [true|false]
  --EthStats.Enabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_ETHSTATSCONFIG_ENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "EthStats": {
      "Enabled": true|false
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

### Flashbots

- #### `Flashbots.EnablePreWarmer` \{#flashbots-enableprewarmer\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flashbots-enableprewarmer [true|false]
  --Flashbots.EnablePreWarmer [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLASHBOTSCONFIG_ENABLEPREWARMER=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Flashbots": {
      "EnablePreWarmer": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to enable the pre-warmer. Allowed values: `true` `false`. Defaults to `true`.

- #### `Flashbots.EnableValidation` \{#flashbots-enablevalidation\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flashbots-enablevalidation [true|false]
  --Flashbots.EnableValidation [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLASHBOTSCONFIG_ENABLEVALIDATION=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Flashbots": {
      "EnableValidation": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to validate the submitted block against its execution (state root, receipts root, gas used, logs bloom). When disabled, a block whose header does not match the execution outcome is still reported as valid. Allowed values: `true` `false`. Defaults to `true`.

- #### `Flashbots.Enabled` \{#flashbots-enabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flashbots-enabled [true|false]
  --Flashbots.Enabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLASHBOTSCONFIG_ENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Flashbots": {
      "Enabled": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to enable the Flashbots endpoints. Allowed values: `true` `false`. Defaults to `false`.

- #### `Flashbots.ExcludeWithdrawals` \{#flashbots-excludewithdrawals\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flashbots-excludewithdrawals [true|false]
  --Flashbots.ExcludeWithdrawals [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLASHBOTSCONFIG_EXCLUDEWITHDRAWALS=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Flashbots": {
      "ExcludeWithdrawals": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to exclude the withdrawals to the fee recipient from the balance difference. Allowed values: `true` `false`. Defaults to `false`.

- #### `Flashbots.FlashbotsModuleConcurrentInstances` \{#flashbots-flashbotsmoduleconcurrentinstances\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flashbots-flashbotsmoduleconcurrentinstances <value>
  --Flashbots.FlashbotsModuleConcurrentInstances <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLASHBOTSCONFIG_FLASHBOTSMODULECONCURRENTINSTANCES=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Flashbots": {
      "FlashbotsModuleConcurrentInstances": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The number of concurrent instances for non-sharable calls for `flashbots_validateBuilderSubmissionV3`
  This limits the load on the CPU and I/O to reasonable levels. If the limit is exceeded, HTTP 503 is returned along with the JSON-RPC error. Defaults to the number of logical processors.

- #### `Flashbots.UseBalanceDiffProfit` \{#flashbots-usebalancediffprofit\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flashbots-usebalancediffprofit [true|false]
  --Flashbots.UseBalanceDiffProfit [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLASHBOTSCONFIG_USEBALANCEDIFFPROFIT=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Flashbots": {
      "UseBalanceDiffProfit": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to calculate the proposer payment as a balance difference of the fee recipient. Allowed values: `true` `false`. Defaults to `false`.

### FlatDb

- #### `FlatDb.ApplyStorageWritesOnIdleThread` \{#flatdb-applystoragewritesonidlethread\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-applystoragewritesonidlethread [true|false]
  --FlatDb.ApplyStorageWritesOnIdleThread [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_APPLYSTORAGEWRITESONIDLETHREAD=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "ApplyStorageWritesOnIdleThread": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Apply committed storage writes to the storage tries on an idle-priority thread during execution. Ignored with VerifyWithTrie. Allowed values: `true` `false`. Defaults to `true`.

- #### `FlatDb.ArchiveProofBuildEnabled` \{#flatdb-archiveproofbuildenabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-archiveproofbuildenabled [true|false]
  --FlatDb.ArchiveProofBuildEnabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_ARCHIVEPROOFBUILDENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "ArchiveProofBuildEnabled": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Emit the archive proof commitments: from the tip as blocks are captured, and, with FlatDb.HistoryVerifyEveryBlock, along the every-block walk that retrofits an already-synced archive. A node syncing from genesis needs only the tip capture. Allowed values: `true` `false`. Defaults to `false`.

- #### `FlatDb.ArchiveProofCheckpointIntervalLog2` \{#flatdb-archiveproofcheckpointintervallog2\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-archiveproofcheckpointintervallog2 <value>
  --FlatDb.ArchiveProofCheckpointIntervalLog2 <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_ARCHIVEPROOFCHECKPOINTINTERVALLOG2=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "ArchiveProofCheckpointIntervalLog2": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Checkpoint interval for the archive proof commitments, as a power of two blocks, the same at every trie depth. Smaller means faster cold proofs and more disk. Accepted range 6..12. Changing it invalidates commitments already built. 0 uses the built-in default of 2^9. Defaults to `0`.

- #### `FlatDb.ArchiveProofDiscardMismatchedLayout` \{#flatdb-archiveproofdiscardmismatchedlayout\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-archiveproofdiscardmismatchedlayout [true|false]
  --FlatDb.ArchiveProofDiscardMismatchedLayout [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_ARCHIVEPROOFDISCARDMISMATCHEDLAYOUT=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "ArchiveProofDiscardMismatchedLayout": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Delete the archive proof commitment columns and rebuild them when they were written under a different layout than this node is configured for (another checkpoint interval, or an older release). Off refuses to build and keeps the rows; on discards rows nothing can read any more. Nothing is deleted while the layout matches, so it is harmless to leave on. Allowed values: `true` `false`. Defaults to `false`.

- #### `FlatDb.ArchiveProofEpochLog2` \{#flatdb-archiveproofepochlog2\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-archiveproofepochlog2 <value>
  --FlatDb.ArchiveProofEpochLog2 <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_ARCHIVEPROOFEPOCHLOG2=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "ArchiveProofEpochLog2": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Epoch of the archive proof commitment rows, as a power of two blocks. Rows are keyed by epoch so a whole epoch can be dropped in one range delete; every epoch starts with a snapshot of the account tiers and the storage roots. Must be at least the checkpoint interval; 0 uses 19 (about 2.5 months of blocks). Changing it invalidates commitments already built. Defaults to `0`.

- #### `FlatDb.ArchiveProofFanOut` \{#flatdb-archiveprooffanout\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-archiveprooffanout <value>
  --FlatDb.ArchiveProofFanOut <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_ARCHIVEPROOFFANOUT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "ArchiveProofFanOut": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Concurrent child resolutions inside a single historical proof. Each of a node's 16 children is an independent read, so this is the per-request fan-out; 0 uses the processor count. The number of concurrent proofs is capped by the JSON-RPC module pool, not here. Defaults to `8`.

- #### `FlatDb.ArchiveProofFineEpochs` \{#flatdb-archiveprooffineepochs\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-archiveprooffineepochs <value>
  --FlatDb.ArchiveProofFineEpochs <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_ARCHIVEPROOFFINEEPOCHS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "ArchiveProofFineEpochs": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Number of most recent commitment epochs to keep the per-block rows for. Older epochs keep only their checkpoint rows: proofs there are still served and still verified, rebuilt from the window rows, which costs about a second instead of a hundred milliseconds and is most of the column's size. 0 keeps the per-block rows for every epoch. Defaults to `0`.

- #### `FlatDb.ArchiveProofMaxScannedRows` \{#flatdb-archiveproofmaxscannedrows\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-archiveproofmaxscannedrows <value>
  --FlatDb.ArchiveProofMaxScannedRows <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_ARCHIVEPROOFMAXSCANNEDROWS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "ArchiveProofMaxScannedRows": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  History rows one historical proof may read before it is refused. A proof that has to scan beyond this is resolving from raw history rather than from commitments, which means the commitment column does not really cover that height. 0 uses the built-in ceiling of 250000 rows. Defaults to `0`.

- #### `FlatDb.ArchiveProofRecentEpochs` \{#flatdb-archiveproofrecentepochs\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-archiveproofrecentepochs <value>
  --FlatDb.ArchiveProofRecentEpochs <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_ARCHIVEPROOFRECENTEPOCHS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "ArchiveProofRecentEpochs": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Number of most recent commitment epochs to keep. Older epochs are deleted and historical proofs below them are refused; 0 keeps every epoch (a full archive). Defaults to `0`.

- #### `FlatDb.ArchiveProofServeEnabled` \{#flatdb-archiveproofserveenabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-archiveproofserveenabled [true|false]
  --FlatDb.ArchiveProofServeEnabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_ARCHIVEPROOFSERVEENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "ArchiveProofServeEnabled": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Serve eth_getProof at heights below the flat state boundary from the archive commitment columns. Requires an unwindowed (v2) flat history whose commitments cover the height; off by default. Allowed values: `true` `false`. Defaults to `false`.

- #### `FlatDb.ArenaFileSizeBytes` \{#flatdb-arenafilesizebytes\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-arenafilesizebytes <value>
  --FlatDb.ArenaFileSizeBytes <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_ARENAFILESIZEBYTES=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "ArenaFileSizeBytes": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Maximum size in bytes for a single arena file before a new one is started. Defaults to `1073741824`.

- #### `FlatDb.BlockCacheSizeBudget` \{#flatdb-blockcachesizebudget\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-blockcachesizebudget <value>
  --FlatDb.BlockCacheSizeBudget <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_BLOCKCACHESIZEBUDGET=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "BlockCacheSizeBudget": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Block cache size budget Defaults to `1073741824`.

- #### `FlatDb.CompactSize` \{#flatdb-compactsize\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-compactsize <value>
  --FlatDb.CompactSize <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_COMPACTSIZE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "CompactSize": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Compact size Defaults to `32`.

- #### `FlatDb.CompactionOffset` \{#flatdb-compactionoffset\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-compactionoffset <value>
  --FlatDb.CompactionOffset <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_COMPACTIONOFFSET=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "CompactionOffset": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Fixed compaction schedule offset in blocks. When 0 or greater, overrides the per-instance offset in the metadata DB, which is neither read nor updated. Only the value modulo CompactSize matters. -1 to use the stored offset, generating a random one when absent. Defaults to `-1`.

- #### `FlatDb.CompressedNodeRecordBufferMemoryBudget` \{#flatdb-compressednoderecordbuffermemorybudget\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-compressednoderecordbuffermemorybudget <value>
  --FlatDb.CompressedNodeRecordBufferMemoryBudget <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_COMPRESSEDNODERECORDBUFFERMEMORYBUDGET=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "CompressedNodeRecordBufferMemoryBudget": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Memory budget, in bytes, for the compacted generations of the trie node buffer; the oldest are freed beyond it. 0 disables compaction, freeing dropped generations at once; it is also disabled while TrieNodeLogEnabled is set. It also sizes the buffer's storage root index. Defaults to `524288000`.

- #### `FlatDb.DeferStorageTrieCommit` \{#flatdb-deferstoragetriecommit\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-deferstoragetriecommit [true|false]
  --FlatDb.DeferStorageTrieCommit [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_DEFERSTORAGETRIECOMMIT=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "DeferStorageTrieCommit": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Publish the storage trie roots when the block commits, after it is reported valid, as the state trie already does; their nodes are written as each write batch completes either way. `false` publishes each storage trie's root before the block is reported valid. Allowed values: `true` `false`. Defaults to `true`.

- #### `FlatDb.DropPruningTrieState` \{#flatdb-droppruningtriestate\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-droppruningtriestate [true|false]
  --FlatDb.DropPruningTrieState [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_DROPPRUNINGTRIESTATE=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "DropPruningTrieState": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Delete the patricia-trie state DB on start once the flat DB owns the state, reclaiming its disk space. The kept trie is what a switch back to the patricia backend restarts from, replaying from the conversion block, so this is irreversible: switching back afterwards requires a resync. Allowed values: `true` `false`. Defaults to `false`.

- #### `FlatDb.EnableCarryForwardCache` \{#flatdb-enablecarryforwardcache\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-enablecarryforwardcache [true|false]
  --FlatDb.EnableCarryForwardCache [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_ENABLECARRYFORWARDCACHE=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "EnableCarryForwardCache": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Cache flat account and slot reads across heads in the persistence layer, so a new head does not re-read the working set from the database. `false` reads every persistence miss from the database. Allowed values: `true` `false`. Defaults to `true`.

- #### `FlatDb.EnableLongFinality` \{#flatdb-enablelongfinality\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-enablelongfinality [true|false]
  --FlatDb.EnableLongFinality [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_ENABLELONGFINALITY=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "EnableLongFinality": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Enable long finality support with persisted snapshots Allowed values: `true` `false`. Defaults to `true`.

- #### `FlatDb.Enabled` \{#flatdb-enabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-enabled [true|false]
  --FlatDb.Enabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_ENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "Enabled": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether a fresh state sync uses the flat-state DB backend, and whether ImportFromPruningTrieState is honored. A node that already has a patricia-trie state DB keeps using it regardless of this setting; set to false to sync a fresh node on the patricia-trie backend instead. Allowed values: `true` `false`. Defaults to `true`.

- #### `FlatDb.HistoryEnabled` \{#flatdb-historyenabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-historyenabled [true|false]
  --FlatDb.HistoryEnabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_HISTORYENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "HistoryEnabled": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Capture finalized per-block account/storage changesets into the history columns for archival queries. Off by default; when off the persist path does no extra work. Allowed values: `true` `false`. Defaults to `false`.

- #### `FlatDb.HistoryPruneIntervalBlocks` \{#flatdb-historypruneintervalblocks\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-historypruneintervalblocks <value>
  --FlatDb.HistoryPruneIntervalBlocks <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_HISTORYPRUNEINTERVALBLOCKS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "HistoryPruneIntervalBlocks": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  How many blocks the watermark must advance before an idle history window pruner wakes and re-evaluates the floor. A pruner still owing sweep work paces itself on its pass budget instead. Only consulted when HistoryRetention is 'Rolling'. Defaults to `1024`.

- #### `FlatDb.HistoryPrunePassBudgetSeconds` \{#flatdb-historyprunepassbudgetseconds\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-historyprunepassbudgetseconds <value>
  --FlatDb.HistoryPrunePassBudgetSeconds <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_HISTORYPRUNEPASSBUDGETSECONDS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "HistoryPrunePassBudgetSeconds": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Per-pass wall-clock budget, in seconds, for the history window pruner's incremental scan-and-delete. A pass yields at the budget and resumes from its persisted cursor on the next pass rather than running unbounded. Must exceed the longest historical query the node serves: deletes wait for in-flight historical reads, and a read that outlives every pass blocks reclamation until it finishes. Defaults to `5`.

- #### `FlatDb.HistoryRetention` \{#flatdb-historyretention\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-historyretention <value>
  --FlatDb.HistoryRetention <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_HISTORYRETENTION=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "HistoryRetention": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  How flat history is retained. 'None' keeps it unbounded from genesis or the pivot and never prunes it. 'Rolling' keeps a bounded window of the most recent HistoryRetentionBlocks blocks and reclaims below it. 'SinceBlock' keeps everything from HistoryRetentionSinceBlock onward forever and captures nothing below it. Both bounded modes select the windowed row format and so require a database that has never captured history unwindowed.

  Allowed values:
  - `None`
  - `Rolling`
  - `SinceBlock`

  Defaults to `None`.

- #### `FlatDb.HistoryRetentionBlocks` \{#flatdb-historyretentionblocks\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-historyretentionblocks <value>
  --FlatDb.HistoryRetentionBlocks <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_HISTORYRETENTIONBLOCKS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "HistoryRetentionBlocks": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Size of the rolling flat-history window, in blocks below the watermark. Required when HistoryRetention is 'Rolling' and rejected otherwise. Defaults to `0`.

- #### `FlatDb.HistoryRetentionSinceBlock` \{#flatdb-historyretentionsinceblock\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-historyretentionsinceblock <value>
  --FlatDb.HistoryRetentionSinceBlock <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_HISTORYRETENTIONSINCEBLOCK=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "HistoryRetentionSinceBlock": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  First block of flat history to keep when HistoryRetention is 'SinceBlock'. History below it is never captured and reads there fail closed; from it onward nothing is ever pruned. Required in that mode and rejected otherwise. Defaults to `0`.

- #### `FlatDb.HistorySliceAddresses` \{#flatdb-historysliceaddresses\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-historysliceaddresses <value>
  --FlatDb.HistorySliceAddresses <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_HISTORYSLICEADDRESSES=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "HistorySliceAddresses": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  A comma-separated list of contract addresses to retain unbounded (or far deeper than HistoryRetentionBlocks) flat history for, independent of the general rolling window. Needs the windowed row format (HistoryRetention Rolling or SinceBlock); under SinceBlock only the body and receipt retention described here applies, since flat history there is never pruned. Static allow-list only - an address is never added or removed except by editing this config and restarting. Both the receipts and the whole block body are retained for every block one of these addresses appears in, so those heights keep their transactions queryable and not just their logs. The cost is body disk: a contract busy enough to match most blocks means most of those bodies are kept, and history pruning stops reclaiming body space over that range. An entry with a retention suffix keeps bodies and receipts only while a height is within that many blocks of the head; a cleanup cursor reclaims them after they fall out. An entry without a retention suffix retains forever and pins the whole clears column and the per-block markers (~40 bytes per block the window never reclaims). Answering below a previously pruned boundary requires History.Pruning to stay enabled: the pruner is what validates, at startup, from which depth each slice's logs are provably retained, and without it those reads fail closed. Defaults to `null`.

- #### `FlatDb.HistoryTransactionIndexBulkFillEnabled` \{#flatdb-historytransactionindexbulkfillenabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-historytransactionindexbulkfillenabled [true|false]
  --FlatDb.HistoryTransactionIndexBulkFillEnabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_HISTORYTRANSACTIONINDEXBULKFILLENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "HistoryTransactionIndexBulkFillEnabled": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Experimental mainnet v2 archive retrofit using one isolated disk-backed replay state. Replaces retrofit workers, not tip following. Requires a nonzero HistoryTransactionIndexRetrofitFromBlock; coverage joins only after the ascending range completes. Allowed values: `true` `false`. Defaults to `false`.

- #### `FlatDb.HistoryTransactionIndexBulkFillMaxGiB` \{#flatdb-historytransactionindexbulkfillmaxgib\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-historytransactionindexbulkfillmaxgib <value>
  --FlatDb.HistoryTransactionIndexBulkFillMaxGiB <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_HISTORYTRANSACTIONINDEXBULKFILLMAXGIB=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "HistoryTransactionIndexBulkFillMaxGiB": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Maximum scratch database size in GiB for bulk transaction-index replay. Reaching the limit pauses replay without dropping its checkpoint. Defaults to `1024`.

- #### `FlatDb.HistoryTransactionIndexDutyCyclePercent` \{#flatdb-historytransactionindexdutycyclepercent\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-historytransactionindexdutycyclepercent <value>
  --FlatDb.HistoryTransactionIndexDutyCyclePercent <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_HISTORYTRANSACTIONINDEXDUTYCYCLEPERCENT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "HistoryTransactionIndexDutyCyclePercent": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Share of its wall clock the transaction index builder may spend working; it sleeps out the rest so that re-executing blocks stays invisible to the RPC the node is serving. 100 lets it run flat out. Defaults to `25`.

- #### `FlatDb.HistoryTransactionIndexEnabled` \{#flatdb-historytransactionindexenabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-historytransactionindexenabled [true|false]
  --FlatDb.HistoryTransactionIndexEnabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_HISTORYTRANSACTIONINDEXENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "HistoryTransactionIndexEnabled": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Index, per transaction, what each transaction of a block wrote, so that a trace of one transaction resolves the state before it instead of replaying the transactions ahead of it. Captured inline while syncing, when the node executes each block anyway, and re-executed in the background behind the history watermark at the tip and for the retrofit; never on the tip's processing path. Pre-Amsterdam only: BAL-enabled blocks are neither indexed nor seeded. Kept in its own column. Off by default; a node that leaves it off pays nothing. Allowed values: `true` `false`. Defaults to `false`.

- #### `FlatDb.HistoryTransactionIndexRetrofitFromBlock` \{#flatdb-historytransactionindexretrofitfromblock\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-historytransactionindexretrofitfromblock <value>
  --FlatDb.HistoryTransactionIndexRetrofitFromBlock <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_HISTORYTRANSACTIONINDEXRETROFITFROMBLOCK=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "HistoryTransactionIndexRetrofitFromBlock": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Once the transaction index has caught up with the tip, also index backwards down to this block, so an archive that already exists gains coverage without a resync. 0 indexes forward from the moment the index is turned on and nothing older; 1 covers the whole chain, since genesis carries no transactions. Never goes below the flat-history floor. Defaults to `0`.

- #### `FlatDb.HistoryTransactionIndexWorkers` \{#flatdb-historytransactionindexworkers\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-historytransactionindexworkers <value>
  --FlatDb.HistoryTransactionIndexWorkers <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_HISTORYTRANSACTIONINDEXWORKERS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "HistoryTransactionIndexWorkers": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Threads re-executing blocks for the backwards retrofit of the transaction index, each on its own block range with its own processing environment. The tip is always followed by one thread regardless. 1 runs the retrofit on that same thread. Each worker holds the state its current 128-block chunk wrote, a few hundred thousand entries on mainnet, so the count is a memory knob as well as a throughput one. Defaults to `1`.

- #### `FlatDb.HistoryVerifyEveryBlock` \{#flatdb-historyverifyeveryblock\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-historyverifyeveryblock [true|false]
  --FlatDb.HistoryVerifyEveryBlock [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_HISTORYVERIFYEVERYBLOCK=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "HistoryVerifyEveryBlock": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Rebuild the state root from flat history rows at every covered block and compare against this node's own headers, once, in the background. Unwindowed archives only. Memory is bounded by FlatDb.HistoryVerifyMaxRows per worker, not by state size. Allowed values: `true` `false`. Defaults to `false`.

- #### `FlatDb.HistoryVerifyMaxRows` \{#flatdb-historyverifymaxrows\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-historyverifymaxrows <value>
  --FlatDb.HistoryVerifyMaxRows <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_HISTORYVERIFYMAXROWS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "HistoryVerifyMaxRows": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  History rows one verification worker holds in memory for the subtree it is replaying. A subtree with more rows is split into its children and a single key with more rows is streamed, so any value works on any archive; larger values mean fewer, bigger subtrees. Sized so that one mainnet depth-2 account subtree fits without splitting; each worker holds about 400 bytes per row plus its replayed trie. 0 uses the built-in default of 5 million. Defaults to `0`.

- #### `FlatDb.HistoryVerifySegments` \{#flatdb-historyverifysegments\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-historyverifysegments <value>
  --FlatDb.HistoryVerifySegments <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_HISTORYVERIFYSEGMENTS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "HistoryVerifySegments": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Concurrent workers of the every-block history verification; the key keeps the name it shipped under, the value is a worker count. Each worker replays one trie subtree at a time from its own contiguous rows, so workers share nothing but the read-only columns; the count changes memory and wall clock, never the result. 0 sizes it from the machine: the processor count minus two cores kept for block processing, capped so the walk takes at most half of the memory and never more than the headroom free when it starts. Defaults to `0`.

- #### `FlatDb.ImportFromPruningTrieState` \{#flatdb-importfrompruningtriestate\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-importfrompruningtriestate [true|false]
  --FlatDb.ImportFromPruningTrieState [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_IMPORTFROMPRUNINGTRIESTATE=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "ImportFromPruningTrieState": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Import from pruning trie state db. When enabled, the node runs the import and exits instead of starting, as with the `import-flat-db` command, and fails if there is nothing to import. Remove the setting once the import has finished. Allowed values: `true` `false`. Defaults to `false`.

- #### `FlatDb.InMemorySnapshotBloomBitsPerKey` \{#flatdb-inmemorysnapshotbloombitsperkey\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-inmemorysnapshotbloombitsperkey <value>
  --FlatDb.InMemorySnapshotBloomBitsPerKey <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_INMEMORYSNAPSHOTBLOOMBITSPERKEY=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "InMemorySnapshotBloomBitsPerKey": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Bits per key for the negative filter over the slots written by the in-memory snapshots. It is built once per read-only snapshot bundle, on the first slot read of read-only execution (eth_call, eth_estimateGas, eth_createAccessList, eth_simulateV1, eth_getProof, debug and trace calls, Flashbots block validation, receipt regeneration and the transaction changeset index), and lets those reads skip the per-snapshot lookups for a slot no in-memory snapshot wrote. Block processing never uses it. Higher = lower false-positive rate but more RAM. 0 disables the filter. Defaults to `14`.

- #### `FlatDb.InlineCompaction` \{#flatdb-inlinecompaction\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-inlinecompaction [true|false]
  --FlatDb.InlineCompaction [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_INLINECOMPACTION=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "InlineCompaction": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Inline compaction Allowed values: `true` `false`. Defaults to `false`.

- #### `FlatDb.Layout` \{#flatdb-layout\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-layout <value>
  --FlatDb.Layout <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_LAYOUT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "Layout": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Flat db layout. `Auto` keeps the layout of an existing flat DB, and creates a new one as `FlatInTrie` below 16 GB of memory available to .NET (75% of a container's memory limit) and as `Flat` otherwise.

  Allowed values:
  - `Flat`
  - `FlatInTrie`
  - `PreimageFlatV1`
  - `PreimageFlat`
  - `Auto`

  Defaults to `Auto`.

- #### `FlatDb.LongFinalityMaxReorgDepth` \{#flatdb-longfinalitymaxreorgdepth\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-longfinalitymaxreorgdepth <value>
  --FlatDb.LongFinalityMaxReorgDepth <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_LONGFINALITYMAXREORGDEPTH=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "LongFinalityMaxReorgDepth": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Force-persist backstop used when EnableLongFinality is on, in place of MaxReorgDepth. The persisted-snapshot tier serves deep reorgs, so this is much larger than the non-long-finality backstop. Defaults to `90000`.

- #### `FlatDb.MaxInFlightCompactJob` \{#flatdb-maxinflightcompactjob\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-maxinflightcompactjob <value>
  --FlatDb.MaxInFlightCompactJob <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_MAXINFLIGHTCOMPACTJOB=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "MaxInFlightCompactJob": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Max in flight compact job Defaults to `32`.

- #### `FlatDb.MaxInMemoryBaseSnapshotCount` \{#flatdb-maxinmemorybasesnapshotcount\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-maxinmemorybasesnapshotcount <value>
  --FlatDb.MaxInMemoryBaseSnapshotCount <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_MAXINMEMORYBASESNAPSHOTCOUNT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "MaxInMemoryBaseSnapshotCount": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Maximum number of in-memory base snapshots before conversion to the persisted-snapshot tier kicks in. Counted as `SnapshotCount` of the in-memory repository, not a block-distance depth. Sized as a ~128 target plus one CompactSize of headroom, since a bulk (CompactSize-wide) conversion drops the in-memory count by up to CompactSize at a boundary — so the tier still retains ~128 base snapshots after each conversion. Defaults to `160`.

- #### `FlatDb.MaxInMemorySnapshotBytes` \{#flatdb-maxinmemorysnapshotbytes\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-maxinmemorysnapshotbytes <value>
  --FlatDb.MaxInMemorySnapshotBytes <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_MAXINMEMORYSNAPSHOTBYTES=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "MaxInMemorySnapshotBytes": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Byte budget for the in-memory snapshot window. When positive and the estimated in-memory snapshot bytes exceed it, conversion to the persisted-snapshot tier is attempted and persistence is forced even when finality stalls, always leaving at least MinReorgDepth blocks above the persisted base — bounding memory by size rather than block count, so heavy blocks shrink the retained window instead of exhausting memory. Only in-memory snapshots are flushed for byte pressure, so with EnableLongFinality the persisted-snapshot tier is kept and the in-memory window does not shrink below MaxInMemoryBaseSnapshotCount blocks once that tier holds the oldest state. 0 disables. Defaults to `0`.

- #### `FlatDb.MaxReorgDepth` \{#flatdb-maxreorgdepth\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-maxreorgdepth <value>
  --FlatDb.MaxReorgDepth <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_MAXREORGDEPTH=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "MaxReorgDepth": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Max reorg depth — the force-persist backstop used when EnableLongFinality is off: once the in-memory depth exceeds it while finality is stalled, persistence is forced to bound memory. Defaults to `256`.

- #### `FlatDb.MigrateFromPruningTrieState` \{#flatdb-migratefrompruningtriestate\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-migratefrompruningtriestate [true|false]
  --FlatDb.MigrateFromPruningTrieState [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_MIGRATEFROMPRUNINGTRIESTATE=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "MigrateFromPruningTrieState": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Migrate an existing pruning trie state DB to the flat DB while the node runs: the node switches to flat at once, serving what is not copied yet from the trie DB, which it keeps until the copy completes. Supported by the Flat and FlatInTrie layouts. Once started, the migration continues on every restart until it completes, whether or not this is still set. Allowed values: `true` `false`. Defaults to `false`.

- #### `FlatDb.MigrationChunkNodes` \{#flatdb-migrationchunknodes\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-migrationchunknodes <value>
  --FlatDb.MigrationChunkNodes <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_MIGRATIONCHUNKNODES=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "MigrationChunkNodes": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Number of trie nodes the online migration from the pruning trie state copies per write, between which block processing takes over. Defaults to `1000`.

- #### `FlatDb.MinReorgDepth` \{#flatdb-minreorgdepth\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-minreorgdepth <value>
  --FlatDb.MinReorgDepth <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_MINREORGDEPTH=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "MinReorgDepth": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Minimum reorg depth Defaults to `128`.

- #### `FlatDb.OnRepair` \{#flatdb-onrepair\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-onrepair <value>
  --FlatDb.OnRepair <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_ONREPAIR=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "OnRepair": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  What happens after a RocksDB repair of the flat DB. Resync wipes flat columns (headers, bodies, and receipts are kept) and re-enters state sync. Ignore keeps the repaired DB (escape hatch; may diverge). Ignore acknowledges the repair on the first start, so switching to Resync afterwards has no effect; a resync then requires wiping the flat DB directory. Resync refills state only through snap/state sync (Sync.FastSync with peers that serve it); a node that cannot state-sync, e.g. an archive synced from genesis, is left without state for its head, so set Ignore there or plan a resync from scratch. The flatHistory DB is not wiped: with HistoryEnabled and a windowed HistoryRetention (Rolling or SinceBlock), the resync fails to finish when its pivot falls inside the already-captured history window, so wipe the flatHistory directory too.

  Allowed values:
  - `Resync`
  - `Ignore`

  Defaults to `Resync`.

- #### `FlatDb.PersistedSnapshotArenaPageCacheBytes` \{#flatdb-persistedsnapshotarenapagecachebytes\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-persistedsnapshotarenapagecachebytes <value>
  --FlatDb.PersistedSnapshotArenaPageCacheBytes <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_PERSISTEDSNAPSHOTARENAPAGECACHEBYTES=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "PersistedSnapshotArenaPageCacheBytes": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Page-cache budget (bytes) for the persisted-snapshot arena. Backs the PageResidencyTracker that drives madvise(DONTNEED) eviction on mmap'd arena files. 0 disables the tracker. Defaults to `4294967296`.

- #### `FlatDb.PersistedSnapshotBloomBitsPerKey` \{#flatdb-persistedsnapshotbloombitsperkey\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-persistedsnapshotbloombitsperkey <value>
  --FlatDb.PersistedSnapshotBloomBitsPerKey <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_PERSISTEDSNAPSHOTBLOOMBITSPERKEY=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "PersistedSnapshotBloomBitsPerKey": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Bits per key for the per-snapshot in-memory bloom filter. One unified filter covers address/slot/self-destruct keys plus state-trie and storage-trie node paths. Higher = lower false-positive rate but more RAM. 0 disables the filter (lookups behave as full sweeps). Defaults to `14`.

- #### `FlatDb.PersistedSnapshotDedicatedArenaThresholdBytes` \{#flatdb-persistedsnapshotdedicatedarenathresholdbytes\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-persistedsnapshotdedicatedarenathresholdbytes <value>
  --FlatDb.PersistedSnapshotDedicatedArenaThresholdBytes <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_PERSISTEDSNAPSHOTDEDICATEDARENATHRESHOLDBYTES=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "PersistedSnapshotDedicatedArenaThresholdBytes": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Estimated-size threshold (bytes) at or above which a persisted-snapshot arena write goes to its own dedicated file instead of being packed into a shared arena. Defaults to `1073741824`.

- #### `FlatDb.PersistedSnapshotMaxCompactSize` \{#flatdb-persistedsnapshotmaxcompactsize\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-persistedsnapshotmaxcompactsize <value>
  --FlatDb.PersistedSnapshotMaxCompactSize <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_PERSISTEDSNAPSHOTMAXCOMPACTSIZE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "PersistedSnapshotMaxCompactSize": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Max persisted snapshot compaction size (hierarchical compaction ceiling for persisted layer), in blocks Defaults to `1048576`.

- #### `FlatDb.PersistedSnapshotPunchHoleOnReclaim` \{#flatdb-persistedsnapshotpunchholeonreclaim\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-persistedsnapshotpunchholeonreclaim [true|false]
  --FlatDb.PersistedSnapshotPunchHoleOnReclaim [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_PERSISTEDSNAPSHOTPUNCHHOLEONRECLAIM=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "PersistedSnapshotPunchHoleOnReclaim": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  When reclaiming dead persisted-snapshot arena ranges — metadata reservation cleanup and blob-file frontier reset — call fallocate(FALLOC_FL_PUNCH_HOLE) to free the underlying disk blocks. Linux-only; automatically and permanently disabled per arena pool if the filesystem reports the operation unsupported. Set false to skip hole-punching entirely (the page-cache posix_fadvise still runs). Allowed values: `true` `false`. Defaults to `true`.

- #### `FlatDb.PersistenceWriteBufferFloor` \{#flatdb-persistencewritebufferfloor\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-persistencewritebufferfloor <value>
  --FlatDb.PersistenceWriteBufferFloor <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_PERSISTENCEWRITEBUFFERFLOOR=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "PersistenceWriteBufferFloor": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Lower bound, in bytes, for the RocksDB write buffer (memtable) size of the flat-state columns. The per-batch adjuster never shrinks a column's memtable below this value. Raising it lets frequent small persistence batches (small CompactSize) coalesce and deduplicate in the memtable instead of churning L0, decoupling write amplification from CompactSize. Defaults to `16777216`.

- #### `FlatDb.RegenerateCompactionOffset` \{#flatdb-regeneratecompactionoffset\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-regeneratecompactionoffset [true|false]
  --FlatDb.RegenerateCompactionOffset [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_REGENERATECOMPACTIONOFFSET=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "RegenerateCompactionOffset": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Regenerate the per-instance compaction offset on startup instead of loading from metadata DB. Use when restoring one backup to multiple instances. Flag is sticky across restarts — toggle off after first restart. Allowed values: `true` `false`. Defaults to `false`.

- #### `FlatDb.TrieNodeLogDrainOnShutdown` \{#flatdb-trienodelogdrainonshutdown\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-trienodelogdrainonshutdown [true|false]
  --FlatDb.TrieNodeLogDrainOnShutdown [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_TRIENODELOGDRAINONSHUTDOWN=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "TrieNodeLogDrainOnShutdown": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Merge the whole trie node log into RocksDB at shutdown. The log otherwise persists across restarts, keeping its deduplication window; mainly for debugging. Allowed values: `true` `false`. Defaults to `false`.

- #### `FlatDb.TrieNodeLogEnabled` \{#flatdb-trienodelogenabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-trienodelogenabled [true|false]
  --FlatDb.TrieNodeLogEnabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_TRIENODELOGENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "TrieNodeLogEnabled": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Write trie nodes (StateTopNodes, StateNodes and StorageNodes; FallbackNodes stays direct) through an append-only trie node log (with an in-memory index) that is merged into RocksDB one generation at a time, so nodes rewritten within a generation are written to RocksDB once. Experimental: a self-destruct only removes the storage trie nodes already in RocksDB, nodes still in the log are left as unreachable orphans. Allowed values: `true` `false`. Defaults to `false`.

- #### `FlatDb.TrieNodeLogMaxConcurrentMerges` \{#flatdb-trienodelogmaxconcurrentmerges\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-trienodelogmaxconcurrentmerges <value>
  --FlatDb.TrieNodeLogMaxConcurrentMerges <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_TRIENODELOGMAXCONCURRENTMERGES=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "TrieNodeLogMaxConcurrentMerges": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Maximum number of trie node log generation merges (across all shards) running at the same time; each merge is one RocksDB write batch. Defaults to `2`.

- #### `FlatDb.TrieNodeLogMergeBacklogMargin` \{#flatdb-trienodelogmergebacklogmargin\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-trienodelogmergebacklogmargin <value>
  --FlatDb.TrieNodeLogMergeBacklogMargin <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_TRIENODELOGMERGEBACKLOGMARGIN=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "TrieNodeLogMergeBacklogMargin": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Sealed trie node log generations a shard may accumulate beyond TrieNodeLogMergeLag before starting a new generation waits for a merge to finish, which stalls persistence until the merges catch up. Defaults to `2`.

- #### `FlatDb.TrieNodeLogMergeLag` \{#flatdb-trienodelogmergelag\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-trienodelogmergelag <value>
  --FlatDb.TrieNodeLogMergeLag <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_TRIENODELOGMERGELAG=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "TrieNodeLogMergeLag": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Number of sealed trie node log generations kept unmerged behind the newest one. A generation is merged into RocksDB only once this many newer generations are sealed, and keys rewritten in those are skipped, so the effective deduplication window is (1 + this) generations at the cost of that many extra generation files and in-memory indexes. Defaults to `1`.

- #### `FlatDb.TrieNodeLogSecondLevelMergeLag` \{#flatdb-trienodelogsecondlevelmergelag\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-trienodelogsecondlevelmergelag <value>
  --FlatDb.TrieNodeLogSecondLevelMergeLag <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_TRIENODELOGSECONDLEVELMERGELAG=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "TrieNodeLogSecondLevelMergeLag": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  TrieNodeLogMergeLag of the second-level trie node log, or -1 to disable it. Each merged trie node log generation is copied, deduplicated, into the second-level log instead of RocksDB; it has the same size and backlog settings as the first, an in-memory index of 1/16 of its size for both partitions, and merges its own generations into RocksDB once this many newer ones are sealed. The surviving nodes are less likely to be rewritten, and the log's index answers their reads faster than RocksDB. Defaults to `1`.

- #### `FlatDb.TrieNodeLogStateBytes` \{#flatdb-trienodelogstatebytes\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-trienodelogstatebytes <value>
  --FlatDb.TrieNodeLogStateBytes <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_TRIENODELOGSTATEBYTES=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "TrieNodeLogStateBytes": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Byte budget of the state partition of the trie node log (StateTopNodes and StateNodes), split evenly over its shards: each shard's generation, i.e. its deduplication window before it is merged into RocksDB, is this divided by the partition's shard count. Each live generation also keeps an in-memory index of 1/64 of its size (1/32 for the storage partition). Defaults to `524288000`.

- #### `FlatDb.TrieNodeLogStateShardCount` \{#flatdb-trienodelogstateshardcount\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-trienodelogstateshardcount <value>
  --FlatDb.TrieNodeLogStateShardCount <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_TRIENODELOGSTATESHARDCOUNT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "TrieNodeLogStateShardCount": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Number of shards of the state partition of the trie node log, a power of two. Nodes are sharded by the first byte of their column key (the first path nibbles for state nodes, the first byte of the address hash for storage nodes); shards are appended to and merged in parallel. Defaults to `2`.

- #### `FlatDb.TrieNodeLogStorageBytes` \{#flatdb-trienodelogstoragebytes\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-trienodelogstoragebytes <value>
  --FlatDb.TrieNodeLogStorageBytes <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_TRIENODELOGSTORAGEBYTES=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "TrieNodeLogStorageBytes": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Byte budget of the storage partition of the trie node log (StorageNodes), split evenly over its shards like TrieNodeLogStateBytes. Defaults to `524288000`.

- #### `FlatDb.TrieNodeLogStorageShardCount` \{#flatdb-trienodelogstorageshardcount\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-trienodelogstorageshardcount <value>
  --FlatDb.TrieNodeLogStorageShardCount <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_TRIENODELOGSTORAGESHARDCOUNT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "TrieNodeLogStorageShardCount": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Number of shards of the storage partition of the trie node log, a power of two. Defaults to `2`.

- #### `FlatDb.TrieWarmerWorkerCount` \{#flatdb-triewarmerworkercount\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-triewarmerworkercount <value>
  --FlatDb.TrieWarmerWorkerCount <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_TRIEWARMERWORKERCOUNT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "TrieWarmerWorkerCount": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Trie warmer worker count (-1 for the larger of 3/4 of the processor count and 1.5 per processor up to 12, 0 to disable) Defaults to `-1`.

- #### `FlatDb.ValidatePersistedSnapshot` \{#flatdb-validatepersistedsnapshot\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-validatepersistedsnapshot [true|false]
  --FlatDb.ValidatePersistedSnapshot [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_VALIDATEPERSISTEDSNAPSHOT=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "ValidatePersistedSnapshot": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Validate persisted snapshots against in-memory snapshots after conversion (debug/diagnostic only) Allowed values: `true` `false`. Defaults to `false`.

- #### `FlatDb.VerifyWithTrie` \{#flatdb-verifywithtrie\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-verifywithtrie [true|false]
  --FlatDb.VerifyWithTrie [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_VERIFYWITHTRIE=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "VerifyWithTrie": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Verify with trie Allowed values: `true` `false`. Defaults to `false`.

- #### `FlatDb.WarmReadConcurrency` \{#flatdb-warmreadconcurrency\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --flatdb-warmreadconcurrency <value>
  --FlatDb.WarmReadConcurrency <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_FLATDBCONFIG_WARMREADCONCURRENCY=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "FlatDb": {
      "WarmReadConcurrency": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Persistent dedicated reader threads used to resolve hinted BAL read sets into the pre-block cache. -1 for 4x logical processor count capped at 64. Values below 1 are clamped to 1. Use --Blocks.ParallelExecutionBatchRead=false to disable BAL warming entirely. Defaults to `-1`.

### HealthChecks

- #### `HealthChecks.Enabled` \{#healthchecks-enabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --healthchecks-enabled [true|false]
  --HealthChecks.Enabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_HEALTHCHECKSCONFIG_ENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "HealthChecks": {
      "Enabled": true|false
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
  --healthchecks-lowstoragecheckawaitonstartup [true|false]
  --HealthChecks.LowStorageCheckAwaitOnStartup [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_HEALTHCHECKSCONFIG_LOWSTORAGECHECKAWAITONSTARTUP=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "HealthChecks": {
      "LowStorageCheckAwaitOnStartup": true|false
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
  --healthchecks-uienabled [true|false]
  --HealthChecks.UIEnabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_HEALTHCHECKSCONFIG_UIENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "HealthChecks": {
      "UIEnabled": true|false
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
  --healthchecks-webhooksenabled [true|false]
  --HealthChecks.WebhooksEnabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_HEALTHCHECKSCONFIG_WEBHOOKSENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "HealthChecks": {
      "WebhooksEnabled": true|false
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

  An escaped JSON payload to be sent to the web hook on failure.
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

  An escaped JSON payload to be sent to the web hook on recovery.
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

### History

- #### `History.BalRetentionEpochs` \{#history-balretentionepochs\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --history-balretentionepochs <value>
  --History.BalRetentionEpochs <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_HISTORYCONFIG_BALRETENTIONEPOCHS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "History": {
      "BalRetentionEpochs": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The number of epochs to retain block access lists (BALs). Must be at least the chain's minBalRetentionEpochs chainspec parameter. Defaults to that minimum, including on archive nodes. Set to 4294967295 to keep all BALs when history pruning is disabled. Defaults to `null`.

- #### `History.CompactBlocksOnPrune` \{#history-compactblocksonprune\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --history-compactblocksonprune [true|false]
  --History.CompactBlocksOnPrune [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_HISTORYCONFIG_COMPACTBLOCKSONPRUNE=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "History": {
      "CompactBlocksOnPrune": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to run a store-wide compaction of the blocks database after pruning reclaims history up to the ancient bodies barrier, reclaiming stale RocksDB blob files that pruning alone leaves behind. Applies only to 'UseAncientBarriers' pruning and is ignored under 'Rolling', whose advancing cutoff would owe a new compaction on every pass. Expensive: heavy I/O that can take hours on a large database, so it runs once per barrier and again only after a raised barrier reclaims more history. It rewrites every retained body, and RocksDB deletes an old blob file only after all files that reference it are rewritten, so the compaction can temporarily need free disk space close to the size of the retained bodies. Only history reclaimed by this version or later arms it: a database whose pruning finished on an earlier version is not compacted. Most effective when history slices ('HistorySliceAddresses') retain scattered bodies across the pruned range, leaving partially-referenced blob files a plain compaction cannot reclaim; under a plain contiguous prune the reclamation is marginal. Allowed values: `true` `false`. Defaults to `false`.

- #### `History.Pruning` \{#history-pruning\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --history-pruning <value>
  --History.Pruning <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_HISTORYCONFIG_PRUNING=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "History": {
      "Pruning": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Pruning mode.

  Allowed values:
  - `Disabled`: No history pruning.
  - `Rolling`: Prune outside of rolling window.
  - `UseAncientBarriers`: Prune up to ancient barriers.

  Defaults to `Disabled`.

- #### `History.PruningInterval` \{#history-pruninginterval\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --history-pruninginterval <value>
  --History.PruningInterval <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_HISTORYCONFIG_PRUNINGINTERVAL=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "History": {
      "PruningInterval": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Number of epochs to wait between each history pruning. Defaults to `8`.

- #### `History.PruningTimeoutSeconds` \{#history-pruningtimeoutseconds\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --history-pruningtimeoutseconds <value>
  --History.PruningTimeoutSeconds <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_HISTORYCONFIG_PRUNINGTIMEOUTSECONDS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "History": {
      "PruningTimeoutSeconds": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Maximum time in seconds allowed for a single history pruning pass. Set to 0 to disable the timeout. Defaults to `2`.

- #### `History.RetentionEpochs` \{#history-retentionepochs\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --history-retentionepochs <value>
  --History.RetentionEpochs <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_HISTORYCONFIG_RETENTIONEPOCHS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "History": {
      "RetentionEpochs": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The number of epochs to retain historical blocks and receipts when using 'Rolling' pruning mode. Must be at least the chain's minHistoryRetentionEpochs chainspec parameter, which is the default: 33024 on Mainnet, 14299 on Sepolia. Defaults to `null`.

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
  --hive-enabled [true|false]
  --Hive.Enabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_HIVECONFIG_ENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Hive": {
      "Enabled": true|false
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
  - `VerifyTrie`: Verifies if full state trie is stored, then exits. Equivalent to the `verify-trie` command.

  Defaults to `None`.

- #### `Init.DiscoveryEnabled` \{#init-discoveryenabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --init-discoveryenabled [true|false]
  --Init.DiscoveryEnabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_INITCONFIG_DISCOVERYENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Init": {
      "DiscoveryEnabled": true|false
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
  --init-enableunsecureddevwallet [true|false]
  --Init.EnableUnsecuredDevWallet [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_INITCONFIG_ENABLEUNSECUREDDEVWALLET=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Init": {
      "EnableUnsecuredDevWallet": true|false
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

- #### `Init.KeepDevWalletInMemory` \{#init-keepdevwalletinmemory\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --init-keepdevwalletinmemory [true|false]
  --Init.KeepDevWalletInMemory [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_INITCONFIG_KEEPDEVWALLETINMEMORY=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Init": {
      "KeepDevWalletInMemory": true|false
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

- #### `Init.MaskIpsInLogs` \{#init-maskipsinlogs\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --init-maskipsinlogs [true|false]
  --Init.MaskIpsInLogs [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_INITCONFIG_MASKIPSINLOGS=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Init": {
      "MaskIpsInLogs": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to mask IP addresses, enode URLs and ENR records in logs. Loopback and unspecified addresses are not masked. Allowed values: `true` `false`. Defaults to `false`.

- #### `Init.MaskSensitiveData` \{#init-masksensitivedata\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --init-masksensitivedata [true|false]
  --Init.MaskSensitiveData [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_INITCONFIG_MASKSENSITIVEDATA=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Init": {
      "MaskSensitiveData": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to mask :hide fields in interpolated logs and marked configuration values in startup diagnostics. Allowed values: `true` `false`. Defaults to `false`.

- #### `Init.PeerManagerEnabled` \{#init-peermanagerenabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --init-peermanagerenabled [true|false]
  --Init.PeerManagerEnabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_INITCONFIG_PEERMANAGERENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Init": {
      "PeerManagerEnabled": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to start the peer manager. If disabled, Nethermind doesn't initiate connections to any peers, including static and trusted nodes, `Network.StaticPeers`, and peers added via `admin_addPeer`, and doesn't persist peers to the peer database. Allowed values: `true` `false`. Defaults to `true`.

- #### `Init.PipelineWarmupEnabled` \{#init-pipelinewarmupenabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --init-pipelinewarmupenabled [true|false]
  --Init.PipelineWarmupEnabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_INITCONFIG_PIPELINEWARMUPENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Init": {
      "PipelineWarmupEnabled": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to warm the block processing pipeline before RPC and Engine API startup. Cancellation is requested after 30 seconds, then startup waits for cleanup. Skipped when JSON-RPC is disabled, without the standard Merge plugin, or with custom spec providers, custom processing pipelines, or database diagnostic modes. Allowed values: `true` `false`. Defaults to `true`.

- #### `Init.ProcessingEnabled` \{#init-processingenabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --init-processingenabled [true|false]
  --Init.ProcessingEnabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_INITCONFIG_PROCESSINGENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Init": {
      "ProcessingEnabled": true|false
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

  The path to the static nodes file. Defaults to `static-nodes.json`.

- #### `Init.TrustedNodesPath` \{#init-trustednodespath\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --init-trustednodespath <value>
  --Init.TrustedNodesPath <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_INITCONFIG_TRUSTEDNODESPATH=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Init": {
      "TrustedNodesPath": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The path to the trusted nodes file. Defaults to `trusted-nodes.json`.

- #### `Init.WebSocketsEnabled` \{#init-websocketsenabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --init-websocketsenabled [true|false]
  --Init.WebSocketsEnabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_INITCONFIG_WEBSOCKETSENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Init": {
      "WebSocketsEnabled": true|false
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

- #### `JsonRpc.AdditionalTrustedNetworks` \{#jsonrpc-additionaltrustednetworks\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-additionaltrustednetworks <value>
  --JsonRpc.AdditionalTrustedNetworks <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_ADDITIONALTRUSTEDNETWORKS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "AdditionalTrustedNetworks": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Additional CIDR networks treated as trusted local sources for the JSON-RPC fast lane.
  Loopback and RFC1918 ranges (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) are always trusted.
  Invalid entries are logged and ignored. Defaults to `[]`.

- #### `JsonRpc.AllowedHosts` \{#jsonrpc-allowedhosts\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-allowedhosts <value>
  --JsonRpc.AllowedHosts <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_ALLOWEDHOSTS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "AllowedHosts": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The `Host` header values the JSON-RPC server accepts on URLs without authentication, as host names without a port, for example `localhost` or `*.example.com`. Matching ignores the port and case. Requests with other host names get HTTP 403. Requests with an IP address or without a `Host` header are always accepted. `*` accepts all hosts. To stop web pages from calling the server, also limit `CorsOrigins`. Defaults to `*`.

- #### `JsonRpc.BatchProcessingConcurrency` \{#jsonrpc-batchprocessingconcurrency\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-batchprocessingconcurrency <value>
  --JsonRpc.BatchProcessingConcurrency <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_BATCHPROCESSINGCONCURRENCY=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "BatchProcessingConcurrency": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The number of consecutive `eth_call`, `eth_estimateGas` and `eth_createAccessList` requests of one batch that execute at a time, capped at `JsonRpc.EthModuleConcurrentInstances`. `debug_traceCall` and `debug_traceTransaction` with a native tracer join them while the batch window (this number, capped at `JsonRpc.EthModuleConcurrentInstances` and the batch length) is at most `JsonRpc.DebugModuleConcurrentInstances`, and `trace_transaction` joins them while the window is at most `JsonRpc.TraceModuleConcurrentInstances` and `JsonRpc.EnableTracingStreamMode` is off. Responses keep the request order, and any other request in the batch waits for the ones before it and executes alone. Set to 1 to execute batch requests one by one. Defaults to `4`.

- #### `JsonRpc.BufferResponses` \{#jsonrpc-bufferresponses\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-bufferresponses [true|false]
  --JsonRpc.BufferResponses [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_BUFFERRESPONSES=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "BufferResponses": true|false
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

  The JSON-RPC server CORS origins. Also limits WebSocket connections: a handshake with an `Origin` header not in this list is refused with HTTP 403; handshakes without an `Origin` header are accepted. Defaults to `*`.

- #### `JsonRpc.DebugModuleConcurrentInstances` \{#jsonrpc-debugmoduleconcurrentinstances\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-debugmoduleconcurrentinstances <value>
  --JsonRpc.DebugModuleConcurrentInstances <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_DEBUGMODULECONCURRENTINSTANCES=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "DebugModuleConcurrentInstances": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The number of concurrent instances of the Debug RPC module (`debug_trace*`, `debug_getRawBlock`, etc.). Calls beyond this cap return `LimitExceeded`. Defaults to the number of logical processors capped at 16.

- #### `JsonRpc.EnableEthSignTransaction` \{#jsonrpc-enableethsigntransaction\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-enableethsigntransaction [true|false]
  --JsonRpc.EnableEthSignTransaction [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_ENABLEETHSIGNTRANSACTION=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "EnableEthSignTransaction": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to enable eth_signTransaction. Disabled by default; enable only on nodes that explicitly manage unlocked accounts. Allowed values: `true` `false`. Defaults to `false`.

- #### `JsonRpc.EnableLogsStreamMode` \{#jsonrpc-enablelogsstreammode\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-enablelogsstreammode [true|false]
  --JsonRpc.EnableLogsStreamMode [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_ENABLELOGSSTREAMMODE=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "EnableLogsStreamMode": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to stream `eth_getLogs` and `eth_getFilterLogs` responses as logs are found. When enabled, unauthenticated responses stop at `MaxLogsPerResponse` or `MaxLogsResponseBodySize` instead of buffering the full result and returning a limit error. Allowed values: `true` `false`. Defaults to `false`.

- #### `JsonRpc.EnablePerMethodMetrics` \{#jsonrpc-enablepermethodmetrics\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-enablepermethodmetrics [true|false]
  --JsonRpc.EnablePerMethodMetrics [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_ENABLEPERMETHODMETRICS=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "EnablePerMethodMetrics": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Enable per-method call metric Allowed values: `true` `false`. Defaults to `true`.

- #### `JsonRpc.EnableTracingStreamMode` \{#jsonrpc-enabletracingstreammode\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-enabletracingstreammode [true|false]
  --JsonRpc.EnableTracingStreamMode [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_ENABLETRACINGSTREAMMODE=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "EnableTracingStreamMode": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to stream `debug_trace*` and `trace_*` responses as the EVM executes (lower TTFB and bounded memory). For `debug_trace*` can be overridden per-call via `GethTraceOptions.StreamMode`. Allowed values: `true` `false`. Defaults to `true`.

- #### `JsonRpc.Enabled` \{#jsonrpc-enabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-enabled [true|false]
  --JsonRpc.Enabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_ENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "Enabled": true|false
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
  
  Defaults to `[Eth,Subscribe,Trace,TxPool,Web3,Proof,Net,Parity,Health,Rpc]`.

- #### `JsonRpc.EngineAllowedHosts` \{#jsonrpc-engineallowedhosts\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-engineallowedhosts <value>
  --JsonRpc.EngineAllowedHosts <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_ENGINEALLOWEDHOSTS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "EngineAllowedHosts": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The `Host` header values the JSON-RPC server accepts on authenticated (Engine API) URLs. The rules are the same as for `AllowedHosts`. Defaults to `*`.

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

- #### `JsonRpc.EthCallMaxConcurrentRequests` \{#jsonrpc-ethcallmaxconcurrentrequests\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-ethcallmaxconcurrentrequests <value>
  --JsonRpc.EthCallMaxConcurrentRequests <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_ETHCALLMAXCONCURRENTREQUESTS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "EthCallMaxConcurrentRequests": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The maximum number of `eth_call`, `eth_estimateGas` and `eth_createAccessList` requests that execute at a time, with or without overrides. A request above this number waits for a free slot for up to `JsonRpc.Timeout` and then fails with a `ModuleTimeout` JSON-RPC error. Waiting requests do not hold a thread and count toward `JsonRpc.RequestQueueLimit`; a request that would exceed it fails at once with a `LimitExceeded` JSON-RPC error. `0` or negative disables the limit. Defaults to four times the number of logical processors.

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
  
  - `eth_getLogs`
  - `eth_newBlockFilter`
  - `eth_newFilter`
  - `eth_newPendingTransactionFilter`
  - `eth_uninstallFilter`
  
  This limits the load on the CPU and I/O to reasonable levels. If the limit is exceeded,
  HTTP 503 is returned along with the JSON-RPC error. Also acts as the hard active
  concurrency cap on the override-path env pool used by sharable `eth_call` /
  `eth_estimateGas` / `eth_createAccessList` when called with state or blob-base-fee
  overrides: calls beyond this cap fail with a `LimitExceeded` JSON-RPC error. Defaults
  to the number of logical processors.

- #### `JsonRpc.FeeHistoryMaxBlockCount` \{#jsonrpc-feehistorymaxblockcount\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-feehistorymaxblockcount <value>
  --JsonRpc.FeeHistoryMaxBlockCount <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_FEEHISTORYMAXBLOCKCOUNT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "FeeHistoryMaxBlockCount": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The maximum number of blocks one `eth_feeHistory` call returns, from 1 to 1024; `0`, negative values and values above 1024 mean 1024. A larger `blockCount` is lowered to it, so the response then covers fewer blocks than requested. Defaults to `1024`.

- #### `JsonRpc.FeeHistoryMaxConcurrentRequests` \{#jsonrpc-feehistorymaxconcurrentrequests\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-feehistorymaxconcurrentrequests <value>
  --JsonRpc.FeeHistoryMaxConcurrentRequests <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_FEEHISTORYMAXCONCURRENTREQUESTS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "FeeHistoryMaxConcurrentRequests": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The maximum number of `eth_feeHistory` calls at once that need blocks missing from the fee cache of recent blocks. Calls served from that cache take no slot; one successful read of a cached block's reward data is shared by the calls that ask for it. Calls beyond the cap return `LimitExceeded` at once instead of waiting; a newest block whose header is not found gets the usual not-found error instead. Right after a restart, recent blocks count until each has been read once. `0` or negative to lift the limit. Defaults to a quarter of the number of logical processors, at least 1.

- #### `JsonRpc.FiltersTimeout` \{#jsonrpc-filterstimeout\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-filterstimeout <value>
  --JsonRpc.FiltersTimeout <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_FILTERSTIMEOUT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "FiltersTimeout": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The eth_filters timeout, in milliseconds. Defaults to `900000`.

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

  The maximum gas limit for `eth_call` and `eth_estimateGas`. Defaults to `100000000`.

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

- #### `JsonRpc.IpcEnabledModules` \{#jsonrpc-ipcenabledmodules\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-ipcenabledmodules <value>
  --JsonRpc.IpcEnabledModules <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_IPCENABLEDMODULES=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "IpcEnabledModules": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  An array of JSON-RPC namespaces to enable over the IPC socket, for instance `[engine,eth]`. If not set or empty, the IPC socket uses `JsonRpc.EnabledModules`.

- #### `JsonRpc.IpcProcessingConcurrency` \{#jsonrpc-ipcprocessingconcurrency\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-ipcprocessingconcurrency <value>
  --JsonRpc.IpcProcessingConcurrency <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_IPCPROCESSINGCONCURRENCY=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "IpcProcessingConcurrency": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The number of requests one IPC connection processes at a time. Requests pipelined on one connection are processed and answered in any order; each response carries its request id, and a batch is still processed and answered in order as one message. When `JsonRpc.EnabledModules` includes the Engine module, IPC always processes its requests one by one. Set to 1 if a client relies on the order, for example when it pipelines dependent transactions such as blob transactions with consecutive nonces. Defaults to `16`.

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

- #### `JsonRpc.JsonSerializationMaxDepth` \{#jsonrpc-jsonserializationmaxdepth\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-jsonserializationmaxdepth <value>
  --JsonRpc.JsonSerializationMaxDepth <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_JSONSERIALIZATIONMAXDEPTH=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "JsonSerializationMaxDepth": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The maximum depth of JSON response object tree. Defaults to `4096`.

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

  The path to the JWT secret file required for the Engine API authentication. Defaults to `null`.

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

- #### `JsonRpc.MaxBufferedTraceLogSize` \{#jsonrpc-maxbufferedtracelogsize\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-maxbufferedtracelogsize <value>
  --JsonRpc.MaxBufferedTraceLogSize <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_MAXBUFFEREDTRACELOGSIZE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "MaxBufferedTraceLogSize": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The max opcode log size, in bytes, per transaction of a `debug_trace*` or `debug_simulateV1` trace held in memory rather than streamed. Larger or unlimited `limit` trace options are lowered to it. It is also the max size, in bytes, of the trace data (call inputs, return data, code, memory, stack and storage changes) that a buffered `trace_*` request keeps over all the blocks it traces, and that a streamed `trace_*` request keeps per transaction; a larger trace fails. The transactions of a block streamed in parallel by `trace_block` or `trace_replayBlockTransactions` wait for room within it rather than fail, but for the earliest one not released yet, so together they keep at most twice as much; those of `trace_filter` fail when they do not fit together. `trace_simulateV1` keeps at most a third of it, as its response is serialized whole after the traces. `0` or negative to lift the limit. Defaults to `268435456`.

- #### `JsonRpc.MaxConcurrentSharedRequests` \{#jsonrpc-maxconcurrentsharedrequests\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-maxconcurrentsharedrequests <value>
  --JsonRpc.MaxConcurrentSharedRequests <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_MAXCONCURRENTSHAREDREQUESTS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "MaxConcurrentSharedRequests": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The max number of concurrent in-flight requests on the shared (sharable) singleton handler.
  Caps heavy methods promoted to sharable — `eth_call`, `eth_estimateGas`,
  `eth_createAccessList` — preventing unbounded concurrency from exhausting memory.
  Light sharable methods (e.g. `eth_blockNumber`, `eth_getBalance`) complete in \<1 ms and
  effectively never approach this limit. `eth_sendRawTransactionSync` holds a slot for as long
  as it waits for inclusion; see `RpcTxSyncMaxConcurrentRequests`. `0` to lift the limit. Defaults to `10000`.

- #### `JsonRpc.MaxFilters` \{#jsonrpc-maxfilters\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-maxfilters <value>
  --JsonRpc.MaxFilters <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_MAXFILTERS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "MaxFilters": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The max number of filters installed at a time with the `eth_newFilter`, `eth_newBlockFilter`, and `eth_newPendingTransactionFilter` JSON-RPC methods. `0` to lift the limit. Defaults to `10000`.

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

  Deprecated. JSON-RPC request parameters are omitted from logs. Defaults to `null`.

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

- #### `JsonRpc.MaxLogsResponseBodySize` \{#jsonrpc-maxlogsresponsebodysize\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-maxlogsresponsebodysize <value>
  --JsonRpc.MaxLogsResponseBodySize <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_MAXLOGSRESPONSEBODYSIZE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "MaxLogsResponseBodySize": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The max response body size, in bytes, for streamed `eth_getLogs` and `eth_getFilterLogs` JSON-RPC responses. Ignored unless `EnableLogsStreamMode` is enabled. `null` to use `MaxBatchResponseBodySize`. Defaults to `null`.

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

  The max length of an HTTP request body or a WebSocket message, in bytes. Defaults to `30000000`.

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

- #### `JsonRpc.MaxSimulateCallsCap` \{#jsonrpc-maxsimulatecallscap\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-maxsimulatecallscap <value>
  --JsonRpc.MaxSimulateCallsCap <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_MAXSIMULATECALLSCAP=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "MaxSimulateCallsCap": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The max total call count, across all blocks, for `eth_simulateV1`, `debug_simulateV1`, `trace_simulateV1` and, with bundle overrides, `debug_traceCallMany`. Defaults to `10000`.

- #### `JsonRpc.MaxSimulateCallsPerBlockCap` \{#jsonrpc-maxsimulatecallsperblockcap\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-maxsimulatecallsperblockcap <value>
  --JsonRpc.MaxSimulateCallsPerBlockCap <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_MAXSIMULATECALLSPERBLOCKCAP=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "MaxSimulateCallsPerBlockCap": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The max call count per block (per bundle for `debug_traceCallMany`) for the methods that `MaxSimulateCallsCap` covers. Defaults to `5000`.

- #### `JsonRpc.MaxSubscriptions` \{#jsonrpc-maxsubscriptions\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-maxsubscriptions <value>
  --JsonRpc.MaxSubscriptions <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_MAXSUBSCRIPTIONS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "MaxSubscriptions": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The max number of `eth_subscribe` and `admin_subscribe` subscriptions of all connections together. A call above this limit returns a `LimitExceeded` error. IPC and authenticated connections are not refused by this limit. `0` to lift the limit. Defaults to `10000`.

- #### `JsonRpc.MaxSubscriptionsPerConnection` \{#jsonrpc-maxsubscriptionsperconnection\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-maxsubscriptionsperconnection <value>
  --JsonRpc.MaxSubscriptionsPerConnection <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_MAXSUBSCRIPTIONSPERCONNECTION=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "MaxSubscriptionsPerConnection": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The max number of `eth_subscribe` and `admin_subscribe` subscriptions of one WebSocket or IPC connection. A call above this limit returns a `LimitExceeded` error. `0` to lift the limit. Defaults to `1000`.

- #### `JsonRpc.MaxUnsentResponsesPerAddress` \{#jsonrpc-maxunsentresponsesperaddress\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-maxunsentresponsesperaddress <value>
  --JsonRpc.MaxUnsentResponsesPerAddress <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_MAXUNSENTRESPONSESPERADDRESS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "MaxUnsentResponsesPerAddress": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The max number of HTTP JSON-RPC responses to unauthenticated URLs that one remote address, or one IPv6 /64 prefix, can have with more than 1 MiB written but not yet sent. Smaller responses, and responses still being written below that size, are not counted. A further response above 1 MiB is not sent and its connection is closed. Behind a reverse proxy all callers share the proxy's address, so rely on the proxy's limits or raise this value. `0` or negative to disable. Ignored when `MaxUnsentResponsesSize` is disabled. Defaults to `8`.

- #### `JsonRpc.MaxUnsentResponsesSize` \{#jsonrpc-maxunsentresponsessize\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-maxunsentresponsessize <value>
  --JsonRpc.MaxUnsentResponsesSize <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_MAXUNSENTRESPONSESSIZE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "MaxUnsentResponsesSize": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The max total size, in bytes, of HTTP JSON-RPC responses to unauthenticated URLs that are written but not yet sent. One response alone can use all of it. While a remote address has other unsent responses, it can hold at most 1/16 of it. IPv6 addresses are grouped by their /64 prefix, and a connection without a known address counts alone. A response that would go above either limit is not sent and its connection is closed; responses already in progress are not affected. Streamed results are not counted when `BufferResponses` is off, and bytes that a streamed result flushes are released when the streamed result ends. A batch that reaches `MaxBatchResponseBodySize` first, when that value is not above the share of one address, ends with the batch limit errors instead. Behind a reverse proxy all callers share the proxy's address, so rely on the proxy's limits or raise this value. `0` or negative to disable this limit. Defaults to `536870912`.

- #### `JsonRpc.MaxUnsentWebSocketResponseSize` \{#jsonrpc-maxunsentwebsocketresponsesize\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-maxunsentwebsocketresponsesize <value>
  --JsonRpc.MaxUnsentWebSocketResponseSize <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_MAXUNSENTWEBSOCKETRESPONSESIZE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "MaxUnsentWebSocketResponseSize": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The max size, in bytes, of a written but not yet sent response on one WebSocket connection to an unauthenticated URL. A connection is closed when its response is larger, or when the send does not complete within `JsonRpc.Timeout` plus one second for each 64 KiB of the response, at most five minutes more. `0` or negative to disable both. Defaults to `67108864`.

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

  An array of the method names not to log. Defaults to `[engine_newPayloadV1,engine_newPayloadV2,engine_newPayloadV3,engine_forkchoiceUpdatedV1,engine_forkchoiceUpdatedV2,flashbots_validateBuilderSubmissionV3,eth_signTransaction]`.

- #### `JsonRpc.MinResponseDataRate` \{#jsonrpc-minresponsedatarate\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-minresponsedatarate <value>
  --JsonRpc.MinResponseDataRate <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_MINRESPONSEDATARATE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "MinResponseDataRate": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The min rate, in bytes per second, at which a caller of an unauthenticated HTTP JSON-RPC URL must read a response, after a grace period of 10 seconds. The server closes the connection of a caller that reads more slowly. `0` disables the rate, also the server default one. Defaults to `65536`.

- #### `JsonRpc.OverlayMaxBlockRange` \{#jsonrpc-overlaymaxblockrange\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-overlaymaxblockrange <value>
  --JsonRpc.OverlayMaxBlockRange <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_OVERLAYMAXBLOCKRANGE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "OverlayMaxBlockRange": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The max number of blocks the `overlay_getLogs` JSON-RPC method re-executes in one call. `0` to lift the limit. Defaults to `1000`.

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

- #### `JsonRpc.PreloadRpcModules` \{#jsonrpc-preloadrpcmodules\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-preloadrpcmodules [true|false]
  --JsonRpc.PreloadRpcModules [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_PRELOADRPCMODULES=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "PreloadRpcModules": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Preload rpc modules. Useful in rpc provider to reduce latency on first request. Allowed values: `true` `false`. Defaults to `false`.

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

  The max number of concurrent requests waiting in the exclusive (non-sharable) queue for:
  
  - `eth_getLogs`
  - `eth_newFilter`
  - `eth_newBlockFilter`
  - `eth_newPendingTransactionFilter`
  - `eth_uninstallFilter`
  
  Calls beyond the limit return HTTP 503 immediately. `0` to lift the limit. Defaults to `500`.

- #### `JsonRpc.RestrictIpcSocketPermissions` \{#jsonrpc-restrictipcsocketpermissions\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-restrictipcsocketpermissions [true|false]
  --JsonRpc.RestrictIpcSocketPermissions [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_RESTRICTIPCSOCKETPERMISSIONS=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "RestrictIpcSocketPermissions": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to set the IPC socket UNIX file permissions to owner-only (600). Allowed values: `true` `false`. Defaults to `true`.

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

- #### `JsonRpc.RpcTxFeeCap` \{#jsonrpc-rpctxfeecap\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-rpctxfeecap <value>
  --JsonRpc.RpcTxFeeCap <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_RPCTXFEECAP=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "RpcTxFeeCap": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Maximum total tx fee (gasPrice * gasLimit, in wei) the node will sign in eth_signTransaction. 0 disables the cap. Default 1 ETH. Defaults to `1000000000000000000`.

- #### `JsonRpc.RpcTxSyncDefaultTimeoutMs` \{#jsonrpc-rpctxsyncdefaulttimeoutms\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-rpctxsyncdefaulttimeoutms <value>
  --JsonRpc.RpcTxSyncDefaultTimeoutMs <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_RPCTXSYNCDEFAULTTIMEOUTMS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "RpcTxSyncDefaultTimeoutMs": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Default server-side wait, in milliseconds, for eth_sendRawTransactionSync when the caller omits the timeout argument. Defaults to `20000`.

- #### `JsonRpc.RpcTxSyncMaxConcurrentRequests` \{#jsonrpc-rpctxsyncmaxconcurrentrequests\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-rpctxsyncmaxconcurrentrequests <value>
  --JsonRpc.RpcTxSyncMaxConcurrentRequests <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_RPCTXSYNCMAXCONCURRENTREQUESTS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "RpcTxSyncMaxConcurrentRequests": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Maximum number of concurrent eth_sendRawTransactionSync calls, independent of EthModuleConcurrentInstances. Excess calls are rejected before submitting the transaction. Each pending call also counts against MaxConcurrentSharedRequests for up to RpcTxSyncMaxTimeoutMs, so keep this well below MaxConcurrentSharedRequests. 0 disables this limit; MaxConcurrentSharedRequests then remains the only bound (none if it is 0 too). Defaults to `128`.

- #### `JsonRpc.RpcTxSyncMaxTimeoutMs` \{#jsonrpc-rpctxsyncmaxtimeoutms\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-rpctxsyncmaxtimeoutms <value>
  --JsonRpc.RpcTxSyncMaxTimeoutMs <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_RPCTXSYNCMAXTIMEOUTMS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "RpcTxSyncMaxTimeoutMs": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Maximum server-side wait, in milliseconds, that eth_sendRawTransactionSync will accept; client-supplied timeouts above this are clamped down. Defaults to `60000`.

- #### `JsonRpc.StrictHexFormat` \{#jsonrpc-stricthexformat\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-stricthexformat [true|false]
  --JsonRpc.StrictHexFormat [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_STRICTHEXFORMAT=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "StrictHexFormat": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Enable strict parsing rules for Block Params and Hashes in RPC requests. this will decrease compatibility but increase compliance with the spec. Allowed values: `true` `false`. Defaults to `true`.

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

- #### `JsonRpc.TraceBlockParallelism` \{#jsonrpc-traceblockparallelism\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-traceblockparallelism <value>
  --JsonRpc.TraceBlockParallelism <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_TRACEBLOCKPARALLELISM=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "TraceBlockParallelism": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The maximum number of workers tracing block transactions at once across the whole node in `debug_traceBlock*` and `trace_block`, for blocks whose transactions can each be traced alone on the state before it: blocks that carry an access list, and, with `FlatDb.HistoryTransactionIndexEnabled`, blocks covered by the transaction index. Debug and trace, and both kinds of block, share this one budget. `0` or `1` traces such blocks sequentially; larger values are capped at the number of logical processors and at 16. Once a block has been traced in parallel, the node keeps up to this many processing environments and twice this many background threads for debug, and as many again for trace. The deprecated `FlatDb.HistoryTransactionIndexTraceParallelism`, when set to anything but `0`, sizes this budget instead. Defaults to `4`.

- #### `JsonRpc.TraceModuleConcurrentInstances` \{#jsonrpc-tracemoduleconcurrentinstances\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-tracemoduleconcurrentinstances <value>
  --JsonRpc.TraceModuleConcurrentInstances <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_TRACEMODULECONCURRENTINSTANCES=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "TraceModuleConcurrentInstances": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The number of concurrent instances of the Trace RPC module (`trace_block`, `trace_transaction`, `trace_replay*`, etc.). Calls beyond this cap return `LimitExceeded`. Each instance holds block-processing environments for the life of the process, so raise it only where the memory is available. Defaults to 2.

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

- #### `JsonRpc.WebSocketsProcessingConcurrency` \{#jsonrpc-websocketsprocessingconcurrency\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --jsonrpc-websocketsprocessingconcurrency <value>
  --JsonRpc.WebSocketsProcessingConcurrency <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_JSONRPCCONFIG_WEBSOCKETSPROCESSINGCONCURRENCY=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "JsonRpc": {
      "WebSocketsProcessingConcurrency": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The number of requests one public WebSocket connection processes at a time. Requests pipelined on one connection are processed and answered in any order; each response carries its request id, and a batch is still processed and answered in order as one message. Connections that are authenticated or enable the Engine module always process their requests one by one. Set to 1 if a client relies on the order, for example when it pipelines dependent transactions such as blob transactions with consecutive nonces. Defaults to `16`.

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

### LogIndex

- #### `LogIndex.Enabled` \{#logindex-enabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --logindex-enabled [true|false]
  --LogIndex.Enabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_LOGINDEXCONFIG_ENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "LogIndex": {
      "Enabled": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether log index should be enabled. Allowed values: `true` `false`. Defaults to `false`.

- #### `LogIndex.MaxAggregationParallelism` \{#logindex-maxaggregationparallelism\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --logindex-maxaggregationparallelism <value>
  --LogIndex.MaxAggregationParallelism <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_LOGINDEXCONFIG_MAXAGGREGATIONPARALLELISM=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "LogIndex": {
      "MaxAggregationParallelism": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Maximum degree of parallelism for aggregating batches, per backfill direction. The forward and backward directions run at the same time until the forward direction reaches the head. Lower it to reduce the CPU load of the log index backfill, at the cost of a longer backfill. Minimum `1`. Values above `MaxAggregationQueueSize` (default `16`) have no effect. Defaults to `Max(ProcessorCount / 4, 1)`.

- #### `LogIndex.MaxCompressionParallelism` \{#logindex-maxcompressionparallelism\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --logindex-maxcompressionparallelism <value>
  --LogIndex.MaxCompressionParallelism <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_LOGINDEXCONFIG_MAXCOMPRESSIONPARALLELISM=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "LogIndex": {
      "MaxCompressionParallelism": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Maximum degree of parallelism for compressing overgrown key values, shared by both backfill directions. Lower it to reduce the CPU load of the log index backfill, at the cost of a longer backfill. Minimum `1`. Defaults to `Max(ProcessorCount / 4, 1)`.

- #### `LogIndex.MaxReceiptsParallelism` \{#logindex-maxreceiptsparallelism\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --logindex-maxreceiptsparallelism <value>
  --LogIndex.MaxReceiptsParallelism <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_LOGINDEXCONFIG_MAXRECEIPTSPARALLELISM=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "LogIndex": {
      "MaxReceiptsParallelism": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Maximum degree of parallelism for fetching receipts, per backfill direction. The forward and backward directions run at the same time until the forward direction reaches the head. Lower it to reduce the CPU load of the log index backfill, at the cost of a longer backfill. Minimum `1`. Defaults to `Max(ProcessorCount / 4, 1)`.

- #### `LogIndex.Reset` \{#logindex-reset\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --logindex-reset [true|false]
  --LogIndex.Reset [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_LOGINDEXCONFIG_RESET=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "LogIndex": {
      "Reset": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Log index is reset on startup if enabled. Allowed values: `true` `false`. Defaults to `false`.

### Mcp

- #### `Mcp.AllowedHosts` \{#mcp-allowedhosts\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --mcp-allowedhosts <value>
  --Mcp.AllowedHosts <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_MCPCONFIG_ALLOWEDHOSTS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Mcp": {
      "AllowedHosts": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  `Host` header values the MCP endpoint accepts, as host or host:port (for example `node.example.com` or `[2001:db8::1]:8555`, no scheme or path). An entry without a port matches any port. On a loopback `Host` they are accepted besides the loopback names; in remote mode only these (and the bound IP literal) are accepted, and at least one is required. Defaults to `[]`.

- #### `Mcp.AllowedOrigins` \{#mcp-allowedorigins\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --mcp-allowedorigins <value>
  --Mcp.AllowedOrigins <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_MCPCONFIG_ALLOWEDORIGINS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Mcp": {
      "AllowedOrigins": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Browser origins (for example, `http://localhost:6274`) allowed to call the MCP endpoint. Requests without an `Origin` header are allowed; requests with any other origin are rejected with HTTP 403. Defaults to `[]`.

- #### `Mcp.AuthTokenFile` \{#mcp-authtokenfile\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --mcp-authtokenfile <value>
  --Mcp.AuthTokenFile <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_MCPCONFIG_AUTHTOKENFILE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Mcp": {
      "AuthTokenFile": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Path to a file whose trimmed content is the bearer token MCP clients must send as `Authorization: Bearer <token>`. The token must be at least 32 characters. Mandatory in remote mode. If empty on a loopback `Host`, no authentication is required and access is limited to local processes. In remote mode, a client IP (IPv6: its /64) with 10 failed authentications within 60 seconds is answered with HTTP 429 until the window passes. Defaults to `null`.

- #### `Mcp.EnableTracing` \{#mcp-enabletracing\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --mcp-enabletracing [true|false]
  --Mcp.EnableTracing [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_MCPCONFIG_ENABLETRACING=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Mcp": {
      "EnableTracing": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether `trace_transaction` and the call-trace parts of `explain_transaction` (internal transfers, the failing call frame) are enabled. They replay transactions through the debug module in-process and are offered only when `JsonRpc.Enabled` is true and `debug` or `trace` is also in `JsonRpc.EnabledModules`. When disabled, `trace_transaction` fails with `unavailable` and `explain_transaction` skips the trace with a note. Allowed values: `true` `false`. Defaults to `true`.

- #### `Mcp.Enabled` \{#mcp-enabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --mcp-enabled [true|false]
  --Mcp.Enabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_MCPCONFIG_ENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Mcp": {
      "Enabled": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to start the MCP server. Allowed values: `true` `false`. Defaults to `false`.

- #### `Mcp.Host` \{#mcp-host\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --mcp-host <value>
  --Mcp.Host <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_MCPCONFIG_HOST=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Mcp": {
      "Host": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The IP address literal the MCP listener binds to (host names are rejected). A loopback address (`127.0.0.1`, `::1`) serves local clients only. Any other address, including `0.0.0.0` and `::`, enables remote mode, which requires `TlsCertificatePath`, `TlsCertificateKeyPath`, `AuthTokenFile` and `AllowedHosts`; plain HTTP is never served on a non-loopback address. Defaults to `127.0.0.1`.

- #### `Mcp.MaxCallDataSize` \{#mcp-maxcalldatasize\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --mcp-maxcalldatasize <value>
  --Mcp.MaxCallDataSize <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_MCPCONFIG_MAXCALLDATASIZE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Mcp": {
      "MaxCallDataSize": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The maximum size of the `call` tool input data, in bytes. Defaults to `131072`.

- #### `Mcp.MaxCallGas` \{#mcp-maxcallgas\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --mcp-maxcallgas <value>
  --Mcp.MaxCallGas <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_MCPCONFIG_MAXCALLGAS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Mcp": {
      "MaxCallGas": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The maximum gas one `call`, `call_function`, `estimate_gas` or `simulate_transaction` execution may use. Must not exceed `JsonRpc.GasCap`; the effective limit is the smaller of the two. Defaults to `50000000`.

- #### `Mcp.MaxConcurrentToolCalls` \{#mcp-maxconcurrenttoolcalls\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --mcp-maxconcurrenttoolcalls <value>
  --Mcp.MaxConcurrentToolCalls <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_MCPCONFIG_MAXCONCURRENTTOOLCALLS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Mcp": {
      "MaxConcurrentToolCalls": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The maximum number of tool calls executing concurrently. Further calls wait up to two seconds for a slot, then fail with a `resource_exhausted` error. Defaults to `4`.

- #### `Mcp.MaxIndexedLogBlockRange` \{#mcp-maxindexedlogblockrange\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --mcp-maxindexedlogblockrange <value>
  --Mcp.MaxIndexedLogBlockRange <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_MCPCONFIG_MAXINDEXEDLOGBLOCKRANGE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Mcp": {
      "MaxIndexedLogBlockRange": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The maximum number of blocks one `get_logs` page scans when the filter has an address or topic and the page starts inside the node's log index (`LogIndex.Enabled`); the page then stops at the last indexed block. Other pages use `MaxLogBlockRange`, and a value below it has no effect. Defaults to `1000000`.

- #### `Mcp.MaxLogBlockRange` \{#mcp-maxlogblockrange\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --mcp-maxlogblockrange <value>
  --Mcp.MaxLogBlockRange <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_MCPCONFIG_MAXLOGBLOCKRANGE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Mcp": {
      "MaxLogBlockRange": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The maximum number of blocks one `get_logs` page scans, inclusive. Queries over larger ranges are not rejected: they return the first page with a `nextCursor` to continue from. Defaults to `1000`.

- #### `Mcp.MaxLogs` \{#mcp-maxlogs\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --mcp-maxlogs <value>
  --Mcp.MaxLogs <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_MCPCONFIG_MAXLOGS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Mcp": {
      "MaxLogs": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The maximum number of logs one `get_logs` page returns; it is also the default and the upper bound of the tool's `limit` argument. Further matching logs are returned on the next page (`nextCursor`). Defaults to `10000`.

- #### `Mcp.MaxRequestBodySize` \{#mcp-maxrequestbodysize\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --mcp-maxrequestbodysize <value>
  --Mcp.MaxRequestBodySize <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_MCPCONFIG_MAXREQUESTBODYSIZE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Mcp": {
      "MaxRequestBodySize": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The maximum size of an MCP HTTP request body, in bytes. Defaults to `262144`.

- #### `Mcp.MaxResultSize` \{#mcp-maxresultsize\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --mcp-maxresultsize <value>
  --Mcp.MaxResultSize <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_MCPCONFIG_MAXRESULTSIZE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Mcp": {
      "MaxResultSize": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The maximum size of a serialized tool result, in bytes. Larger results fail with a `resource_exhausted` error. Defaults to `4194304`.

- #### `Mcp.MaxTraceCalls` \{#mcp-maxtracecalls\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --mcp-maxtracecalls <value>
  --Mcp.MaxTraceCalls <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_MCPCONFIG_MAXTRACECALLS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Mcp": {
      "MaxTraceCalls": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The maximum number of call frames returned by `trace_transaction`; deeper or wider call trees are truncated and flagged. Defaults to `2000`.

- #### `Mcp.Port` \{#mcp-port\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --mcp-port <value>
  --Mcp.Port <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_MCPCONFIG_PORT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Mcp": {
      "Port": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The TCP port of the MCP listener. The endpoint is served at `http(s)://<Host>:<Port>/mcp` (HTTPS when `TlsCertificatePath` is set). Must differ from every JSON-RPC, Engine API, WebSocket and metrics port. Defaults to `8555`.

- #### `Mcp.TlsCertificateKeyPath` \{#mcp-tlscertificatekeypath\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --mcp-tlscertificatekeypath <value>
  --Mcp.TlsCertificateKeyPath <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_MCPCONFIG_TLSCERTIFICATEKEYPATH=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Mcp": {
      "TlsCertificateKeyPath": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Path to the PEM-encoded private key (PKCS#8, PKCS#1 or SEC1, unencrypted) of `TlsCertificatePath`. Required whenever `TlsCertificatePath` is set. Defaults to `null`.

- #### `Mcp.TlsCertificatePath` \{#mcp-tlscertificatepath\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --mcp-tlscertificatepath <value>
  --Mcp.TlsCertificatePath <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_MCPCONFIG_TLSCERTIFICATEPATH=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Mcp": {
      "TlsCertificatePath": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Path to the PEM-encoded TLS certificate served by the MCP listener; further certificates in the file are sent as the chain. Required in remote mode; on a loopback `Host` it enables HTTPS. Loaded at startup: an unreadable file or a key mismatch aborts startup, and a certificate that is expired or expires within 14 days logs a warning. Defaults to `null`.

- #### `Mcp.ToolTimeout` \{#mcp-tooltimeout\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --mcp-tooltimeout <value>
  --Mcp.ToolTimeout <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_MCPCONFIG_TOOLTIMEOUT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Mcp": {
      "ToolTimeout": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The wall-clock limit for a single tool call, in milliseconds. Must not exceed `JsonRpc.Timeout`. Defaults to `10000`.

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

  The number of eligible newPayload calls between compacting collections that release process memory. Once due, the decommit runs only while the memory load is at or above `DecommitMemoryLoadPercent`, or once `CollectionsPerUnconditionalDecommit` calls have been counted; until then it is checked again after every call. Decommit waits for at least three seconds after payload completion (or PostBlockGcDelayMs, if longer); a new payload cancels the wait without clearing the count.
  
  Allowed values:
  
  - `-1`: No requests.
  - `0`: Requests every time.
  - A positive number: Requests after that many eligible newPayload calls, including calls whose entry was skipped or pending collection was cancelled. Calls made while the no-GC strategy is disabled (such as during sync) do not count.
  
  Defaults to `25`.

- #### `Merge.CollectionsPerUnconditionalDecommit` \{#merge-collectionsperunconditionaldecommit\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --merge-collectionsperunconditionaldecommit <value>
  --Merge.CollectionsPerUnconditionalDecommit <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_MERGECONFIG_COLLECTIONSPERUNCONDITIONALDECOMMIT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Merge": {
      "CollectionsPerUnconditionalDecommit": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The number of eligible newPayload calls after which a due decommit (see `CollectionsPerDecommit`) runs even below `DecommitMemoryLoadPercent`.
  
  Allowed values:
  
  - `-1`: Decommits only at or above `DecommitMemoryLoadPercent`.
  - A positive number: Decommits after that many eligible newPayload calls since the last decommit. A number below `CollectionsPerDecommit` decommits whenever due.
  
  Defaults to `300`.

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

  The compaction mode for ordinary post-block collections; periodic decommit collections always fully compact. No requests non-blocking collection, which may be skipped during background GC and may increase steady-state memory usage. When set to `Full`, compacts the large object heap (LOH) if `SweepMemory` is set to `Gen2`.

  Allowed values:
  - `No`: Disables memory compaction.
  - `Yes`: Enables memory compaction.
  - `Full`: Enables memory compaction with the large object heap (LOH) if `SweepMemory` is set to `Gen2`.

  Defaults to `No`.

- #### `Merge.DecommitMemoryLoadPercent` \{#merge-decommitmemoryloadpercent\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --merge-decommitmemoryloadpercent <value>
  --Merge.DecommitMemoryLoadPercent <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_MERGECONFIG_DECOMMITMEMORYLOADPERCENT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Merge": {
      "DecommitMemoryLoadPercent": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The memory load, in percent of physical memory or of the container's memory limit, at or above which a due decommit (see `CollectionsPerDecommit`) runs. The load is the one the runtime recorded at its last collection. Below it, the decommit waits for `CollectionsPerUnconditionalDecommit`. In a container with a memory limit, the load includes the container's active page cache (the runtime subtracts only inactive file pages), so a container with a warm cache, such as recently read database files, can stay at or above the threshold and then decommits whenever due, as before.
  
  Allowed values:
  
  - `0`: Decommits whenever due, whatever the memory load.
  - A number from 1 to 100: Decommits when due and the memory load is at least that percentage.
  
  Defaults to `70`.

- #### `Merge.Enabled` \{#merge-enabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --merge-enabled [true|false]
  --Merge.Enabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_MERGECONFIG_ENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Merge": {
      "Enabled": true|false
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
  --merge-prioritizeblocklatency [true|false]
  --Merge.PrioritizeBlockLatency [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_MERGECONFIG_PRIORITIZEBLOCKLATENCY=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Merge": {
      "PrioritizeBlockLatency": true|false
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
  --metrics-countersenabled [true|false]
  --Metrics.CountersEnabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_METRICSCONFIG_COUNTERSENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Metrics": {
      "CountersEnabled": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to publish metrics using .NET diagnostics that can be collected with dotnet-counters. Allowed values: `true` `false`. Defaults to `false`.

- #### `Metrics.DbMetricIntervalSeconds` \{#metrics-dbmetricintervalseconds\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --metrics-dbmetricintervalseconds <value>
  --Metrics.DbMetricIntervalSeconds <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_METRICSCONFIG_DBMETRICINTERVALSECONDS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Metrics": {
      "DbMetricIntervalSeconds": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The frequency of updating db metrics, in seconds. Defaults to `60`.

- #### `Metrics.EnableDbSizeMetrics` \{#metrics-enabledbsizemetrics\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --metrics-enabledbsizemetrics [true|false]
  --Metrics.EnableDbSizeMetrics [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_METRICSCONFIG_ENABLEDBSIZEMETRICS=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Metrics": {
      "EnableDbSizeMetrics": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to publish database size metrics. Allowed values: `true` `false`. Defaults to `true`.

- #### `Metrics.EnableDetailedMetric` \{#metrics-enabledetailedmetric\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --metrics-enabledetailedmetric [true|false]
  --Metrics.EnableDetailedMetric [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_METRICSCONFIG_ENABLEDETAILEDMETRIC=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Metrics": {
      "EnableDetailedMetric": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Enable detailed metric Allowed values: `true` `false`. Defaults to `false`.

- #### `Metrics.Enabled` \{#metrics-enabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --metrics-enabled [true|false]
  --Metrics.Enabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_METRICSCONFIG_ENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Metrics": {
      "Enabled": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to publish various metrics to Prometheus Pushgateway at a given interval. Allowed values: `true` `false`. Defaults to `false`.

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

- #### `Metrics.PauseDbMetricDuringBlockProcessing` \{#metrics-pausedbmetricduringblockprocessing\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --metrics-pausedbmetricduringblockprocessing [true|false]
  --Metrics.PauseDbMetricDuringBlockProcessing [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_METRICSCONFIG_PAUSEDBMETRICDURINGBLOCKPROCESSING=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Metrics": {
      "PauseDbMetricDuringBlockProcessing": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Defer db metric collection while blocks are being processed to prevent overhead. A deferred update still runs once the data is older than 10 times DbMetricIntervalSeconds. Set EnableDbSizeMetrics to false to disable collection entirely. Allowed values: `true` `false`. Defaults to `true`.

- #### `Metrics.PushGatewayPassword` \{#metrics-pushgatewaypassword\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --metrics-pushgatewaypassword <value>
  --Metrics.PushGatewayPassword <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_METRICSCONFIG_PUSHGATEWAYPASSWORD=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Metrics": {
      "PushGatewayPassword": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The Pushgateway basic authentication password. Both the username and password must be set to enable authentication.

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

- #### `Metrics.PushGatewayUsername` \{#metrics-pushgatewayusername\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --metrics-pushgatewayusername <value>
  --Metrics.PushGatewayUsername <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_METRICSCONFIG_PUSHGATEWAYUSERNAME=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Metrics": {
      "PushGatewayUsername": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The Pushgateway basic authentication username. Both the username and password must be set to enable authentication.

### Mining

- #### `Mining.Enabled` \{#mining-enabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --mining-enabled [true|false]
  --Mining.Enabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_MININGCONFIG_ENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Mining": {
      "Enabled": true|false
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
  --network-diagtracerenabled [true|false]
  --Network.DiagTracerEnabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_NETWORKCONFIG_DIAGTRACERENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Network": {
      "DiagTracerEnabled": true|false
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

  The EIP-1459 node list to discover peers from, as `enrtree://<signer public key>@<domain>`. A bare domain is also accepted, but then the list signature is not verified. For the default of `all.<chain name>.ethdisco.net`, leave unspecified. Defaults to `null`.

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

- #### `Network.EnableExternalIpResolution` \{#network-enableexternalipresolution\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --network-enableexternalipresolution [true|false]
  --Network.EnableExternalIpResolution [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_NETWORKCONFIG_ENABLEEXTERNALIPRESOLUTION=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Network": {
      "EnableExternalIpResolution": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to resolve missing external IPv4 and IPv6 addresses available on active local interfaces through public HTTPS services. Disable this for restricted networks; explicit external IP overrides are still used. Allowed values: `true` `false`. Defaults to `true`.

- #### `Network.EnableUPnP` \{#network-enableupnp\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --network-enableupnp [true|false]
  --Network.EnableUPnP [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_NETWORKCONFIG_ENABLEUPNP=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Network": {
      "EnableUPnP": true|false
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

  The primary external IP address used for the legacy enode string, discovery, and peer filtering. Missing IPv4 or IPv6 addresses are resolved independently when `EnableExternalIpResolution` is enabled; use this only to override the preferred primary address. An address family is advertised in the ENR only when every currently bound inbound transport serves it; only bound transports get port entries. Public external addresses (configured or resolved) refuse discovered private targets; configure them as static or trusted peers if required. Defaults to `null`.

- #### `Network.ExternalIpV4` \{#network-externalipv4\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --network-externalipv4 <value>
  --Network.ExternalIpV4 <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_NETWORKCONFIG_EXTERNALIPV4=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Network": {
      "ExternalIpV4": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The external IPv4 address to advertise. When unset and `EnableExternalIpResolution` is enabled, it is resolved automatically. Its ENR entry is published only when every currently bound inbound transport serves IPv4; only bound transports get port entries. Defaults to `null`.

- #### `Network.ExternalIpV6` \{#network-externalipv6\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --network-externalipv6 <value>
  --Network.ExternalIpV6 <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_NETWORKCONFIG_EXTERNALIPV6=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Network": {
      "ExternalIpV6": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The external IPv6 address to advertise in the ENR. When unset and `EnableExternalIpResolution` is enabled, it is resolved automatically. Its entry is published only when every currently bound inbound transport serves IPv6; only bound transports get port entries. Defaults to `null`.

- #### `Network.FilterDiscoveryNodesByRecentIp` \{#network-filterdiscoverynodesbyrecentip\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --network-filterdiscoverynodesbyrecentip [true|false]
  --Network.FilterDiscoveryNodesByRecentIp [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_NETWORKCONFIG_FILTERDISCOVERYNODESBYRECENTIP=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Network": {
      "FilterDiscoveryNodesByRecentIp": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Reject discovery nodes whose IP key was seen recently (time-windowed), using the peer IP filter. Allowed values: `true` `false`. Defaults to `true`.

- #### `Network.FilterDiscoveryNodesBySameSubnet` \{#network-filterdiscoverynodesbysamesubnet\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --network-filterdiscoverynodesbysamesubnet [true|false]
  --Network.FilterDiscoveryNodesBySameSubnet [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_NETWORKCONFIG_FILTERDISCOVERYNODESBYSAMESUBNET=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Network": {
      "FilterDiscoveryNodesBySameSubnet": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  When filtering discovery nodes by recent IP, bucket discovery node IPs by subnet (e.g., IPv4 /24, IPv6 /64) so multiple discovery node IPs in the same subnet share a single entry. If false, use exact IP addresses only. Allowed values: `true` `false`. Defaults to `true`.

- #### `Network.FilterPeersByRecentIp` \{#network-filterpeersbyrecentip\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --network-filterpeersbyrecentip [true|false]
  --Network.FilterPeersByRecentIp [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_NETWORKCONFIG_FILTERPEERSBYRECENTIP=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Network": {
      "FilterPeersByRecentIp": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Reject peers whose IP key was seen recently (time-windowed), using the peer IP filter. Allowed values: `true` `false`. Defaults to `true`.

- #### `Network.FilterPeersBySameSubnet` \{#network-filterpeersbysamesubnet\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --network-filterpeersbysamesubnet [true|false]
  --Network.FilterPeersBySameSubnet [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_NETWORKCONFIG_FILTERPEERSBYSAMESUBNET=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Network": {
      "FilterPeersBySameSubnet": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  When filtering by recent IP, bucket peers by subnet (e.g., IPv4 /24, IPv6 /64) so multiple IPs in the same subnet share a single entry. If false, use exact IP addresses only. Allowed values: `true` `false`. Defaults to `true`.

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

  The local IP for inbound listeners. When unset, listeners try a dual-stack wildcard on supported platforms and fall back to IPv4 if it cannot bind; macOS uses IPv4 by default. Set to `0.0.0.0` for IPv4-only, `::` for a dual-stack wildcard, or a specific address to restrict listeners to that address and family. A private listener does not permit discovered private targets when the configured or resolved external address is public; configure them as static or trusted peers if required. Defaults to `null`.

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

  The max allowed number of connected peers. One third is reserved for outbound connections. After a dialable candidate has been selected and five minutes pass without dialable candidates, the reserve falls to at most two slots. Each accepted outbound Hello restores the reserve by disconnecting at most one newest excess ordinary inbound peer. Static and trusted peers are exempt. Defaults to `50`.

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

  The maximum DotNetty arena count. Each arena holds chunks of 4 KiB \<\< `NettyArenaOrder`. Defaults to `8`.

- #### `Network.MaxPendingInboundConnections` \{#network-maxpendinginboundconnections\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --network-maxpendinginboundconnections <value>
  --Network.MaxPendingInboundConnections <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_NETWORKCONFIG_MAXPENDINGINBOUNDCONNECTIONS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Network": {
      "MaxPendingInboundConnections": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The maximum number of ordinary inbound connections awaiting an authenticated Hello. Privileged IPs have eight additional slots. Zero disables all inbound connections. Defaults to `50`.

- #### `Network.MaxPendingInboundConnectionsPerSource` \{#network-maxpendinginboundconnectionspersource\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --network-maxpendinginboundconnectionspersource <value>
  --Network.MaxPendingInboundConnectionsPerSource <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_NETWORKCONFIG_MAXPENDINGINBOUNDCONNECTIONSPERSOURCE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Network": {
      "MaxPendingInboundConnectionsPerSource": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Maximum pending ordinary inbound connections per IPv4 address or IPv6 /64. Zero disables ordinary inbound connections. Defaults to `4`.

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

  The size of the DotNetty arena order. The chunk size is 4 KiB \<\< order (8 MiB at 11). Negative values use the default. Defaults to `11`.

- #### `Network.OnlyStaticPeers` \{#network-onlystaticpeers\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --network-onlystaticpeers [true|false]
  --Network.OnlyStaticPeers [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_NETWORKCONFIG_ONLYSTATICPEERS=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Network": {
      "OnlyStaticPeers": true|false
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

- #### `Network.PublicClientIdFormat` \{#network-publicclientidformat\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --network-publicclientidformat <value>
  --Network.PublicClientIdFormat <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_NETWORKCONFIG_PUBLICCLIENTIDFORMAT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Network": {
      "PublicClientIdFormat": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  A template string for the public client id provided to external clients. Allowed placeholders: `{name}` `{version}` `{versionPostfix}` `{os}` `{runtime}`. Defaults to `{name}/{version}{versionPostfix}/{os}/{runtime}`.

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

### OpcodeTracing

- #### `OpcodeTracing.Enabled` \{#opcodetracing-enabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --opcodetracing-enabled [true|false]
  --OpcodeTracing.Enabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_OPCODETRACINGCONFIG_ENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "OpcodeTracing": {
      "Enabled": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to enable opcode tracing. Allowed values: `true` `false`. Defaults to `false`.

- #### `OpcodeTracing.EndBlock` \{#opcodetracing-endblock\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --opcodetracing-endblock <value>
  --OpcodeTracing.EndBlock <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_OPCODETRACINGCONFIG_ENDBLOCK=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "OpcodeTracing": {
      "EndBlock": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  End block number for tracing (inclusive). Used with StartBlock to define explicit range. Defaults to `null`.

- #### `OpcodeTracing.MaxDegreeOfParallelism` \{#opcodetracing-maxdegreeofparallelism\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --opcodetracing-maxdegreeofparallelism <value>
  --OpcodeTracing.MaxDegreeOfParallelism <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_OPCODETRACINGCONFIG_MAXDEGREEOFPARALLELISM=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "OpcodeTracing": {
      "MaxDegreeOfParallelism": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Maximum number of tracing workers. 0 switches to the number of logical processors. For Retrospective and RetrospectiveExecution modes. Defaults to `0`.

- #### `OpcodeTracing.Mode` \{#opcodetracing-mode\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --opcodetracing-mode <value>
  --OpcodeTracing.Mode <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_OPCODETRACINGCONFIG_MODE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "OpcodeTracing": {
      "Mode": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Tracing mode: RealTime (trace during processing), Retrospective (static bytecode analysis from database), or RetrospectiveExecution (full EVM replay from database). Defaults to `"RealTime"`.

- #### `OpcodeTracing.OutputDirectory` \{#opcodetracing-outputdirectory\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --opcodetracing-outputdirectory <value>
  --OpcodeTracing.OutputDirectory <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_OPCODETRACINGCONFIG_OUTPUTDIRECTORY=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "OpcodeTracing": {
      "OutputDirectory": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Directory of opcode trace JSON files to be written. Defaults to `traces/opcodes`.

- #### `OpcodeTracing.RecentBlocks` \{#opcodetracing-recentblocks\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --opcodetracing-recentblocks <value>
  --OpcodeTracing.RecentBlocks <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_OPCODETRACINGCONFIG_RECENTBLOCKS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "OpcodeTracing": {
      "RecentBlocks": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Number of recent blocks to trace from chain tip. Alternative to StartBlock/EndBlock. Defaults to `null`.

- #### `OpcodeTracing.StartBlock` \{#opcodetracing-startblock\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --opcodetracing-startblock <value>
  --OpcodeTracing.StartBlock <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_OPCODETRACINGCONFIG_STARTBLOCK=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "OpcodeTracing": {
      "StartBlock": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Start block number for tracing (inclusive). Used with EndBlock to define explicit range. Defaults to `null`.

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

  The Optimism sequencer URL. Defaults to `null`.

### PortfolioViewer

- #### `PortfolioViewer.Enabled` \{#portfolioviewer-enabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --portfolioviewer-enabled [true|false]
  --PortfolioViewer.Enabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_PORTFOLIOVIEWERCONFIG_ENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "PortfolioViewer": {
      "Enabled": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to serve the portfolio viewer UI (balances + NFTs) at the `/portfolio` path of the JSON-RPC HTTP endpoint. Allowed values: `true` `false`. Defaults to `false`.

- #### `PortfolioViewer.SiblingProbePorts` \{#portfolioviewer-siblingprobeports\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --portfolioviewer-siblingprobeports <value>
  --PortfolioViewer.SiblingProbePorts <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_PORTFOLIOVIEWERCONFIG_SIBLINGPROBEPORTS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "PortfolioViewer": {
      "SiblingProbePorts": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Comma-separated localhost ports probed to discover sibling Nethermind nodes on other chains for the multi-chain portfolio viewer. Defaults to `8545,8546,8547,8548,8549,8550`.

### Pruning

- #### `Pruning.AvailableSpaceCheckEnabled` \{#pruning-availablespacecheckenabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --pruning-availablespacecheckenabled [true|false]
  --Pruning.AvailableSpaceCheckEnabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_PRUNINGCONFIG_AVAILABLESPACECHECKENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Pruning": {
      "AvailableSpaceCheckEnabled": true|false
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

  The in-memory cache size, in MB. Bigger size tend to improve performance. Defaults to `1792`.

- #### `Pruning.DirtyCacheMb` \{#pruning-dirtycachemb\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --pruning-dirtycachemb <value>
  --Pruning.DirtyCacheMb <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_PRUNINGCONFIG_DIRTYCACHEMB=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Pruning": {
      "DirtyCacheMb": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The in-memory cache size for dirty nodes, in MB. Increasing this reduces pruning interval but cause increased pruning time. Defaults to `1536`.

- #### `Pruning.DirtyNodeShardBit` \{#pruning-dirtynodeshardbit\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --pruning-dirtynodeshardbit <value>
  --Pruning.DirtyNodeShardBit <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_PRUNINGCONFIG_DIRTYNODESHARDBIT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Pruning": {
      "DirtyNodeShardBit": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Number of dirty node shards as a base-2 exponent; the shard count is 2^DirtyNodeShardBit. Must be between 1 and 30. Defaults to `8`.

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
  --pruning-fullpruningdisablelowprioritywrites [true|false]
  --Pruning.FullPruningDisableLowPriorityWrites [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_PRUNINGCONFIG_FULLPRUNINGDISABLELOWPRIORITYWRITES=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Pruning": {
      "FullPruningDisableLowPriorityWrites": true|false
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

- #### `Pruning.MaxUnpersistedBlockCount` \{#pruning-maxunpersistedblockcount\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --pruning-maxunpersistedblockcount <value>
  --Pruning.MaxUnpersistedBlockCount <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_PRUNINGCONFIG_MAXUNPERSISTEDBLOCKCOUNT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Pruning": {
      "MaxUnpersistedBlockCount": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Maximum number of blocks worth of unpersisted state in memory. Default is 300, which is about one hour of mainnet blocks. Defaults to `300`.

- #### `Pruning.MinUnpersistedBlockCount` \{#pruning-minunpersistedblockcount\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --pruning-minunpersistedblockcount <value>
  --Pruning.MinUnpersistedBlockCount <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_PRUNINGCONFIG_MINUNPERSISTEDBLOCKCOUNT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Pruning": {
      "MinUnpersistedBlockCount": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Minimum number of block worth of unpersisted state in memory. Prevent memory pruning too often due to insufficient dirty cache memory. Defaults to `8`.

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

  The block persistence frequency. Only applied with archive node. Defaults to `1`.

- #### `Pruning.PrunePersistedNodeMinimumTarget` \{#pruning-prunepersistednodeminimumtarget\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --pruning-prunepersistednodeminimumtarget <value>
  --Pruning.PrunePersistedNodeMinimumTarget <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_PRUNINGCONFIG_PRUNEPERSISTEDNODEMINIMUMTARGET=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Pruning": {
      "PrunePersistedNodeMinimumTarget": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Minimum persisted cache prune target Defaults to `52428800`.

- #### `Pruning.PrunePersistedNodePortion` \{#pruning-prunepersistednodeportion\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --pruning-prunepersistednodeportion <value>
  --Pruning.PrunePersistedNodePortion <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_PRUNINGCONFIG_PRUNEPERSISTEDNODEPORTION=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Pruning": {
      "PrunePersistedNodePortion": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Portion of persisted node to be prune at a time Defaults to `0.05`.

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

- #### `Pruning.TrackPastKeys` \{#pruning-trackpastkeys\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --pruning-trackpastkeys [true|false]
  --Pruning.TrackPastKeys [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_PRUNINGCONFIG_TRACKPASTKEYS=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Pruning": {
      "TrackPastKeys": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Enable tracking of past key to reduce database and pruning cache growth Allowed values: `true` `false`. Defaults to `true`.

### Receipt

- #### `Receipt.CompactReceiptStore` \{#receipt-compactreceiptstore\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --receipt-compactreceiptstore [true|false]
  --Receipt.CompactReceiptStore [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_RECEIPTCONFIG_COMPACTRECEIPTSTORE=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Receipt": {
      "CompactReceiptStore": true|false
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
  --receipt-compacttxindex [true|false]
  --Receipt.CompactTxIndex [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_RECEIPTCONFIG_COMPACTTXINDEX=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Receipt": {
      "CompactTxIndex": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to compact receipts transaction index database size at the expense of RPC performance. Allowed values: `true` `false`. Defaults to `true`.

- #### `Receipt.DeferredPersistence` \{#receipt-deferredpersistence\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --receipt-deferredpersistence [true|false]
  --Receipt.DeferredPersistence [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_RECEIPTCONFIG_DEFERREDPERSISTENCE=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Receipt": {
      "DeferredPersistence": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether receipt, canonical transaction-index, block-body, and block-access-list writes are persisted by a background writer instead of synchronously on the block-processing and engine API paths. Reads are served from an in-memory overlay until flushed, and a state-persistence barrier makes a block's data durable before its state, so an unclean shutdown never leaves persisted state without it. Allowed values: `true` `false`. Defaults to `true`.

- #### `Receipt.DeriveFromState` \{#receipt-derivefromstate\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --receipt-derivefromstate [true|false]
  --Receipt.DeriveFromState [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_RECEIPTCONFIG_DERIVEFROMSTATE=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Receipt": {
      "DeriveFromState": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether receipt bodies are derived from state instead of persisted: their write is skipped, and a query re-executes the block over its parent state, serving the result only when it reproduces the block header's receipts root. Bodies already on disk are still served; pre-Byzantium bodies and the transaction index are always written. A skipped body is retained in memory until history capture durably covers its block, and is persisted if capture permanently stops (see the error log then), so a capture breakdown does not lose receipts. Intended for archive nodes: requires state history for the queried block, and peers are told no receipts are available. A query that misses the cache costs a full block execution, so a public endpoint should be rate limited; concurrency is bounded by JsonRpc.EthModuleConcurrentInstances. Allowed values: `true` `false`. Defaults to `false`.

- #### `Receipt.MaxBlockDepth` \{#receipt-maxblockdepth\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --receipt-maxblockdepth <value>
  --Receipt.MaxBlockDepth <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_RECEIPTCONFIG_MAXBLOCKDEPTH=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Receipt": {
      "MaxBlockDepth": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The maximum number of blocks a single `eth_getLogs` or `eth_getFilterLogs` request may read receipts of
  one by one. Blocks the log index can answer for do not count towards it, so on an indexed node the limit
  only bounds what falls back to a sequential read. Requests exceeding it are rejected with an
  "invalid params" (-32602) error. Set to 0 to disable the limit. Defaults to `10000`.

- #### `Receipt.ReceiptsMigration` \{#receipt-receiptsmigration\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --receipt-receiptsmigration [true|false]
  --Receipt.ReceiptsMigration [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_RECEIPTCONFIG_RECEIPTSMIGRATION=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Receipt": {
      "ReceiptsMigration": true|false
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
  --receipt-storereceipts [true|false]
  --Receipt.StoreReceipts [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_RECEIPTCONFIG_STORERECEIPTS=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Receipt": {
      "StoreReceipts": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to store receipts after a new block is processed. This setting is independent from downloading receipts in fast sync mode. Allowed values: `true` `false`. Defaults to `true`.

- #### `Receipt.StoreTxHashes` \{#receipt-storetxhashes\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --receipt-storetxhashes [true|false]
  --Receipt.StoreTxHashes [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_RECEIPTCONFIG_STORETXHASHES=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Receipt": {
      "StoreTxHashes": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to store the transaction hashes with compact receipts, so that `eth_getLogs` does not read block bodies. Older receipts get them in the background; the pass yields to block processing and continues after a restart. When disabled, receipts are written in the format that earlier versions read. Allowed values: `true` `false`. Defaults to `true`.

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

  The number of recent blocks to maintain transaction index for. `0` to never remove indices, `18446744073709551615` to never index. Defaults to `2350000`.

### SendPolicy

- #### `SendPolicy.Enabled` \{#sendpolicy-enabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --sendpolicy-enabled [true|false]
  --SendPolicy.Enabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SENDPOLICYCONFIG_ENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "SendPolicy": {
      "Enabled": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to check transactions submitted through this node's JSON-RPC against the rule file. Allowed values: `true` `false`. Defaults to `false`.

- #### `SendPolicy.JournalPath` \{#sendpolicy-journalpath\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --sendpolicy-journalpath <value>
  --SendPolicy.JournalPath <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SENDPOLICYCONFIG_JOURNALPATH=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "SendPolicy": {
      "JournalPath": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The path to the journal of transactions submitted by guarded senders. Defaults to the rule file path with `.journal` appended. Defaults to `null`.

- #### `SendPolicy.RulesPath` \{#sendpolicy-rulespath\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --sendpolicy-rulespath <value>
  --SendPolicy.RulesPath <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SENDPOLICYCONFIG_RULESPATH=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "SendPolicy": {
      "RulesPath": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The path to the rule file. The file is re-read when it changes. Update it by atomically replacing it with a fully written and closed temporary file in the same directory; in-place writes can expose incomplete rules. Defaults to `null`.

- #### `SendPolicy.WarnOnly` \{#sendpolicy-warnonly\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --sendpolicy-warnonly [true|false]
  --SendPolicy.WarnOnly [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SENDPOLICYCONFIG_WARNONLY=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "SendPolicy": {
      "WarnOnly": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to log a transaction that breaks a rule and submit it anyway. Allowed values: `true` `false`. Defaults to `false`.

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

  The p2p addresses of the Shutter Keyper network bootnodes. Defaults to `[]`.

- #### `Shutter.Enabled` \{#shutter-enabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --shutter-enabled [true|false]
  --Shutter.Enabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SHUTTERCONFIG_ENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Shutter": {
      "Enabled": true|false
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

  The filename to use for the Shutter P2P key. If this not specified, the key is autogenerated in `shutter.key.plain` file. Defaults to `shutter.key.plain`.

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
  --snapshot-enabled [true|false]
  --Snapshot.Enabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SNAPSHOTCONFIG_ENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Snapshot": {
      "Enabled": true|false
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

- #### `Snapshot.Streaming` \{#snapshot-streaming\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --snapshot-streaming [true|false]
  --Snapshot.Streaming [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SNAPSHOTCONFIG_STREAMING=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Snapshot": {
      "Streaming": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to stream the snapshot directly into the database directory without storing the archive file, reducing peak disk usage to the extracted size. Interrupted connections are resumed automatically within a run, but a node restart discards all progress and starts the download over, since no archive is kept on disk. Supported for tar-based archives only. Allowed values: `true` `false`. Defaults to `false`.

- #### `Snapshot.StreamingConnections` \{#snapshot-streamingconnections\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --snapshot-streamingconnections <value>
  --Snapshot.StreamingConnections <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SNAPSHOTCONFIG_STREAMINGCONNECTIONS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Snapshot": {
      "StreamingConnections": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The number of parallel connections the streaming snapshot download uses when the server supports range requests. Peak buffer memory is (connections + 1) x 64 MiB. Allowed range: 1-16. Defaults to `4`.

- #### `Snapshot.StripComponents` \{#snapshot-stripcomponents\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --snapshot-stripcomponents <value>
  --Snapshot.StripComponents <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SNAPSHOTCONFIG_STRIPCOMPONENTS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Snapshot": {
      "StripComponents": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Number of leading path components to strip when extracting a tar archive (passed as --strip-components to tar). Must be non-negative. Set this to match the depth of the snapshot path embedded in the archive. Defaults to `1`.

### StateDiffsWriter

- #### `StateDiffsWriter.Enabled` \{#statediffswriter-enabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --statediffswriter-enabled [true|false]
  --StateDiffsWriter.Enabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_STATEDIFFSWRITERCONFIG_ENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "StateDiffsWriter": {
      "Enabled": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Enable the per-block state-diff writer. Allowed values: `true` `false`. Defaults to `false`.

- #### `StateDiffsWriter.KeepLastNBlocks` \{#statediffswriter-keeplastnblocks\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --statediffswriter-keeplastnblocks <value>
  --StateDiffsWriter.KeepLastNBlocks <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_STATEDIFFSWRITERCONFIG_KEEPLASTNBLOCKS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "StateDiffsWriter": {
      "KeepLastNBlocks": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Number of most-recent blocks to retain in the BlockDiffs column family. Older entries are pruned by the background pruner. A consumer's catch-up should never need a window larger than this; lower for tighter disk budgets, raise if catch-up windows can exceed the default. Must be >= 0 (0 keeps nothing); a negative value disables pruning entirely. Defaults to `1000000`.

- #### `StateDiffsWriter.PruneIntervalSeconds` \{#statediffswriter-pruneintervalseconds\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --statediffswriter-pruneintervalseconds <value>
  --StateDiffsWriter.PruneIntervalSeconds <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_STATEDIFFSWRITERCONFIG_PRUNEINTERVALSECONDS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "StateDiffsWriter": {
      "PruneIntervalSeconds": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Interval in seconds between background pruner sweeps. The pruner removes BlockDiffs rows whose block number is older than (currentHead - KeepLastNBlocks). 0 or negative disables pruning. Defaults to `600`.

### Surge

- #### `Surge.AverageGasUsagePercentage` \{#surge-averagegasusagepercentage\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --surge-averagegasusagepercentage <value>
  --Surge.AverageGasUsagePercentage <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SURGECONFIG_AVERAGEGASUSAGEPERCENTAGE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Surge": {
      "AverageGasUsagePercentage": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Percentage of the average gas usage to be used for gas price calculation. Defaults to `80`.

- #### `Surge.BlocksPerBatch` \{#surge-blocksperbatch\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --surge-blocksperbatch <value>
  --Surge.BlocksPerBatch <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SURGECONFIG_BLOCKSPERBATCH=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Surge": {
      "BlocksPerBatch": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Number of L2 blocks per batch. Defaults to `1800`.

- #### `Surge.BoostBaseFeePercentage` \{#surge-boostbasefeepercentage\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --surge-boostbasefeepercentage <value>
  --Surge.BoostBaseFeePercentage <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SURGECONFIG_BOOSTBASEFEEPERCENTAGE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Surge": {
      "BoostBaseFeePercentage": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Percentage of the base fee that is used for boosting. Defaults to `5`.

- #### `Surge.EstimatedOffchainProvingCost` \{#surge-estimatedoffchainprovingcost\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --surge-estimatedoffchainprovingcost <value>
  --Surge.EstimatedOffchainProvingCost <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SURGECONFIG_ESTIMATEDOFFCHAINPROVINGCOST=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Surge": {
      "EstimatedOffchainProvingCost": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Estimated offchain proving cost per batch in wei (~$5.5 @ $3000/ETH). Defaults to `1833333333333333`.

- #### `Surge.FeeHistoryBlockCount` \{#surge-feehistoryblockcount\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --surge-feehistoryblockcount <value>
  --Surge.FeeHistoryBlockCount <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SURGECONFIG_FEEHISTORYBLOCKCOUNT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Surge": {
      "FeeHistoryBlockCount": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Number of blocks to consider for computing the L1 average base fee. Defaults to `200`.

- #### `Surge.FixedProposalGas` \{#surge-fixedproposalgas\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --surge-fixedproposalgas <value>
  --Surge.FixedProposalGas <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SURGECONFIG_FIXEDPROPOSALGAS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Surge": {
      "FixedProposalGas": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  L1 gas for batch proposal. Defaults to `75000`.

- #### `Surge.FixedProposalGasWithFullInboxBuffer` \{#surge-fixedproposalgaswithfullinboxbuffer\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --surge-fixedproposalgaswithfullinboxbuffer <value>
  --Surge.FixedProposalGasWithFullInboxBuffer <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SURGECONFIG_FIXEDPROPOSALGASWITHFULLINBOXBUFFER=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Surge": {
      "FixedProposalGasWithFullInboxBuffer": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  L1 gas for batch proposal with full inbox buffer. Defaults to `50000`.

- #### `Surge.FixedProvingGas` \{#surge-fixedprovinggas\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --surge-fixedprovinggas <value>
  --Surge.FixedProvingGas <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SURGECONFIG_FIXEDPROVINGGAS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Surge": {
      "FixedProvingGas": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  L1 gas for proof verification. Defaults to `30000`.

- #### `Surge.GasPriceRefreshTimeoutSeconds` \{#surge-gaspricerefreshtimeoutseconds\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --surge-gaspricerefreshtimeoutseconds <value>
  --Surge.GasPriceRefreshTimeoutSeconds <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SURGECONFIG_GASPRICEREFRESHTIMEOUTSECONDS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Surge": {
      "GasPriceRefreshTimeoutSeconds": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Maximum time in seconds to use cached gas price estimates before forcing a refresh. Defaults to `12`.

- #### `Surge.L1EthApiEndpoint` \{#surge-l1ethapiendpoint\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --surge-l1ethapiendpoint <value>
  --Surge.L1EthApiEndpoint <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SURGECONFIG_L1ETHAPIENDPOINT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Surge": {
      "L1EthApiEndpoint": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The URL of the L1 execution node JSON-RPC API. Defaults to `null`.

- #### `Surge.L2BlockGasTarget` \{#surge-l2blockgastarget\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --surge-l2blockgastarget <value>
  --Surge.L2BlockGasTarget <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SURGECONFIG_L2BLOCKGASTARGET=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Surge": {
      "L2BlockGasTarget": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Target gas per L2 block. Defaults to `40000`.

- #### `Surge.L2GasUsageWindowSize` \{#surge-l2gasusagewindowsize\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --surge-l2gasusagewindowsize <value>
  --Surge.L2GasUsageWindowSize <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SURGECONFIG_L2GASUSAGEWINDOWSIZE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Surge": {
      "L2GasUsageWindowSize": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Number of recent L2 blocks to consider for computing the moving average of gas usage. Defaults to `20`.

- #### `Surge.MaxGasLimitRatio` \{#surge-maxgaslimitratio\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --surge-maxgaslimitratio <value>
  --Surge.MaxGasLimitRatio <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SURGECONFIG_MAXGASLIMITRATIO=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Surge": {
      "MaxGasLimitRatio": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Filter transactions exceeding the max allowed ratio of gas limit to the actual gas used (e.g. 1, 2 etc.). Set to 0 to disable. Defaults to `0`.

- #### `Surge.SharingPercentage` \{#surge-sharingpercentage\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --surge-sharingpercentage <value>
  --Surge.SharingPercentage <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SURGECONFIG_SHARINGPERCENTAGE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Surge": {
      "SharingPercentage": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Percentage of the base fee that is shared with the L2 batch submitter. Defaults to `75`.

- #### `Surge.TaikoInboxAddress` \{#surge-taikoinboxaddress\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --surge-taikoinboxaddress <value>
  --Surge.TaikoInboxAddress <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SURGECONFIG_TAIKOINBOXADDRESS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Surge": {
      "TaikoInboxAddress": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The address of the TaikoInbox contract. Defaults to `null`.

- #### `Surge.TargetBlobCount` \{#surge-targetblobcount\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --surge-targetblobcount <value>
  --Surge.TargetBlobCount <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SURGECONFIG_TARGETBLOBCOUNT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Surge": {
      "TargetBlobCount": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Target blob count per batch. Defaults to `3`.

- #### `Surge.TdxEnabled` \{#surge-tdxenabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --surge-tdxenabled [true|false]
  --Surge.TdxEnabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SURGECONFIG_TDXENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Surge": {
      "TdxEnabled": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Enable TDX attestation support. Allowed values: `true` `false`. Defaults to `false`.

### SurgeTdx

- #### `SurgeTdx.ConfigPath` \{#surgetdx-configpath\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --surgetdx-configpath <value>
  --SurgeTdx.ConfigPath <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SURGETDXCONFIG_CONFIGPATH=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "SurgeTdx": {
      "ConfigPath": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Path to store TDX bootstrap data and keys. Defaults to `~/.config/nethermind/tdx`.

- #### `SurgeTdx.SocketPath` \{#surgetdx-socketpath\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --surgetdx-socketpath <value>
  --SurgeTdx.SocketPath <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SURGETDXCONFIG_SOCKETPATH=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "SurgeTdx": {
      "SocketPath": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Path to the tdxs Unix socket. Defaults to `/var/tdxs.sock`.

### Sync

- #### `Sync.AncientBlockAccessListsBarrier` \{#sync-ancientblockaccesslistsbarrier\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --sync-ancientblockaccesslistsbarrier <value>
  --Sync.AncientBlockAccessListsBarrier <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SYNCCONFIG_ANCIENTBLOCKACCESSLISTSBARRIER=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Sync": {
      "AncientBlockAccessListsBarrier": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The earliest block access list downloaded with fast sync when `DownloadBlockAccessListsInFastSync` is set to `true`.
  The actual value is determined as follows:
  
  ```
  max{ 1, min{ PivotNumber, AncientBlockAccessListsBarrier } }
  ```
  Defaults to `0`.

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

- #### `Sync.DownloadBlockAccessListsInFastSync` \{#sync-downloadblockaccesslistsinfastsync\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --sync-downloadblockaccesslistsinfastsync [true|false]
  --Sync.DownloadBlockAccessListsInFastSync [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SYNCCONFIG_DOWNLOADBLOCKACCESSLISTSINFASTSYNC=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Sync": {
      "DownloadBlockAccessListsInFastSync": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to download block access lists in the Fast sync mode. Allowed values: `true` `false`. Defaults to `true`.

- #### `Sync.DownloadBodiesInFastSync` \{#sync-downloadbodiesinfastsync\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --sync-downloadbodiesinfastsync [true|false]
  --Sync.DownloadBodiesInFastSync [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SYNCCONFIG_DOWNLOADBODIESINFASTSYNC=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Sync": {
      "DownloadBodiesInFastSync": true|false
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
  --sync-downloadheadersinfastsync [true|false]
  --Sync.DownloadHeadersInFastSync [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SYNCCONFIG_DOWNLOADHEADERSINFASTSYNC=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Sync": {
      "DownloadHeadersInFastSync": true|false
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
  --sync-downloadreceiptsinfastsync [true|false]
  --Sync.DownloadReceiptsInFastSync [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SYNCCONFIG_DOWNLOADRECEIPTSINFASTSYNC=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Sync": {
      "DownloadReceiptsInFastSync": true|false
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
  --sync-exitonsynced [true|false]
  --Sync.ExitOnSynced [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SYNCCONFIG_EXITONSYNCED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Sync": {
      "ExitOnSynced": true|false
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
  --sync-fastsync [true|false]
  --Sync.FastSync [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SYNCCONFIG_FASTSYNC=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Sync": {
      "FastSync": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to use the Fast sync mode (the eth/63 synchronization algorithm). Allowed values: `true` `false`. Defaults to `false`.

- #### `Sync.FixReceipts` \{#sync-fixreceipts\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --sync-fixreceipts [true|false]
  --Sync.FixReceipts [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SYNCCONFIG_FIXRECEIPTS=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Sync": {
      "FixReceipts": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to enable receipts validation that checks for receipts that might be missing because of a bug. If needed, receipts are downloaded from the network. The range to verify is `FixReceiptsStartingBlock`..`FixReceiptsLastBlock`. Allowed values: `true` `false`. Defaults to `false`.

- #### `Sync.FixReceiptsLastBlock` \{#sync-fixreceiptslastblock\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --sync-fixreceiptslastblock <value>
  --Sync.FixReceiptsLastBlock <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SYNCCONFIG_FIXRECEIPTSLASTBLOCK=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Sync": {
      "FixReceiptsLastBlock": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The last block (inclusive) to verify/fix receipts for. When not set, defaults to the chain head minus 2, to which it's always clamped. Defaults to `null`.

- #### `Sync.FixReceiptsStartingBlock` \{#sync-fixreceiptsstartingblock\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --sync-fixreceiptsstartingblock <value>
  --Sync.FixReceiptsStartingBlock <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SYNCCONFIG_FIXRECEIPTSSTARTINGBLOCK=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Sync": {
      "FixReceiptsStartingBlock": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The first block (inclusive) to verify/fix receipts for. When not set, defaults to the ancient receipts barrier, which depends on the pivot number; in that case the pivot number must be the same one used originally as it's the cut-off point. Defaults to `null`.

- #### `Sync.FixTotalDifficulty` \{#sync-fixtotaldifficulty\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --sync-fixtotaldifficulty [true|false]
  --Sync.FixTotalDifficulty [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SYNCCONFIG_FIXTOTALDIFFICULTY=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Sync": {
      "FixTotalDifficulty": true|false
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

  The max number of attempts to update the pivot block based on the FCU message from the consensus client. Set to `-1` to retry forever (recommended for nodes that may start before the consensus client is available). Defaults to `-1`.

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

  The max number of threads used for syncing. `0` to use the number of logical processors. Snap and state sync allow up to twice this many in-flight requests while limiting concurrent response processing to this value. Defaults to `0`.

- #### `Sync.NetworkingEnabled` \{#sync-networkingenabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --sync-networkingenabled [true|false]
  --Sync.NetworkingEnabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SYNCCONFIG_NETWORKINGENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Sync": {
      "NetworkingEnabled": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to connect to peers and sync. Allowed values: `true` `false`. Defaults to `true`.

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

- #### `Sync.ReconstructFinalizedStateFromBlockAccessLists` \{#sync-reconstructfinalizedstatefromblockaccesslists\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --sync-reconstructfinalizedstatefromblockaccesslists [true|false]
  --Sync.ReconstructFinalizedStateFromBlockAccessLists [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SYNCCONFIG_RECONSTRUCTFINALIZEDSTATEFROMBLOCKACCESSLISTS=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Sync": {
      "ReconstructFinalizedStateFromBlockAccessLists": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to catch up consensus-finalized blocks by applying their EIP-7928 block access lists instead of executing them. State and receipts roots are verified; unfinalized blocks, and blocks whose data is unavailable or mismatched, execute normally. Allowed values: `true` `false`. Defaults to `false`.

- #### `Sync.SnapServingMaxDepth` \{#sync-snapservingmaxdepth\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --sync-snapservingmaxdepth <value>
  --Sync.SnapServingMaxDepth <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SYNCCONFIG_SNAPSERVINGMAXDEPTH=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Sync": {
      "SnapServingMaxDepth": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The maximum depth (in blocks) for serving snap sync requests. Higher values allow serving requests for older blocks, useful for networks with fast block times like Arbitrum. Defaults to `128`.

- #### `Sync.SnapSync` \{#sync-snapsync\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --sync-snapsync [true|false]
  --Sync.SnapSync [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SYNCCONFIG_SNAPSYNC=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Sync": {
      "SnapSync": true|false
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

  The number of account range partitions to create. Increases the Snap sync request concurrency. Allowed values are between 1 and 256. Defaults to `8`.

- #### `Sync.StrictMode` \{#sync-strictmode\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --sync-strictmode [true|false]
  --Sync.StrictMode [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SYNCCONFIG_STRICTMODE=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Sync": {
      "StrictMode": true|false
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
  --sync-synchronizationenabled [true|false]
  --Sync.SynchronizationEnabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SYNCCONFIG_SYNCHRONIZATIONENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Sync": {
      "SynchronizationEnabled": true|false
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
  --sync-usegethlimitsinfastblocks [true|false]
  --Sync.UseGethLimitsInFastBlocks [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_SYNCCONFIG_USEGETHLIMITSINFASTBLOCKS=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "Sync": {
      "UseGethLimitsInFastBlocks": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to make smaller requests, in Fast Blocks mode, to avoid Geth from disconnecting. On the Geth-heavy networks (e.g., Mainnet), it's  a desired behavior while on Nethermind- or OpenEthereum-heavy networks (Aura), it slows down the sync by a factor of ~4. Allowed values: `true` `false`. Defaults to `true`.

### TraceStore

- #### `TraceStore.AdditionalRocksDbOptions` \{#tracestore-additionalrocksdboptions\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --tracestore-additionalrocksdboptions <value>
  --TraceStore.AdditionalRocksDbOptions <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TRACESTORECONFIG_ADDITIONALROCKSDBOPTIONS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TraceStore": {
      "AdditionalRocksDbOptions": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Semicolon-terminated RocksDB options for stored traces, appended after the global additional RocksDB options.

- #### `TraceStore.AddressIndexEnabled` \{#tracestore-addressindexenabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --tracestore-addressindexenabled [true|false]
  --TraceStore.AddressIndexEnabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TRACESTORECONFIG_ADDRESSINDEXENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TraceStore": {
      "AddressIndexEnabled": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to build a separate trace-address index for OTS history. Requires BlocksToKeep=0 and TraceTypes including Trace. Uncovered history is scanned. Allowed values: `true` `false`. Defaults to `false`.

- #### `TraceStore.AddressIndexFromBlock` \{#tracestore-addressindexfromblock\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --tracestore-addressindexfromblock <value>
  --TraceStore.AddressIndexFromBlock <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TRACESTORECONFIG_ADDRESSINDEXFROMBLOCK=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TraceStore": {
      "AddressIndexFromBlock": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The first block to index. Earlier history is scanned, not assumed empty. Defaults to `1`.

- #### `TraceStore.AddressIndexLag` \{#tracestore-addressindexlag\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --tracestore-addressindexlag <value>
  --TraceStore.AddressIndexLag <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TRACESTORECONFIG_ADDRESSINDEXLAG=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TraceStore": {
      "AddressIndexLag": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The number of blocks behind the head at which trace-address indexing stops. This is not a finality guarantee. Defaults to `64`.

- #### `TraceStore.AddressIndexReset` \{#tracestore-addressindexreset\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --tracestore-addressindexreset [true|false]
  --TraceStore.AddressIndexReset [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TRACESTORECONFIG_ADDRESSINDEXRESET=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TraceStore": {
      "AddressIndexReset": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to reset only the trace-address index on startup. Use once after checkpoint invalidation, then disable it. Allowed values: `true` `false`. Defaults to `false`.

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
  --tracestore-enabled [true|false]
  --TraceStore.Enabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TRACESTORECONFIG_ENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TraceStore": {
      "Enabled": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to enable the TraceStore plugin. If enabled, traces come from the database whenever possible. Allowed values: `true` `false`. Defaults to `false`.

- #### `TraceStore.OtsModuleConcurrentInstances` \{#tracestore-otsmoduleconcurrentinstances\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --tracestore-otsmoduleconcurrentinstances <value>
  --TraceStore.OtsModuleConcurrentInstances <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TRACESTORECONFIG_OTSMODULECONCURRENTINSTANCES=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TraceStore": {
      "OtsModuleConcurrentInstances": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The number of concurrent instances of the OTS RPC module. Values below 1 use 1. Raising this limit increases concurrent historical scans and their CPU, I/O and memory load. Defaults to `2`.

- #### `TraceStore.RocksDbOptions` \{#tracestore-rocksdboptions\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --tracestore-rocksdboptions <value>
  --TraceStore.RocksDbOptions <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TRACESTORECONFIG_ROCKSDBOPTIONS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TraceStore": {
      "RocksDbOptions": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  Semicolon-terminated RocksDB options for stored traces, appended to the global RocksDB defaults.

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

  The types of traces to store. Requests for unrecorded types fall back to live tracing and require available historical state. `trace_block` and `trace_filter` require both `Trace` and `Rewards` to use the store. Transaction replays requesting `Rewards` always trace live because stored transaction traces omit block rewards.

  Allowed values:
  - `None`: None.
  - `VmTrace`: Provides a full trace of the EVM state throughout the execution of transactions at each op-code, including subcalls.
  - `StateDiff`: Provides Ethereum state difference detailing all altered portions of the state made due to the execution of transactions.
  - `Trace`: Provides transaction trace, including subcalls.
  - `Rewards`: Includes block rewards in the trace when tracing full blocks.
  - `All`: Combines the `Rewards` `StateDiff` `Trace` `VmTrace` options.

  Defaults to `Trace, Rewards`.

### TrustedInput

- #### `TrustedInput.CacheSize` \{#trustedinput-cachesize\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --trustedinput-cachesize <value>
  --TrustedInput.CacheSize <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TRUSTEDINPUTCONFIG_CACHESIZE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TrustedInput": {
      "CacheSize": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The number of most recent captured inputs kept in memory. Defaults to `64`.

- #### `TrustedInput.Enabled` \{#trustedinput-enabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --trustedinput-enabled [true|false]
  --TrustedInput.Enabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TRUSTEDINPUTCONFIG_ENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TrustedInput": {
      "Enabled": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to capture trusted zkVM guest inputs while processing blocks, and serve them over `trustedinput_getInput`. A capture runs in the background after the import: it recovers each sender's and ECRECOVER key once more for the hints and encodes the input, and the last `CacheSize` inputs stay in memory, each the size of the block's witness, transactions and codes. Capture skips blocks while busy; RPC regenerates missing inputs. Allowed values: `true` `false`. Defaults to `false`.

- #### `TrustedInput.OutputDirectory` \{#trustedinput-outputdirectory\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --trustedinput-outputdirectory <value>
  --TrustedInput.OutputDirectory <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TRUSTEDINPUTCONFIG_OUTPUTDIRECTORY=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TrustedInput": {
      "OutputDirectory": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The directory each captured input is also written to, as `<number>-<hash>.nti`. No files are written when unset. Defaults to `null`.

### TxPool

- #### `TxPool.AcceptTxWhenNotSynced` \{#txpool-accepttxwhennotsynced\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --txpool-accepttxwhennotsynced [true|false]
  --TxPool.AcceptTxWhenNotSynced [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TXPOOLCONFIG_ACCEPTTXWHENNOTSYNCED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TxPool": {
      "AcceptTxWhenNotSynced": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Accept transactions when not synced. Allowed values: `true` `false`. Defaults to `false`.

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

  The max number of full blob transactions cached in memory. The default value uses max 200MB for 6 blobs where one blob is 33MB (256 * 128KB) Defaults to `256`.

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

- #### `TxPool.CurrentBlobBaseFeeRequired` \{#txpool-currentblobbasefeerequired\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --txpool-currentblobbasefeerequired [true|false]
  --TxPool.CurrentBlobBaseFeeRequired [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TXPOOLCONFIG_CURRENTBLOBBASEFEEREQUIRED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TxPool": {
      "CurrentBlobBaseFeeRequired": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether to require the max fee per blob gas to be greater than or equal to the current blob base fee when adding a blob transaction to the pool. Allowed values: `true` `false`. Defaults to `true`.

- #### `TxPool.FrameTxEvictionRetryBudget` \{#txpool-frametxevictionretrybudget\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --txpool-frametxevictionretrybudget <value>
  --TxPool.FrameTxEvictionRetryBudget <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TXPOOLCONFIG_FRAMETXEVICTIONRETRYBUDGET=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TxPool": {
      "FrameTxEvictionRetryBudget": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  EIP-8141: the number of distinct chain heads a frame transaction may fail to approve any payment across, during block production, before the pool evicts it. Some failures turn on head state that only a new head can clear (an out-of-range recent-root reference, a SENDER frame reached before its approval), so the budget is counted per head: repeated production passes against the same head spend a single unit. A value above `1` keeps a transiently-failing transaction for that many heads at the cost of re-simulating its validation prefix once per head; `1` (or below) evicts on the first failed attempt, the pre-budget behaviour. The budget is counted per pool residency, not per transaction: an evicted transaction may be resubmitted, and a resubmitted one is granted a fresh budget, because the failures it buys heads for turn on chain state that the time out of the pool may have cleared. Raising it therefore multiplies by that factor the production-time simulation a peer can provoke by re-gossiping a transaction that keeps failing. Defaults to `1`.

- #### `TxPool.FrameTxMaxCodeDependencies` \{#txpool-frametxmaxcodedependencies\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --txpool-frametxmaxcodedependencies <value>
  --TxPool.FrameTxMaxCodeDependencies <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TXPOOLCONFIG_FRAMETXMAXCODEDEPENDENCIES=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TxPool": {
      "FrameTxMaxCodeDependencies": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  EIP-8298: the max distinct accounts one frame transaction's validation prefix may rely on, counting accounts whose code can change through `DELEGATECALL` or `CALLCODE` and accounts EIP-8151 `ecRecover` returned. A prefix relying on more is rejected. `0` to reject all such transactions. Defaults to `8`.

- #### `TxPool.FrameTxMaxPendingPerDelegatingCode` \{#txpool-frametxmaxpendingperdelegatingcode\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --txpool-frametxmaxpendingperdelegatingcode <value>
  --TxPool.FrameTxMaxPendingPerDelegatingCode <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TXPOOLCONFIG_FRAMETXMAXPENDINGPERDELEGATINGCODE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TxPool": {
      "FrameTxMaxPendingPerDelegatingCode": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  EIP-8298: the max pending frame transactions whose validation prefix relies on the same account, when that account's code can change through `DELEGATECALL` or `CALLCODE`, or when EIP-8151 `ecRecover` returned that account. An account relied on only in the pay frame of a code-carrying paymaster other than the sender takes one slot per paymaster instead, in a separate set of this many slots, as that paymaster's own pending limit bounds its transactions. `0` to reject all such transactions. Defaults to `16`.

- #### `TxPool.FrameTxMaxVerifyGas` \{#txpool-frametxmaxverifygas\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --txpool-frametxmaxverifygas <value>
  --TxPool.FrameTxMaxVerifyGas <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TXPOOLCONFIG_FRAMETXMAXVERIFYGAS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TxPool": {
      "FrameTxMaxVerifyGas": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The node's execution-gas budget for a frame transaction's validation prefix plus signature verification. Positive values below the shared EIP-8141 `MAX_VERIFY_GAS` floor are raised to that floor. Higher values allow local headroom on any network. `0` lifts the static prefix admission limit while signature verification and prefix simulation retain the default 300,000-gas node budget. This setting does not affect block validity. Defaults to `300000`.

- #### `TxPool.FrameTxMaxVerifyStateGas` \{#txpool-frametxmaxverifystategas\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --txpool-frametxmaxverifystategas <value>
  --TxPool.FrameTxMaxVerifyStateGas <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TXPOOLCONFIG_FRAMETXMAXVERIFYSTATEGAS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TxPool": {
      "FrameTxMaxVerifyStateGas": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  EIP-8141 `MAX_VERIFY_STATE_GAS`: the max state gas a frame transaction's validation prefix may budget across its `limits.state` for it to be accepted into the public mempool. EIP-8250 charges a first use of each keyed nonce key 97,920 state gas, so at the default value a first-use set of more than five keys does not propagate. `0` to lift the limit. Raise it only on a test network. Defaults to `500000`.

- #### `TxPool.FrameTxPeerSimulationFairShare` \{#txpool-frametxpeersimulationfairshare\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --txpool-frametxpeersimulationfairshare [true|false]
  --TxPool.FrameTxPeerSimulationFairShare [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TXPOOLCONFIG_FRAMETXPEERSIMULATIONFAIRSHARE=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TxPool": {
      "FrameTxPeerSimulationFairShare": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  EIP-8141: whether each peer gets a fair share of `FrameTxSimulationBudgetPerHeadMs` for frame transactions that fail validation. Once a peer has spent its share, its next frame transactions in that head are dropped unvalidated and count as rejections towards its flood limits. Ignored when `FrameTxSimulationBudgetPerHeadMs` is `0`. Allowed values: `true` `false`. Defaults to `false`.

- #### `TxPool.FrameTxRevalidationDeferralBudget` \{#txpool-frametxrevalidationdeferralbudget\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --txpool-frametxrevalidationdeferralbudget <value>
  --TxPool.FrameTxRevalidationDeferralBudget <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TXPOOLCONFIG_FRAMETXREVALIDATIONDEFERRALBUDGET=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TxPool": {
      "FrameTxRevalidationDeferralBudget": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  EIP-8141: the number of *consecutive* chain heads a pending frame transaction the pool deferred rather than judged may be carried across before it stops re-queuing it. Any head that revalidates it without deferring it again resets the count. `0` stops re-queuing entirely. Defaults to `2`.

- #### `TxPool.FrameTxSimulationBudgetPerHeadMs` \{#txpool-frametxsimulationbudgetperheadms\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --txpool-frametxsimulationbudgetperheadms <value>
  --TxPool.FrameTxSimulationBudgetPerHeadMs <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TXPOOLCONFIG_FRAMETXSIMULATIONBUDGETPERHEADMS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TxPool": {
      "FrameTxSimulationBudgetPerHeadMs": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The total time, in milliseconds, spent simulating EIP-8141 validation prefixes per chain head. Once spent, opaque frame transactions are rejected until the next head. `0` to lift the limit. Defaults to `1000`.

- #### `TxPool.FrameTxSimulationTimeoutMs` \{#txpool-frametxsimulationtimeoutms\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --txpool-frametxsimulationtimeoutms <value>
  --TxPool.FrameTxSimulationTimeoutMs <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TXPOOLCONFIG_FRAMETXSIMULATIONTIMEOUTMS=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TxPool": {
      "FrameTxSimulationTimeoutMs": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The max time, in milliseconds, one EIP-8141 validation-prefix simulation may run before the transaction is rejected. A local submission may also wait this long for a busy simulator, so its ceiling is twice this value. `0` to lift the limit. Defaults to `250`.

- #### `TxPool.FrameTxWidthCap` \{#txpool-frametxwidthcap\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --txpool-frametxwidthcap <value>
  --TxPool.FrameTxWidthCap <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TXPOOLCONFIG_FRAMETXWIDTHCAP=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TxPool": {
      "FrameTxWidthCap": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  EIP-8141 MATCHA `width_cap`: the max width, in gas, a sender or a paymaster may hold. Newly finalized gas earns width only up to this cap; lowering it never shrinks width already earned. `0` lifts the cap. Used only when `FrameTxWidthEnabled` is set. Defaults to `0`.

- #### `TxPool.FrameTxWidthEnabled` \{#txpool-frametxwidthenabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --txpool-frametxwidthenabled [true|false]
  --TxPool.FrameTxWidthEnabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TXPOOLCONFIG_FRAMETXWIDTHENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TxPool": {
      "FrameTxWidthEnabled": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Whether each pending EIP-8250 keyed-nonce frame transaction a sender admits beyond the single EIP-8141 baseline transaction must spend sender width, earned from the gas the sender's finalized keyed-nonce frame transactions paid. Also rejects a keyed-nonce frame transaction whose nonce keys overlap a pending one of the same sender. The same rule applies to a code-carrying paymaster in place of the EIP-8141 cap on its pending sponsored frame transactions: each one beyond the single baseline transaction must spend paymaster width, earned from the gas of the finalized frame transactions the paymaster paid for. Experimental. Allowed values: `true` `false`. Defaults to `false`.

- #### `TxPool.FrameTxWidthSafetyFactorPermille` \{#txpool-frametxwidthsafetyfactorpermille\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --txpool-frametxwidthsafetyfactorpermille <value>
  --TxPool.FrameTxWidthSafetyFactorPermille <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TXPOOLCONFIG_FRAMETXWIDTHSAFETYFACTORPERMILLE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TxPool": {
      "FrameTxWidthSafetyFactorPermille": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  EIP-8141 MATCHA `safety_factor`, in permille of a keyed-nonce frame transaction's `admission_gas`, that fixes the width its admission and each revalidation spends: `charge = ceil(safety_factor * admission_gas)`. `admission_gas` is declared work: the transaction's intrinsic gas, which prices its data, signatures, nonce key access and recent-root references, plus the validation prefix's execution gas limits, not the gas the prefix actually burns. `1000` charges exactly that declared gas; a higher value adds headroom for client work EVM gas does not measure. Values below `1000` are raised to `1000`. Spent width is never returned. Used only when `FrameTxWidthEnabled` is set. Defaults to `1000`.

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

  The max number of cached hashes of already known transactions. Keep it well above `Size` + `PersistentBlobStorageSize`: a pooled transaction whose hash is evicted is fetched from peers again, and resubmitting it is rejected as an underpriced replacement. `0` disables the long-term cache, so hashes are only remembered until the next head. Defaults to `131072`.

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

- #### `TxPool.MaxBlobTxSize` \{#txpool-maxblobtxsize\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --txpool-maxblobtxsize <value>
  --TxPool.MaxBlobTxSize <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TXPOOLCONFIG_MAXBLOBTXSIZE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TxPool": {
      "MaxBlobTxSize": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The max blob transaction size allowed, excluding blobs, in bytes. Defaults to `1048576`.

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

- #### `TxPool.MaxTxSize` \{#txpool-maxtxsize\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --txpool-maxtxsize <value>
  --TxPool.MaxTxSize <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TXPOOLCONFIG_MAXTXSIZE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TxPool": {
      "MaxTxSize": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The max transaction size allowed, in bytes. Defaults to `131072`.

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

- #### `TxPool.MinBlobTxPriorityFee` \{#txpool-minblobtxpriorityfee\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --txpool-minblobtxpriorityfee <value>
  --TxPool.MinBlobTxPriorityFee <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TXPOOLCONFIG_MINBLOBTXPRIORITYFEE=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TxPool": {
      "MinBlobTxPriorityFee": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The minimum priority fee in wei for blob transactions to be accepted into the transaction pool. Defaults to `0`.

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

  The max number of full blob transactions stored in the database (increasing the number of transactions in the blob pool also results in higher memory usage). The default value uses max 13GB for 6 blobs where one blob is 2GB (16386 * 128KB). Defaults to `16384`.

- #### `TxPool.PersistentBroadcastEnabled` \{#txpool-persistentbroadcastenabled\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --txpool-persistentbroadcastenabled [true|false]
  --TxPool.PersistentBroadcastEnabled [true|false]
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TXPOOLCONFIG_PERSISTENTBROADCASTENABLED=true|false
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TxPool": {
      "PersistentBroadcastEnabled": true|false
    }
  }
  ```
  </TabItem>
  </Tabs>

  Add local transactions to persistent broadcast. Allowed values: `true` `false`. Defaults to `true`.

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

- #### `TxPool.SparseBlobProviderProbabilityPercent` \{#txpool-sparseblobproviderprobabilitypercent\}

  <Tabs groupId="usage">
  <TabItem value="cli" label="CLI">
  ```
  --txpool-sparseblobproviderprobabilitypercent <value>
  --TxPool.SparseBlobProviderProbabilityPercent <value>
  ```
  </TabItem>
  <TabItem value="env" label="Environment variable">
  ```
  NETHERMIND_TXPOOLCONFIG_SPARSEBLOBPROVIDERPROBABILITYPERCENT=<value>
  ```
  </TabItem>
  <TabItem value="config" label="Configuration file">
  ```json
  {
    "TxPool": {
      "SparseBlobProviderProbabilityPercent": <value>
    }
  }
  ```
  </TabItem>
  </Tabs>

  The EIP-8070 full-provider selection probability for normal sparse blob-pool nodes, in percent. Values are clamped to the protocol-compliant range `15..100`. Nodes with at least 64 custody columns act as supernodes and request every announced cell. Defaults to `15`.

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
