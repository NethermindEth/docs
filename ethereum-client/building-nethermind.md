# 建立 Nethermind

### IDE ( 可选）

* [JetBrains Rider](https://www.jetbrains.com/rider/)
* [VS Code](https://code.visualstudio.com/docs/other/dotnet)

### 微软软件开发工具包 （SDKs）

要构建Nethermind，您将需要** .NET SDK 3.1 **。您可以在此处下载\（确保选择正确的平台和发行版\）：

{% embed url="https://dotnet.microsoft.com/download" caption=".NET SDK for Linux, macOS, Windows" %}

### Linux

{% tabs %}
{% tab title="Linux \(Ubuntu 18.04+/Debian 10\)" %}
```
sudo apt-get update && sudo apt-get install libsnappy-dev libc6-dev libc6
```
{% endtab %}

{% tab title="Linux \(Ubuntu 16.04\)" %}
```text
sudo apt-get update && sudo apt-get install libsnappy-dev libc6-dev libc6 && \
sudo add-apt-repository ppa:ubuntu-toolchain-r/test && \
sudo apt-get update && \
sudo apt-get install gcc-6 g++-6 && \
sudo apt install libzstd1
```
{% endtab %}

{% tab title="Linux \(CentOS 8\)" %}
    sudo yum install -y glibc-devel && \
    sudo yum install bzip2-devel && \
    sudo yum install -y libzstd && \
    sudo ln -s `find /usr/lib64/ -type f -name "libbz2.so.1*"` /usr/lib64/libbz2.so.1.0 && \
    sudo ln -s `find /usr/lib64/ -type f -name "libsnappy.so.1*"` /usr/lib64/libsnappy.so
{% endtab %}

{% tab title="Linux \(Fedora 31\)" %}
    sudo yum install -y glibc-devel && \
    sudo yum install -y snappy && \
    sudo yum install -y libzstd && \
    sudo ln -s `find /usr/lib64/ -type f -name "libbz2.so.1*"` /usr/lib64/libbz2.so.1.0 && \
    sudo ln -s `find /usr/lib64/ -type f -name "libsnappy.so.1*"` /usr/lib64/libsnappy.so
{% endtab %}
{% endtabs %}

### MacOS

```text
brew install gmp && brew install snappy && brew install lz4
```

### Windows

可能需要安装 [https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads)

### 所有平台

{% hint style="warning" %}
If dotnet command is not found then probably you forgot to install SDK \(see instructions above\)
{% endhint %}

{% hint style="info" %}
On Linux distributions we suggest that at this stage you start `screen` so you can go back to session with `screen -rd` command later on
{% endhint %}

克隆Nethermind存储库及其子模块，然后以 `Release`或`Debug`模式构建Nethermind。

```bash
git clone https://github.com/NethermindEth/nethermind.git --recursive
cd nethermind/src/Nethermind
dotnet build Nethermind.sln -c Release
```

以进行快速同步和测试，启动goerli testnet

```bash
cd Nethermind.Runner
dotnet run --no-build -c Release -- --config goerli
```

在此处可以确认Goerli tetsnet 的最新块

{% embed url="https://blockscout.com/eth/goerli/" %}

或运行以太坊主网:

```text
cd Nethermind.Runner
dotnet run --no-build -c Release -- --config mainnet
```

### 可能产生的问 题

如果您安装了某些.NET Core的预发行版本，则这些预发行版本可能会导致一些冲突。您怎样的情况可能非常独特，因此最好在线寻求帮助。

