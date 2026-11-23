---
title: trace namespace
sidebar_label: trace
sidebar_position: 13
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### trace_block

<Tabs>
<TabItem value="params" label="Parameters">

1. `numberOrTag`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`), _object_ (EIP-1898 `{blockHash, requireCanonical}` or `{blockNumber}`), or _integer_ (block number, if `JsonRpc.StrictHexFormat` is `false`)

2. `fork`: _string_


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "trace_block",
      "params": [numberOrTag, fork]
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
  - `action`: _object_
    - `address`: _string_ (address)
    - `author`: _string_ (address)
    - `balance`: _string_ (hex integer)
    - `callType`: _string_
    - `creationMethod`: _string_
    - `from`: _string_ (address)
    - `gas`: _string_ (hex integer)
    - `init`: _string_ (hex data)
    - `input`: _string_ (hex data)
    - `refundAddress`: _string_ (address)
    - `rewardType`: _string_
    - `to`: _string_ (address)
    - `value`: _string_ (hex integer)
  - `blockHash`: _string_ (hash)
  - `blockNumber`: _integer_
  - `error`: optional _string_
  - `result`: _object_ or `null`
    - `address`: optional _string_ (address)
    - `code`: optional _string_ (hex data)
    - `gasUsed`: _string_ (hex integer)
    - `output`: optional _string_ (hex data)
  - `subtraces`: _integer_
  - `traceAddress`: array of _integer_ or `null`
  - `transactionHash`: _string_ (hash) or `null`
  - `transactionPosition`: _integer_ or `null`
  - `type`: _string_

</TabItem>
</Tabs>

### trace_call

Executes and traces a call without submitting a transaction. A non-null `input` takes precedence over `data`. Blob versioned hashes are decoded as byte arrays; invalid lengths are rejected during Blob transaction conversion, not JSON decoding. For duplicate fields, the last value is used.

<Tabs>
<TabItem value="params" label="Parameters">

1. `call`: _object_
    - `blockHash`: _string_ (hash)
    - `blockNumber`: _string_ (hex integer)
    - `blockTimestamp`: _string_ (hex integer)
    - `gas`: _string_ (hex integer)
    - `hash`: _string_ (hash)
    - `transactionIndex`: _string_ (hex integer)
    - `type`: _string_ (transaction type)

2. `traceTypes`: array of _string_

3. `blockParameter`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`), _object_ (EIP-1898 `{blockHash, requireCanonical}` or `{blockNumber}`), or _integer_ (block number, if `JsonRpc.StrictHexFormat` is `false`)

4. `stateOverride`: map of _object_
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
      "method": "trace_call",
      "params": [call, traceTypes, blockParameter, stateOverride]
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
  - `output`: _string_ (hex data) or `null`
  - `stateDiff`: map of _object_ or `null`
    - `balance`: `"="` (unchanged), or _object_ `{"+": value}` (added), `{"-": value}` (removed) or `{"*": {"from": value, "to": value}}` (changed), with each value _string_ (hex integer)
    - `code`: `"="` (unchanged), or _object_ `{"+": value}` (added), `{"-": value}` (removed) or `{"*": {"from": value, "to": value}}` (changed), with each value _string_ (hex data)
    - `nonce`: `"="` (unchanged), or _object_ `{"+": value}` (added), `{"-": value}` (removed) or `{"*": {"from": value, "to": value}}` (changed), with each value _string_ (hex integer)
    - `storage`: map of storage slot to `"="` (unchanged), or _object_ `{"+": value}` (added), `{"-": value}` (removed) or `{"*": {"from": value, "to": value}}` (changed), with each value _string_ (32-byte hex data)
  - `trace`: array of _object_
    - `action`: _object_
      - `address`: _string_ (address)
      - `author`: _string_ (address)
      - `balance`: _string_ (hex integer)
      - `callType`: _string_
      - `creationMethod`: _string_
      - `from`: _string_ (address)
      - `gas`: _string_ (hex integer)
      - `init`: _string_ (hex data)
      - `input`: _string_ (hex data)
      - `refundAddress`: _string_ (address)
      - `rewardType`: _string_
      - `to`: _string_ (address)
      - `value`: _string_ (hex integer)
    - `error`: optional _string_
    - `result`: _object_ or `null`
      - `address`: optional _string_ (address)
      - `code`: optional _string_ (hex data)
      - `gasUsed`: _string_ (hex integer)
      - `output`: optional _string_ (hex data)
    - `subtraces`: _integer_
    - `traceAddress`: array of _integer_
    - `type`: _string_
  - `transactionHash`: optional _string_ (hash)
  - `vmTrace`: _object_ or `null`
    - `code`: _string_ (hex data)
    - `ops`: array of _object_
      - `cost`: _integer_
      - `ex`: _object_ or `null`
        - `mem`: _object_ or `null`
          - `data`: _string_ (hex data)
          - `off`: _integer_
        - `push`: array of _string_ (hex integer) or `null`
        - `store`: _object_ or `null`
          - `key`: _string_ (hex integer)
          - `val`: _string_ (hex integer)
        - `used`: _integer_
      - `op`: optional _string_
      - `pc`: _integer_
      - `sub`: _object_ or `null`
        <!--[circular ref]-->

</TabItem>
</Tabs>

### trace_callMany

Performs multiple traces on top of a block

<Tabs>
<TabItem value="params" label="Parameters">

1. `calls`: array of [_object_ (transaction, same as `call` in `trace_call`), array of _string_ (trace type)] pairs

2. `blockParameter`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`), _object_ (EIP-1898 `{blockHash, requireCanonical}` or `{blockNumber}`), or _integer_ (block number, if `JsonRpc.StrictHexFormat` is `false`)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "trace_callMany",
      "params": [calls, blockParameter]
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
  - `output`: _string_ (hex data) or `null`
  - `stateDiff`: map of _object_ or `null`
    - `balance`: `"="` (unchanged), or _object_ `{"+": value}` (added), `{"-": value}` (removed) or `{"*": {"from": value, "to": value}}` (changed), with each value _string_ (hex integer)
    - `code`: `"="` (unchanged), or _object_ `{"+": value}` (added), `{"-": value}` (removed) or `{"*": {"from": value, "to": value}}` (changed), with each value _string_ (hex data)
    - `nonce`: `"="` (unchanged), or _object_ `{"+": value}` (added), `{"-": value}` (removed) or `{"*": {"from": value, "to": value}}` (changed), with each value _string_ (hex integer)
    - `storage`: map of storage slot to `"="` (unchanged), or _object_ `{"+": value}` (added), `{"-": value}` (removed) or `{"*": {"from": value, "to": value}}` (changed), with each value _string_ (32-byte hex data)
  - `trace`: array of _object_
    - `action`: _object_
      - `address`: _string_ (address)
      - `author`: _string_ (address)
      - `balance`: _string_ (hex integer)
      - `callType`: _string_
      - `creationMethod`: _string_
      - `from`: _string_ (address)
      - `gas`: _string_ (hex integer)
      - `init`: _string_ (hex data)
      - `input`: _string_ (hex data)
      - `refundAddress`: _string_ (address)
      - `rewardType`: _string_
      - `to`: _string_ (address)
      - `value`: _string_ (hex integer)
    - `error`: optional _string_
    - `result`: _object_ or `null`
      - `address`: optional _string_ (address)
      - `code`: optional _string_ (hex data)
      - `gasUsed`: _string_ (hex integer)
      - `output`: optional _string_ (hex data)
    - `subtraces`: _integer_
    - `traceAddress`: array of _integer_
    - `type`: _string_
  - `transactionHash`: optional _string_ (hash)
  - `vmTrace`: _object_ or `null`
    - `code`: _string_ (hex data)
    - `ops`: array of _object_
      - `cost`: _integer_
      - `ex`: _object_ or `null`
        - `mem`: _object_ or `null`
          - `data`: _string_ (hex data)
          - `off`: _integer_
        - `push`: array of _string_ (hex integer) or `null`
        - `store`: _object_ or `null`
          - `key`: _string_ (hex integer)
          - `val`: _string_ (hex integer)
        - `used`: _integer_
      - `op`: optional _string_
      - `pc`: _integer_
      - `sub`: _object_ or `null`
        <!--[circular ref]-->

</TabItem>
</Tabs>

### trace_filter

Returns traces matching the filter, in the range fromBlock to toBlock (block numbers or tags, each defaulting to latest), or in the single canonical block named by blockHash, which excludes the range. Any address in fromAddress or toAddress matches that list; an omitted, null or empty list does not restrict. mode "intersection" (default) requires a match in every list that is set; "union" requires a match in any of them.

<Tabs>
<TabItem value="params" label="Parameters">

1. `traceFilterForRpc`: _object_
    - `after`: _string_ (hex integer)
    - `blockHash`: _string_ (hash)
    - `count`: _string_ (hex integer)
    - `fromAddress`: array of _string_ (address)
    - `fromBlock`: _string_ (block number or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`), _object_ (EIP-1898 `{blockNumber}`), or _integer_ (block number, if `JsonRpc.StrictHexFormat` is `false`)
    - `mode`: _string_
    - `toAddress`: array of _string_ (address)
    - `toBlock`: _string_ (block number or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`), _object_ (EIP-1898 `{blockNumber}`), or _integer_ (block number, if `JsonRpc.StrictHexFormat` is `false`)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "trace_filter",
      "params": [traceFilterForRpc]
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
  - `action`: _object_
    - `address`: _string_ (address)
    - `author`: _string_ (address)
    - `balance`: _string_ (hex integer)
    - `callType`: _string_
    - `creationMethod`: _string_
    - `from`: _string_ (address)
    - `gas`: _string_ (hex integer)
    - `init`: _string_ (hex data)
    - `input`: _string_ (hex data)
    - `refundAddress`: _string_ (address)
    - `rewardType`: _string_
    - `to`: _string_ (address)
    - `value`: _string_ (hex integer)
  - `blockHash`: _string_ (hash)
  - `blockNumber`: _integer_
  - `error`: optional _string_
  - `result`: _object_ or `null`
    - `address`: optional _string_ (address)
    - `code`: optional _string_ (hex data)
    - `gasUsed`: _string_ (hex integer)
    - `output`: optional _string_ (hex data)
  - `subtraces`: _integer_
  - `traceAddress`: array of _integer_ or `null`
  - `transactionHash`: _string_ (hash) or `null`
  - `transactionPosition`: _integer_ or `null`
  - `type`: _string_

</TabItem>
</Tabs>

### trace_get

Returns the trace at the given traceAddress path: [] selects the root, ["0x0"] its first child. Returns null if the transaction is not found or has no trace at that path.

<Tabs>
<TabItem value="params" label="Parameters">

1. `txHash`: _string_ (hash)

2. `traceAddress`: array of _string_ (hex integer)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "trace_get",
      "params": [txHash, traceAddress]
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
  - `action`: _object_
    - `address`: _string_ (address)
    - `author`: _string_ (address)
    - `balance`: _string_ (hex integer)
    - `callType`: _string_
    - `creationMethod`: _string_
    - `from`: _string_ (address)
    - `gas`: _string_ (hex integer)
    - `init`: _string_ (hex data)
    - `input`: _string_ (hex data)
    - `refundAddress`: _string_ (address)
    - `rewardType`: _string_
    - `to`: _string_ (address)
    - `value`: _string_ (hex integer)
  - `blockHash`: _string_ (hash)
  - `blockNumber`: _integer_
  - `error`: optional _string_
  - `result`: _object_ or `null`
    - `address`: optional _string_ (address)
    - `code`: optional _string_ (hex data)
    - `gasUsed`: _string_ (hex integer)
    - `output`: optional _string_ (hex data)
  - `subtraces`: _integer_
  - `traceAddress`: array of _integer_ or `null`
  - `transactionHash`: _string_ (hash) or `null`
  - `transactionPosition`: _integer_ or `null`
  - `type`: _string_

`result` may be `null` in a successful response.

</TabItem>
</Tabs>

### trace_rawTransaction

Traces a call to eth_sendRawTransaction without making the call, returning the traces

<Tabs>
<TabItem value="params" label="Parameters">

1. `data`: _string_ (hex data)

2. `traceTypes`: array of _string_


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "trace_rawTransaction",
      "params": [data, traceTypes]
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
  - `output`: _string_ (hex data) or `null`
  - `stateDiff`: map of _object_ or `null`
    - `balance`: `"="` (unchanged), or _object_ `{"+": value}` (added), `{"-": value}` (removed) or `{"*": {"from": value, "to": value}}` (changed), with each value _string_ (hex integer)
    - `code`: `"="` (unchanged), or _object_ `{"+": value}` (added), `{"-": value}` (removed) or `{"*": {"from": value, "to": value}}` (changed), with each value _string_ (hex data)
    - `nonce`: `"="` (unchanged), or _object_ `{"+": value}` (added), `{"-": value}` (removed) or `{"*": {"from": value, "to": value}}` (changed), with each value _string_ (hex integer)
    - `storage`: map of storage slot to `"="` (unchanged), or _object_ `{"+": value}` (added), `{"-": value}` (removed) or `{"*": {"from": value, "to": value}}` (changed), with each value _string_ (32-byte hex data)
  - `trace`: array of _object_
    - `action`: _object_
      - `address`: _string_ (address)
      - `author`: _string_ (address)
      - `balance`: _string_ (hex integer)
      - `callType`: _string_
      - `creationMethod`: _string_
      - `from`: _string_ (address)
      - `gas`: _string_ (hex integer)
      - `init`: _string_ (hex data)
      - `input`: _string_ (hex data)
      - `refundAddress`: _string_ (address)
      - `rewardType`: _string_
      - `to`: _string_ (address)
      - `value`: _string_ (hex integer)
    - `error`: optional _string_
    - `result`: _object_ or `null`
      - `address`: optional _string_ (address)
      - `code`: optional _string_ (hex data)
      - `gasUsed`: _string_ (hex integer)
      - `output`: optional _string_ (hex data)
    - `subtraces`: _integer_
    - `traceAddress`: array of _integer_
    - `type`: _string_
  - `transactionHash`: optional _string_ (hash)
  - `vmTrace`: _object_ or `null`
    - `code`: _string_ (hex data)
    - `ops`: array of _object_
      - `cost`: _integer_
      - `ex`: _object_ or `null`
        - `mem`: _object_ or `null`
          - `data`: _string_ (hex data)
          - `off`: _integer_
        - `push`: array of _string_ (hex integer) or `null`
        - `store`: _object_ or `null`
          - `key`: _string_ (hex integer)
          - `val`: _string_ (hex integer)
        - `used`: _integer_
      - `op`: optional _string_
      - `pc`: _integer_
      - `sub`: _object_ or `null`
        <!--[circular ref]-->

</TabItem>
</Tabs>

### trace_replayBlockTransactions

<Tabs>
<TabItem value="params" label="Parameters">

1. `blockParameter`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`), _object_ (EIP-1898 `{blockHash, requireCanonical}` or `{blockNumber}`), or _integer_ (block number, if `JsonRpc.StrictHexFormat` is `false`)

2. `traceTypes`: array of _string_


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "trace_replayBlockTransactions",
      "params": [blockParameter, traceTypes]
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
  - `output`: _string_ (hex data) or `null`
  - `stateDiff`: map of _object_ or `null`
    - `balance`: `"="` (unchanged), or _object_ `{"+": value}` (added), `{"-": value}` (removed) or `{"*": {"from": value, "to": value}}` (changed), with each value _string_ (hex integer)
    - `code`: `"="` (unchanged), or _object_ `{"+": value}` (added), `{"-": value}` (removed) or `{"*": {"from": value, "to": value}}` (changed), with each value _string_ (hex data)
    - `nonce`: `"="` (unchanged), or _object_ `{"+": value}` (added), `{"-": value}` (removed) or `{"*": {"from": value, "to": value}}` (changed), with each value _string_ (hex integer)
    - `storage`: map of storage slot to `"="` (unchanged), or _object_ `{"+": value}` (added), `{"-": value}` (removed) or `{"*": {"from": value, "to": value}}` (changed), with each value _string_ (32-byte hex data)
  - `trace`: array of _object_
    - `action`: _object_
      - `address`: _string_ (address)
      - `author`: _string_ (address)
      - `balance`: _string_ (hex integer)
      - `callType`: _string_
      - `creationMethod`: _string_
      - `from`: _string_ (address)
      - `gas`: _string_ (hex integer)
      - `init`: _string_ (hex data)
      - `input`: _string_ (hex data)
      - `refundAddress`: _string_ (address)
      - `rewardType`: _string_
      - `to`: _string_ (address)
      - `value`: _string_ (hex integer)
    - `error`: optional _string_
    - `result`: _object_ or `null`
      - `address`: optional _string_ (address)
      - `code`: optional _string_ (hex data)
      - `gasUsed`: _string_ (hex integer)
      - `output`: optional _string_ (hex data)
    - `subtraces`: _integer_
    - `traceAddress`: array of _integer_
    - `type`: _string_
  - `transactionHash`: optional _string_ (hash)
  - `vmTrace`: _object_ or `null`
    - `code`: _string_ (hex data)
    - `ops`: array of _object_
      - `cost`: _integer_
      - `ex`: _object_ or `null`
        - `mem`: _object_ or `null`
          - `data`: _string_ (hex data)
          - `off`: _integer_
        - `push`: array of _string_ (hex integer) or `null`
        - `store`: _object_ or `null`
          - `key`: _string_ (hex integer)
          - `val`: _string_ (hex integer)
        - `used`: _integer_
      - `op`: optional _string_
      - `pc`: _integer_
      - `sub`: _object_ or `null`
        <!--[circular ref]-->

</TabItem>
</Tabs>

### trace_replayTransaction

Replays a transaction and returns the requested traces. Returns null if the transaction is not found.

<Tabs>
<TabItem value="params" label="Parameters">

1. `txHash`: _string_ (hash)

2. `traceTypes`: array of _string_

3. `traceNonCanonical`: _boolean_


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "trace_replayTransaction",
      "params": [txHash, traceTypes, traceNonCanonical]
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
  - `output`: _string_ (hex data) or `null`
  - `stateDiff`: map of _object_ or `null`
    - `balance`: `"="` (unchanged), or _object_ `{"+": value}` (added), `{"-": value}` (removed) or `{"*": {"from": value, "to": value}}` (changed), with each value _string_ (hex integer)
    - `code`: `"="` (unchanged), or _object_ `{"+": value}` (added), `{"-": value}` (removed) or `{"*": {"from": value, "to": value}}` (changed), with each value _string_ (hex data)
    - `nonce`: `"="` (unchanged), or _object_ `{"+": value}` (added), `{"-": value}` (removed) or `{"*": {"from": value, "to": value}}` (changed), with each value _string_ (hex integer)
    - `storage`: map of storage slot to `"="` (unchanged), or _object_ `{"+": value}` (added), `{"-": value}` (removed) or `{"*": {"from": value, "to": value}}` (changed), with each value _string_ (32-byte hex data)
  - `trace`: array of _object_
    - `action`: _object_
      - `address`: _string_ (address)
      - `author`: _string_ (address)
      - `balance`: _string_ (hex integer)
      - `callType`: _string_
      - `creationMethod`: _string_
      - `from`: _string_ (address)
      - `gas`: _string_ (hex integer)
      - `init`: _string_ (hex data)
      - `input`: _string_ (hex data)
      - `refundAddress`: _string_ (address)
      - `rewardType`: _string_
      - `to`: _string_ (address)
      - `value`: _string_ (hex integer)
    - `error`: optional _string_
    - `result`: _object_ or `null`
      - `address`: optional _string_ (address)
      - `code`: optional _string_ (hex data)
      - `gasUsed`: _string_ (hex integer)
      - `output`: optional _string_ (hex data)
    - `subtraces`: _integer_
    - `traceAddress`: array of _integer_
    - `type`: _string_
  - `transactionHash`: optional _string_ (hash)
  - `vmTrace`: _object_ or `null`
    - `code`: _string_ (hex data)
    - `ops`: array of _object_
      - `cost`: _integer_
      - `ex`: _object_ or `null`
        - `mem`: _object_ or `null`
          - `data`: _string_ (hex data)
          - `off`: _integer_
        - `push`: array of _string_ (hex integer) or `null`
        - `store`: _object_ or `null`
          - `key`: _string_ (hex integer)
          - `val`: _string_ (hex integer)
        - `used`: _integer_
      - `op`: optional _string_
      - `pc`: _integer_
      - `sub`: _object_ or `null`
        <!--[circular ref]-->

`result` may be `null` in a successful response.

</TabItem>
</Tabs>

### trace_simulateV1

Returns parity like traces for simulated blocks

<Tabs>
<TabItem value="params" label="Parameters">

1. `payload`: _object_
    - `blockStateCalls`: array of _object_
      - `blockOverrides`: _object_
        - `baseFeePerGas`: _string_ (hex integer)
        - `beaconRoot`: _string_ (hash)
        - `blobBaseFee`: _string_ (hex integer)
        - `feeRecipient`: _string_ (address)
        - `gasLimit`: _string_ (hex integer)
        - `number`: _string_ (hex integer)
        - `prevRandao`: _string_ (hash)
        - `time`: _string_ (hex integer)
        - `withdrawals`: array of _object_
          - `address`: _string_ (address)
          - `amount`: _string_ (hex integer)
          - `index`: _string_ (hex integer)
          - `validatorIndex`: _string_ (hex integer)
      - `calls`: array of _object_
        - `blockHash`: _string_ (hash)
        - `blockNumber`: _string_ (hex integer)
        - `blockTimestamp`: _string_ (hex integer)
        - `gas`: _string_ (hex integer)
        - `hash`: _string_ (hash)
        - `transactionIndex`: _string_ (hex integer)
        - `type`: _string_ (transaction type)
      - `stateOverrides`: map of _object_
        - `balance`: _string_ (hex integer)
        - `code`: _string_ (hex data)
        - `movePrecompileToAddress`: _string_ (address)
        - `nonce`: _string_ (hex integer)
        - `state`: map of _string_ (hash)
        - `stateDiff`: map of _string_ (hash)
    - `returnFullTransactionObjects`: _boolean_
    - `returnFullTransactions`: _boolean_
    - `traceTransfers`: _boolean_
    - `validation`: _boolean_

2. `blockParameter`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`), _object_ (EIP-1898 `{blockHash, requireCanonical}` or `{blockNumber}`), or _integer_ (block number, if `JsonRpc.StrictHexFormat` is `false`)

3. `traceTypes`: array of _string_


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "trace_simulateV1",
      "params": [payload, blockParameter, traceTypes]
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
  - `author`: optional _string_ (address)
  - `baseFeePerGas`: optional _string_ (hex integer)
  - `blobGasUsed`: optional _string_ (hex integer)
  - `blockAccessListHash`: optional _string_ (hash)
  - `difficulty`: _string_ (hex integer)
  - `excessBlobGas`: optional _string_ (hex integer)
  - `extraData`: _string_ (hex data)
  - `gasLimit`: _string_ (hex integer)
  - `gasUsed`: _string_ (hex integer)
  - `hash`: _string_ (hash) or `null`
  - `logsBloom`: _string_ (hex data) or `null`
  - `miner`: _string_ (address) or `null`
  - `mixHash`: optional _string_ (hash)
  - `nonce`: _string_ (8-byte hex data) or `null`
  - `number`: _string_ (hex integer) or `null`
  - `parentBeaconBlockRoot`: optional _string_ (hash)
  - `parentHash`: _string_ (hash)
  - `receiptsRoot`: _string_ (hash)
  - `requestsHash`: optional _string_ (hash)
  - `sha3Uncles`: _string_ (hash)
  - `signature`: optional _string_ (hex data)
  - `size`: _string_ (hex integer)
  - `slotNumber`: optional _string_ (hex integer)
  - `stateRoot`: _string_ (hash)
  - `step`: optional _integer_
  - `timestamp`: _string_ (hex integer)
  - `totalDifficulty`: optional _string_ (hex integer)
  - `traces`: array of _object_
    - `action`: optional _object_
      - `author`: optional _string_ (address)
      - `callType`: optional _string_
      - `creationMethod`: optional _string_
      - `error`: optional _string_
      - `from`: optional _string_ (address)
      - `gas`: _string_ (hex integer)
      - `includeInTrace`: _boolean_
      - `input`: _string_ (hex data) or `null`
      - `isPrecompiled`: _boolean_
      - `result`: _object_ or `null`
        - `address`: optional _string_ (address)
        - `code`: optional _string_ (hex data)
        - `gasUsed`: _string_ (hex integer)
        - `output`: optional _string_ (hex data)
      - `rewardType`: optional _string_
      - `subtraces`: array of _object_
        <!--[circular ref]-->
      - `to`: optional _string_ (address)
      - `traceAddress`: array of _integer_ or `null`
      - `type`: optional _string_
      - `value`: _string_ (hex integer)
    - `blockHash`: optional _string_ (hash)
    - `blockNumber`: _integer_
    - `output`: optional _string_ (hex data)
    - `stateDiff`: optional map of _object_
      - `balance`: `"="` (unchanged), or _object_ `{"+": value}` (added), `{"-": value}` (removed) or `{"*": {"from": value, "to": value}}` (changed), with each value _string_ (hex integer)
      - `code`: `"="` (unchanged), or _object_ `{"+": value}` (added), `{"-": value}` (removed) or `{"*": {"from": value, "to": value}}` (changed), with each value _string_ (hex data)
      - `nonce`: `"="` (unchanged), or _object_ `{"+": value}` (added), `{"-": value}` (removed) or `{"*": {"from": value, "to": value}}` (changed), with each value _string_ (hex integer)
      - `storage`: map of storage slot to `"="` (unchanged), or _object_ `{"+": value}` (added), `{"-": value}` (removed) or `{"*": {"from": value, "to": value}}` (changed), with each value _string_ (32-byte hex data)
    - `transactionHash`: optional _string_ (hash)
    - `transactionPosition`: optional _integer_
    - `vmTrace`: optional _object_
      - `code`: _string_ (hex data)
      - `ops`: array of _object_
        - `cost`: _integer_
        - `ex`: _object_ or `null`
          - `mem`: _object_ or `null`
            - `data`: _string_ (hex data)
            - `off`: _integer_
          - `push`: array of _string_ (hex integer) or `null`
          - `store`: _object_ or `null`
            - `key`: _string_ (hex integer)
            - `val`: _string_ (hex integer)
          - `used`: _integer_
        - `op`: optional _string_
        - `pc`: _integer_
        - `sub`: _object_ or `null`
          <!--[circular ref]-->
  - `transactions`: optional array of _string_ (hash), or array of _object_ (transaction, same as `result` in `eth_getTransactionByHash`) when full transactions are requested
  - `transactionsRoot`: _string_ (hash)
  - `uncles`: array of _string_ (hash)
  - `withdrawals`: optional array of _object_
    - `address`: _string_ (address)
    - `amount`: _string_ (hex integer)
    - `index`: _string_ (hex integer)
    - `validatorIndex`: _string_ (hex integer)
  - `withdrawalsRoot`: optional _string_ (hash)

</TabItem>
</Tabs>

### trace_transaction

Returns the traces of a transaction. Returns null if the transaction is not found.

<Tabs>
<TabItem value="params" label="Parameters">

1. `txHash`: _string_ (hash)

2. `traceNonCanonical`: _boolean_


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "trace_transaction",
      "params": [txHash, traceNonCanonical]
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
  - `action`: _object_
    - `address`: _string_ (address)
    - `author`: _string_ (address)
    - `balance`: _string_ (hex integer)
    - `callType`: _string_
    - `creationMethod`: _string_
    - `from`: _string_ (address)
    - `gas`: _string_ (hex integer)
    - `init`: _string_ (hex data)
    - `input`: _string_ (hex data)
    - `refundAddress`: _string_ (address)
    - `rewardType`: _string_
    - `to`: _string_ (address)
    - `value`: _string_ (hex integer)
  - `blockHash`: _string_ (hash)
  - `blockNumber`: _integer_
  - `error`: optional _string_
  - `result`: _object_ or `null`
    - `address`: optional _string_ (address)
    - `code`: optional _string_ (hex data)
    - `gasUsed`: _string_ (hex integer)
    - `output`: optional _string_ (hex data)
  - `subtraces`: _integer_
  - `traceAddress`: array of _integer_ or `null`
  - `transactionHash`: _string_ (hash) or `null`
  - `transactionPosition`: _integer_ or `null`
  - `type`: _string_

`result` may be `null` in a successful response.

</TabItem>
</Tabs>

