---
description: 使用我们的跨平台以太坊客户端运行您的 Nethermind 节点
---

# 运行客户端

点击[下载源代码](../download-sources/) ，获取适合您的操作系统的最新 Nethermind 软件包。

{% tabs %}
{% tab title="Linux" %}
* [\[x\] 下载软件包](../download-sources/)

```bash
wget [LINUX_PACKAGE_URL]
```

![使用 wget 工具下载软件包](<../../.gitbook/assets/image (2).png>)

* [x] 安装 Linux 依赖项

```bash
sudo apt-get update && sudo apt-get install libsnappy-dev libc6-dev libc6 unzip -y
```

![安装 Linux 依赖项](<../../.gitbook/assets/image (16).png>)

* [x] `unzip` 软件包

```bash
unzip [LINUX_PACKAGE_FILENAME] -d nethermind
```

![解压软件包](<../../.gitbook/assets/image (7).png>)

* [x] 切换目录

```bash
cd nethermind
```

![Switch directory](<../../.gitbook/assets/image (8) (1) (1) (1) (1).png>)

* [x] 运行 `Nethermind.Launcher` 并选择 `Ethereum Node`

```bash
./Nethermind.Launcher
```

![运行 Nethermind.Launcher](<../../.gitbook/assets/image (19).png>)

* [\[x\] 选择网络](../networks.md)

![选择网络](<../../.gitbook/assets/image (14).png>)

* [\[x\] 选择同步模式](../sync-modes.md)

![选择同步模式](<../../.gitbook/assets/image (5).png>)

* [x] 如有需要，可配置 `JSON RPC` /`EthStats`

![JSON RPC / EthStats 配置](<../../.gitbook/assets/image (13).png>)

* [x] Nethermind 节点开始运行 🎉，请查看这篇文章来了解[日志](../../#explaining-nethermind-logs)

![Nethermind client running Ethereum Mainnet](<../../.gitbook/assets/image (18) (1) (1) (1) (1) (1) (1) (4) (2) (1) (1).png>)

{% hint style="danger" %}
## 如果您使用的是 Ubuntu 16.04 操作系统，需要安装其它依赖项。
{% endhint %}

```bash
sudo add-apt-repository ppa:ubuntu-toolchain-r/test
sudo apt-get update
sudo apt-get install gcc-6 g++-6 -y
sudo apt install libzstd1 -y
```
{% endtab %}

{% tab title="Windows" %}
1. 下载 `Windows` 软件包
2. `unzip` 文件
3. 运行 `Nethermind.Launcher.exe`
4. 选择所需配置
{% endtab %}

{% tab title="MacOS" %}
* 下载 `Darwin` 软件包
* 安装 `MacOS` 依赖项

```
brew install gmp snappy lz4 zstd
```

* `unzip` 文件
* 运行 `Nethermind.Launcher`
* ⚠ If you will be prompted with a warning, check instructions here -> [https://support.apple.com/en-us/HT202491](https://support.apple.com/en-us/HT202491)
* 选择所需配置
{% endtab %}
{% endtabs %}
