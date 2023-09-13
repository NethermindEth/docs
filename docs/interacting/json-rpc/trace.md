---
title: trace namespace
sidebar_label: trace
sidebar_position: 10
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### trace_block



<Tabs>
<TabItem value="params" label="Parameters">

1. `numberOrTag`: *string* (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)

</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "trace_block",
      "params": [numberOrTag]
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

`result`: array of *object*

</TabItem>
</Tabs>

### trace_call



<Tabs>
<TabItem value="params" label="Parameters">

1. `call`: *object*
    - `accessList`: array of *object*
        - `address`: *string* (address)
        - `storageKeys`: array of *string* (hex integer)
    - `blobVersionedHashes`: array of array of *string* (hex data)
    - `blockHash`: *string* (hash)
    - `blockNumber`: *string* (hex integer)
    - `chainId`: *string* (hex integer)
    - `data`: array of *string* (hex data)
    - `from`: *string* (address)
    - `gas`: *string* (hex integer)
    - `gasPrice`: *string* (hex integer)
    - `hash`: *string* (hash)
    - `input`: array of *string* (hex data)
    - `maxFeePerBlobGas`: *string* (hex integer)
    - `maxFeePerGas`: *string* (hex integer)
    - `maxPriorityFeePerGas`: *string* (hex integer)
    - `nonce`: *string* (hex integer)
    - `r`: *string* (hex integer)
    - `s`: *string* (hex integer)
    - `to`: *string* (address)
    - `transactionIndex`: *string* (hex integer)
    - `type`: *string* (transaction type)
    - `v`: *string* (hex integer)
    - `value`: *string* (hex integer)
    - `yParity`: *string* (hex integer)

2. `traceTypes`: array of *string*
3. `blockParameter`: *string* (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)

</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "trace_call",
      "params": [call, traceTypes, blockParameter]
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
  - `action`: *object*
  - `output`: array of *string* (hex data)
  - `stateChanges`: *object*
  - `transactionHash`: *string* (hash)
  - `vmTrace`: *object*


</TabItem>
</Tabs>

### trace_filter



<Tabs>
<TabItem value="params" label="Parameters">

1. `traceFilterForRpc`: *object*
    - `after`: *string* (hex integer)
    - `count`: *string* (hex integer)
    - `fromAddress`: array of *string* (address)
    - `fromBlock`: *string* (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)
    - `toAddress`: array of *string* (address)
    - `toBlock`: *string* (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "trace_filter",
      "params": [traceFilterForRpc]
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

`result`: array of *object*

</TabItem>
</Tabs>

### trace_rawTransaction

Traces a call to eth_sendRawTransaction without making the call, returning the traces

<Tabs>
<TabItem value="params" label="Parameters">

1. `data`: array of *string* (hex data)
2. `traceTypes`: array of *string*

</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "trace_rawTransaction",
      "params": [data, traceTypes]
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
  - `action`: *object*
  - `output`: array of *string* (hex data)
  - `stateChanges`: *object*
  - `transactionHash`: *string* (hash)
  - `vmTrace`: *object*


</TabItem>
</Tabs>

### trace_replayBlockTransactions



<Tabs>
<TabItem value="params" label="Parameters">

1. `blockParameter`: *string* (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)
2. `traceTypes`: array of *string*

</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "trace_replayBlockTransactions",
      "params": [blockParameter, traceTypes]
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

`result`: array of *object*

</TabItem>
</Tabs>

### trace_replayTransaction



<Tabs>
<TabItem value="params" label="Parameters">

1. `txHash`: *string* (hash)
2. `traceTypes`: array of *string*

</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "trace_replayTransaction",
      "params": [txHash, traceTypes]
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
  - `action`: *object*
  - `output`: array of *string* (hex data)
  - `stateChanges`: *object*
  - `transactionHash`: *string* (hash)
  - `vmTrace`: *object*


</TabItem>
</Tabs>

### trace_transaction



<Tabs>
<TabItem value="params" label="Parameters">

1. `txHash`: *string* (hash)

</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "trace_transaction",
      "params": [txHash]
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

`result`: array of *object*

</TabItem>
</Tabs>

