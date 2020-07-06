# 运行

## 目录

 如果您在本地构建应用程序，入口点将位于:

```bash
src/Nethermind/Nethermind.Runner/bin/Release/netcoreapp3.1/
```

默认情况下，日志文件位于：

```bash
src/Nethermind/Nethermind.Runner/bin/Release/netcoreapp3.1/logs
```

默认情况下，数据库位于：

```bash
src/Nethermind/Nethermind.Runner/bin/Release/netcoreapp3.1/nethermind_db
```

## NLog 配置

您可以通过选择以下级别之一 \(错误(Error)，警告(Warn)，信息(Info)，调试(Debug)，跟踪(Trace) \) 来更改文件和控制台中的登录级别：

```bash
<logger name="*" minlevel="Info" writeTo="file-async"/>
<logger name="*" minlevel="Info" writeTo="auto-colored-console-async"/>
```

更多详细的NLog 配置就在[这里](https://github.com/NLog/NLog/wiki/Configuration-file).

### 从存储库构建

日志记录级别可以在`NLog.config` 文件中控制，在此处:

```text
src/Nethermind/Nethermind.Runner/bin/Release/netcoreapp3.1/NLog.config
```

### 从 Github/Downloads package下载程序包

`NLog.config` 文件随软件包一起提供，可以在提取目录中找到。

![](../../.gitbook/assets/image%20%2830%29.png)

### 使用Docker镜像运行Nethermind

`NLog.config` f文件位于Docker容器内的 `/nethermind/NLog.config` 路径中。可以使用一个简单的命令来映射该卷：

```bash
-v /home/user/NLog.config:/nethermind/NLog.config
```

