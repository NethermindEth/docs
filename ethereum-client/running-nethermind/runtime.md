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

## 静态节点

静态节点是可以信任的预配置节点阵列。定义静态节点用一个简单的`static-nodes.json` 文件，该文件包含用逗号分隔的`enodes`列表。

```bash
[
  "enode://c1c3a604950119f82d78189792b73f5a96bd09017c77465e3c32fc51c1d758a9a772ffddd58436d465342f2cfa6d4a442a49e526743f4d8354d7c5ce794c3ee5@127.0.0.1:30303",
  "enode://2784b947df025df9911875e68ccfcb0627ad4ae1dfb9f77634435692e8626508d9a6a04adff7719d3d73b25e72cbedee8d8e431492afbbd5fb4082e78c52d934@127.0.0.1:30303"
]
```

默认情况下，`static-nodes.json` 文件存储在Nethermind软件包的`Data/`文件夹中。 `静态节点 ` 文件的路径可以通过[`静态节点路径`](../configuration/modules/init.md) 参数配置。

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

