# Metrics module

Configuration of the Prometheus metrics publication. Documentation of the required setup is not yet ready \(but the metrics do work and are used by the dev team\)

| Propiedad | Descripción | Predeterminado |
| :--- | :--- | :--- |
| Enabled | Si es `true`, entonces el nodo publica varias métricas para Prometheus en el intervalo dado. | false |
| ExposePort | If set, the node exposes Prometheus metrics on the given port. | null |
| IntervalSeconds | Defines how often metrics are pushed to Prometheus | 5 |
| NodeName | Nombre que se muestra en el dashboard de Grafana | "Nethermind" |
| PushGatewayUrl | Prometheus, Pushgateway y URL. | "[http://localhost:9091/metrics](http://localhost:9091/metrics)" |

