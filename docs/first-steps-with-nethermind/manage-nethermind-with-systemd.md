# Manage Nethermind with systemd

### Create a new user

```
sudo useradd -m -s /bin/bash nethermind
```

* [x] increase the maximum number of open files

```
sudo bash -c 'echo "nethermind soft nofile 1000000" > /etc/security/limits.d/nethermind.conf'
```

```
sudo bash -c 'echo "nethermind hard nofile 1000000" >> /etc/security/limits.d/nethermind.conf'
```

* [x] switch to the new user

```
sudo su - nethermind
```

### Install Dependencies

```
sudo apt-get update && sudo apt-get install libsnappy-dev libc6-dev libc6 unzip -y
```

### Get Nethermind

* [x] [download](../installing-nethermind/download-sources.md) the latest Nethermind package

```
wget [LINUX_PACKAGE_URL]
```

* [x] extract the files

```
unzip [LINUX_PACKAGE_FILENAME] -d build
```

* [x] create data directory for `logs`, `database` and `keystore`

```bash
mkdir data
```

* [x] create `.env` file inside `data` directory and provide environment variables to the Node configuration like for example:

:::caution
`NETHERMIND_CONFIG` is the important one - defines the network config, the rest is optional.
:::

{% code title=".env" %}
```bash
NETHERMIND_CONFIG="mainnet"
NETHERMIND_JSONRPCCONFIG_ENABLED=true
NETHERMIND_JSONRPCCONFIG_HOST="0.0.0.0"
NETHERMIND_HEALTHCHECKSCONFIG_ENABLED="true"
```
{% endcode %}

* [x] remove the no more need package **(optional)**

```
rm [LINUX_PACKAGE_FILENAME]
```

### Manage Nethermind with systemd

* [x] download the nethermind.service config

```
wget https://raw.githubusercontent.com/NethermindEth/nethermind/master/scripts/nethermind.service
```

* [x] move the config into the systemd folder

```
sudo mv nethermind.service /etc/systemd/system/
```

* [x] reload the systemd configs

```
sudo systemctl daemon-reload
```

* [x] you can now `start`, `stop`, `restart` Nethermind with systemd

```
sudo service nethermind start
```

* [x] display the current Nethermind output **(optional)**

```
journalctl -u nethermind -f
```

* [x] enable autorun **(optional)**

```
sudo systemctl enable nethermind
```
