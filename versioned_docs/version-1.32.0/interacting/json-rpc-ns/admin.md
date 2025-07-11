---
title: admin namespace
sidebar_label: admin
sidebar_position: 0
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### admin_addPeer

Adds given node.

<Tabs>
<TabItem value="params" label="Parameters">

1. `enode`: _string_

2. `addToStaticNodes`: _boolean_


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "admin_addPeer",
      "params": [enode, addToStaticNodes]
    }'
```

</TabItem>
<TabItem value="response" label="Response">

Added node

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

### admin_addTrustedPeer

Adds given node as a trusted peer, allowing the node to always connect even if slots are full.

<Tabs>
<TabItem value="params" label="Parameters">

1. `enode`: _string_


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "admin_addTrustedPeer",
      "params": [enode]
    }'
```

</TabItem>
<TabItem value="response" label="Response">

Boolean indicating success

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

### admin_dataDir

Returns the absolute path to the node's data directory.

<Tabs>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "admin_dataDir",
      "params": []
    }'
```

</TabItem>
<TabItem value="response" label="Response">

The data directory path as a string.

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

### admin_exportHistory

Exports a range of historic block in era1 format.

<Tabs>
<TabItem value="params" label="Parameters">

1. `destinationPath`: _string_

2. `from`: _string_ (hex integer)

3. `to`: _string_ (hex integer)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "admin_exportHistory",
      "params": [destinationPath, from, to]
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

### admin_importHistory

Import a range of historic block from era1 directory.

<Tabs>
<TabItem value="params" label="Parameters">

1. `sourcePath`: _string_

2. `from`: _string_ (hex integer)

3. `to`: _string_ (hex integer)

4. `accumulatorFile`: _string_


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "admin_importHistory",
      "params": [sourcePath, from, to, accumulatorFile]
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

### admin_isStateRootAvailable

True if state root for the block is available

<Tabs>
<TabItem value="params" label="Parameters">

1. `block`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "admin_isStateRootAvailable",
      "params": [block]
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

### admin_nodeInfo

Displays relevant information about this node.

<Tabs>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "admin_nodeInfo",
      "params": []
    }'
```

</TabItem>
<TabItem value="response" label="Response">

Information about this node

```json
{
  "jsonrpc": "2.0",
  "id": 0,
  "result": result
}
```

`result`: _object_
  - `enode`: _string_
  - `id`: _string_
  - `ip`: _string_
  - `listenAddress`: _string_
  - `name`: _string_
  - `ports`: _object_
    - `discovery`: _string_ (hex integer)
    - `listener`: _string_ (hex integer)
  - `protocols`: map of _object_
    - `chainId`: _string_ (hex integer)
    - `config`: _object_
      - `beaconChainGenesisTimestamp`: _string_ (hex integer)
      - `blobSchedule`: map of _object_
        - `baseFeeUpdateFraction`: _string_ (hex integer)
        - `max`: _string_ (hex integer)
        - `target`: _string_ (hex integer)
      - `depositContractAddress`: _string_ (address)
      - `eip1014Transition`: _string_ (hex integer)
      - `eip1052Transition`: _string_ (hex integer)
      - `eip1108Transition`: _string_ (hex integer)
      - `eip1153TransitionTimestamp`: _string_ (hex integer)
      - `eip1283DisableTransition`: _string_ (hex integer)
      - `eip1283ReenableTransition`: _string_ (hex integer)
      - `eip1283Transition`: _string_ (hex integer)
      - `eip1344Transition`: _string_ (hex integer)
      - `eip140Transition`: _string_ (hex integer)
      - `eip145Transition`: _string_ (hex integer)
      - `eip150Transition`: _string_ (hex integer)
      - `eip152Transition`: _string_ (hex integer)
      - `eip1559BaseFeeInitialValue`: _string_ (hex integer)
      - `eip1559BaseFeeMaxChangeDenominator`: _string_ (hex integer)
      - `eip1559BaseFeeMinValue`: _string_ (hex integer)
      - `eip1559BaseFeeMinValueTransition`: _string_ (hex integer)
      - `eip1559ElasticityMultiplier`: _string_ (hex integer)
      - `eip1559FeeCollectorTransition`: _string_ (hex integer)
      - `eip1559Transition`: _string_ (hex integer)
      - `eip155Transition`: _string_ (hex integer)
      - `eip160Transition`: _string_ (hex integer)
      - `eip161abcTransition`: _string_ (hex integer)
      - `eip161dTransition`: _string_ (hex integer)
      - `eip1706Transition`: _string_ (hex integer)
      - `eip1884Transition`: _string_ (hex integer)
      - `eip2028Transition`: _string_ (hex integer)
      - `eip211Transition`: _string_ (hex integer)
      - `eip214Transition`: _string_ (hex integer)
      - `eip2200Transition`: _string_ (hex integer)
      - `eip2315Transition`: _string_ (hex integer)
      - `eip2537Transition`: _string_ (hex integer)
      - `eip2537TransitionTimestamp`: _string_ (hex integer)
      - `eip2565Transition`: _string_ (hex integer)
      - `eip2929Transition`: _string_ (hex integer)
      - `eip2930Transition`: _string_ (hex integer)
      - `eip2935ContractAddress`: _string_ (address)
      - `eip2935TransitionTimestamp`: _string_ (hex integer)
      - `eip3198Transition`: _string_ (hex integer)
      - `eip3529Transition`: _string_ (hex integer)
      - `eip3541Transition`: _string_ (hex integer)
      - `eip3607Transition`: _string_ (hex integer)
      - `eip3651TransitionTimestamp`: _string_ (hex integer)
      - `eip3855TransitionTimestamp`: _string_ (hex integer)
      - `eip3860TransitionTimestamp`: _string_ (hex integer)
      - `eip4788ContractAddress`: _string_ (address)
      - `eip4788TransitionTimestamp`: _string_ (hex integer)
      - `eip4844BlobGasPriceUpdateFraction`: _string_ (hex integer)
      - `eip4844FeeCollectorTransitionTimestamp`: _string_ (hex integer)
      - `eip4844MinBlobGasPrice`: _string_ (hex integer)
      - `eip4844TransitionTimestamp`: _string_ (hex integer)
      - `eip4895TransitionTimestamp`: _string_ (hex integer)
      - `eip5656TransitionTimestamp`: _string_ (hex integer)
      - `eip6110TransitionTimestamp`: _string_ (hex integer)
      - `eip658Transition`: _string_ (hex integer)
      - `eip6780TransitionTimestamp`: _string_ (hex integer)
      - `eip7002ContractAddress`: _string_ (address)
      - `eip7002TransitionTimestamp`: _string_ (hex integer)
      - `eip7251ContractAddress`: _string_ (address)
      - `eip7251TransitionTimestamp`: _string_ (hex integer)
      - `eip7623TransitionTimestamp`: _string_ (hex integer)
      - `eip7692TransitionTimestamp`: _string_ (hex integer)
      - `eip7702TransitionTimestamp`: _string_ (hex integer)
      - `eip7Transition`: _string_ (hex integer)
      - `feeCollector`: _string_ (address)
      - `forkBlock`: _string_ (hex integer)
      - `forkCanonHash`: _string_ (hash)
      - `gasLimitBoundDivisor`: _string_ (hex integer)
      - `maxCodeSize`: _string_ (hex integer)
      - `maxCodeSizeTransition`: _string_ (hex integer)
      - `maxCodeSizeTransitionTimestamp`: _string_ (hex integer)
      - `maximumExtraDataSize`: _string_ (hex integer)
      - `mergeForkIdTransition`: _string_ (hex integer)
      - `minGasLimit`: _string_ (hex integer)
      - `opGraniteTransitionTimestamp`: _string_ (hex integer)
      - `opHoloceneTransitionTimestamp`: _string_ (hex integer)
      - `opIsthmusTransitionTimestamp`: _string_ (hex integer)
      - `registrar`: _string_ (address)
      - `rip7212TransitionTimestamp`: _string_ (hex integer)
      - `terminalPoWBlockNumber`: _string_ (hex integer)
      - `terminalTotalDifficulty`: _string_ (hex integer)
      - `transactionPermissionContract`: _string_ (address)
      - `transactionPermissionContractTransition`: _string_ (hex integer)
      - `validateChainIdTransition`: _string_ (hex integer)
      - `validateReceiptsTransition`: _string_ (hex integer)
    - `difficulty`: _string_ (hex integer)
    - `genesisHash`: _string_ (hash)
    - `headHash`: _string_ (hash)
    - `newtorkId`: _string_ (hex integer)

</TabItem>
</Tabs>

### admin_peers

Displays a list of connected peers including information about them (`clientId`, `host`, `port`, `address`, `isBootnode`, `isStatic`, `enode`).

<Tabs>
<TabItem value="params" label="Parameters">

1. `includeDetails`: _boolean_


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "admin_peers",
      "params": [includeDetails]
    }'
```

</TabItem>
<TabItem value="response" label="Response">

List of connected peers including information

```json
{
  "jsonrpc": "2.0",
  "id": 0,
  "result": result
}
```

`result`: array of _object_
  - `address`: _string_
  - `clientType`: _string_
  - `enode`: _string_
  - `ethDetails`: _string_
  - `host`: _string_
  - `id`: _string_
  - `inbound`: _boolean_
  - `isBootnode`: _boolean_
  - `isStatic`: _boolean_
  - `isTrusted`: _boolean_
  - `lastSignal`: _string_
  - `name`: _string_
  - `port`: _string_ (hex integer)

</TabItem>
</Tabs>

### admin_prune

Runs full pruning if enabled.

<Tabs>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "admin_prune",
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

`result`: _integer_

</TabItem>
</Tabs>

### admin_removePeer

Removes given node.

<Tabs>
<TabItem value="params" label="Parameters">

1. `enode`: _string_

2. `removeFromStaticNodes`: _boolean_


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "admin_removePeer",
      "params": [enode, removeFromStaticNodes]
    }'
```

</TabItem>
<TabItem value="response" label="Response">

Removed node

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

### admin_removeTrustedPeer

Removes the given node from the trusted peers list.

<Tabs>
<TabItem value="params" label="Parameters">

1. `enode`: _string_


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "admin_removeTrustedPeer",
      "params": [enode]
    }'
```

</TabItem>
<TabItem value="response" label="Response">

Boolean indicating success

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

### admin_subscribe

Subscribes to a particular event over WebSocket. For every event that matches the subscription, a notification with event details and subscription id is sent to a client.

<Tabs>
<TabItem value="params" label="Parameters">

1. `subscriptionName`: _string_

2. `args`: _string_


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "admin_subscribe",
      "params": [subscriptionName, args]
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

### admin_unsubscribe

Unsubscribes from a subscription.

<Tabs>
<TabItem value="params" label="Parameters">

1. `subscriptionId`: _string_


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "admin_unsubscribe",
      "params": [subscriptionId]
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

### admin_verifyTrie

Runs VerifyTrie.

<Tabs>
<TabItem value="params" label="Parameters">

1. `block`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)


</TabItem>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "admin_verifyTrie",
      "params": [block]
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

