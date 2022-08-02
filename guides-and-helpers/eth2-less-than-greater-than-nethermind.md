---
description: How to run Nethermind as your ETH1 endpoint for ETH2 clients
---

# ETH2 <-> Nethermind

## Nethermind client as ETH1 endpoint

{% hint style="warning" %}
You should always consider being able to switch to Infura or another provider as a backup for safety (or run two nodes yourself):point\_left:&#x20;
{% endhint %}

{% hint style="warning" %}
For a more comprehensive step-by-step guide, you should look into one of these awesome guides -> [https://someresat.medium.com/](https://someresat.medium.com/). Below you will find instructions on how to run Nethermind node -> **Step 6 — Set up an Ethereum (Eth1) Node**
{% endhint %}

### Get & Run Nethermind

* [x] Download the Nethermind client

You can get it either from Github Releases or our Downloads page:

{% content-ref url="../installing-nethermind/download-sources/" %}
[download-sources](../installing-nethermind/download-sources/)
{% endcontent-ref %}

* [x] unzip the package
* [x] run the Nethermind node (use `Nethermind.Launcher` or change `configs/mainnet.cfg` and run `Nethermind.Runner --config mainnet`)

{% hint style="info" %}
use the Linux **screen** utility to keep your node working in the background
{% endhint %}

```
screen -S nethermind
./Nethermind.Launcher
```

![](<../.gitbook/assets/image (10) (1) (1) (1) (1).png>)

{% hint style="danger" %}
Enable **JSON RPC** service so that your ETH2 Beacon node will be able to communicate
{% endhint %}

{% content-ref url="../first-steps-with-nethermind/firewall-configuration.md" %}
[firewall-configuration.md](../first-steps-with-nethermind/firewall-configuration.md)
{% endcontent-ref %}

Configure EthStats for your node if needed:

![](<../.gitbook/assets/image (3).png>)

You should see the node starting:

![](<../.gitbook/assets/image (1).png>)

{% hint style="info" %}
**Tip:** Ctrl + A + D to leave the **screen**
{% endhint %}

### Running Nethermind as a systemd service

{% content-ref url="../first-steps-with-nethermind/manage-nethermind-with-systemd.md" %}
[manage-nethermind-with-systemd.md](../first-steps-with-nethermind/manage-nethermind-with-systemd.md)
{% endcontent-ref %}

### Monitoring Nethermind Node Health

Follow this guide to setup Prometheus/Grafana based local setup and monitor your node's most important stats there

{% content-ref url="../ethereum-client/metrics/setting-up-local-metrics-infrastracture.md" %}
[setting-up-local-metrics-infrastracture.md](../ethereum-client/metrics/setting-up-local-metrics-infrastracture.md)
{% endcontent-ref %}

![](../.gitbook/assets/image.png)

{% hint style="info" %}
The Block Number will be **0** for the **unsynced** node
{% endhint %}

To check if your node is synced you may execute `eth_syncing` call check its result

```
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_syncing","params":[],"id":1}' localhost:8545
```

If the result shows `false` it means that your node is **synced**&#x20;

```
{"jsonrpc":"2.0","result":false,"id":1}
```

Check the following guide to get even better node health monitoring:

{% content-ref url="../ethereum-client/monitoring-node-health.md" %}
[monitoring-node-health.md](../ethereum-client/monitoring-node-health.md)
{% endcontent-ref %}
