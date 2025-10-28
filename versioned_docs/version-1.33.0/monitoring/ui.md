---
title: User interface
sidebar_position: 2
---

To provide a richer and more user-friendly experience, Nethermind is bundled with an integrated user interface (UI) to monitor your node.

![Nethermind UI](/images/ui.png)

Disabled by default, the UI can be enabled together with the [health check](./health-check.md) UI using the [`HealthChecks.Enabled`](../fundamentals/configuration.md#healthchecks-enabled) and [`HealthChecks.UIEnabled`](../fundamentals/configuration.md#healthchecks-uienabled) configuration options as follows:

```bash
nethermind \
  -c mainnet \
  --data-dir path/to/data/dir \
  # highlight-start
  --healthchecks-enabled \
  --healthchecks-uienabled
  # highlight-end
```

If you need to expose the UI to the public while keeping the JSON-RPC interface behind the curtain, you can achieve that by using the [`JsonRpc.AdditionalRpcUrls`](../fundamentals/configuration.md#jsonrpc-additionalrpcurls) configuration option. The following example demonstrates how to expose only the UI to the public IP address while still having JSON-RPC capabilities accessible to local use cases such as consensus client communications:

```bash
nethermind \
  -c mainnet \
  --data-dir path/to/data/dir \
  # highlight-start
  --jsonrpc-additionalrpcurls "http://203.0.113.5:80|http" \
  # highlight-end
  --healthchecks-enabled \
  --healthchecks-uienabled
```
