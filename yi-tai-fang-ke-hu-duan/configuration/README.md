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
传递标记时，每个属性必须以各自的模块为前缀，并在后面加上**属性名称及其值**，例如

`--Init.IsMining true`
{% endhint %}

{% hint style="info" %}
使用 / 作为路径分隔符，以便在所有已支持平台（Linux、Windows 和 MacOS）之间共享配置。
{% endhint %}

{% hint style="info" %}
您可以通过命令行使用 `--config`, `--baseDbPath`和 `--log`选项来选择是配置文件、基础数据库目录前缀还是日志级别。
{% endhint %}

