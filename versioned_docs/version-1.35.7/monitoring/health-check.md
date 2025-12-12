---
title: Health check
sidebar_position: 1
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

To monitor liveness and readiness of your node, Nethermind provides a simple yet powerful health check feature. It is available at the default `/health` endpoint of the [JSON-RPC server](../interacting/json-rpc-server.md).

## Basic configuration

:::warning Important
The health check service requires the [JSON-RPC API](../interacting/json-rpc-server.md#http) to be enabled.
:::

The health check service is disabled by default. To enable it, set the [`HealthChecks.Enabled`](../fundamentals/configuration.md#healthchecks-enabled) configuration option as follows:

```bash
nethermind \
  -c mainnet \
  --data-dir path/to/data/dir \
    # highlight-start
  --healthchecks-enabled
    # highlight-end
```

Once Nethermind is up and running, the health check service can be accessed at the `/health` endpoint:

```bash
curl localhost:8545/health
```

with a response similar to the following if healthy:

```json title="HTTP 200 OK"
{
  "status": "Healthy",
  "totalDuration": "00:00:00.0006931",
  "entries": {
    "node-health": {
      "data": {
        "IsSyncing": false,
        "Errors": []
      },
      "description": "The node is now fully synced with a network. Peers: 89.",
      "duration": "00:00:00.0003797",
      "status": "Healthy",
      "tags": []
    }
  }
}
```

or similar to the following if unhealthy:

```json title="HTTP 503 Service Unavailable"
{
  "status": "Unhealthy",
  "totalDuration": "00:00:00.0009477",
  "entries": {
    "node-health": {
      "data": {
        "IsSyncing": false,
        "Errors": [ "NoPeers" ]
      },
      "description": "The node is now fully synced with a network. Node is not connected to any peers.",
      "duration": "00:00:00.0001356",
      "status": "Unhealthy",
      "tags": []
    }
  }
}
```

It is also possible to replace the default `/health` endpoint with a custom one using the [`HealthChecks.Slug`](../fundamentals/configuration.md#healthchecks-slug) configuration option. For example:

```bash
nethermind \
  -c mainnet \
  --data-dir path/to/data/dir \
  --healthchecks-enabled \
  # highlight-start
  --healthchecks-slug /my/custom/endpoint
  # highlight-end
```

## Configuring a webhook {#webhook}

The health check service can be configured to send notifications to a webhook on node failure or recovery. This is achieved with the [`HealthChecks.UIEnabled`](../fundamentals/configuration.md#healthchecks-uienabled), [`HealthChecks.WebhooksEnabled`](../fundamentals/configuration.md#healthchecks-webhooksenabled), and [`HealthChecks.WebhooksUri`](../fundamentals/configuration.md#healthchecks-webhooksuri) configuration options. Optionally, the webhook payload data can be customized with the [`HealthChecks.WebhooksPayload`](../fundamentals/configuration.md#healthchecks-webhookspayload) and [`HealthChecks.WebhooksRestorePayload`](../fundamentals/configuration.md#healthchecks-webhooksrestorepayload) configuration options for failure and recovery events respectively.

The following example demonstrates how to configure a basic Slack webhook:

```bash
nethermind \
  -c mainnet \
  --data-dir path/to/data/dir \
  --healthchecks-enabled \
    # highlight-start
  --healthchecks-uienabled \
  --healthchecks-webhooksenabled \
  --healthchecks-webhooksuri https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX \
  --healthchecks-webhookspayload '{"text": "Node is unhealthy"}' \
  --healthchecks-webhooksrestorepayload '{"text": "Node is healthy"}'
    # highlight-end
```

## Monitoring storage space {#storage-space}

Monitoring the available storage space is a crucial aspect of running a node. Nethermind provides a feature to track the free storage space and take action when the available space falls below a certain threshold. The following options are available:

- [`HealthChecks.LowStorageCheckAwaitOnStartup`](../fundamentals/configuration.md#healthchecks-lowstoragecheckawaitonstartup) to check for low disk space on startup and suspend Nethermind until enough space is available
- [`HealthChecks.LowStorageSpaceShutdownThreshold`](../fundamentals/configuration.md#healthchecks-lowstoragespaceshutdownthreshold) to shut down Nethermind when the percentage of available disk space falls below the specified threshold
- [`HealthChecks.LowStorageSpaceWarningThreshold`](../fundamentals/configuration.md#healthchecks-lowstoragespacewarningthreshold) to issue a warning when the percentage of available disk space falls below the specified threshold

## Monitoring blocks {#blocks}

Another critical aspect of running a node is monitoring the production and processing of blocks. For that, Nethermind provides the following options:

- [`HealthChecks.MaxIntervalWithoutProcessedBlock`](../fundamentals/configuration.md#healthchecks-maxintervalwithoutprocessedblock) to specify the max interval without processing a block before the node is considered unhealthy
- [`HealthChecks.MaxIntervalWithoutProducedBlock`](../fundamentals/configuration.md#healthchecks-maxintervalwithoutproducedblock) to specify the max interval without producing a block before the node is considered unhealthy

## Monitoring consensus client {#consensus-client}

The health check service can also monitor the communication between Nethermind and the consensus client which can be configured by the [`HealthChecks.MaxIntervalClRequestTime`](../fundamentals/configuration.md#healthchecks-maxintervalclrequesttime) configuration option.
