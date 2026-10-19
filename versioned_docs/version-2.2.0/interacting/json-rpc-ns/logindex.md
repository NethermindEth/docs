---
title: logindex namespace
sidebar_label: logindex
sidebar_position: 6
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### logIndex_blockNumbers

Retrieves log index block number for the given filter.

<Tabs>
<TabItem value="params" label="Parameters">

1. `filter`: _object_
    - `address`: array of _string_ (address)
    - `fromBlock`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)
    - `toBlock`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)
    - `topics`: array of array of _string_ (hash)
    - `useIndex`: _boolean_


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "logIndex_blockNumbers",
      "params": [filter]
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

`result`: array of _string_ (hex integer)

</TabItem>
</Tabs>

### logIndex_status

Retrieves log index status.

<Tabs>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "logIndex_status",
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
  - `current`: _object_
    - `fromBlock`: _string_ (hex integer)
    - `toBlock`: _string_ (hex integer)
  - `dbSize`: _string_
  - `isRunning`: _boolean_
  - `lastError`: _string_
  - `lastUpdate`: _string_ (date-time)
  - `target`: _object_
    - `fromBlock`: _string_ (hex integer)
    - `toBlock`: _string_ (hex integer)

</TabItem>
</Tabs>

