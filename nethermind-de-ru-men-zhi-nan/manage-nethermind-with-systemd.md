# 使用 systemd 管理 Nethermind

## 创建一个新的用户账户

```text
sudo useradd -m -s /bin/bash nethermind
```

提高可打开文件数的上限

```text
sudo bash -c 'echo "nethermind soft nofile 1000000" > /etc/security/limits.d/nethermind.conf'
sudo bash -c 'echo "nethermind hard nofile 1000000" >> /etc/security/limits.d/nethermind.conf'
```

切换至新的用户账户

```text
sudo su - nethermind
```

## 安装依赖项

```text
sudo apt-get update && sudo apt-get install libsnappy-dev libc6-dev libc6 unzip -y
```

## 安装 Nethermind

[download](../yi-tai-fang-ke-hu-duan/download-sources/) the latest Nethermind package

```text
wget [LINUX_PACKAGE_URL]
```

解压缩文件

```text
unzip [LINUX_PACKAGE_FILENAME] -d nethermind
```

删除软件包**（可选）**

```text
rm [LINUX_PACKAGE_FILENAME]
```

## 使用 systemd 管理 Nethermind

如果 `nethermind` 仍处于活动状态，则退出用户会话

```text
exit
```

下载 nethermind.service 配置文件

```text
wget https://raw.githubusercontent.com/NethermindEth/nethermind/master/scripts/nethermind.service
```

将该配置文件移至 systemd 文件夹

```text
sudo mv nethermind.service /etc/systemd/system/
```

重新加载 systemd 配置

```text
sudo systemctl daemon-reload
```

现在，您可以使用 systemd 来 `start`、`stop` 或 `restart` Nethermind 了。

```text
sudo service nethermind start
```

显示当前 Nethermind 输出值**（可选）**

```text
journalctl -u nethermind -f
```

开启自动运行**（可选）**

```text
sudo systemctl enable nethermind
```

