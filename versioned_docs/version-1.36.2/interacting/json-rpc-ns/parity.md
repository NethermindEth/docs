---
title: parity namespace
sidebar_label: parity
sidebar_position: 7
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

`result`: _boolean_

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

`result`: _string_

</TabItem>
</Tabs>

### parity_getBlockReceipts

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

`result`: _object_
  - `active`: _string_ (hex integer)
  - `connected`: _string_ (hex integer)
  - `max`: _string_ (hex integer)
  - `peers`: array of _object_
    - `caps`: array of _string_
    - `id`: _string_
    - `name`: _string_
    - `network`: _object_
      - `localAddress`: _string_
      - `remoteAddress`: _string_
    - `protocols`: map of _object_
      - `difficulty`: _string_ (hex integer)
      - `headHash`: _string_ (hash)
      - `version`: _string_ (hex data)

</TabItem>
</Tabs>

### parity_pendingTransactions

Returns a list of transactions currently in the queue. If address is provided, returns transactions only with given sender address.

<Tabs>
<TabItem value="params" label="Parameters">

1. `address`: _string_ (address)


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

`result`: array of _object_
  - `blockHash`: _string_ (hash)
  - `blockNumber`: _string_ (hex integer)
  - `chainId`: _string_ (hex integer)
  - `condition`: _object_
  - `creates`: _string_ (address)
  - `from`: _string_ (address)
  - `gas`: _string_ (hex integer)
  - `gasPrice`: _string_ (hex integer)
  - `hash`: _string_ (hash)
  - `input`: _string_ (hex data)
  - `nonce`: _string_ (hex integer)
  - `publicKey`: _object_
    - `address`: _string_ (address)
    - `bytes`: _string_ (hex data)
    - `hash`: _string_ (hash)
    - `prefixedBytes`: _string_ (hex data)
  - `r`: _object_
    - `isEmpty`: _boolean_
    - `length`: _string_ (hex integer)
    - `span`: _object_
      - `isEmpty`: _boolean_
      - `item`: _object_
      - `length`: _string_ (hex integer)
  - `raw`: _string_ (hex data)
  - `s`: _object_
    - `isEmpty`: _boolean_
    - `length`: _string_ (hex integer)
    - `span`: _object_
      - `isEmpty`: _boolean_
      - `item`: _object_
      - `length`: _string_ (hex integer)
  - `standardV`: _string_ (hex integer)
  - `to`: _string_ (address)
  - `transactionIndex`: _string_ (hex integer)
  - `v`: _string_ (hex integer)
  - `value`: _string_ (hex integer)

</TabItem>
</Tabs>

### parity_setEngineSigner

<Tabs>
<TabItem value="params" label="Parameters">

1. `address`: _string_ (address)

2. `password`: _string_


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

`result`: _boolean_

</TabItem>
</Tabs>

### parity_setEngineSignerSecret

<Tabs>
<TabItem value="params" label="Parameters">

1. `privateKey`: _string_


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

`result`: _boolean_

</TabItem>
</Tabs>

