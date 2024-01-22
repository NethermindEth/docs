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

1. `startNumber`: *string* (hex integer)

2. `force`: *boolean*


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

`result`: *string* (hex integer)

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

`result`: array of *object*
  - `author`: *string* (address)
  - `baseFeePerGas`: *string* (hex integer)
  - `beneficiary`: *string* (address)
  - `blobGasUsed`: *string* (hex integer)
  - `bloom`: *string* (hex data)
  - `body`: *object*
    - `isEmpty`: *boolean*
    - `transactions`: array of *object*
      - `accessList`: *object*
      - `blobVersionedHashes`: array of *string* (hex data)
      - `chainId`: *string* (hex integer)
      - `data`: *object*
        - `hasValue`: *boolean*
        - `value`: *object*
          - `isEmpty`: *boolean*
          - `length`: *string* (hex integer)
          - `span`: *object*
            - `isEmpty`: *boolean*
            - `item`: *object*
            - `length`: *string* (hex integer)
      - `dataLength`: *string* (hex integer)
      - `decodedMaxFeePerGas`: *string* (hex integer)
      - `gasBottleneck`: *string* (hex integer)
      - `gasLimit`: *string* (hex integer)
      - `gasPrice`: *string* (hex integer)
      - `hash`: *string* (hash)
      - `isContractCreation`: *boolean*
      - `isMessageCall`: *boolean*
      - `isOPSystemTransaction`: *boolean*
      - `isServiceTransaction`: *boolean*
      - `isSigned`: *boolean*
      - `maxFeePerBlobGas`: *string* (hex integer)
      - `maxFeePerGas`: *string* (hex integer)
      - `maxPriorityFeePerGas`: *string* (hex integer)
      - `mayHaveNetworkForm`: *boolean*
      - `mint`: *string* (hex integer)
      - `networkWrapper`: *object*
      - `nonce`: *string* (hex integer)
      - `poolIndex`: *string* (hex integer)
      - `senderAddress`: *string* (address)
      - `signature`: *object*
        - `bytes`: *string* (hex data)
        - `bytesWithRecovery`: *string* (hex data)
        - `chainId`: *string* (hex integer)
        - `r`: *string* (hex data)
        - `rAsSpan`: *object*
          - `isEmpty`: *boolean*
          - `item`: *object*
          - `length`: *string* (hex integer)
        - `recoveryId`: *string* (hex data)
        - `s`: *string* (hex data)
        - `sAsSpan`: *object*
          - `isEmpty`: *boolean*
          - `item`: *object*
          - `length`: *string* (hex integer)
        - `v`: *string* (hex integer)
      - `sourceHash`: *string* (hash)
      - `supports1559`: *boolean*
      - `supportsAccessList`: *boolean*
      - `supportsBlobs`: *boolean*
      - `timestamp`: *string* (hex integer)
      - `to`: *string* (address)
      - `type`: *integer*
      - `value`: *string* (hex integer)
    - `uncles`: array of *object*
      - `auRaSignature`: *string* (hex data)
      - `auRaStep`: *string* (hex integer)
      - `author`: *string* (address)
      - `baseFeePerGas`: *string* (hex integer)
      - `beneficiary`: *string* (address)
      - `blobGasUsed`: *string* (hex integer)
      - `bloom`: *string* (hex data)
      - `difficulty`: *string* (hex integer)
      - `excessBlobGas`: *string* (hex integer)
      - `extraData`: *string* (hex data)
      - `gasBeneficiary`: *string* (address)
      - `gasLimit`: *string* (hex integer)
      - `gasUsed`: *string* (hex integer)
      - `hasBody`: *boolean*
      - `hash`: *string* (hash)
      - `hasTransactions`: *boolean*
      - `isGenesis`: *boolean*
      - `isPostMerge`: *boolean*
      - `maybeParent`: *object*
      - `mixHash`: *string* (hash)
      - `nonce`: *string* (hex integer)
      - `number`: *string* (hex integer)
      - `parentBeaconBlockRoot`: *string* (hash)
      - `parentHash`: *string* (hash)
      - `random`: *string* (hash)
      - `receiptsRoot`: *string* (hash)
      - `sealEngineType`: *string*
      - `stateRoot`: *string* (hash)
      - `timestamp`: *string* (hex integer)
      - `timestampDate`: *object*
        - `date`: *object*
          <!--[circular ref]-->
        - `day`: *string* (hex integer)
        - `dayOfWeek`: *integer*
        - `dayOfYear`: *string* (hex integer)
        - `hour`: *string* (hex integer)
        - `kind`: *integer*
        - `microsecond`: *string* (hex integer)
        - `millisecond`: *string* (hex integer)
        - `minute`: *string* (hex integer)
        - `month`: *string* (hex integer)
        - `nanosecond`: *string* (hex integer)
        - `second`: *string* (hex integer)
        - `ticks`: *string* (hex integer)
        - `timeOfDay`: *object*
          - `days`: *string* (hex integer)
          - `hours`: *string* (hex integer)
          - `microseconds`: *string* (hex integer)
          - `milliseconds`: *string* (hex integer)
          - `minutes`: *string* (hex integer)
          - `nanoseconds`: *string* (hex integer)
          - `seconds`: *string* (hex integer)
          - `ticks`: *string* (hex integer)
          - `totalDays`: *object*
          - `totalHours`: *object*
          - `totalMicroseconds`: *object*
          - `totalMilliseconds`: *object*
          - `totalMinutes`: *object*
          - `totalNanoseconds`: *object*
          - `totalSeconds`: *object*
        - `year`: *string* (hex integer)
      - `totalDifficulty`: *string* (hex integer)
      - `txRoot`: *string* (hash)
      - `unclesHash`: *string* (hash)
      - `withdrawalsRoot`: *string* (hash)
    - `withdrawals`: array of *object*
      - `address`: *string* (address)
      - `amountInGwei`: *string* (hex integer)
      - `amountInWei`: *string* (hex integer)
      - `index`: *string* (hex integer)
      - `validatorIndex`: *string* (hex integer)
  - `difficulty`: *string* (hex integer)
  - `excessBlobGas`: *string* (hex integer)
  - `extraData`: *string* (hex data)
  - `gasLimit`: *string* (hex integer)
  - `gasUsed`: *string* (hex integer)
  - `hash`: *string* (hash)
  - `header`: *object*
    - `auRaSignature`: *string* (hex data)
    - `auRaStep`: *string* (hex integer)
    - `author`: *string* (address)
    - `baseFeePerGas`: *string* (hex integer)
    - `beneficiary`: *string* (address)
    - `blobGasUsed`: *string* (hex integer)
    - `bloom`: *string* (hex data)
    - `difficulty`: *string* (hex integer)
    - `excessBlobGas`: *string* (hex integer)
    - `extraData`: *string* (hex data)
    - `gasBeneficiary`: *string* (address)
    - `gasLimit`: *string* (hex integer)
    - `gasUsed`: *string* (hex integer)
    - `hasBody`: *boolean*
    - `hash`: *string* (hash)
    - `hasTransactions`: *boolean*
    - `isGenesis`: *boolean*
    - `isPostMerge`: *boolean*
    - `maybeParent`: *object*
    - `mixHash`: *string* (hash)
    - `nonce`: *string* (hex integer)
    - `number`: *string* (hex integer)
    - `parentBeaconBlockRoot`: *string* (hash)
    - `parentHash`: *string* (hash)
    - `random`: *string* (hash)
    - `receiptsRoot`: *string* (hash)
    - `sealEngineType`: *string*
    - `stateRoot`: *string* (hash)
    - `timestamp`: *string* (hex integer)
    - `timestampDate`: *object*
      - `date`: *object*
        <!--[circular ref]-->
      - `day`: *string* (hex integer)
      - `dayOfWeek`: *integer*
      - `dayOfYear`: *string* (hex integer)
      - `hour`: *string* (hex integer)
      - `kind`: *integer*
      - `microsecond`: *string* (hex integer)
      - `millisecond`: *string* (hex integer)
      - `minute`: *string* (hex integer)
      - `month`: *string* (hex integer)
      - `nanosecond`: *string* (hex integer)
      - `second`: *string* (hex integer)
      - `ticks`: *string* (hex integer)
      - `timeOfDay`: *object*
        - `days`: *string* (hex integer)
        - `hours`: *string* (hex integer)
        - `microseconds`: *string* (hex integer)
        - `milliseconds`: *string* (hex integer)
        - `minutes`: *string* (hex integer)
        - `nanoseconds`: *string* (hex integer)
        - `seconds`: *string* (hex integer)
        - `ticks`: *string* (hex integer)
        - `totalDays`: *object*
        - `totalHours`: *object*
        - `totalMicroseconds`: *object*
        - `totalMilliseconds`: *object*
        - `totalMinutes`: *object*
        - `totalNanoseconds`: *object*
        - `totalSeconds`: *object*
      - `year`: *string* (hex integer)
    - `totalDifficulty`: *string* (hex integer)
    - `txRoot`: *string* (hash)
    - `unclesHash`: *string* (hash)
    - `withdrawalsRoot`: *string* (hash)
  - `isBodyMissing`: *boolean*
  - `isGenesis`: *boolean*
  - `isPostMerge`: *boolean*
  - `mixHash`: *string* (hash)
  - `nonce`: *string* (hex integer)
  - `number`: *string* (hex integer)
  - `parentBeaconBlockRoot`: *string* (hash)
  - `parentHash`: *string* (hash)
  - `receiptsRoot`: *string* (hash)
  - `stateRoot`: *string* (hash)
  - `timestamp`: *string* (hex integer)
  - `timestampDate`: *object*
    - `date`: *object*
      <!--[circular ref]-->
    - `day`: *string* (hex integer)
    - `dayOfWeek`: *integer*
    - `dayOfYear`: *string* (hex integer)
    - `hour`: *string* (hex integer)
    - `kind`: *integer*
    - `microsecond`: *string* (hex integer)
    - `millisecond`: *string* (hex integer)
    - `minute`: *string* (hex integer)
    - `month`: *string* (hex integer)
    - `nanosecond`: *string* (hex integer)
    - `second`: *string* (hex integer)
    - `ticks`: *string* (hex integer)
    - `timeOfDay`: *object*
      - `days`: *string* (hex integer)
      - `hours`: *string* (hex integer)
      - `microseconds`: *string* (hex integer)
      - `milliseconds`: *string* (hex integer)
      - `minutes`: *string* (hex integer)
      - `nanoseconds`: *string* (hex integer)
      - `seconds`: *string* (hex integer)
      - `ticks`: *string* (hex integer)
      - `totalDays`: *object*
      - `totalHours`: *object*
      - `totalMicroseconds`: *object*
      - `totalMilliseconds`: *object*
      - `totalMinutes`: *object*
      - `totalNanoseconds`: *object*
      - `totalSeconds`: *object*
    - `year`: *string* (hex integer)
  - `totalDifficulty`: *string* (hex integer)
  - `transactions`: array of *object*
    - `accessList`: *object*
    - `blobVersionedHashes`: array of *string* (hex data)
    - `chainId`: *string* (hex integer)
    - `data`: *object*
      - `hasValue`: *boolean*
      - `value`: *object*
        - `isEmpty`: *boolean*
        - `length`: *string* (hex integer)
        - `span`: *object*
          - `isEmpty`: *boolean*
          - `item`: *object*
          - `length`: *string* (hex integer)
    - `dataLength`: *string* (hex integer)
    - `decodedMaxFeePerGas`: *string* (hex integer)
    - `gasBottleneck`: *string* (hex integer)
    - `gasLimit`: *string* (hex integer)
    - `gasPrice`: *string* (hex integer)
    - `hash`: *string* (hash)
    - `isContractCreation`: *boolean*
    - `isMessageCall`: *boolean*
    - `isOPSystemTransaction`: *boolean*
    - `isServiceTransaction`: *boolean*
    - `isSigned`: *boolean*
    - `maxFeePerBlobGas`: *string* (hex integer)
    - `maxFeePerGas`: *string* (hex integer)
    - `maxPriorityFeePerGas`: *string* (hex integer)
    - `mayHaveNetworkForm`: *boolean*
    - `mint`: *string* (hex integer)
    - `networkWrapper`: *object*
    - `nonce`: *string* (hex integer)
    - `poolIndex`: *string* (hex integer)
    - `senderAddress`: *string* (address)
    - `signature`: *object*
      - `bytes`: *string* (hex data)
      - `bytesWithRecovery`: *string* (hex data)
      - `chainId`: *string* (hex integer)
      - `r`: *string* (hex data)
      - `rAsSpan`: *object*
        - `isEmpty`: *boolean*
        - `item`: *object*
        - `length`: *string* (hex integer)
      - `recoveryId`: *string* (hex data)
      - `s`: *string* (hex data)
      - `sAsSpan`: *object*
        - `isEmpty`: *boolean*
        - `item`: *object*
        - `length`: *string* (hex integer)
      - `v`: *string* (hex integer)
    - `sourceHash`: *string* (hash)
    - `supports1559`: *boolean*
    - `supportsAccessList`: *boolean*
    - `supportsBlobs`: *boolean*
    - `timestamp`: *string* (hex integer)
    - `to`: *string* (address)
    - `type`: *integer*
    - `value`: *string* (hex integer)
  - `txRoot`: *string* (hash)
  - `uncles`: array of *object*
    - `auRaSignature`: *string* (hex data)
    - `auRaStep`: *string* (hex integer)
    - `author`: *string* (address)
    - `baseFeePerGas`: *string* (hex integer)
    - `beneficiary`: *string* (address)
    - `blobGasUsed`: *string* (hex integer)
    - `bloom`: *string* (hex data)
    - `difficulty`: *string* (hex integer)
    - `excessBlobGas`: *string* (hex integer)
    - `extraData`: *string* (hex data)
    - `gasBeneficiary`: *string* (address)
    - `gasLimit`: *string* (hex integer)
    - `gasUsed`: *string* (hex integer)
    - `hasBody`: *boolean*
    - `hash`: *string* (hash)
    - `hasTransactions`: *boolean*
    - `isGenesis`: *boolean*
    - `isPostMerge`: *boolean*
    - `maybeParent`: *object*
    - `mixHash`: *string* (hash)
    - `nonce`: *string* (hex integer)
    - `number`: *string* (hex integer)
    - `parentBeaconBlockRoot`: *string* (hash)
    - `parentHash`: *string* (hash)
    - `random`: *string* (hash)
    - `receiptsRoot`: *string* (hash)
    - `sealEngineType`: *string*
    - `stateRoot`: *string* (hash)
    - `timestamp`: *string* (hex integer)
    - `timestampDate`: *object*
      - `date`: *object*
        <!--[circular ref]-->
      - `day`: *string* (hex integer)
      - `dayOfWeek`: *integer*
      - `dayOfYear`: *string* (hex integer)
      - `hour`: *string* (hex integer)
      - `kind`: *integer*
      - `microsecond`: *string* (hex integer)
      - `millisecond`: *string* (hex integer)
      - `minute`: *string* (hex integer)
      - `month`: *string* (hex integer)
      - `nanosecond`: *string* (hex integer)
      - `second`: *string* (hex integer)
      - `ticks`: *string* (hex integer)
      - `timeOfDay`: *object*
        - `days`: *string* (hex integer)
        - `hours`: *string* (hex integer)
        - `microseconds`: *string* (hex integer)
        - `milliseconds`: *string* (hex integer)
        - `minutes`: *string* (hex integer)
        - `nanoseconds`: *string* (hex integer)
        - `seconds`: *string* (hex integer)
        - `ticks`: *string* (hex integer)
        - `totalDays`: *object*
        - `totalHours`: *object*
        - `totalMicroseconds`: *object*
        - `totalMilliseconds`: *object*
        - `totalMinutes`: *object*
        - `totalNanoseconds`: *object*
        - `totalSeconds`: *object*
      - `year`: *string* (hex integer)
    - `totalDifficulty`: *string* (hex integer)
    - `txRoot`: *string* (hash)
    - `unclesHash`: *string* (hash)
    - `withdrawalsRoot`: *string* (hash)
  - `unclesHash`: *string* (hash)
  - `withdrawals`: array of *object*
    - `address`: *string* (address)
    - `amountInGwei`: *string* (hex integer)
    - `amountInWei`: *string* (hex integer)
    - `index`: *string* (hex integer)
    - `validatorIndex`: *string* (hex integer)
  - `withdrawalsRoot`: *string* (hash)

</TabItem>
</Tabs>

### debug_getBlockRlp

Retrieves a block in the RLP-serialized form.

<Tabs>
<TabItem value="params" label="Parameters">

1. `number`: *string* (hex integer)


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

`result`: *string* (hex data)

</TabItem>
</Tabs>

### debug_getBlockRlpByHash

Retrieves a block in the RLP-serialized form.

<Tabs>
<TabItem value="params" label="Parameters">

1. `hash`: *string* (hash)


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

`result`: *string* (hex data)

</TabItem>
</Tabs>

### debug_getChainLevel

Retrieves a representation of tree branches on a given chain level (Nethermind specific).

<Tabs>
<TabItem value="params" label="Parameters">

1. `number`: *string* (hex integer)


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

`result`: *object*
  - `blockInfos`: array of *object*
    - `blockHash`: *string* (hash)
    - `isFinalized`: *boolean*
    - `totalDifficulty`: *string* (hex integer)
    - `wasProcessed`: *boolean*
  - `hasBlockOnMainChain`: *boolean*

</TabItem>
</Tabs>

### debug_getConfigValue

Retrieves the Nethermind configuration value, e.g. JsonRpc.Enabled

<Tabs>
<TabItem value="params" label="Parameters">

1. `category`: *string*

2. `name`: *string*


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

`result`: *object*

</TabItem>
</Tabs>

### debug_getRawBlock

Get Raw Block format.

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockParameter`: *string* (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)


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

`result`: *string* (hex data)

</TabItem>
</Tabs>

### debug_getRawHeader

Get Raw Header format.

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockParameter`: *string* (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)


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

`result`: *string* (hex data)

</TabItem>
</Tabs>

### debug_getRawReceipts

Get Raw Receipt format.

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockParameter`: *string* (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)


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

`result`: array of *string* (hex data)

</TabItem>
</Tabs>

### debug_getRawTransaction

Get Raw Transaction format.

<Tabs>
<TabItem value="params" label="Parameters">

1. `transactionHash`: *string* (hash)


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

`result`: *string* (hex data)

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

`result`: *object*
  - `currentStage`: *string*

</TabItem>
</Tabs>

### debug_insertReceipts

Insert receipts for the block after verifying receipts root correctness.

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockParameter`: *string* (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)

2. `receiptForRpc`: array of *object*
  - `blobGasPrice`: *string* (hex integer)
  - `blobGasUsed`: *string* (hex integer)
  - `blockHash`: *string* (hash)
  - `blockNumber`: *string* (hex integer)
  - `contractAddress`: *string* (address)
  - `cumulativeGasUsed`: *string* (hex integer)
  - `effectiveGasPrice`: *string* (hex integer)
  - `error`: *string*
  - `from`: *string* (address)
  - `gasUsed`: *string* (hex integer)
  - `logs`: array of *object*
    - `address`: *string* (address)
    - `blockHash`: *string* (hash)
    - `blockNumber`: *string* (hex integer)
    - `data`: *string* (hex data)
    - `logIndex`: *string* (hex integer)
    - `removed`: *boolean*
    - `topics`: array of *string* (hash)
    - `transactionHash`: *string* (hash)
    - `transactionIndex`: *string* (hex integer)
  - `logsBloom`: *string* (hex data)
  - `root`: *string* (hash)
  - `status`: *string* (hex integer)
  - `to`: *string* (address)
  - `transactionHash`: *string* (hash)
  - `transactionIndex`: *string* (hex integer)
  - `type`: *integer*


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

`result`: *boolean*

</TabItem>
</Tabs>

### debug_migrateReceipts

Sets the block number up to which receipts will be migrated to (Nethermind specific).

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockNumber`: *string* (hex integer)


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
      "params": [blockNumber]
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

`result`: *boolean*

</TabItem>
</Tabs>

### debug_resetHead

Updates / resets head block - use only when the node got stuck due to DB / memory corruption (Nethermind specific).

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockHash`: *string* (hash)


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

`result`: *boolean*

</TabItem>
</Tabs>

### debug_standardTraceBlockToFile

Writes to a file the full stack trace of all invoked opcodes of the transaction specified (or all transactions if not specified) that was included in the block specified. The parent of the block must be present or it will fail.

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockHash`: *string* (hash)

2. `options`: *object*
    - `disableMemory`: *boolean*
    - `disableStack`: *boolean*
    - `disableStorage`: *boolean*
    - `enableMemory`: *boolean*
    - `timeout`: *string*
    - `tracer`: *string*
    - `tracerConfig`: *object*
      - `hasValue`: *boolean*
      - `value`: *object*
        - `item`: *object*
          <!--[circular ref]-->
        - `valueKind`: *integer*
    - `txHash`: *string* (hash)


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

`result`: array of *string*

</TabItem>
</Tabs>

### debug_traceBlock

Returns the full stack trace of all invoked opcodes of all transactions that were included in the block specified. The parent of the block must be present or it will fail.

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockRlp`: *string* (hex data)

2. `options`: *object*
    - `disableMemory`: *boolean*
    - `disableStack`: *boolean*
    - `disableStorage`: *boolean*
    - `enableMemory`: *boolean*
    - `timeout`: *string*
    - `tracer`: *string*
    - `tracerConfig`: *object*
      - `hasValue`: *boolean*
      - `value`: *object*
        - `item`: *object*
          <!--[circular ref]-->
        - `valueKind`: *integer*
    - `txHash`: *string* (hash)


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

`result`: array of *object*
  - `customTracerResult`: *object*
    - `value`: *object*
  - `entries`: array of *object*
    - `depth`: *string* (hex integer)
    - `error`: *string*
    - `gas`: *string* (hex integer)
    - `gasCost`: *string* (hex integer)
    - `memory`: array of *string*
    - `opcode`: *string*
    - `programCounter`: *string* (hex integer)
    - `stack`: array of *string*
    - `storage`: map of *string*
  - `failed`: *boolean*
  - `gas`: *string* (hex integer)
  - `returnValue`: *string* (hex data)
  - `storagesByDepth`: array of map of *string*

</TabItem>
</Tabs>

### debug_traceBlockByHash

Similar to debug_traceBlock, this method accepts a block hash and replays the block that is already present in the database.

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockHash`: *string* (hash)

2. `options`: *object*
    - `disableMemory`: *boolean*
    - `disableStack`: *boolean*
    - `disableStorage`: *boolean*
    - `enableMemory`: *boolean*
    - `timeout`: *string*
    - `tracer`: *string*
    - `tracerConfig`: *object*
      - `hasValue`: *boolean*
      - `value`: *object*
        - `item`: *object*
          <!--[circular ref]-->
        - `valueKind`: *integer*
    - `txHash`: *string* (hash)


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

`result`: array of *object*
  - `customTracerResult`: *object*
    - `value`: *object*
  - `entries`: array of *object*
    - `depth`: *string* (hex integer)
    - `error`: *string*
    - `gas`: *string* (hex integer)
    - `gasCost`: *string* (hex integer)
    - `memory`: array of *string*
    - `opcode`: *string*
    - `programCounter`: *string* (hex integer)
    - `stack`: array of *string*
    - `storage`: map of *string*
  - `failed`: *boolean*
  - `gas`: *string* (hex integer)
  - `returnValue`: *string* (hex data)
  - `storagesByDepth`: array of map of *string*

</TabItem>
</Tabs>

### debug_traceBlockByNumber

Similar to debug_traceBlock, this method accepts a block number as well as "latest" or "finalized" and replays the block that is already present in the database.

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockParameter`: *string* (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)

2. `options`: *object*
    - `disableMemory`: *boolean*
    - `disableStack`: *boolean*
    - `disableStorage`: *boolean*
    - `enableMemory`: *boolean*
    - `timeout`: *string*
    - `tracer`: *string*
    - `tracerConfig`: *object*
      - `hasValue`: *boolean*
      - `value`: *object*
        - `item`: *object*
          <!--[circular ref]-->
        - `valueKind`: *integer*
    - `txHash`: *string* (hash)


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

`result`: array of *object*
  - `customTracerResult`: *object*
    - `value`: *object*
  - `entries`: array of *object*
    - `depth`: *string* (hex integer)
    - `error`: *string*
    - `gas`: *string* (hex integer)
    - `gasCost`: *string* (hex integer)
    - `memory`: array of *string*
    - `opcode`: *string*
    - `programCounter`: *string* (hex integer)
    - `stack`: array of *string*
    - `storage`: map of *string*
  - `failed`: *boolean*
  - `gas`: *string* (hex integer)
  - `returnValue`: *string* (hex data)
  - `storagesByDepth`: array of map of *string*

</TabItem>
</Tabs>

### debug_traceCall

This method lets you run an eth_call within the context of the given block execution using the final state of parent block as the base. The block can be specified either by hash or by number. It takes the same input object as a eth_call. It returns the same output as debug_traceTransaction.

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
    - `data`: *string* (hex data)
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

2. `blockParameter`: *string* (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)

3. `options`: *object*
    - `disableMemory`: *boolean*
    - `disableStack`: *boolean*
    - `disableStorage`: *boolean*
    - `enableMemory`: *boolean*
    - `timeout`: *string*
    - `tracer`: *string*
    - `tracerConfig`: *object*
      - `hasValue`: *boolean*
      - `value`: *object*
        - `item`: *object*
          <!--[circular ref]-->
        - `valueKind`: *integer*
    - `txHash`: *string* (hash)


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

`result`: *object*
  - `customTracerResult`: *object*
    - `value`: *object*
  - `entries`: array of *object*
    - `depth`: *string* (hex integer)
    - `error`: *string*
    - `gas`: *string* (hex integer)
    - `gasCost`: *string* (hex integer)
    - `memory`: array of *string*
    - `opcode`: *string*
    - `programCounter`: *string* (hex integer)
    - `stack`: array of *string*
    - `storage`: map of *string*
  - `failed`: *boolean*
  - `gas`: *string* (hex integer)
  - `returnValue`: *string* (hex data)
  - `storagesByDepth`: array of map of *string*

</TabItem>
</Tabs>

### debug_traceTransaction

This method will attempt to run the transaction in the exact same manner as it was executed on the network. It will replay any transaction that may have been executed prior to this one before it will finally attempt to execute the transaction that corresponds to the given hash.

<Tabs>
<TabItem value="params" label="Parameters">

1. `transactionHash`: *string* (hash)

2. `options`: *object*
    - `disableMemory`: *boolean*
    - `disableStack`: *boolean*
    - `disableStorage`: *boolean*
    - `enableMemory`: *boolean*
    - `timeout`: *string*
    - `tracer`: *string*
    - `tracerConfig`: *object*
      - `hasValue`: *boolean*
      - `value`: *object*
        - `item`: *object*
          <!--[circular ref]-->
        - `valueKind`: *integer*
    - `txHash`: *string* (hash)


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

`result`: *object*
  - `customTracerResult`: *object*
    - `value`: *object*
  - `entries`: array of *object*
    - `depth`: *string* (hex integer)
    - `error`: *string*
    - `gas`: *string* (hex integer)
    - `gasCost`: *string* (hex integer)
    - `memory`: array of *string*
    - `opcode`: *string*
    - `programCounter`: *string* (hex integer)
    - `stack`: array of *string*
    - `storage`: map of *string*
  - `failed`: *boolean*
  - `gas`: *string* (hex integer)
  - `returnValue`: *string* (hex data)
  - `storagesByDepth`: array of map of *string*

</TabItem>
</Tabs>

### debug_traceTransactionByBlockAndIndex

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockParameter`: *string* (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)

2. `txIndex`: *string* (hex integer)

3. `options`: *object*
    - `disableMemory`: *boolean*
    - `disableStack`: *boolean*
    - `disableStorage`: *boolean*
    - `enableMemory`: *boolean*
    - `timeout`: *string*
    - `tracer`: *string*
    - `tracerConfig`: *object*
      - `hasValue`: *boolean*
      - `value`: *object*
        - `item`: *object*
          <!--[circular ref]-->
        - `valueKind`: *integer*
    - `txHash`: *string* (hash)


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

`result`: *object*
  - `customTracerResult`: *object*
    - `value`: *object*
  - `entries`: array of *object*
    - `depth`: *string* (hex integer)
    - `error`: *string*
    - `gas`: *string* (hex integer)
    - `gasCost`: *string* (hex integer)
    - `memory`: array of *string*
    - `opcode`: *string*
    - `programCounter`: *string* (hex integer)
    - `stack`: array of *string*
    - `storage`: map of *string*
  - `failed`: *boolean*
  - `gas`: *string* (hex integer)
  - `returnValue`: *string* (hex data)
  - `storagesByDepth`: array of map of *string*

</TabItem>
</Tabs>

### debug_traceTransactionByBlockhashAndIndex

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockHash`: *string* (hash)

2. `txIndex`: *string* (hex integer)

3. `options`: *object*
    - `disableMemory`: *boolean*
    - `disableStack`: *boolean*
    - `disableStorage`: *boolean*
    - `enableMemory`: *boolean*
    - `timeout`: *string*
    - `tracer`: *string*
    - `tracerConfig`: *object*
      - `hasValue`: *boolean*
      - `value`: *object*
        - `item`: *object*
          <!--[circular ref]-->
        - `valueKind`: *integer*
    - `txHash`: *string* (hash)


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

`result`: *object*
  - `customTracerResult`: *object*
    - `value`: *object*
  - `entries`: array of *object*
    - `depth`: *string* (hex integer)
    - `error`: *string*
    - `gas`: *string* (hex integer)
    - `gasCost`: *string* (hex integer)
    - `memory`: array of *string*
    - `opcode`: *string*
    - `programCounter`: *string* (hex integer)
    - `stack`: array of *string*
    - `storage`: map of *string*
  - `failed`: *boolean*
  - `gas`: *string* (hex integer)
  - `returnValue`: *string* (hex data)
  - `storagesByDepth`: array of map of *string*

</TabItem>
</Tabs>

### debug_traceTransactionInBlockByHash

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockRlp`: *string* (hex data)

2. `transactionHash`: *string* (hash)

3. `options`: *object*
    - `disableMemory`: *boolean*
    - `disableStack`: *boolean*
    - `disableStorage`: *boolean*
    - `enableMemory`: *boolean*
    - `timeout`: *string*
    - `tracer`: *string*
    - `tracerConfig`: *object*
      - `hasValue`: *boolean*
      - `value`: *object*
        - `item`: *object*
          <!--[circular ref]-->
        - `valueKind`: *integer*
    - `txHash`: *string* (hash)


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

`result`: *object*
  - `customTracerResult`: *object*
    - `value`: *object*
  - `entries`: array of *object*
    - `depth`: *string* (hex integer)
    - `error`: *string*
    - `gas`: *string* (hex integer)
    - `gasCost`: *string* (hex integer)
    - `memory`: array of *string*
    - `opcode`: *string*
    - `programCounter`: *string* (hex integer)
    - `stack`: array of *string*
    - `storage`: map of *string*
  - `failed`: *boolean*
  - `gas`: *string* (hex integer)
  - `returnValue`: *string* (hex data)
  - `storagesByDepth`: array of map of *string*

</TabItem>
</Tabs>

### debug_traceTransactionInBlockByIndex

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockRlp`: *string* (hex data)

2. `txIndex`: *string* (hex integer)

3. `options`: *object*
    - `disableMemory`: *boolean*
    - `disableStack`: *boolean*
    - `disableStorage`: *boolean*
    - `enableMemory`: *boolean*
    - `timeout`: *string*
    - `tracer`: *string*
    - `tracerConfig`: *object*
      - `hasValue`: *boolean*
      - `value`: *object*
        - `item`: *object*
          <!--[circular ref]-->
        - `valueKind`: *integer*
    - `txHash`: *string* (hash)


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

`result`: *object*
  - `customTracerResult`: *object*
    - `value`: *object*
  - `entries`: array of *object*
    - `depth`: *string* (hex integer)
    - `error`: *string*
    - `gas`: *string* (hex integer)
    - `gasCost`: *string* (hex integer)
    - `memory`: array of *string*
    - `opcode`: *string*
    - `programCounter`: *string* (hex integer)
    - `stack`: array of *string*
    - `storage`: map of *string*
  - `failed`: *boolean*
  - `gas`: *string* (hex integer)
  - `returnValue`: *string* (hex data)
  - `storagesByDepth`: array of map of *string*

</TabItem>
</Tabs>

