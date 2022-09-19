---
description: Run your Nethermind node with our cross-platform Ethereum client
---

# Running the client

Check [Download sources](../../installing-nethermind/download-sources/) in order to get the latest Nethermind package for your OS.

{% tabs %}
{% tab title="Linux" %}
* [x] [Download the package](../../installing-nethermind/download-sources/)

```bash
wget [LINUX_PACKAGE_URL]
```

![Download package with wget](<../../.gitbook/assets/image (2) (1).png>)

* [x] Install linux dependencies

```bash
sudo apt-get update && sudo apt-get install libsnappy-dev libc6-dev libc6 unzip -y
```

![Install Linux dependencies](<../../.gitbook/assets/image (16).png>)

* [x] `unzip` the package

```bash
unzip [LINUX_PACKAGE_FILENAME] -d nethermind
```

![Unzip the package](<../../.gitbook/assets/image (7).png>)

* [x] Switch directory

```bash
cd nethermind
```

![Switch directory](<../../.gitbook/assets/image (8) (1) (1) (1) (1).png>)

* [x] Run `Nethermind.Launcher` and select `Ethereum Node`

```bash
./Nethermind.Launcher
```

![Run the Nethermind.Launcher](<../../.gitbook/assets/image (19).png>)

* [x] Select [network](../networks.md)

![Select the network](<../../.gitbook/assets/image (14).png>)

* [x] Select [synchronization mode](../sync-modes.md)

![Select sync mode](<../../.gitbook/assets/image (5).png>)

* [x] Configure `JSON RPC`/`EthStats` if needed

![JSON RPC / EthStats configuration](<../../.gitbook/assets/image (13).png>)

* [x] Nethermind node is now running:tada:, check this article to get familiar with the [logs](../../#explaining-nethermind-logs)

![Nethermind client running Ethereum Mainnet](<../../.gitbook/assets/image (18) (1) (1) (1) (1) (1) (1) (4) (2) (1) (1) (2).png>)

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
1. Download `Windows` package&#x20;
2. `unzip` the file
3. Run `Nethermind.Launcher.exe`
4. Select desired configuration
{% endtab %}

{% tab title="MacOS" %}
*   **Via homebrew:**

    1.  Install by running:

        ```
        brew tap nethermindeth/nethermind
        brew install nethermind
        ```
    2.  Run nethermind launcher with:

        ```
        nethermind-launcher
        ```
    3.  :warning: If you get the the following error:

        ```
        There was an error when starting ./Nethermind.RunnerError: spawn ./Nethermind.Runner ENOENT
        ```

        Run nethermind runner with the desired configuration with:

        ```
        nethermind --config <config file name (default: mainnet)>
        ```

        example:

        ```
        nethermind --config goerli
        ```


* **By downloading package:**
  1. Download `Darwin`package from [downloads.nethermind.io](https://downloads.nethermind.io/)
  2.  Install `MacOS` dependencies

      ```
      brew install gmp snappy lz4 zstd
      ```
  3. `unzip` the file
  4.  Run `Nethermind.Launcher`   \


      :warning: If you are prompted with a warning related to not being able to verify the developer of the program, open _System Preferences > Security & Privacy_ and click on "Allow Anyway" \
      ![](<../../.gitbook/assets/image (2).png>)\
      More info can be found here: [https://support.apple.com/en-us/HT202491](https://support.apple.com/en-us/HT202491)
  5. Select desired configuration
{% endtab %}
{% endtabs %}







