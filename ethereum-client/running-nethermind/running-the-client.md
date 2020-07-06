---
description: 使用我们的跨平台以太坊客户端运行您的Nethermind节点
---

# 运行客户端

选中[下载源代码](../download-sources/) ，以获取适用于您的OS的最新Nethermind软件包。

{% tabs %}
{% tab title="Windows" %}
1. 下载 `Windows` 软件包
2. `解压` 文件
3. 运行`Nethermind.Launcher.exe`
4. 选择所需的配置
{% endtab %}

{% tab title="Linux" %}
* [x] [下载软件包](../download-sources/)

```bash
wget [LINUX_PACKAGE_URL]
```

![Download package with wget](../../.gitbook/assets/image%20%282%29.png)

* [x] 安装Linux依赖项

```bash
sudo apt-get update && sudo apt-get install libsnappy-dev libc6-dev libc6 unzip -y
```

![Install Linux dependencies](../../.gitbook/assets/image%20%2816%29.png)

* [x] ` 解压` 软件包

```bash
unzip [LINUX_PACKAGE_FILENAME] -d nethermind
```

![Unzip the package](../../.gitbook/assets/image%20%287%29.png)

* [x]切换目录

```bash
cd nethermind
```

![Switch directory](../../.gitbook/assets/image%20%288%29.png)

* [x]运行`Nethermind.Launcher`然后选择`Ethereum Node`。

```bash
./Nethermind.Launcher
```

![Run the Nethermind.Launcher](../../.gitbook/assets/image%20%2819%29.png)

* [x]选择[网络](../networks.md)

![Select the network](../../.gitbook/assets/image%20%2814%29.png)

* [x]选择[同步模式](../sync-modes.md)

![Select sync mode](../../.gitbook/assets/image%20%285%29.png)

* [x]如果有需要配置`JSON RPC` /`EthStats`

![JSON RPC / EthStats configuration](../../.gitbook/assets/image%20%2813%29.png)

* [x] Nethermind节点现在正在运行🎉，请查看本文以熟悉 [日志](../../#explaining-nethermind-logs)

![Nethermind client running Ethereum Mainnet](../../.gitbook/assets/image%20%2818%29.png)

{% hint style="danger" %}
#### 对于Ubuntu 16.04，您将需要安装其他依赖项。
{% endhint %}

```bash
sudo add-apt-repository ppa:ubuntu-toolchain-r/test
sudo apt-get update
sudo apt-get install gcc-6 g++-6 -y
sudo apt install libzstd1 -y
```
{% endtab %}

{% tab title="MacOS" %}
* 下载`Darwin`软件包
* 安装`MacOS`依赖项

```text
brew install gmp && brew install snappy && brew install lz4 && brew install zstd
```

* `解压` 文件
* 运行`Nethermind.Launcher`
* 选择所需的配置
{% endtab %}
{% endtabs %}









