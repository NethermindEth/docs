---
title: proof namespace
sidebar_label: proof
sidebar_position: 7
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### proof_getTransactionByHash

This function returns the same result as `eth_getTransactionReceipt` and also a tx proof, receipt proof and serialized block headers.

<Tabs>
<TabItem value="params" label="Parameters">

1. `txHash`: *string* (hash)

2. `includeHeader`: *boolean*


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "proof_getTransactionByHash",
      "params": [txHash, includeHeader]
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
  - `blockHeader`: *string* (hex data)
  - `transaction`: *object*
    - `blockHash`: *string* (hash)
    - `blockNumber`: *string* (hex integer)
    - `hash`: *string* (hash)
    - `transactionIndex`: *string* (hex integer)
    - `type`: *integer*
  - `txProof`: array of *string* (hex data)

</TabItem>
</Tabs>

### proof_getTransactionReceipt

This function should return the same result as `eth_call` and also proofs of all used accounts and their storages and serialized block headers.

<Tabs>
<TabItem value="params" label="Parameters">

1. `txHash`: *string* (hash)

2. `includeHeader`: *boolean*


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "proof_getTransactionReceipt",
      "params": [txHash, includeHeader]
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
  - `blockHeader`: *string* (hex data)
  - `receipt`: *object*
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
  - `receiptProof`: array of *string* (hex data)
  - `txProof`: array of *string* (hex data)

</TabItem>
</Tabs>

