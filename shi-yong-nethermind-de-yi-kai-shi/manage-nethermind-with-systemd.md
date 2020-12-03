# 使用systemd管理Nethermind

## 创建一个新用户

```text
sudo useradd -m -s /bin/bash nethermind
```

增加打开文件的最大数量

```text
sudo bash -c 'echo "nethermind soft nofile 1000000" > /etc/security/limits.d/nethermind.conf'
sudo bash -c 'echo "nethermind hard nofile 1000000" >> /etc/security/limits.d/nethermind.conf'
```

切换到新用户

```text
sudo su - nethermind
```

## 下载Nethermind

[下载](../yi-tai-fang-ke-hu-duan/download-sources/) 最新的Nethermind软件包

```text
wget [LINUX_PACKAGE_URL]
```

解压缩文件

```text
unzip [LINUX_PACKAGE_FILENAME] -d nethermind
```

删除不再需要的软件包**\(可选\)**

```text
rm [LINUX_PACKAGE_FILENAME]
```

## 使用systemd管理Nethermind

如果仍处于活动状态，则以用户`nethermind` 退出会话

```text
exit
```

下载nethermind.service配置

```text
wget https://raw.githubusercontent.com/NethermindEth/nethermind/master/scripts/nethermind.service
```

将配置移到systemd文件夹中

```text
sudo mv nethermind.service /etc/systemd/system/
```

重新加载系统配置

```text
sudo systemctl daemon-reload
```

您现在可以使用systemd进行`start`（启动）， `stop`（停止）， `restart` （重新启动）Nethermind,

```text
sudo service nethermind start
```

显示当前的Nethermind输出**\(可选\)**

```text
journalctl -u nethermind -f
```

启用自动运行**\(可选\)**

```text
sudo systemctl enable nethermind
```

