### eth_unsubscribe

Unsubscribes from a subscription.

:::info
This method is enabled by adding `subscribe` to [`--JsonRpc.EnabledModules`](../../fundamentals/configuration.md#jsonrpc).
:::

<Tabs>
<TabItem value="params" label="Parameters">

1. `subscriptionId`: *string*


</TabItem>
<TabItem value="request" label="Request" default>

```bash
wscat -c ws://localhost:8545
```

```json
{
  "jsonrpc": "2.0",
  "id": 0,
  "method": "eth_unsubscribe",
  "params": [subscriptionId]
}
```

</TabItem>
<TabItem value="response" label="Response">

```json
{
  "jsonrpc": "2.0",
  "id": 0,
  "result": result
}
```

`result`: *boolean* (`true` if unsubscribed successfully; otherwise, `false`)

</TabItem>
</Tabs>
