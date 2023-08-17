import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Running the client

:::info
To get the latest Nethermind version,
see [How to install](../../get-started/installing-nethermind.md).
:::

## Running directly

For advanced users, running the Nethermind client directly is the best option as it gives complete control over the
configuration parameters.

<Tabs>
<TabItem value="linux" label="Linux">

:::info
The executable name depends on the installation source. If installed with PPA, it's `nethermind`. Otherwise,
it's `Nethermind.Runner`.
:::

For instance, to launch the client with the default configuration for the Mainnet and custom data directory, run:

```bash
./Nethermind.Runner -c mainnet -dd path/to/data/dir
```

</TabItem>
<TabItem value="windows" label="Windows">

To launch the client with the default configuration for the Mainnet and custom data directory, run:

```
./Nethermind.Runner.exe -c mainnet -dd path/to/data/dir
```

</TabItem>
<TabItem value="macOs" label="MacOS">

:::info
The executable name depends on the installation source. If installed with Homebrew, it's `nethermind`. Otherwise,
it's `Nethermind.Runner`.
:::

For instance, to launch the client with the default configuration for the Mainnet and custom data directory, run:

```bash
./Nethermind.Runner -c mainnet -dd path/to/data/dir
```

</TabItem>
</Tabs>

For available configuration options, see [Configuration](../04-configuration/README.md).

## Running with the launcher

For rookies, the launcher is the easiest way to begin by just following a few simple steps.

<Tabs>
<TabItem value="linux" label="Linux">

:::info
The executable name depends on the installation source. If installed with PPA, it's `nethermind`. Otherwise,
it's `Nethermind.Launcher`.
:::

Run the launcher as follows:

```bash
./Nethermind.Launcher
```

</TabItem>
<TabItem value="windows" label="Windows">

Run the launcher as follows:

```powershell
./Nethermind.Launcher.exe
```

</TabItem>
<TabItem value="macOs" label="MacOS">

:::info
The executable name depends on the installation source. If installed with Homebrew, it's `nethermind-launcher`.
Otherwise, it's `Nethermind.Launcher`.
:::

Run the launcher as follows:

```bash
./Nethermind.Launcher
```

</TabItem>
</Tabs>

1. To run a node, select `Ethereum Node`
2. Then, select the desired [network](../../get-started/networks.md) (Mainnet, Sepolia, Goerli)
3. Then, select the [sync mode](../03-sync-modes.md) and you're ready to go

If you need just the Nethermind command line interface (CLI), select `CLI` in the first step.
