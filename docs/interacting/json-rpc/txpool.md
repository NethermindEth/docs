---
title: txpool namespace
sidebar_label: txpool
sidebar_position: 11
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

`result`: *object*
  - `pending`: *object*
  - `queued`: *object*


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

`result`: *object*
  - `pending`: *object*
  - `queued`: *object*


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

`result`: *object*
  - `pending`: *string* (hex integer)
  - `queued`: *string* (hex integer)


</TabItem>
</Tabs>

