---
title: debug namespace
sidebar_label: debug
sidebar_position: 2
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### debug_deleteChainSlice

Deletes a slice of a chain from the tree on all branches (Nethermind specific).

<Tabs>
<TabItem value="params" label="Parameters">

1. `startNumber`: _string_ (hex integer)

2. `force`: _boolean_


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "debug_deleteChainSlice",
      "params": [startNumber, force]
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

`result`: _string_ (hex integer)

</TabItem>
</Tabs>

### debug_getBadBlocks

Return list of invalid blocks.

<Tabs>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "debug_getBadBlocks",
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

`result`: array of _object_
  - `block`: _object_
    - `author`: _string_ (address)
    - `baseFeePerGas`: _string_ (hex integer)
    - `blobGasUsed`: _string_ (hex integer)
    - `difficulty`: _string_ (hex integer)
    - `excessBlobGas`: _string_ (hex integer)
    - `extraData`: _string_ (hex data)
    - `gasLimit`: _string_ (hex integer)
    - `gasUsed`: _string_ (hex integer)
    - `hash`: _string_ (hash)
    - `logsBloom`: _string_ (hex data)
    - `miner`: _string_ (address)
    - `mixHash`: _string_ (hash)
    - `nonce`: _string_ (hex data)
    - `number`: _string_ (hex integer)
    - `parentBeaconBlockRoot`: _string_ (hash)
    - `parentHash`: _string_ (hash)
    - `receiptsRoot`: _string_ (hash)
    - `requestsHash`: _string_ (hash)
    - `sha3Uncles`: _string_ (hash)
    - `signature`: _string_ (hex data)
    - `size`: _string_ (hex integer)
    - `stateRoot`: _string_ (hash)
    - `step`: _string_ (hex integer)
    - `timestamp`: _string_ (hex integer)
    - `totalDifficulty`: _string_ (hex integer)
    - `transactions`: array of _object_
    - `transactionsRoot`: _string_ (hash)
    - `uncles`: array of _string_ (hash)
    - `withdrawals`: array of _object_
      - `address`: _string_ (address)
      - `amountInGwei`: _string_ (hex integer)
      - `amountInWei`: _string_ (hex integer)
      - `index`: _string_ (hex integer)
      - `validatorIndex`: _string_ (hex integer)
    - `withdrawalsRoot`: _string_ (hash)
  - `hash`: _string_ (hash)
  - `rlp`: _string_ (hex data)

</TabItem>
</Tabs>

### debug_getBlockRlp

Retrieves a block in the RLP-serialized form.

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
      "method": "debug_getBlockRlp",
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

`result`: _string_ (hex data)

</TabItem>
</Tabs>

### debug_getBlockRlpByHash

Retrieves a block in the RLP-serialized form.

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
      "method": "debug_getBlockRlpByHash",
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

### debug_getChainLevel

Retrieves a representation of tree branches on a given chain level (Nethermind specific).

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
      "method": "debug_getChainLevel",
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
  - `blockInfos`: array of _object_
    - `blockHash`: _string_ (hash)
    - `isFinalized`: _boolean_
    - `totalDifficulty`: _string_ (hex integer)
    - `wasProcessed`: _boolean_
  - `hasBlockOnMainChain`: _boolean_

</TabItem>
</Tabs>

### debug_getConfigValue

Retrieves the Nethermind configuration value, e.g. JsonRpc.Enabled

<Tabs>
<TabItem value="params" label="Parameters">

1. `category`: _string_

2. `name`: _string_


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "debug_getConfigValue",
      "params": [category, name]
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

</TabItem>
</Tabs>

### debug_getRawBlock

Get Raw Block format.

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockParameter`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "debug_getRawBlock",
      "params": [blockParameter]
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

### debug_getRawHeader

Get Raw Header format.

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockParameter`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "debug_getRawHeader",
      "params": [blockParameter]
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

### debug_getRawReceipts

Get Raw Receipt format.

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockParameter`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "debug_getRawReceipts",
      "params": [blockParameter]
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

`result`: array of _string_ (hex data)

</TabItem>
</Tabs>

### debug_getRawTransaction

Get Raw Transaction format.

<Tabs>
<TabItem value="params" label="Parameters">

1. `transactionHash`: _string_ (hash)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "debug_getRawTransaction",
      "params": [transactionHash]
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

`result`: _string_

</TabItem>
</Tabs>

### debug_getSyncStage

Retrives Nethermind Sync Stage, With extra Metadata

<Tabs>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "debug_getSyncStage",
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
  - `currentStage`: _string_

</TabItem>
</Tabs>

### debug_insertReceipts

Insert receipts for the block after verifying receipts root correctness.

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockParameter`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)

2. `receiptForRpc`: array of _object_
  - `blobGasPrice`: _string_ (hex integer)
  - `blobGasUsed`: _string_ (hex integer)
  - `blockHash`: _string_ (hash)
  - `blockNumber`: _string_ (hex integer)
  - `contractAddress`: _string_ (address)
  - `cumulativeGasUsed`: _string_ (hex integer)
  - `effectiveGasPrice`: _string_ (hex integer)
  - `error`: _string_
  - `from`: _string_ (address)
  - `gasUsed`: _string_ (hex integer)
  - `logs`: array of _object_
    - `address`: _string_ (address)
    - `blockHash`: _string_ (hash)
    - `blockNumber`: _string_ (hex integer)
    - `data`: _string_ (hex data)
    - `logIndex`: _string_ (hex integer)
    - `removed`: _boolean_
    - `topics`: array of _string_ (hash)
    - `transactionHash`: _string_ (hash)
    - `transactionIndex`: _string_ (hex integer)
  - `logsBloom`: _string_ (hex data)
  - `root`: _string_ (hash)
  - `status`: _string_ (hex integer)
  - `to`: _string_ (address)
  - `transactionHash`: _string_ (hash)
  - `transactionIndex`: _string_ (hex integer)
  - `type`: _integer_


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "debug_insertReceipts",
      "params": [blockParameter, receiptForRpc]
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

### debug_migrateReceipts

Sets the block number up to which receipts will be migrated to (Nethermind specific).

<Tabs>
<TabItem value="params" label="Parameters">

1. `from`: _string_ (hex integer)

2. `to`: _string_ (hex integer)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "debug_migrateReceipts",
      "params": [from, to]
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

### debug_resetHead

Updates / resets head block - use only when the node got stuck due to DB / memory corruption (Nethermind specific).

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockHash`: _string_ (hash)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "debug_resetHead",
      "params": [blockHash]
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

### debug_simulateV1

Retrieves geth like traces of the simulated blocks

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

3. `options`: _object_
    - `disableMemory`: _boolean_
    - `disableStack`: _boolean_
    - `disableStorage`: _boolean_
    - `enableMemory`: _boolean_
    - `stateOverrides`: map of _object_
      - `balance`: _string_ (hex integer)
      - `code`: _string_ (hex data)
      - `movePrecompileToAddress`: _string_ (address)
      - `nonce`: _string_ (hex integer)
      - `state`: map of _string_ (hash)
      - `stateDiff`: map of _string_ (hash)
    - `timeout`: _string_
    - `tracer`: _string_
    - `tracerConfig`: _object_
      - `hasValue`: _boolean_
      - `value`: _object_
        - `item`: _object_
          <!--[circular ref]-->
        - `valueKind`: _integer_
    - `txHash`: _string_ (hash)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "debug_simulateV1",
      "params": [payload, blockParameter, options]
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
    - `customTracerResult`: _object_
      - `value`: _object_
    - `entries`: array of _object_
      - `depth`: _string_ (hex integer)
      - `error`: _string_
      - `gas`: _string_ (hex integer)
      - `gasCost`: _string_ (hex integer)
      - `memory`: array of _string_
      - `opcode`: _string_
      - `programCounter`: _string_ (hex integer)
      - `stack`: array of _string_
      - `storage`: map of _string_
    - `failed`: _boolean_
    - `gas`: _string_ (hex integer)
    - `returnValue`: _string_ (hex data)
    - `storagesByDepth`: array of map of _string_
    - `txHash`: _string_ (hash)
  - `traces`: array of _object_
    - `customTracerResult`: _object_
      - `value`: _object_
    - `entries`: array of _object_
      - `depth`: _string_ (hex integer)
      - `error`: _string_
      - `gas`: _string_ (hex integer)
      - `gasCost`: _string_ (hex integer)
      - `memory`: array of _string_
      - `opcode`: _string_
      - `programCounter`: _string_ (hex integer)
      - `stack`: array of _string_
      - `storage`: map of _string_
    - `failed`: _boolean_
    - `gas`: _string_ (hex integer)
    - `returnValue`: _string_ (hex data)
    - `storagesByDepth`: array of map of _string_
    - `txHash`: _string_ (hash)

</TabItem>
</Tabs>

### debug_standardTraceBadBlockToFile

This method is similar to the `debug_standardTraceBlockToFile` method, but can be used to obtain information about a block that has been rejected as invalid.

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockHash`: _string_ (hash)

2. `options`: _object_
    - `disableMemory`: _boolean_
    - `disableStack`: _boolean_
    - `disableStorage`: _boolean_
    - `enableMemory`: _boolean_
    - `stateOverrides`: map of _object_
      - `balance`: _string_ (hex integer)
      - `code`: _string_ (hex data)
      - `movePrecompileToAddress`: _string_ (address)
      - `nonce`: _string_ (hex integer)
      - `state`: map of _string_ (hash)
      - `stateDiff`: map of _string_ (hash)
    - `timeout`: _string_
    - `tracer`: _string_
    - `tracerConfig`: _object_
      - `hasValue`: _boolean_
      - `value`: _object_
        - `item`: _object_
          <!--[circular ref]-->
        - `valueKind`: _integer_
    - `txHash`: _string_ (hash)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "debug_standardTraceBadBlockToFile",
      "params": [blockHash, options]
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

### debug_standardTraceBlockToFile

Writes to a file the full stack trace of all invoked opcodes of the transaction specified (or all transactions if not specified) that was included in the block specified. The parent of the block must be present or it will fail.

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockHash`: _string_ (hash)

2. `options`: _object_
    - `disableMemory`: _boolean_
    - `disableStack`: _boolean_
    - `disableStorage`: _boolean_
    - `enableMemory`: _boolean_
    - `stateOverrides`: map of _object_
      - `balance`: _string_ (hex integer)
      - `code`: _string_ (hex data)
      - `movePrecompileToAddress`: _string_ (address)
      - `nonce`: _string_ (hex integer)
      - `state`: map of _string_ (hash)
      - `stateDiff`: map of _string_ (hash)
    - `timeout`: _string_
    - `tracer`: _string_
    - `tracerConfig`: _object_
      - `hasValue`: _boolean_
      - `value`: _object_
        - `item`: _object_
          <!--[circular ref]-->
        - `valueKind`: _integer_
    - `txHash`: _string_ (hash)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "debug_standardTraceBlockToFile",
      "params": [blockHash, options]
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

### debug_traceBlock

Returns the full stack trace of all invoked opcodes of all transactions that were included in the block specified. The parent of the block must be present or it will fail.

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockRlp`: _string_ (hex data)

2. `options`: _object_
    - `disableMemory`: _boolean_
    - `disableStack`: _boolean_
    - `disableStorage`: _boolean_
    - `enableMemory`: _boolean_
    - `stateOverrides`: map of _object_
      - `balance`: _string_ (hex integer)
      - `code`: _string_ (hex data)
      - `movePrecompileToAddress`: _string_ (address)
      - `nonce`: _string_ (hex integer)
      - `state`: map of _string_ (hash)
      - `stateDiff`: map of _string_ (hash)
    - `timeout`: _string_
    - `tracer`: _string_
    - `tracerConfig`: _object_
      - `hasValue`: _boolean_
      - `value`: _object_
        - `item`: _object_
          <!--[circular ref]-->
        - `valueKind`: _integer_
    - `txHash`: _string_ (hash)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "debug_traceBlock",
      "params": [blockRlp, options]
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
  - `customTracerResult`: _object_
    - `value`: _object_
  - `entries`: array of _object_
    - `depth`: _string_ (hex integer)
    - `error`: _string_
    - `gas`: _string_ (hex integer)
    - `gasCost`: _string_ (hex integer)
    - `memory`: array of _string_
    - `opcode`: _string_
    - `programCounter`: _string_ (hex integer)
    - `stack`: array of _string_
    - `storage`: map of _string_
  - `failed`: _boolean_
  - `gas`: _string_ (hex integer)
  - `returnValue`: _string_ (hex data)
  - `storagesByDepth`: array of map of _string_
  - `txHash`: _string_ (hash)

</TabItem>
</Tabs>

### debug_traceBlockByHash

Similar to debug_traceBlock, this method accepts a block hash and replays the block that is already present in the database.

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockHash`: _string_ (hash)

2. `options`: _object_
    - `disableMemory`: _boolean_
    - `disableStack`: _boolean_
    - `disableStorage`: _boolean_
    - `enableMemory`: _boolean_
    - `stateOverrides`: map of _object_
      - `balance`: _string_ (hex integer)
      - `code`: _string_ (hex data)
      - `movePrecompileToAddress`: _string_ (address)
      - `nonce`: _string_ (hex integer)
      - `state`: map of _string_ (hash)
      - `stateDiff`: map of _string_ (hash)
    - `timeout`: _string_
    - `tracer`: _string_
    - `tracerConfig`: _object_
      - `hasValue`: _boolean_
      - `value`: _object_
        - `item`: _object_
          <!--[circular ref]-->
        - `valueKind`: _integer_
    - `txHash`: _string_ (hash)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "debug_traceBlockByHash",
      "params": [blockHash, options]
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
  - `customTracerResult`: _object_
    - `value`: _object_
  - `entries`: array of _object_
    - `depth`: _string_ (hex integer)
    - `error`: _string_
    - `gas`: _string_ (hex integer)
    - `gasCost`: _string_ (hex integer)
    - `memory`: array of _string_
    - `opcode`: _string_
    - `programCounter`: _string_ (hex integer)
    - `stack`: array of _string_
    - `storage`: map of _string_
  - `failed`: _boolean_
  - `gas`: _string_ (hex integer)
  - `returnValue`: _string_ (hex data)
  - `storagesByDepth`: array of map of _string_
  - `txHash`: _string_ (hash)

</TabItem>
</Tabs>

### debug_traceBlockByNumber

Similar to debug_traceBlock, this method accepts a block number as well as "latest" or "finalized" and replays the block that is already present in the database.

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockParameter`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)

2. `options`: _object_
    - `disableMemory`: _boolean_
    - `disableStack`: _boolean_
    - `disableStorage`: _boolean_
    - `enableMemory`: _boolean_
    - `stateOverrides`: map of _object_
      - `balance`: _string_ (hex integer)
      - `code`: _string_ (hex data)
      - `movePrecompileToAddress`: _string_ (address)
      - `nonce`: _string_ (hex integer)
      - `state`: map of _string_ (hash)
      - `stateDiff`: map of _string_ (hash)
    - `timeout`: _string_
    - `tracer`: _string_
    - `tracerConfig`: _object_
      - `hasValue`: _boolean_
      - `value`: _object_
        - `item`: _object_
          <!--[circular ref]-->
        - `valueKind`: _integer_
    - `txHash`: _string_ (hash)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "debug_traceBlockByNumber",
      "params": [blockParameter, options]
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
  - `customTracerResult`: _object_
    - `value`: _object_
  - `entries`: array of _object_
    - `depth`: _string_ (hex integer)
    - `error`: _string_
    - `gas`: _string_ (hex integer)
    - `gasCost`: _string_ (hex integer)
    - `memory`: array of _string_
    - `opcode`: _string_
    - `programCounter`: _string_ (hex integer)
    - `stack`: array of _string_
    - `storage`: map of _string_
  - `failed`: _boolean_
  - `gas`: _string_ (hex integer)
  - `returnValue`: _string_ (hex data)
  - `storagesByDepth`: array of map of _string_
  - `txHash`: _string_ (hash)

</TabItem>
</Tabs>

### debug_traceCall

This method lets you run an eth_call within the context of the given block execution using the final state of parent block as the base. The block can be specified either by hash or by number. It takes the same input object as a eth_call. It returns the same output as debug_traceTransaction.

<Tabs>
<TabItem value="params" label="Parameters">

1. `call`: _object_
    - `blockHash`: _string_ (hash)
    - `blockNumber`: _string_ (hex integer)
    - `gas`: _string_ (hex integer)
    - `hash`: _string_ (hash)
    - `transactionIndex`: _string_ (hex integer)
    - `type`: _integer_

2. `blockParameter`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)

3. `options`: _object_
    - `disableMemory`: _boolean_
    - `disableStack`: _boolean_
    - `disableStorage`: _boolean_
    - `enableMemory`: _boolean_
    - `stateOverrides`: map of _object_
      - `balance`: _string_ (hex integer)
      - `code`: _string_ (hex data)
      - `movePrecompileToAddress`: _string_ (address)
      - `nonce`: _string_ (hex integer)
      - `state`: map of _string_ (hash)
      - `stateDiff`: map of _string_ (hash)
    - `timeout`: _string_
    - `tracer`: _string_
    - `tracerConfig`: _object_
      - `hasValue`: _boolean_
      - `value`: _object_
        - `item`: _object_
          <!--[circular ref]-->
        - `valueKind`: _integer_
    - `txHash`: _string_ (hash)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "debug_traceCall",
      "params": [call, blockParameter, options]
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
  - `customTracerResult`: _object_
    - `value`: _object_
  - `entries`: array of _object_
    - `depth`: _string_ (hex integer)
    - `error`: _string_
    - `gas`: _string_ (hex integer)
    - `gasCost`: _string_ (hex integer)
    - `memory`: array of _string_
    - `opcode`: _string_
    - `programCounter`: _string_ (hex integer)
    - `stack`: array of _string_
    - `storage`: map of _string_
  - `failed`: _boolean_
  - `gas`: _string_ (hex integer)
  - `returnValue`: _string_ (hex data)
  - `storagesByDepth`: array of map of _string_
  - `txHash`: _string_ (hash)

</TabItem>
</Tabs>

### debug_traceTransaction

This method will attempt to run the transaction in the exact same manner as it was executed on the network. It will replay any transaction that may have been executed prior to this one before it will finally attempt to execute the transaction that corresponds to the given hash.

<Tabs>
<TabItem value="params" label="Parameters">

1. `transactionHash`: _string_ (hash)

2. `options`: _object_
    - `disableMemory`: _boolean_
    - `disableStack`: _boolean_
    - `disableStorage`: _boolean_
    - `enableMemory`: _boolean_
    - `stateOverrides`: map of _object_
      - `balance`: _string_ (hex integer)
      - `code`: _string_ (hex data)
      - `movePrecompileToAddress`: _string_ (address)
      - `nonce`: _string_ (hex integer)
      - `state`: map of _string_ (hash)
      - `stateDiff`: map of _string_ (hash)
    - `timeout`: _string_
    - `tracer`: _string_
    - `tracerConfig`: _object_
      - `hasValue`: _boolean_
      - `value`: _object_
        - `item`: _object_
          <!--[circular ref]-->
        - `valueKind`: _integer_
    - `txHash`: _string_ (hash)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "debug_traceTransaction",
      "params": [transactionHash, options]
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
  - `customTracerResult`: _object_
    - `value`: _object_
  - `entries`: array of _object_
    - `depth`: _string_ (hex integer)
    - `error`: _string_
    - `gas`: _string_ (hex integer)
    - `gasCost`: _string_ (hex integer)
    - `memory`: array of _string_
    - `opcode`: _string_
    - `programCounter`: _string_ (hex integer)
    - `stack`: array of _string_
    - `storage`: map of _string_
  - `failed`: _boolean_
  - `gas`: _string_ (hex integer)
  - `returnValue`: _string_ (hex data)
  - `storagesByDepth`: array of map of _string_
  - `txHash`: _string_ (hash)

</TabItem>
</Tabs>

### debug_traceTransactionByBlockAndIndex

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockParameter`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)

2. `txIndex`: _string_ (hex integer)

3. `options`: _object_
    - `disableMemory`: _boolean_
    - `disableStack`: _boolean_
    - `disableStorage`: _boolean_
    - `enableMemory`: _boolean_
    - `stateOverrides`: map of _object_
      - `balance`: _string_ (hex integer)
      - `code`: _string_ (hex data)
      - `movePrecompileToAddress`: _string_ (address)
      - `nonce`: _string_ (hex integer)
      - `state`: map of _string_ (hash)
      - `stateDiff`: map of _string_ (hash)
    - `timeout`: _string_
    - `tracer`: _string_
    - `tracerConfig`: _object_
      - `hasValue`: _boolean_
      - `value`: _object_
        - `item`: _object_
          <!--[circular ref]-->
        - `valueKind`: _integer_
    - `txHash`: _string_ (hash)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "debug_traceTransactionByBlockAndIndex",
      "params": [blockParameter, txIndex, options]
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
  - `customTracerResult`: _object_
    - `value`: _object_
  - `entries`: array of _object_
    - `depth`: _string_ (hex integer)
    - `error`: _string_
    - `gas`: _string_ (hex integer)
    - `gasCost`: _string_ (hex integer)
    - `memory`: array of _string_
    - `opcode`: _string_
    - `programCounter`: _string_ (hex integer)
    - `stack`: array of _string_
    - `storage`: map of _string_
  - `failed`: _boolean_
  - `gas`: _string_ (hex integer)
  - `returnValue`: _string_ (hex data)
  - `storagesByDepth`: array of map of _string_
  - `txHash`: _string_ (hash)

</TabItem>
</Tabs>

### debug_traceTransactionByBlockhashAndIndex

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockHash`: _string_ (hash)

2. `txIndex`: _string_ (hex integer)

3. `options`: _object_
    - `disableMemory`: _boolean_
    - `disableStack`: _boolean_
    - `disableStorage`: _boolean_
    - `enableMemory`: _boolean_
    - `stateOverrides`: map of _object_
      - `balance`: _string_ (hex integer)
      - `code`: _string_ (hex data)
      - `movePrecompileToAddress`: _string_ (address)
      - `nonce`: _string_ (hex integer)
      - `state`: map of _string_ (hash)
      - `stateDiff`: map of _string_ (hash)
    - `timeout`: _string_
    - `tracer`: _string_
    - `tracerConfig`: _object_
      - `hasValue`: _boolean_
      - `value`: _object_
        - `item`: _object_
          <!--[circular ref]-->
        - `valueKind`: _integer_
    - `txHash`: _string_ (hash)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "debug_traceTransactionByBlockhashAndIndex",
      "params": [blockHash, txIndex, options]
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
  - `customTracerResult`: _object_
    - `value`: _object_
  - `entries`: array of _object_
    - `depth`: _string_ (hex integer)
    - `error`: _string_
    - `gas`: _string_ (hex integer)
    - `gasCost`: _string_ (hex integer)
    - `memory`: array of _string_
    - `opcode`: _string_
    - `programCounter`: _string_ (hex integer)
    - `stack`: array of _string_
    - `storage`: map of _string_
  - `failed`: _boolean_
  - `gas`: _string_ (hex integer)
  - `returnValue`: _string_ (hex data)
  - `storagesByDepth`: array of map of _string_
  - `txHash`: _string_ (hash)

</TabItem>
</Tabs>

### debug_traceTransactionInBlockByHash

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockRlp`: _string_ (hex data)

2. `transactionHash`: _string_ (hash)

3. `options`: _object_
    - `disableMemory`: _boolean_
    - `disableStack`: _boolean_
    - `disableStorage`: _boolean_
    - `enableMemory`: _boolean_
    - `stateOverrides`: map of _object_
      - `balance`: _string_ (hex integer)
      - `code`: _string_ (hex data)
      - `movePrecompileToAddress`: _string_ (address)
      - `nonce`: _string_ (hex integer)
      - `state`: map of _string_ (hash)
      - `stateDiff`: map of _string_ (hash)
    - `timeout`: _string_
    - `tracer`: _string_
    - `tracerConfig`: _object_
      - `hasValue`: _boolean_
      - `value`: _object_
        - `item`: _object_
          <!--[circular ref]-->
        - `valueKind`: _integer_
    - `txHash`: _string_ (hash)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "debug_traceTransactionInBlockByHash",
      "params": [blockRlp, transactionHash, options]
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
  - `customTracerResult`: _object_
    - `value`: _object_
  - `entries`: array of _object_
    - `depth`: _string_ (hex integer)
    - `error`: _string_
    - `gas`: _string_ (hex integer)
    - `gasCost`: _string_ (hex integer)
    - `memory`: array of _string_
    - `opcode`: _string_
    - `programCounter`: _string_ (hex integer)
    - `stack`: array of _string_
    - `storage`: map of _string_
  - `failed`: _boolean_
  - `gas`: _string_ (hex integer)
  - `returnValue`: _string_ (hex data)
  - `storagesByDepth`: array of map of _string_
  - `txHash`: _string_ (hash)

</TabItem>
</Tabs>

### debug_traceTransactionInBlockByIndex

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockRlp`: _string_ (hex data)

2. `txIndex`: _string_ (hex integer)

3. `options`: _object_
    - `disableMemory`: _boolean_
    - `disableStack`: _boolean_
    - `disableStorage`: _boolean_
    - `enableMemory`: _boolean_
    - `stateOverrides`: map of _object_
      - `balance`: _string_ (hex integer)
      - `code`: _string_ (hex data)
      - `movePrecompileToAddress`: _string_ (address)
      - `nonce`: _string_ (hex integer)
      - `state`: map of _string_ (hash)
      - `stateDiff`: map of _string_ (hash)
    - `timeout`: _string_
    - `tracer`: _string_
    - `tracerConfig`: _object_
      - `hasValue`: _boolean_
      - `value`: _object_
        - `item`: _object_
          <!--[circular ref]-->
        - `valueKind`: _integer_
    - `txHash`: _string_ (hash)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "debug_traceTransactionInBlockByIndex",
      "params": [blockRlp, txIndex, options]
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
  - `customTracerResult`: _object_
    - `value`: _object_
  - `entries`: array of _object_
    - `depth`: _string_ (hex integer)
    - `error`: _string_
    - `gas`: _string_ (hex integer)
    - `gasCost`: _string_ (hex integer)
    - `memory`: array of _string_
    - `opcode`: _string_
    - `programCounter`: _string_ (hex integer)
    - `stack`: array of _string_
    - `storage`: map of _string_
  - `failed`: _boolean_
  - `gas`: _string_ (hex integer)
  - `returnValue`: _string_ (hex data)
  - `storagesByDepth`: array of map of _string_
  - `txHash`: _string_ (hash)

</TabItem>
</Tabs>

