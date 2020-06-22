# Docker \(Debian/Alpine\)

## Using an existing image

### **Available tags:**

| **Tag** | Description |
| :--- | :--- |
| `latest` | The latest **Nethermind Debian** based image |
| `alpine` | The latest **Nethermind Alpine** based image |
| `{tag}` e.g. `1.8.50` | Current or past version of **Nethermind Debian** based image [tags history](https://github.com/NethermindEth/nethermind/tags) |
| `{tag}-alpine` e.g. `1.8.50-alpine` | Current or past version of **Nethermind Alpine** based image [tags history](https://github.com/NethermindEth/nethermind/tags) |

{% hint style="info" %}
We highly encourage to use a lighter container which is Alpine based, tagged as `alpine` or `1.5.8-alpine` \(Possible benefit of less memory consumption\)
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
```
docker pull nethermind/nethermind
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
```
docker run -it nethermind/nethermind
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
```
docker run -it nethermind/nethermind --help
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
```
docker run -it --network host nethermind/nethermind --JsonRpc.Enabled true
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
```
docker run -it -p 8545:8545 nethermind/nethermind --JsonRpc.Enabled true --JsonRpc.Host 0.0.0.0
```
{% endtab %}
{% endtabs %}

If running from a VM you may want to expose JSON RPC to the outer world via `--JsonRpc.Host {hostmachine_ip}` \(`127.0.0.1` is set by default\). You may try setting `--JsonRpc.Host 0.0.0.0` if you still can not connect with JSON RPC.

### **Available configurations**

To switch the network, set `NETHERMIND_CONFIG` variable \(default value is `mainnet`\) or use `--config {network}` flag.

* `mainnet`
* `goerli`
* `rinkeby`
* `ropsten`
* `xdai`
* `poacore`
* `sokol`
* `volta`

For example:

```text
docker run -it -e NETHERMIND_CONFIG=goerli nethermind/nethermind:alpine
```

**Volumes**

To fully override a configuration file, you need to use a volume:

```text
-v /home/user/mainnet.cfg:/nethermind/configs/mainnet.cfg
```

In order to map an internal database to a local volume, you need to map /nethermind/nethermind\_db/:

```text
-v /home/user/nethermind_db:/nethermind/nethermind_db
```

Logs can be mapped with the following command:

```text
-v /home/user/logs:/nethermind/logs
```

Keystore:

```text
-v /home/user/keystore:/nethermind/keystore
```

Nlog:

```text
-v /home/user/NLog.config:/nethermind/NLog.config
```

More detailed NLog configuration can be found [here](https://github.com/NLog/NLog/wiki/Configuration-file).

#### Building an image

Dockerfile can be found in the repository [root](https://github.com/NethermindEth/nethermind) and it comes with 3 flavors:

* [Dockerfile](https://github.com/NethermindEth/nethermind/blob/master/Dockerfile) - requires to have a cloned repository in order to build a Debian based image.
* [Dockerfile\_alpine](https://github.com/NethermindEth/nethermind/blob/master/Dockerfile_alpine) - requires to have a cloned repository in order to build an Alpine based image.
* [Dockerfile\_full](https://github.com/NethermindEth/nethermind/blob/master/Dockerfile_full) - doesn’t require to have a cloned repository, as it will download it during the first step.

In order to build the images, run either:

```text
docker build -t nethermind .
```

or:

```text
docker build -f Dockerfile_full -t nethermind .
```

Depending on the chosen version.

Example usage of the locally created docker-image:

```text
docker run -it nethermind --config goerli
```

