---
description: A list of properites to adjust Nethermind Node configuration
---

# Configuration

There are two ways of configuring Nethermind node. One way is to simply change the configuration properties in the `.cfg` file of the network configuration you wish to run. Each `.cfg` file with the default setup is attached to Nethermind packages and can be found in `configs` folder.

Another way is to setup each configuration property by passing flags to either `Nethermind.Runner` or `Nethermind.Launcher`. For example:

```text
./Nethermind.Runner --config ropsten --JsonRpc.Enabled true --Init.ProcessingEnabled false
```

{% hint style="warning" %}
When passing a flag, each property needs to be prefixed with its respective [**Module**](modules/), followed by the **property name** and its **value** e.g `--Init.IsMining true`
{% endhint %}

{% hint style="info" %}
Use `/` as the path separator so the configs can be shared between all platforms supported \(Linux, Windows, MacOS\).
{% endhint %}

{% hint style="info" %}
`--config`, `--baseDbPath`, and `--log` options are available from the command line to select config file, base DB directory prefix and log level respectively.
{% endhint %}



