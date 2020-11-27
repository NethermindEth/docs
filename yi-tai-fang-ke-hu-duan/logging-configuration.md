# 记录配置

## 日志配置文件位置

登录Nethermind是通过NLog库完成的，该库可以通过编辑NLog.config文件进行配置。

| 环境类型 | NLog.config位置 |
| :--- | :--- |
| 从src构建-调试模式 | src\Nethermind\Nethermind.Runner\bin\Debug\netcoreapp3.1\NLog.config |
| 从src构建-发布模式 | src\Nethermind\Nethermind.Runner\bin\Release\netcoreapp3.1\NLog.config |
| Docker | ? \[to be documented\] |
| [下载页面](https://downloads.nethermind.io) | 解压缩软件包后的顶级目录 |
| [GitHub发布页面](https://github.com/NethermindEth/nethermind/releases) | 解压缩软件包后的顶级目录 |
| dAppNode | ? \[to be documented\] |

## 日志配置文件语法高亮度\(Syntax\),

详细的NLog配置选项可以在这里找到： [https://nlog-project.org/config/](https://nlog-project.org/config/)

## 全局日志覆盖

此外，还可以临时使用全局日志覆盖：

| 命令覆盖 | 日志级别 |
| :--- | :--- |
| ./Nethermind.Runner --config mainnet --log TRACE | TRACE （跟踪） |
| ./Nethermind.Runner --config mainnet --log DEBUG | DEBUG （调试） |
| ./Nethermind.Runner --config mainnet --log INFO | INFO （信息） |
| ./Nethermind.Runner --config mainnet --log WARN | WARN （警告 ） |
| ./Nethermind.Runner --config mainnet --log ERROR | ERROR （错误） |

## JSON RPC日志级别

在日志记录配置文件中包括以下几行来完成JSON RPC日志级别：

```text
<logger name="JsonRpc.*" minlevel="Error" writeTo="file-async"/>
<logger name="JsonRpc.*" minlevel="Error" writeTo="auto-colored-console-async" final="true"/>
<logger name="JsonRpc.*" final="true"/>
```

## 企业日志

参阅如何配置[Seq](https://docs.nethermind.io/nethermind/enterprise/seq)

