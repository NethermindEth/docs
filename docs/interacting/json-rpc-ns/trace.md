---
title: trace namespace
sidebar_label: trace
sidebar_position: 11
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### trace_block

<Tabs>
<TabItem value="params" label="Parameters">

1. `numberOrTag`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)


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

`result`: array of _object_
  - `action`: _object_
    - `author`: _string_ (address)
    - `callType`: _string_
    - `creationMethod`: _string_
    - `error`: _string_
    - `from`: _string_ (address)
    - `gas`: _string_ (hex integer)
    - `includeInTrace`: _boolean_
    - `input`: _string_ (hex data)
    - `isPrecompiled`: _boolean_
    - `result`: _object_
      - `address`: _string_ (address)
      - `code`: _string_ (hex data)
      - `gasUsed`: _string_ (hex integer)
      - `output`: _string_ (hex data)
    - `rewardType`: _string_
    - `subtraces`: array of _object_
      <!--[circular ref]-->
    - `to`: _string_ (address)
    - `traceAddress`: array of _string_ (hex integer)
    - `type`: _string_
    - `value`: _string_ (hex integer)
  - `blockHash`: _string_ (hash)
  - `blockNumber`: _string_ (hex integer)
  - `error`: _string_
  - `result`: _object_
    - `address`: _string_ (address)
    - `code`: _string_ (hex data)
    - `gasUsed`: _string_ (hex integer)
    - `output`: _string_ (hex data)
  - `subtraces`: _string_ (hex integer)
  - `traceAddress`: array of _string_ (hex integer)
  - `transactionHash`: _string_ (hash)
  - `transactionPosition`: _string_ (hex integer)
  - `type`: _string_

</TabItem>
</Tabs>

### trace_call

<Tabs>
<TabItem value="params" label="Parameters">

1. `call`: _object_
    - `blockHash`: _string_ (hash)
    - `blockNumber`: _string_ (hex integer)
    - `gas`: _string_ (hex integer)
    - `hash`: _string_ (hash)
    - `transactionIndex`: _string_ (hex integer)
    - `type`: _integer_

2. `traceTypes`: array of _string_

3. `blockParameter`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)

4. `stateOverride`: map of _object_
  - `balance`: _string_ (hex integer)
  - `code`: _string_ (hex data)
  - `movePrecompileToAddress`: _string_ (address)
  - `nonce`: _string_ (hex integer)
  - `state`: map of _string_ (hash)
  - `stateDiff`: map of _string_ (hash)


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
      "params": [call, traceTypes, blockParameter, stateOverride]
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
  - `action`: _object_
    - `author`: _string_ (address)
    - `callType`: _string_
    - `creationMethod`: _string_
    - `error`: _string_
    - `from`: _string_ (address)
    - `gas`: _string_ (hex integer)
    - `includeInTrace`: _boolean_
    - `input`: _string_ (hex data)
    - `isPrecompiled`: _boolean_
    - `result`: _object_
      - `address`: _string_ (address)
      - `code`: _string_ (hex data)
      - `gasUsed`: _string_ (hex integer)
      - `output`: _string_ (hex data)
    - `rewardType`: _string_
    - `subtraces`: array of _object_
      <!--[circular ref]-->
    - `to`: _string_ (address)
    - `traceAddress`: array of _string_ (hex integer)
    - `type`: _string_
    - `value`: _string_ (hex integer)
  - `output`: _string_ (hex data)
  - `stateChanges`: map of _object_
    - `balance`: _object_
      - `after`: _string_ (hex integer)
      - `before`: _string_ (hex integer)
    - `code`: _object_
      - `after`: _string_ (hex data)
      - `before`: _string_ (hex data)
    - `nonce`: _object_
      - `after`: _string_ (hex integer)
      - `before`: _string_ (hex integer)
    - `storage`: map of _object_
      - `after`: _string_ (hex data)
      - `before`: _string_ (hex data)
  - `transactionHash`: _string_ (hash)
  - `vmTrace`: _object_
    - `code`: _string_ (hex data)
    - `operations`: array of _object_
      - `cost`: _string_ (hex integer)
      - `memory`: _object_
        - `data`: _string_ (hex data)
        - `offset`: _string_ (hex integer)
      - `pc`: _string_ (hex integer)
      - `push`: array of _string_ (hex data)
      - `store`: _object_
        - `key`: _string_ (hex data)
        - `value`: _string_ (hex data)
      - `sub`: _object_
        <!--[circular ref]-->
      - `used`: _string_ (hex integer)

</TabItem>
</Tabs>

### trace_callMany

Performs multiple traces on top of a block

<Tabs>
<TabItem value="params" label="Parameters">

1. `calls`: array of _object_
  - `traceTypes`: array of _string_
  - `transaction`: _object_
    - `blockHash`: _string_ (hash)
    - `blockNumber`: _string_ (hex integer)
    - `gas`: _string_ (hex integer)
    - `hash`: _string_ (hash)
    - `transactionIndex`: _string_ (hex integer)
    - `type`: _integer_

2. `blockParameter`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "trace_callMany",
      "params": [calls, blockParameter]
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

`result`: array of _object_
  - `action`: _object_
    - `author`: _string_ (address)
    - `callType`: _string_
    - `creationMethod`: _string_
    - `error`: _string_
    - `from`: _string_ (address)
    - `gas`: _string_ (hex integer)
    - `includeInTrace`: _boolean_
    - `input`: _string_ (hex data)
    - `isPrecompiled`: _boolean_
    - `result`: _object_
      - `address`: _string_ (address)
      - `code`: _string_ (hex data)
      - `gasUsed`: _string_ (hex integer)
      - `output`: _string_ (hex data)
    - `rewardType`: _string_
    - `subtraces`: array of _object_
      <!--[circular ref]-->
    - `to`: _string_ (address)
    - `traceAddress`: array of _string_ (hex integer)
    - `type`: _string_
    - `value`: _string_ (hex integer)
  - `output`: _string_ (hex data)
  - `stateChanges`: map of _object_
    - `balance`: _object_
      - `after`: _string_ (hex integer)
      - `before`: _string_ (hex integer)
    - `code`: _object_
      - `after`: _string_ (hex data)
      - `before`: _string_ (hex data)
    - `nonce`: _object_
      - `after`: _string_ (hex integer)
      - `before`: _string_ (hex integer)
    - `storage`: map of _object_
      - `after`: _string_ (hex data)
      - `before`: _string_ (hex data)
  - `transactionHash`: _string_ (hash)
  - `vmTrace`: _object_
    - `code`: _string_ (hex data)
    - `operations`: array of _object_
      - `cost`: _string_ (hex integer)
      - `memory`: _object_
        - `data`: _string_ (hex data)
        - `offset`: _string_ (hex integer)
      - `pc`: _string_ (hex integer)
      - `push`: array of _string_ (hex data)
      - `store`: _object_
        - `key`: _string_ (hex data)
        - `value`: _string_ (hex data)
      - `sub`: _object_
        <!--[circular ref]-->
      - `used`: _string_ (hex integer)

</TabItem>
</Tabs>

### trace_filter

<Tabs>
<TabItem value="params" label="Parameters">

1. `traceFilterForRpc`: _object_
    - `after`: _string_ (hex integer)
    - `count`: _string_ (hex integer)
    - `fromAddress`: array of _string_ (address)
    - `fromBlock`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)
    - `toAddress`: array of _string_ (address)
    - `toBlock`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)


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

`result`: array of _object_
  - `action`: _object_
    - `author`: _string_ (address)
    - `callType`: _string_
    - `creationMethod`: _string_
    - `error`: _string_
    - `from`: _string_ (address)
    - `gas`: _string_ (hex integer)
    - `includeInTrace`: _boolean_
    - `input`: _string_ (hex data)
    - `isPrecompiled`: _boolean_
    - `result`: _object_
      - `address`: _string_ (address)
      - `code`: _string_ (hex data)
      - `gasUsed`: _string_ (hex integer)
      - `output`: _string_ (hex data)
    - `rewardType`: _string_
    - `subtraces`: array of _object_
      <!--[circular ref]-->
    - `to`: _string_ (address)
    - `traceAddress`: array of _string_ (hex integer)
    - `type`: _string_
    - `value`: _string_ (hex integer)
  - `blockHash`: _string_ (hash)
  - `blockNumber`: _string_ (hex integer)
  - `error`: _string_
  - `result`: _object_
    - `address`: _string_ (address)
    - `code`: _string_ (hex data)
    - `gasUsed`: _string_ (hex integer)
    - `output`: _string_ (hex data)
  - `subtraces`: _string_ (hex integer)
  - `traceAddress`: array of _string_ (hex integer)
  - `transactionHash`: _string_ (hash)
  - `transactionPosition`: _string_ (hex integer)
  - `type`: _string_

</TabItem>
</Tabs>

### trace_get

Returns trace at given position.

<Tabs>
<TabItem value="params" label="Parameters">

1. `txHash`: _string_ (hash)

2. `positions`: array of _string_ (hex integer)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "trace_get",
      "params": [txHash, positions]
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

`result`: array of _object_
  - `action`: _object_
    - `author`: _string_ (address)
    - `callType`: _string_
    - `creationMethod`: _string_
    - `error`: _string_
    - `from`: _string_ (address)
    - `gas`: _string_ (hex integer)
    - `includeInTrace`: _boolean_
    - `input`: _string_ (hex data)
    - `isPrecompiled`: _boolean_
    - `result`: _object_
      - `address`: _string_ (address)
      - `code`: _string_ (hex data)
      - `gasUsed`: _string_ (hex integer)
      - `output`: _string_ (hex data)
    - `rewardType`: _string_
    - `subtraces`: array of _object_
      <!--[circular ref]-->
    - `to`: _string_ (address)
    - `traceAddress`: array of _string_ (hex integer)
    - `type`: _string_
    - `value`: _string_ (hex integer)
  - `blockHash`: _string_ (hash)
  - `blockNumber`: _string_ (hex integer)
  - `error`: _string_
  - `result`: _object_
    - `address`: _string_ (address)
    - `code`: _string_ (hex data)
    - `gasUsed`: _string_ (hex integer)
    - `output`: _string_ (hex data)
  - `subtraces`: _string_ (hex integer)
  - `traceAddress`: array of _string_ (hex integer)
  - `transactionHash`: _string_ (hash)
  - `transactionPosition`: _string_ (hex integer)
  - `type`: _string_

</TabItem>
</Tabs>

### trace_rawTransaction

Traces a call to eth_sendRawTransaction without making the call, returning the traces

<Tabs>
<TabItem value="params" label="Parameters">

1. `data`: _string_ (hex data)

2. `traceTypes`: array of _string_


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

`result`: _object_
  - `action`: _object_
    - `author`: _string_ (address)
    - `callType`: _string_
    - `creationMethod`: _string_
    - `error`: _string_
    - `from`: _string_ (address)
    - `gas`: _string_ (hex integer)
    - `includeInTrace`: _boolean_
    - `input`: _string_ (hex data)
    - `isPrecompiled`: _boolean_
    - `result`: _object_
      - `address`: _string_ (address)
      - `code`: _string_ (hex data)
      - `gasUsed`: _string_ (hex integer)
      - `output`: _string_ (hex data)
    - `rewardType`: _string_
    - `subtraces`: array of _object_
      <!--[circular ref]-->
    - `to`: _string_ (address)
    - `traceAddress`: array of _string_ (hex integer)
    - `type`: _string_
    - `value`: _string_ (hex integer)
  - `output`: _string_ (hex data)
  - `stateChanges`: map of _object_
    - `balance`: _object_
      - `after`: _string_ (hex integer)
      - `before`: _string_ (hex integer)
    - `code`: _object_
      - `after`: _string_ (hex data)
      - `before`: _string_ (hex data)
    - `nonce`: _object_
      - `after`: _string_ (hex integer)
      - `before`: _string_ (hex integer)
    - `storage`: map of _object_
      - `after`: _string_ (hex data)
      - `before`: _string_ (hex data)
  - `transactionHash`: _string_ (hash)
  - `vmTrace`: _object_
    - `code`: _string_ (hex data)
    - `operations`: array of _object_
      - `cost`: _string_ (hex integer)
      - `memory`: _object_
        - `data`: _string_ (hex data)
        - `offset`: _string_ (hex integer)
      - `pc`: _string_ (hex integer)
      - `push`: array of _string_ (hex data)
      - `store`: _object_
        - `key`: _string_ (hex data)
        - `value`: _string_ (hex data)
      - `sub`: _object_
        <!--[circular ref]-->
      - `used`: _string_ (hex integer)

</TabItem>
</Tabs>

### trace_replayBlockTransactions

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockParameter`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)

2. `traceTypes`: array of _string_


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

`result`: array of _object_
  - `action`: _object_
    - `author`: _string_ (address)
    - `callType`: _string_
    - `creationMethod`: _string_
    - `error`: _string_
    - `from`: _string_ (address)
    - `gas`: _string_ (hex integer)
    - `includeInTrace`: _boolean_
    - `input`: _string_ (hex data)
    - `isPrecompiled`: _boolean_
    - `result`: _object_
      - `address`: _string_ (address)
      - `code`: _string_ (hex data)
      - `gasUsed`: _string_ (hex integer)
      - `output`: _string_ (hex data)
    - `rewardType`: _string_
    - `subtraces`: array of _object_
      <!--[circular ref]-->
    - `to`: _string_ (address)
    - `traceAddress`: array of _string_ (hex integer)
    - `type`: _string_
    - `value`: _string_ (hex integer)
  - `output`: _string_ (hex data)
  - `stateChanges`: map of _object_
    - `balance`: _object_
      - `after`: _string_ (hex integer)
      - `before`: _string_ (hex integer)
    - `code`: _object_
      - `after`: _string_ (hex data)
      - `before`: _string_ (hex data)
    - `nonce`: _object_
      - `after`: _string_ (hex integer)
      - `before`: _string_ (hex integer)
    - `storage`: map of _object_
      - `after`: _string_ (hex data)
      - `before`: _string_ (hex data)
  - `transactionHash`: _string_ (hash)
  - `vmTrace`: _object_
    - `code`: _string_ (hex data)
    - `operations`: array of _object_
      - `cost`: _string_ (hex integer)
      - `memory`: _object_
        - `data`: _string_ (hex data)
        - `offset`: _string_ (hex integer)
      - `pc`: _string_ (hex integer)
      - `push`: array of _string_ (hex data)
      - `store`: _object_
        - `key`: _string_ (hex data)
        - `value`: _string_ (hex data)
      - `sub`: _object_
        <!--[circular ref]-->
      - `used`: _string_ (hex integer)

</TabItem>
</Tabs>

### trace_replayTransaction

<Tabs>
<TabItem value="params" label="Parameters">

1. `txHash`: _string_ (hash)

2. `traceTypes`: array of _string_


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

`result`: _object_
  - `action`: _object_
    - `author`: _string_ (address)
    - `callType`: _string_
    - `creationMethod`: _string_
    - `error`: _string_
    - `from`: _string_ (address)
    - `gas`: _string_ (hex integer)
    - `includeInTrace`: _boolean_
    - `input`: _string_ (hex data)
    - `isPrecompiled`: _boolean_
    - `result`: _object_
      - `address`: _string_ (address)
      - `code`: _string_ (hex data)
      - `gasUsed`: _string_ (hex integer)
      - `output`: _string_ (hex data)
    - `rewardType`: _string_
    - `subtraces`: array of _object_
      <!--[circular ref]-->
    - `to`: _string_ (address)
    - `traceAddress`: array of _string_ (hex integer)
    - `type`: _string_
    - `value`: _string_ (hex integer)
  - `output`: _string_ (hex data)
  - `stateChanges`: map of _object_
    - `balance`: _object_
      - `after`: _string_ (hex integer)
      - `before`: _string_ (hex integer)
    - `code`: _object_
      - `after`: _string_ (hex data)
      - `before`: _string_ (hex data)
    - `nonce`: _object_
      - `after`: _string_ (hex integer)
      - `before`: _string_ (hex integer)
    - `storage`: map of _object_
      - `after`: _string_ (hex data)
      - `before`: _string_ (hex data)
  - `transactionHash`: _string_ (hash)
  - `vmTrace`: _object_
    - `code`: _string_ (hex data)
    - `operations`: array of _object_
      - `cost`: _string_ (hex integer)
      - `memory`: _object_
        - `data`: _string_ (hex data)
        - `offset`: _string_ (hex integer)
      - `pc`: _string_ (hex integer)
      - `push`: array of _string_ (hex data)
      - `store`: _object_
        - `key`: _string_ (hex data)
        - `value`: _string_ (hex data)
      - `sub`: _object_
        <!--[circular ref]-->
      - `used`: _string_ (hex integer)

</TabItem>
</Tabs>

### trace_simulateV1

Returns parity like traces for simulated blocks

<Tabs>
<TabItem value="params" label="Parameters">

1. `payload`: _object_
    - `blockStateCalls`: array of _object_
      - `blockOverrides`: _object_
        - `baseFeePerGas`: _string_ (hex integer)
        - `blobBaseFee`: _string_ (hex integer)
        - `feeRecipient`: _string_ (address)
        - `gasLimit`: _string_ (hex integer)
        - `number`: _string_ (hex integer)
        - `prevRandao`: _string_ (hash)
        - `time`: _string_ (hex integer)
      - `calls`: array of _object_
        - `blockHash`: _string_ (hash)
        - `blockNumber`: _string_ (hex integer)
        - `gas`: _string_ (hex integer)
        - `hash`: _string_ (hash)
        - `transactionIndex`: _string_ (hex integer)
        - `type`: _integer_
      - `stateOverrides`: map of _object_
        - `balance`: _string_ (hex integer)
        - `code`: _string_ (hex data)
        - `movePrecompileToAddress`: _string_ (address)
        - `nonce`: _string_ (hex integer)
        - `state`: map of _string_ (hash)
        - `stateDiff`: map of _string_ (hash)
    - `returnFullTransactionObjects`: _boolean_
    - `returnFullTransactions`: _boolean_
    - `traceTransfers`: _boolean_
    - `validation`: _boolean_

2. `blockParameter`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)

3. `traceTypes`: array of _string_


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "trace_simulateV1",
      "params": [payload, blockParameter, traceTypes]
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

`result`: array of _object_
  - `calls`: array of _object_
    - `action`: _object_
      - `author`: _string_ (address)
      - `callType`: _string_
      - `creationMethod`: _string_
      - `error`: _string_
      - `from`: _string_ (address)
      - `gas`: _string_ (hex integer)
      - `includeInTrace`: _boolean_
      - `input`: _string_ (hex data)
      - `isPrecompiled`: _boolean_
      - `result`: _object_
        - `address`: _string_ (address)
        - `code`: _string_ (hex data)
        - `gasUsed`: _string_ (hex integer)
        - `output`: _string_ (hex data)
      - `rewardType`: _string_
      - `subtraces`: array of _object_
        <!--[circular ref]-->
      - `to`: _string_ (address)
      - `traceAddress`: array of _string_ (hex integer)
      - `type`: _string_
      - `value`: _string_ (hex integer)
    - `blockHash`: _string_ (hash)
    - `blockNumber`: _string_ (hex integer)
    - `output`: _string_ (hex data)
    - `stateChanges`: map of _object_
      - `balance`: _object_
        - `after`: _string_ (hex integer)
        - `before`: _string_ (hex integer)
      - `code`: _object_
        - `after`: _string_ (hex data)
        - `before`: _string_ (hex data)
      - `nonce`: _object_
        - `after`: _string_ (hex integer)
        - `before`: _string_ (hex integer)
      - `storage`: map of _object_
        - `after`: _string_ (hex data)
        - `before`: _string_ (hex data)
    - `transactionHash`: _string_ (hash)
    - `transactionPosition`: _string_ (hex integer)
    - `vmTrace`: _object_
      - `code`: _string_ (hex data)
      - `operations`: array of _object_
        - `cost`: _string_ (hex integer)
        - `memory`: _object_
          - `data`: _string_ (hex data)
          - `offset`: _string_ (hex integer)
        - `pc`: _string_ (hex integer)
        - `push`: array of _string_ (hex data)
        - `store`: _object_
          - `key`: _string_ (hex data)
          - `value`: _string_ (hex data)
        - `sub`: _object_
          <!--[circular ref]-->
        - `used`: _string_ (hex integer)
  - `traces`: array of _object_
    - `action`: _object_
      - `author`: _string_ (address)
      - `callType`: _string_
      - `creationMethod`: _string_
      - `error`: _string_
      - `from`: _string_ (address)
      - `gas`: _string_ (hex integer)
      - `includeInTrace`: _boolean_
      - `input`: _string_ (hex data)
      - `isPrecompiled`: _boolean_
      - `result`: _object_
        - `address`: _string_ (address)
        - `code`: _string_ (hex data)
        - `gasUsed`: _string_ (hex integer)
        - `output`: _string_ (hex data)
      - `rewardType`: _string_
      - `subtraces`: array of _object_
        <!--[circular ref]-->
      - `to`: _string_ (address)
      - `traceAddress`: array of _string_ (hex integer)
      - `type`: _string_
      - `value`: _string_ (hex integer)
    - `blockHash`: _string_ (hash)
    - `blockNumber`: _string_ (hex integer)
    - `output`: _string_ (hex data)
    - `stateChanges`: map of _object_
      - `balance`: _object_
        - `after`: _string_ (hex integer)
        - `before`: _string_ (hex integer)
      - `code`: _object_
        - `after`: _string_ (hex data)
        - `before`: _string_ (hex data)
      - `nonce`: _object_
        - `after`: _string_ (hex integer)
        - `before`: _string_ (hex integer)
      - `storage`: map of _object_
        - `after`: _string_ (hex data)
        - `before`: _string_ (hex data)
    - `transactionHash`: _string_ (hash)
    - `transactionPosition`: _string_ (hex integer)
    - `vmTrace`: _object_
      - `code`: _string_ (hex data)
      - `operations`: array of _object_
        - `cost`: _string_ (hex integer)
        - `memory`: _object_
          - `data`: _string_ (hex data)
          - `offset`: _string_ (hex integer)
        - `pc`: _string_ (hex integer)
        - `push`: array of _string_ (hex data)
        - `store`: _object_
          - `key`: _string_ (hex data)
          - `value`: _string_ (hex data)
        - `sub`: _object_
          <!--[circular ref]-->
        - `used`: _string_ (hex integer)

</TabItem>
</Tabs>

### trace_transaction

<Tabs>
<TabItem value="params" label="Parameters">

1. `txHash`: _string_ (hash)


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

`result`: array of _object_
  - `action`: _object_
    - `author`: _string_ (address)
    - `callType`: _string_
    - `creationMethod`: _string_
    - `error`: _string_
    - `from`: _string_ (address)
    - `gas`: _string_ (hex integer)
    - `includeInTrace`: _boolean_
    - `input`: _string_ (hex data)
    - `isPrecompiled`: _boolean_
    - `result`: _object_
      - `address`: _string_ (address)
      - `code`: _string_ (hex data)
      - `gasUsed`: _string_ (hex integer)
      - `output`: _string_ (hex data)
    - `rewardType`: _string_
    - `subtraces`: array of _object_
      <!--[circular ref]-->
    - `to`: _string_ (address)
    - `traceAddress`: array of _string_ (hex integer)
    - `type`: _string_
    - `value`: _string_ (hex integer)
  - `blockHash`: _string_ (hash)
  - `blockNumber`: _string_ (hex integer)
  - `error`: _string_
  - `result`: _object_
    - `address`: _string_ (address)
    - `code`: _string_ (hex data)
    - `gasUsed`: _string_ (hex integer)
    - `output`: _string_ (hex data)
  - `subtraces`: _string_ (hex integer)
  - `traceAddress`: array of _string_ (hex integer)
  - `transactionHash`: _string_ (hash)
  - `transactionPosition`: _string_ (hex integer)
  - `type`: _string_

</TabItem>
</Tabs>

