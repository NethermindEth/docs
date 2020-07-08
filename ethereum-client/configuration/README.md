---
description: 调整Nethermind节点配置的属性列表
---

# 配置

有两种方法可以配置Nethermind节点。一种方法是简单地更改要运行的网络配置的 `.cfg` 文件中的配置属性。每个具有默认设置的 `.cfg` 文件都附加在Nethermind软件包中，可以在`configs` 文件夹中找到。

另一种方法是通过将标志传递给`Nethermind.Runner`或`Nethermind.Launcher`来设置每个配置属性。例如：

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

