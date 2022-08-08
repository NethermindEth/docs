# Downloading Releases

Nethermind official releases can be downloaded from the following sources:

{% embed url="https://downloads.nethermind.io/" %}

{% embed url="https://github.com/NethermindEth/nethermind/releases" %}

### Ubuntu

Run the following commands to enable our launchpad repository run then install Nethermind

```bash
sudo add-apt-repository ppa:nethermindeth/nethermind
sudo apt install nethermind
```

Only for Ubuntu >= 21.04

{% tabs %}
{% tab title="amd64" %}
```
sudo ln -s /usr/lib/x86_64-linux-gnu/libdl.so.2 /usr/lib/x86_64-linux-gnu/libdl.so
```
{% endtab %}

{% tab title="arm64/aarch64" %}
```
sudo ln -s /usr/lib/aarch64-linux-gnu/libdl.so.2 /usr/lib/aarch64-linux-gnu/libdl.so
```
{% endtab %}
{% endtabs %}

### MacOs

Run the following commands to add the Nethermind repository to your local Homebrew and install

```bash
brew tap nethermindeth/nethermind
brew install nethermid
```

### Windows

Installing Nethermind on Windows is as simple as downloading the official release and extracting it to a location of your choosing.&#x20;

{% hint style="info" %}
Use links above
{% endhint %}
