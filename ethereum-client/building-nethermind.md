# Building Nethermind

## IDE \(optional\)

* [JetBrains Rider](https://www.jetbrains.com/rider/)
* [VS Code](https://code.visualstudio.com/docs/other/dotnet)

## SDKs

To build Nethermind you will need **.NET SDK 3.1**. You can download it here \(make sure you select correct platform and distribution\):

{% embed url="https://dotnet.microsoft.com/download" caption=".NET SDK for Linux, macOS, Windows" %}

## Linux

{% tabs %}
{% tab title="Linux \(Ubuntu 18.04+/Debian 10\)" %}
```text
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
```text
sudo yum install -y glibc-devel && \
sudo yum install bzip2-devel && \
sudo yum install -y libzstd && \
sudo ln -s `find /usr/lib64/ -type f -name "libbz2.so.1*"` /usr/lib64/libbz2.so.1.0 && \
sudo ln -s `find /usr/lib64/ -type f -name "libsnappy.so.1*"` /usr/lib64/libsnappy.so
```
{% endtab %}

{% tab title="Linux \(Fedora 31\)" %}
```text
sudo yum install -y glibc-devel && \
sudo yum install -y snappy && \
sudo yum install -y libzstd && \
sudo ln -s `find /usr/lib64/ -type f -name "libbz2.so.1*"` /usr/lib64/libbz2.so.1.0 && \
sudo ln -s `find /usr/lib64/ -type f -name "libsnappy.so.1*"` /usr/lib64/libsnappy.so
```
{% endtab %}
{% endtabs %}

## MacOS

```text
brew install gmp && brew install snappy && brew install lz4
```

## Windows

You may need to install [https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads)

## All Platforms

{% hint style="warning" %}
If dotnet command is not found then probably you forgot to install SDK \(see instructions above\)
{% endhint %}

{% hint style="info" %}
On Linux distributions we suggest that at this stage you start `screen` so you can go back to session with `screen -rd` command later on
{% endhint %}

Clone the Nethermind repository and its submodules, then build Nethermind in `Release` or `Debug` mode.

```bash
git clone https://github.com/NethermindEth/nethermind.git --recursive
cd nethermind/src/Nethermind
dotnet build Nethermind.sln -c Release
```

Launch goerli testnet for quick sync and testing

```bash
cd Nethermind.Runner
dotnet run --no-build -c Release -- --config goerli
```

You can confirm the latest block of the Goerli tetsnet here:

{% embed url="https://blockscout.com/eth/goerli/" caption="" %}

or to run Ethereum Mainnet:

```text
cd Nethermind.Runner
dotnet run --no-build -c Release -- --config mainnet
```

## Potential Issues

If you have some previous pre-release versions of .NET Core installed they may cause conflicts. Your case might be quite unique so best to search for help online.

