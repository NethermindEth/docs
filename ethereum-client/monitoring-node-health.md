---
description: Monitoring Nethermind Node Health with HealthChecks
---

# Monitoring Node Health

Nethermind **1.9.46** version comes with a `Nethermind.HealthChecks.dll` plugin that allows you to monitor your Nethermind node better. It leverages the power of [AspNetCore. Diagnostics. HealthChecks](https://github.com/Xabaril/AspNetCore.Diagnostics.HealthChecks). It simply adds an`/health` endpoint to the JSON RPC service which can be used to check the Nethermind's _liveness -_ verify if the node is **synced** and has **at least one peer.**

## **Add plugin to your node**

At the bottom of each release in the **Assets** section, the **plugins** package is included.

![](../.gitbook/assets/image%20%2846%29.png)

{% hint style="warning" %}
Each Nethermind package has its `plugins` directory, this is where you need to extract contents of the **plugins** package 👈 
{% endhint %}

* [x] Download the plugins package and inside extract its content into `plugins` directory 

```text
wget https://github.com/NethermindEth/nethermind/releases/download/1.9.45/plugins-1.9.45-6444e38-20201201.zip
unzip plugins-1.9.45-6444e38-20201201.zip -d plugins
```

The `Nethermind.HealthChecks.dll` plugin will be automatically loaded on Nethermind start.

## Enabling and configuring Health Checks

The health checks need to be additionally enabled which can be done either through `--HealthChecks.*` flags or by adding `"HealthChecks"` section to the config file.

### Using flags



