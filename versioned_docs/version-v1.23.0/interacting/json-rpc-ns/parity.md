---
title: parity namespace
sidebar_label: parity
sidebar_position: 5
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### parity_clearEngineSigner

<Tabs>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "parity_clearEngineSigner",
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

`result`: *boolean*

</TabItem>
</Tabs>

### parity_enode

Returns the node enode URI.

<Tabs>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "parity_enode",
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

### parity_getBlockReceipts

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
      "method": "parity_getBlockReceipts",
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

### parity_netPeers

Returns connected peers. Peers with non-empty protocols have completed handshake.

<Tabs>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "parity_netPeers",
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
  - `active`: *string* (hex integer)
  - `connected`: *string* (hex integer)
  - `max`: *string* (hex integer)
  - `peers`: array of *object*
    - `caps`: array of *string*
    - `id`: *string*
    - `name`: *string*
    - `network`: *object*
      - `localAddress`: *string*
      - `remoteAddress`: *string*
    - `protocols`: map of *object*
      - `difficulty`: *string* (hex integer)
      - `head`: *object*
        - `bytes`: *object*
          - `isEmpty`: *boolean*
          - `item`: *object*
          - `length`: *string* (hex integer)
        - `valueHash256`: *object*
      - `version`: *string* (hex data)

</TabItem>
</Tabs>

### parity_pendingTransactions

Returns a list of transactions currently in the queue. If address is provided, returns transactions only with given sender address.

<Tabs>
<TabItem value="params" label="Parameters">

1. `address`: *string* (address)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "parity_pendingTransactions",
      "params": [address]
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
  - `blockHash`: *object*
    - `bytes`: *object*
      - `isEmpty`: *boolean*
      - `item`: *object*
      - `length`: *string* (hex integer)
    - `valueHash256`: *object*
  - `blockNumber`: *string* (hex integer)
  - `chainId`: *string* (hex integer)
  - `condition`: *object*
  - `creates`: *string* (address)
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
  - `nonce`: *string* (hex integer)
  - `publicKey`: *object*
    - `address`: *string* (address)
    - `bytes`: *string* (hex data)
    - `prefixedBytes`: *string* (hex data)
  - `r`: *string* (hex data)
  - `raw`: *string* (hex data)
  - `s`: *string* (hex data)
  - `standardV`: *string* (hex integer)
  - `to`: *string* (address)
  - `transactionIndex`: *string* (hex integer)
  - `v`: *string* (hex integer)
  - `value`: *string* (hex integer)

</TabItem>
</Tabs>

### parity_setEngineSigner

<Tabs>
<TabItem value="params" label="Parameters">

1. `address`: *string* (address)

2. `password`: *string*


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "parity_setEngineSigner",
      "params": [address, password]
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

### parity_setEngineSignerSecret

<Tabs>
<TabItem value="params" label="Parameters">

1. `privateKey`: *string*


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "parity_setEngineSignerSecret",
      "params": [privateKey]
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

