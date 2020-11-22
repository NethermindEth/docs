# Manage Nethermind with systemd

### Create a new user

```text
sudo useradd -m -s /bin/bash nethermind
```

increase the maximum number of open files

```text
sudo bash -c 'echo "nethermind soft nofile 1000000" > /etc/security/limits.d/nethermind.conf'
sudo bash -c 'echo "nethermind hard nofile 1000000" >> /etc/security/limits.d/nethermind.conf'
```

switch to the new user

```text
sudo su - nethermind
```

### Install Dependencies

```text
sudo apt-get update && sudo apt-get install libsnappy-dev libc6-dev libc6 unzip -y
```

### Get Nethermind

[download](../ethereum-client/download-sources/) the latest Nethermind package

```text
wget [LINUX_PACKAGE_URL]
```

extract the files

```text
unzip [LINUX_PACKAGE_FILENAME] -d nethermind
```

remove the no more need package **\(optional\)**

```text
rm [LINUX_PACKAGE_FILENAME]
```

### Manage Nethermind with systemd

exit the session as user `nethermind` if still active

```text
exit
```

download the nethermind.service config

```text
wget https://raw.githubusercontent.com/NethermindEth/nethermind/master/scripts/nethermind.service
```

move the config into the systemd folder

```text
sudo mv nethermind.service /etc/systemd/system/
```

reload the systemd configs

```text
sudo systemctl daemon-reload
```

you can now `start`, `stop`, `restart` Nethermind with systemd

```text
sudo service nethermind start
```

display the current Nethermind output **\(optional\)**

```text
journalctl -u nethermind -f
```

enable autorun **\(optional\)**

```text
sudo systemctl enable nethermind
```

