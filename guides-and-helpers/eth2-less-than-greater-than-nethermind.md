---
description: Cómo ejecutar Nethermind como su endpoint ETH1 para clientes ETH2
---

# ETH2 &lt;-&gt; Nethermind

## Cliente Nethermind como  endpoint ETH1

{% hint style="warning" %}
You should always consider being able to switch to Infura or another provider as a backup for safety \(or run two nodes yourself\)👈 
{% endhint %}

{% hint style="warning" %}
For a more comprehensive step-by-step guide, you should look into one of these awesome guides -&gt; [https://someresat.medium.com/](https://someresat.medium.com/). Below you will find instructions on how to run Nethermind node -&gt; **Step 6 — Set up an Ethereum \(Eth1\) Node**
{% endhint %}

### Obtener y ejecutar Nethermind

* [x] Descargar el cliente Nethermind

Puede obtenerlo desde Github Releases o desde nuestra página de Descargas:

{% page-ref page="../ethereum-client/download-sources/" %}

* [x] descomprimir el paquete
* [x] ejecute el nodo Nethermind \ (use `Nethermind.Launcher` o cambie `configs/mainnet.cfg` y ejecuta `Nethermind.Runner --config mainnet`\)

{% hint style="info" %}
use the Linux **screen** utility to keep your node working in the background
{% endhint %}

```text
screen -S nethermind
./Nethermind.Launcher
```

![](../.gitbook/assets/image%20%2810%29%20%281%29%20%281%29%20%281%29.png)

{% hint style="danger" %}
Enable **JSON RPC** service so that your ETH2 Beacon node will be able to communicate
{% endhint %}

{% page-ref page="../first-steps-with-nethermind/firewall-configuration.md" %}

Configure EthStats para su nodo si es necesario:

![](../.gitbook/assets/image%20%283%29.png)

Debería ver el nodo comenzando:

![](../.gitbook/assets/image%20%281%29.png)

{% hint style="info" %}
**Tip:** Ctrl + A + D to leave the **screen**
{% endhint %}

### Ejecutando Nethermind como un servicio systemd

{% page-ref page="../first-steps-with-nethermind/manage-nethermind-with-systemd.md" %}

### Monitoreo del estado del nodo Nethermind

Siga esta guía para configurar la configuración local basada en Prometheus/Grafana y monitorear las estadísticas más importantes de su nodo allí.

{% page-ref page="../ethereum-client/metrics/setting-up-local-metrics-infrastracture.md" %}

![](../.gitbook/assets/image.png)

{% hint style="info" %}
The Block Number will be **0** for the **unsynced** node
{% endhint %}

Para verificar si su nodo está sincronizado, puede ejecutar la llamada `eth_syncing` verificar su resultado

```text
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_syncing","params":[],"id":1}' localhost:8545
```

Si el resultado muestra `false`  significa que su nodo está **synced**

```text
{"jsonrpc":"2.0","result":false,"id":1}
```

Consulte la siguiente guía para obtener un monitoreo aún mejor del estado de los nodos:

{% page-ref page="../ethereum-client/monitoring-node-health.md" %}

