---
title: eth namespace
sidebar_label: eth
sidebar_position: 3
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### eth_blockNumber

Returns current block number

<Tabs>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "eth_blockNumber",
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

`result`:*string* (hex integer)

</TabItem>
</Tabs>

### eth_call

Executes a tx call (does not create a transaction)

<Tabs>
<TabItem value="params" label="Parameters">

1. `transactionCall`: *object*
    - `accessList`: array of *object*
      - `address`: *string* (address)
      - `storageKeys`: array of *string* (hex integer)
    - `blobVersionedHashes`: array of *string* (hex data)
    - `blockHash`: *object*
      - `bytes`: *object*
        - `isEmpty`: *boolean*
        - `item`: *object*
        - `length`: *string* (hex integer)
      - `valueHash256`: *object*
    - `blockNumber`: *string* (hex integer)
    - `chainId`: *string* (hex integer)
    - `from`: *string* (address)
    - `gas`: *string* (hex integer)
    - `gasPrice`: *string* (hex integer)
    - `hash`: *object*
      - `bytes`: *object*
        - `isEmpty`: *boolean*
        - `item`: *object*
        - `length`: *string* (hex integer)
      - `valueHash256`: *object*
    - `input`: *string* (hex data)
    - `isSystemTx`: *boolean*
    - `maxFeePerBlobGas`: *string* (hex integer)
    - `maxFeePerGas`: *string* (hex integer)
    - `maxPriorityFeePerGas`: *string* (hex integer)
    - `mint`: *string* (hex integer)
    - `nonce`: *string* (hex integer)
    - `r`: *string* (hex integer)
    - `s`: *string* (hex integer)
    - `sourceHash`: *object*
      - `bytes`: *object*
        - `isEmpty`: *boolean*
        - `item`: *object*
        - `length`: *string* (hex integer)
      - `valueHash256`: *object*
    - `to`: *string* (address)
    - `transactionIndex`: *string* (hex integer)
    - `type`: *integer*
    - `v`: *string* (hex integer)
    - `value`: *string* (hex integer)
    - `yParity`: *string* (hex integer)

2. `blockParameter`: *string* (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "eth_call",
      "params": [transactionCall, blockParameter]
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

`result`:*string*

</TabItem>
</Tabs>

### eth_chainId

Returns ChainID

<Tabs>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "eth_chainId",
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

`result`:*string* (hex integer)

</TabItem>
</Tabs>

### eth_createAccessList

Creates an [EIP2930](https://eips.ethereum.org/EIPS/eip-2930) type AccessList for the given transaction

<Tabs>
<TabItem value="params" label="Parameters">

1. `transactionCall`: *object*
    - `accessList`: array of *object*
      - `address`: *string* (address)
      - `storageKeys`: array of *string* (hex integer)
    - `blobVersionedHashes`: array of *string* (hex data)
    - `blockHash`: *object*
      - `bytes`: *object*
        - `isEmpty`: *boolean*
        - `item`: *object*
        - `length`: *string* (hex integer)
      - `valueHash256`: *object*
    - `blockNumber`: *string* (hex integer)
    - `chainId`: *string* (hex integer)
    - `from`: *string* (address)
    - `gas`: *string* (hex integer)
    - `gasPrice`: *string* (hex integer)
    - `hash`: *object*
      - `bytes`: *object*
        - `isEmpty`: *boolean*
        - `item`: *object*
        - `length`: *string* (hex integer)
      - `valueHash256`: *object*
    - `input`: *string* (hex data)
    - `isSystemTx`: *boolean*
    - `maxFeePerBlobGas`: *string* (hex integer)
    - `maxFeePerGas`: *string* (hex integer)
    - `maxPriorityFeePerGas`: *string* (hex integer)
    - `mint`: *string* (hex integer)
    - `nonce`: *string* (hex integer)
    - `r`: *string* (hex integer)
    - `s`: *string* (hex integer)
    - `sourceHash`: *object*
      - `bytes`: *object*
        - `isEmpty`: *boolean*
        - `item`: *object*
        - `length`: *string* (hex integer)
      - `valueHash256`: *object*
    - `to`: *string* (address)
    - `transactionIndex`: *string* (hex integer)
    - `type`: *integer*
    - `v`: *string* (hex integer)
    - `value`: *string* (hex integer)
    - `yParity`: *string* (hex integer)

2. `blockParameter`: *string* (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)

3. `optimize`: *boolean*


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "eth_createAccessList",
      "params": [transactionCall, blockParameter, optimize]
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

`result`:*object*
  - `accessList`: array of *object*
    - `address`: *string* (address)
    - `storageKeys`: array of *string* (hex integer)
  - `gasUsed`: *string* (hex integer)

</TabItem>
</Tabs>

### eth_estimateGas

Executes a tx call and returns gas used (does not create a transaction)

<Tabs>
<TabItem value="params" label="Parameters">

1. `transactionCall`: *object*
    - `accessList`: array of *object*
      - `address`: *string* (address)
      - `storageKeys`: array of *string* (hex integer)
    - `blobVersionedHashes`: array of *string* (hex data)
    - `blockHash`: *object*
      - `bytes`: *object*
        - `isEmpty`: *boolean*
        - `item`: *object*
        - `length`: *string* (hex integer)
      - `valueHash256`: *object*
    - `blockNumber`: *string* (hex integer)
    - `chainId`: *string* (hex integer)
    - `from`: *string* (address)
    - `gas`: *string* (hex integer)
    - `gasPrice`: *string* (hex integer)
    - `hash`: *object*
      - `bytes`: *object*
        - `isEmpty`: *boolean*
        - `item`: *object*
        - `length`: *string* (hex integer)
      - `valueHash256`: *object*
    - `input`: *string* (hex data)
    - `isSystemTx`: *boolean*
    - `maxFeePerBlobGas`: *string* (hex integer)
    - `maxFeePerGas`: *string* (hex integer)
    - `maxPriorityFeePerGas`: *string* (hex integer)
    - `mint`: *string* (hex integer)
    - `nonce`: *string* (hex integer)
    - `r`: *string* (hex integer)
    - `s`: *string* (hex integer)
    - `sourceHash`: *object*
      - `bytes`: *object*
        - `isEmpty`: *boolean*
        - `item`: *object*
        - `length`: *string* (hex integer)
      - `valueHash256`: *object*
    - `to`: *string* (address)
    - `transactionIndex`: *string* (hex integer)
    - `type`: *integer*
    - `v`: *string* (hex integer)
    - `value`: *string* (hex integer)
    - `yParity`: *string* (hex integer)

2. `blockParameter`: *string* (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "eth_estimateGas",
      "params": [transactionCall, blockParameter]
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

`result`:*string* (hex integer)

</TabItem>
</Tabs>

### eth_feeHistory

Returns block fee history.

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockCount`: *string* (hex integer)

2. `newestBlock`: *string* (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)

3. `rewardPercentiles`: array of *object*


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "eth_feeHistory",
      "params": [blockCount, newestBlock, rewardPercentiles]
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

`result`:*object*
  - `baseFeePerGas`: array of *string* (hex integer)
  - `gasUsedRatio`: array of *object*
  - `oldestBlock`: *string* (hex integer)
  - `reward`: array of array of *string* (hex integer)

</TabItem>
</Tabs>

### eth_getAccount

Retrieves Accounts via Address and Blocknumber

<Tabs>
<TabItem value="params" label="Parameters">

1. `accountAddress`: *string* (address)

2. `blockParameter`: *string* (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "eth_getAccount",
      "params": [accountAddress, blockParameter]
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

`result`:*object*
  - `balance`: *string* (hex integer)
  - `codeHash`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `nonce`: *string* (hex integer)
  - `storageRoot`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*

</TabItem>
</Tabs>

### eth_getBalance

Returns account balance

<Tabs>
<TabItem value="params" label="Parameters">

1. `address`: *string* (address)

2. `blockParameter`: *string* (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "eth_getBalance",
      "params": [address, blockParameter]
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

`result`:*string* (hex integer)

</TabItem>
</Tabs>

### eth_getBlockByHash

Retrieves a block by hash

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockHash`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*

2. `returnFullTransactionObjects`: *boolean*


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "eth_getBlockByHash",
      "params": [blockHash, returnFullTransactionObjects]
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

`result`:*object*
  - `author`: *string* (address)
  - `baseFeePerGas`: *string* (hex integer)
  - `blobGasUsed`: *string* (hex integer)
  - `difficulty`: *string* (hex integer)
  - `excessBlobGas`: *string* (hex integer)
  - `extraData`: *string* (hex data)
  - `gasLimit`: *string* (hex integer)
  - `gasUsed`: *string* (hex integer)
  - `hash`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `logsBloom`: *string* (hex data)
  - `miner`: *string* (address)
  - `mixHash`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `nonce`: *string* (hex data)
  - `number`: *string* (hex integer)
  - `parentBeaconBlockRoot`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `parentHash`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `receiptsRoot`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `sha3Uncles`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `signature`: *string* (hex data)
  - `size`: *string* (hex integer)
  - `stateRoot`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `step`: *string* (hex integer)
  - `timestamp`: *string* (hex integer)
  - `totalDifficulty`: *string* (hex integer)
  - `transactions`: array of *object*
  - `transactionsRoot`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `uncles`: array of *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `withdrawals`: array of *object*
    - `address`: *string* (address)
    - `amount`: *string* (hex integer)
    - `index`: *string* (hex integer)
    - `validatorIndex`: *string* (hex integer)
  - `withdrawalsRoot`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*

</TabItem>
</Tabs>

### eth_getBlockByNumber

Retrieves a block by number

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockParameter`: *string* (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)

2. `returnFullTransactionObjects`: *boolean*


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "eth_getBlockByNumber",
      "params": [blockParameter, returnFullTransactionObjects]
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

`result`:*object*
  - `author`: *string* (address)
  - `baseFeePerGas`: *string* (hex integer)
  - `blobGasUsed`: *string* (hex integer)
  - `difficulty`: *string* (hex integer)
  - `excessBlobGas`: *string* (hex integer)
  - `extraData`: *string* (hex data)
  - `gasLimit`: *string* (hex integer)
  - `gasUsed`: *string* (hex integer)
  - `hash`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `logsBloom`: *string* (hex data)
  - `miner`: *string* (address)
  - `mixHash`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `nonce`: *string* (hex data)
  - `number`: *string* (hex integer)
  - `parentBeaconBlockRoot`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `parentHash`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `receiptsRoot`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `sha3Uncles`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `signature`: *string* (hex data)
  - `size`: *string* (hex integer)
  - `stateRoot`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `step`: *string* (hex integer)
  - `timestamp`: *string* (hex integer)
  - `totalDifficulty`: *string* (hex integer)
  - `transactions`: array of *object*
  - `transactionsRoot`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `uncles`: array of *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `withdrawals`: array of *object*
    - `address`: *string* (address)
    - `amount`: *string* (hex integer)
    - `index`: *string* (hex integer)
    - `validatorIndex`: *string* (hex integer)
  - `withdrawalsRoot`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*

</TabItem>
</Tabs>

### eth_getBlockTransactionCountByHash

Returns number of transactions in the block block hash

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockHash`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "eth_getBlockTransactionCountByHash",
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

`result`:*string* (hex integer)

</TabItem>
</Tabs>

### eth_getBlockTransactionCountByNumber

Returns number of transactions in the block by block number

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
      "method": "eth_getBlockTransactionCountByNumber",
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

`result`:*string* (hex integer)

</TabItem>
</Tabs>

### eth_getCode

Returns account code at given address and block

<Tabs>
<TabItem value="params" label="Parameters">

1. `address`: *string* (address)

2. `blockParameter`: *string* (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "eth_getCode",
      "params": [address, blockParameter]
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

`result`:*string* (hex data)

</TabItem>
</Tabs>

### eth_getFilterChanges

Reads filter changes

<Tabs>
<TabItem value="params" label="Parameters">

1. `filterId`: *string* (hex integer)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "eth_getFilterChanges",
      "params": [filterId]
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

`result`:array of *object*

</TabItem>
</Tabs>

### eth_getFilterLogs

Reads filter changes

<Tabs>
<TabItem value="params" label="Parameters">

1. `filterId`: *string* (hex integer)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "eth_getFilterLogs",
      "params": [filterId]
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

`result`:array of *object*
  - `address`: *string* (address)
  - `blockHash`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `blockNumber`: *string* (hex integer)
  - `data`: *string* (hex data)
  - `logIndex`: *string* (hex integer)
  - `removed`: *boolean*
  - `topics`: array of *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `transactionHash`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `transactionIndex`: *string* (hex integer)
  - `transactionLogIndex`: *string* (hex integer)

</TabItem>
</Tabs>

### eth_getLogs

Reads logs

<Tabs>
<TabItem value="params" label="Parameters">

1. `filter`: *object*
    - `address`: *object*
    - `fromBlock`: *string* (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)
    - `toBlock`: *string* (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)
    - `topics`: array of *object*


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "eth_getLogs",
      "params": [filter]
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

`result`:array of *object*
  - `address`: *string* (address)
  - `blockHash`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `blockNumber`: *string* (hex integer)
  - `data`: *string* (hex data)
  - `logIndex`: *string* (hex integer)
  - `removed`: *boolean*
  - `topics`: array of *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `transactionHash`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `transactionIndex`: *string* (hex integer)
  - `transactionLogIndex`: *string* (hex integer)

</TabItem>
</Tabs>

### eth_getProof

https://github.com/ethereum/EIPs/issues/1186

<Tabs>
<TabItem value="params" label="Parameters">

1. `accountAddress`: *string* (address)

2. `hashRate`: array of *string* (hex integer)

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
      "method": "eth_getProof",
      "params": [accountAddress, hashRate, blockParameter]
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

`result`:*object*
  - `address`: *string* (address)
  - `balance`: *string* (hex integer)
  - `codeHash`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `nonce`: *string* (hex integer)
  - `proof`: array of *string* (hex data)
  - `storageProofs`: array of *object*
    - `key`: *string* (hex data)
    - `proof`: array of *string* (hex data)
    - `value`: *string* (hex data)
  - `storageRoot`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*

</TabItem>
</Tabs>

### eth_getStorageAt

Returns storage data at address. storage_index

<Tabs>
<TabItem value="params" label="Parameters">

1. `address`: *string* (address)

2. `positionIndex`: *string* (hex integer)

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
      "method": "eth_getStorageAt",
      "params": [address, positionIndex, blockParameter]
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

`result`:*string* (hex data)

</TabItem>
</Tabs>

### eth_getTransactionByBlockHashAndIndex

Retrieves a transaction by block hash and index

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockHash`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*

2. `positionIndex`: *string* (hex integer)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "eth_getTransactionByBlockHashAndIndex",
      "params": [blockHash, positionIndex]
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

`result`:*object*
  - `accessList`: array of *object*
    - `address`: *string* (address)
    - `storageKeys`: array of *string* (hex integer)
  - `blobVersionedHashes`: array of *string* (hex data)
  - `blockHash`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `blockNumber`: *string* (hex integer)
  - `chainId`: *string* (hex integer)
  - `from`: *string* (address)
  - `gas`: *string* (hex integer)
  - `gasPrice`: *string* (hex integer)
  - `hash`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `input`: *string* (hex data)
  - `isSystemTx`: *boolean*
  - `maxFeePerBlobGas`: *string* (hex integer)
  - `maxFeePerGas`: *string* (hex integer)
  - `maxPriorityFeePerGas`: *string* (hex integer)
  - `mint`: *string* (hex integer)
  - `nonce`: *string* (hex integer)
  - `r`: *string* (hex integer)
  - `s`: *string* (hex integer)
  - `sourceHash`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `to`: *string* (address)
  - `transactionIndex`: *string* (hex integer)
  - `type`: *integer*
  - `v`: *string* (hex integer)
  - `value`: *string* (hex integer)
  - `yParity`: *string* (hex integer)

</TabItem>
</Tabs>

### eth_getTransactionByBlockNumberAndIndex

Retrieves a transaction by block number and index

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockParameter`: *string* (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)

2. `positionIndex`: *string* (hex integer)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "eth_getTransactionByBlockNumberAndIndex",
      "params": [blockParameter, positionIndex]
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

`result`:*object*
  - `accessList`: array of *object*
    - `address`: *string* (address)
    - `storageKeys`: array of *string* (hex integer)
  - `blobVersionedHashes`: array of *string* (hex data)
  - `blockHash`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `blockNumber`: *string* (hex integer)
  - `chainId`: *string* (hex integer)
  - `from`: *string* (address)
  - `gas`: *string* (hex integer)
  - `gasPrice`: *string* (hex integer)
  - `hash`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `input`: *string* (hex data)
  - `isSystemTx`: *boolean*
  - `maxFeePerBlobGas`: *string* (hex integer)
  - `maxFeePerGas`: *string* (hex integer)
  - `maxPriorityFeePerGas`: *string* (hex integer)
  - `mint`: *string* (hex integer)
  - `nonce`: *string* (hex integer)
  - `r`: *string* (hex integer)
  - `s`: *string* (hex integer)
  - `sourceHash`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `to`: *string* (address)
  - `transactionIndex`: *string* (hex integer)
  - `type`: *integer*
  - `v`: *string* (hex integer)
  - `value`: *string* (hex integer)
  - `yParity`: *string* (hex integer)

</TabItem>
</Tabs>

### eth_getTransactionByHash

Retrieves a transaction by hash

<Tabs>
<TabItem value="params" label="Parameters">

1. `transactionHash`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "eth_getTransactionByHash",
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

`result`:*object*
  - `accessList`: array of *object*
    - `address`: *string* (address)
    - `storageKeys`: array of *string* (hex integer)
  - `blobVersionedHashes`: array of *string* (hex data)
  - `blockHash`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `blockNumber`: *string* (hex integer)
  - `chainId`: *string* (hex integer)
  - `from`: *string* (address)
  - `gas`: *string* (hex integer)
  - `gasPrice`: *string* (hex integer)
  - `hash`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `input`: *string* (hex data)
  - `isSystemTx`: *boolean*
  - `maxFeePerBlobGas`: *string* (hex integer)
  - `maxFeePerGas`: *string* (hex integer)
  - `maxPriorityFeePerGas`: *string* (hex integer)
  - `mint`: *string* (hex integer)
  - `nonce`: *string* (hex integer)
  - `r`: *string* (hex integer)
  - `s`: *string* (hex integer)
  - `sourceHash`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `to`: *string* (address)
  - `transactionIndex`: *string* (hex integer)
  - `type`: *integer*
  - `v`: *string* (hex integer)
  - `value`: *string* (hex integer)
  - `yParity`: *string* (hex integer)

</TabItem>
</Tabs>

### eth_getTransactionCount

Returns account nonce (number of trnsactions from the account since genesis) at the given block number

<Tabs>
<TabItem value="params" label="Parameters">

1. `address`: *string* (address)

2. `blockParameter`: *string* (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "eth_getTransactionCount",
      "params": [address, blockParameter]
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

`result`:*string* (hex integer)

</TabItem>
</Tabs>

### eth_getTransactionReceipt

Retrieves a transaction receipt by tx hash

<Tabs>
<TabItem value="params" label="Parameters">

1. `txHashData`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "eth_getTransactionReceipt",
      "params": [txHashData]
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

`result`:*object*
  - `blobGasPrice`: *string* (hex integer)
  - `blobGasUsed`: *string* (hex integer)
  - `blockHash`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `blockNumber`: *string* (hex integer)
  - `contractAddress`: *string* (address)
  - `cumulativeGasUsed`: *string* (hex integer)
  - `effectiveGasPrice`: *string* (hex integer)
  - `error`: *string*
  - `from`: *string* (address)
  - `gasUsed`: *string* (hex integer)
  - `logs`: array of *object*
    - `address`: *string* (address)
    - `blockHash`: *object*
      - `bytes`: *object*
        - `isEmpty`: *boolean*
        - `item`: *object*
        - `length`: *string* (hex integer)
      - `valueHash256`: *object*
    - `blockNumber`: *string* (hex integer)
    - `data`: *string* (hex data)
    - `logIndex`: *string* (hex integer)
    - `removed`: *boolean*
    - `topics`: array of *object*
      - `bytes`: *object*
        - `isEmpty`: *boolean*
        - `item`: *object*
        - `length`: *string* (hex integer)
      - `valueHash256`: *object*
    - `transactionHash`: *object*
      - `bytes`: *object*
        - `isEmpty`: *boolean*
        - `item`: *object*
        - `length`: *string* (hex integer)
      - `valueHash256`: *object*
    - `transactionIndex`: *string* (hex integer)
  - `logsBloom`: *string* (hex data)
  - `root`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `status`: *string* (hex integer)
  - `to`: *string* (address)
  - `transactionHash`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `transactionIndex`: *string* (hex integer)
  - `type`: *integer*

</TabItem>
</Tabs>

### eth_getUncleByBlockHashAndIndex

Retrieves an uncle block header by block hash and uncle index

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockHashData`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*

2. `positionIndex`: *string* (hex integer)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "eth_getUncleByBlockHashAndIndex",
      "params": [blockHashData, positionIndex]
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

`result`:*object*
  - `author`: *string* (address)
  - `baseFeePerGas`: *string* (hex integer)
  - `blobGasUsed`: *string* (hex integer)
  - `difficulty`: *string* (hex integer)
  - `excessBlobGas`: *string* (hex integer)
  - `extraData`: *string* (hex data)
  - `gasLimit`: *string* (hex integer)
  - `gasUsed`: *string* (hex integer)
  - `hash`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `logsBloom`: *string* (hex data)
  - `miner`: *string* (address)
  - `mixHash`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `nonce`: *string* (hex data)
  - `number`: *string* (hex integer)
  - `parentBeaconBlockRoot`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `parentHash`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `receiptsRoot`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `sha3Uncles`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `signature`: *string* (hex data)
  - `size`: *string* (hex integer)
  - `stateRoot`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `step`: *string* (hex integer)
  - `timestamp`: *string* (hex integer)
  - `totalDifficulty`: *string* (hex integer)
  - `transactions`: array of *object*
  - `transactionsRoot`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `uncles`: array of *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `withdrawals`: array of *object*
    - `address`: *string* (address)
    - `amount`: *string* (hex integer)
    - `index`: *string* (hex integer)
    - `validatorIndex`: *string* (hex integer)
  - `withdrawalsRoot`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*

</TabItem>
</Tabs>

### eth_getUncleByBlockNumberAndIndex

Retrieves an uncle block header by block number and uncle index

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockParameter`: *string* (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)

2. `positionIndex`: *string* (hex integer)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "eth_getUncleByBlockNumberAndIndex",
      "params": [blockParameter, positionIndex]
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

`result`:*object*
  - `author`: *string* (address)
  - `baseFeePerGas`: *string* (hex integer)
  - `blobGasUsed`: *string* (hex integer)
  - `difficulty`: *string* (hex integer)
  - `excessBlobGas`: *string* (hex integer)
  - `extraData`: *string* (hex data)
  - `gasLimit`: *string* (hex integer)
  - `gasUsed`: *string* (hex integer)
  - `hash`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `logsBloom`: *string* (hex data)
  - `miner`: *string* (address)
  - `mixHash`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `nonce`: *string* (hex data)
  - `number`: *string* (hex integer)
  - `parentBeaconBlockRoot`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `parentHash`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `receiptsRoot`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `sha3Uncles`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `signature`: *string* (hex data)
  - `size`: *string* (hex integer)
  - `stateRoot`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `step`: *string* (hex integer)
  - `timestamp`: *string* (hex integer)
  - `totalDifficulty`: *string* (hex integer)
  - `transactions`: array of *object*
  - `transactionsRoot`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `uncles`: array of *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `withdrawals`: array of *object*
    - `address`: *string* (address)
    - `amount`: *string* (hex integer)
    - `index`: *string* (hex integer)
    - `validatorIndex`: *string* (hex integer)
  - `withdrawalsRoot`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*

</TabItem>
</Tabs>

### eth_getUncleCountByBlockHash

Returns number of uncles in the block by block hash

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockHash`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "eth_getUncleCountByBlockHash",
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

`result`:*string* (hex integer)

</TabItem>
</Tabs>

### eth_getUncleCountByBlockNumber

Returns number of uncles in the block by block number

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
      "method": "eth_getUncleCountByBlockNumber",
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

`result`:*string* (hex integer)

</TabItem>
</Tabs>

### eth_newBlockFilter

Creates an update filter

<Tabs>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "eth_newBlockFilter",
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

`result`:*string* (hex integer)

</TabItem>
</Tabs>

### eth_newFilter

Creates an update filter

<Tabs>
<TabItem value="params" label="Parameters">

1. `filter`: *object*
    - `address`: *object*
    - `fromBlock`: *string* (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)
    - `toBlock`: *string* (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)
    - `topics`: array of *object*


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "eth_newFilter",
      "params": [filter]
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

`result`:*string* (hex integer)

</TabItem>
</Tabs>

### eth_newPendingTransactionFilter

Creates an update filter

<Tabs>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "eth_newPendingTransactionFilter",
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

`result`:*string* (hex integer)

</TabItem>
</Tabs>

### eth_pendingTransactions

Returns the pending transactions list

<Tabs>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "eth_pendingTransactions",
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

`result`:array of *object*
  - `accessList`: array of *object*
    - `address`: *string* (address)
    - `storageKeys`: array of *string* (hex integer)
  - `blobVersionedHashes`: array of *string* (hex data)
  - `blockHash`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `blockNumber`: *string* (hex integer)
  - `chainId`: *string* (hex integer)
  - `from`: *string* (address)
  - `gas`: *string* (hex integer)
  - `gasPrice`: *string* (hex integer)
  - `hash`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `input`: *string* (hex data)
  - `isSystemTx`: *boolean*
  - `maxFeePerBlobGas`: *string* (hex integer)
  - `maxFeePerGas`: *string* (hex integer)
  - `maxPriorityFeePerGas`: *string* (hex integer)
  - `mint`: *string* (hex integer)
  - `nonce`: *string* (hex integer)
  - `r`: *string* (hex integer)
  - `s`: *string* (hex integer)
  - `sourceHash`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `to`: *string* (address)
  - `transactionIndex`: *string* (hex integer)
  - `type`: *integer*
  - `v`: *string* (hex integer)
  - `value`: *string* (hex integer)
  - `yParity`: *string* (hex integer)

</TabItem>
</Tabs>

### eth_protocolVersion

Returns ETH protocol version

<Tabs>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "eth_protocolVersion",
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

`result`:*string*

</TabItem>
</Tabs>

### eth_sendRawTransaction

Send a raw transaction to the tx pool and broadcasting

<Tabs>
<TabItem value="params" label="Parameters">

1. `transaction`: *string* (hex data)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "eth_sendRawTransaction",
      "params": [transaction]
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

`result`:*object*
  - `bytes`: *object*
    - `isEmpty`: *boolean*
    - `item`: *object*
    - `length`: *string* (hex integer)
  - `valueHash256`: *object*

</TabItem>
</Tabs>

### eth_sendTransaction

Send a transaction to the tx pool and broadcasting

<Tabs>
<TabItem value="params" label="Parameters">

1. `rpcTx`: *object*
    - `accessList`: array of *object*
      - `address`: *string* (address)
      - `storageKeys`: array of *string* (hex integer)
    - `blobVersionedHashes`: array of *string* (hex data)
    - `blockHash`: *object*
      - `bytes`: *object*
        - `isEmpty`: *boolean*
        - `item`: *object*
        - `length`: *string* (hex integer)
      - `valueHash256`: *object*
    - `blockNumber`: *string* (hex integer)
    - `chainId`: *string* (hex integer)
    - `from`: *string* (address)
    - `gas`: *string* (hex integer)
    - `gasPrice`: *string* (hex integer)
    - `hash`: *object*
      - `bytes`: *object*
        - `isEmpty`: *boolean*
        - `item`: *object*
        - `length`: *string* (hex integer)
      - `valueHash256`: *object*
    - `input`: *string* (hex data)
    - `isSystemTx`: *boolean*
    - `maxFeePerBlobGas`: *string* (hex integer)
    - `maxFeePerGas`: *string* (hex integer)
    - `maxPriorityFeePerGas`: *string* (hex integer)
    - `mint`: *string* (hex integer)
    - `nonce`: *string* (hex integer)
    - `r`: *string* (hex integer)
    - `s`: *string* (hex integer)
    - `sourceHash`: *object*
      - `bytes`: *object*
        - `isEmpty`: *boolean*
        - `item`: *object*
        - `length`: *string* (hex integer)
      - `valueHash256`: *object*
    - `to`: *string* (address)
    - `transactionIndex`: *string* (hex integer)
    - `type`: *integer*
    - `v`: *string* (hex integer)
    - `value`: *string* (hex integer)
    - `yParity`: *string* (hex integer)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "eth_sendTransaction",
      "params": [rpcTx]
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

`result`:*object*
  - `bytes`: *object*
    - `isEmpty`: *boolean*
    - `item`: *object*
    - `length`: *string* (hex integer)
  - `valueHash256`: *object*

</TabItem>
</Tabs>

### eth_syncing

Returns syncing status

<Tabs>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "eth_syncing",
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

`result`:*object*
  - `currentBlock`: *string* (hex integer)
  - `highestBlock`: *string* (hex integer)
  - `isSyncing`: *boolean*
  - `startingBlock`: *string* (hex integer)
  - `syncMode`: *integer*

</TabItem>
</Tabs>

### eth_uninstallFilter

Creates an update filter

<Tabs>
<TabItem value="params" label="Parameters">

1. `filterId`: *string* (hex integer)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "eth_uninstallFilter",
      "params": [filterId]
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

`result`:*boolean*

</TabItem>
</Tabs>

