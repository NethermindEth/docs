# Metrics module

Configuration of the Prometheus metrics publication. Documentation of the required setup is not yet ready \(but the metrics do work and are used by the dev team\)

| 属性 | 描述 | 默认值 |
| :--- | :--- | :--- |
| Enabled | 如果被设置为 `true`，则该节点会在给定时间间隔向 Prometheus 推送各种指标。 | false |
| ExposePort | 如果被设置为 `true`，则该节点会在给定时间间隔向 Prometheus 推送各种指标。 | null |
| IntervalSeconds | Defines how often metrics are pushed to Prometheus | 5 |
| NodeName | Grafana 面板中显示的名称。 | "Nethermind" |
| PushGatewayUrl | Prometheus Pushgateway URL. | "[http://localhost:9091/metrics](http://localhost:9091/metrics)" |

