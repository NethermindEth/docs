---
title: txpool namespace
sidebar_label: txpool
sidebar_position: 9
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

`result`:\0xA0*object*
  - `pending`: map of map of *object*
map of *object*
  - `accessList`: array of *object*
    - `address`: *string* (address)
    - `storageKeys`: array of *string* (hex integer)
  - `blobVersionedHashes`: array of *string* (hex data)
  - `blockHash`: *string* (hash)
  - `blockNumber`: *string* (hex integer)
  - `chainId`: *string* (hex integer)
  - `from`: *string* (address)
  - `gas`: *string* (hex integer)
  - `gasPrice`: *string* (hex integer)
  - `hash`: *string* (hash)
  - `input`: *string* (hex data)
  - `isSystemTx`: *boolean*
  - `maxFeePerBlobGas`: *string* (hex integer)
  - `maxFeePerGas`: *string* (hex integer)
  - `maxPriorityFeePerGas`: *string* (hex integer)
  - `mint`: *string* (hex integer)
  - `nonce`: *string* (hex integer)
  - `r`: *string* (hex integer)
  - `s`: *string* (hex integer)
  - `sourceHash`: *string* (hash)
  - `to`: *string* (address)
  - `transactionIndex`: *string* (hex integer)
  - `type`: *integer*
  - `v`: *string* (hex integer)
  - `value`: *string* (hex integer)
  - `yParity`: *string* (hex integer)
  - `queued`: map of map of *object*
map of *object*
  - `accessList`: array of *object*
    - `address`: *string* (address)
    - `storageKeys`: array of *string* (hex integer)
  - `blobVersionedHashes`: array of *string* (hex data)
  - `blockHash`: *string* (hash)
  - `blockNumber`: *string* (hex integer)
  - `chainId`: *string* (hex integer)
  - `from`: *string* (address)
  - `gas`: *string* (hex integer)
  - `gasPrice`: *string* (hex integer)
  - `hash`: *string* (hash)
  - `input`: *string* (hex data)
  - `isSystemTx`: *boolean*
  - `maxFeePerBlobGas`: *string* (hex integer)
  - `maxFeePerGas`: *string* (hex integer)
  - `maxPriorityFeePerGas`: *string* (hex integer)
  - `mint`: *string* (hex integer)
  - `nonce`: *string* (hex integer)
  - `r`: *string* (hex integer)
  - `s`: *string* (hex integer)
  - `sourceHash`: *string* (hash)
  - `to`: *string* (address)
  - `transactionIndex`: *string* (hex integer)
  - `type`: *integer*
  - `v`: *string* (hex integer)
  - `value`: *string* (hex integer)
  - `yParity`: *string* (hex integer)

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

`result`:\0xA0*object*
  - `pending`: map of map of *string*
  - `queued`: map of map of *string*

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

`result`:\0xA0*object*
  - `pending`: *string* (hex integer)
  - `queued`: *string* (hex integer)

</TabItem>
</Tabs>

