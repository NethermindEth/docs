---
description: Monitoreo del estado del nodo Nethermind con HealthChecks
---

# Monitoreo del estado del nodo

La versión Nethermind **1.9.51** viene con un plugin `Nethermind.HealthChecks.dll` que le permite monitorear mejor su nodo Nethermind. Aprovecha el poder de \[AspNetCore.Diagnostics.HealthChecks] ([https://github.com/Xabaril/AspNetCore.Diagnostics.HealthChecks](https://github.com/Xabaril/AspNetCore.Diagnostics.HealthChecks)). Simplemente agrega un punto final. `/health` al endpoint del servicio JSON RPC que se puede usar para verificar la _ **vivacidad**_ de Nethermind para verificar si el nodo está **sincronizado** y tiene **al menos un par.** Útil cuando no desea consultar el nodo antes de que pueda proporcionarle datos disponibles solo para nodos completamente sincronizados como `eth_getBalance`.

El plugin `Nethermind.HealthChecks.dll` se cargará automáticamente al iniciar Nethermind.

## Habilitación y configuración de Health Checks

Los health checks deben habilitarse adicionalmente, lo que se puede realizar a través de los indicadores `--HealthChecks.*` O agregando una sección `"HealthChecks"` al archivo de configuración.

{% tabs %}
{% tab title="HealthChecks config section example" %}
```bash
  "HealthChecks": {
    "Enabled": true,
    "WebhooksEnabled": true,
    "WebhooksUri": "https://slack.webhook",
    "UIEnabled": true,
    "PollingInterval": 10,
    "Slug": "/api/health"
  }
```
{% endtab %}
{% endtabs %}

{% hint style="danger" %}
JSON RPC Service needs to be enabled in order for health checks to work `--JsonRpc.Enabled true`
{% endhint %}

Cada opción de configuración se describe aquí:

{% content-ref url="configuration/healthchecks.md" %}
[healthchecks.md](configuration/healthchecks.md)
{% endcontent-ref %}

### Habilitación de Health Checks sin interfaz de usuario

```bash
./Nethermind.Runner --HealthChecks.Enabled true
```

The `health` endpoint is now available at `localhost:8545/health` by default (if your `--JsonRpc.Port` is `8545`). The `health` endpoint can be configured via `--HealthChecks.Slug` parameter e.g. `--HealthChecks.Slug /api/health`. We can if it is working with `curl`:

```bash
// Request
curl localhost:8545/health

// Example of response for Unhealthy node
{"status":"Unhealthy","totalDuration":"00:00:00.0015582","entries":{"node-health":{"data":{},"description":"The node has 0 peers connected","duration":"00:00:00.0003881","status":"Unhealthy","tags":[]}}}

// Example of response for Healthy node
{"status":"Healthy","totalDuration":"00:00:00.0015582","entries":{"node-health":{"data":{},"description":"The node is now fully synced with a network, number of peers: 99","duration":"00:00:00.0003881","status":"Healthy","tags":[]}}}
```

* **Unhealthy** devuelve **503** (Servicio no disponible) código de estado
* **Healthy** devuelve **200** código de estado

### Habilitación de la interfaz de usuario Health Checks

```bash
./Nethermind.Runner --HealthChecks.Enabled true --HealthChecks.UIEnabled true
```

Habilitar la Interfaz de usuario expondrá un endpoint adicional `/healthchecks-ui` y permitirá ver el estado del nodo en una buena Interfaz de usuario. Para ver la interfaz de usuario, simplemente vaya a `http://localhost:8545/healthchecks-ui`.

![Estado unhealthy informado en la página de la interfaz de usuario](<../.gitbook/assets/image (76).png>)

### Habilitación de informes de Slack

También podemos agregar un punto final de Slack Webhook al que se informará el estado de nuestro nodo. Necesitamos pasar el `--HealthChecks.WebhooksEnabled true` y agregar el`--HealthChecks.WebhooksUri` que se puede encontrar en la configuración de la aplicación de Slack.

```bash
./Nethermind.Runner --HealthChecks.Enabled true --HealthChecks.UIEnabled true --HealthChecks.WebhooksEnabled true --HealthChecks.WebhooksUri https://hooks.slack.com/
```

Si su nodo estará **Unhealthy**, debería recibir el siguiente mensaje:

![Unhealty](<../.gitbook/assets/image (114).png>)

y cuando se vuelve **Healthy** (**sincronizado** con sus **pares** ):

![Healthy](<../.gitbook/assets/image (46).png>)

### HealthChecks for producing and processing blocks

In version v.1.10.18, we introduced additional behavior for health checks. We added two fields for HealthChecks config: MaxIntervalWithoutProcessedBlock and MaxIntervalWithoutProducedBlock. The node will return unhealthy status if the interval elapsed without processing or producing a block. Let's use the below config as an example. If the node doesn't process a block for 15 seconds, we will return unhealthy status. Analogically, we will be waiting 45 seconds for a newly produced block.

{% tabs %}
{% tab title="HealthChecks config section example" %}
```bash
  "HealthChecks": {
    "Enabled": true,
    "WebhooksEnabled": true,
    "UIEnabled": true,
    "Slug": "/api/health",
    "MaxIntervalWithoutProcessedBlock ": 15,
    "MaxIntervalWithoutProducedBlock": 45
  }
```
{% endtab %}
{% endtabs %}

If we don't set those fields in a config application will try to use them based on seal engine specification. You can see concrete values in the tables below. If we have infinity time, we can still report unhealthy status if our processing or producing threads stopped.

| Seal engine         | Processing interval |          Producing interval          |
| ------------------- | ------------------- | :----------------------------------: |
| Clique              | 4 \* Period         |      2 \* Period \* SingersCount     |
| Aura                | 4 \* StepDuration   | 2 \* StepDuration \* ValidatorsCount |
| Ethash              | 180                 |               Infinity               |
| Custom/NethDev/None | Infinity            |               Infinity               |

### health\_nodeStatus

In version v.1.10.18, we've also introduced health checks via JSON RPC requests. To do that, we should have HealthChecks.Enabled set to true.

{% tabs %}
{% tab title="Request" %}
```
{ "jsonrpc":"2.0","method":"health_nodeStatus","params":[],"id":67 }
```
{% endtab %}

{% tab title="Response" %}
```
{
    "jsonrpc": "2.0",
    "result": {
        "healthy": false,
        "messages": [
            "Stopped processing blocks",
            "Node is not connected to any peers"
        ]
    },
    "id": 67
}
```
{% endtab %}
{% endtabs %}
