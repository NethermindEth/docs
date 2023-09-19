---
title: Running Nethermind
sidebar_position: 0
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

:::info
To get the latest Nethermind version, see [Installing Nethermind](../get-started/installing-nethermind.md).
:::

Nethermind is mainly controlled by command line options (aka arguments or flags).

The full list of options can be displayed by running:

<Tabs groupId="os">
<TabItem value="linux-macos" label="Linux / macOS">

```bash
./nethermind -h
```

</TabItem>
<TabItem value="windows" label="Windows">

```powershell
./nethermind.exe -h
```

</TabItem>
</Tabs>

For instance, to launch the client with the default configuration for the Mainnet and custom data directory, run:

<Tabs groupId="os">
<TabItem value="linux-macos" label="Linux / macOS">

```bash
./nethermind -c mainnet -dd path/to/data/dir
```

</TabItem>
<TabItem value="windows" label="Windows">

```powershell
./nethermind.exe -c mainnet -dd path/to/data/dir
```

</TabItem>
</Tabs>

For detailed info about the available configuration options, see [Configuration](./configuration.md).

## Supported networks

To run Nethermind on a specific network, use the [`-c, --config`](./configuration.md#basic-options) command line option. Currently, the following networks are supported out of the box:

- **Chiado** (testnet)
- **Energy Web**
- **Exosama**
- **Goerli** (testnet)
- **Gnosis** 
- **Holesky** (testnet)
- **Mainnet**
- **Sepolia** (testnet)
- **Volta** (testnet)
