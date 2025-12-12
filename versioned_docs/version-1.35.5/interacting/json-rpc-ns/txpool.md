---
title: txpool namespace
sidebar_label: txpool
sidebar_position: 12
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

`result`: _object_
  - `pending`: map of map of _object_
map of _object_
  - `blockHash`: _string_ (hash)
  - `blockNumber`: _string_ (hex integer)
  - `gas`: _string_ (hex integer)
  - `hash`: _string_ (hash)
  - `transactionIndex`: _string_ (hex integer)
  - `type`: _integer_
  - `queued`: map of map of _object_
map of _object_
  - `blockHash`: _string_ (hash)
  - `blockNumber`: _string_ (hex integer)
  - `gas`: _string_ (hex integer)
  - `hash`: _string_ (hash)
  - `transactionIndex`: _string_ (hex integer)
  - `type`: _integer_

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

`result`: _object_
  - `pending`: map of map of _string_
  - `queued`: map of map of _string_

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

