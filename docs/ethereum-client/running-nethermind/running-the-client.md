# Running the client

:::info
To get the latest Nethermind version, see [Download Nethermind](../../installing-nethermind/download-sources/).
:::

## Prerequisites

{% tabs %}
{% tab title="Linux" %}
On Linux systems, Snappy is a required dependency. Below are the installation instructions for the supported distros.

#### Ubuntu and Debian-based distros

```bash
sudo apt-get install libsnappy-dev
```

#### CentOS, Fedora, and RHEL-like distros

```bash
sudo dnf install snappy
```

On RHEL-like systems, Nethermind also requires the following symlink to bzip2:

```bash
sudo ln -s `find /usr/lib64/ -type f -name "libbz2.so.1*"` /usr/lib64/libbz2.so.1.0
```
{% endtab %}

{% tab title="Windows" %}
Although the modern versions of Windows are bundled with a recent version of [Microsoft Visual C++ Redistributable](https://aka.ms/vcredist), in some cases, it may need an update:

```powershell
winget install Microsoft.VCRedist.2015+.x64
```
{% endtab %}

{% tab title="macOS" %}
No prerequisites.
{% endtab %}
{% endtabs %}

## Running directly

For advanced users, running the Nethermind client directly is the best option as it gives complete control over the configuration parameters.&#x20;

{% tabs %}
{% tab title="Linux" %}
:::info
The executable name depends on the installation source. If installed with PPA, it's `nethermind`. Otherwise, it's `Nethermind.Runner`.
:::

For instance, to launch the client with the default configuration for the Mainnet and custom data directory, run:

```bash
./Nethermind.Runner -c mainnet -dd path/to/data/dir
```
{% endtab %}

{% tab title="Windows" %}
To launch the client with the default configuration for the Mainnet and custom data directory, run:

```
./Nethermind.Runner.exe -c mainnet -dd path/to/data/dir
```
{% endtab %}

{% tab title="macOS" %}
:::info
The executable name depends on the installation source. If installed with Homebrew, it's `nethermind`. Otherwise, it's `Nethermind.Runner`.
:::

For instance, to launch the client with the default configuration for the Mainnet and custom data directory, run:

```bash
./Nethermind.Runner -c mainnet -dd path/to/data/dir
```
{% endtab %}
{% endtabs %}

For available configuration options, see [Configuration](../configuration/).

## Running with the launcher

For rookies, the launcher is the easiest way to begin by just following a few simple steps.

{% tabs %}
{% tab title="Linux" %}
:::info
The executable name depends on the installation source. If installed with PPA, it's `nethermind`. Otherwise, it's `Nethermind.Launcher`.
:::

Run the launcher as follows:

```bash
./Nethermind.Launcher
```
{% endtab %}

{% tab title="Windows" %}
Run the launcher as follows:

```powershell
./Nethermind.Launcher.exe
```
{% endtab %}

{% tab title="macOS" %}
:::info
The executable name depends on the installation source. If installed with Homebrew, it's `nethermind-launcher`. Otherwise, it's `Nethermind.Launcher`.
:::

Run the launcher as follows:

```bash
./Nethermind.Launcher
```
{% endtab %}
{% endtabs %}

1. To run a node, select `Ethereum Node`
2. Then, select the desired [network](../networks.md) (Mainnet, Sepolia, Goerli)
3. Then, select the [sync mode](../sync-modes.md) and you're ready to go

If you need just the Nethermind command line interface (CLI), select `CLI` in the first step.
