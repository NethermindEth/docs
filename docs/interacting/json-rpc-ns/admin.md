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

1. `enode`: *string*

2. `addToStaticNodes`: *boolean*


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

`result`: *string*

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

`result`: *string*

</TabItem>
</Tabs>

### admin_exportHistory

Exports a range of historic block in era1 format.

<Tabs>
<TabItem value="params" label="Parameters">

1. `destinationPath`: *string*

2. `from`: *string* (hex integer)

3. `to`: *string* (hex integer)


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

`result`: *string*

</TabItem>
</Tabs>

### admin_importHistory

Import a range of historic block from era1 directory.

<Tabs>
<TabItem value="params" label="Parameters">

1. `sourcePath`: *string*

2. `from`: *string* (hex integer)

3. `to`: *string* (hex integer)

4. `accumulatorFile`: *string*


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

`result`: *string*

</TabItem>
</Tabs>

### admin_isStateRootAvailable

True if state root for the block is available

<Tabs>
<TabItem value="params" label="Parameters">

1. `block`: *string* (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)


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

`result`: *boolean*

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

`result`: *object*
  - `enode`: *string*
  - `id`: *string*
  - `ip`: *string*
  - `listenAddress`: *string*
  - `name`: *string*
  - `ports`: *object*
    - `discovery`: *string* (hex integer)
    - `listener`: *string* (hex integer)
  - `protocols`: map of *object*
    - `chainId`: *string* (hex integer)
    - `config`: *object*
      - `beaconChainGenesisTimestamp`: *string* (hex integer)
      - `blobSchedule`: map of *object*
        - `baseFeeUpdateFraction`: *string* (hex integer)
        - `max`: *string* (hex integer)
        - `target`: *string* (hex integer)
      - `depositContractAddress`: *string* (address)
      - `eip1014Transition`: *string* (hex integer)
      - `eip1052Transition`: *string* (hex integer)
      - `eip1108Transition`: *string* (hex integer)
      - `eip1153TransitionTimestamp`: *string* (hex integer)
      - `eip1283DisableTransition`: *string* (hex integer)
      - `eip1283ReenableTransition`: *string* (hex integer)
      - `eip1283Transition`: *string* (hex integer)
      - `eip1344Transition`: *string* (hex integer)
      - `eip140Transition`: *string* (hex integer)
      - `eip145Transition`: *string* (hex integer)
      - `eip150Transition`: *string* (hex integer)
      - `eip152Transition`: *string* (hex integer)
      - `eip1559BaseFeeInitialValue`: *string* (hex integer)
      - `eip1559BaseFeeMaxChangeDenominator`: *string* (hex integer)
      - `eip1559BaseFeeMinValue`: *string* (hex integer)
      - `eip1559BaseFeeMinValueTransition`: *string* (hex integer)
      - `eip1559ElasticityMultiplier`: *string* (hex integer)
      - `eip1559FeeCollectorTransition`: *string* (hex integer)
      - `eip1559Transition`: *string* (hex integer)
      - `eip155Transition`: *string* (hex integer)
      - `eip160Transition`: *string* (hex integer)
      - `eip161abcTransition`: *string* (hex integer)
      - `eip161dTransition`: *string* (hex integer)
      - `eip1706Transition`: *string* (hex integer)
      - `eip1884Transition`: *string* (hex integer)
      - `eip2028Transition`: *string* (hex integer)
      - `eip211Transition`: *string* (hex integer)
      - `eip214Transition`: *string* (hex integer)
      - `eip2200Transition`: *string* (hex integer)
      - `eip2315Transition`: *string* (hex integer)
      - `eip2537Transition`: *string* (hex integer)
      - `eip2537TransitionTimestamp`: *string* (hex integer)
      - `eip2565Transition`: *string* (hex integer)
      - `eip2929Transition`: *string* (hex integer)
      - `eip2930Transition`: *string* (hex integer)
      - `eip2935ContractAddress`: *string* (address)
      - `eip2935TransitionTimestamp`: *string* (hex integer)
      - `eip3198Transition`: *string* (hex integer)
      - `eip3529Transition`: *string* (hex integer)
      - `eip3541Transition`: *string* (hex integer)
      - `eip3607Transition`: *string* (hex integer)
      - `eip3651TransitionTimestamp`: *string* (hex integer)
      - `eip3855TransitionTimestamp`: *string* (hex integer)
      - `eip3860TransitionTimestamp`: *string* (hex integer)
      - `eip4788ContractAddress`: *string* (address)
      - `eip4788TransitionTimestamp`: *string* (hex integer)
      - `eip4844BlobGasPriceUpdateFraction`: *string* (hex integer)
      - `eip4844FeeCollectorTransitionTimestamp`: *string* (hex integer)
      - `eip4844MinBlobGasPrice`: *string* (hex integer)
      - `eip4844TransitionTimestamp`: *string* (hex integer)
      - `eip4895TransitionTimestamp`: *string* (hex integer)
      - `eip5656TransitionTimestamp`: *string* (hex integer)
      - `eip6110TransitionTimestamp`: *string* (hex integer)
      - `eip658Transition`: *string* (hex integer)
      - `eip6780TransitionTimestamp`: *string* (hex integer)
      - `eip7002ContractAddress`: *string* (address)
      - `eip7002TransitionTimestamp`: *string* (hex integer)
      - `eip7251ContractAddress`: *string* (address)
      - `eip7251TransitionTimestamp`: *string* (hex integer)
      - `eip7623TransitionTimestamp`: *string* (hex integer)
      - `eip7702TransitionTimestamp`: *string* (hex integer)
      - `eip7Transition`: *string* (hex integer)
      - `feeCollector`: *string* (address)
      - `forkBlock`: *string* (hex integer)
      - `forkCanonHash`: *string* (hash)
      - `gasLimitBoundDivisor`: *string* (hex integer)
      - `maxCodeSize`: *string* (hex integer)
      - `maxCodeSizeTransition`: *string* (hex integer)
      - `maxCodeSizeTransitionTimestamp`: *string* (hex integer)
      - `maximumExtraDataSize`: *string* (hex integer)
      - `mergeForkIdTransition`: *string* (hex integer)
      - `minGasLimit`: *string* (hex integer)
      - `ontakeTransition`: *string* (hex integer)
      - `opGraniteTransitionTimestamp`: *string* (hex integer)
      - `opHoloceneTransitionTimestamp`: *string* (hex integer)
      - `registrar`: *string* (address)
      - `rip7212TransitionTimestamp`: *string* (hex integer)
      - `terminalPoWBlockNumber`: *string* (hex integer)
      - `terminalTotalDifficulty`: *string* (hex integer)
      - `transactionPermissionContract`: *string* (address)
      - `transactionPermissionContractTransition`: *string* (hex integer)
      - `validateChainIdTransition`: *string* (hex integer)
      - `validateReceiptsTransition`: *string* (hex integer)
    - `difficulty`: *string* (hex integer)
    - `genesisHash`: *string* (hash)
    - `headHash`: *string* (hash)
    - `newtorkId`: *string* (hex integer)

</TabItem>
</Tabs>

### admin_peers

Displays a list of connected peers including information about them (`clientId`, `host`, `port`, `address`, `isBootnode`, `isStatic`, `enode`).

<Tabs>
<TabItem value="params" label="Parameters">

1. `includeDetails`: *boolean*


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

`result`: array of *object*
  - `address`: *string*
  - `clientType`: *string*
  - `enode`: *string*
  - `ethDetails`: *string*
  - `host`: *string*
  - `id`: *string*
  - `inbound`: *boolean*
  - `isBootnode`: *boolean*
  - `isStatic`: *boolean*
  - `isTrusted`: *boolean*
  - `lastSignal`: *string*
  - `name`: *string*
  - `port`: *string* (hex integer)

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

`result`: *integer*

</TabItem>
</Tabs>

### admin_removePeer

Removes given node.

<Tabs>
<TabItem value="params" label="Parameters">

1. `enode`: *string*

2. `removeFromStaticNodes`: *boolean*


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

`result`: *string*

</TabItem>
</Tabs>

### admin_verifyTrie

Runs VerifyTrie.

<Tabs>
<TabItem value="params" label="Parameters">

1. `block`: *string* (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`)


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

`result`: *string*

</TabItem>
</Tabs>

