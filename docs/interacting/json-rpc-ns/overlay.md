---
title: overlay namespace
sidebar_label: overlay
sidebar_position: 8
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### overlay_callConstructor

Re-runs the transaction that deployed the contract at `address` with `code` as its creation code and returns the runtime code that the constructor gives. Pass the result as a `code` state override to `overlay_getLogs` or `eth_call`. Needs the state of the parent of the creation block and of the blocks after it. If a contract deployed it, the code runs as a call from that contract on the state before the deploying transaction: `ORIGIN` is that contract, state that the deploying transaction writes before the deployment (for example, constructor parameters that a factory keeps in its storage) is not there, and the transactions before it in the block also see the code at `address` and, for a constructor that gets ETH, the value added to the balance of that contract. An address whose code was removed and deployed again can give an earlier deployment.

<Tabs>
<TabItem value="params" label="Parameters">

1. `address`: _string_ (address)

2. `code`: _string_ (hex data)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "overlay_callConstructor",
      "params": [address, code]
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
  - `code`: _string_ (hex data)

`result` may be `null` in a successful response.

</TabItem>
</Tabs>

### overlay_getLogs

Re-executes the blocks in the filter range with the state overrides applied to the state before each block and returns the logs that match the filter, as `eth_getLogs` does. A block hash can select a block that is not canonical only when the range is that one block. Needs the state of each block in the range.

<Tabs>
<TabItem value="params" label="Parameters">

1. `filter`: _object_
    - `address`: _string_ (address), array of _string_ (address), or `null`
    - `blockHash`: _string_ (hash, not allowed with `fromBlock` or `toBlock`)
    - `fromBlock`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`) or _integer_ (block number)
    - `toBlock`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`) or _integer_ (block number)
    - `topics`: array of (_string_ (hash), array of _string_ (hash), or `null`)
    - `useIndex`: _boolean_

2. `stateOverride`: map of _object_
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
      "method": "overlay_getLogs",
      "params": [filter, stateOverride]
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
  - `blockTimestamp`: _string_ (hex integer)
  - `data`: _string_ (hex data)
  - `logIndex`: _string_ (hex integer)
  - `removed`: _boolean_
  - `topics`: array of _string_ (hash)
  - `transactionHash`: _string_ (hash)
  - `transactionIndex`: _string_ (hex integer)

</TabItem>
</Tabs>

