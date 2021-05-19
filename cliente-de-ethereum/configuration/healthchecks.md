# Comprobaciones de estado module

| Propiedad | Descripción | Predeterminado |
| :--- | :--- | :--- |
| Enabled | Si es 'true' entonces los endpoints de la comprobaciones de estado están habilitados en /health | false |
| MaxIntervalWithoutProcessedBlock | Max interval in seconds in which we assume that node processing blocks in a healthy way | null |
| MaxIntervalWithoutProducedBlock | Max interval in seconds in which we assume that node producing blocks in a healthy way | null |
| PollingInterval | Configura la interfaz de usuario para tener las actualizaciones de las comprobaciones de estados  \(en  segundos\) | 5 |
| Slug | The URL slug on which Healthchecks service will be exposed | /health |
| UIEnabled | Si es 'true', la interfaz de usuario de comprobaciones de estado estará disponible en /healthchecks-ui | false |
| WebhooksEnabled | Si es 'true', entonces se pueden configurar los Webhooks | false |
| WebhooksPayload | Payload son los datos en formato json que se enviará en caso de falla y debe escaparse. | {"attachments":\[{"color":"\#FFCC00","pretext":"Health Check Status :warning:","fields":\[{"title":"Details","value":"More details available at `/healthchecks-ui`","short":false},{"title":"Description","value":"`[[DESCRIPTIONS]]`","short":false}\]}\]} |
| WebhooksRestorePayload | RestorePayload son los datos en formato json que se enviará en recuperación y debe escaparse | {"attachments":\[{"color":"\#36a64f","pretext":"Health Check Status :+1:","fields":\[{"title":"Details","value":"`More details available at /healthchecks-ui`","short":false},{"title":"description","value":"The HealthCheck `[[LIVENESS]]` is recovered. All is up and running","short":false}\]}\]} |
| WebhooksUri | Webhooks endpoint por ejemplo Slack WebHooks | null |

