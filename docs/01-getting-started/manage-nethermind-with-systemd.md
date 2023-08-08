# Manage Nethermind with systemd

### Create a new user

1. Create a new user

```
sudo useradd -m -s /bin/bash nethermind
```

2. Increase the maximum number of open files

```
sudo bash -c 'echo "nethermind soft nofile 1000000" > /etc/security/limits.d/nethermind.conf'
```

```
sudo bash -c 'echo "nethermind hard nofile 1000000" >> /etc/security/limits.d/nethermind.conf'
```

3. Switch to the new user

```
sudo su - nethermind
```

### Install Dependencies

``` bash
sudo apt-get update && sudo apt-get install libsnappy-dev libc6-dev libc6 unzip -y
```

### Get Nethermind

1. [Follow instructions](installing-nethermind/download-sources.mdx) to get the latest Nethermind package

``` bash
wget [LINUX_PACKAGE_URL]
```

2. Extract the files

```
unzip [LINUX_PACKAGE_FILENAME] -d build
```

3. Create data directory for `logs`, `database` and `keystore`

```bash
mkdir data
```

4. Create `.env` file inside `data` directory and provide environment variables to the Node configuration like for example:

:::caution
`NETHERMIND_CONFIG` is the important one - defines the network config, the rest is optional.
:::

```bash title=".env"
NETHERMIND_CONFIG="mainnet"
NETHERMIND_JSONRPCCONFIG_ENABLED=true
NETHERMIND_JSONRPCCONFIG_HOST="0.0.0.0"
NETHERMIND_HEALTHCHECKSCONFIG_ENABLED="true"
```

5. Remove the no more need package **(optional)**

```
rm [LINUX_PACKAGE_FILENAME]
```

### Manage Nethermind with systemd

1. Download the nethermind.service config

``` bash
wget https://raw.githubusercontent.com/NethermindEth/nethermind/master/scripts/nethermind.service
```

2. Move the config into the systemd folder

``` bash
sudo mv nethermind.service /etc/systemd/system/
```

3. Reload the systemd configs

``` bash
sudo systemctl daemon-reload
```

4. Start nethermind service

:::tip
You can now `start`, `stop`, `restart` Nethermind with systemd
:::

``` bash
sudo service nethermind start
```

5. Display the current Nethermind output **(optional)**

``` bash
journalctl -u nethermind -f
```

6. Enable autorun **(optional)**

``` bash
sudo systemctl enable nethermind
```
