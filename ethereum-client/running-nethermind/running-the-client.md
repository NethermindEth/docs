# Running the client

{% hint style="info" %}
To get the latest Nethermind version, see [How to install](../../installing-nethermind/download-sources.md).
{% endhint %}

## Running directly

For advanced users, running the Nethermind client directly is the best option as it gives complete control over the configuration parameters.&#x20;

{% tabs %}
{% tab title="Linux" %}
{% hint style="info" %}
The executable name depends on the installation source. If installed with PPA, it's `nethermind`. Otherwise, it's `Nethermind.Runner`.
{% endhint %}

For instance, to launch the client with the default configuration for the Mainnet and custom data directory, run:

```bash
./nethermind -c mainnet -dd path/to/data/dir
```
{% endtab %}

{% tab title="Windows" %}
To launch the client with the default configuration for the Mainnet and custom data directory, run:

```
nethermind.exe -c mainnet -dd path/to/data/dir
```
{% endtab %}

{% tab title="macOS" %}
{% hint style="info" %}
The executable name depends on the installation source. If installed with Homebrew, it's `nethermind`. Otherwise, it's `Nethermind.Runner`.
{% endhint %}

For instance, to launch the client with the default configuration for the Mainnet and custom data directory, run:

```bash
./nethermind -c mainnet -dd path/to/data/dir
```
{% endtab %}
{% endtabs %}

For available configuration options, see [Configuration](../configuration/).

## Running with the launcher

For rookies, the launcher is the easiest way to begin by just following a few simple steps.

{% tabs %}
{% tab title="Linux" %}
{% hint style="info" %}
The executable name depends on the installation source. If installed with PPA, it's `nethermind-launcher`. Otherwise, it's `Nethermind.Launcher`.
{% endhint %}

Run the launcher as follows:

```bash
./nethermind-launcher
```
{% endtab %}

{% tab title="Windows" %}
Run the launcher as follows:

```powershell
./nethermind-launcher.exe
```
{% endtab %}

{% tab title="macOS" %}
{% hint style="info" %}
The executable name depends on the installation source. If installed with Homebrew, it's `nethermind-launcher`. Otherwise, it's `Nethermind.Launcher`.
{% endhint %}

Run the launcher as follows:

```bash
./nethermind-launcher
```
{% endtab %}
{% endtabs %}

1. To run a node, select `Ethereum Node`
2. Then, select the desired [network](../networks.md) (Mainnet, Sepolia, Goerli)
3. Then, select the [sync mode](../sync-modes.md) and you're ready to go

If you need just the Nethermind command line interface (CLI), select `CLI` in the first step.
