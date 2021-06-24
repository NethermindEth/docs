---
description: Nethermind Dockers 说明
---

# Docker

## ![](../.gitbook/assets/pobrane.png) Docker 代码库

点击下方链接，查看 Docker 代码库：

{% embed url="https://hub.docker.com/repository/docker/nethermind/nethermind" caption="Nethermind Docker Hub" %}

## 已支持架构

我们目前支持以下 CPU 架构的 docker 镜像：

* **AMD64**
* **ARM64**

## 使用已有镜像

### **可用标签：**

| **标签** | 描述 | 架构 |
| :--- | :--- | :--- |
| `latest` | 基于 **Nethermind Debian** 的最新镜像 | x86\_64, ARM64 |

如需使用之前的版本，您可以在主镜像名称后加上 `{tag}` ，例如 `1.8.50`。

例如，如果您想使用 `1.7.4` 版本的 **Nethermind Debian** 镜像，则镜像名称应为 `nethermind/nethermind:1.7.4`。

所有版本都可以在[标签历史页](https://github.com/NethermindEth/nethermind/tags)中找到。

### **运行 Nethermind** 容器

Docker 拉取命令：

{% tabs %}
{% tab title="" %}
```text
docker pull nethermind/nethermind
```
{% endtab %}
{% endtabs %}

启动 `Nethermind.Runner` 只需运行：

{% tabs %}
{% tab title="" %}
```text
docker run -it nethermind/nethermind
```
{% endtab %}
{% endtabs %}

您可以使用`--help` 获取 Nethermind 的启动参数列表，或点击[此处](configuration/)查看。

{% tabs %}
{% tab title="" %}
```text
docker run -it nethermind/nethermind --help
```
{% endtab %}
{% endtabs %}

您可以使用简单的规范通过环境变量来修改每一个配置属性：

```bash
NETHERMIND_{MODULE}CONFIG_{PROPERTY} or --{Module}.{Property}
```

例如：

```text
NETHERMIND_INITCONFIG_ISMINING=true or --Init.IsMining
```

{% hint style="warning" %}
Environment variables are to be passed before the docker image tag while parameters should be passed right after the docker image tag.
{% endhint %}

{% hint style="info" %}
Environment variables **\*\*can be easily used within** docker-compose.yml\*\* files in the environment section
{% endhint %}

### **JSON RPC**

如需启用 JSON RPC，请将该主机的网络命名空间与 `--network host` 共享，并设置 `--JsonRpc.Enabled true`。如需更改端口，请输入 `--JsonRpc.Port 8550`。

可以在本地运行：

{% tabs %}
{% tab title="" %}
```text
docker run -it --network host nethermind/nethermind --JsonRpc.Enabled true
```
{% endtab %}
{% endtabs %}

也可以使用端口映射：

{% tabs %}
{% tab title="" %}
```text
docker run -it -p 8545:8545 nethermind/nethermind --JsonRpc.Enabled true --JsonRpc.Host 0.0.0.0
```
{% endtab %}
{% endtabs %}

如果在虚拟机中运行，您可能想要对外开放 JSON RPC，请使用 `--JsonRpc.Host {hostmachine_ip}` \（默认设置为 `127.0.0.1`\）。 如果仍然无法连接至 JSON RPC，您也可以尝试设置 `--JsonRpc.Host 0.0.0.0`。

### **可用配置**

如需切换网络，请使用 `--config {network}` 标记\（默认值为 `mainnet`\）。

* `mainnet`
* `goerli`
* `rinkeby`
* `ropsten`
* `xdai`
* `poacore`
* `sokol`
* `volta`
* `energyweb`

例如，如需在 `goerli` 网络上运行 Nethermind：

{% tabs %}
{% tab title="" %}
```text
docker run -it nethermind/nethermind --config goerli
```
{% endtab %}
{% endtabs %}

### **Datadir**

To successfully map volumes such as `database, keystore, logs`at one go you can use `--datadir` command option:

```bash
docker run -it -v /home/user/data:/nethermind/data nethermind/nethermind --datadir data
```

### **卷**

若想完全覆盖一个配置文件，您需要使用卷：

```bash
-v /home/user/mainnet.cfg:/nethermind/configs/mainnet.cfg
```

若想将内部数据库映射到本地卷，您需要映射`/nethermind/nethermind_db/`：

```bash
-v /home/user/nethermind_db:/nethermind/nethermind_db
```

您可以使用以下命令来映射日志：

```bash
-v /home/user/logs:/nethermind/logs
```

密钥库：

```bash
-v /home/user/keystore:/nethermind/keystore
```

NLog:

```bash
-v /home/user/NLog.config:/nethermind/NLog.config
```

点击[此处](https://github.com/NLog/NLog/wiki/Configuration-file)，了解更多关于 NLog 配置的内容。

## 构建镜像

Dockerfile 可以在存储库 [root](https://github.com/NethermindEth/nethermind)中找到。目前，该文件使用多架构构建器：

| 文件名 | 描述 | 架构 |
| :--- | :--- | :--- |
| [Dockerfile](https://github.com/NethermindEth/nethermind/blob/master/Dockerfile) | 需要克隆代码库来构建基于 Debian 的镜像。 | x86\_64, ARM64 |

如需构建镜像，请运行：

```bash
docker buildx build --platform=linux/amd64 -t nethermind .
```

本地创建的 docker 镜像的用法示例：

```bash
docker run -it nethermind --config goerli
```

