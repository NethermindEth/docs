---
title: proof namespace
sidebar_label: proof
sidebar_position: 9
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### proof_getTransactionByHash

This function returns the same result as `eth_getTransactionReceipt` and also a tx proof, receipt proof and serialized block headers.

<Tabs>
<TabItem value="params" label="Parameters">

1. `txHash`: _string_ (hash)

2. `includeHeader`: _boolean_


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

`result`: _object_
  - `blockHeader`: _string_ (hex data)
  - `transaction`: _object_
    - `blockHash`: _string_ (hash)
    - `blockNumber`: _string_ (hex integer)
    - `gas`: _string_ (hex integer)
    - `hash`: _string_ (hash)
    - `transactionIndex`: _string_ (hex integer)
    - `type`: _integer_
  - `txProof`: array of _string_ (hex data)

</TabItem>
</Tabs>

### proof_getTransactionReceipt

This function should return the same result as `eth_call` and also proofs of all used accounts and their storages and serialized block headers.

<Tabs>
<TabItem value="params" label="Parameters">

1. `txHash`: _string_ (hash)

2. `includeHeader`: _boolean_


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

`result`: _object_
  - `blockHeader`: _string_ (hex data)
  - `receipt`: _object_
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
      - `blockTimestamp`: _string_ (hex integer)
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
  - `receiptProof`: array of _string_ (hex data)
  - `txProof`: array of _string_ (hex data)

</TabItem>
</Tabs>

