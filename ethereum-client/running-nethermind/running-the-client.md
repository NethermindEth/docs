---
description: Run your Nethermind node with our cross-platform Ethereum client
---

# Running the client

Check [Download sources](../download-sources/) in order to get the latest Nethermind package for your OS.

{% tabs %}
{% tab title="Linux" %}
* [x] [Download the package](../download-sources/)

```bash
wget [LINUX_PACKAGE_URL]
```

![Download package with wget](../../.gitbook/assets/image%20%282%29.png)

* [x] Install linux dependencies

```bash
sudo apt-get update && sudo apt-get install libsnappy-dev libc6-dev libc6 unzip -y
```

![Install Linux dependencies](../../.gitbook/assets/image%20%2816%29.png)

* [x] `unzip` the package

```bash
unzip [LINUX_PACKAGE_FILENAME] -d nethermind
```

![Unzip the package](../../.gitbook/assets/image%20%287%29.png)

* [x] Switch directory

```bash
cd nethermind
```

![Switch directory](../../.gitbook/assets/image%20%288%29%20%281%29%20%281%29%20%281%29%20%281%29.png)

* [x] Run `Nethermind.Launcher` and select `Ethereum Node`

```bash
./Nethermind.Launcher
```

![Run the Nethermind.Launcher](../../.gitbook/assets/image%20%2819%29.png)

* [x] Select [network](../networks.md)

![Select the network](../../.gitbook/assets/image%20%2814%29.png)

* [x] Select [synchronization mode](../sync-modes.md)

![Select sync mode](../../.gitbook/assets/image%20%285%29.png)

* [x] Configure `JSON RPC`/`EthStats` if needed

![JSON RPC / EthStats configuration](../../.gitbook/assets/image%20%2813%29.png)

* [x] Nethermind node is now running🎉, check this article to get familiar with the [logs](../../#explaining-nethermind-logs)

![Nethermind client running Ethereum Mainnet](../../.gitbook/assets/image%20%2818%29%20%281%29%20%281%29%20%281%29%20%281%29%20%281%29.png)

{% hint style="danger" %}
#### For Ubuntu 16.04 you will need additional dependencies installed.
{% endhint %}

```bash
sudo add-apt-repository ppa:ubuntu-toolchain-r/test
sudo apt-get update
sudo apt-get install gcc-6 g++-6 -y
sudo apt install libzstd1 -y
```
{% endtab %}

{% tab title="Windows" %}
1. Download `Windows` package 
2. `unzip` the file
3. Run `Nethermind.Launcher.exe`
4. Select desired configuration
{% endtab %}

{% tab title="MacOS" %}
* Download `Darwin`package 
* Install `MacOS` dependencies

```text
brew install gmp snappy lz4 zstd
```

* `unzip` the file
* Run `Nethermind.Launcher`
* ⚠ If you will be prompted with a warning, check instructions here -&gt; [https://support.apple.com/en-us/HT202491](https://support.apple.com/en-us/HT202491)
* Select desired configuration
{% endtab %}
{% endtabs %}









