---
description: Nethermind Dockers instructions
---

# Using Docker

### **Running Nethermind** Container

:::danger
On some OS like **Amazon Linux** you may need to increase the `nofile` limit by adding the following instruction to
docker commands:

```bash 
--ulimit nofile=1000000:1000000
```

e.g.

```bash
docker run -it --ulimit nofile=1000000:1000000 nethermind/nethermind
```

ref. [Github issue](https://github.com/NethermindEth/nethermind/issues/3221), [alternative solutions](https://stackoverflow.com/a/62136351)
:::

Docker pull command:

```bash
docker pull nethermind/nethermind
```

In order to start `Nethermind.Runner`, simply run:

```bash
docker run -it nethermind/nethermind
```

You can use `--help` to get a list of possible start parameters for Nethermind or you can find them
all [here](configuration/).


```bash
docker run -it nethermind/nethermind --help
```

It’s possible to modify each configuration property via environment variable, using a simple convention:

```bash
NETHERMIND_{MODULE}CONFIG_{PROPERTY} or --{Module}.{Property}
```

For example:

```
NETHERMIND_INITCONFIG_ISMINING=true or --Init.IsMining
```

:::caution
Environment variables are to be passed before the docker image tag while parameters should be passed right after the
docker image tag.
:::

:::info
Environment variables can be easily used within **docker-compose.yml** files in the environment section
:::

### **JSON RPC**

To enable JSON RPC, share the host’s networking namespace with `--network host` and set`--JsonRpc.Enabled true`. To
change port simply pass`--JsonRpc.Port 8550`.

If running locally:

```bash
docker run -it --network host nethermind/nethermind --JsonRpc.Enabled true
```

or with port-mapping

```bash
docker run -it -p 8545:8545 nethermind/nethermind --JsonRpc.Enabled true --JsonRpc.Host 0.0.0.0
```

If running from a VM you may want to expose JSON RPC to the outer world
via `--JsonRpc.Host {hostmachine_ip}` (`127.0.0.1` is set by default). You may try setting `--JsonRpc.Host 0.0.0.0` if
you still can not connect with JSON RPC.

### **Available configurations**

To switch the network use `--config {network}` flag (default value is `mainnet`).

* `mainnet`
* `goerli`
* `sepolia`
* `gnosis`
* `chiado`
* `poacore`
* `volta`
* `energyweb`

For example to run Nethermind on `goerli` network:

```bash
docker run -it nethermind/nethermind --config goerli
```

### **Datadir**

To successfully map volumes such as `database, keystore, logs`at one go you can use `--datadir` command option:

```bash
docker run -it -v /home/user/data:/nethermind/data nethermind/nethermind --datadir data
```

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

NLog:

```bash
-v /home/user/NLog.config:/nethermind/NLog.config
```

More detailed NLog configuration can be found [here](https://github.com/NLog/NLog/wiki/Configuration-file).

Dockerfile can be found in the repository [root](https://github.com/NethermindEth/nethermind) and it currently uses the
power of multi-arch builds:
