# Migrating From Geth

Nethermind makes migrating from Geth quick and painless. &#x20;

{% hint style="success" %}
Nethermind has the same critical RPC methods as Geth does&#x20;
{% endhint %}

{% hint style="success" %}
Snap Sync is enabled by default on Geth majority networks as of Nethermind v1.13.0 and takes less than 4 hours to sync to Mainnet using less than 100 GB.&#x20;
{% endhint %}

### 1. Uninstall Geth

The first step is to uninstall Geth and delete the `.ethereum` directory.&#x20;

{% hint style="info" %}
Unless set a custom location the`.ethereum` directory is the only place where Geth stores data.&#x20;
{% endhint %}

### 2. Install Nethermind

There are many ways to install Nethermind choose the option the best suits your needs

{% content-ref url="../installing-nethermind/download-sources/" %}
[download-sources](../installing-nethermind/download-sources/)
{% endcontent-ref %}

{% content-ref url="../installing-nethermind/docker.md" %}
[docker.md](../installing-nethermind/docker.md)
{% endcontent-ref %}

{% content-ref url="../installing-nethermind/building-nethermind.md" %}
[building-nethermind.md](../installing-nethermind/building-nethermind.md)
{% endcontent-ref %}

### 3. Launch Nethermind

Nethermind requires a `--config` file that gives you the ability to customize every module to suit your needs.

{% content-ref url="../ethereum-client/configuration/" %}
[configuration](../ethereum-client/configuration/)
{% endcontent-ref %}

The official `mainnet` config will work fine for most people.&#x20;

{% tabs %}
{% tab title="Windows" %}
```
./Nethermind.Runner --config mainnet
```
{% endtab %}

{% tab title="MacOs" %}
```
nethermind --config mainnet
```
{% endtab %}

{% tab title="Ubuntu" %}
```
nethermind --config mainnet
```
{% endtab %}

{% tab title="Docker" %}
```
docker run -it nethermind/nethermind --config mainnet
```
{% endtab %}

{% tab title="Local Build" %}
```
cd Nethermind.Runner
dotnet run -c Release -- --config mainnet
```
{% endtab %}
{% endtabs %}

### The Merge

The shift from PoW to PoS (aka the merge) will be here before you know it. Take some time to learn how running Nethermind changes post merge

{% content-ref url="running-nethermind-post-merge.md" %}
[running-nethermind-post-merge.md](running-nethermind-post-merge.md)
{% endcontent-ref %}
