# Metrics module

Configuration of the Prometheus metrics publication. Documentation of the required setup is not yet ready \(but the metrics do work and are used by the dev team\)

| Property Name | Description | Default |
| :--- | :--- | ---: |
| Enabled | If 'true',the node publishes various metrics to Prometheus Pushgateway at given interval. | false |
| ExposePort | If set, the node exposes Prometheus metrics on the given port. | null |
| IntervalSeconds | Defines how often metrics are pushed to Prometheus | 5 |
| NodeName | Name displayed in the Grafana dashboard | "Nethermind" |
| PushGatewayUrl | Prometheus Pushgateway URL. | "[http://localhost:9091/metrics](http://localhost:9091/metrics)" |

