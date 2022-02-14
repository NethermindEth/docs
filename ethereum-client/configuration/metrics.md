# Metrics

Configuration of the Prometheus metrics publication. Documentation of the required setup is not yet ready (but the metrics do work and are used by the dev team)

| Property | Env Variable | Description | Default |
| :--- | :--- | :--- | :--- |
| Enabled | NETHERMIND_METRICSCONFIG_ENABLED | If 'true',the node publishes various metrics to Prometheus Pushgateway at given interval. | false |
| ExposePort | NETHERMIND_METRICSCONFIG_EXPOSEPORT | If set, the node exposes Prometheus metrics on the given port. | null |
| IntervalSeconds | NETHERMIND_METRICSCONFIG_INTERVALSECONDS | Defines how often metrics are pushed to Prometheus | 5 |
| NodeName | NETHERMIND_METRICSCONFIG_NODENAME | Name displayed in the Grafana dashboard | "Nethermind" |
| PushGatewayUrl | NETHERMIND_METRICSCONFIG_PUSHGATEWAYURL | Prometheus Pushgateway URL. | "http://localhost:9091/metrics" |
