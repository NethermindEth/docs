# HealthChecks



| Property | Env Variable | Description | Default |
| :--- | :--- | :--- | :--- |
| Enabled | NETHERMIND_HEALTHCHECKSCONFIG_ENABLED | If 'true' then Health Check endpoints is enabled at /health | false |
| LowStorageCheckAwaitOnStartup | NETHERMIND_HEALTHCHECKSCONFIG_LOWSTORAGECHECKAWAITONSTARTUP | Free disk space check on startup will pause node initialization until enough space is available. | false |
| LowStorageSpaceShutdownThreshold | NETHERMIND_HEALTHCHECKSCONFIG_LOWSTORAGESPACESHUTDOWNTHRESHOLD | Percentage of available disk space below which node will shutdown. Zero to disable. | 1 |
| LowStorageSpaceWarningThreshold | NETHERMIND_HEALTHCHECKSCONFIG_LOWSTORAGESPACEWARNINGTHRESHOLD | Percentage of available disk space below which a warning will be displayed. Zero to disable. | 5 |
| MaxIntervalClRequestTime | NETHERMIND_HEALTHCHECKSCONFIG_MAXINTERVALCLREQUESTTIME | Max request interval in which we assume that CL works in a healthy way | 300 |
| MaxIntervalWithoutProcessedBlock | NETHERMIND_HEALTHCHECKSCONFIG_MAXINTERVALWITHOUTPROCESSEDBLOCK | Max interval in seconds in which we assume that node processing blocks in a healthy way | null |
| MaxIntervalWithoutProducedBlock | NETHERMIND_HEALTHCHECKSCONFIG_MAXINTERVALWITHOUTPRODUCEDBLOCK | Max interval in seconds in which we assume that node producing blocks in a healthy way | null |
| PollingInterval | NETHERMIND_HEALTHCHECKSCONFIG_POLLINGINTERVAL | Configures the UI to poll for healthchecks updates (in seconds) | 5 |
| Slug | NETHERMIND_HEALTHCHECKSCONFIG_SLUG | The URL slug on which Healthchecks service will be exposed | /health |
| UIEnabled | NETHERMIND_HEALTHCHECKSCONFIG_UIENABLED | If 'true' then HealthChecks UI will be available at /healthchecks-ui | false |
| WebhooksEnabled | NETHERMIND_HEALTHCHECKSCONFIG_WEBHOOKSENABLED | If 'true' then Webhooks can be configured | false |
| WebhooksPayload | NETHERMIND_HEALTHCHECKSCONFIG_WEBHOOKSPAYLOAD | Payload is the json payload that will be send on Failure and must be escaped. | {"attachments":[{"color":"#FFCC00","pretext":"Health Check Status :warning:","fields":[{"title":"Details","value":"More details available at `/healthchecks-ui`","short":false},{"title":"Description","value":"[[DESCRIPTIONS]]","short":false}]}]} |
| WebhooksRestorePayload | NETHERMIND_HEALTHCHECKSCONFIG_WEBHOOKSRESTOREPAYLOAD | RestorePayload is the json payload that will be send on Recovery and must be escaped. | {"attachments":[{"color":"#36a64f","pretext":"Health Check Status :+1:","fields":[{"title":"Details","value":"`More details available at /healthchecks-ui`","short":false},{"title":"description","value":"The HealthCheck `[[LIVENESS]]` is recovered. All is up and running","short":false}]}]} |
| WebhooksUri | NETHERMIND_HEALTHCHECKSCONFIG_WEBHOOKSURI | The Webhooks endpoint e.g. Slack WebHooks | null |
