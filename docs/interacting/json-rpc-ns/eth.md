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

`result`: _string_ (hex integer)

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

`result`: _string_ (hex integer)

</TabItem>
</Tabs>

### eth_call

Executes a tx call (does not create a transaction)

<Tabs>
<TabItem value="params" label="Parameters">

1. `transactionCall`: _object_
    - `blockHash`: _string_ (hash)
    - `blockNumber`: _string_ (hex integer)
    - `gas`: _string_ (hex integer)
    - `hash`: _string_ (hash)
    - `transactionIndex`: _string_ (hex integer)
    - `type`: _integer_

2. `blockParameter`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)

3. `stateOverride`: map of _object_
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
      "method": "eth_call",
      "params": [transactionCall, blockParameter, stateOverride]
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

`result`: _string_ (hex integer)

</TabItem>
</Tabs>

### eth_createAccessList

Creates an [EIP2930](https://eips.ethereum.org/EIPS/eip-2930) type AccessList for the given transaction

<Tabs>
<TabItem value="params" label="Parameters">

1. `transactionCall`: _object_
    - `blockHash`: _string_ (hash)
    - `blockNumber`: _string_ (hex integer)
    - `gas`: _string_ (hex integer)
    - `hash`: _string_ (hash)
    - `transactionIndex`: _string_ (hex integer)
    - `type`: _integer_

2. `blockParameter`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)

3. `optimize`: _boolean_


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

`result`: _object_
  - `accessList`: _object_
  - `gasUsed`: _string_ (hex integer)

</TabItem>
</Tabs>

### eth_estimateGas

Executes a tx call and returns gas used (does not create a transaction)

<Tabs>
<TabItem value="params" label="Parameters">

1. `transactionCall`: _object_
    - `blockHash`: _string_ (hash)
    - `blockNumber`: _string_ (hex integer)
    - `gas`: _string_ (hex integer)
    - `hash`: _string_ (hash)
    - `transactionIndex`: _string_ (hex integer)
    - `type`: _integer_

2. `blockParameter`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)

3. `stateOverride`: map of _object_
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
      "method": "eth_estimateGas",
      "params": [transactionCall, blockParameter, stateOverride]
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

### eth_feeHistory

Returns block fee history.

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockCount`: _string_ (hex integer)

2. `newestBlock`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)

3. `rewardPercentiles`: array of _object_


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

`result`: _object_
  - `baseFeePerBlobGas`: array of _string_ (hex integer)
  - `baseFeePerGas`: array of _string_ (hex integer)
  - `blobGasUsedRatio`: array of _object_
  - `gasUsedRatio`: array of _object_
  - `oldestBlock`: _string_ (hex integer)
  - `reward`: array of array of _string_ (hex integer)

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

`result`: _string_ (hex integer)

</TabItem>
</Tabs>

### eth_getAccount

Retrieves Accounts via Address and Blocknumber

<Tabs>
<TabItem value="params" label="Parameters">

1. `accountAddress`: _string_ (address)

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

`result`: _object_
  - `balance`: _string_ (hex integer)
  - `codeHash`: _object_
    - `bytes`: _object_
      - `isEmpty`: _boolean_
      - `item`: _object_
      - `length`: _string_ (hex integer)
    - `bytesAsSpan`: _object_
      - `isEmpty`: _boolean_
      - `item`: _object_
      - `length`: _string_ (hex integer)
  - `nonce`: _string_ (hex integer)
  - `storageRoot`: _object_
    - `bytes`: _object_
      - `isEmpty`: _boolean_
      - `item`: _object_
      - `length`: _string_ (hex integer)
    - `bytesAsSpan`: _object_
      - `isEmpty`: _boolean_
      - `item`: _object_
      - `length`: _string_ (hex integer)

</TabItem>
</Tabs>

### eth_getBalance

Returns account balance

<Tabs>
<TabItem value="params" label="Parameters">

1. `address`: _string_ (address)

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

`result`: _string_ (hex integer)

</TabItem>
</Tabs>

### eth_getBlockByHash

Retrieves a block by hash

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockHash`: _string_ (hash)

2. `returnFullTransactionObjects`: _boolean_


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

`result`: _object_
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

</TabItem>
</Tabs>

### eth_getBlockByNumber

Retrieves a block by number

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockParameter`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)

2. `returnFullTransactionObjects`: _boolean_


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

`result`: _object_
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

</TabItem>
</Tabs>

### eth_getBlockReceipts

Get receipts from all transactions from particular block, more efficient than fetching the receipts one-by-one.

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

`result`: array of _object_
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
</Tabs>

### eth_getBlockTransactionCountByHash

Returns number of transactions in the block block hash

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

`result`: _string_ (hex integer)

</TabItem>
</Tabs>

### eth_getBlockTransactionCountByNumber

Returns number of transactions in the block by block number

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

`result`: _string_ (hex integer)

</TabItem>
</Tabs>

### eth_getCode

Returns account code at given address and block

<Tabs>
<TabItem value="params" label="Parameters">

1. `address`: _string_ (address)

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

`result`: _string_ (hex data)

</TabItem>
</Tabs>

### eth_getFilterChanges

Reads filter changes

<Tabs>
<TabItem value="params" label="Parameters">

1. `filterId`: _string_ (hex integer)


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

`result`: array of _object_

</TabItem>
</Tabs>

### eth_getFilterLogs

Reads filter changes

<Tabs>
<TabItem value="params" label="Parameters">

1. `filterId`: _string_ (hex integer)


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

`result`: array of _object_
  - `address`: _string_ (address)
  - `blockHash`: _string_ (hash)
  - `blockNumber`: _string_ (hex integer)
  - `data`: _string_ (hex data)
  - `logIndex`: _string_ (hex integer)
  - `removed`: _boolean_
  - `topics`: array of _string_ (hash)
  - `transactionHash`: _string_ (hash)
  - `transactionIndex`: _string_ (hex integer)

</TabItem>
</Tabs>

### eth_getLogs

Reads logs

<Tabs>
<TabItem value="params" label="Parameters">

1. `filter`: _object_
    - `address`: _object_
    - `fromBlock`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)
    - `toBlock`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)
    - `topics`: array of _object_


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

`result`: array of _object_
  - `address`: _string_ (address)
  - `blockHash`: _string_ (hash)
  - `blockNumber`: _string_ (hex integer)
  - `data`: _string_ (hex data)
  - `logIndex`: _string_ (hex integer)
  - `removed`: _boolean_
  - `topics`: array of _string_ (hash)
  - `transactionHash`: _string_ (hash)
  - `transactionIndex`: _string_ (hex integer)

</TabItem>
</Tabs>

### eth_getProof

https://github.com/ethereum/EIPs/issues/1186

<Tabs>
<TabItem value="params" label="Parameters">

1. `accountAddress`: _string_ (address)

2. `hashRate`: array of _string_ (hex integer)

3. `blockParameter`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)


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

`result`: _object_
  - `address`: _string_ (address)
  - `balance`: _string_ (hex integer)
  - `codeHash`: _string_ (hash)
  - `nonce`: _string_ (hex integer)
  - `proof`: array of _string_ (hex data)
  - `storageProofs`: array of _object_
    - `key`: _string_ (hex data)
    - `proof`: array of _string_ (hex data)
    - `value`: _object_
      - `hasValue`: _boolean_
      - `value`: _object_
        - `isEmpty`: _boolean_
        - `length`: _string_ (hex integer)
        - `span`: _object_
          - `isEmpty`: _boolean_
          - `item`: _object_
          - `length`: _string_ (hex integer)
  - `storageRoot`: _string_ (hash)

</TabItem>
</Tabs>

### eth_getRawTransactionByHash

Retrieves a transaction RLP by hash

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

`result`: _string_

</TabItem>
</Tabs>

### eth_getStorageAt

Returns storage data at address. storage_index

<Tabs>
<TabItem value="params" label="Parameters">

1. `address`: _string_ (address)

2. `positionIndex`: _string_ (hex integer)

3. `blockParameter`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)


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

`result`: _string_ (hex data)

</TabItem>
</Tabs>

### eth_getTransactionByBlockHashAndIndex

Retrieves a transaction by block hash and index

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockHash`: _string_ (hash)

2. `positionIndex`: _string_ (hex integer)


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

`result`: _object_
  - `blockHash`: _string_ (hash)
  - `blockNumber`: _string_ (hex integer)
  - `gas`: _string_ (hex integer)
  - `hash`: _string_ (hash)
  - `transactionIndex`: _string_ (hex integer)
  - `type`: _integer_

</TabItem>
</Tabs>

### eth_getTransactionByBlockNumberAndIndex

Retrieves a transaction by block number and index

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockParameter`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)

2. `positionIndex`: _string_ (hex integer)


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

`result`: _object_
  - `blockHash`: _string_ (hash)
  - `blockNumber`: _string_ (hex integer)
  - `gas`: _string_ (hex integer)
  - `hash`: _string_ (hash)
  - `transactionIndex`: _string_ (hex integer)
  - `type`: _integer_

</TabItem>
</Tabs>

### eth_getTransactionByHash

Retrieves a transaction by hash

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

`result`: _object_
  - `blockHash`: _string_ (hash)
  - `blockNumber`: _string_ (hex integer)
  - `gas`: _string_ (hex integer)
  - `hash`: _string_ (hash)
  - `transactionIndex`: _string_ (hex integer)
  - `type`: _integer_

</TabItem>
</Tabs>

### eth_getTransactionCount

Returns account nonce (number of trnsactions from the account since genesis) at the given block number

<Tabs>
<TabItem value="params" label="Parameters">

1. `address`: _string_ (address)

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

`result`: _string_ (hex integer)

</TabItem>
</Tabs>

### eth_getTransactionReceipt

Retrieves a transaction receipt by tx hash

<Tabs>
<TabItem value="params" label="Parameters">

1. `txHashData`: _string_ (hash)


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

`result`: _object_
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
</Tabs>

### eth_getUncleByBlockHashAndIndex

Retrieves an uncle block header by block hash and uncle index

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockHashData`: _string_ (hash)

2. `positionIndex`: _string_ (hex integer)


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

`result`: _object_
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

</TabItem>
</Tabs>

### eth_getUncleByBlockNumberAndIndex

Retrieves an uncle block header by block number and uncle index

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockParameter`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)

2. `positionIndex`: _string_ (hex integer)


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

`result`: _object_
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

</TabItem>
</Tabs>

### eth_getUncleCountByBlockHash

Returns number of uncles in the block by block hash

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

`result`: _string_ (hex integer)

</TabItem>
</Tabs>

### eth_getUncleCountByBlockNumber

Returns number of uncles in the block by block number

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

`result`: _string_ (hex integer)

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

`result`: _string_ (hex integer)

</TabItem>
</Tabs>

### eth_newFilter

Creates an update filter

<Tabs>
<TabItem value="params" label="Parameters">

1. `filter`: _object_
    - `address`: _object_
    - `fromBlock`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)
    - `toBlock`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)
    - `topics`: array of _object_


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

`result`: _string_ (hex integer)

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

`result`: _string_ (hex integer)

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

`result`: array of _object_
  - `blockHash`: _string_ (hash)
  - `blockNumber`: _string_ (hex integer)
  - `gas`: _string_ (hex integer)
  - `hash`: _string_ (hash)
  - `transactionIndex`: _string_ (hex integer)
  - `type`: _integer_

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

`result`: _string_

</TabItem>
</Tabs>

### eth_sendRawTransaction

Send a raw transaction to the tx pool and broadcasting

<Tabs>
<TabItem value="params" label="Parameters">

1. `transaction`: _string_ (hex data)


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

`result`: _string_ (hash)

</TabItem>
</Tabs>

### eth_sendTransaction

Send a transaction to the tx pool and broadcasting

<Tabs>
<TabItem value="params" label="Parameters">

1. `rpcTx`: _object_
    - `blockHash`: _string_ (hash)
    - `blockNumber`: _string_ (hex integer)
    - `gas`: _string_ (hex integer)
    - `hash`: _string_ (hash)
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

`result`: _string_ (hash)

</TabItem>
</Tabs>

### eth_simulateV1

Executes a simulation across multiple blocks (does not create a transaction or block)

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
    - `traceTransfers`: _boolean_
    - `validation`: _boolean_

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

`result`: array of _object_
  - `calls`: array of _object_
    - `error`: _object_
      - `code`: _string_ (hex integer)
      - `data`: _string_
      - `message`: _string_
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
    - `returnData`: _string_ (hex data)
    - `status`: _string_ (hex integer)
  - `traces`: array of _object_
    - `error`: _object_
      - `code`: _string_ (hex integer)
      - `data`: _string_
      - `message`: _string_
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
    - `returnData`: _string_ (hex data)
    - `status`: _string_ (hex integer)

</TabItem>
</Tabs>

### eth_subscribe

Starts a subscription to a particular event over WebSockets. A JSON-RPC notification with event payload and subscription id is sent to a client for every event matching the subscription topic.

:::info
This method is enabled by adding `subscribe` to [`JsonRpc.EnabledModules`](../../fundamentals/configuration.md#jsonrpc-enabledmodules).
:::

<Tabs>
<TabItem value="params" label="Parameters">

1. `subscriptionName`: _string_

2. `filter`: _object_
   - `address`: _string_ (address)
   - `fromBlock`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)
   - `toBlock`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)
   - `topics`: array of _string_ (hex data)

</TabItem>
<TabItem value="request" label="Request" default>

```bash
wscat -c localhost:8545
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

`result`: _string_

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

Subscribes to incoming block headers. Fires a notification each time a new header is appended to the chain, including chain reorganizations.

Notification `payload`: _object_

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
  - `amount`: _string_ (hex integer)
  - `index`: _string_ (hex integer)
  - `validatorIndex`: _string_ (hex integer)
- `withdrawalsRoot`: _string_ (hash)

</details>

<details>
<summary className="nd-details-heading">

##### logs

</summary>

Subscribes to incoming logs filtered by the given options. In case of a chain reorganization, previously sent logs on the old chain will be re-sent with the `removed` field set to `true`.

Notification `payload`: _object_

- `address`: _string_ (address)
- `blockHash`: _string_ (hash)
- `blockNumber`: _string_ (hex integer)
- `data`: _string_ (hex data)
- `logIndex`: _string_ (hex integer)
- `removed`: _boolean_
- `topics`: array of _string_ (hash)
- `transactionHash`: _string_ (hash)
- `transactionIndex`: _string_ (hex integer)
- `transactionLogIndex`: _string_ (hex integer)

</details>

<details>
<summary className="nd-details-heading">

##### newPendingTransactions

</summary>

Subscribes to incoming pending transactions. Returns the transaction hash.

Notification `payload`: _string_ (hash)

</details>

<details>
<summary className="nd-details-heading">

##### droppedPendingTransactions

</summary>

Subscribes to transactions evicted from the transaction pool. Returns the transaction hash.

Notification `payload`: _string_ (hash)

</details>

<details>
<summary className="nd-details-heading">

##### syncing

</summary>

Subscribes to syncing events. Returns `false` (once) if the node is synced or an object with statistics (once) when the node starts syncing.

Notification `payload`:

- if synced: _boolean_
- if syncing: _object_
  - `currentBlock`: _string_ (hex integer)
  - `highestBlock`: _string_ (hex integer)
  - `isSyncing`: _boolean_
  - `startingBlock`: _string_ (hex integer)

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

`result`: _object_
  - `currentBlock`: _string_ (hex integer)
  - `highestBlock`: _string_ (hex integer)
  - `isSyncing`: _boolean_
  - `startingBlock`: _string_ (hex integer)
  - `syncMode`: _integer_

</TabItem>
</Tabs>

### eth_uninstallFilter

Creates an update filter

<Tabs>
<TabItem value="params" label="Parameters">

1. `filterId`: _string_ (hex integer)


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

`result`: _boolean_

</TabItem>
</Tabs>

### eth_unsubscribe

Unsubscribes from a subscription.

:::info
This method is enabled by adding `subscribe` to [`JsonRpc.EnabledModules`](../../fundamentals/configuration.md#jsonrpc-enabledmodules).
:::

<Tabs>
<TabItem value="params" label="Parameters">

1. `subscriptionId`: *string*


</TabItem>
<TabItem value="request" label="Request" default>

```bash
wscat -c localhost:8545
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
