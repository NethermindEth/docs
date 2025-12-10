---
title: clique namespace
sidebar_label: clique
sidebar_position: 1
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### clique_discard

This method drops a currently running proposal. The signer will not cast further votes (either for or against) the address.

<Tabs>
<TabItem value="params" label="Parameters">

1. `signer`: _string_ (address)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "clique_discard",
      "params": [signer]
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

`result`: _boolean_

</TabItem>
</Tabs>

### clique_getBlockSigner

Retrieves the signer of the block with the given hash. Returns error of a block with the given hash does not exist.

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
      "method": "clique_getBlockSigner",
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

`result`: _string_ (address)

</TabItem>
</Tabs>

### clique_getSigners

Retrieves the list of authorized signers.

<Tabs>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "clique_getSigners",
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

`result`: array of _string_ (address)

</TabItem>
</Tabs>

### clique_getSignersAnnotated

Retrieves the list of authorized signers but with signer names instead of addresses

<Tabs>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "clique_getSignersAnnotated",
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

`result`: array of _string_

</TabItem>
</Tabs>

### clique_getSignersAtHash

Retrieves the list of authorized signers at the specified block by hash.

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
      "method": "clique_getSignersAtHash",
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

`result`: array of _string_ (address)

</TabItem>
</Tabs>

### clique_getSignersAtHashAnnotated

Retrieves the list of authorized signers at the specified block by hash but with signer names instead of addresses

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
      "method": "clique_getSignersAtHashAnnotated",
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

`result`: array of _string_

</TabItem>
</Tabs>

### clique_getSignersAtNumber

Retrieves the list of authorized signers at the specified block by block number.

<Tabs>
<TabItem value="params" label="Parameters">

1. `number`: _string_ (hex integer)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "clique_getSignersAtNumber",
      "params": [number]
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

`result`: array of _string_ (address)

</TabItem>
</Tabs>

### clique_getSnapshot

Retrieves a snapshot of all clique state at a given block.

<Tabs>
<TabItem value="params" label="Parameters">

1. `number`: _string_ (hex integer)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "clique_getSnapshot",
      "params": [number]
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
  - `hash`: _string_ (hash)
  - `number`: _string_ (hex integer)
  - `signerLimit`: _string_ (hex integer)
  - `signers`: map of _string_ (hex integer)
  - `tally`: map of _object_
    - `authorize`: _boolean_
    - `votes`: _string_ (hex integer)
  - `votes`: array of _object_
    - `address`: _string_ (address)
    - `authorize`: _boolean_
    - `block`: _string_ (hex integer)
    - `signer`: _string_ (address)

</TabItem>
</Tabs>

### clique_getSnapshotAtHash

Retrieves the state snapshot at a given block.

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
      "method": "clique_getSnapshotAtHash",
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

`result`: _object_
  - `hash`: _string_ (hash)
  - `number`: _string_ (hex integer)
  - `signerLimit`: _string_ (hex integer)
  - `signers`: map of _string_ (hex integer)
  - `tally`: map of _object_
    - `authorize`: _boolean_
    - `votes`: _string_ (hex integer)
  - `votes`: array of _object_
    - `address`: _string_ (address)
    - `authorize`: _boolean_
    - `block`: _string_ (hex integer)
    - `signer`: _string_ (address)

</TabItem>
</Tabs>

### clique_produceBlock

Forces Clique block producer to produce a new block

<Tabs>
<TabItem value="params" label="Parameters">

1. `parentHash`: _string_ (hash)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "clique_produceBlock",
      "params": [parentHash]
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

`result`: _boolean_

</TabItem>
</Tabs>

### clique_proposals

Retrieves the current proposals the node is voting on.

<Tabs>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "clique_proposals",
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

`result`: array of _boolean_

</TabItem>
</Tabs>

### clique_propose

Adds a new authorization proposal that the signer will attempt to push through. If the `vote` parameter is true, the local signer votes for the given address to be included in the set of authorized signers. With `vote` set to false, the signer is against the address.

<Tabs>
<TabItem value="params" label="Parameters">

1. `signer`: _string_ (address)

2. `vote`: _boolean_


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "clique_propose",
      "params": [signer, vote]
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

`result`: _boolean_

</TabItem>
</Tabs>

