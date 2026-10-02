---
title: trace namespace
sidebar_label: trace
sidebar_position: 12
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### trace_block

<Tabs>
<TabItem value="params" label="Parameters">

1. `numberOrTag`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)

2. `fork`: _string_


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
      "params": [numberOrTag, fork]
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
    - `traceAddress`: array of _integer_
    - `type`: _string_
    - `value`: _string_ (hex integer)
  - `blockHash`: _string_ (hash)
  - `blockNumber`: _integer_
  - `error`: _string_
  - `result`: _object_
    - `address`: _string_ (address)
    - `code`: _string_ (hex data)
    - `gasUsed`: _string_ (hex integer)
    - `output`: _string_ (hex data)
  - `subtraces`: _integer_
  - `traceAddress`: array of _integer_
  - `transactionHash`: _string_ (hash)
  - `transactionPosition`: _integer_
  - `type`: _string_

</TabItem>
</Tabs>

### trace_call

<Tabs>
<TabItem value="params" label="Parameters">

1. `call`: _object_
    - `blockHash`: _string_ (hash)
    - `blockNumber`: _string_ (hex integer)
    - `blockTimestamp`: _string_ (hex integer)
    - `gas`: _string_ (hex integer)
    - `hash`: _string_ (hash)
    - `transactionIndex`: _string_ (hex integer)
    - `type`: _string_ (transaction type)

2. `traceTypes`: array of _string_

3. `blockParameter`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)

4. `stateOverride`: map of _object_
  - `balance`: _string_ (hex integer)
  - `code`: _string_ (hex data)
  - `hasStateChanges`: _boolean_
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
    - `traceAddress`: array of _integer_
    - `type`: _string_
    - `value`: _string_ (hex integer)
  - `output`: _string_ (hex data)
  - `stateDiff`: map of _object_
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
      - `pc`: _integer_
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

1. `calls`: _object_
    - `calls`: array of _object_
      - `traceTypes`: array of _string_
      - `transaction`: _object_
        - `blockHash`: _string_ (hash)
        - `blockNumber`: _string_ (hex integer)
        - `blockTimestamp`: _string_ (hex integer)
        - `gas`: _string_ (hex integer)
        - `hash`: _string_ (hash)
        - `transactionIndex`: _string_ (hex integer)
        - `type`: _string_ (transaction type)

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
    - `traceAddress`: array of _integer_
    - `type`: _string_
    - `value`: _string_ (hex integer)
  - `output`: _string_ (hex data)
  - `stateDiff`: map of _object_
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
      - `pc`: _integer_
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
    - `after`: _integer_
    - `count`: _integer_
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
    - `traceAddress`: array of _integer_
    - `type`: _string_
    - `value`: _string_ (hex integer)
  - `blockHash`: _string_ (hash)
  - `blockNumber`: _integer_
  - `error`: _string_
  - `result`: _object_
    - `address`: _string_ (address)
    - `code`: _string_ (hex data)
    - `gasUsed`: _string_ (hex integer)
    - `output`: _string_ (hex data)
  - `subtraces`: _integer_
  - `traceAddress`: array of _integer_
  - `transactionHash`: _string_ (hash)
  - `transactionPosition`: _integer_
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
    - `traceAddress`: array of _integer_
    - `type`: _string_
    - `value`: _string_ (hex integer)
  - `blockHash`: _string_ (hash)
  - `blockNumber`: _integer_
  - `error`: _string_
  - `result`: _object_
    - `address`: _string_ (address)
    - `code`: _string_ (hex data)
    - `gasUsed`: _string_ (hex integer)
    - `output`: _string_ (hex data)
  - `subtraces`: _integer_
  - `traceAddress`: array of _integer_
  - `transactionHash`: _string_ (hash)
  - `transactionPosition`: _integer_
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
    - `traceAddress`: array of _integer_
    - `type`: _string_
    - `value`: _string_ (hex integer)
  - `output`: _string_ (hex data)
  - `stateDiff`: map of _object_
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
      - `pc`: _integer_
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
    - `traceAddress`: array of _integer_
    - `type`: _string_
    - `value`: _string_ (hex integer)
  - `output`: _string_ (hex data)
  - `stateDiff`: map of _object_
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
      - `pc`: _integer_
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

3. `traceNonCanonical`: _boolean_


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
      "params": [txHash, traceTypes, traceNonCanonical]
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
    - `traceAddress`: array of _integer_
    - `type`: _string_
    - `value`: _string_ (hex integer)
  - `output`: _string_ (hex data)
  - `stateDiff`: map of _object_
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
      - `pc`: _integer_
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
        - `blockTimestamp`: _string_ (hex integer)
        - `gas`: _string_ (hex integer)
        - `hash`: _string_ (hash)
        - `transactionIndex`: _string_ (hex integer)
        - `type`: _string_ (transaction type)
      - `stateOverrides`: map of _object_
        - `balance`: _string_ (hex integer)
        - `code`: _string_ (hex data)
        - `hasStateChanges`: _boolean_
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
  - `author`: _string_ (address)
  - `baseFeePerGas`: _string_ (hex integer)
  - `blobGasUsed`: _string_ (hex integer)
  - `blockAccessListHash`: _string_ (hash)
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
      - `traceAddress`: array of _integer_
      - `type`: _string_
      - `value`: _string_ (hex integer)
    - `blockHash`: _string_ (hash)
    - `blockNumber`: _integer_
    - `output`: _string_ (hex data)
    - `stateDiff`: map of _object_
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
    - `transactionPosition`: _integer_
    - `vmTrace`: _object_
      - `code`: _string_ (hex data)
      - `operations`: array of _object_
        - `cost`: _string_ (hex integer)
        - `memory`: _object_
          - `data`: _string_ (hex data)
          - `offset`: _string_ (hex integer)
        - `pc`: _integer_
        - `push`: array of _string_ (hex data)
        - `store`: _object_
          - `key`: _string_ (hex data)
          - `value`: _string_ (hex data)
        - `sub`: _object_
          <!--[circular ref]-->
        - `used`: _string_ (hex integer)
  - `difficulty`: _string_ (hex integer)
  - `excessBlobGas`: _string_ (hex integer)
  - `extraData`: _string_ (hex data)
  - `gasLimit`: _string_ (hex integer)
  - `gasUsed`: _string_ (hex integer)
  - `hash`: _string_ (hash)
  - `logsBloom`: _string_ (hex data)
  - `miner`: _string_ (address)
  - `mixHash`: _string_ (hash)
  - `nonce`: _string_ (8-byte hex data)
  - `number`: _string_ (hex integer)
  - `parentBeaconBlockRoot`: _string_ (hash)
  - `parentHash`: _string_ (hash)
  - `receiptsRoot`: _string_ (hash)
  - `requestsHash`: _string_ (hash)
  - `sha3Uncles`: _string_ (hash)
  - `signature`: _string_ (hex data)
  - `size`: _string_ (hex integer)
  - `slotNumber`: _string_ (hex integer)
  - `stateRoot`: _string_ (hash)
  - `step`: _integer_
  - `timestamp`: _string_ (hex integer)
  - `totalDifficulty`: _string_ (hex integer)
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
      - `traceAddress`: array of _integer_
      - `type`: _string_
      - `value`: _string_ (hex integer)
    - `blockHash`: _string_ (hash)
    - `blockNumber`: _integer_
    - `output`: _string_ (hex data)
    - `stateDiff`: map of _object_
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
    - `transactionPosition`: _integer_
    - `vmTrace`: _object_
      - `code`: _string_ (hex data)
      - `operations`: array of _object_
        - `cost`: _string_ (hex integer)
        - `memory`: _object_
          - `data`: _string_ (hex data)
          - `offset`: _string_ (hex integer)
        - `pc`: _integer_
        - `push`: array of _string_ (hex data)
        - `store`: _object_
          - `key`: _string_ (hex data)
          - `value`: _string_ (hex data)
        - `sub`: _object_
          <!--[circular ref]-->
        - `used`: _string_ (hex integer)
  - `transactions`: array of _object_
  - `transactionsRoot`: _string_ (hash)
  - `uncles`: array of _string_ (hash)
  - `withdrawals`: array of _object_
    - `address`: _string_ (address)
    - `amount`: _string_ (hex integer)
    - `index`: _string_ (hex integer)
    - `validatorIndex`: _string_ (hex integer)
  - `withdrawalsRoot`: _string_ (hash)

</TabItem>
</Tabs>

### trace_transaction

<Tabs>
<TabItem value="params" label="Parameters">

1. `txHash`: _string_ (hash)

2. `traceNonCanonical`: _boolean_


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
      "params": [txHash, traceNonCanonical]
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
    - `traceAddress`: array of _integer_
    - `type`: _string_
    - `value`: _string_ (hex integer)
  - `blockHash`: _string_ (hash)
  - `blockNumber`: _integer_
  - `error`: _string_
  - `result`: _object_
    - `address`: _string_ (address)
    - `code`: _string_ (hex data)
    - `gasUsed`: _string_ (hex integer)
    - `output`: _string_ (hex data)
  - `subtraces`: _integer_
  - `traceAddress`: array of _integer_
  - `transactionHash`: _string_ (hash)
  - `transactionPosition`: _integer_
  - `type`: _string_

</TabItem>
</Tabs>

