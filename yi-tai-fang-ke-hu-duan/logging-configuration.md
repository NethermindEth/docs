# 日志配置

## 日志配置文件的位置

Nethermind 使用 NLog 库记录日志。您可以通过编辑 NLog.config 文件来对 NLog 库进行配置。

| 环境类型 | NLog.config 文件位置 |
| :--- | :--- |
| src 文件夹下的调试模式 | src\Nethermind\Nethermind.Runner\bin\Debug\netcoreapp3.1\NLog.config |
| src 文件夹下的发布模式 | src\Nethermind\Nethermind.Runner\bin\Release\netcoreapp3.1\NLog.config |
| Docker | ? \[暂无文档\] |
| [下载页面](https://downloads.nethermind.io) | 解压软件包后的顶级目录 |
| [GitHub 版本发布页](https://github.com/NethermindEth/nethermind/releases) | 解压软件包后的顶级目录 |
| dAppNode | ? \[暂无文档\] |

## 日志配置文件的语法

如需了解 NLog 配置选项的详情，请点击： [https://nlog-project.org/config/](https://nlog-project.org/config/)。

## 全局日志覆盖

还有全局日志覆盖可供您临时使用：

| 命令行覆盖 | 日志级别 |
| :--- | :--- |
| ./Nethermind.Runner --config mainnet --log TRACE | 追踪 |
| ./Nethermind.Runner --config mainnet --log DEBUG | 调试 |
| ./Nethermind.Runner --config mainnet --log INFO | 信息 |
| ./Nethermind.Runner --config mainnet --log WARN | 警告 |
| ./Nethermind.Runner --config mainnet --log ERROR | 错误 |

## JSON RPC 的日志级别

将下方命令行添加到日志配置文件内即可完成：

```text
<logger name="JsonRpc.*" minlevel="Error" writeTo="file-async"/>
<logger name="JsonRpc.*" minlevel="Error" writeTo="auto-colored-console-async" final="true"/>
<logger name="JsonRpc.*" final="true"/>
```

## 企业日志

点击[此处](https://docs.nethermind.io/nethermind/enterprise/seq)，查看如何配置 Seq。

