---
title: eth namespace
sidebar_label: eth
sidebar_position: 3
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### eth_blobBaseFee

Returns the base fee per blob gas in wei

<Tabs>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "eth_blobBaseFee",
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

`result`: *string* (hex integer)

</TabItem>
</Tabs>

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

`result`: *string* (hex integer)

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

`result`: *string*

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

`result`: *string* (hex integer)

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

`result`: *object*
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

`result`: *string* (hex integer)

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

`result`: *object*
  - `baseFeePerBlobGas`: array of *string* (hex integer)
  - `baseFeePerGas`: array of *string* (hex integer)
  - `blobGasUsedRatio`: array of *object*
  - `gasUsedRatio`: array of *object*
  - `oldestBlock`: *string* (hex integer)
  - `reward`: array of array of *string* (hex integer)

</TabItem>
</Tabs>

### eth_gasPrice

Returns miner's gas price

<Tabs>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "eth_gasPrice",
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

`result`: *string* (hex integer)

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

`result`: *object*
  - `balance`: *string* (hex integer)
  - `codeHash`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `bytesAsSpan`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
  - `nonce`: *string* (hex integer)
  - `storageRoot`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `bytesAsSpan`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)

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

`result`: *string* (hex integer)

</TabItem>
</Tabs>

### eth_getBlockByHash

Retrieves a block by hash

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockHash`: *string* (hash)

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

`result`: *object*
  - `author`: *string* (address)
  - `baseFeePerGas`: *string* (hex integer)
  - `blobGasUsed`: *string* (hex integer)
  - `difficulty`: *string* (hex integer)
  - `excessBlobGas`: *string* (hex integer)
  - `extraData`: *string* (hex data)
  - `gasLimit`: *string* (hex integer)
  - `gasUsed`: *string* (hex integer)
  - `hash`: *string* (hash)
  - `logsBloom`: *string* (hex data)
  - `miner`: *string* (address)
  - `mixHash`: *string* (hash)
  - `nonce`: *string* (hex data)
  - `number`: *string* (hex integer)
  - `parentBeaconBlockRoot`: *string* (hash)
  - `parentHash`: *string* (hash)
  - `receiptsRoot`: *string* (hash)
  - `sha3Uncles`: *string* (hash)
  - `signature`: *string* (hex data)
  - `size`: *string* (hex integer)
  - `stateRoot`: *string* (hash)
  - `step`: *string* (hex integer)
  - `timestamp`: *string* (hex integer)
  - `totalDifficulty`: *string* (hex integer)
  - `transactions`: array of *object*
  - `transactionsRoot`: *string* (hash)
  - `uncles`: array of *string* (hash)
  - `withdrawals`: array of *object*
    - `address`: *string* (address)
    - `amountInGwei`: *string* (hex integer)
    - `amountInWei`: *string* (hex integer)
    - `index`: *string* (hex integer)
    - `validatorIndex`: *string* (hex integer)
  - `withdrawalsRoot`: *string* (hash)

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

`result`: *object*
  - `author`: *string* (address)
  - `baseFeePerGas`: *string* (hex integer)
  - `blobGasUsed`: *string* (hex integer)
  - `difficulty`: *string* (hex integer)
  - `excessBlobGas`: *string* (hex integer)
  - `extraData`: *string* (hex data)
  - `gasLimit`: *string* (hex integer)
  - `gasUsed`: *string* (hex integer)
  - `hash`: *string* (hash)
  - `logsBloom`: *string* (hex data)
  - `miner`: *string* (address)
  - `mixHash`: *string* (hash)
  - `nonce`: *string* (hex data)
  - `number`: *string* (hex integer)
  - `parentBeaconBlockRoot`: *string* (hash)
  - `parentHash`: *string* (hash)
  - `receiptsRoot`: *string* (hash)
  - `sha3Uncles`: *string* (hash)
  - `signature`: *string* (hex data)
  - `size`: *string* (hex integer)
  - `stateRoot`: *string* (hash)
  - `step`: *string* (hex integer)
  - `timestamp`: *string* (hex integer)
  - `totalDifficulty`: *string* (hex integer)
  - `transactions`: array of *object*
  - `transactionsRoot`: *string* (hash)
  - `uncles`: array of *string* (hash)
  - `withdrawals`: array of *object*
    - `address`: *string* (address)
    - `amountInGwei`: *string* (hex integer)
    - `amountInWei`: *string* (hex integer)
    - `index`: *string* (hex integer)
    - `validatorIndex`: *string* (hex integer)
  - `withdrawalsRoot`: *string* (hash)

</TabItem>
</Tabs>

### eth_getBlockReceipts

Get receipts from all transactions from particular block, more efficient than fetching the receipts one-by-one.

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
      "method": "eth_getBlockReceipts",
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

`result`: array of *object*
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
</Tabs>

### eth_getBlockTransactionCountByHash

Returns number of transactions in the block block hash

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

`result`: *string* (hex integer)

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

`result`: *string* (hex integer)

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

`result`: *string* (hex data)

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

`result`: array of *object*

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

`result`: array of *object*
  - `address`: *string* (address)
  - `blockHash`: *string* (hash)
  - `blockNumber`: *string* (hex integer)
  - `data`: *string* (hex data)
  - `logIndex`: *string* (hex integer)
  - `removed`: *boolean*
  - `topics`: array of *string* (hash)
  - `transactionHash`: *string* (hash)
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

`result`: array of *object*
  - `address`: *string* (address)
  - `blockHash`: *string* (hash)
  - `blockNumber`: *string* (hex integer)
  - `data`: *string* (hex data)
  - `logIndex`: *string* (hex integer)
  - `removed`: *boolean*
  - `topics`: array of *string* (hash)
  - `transactionHash`: *string* (hash)
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

`result`: *object*
  - `address`: *string* (address)
  - `balance`: *string* (hex integer)
  - `codeHash`: *string* (hash)
  - `nonce`: *string* (hex integer)
  - `proof`: array of *string* (hex data)
  - `storageProofs`: array of *object*
    - `key`: *string* (hex data)
    - `proof`: array of *string* (hex data)
    - `value`: *object*
      - `hasValue`: *boolean*
      - `value`: *object*
        - `isEmpty`: *boolean*
        - `length`: *string* (hex integer)
        - `span`: *object*
          - `isEmpty`: *boolean*
          - `item`: *object*
          - `length`: *string* (hex integer)
  - `storageRoot`: *string* (hash)

</TabItem>
</Tabs>

### eth_getRawTransactionByHash

Retrieves a transaction RLP by hash

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
      "method": "eth_getRawTransactionByHash",
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

`result`: *string*

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

`result`: *string* (hex data)

</TabItem>
</Tabs>

### eth_getTransactionByBlockHashAndIndex

Retrieves a transaction by block hash and index

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockHash`: *string* (hash)

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

`result`: *object*
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

`result`: *object*
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

</TabItem>
</Tabs>

### eth_getTransactionByHash

Retrieves a transaction by hash

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

`result`: *object*
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

`result`: *string* (hex integer)

</TabItem>
</Tabs>

### eth_getTransactionReceipt

Retrieves a transaction receipt by tx hash

<Tabs>
<TabItem value="params" label="Parameters">

1. `txHashData`: *string* (hash)


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

`result`: *object*
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
</Tabs>

### eth_getUncleByBlockHashAndIndex

Retrieves an uncle block header by block hash and uncle index

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockHashData`: *string* (hash)

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

`result`: *object*
  - `author`: *string* (address)
  - `baseFeePerGas`: *string* (hex integer)
  - `blobGasUsed`: *string* (hex integer)
  - `difficulty`: *string* (hex integer)
  - `excessBlobGas`: *string* (hex integer)
  - `extraData`: *string* (hex data)
  - `gasLimit`: *string* (hex integer)
  - `gasUsed`: *string* (hex integer)
  - `hash`: *string* (hash)
  - `logsBloom`: *string* (hex data)
  - `miner`: *string* (address)
  - `mixHash`: *string* (hash)
  - `nonce`: *string* (hex data)
  - `number`: *string* (hex integer)
  - `parentBeaconBlockRoot`: *string* (hash)
  - `parentHash`: *string* (hash)
  - `receiptsRoot`: *string* (hash)
  - `sha3Uncles`: *string* (hash)
  - `signature`: *string* (hex data)
  - `size`: *string* (hex integer)
  - `stateRoot`: *string* (hash)
  - `step`: *string* (hex integer)
  - `timestamp`: *string* (hex integer)
  - `totalDifficulty`: *string* (hex integer)
  - `transactions`: array of *object*
  - `transactionsRoot`: *string* (hash)
  - `uncles`: array of *string* (hash)
  - `withdrawals`: array of *object*
    - `address`: *string* (address)
    - `amountInGwei`: *string* (hex integer)
    - `amountInWei`: *string* (hex integer)
    - `index`: *string* (hex integer)
    - `validatorIndex`: *string* (hex integer)
  - `withdrawalsRoot`: *string* (hash)

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

`result`: *object*
  - `author`: *string* (address)
  - `baseFeePerGas`: *string* (hex integer)
  - `blobGasUsed`: *string* (hex integer)
  - `difficulty`: *string* (hex integer)
  - `excessBlobGas`: *string* (hex integer)
  - `extraData`: *string* (hex data)
  - `gasLimit`: *string* (hex integer)
  - `gasUsed`: *string* (hex integer)
  - `hash`: *string* (hash)
  - `logsBloom`: *string* (hex data)
  - `miner`: *string* (address)
  - `mixHash`: *string* (hash)
  - `nonce`: *string* (hex data)
  - `number`: *string* (hex integer)
  - `parentBeaconBlockRoot`: *string* (hash)
  - `parentHash`: *string* (hash)
  - `receiptsRoot`: *string* (hash)
  - `sha3Uncles`: *string* (hash)
  - `signature`: *string* (hex data)
  - `size`: *string* (hex integer)
  - `stateRoot`: *string* (hash)
  - `step`: *string* (hex integer)
  - `timestamp`: *string* (hex integer)
  - `totalDifficulty`: *string* (hex integer)
  - `transactions`: array of *object*
  - `transactionsRoot`: *string* (hash)
  - `uncles`: array of *string* (hash)
  - `withdrawals`: array of *object*
    - `address`: *string* (address)
    - `amountInGwei`: *string* (hex integer)
    - `amountInWei`: *string* (hex integer)
    - `index`: *string* (hex integer)
    - `validatorIndex`: *string* (hex integer)
  - `withdrawalsRoot`: *string* (hash)

</TabItem>
</Tabs>

### eth_getUncleCountByBlockHash

Returns number of uncles in the block by block hash

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

`result`: *string* (hex integer)

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

`result`: *string* (hex integer)

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

`result`: *string* (hex integer)

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

`result`: *string* (hex integer)

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

`result`: *string* (hex integer)

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

`result`: array of *object*
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

`result`: *string*

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

`result`: *string* (hash)

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

`result`: *string* (hash)

</TabItem>
</Tabs>

### eth_simulateV1

Executes a simulation across multiple blocks (does not create a transaction or block)

<Tabs>
<TabItem value="params" label="Parameters">

1. `payload`: *object*
    - `blockStateCalls`: array of *object*
      - `blockOverrides`: *object*
        - `baseFeePerGas`: *string* (hex integer)
        - `blobBaseFee`: *string* (hex integer)
        - `feeRecipient`: *string* (address)
        - `gasLimit`: *string* (hex integer)
        - `number`: *string* (hex integer)
        - `prevRandao`: *string* (hash)
        - `time`: *string* (hex integer)
      - `calls`: array of *object*
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
      - `stateOverrides`: map of *object*
        - `balance`: *string* (hex integer)
        - `code`: *string* (hex data)
        - `movePrecompileToAddress`: *string* (address)
        - `nonce`: *string* (hex integer)
        - `state`: map of *string* (hash)
        - `stateDiff`: map of *string* (hash)
    - `returnFullTransactionObjects`: *boolean*
    - `traceTransfers`: *boolean*
    - `validation`: *boolean*

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
      "method": "eth_simulateV1",
      "params": [payload, blockParameter]
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
  - `calls`: array of *object*
    - `error`: *object*
      - `code`: *string* (hex integer)
      - `data`: *string*
      - `message`: *string*
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
    - `returnData`: *string* (hex data)
    - `status`: *string* (hex integer)

</TabItem>
</Tabs>

### eth_subscribe

Starts a subscription to a particular event over WebSockets. A JSON-RPC notification with event payload and subscription id is sent to a client for every event matching the subscription topic.

:::info
This method is enabled by adding `subscribe` to [`--JsonRpc.EnabledModules`](../../fundamentals/configuration.md#jsonrpc).
:::

<Tabs>
<TabItem value="params" label="Parameters">

1. `subscriptionName`: *string*

2. `filter`: *object*
    - `address`: *string* (address)
    - `fromBlock`: *string* (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)
    - `toBlock`: *string* (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)
    - `topics`: array of *string* (hex data)

</TabItem>
<TabItem value="request" label="Request" default>

```bash
wscat -c ws://localhost:8545
```

```json
{
  "jsonrpc": "2.0",
  "id": 0,
  "method": "eth_subscribe",
  "params": [subscriptionName, args]
}
```

</TabItem>
<TabItem value="response" label="Response">

```json
{
  "jsonrpc": "2.0",
  "id": 0,
  "result": "0x..." // subscription id
}
```

`result`: *string*

</TabItem>
<TabItem value="notif" label="Notification">


```json
{
  "jsonrpc": "2.0",
  "method": "eth_subscription",
  "params": {
    "subscription": "0x...", // subscription id
    "result": payload
  }
}
```

See specific subcription topic below for `payload` details.

</TabItem>
</Tabs>

#### Subscription topics

<details>
<summary className="nd-details-heading">

##### newHeads

</summary>
<p>

Subscribes to incoming block headers. Fires a notification each time a new header is appended to the chain, including chain reorganizations.

Notification `payload`: *object*
  - `author`: *string* (address)
  - `baseFeePerGas`: *string* (hex integer)
  - `blobGasUsed`: *string* (hex integer)
  - `difficulty`: *string* (hex integer)
  - `excessBlobGas`: *string* (hex integer)
  - `extraData`: *string* (hex data)
  - `gasLimit`: *string* (hex integer)
  - `gasUsed`: *string* (hex integer)
  - `hash`: *string* (hash)
  - `logsBloom`: *string* (hex data)
  - `miner`: *string* (address)
  - `mixHash`: *string* (hash)
  - `nonce`: *string* (hex data)
  - `number`: *string* (hex integer)
  - `parentBeaconBlockRoot`: *string* (hash)
  - `parentHash`: *string* (hash)
  - `receiptsRoot`: *string* (hash)
  - `sha3Uncles`: *string* (hash)
  - `signature`: *string* (hex data)
  - `size`: *string* (hex integer)
  - `stateRoot`: *string* (hash)
  - `step`: *string* (hex integer)
  - `timestamp`: *string* (hex integer)
  - `totalDifficulty`: *string* (hex integer)
  - `transactions`: array of *object*
  - `transactionsRoot`: *string* (hash)
  - `uncles`: array of *string* (hash)
  - `withdrawals`: array of *object*
    - `address`: *string* (address)
    - `amount`: *string* (hex integer)
    - `index`: *string* (hex integer)
    - `validatorIndex`: *string* (hex integer)
  - `withdrawalsRoot`: *string* (hash)

</p>
</details>

<details>
<summary className="nd-details-heading">

##### logs

</summary>
<p>

Subscribes to incoming logs filtered by the given options. In case of a chain reorganization, previously sent logs on the old chain will be re-sent with the `removed` field set to `true`.

Notification `payload`: *object*
  - `address`: *string* (address)
  - `blockHash`: *string* (hash)
  - `blockNumber`: *string* (hex integer)
  - `data`: *string* (hex data)
  - `logIndex`: *string* (hex integer)
  - `removed`: *boolean*
  - `topics`: array of *string* (hash)
  - `transactionHash`: *string* (hash)
  - `transactionIndex`: *string* (hex integer)
  - `transactionLogIndex`: *string* (hex integer)

</p>
</details>

<details>
<summary className="nd-details-heading">

##### newPendingTransactions

</summary>
<p>

Subscribes to incoming pending transactions. Returns the transaction hash.

Notification `payload`: *string* (hash)

</p>
</details>

<details>
<summary className="nd-details-heading">

##### droppedPendingTransactions

</summary>
<p>

Subscribes to transactions evicted from the transaction pool. Returns the transaction hash.

Notification `payload`: *string* (hash)

</p>
</details>

<details>
<summary className="nd-details-heading">

##### syncing

</summary>
<p>

Subscribes to syncing events. Returns `false` (once) if the node is synced or an object with statistics (once) when the node starts syncing.

Notification `payload`:

  - if synced: *boolean*
  - if syncing: *object*
      - `currentBlock`: *string* (hex integer)
      - `highestBlock`: *string* (hex integer)
      - `isSyncing`: *boolean*
      - `startingBlock`: *string* (hex integer)

</p>
</details>
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

`result`: *object*
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

`result`: *boolean*

</TabItem>
</Tabs>

### eth_unsubscribe

Unsubscribes from a subscription.

:::info
This method is enabled by adding `subscribe` to [`--JsonRpc.EnabledModules`](../../fundamentals/configuration.md#jsonrpc).
:::

<Tabs>
<TabItem value="params" label="Parameters">

1. `subscriptionId`: *string*


</TabItem>
<TabItem value="request" label="Request" default>

```bash
wscat -c ws://localhost:8545
```

```json
{
  "jsonrpc": "2.0",
  "id": 0,
  "method": "eth_unsubscribe",
  "params": [subscriptionId]
}
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

`result`: *boolean* (`true` if unsubscribed successfully; otherwise, `false`)

</TabItem>
</Tabs>
