---
description: Nethermind Dockers 指示
---

# Dockers

## ![](../.gitbook/assets/pobrane.png) Docker仓库

Docker仓库可以在此处找到

{% embed url="https://hub.docker.com/repository/docker/nethermind/nethermind" caption="Nethermind Docker Hub" %}

## 支持的架构

我们目前支持以下CPU架构的docker 镜像：

* **AMD64**
* **ARM64**
* **ARM32**

## 使用现有的镜像

### **可用标签：**

| **标签** | 说明 | 架构 |
| :--- | :--- | :--- |
| `最新` | 基于 **Nethermind Debian** 的最新镜像 | x86\_64 |
| `alpine` | 基于 **Nethermind Alpine** 的最新镜像 **\(recommended\)** | x86\_64 |
| `arm64` | 基于 **Nethermind ARM64 Debian**  的最新镜像 | ARM64 |
| `alpine-arm64` | 基于 **Nethermind ARM64 Alpine** 的最新镜像 **\(recommended\)** | ARM64 |
| `arm32` | 基于**Nethermind ARM32 Debian** 的最新镜像 | ARM32 |

要使用之前的版本，您可以传递`{tag}` ，例如`1.8.50` 主镜像名称前“ 

例如，如果您想使用**Nethermind Alpine**镜像`1.7.4`的版本 ，则镜像名称应为 `1.7.4-alpine`，对于**Nethermind ARM64  Alpine**  `1.7.4-alpine-arm64` ****，依此类推。

所有版本都可以在[标签历史](https://github.com/NethermindEth/nethermind/tags).中找到。

{% hint style="info" %}
We highly encourage to use a lighter container which is Alpine based, tagged as `alpine` or `1.8.50-alpine` \(Possible benefit of less memory consumption\)
{% endhint %}

### **运行Nethermind **容器

Docker pull命令：

{% tabs %}
{% tab title="Alpine" %}
```text
docker pull nethermind/nethermind:alpine
```
{% endtab %}

{% tab title="Debian" %}
```
docker pull nethermind/nethermind
```
{% endtab %}

{% tab title="Alpine ARM64" %}
```
docker pull nethermind/nethermind:alpine-arm64
```
{% endtab %}

{% tab title="Debian ARM64" %}
```
docker pull nethermind/nethermind:arm64
```
{% endtab %}

{% tab title="Debian ARM32" %}
```
docker pull nethermind/nethermind:arm32
```
{% endtab %}
{% endtabs %}

为了启动`Nethermind.Runner`,  只需运行：

{% tabs %}
{% tab title="Alpine" %}
```text
docker run -it nethermind/nethermind:alpine
```
{% endtab %}

{% tab title="Debian" %}
```
docker run -it nethermind/nethermind
```
{% endtab %}

{% tab title="Alpine ARM64" %}
```
docker run -it nethermind/nethermind:alpine-arm64
```
{% endtab %}

{% tab title="Debian ARM64" %}
```
docker run -it nethermind/nethermind:arm64
```
{% endtab %}

{% tab title="Debian ARM32" %}
```
docker run -it nethermind/nethermind:arm32
```
{% endtab %}
{% endtabs %}

您可以使用 `--help` 获取Nethermind可能启动参数的列表，也可以在[此处](configuration/). 找到它们。

{% tabs %}
{% tab title="Alpine" %}
```text
docker run -it nethermind/nethermind:alpine --help
```
{% endtab %}

{% tab title="Debian" %}
```
docker run -it nethermind/nethermind --help
```
{% endtab %}

{% tab title="Alpine ARM64" %}
```
docker run -it nethermind/nethermind:alpine-arm64 --help
```
{% endtab %}

{% tab title="Debian ARM64" %}
```
docker run -it nethermind/nethermind:arm64 --help
```
{% endtab %}

{% tab title="Debian ARM32" %}
```
docker run -it nethermind/nethermind:arm32 --help
```
{% endtab %}
{% endtabs %}

可以使用简单的约定通过环境变量来修改每个配置属性:

```bash
NETHERMIND_{MODULE}CONFIG_{PROPERTY} or --{Module}.{Property}
```

例如

```text
NETHERMIND_INITCONFIG_ISMINING=true or --Init.IsMining
```

{% hint style="warning" %}
Environment variables are to be passed before docker image tag while parameteres should be passed right after the docker image tag.
{% endhint %}

{% hint style="info" %}
Environment variables ****can be easily used within **docker-compose.yml** files in environment section
{% endhint %}

### **JSON RPC**

要启用JSON RPC，请与 `--network host`共享主机的网络名称空间，并设置`--JsonRpc.Enabled true`.。要更改端口，只需传递`--JsonRpc.Port 8550`.。

如果在本地运行：

{% tabs %}
{% tab title="Alpine" %}
```text
docker run -it --network host nethermind/nethermind:alpine --JsonRpc.Enabled true
```
{% endtab %}

{% tab title="Debian" %}
```
docker run -it --network host nethermind/nethermind --JsonRpc.Enabled true
```
{% endtab %}

{% tab title="Alpine ARM64" %}
```
docker run -it --network host nethermind/nethermind:alpine-arm64 --JsonRpc.Enabled true
```
{% endtab %}

{% tab title="Debian ARM64" %}
```
docker run -it --network host nethermind/nethermind:arm64 --JsonRpc.Enabled true
```
{% endtab %}

{% tab title="Debian ARM32" %}
```
docker run -it --network host nethermind/nethermind:arm32 --JsonRpc.Enabled true
```
{% endtab %}
{% endtabs %}

或使用端口映射

{% tabs %}
{% tab title="Alpine" %}
```text
docker run -it -p 8545:8545 nethermind/nethermind:alpine --JsonRpc.Enabled true --JsonRpc.Host 0.0.0.0
```
{% endtab %}

{% tab title="Debian" %}
```
docker run -it -p 8545:8545 nethermind/nethermind --JsonRpc.Enabled true --JsonRpc.Host 0.0.0.0
```
{% endtab %}

{% tab title="Alpine ARM64" %}
```
docker run -it -p 8545:8545 nethermind/nethermind:alpine-arm64 --JsonRpc.Enabled true --JsonRpc.Host 0.0.0.0
```
{% endtab %}

{% tab title="Debian ARM64" %}
```
docker run -it -p 8545:8545 nethermind/nethermind:arm64 --JsonRpc.Enabled true --JsonRpc.Host 0.0.0.0
```
{% endtab %}

{% tab title="Debian ARM32" %}
```
docker run -it -p 8545:8545 nethermind/nethermind:arm32 --JsonRpc.Enabled true --JsonRpc.Host 0.0.0.0
```
{% endtab %}
{% endtabs %}

如果从VM运行，可能需要通过 `--JsonRpc.Host {hostmachine_ip}` \(`127.0.0.1` is set by default\)。 如果仍然无法连接JSON RPC，则可以设置`--JsonRpc.Host 0.0.0.0` 

### **可用配置**

要切换网络，请设置`--config {network}` flag \(default value is `mainnet`\).

* `mainnet`
* `goerli`
* `rinkeby`
* `ropsten`
* `xdai`
* `poacore`
* `sokol`
* `volta`

例如，在`goerli`网络上运行Nethermind：

{% tabs %}
{% tab title="Alpine" %}
```text
docker run -it nethermind/nethermind:alpine --config goerli
```
{% endtab %}

{% tab title="Debian" %}
```
docker run -it nethermind/nethermind --config goerli
```
{% endtab %}

{% tab title="Alpine ARM64" %}
```
docker run -it nethermind/nethermind:alpine-arm64 --config goerli
```
{% endtab %}

{% tab title="Debian ARM64" %}
```
docker run -it nethermind/nethermind:arm64 --config goerli
```
{% endtab %}

{% tab title="Debian ARM32" %}
```
docker run -it nethermind/nethermind:arm32 --config goerli
```
{% endtab %}
{% endtabs %}

### **卷**

要完全覆盖配置文件，要用这个卷:

```bash
-v /home/user/mainnet.cfg:/nethermind/configs/mainnet.cfg
```

为了将内部数据库映射到本地卷，您需要映射`/nethermind/nethermind_db/`:

```bash
-v /home/user/nethermind_db:/nethermind/nethermind_db
```

可以使用以下命令映射日志：

```bash
-v /home/user/logs:/nethermind/logs
```

密钥库:

```bash
-v /home/user/keystore:/nethermind/keystore
```

Nlog:

```bash
-v /home/user/NLog.config:/nethermind/NLog.config
```

更多详细的NLog配置可以`在 [此处](https://github.com/NLog/NLog/wiki/Configuration-file).找到。

## 构建镜像

Dockerfile可以在 [根目录](https://github.com/NethermindEth/nethermind) 中找到，它具有6种风格：

| 文档名称 | 说明 | 架构 |
| :--- | :--- | :--- |
| [Dockerfile](https://github.com/NethermindEth/nethermind/blob/master/Dockerfile) | 必须具有克隆的存储库才能构建基于Debian的镜像。 | x86\_64 |
| [Dockerfile\_alpine](https://github.com/NethermindEth/nethermind/blob/master/Dockerfile_alpine) | 必须具有克隆的存储库才能构建基于Alpine的镜像。 | x86\_64 |
| [Dockerfile\_full](https://github.com/NethermindEth/nethermind/blob/master/Dockerfile_full) | 不需要克隆的存储库，因为将在第一步中它被下载。 | x86\_64 |
| [Dockerfile\_arm64](https://github.com/NethermindEth/nethermind/blob/master/Dockerfile_arm64) | 必须具有克隆的存储库才能构建基于 ARM64 Debian 的镜像。 | ARM64 |
| [Dockerfile\_alpine\_arm64](https://github.com/NethermindEth/nethermind/blob/master/Dockerfile_alpine_arm64) | 必须具有克隆的存储库才能构建基于  ARM64 Alpine 的镜像。 | ARM64 |
| [Dockerfile\_arm32](https://github.com/NethermindEth/nethermind/blob/master/Dockerfile_arm32) | 必须具有克隆的存储库才能构建基于 ARM32  Debian 的镜像。 | ARM32 |

为了构建镜像，运行：

```bash
docker build -t nethermind .
```

或使用 `-f`标志来指定其他Dockerfile：

```bash
docker build -f Dockerfile_full -t nethermind .
```

本地创建docker镜像的示例用法：

```bash
docker run -it nethermind --config goerli
```

