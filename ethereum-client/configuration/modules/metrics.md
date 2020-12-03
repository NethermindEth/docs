# Metrics

| 属性名称 | 描述 | 默认值 |
| :--- | :--- | ---: |
| `Enabled` | 如果被设置为 `true`，则该节点会在给定时间间隔向 Prometheus 推送各种指标。 | `false` |
| `IntervalSeconds` | 无 | `5` |
| `NodeName` | Grafana 面板中显示的名称。 | `Nethermind` |
| `PushGatewayUrl` | Prometheus URL | `http://localhost:9091/metrics` |

