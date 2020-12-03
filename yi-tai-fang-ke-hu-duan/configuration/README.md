---
description: 调整Nethermind节点配置的属性列表
---

# 配置

配置Nethermind节点有三种的方法。 它们在下面以优先级\的相反顺序显示（如果您在配置文件，环境变量和命令行中设置了相同的属性，则将使用命令行值\）。

## 配置文件

更改要运行的网络配置的 `.cfg` 文件中的配置属性。每个具有默认设置的 `.cfg` 文件都附加在Nethermind软件包中，可以在`configs` 文件夹中找到。

## 环境变量

最后一种方法是在环境变量中设置值，例如 设置`set NETHERMIND_INITCONFIG_PROCESSINGENABLED = false`

## 命令行

另一种方法是通过将标志传递给 `Nethermind.Runner` 或 `Nethermind.Launcher`来设置每个配置属性。 您可以通过运行 `./Nethermind.Runner --help` 来查看所有配置选项的列表，例如：

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

