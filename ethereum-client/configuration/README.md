---
description: 用于调整 Nethermind 节点配置的属性列表
---

# 配置

您可以通过下列三种方法配置 Nethermind 节点。这三种方法按照从低到高的优先级排列（如果您在配置文件、环境变量和命令行中设置了相同的属性，则优先使用命令行的值\）。

## 配置文件

找到您想要运行的网络配置的 `.cfg` 文件，修改文件中的配置属性。每个 `.cfg` 文件都带有默认设置，可在 Nethermind 软件包的 `configs` 文件夹中找到。

## 环境变量

第二种方法是设置环境变量中的值，例如，`set NETHERMIND_INITCONFIG_PROCESSINGENABLED = false`。

## 命令行

第三种方法是将标记传递给 `Nethermind.Runner` 或 `Nethermind.Launcher` 来设置每个配置属性。您可以运行 `./Nethermind.Runner --help` 查看所有配置选项的列表，例如：

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
`--config`, `--baseDbPath`, and `--log` options are available from the command line to select config file, base DB directory prefix and log level respectively.
{% endhint %}

