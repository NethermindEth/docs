---
title: txpool namespace
sidebar_label: txpool
sidebar_position: 14
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### txpool_content

Returns tx pool content.

<Tabs>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "txpool_content",
      "params": []
    }'
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

`result`: _object_ with `pending` and `queued`, each a map of sender address to a map of nonce (decimal, or hash for an EIP-8250 keyed transaction) to _object_ (transaction)

</TabItem>
</Tabs>

### txpool_contentFrom

Returns tx pool content for a specific sender address.

<Tabs>
<TabItem value="params" label="Parameters">

1. `address`: _string_ (address)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "txpool_contentFrom",
      "params": [address]
    }'
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

`result`: _object_
  - `pending`: map of _object_
    - `blockHash`: _string_ (hash) or `null`
    - `blockNumber`: _string_ (hex integer) or `null`
    - `blockTimestamp`: _string_ (hex integer) or `null`
    - `gas`: _string_ (hex integer)
    - `hash`: _string_ (hash) or `null`
    - `transactionIndex`: _string_ (hex integer) or `null`
    - `type`: _string_ (transaction type)
  - `queued`: map of _object_
    - `blockHash`: _string_ (hash) or `null`
    - `blockNumber`: _string_ (hex integer) or `null`
    - `blockTimestamp`: _string_ (hex integer) or `null`
    - `gas`: _string_ (hex integer)
    - `hash`: _string_ (hash) or `null`
    - `transactionIndex`: _string_ (hex integer) or `null`
    - `type`: _string_ (transaction type)

</TabItem>
</Tabs>

### txpool_inspect

Returns a detailed info on tx pool transactions.

<Tabs>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "txpool_inspect",
      "params": []
    }'
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

`result`: _object_ with `pending` and `queued`, each a map of sender address to a map of nonce (decimal, or hash for an EIP-8250 keyed transaction) to _string_ (`sender: value wei + gas × gasPrice gas`)

</TabItem>
</Tabs>

### txpool_status

Returns a tx pool status.

<Tabs>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "txpool_status",
      "params": []
    }'
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

`result`: _object_
  - `pending`: _string_ (hex integer)
  - `queued`: _string_ (hex integer)

</TabItem>
</Tabs>

