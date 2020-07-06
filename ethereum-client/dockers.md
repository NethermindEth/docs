---
description: Nethermind Dockers instructions
---

# Dockers

## ![](../.gitbook/assets/pobrane.png) Docker repository

Docker repository can be found here:

{% embed url="https://hub.docker.com/repository/docker/nethermind/nethermind" caption="Nethermind Docker Hub" %}

## Supported architectures

We are currently supporting docker images for the following CPU architectures:

* **AMD64**
* **ARM64**
* **ARM32**

## Using an existing image

### **Available tags:**

| **Tag** | Description | Architecture |
| :--- | :--- | :--- |
| `latest` | The latest **Nethermind Alpine** based image | x86\_64 |
| `arm64` | The latest **Nethermind ARM64 Alpine** based image | ARM64 |
| `arm32` | The latest **Nethermind ARM32 Debian** based image | ARM32 |

To use one of the previous versions you can pass `{tag}` e.g. `1.8.50` before the main image name.

For example if you wish to use version `1.7.4` of **Nethermind Alpine** image, the image name would be `1.7.4` , for **Nethermind ARM64 Alpine** `1.7.4-arm64` ****and so on and so forth. 

All versions are available in [tags history](https://github.com/NethermindEth/nethermind/tags).

### **Running Nethermind** Container

Docker pull command:

{% tabs %}
{% tab title="AMD64" %}
```
docker pull nethermind/nethermind
```
{% endtab %}

{% tab title="ARM64" %}
```
docker pull nethermind/nethermind:arm64
```
{% endtab %}

{% tab title="ARM32" %}
```
docker pull nethermind/nethermind:arm32
```
{% endtab %}
{% endtabs %}

In order to start `Nethermind.Runner`, simply run:

{% tabs %}
{% tab title="AMD64" %}
```
docker run -it nethermind/nethermind
```
{% endtab %}

{% tab title="ARM64" %}
```
docker run -it nethermind/nethermind:arm64
```
{% endtab %}

{% tab title="ARM32" %}
```
docker run -it nethermind/nethermind:arm32
```
{% endtab %}
{% endtabs %}

You can use `--help` to get a list of possible start parameters for Nethermind or you can find them all [here](configuration/).

{% tabs %}
{% tab title="AMD64" %}
```
docker run -it nethermind/nethermind --help
```
{% endtab %}

{% tab title="ARM64" %}
```
docker run -it nethermind/nethermind:arm64 --help
```
{% endtab %}

{% tab title="ARM32" %}
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

{% hint style="warning" %}
Environment variables are to be passed before docker image tag while parameteres should be passed right after the docker image tag.
{% endhint %}

{% hint style="info" %}
Environment variables ****can be easily used within **docker-compose.yml** files in environment section
{% endhint %}

### **JSON RPC**

To enable JSON RPC, share the host’s networking namespace with `--network host` and set`--JsonRpc.Enabled true`. To change port simply pass`--JsonRpc.Port 8550`.

If running locally:

{% tabs %}
{% tab title="AMD64" %}
```
docker run -it --network host nethermind/nethermind --JsonRpc.Enabled true
```
{% endtab %}

{% tab title="ARM64" %}
```
docker run -it --network host nethermind/nethermind:arm64 --JsonRpc.Enabled true
```
{% endtab %}

{% tab title="ARM32" %}
```
docker run -it --network host nethermind/nethermind:arm32 --JsonRpc.Enabled true
```
{% endtab %}
{% endtabs %}

or with port-mapping

{% tabs %}
{% tab title="AMD64" %}
```
docker run -it -p 8545:8545 nethermind/nethermind --JsonRpc.Enabled true --JsonRpc.Host 0.0.0.0
```
{% endtab %}

{% tab title="ARM64" %}
```
docker run -it -p 8545:8545 nethermind/nethermind:arm64 --JsonRpc.Enabled true --JsonRpc.Host 0.0.0.0
```
{% endtab %}

{% tab title="ARM32" %}
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
{% tab title="AMD64" %}
```
docker run -it nethermind/nethermind --config goerli
```
{% endtab %}

{% tab title="ARM64" %}
```
docker run -it nethermind/nethermind:arm64 --config goerli
```
{% endtab %}

{% tab title="ARM32" %}
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

Dockerfile can be found in the repository [root](https://github.com/NethermindEth/nethermind) and it comes with 6 flavors:

| File Name | Description | Architecture |
| :--- | :--- | :--- |
| [Dockerfile](https://github.com/NethermindEth/nethermind/blob/master/Dockerfile) | requires to have a cloned repository in order to build an Alpine based image | x86\_64 |
| [Dockerfile\_full](https://github.com/NethermindEth/nethermind/blob/master/Dockerfile_full) | doesn’t require to have a cloned repository, as it will download it during the first step | x86\_64 |
| [Dockerfile.arm64](https://github.com/NethermindEth/nethermind/blob/master/Dockerfile_arm64) | requires to have a cloned repository in order to build an ARM64 Alpine based image | ARM64 |
| [Dockerfile.arm32](https://github.com/NethermindEth/nethermind/blob/master/Dockerfile_arm32) | requires to have a cloned repository in order to build an ARM32 Debian based image | ARM32 |

In order to build the images, run either:

```bash
docker build -t nethermind .
```

or to specify other Dockerfile use `-f` flag:

```bash
docker build -f Dockerfile_full -t nethermind .
```

Example usage of the locally created docker-image:

```bash
docker run -it nethermind --config goerli
```

