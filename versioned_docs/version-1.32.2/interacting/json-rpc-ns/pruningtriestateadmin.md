---
title: pruningtriestateadmin namespace
sidebar_label: pruningtriestateadmin
sidebar_position: 8
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### admin_prune

Runs full pruning if enabled.

<Tabs>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "admin_prune",
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

`result`: *integer*

</TabItem>
</Tabs>

### admin_verifyTrie

Runs VerifyTrie.

<Tabs>
<TabItem value="params" label="Parameters">

1. `block`: *string* (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "admin_verifyTrie",
      "params": [block]
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

`result`: *string*

</TabItem>
</Tabs>

