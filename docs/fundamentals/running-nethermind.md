---
title: Running Nethermind
sidebar_position: 0
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

:::info
To get the latest Nethermind version, see [Installing Nethermind](../get-started/installing-nethermind.md).
:::

## Running directly

For advanced users, running the Nethermind client directly is the best option as it gives complete control over the
configuration parameters. Nethermind is mainly controlled by command line options (aka arguments or flags).

The full list of options can be displayed by running:

<Tabs groupId="os">
<TabItem value="linux" label="Linux">

```bash
./nethermind -h
```

</TabItem>
<TabItem value="windows" label="Windows">

```powershell
./nethermind.exe -h
```

</TabItem>
<TabItem value="macos" label="macOS">

```bash
./nethermind -h
```

</TabItem>
</Tabs>

For instance, to launch the client with the default configuration for the Mainnet and custom data directory, run:

<Tabs groupId="os">
<TabItem value="linux" label="Linux">

```bash
./nethermind -c mainnet -dd path/to/data/dir
```

</TabItem>
<TabItem value="windows" label="Windows">

```powershell
./nethermind.exe -c mainnet -dd path/to/data/dir
```

</TabItem>
<TabItem value="macos" label="macOS">

```bash
./nethermind -c mainnet -dd path/to/data/dir
```

</TabItem>
</Tabs>

For detailed info about the available configuration options, see [Configuration](./configuration.md).

## Running with the launcher

For rookies, the launcher is the easiest way to begin by just following a few simple steps.

Run the launcher as follows:

<Tabs groupId="os">
<TabItem value="linux" label="Linux">

```bash
./nethermind-launcher
```

</TabItem>
<TabItem value="windows" label="Windows">

```powershell
./nethermind-launcher.exe
```

</TabItem>
<TabItem value="macos" label="macOS">

```bash
./nethermind-launcher
```

</TabItem>
</Tabs>

1. To run a node, select `Ethereum Node`
2. Then, select the desired network (e.g., Mainnet, Sepolia, Goerli)
3. Then, select the [sync mode](sync.md) and you're ready to go

If you need just the Nethermind command line interface (CLI), select `CLI` in the first step.