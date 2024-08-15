---
title: admin namespace
sidebar_label: admin
sidebar_position: 0
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### admin_addPeer

Adds given node.

<Tabs>
<TabItem value="params" label="Parameters">

1. `enode`: *string*

2. `addToStaticNodes`: *boolean*


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "admin_addPeer",
      "params": [enode, addToStaticNodes]
    }'
```

</TabItem>
<TabItem value="response" label="Response">

Added node

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

### admin_nodeInfo

Displays relevant information about this node.

<Tabs>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "admin_nodeInfo",
      "params": []
    }'
```

</TabItem>
<TabItem value="response" label="Response">

Information about this node

```json
{
  "jsonrpc": "2.0",
  "id": 0,
  "result": result
}
```

`result`: *object*
  - `enode`: *string*
  - `id`: *string*
  - `ip`: *string*
  - `listenAddress`: *string*
  - `name`: *string*
  - `ports`: *object*
    - `discovery`: *string* (hex integer)
    - `listener`: *string* (hex integer)
  - `protocols`: map of *object*
    - `difficulty`: *string* (hex integer)
    - `genesisHash`: *string* (hash)
    - `headHash`: *string* (hash)
    - `newtorkId`: *string* (hex integer)

</TabItem>
</Tabs>

### admin_peers

Displays a list of connected peers including information about them (`clientId`, `host`, `port`, `address`, `isBootnode`, `isStatic`, `enode`).

<Tabs>
<TabItem value="params" label="Parameters">

1. `includeDetails`: *boolean*


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "admin_peers",
      "params": [includeDetails]
    }'
```

</TabItem>
<TabItem value="response" label="Response">

List of connected peers including information

```json
{
  "jsonrpc": "2.0",
  "id": 0,
  "result": result
}
```

`result`: array of *object*
  - `address`: *string*
  - `clientId`: *string*
  - `clientType`: *string*
  - `enode`: *string*
  - `ethDetails`: *string*
  - `host`: *string*
  - `isBootnode`: *boolean*
  - `isStatic`: *boolean*
  - `isTrusted`: *boolean*
  - `lastSignal`: *string*
  - `port`: *string* (hex integer)

</TabItem>
</Tabs>

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

### admin_removePeer

Removes given node.

<Tabs>
<TabItem value="params" label="Parameters">

1. `enode`: *string*

2. `removeFromStaticNodes`: *boolean*


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "admin_removePeer",
      "params": [enode, removeFromStaticNodes]
    }'
```

</TabItem>
<TabItem value="response" label="Response">

Removed node

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

