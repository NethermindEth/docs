---
title: rbuilder namespace
sidebar_label: rbuilder
sidebar_position: 10
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### rbuilder_calculateStateRoot

Calculate the state root on top of the state trie at specified block given a set of change.

<Tabs>
<TabItem value="params" label="Parameters">

1. `block`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)

2. `accountDiff`: map of _object_
  - `balance`: _string_ (hex integer)
  - `changedSlots`: map of _string_ (hex integer)
  - `codeHash`: _string_ (hash)
  - `nonce`: _string_ (hex integer)
  - `selfDestructed`: _boolean_


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "rbuilder_calculateStateRoot",
      "params": [block, accountDiff]
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

`result`: _string_ (hash)

</TabItem>
</Tabs>

### rbuilder_getAccount

Get account data

<Tabs>
<TabItem value="params" label="Parameters">

1. `address`: _string_ (address)

2. `block`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "rbuilder_getAccount",
      "params": [address, block]
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
  - `balance`: _string_ (hex integer)
  - `codeHash`: _string_ (hash)
  - `nonce`: _string_ (hex integer)

</TabItem>
</Tabs>

### rbuilder_getBlockHash

Gets block hash

<Tabs>
<TabItem value="params" label="Parameters">

1. `block`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "rbuilder_getBlockHash",
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

`result`: _string_ (hash)

</TabItem>
</Tabs>

### rbuilder_getCodeByHash

Returns bytecode based on hash.

<Tabs>
<TabItem value="params" label="Parameters">

1. `hash`: _string_ (hash)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "rbuilder_getCodeByHash",
      "params": [hash]
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

`result`: _string_ (hex data)

</TabItem>
</Tabs>

