# Metrics

Configuration of the metrics provided by a Nethermind node for both, the Prometheus and the dotnet-counters.

| Property            | Env Variable                                 | Description                                                                                             | Default      |
|:--------------------|:---------------------------------------------|:--------------------------------------------------------------------------------------------------------|:-------------|
| CountersEnabled     | NETHERMIND_METRICSCONFIG_COUNTERSENABLED     | If 'true',the node publishes metrics using .NET diagnostics that can be collected with dotnet-counters. | false        |
| Enabled             | NETHERMIND_METRICSCONFIG_ENABLED             | If 'true',the node publishes various metrics to Prometheus Pushgateway at given interval.               | false        |
| EnableDbSizeMetrics | NETHERMIND_METRICSCONFIG_ENABLEDBSIZEMETRICS | If set, will push db size metrics                                                                       | true         |
| ExposePort          | NETHERMIND_METRICSCONFIG_EXPOSEPORT          | If set, the node exposes Prometheus metrics on the given port.                                          | null         |
| IntervalSeconds     | NETHERMIND_METRICSCONFIG_INTERVALSECONDS     | Defines how often metrics are pushed to Prometheus                                                      | 5            |
| NodeName            | NETHERMIND_METRICSCONFIG_NODENAME            | Name displayed in the Grafana dashboard                                                                 | "Nethermind" |
| PushGatewayUrl      | NETHERMIND_METRICSCONFIG_PUSHGATEWAYURL      | Prometheus Pushgateway URL.                                                                             |              |
