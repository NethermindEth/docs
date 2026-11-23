---
title: debug namespace
sidebar_label: debug
sidebar_position: 2
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### debug_config

Returns the complete fork configuration (Nethermind specific).

<Tabs>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "debug_config",
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

</TabItem>
</Tabs>

### debug_deleteChainSlice

Deletes chain levels on all branches (Nethermind specific). Requires paused, drained processing, no active initial synchronization, and preserves historical sync progress, including when forced. Deletion at or below the sync pivot requires completed historical sync; a deleted pivot is moved to the surviving head. When replacing the head, the preceding block must be canonical with its body and processing state available. Returns invalid-params for an invalid range or resource-unavailable when maintenance is unsafe.

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

`result`: _integer_

</TabItem>
</Tabs>

### debug_executionWitness

Reprocesses the existing block with the parameters specified and returns the generated execution witness.

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockParameter`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`), _object_ (EIP-1898 `{blockHash, requireCanonical}` or `{blockNumber}`), or _integer_ (block number, if `JsonRpc.StrictHexFormat` is `false`)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "debug_executionWitness",
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

`result`: _object_
  - `codes`: array of _string_ (hex data)
  - `headers`: array of _string_ (hex data)
  - `keys`: array of _string_ (hex data)
  - `state`: array of _string_ (hex data)

</TabItem>
</Tabs>

### debug_getBadBlocks

Return list of invalid blocks. If an absolute local file path is given, writes the list to that new file and returns null.

<Tabs>
<TabItem value="params" label="Parameters">

1. `file`: _string_


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "debug_getBadBlocks",
      "params": [file]
    }'
```

</TabItem>
<TabItem value="response" label="Response">

Each `block` carries full transaction objects.

```json
{
  "jsonrpc": "2.0",
  "id": 0,
  "result": result
}
```

`result`: array of _object_
  - `block`: _object_
    - `author`: optional _string_ (address)
    - `baseFeePerGas`: optional _string_ (hex integer)
    - `blobGasUsed`: optional _string_ (hex integer)
    - `blockAccessListHash`: optional _string_ (hash)
    - `difficulty`: _string_ (hex integer)
    - `excessBlobGas`: optional _string_ (hex integer)
    - `extraData`: _string_ (hex data)
    - `gasLimit`: _string_ (hex integer)
    - `gasUsed`: _string_ (hex integer)
    - `hash`: _string_ (hash) or `null`
    - `logsBloom`: _string_ (hex data) or `null`
    - `miner`: _string_ (address) or `null`
    - `mixHash`: optional _string_ (hash)
    - `nonce`: _string_ (8-byte hex data) or `null`
    - `number`: _string_ (hex integer) or `null`
    - `parentBeaconBlockRoot`: optional _string_ (hash)
    - `parentHash`: _string_ (hash)
    - `receiptsRoot`: _string_ (hash)
    - `requestsHash`: optional _string_ (hash)
    - `sha3Uncles`: _string_ (hash)
    - `signature`: optional _string_ (hex data)
    - `size`: _string_ (hex integer)
    - `slotNumber`: optional _string_ (hex integer)
    - `stateRoot`: _string_ (hash)
    - `step`: optional _integer_
    - `timestamp`: _string_ (hex integer)
    - `totalDifficulty`: optional _string_ (hex integer)
    - `transactions`: optional array of _string_ (hash), or array of _object_ (transaction, same as `result` in `eth_getTransactionByHash`) when full transactions are requested
    - `transactionsRoot`: _string_ (hash)
    - `uncles`: array of _string_ (hash)
    - `withdrawals`: optional array of _object_
      - `address`: _string_ (address)
      - `amount`: _string_ (hex integer)
      - `index`: _string_ (hex integer)
      - `validatorIndex`: _string_ (hex integer)
    - `withdrawalsRoot`: optional _string_ (hash)
  - `blockAccessList`: optional _string_ (hex data)
  - `generatedBlockAccessList`: optional _string_ (hex data)
  - `hash`: _string_ (hash)
  - `rlp`: _string_ (hex data)

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

`result` may be `null` in a successful response.

</TabItem>
</Tabs>

### debug_getRawBlock

Get Raw Block format.

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockParameter`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`), _object_ (EIP-1898 `{blockHash, requireCanonical}` or `{blockNumber}`), or _integer_ (block number, if `JsonRpc.StrictHexFormat` is `false`)


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

### debug_getRawBlockAccessList

Get raw block access list format.

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockParameter`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`), _object_ (EIP-1898 `{blockHash, requireCanonical}` or `{blockNumber}`), or _integer_ (block number, if `JsonRpc.StrictHexFormat` is `false`)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "debug_getRawBlockAccessList",
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

1. `blockParameter`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`), _object_ (EIP-1898 `{blockHash, requireCanonical}` or `{blockNumber}`), or _integer_ (block number, if `JsonRpc.StrictHexFormat` is `false`)


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

1. `blockParameter`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`), _object_ (EIP-1898 `{blockHash, requireCanonical}` or `{blockNumber}`), or _integer_ (block number, if `JsonRpc.StrictHexFormat` is `false`)


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

`result` may be `null` in a successful response.

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

`result`: _string_ (hex data)

</TabItem>
</Tabs>

### debug_getSyncStage

Retrieves Nethermind Sync Stage, With extra Metadata

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

1. `blockParameter`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`), _object_ (EIP-1898 `{blockHash, requireCanonical}` or `{blockNumber}`), or _integer_ (block number, if `JsonRpc.StrictHexFormat` is `false`)

2. `receiptForRpc`: array of _object_
  - `blobGasPrice`: _string_ (hex integer)
  - `blobGasUsed`: _string_ (hex integer)
  - `blockGasUsed`: _string_ (hex integer)
  - `blockHash`: _string_ (hash)
  - `blockNumber`: _string_ (hex integer)
  - `contractAddress`: _string_ (address)
  - `cumulativeGasUsed`: _string_ (hex integer)
  - `effectiveGasPrice`: _string_ (hex integer)
  - `executionGasUsed`: _string_ (hex integer)
  - `frameReceipts`: array of _object_
    - `executionGasUsed`: _string_ (hex integer)
    - `gasUsed`: _string_ (hex integer)
    - `logs`: array of _object_
      - `address`: _string_ (address)
      - `blockHash`: _string_ (hash)
      - `blockNumber`: _string_ (hex integer)
      - `blockTimestamp`: _string_ (hex integer)
      - `data`: _string_ (hex data)
      - `logIndex`: _string_ (hex integer)
      - `removed`: _boolean_
      - `topics`: array of _string_ (hash)
      - `transactionHash`: _string_ (hash)
      - `transactionIndex`: _string_ (hex integer)
    - `stateGasUsed`: _string_ (hex integer)
    - `status`: _integer_
  - `from`: _string_ (address)
  - `gasUsed`: _string_ (hex integer)
  - `logs`: array of _object_
    - `address`: _string_ (address)
    - `blockHash`: _string_ (hash)
    - `blockNumber`: _string_ (hex integer)
    - `blockTimestamp`: _string_ (hex integer)
    - `data`: _string_ (hex data)
    - `logIndex`: _string_ (hex integer)
    - `removed`: _boolean_
    - `topics`: array of _string_ (hash)
    - `transactionHash`: _string_ (hash)
    - `transactionIndex`: _string_ (hex integer)
  - `logsBloom`: _string_ (hex data)
  - `payer`: _string_ (address)
  - `root`: _string_ (hash)
  - `status`: _string_ (hex integer)
  - `storageGasUsed`: _string_ (hex integer)
  - `to`: _string_ (address)
  - `transactionHash`: _string_ (hash)
  - `transactionIndex`: _string_ (hex integer)
  - `type`: _string_ (transaction type)


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

### debug_intermediateRoots

Replays a block and returns the world-state root after each transaction in execution order. EIP-4788/EIP-2935 system calls and withdrawals do not produce an entry. Failed transactions still produce a root (geth partial-result semantics). The block must be canonical or in the bad-block store.

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockHash`: _string_ (hash)

2. `options`: _object_
    - `blockOverrides`: _object_
      - `baseFeePerGas`: _string_ (hex integer)
      - `beaconRoot`: _string_ (hash)
      - `blobBaseFee`: _string_ (hex integer)
      - `feeRecipient`: _string_ (address)
      - `gasLimit`: _string_ (hex integer)
      - `number`: _string_ (hex integer)
      - `prevRandao`: _string_ (hash)
      - `time`: _string_ (hex integer)
      - `withdrawals`: array of _object_
        - `address`: _string_ (address)
        - `amount`: _string_ (hex integer)
        - `index`: _string_ (hex integer)
        - `validatorIndex`: _string_ (hex integer)
    - `disableMemory`: _boolean_
    - `disableStack`: _boolean_
    - `disableStorage`: _boolean_
    - `enableMemory`: _boolean_
    - `enableReturnData`: _boolean_
    - `limit`: _integer_
    - `stateOverrides`: map of _object_
      - `balance`: _string_ (hex integer)
      - `code`: _string_ (hex data)
      - `movePrecompileToAddress`: _string_ (address)
      - `nonce`: _string_ (hex integer)
      - `state`: map of _string_ (hash)
      - `stateDiff`: map of _string_ (hash)
    - `streamMode`: _boolean_
    - `timeout`: _string_ (duration)
    - `tracer`: _string_
    - `tracerConfig`: _object_
    - `txHash`: _string_ (hash)
    - `txIndex`: _string_ (hex integer)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "debug_intermediateRoots",
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

`result`: array of _string_ (hash)

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

Rewinds to a canonical block with state available for block processing and prunes abandoned flat-state snapshots; returns false for an unknown hash or a refused rewind (Nethermind specific). Requires paused, drained block processing and no active initial synchronization. A target below the sync pivot is refused unless historical downloads are complete and retained progress is at or below the target; the pivot then moves with the head. Ancient backfill permits rewinds at or above the pivot.

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

### debug_setHead

Rewinds the head to a canonical block with state available for block processing, given by number, tag or hash, and prunes abandoned flat-state snapshots. Returns false for an unknown target or a refused rewind (Nethermind specific). Requires paused, drained block processing and no active initial synchronization. A target below the sync pivot is refused unless historical downloads are complete and retained progress is at or below the target; the pivot then moves with the head. Ancient backfill permits rewinds at or above the pivot.

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockParameter`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`), _object_ (EIP-1898 `{blockHash, requireCanonical}` or `{blockNumber}`), or _integer_ (block number, if `JsonRpc.StrictHexFormat` is `false`)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "debug_setHead",
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
        - `beaconRoot`: _string_ (hash)
        - `blobBaseFee`: _string_ (hex integer)
        - `feeRecipient`: _string_ (address)
        - `gasLimit`: _string_ (hex integer)
        - `number`: _string_ (hex integer)
        - `prevRandao`: _string_ (hash)
        - `time`: _string_ (hex integer)
        - `withdrawals`: array of _object_
          - `address`: _string_ (address)
          - `amount`: _string_ (hex integer)
          - `index`: _string_ (hex integer)
          - `validatorIndex`: _string_ (hex integer)
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
        - `movePrecompileToAddress`: _string_ (address)
        - `nonce`: _string_ (hex integer)
        - `state`: map of _string_ (hash)
        - `stateDiff`: map of _string_ (hash)
    - `returnFullTransactionObjects`: _boolean_
    - `returnFullTransactions`: _boolean_
    - `traceTransfers`: _boolean_
    - `validation`: _boolean_

2. `blockParameter`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`), _object_ (EIP-1898 `{blockHash, requireCanonical}` or `{blockNumber}`), or _integer_ (block number, if `JsonRpc.StrictHexFormat` is `false`)

3. `options`: _object_
    - `blockOverrides`: _object_
      - `baseFeePerGas`: _string_ (hex integer)
      - `beaconRoot`: _string_ (hash)
      - `blobBaseFee`: _string_ (hex integer)
      - `feeRecipient`: _string_ (address)
      - `gasLimit`: _string_ (hex integer)
      - `number`: _string_ (hex integer)
      - `prevRandao`: _string_ (hash)
      - `time`: _string_ (hex integer)
      - `withdrawals`: array of _object_
        - `address`: _string_ (address)
        - `amount`: _string_ (hex integer)
        - `index`: _string_ (hex integer)
        - `validatorIndex`: _string_ (hex integer)
    - `disableMemory`: _boolean_
    - `disableStack`: _boolean_
    - `disableStorage`: _boolean_
    - `enableMemory`: _boolean_
    - `enableReturnData`: _boolean_
    - `limit`: _integer_
    - `stateOverrides`: map of _object_
      - `balance`: _string_ (hex integer)
      - `code`: _string_ (hex data)
      - `movePrecompileToAddress`: _string_ (address)
      - `nonce`: _string_ (hex integer)
      - `state`: map of _string_ (hash)
      - `stateDiff`: map of _string_ (hash)
    - `streamMode`: _boolean_
    - `timeout`: _string_ (duration)
    - `tracer`: _string_
    - `tracerConfig`: _object_
    - `txHash`: _string_ (hash)
    - `txIndex`: _string_ (hex integer)


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
  - `author`: optional _string_ (address)
  - `baseFeePerGas`: optional _string_ (hex integer)
  - `blobGasUsed`: optional _string_ (hex integer)
  - `blockAccessListHash`: optional _string_ (hash)
  - `difficulty`: _string_ (hex integer)
  - `excessBlobGas`: optional _string_ (hex integer)
  - `extraData`: _string_ (hex data)
  - `gasLimit`: _string_ (hex integer)
  - `gasUsed`: _string_ (hex integer)
  - `hash`: _string_ (hash) or `null`
  - `logsBloom`: _string_ (hex data) or `null`
  - `miner`: _string_ (address) or `null`
  - `mixHash`: optional _string_ (hash)
  - `nonce`: _string_ (8-byte hex data) or `null`
  - `number`: _string_ (hex integer) or `null`
  - `parentBeaconBlockRoot`: optional _string_ (hash)
  - `parentHash`: _string_ (hash)
  - `receiptsRoot`: _string_ (hash)
  - `requestsHash`: optional _string_ (hash)
  - `sha3Uncles`: _string_ (hash)
  - `signature`: optional _string_ (hex data)
  - `size`: _string_ (hex integer)
  - `slotNumber`: optional _string_ (hex integer)
  - `stateRoot`: _string_ (hash)
  - `step`: optional _integer_
  - `timestamp`: _string_ (hex integer)
  - `totalDifficulty`: optional _string_ (hex integer)
  - `traces`: array of _object_ (the tracer's own result instead when `tracer` is set)
    - `failed`: _boolean_
    - `gas`: _integer_
    - `returnValue`: _string_ (hex data)
    - `structLogs`: array of _object_
      - `depth`: _integer_
      - `error`: optional _string_
      - `gas`: _integer_
      - `gasCost`: _integer_
      - `memory`: optional array of _string_ (32-byte hex data)
      - `op`: optional _string_
      - `pc`: _integer_
      - `refund`: optional _integer_
      - `returnData`: optional _string_ (hex data)
      - `stack`: optional array of _string_ (hex integer)
      - `storage`: optional map of _string_ (32-byte hex data)
  - `transactions`: optional array of _string_ (hash), or array of _object_ (transaction, same as `result` in `eth_getTransactionByHash`) when full transactions are requested
  - `transactionsRoot`: _string_ (hash)
  - `uncles`: array of _string_ (hash)
  - `withdrawals`: optional array of _object_
    - `address`: _string_ (address)
    - `amount`: _string_ (hex integer)
    - `index`: _string_ (hex integer)
    - `validatorIndex`: _string_ (hex integer)
  - `withdrawalsRoot`: optional _string_ (hash)

</TabItem>
</Tabs>

### debug_standardTraceBadBlockToFile

This method is similar to the `debug_standardTraceBlockToFile` method, but can be used to obtain information about a block that has been rejected as invalid.

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockHash`: _string_ (hash)

2. `options`: _object_
    - `blockOverrides`: _object_
      - `baseFeePerGas`: _string_ (hex integer)
      - `beaconRoot`: _string_ (hash)
      - `blobBaseFee`: _string_ (hex integer)
      - `feeRecipient`: _string_ (address)
      - `gasLimit`: _string_ (hex integer)
      - `number`: _string_ (hex integer)
      - `prevRandao`: _string_ (hash)
      - `time`: _string_ (hex integer)
      - `withdrawals`: array of _object_
        - `address`: _string_ (address)
        - `amount`: _string_ (hex integer)
        - `index`: _string_ (hex integer)
        - `validatorIndex`: _string_ (hex integer)
    - `disableMemory`: _boolean_
    - `disableStack`: _boolean_
    - `disableStorage`: _boolean_
    - `enableMemory`: _boolean_
    - `enableReturnData`: _boolean_
    - `limit`: _integer_
    - `stateOverrides`: map of _object_
      - `balance`: _string_ (hex integer)
      - `code`: _string_ (hex data)
      - `movePrecompileToAddress`: _string_ (address)
      - `nonce`: _string_ (hex integer)
      - `state`: map of _string_ (hash)
      - `stateDiff`: map of _string_ (hash)
    - `streamMode`: _boolean_
    - `timeout`: _string_ (duration)
    - `tracer`: _string_
    - `tracerConfig`: _object_
    - `txHash`: _string_ (hash)
    - `txIndex`: _string_ (hex integer)


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
    - `blockOverrides`: _object_
      - `baseFeePerGas`: _string_ (hex integer)
      - `beaconRoot`: _string_ (hash)
      - `blobBaseFee`: _string_ (hex integer)
      - `feeRecipient`: _string_ (address)
      - `gasLimit`: _string_ (hex integer)
      - `number`: _string_ (hex integer)
      - `prevRandao`: _string_ (hash)
      - `time`: _string_ (hex integer)
      - `withdrawals`: array of _object_
        - `address`: _string_ (address)
        - `amount`: _string_ (hex integer)
        - `index`: _string_ (hex integer)
        - `validatorIndex`: _string_ (hex integer)
    - `disableMemory`: _boolean_
    - `disableStack`: _boolean_
    - `disableStorage`: _boolean_
    - `enableMemory`: _boolean_
    - `enableReturnData`: _boolean_
    - `limit`: _integer_
    - `stateOverrides`: map of _object_
      - `balance`: _string_ (hex integer)
      - `code`: _string_ (hex data)
      - `movePrecompileToAddress`: _string_ (address)
      - `nonce`: _string_ (hex integer)
      - `state`: map of _string_ (hash)
      - `stateDiff`: map of _string_ (hash)
    - `streamMode`: _boolean_
    - `timeout`: _string_ (duration)
    - `tracer`: _string_
    - `tracerConfig`: _object_
    - `txHash`: _string_ (hash)
    - `txIndex`: _string_ (hex integer)


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

### debug_storageRangeAt

Returns up to maxResult storage slots of an account as they are before the transaction at the given index of the block runs. Slots are in hashed-key order from the hashed key keyStart. nextKey is the hashed key to continue from, or null when no slots follow. Slot key preimages are not kept, so each key is null. At most 1024 slots are returned per call. Not supported on chains whose block processor cannot stop before a transaction, such as AuRa and Taiko.

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockParameter`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`), _object_ (EIP-1898 `{blockHash, requireCanonical}` or `{blockNumber}`), or _integer_ (block number, if `JsonRpc.StrictHexFormat` is `false`)

2. `txIndex`: _integer_

3. `address`: _string_ (address)

4. `keyStart`: _string_ (hex data)

5. `maxResult`: _integer_


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "debug_storageRangeAt",
      "params": [blockParameter, txIndex, address, keyStart, maxResult]
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
  - `nextKey`: _string_ (hash) or `null`
  - `storage`: map of _object_ or `null`
    - `key`: _string_ (hash) or `null`
    - `value`: _string_ (hash)

</TabItem>
</Tabs>

### debug_traceBadBlock

Similar to debug_traceBlockByHash, but replays a block that has been rejected as invalid and is held in the bad-block store.

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockHash`: _string_ (hash)

2. `options`: _object_
    - `blockOverrides`: _object_
      - `baseFeePerGas`: _string_ (hex integer)
      - `beaconRoot`: _string_ (hash)
      - `blobBaseFee`: _string_ (hex integer)
      - `feeRecipient`: _string_ (address)
      - `gasLimit`: _string_ (hex integer)
      - `number`: _string_ (hex integer)
      - `prevRandao`: _string_ (hash)
      - `time`: _string_ (hex integer)
      - `withdrawals`: array of _object_
        - `address`: _string_ (address)
        - `amount`: _string_ (hex integer)
        - `index`: _string_ (hex integer)
        - `validatorIndex`: _string_ (hex integer)
    - `disableMemory`: _boolean_
    - `disableStack`: _boolean_
    - `disableStorage`: _boolean_
    - `enableMemory`: _boolean_
    - `enableReturnData`: _boolean_
    - `limit`: _integer_
    - `stateOverrides`: map of _object_
      - `balance`: _string_ (hex integer)
      - `code`: _string_ (hex data)
      - `movePrecompileToAddress`: _string_ (address)
      - `nonce`: _string_ (hex integer)
      - `state`: map of _string_ (hash)
      - `stateDiff`: map of _string_ (hash)
    - `streamMode`: _boolean_
    - `timeout`: _string_ (duration)
    - `tracer`: _string_
    - `tracerConfig`: _object_
    - `txHash`: _string_ (hash)
    - `txIndex`: _string_ (hex integer)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "debug_traceBadBlock",
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

`result`: array of _object_ (`error` _string_ in place of `result` when a JavaScript tracer fails)
  - `result`: _object_ (the tracer's own result instead when `tracer` is set)
    - `failed`: _boolean_
    - `gas`: _integer_
    - `returnValue`: _string_ (hex data)
    - `structLogs`: array of _object_
      - `depth`: _integer_
      - `error`: optional _string_
      - `gas`: _integer_
      - `gasCost`: _integer_
      - `memory`: optional array of _string_ (32-byte hex data)
      - `op`: optional _string_
      - `pc`: _integer_
      - `refund`: optional _integer_
      - `returnData`: optional _string_ (hex data)
      - `stack`: optional array of _string_ (hex integer)
      - `storage`: optional map of _string_ (32-byte hex data)
  - `txHash`: _string_ (hash)

</TabItem>
</Tabs>

### debug_traceBlock

Returns the full stack trace of all invoked opcodes of all transactions that were included in the block specified. The parent of the block must be present or it will fail.

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockRlp`: _string_ (hex data)

2. `options`: _object_
    - `blockOverrides`: _object_
      - `baseFeePerGas`: _string_ (hex integer)
      - `beaconRoot`: _string_ (hash)
      - `blobBaseFee`: _string_ (hex integer)
      - `feeRecipient`: _string_ (address)
      - `gasLimit`: _string_ (hex integer)
      - `number`: _string_ (hex integer)
      - `prevRandao`: _string_ (hash)
      - `time`: _string_ (hex integer)
      - `withdrawals`: array of _object_
        - `address`: _string_ (address)
        - `amount`: _string_ (hex integer)
        - `index`: _string_ (hex integer)
        - `validatorIndex`: _string_ (hex integer)
    - `disableMemory`: _boolean_
    - `disableStack`: _boolean_
    - `disableStorage`: _boolean_
    - `enableMemory`: _boolean_
    - `enableReturnData`: _boolean_
    - `limit`: _integer_
    - `stateOverrides`: map of _object_
      - `balance`: _string_ (hex integer)
      - `code`: _string_ (hex data)
      - `movePrecompileToAddress`: _string_ (address)
      - `nonce`: _string_ (hex integer)
      - `state`: map of _string_ (hash)
      - `stateDiff`: map of _string_ (hash)
    - `streamMode`: _boolean_
    - `timeout`: _string_ (duration)
    - `tracer`: _string_
    - `tracerConfig`: _object_
    - `txHash`: _string_ (hash)
    - `txIndex`: _string_ (hex integer)


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

`result`: array of _object_ (`error` _string_ in place of `result` when a JavaScript tracer fails)
  - `result`: _object_ (the tracer's own result instead when `tracer` is set)
    - `failed`: _boolean_
    - `gas`: _integer_
    - `returnValue`: _string_ (hex data)
    - `structLogs`: array of _object_
      - `depth`: _integer_
      - `error`: optional _string_
      - `gas`: _integer_
      - `gasCost`: _integer_
      - `memory`: optional array of _string_ (32-byte hex data)
      - `op`: optional _string_
      - `pc`: _integer_
      - `refund`: optional _integer_
      - `returnData`: optional _string_ (hex data)
      - `stack`: optional array of _string_ (hex integer)
      - `storage`: optional map of _string_ (32-byte hex data)
  - `txHash`: _string_ (hash)

</TabItem>
</Tabs>

### debug_traceBlockByHash

Similar to debug_traceBlock, this method accepts a block hash and replays the block that is already present in the database.

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockHash`: _string_ (hash)

2. `options`: _object_
    - `blockOverrides`: _object_
      - `baseFeePerGas`: _string_ (hex integer)
      - `beaconRoot`: _string_ (hash)
      - `blobBaseFee`: _string_ (hex integer)
      - `feeRecipient`: _string_ (address)
      - `gasLimit`: _string_ (hex integer)
      - `number`: _string_ (hex integer)
      - `prevRandao`: _string_ (hash)
      - `time`: _string_ (hex integer)
      - `withdrawals`: array of _object_
        - `address`: _string_ (address)
        - `amount`: _string_ (hex integer)
        - `index`: _string_ (hex integer)
        - `validatorIndex`: _string_ (hex integer)
    - `disableMemory`: _boolean_
    - `disableStack`: _boolean_
    - `disableStorage`: _boolean_
    - `enableMemory`: _boolean_
    - `enableReturnData`: _boolean_
    - `limit`: _integer_
    - `stateOverrides`: map of _object_
      - `balance`: _string_ (hex integer)
      - `code`: _string_ (hex data)
      - `movePrecompileToAddress`: _string_ (address)
      - `nonce`: _string_ (hex integer)
      - `state`: map of _string_ (hash)
      - `stateDiff`: map of _string_ (hash)
    - `streamMode`: _boolean_
    - `timeout`: _string_ (duration)
    - `tracer`: _string_
    - `tracerConfig`: _object_
    - `txHash`: _string_ (hash)
    - `txIndex`: _string_ (hex integer)


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

`result`: array of _object_ (`error` _string_ in place of `result` when a JavaScript tracer fails)
  - `result`: _object_ (the tracer's own result instead when `tracer` is set)
    - `failed`: _boolean_
    - `gas`: _integer_
    - `returnValue`: _string_ (hex data)
    - `structLogs`: array of _object_
      - `depth`: _integer_
      - `error`: optional _string_
      - `gas`: _integer_
      - `gasCost`: _integer_
      - `memory`: optional array of _string_ (32-byte hex data)
      - `op`: optional _string_
      - `pc`: _integer_
      - `refund`: optional _integer_
      - `returnData`: optional _string_ (hex data)
      - `stack`: optional array of _string_ (hex integer)
      - `storage`: optional map of _string_ (32-byte hex data)
  - `txHash`: _string_ (hash)

</TabItem>
</Tabs>

### debug_traceBlockByNumber

Similar to debug_traceBlock, this method accepts a block number as well as "latest" or "finalized" and replays the block that is already present in the database.

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockParameter`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`), _object_ (EIP-1898 `{blockHash, requireCanonical}` or `{blockNumber}`), or _integer_ (block number, if `JsonRpc.StrictHexFormat` is `false`)

2. `options`: _object_
    - `blockOverrides`: _object_
      - `baseFeePerGas`: _string_ (hex integer)
      - `beaconRoot`: _string_ (hash)
      - `blobBaseFee`: _string_ (hex integer)
      - `feeRecipient`: _string_ (address)
      - `gasLimit`: _string_ (hex integer)
      - `number`: _string_ (hex integer)
      - `prevRandao`: _string_ (hash)
      - `time`: _string_ (hex integer)
      - `withdrawals`: array of _object_
        - `address`: _string_ (address)
        - `amount`: _string_ (hex integer)
        - `index`: _string_ (hex integer)
        - `validatorIndex`: _string_ (hex integer)
    - `disableMemory`: _boolean_
    - `disableStack`: _boolean_
    - `disableStorage`: _boolean_
    - `enableMemory`: _boolean_
    - `enableReturnData`: _boolean_
    - `limit`: _integer_
    - `stateOverrides`: map of _object_
      - `balance`: _string_ (hex integer)
      - `code`: _string_ (hex data)
      - `movePrecompileToAddress`: _string_ (address)
      - `nonce`: _string_ (hex integer)
      - `state`: map of _string_ (hash)
      - `stateDiff`: map of _string_ (hash)
    - `streamMode`: _boolean_
    - `timeout`: _string_ (duration)
    - `tracer`: _string_
    - `tracerConfig`: _object_
    - `txHash`: _string_ (hash)
    - `txIndex`: _string_ (hex integer)


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

`result`: array of _object_ (`error` _string_ in place of `result` when a JavaScript tracer fails)
  - `result`: _object_ (the tracer's own result instead when `tracer` is set)
    - `failed`: _boolean_
    - `gas`: _integer_
    - `returnValue`: _string_ (hex data)
    - `structLogs`: array of _object_
      - `depth`: _integer_
      - `error`: optional _string_
      - `gas`: _integer_
      - `gasCost`: _integer_
      - `memory`: optional array of _string_ (32-byte hex data)
      - `op`: optional _string_
      - `pc`: _integer_
      - `refund`: optional _integer_
      - `returnData`: optional _string_ (hex data)
      - `stack`: optional array of _string_ (hex integer)
      - `storage`: optional map of _string_ (32-byte hex data)
  - `txHash`: _string_ (hash)

</TabItem>
</Tabs>

### debug_traceCall

This method lets you run an eth_call within the context of the given block execution using the final state of parent block as the base. The block can be specified either by hash or by number. It takes the same input object as a eth_call. It returns the same output as debug_traceTransaction. A non-null `input` takes precedence over `data`. Blob versioned hashes are decoded as byte arrays; invalid lengths are rejected during Blob transaction conversion, not JSON decoding. For duplicate fields, the last value is used.

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

2. `blockParameter`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`), _object_ (EIP-1898 `{blockHash, requireCanonical}` or `{blockNumber}`), or _integer_ (block number, if `JsonRpc.StrictHexFormat` is `false`)

3. `options`: _object_
    - `blockOverrides`: _object_
      - `baseFeePerGas`: _string_ (hex integer)
      - `beaconRoot`: _string_ (hash)
      - `blobBaseFee`: _string_ (hex integer)
      - `feeRecipient`: _string_ (address)
      - `gasLimit`: _string_ (hex integer)
      - `number`: _string_ (hex integer)
      - `prevRandao`: _string_ (hash)
      - `time`: _string_ (hex integer)
      - `withdrawals`: array of _object_
        - `address`: _string_ (address)
        - `amount`: _string_ (hex integer)
        - `index`: _string_ (hex integer)
        - `validatorIndex`: _string_ (hex integer)
    - `disableMemory`: _boolean_
    - `disableStack`: _boolean_
    - `disableStorage`: _boolean_
    - `enableMemory`: _boolean_
    - `enableReturnData`: _boolean_
    - `limit`: _integer_
    - `stateOverrides`: map of _object_
      - `balance`: _string_ (hex integer)
      - `code`: _string_ (hex data)
      - `movePrecompileToAddress`: _string_ (address)
      - `nonce`: _string_ (hex integer)
      - `state`: map of _string_ (hash)
      - `stateDiff`: map of _string_ (hash)
    - `streamMode`: _boolean_
    - `timeout`: _string_ (duration)
    - `tracer`: _string_
    - `tracerConfig`: _object_
    - `txHash`: _string_ (hash)
    - `txIndex`: _string_ (hex integer)


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

`result`: _object_ (the tracer's own result instead when `tracer` is set)
  - `failed`: _boolean_
  - `gas`: _integer_
  - `returnValue`: _string_ (hex data)
  - `structLogs`: array of _object_
    - `depth`: _integer_
    - `error`: optional _string_
    - `gas`: _integer_
    - `gasCost`: _integer_
    - `memory`: optional array of _string_ (32-byte hex data)
    - `op`: optional _string_
    - `pc`: _integer_
    - `refund`: optional _integer_
    - `returnData`: optional _string_ (hex data)
    - `stack`: optional array of _string_ (hex integer)
    - `storage`: optional map of _string_ (32-byte hex data)

</TabItem>
</Tabs>

### debug_traceCallMany

Executes a list of bundles of transactions without creating transactions on the blockchain and returns their traces. Unless any bundle has state or block overrides, each call is traced independently against the state of the selected block; to let later calls see the effects of earlier ones, set state or block overrides on a bundle or use debug_simulateV1. Non-empty options.stateOverrides or options.blockOverrides cannot be combined with state or block overrides on any bundle.

<Tabs>
<TabItem value="params" label="Parameters">

1. `bundles`: array of _object_
  - `blockOverride`: _object_
    - `baseFeePerGas`: _string_ (hex integer)
    - `beaconRoot`: _string_ (hash)
    - `blobBaseFee`: _string_ (hex integer)
    - `feeRecipient`: _string_ (address)
    - `gasLimit`: _string_ (hex integer)
    - `number`: _string_ (hex integer)
    - `prevRandao`: _string_ (hash)
    - `time`: _string_ (hex integer)
    - `withdrawals`: array of _object_
      - `address`: _string_ (address)
      - `amount`: _string_ (hex integer)
      - `index`: _string_ (hex integer)
      - `validatorIndex`: _string_ (hex integer)
  - `stateOverrides`: map of _object_
    - `balance`: _string_ (hex integer)
    - `code`: _string_ (hex data)
    - `movePrecompileToAddress`: _string_ (address)
    - `nonce`: _string_ (hex integer)
    - `state`: map of _string_ (hash)
    - `stateDiff`: map of _string_ (hash)
  - `transactions`: array of _object_
    - `blockHash`: _string_ (hash)
    - `blockNumber`: _string_ (hex integer)
    - `blockTimestamp`: _string_ (hex integer)
    - `gas`: _string_ (hex integer)
    - `hash`: _string_ (hash)
    - `transactionIndex`: _string_ (hex integer)
    - `type`: _string_ (transaction type)

2. `blockParameter`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`), _object_ (EIP-1898 `{blockHash, requireCanonical}` or `{blockNumber}`), or _integer_ (block number, if `JsonRpc.StrictHexFormat` is `false`)

3. `options`: _object_
    - `blockOverrides`: _object_
      - `baseFeePerGas`: _string_ (hex integer)
      - `beaconRoot`: _string_ (hash)
      - `blobBaseFee`: _string_ (hex integer)
      - `feeRecipient`: _string_ (address)
      - `gasLimit`: _string_ (hex integer)
      - `number`: _string_ (hex integer)
      - `prevRandao`: _string_ (hash)
      - `time`: _string_ (hex integer)
      - `withdrawals`: array of _object_
        - `address`: _string_ (address)
        - `amount`: _string_ (hex integer)
        - `index`: _string_ (hex integer)
        - `validatorIndex`: _string_ (hex integer)
    - `disableMemory`: _boolean_
    - `disableStack`: _boolean_
    - `disableStorage`: _boolean_
    - `enableMemory`: _boolean_
    - `enableReturnData`: _boolean_
    - `limit`: _integer_
    - `stateOverrides`: map of _object_
      - `balance`: _string_ (hex integer)
      - `code`: _string_ (hex data)
      - `movePrecompileToAddress`: _string_ (address)
      - `nonce`: _string_ (hex integer)
      - `state`: map of _string_ (hash)
      - `stateDiff`: map of _string_ (hash)
    - `streamMode`: _boolean_
    - `timeout`: _string_ (duration)
    - `tracer`: _string_
    - `tracerConfig`: _object_
    - `txHash`: _string_ (hash)
    - `txIndex`: _string_ (hex integer)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "debug_traceCallMany",
      "params": [bundles, blockParameter, options]
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

`result`: array of array of _object_ (the tracer's own result instead when `tracer` is set)
  - `failed`: _boolean_
  - `gas`: _integer_
  - `returnValue`: _string_ (hex data)
  - `structLogs`: array of _object_
    - `depth`: _integer_
    - `error`: optional _string_
    - `gas`: _integer_
    - `gasCost`: _integer_
    - `memory`: optional array of _string_ (32-byte hex data)
    - `op`: optional _string_
    - `pc`: _integer_
    - `refund`: optional _integer_
    - `returnData`: optional _string_ (hex data)
    - `stack`: optional array of _string_ (hex integer)
    - `storage`: optional map of _string_ (32-byte hex data)

</TabItem>
</Tabs>

### debug_traceTransaction

This method will attempt to run the transaction in the exact same manner as it was executed on the network. It will replay any transaction that may have been executed prior to this one before it will finally attempt to execute the transaction that corresponds to the given hash.

<Tabs>
<TabItem value="params" label="Parameters">

1. `transactionHash`: _string_ (hash)

2. `options`: _object_
    - `blockOverrides`: _object_
      - `baseFeePerGas`: _string_ (hex integer)
      - `beaconRoot`: _string_ (hash)
      - `blobBaseFee`: _string_ (hex integer)
      - `feeRecipient`: _string_ (address)
      - `gasLimit`: _string_ (hex integer)
      - `number`: _string_ (hex integer)
      - `prevRandao`: _string_ (hash)
      - `time`: _string_ (hex integer)
      - `withdrawals`: array of _object_
        - `address`: _string_ (address)
        - `amount`: _string_ (hex integer)
        - `index`: _string_ (hex integer)
        - `validatorIndex`: _string_ (hex integer)
    - `disableMemory`: _boolean_
    - `disableStack`: _boolean_
    - `disableStorage`: _boolean_
    - `enableMemory`: _boolean_
    - `enableReturnData`: _boolean_
    - `limit`: _integer_
    - `stateOverrides`: map of _object_
      - `balance`: _string_ (hex integer)
      - `code`: _string_ (hex data)
      - `movePrecompileToAddress`: _string_ (address)
      - `nonce`: _string_ (hex integer)
      - `state`: map of _string_ (hash)
      - `stateDiff`: map of _string_ (hash)
    - `streamMode`: _boolean_
    - `timeout`: _string_ (duration)
    - `tracer`: _string_
    - `tracerConfig`: _object_
    - `txHash`: _string_ (hash)
    - `txIndex`: _string_ (hex integer)


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

`result`: _object_ (the tracer's own result instead when `tracer` is set)
  - `failed`: _boolean_
  - `gas`: _integer_
  - `returnValue`: _string_ (hex data)
  - `structLogs`: array of _object_
    - `depth`: _integer_
    - `error`: optional _string_
    - `gas`: _integer_
    - `gasCost`: _integer_
    - `memory`: optional array of _string_ (32-byte hex data)
    - `op`: optional _string_
    - `pc`: _integer_
    - `refund`: optional _integer_
    - `returnData`: optional _string_ (hex data)
    - `stack`: optional array of _string_ (hex integer)
    - `storage`: optional map of _string_ (32-byte hex data)

</TabItem>
</Tabs>

### debug_traceTransactionByBlockAndIndex

Returns the full stack trace of the transaction at the given index of the block specified by number, tag or hash. The block that the parameter resolves to is the one traced, so a hash that is not on the canonical chain traces that block rather than the canonical one at the same height.

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockParameter`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`), _object_ (EIP-1898 `{blockHash, requireCanonical}` or `{blockNumber}`), or _integer_ (block number, if `JsonRpc.StrictHexFormat` is `false`)

2. `txIndex`: _integer_

3. `options`: _object_
    - `blockOverrides`: _object_
      - `baseFeePerGas`: _string_ (hex integer)
      - `beaconRoot`: _string_ (hash)
      - `blobBaseFee`: _string_ (hex integer)
      - `feeRecipient`: _string_ (address)
      - `gasLimit`: _string_ (hex integer)
      - `number`: _string_ (hex integer)
      - `prevRandao`: _string_ (hash)
      - `time`: _string_ (hex integer)
      - `withdrawals`: array of _object_
        - `address`: _string_ (address)
        - `amount`: _string_ (hex integer)
        - `index`: _string_ (hex integer)
        - `validatorIndex`: _string_ (hex integer)
    - `disableMemory`: _boolean_
    - `disableStack`: _boolean_
    - `disableStorage`: _boolean_
    - `enableMemory`: _boolean_
    - `enableReturnData`: _boolean_
    - `limit`: _integer_
    - `stateOverrides`: map of _object_
      - `balance`: _string_ (hex integer)
      - `code`: _string_ (hex data)
      - `movePrecompileToAddress`: _string_ (address)
      - `nonce`: _string_ (hex integer)
      - `state`: map of _string_ (hash)
      - `stateDiff`: map of _string_ (hash)
    - `streamMode`: _boolean_
    - `timeout`: _string_ (duration)
    - `tracer`: _string_
    - `tracerConfig`: _object_
    - `txHash`: _string_ (hash)
    - `txIndex`: _string_ (hex integer)


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

`result`: _object_ (the tracer's own result instead when `tracer` is set)
  - `failed`: _boolean_
  - `gas`: _integer_
  - `returnValue`: _string_ (hex data)
  - `structLogs`: array of _object_
    - `depth`: _integer_
    - `error`: optional _string_
    - `gas`: _integer_
    - `gasCost`: _integer_
    - `memory`: optional array of _string_ (32-byte hex data)
    - `op`: optional _string_
    - `pc`: _integer_
    - `refund`: optional _integer_
    - `returnData`: optional _string_ (hex data)
    - `stack`: optional array of _string_ (hex integer)
    - `storage`: optional map of _string_ (32-byte hex data)

</TabItem>
</Tabs>

### debug_traceTransactionByBlockhashAndIndex

Returns the full stack trace of the transaction at the given index of the block with the specified hash. The block need not be on the canonical chain.

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockHash`: _string_ (hash)

2. `txIndex`: _integer_

3. `options`: _object_
    - `blockOverrides`: _object_
      - `baseFeePerGas`: _string_ (hex integer)
      - `beaconRoot`: _string_ (hash)
      - `blobBaseFee`: _string_ (hex integer)
      - `feeRecipient`: _string_ (address)
      - `gasLimit`: _string_ (hex integer)
      - `number`: _string_ (hex integer)
      - `prevRandao`: _string_ (hash)
      - `time`: _string_ (hex integer)
      - `withdrawals`: array of _object_
        - `address`: _string_ (address)
        - `amount`: _string_ (hex integer)
        - `index`: _string_ (hex integer)
        - `validatorIndex`: _string_ (hex integer)
    - `disableMemory`: _boolean_
    - `disableStack`: _boolean_
    - `disableStorage`: _boolean_
    - `enableMemory`: _boolean_
    - `enableReturnData`: _boolean_
    - `limit`: _integer_
    - `stateOverrides`: map of _object_
      - `balance`: _string_ (hex integer)
      - `code`: _string_ (hex data)
      - `movePrecompileToAddress`: _string_ (address)
      - `nonce`: _string_ (hex integer)
      - `state`: map of _string_ (hash)
      - `stateDiff`: map of _string_ (hash)
    - `streamMode`: _boolean_
    - `timeout`: _string_ (duration)
    - `tracer`: _string_
    - `tracerConfig`: _object_
    - `txHash`: _string_ (hash)
    - `txIndex`: _string_ (hex integer)


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

`result`: _object_ (the tracer's own result instead when `tracer` is set)
  - `failed`: _boolean_
  - `gas`: _integer_
  - `returnValue`: _string_ (hex data)
  - `structLogs`: array of _object_
    - `depth`: _integer_
    - `error`: optional _string_
    - `gas`: _integer_
    - `gasCost`: _integer_
    - `memory`: optional array of _string_ (32-byte hex data)
    - `op`: optional _string_
    - `pc`: _integer_
    - `refund`: optional _integer_
    - `returnData`: optional _string_ (hex data)
    - `stack`: optional array of _string_ (hex integer)
    - `storage`: optional map of _string_ (32-byte hex data)

</TabItem>
</Tabs>

### debug_traceTransactionInBlockByHash

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockRlp`: _string_ (hex data)

2. `transactionHash`: _string_ (hash)

3. `options`: _object_
    - `blockOverrides`: _object_
      - `baseFeePerGas`: _string_ (hex integer)
      - `beaconRoot`: _string_ (hash)
      - `blobBaseFee`: _string_ (hex integer)
      - `feeRecipient`: _string_ (address)
      - `gasLimit`: _string_ (hex integer)
      - `number`: _string_ (hex integer)
      - `prevRandao`: _string_ (hash)
      - `time`: _string_ (hex integer)
      - `withdrawals`: array of _object_
        - `address`: _string_ (address)
        - `amount`: _string_ (hex integer)
        - `index`: _string_ (hex integer)
        - `validatorIndex`: _string_ (hex integer)
    - `disableMemory`: _boolean_
    - `disableStack`: _boolean_
    - `disableStorage`: _boolean_
    - `enableMemory`: _boolean_
    - `enableReturnData`: _boolean_
    - `limit`: _integer_
    - `stateOverrides`: map of _object_
      - `balance`: _string_ (hex integer)
      - `code`: _string_ (hex data)
      - `movePrecompileToAddress`: _string_ (address)
      - `nonce`: _string_ (hex integer)
      - `state`: map of _string_ (hash)
      - `stateDiff`: map of _string_ (hash)
    - `streamMode`: _boolean_
    - `timeout`: _string_ (duration)
    - `tracer`: _string_
    - `tracerConfig`: _object_
    - `txHash`: _string_ (hash)
    - `txIndex`: _string_ (hex integer)


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

`result`: _object_ (the tracer's own result instead when `tracer` is set)
  - `failed`: _boolean_
  - `gas`: _integer_
  - `returnValue`: _string_ (hex data)
  - `structLogs`: array of _object_
    - `depth`: _integer_
    - `error`: optional _string_
    - `gas`: _integer_
    - `gasCost`: _integer_
    - `memory`: optional array of _string_ (32-byte hex data)
    - `op`: optional _string_
    - `pc`: _integer_
    - `refund`: optional _integer_
    - `returnData`: optional _string_ (hex data)
    - `stack`: optional array of _string_ (hex integer)
    - `storage`: optional map of _string_ (32-byte hex data)

</TabItem>
</Tabs>

### debug_traceTransactionInBlockByIndex

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockRlp`: _string_ (hex data)

2. `txIndex`: _integer_

3. `options`: _object_
    - `blockOverrides`: _object_
      - `baseFeePerGas`: _string_ (hex integer)
      - `beaconRoot`: _string_ (hash)
      - `blobBaseFee`: _string_ (hex integer)
      - `feeRecipient`: _string_ (address)
      - `gasLimit`: _string_ (hex integer)
      - `number`: _string_ (hex integer)
      - `prevRandao`: _string_ (hash)
      - `time`: _string_ (hex integer)
      - `withdrawals`: array of _object_
        - `address`: _string_ (address)
        - `amount`: _string_ (hex integer)
        - `index`: _string_ (hex integer)
        - `validatorIndex`: _string_ (hex integer)
    - `disableMemory`: _boolean_
    - `disableStack`: _boolean_
    - `disableStorage`: _boolean_
    - `enableMemory`: _boolean_
    - `enableReturnData`: _boolean_
    - `limit`: _integer_
    - `stateOverrides`: map of _object_
      - `balance`: _string_ (hex integer)
      - `code`: _string_ (hex data)
      - `movePrecompileToAddress`: _string_ (address)
      - `nonce`: _string_ (hex integer)
      - `state`: map of _string_ (hash)
      - `stateDiff`: map of _string_ (hash)
    - `streamMode`: _boolean_
    - `timeout`: _string_ (duration)
    - `tracer`: _string_
    - `tracerConfig`: _object_
    - `txHash`: _string_ (hash)
    - `txIndex`: _string_ (hex integer)


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

`result`: _object_ (the tracer's own result instead when `tracer` is set)
  - `failed`: _boolean_
  - `gas`: _integer_
  - `returnValue`: _string_ (hex data)
  - `structLogs`: array of _object_
    - `depth`: _integer_
    - `error`: optional _string_
    - `gas`: _integer_
    - `gasCost`: _integer_
    - `memory`: optional array of _string_ (32-byte hex data)
    - `op`: optional _string_
    - `pc`: _integer_
    - `refund`: optional _integer_
    - `returnData`: optional _string_ (hex data)
    - `stack`: optional array of _string_ (hex integer)
    - `storage`: optional map of _string_ (32-byte hex data)

</TabItem>
</Tabs>

