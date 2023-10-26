---
title: trace namespace
sidebar_label: trace
sidebar_position: 8
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
  - `action`: *object*
    - `author`: *string* (address)
    - `callType`: *string*
    - `creationMethod`: *string*
    - `error`: *string*
    - `from`: *string* (address)
    - `gas`: *string* (hex integer)
    - `includeInTrace`: *boolean*
    - `input`: *string* (hex data)
    - `isPrecompiled`: *boolean*
    - `result`: *object*
      - `address`: *string* (address)
      - `code`: *string* (hex data)
      - `gasUsed`: *string* (hex integer)
      - `output`: *string* (hex data)
    - `rewardType`: *string*
    - `subtraces`: array of *object*
      <!--[circular ref]-->
    - `to`: *string* (address)
    - `traceAddress`: array of *string* (hex integer)
    - `type`: *string*
    - `value`: *string* (hex integer)
  - `blockHash`: *string* (hash)
  - `blockNumber`: *string* (hex integer)
  - `error`: *string*
  - `result`: *object*
    - `address`: *string* (address)
    - `code`: *string* (hex data)
    - `gasUsed`: *string* (hex integer)
    - `output`: *string* (hex data)
  - `subtraces`: *string* (hex integer)
  - `traceAddress`: array of *string* (hex integer)
  - `transactionHash`: *string* (hash)
  - `transactionPosition`: *string* (hex integer)
  - `type`: *string*

</TabItem>
</Tabs>

### trace_call

<Tabs>
<TabItem value="params" label="Parameters">

1. `call`: *object*
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
    - `maxFeePerBlobGas`: *string* (hex integer)
    - `maxFeePerGas`: *string* (hex integer)
    - `maxPriorityFeePerGas`: *string* (hex integer)
    - `nonce`: *string* (hex integer)
    - `r`: *string* (hex integer)
    - `s`: *string* (hex integer)
    - `to`: *string* (address)
    - `transactionIndex`: *string* (hex integer)
    - `type`: *integer*
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
    - `author`: *string* (address)
    - `callType`: *string*
    - `creationMethod`: *string*
    - `error`: *string*
    - `from`: *string* (address)
    - `gas`: *string* (hex integer)
    - `includeInTrace`: *boolean*
    - `input`: *string* (hex data)
    - `isPrecompiled`: *boolean*
    - `result`: *object*
      - `address`: *string* (address)
      - `code`: *string* (hex data)
      - `gasUsed`: *string* (hex integer)
      - `output`: *string* (hex data)
    - `rewardType`: *string*
    - `subtraces`: array of *object*
      <!--[circular ref]-->
    - `to`: *string* (address)
    - `traceAddress`: array of *string* (hex integer)
    - `type`: *string*
    - `value`: *string* (hex integer)
  - `output`: *string* (hex data)
  - `stateChanges`: map of *object*
    - `balance`: *object*
      - `after`: *string* (hex integer)
      - `before`: *string* (hex integer)
    - `code`: *object*
      - `after`: *string* (hex data)
      - `before`: *string* (hex data)
    - `nonce`: *object*
      - `after`: *string* (hex integer)
      - `before`: *string* (hex integer)
    - `storage`: map of *object*
      - `after`: *string* (hex data)
      - `before`: *string* (hex data)
  - `transactionHash`: *string* (hash)
  - `vmTrace`: *object*
    - `code`: *string* (hex data)
    - `operations`: array of *object*
      - `cost`: *string* (hex integer)
      - `memory`: *object*
        - `data`: *string* (hex data)
        - `offset`: *string* (hex integer)
      - `pc`: *string* (hex integer)
      - `push`: array of *string* (hex data)
      - `store`: *object*
        - `key`: *string* (hex data)
        - `value`: *string* (hex data)
      - `sub`: *object*
        <!--[circular ref]-->
      - `used`: *string* (hex integer)

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
  - `action`: *object*
    - `author`: *string* (address)
    - `callType`: *string*
    - `creationMethod`: *string*
    - `error`: *string*
    - `from`: *string* (address)
    - `gas`: *string* (hex integer)
    - `includeInTrace`: *boolean*
    - `input`: *string* (hex data)
    - `isPrecompiled`: *boolean*
    - `result`: *object*
      - `address`: *string* (address)
      - `code`: *string* (hex data)
      - `gasUsed`: *string* (hex integer)
      - `output`: *string* (hex data)
    - `rewardType`: *string*
    - `subtraces`: array of *object*
      <!--[circular ref]-->
    - `to`: *string* (address)
    - `traceAddress`: array of *string* (hex integer)
    - `type`: *string*
    - `value`: *string* (hex integer)
  - `blockHash`: *string* (hash)
  - `blockNumber`: *string* (hex integer)
  - `error`: *string*
  - `result`: *object*
    - `address`: *string* (address)
    - `code`: *string* (hex data)
    - `gasUsed`: *string* (hex integer)
    - `output`: *string* (hex data)
  - `subtraces`: *string* (hex integer)
  - `traceAddress`: array of *string* (hex integer)
  - `transactionHash`: *string* (hash)
  - `transactionPosition`: *string* (hex integer)
  - `type`: *string*

</TabItem>
</Tabs>

### trace_rawTransaction

Traces a call to eth_sendRawTransaction without making the call, returning the traces

<Tabs>
<TabItem value="params" label="Parameters">

1. `data`: *string* (hex data)

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
    - `author`: *string* (address)
    - `callType`: *string*
    - `creationMethod`: *string*
    - `error`: *string*
    - `from`: *string* (address)
    - `gas`: *string* (hex integer)
    - `includeInTrace`: *boolean*
    - `input`: *string* (hex data)
    - `isPrecompiled`: *boolean*
    - `result`: *object*
      - `address`: *string* (address)
      - `code`: *string* (hex data)
      - `gasUsed`: *string* (hex integer)
      - `output`: *string* (hex data)
    - `rewardType`: *string*
    - `subtraces`: array of *object*
      <!--[circular ref]-->
    - `to`: *string* (address)
    - `traceAddress`: array of *string* (hex integer)
    - `type`: *string*
    - `value`: *string* (hex integer)
  - `output`: *string* (hex data)
  - `stateChanges`: map of *object*
    - `balance`: *object*
      - `after`: *string* (hex integer)
      - `before`: *string* (hex integer)
    - `code`: *object*
      - `after`: *string* (hex data)
      - `before`: *string* (hex data)
    - `nonce`: *object*
      - `after`: *string* (hex integer)
      - `before`: *string* (hex integer)
    - `storage`: map of *object*
      - `after`: *string* (hex data)
      - `before`: *string* (hex data)
  - `transactionHash`: *string* (hash)
  - `vmTrace`: *object*
    - `code`: *string* (hex data)
    - `operations`: array of *object*
      - `cost`: *string* (hex integer)
      - `memory`: *object*
        - `data`: *string* (hex data)
        - `offset`: *string* (hex integer)
      - `pc`: *string* (hex integer)
      - `push`: array of *string* (hex data)
      - `store`: *object*
        - `key`: *string* (hex data)
        - `value`: *string* (hex data)
      - `sub`: *object*
        <!--[circular ref]-->
      - `used`: *string* (hex integer)

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
  - `action`: *object*
    - `author`: *string* (address)
    - `callType`: *string*
    - `creationMethod`: *string*
    - `error`: *string*
    - `from`: *string* (address)
    - `gas`: *string* (hex integer)
    - `includeInTrace`: *boolean*
    - `input`: *string* (hex data)
    - `isPrecompiled`: *boolean*
    - `result`: *object*
      - `address`: *string* (address)
      - `code`: *string* (hex data)
      - `gasUsed`: *string* (hex integer)
      - `output`: *string* (hex data)
    - `rewardType`: *string*
    - `subtraces`: array of *object*
      <!--[circular ref]-->
    - `to`: *string* (address)
    - `traceAddress`: array of *string* (hex integer)
    - `type`: *string*
    - `value`: *string* (hex integer)
  - `output`: *string* (hex data)
  - `stateChanges`: map of *object*
    - `balance`: *object*
      - `after`: *string* (hex integer)
      - `before`: *string* (hex integer)
    - `code`: *object*
      - `after`: *string* (hex data)
      - `before`: *string* (hex data)
    - `nonce`: *object*
      - `after`: *string* (hex integer)
      - `before`: *string* (hex integer)
    - `storage`: map of *object*
      - `after`: *string* (hex data)
      - `before`: *string* (hex data)
  - `transactionHash`: *string* (hash)
  - `vmTrace`: *object*
    - `code`: *string* (hex data)
    - `operations`: array of *object*
      - `cost`: *string* (hex integer)
      - `memory`: *object*
        - `data`: *string* (hex data)
        - `offset`: *string* (hex integer)
      - `pc`: *string* (hex integer)
      - `push`: array of *string* (hex data)
      - `store`: *object*
        - `key`: *string* (hex data)
        - `value`: *string* (hex data)
      - `sub`: *object*
        <!--[circular ref]-->
      - `used`: *string* (hex integer)

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
    - `author`: *string* (address)
    - `callType`: *string*
    - `creationMethod`: *string*
    - `error`: *string*
    - `from`: *string* (address)
    - `gas`: *string* (hex integer)
    - `includeInTrace`: *boolean*
    - `input`: *string* (hex data)
    - `isPrecompiled`: *boolean*
    - `result`: *object*
      - `address`: *string* (address)
      - `code`: *string* (hex data)
      - `gasUsed`: *string* (hex integer)
      - `output`: *string* (hex data)
    - `rewardType`: *string*
    - `subtraces`: array of *object*
      <!--[circular ref]-->
    - `to`: *string* (address)
    - `traceAddress`: array of *string* (hex integer)
    - `type`: *string*
    - `value`: *string* (hex integer)
  - `output`: *string* (hex data)
  - `stateChanges`: map of *object*
    - `balance`: *object*
      - `after`: *string* (hex integer)
      - `before`: *string* (hex integer)
    - `code`: *object*
      - `after`: *string* (hex data)
      - `before`: *string* (hex data)
    - `nonce`: *object*
      - `after`: *string* (hex integer)
      - `before`: *string* (hex integer)
    - `storage`: map of *object*
      - `after`: *string* (hex data)
      - `before`: *string* (hex data)
  - `transactionHash`: *string* (hash)
  - `vmTrace`: *object*
    - `code`: *string* (hex data)
    - `operations`: array of *object*
      - `cost`: *string* (hex integer)
      - `memory`: *object*
        - `data`: *string* (hex data)
        - `offset`: *string* (hex integer)
      - `pc`: *string* (hex integer)
      - `push`: array of *string* (hex data)
      - `store`: *object*
        - `key`: *string* (hex data)
        - `value`: *string* (hex data)
      - `sub`: *object*
        <!--[circular ref]-->
      - `used`: *string* (hex integer)

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
  - `action`: *object*
    - `author`: *string* (address)
    - `callType`: *string*
    - `creationMethod`: *string*
    - `error`: *string*
    - `from`: *string* (address)
    - `gas`: *string* (hex integer)
    - `includeInTrace`: *boolean*
    - `input`: *string* (hex data)
    - `isPrecompiled`: *boolean*
    - `result`: *object*
      - `address`: *string* (address)
      - `code`: *string* (hex data)
      - `gasUsed`: *string* (hex integer)
      - `output`: *string* (hex data)
    - `rewardType`: *string*
    - `subtraces`: array of *object*
      <!--[circular ref]-->
    - `to`: *string* (address)
    - `traceAddress`: array of *string* (hex integer)
    - `type`: *string*
    - `value`: *string* (hex integer)
  - `blockHash`: *string* (hash)
  - `blockNumber`: *string* (hex integer)
  - `error`: *string*
  - `result`: *object*
    - `address`: *string* (address)
    - `code`: *string* (hex data)
    - `gasUsed`: *string* (hex integer)
    - `output`: *string* (hex data)
  - `subtraces`: *string* (hex integer)
  - `traceAddress`: array of *string* (hex integer)
  - `transactionHash`: *string* (hash)
  - `transactionPosition`: *string* (hex integer)
  - `type`: *string*

</TabItem>
</Tabs>

