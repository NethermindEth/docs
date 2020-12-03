# Docker \(Debian/Alpine\)

## 使用已有镜像

### **可用标签：**

| **标签** | 描述 | 架构 |
| :--- | :--- | :--- |
| `latest` | 基于 **Nethermind Debian** 的最新镜像 | x86\_64 |
| `alpine` | 基于 **Nethermind Alpine** 的最新镜像 **\（推荐使用\）** | x86\_64 |
| `arm64` | 基于 **Nethermind ARM64 Debian**  的最新镜像 | ARM64 |
| `alpine-arm64` | 基于 **Nethermind ARM64 Alpine** 的最新镜像 | ARM64 |
| `arm32` | 基于 **Nethermind ARM32 Debian** 的最新镜像 | ARM32 |

如需使用之前的版本，您可以在主镜像名称前加上 `{tag}` ，例如，`1.8.50`。

例如，如果您想使用 `1.7.4` 版本的  **Nethermind Alpine** 镜像，则镜像名称应为 `1.7.4-alpine`；如果您想使用相同版本的 **Nethermind ARM64 Alpine** 镜像，则镜像名称应为 `1.7.4-alpine-arm64` ****，依此类推。所有可用版本都可以在[标签历史](https://github.com/NethermindEth/nethermind/tags)中找到。

{% hint style="info" %}
We highly encourage to use a lighter container which is Alpine based, tagged as `alpine` or `1.8.50-alpine` \(Possible benefit of less memory consumption\)
{% endhint %}

### **运行 Nethermind **容器

Docker 拉取命令：

{% tabs %}
{% tab title="Alpine" %}
```text
docker pull nethermind/nethermind:alpine
```
{% endtab %}

{% tab title="Debian" %}
```text
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

启动 `Nethermind.Runner` 只需运行：

{% tabs %}
{% tab title="Alpine" %}
```text
docker run -it nethermind/nethermind:alpine
```
{% endtab %}

{% tab title="Debian" %}
```text
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

您可以使用 `--help` 获取 Nethermind 的启动参数列表，或点击[此处](../configuration/)..查看。

{% tabs %}
{% tab title="Alpine" %}
```text
docker run -it nethermind/nethermind:alpine --help
```
{% endtab %}

{% tab title="Debian" %}
```text
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

您可以使用简单的规范通过环境变量来修改每一个配置属性：

```bash
NETHERMIND_{MODULE}CONFIG_{PROPERTY} or --{Module}.{Property}
```

例如：

```text
NETHERMIND_INITCONFIG_ISMINING=true or --Init.IsMining
```

环境变量应该放在 docker 镜像标签之前，而参数应该放在 docker 镜像标签之后。

### **JSON RPC**

如需启用 JSON RPC，请将该主机的网络命名空间与 `--network host` 共享，并设置 `--JsonRpc.Enabled true`。如需更改端口，请输入 `--JsonRpc.Port 8550`。

可以在本地运行：

{% tabs %}
{% tab title="Alpine" %}
```text
docker run -it --network host nethermind/nethermind:alpine --JsonRpc.Enabled true
```
{% endtab %}

{% tab title="Debian" %}
```text
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

也可以使用端口映射：

{% tabs %}
{% tab title="Alpine" %}
```text
docker run -it -p 8545:8545 nethermind/nethermind:alpine --JsonRpc.Enabled true --JsonRpc.Host 0.0.0.0
```
{% endtab %}

{% tab title="Debian" %}
```text
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

例如，如需在 `goerli` 网络上运行 Nethermind：

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

###  
**卷**

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

Nlog:

```bash
-v /home/user/NLog.config:/nethermind/NLog.config
```

点击[此处](https://github.com/NLog/NLog/wiki/Configuration-file)，了解更多关于 NLog 配置的内容。

## 构建镜像

Docker 文件可以在[代码库](https://github.com/NethermindEth/nethermind) 中找到。它具备 3 种类型：

| 文件名 | 描述 |
| :--- | :--- |
| [Dockerfile](https://github.com/NethermindEth/nethermind/blob/master/Dockerfile) | 需要克隆代码库来构建基于 Debian 的镜像。 |
| [Dockerfile\_alpine](https://github.com/NethermindEth/nethermind/blob/master/Dockerfile_alpine) | 需要克隆代码库来构建基于 Alpine 的镜像。 |
| [Dockerfile\_full](https://github.com/NethermindEth/nethermind/blob/master/Dockerfile_full) | 无需克隆代码库，因为该文件会在第一步下载代码库。 |

如需构建镜像，请运行：

```bash
docker build -t nethermind .
```

或者：

```bash
docker build -f Dockerfile_full -t nethermind .
```

视您所选择的版本而定。

本地创建的 docker 镜像的用法示例：

```bash
docker run -it nethermind --config goerli
```

