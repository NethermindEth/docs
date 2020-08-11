---
description: A list of properites to adjust Nethermind Node configuration
---

# Configuration

There are three ways of configuring Nethermind node. They are presented below in the reversed order of priorities \(if you set the same property in the config file, in the environment variable and in the command line then the command line value will be used\).

### Config file

Change the configuration properties in the `.cfg` file of the network configuration you wish to run. Each `.cfg` file with the default setup is attached to Nethermind packages and can be found in `configs` folder.

### Environment variables

The last way is to set the values in the environment variables, e.g. `set NETHERMIND_INITCONFIG_PROCESSINGENABLED = false`

### Command line

Another way is to setup each configuration property by passing flags to either `Nethermind.Runner` or `Nethermind.Launcher`. You can see the list of all config option by running `./Nethermind.Runner --help` For example:

```text
./Nethermind.Runner --config ropsten --JsonRpc.Enabled true --Init.ProcessingEnabled false
```

{% hint style="warning" %}
When passing a flag, each property needs to be prefixed with its respective [**Module**](), followed by the **property name** and its **value** e.g `--Init.IsMining true`
{% endhint %}

{% hint style="info" %}
Use `/` as the path separator so the configs can be shared between all platforms supported \(Linux, Windows, MacOS\).
{% endhint %}

{% hint style="info" %}
`--config`, `--baseDbPath`, and `--log` options are available from the command line to select config file, base DB directory prefix and log level respectively.
{% endhint %}

