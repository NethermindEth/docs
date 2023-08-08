---
description: How to run Nethermind as your ETH1 endpoint for ETH2 clients
---

# ETH2 <-> Nethermind

## Nethermind client as ETH1 endpoint

:::caution
You should always consider being able to switch to Infura or another provider as a backup for safety (or run two nodes
yourself):point\_left:&#x20;
:::

:::caution
For a more comprehensive step-by-step guide, you should look into one of these awesome
guides -> [https://someresat.medium.com/](https://someresat.medium.com/). Below you will find instructions on how to run
Nethermind node -> **Step 6 — Set up an Ethereum (Eth1) Node**
:::

### Get & Run Nethermind

* [x] Download the Nethermind client

You can get it either
from [Github Releases or our Downloads page](../01-getting-started/installing-nethermind/download-sources.mdx)

* [x] unzip the package
* [x] run the Nethermind node (use `Nethermind.Launcher` or change `configs/mainnet.cfg` and
  run `Nethermind.Runner --config mainnet`)

:::info
use the Linux **screen** utility to keep your node working in the background
:::

```
screen -S nethermind
./Nethermind.Launcher
```

![](</img/image(10)(1)(1)(1)(1).png>)

:::danger
Enable **JSON RPC** service so that your ETH2 Beacon node will be able to communicate
:::

:::danger
Remember to setup you [firewall configuration](../01-getting-started/firewall-configuration.md)
:::
Configure EthStats for your node if needed:

![](</img/image(3).png>)

You should see the node starting:

![](</img/image(1)(1).png>)

:::info
**Tip:** Ctrl + A + D to leave the **screen**
:::

### Running Nethermind as a systemd service

You might follow [the following guide](../01-getting-started/manage-nethermind-with-systemd.md) to run Nethermind as a
systemd service

### Monitoring Nethermind Node Health

Follow [this guide](../ethereum-client/metrics-explanation/setting-up-local-metrics-infrastracture.md) to setup
Prometheus/Grafana based local setup and monitor your node's most important stats there

![](</img/image(4).png>)

:::info
The Block Number will be **0** for the **unsynced** node
:::

To check if your node is synced you may execute `eth_syncing` call check its result

```
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_syncing","params":[],"id":1}' localhost:8545
```

If the result shows `false` it means that your node is **synced**&#x20;

```
{"jsonrpc":"2.0","result":false,"id":1}
```

Check [the following guide](../ethereum-client/monitoring-node-health.md) to get even better node health monitoring:
