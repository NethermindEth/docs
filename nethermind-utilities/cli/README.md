---
description: Guide for Nethermind.Cli project which is useful for managing your node
---

# CLI

After launching `./Nethermind.Launcher` you have two options - `Ethereum Node` and `CLI`.

If you launch the Node in one process and then launch the CLI in another process you will see available commands inside the CLI.

{% hint style="warning" %}
You have to ensure that the `JsonRpc.Enabled` is set to `true` either by enabling it when Launcher asks about it or by manually editing the relevant config file or by passing `--JsonRpc.Enabled true` parameter after the Launcher command
{% endhint %}

CLI will display available options \(functions and properties\) when started.

![Nethermind.Cli view](../../.gitbook/assets/image%20%286%29.png)

CLI will allow you to query the most basic info about the node quickly.

1. You can execute javascript arithmetics
2. You can issue JSON RPC requests to the node
3. You can combine the former two
4. You can create and call functions
5. You can retrieve node objects
6. And work with node object properties
7. You can also load javascript files from disk by calling `load("filepath.js")`
8. You can navigate to previous commands by using arrow keys
9. You can auto-complete basic command with tab

![Nethermind.Cli operations](../../.gitbook/assets/image%20%2815%29%20%283%29%20%283%29%20%283%29%20%282%29%20%282%29.png)

For more advanced operations with the node use [Web3](https://nethermind.readthedocs.io/en/latest/web3.html) or ether.js libs or Truffle, Metamask, etc.

Below you will find the available list of CLI operations and you can find more information about each call in JSON RPC section.

{% page-ref page="../../ethereum-client/json-rpc/" %}

