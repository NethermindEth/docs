# HealthChecks module

| 属性 | 描述 | 默认值 |
| :--- | :--- | :--- |
| Enabled | 如果为“ true”，在`/health`处启用运行状况检查端点 | false |
| MaxIntervalWithoutProcessedBlock | Max interval in seconds in which we assume that node processing blocks in a healthy way | null |
| MaxIntervalWithoutProducedBlock | Max interval in seconds in which we assume that node producing blocks in a healthy way | null |
| PollingInterval | 将用户界面配置为轮询健康检查更新\（在秒内） | 5 |
| Slug | The URL slug on which Healthchecks service will be exposed | /health |
| UIEnabled | 如果为'true'，HealthChecks UI将在`/healthchecks-ui`可用。 | false |
| WebhooksEnabled | 如果为'true'，可以配置Webhooks | false |
| WebhooksPayload | 有效负载是将在失败时发送的json，必须进行转义。 | {"attachments":\[{"color":"\#FFCC00","pretext":"Health Check Status :warning:","fields":\[{"title":"Details","value":"More details available at `/healthchecks-ui`","short":false},{"title":"Description","value":"`[[DESCRIPTIONS]]`","short":false}\]}\]} |
| WebhooksRestorePayload | RestorePayload是将在Recovery上发送的json有效负载，必须进行转义。 | {"attachments":\[{"color":"\#36a64f","pretext":"Health Check Status :+1:","fields":\[{"title":"Details","value":"`More details available at /healthchecks-ui`","short":false},{"title":"description","value":"The HealthCheck `[[LIVENESS]]` is recovered. All is up and running","short":false}\]}\]} |
| WebhooksUri | Webhooks端点，例如 Slack WebHooks | null |

