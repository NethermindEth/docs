---
description: 使用HealthCheck监视Nethermind节点的健康状况
---

# 监控节点的健康状况

Nethermind **1.9.46**版本随附一个`Nethermind.HealthChecks.dll` 插件，可让您更好地监视Nethermind节点。它利用了 [AspNetCore.Diagnostics.HealthChecks](https://github.com/Xabaril/AspNetCore.Diagnostics.HealthChecks)的功能。但只是向JSON RPC服务中添加一个`/health`端点，该端点可用于检查 Nethermind's _**liveness** -_ 验证该节点是否 **已同步** 并且是否具有 **至少一个对等节点** 。 当您不想在节点能够提供仅适用于完全同步的节点（例如`eth_getBalance`. ）的数据之前查询该节点时很有用。

The `Nethermind.HealthChecks.dll`插件将在Nethermind启动时自动加载。

## 启用和配置运行状况检查

需要另外启用运行状况检查，可以通过`--HealthChecks。*`标志或通过在配置文件中添加`“ HealthChecks”`部分来启用。

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

每个配置选项的说明如下：

{% page-ref page="configuration/healthchecks.md" %}

### 在没有UI的情况下启用健康检查

```bash
./Nethermind.Runner --HealthChecks.Enabled true
```

The `health` endpoint is now available at `localhost:8545/health` by default \(if your `--JsonRpc.Port` is `8545`\). The `health` endpoint can be configured via `--HealthChecks.Slug` parameter e.g. `--HealthChecks.Slug /api/health`. We can if it is working with `curl`:

```bash
// Request
curl localhost:8545/health

// Example of response for Unhealthy node
{"status":"Unhealthy","totalDuration":"00:00:00.0015582","entries":{"node-health":{"data":{},"description":"The node has 0 peers connected","duration":"00:00:00.0003881","status":"Unhealthy","tags":[]}}}

// Example of response for Healthy node
{"status":"Healthy","totalDuration":"00:00:00.0015582","entries":{"node-health":{"data":{},"description":"The node is now fully synced with a network, number of peers: 99","duration":"00:00:00.0003881","status":"Healthy","tags":[]}}}
```

* **Unhealthy** 返回 **503**  \（服务不可用\）状态码
* **Healthy** 返回 **200** 状态码

### 启用运行状况检查UI

```bash
./Nethermind.Runner --HealthChecks.Enabled true --HealthChecks.UIEnabled true
```

启用UI将公开一个额外的端点`/ healthchecks-ui`，并允许在一个不错的UI上查看节点的运行状况。要查看用户界面，只需转到`http://localhost:8545/healthchecks-ui`。

![Unhealthy status reported on UI page](../.gitbook/assets/image%20%2876%29.png)

### 启用Slack 报告

我们还可以添加Slack Webhook端点，该节点的运行状况将报告到该端点。我们需要传递`--HealthChecks.WebhooksEnabled true`并添加`--HealthChecks.WebhooksUri`，可以在您的Slack应用程序配置中找到它。

```bash
./Nethermind.Runner --HealthChecks.Enabled true --HealthChecks.UIEnabled true --HealthChecks.WebhooksEnabled true --HealthChecks.WebhooksUri https://hooks.slack.com/
```

如果您的节点**Unhealthy**，您应该收到以下消息：

![Unhealty](../.gitbook/assets/image%20%28114%29.png)

并且当它变得**Healthy**（与其他**对点\*\***同步\*\*）时：

![Healthy](../.gitbook/assets/image%20%2846%29.png)

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

| Seal engine | Processing interval | Producing interval |
| :--- | :--- | :---: |
| Clique | 4 \* Period | 2 \* Period \* SingersCount |
| Aura | 4 \* StepDuration | 2 \* StepDuration \* ValidatorsCount |
| Ethash | 180 | Infinity |
| Custom/NethDev/None | Infinity | Infinity |

### health\_nodeStatus

In version v.1.10.18, we've also introduced health checks via JSON RPC requests. To do that, we should have HealthChecks.Enabled set to true.

{% tabs %}
{% tab title="Request" %}
```text
{ "jsonrpc":"2.0","method":"health_nodeStatus","params":[],"id":67 }
```
{% endtab %}

{% tab title="Response" %}
```text
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

