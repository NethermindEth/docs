# 运行时

## 目录

如果您在本地构建 Nethermind 应用，则入口点将位于:

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

静态节点是一组预先配置好且可以信任的节点。静态节点可以用一个简单的 `static-nodes.json` 文件定义。该文件包含一个使用逗号分隔的 `enodes` 列表。

```bash
[
  "enode://c1c3a604950119f82d78189792b73f5a96bd09017c77465e3c32fc51c1d758a9a772ffddd58436d465342f2cfa6d4a442a49e526743f4d8354d7c5ce794c3ee5@127.0.0.1:30303",
  "enode://2784b947df025df9911875e68ccfcb0627ad4ae1dfb9f77634435692e8626508d9a6a04adff7719d3d73b25e72cbedee8d8e431492afbbd5fb4082e78c52d934@127.0.0.1:30303"
]
```

默认情况下，`static-nodes.json` 文件存储在 Nethermind 软件包的 `Data/` 文件夹中。`static-nodes` 文件的路径可以通过[`StaticNodesPath`]() 参数配置。

## NLog 配置

您可以将文件和控制台中的日志级别改成错误、警告、信息、调试和追踪中的任意一个：

```bash
<logger name="*" minlevel="Info" writeTo="file-async"/>
<logger name="*" minlevel="Info" writeTo="auto-colored-console-async"/>
```

点击[此处](https://github.com/NLog/NLog/wiki/Configuration-file)，了解更多关于 NLog 配置的详细内容。

### 使用代码库构建

日志级别可由 `NLog.config` 文件控制。该文件位于：

```text
src/Nethermind/Nethermind.Runner/bin/Release/netcoreapp3.1/NLog.config
```

### 从 Github/Downloads 下载程序包

`NLog.config` 文件随软件包一起提供，可以在提取目录中找到。

![](../../.gitbook/assets/image%20%2830%29.png)

### 使用 Docker 镜像运行 Nethermind

`NLog.config` 文件位于 Docker 容器内的 `/nethermind/NLog.config` 路径。该容器卷可以使用一个简单的命令来映射：

```bash
-v /home/user/NLog.config:/nethermind/NLog.config
```

