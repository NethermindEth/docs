# Docker \(Debian/Alpine\)

## Using an existing image

### **Available tags:**

| **Tag** | Description | Architecture |
| :--- | :--- | :--- |
| `latest` | The latest **Nethermind Debian** based image | x86\_64 |
| `alpine` | The latest **Nethermind Alpine** based image **\(recommended\)** | x86\_64 |
| `arm64` | The latest **Nethermind ARM64 Debian** based image | ARM64 |
| `alpine-arm64` | The latest **Nethermind ARM64 Alpine** based image | ARM64 |
| `arm32` | The latest **Nethermind ARM32 Debian** based image | ARM32 |

To use one of the previous versions you can pass `{tag}` e.g. `1.8.50` before the main image name.

For example if you wish to use version `1.7.4` of **Nethermind Alpine** image, the image name would be `1.7.4-alpine` , for **Nethermind ARM64 Alpine** `1.7.4-alpine-arm64` ****and so on and so forth. All versions are available in [tags history](https://github.com/NethermindEth/nethermind/tags).

{% hint style="info" %}
We highly encourage to use a lighter container which is Alpine based, tagged as `alpine` or `1.8.50-alpine` \(Possible benefit of less memory consumption\)
{% endhint %}

### **Running Nethermind** Container

Docker pull command:

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

In order to start `Nethermind.Runner`, simply run:

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

You can use `--help` to get a list of possible start parameters for Nethermind or you can find them all [here](../configuration/).

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

It’s possible to modify each configuration property via environment variable, using a simple convention:

```bash
NETHERMIND_{MODULE}CONFIG_{PROPERTY} or --{Module}.{Property}
```

For example:

```text
NETHERMIND_INITCONFIG_ISMINING=true or --Init.IsMining
```

Environment variables are to be passed before docker image tag while parameteres should be passed right after the docker image tag.

### **JSON RPC**

To enable JSON RPC, share the host’s networking namespace with `--network host` and set`--JsonRpc.Enabled true`. To change port simply pass`--JsonRpc.Port 8550`.

If running locally:

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

or with port-mapping

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

If running from a VM you may want to expose JSON RPC to the outer world via `--JsonRpc.Host {hostmachine_ip}` \(`127.0.0.1` is set by default\). You may try setting `--JsonRpc.Host 0.0.0.0` if you still can not connect with JSON RPC.

### **Available configurations**

To switch the network use `--config {network}` flag \(default value is `mainnet`\).

* `mainnet`
* `goerli`
* `rinkeby`
* `ropsten`
* `xdai`
* `poacore`
* `sokol`
* `volta`

For example to run Nethermind on `goerli` network:

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

### **Volumes**

To fully override a configuration file, you need to use a volume:

```bash
-v /home/user/mainnet.cfg:/nethermind/configs/mainnet.cfg
```

In order to map an internal database to a local volume, you need to map `/nethermind/nethermind_db/`:

```bash
-v /home/user/nethermind_db:/nethermind/nethermind_db
```

Logs can be mapped with the following command:

```bash
-v /home/user/logs:/nethermind/logs
```

Keystore:

```bash
-v /home/user/keystore:/nethermind/keystore
```

Nlog:

```bash
-v /home/user/NLog.config:/nethermind/NLog.config
```

More detailed NLog configuration can be found [here](https://github.com/NLog/NLog/wiki/Configuration-file).

## Building an image

Dockerfile can be found in the repository [root](https://github.com/NethermindEth/nethermind) and it comes with 3 flavors:

| File Name | Description |
| :--- | :--- |
| [Dockerfile](https://github.com/NethermindEth/nethermind/blob/master/Dockerfile) | requires to have a cloned repository in order to build a Debian based image |
| [Dockerfile\_alpine](https://github.com/NethermindEth/nethermind/blob/master/Dockerfile_alpine) | requires to have a cloned repository in order to build an Alpine based image |
| [Dockerfile\_full](https://github.com/NethermindEth/nethermind/blob/master/Dockerfile_full) | doesn’t require to have a cloned repository, as it will download it during the first step |

In order to build the images, run either:

```bash
docker build -t nethermind .
```

or:

```bash
docker build -f Dockerfile_full -t nethermind .
```

Depending on the chosen version.

Example usage of the locally created docker-image:

```bash
docker run -it nethermind --config goerli
```

