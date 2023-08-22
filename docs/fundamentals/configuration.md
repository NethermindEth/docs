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

  Nethermind provides the following pre-built configurations named as the networks they are for. Their respective versions for archive nodes are suffixed `_archive`. For instance, `mainnet_archive`.

  - `chiado`
  - `energyweb`
  - `exosama`
  - `goerli`
  - `gnosis`
  - `mainnet`
  - `sepolia`
  - `volta`

  </p>
  </details>

- **`-c, --configsDirectory <path>`**

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
