---
title: health namespace
sidebar_label: health
sidebar_position: 5
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### health_nodeStatus

Check health status of the node

<Tabs>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "health_nodeStatus",
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
  - `errors`: array of _string_
  - `healthy`: _boolean_
  - `isSyncing`: _boolean_
  - `messages`: array of _string_

</TabItem>
</Tabs>

