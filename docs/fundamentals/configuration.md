---
title: Configuration
sidebar_position: 1
toc_max_heading_level: 4
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Nethermind is highly configurable. There are 3 ways of configuring it, listed by priority:

- [Command line options](#command-line-options) (aka arguments or flags)
- [Environment variables](#environment-variables)
- [Configuration file](#configuration-file)

:::note
Given the above priority list, an option defined in a more priority way overrides the same option defined elsewhere if any.
:::

## Command line options

The full list of command line options can be displayed by running:

<Tabs groupId="os">
<TabItem value="linux-macos" label="Linux / macOS">

```bash
./nethermind -h
```

</TabItem>
<TabItem value="windows" label="Windows">

```powershell
./nethermind.exe -h
```

</TabItem>
</Tabs>

Below is the list of the basic options followed by an exhaustive list of options by module.

:::caution
The command line options are case-sensitive and can be defined only once unless stated otherwise.
:::

### Basic options

- **`-d, --baseDbPath <path>`**

  An absolute or relative path to the Nethermind database directory. Defaults to `db`.

- **`-c, --config <value>`**

  An absolute or relative path to the [configuration file](#configuration-file) or the name (without extension) of any of the  configuration files in the configuration directory. Defaults to `mainnet`.

  <details>
  <summary>Available configurations</summary>
  <p>

  Nethermind provides the following pre-built configurations named as the networks they are for. Their respective versions for archive nodes are suffixed `_archive`.

  - `chiado` `chiado_archive`
  - `energyweb` `energyweb_archive`
  - `exosama` `exosama_archive`
  - `goerli` `goerli_archive`
  - `gnosis` `gnosis_archive`
  - `mainnet` `mainnet_archive`
  - `sepolia` `sepolia_archive`
  - `volta` `volta_archive`

  </p>
  </details>

- **`-cd, --configsDirectory <path>`**

  An absolute or relative path to the configuration files directory. Defaults to `configs`.

- **`-dd, --datadir <path>`**

  An absolute or relative path to the Nethermind data directory. Defaults to Nethermind's current directory.

  :::caution
  The absolute paths set by `Init.BaseDbPath`, `Init.LogDirectory`, or `KeyStore.KeyStoreDirectory` options in a configuration file are not overridden by `--datadir`.
  :::

- **`-?, -h, --help`**

  Displays the full list of available command line options.

- **`-l, --log <level>`**

  Log level (severity). Allowed values: `TRACE` `DEBUG` `INFO` `WARN` `ERROR` `OFF`. Defaults to `INFO`.

- **`-lcs, --loggerConfigSource <path>`**

  An absolute or relative path to the NLog configuration file. Defaults to `NLog.config`.

- **`-pd, --pluginsDirectory <path>`**

  An absolute or relative path to the Nethermind plugins directory. Defaults to `plugins`.

- **`-v, --version`**

  Displays the Nethermind version info.

### Options by modules

<details>
<summary className="nd-details-heading">

#### Aura

</summary>
<p>

- **`--Aura.AllowAuRaPrivateChains <value>`** `NETHERMIND_AURACONFIG_ALLOWAURAPRIVATECHAINS`

  Whether to allow private Aura-based chains only. Allowed values: `true` `false`. Defaults to `false`.

- **`--Aura.ForceSealing <value>`** `NETHERMIND_AURACONFIG_FORCESEALING`

  Whether to seal empty blocks if mining. Allowed values: `true` `false`. Defaults to `true`.

- **`--Aura.Minimum2MlnGasPerBlockWhenUsingBlockGasLimitContract <value>`** `NETHERMIND_AURACONFIG_MINIMUM2MLNGASPERBLOCKWHENUSINGBLOCKGASLIMITCONTRACT`

  Whether to use 2M gas if the contract returns less than that when using BlockGasLimitContractTransitions. Allowed values: `true` `false`. Defaults to `false`.

- **`--Aura.TxPriorityConfigFilePath <value>`** `NETHERMIND_AURACONFIG_TXPRIORITYCONFIGFILEPATH`

  An absolute or relative path to the transaction priority rules file to use when selecting transactions from the transaction pool.

- **`--Aura.TxPriorityContractAddress <value>`** `NETHERMIND_AURACONFIG_TXPRIORITYCONTRACTADDRESS`

  The address of the transaction priority contract to use when selecting transactions from the transaction pool.

</p>
</details>

<details>
<summary className="nd-details-heading">

#### Blocks

</summary>
<p>

- **`--Blocks.ExtraData <value>`** `NETHERMIND_BLOCKSCONFIG_EXTRADATA`

  Block header extra data up to 32 bytes length. Defaults to `Nethermind`.

- **`--Blocks.MinGasPrice <value>`** `NETHERMIND_BLOCKSCONFIG_MINGASPRICE`

  Minimum gas premium (price if before the London hard-fork) for transactions accepted by the block producer.
  Defaults to `1`.

- **`--Blocks.RandomizedBlocks <value>`** `NETHERMIND_BLOCKSCONFIG_RANDOMIZEDBLOCKS`

  Whether to change the difficulty of the block randomly within the constraints. Used in NethDev only.
  Defaults to `false`.

- **`--Blocks.TargetBlockGasLimit <value>`** `NETHERMIND_BLOCKSCONFIG_TARGETBLOCKGASLIMIT`

  The block gas limit that the block producer should try to reach in the fastest possible way based on the protocol rules. If not specified, then the miner should follow other miners.
  
</p>
</details>

<details>
<summary className="nd-details-heading">

#### Bloom

</summary>
<p>

- **`--Bloom.Index <value>`** `NETHERMIND_BLOOMCONFIG_INDEX`

  Whether to use the Bloom index. The Bloom index speeds up the RPC log searches. Defaults to `true`.

- **`--Bloom.IndexLevelBucketSizes <value>`** `NETHERMIND_BLOOMCONFIG_INDEXLEVELBUCKETSIZES`

  An array of multipliers for index levels. Can be tweaked per chain to boost performance. Defaults to `[4,8,8]`.

- **`--Bloom.Migration <value>`** `NETHERMIND_BLOOMCONFIG_MIGRATION`

  Whether to migrate the previously downloaded blocks to Bloom index.
  Defaults to `false`.

- **`--Bloom.MigrationStatistics <value>`** `NETHERMIND_BLOOMCONFIG_MIGRATIONSTATISTICS`

  Whether the migration statistics should be calculated and output. Defaults to `false`.
  
</p>
</details>

<details>
<summary className="nd-details-heading">

#### EthStats

</summary>
<p>

- **`--EthStats.Contact <value>`** `NETHERMIND_ETHSTATSCONFIG_CONTACT`

  The node owner contact details displayed on Ethstats. Defaults to `hello@nethermind.io`.

- **`--EthStats.Enabled <value>`** `NETHERMIND_ETHSTATSCONFIG_ENABLED`

  Whether to use Ethstats publishing. Allowed values: `true` `false`. Defaults to `false`.

- **`--EthStats.Name <value>`** `NETHERMIND_ETHSTATSCONFIG_NAME`

  The node name displayed on Ethstats. Defaults to `Nethermind`.

- **`--EthStats.Secret <value>`** `NETHERMIND_ETHSTATSCONFIG_SECRET`

  The Ethstats secret. Defaults to `secret`.

- **`--EthStats.Server <value>`** `NETHERMIND_ETHSTATSCONFIG_SERVER`

  The Ethstats server URL. Defaults to `ws://localhost:3000/api`.
  
</p>
</details>

<details>
<summary className="nd-details-heading">

#### HealthChecks

</summary>
<p>

- **`--HealthChecks.Enabled <value>`** `NETHERMIND_HEALTHCHECKSCONFIG_ENABLED`

  Whether to enable the health check. Defaults to `false`.

- **`--HealthChecks.LowStorageCheckAwaitOnStartup <value>`** `NETHERMIND_HEALTHCHECKSCONFIG_LOWSTORAGECHECKAWAITONSTARTUP`

  Whether to check for low disk space on startup and suspend until enough space is available. Defaults to `false`.

- **`--HealthChecks.LowStorageSpaceShutdownThreshold <value>`** `NETHERMIND_HEALTHCHECKSCONFIG_LOWSTORAGESPACESHUTDOWNTHRESHOLD`

  The percentage of available disk space below which Nethermind shuts down. `0` to disable. Defaults to `1`.

- **`--HealthChecks.LowStorageSpaceWarningThreshold <value>`** `NETHERMIND_HEALTHCHECKSCONFIG_LOWSTORAGESPACEWARNINGTHRESHOLD`

  The percentage of available disk space below which a warning is displayed. `0` to disable. Defaults to `5`.

- **`--HealthChecks.MaxIntervalClRequestTime <value>`** `NETHERMIND_HEALTHCHECKSCONFIG_MAXINTERVALCLREQUESTTIME`

  The max request interval, in seconds, in which the consensus client is assumed healthy. Defaults to `300`.

- **`--HealthChecks.MaxIntervalWithoutProcessedBlock <value>`** `NETHERMIND_HEALTHCHECKSCONFIG_MAXINTERVALWITHOUTPROCESSEDBLOCK`

  The max interval, in seconds, in which the block processing is assumed healthy.

- **`--HealthChecks.MaxIntervalWithoutProducedBlock <value>`** `NETHERMIND_HEALTHCHECKSCONFIG_MAXINTERVALWITHOUTPRODUCEDBLOCK`

  The max interval, in seconds, in which the block production is assumed healthy.

- **`--HealthChecks.PollingInterval <value>`** `NETHERMIND_HEALTHCHECKSCONFIG_POLLINGINTERVAL`

  The health check updates polling interval, in seconds. Defaults to `5`.

- **`--HealthChecks.Slug <value>`** `NETHERMIND_HEALTHCHECKSCONFIG_SLUG`

  The URL slug the health checks service is exposed at. Defaults to `/health`.

- **`--HealthChecks.UIEnabled <value>`** `NETHERMIND_HEALTHCHECKSCONFIG_UIENABLED`

  Whether to enable the health checks UI. Defaults to `false`.

- **`--HealthChecks.WebhooksEnabled <value>`** `NETHERMIND_HEALTHCHECKSCONFIG_WEBHOOKSENABLED`

  Whether to enable web hooks. Defaults to `false`.

- **`--HealthChecks.WebhooksPayload <value>`** `NETHERMIND_HEALTHCHECKSCONFIG_WEBHOOKSPAYLOAD`

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

- **`--HealthChecks.WebhooksRestorePayload <value>`** `NETHERMIND_HEALTHCHECKSCONFIG_WEBHOOKSRESTOREPAYLOAD`

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
            "value": "The HealthCheck [[LIVENESS]] is recovered. All is up and running",
            "short": false
          }
        ]
      }
    ]
  }
  ```

- **`--HealthChecks.WebhooksUri <value>`** `NETHERMIND_HEALTHCHECKSCONFIG_WEBHOOKSURI`

  The web hook URL.
  
</p>
</details>

<details>
<summary className="nd-details-heading">

#### Hive

</summary>
<p>

- **`--Hive.BlocksDir <value>`** `NETHERMIND_HIVECONFIG_BLOCKSDIR`

  An absolute or relative path to the directory with additional blocks. Defaults to `/blocks`.

- **`--Hive.BlocksDir <value>`** `NETHERMIND_HIVECONFIG_CHAINFILE`

  An absolute or relative path to the test chain spec file. Defaults to `/chain.rlp`.

- **`--Hive.Enabled <value>`** `NETHERMIND_HIVECONFIG_ENABLED`

  Whether to enable Hive for debugging. Defaults to `false`.

- **`--Hive.GenesisFilePath <value>`** `NETHERMIND_HIVECONFIG_GENESISFILEPATH`

  An absolute or relative path to the genesis block file. Defaults to `/genesis.json`.

- **`--Hive.KeysDir <value>`** `NETHERMIND_HIVECONFIG_KEYSDIR`

  An absolute or relative path to the keystore directory. Defaults to `/keys`.

</p>
</details>

<details>
<summary className="nd-details-heading">

#### Init

</summary>
<p>

 - **`--Init.AutoDump <value>`** `NETHERMIND_INITCONFIG_AUTODUMP`

  Auto-dump on bad blocks for diagnostics. Allowed values: `None` `Receipts` `Parity` `Geth` `All`.
  Defaults to `Receipts`.

- **`--Init.BaseDbPath <value>`** `NETHERMIND_INITCONFIG_BASEDBPATH`

  An absolute or relative path for all Nethermind databases.
  Defaults to `db`.

- **`--Init.ChainSpecPath <value>`** `NETHERMIND_INITCONFIG_CHAINSPECPATH`

  An absolute or relative path to the chain spec file.
  Defaults to `chainspec/foundation.json`.

- **`--Init.DiagnosticMode <value>`** `NETHERMIND_INITCONFIG_DIAGNOSTICMODE`

  Diagnostic mode. Defaults to `None`.

  Allowed values:

    - `None`
    - `MemDb`: Use an in-memory database
    - `ReadOnlyDb`: Use a read-only database
    - `RpcDb`: Use a remote database
    - `VerifyRewards`: Scan rewards for blocks and genesis
    - `VerifySupply`: Scan and sum supply for all accounts
    - `VerifyTrie`: Verify whether the full state is stored

- **`--Init.DiscoveryEnabled <value>`** `NETHERMIND_INITCONFIG_DISCOVERYENABLED`

  If `false`, Nethermind doesn't look for other nodes beyond the bootnodes specified.
  Defaults to `true`.

- **`--Init.EnableUnsecuredDevWallet <value>`** `NETHERMIND_INITCONFIG_ENABLEUNSECUREDDEVWALLET`

  If `true`, enables the in-app wallet/keystore. Defaults to `false`.

- **`--Init.GenesisHash <value>`** `NETHERMIND_INITCONFIG_GENESISHASH`

  The hash of the genesis block. If not specified, the genesis block validity is not checked which is useful in the case of ad hoc test/private networks.

- **`--Init.HiveChainSpecPath <value>`** `NETHERMIND_INITCONFIG_HIVECHAINSPECPATH`

  An absolute or relative path to the chain spec file for Hive tests.
  Defaults to `chainspec/test.json`.

- **`--Init.IsMining <value>`** `NETHERMIND_INITCONFIG_ISMINING`

  If `true`, Nethermind seals/mines new blocks. Defaults to `false`.

- **`--Init.KeepDevWalletInMemory <value>`** `NETHERMIND_INITCONFIG_KEEPDEVWALLETINMEMORY`

  If `true`, any account created is valid for the current session only and deleted on Nethermind shutdown.
  Defaults to `false`.

- **`--Init.KzgSetupPath <value>`** `NETHERMIND_INITCONFIG_KZGSETUPPATH`

  An absolute or relative path to KZG trusted setup file.

- **`--Init.LogDirectory <value>`** `NETHERMIND_INITCONFIG_LOGDIRECTORY`

  An absolute or relative path to Nethermind logs directory. Defaults to `logs`.

- **`--Init.LogFileName <value>`** `NETHERMIND_INITCONFIG_LOGFILENAME`

  Name of the log file. Defaults to `log.txt`.

- **`--Init.LogRules <value>`** `NETHERMIND_INITCONFIG_LOGRULES`

  The logs format as `LogPath:LogLevel;*`.

- **`--Init.MemoryHint <value>`** `NETHERMIND_INITCONFIG_MEMORYHINT`

  A hint on the max memory limit, in bytes, to configure the database and networking memory allocations.

- **`--Init.PeerManagerEnabled <value>`** `NETHERMIND_INITCONFIG_PEERMANAGERENABLED`

  If `false`, Nethermind doesn't download/process new blocks. Defaults to `true`.

- **`--Init.RpcDbUrl <value>`** `NETHERMIND_INITCONFIG_RPCDBURL`

  The URL of the remote node used as a database source when `--Init.DiagnosticMode` is set to `RpcDb`.

- **`--Init.StaticNodesPath <value>`** `NETHERMIND_INITCONFIG_STATICNODESPATH`

  An absolute or relative path to the static nodes file. Defaults to `Data/static-nodes.json`.

- **`--Init.WebSocketsEnabled <value>`** `NETHERMIND_INITCONFIG_WEBSOCKETSENABLED`

  Whether to enable WebSocket service for the defaut JSON-RPC port on startup. Defaults to `true`.

</p>
</details>

<details>
<summary className="nd-details-heading">

#### JsonRpc

</summary>
<p>

- **`--JsonRpc.AdditionalRpcUrls <value>`** `NETHERMIND_JSONRPCCONFIG_ADDITIONALRPCURLS`

  An array of additional RPC URLs to listen at with protocol and JSON-RPC module list.
  For instance, `[http://localhost:8546|http;ws|eth;web3]`.

- **`--JsonRpc.BufferResponses <value>`** `NETHERMIND_JSONRPCCONFIG_BUFFERRESPONSES`

  Buffer responses before sending them. This allows using of `Content-Length` instead of `Transfer-Encoding: chunked`. Note that it may degrade performance on large responses. The max buffered response length is 2GB. Chunked responses can be larger.
  Defaults to `false`.

- **`--JsonRpc.CallsFilterFilePath <value>`** `NETHERMIND_JSONRPCCONFIG_CALLSFILTERFILEPATH`

  An absolute or relative path to the file with the list of new-line-separated JSON-RPC calls. If specified, only the calls from the file are allowed.

- **`--JsonRpc.Enabled <value>`** `NETHERMIND_JSONRPCCONFIG_ENABLED`

  Whether to enable the JSON-RPC service. Defaults to `false`.

- **`--JsonRpc.EnabledModules <value>`** `NETHERMIND_JSONRPCCONFIG_ENABLEDMODULES`

  An array of JSON-RPC modules to enable. For instance, `[engine,eth]`.

  Built-in modules:

  - `admin`
  - `client`
  - `debug`
  - `engine`
  - `eth` default
  - `evm`
  - `health` default
  - `net` default
  - `parity` default
  - `personal` default
  - `proof` default
  - `rpc` default
  - `subscribe` default
  - `trace` default
  - `txpool` default
  - `web3` default

- **`--JsonRpc.EngineHost <value>`** `NETHERMIND_JSONRPCCONFIG_ENGINEHOST`

  The Engine API host. Defaults to `127.0.0.1`.

- **`--JsonRpc.EnginePort <value>`** `NETHERMIND_JSONRPCCONFIG_ENGINEPORT`

  The Engine API port.

- **`--JsonRpc.EthModuleConcurrentInstances <value>`** `NETHERMIND_JSONRPCCONFIG_ETHMODULECONCURRENTINSTANCES`

  The number of concurrent instances for non-sharable calls:
  - `eth_call`
  - `eth_estimateGas`
  - `eth_getLogs`
  - `eth_newBlockFilter`
  - `eth_newFilter`
  - `eth_newPendingTransactionFilter`
  - `eth_uninstallFilter`
  
  This limits the load on the CPU and IO to reasonable levels. If the limit is exceeded, HTTP 503 is returned along with JSON-RPC error. Defaults to the number of logical processors.

- **`--JsonRpc.GasCap <value>`** `NETHERMIND_JSONRPCCONFIG_GASCAP`

  The gas limit for `eth_call` and `eth_estimateGas`. Defaults to `100000000`.

- **`--JsonRpc.Host <value>`** `NETHERMIND_JSONRPCCONFIG_HOST`

  The JSON-RPC service host. Defaults to `127.0.0.1`.

- **`--JsonRpc.IpcUnixDomainSocketPath <value>`** `NETHERMIND_JSONRPCCONFIG_IPCUNIXDOMAINSOCKETPATH`

  The path to connect a UNIX domain socket over.

- **`--JsonRpc.JwtSecretFile <value>`** `NETHERMIND_JSONRPCCONFIG_JWTSECRETFILE`

  An absolute or relative path to the JWT secret file required for authentication. Defaults to `keystore/jwt-secret`.

- **`--JsonRpc.MaxBatchResponseBodySize <value>`** `NETHERMIND_JSONRPCCONFIG_MAXBATCHRESPONSEBODYSIZE`

  The max batch size limit for batched JSON-RPC calls. Defaults to `1024`.

- **`--JsonRpc.MaxLoggedRequestParametersCharacters <value>`** `NETHERMIND_JSONRPCCONFIG_MAXLOGGEDREQUESTPARAMETERSCHARACTERS`

  The max number of characters of a JSON-RPC request parameter printing to the log.

- **`--JsonRpc.MaxRequestBodySize <value>`** `NETHERMIND_JSONRPCCONFIG_MAXREQUESTBODYSIZE`

  The max length of HTTP request body, in bytes. Defaults to `30000000`.

- **`--JsonRpc.MethodsLoggingFiltering <value>`** `NETHERMIND_JSONRPCCONFIG_METHODSLOGGINGFILTERING`

  An array of the method names not to log. Defaults to:
  
  - `engine_newPayloadV1`
  - `engine_newPayloadV2`
  - `engine_newPayloadV3`
  - `engine_forkchoiceUpdatedV1`
  - `engine_forkchoiceUpdatedV2`

- **`--JsonRpc.Port <value>`** `NETHERMIND_JSONRPCCONFIG_PORT`

  The JSON-RPC service HTTP port. Defaults to `8545`.

- **`--JsonRpc.ReportIntervalSeconds <value>`** `NETHERMIND_JSONRPCCONFIG_REPORTINTERVALSECONDS`

  The interval, in seconds, between the JSON-RPC stats report log. Defaults to `300`.

- **`--JsonRpc.RpcRecorderBaseFilePath <value>`** `NETHERMIND_JSONRPCCONFIG_RPCRECORDERBASEFILEPATH`

  An absolute or relative path to the base file for diagnostic recording. Defaults to `logs/rpc.{counter}.txt`.

- **`--JsonRpc.RpcRecorderState <value>`** `NETHERMIND_JSONRPCCONFIG_RPCRECORDERSTATE`

  The diagnostic recording mode. Allowed values: `None` `Request` `Response` `All`. Defaults to `None`.

- **`--JsonRpc.Timeout <value>`** `NETHERMIND_JSONRPCCONFIG_TIMEOUT`

  The request timeout, in milliseconds. Defaults to `20000`.

- **`--JsonRpc.WebSocketsPort <value>`** `NETHERMIND_JSONRPCCONFIG_WEBSOCKETSPORT`

  The JSON-RPC service WebSockets port. Defaults to `8545`.

</p>
</details>

<details>
<summary className="nd-details-heading">

#### Keystore

</summary>
<p>

- **`--Keystore.BlockAuthorAccount <value>`** `NETHERMIND_KEYSTORECONFIG_BLOCKAUTHORACCOUNT`

  An account to use as the block author (coinbase).

- **`--Keystore.Cipher <value>`** `NETHERMIND_KEYSTORECONFIG_CIPHER`

  See [Web3 secret storage definition][web3-secret-storage]. Defaults to `aes-128-ctr`.

- **`--Keystore.EnodeAccount <value>`** `NETHERMIND_KEYSTORECONFIG_ENODEACCOUNT`

  An account to use for networking (enode). If neither this nor the `--Keystore.EnodeKeyFile` option is specified, the key is autogenerated in `node.key.plain` file.

- **`--Keystore.EnodeKeyFile <value>`** `NETHERMIND_KEYSTORECONFIG_ENODEKEYFILE`

  A path to the key file to use by for networking (enode). If neither this nor the `--Keystore.EnodeAccount` is specified, the key is autogenerated in `node.key.plain` file.

- **`--Keystore.IVSize <value>`** `NETHERMIND_KEYSTORECONFIG_IVSIZE`

  See [Web3 secret storage definition][web3-secret-storage]. Defaults to `16`.

- **`--Keystore.Kdf <value>`** `NETHERMIND_KEYSTORECONFIG_KDF`

  See [Web3 secret storage definition][web3-secret-storage]. Defaults to `scrypt`.

- **`--Keystore.KdfparamsDklen <value>`** `NETHERMIND_KEYSTORECONFIG_KDFPARAMSDKLEN`

  See [Web3 secret storage definition][web3-secret-storage]. Defaults to `32`.

- **`--Keystore.KdfparamsN <value>`** `NETHERMIND_KEYSTORECONFIG_KDFPARAMSN`

  See [Web3 secret storage definition][web3-secret-storage]. Defaults to `262144`.

- **`--Keystore.KdfparamsP <value>`** `NETHERMIND_KEYSTORECONFIG_KDFPARAMSP`

  See [Web3 secret storage definition][web3-secret-storage]. Defaults to `1`.

- **`--Keystore.KdfparamsR <value>`** `NETHERMIND_KEYSTORECONFIG_KDFPARAMSR`

  See [Web3 secret storage definition][web3-secret-storage]. Defaults to `8`.

- **`--Keystore.KdfparamsSaltLen <value>`** `NETHERMIND_KEYSTORECONFIG_KDFPARAMSSALTLEN`

  See [Web3 secret storage definition][web3-secret-storage]. Defaults to `32`.

- **`--Keystore.KeyStoreDirectory <value>`** `NETHERMIND_KEYSTORECONFIG_KEYSTOREDIRECTORY`

  A path to the keystore directory. Defaults to `keystore`.

- **`--Keystore.KeyStoreEncoding <value>`** `NETHERMIND_KEYSTORECONFIG_KEYSTOREENCODING`

  See [Web3 secret storage definition][web3-secret-storage]. Defaults to `UTF-8`.

- **`--Keystore.PasswordFiles <value>`** `NETHERMIND_KEYSTORECONFIG_PASSWORDFILES`

  An array of password files paths used to unlock the accounts set with `--Keystore.UnlockAccounts`.

- **`--Keystore.Passwords <value>`** `NETHERMIND_KEYSTORECONFIG_PASSWORDS`

  An array of passwords used to unlock the accounts set with `--Keystore.UnlockAccounts`.

- **`--Keystore.SymmetricEncrypterBlockSize <value>`** `NETHERMIND_KEYSTORECONFIG_SYMMETRICENCRYPTERBLOCKSIZE`

  See [Web3 secret storage definition][web3-secret-storage]. Defaults to `128`.

- **`--Keystore.SymmetricEncrypterKeySize <value>`** `NETHERMIND_KEYSTORECONFIG_SYMMETRICENCRYPTERKEYSIZE`

  See [Web3 secret storage definition][web3-secret-storage]. Defaults to `128`.

- **`--Keystore.TestNodeKey <value>`** `NETHERMIND_KEYSTORECONFIG_TESTNODEKEY`

  A plaintext private key to use for testing purposes.

- **`--Keystore.UnlockAccounts <value>`** `NETHERMIND_KEYSTORECONFIG_UNLOCKACCOUNTS`

  An array of accounts to unlock on startup using passwords either in `--Keystore.PasswordFiles` and `--Keystore.Passwords`.

</p>
</details>

<details>
<summary className="nd-details-heading">

#### Merge

</summary>
<p>

- **`--Merge.BuilderRelayUrl <value>`** `NETHERMIND_MERGECONFIG_BUILDERRELAYURL`

  The URL of a builder relay. If specified, blocks are sent to the relay.

- **`--Merge.CollectionsPerDecommit <value>`** `NETHERMIND_MERGECONFIG_COLLECTIONSPERDECOMMIT`

  Request the garbage collector (GC) to release process memory back to the OS.
  Allowed values: `-1` to disable, `0` to release every time, and any positive meaning realising memory after that many Engine API calls. Defaults to `75`.

- **`--Merge.CompactMemory <value>`** `NETHERMIND_MERGECONFIG_COMPACTMEMORY`

  Reduce the process memory usage. Allowed values: `No` `Yes` `Full` (compacts LOH when `--Merge.SweepMemory Gen2`). Defaults to `Yes`.

- **`--Merge.Enabled <value>`** `NETHERMIND_MERGECONFIG_ENABLED`

  Whether to enable the Merge hard-fork. Defaults to `true`.

- **`--Merge.FinalTotalDifficulty <value>`** `NETHERMIND_MERGECONFIG_FINALTOTALDIFFICULTY`

  The total difficulty of the last PoW block. Must be greater than or equal to the terminal total difficulty (TTD).

- **`--Merge.PrioritizeBlockLatency <value>`** `NETHERMIND_MERGECONFIG_PRIORITIZEBLOCKLATENCY`

  Reduce block latency by disabling garbage collection during Engine API calls. Defaults to `true`.

- **`--Merge.SweepMemory <value>`** `NETHERMIND_MERGECONFIG_SWEEPMEMORY`

  Reduce memory usage by forcing garbage collection (GC) between Engine API calls. Allowed values: `NoGc` `Gen0` `Gen1` `Gen2`.
  Defaults to `Gen1`.

- **`--Merge.TerminalBlockHash <value>`** `NETHERMIND_MERGECONFIG_TERMINALBLOCKHASH`

  The terminal PoW block hash used for transition.

- **`--Merge.TerminalBlockNumber <value>`** `NETHERMIND_MERGECONFIG_TERMINALBLOCKNUMBER`

  The terminal PoW block number used for transition.

- **`--Merge.TerminalTotalDifficulty <value>`** `NETHERMIND_MERGECONFIG_TERMINALTOTALDIFFICULTY`

  The terminal total difficulty (TTD) used for transition.

</p>
</details>

<details>
<summary className="nd-details-heading">

#### Metrics

</summary>
<p>

- **`--Metrics.CountersEnabled <value>`** `NETHERMIND_METRICSCONFIG_COUNTERSENABLED`

  Whether to publish metrics using .NET diagnostics that can be collected with dotnet-counters. Allowed values: `true` `false`. Defaults to `false`.

- **`--Metrics.Enabled <value>`** `NETHERMIND_METRICSCONFIG_ENABLED`

  Whether to publish various metrics to Prometheus Pushgateway at a given interval. Allowed values: `true` `false`. Defaults to `false`.

- **`--Metrics.EnableDbSizeMetrics <value>`** `NETHERMIND_METRICSCONFIG_ENABLEDBSIZEMETRICS`

  Whether to publish database size metrics. Allowed values: `true` `false`. Defaults to `true`.

- **`--Metrics.ExposePort <value>`** `NETHERMIND_METRICSCONFIG_EXPOSEPORT`

  The port to expose Prometheus metrics at.

- **`--Metrics.IntervalSeconds <value>`** `NETHERMIND_METRICSCONFIG_INTERVALSECONDS`

  The frequency of pushing metrics to Prometheus, in seconds. Defaults to `5`.

- **`--Metrics.NodeName <value>`** `NETHERMIND_METRICSCONFIG_NODENAME`

  The name to display on the Grafana dashboard. Defaults to `Nethermind`.

- **`--Metrics.PushGatewayUrl <value>`** `NETHERMIND_METRICSCONFIG_PUSHGATEWAYURL`

  The Prometheus Pushgateway instance URL.

</p>
</details>

<details>
<summary className="nd-details-heading">

#### Mining

</summary>
<p>

- **`--Mining.Enabled <value>`** `NETHERMIND_MININGCONFIG_ENABLED`

  Whether to produce blocks. Defaults to `false`.

</p>
</details>

<details>
<summary className="nd-details-heading">

#### Network

</summary>
<p>

- **`--Network.Bootnodes <value>`** `NETHERMIND_NETWORKCONFIG_BOOTNODES`

  Bootnodes.

- **`--Network.DiagTracerEnabled <value>`** `NETHERMIND_NETWORKCONFIG_DIAGTRACERENABLED`

  Whether to enable a verbose diagnostic tracing. Allowed values: `true` `false`. Defaults to `false`.
  
- **`--Network.DiscoveryDns <value>`** `NETHERMIND_NETWORKCONFIG_DISCOVERYDNS`

  Use tree is available through a DNS name. For the default of `{chainName}.ethdisco.net`, leave unspecified.
  
- **`--Network.EnableUPnP <value>`** `NETHERMIND_NETWORKCONFIG_ENABLEUPNP`

  Whether to enable automatic port forwarding via UPnP. Defaults to `false`.
  
- **`--Network.ExternalIp <value>`** `NETHERMIND_NETWORKCONFIG_LOCALIP`

  The external IP. Use only when the external IP cannot be resolved automatically.
  
- **`--Network.LocalIp <value>`** `NETHERMIND_NETWORKCONFIG_LOCALIP`

  The local IP. Use only when the local IP cannot be resolved automatically.
  
- **`--Network.MaxActivePeers <value>`** `NETHERMIND_NETWORKCONFIG_MAXACTIVEPEERS`

  The max allowed number of connected peers. Defaults to `50`.
  
- **`--Network.MaxNettyArenaCount <value>`** `NETHERMIND_NETWORKCONFIG_MAXNETTYARENACOUNT`

  The maximum DotNetty arena count. Increasing this on a high-core CPU without increasing the memory budget may reduce chunk size so much that it causes a huge memory allocation. Defaults to `8`.
  
- **`--Network.NettyArenaOrder <value>`** `NETHERMIND_NETWORKCONFIG_NETTYARENAORDER`

  The size of the DotNetty arena order. `-1` to depend on the memory hint. Defaults to `-1`.
  
- **`--Network.OnlyStaticPeers <value>`** `NETHERMIND_NETWORKCONFIG_ONLYSTATICPEERS`

  Whether to use static peers only. Defaults to `false`.
  
- **`--Network.P2PPort <value>`** `NETHERMIND_NETWORKCONFIG_P2PPORT`

  The TCP port for incoming P2P connections. Defaults to `30303`.
  
- **`--Network.PriorityPeersMaxCount <value>`** `NETHERMIND_NETWORKCONFIG_PRIORITYPEERSMAXCOUNT`

  The max number of priority peers. Can be overridden by a plugin. Defaults to `0`.
  
- **`--Network.StaticPeers <value>`** `NETHERMIND_NETWORKCONFIG_STATICPEERS`

  A list of peers to keep connection for. Static peers are affected by `--Network.MaxActivePeers`.
  
</p>
</details>

<details>
<summary className="nd-details-heading">

#### Pruning

</summary>
<p>

- **`--Pruning.AvailableSpaceCheckEnabled <value>`** `NETHERMIND_PRUNINGCONFIG_AVAILABLESPACECHECKENABLED`

  Whether to enables available disk space check. Allowed values: `true` `false`. Defaults to `true`.

- **`--Pruning.CacheMb <value>`** `NETHERMIND_PRUNINGCONFIG_CACHEMB`

  The in-memory cache size, in MB. The bigger the cache size, the bigger the disk space savings. Defaults to `1024`.

- **`--Pruning.FullPruningCompletionBehavior <value>`** `NETHERMIND_PRUNINGCONFIG_FULLPRUNINGCOMPLETIONBEHAVIOR`

  The behavior after pruning completion. Defaults to `None`.

  Allowed values:

  - `None`: Do nothing.
  - `ShutdownOnSuccess`: Shut Nethermind down if pruning has succeeded but leave it running if failed.
  - `AlwaysShutdown`: Shut Nethermind down when pruning completes, regardless of its status.

- **`--Pruning.FullPruningDisableLowPriorityWrites <value>`** `NETHERMIND_PRUNINGCONFIG_FULLPRUNINGDISABLELOWPRIORITYWRITES`

  Whether to disable low-priority for pruning writes. Full pruning uses low-priority write operations to prevent blocking block processing. If block processing is not high-priority, set this option to `true` for faster pruning. Allowed values: `true` `false`. Defaults to `false`.

- **`--Pruning.FullPruningMaxDegreeOfParallelism <value>`** `NETHERMIND_PRUNINGCONFIG_FULLPRUNINGMAXDEGREEOFPARALLELISM`

  The max number of parallel tasks that can be used by full pruning. Defaults to `0`.

  Allowed values:
  
  - `-1` to use the number of logical processors
  - `0` to use 25% of logical processors
  - `1` to run on single thread.
  
  The recommended value depends on the type of the node. If the node needs to be responsive (serves for RPC or validator), then the recommended value is `0` or `-1`. If the node doesn't have many other responsibilities but needs to be able to follow the chain reliably without any delays and produce live logs, the `0` or `1` is recommended. If the node doesn't have to be responsive, has very fast I/O (like NVMe) and the shortest pruning time is to be achieved, then `-1` is recommended.

- **`--Pruning.FullPruningMemoryBudgetMb <value>`** `NETHERMIND_PRUNINGCONFIG_FULLPRUNINGMEMORYBUDGETMB`

  The memory budget, in MB, used for the trie visit. Increasing this value significantly reduces the IOPS requirement at the expense of memory usage. `0` to disable. Defaults to `4000`.

- **`--Pruning.FullPruningMinimumDelayHours <value>`** `NETHERMIND_PRUNINGCONFIG_FULLPRUNINGMINIMUMDELAYHOURS`

  The minimum delay, in hours, between full pruning operations not to exhaust disk writes. Defaults to `240`.

- **`--Pruning.FullPruningThresholdMb <value>`** `NETHERMIND_PRUNINGCONFIG_FULLPRUNINGTHRESHOLDMB`

  The threshold, in MB, to trigger full pruning. Depends on `--Pruning.Mode` and `--Pruning.FullPruningTrigger`. Defaults to `256000`.

- **`--Pruning.FullPruningTrigger <value>`** `NETHERMIND_PRUNINGCONFIG_FULLPRUNINGTRIGGER`

  The full pruning trigger. Defaults to `Manual`.

  Allowed values:

  - `Manual`: Triggered manually.
  - `StateDbSize`: Trigger when the state DB size is above the threshold.
  - `VolumeFreeSpace`: Trigger when the free disk space where the state DB is stored is below the threshold.

- **`--Pruning.Mode <value>`** `NETHERMIND_PRUNINGCONFIG_MODE`

  The pruning mode. Defaults to `Hybrid`.

  Allowed values:

  - `None`: No pruning (full archive)
  - `Memory`: In-memory pruning
  - `Full`: Full pruning
  - `Hybrid`: Combined in-memory and full pruning

- **`--Pruning.PersistenceInterval <value>`** `NETHERMIND_PRUNINGCONFIG_PERSISTENCEINTERVAL`

  The block persistence frequency. If set to `N`, it caches after each `Nth` block even if not required by cache memory usage. Defaults to `8192`.

</p>
</details>

<details>
<summary className="nd-details-heading">

#### Receipt

</summary>
<p>

- **`--Receipt.CompactReceiptStore <value>`** `NETHERMIND_RECEIPTCONFIG_COMPACTRECEIPTSTORE`

  Whether to compact receipts database size at the expense of RPC performance. Allowed values: `true` `false`. Defaults to `true`.

- **`--Receipt.CompactTxIndex <value>`** `NETHERMIND_RECEIPTCONFIG_COMPACTTXINDEX`

  Whether to compact receipts transaction index database size at the expense of RPC performance. Allowed values: `true` `false`. Defaults to `true`.

- **`--Receipt.ReceiptsMigration <value>`** `NETHERMIND_RECEIPTCONFIG_RECEIPTSMIGRATION`

  Whether to migrate the receipts database to the new schema. Allowed values: `true` `false`. Defaults to `false`.

- **`--Receipt.StoreReceipts <value>`** `NETHERMIND_RECEIPTCONFIG_STORERECEIPTS`

  Whether to store receipts after a new block is processed. This setting is independent from downloading receipts in fast sync mode. Allowed values: `true` `false`. Defaults to `true`.

- **`--Receipt.TxLookupLimit <value>`** `NETHERMIND_RECEIPTCONFIG_TXLOOKUPLIMIT`

  The number of recent blocks to maintain transaction index for. `0` to never remove indices, `-1` to never index. Defaults to `2350000`.

</p>
</details>

<details>
<summary className="nd-details-heading">

#### Seq

</summary>
<p>

- **`--Seq.ApiKey <value>`** `NETHERMIND_SEQCONFIG_APIKEY`

  The Seq API key.

- **`--Seq.MinLevel <value>`** `NETHERMIND_SEQCONFIG_MINLEVEL`

  The min log level to sent to Seq. Defauls to `Off`.

- **`--Seq.ServerUrl <value>`** `NETHERMIND_SEQCONFIG_SERVERURL`

  The Seq instance URL.


</p>
</details>

<details>
<summary className="nd-details-heading">

#### Sync

</summary>
<p>

- **`--Sync.AncientBodiesBarrier <value>`** `NETHERMIND_SYNCCONFIG_ANCIENTBODIESBARRIER`

  The earliest body downloaded with fast sync when `--Sync.DownloadBodiesInFastSync true`. The actual value is determined from `max(1, min(PivotNumber, AncientBodiesBarrier))`.

- **`--Sync.AncientReceiptsBarrier <value>`** `NETHERMIND_SYNCCONFIG_ANCIENTRECEIPTSBARRIER`

  The earliest receipt downloaded with fast sync when `--Sync.DownloadReceiptsInFastSync true`. The actual value is determined from `max(1, min(PivotNumber, max(AncientBodiesBarrier, AncientReceiptsBarrier)))`.

- **`--Sync.BlocksDbTuneDbMode <value>`** `NETHERMIND_SYNCCONFIG_BLOCKSDBTUNEDBMODE`

  Configure the blocks database for write optimizations during sync. Defaults to `EnableBlobFiles`.

  Allowed values:

  - `Default`
  - `WriteBias`
  - `HeavyWrite`
  - `AggressiveHeavyWrite`
  - `DisableCompaction`
  - `EnableBlobFiles`

- **`--Sync.DownloadBodiesInFastSync <value>`** `NETHERMIND_SYNCCONFIG_DOWNLOADBODIESINFASTSYNC`

  Whether to download the block bodies in the Fast sync mode. Allowed values: `true` `false`. Defaults to `true`.

- **`--Sync.DownloadBodiesInFastSync <value>`** `NETHERMIND_SYNCCONFIG_DOWNLOADBODIESINFASTSYNC`

  Whether to download the block bodies in the Fast sync mode. Allowed values: `true` `false`. Defaults to `true`.

- **`--Sync.DownloadHeadersInFastSync <value>`** `NETHERMIND_SYNCCONFIG_DOWNLOADHEADERSINFASTSYNC`

  Whether to download the old block headers in the Fast sync mode. If `false`, Nethermind downloads only recent blocks headers. Allowed values: `true` `false`. Defaults to `true`.

- **`--Sync.DownloadReceiptsInFastSync <value>`** `NETHERMIND_SYNCCONFIG_DOWNLOADRECEIPTSINFASTSYNC`

  Whether to download receipts in the Fast sync mode. This slows down the process by a few hours but allows to interact with dApps that perform extensive historical logs searches. Allowed values: `true` `false`. Defaults to `true`.

- **`--Sync.FastBlocks <value>`** `NETHERMIND_SYNCCONFIG_FASTBLOCKS`

  Whether to first download blocks from the provided pivot number downwards in the Fast sync mode. This allows for parallelization of requests with many sync peers and with no need to worry about syncing a valid branch (syncing downwards to 0). You need to provide the pivot block number, hash, and total difficulty from a trusted source (e.g., Etherscan) and confirm with other sources if you want to change it. Allowed values: `true` `false`. Defaults to `false`.

- **`--Sync.FastSync <value>`** `NETHERMIND_SYNCCONFIG_FASTSYNC`

  Whether to use the Fast sync mode (the eth/63 synchronization algorithm). Allowed values: `true` `false`. Defaults to `false`.

- **`--Sync.FastSyncCatchUpHeightDelta <value>`** `NETHERMIND_SYNCCONFIG_FASTSYNCCATCHUPHEIGHTDELTA`

  In Fast sync mode, the min height threshold limit up to which the Full sync, if already on, stays on when the chain is behind the network head. If the limit is exceeded, it switches back to Fast sync. For regular usage scenarios, setting this value lower than 32 is not recommended as this can cause issues with chain reorgs. Note that the last 2 blocks are always processed in Full sync, so setting it lower than 2 has no effect. Defaults to `8192`.

- **`--Sync.FixReceipts <value>`** `NETHERMIND_SYNCCONFIG_FIXRECEIPTS`

  Whether to enable receipts validation that checks for receipts that might be missing because of a bug. If needed, receipts are downloaded from the network. If `true`, the pivot number must be same one used originally as it's used as a cut-off point. Allowed values: `true` `false`. Defaults to `false`.

- **`--Sync.FixTotalDifficulty <value>`** `NETHERMIND_SYNCCONFIG_FIXTOTALDIFFICULTY`

  Whether to recalculate the total difficulty from `--Sync.FixTotalDifficultyStartingBlock` to `--Sync.FixTotalDifficultyLastBlock`. Allowed values: `true` `false`. Defaults to `false`.

- **`--Sync.FixTotalDifficultyLastBlock <value>`** `NETHERMIND_SYNCCONFIG_FIXTOTALDIFFICULTYLASTBLOCK`

  The last block to recalculate the total difficulty for. If not specified, the best known block is used.

- **`--Sync.FixTotalDifficultyStartingBlock <value>`** `NETHERMIND_SYNCCONFIG_FIXTOTALDIFFICULTYSTARTINGBLOCK`

  The first block to recalculate the total difficulty for.

- **`--Sync.MaxAttemptsToUpdatePivot <value>`** `NETHERMIND_SYNCCONFIG_MAXATTEMPTSTOUPDATEPIVOT`

  The max number of attempts to update the pivot block based on the FCU message from the consensus client. Defaults to `900`.

- **`--Sync.MaxProcessingThreads <value>`** `NETHERMIND_SYNCCONFIG_MAXPROCESSINGTHREADS`

  The max number of threads used for syncing. `0` to use the number of logical processors. Defaults to `0`.

- **`--Sync.NetworkingEnabled <value>`** `NETHERMIND_SYNCCONFIG_NETWORKINGENABLED`

  Whether to connect to peers and sync. Allowed values: `true` `false`. Defaults to `true`.

- **`--Sync.NonValidatorNode <value>`** `NETHERMIND_SYNCCONFIG_NONVALIDATORNODE`

  Whether to operate as a non-validator. If `true`, the `--Sync.DownloadReceiptsInFastSync` and `--Sync.DownloadBodiesInFastSync` can be set to `false`. Allowed values: `true` `false`. Defaults to `false`.

- **`--Sync.PivotHash <value>`** `NETHERMIND_SYNCCONFIG_PIVOTHASH`

  The hash of the pivot block for the Fast sync mode.

- **`--Sync.PivotNumber <value>`** `NETHERMIND_SYNCCONFIG_PIVOTNUMBER`

  The number of the pivot block for the Fast sync mode. Defaults to `0`.

- **`--Sync.PivotTotalDifficulty <value>`** `NETHERMIND_SYNCCONFIG_PIVOTTOTALDIFFICULTY`

  The total difficulty of the pivot block for the Fast sync mode.

- **`--Sync.SnapSync <value>`** `NETHERMIND_SYNCCONFIG_SNAPSYNC`

  Whether to use the Snap sync mode. Allowed values: `true` `false`. Defaults to `false`.

- **`--Sync.SnapSyncAccountRangePartitionCount <value>`** `NETHERMIND_SYNCCONFIG_SNAPSYNCACCOUNTRANGEPARTITIONCOUNT`

  The number of account range partitions to create. Increases the Snap sync request concurrency. Allowed values are between between 1 and 256. Defauls to `8`.

- **`--Sync.StrictMode <value>`** `NETHERMIND_SYNCCONFIG_STRICTMODE`

  Whether to disable some optimizations and do a more extensive sync. Useful when sync state is corrupted. Allowed values: `true` `false`. Defaults to `false`.

- **`--Sync.SynchronizationEnabled <value>`** `NETHERMIND_SYNCCONFIG_SYNCHRONIZATIONENABLED`

  Whether to download and process new blocks. Allowed values: `true` `false`. Defaults to `true`.

- **`--Sync.TuneDbMode <value>`** `NETHERMIND_SYNCCONFIG_TUNEDBMODE`

  Configure the database for write optimizations during sync. Significantly reduces the total number of writes and sync time if you are not network limited. Allowed values: `true` `false`. Defaults to `Default`.

  Allowed values:

  - `Default`
  - `WriteBias`
  - `HeavyWrite`
  - `AggressiveHeavyWrite`
  - `DisableCompaction`
  - `EnableBlobFiles`

- **`--Sync.UseGethLimitsInFastBlocks <value>`** `NETHERMIND_SYNCCONFIG_USEGETHLIMITSINFASTBLOCKS`

  Whether to make smaller requests, in Fast Blocks mode, to avoid Geth from disconnecting. On the Geth-heavy networks (e.g., Mainnet), it's  a desired behavior while on Nethermind- or OpenEthereum-heavy networks (Goerli, Aura), it slows down the sync by a factor of ~4. Allowed values: `true` `false`. Defaults to `true`.

- **`--Sync.WitnessProtocolEnabled <value>`** `NETHERMIND_SYNCCONFIG_WITNESSPROTOCOLENABLED`

  Whether to enable the Witness protocol. Allowed values: `true` `false`. Defaults to `false`.

</p>
</details>

<details>
<summary className="nd-details-heading">

#### TraceStore

</summary>
<p>

- **`--TraceStore.BlocksToKeep <value>`** `NETHERMIND_TRACESTORECONFIG_BLOCKSTOKEEP`

  The number of blocks to keep in the trace storage, counting from the head. If `0`, all traces of the processed blocks are kept. Defaults to `10000`.

- **`--TraceStore.DeserializationParallelization <value>`** `NETHERMIND_TRACESTORECONFIG_DESERIALIZATIONPARALLELIZATION`

  The maximum parallelization for the `trace_filter` request deserialization. `0` to use the number of logical processors. In the case of resource shortage, try a lower value. Defaults to `0`.

- **`--TraceStore.Enabled <value>`** `NETHERMIND_TRACESTORECONFIG_ENABLED`

  Whether to enable the TraceStore. If enabled, traces come from the database if possible. Allowed values: `true` `false`. Defaults to `false`.

- **`--TraceStore.TraceTypes <value>`** `NETHERMIND_TRACESTORECONFIG_TRACETYPES`

  The types of the traces to store. Defaults to `Trace` and `Rewards`.

  Allowed values:

  - `None`
  - `VmTrace`
  - `StateDiff`
  - `Trace`
  - `Rewards`
  - `All`

</p>
</details>

<details>
<summary className="nd-details-heading">

#### TxPool

</summary>
<p>

- **`--TxPool.GasLimit <value>`** `NETHERMIND_TXPOOLCONFIG_GASLIMIT`

  The max transaction gas allowed.

- **`--TxPool.HashCacheSize <value>`** `NETHERMIND_TXPOOLCONFIG_HASHCACHESIZE`

  The max number of cached hashes of already known transactions. Set automatically by the memory hint. Defaults to `524288`.

- **`--TxPool.PeerNotificationThreshold <value>`** `NETHERMIND_TXPOOLCONFIG_PEERNOTIFICATIONTHRESHOLD`

  The average percentage of transaction hashes from persistent broadcast sent to a peer together with hashes of the last added transactions. Defaults to `5`.

- **`--TxPool.ReportMinutes <value>`** `NETHERMIND_TXPOOLCONFIG_REPORTMINUTES`

  The current transaction pool state reporting interval, in minutes.

- **`--TxPool.HashCacheSize <value>`** `NETHERMIND_TXPOOLCONFIG_HASHCACHESIZE`

  The max number of cached hashes of already known transactions. Set automatically by the memory hint. Defaults to `524288`.

- **`--TxPool.Size <value>`** `NETHERMIND_TXPOOLCONFIG_SIZE`

  The max number of transactions held in the mempool (the more transactions in the mempool, the more memory used). Defaults to `2048`.

</p>
</details>

<details>
<summary className="nd-details-heading">

#### Wallet

</summary>
<p>

- **`--Wallet.DevAccounts <value>`** `NETHERMIND_WALLETCONFIG_DEVACCOUNTS`

  The number of autogenerated dev accounts to work with. Dev accounts have private keys from `00...01` to `00...n`. Defaults to `10`.

</p>
</details>

## Environment variables

To configure Nethermind using environment variables, the following naming convention is used in all uppercase:

```text
NETHERMIND_{MODULE_NAME}CONFIG_{PROPERTY_NAME}
```
For instance, the environment variable equivalent of the command line `--JsonRpc.JwtSecretFile` option is `NETHERMIND_JSONRPCCONFIG_JWTSECRETFILE`. For the list of configuration modules and their options, see [Options by modules](#options-by-modules).

## Configuration file

The configuration file is a JSON file with `.cfg` extension. The bundled configuration files are located in the `configs` directory and named after the network they are used for. For instance, see the Mainnet configuration file [`mainnet.cfg`](https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Runner/configs/mainnet.cfg).

[web3-secret-storage]: https://ethereum.org/en/developers/docs/data-structures-and-encoding/web3-secret-storage


<details>
<summary className="nd-details-heading">

#### AccountAbstraction

</summary>
<p>

- **`--AccountAbstraction.AaPriorityPeersMaxCount <value>`** `NETHERMIND_ACCOUNTABSTRACTIONCONFIG_AAPRIORITYPEERSMAXCOUNT`

  Max number of priority AccountAbstraction peers. Defaults to `20`.

- **`--AccountAbstraction.Enabled <value>`** `NETHERMIND_ACCOUNTABSTRACTIONCONFIG_ENABLED`

  Defines whether UserOperations are allowed. Allowed values: `true` `false`. Defaults to `false`.

- **`--AccountAbstraction.EntryPointContractAddresses <value>`** `NETHERMIND_ACCOUNTABSTRACTIONCONFIG_ENTRYPOINTCONTRACTADDRESSES`

  Defines the comma separated list of hex string representations of the addresses of the EntryPoint contract to which transactions can be made

- **`--AccountAbstraction.FlashbotsEndpoint <value>`** `NETHERMIND_ACCOUNTABSTRACTIONCONFIG_FLASHBOTSENDPOINT`

  Defines the string URL for the flashbots bundle reception endpoint Defaults to `https://relay.flashbots.net/`.

- **`--AccountAbstraction.MaximumUserOperationPerSender <value>`** `NETHERMIND_ACCOUNTABSTRACTIONCONFIG_MAXIMUMUSEROPERATIONPERSENDER`

  Defines the maximum number of UserOperations that can be kept for each sender Defaults to `1`.

- **`--AccountAbstraction.MinimumGasPrice <value>`** `NETHERMIND_ACCOUNTABSTRACTIONCONFIG_MINIMUMGASPRICE`

  Defines the minimum gas price for a user operation to be accepted Defaults to `1`.

- **`--AccountAbstraction.UserOperationPoolSize <value>`** `NETHERMIND_ACCOUNTABSTRACTIONCONFIG_USEROPERATIONPOOLSIZE`

  Defines the maximum number of UserOperations that can be kept in memory by clients Defaults to `200`.

- **`--AccountAbstraction.WhitelistedPaymasters <value>`** `NETHERMIND_ACCOUNTABSTRACTIONCONFIG_WHITELISTEDPAYMASTERS`

  Defines a comma separated list of the hex string representations of paymasters that are whitelisted by the node

</p>
</details>

<details>
<summary className="nd-details-heading">

#### Aura

</summary>
<p>

- **`--Aura.AllowAuRaPrivateChains <value>`** `NETHERMIND_AURACONFIG_ALLOWAURAPRIVATECHAINS`

  If 'true' then you can run Nethermind only private chains. Do not use with existing Parity AuRa chains. Allowed values: `true` `false`. Defaults to `false`.

- **`--Aura.ForceSealing <value>`** `NETHERMIND_AURACONFIG_FORCESEALING`

  If 'true' then Nethermind if mining will seal empty blocks. Allowed values: `true` `false`. Defaults to `true`.

- **`--Aura.Minimum2MlnGasPerBlockWhenUsingBlockGasLimitContract <value>`** `NETHERMIND_AURACONFIG_MINIMUM2MLNGASPERBLOCKWHENUSINGBLOCKGASLIMITCONTRACT`

  If 'true' then when using BlockGasLimitContractTransitions if the contract returns less than 2mln gas, then 2 mln gas is used. Allowed values: `true` `false`. Defaults to `false`.

- **`--Aura.TxPriorityConfigFilePath <value>`** `NETHERMIND_AURACONFIG_TXPRIORITYCONFIGFILEPATH`

  If set then transaction priority rules are used when selecting transactions from transaction pool. This has higher priority then on chain contract rules. See more at contract details https://github.com/poanetwork/posdao-contracts/blob/master/contracts/TxPriority.sol Defaults to `null`.

- **`--Aura.TxPriorityContractAddress <value>`** `NETHERMIND_AURACONFIG_TXPRIORITYCONTRACTADDRESS`

  If set then transaction priority contract is used when selecting transactions from transaction pool. See more at https://github.com/poanetwork/posdao-contracts/blob/master/contracts/TxPriority.sol Defaults to `null`.

</p>
</details>

<details>
<summary className="nd-details-heading">

#### Bloom

</summary>
<p>

- **`--Bloom.Index <value>`** `NETHERMIND_BLOOMCONFIG_INDEX`

  Defines whether the Bloom index is used. Bloom index speeds up rpc log searches. Allowed values: `true` `false`. Defaults to `true`.

- **`--Bloom.IndexLevelBucketSizes <value>`** `NETHERMIND_BLOOMCONFIG_INDEXLEVELBUCKETSIZES`

  Defines multipliers for index levels. Can be tweaked per chain to boost performance. Defaults to `[4, 8, 8]`.

- **`--Bloom.Migration <value>`** `NETHERMIND_BLOOMCONFIG_MIGRATION`

  Defines if migration of previously downloaded blocks to Bloom index will be done. Allowed values: `true` `false`. Defaults to `false`.

- **`--Bloom.MigrationStatistics <value>`** `NETHERMIND_BLOOMCONFIG_MIGRATIONSTATISTICS`

  Defines if migration statistics are to be calculated and output. Allowed values: `true` `false`. Defaults to `false`.

</p>
</details>

<details>
<summary className="nd-details-heading">

#### EthStats

</summary>
<p>

- **`--EthStats.Contact <value>`** `NETHERMIND_ETHSTATSCONFIG_CONTACT`

  Node owner contact details displayed on the EthStats page. Defaults to `hello@nethermind.io`.

- **`--EthStats.Enabled <value>`** `NETHERMIND_ETHSTATSCONFIG_ENABLED`

  If 'true' then EthStats publishing gets enabled. Allowed values: `true` `false`. Defaults to `false`.

- **`--EthStats.Name <value>`** `NETHERMIND_ETHSTATSCONFIG_NAME`

  Node name displayed on the given EthStats server. Defaults to `Nethermind`.

- **`--EthStats.Secret <value>`** `NETHERMIND_ETHSTATSCONFIG_SECRET`

  Password for publishing to a given EthStats server. Defaults to `secret`.

- **`--EthStats.SendInterval <value>`** `NETHERMIND_ETHSTATSCONFIG_SENDINTERVAL`

  Time in seconds between statistics updates Defaults to `15`.

- **`--EthStats.Server <value>`** `NETHERMIND_ETHSTATSCONFIG_SERVER`

  EthStats server wss://hostname:port/api/ Defaults to `ws://localhost:3000/api`.

</p>
</details>

<details>
<summary className="nd-details-heading">

#### HealthChecks

</summary>
<p>

- **`--HealthChecks.Enabled <value>`** `NETHERMIND_HEALTHCHECKSCONFIG_ENABLED`

  If 'true' then Health Check endpoints is enabled at /health Allowed values: `true` `false`. Defaults to `false`.

- **`--HealthChecks.LowStorageCheckAwaitOnStartup <value>`** `NETHERMIND_HEALTHCHECKSCONFIG_LOWSTORAGECHECKAWAITONSTARTUP`

  Free disk space check on startup will pause node initalization until enough space is available. Allowed values: `true` `false`. Defaults to `false`.

- **`--HealthChecks.LowStorageSpaceShutdownThreshold <value>`** `NETHERMIND_HEALTHCHECKSCONFIG_LOWSTORAGESPACESHUTDOWNTHRESHOLD`

  Percentage of available disk space below which node will shutdown. Zero to disable. Defaults to `1`.

- **`--HealthChecks.LowStorageSpaceWarningThreshold <value>`** `NETHERMIND_HEALTHCHECKSCONFIG_LOWSTORAGESPACEWARNINGTHRESHOLD`

  Percentage of available disk space below which a warning will be displayed. Zero to disable. Defaults to `5`.

- **`--HealthChecks.MaxIntervalClRequestTime <value>`** `NETHERMIND_HEALTHCHECKSCONFIG_MAXINTERVALCLREQUESTTIME`

  Max request interval in which we assume that CL works in a healthy way Defaults to `300`.

- **`--HealthChecks.MaxIntervalWithoutProcessedBlock <value>`** `NETHERMIND_HEALTHCHECKSCONFIG_MAXINTERVALWITHOUTPROCESSEDBLOCK`

  Max interval in seconds in which we assume that node processing blocks in a healthy way Defaults to `null`.

- **`--HealthChecks.MaxIntervalWithoutProducedBlock <value>`** `NETHERMIND_HEALTHCHECKSCONFIG_MAXINTERVALWITHOUTPRODUCEDBLOCK`

  Max interval in seconds in which we assume that node producing blocks in a healthy way Defaults to `null`.

- **`--HealthChecks.PollingInterval <value>`** `NETHERMIND_HEALTHCHECKSCONFIG_POLLINGINTERVAL`

  Configures the UI to poll for healthchecks updates (in seconds) Defaults to `5`.

- **`--HealthChecks.Slug <value>`** `NETHERMIND_HEALTHCHECKSCONFIG_SLUG`

  The URL slug on which Healthchecks service will be exposed Defaults to `/health`.

- **`--HealthChecks.UIEnabled <value>`** `NETHERMIND_HEALTHCHECKSCONFIG_UIENABLED`

  If 'true' then HealthChecks UI will be avaiable at /healthchecks-ui Allowed values: `true` `false`. Defaults to `false`.

- **`--HealthChecks.WebhooksEnabled <value>`** `NETHERMIND_HEALTHCHECKSCONFIG_WEBHOOKSENABLED`

  If 'true' then Webhooks can be configured Allowed values: `true` `false`. Defaults to `false`.

- **`--HealthChecks.WebhooksPayload <value>`** `NETHERMIND_HEALTHCHECKSCONFIG_WEBHOOKSPAYLOAD`

  Payload is the json payload that will be send on Failure and must be escaped. Defaults to `{"attachments":[{"color":"#FFCC00","pretext":"Health Check Status :warning:","fields":[{"title":"Details","value":"More details available at `/healthchecks-ui`","short":false},{"title":"Description","value":"[[DESCRIPTIONS]]","short":false}]}]}`.

- **`--HealthChecks.WebhooksRestorePayload <value>`** `NETHERMIND_HEALTHCHECKSCONFIG_WEBHOOKSRESTOREPAYLOAD`

  RestorePayload is the json payload that will be send on Recovery and must be escaped. Defaults to `{"attachments":[{"color":"#36a64f","pretext":"Health Check Status :+1:","fields":[{"title":"Details","value":"`More details available at /healthchecks-ui`","short":false},{"title":"description","value":"The HealthCheck `[[LIVENESS]]` is recovered. All is up and running","short":false}]}]}`.

- **`--HealthChecks.WebhooksUri <value>`** `NETHERMIND_HEALTHCHECKSCONFIG_WEBHOOKSURI`

  The Webhooks endpoint e.g. Slack WebHooks Defaults to `null`.

</p>
</details>

<details>
<summary className="nd-details-heading">

#### Hive

</summary>
<p>

- **`--Hive.BlocksDir <value>`** `NETHERMIND_HIVECONFIG_BLOCKSDIR`

  Path to a directory with additional blocks. Defaults to `"/blocks"`.

- **`--Hive.ChainFile <value>`** `NETHERMIND_HIVECONFIG_CHAINFILE`

  Path to a file with a test chain definition. Defaults to `"/chain.rlp"`.

- **`--Hive.Enabled <value>`** `NETHERMIND_HIVECONFIG_ENABLED`

  Enabling hive for debugging purpose Allowed values: `true` `false`. Defaults to `false`.

- **`--Hive.GenesisFilePath <value>`** `NETHERMIND_HIVECONFIG_GENESISFILEPATH`

  Path to genesis block. Defaults to `"/genesis.json"`.

- **`--Hive.KeysDir <value>`** `NETHERMIND_HIVECONFIG_KEYSDIR`

  Path to a test key store directory. Defaults to `"/keys"`.

</p>
</details>

<details>
<summary className="nd-details-heading">

#### Init

</summary>
<p>

- **`--Init.AutoDump <value>`** `NETHERMIND_INITCONFIG_AUTODUMP`

  Auto dump on bad blocks for diagnostics, Possible values [None, Receipts, Parity, Geth, All]

  Allowed values:

    - `None`
    - `Receipts`
    - `Parity`
    - `Geth`
    - `All`

  Defaults to `Receipts`.

- **`--Init.BaseDbPath <value>`** `NETHERMIND_INITCONFIG_BASEDBPATH`

  Base directory path for all the nethermind databases. Defaults to `"db"`.

- **`--Init.ChainSpecPath <value>`** `NETHERMIND_INITCONFIG_CHAINSPECPATH`

  Path to the chain definition file (Parity chainspec or Geth genesis file). Defaults to `chainspec/foundation.json`.

- **`--Init.DiagnosticMode <value>`** `NETHERMIND_INITCONFIG_DIAGNOSTICMODE`

  Diagnostics modes

  Allowed values:

    - `None`
    - `MemDb`
    - `RpcDb`
    - `ReadOnlyDb`
    - `VerifyRewards`
    - `VerifySupply`
    - `VerifyTrie`

  Defaults to `None`.

- **`--Init.DiscoveryEnabled <value>`** `NETHERMIND_INITCONFIG_DISCOVERYENABLED`

  If 'false' then the node does not try to find nodes beyond the bootnodes configured. Allowed values: `true` `false`. Defaults to `true`.

- **`--Init.EnableUnsecuredDevWallet <value>`** `NETHERMIND_INITCONFIG_ENABLEUNSECUREDDEVWALLET`

  If 'true' then it enables the wallet / key store in the application. Allowed values: `true` `false`. Defaults to `false`.

- **`--Init.GenesisHash <value>`** `NETHERMIND_INITCONFIG_GENESISHASH`

  Hash of the genesis block - if the default null value is left then the genesis block validity will not be checked which is useful for ad hoc test/private networks. Defaults to `null`.

- **`--Init.HiveChainSpecPath <value>`** `NETHERMIND_INITCONFIG_HIVECHAINSPECPATH`

  Path to the chain definition file created by Hive for test purpouse Defaults to `chainspec/test.json`.

- **`--Init.IsMining <value>`** `NETHERMIND_INITCONFIG_ISMINING`

  If 'true' then the node will try to seal/mine new blocks Allowed values: `true` `false`. Defaults to `false`.

- **`--Init.KeepDevWalletInMemory <value>`** `NETHERMIND_INITCONFIG_KEEPDEVWALLETINMEMORY`

  If 'true' then any accounts created will be only valid during the session and deleted when application closes. Allowed values: `true` `false`. Defaults to `false`.

- **`--Init.KzgSetupPath <value>`** `NETHERMIND_INITCONFIG_KZGSETUPPATH`

  Kzg trusted setup file path Defaults to `null`.

- **`--Init.LogDirectory <value>`** `NETHERMIND_INITCONFIG_LOGDIRECTORY`

  In case of null, the path is set to [applicationDirectiory]\logs Defaults to `logs`.

- **`--Init.LogFileName <value>`** `NETHERMIND_INITCONFIG_LOGFILENAME`

  Name of the log file generated (useful when launching multiple networks with the same log folder). Defaults to `"log.txt"`.

- **`--Init.LogRules <value>`** `NETHERMIND_INITCONFIG_LOGRULES`

  Overrides for default logs in format LogPath:LogLevel;* Defaults to `null`.

- **`--Init.MemoryHint <value>`** `NETHERMIND_INITCONFIG_MEMORYHINT`

  A hint for the max memory that will allow us to configure the DB and Netty memory allocations. Defaults to `null`.

- **`--Init.PeerManagerEnabled <value>`** `NETHERMIND_INITCONFIG_PEERMANAGERENABLED`

  If 'false' then the node does not connect to newly discovered peers.. Allowed values: `true` `false`. Defaults to `true`.

- **`--Init.ProcessingEnabled <value>`** `NETHERMIND_INITCONFIG_PROCESSINGENABLED`

  If 'false' then the node does not download/process new blocks.. Allowed values: `true` `false`. Defaults to `true`.

- **`--Init.RpcDbUrl <value>`** `NETHERMIND_INITCONFIG_RPCDBURL`

  Url for remote node that will be used as DB source when 'DiagnosticMode' is set to'RpcDb'

- **`--Init.StaticNodesPath <value>`** `NETHERMIND_INITCONFIG_STATICNODESPATH`

  Path to the file with a list of static nodes. Defaults to `"Data/static-nodes.json"`.

- **`--Init.WebSocketsEnabled <value>`** `NETHERMIND_INITCONFIG_WEBSOCKETSENABLED`

  Defines whether the WebSockets service is enabled on node startup at the 'HttpPort' - e.g. ws://localhost:8545/ws/json-rpc Allowed values: `true` `false`. Defaults to `true`.

</p>
</details>

<details>
<summary className="nd-details-heading">

#### JsonRpc

</summary>
<p>

- **`--JsonRpc.AdditionalRpcUrls <value>`** `NETHERMIND_JSONRPCCONFIG_ADDITIONALRPCURLS`

  Defines additional RPC urls to listen on. Example url format: http://localhost:8550|http;wss|engine;eth;net;subscribe Defaults to `[]`.

- **`--JsonRpc.BufferResponses <value>`** `NETHERMIND_JSONRPCCONFIG_BUFFERRESPONSES`

  Buffer responses before sending them to client. This allows to set Content-Length in response instead of using Transfer-Encoding: chunked. This may degrade performance on big responses. Max buffered response size is 2GB, chunked responses can be bigger. Allowed values: `true` `false`. Defaults to `false`.

- **`--JsonRpc.CallsFilterFilePath <value>`** `NETHERMIND_JSONRPCCONFIG_CALLSFILTERFILEPATH`

  A path to a file that contains a list of new-line separated approved JSON RPC calls Defaults to `Data/jsonrpc.filter`.

- **`--JsonRpc.Enabled <value>`** `NETHERMIND_JSONRPCCONFIG_ENABLED`

  Defines whether the JSON RPC service is enabled on node startup. Configure host and port if default values do not work for you. Allowed values: `true` `false`. Defaults to `false`.

- **`--JsonRpc.EnabledModules <value>`** `NETHERMIND_JSONRPCCONFIG_ENABLEDMODULES`

  Defines which RPC modules should be enabled. Built in modules are: Admin, Clique, Consensus, Db, Debug, Deposit, Erc20, Eth, Evm, Health Mev, NdmConsumer, NdmProvider, Net, Nft, Parity, Personal, Proof, Subscribe, Trace, TxPool, Vault, Web3. Defaults to `[Eth, Subscribe, Trace, TxPool, Web3, Personal, Proof, Net, Parity, Health, Rpc]`.

- **`--JsonRpc.EngineEnabledModules <value>`** `NETHERMIND_JSONRPCCONFIG_ENGINEENABLEDMODULES`

  Defines which RPC modules should be enabled Execution Engine port. Built in modules are: Admin, Clique, Consensus, Db, Debug, Deposit, Erc20, Eth, Evm, Health Mev, NdmConsumer, NdmProvider, Net, Nft, Parity, Personal, Proof, Subscribe, Trace, TxPool, Vault, Web3. Defaults to `[Net, Eth, Subscribe, Web3]`.

- **`--JsonRpc.EngineHost <value>`** `NETHERMIND_JSONRPCCONFIG_ENGINEHOST`

  Host for Execution Engine calls. Ensure the firewall is configured when enabling JSON RPC. If it does not work with 127.0.0.1 try something like 10.0.0.4 or 192.168.0.1 Defaults to `"127.0.0.1"`.

- **`--JsonRpc.EnginePort <value>`** `NETHERMIND_JSONRPCCONFIG_ENGINEPORT`

  Port for Execution Engine calls. Ensure the firewall is configured when enabling JSON RPC. Defaults to `null`.

- **`--JsonRpc.EthModuleConcurrentInstances <value>`** `NETHERMIND_JSONRPCCONFIG_ETHMODULECONCURRENTINSTANCES`

  Number of concurrent instances for non-sharable calls (eth_call, eth_estimateGas, eth_getLogs, eth_newFilter, eth_newBlockFilter, eth_newPendingTransactionFilter, eth_uninstallFilter). This will limit load on the node CPU and IO to reasonable levels. If this limit is exceeded on Http calls 503 Service Unavailable will be returned along with Json RPC error. Defaults to number of logical processes.

- **`--JsonRpc.GasCap <value>`** `NETHERMIND_JSONRPCCONFIG_GASCAP`

  Gas limit for eth_call and eth_estimateGas Defaults to `100000000`.

- **`--JsonRpc.Host <value>`** `NETHERMIND_JSONRPCCONFIG_HOST`

  Host for JSON RPC calls. Ensure the firewall is configured when enabling JSON RPC. If it does not work with 127.0.0.1 try something like 10.0.0.4 or 192.168.0.1 Defaults to `"127.0.0.1"`.

- **`--JsonRpc.IpcUnixDomainSocketPath <value>`** `NETHERMIND_JSONRPCCONFIG_IPCUNIXDOMAINSOCKETPATH`

  The path to connect a unix domain socket over.

- **`--JsonRpc.JwtSecretFile <value>`** `NETHERMIND_JSONRPCCONFIG_JWTSECRETFILE`

  Path to file with hex encoded secret for jwt authentication Defaults to `keystore/jwt-secret`.

- **`--JsonRpc.MaxBatchResponseBodySize <value>`** `NETHERMIND_JSONRPCCONFIG_MAXBATCHRESPONSEBODYSIZE`

  Max response body size when using batch requests, subsequent requests are trimmed Defaults to `30000000`.

- **`--JsonRpc.MaxBatchSize <value>`** `NETHERMIND_JSONRPCCONFIG_MAXBATCHSIZE`

  Limit batch size for batched json rpc call Defaults to `1024`.

- **`--JsonRpc.MaxLoggedRequestParametersCharacters <value>`** `NETHERMIND_JSONRPCCONFIG_MAXLOGGEDREQUESTPARAMETERSCHARACTERS`

  Limits the Maximum characters printing to log for parameters of any Json RPC service request Defaults to `null`.

- **`--JsonRpc.MaxRequestBodySize <value>`** `NETHERMIND_JSONRPCCONFIG_MAXREQUESTBODYSIZE`

  Max HTTP request body size Defaults to `30000000`.

- **`--JsonRpc.MethodsLoggingFiltering <value>`** `NETHERMIND_JSONRPCCONFIG_METHODSLOGGINGFILTERING`

  Defines method names of Json RPC service requests to NOT log. Example: {"eth_blockNumber"} will not log "eth_blockNumber" requests. Defaults to `[engine_newPayloadV1, engine_newPayloadV2, engine_newPayloadV3, engine_forkchoiceUpdatedV1, engine_forkchoiceUpdatedV2]`.

- **`--JsonRpc.Port <value>`** `NETHERMIND_JSONRPCCONFIG_PORT`

  Port number for JSON RPC calls. Ensure the firewall is configured when enabling JSON RPC. Defaults to `8545`.

- **`--JsonRpc.ReportIntervalSeconds <value>`** `NETHERMIND_JSONRPCCONFIG_REPORTINTERVALSECONDS`

  Interval between the JSON RPC stats report log Defaults to `300`.

- **`--JsonRpc.RequestQueueLimit <value>`** `NETHERMIND_JSONRPCCONFIG_REQUESTQUEUELIMIT`

  The queued request limit for calls above the max concurrency amount for (eth_call, eth_estimateGas, eth_getLogs, eth_newFilter, eth_newBlockFilter, eth_newPendingTransactionFilter, eth_uninstallFilter).  If value is set to 0 limit won't be applied. Defaults to `500`.

- **`--JsonRpc.RpcRecorderBaseFilePath <value>`** `NETHERMIND_JSONRPCCONFIG_RPCRECORDERBASEFILEPATH`

  Base file path for diagnostic JSON RPC recorder. Defaults to `"logs/rpc.{counter}.txt"`.

- **`--JsonRpc.RpcRecorderState <value>`** `NETHERMIND_JSONRPCCONFIG_RPCRECORDERSTATE`

  Defines whether the JSON RPC diagnostic recording is enabled on node startup. Do not enable unless you are a DEV diagnosing issues with JSON RPC. Possible values: None/Request/Response/All.

  Allowed values:

    - `None`
    - `Request`
    - `Response`
    - `All`

  Defaults to `None`.

- **`--JsonRpc.Timeout <value>`** `NETHERMIND_JSONRPCCONFIG_TIMEOUT`

  JSON RPC' timeout value given in milliseconds. Defaults to `20000`.

- **`--JsonRpc.WebSocketsPort <value>`** `NETHERMIND_JSONRPCCONFIG_WEBSOCKETSPORT`

  Port number for JSON RPC web sockets calls. By default same port is used as regular JSON RPC. Ensure the firewall is configured when enabling JSON RPC. Defaults to `8545`.

</p>
</details>

<details>
<summary className="nd-details-heading">

#### KeyStore

</summary>
<p>

- **`--KeyStore.BlockAuthorAccount <value>`** `NETHERMIND_KEYSTORECONFIG_BLOCKAUTHORACCOUNT`

  Account to be used by the block author / coinbase, to be loaded from keystore

- **`--KeyStore.Cipher <value>`** `NETHERMIND_KEYSTORECONFIG_CIPHER`

  See https://github.com/ethereum/wiki/wiki/Web3-Secret-Storage-Definition Defaults to `aes-128-ctr`.

- **`--KeyStore.EnodeAccount <value>`** `NETHERMIND_KEYSTORECONFIG_ENODEACCOUNT`

  Account to be used by the node for network communication (enode), to be loaded from keystore. If neither this nor EnodeKeyFile is specified, the key for network communication will be autogenerated in 'node.key.plain' file.

- **`--KeyStore.EnodeKeyFile <value>`** `NETHERMIND_KEYSTORECONFIG_ENODEKEYFILE`

  Path to key file to be used by the node for network communication (enode). If neither this nor EnodeAccount is specified, the key for network communication will be autogenerated in 'node.key.plain' file. If the file does not exist it will be generated.

- **`--KeyStore.IVSize <value>`** `NETHERMIND_KEYSTORECONFIG_IVSIZE`

  See https://github.com/ethereum/wiki/wiki/Web3-Secret-Storage-Definition Defaults to `16`.

- **`--KeyStore.Kdf <value>`** `NETHERMIND_KEYSTORECONFIG_KDF`

  See https://github.com/ethereum/wiki/wiki/Web3-Secret-Storage-Definition Defaults to `scrypt`.

- **`--KeyStore.KdfparamsDklen <value>`** `NETHERMIND_KEYSTORECONFIG_KDFPARAMSDKLEN`

  See https://github.com/ethereum/wiki/wiki/Web3-Secret-Storage-Definition Defaults to `32`.

- **`--KeyStore.KdfparamsN <value>`** `NETHERMIND_KEYSTORECONFIG_KDFPARAMSN`

  See https://github.com/ethereum/wiki/wiki/Web3-Secret-Storage-Definition Defaults to `262144`.

- **`--KeyStore.KdfparamsP <value>`** `NETHERMIND_KEYSTORECONFIG_KDFPARAMSP`

  See https://github.com/ethereum/wiki/wiki/Web3-Secret-Storage-Definition Defaults to `1`.

- **`--KeyStore.KdfparamsR <value>`** `NETHERMIND_KEYSTORECONFIG_KDFPARAMSR`

  See https://github.com/ethereum/wiki/wiki/Web3-Secret-Storage-Definition Defaults to `8`.

- **`--KeyStore.KdfparamsSaltLen <value>`** `NETHERMIND_KEYSTORECONFIG_KDFPARAMSSALTLEN`

  See https://github.com/ethereum/wiki/wiki/Web3-Secret-Storage-Definition Defaults to `32`.

- **`--KeyStore.KeyStoreDirectory <value>`** `NETHERMIND_KEYSTORECONFIG_KEYSTOREDIRECTORY`

  Directory to store keys in. Defaults to `keystore`.

- **`--KeyStore.KeyStoreEncoding <value>`** `NETHERMIND_KEYSTORECONFIG_KEYSTOREENCODING`

  See https://github.com/ethereum/wiki/wiki/Web3-Secret-Storage-Definition Defaults to `UTF-8`.

- **`--KeyStore.PasswordFiles <value>`** `NETHERMIND_KEYSTORECONFIG_PASSWORDFILES`

  Password files storing passwords to unlock the accounts from the UnlockAccounts configuration item Defaults to `[]`.

- **`--KeyStore.Passwords <value>`** `NETHERMIND_KEYSTORECONFIG_PASSWORDS`

  Passwords to use to unlock accounts from the UnlockAccounts configuration item. Only used when no PasswordFiles provided. Defaults to `[]`.

- **`--KeyStore.SymmetricEncrypterBlockSize <value>`** `NETHERMIND_KEYSTORECONFIG_SYMMETRICENCRYPTERBLOCKSIZE`

  See https://github.com/ethereum/wiki/wiki/Web3-Secret-Storage-Definition Defaults to `128`.

- **`--KeyStore.SymmetricEncrypterKeySize <value>`** `NETHERMIND_KEYSTORECONFIG_SYMMETRICENCRYPTERKEYSIZE`

  See https://github.com/ethereum/wiki/wiki/Web3-Secret-Storage-Definition Defaults to `128`.

- **`--KeyStore.TestNodeKey <value>`** `NETHERMIND_KEYSTORECONFIG_TESTNODEKEY`

  Plain private key to be used in test scenarios

- **`--KeyStore.UnlockAccounts <value>`** `NETHERMIND_KEYSTORECONFIG_UNLOCKACCOUNTS`

  Accounts to unlock on startup using provided PasswordFiles and Passwords Defaults to `[]`.

</p>
</details>

<details>
<summary className="nd-details-heading">

#### Merge

</summary>
<p>

- **`--Merge.BuilderRelayUrl <value>`** `NETHERMIND_MERGECONFIG_BUILDERRELAYURL`

  URL to Builder Relay. If set when building blocks nethermind will send them to the relay. Defaults to `null`.

- **`--Merge.CollectionsPerDecommit <value>`** `NETHERMIND_MERGECONFIG_COLLECTIONSPERDECOMMIT`

  Requests the GC to release process memory back to OS. Accept values `-1` which disables it, `0` which releases every time, and any positive integer which does it after that many EngineApi calls. Defaults to `75`.

- **`--Merge.CompactMemory <value>`** `NETHERMIND_MERGECONFIG_COMPACTMEMORY`

  Reduces process used memory. Accept values `No` which disables it, `Yes` which compacts normal heaps, `Full` compacts large object heap too (only when SweepMemory is set to `Gen2`).

  Allowed values:

    - `No`
    - `Yes`
    - `Full`

  Defaults to `Yes`.

- **`--Merge.Enabled <value>`** `NETHERMIND_MERGECONFIG_ENABLED`

  Defines whether the Merge plugin is enabled bundles are allowed. Allowed values: `true` `false`. Defaults to `true`.

- **`--Merge.FinalTotalDifficulty <value>`** `NETHERMIND_MERGECONFIG_FINALTOTALDIFFICULTY`

  Final total difficulty is total difficulty of the last PoW block. FinalTotalDifficulty >= TerminalTotalDifficulty. Defaults to `null`.

- **`--Merge.PrioritizeBlockLatency <value>`** `NETHERMIND_MERGECONFIG_PRIORITIZEBLOCKLATENCY`

  Reduces block EngineApi latency by disabling Garbage Collection during EngineApi calls. Allowed values: `true` `false`. Defaults to `true`.

- **`--Merge.SecondsPerSlot <value>`** `NETHERMIND_MERGECONFIG_SECONDSPERSLOT`

  Deprecated since v1.14.7. Please use Blocks.SecondsPerSlot. Seconds per slot. Defaults to `12`.

- **`--Merge.SweepMemory <value>`** `NETHERMIND_MERGECONFIG_SWEEPMEMORY`

  Reduces memory usage by forcing Garbage Collection between EngineApi calls. Accept values `NoGc` (-1), Gen0 (0), Gen1 (1), Gen2 (2).

  Allowed values:

    - `NoGC`
    - `Gen0`
    - `Gen1`
    - `Gen2`

  Defaults to `Gen1`.

- **`--Merge.TerminalBlockHash <value>`** `NETHERMIND_MERGECONFIG_TERMINALBLOCKHASH`

  Terminal PoW block hash used for transition process. Defaults to `null`.

- **`--Merge.TerminalBlockNumber <value>`** `NETHERMIND_MERGECONFIG_TERMINALBLOCKNUMBER`

  Terminal PoW block number used for transition process.

- **`--Merge.TerminalTotalDifficulty <value>`** `NETHERMIND_MERGECONFIG_TERMINALTOTALDIFFICULTY`

  Terminal total difficulty used for transition process. Defaults to `null`.

</p>
</details>

<details>
<summary className="nd-details-heading">

#### Metrics

</summary>
<p>

- **`--Metrics.CountersEnabled <value>`** `NETHERMIND_METRICSCONFIG_COUNTERSENABLED`

  If 'true',the node publishes metrics using .NET diagnostics that can be collected with dotnet-counters. Allowed values: `true` `false`. Defaults to `false`.

- **`--Metrics.Enabled <value>`** `NETHERMIND_METRICSCONFIG_ENABLED`

  If 'true',the node publishes various metrics to Prometheus Pushgateway at given interval. Allowed values: `true` `false`. Defaults to `false`.

- **`--Metrics.EnableDbSizeMetrics <value>`** `NETHERMIND_METRICSCONFIG_ENABLEDBSIZEMETRICS`

  If set, will push db size metrics Allowed values: `true` `false`. Defaults to `true`.

- **`--Metrics.ExposePort <value>`** `NETHERMIND_METRICSCONFIG_EXPOSEPORT`

  If set, the node exposes Prometheus metrics on the given port. Defaults to `null`.

- **`--Metrics.IntervalSeconds <value>`** `NETHERMIND_METRICSCONFIG_INTERVALSECONDS`

  Defines how often metrics are pushed to Prometheus Defaults to `5`.

- **`--Metrics.NodeName <value>`** `NETHERMIND_METRICSCONFIG_NODENAME`

  Name displayed in the Grafana dashboard Defaults to `"Nethermind"`.

- **`--Metrics.PushGatewayUrl <value>`** `NETHERMIND_METRICSCONFIG_PUSHGATEWAYURL`

  Prometheus Pushgateway URL.

</p>
</details>

<details>
<summary className="nd-details-heading">

#### Mev

</summary>
<p>

- **`--Mev.BundleHorizon <value>`** `NETHERMIND_MEVCONFIG_BUNDLEHORIZON`

  Defines how long MEV bundles will be kept in memory by clients Defaults to `3600`.

- **`--Mev.BundlePoolSize <value>`** `NETHERMIND_MEVCONFIG_BUNDLEPOOLSIZE`

  Defines the maximum number of MEV bundles that can be kept in memory by clients Defaults to `200`.

- **`--Mev.Enabled <value>`** `NETHERMIND_MEVCONFIG_ENABLED`

  Defines whether the MEV bundles are allowed. Allowed values: `true` `false`. Defaults to `false`.

- **`--Mev.MaxMergedBundles <value>`** `NETHERMIND_MEVCONFIG_MAXMERGEDBUNDLES`

  Defines the maximum number of MEV bundles to be included within a single block Defaults to `1`.

- **`--Mev.TrustedRelays <value>`** `NETHERMIND_MEVCONFIG_TRUSTEDRELAYS`

  Defines the list of trusted relay addresses to receive megabundles from as a comma separated string

</p>
</details>

<details>
<summary className="nd-details-heading">

#### Mining

</summary>
<p>

- **`--Mining.Enabled <value>`** `NETHERMIND_MININGCONFIG_ENABLED`

  Defines whether the blocks should be produced. Allowed values: `true` `false`. Defaults to `false`.

- **`--Mining.ExtraData <value>`** `NETHERMIND_MININGCONFIG_EXTRADATA`

  Deprecated since v1.14.6. Please use Blocks.ExtraDataValues you set here are forwarded to it. Conflicting values will cause Exceptions. Block header extra data. 32-bytes shall be extra data max length. Defaults to `Nethermind`.

- **`--Mining.MinGasPrice <value>`** `NETHERMIND_MININGCONFIG_MINGASPRICE`

  Deprecated since v1.14.6. Please use Blocks.MinGasPrice Values you set here are forwarded to it. Conflicting values will cause Exceptions. Minimum gas premium for transactions accepted by the block producer. Before EIP1559: Minimum gas price for transactions accepted by the block producer. Defaults to `1`.

- **`--Mining.RandomizedBlocks <value>`** `NETHERMIND_MININGCONFIG_RANDOMIZEDBLOCKS`

  Deprecated since v1.14.6. Please use Blocks.RandomizedBlocks Values you set here are forwarded to it. Conflicting values will cause Exceptions. Only used in NethDev. Setting this to true will change the difficulty of the block randomly within the constraints. Allowed values: `true` `false`. Defaults to `false`.

- **`--Mining.TargetBlockGasLimit <value>`** `NETHERMIND_MININGCONFIG_TARGETBLOCKGASLIMIT`

  Deprecated since v1.14.6. Please use Blocks.TargetBlockGasLimit. Values you set here are forwarded to it. Conflicting values will cause Exceptions. Block gas limit that the block producer should try to reach in the fastest possible way based on protocol rules. NULL value means that the miner should follow other miners. Defaults to `null`.

</p>
</details>

<details>
<summary className="nd-details-heading">

#### Network

</summary>
<p>

- **`--Network.ActivePeersMaxCount <value>`** `NETHERMIND_NETWORKCONFIG_ACTIVEPEERSMAXCOUNT`

  [OBSOLETE](Use MaxActivePeers instead) Max number of connected peers. Defaults to `50`.

- **`--Network.Bootnodes <value>`** `NETHERMIND_NETWORKCONFIG_BOOTNODES`

  Bootnodes

- **`--Network.DiagTracerEnabled <value>`** `NETHERMIND_NETWORKCONFIG_DIAGTRACERENABLED`

  Enabled very verbose diag network tracing files for DEV purposes (Nethermind specific) Allowed values: `true` `false`. Defaults to `false`.

- **`--Network.DiscoveryDns <value>`** `NETHERMIND_NETWORKCONFIG_DISCOVERYDNS`

  Use tree is available through a DNS name. Keep it empty for the default of {chainName}.ethdisco.net Defaults to `null`.

- **`--Network.DiscoveryPort <value>`** `NETHERMIND_NETWORKCONFIG_DISCOVERYPORT`

  UDP port number for incoming discovery connections. Keep same as TCP/IP port because using different values has never been tested. Defaults to `30303`.

- **`--Network.EnableUPnP <value>`** `NETHERMIND_NETWORKCONFIG_ENABLEUPNP`

  Enable automatic port forwarding via UPnP Allowed values: `true` `false`. Defaults to `false`.

- **`--Network.ExternalIp <value>`** `NETHERMIND_NETWORKCONFIG_EXTERNALIP`

  Use only if your node cannot resolve external IP automatically. Defaults to `null`.

- **`--Network.LocalIp <value>`** `NETHERMIND_NETWORKCONFIG_LOCALIP`

  Use only if your node cannot resolve local IP automatically. Defaults to `null`.

- **`--Network.MaxActivePeers <value>`** `NETHERMIND_NETWORKCONFIG_MAXACTIVEPEERS`

  Same as ActivePeersMaxCount. Defaults to `50`.

- **`--Network.MaxNettyArenaCount <value>`** `NETHERMIND_NETWORKCONFIG_MAXNETTYARENACOUNT`

  [TECHNICAL] Defines maximum netty arena count. Increasing this on high core machine without increasing memory budget may reduce chunk size so much that it causes significant netty huge allocation. Defaults to `8`.

- **`--Network.MaxOutgoingConnectPerSec <value>`** `NETHERMIND_NETWORKCONFIG_MAXOUTGOINGCONNECTPERSEC`

  [TECHNICAL] Max number of new outgoing connections per second. Default is 20. Defaults to `20`.

- **`--Network.NettyArenaOrder <value>`** `NETHERMIND_NETWORKCONFIG_NETTYARENAORDER`

  [TECHNICAL] Defines the size of a netty arena order. Default depends on memory hint. Defaults to `-1`.

- **`--Network.OnlyStaticPeers <value>`** `NETHERMIND_NETWORKCONFIG_ONLYSTATICPEERS`

  If set to 'true' then no connections will be made to non-static peers. Allowed values: `true` `false`. Defaults to `false`.

- **`--Network.P2PPort <value>`** `NETHERMIND_NETWORKCONFIG_P2PPORT`

  TPC/IP port number for incoming P2P connections. Defaults to `30303`.

- **`--Network.PriorityPeersMaxCount <value>`** `NETHERMIND_NETWORKCONFIG_PRIORITYPEERSMAXCOUNT`

  Max number of priority peers. Can be overwritten by value from plugin config. Defaults to `0`.

- **`--Network.StaticPeers <value>`** `NETHERMIND_NETWORKCONFIG_STATICPEERS`

  List of nodes for which we will keep the connection on. Static nodes are not counted to the max number of nodes limit. Defaults to `null`.

</p>
</details>

<details>
<summary className="nd-details-heading">

#### Plugin

</summary>
<p>

- **`--Plugin.PluginOrder <value>`** `NETHERMIND_PLUGINCONFIG_PLUGINORDER`

  Order of plugin initialization Defaults to `[Clique, Aura, Ethash, AuRaMerge, Merge, MEV, HealthChecks, Hive]`.

</p>
</details>

<details>
<summary className="nd-details-heading">

#### Pruning

</summary>
<p>

- **`--Pruning.AvailableSpaceCheckEnabled <value>`** `NETHERMIND_PRUNINGCONFIG_AVAILABLESPACECHECKENABLED`

  Enables available disk space check. Allowed values: `true` `false`. Defaults to `true`.

- **`--Pruning.CacheMb <value>`** `NETHERMIND_PRUNINGCONFIG_CACHEMB`

  'Memory' pruning: Pruning cache size in MB (amount if historical nodes data to store in cache - the bigger the cache the bigger the disk space savings). Defaults to `1024`.

- **`--Pruning.FullPruningCompletionBehavior <value>`** `NETHERMIND_PRUNINGCONFIG_FULLPRUNINGCOMPLETIONBEHAVIOR`

  Determines what to do after Nethermind completes a full prune. 'None': does not take any special action. 'ShutdownOnSuccess': shuts Nethermind down if the full prune succeeded. 'AlwaysShutdown': shuts Nethermind down once the prune completes, whether it succeeded or failed.

  Allowed values:

    - `None`
    - `ShutdownOnSuccess`
    - `AlwaysShutdown`

  Defaults to `None`.

- **`--Pruning.FullPruningDisableLowPriorityWrites <value>`** `NETHERMIND_PRUNINGCONFIG_FULLPRUNINGDISABLELOWPRIORITYWRITES`

  Full pruning uses low priority writes to prevent blocking block processing. If not needed, set this to true for faster full pruning. Allowed values: `true` `false`. Defaults to `false`.

- **`--Pruning.FullPruningMaxDegreeOfParallelism <value>`** `NETHERMIND_PRUNINGCONFIG_FULLPRUNINGMAXDEGREEOFPARALLELISM`

  'Full' pruning: Defines how many parallel tasks and potentially used threads can be created by full pruning. -1 - number of logical processors, 0 - 25% of logical processors, 1 - full pruning will run on single thread. Recommended value depends on the type of the node. If the node needs to be responsive (its RPC or Validator node) then recommended value is the default value or below is recommended. If the node doesn't have much other responsibilities but needs to be reliably be able to follow the chain without any delays and produce live logs - the default value or above is recommended. If the node doesn't have to be responsive, has very fast I/O (like NVME) and the shortest pruning time is to be achieved, this can be set to the number of logical processors (-1). Defaults to `0`.

- **`--Pruning.FullPruningMemoryBudgetMb <value>`** `NETHERMIND_PRUNINGCONFIG_FULLPRUNINGMEMORYBUDGETMB`

  Set the memory budget used for the trie visit. Increasing this significantly reduces read iops requirement at expense of RAM. Default depend on network. Set to 0 to disable. Defaults to `4000`.

- **`--Pruning.FullPruningMinimumDelayHours <value>`** `NETHERMIND_PRUNINGCONFIG_FULLPRUNINGMINIMUMDELAYHOURS`

  In order to not exhaust disk writes, there is a minimum delay between allowed full pruning operations. Defaults to `240`.

- **`--Pruning.FullPruningThresholdMb <value>`** `NETHERMIND_PRUNINGCONFIG_FULLPRUNINGTHRESHOLDMB`

  'Full' pruning: Defines threshold in MB to trigger full pruning, depends on 'Mode' and 'FullPruningTrigger'. Defaults to `256000`.

- **`--Pruning.FullPruningTrigger <value>`** `NETHERMIND_PRUNINGCONFIG_FULLPRUNINGTRIGGER`

  'Full' pruning: Defines trigger for full pruning, manuel trigger is always supported via admin_prune RPC call. Either size of StateDB or free space left on Volume where StateDB is located can be configured as auto triggers. Possible values: 'Manual', 'StateDbSize', 'VolumeFreeSpace'.

  Allowed values:

    - `Manual`
    - `StateDbSize`
    - `VolumeFreeSpace`

  Defaults to `Manual`.

- **`--Pruning.Mode <value>`** `NETHERMIND_PRUNINGCONFIG_MODE`

  Sets pruning mode. Possible values: 'None', 'Memory', 'Full', 'Hybrid'.

  Allowed values:

    - `None`
    - `Memory`
    - `Full`
    - `Hybrid`

  Defaults to `Hybrid`.

- **`--Pruning.PersistenceInterval <value>`** `NETHERMIND_PRUNINGCONFIG_PERSISTENCEINTERVAL`

  'Memory' pruning: Defines how often blocks will be persisted even if not required by cache memory usage (the bigger the value the bigger the disk space savings) Defaults to `8192`.

</p>
</details>

<details>
<summary className="nd-details-heading">

#### Receipt

</summary>
<p>

- **`--Receipt.CompactReceiptStore <value>`** `NETHERMIND_RECEIPTCONFIG_COMPACTRECEIPTSTORE`

  If set to 'true' then reduce receipt db size at expense of rpc performance. Allowed values: `true` `false`. Defaults to `true`.

- **`--Receipt.CompactTxIndex <value>`** `NETHERMIND_RECEIPTCONFIG_COMPACTTXINDEX`

  If set to 'true' then reduce receipt tx index db size at expense of rpc performance. Allowed values: `true` `false`. Defaults to `true`.

- **`--Receipt.ReceiptsMigration <value>`** `NETHERMIND_RECEIPTCONFIG_RECEIPTSMIGRATION`

  If set to 'true' then receipts db will be migrated to new schema. Allowed values: `true` `false`. Defaults to `false`.

- **`--Receipt.StoreReceipts <value>`** `NETHERMIND_RECEIPTCONFIG_STORERECEIPTS`

  If set to 'false' then transaction receipts will not be stored in the database after a new block is processed. This setting is independent from downloading receipts in fast sync mode. Allowed values: `true` `false`. Defaults to `true`.

- **`--Receipt.TxLookupLimit <value>`** `NETHERMIND_RECEIPTCONFIG_TXLOOKUPLIMIT`

  Number of recent blocks to maintain transaction index. 0 to never remove tx index. -1 to never index. Defaults to `2350000`.

</p>
</details>

<details>
<summary className="nd-details-heading">

#### Seq

</summary>
<p>

- **`--Seq.ApiKey <value>`** `NETHERMIND_SEQCONFIG_APIKEY`

  API key used for log events ingestion to Seq instance

- **`--Seq.MinLevel <value>`** `NETHERMIND_SEQCONFIG_MINLEVEL`

  Minimal level of log events which will be sent to Seq instance. Defaults to `Off`.

- **`--Seq.ServerUrl <value>`** `NETHERMIND_SEQCONFIG_SERVERURL`

  Seq instance URL. Defaults to `"http://localhost:5341`.

</p>
</details>

<details>
<summary className="nd-details-heading">

#### Snapshot

</summary>
<p>

- **`--Snapshot.Checksum <value>`** `NETHERMIND_SNAPSHOTCONFIG_CHECKSUM`

  SHA256 checksum for the snapshot file Defaults to `null`.

- **`--Snapshot.DownloadUrl <value>`** `NETHERMIND_SNAPSHOTCONFIG_DOWNLOADURL`

  URL to snapshot file. Ignored if not set. Defaults to `null`.

- **`--Snapshot.Enabled <value>`** `NETHERMIND_SNAPSHOTCONFIG_ENABLED`

  Defines whether the Snapshot plugin is enabled. Allowed values: `true` `false`. Defaults to `false`.

</p>
</details>

<details>
<summary className="nd-details-heading">

#### Sync

</summary>
<p>

- **`--Sync.AncientBodiesBarrier <value>`** `NETHERMIND_SYNCCONFIG_ANCIENTBODIESBARRIER`

  [EXPERIMENTAL] Defines the earliest body downloaded in fast sync when DownloadBodiesInFastSync is enabled. Actual values used will be Math.Max(1, Math.Min(PivotNumber, AncientBodiesBarrier)) Defaults to `0`.

- **`--Sync.AncientReceiptsBarrier <value>`** `NETHERMIND_SYNCCONFIG_ANCIENTRECEIPTSBARRIER`

  [EXPERIMENTAL] Defines the earliest receipts downloaded in fast sync when DownloadReceiptsInFastSync is enabled. Actual value used will be Math.Max(1, Math.Min(PivotNumber, Math.Max(AncientBodiesBarrier, AncientReceiptsBarrier))) Defaults to `0`.

- **`--Sync.BlocksDbTuneDbMode <value>`** `NETHERMIND_SYNCCONFIG_BLOCKSDBTUNEDBMODE`

  [EXPERIMENTAL] Optimize db for write during sync just for blocks db. Useful for turning on blobs file.

  Allowed values:

    - `Default`
    - `WriteBias`
    - `HeavyWrite`
    - `AggressiveHeavyWrite`
    - `DisableCompaction`
    - `EnableBlobFiles`

  Defaults to `EnableBlobFiles`.

- **`--Sync.DownloadBodiesInFastSync <value>`** `NETHERMIND_SYNCCONFIG_DOWNLOADBODIESINFASTSYNC`

  If set to 'true' then the block bodies will be downloaded in the Fast Sync mode. Allowed values: `true` `false`. Defaults to `true`.

- **`--Sync.DownloadHeadersInFastSync <value>`** `NETHERMIND_SYNCCONFIG_DOWNLOADHEADERSINFASTSYNC`

  If set to 'false' then fast sync will only download recent blocks. Allowed values: `true` `false`. Defaults to `true`.

- **`--Sync.DownloadReceiptsInFastSync <value>`** `NETHERMIND_SYNCCONFIG_DOWNLOADRECEIPTSINFASTSYNC`

  If set to 'true' then the receipts will be downloaded in the Fast Sync mode. This will slow down the process by a few hours but will allow you to interact with dApps that execute extensive historical logs searches (like Maker CDPs). Allowed values: `true` `false`. Defaults to `true`.

- **`--Sync.ExitOnSynced <value>`** `NETHERMIND_SYNCCONFIG_EXITONSYNCED`

  Exit Nethermind once sync is finished Allowed values: `true` `false`. Defaults to `false`.

- **`--Sync.ExitOnSyncedWaitTimeSec <value>`** `NETHERMIND_SYNCCONFIG_EXITONSYNCEDWAITTIMESEC`

  Specify wait time after sync finished. Defaults to `60`.

- **`--Sync.FastBlocks <value>`** `NETHERMIND_SYNCCONFIG_FASTBLOCKS`

  If set to 'true' then in the Fast Sync mode blocks will be first downloaded from the provided PivotNumber downwards. This allows for parallelization of requests with many sync peers and with no need to worry about syncing a valid branch (syncing downwards to 0). You need to enter the pivot block number, hash and total difficulty from a trusted source (you can use etherscan and confirm with other sources if you wan to change it). Allowed values: `true` `false`. Defaults to `false`.

- **`--Sync.FastSync <value>`** `NETHERMIND_SYNCCONFIG_FASTSYNC`

  If set to 'true' then the Fast Sync (eth/63) synchronization algorithm will be used. Allowed values: `true` `false`. Defaults to `false`.

- **`--Sync.FastSyncCatchUpHeightDelta <value>`** `NETHERMIND_SYNCCONFIG_FASTSYNCCATCHUPHEIGHTDELTA`

  Relevant only if 'FastSync' is 'true'. If set to a value, then it will set a minimum height threshold limit up to which FullSync, if already on, will stay on when chain will be behind network. If this limit will be exceeded, it will switch back to FastSync. In normal usage we do not recommend setting this to less than 32 as this can cause issues with chain reorgs. Please note that last 2 blocks will always be processed in FullSync, so setting it to less than 2 will have no effect. Defaults to `8192`.

- **`--Sync.FixReceipts <value>`** `NETHERMIND_SYNCCONFIG_FIXRECEIPTS`

  [ONLY FOR MISSING RECEIPTS ISSUE] Turns on receipts validation that checks for ones that might be missing due to previous bug. It downloads them from network if needed.If used please check that PivotNumber is same as original used when syncing the node as its used as a cut-off point. Allowed values: `true` `false`. Defaults to `false`.

- **`--Sync.FixTotalDifficulty <value>`** `NETHERMIND_SYNCCONFIG_FIXTOTALDIFFICULTY`

  [ONLY TO FIX INCORRECT TOTAL DIFFICULTY ISSUE] Recalculates total difficulty starting from FixTotalDifficultyStartingBlock to FixTotalDifficultyLastBlock. Allowed values: `true` `false`. Defaults to `false`.

- **`--Sync.FixTotalDifficultyLastBlock <value>`** `NETHERMIND_SYNCCONFIG_FIXTOTALDIFFICULTYLASTBLOCK`

  [ONLY TO FIX INCORRECT TOTAL DIFFICULTY ISSUE] Last block which total difficulty will be recalculated. If set to null equals to best known block Defaults to `null`.

- **`--Sync.FixTotalDifficultyStartingBlock <value>`** `NETHERMIND_SYNCCONFIG_FIXTOTALDIFFICULTYSTARTINGBLOCK`

  [ONLY TO FIX INCORRECT TOTAL DIFFICULTY ISSUE] First block which total difficulty will be recalculated. Defaults to `1`.

- **`--Sync.MaxAttemptsToUpdatePivot <value>`** `NETHERMIND_SYNCCONFIG_MAXATTEMPTSTOUPDATEPIVOT`

  Max number of attempts (seconds) to update pivot block basing on Forkchoice message from Consensus Layer. Only for PoS chains. Infinite by default. Defaults to `2147483647`.

- **`--Sync.MaxProcessingThreads <value>`** `NETHERMIND_SYNCCONFIG_MAXPROCESSINGTHREADS`

  [TECHNICAL] Specify max num of thread used for processing. Default is same as logical core count. Defaults to `0`.

- **`--Sync.NetworkingEnabled <value>`** `NETHERMIND_SYNCCONFIG_NETWORKINGENABLED`

  If 'false' then the node does not connect to peers. Allowed values: `true` `false`. Defaults to `true`.

- **`--Sync.NonValidatorNode <value>`** `NETHERMIND_SYNCCONFIG_NONVALIDATORNODE`

  [EXPERIMENTAL] Only for non validator nodes! If set to true, DownloadReceiptsInFastSync and/or DownloadBodiesInFastSync can be set to false. Allowed values: `true` `false`. Defaults to `false`.

- **`--Sync.PivotHash <value>`** `NETHERMIND_SYNCCONFIG_PIVOTHASH`

  Hash of the pivot block for the Fast Blocks sync. Defaults to `null`.

- **`--Sync.PivotNumber <value>`** `NETHERMIND_SYNCCONFIG_PIVOTNUMBER`

  Number of the pivot block for the Fast Blocks sync. Defaults to `0`.

- **`--Sync.PivotTotalDifficulty <value>`** `NETHERMIND_SYNCCONFIG_PIVOTTOTALDIFFICULTY`

  Total Difficulty of the pivot block for the Fast Blocks sync (not - this is total difficulty and not difficulty). Defaults to `null`.

- **`--Sync.SnapSync <value>`** `NETHERMIND_SYNCCONFIG_SNAPSYNC`

  Enables SNAP sync protocol. Allowed values: `true` `false`. Defaults to `false`.

- **`--Sync.SnapSyncAccountRangePartitionCount <value>`** `NETHERMIND_SYNCCONFIG_SNAPSYNCACCOUNTRANGEPARTITIONCOUNT`

  Number of account range partition to create. Increase snap sync request concurrency. Value must be between 1 to 256 (inclusive). Defaults to `8`.

- **`--Sync.StrictMode <value>`** `NETHERMIND_SYNCCONFIG_STRICTMODE`

  Disable some optimization and run a more extensive sync. Useful for broken sync state but normally not needed Allowed values: `true` `false`. Defaults to `false`.

- **`--Sync.SynchronizationEnabled <value>`** `NETHERMIND_SYNCCONFIG_SYNCHRONIZATIONENABLED`

  If 'false' then the node does not download/process new blocks. Allowed values: `true` `false`. Defaults to `true`.

- **`--Sync.TuneDbMode <value>`** `NETHERMIND_SYNCCONFIG_TUNEDBMODE`

  [EXPERIMENTAL] Optimize db for write during sync. Significantly reduce total writes written and some sync time if you are not network limited.

  Allowed values:

    - `Default`
    - `WriteBias`
    - `HeavyWrite`
    - `AggressiveHeavyWrite`
    - `DisableCompaction`
    - `EnableBlobFiles`

  Defaults to `HeavyWrite`.

- **`--Sync.UseGethLimitsInFastBlocks <value>`** `NETHERMIND_SYNCCONFIG_USEGETHLIMITSINFASTBLOCKS`

  If set to 'true' then in the Fast Blocks mode Nethermind generates smaller requests to avoid Geth from disconnecting. On the Geth heavy networks (mainnet) it is desired while on Parity or Nethermind heavy networks (Goerli, AuRa) it slows down the sync by a factor of ~4 Allowed values: `true` `false`. Defaults to `true`.

- **`--Sync.WitnessProtocolEnabled <value>`** `NETHERMIND_SYNCCONFIG_WITNESSPROTOCOLENABLED`

  Enables witness protocol. Allowed values: `true` `false`. Defaults to `false`.

</p>
</details>

<details>
<summary className="nd-details-heading">

#### TraceStore

</summary>
<p>

- **`--TraceStore.BlocksToKeep <value>`** `NETHERMIND_TRACESTORECONFIG_BLOCKSTOKEEP`

  Defines how many blocks counting from head are kept in the TraceStore, if '0' all traces of processed blocks will be kept. Defaults to `10000`.

- **`--TraceStore.DeserializationParallelization <value>`** `NETHERMIND_TRACESTORECONFIG_DESERIALIZATIONPARALLELIZATION`

  Maximum parallelization when deserializing requests for trace_filter. 0 defaults to logical cores, set to something low if you experience too big resource usage. Defaults to `0`.

- **`--TraceStore.Enabled <value>`** `NETHERMIND_TRACESTORECONFIG_ENABLED`

  Defines whether the TraceStore plugin is enabled, if 'true' traces will come from DB if possible. Allowed values: `true` `false`. Defaults to `false`.

- **`--TraceStore.TraceTypes <value>`** `NETHERMIND_TRACESTORECONFIG_TRACETYPES`

  Defines what kind of traces are saved and kept in TraceStore. Available options are: Trace, Rewards, VmTrace, StateDiff or just All.

  Allowed values:

    - `None`
    - `VmTrace`
    - `StateDiff`
    - `Trace`
    - `Rewards`
    - `All`

  Defaults to `Trace, Rewards`.

</p>
</details>

<details>
<summary className="nd-details-heading">

#### TxPool

</summary>
<p>

- **`--TxPool.BlobCacheSize <value>`** `NETHERMIND_TXPOOLCONFIG_BLOBCACHESIZE`

  Max number of full blob transactions stored in memory as a cache for persistent storage. Default value use max 200MB (256*128KB*6blobs), for 1-blob txs it's 33MB (256*128KB) Defaults to `256`.

- **`--TxPool.BlobSupportEnabled <value>`** `NETHERMIND_TXPOOLCONFIG_BLOBSUPPORTENABLED`

  If true, blob transactions support will be enabled Allowed values: `true` `false`. Defaults to `false`.

- **`--TxPool.GasLimit <value>`** `NETHERMIND_TXPOOLCONFIG_GASLIMIT`

  Max transaction gas allowed. Defaults to `null`.

- **`--TxPool.HashCacheSize <value>`** `NETHERMIND_TXPOOLCONFIG_HASHCACHESIZE`

  Max number of cached hashes of already known transactions.It is set automatically by the memory hint. Defaults to `524288`.

- **`--TxPool.InMemoryBlobPoolSize <value>`** `NETHERMIND_TXPOOLCONFIG_INMEMORYBLOBPOOLSIZE`

  Max number of full blob transactions stored in memory. Used only if persistent storage is disabled Defaults to `512`.

- **`--TxPool.MaxPendingBlobTxsPerSender <value>`** `NETHERMIND_TXPOOLCONFIG_MAXPENDINGBLOBTXSPERSENDER`

  Max number of pending blob transactions per single sender. Set it to 0 to disable the limit. Defaults to `16`.

- **`--TxPool.MaxPendingTxsPerSender <value>`** `NETHERMIND_TXPOOLCONFIG_MAXPENDINGTXSPERSENDER`

  Max number of pending transactions per single sender. Set it to 0 to disable the limit. Defaults to `0`.

- **`--TxPool.PeerNotificationThreshold <value>`** `NETHERMIND_TXPOOLCONFIG_PEERNOTIFICATIONTHRESHOLD`

  Defines average percent of tx hashes from persistent broadcast send to peer together with hashes of last added txs. Set this value to 100 if you want to broadcast all transactions. Defaults to `5`.

- **`--TxPool.PersistentBlobStorageEnabled <value>`** `NETHERMIND_TXPOOLCONFIG_PERSISTENTBLOBSTORAGEENABLED`

  If true, all blob transactions would be stored in persistent db Allowed values: `true` `false`. Defaults to `false`.

- **`--TxPool.PersistentBlobStorageSize <value>`** `NETHERMIND_TXPOOLCONFIG_PERSISTENTBLOBSTORAGESIZE`

  Max number of full blob transactions stored in the database (increasing the number of transactions in the blob pool also results in higher memory usage). Default value use max 13GB (16386*128KB*6blobs), for 1-blob txs it's 2GB (16386*128KB) Defaults to `16384`.

- **`--TxPool.ReportMinutes <value>`** `NETHERMIND_TXPOOLCONFIG_REPORTMINUTES`

  Minutes between reporting on current state of tx pool. Defaults to `null`.

- **`--TxPool.Size <value>`** `NETHERMIND_TXPOOLCONFIG_SIZE`

  Max number of transactions held in mempool (more transactions in mempool mean more memory used Defaults to `2048`.

</p>
</details>

<details>
<summary className="nd-details-heading">

#### Wallet

</summary>
<p>

- **`--Wallet.DevAccounts <value>`** `NETHERMIND_WALLETCONFIG_DEVACCOUNTS`

  Number of auto-generted dev accounts to work with. Dev accounts will have private keys from 00...01 to 00..n Defaults to `10`.

</p>
</details>

