# HealthChecks



| Property Name | Description | Default |
| :--- | :--- | ---: |
| `Enabled` | If 'true' then Health Check endpoints is enabled at `/health` | `false` |
| `WebhooksEnabled` | If 'true' then Webhooks can be configured | `false` |
| `WebhooksUri` | The Webhooks endpoint e.g. Slack WebHooks | `null` |
| `WebhooksPayload` | Payload is the json payload that will be send on Failure and must be escaped. | `{\"attachments\":[{\"color\":\"#FFCC00\",\"pretext\":\"Health Check Status :warning:\",\"fields\":[{\"title\":\"Details\",\"value\":\"More details available at /healthchecks-ui\",\"short\":false},{\"title\":\"Description\",\"value\":\"[[DESCRIPTIONS]]\",\"short\":false}]}]}` |
| `WebhooksRestorePayload` | RestorePayload is the json payload that will be send on Recovery and must be escaped. | `{\"attachments\":[{\"color\":\"#36a64f\",\"pretext\":\"Health Check Status :+1:\",\"fields\":[{\"title\":\"Details\",\"value\":\"More details available at /healthchecks-ui\",\"short\":false},{\"title\":\"description\",\"value\":\"The HealthCheck [[LIVENESS]] is recovered. All is up and running\",\"short\":false}]}]}` |
| `UIEnabled` | If 'true' then HealthChecks UI will be avaiable at `/healthchecks-ui` | `false` |
| `PollingInterval` | Configures the UI to poll for healthchecks updates \(in **seconds**\) | `5` |

