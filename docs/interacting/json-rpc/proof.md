---
title: proof namespace
sidebar_label: proof
sidebar_position: 8
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
  - `blockHeader`: array of *string* (hex data)
  - `transaction`: *object*
  - `txProof`: array of array of *string* (hex data)


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
  - `blockHeader`: array of *string* (hex data)
  - `receipt`: *object*
  - `receiptProof`: array of array of *string* (hex data)
  - `txProof`: array of array of *string* (hex data)


</TabItem>
</Tabs>

