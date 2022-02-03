---
description: A list of properites to adjust Nethermind Node configuration
---

# Configuration

There are three ways of configuring Nethermind node. They are presented below in the reversed order of priorities \(if you set the same property in the config file, in the environment variable and in the command line then the command line value will be used\).

## Config file

Change the configuration properties in the `.cfg` file of the network configuration you wish to run. Each `.cfg` file with the default setup is attached to Nethermind packages and can be found in `configs` folder.

## Environment variables

The last way is to set the values in the environment variables, e.g. `set NETHERMIND_INITCONFIG_PROCESSINGENABLED = false`

## Command line options

Another way is to setup each configuration property by passing flags to either `Nethermind.Runner` or `Nethermind.Launcher`. You can see the list of all config option by running `./Nethermind.Runner --help` For example:

```text
./Nethermind.Runner --config ropsten --JsonRpc.Enabled true --Init.ProcessingEnabled false
```

{% hint style="warning" %}
When passing a flag, each property needs to be prefixed with its respective [**Module**](./), followed by the **property name** and its **value** e.g `--Init.IsMining true`
{% endhint %}

{% hint style="info" %}
Use `/` as the path separator so the configs can be shared between all platforms supported \(Linux, Windows, MacOS\).
{% endhint %}

{% hint style="info" %}
`--config`, `--baseDbPath`,`--datadir, --loggerConfigSource, --log` and `--configsDirectory`options are available from the command line to select config file, base DB directory prefix and log level respectively.
{% endhint %}

### datadir

**Usage:** `--datadir` or `-dd`

You may want to use this option to store all data that the node produces in a custom directory. The `--datadir` \(`-dd`\) changes paths of `database, logs, keystore`to the target directory. You can specify either **relative** or **absolute** paths, e.g.

```text
--datadir data
```

```text
--datadir /home/user/nethermind/data
```

```text
--datadir ./data
```

{% hint style="warning" %}
Absolute paths of `Init.BaseDbPath`, `Init.LogDirectory` or`KeyStore.KeyStoreDirectory`in config file will not be overwritten by `--datadir`
{% endhint %}

### baseDbPath

**Usage:** `--baseDbPath` or `-d`

Configures the path of the Nethermind's database folder. Is equal to setting `--Init.BaseDbPath` parameter.

```text
--baseDbPath /home/user/my_node/db
```

### config

**Usage:** `--config` ****or ****`-c`

Determines the configuration file of the network on which Nethermind will be running.

```text
--config xdai
```

More on that: 

{% page-ref page="../networks.md" %}

### log

**Usage:** `--log` ****or ****`-l`

Changes the logging level.

```text
--log DEBUG
```

More on that:

{% page-ref page="../logging-configuration.md" %}

### configsDirectory

**Usage:** `--configsDirectory` or `-cd`

Changes the source directory of your configuration files.

```text
--configsDirectory /home/user/my_configs
```

### loggerConfigSource

**Usage:** `--loggerConfigSource` or `-lcs`

Changes the path of the `NLog.config` file.

```text
--loggerConfigSource /home/user/NLog.config
```

More on that:

{% embed url="https://github.com/nlog/nlog/wiki" %}

