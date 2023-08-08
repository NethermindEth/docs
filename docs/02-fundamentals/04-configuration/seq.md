# Seq

Configuration of the Prometheus + Grafana metrics publication. Documentation of the required setup is not yet ready (but
the metrics do work and are used by the dev team)

| Property  | Env Variable                   | Description                                                     | Default                |
|:----------|:-------------------------------|:----------------------------------------------------------------|:-----------------------|
| ApiKey    | NETHERMIND_SEQCONFIG_APIKEY    | API key used for log events ingestion to Seq instance           |                        |
| MinLevel  | NETHERMIND_SEQCONFIG_MINLEVEL  | Minimal level of log events which will be sent to Seq instance. | Off                    |
| ServerUrl | NETHERMIND_SEQCONFIG_SERVERURL | Seq instance URL.                                               | "http://localhost:5341 |
