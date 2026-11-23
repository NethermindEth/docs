---
title: admin namespace
sidebar_label: admin
sidebar_position: 0
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### admin_addPeer

Adds the given node as a static peer. The connection is maintained for the lifetime of the process. Set `persistent` to also write the peer to static-nodes.json so it is restored on restart.

<Tabs>
<TabItem value="params" label="Parameters">

1. `enode`: _string_

2. `persistent`: _boolean_


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
      "params": [enode, persistent]
    }'
```

</TabItem>
<TabItem value="response" label="Response">

`true` if the peer is in the static set after the call.

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

### admin_addTrustedPeer

Adds the given node to the trusted peer set so it can always connect even when slots are full. Set `persistent` to also write the peer to trusted-nodes.json so it is restored on restart.

<Tabs>
<TabItem value="params" label="Parameters">

1. `enode`: _string_

2. `persistent`: _boolean_


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
      "params": [enode, persistent]
    }'
```

</TabItem>
<TabItem value="response" label="Response">

`true` if the peer is in the trusted set after the call.

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

### admin_exportEraHistory

Exports a range of historic blocks in erae format.

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
      "method": "admin_exportEraHistory",
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

### admin_exportHistory

Exports a range of historic block in era1 format.

<Tabs>
<TabItem value="params" label="Parameters">

1. `destinationPath`: _string_

2. `from`: _integer_

3. `to`: _integer_


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

### admin_importEraHistory

Imports a range of historic blocks from an erae directory.

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
      "method": "admin_importEraHistory",
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

### admin_importHistory

Import a range of historic block from era1 directory.

<Tabs>
<TabItem value="params" label="Parameters">

1. `sourcePath`: _string_

2. `from`: _integer_

3. `to`: _integer_

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

### admin_isBlockProcessingPaused

Returns whether local block processing is currently paused.

<Tabs>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "admin_isBlockProcessingPaused",
      "params": []
    }'
```

</TabItem>
<TabItem value="response" label="Response">

`true` if block processing is paused, `false` if running.

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

### admin_isStateRootAvailable

True if state root for the block is available

<Tabs>
<TabItem value="params" label="Parameters">

1. `block`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`), _object_ (EIP-1898 `{blockHash, requireCanonical}` or `{blockNumber}`), or _integer_ (block number, if `JsonRpc.StrictHexFormat` is `false`)


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
  - `enr`: optional _string_
  - `id`: _string_
  - `ip`: optional _string_
  - `listenAddr`: _string_
  - `name`: _string_
  - `ports`: _object_
    - `discovery`: _integer_
    - `listener`: _integer_
  - `protocols`: map of _object_
    - `chainId`: _string_ (hex integer)
    - `config`: _object_
      - `beaconChainGenesisTimestamp`: optional _string_ (hex integer)
      - `blobSchedule`: optional array of _object_
        - `baseFeeUpdateFraction`: _string_ (hex integer)
        - `max`: _string_ (hex integer)
        - `target`: _string_ (hex integer)
        - `timestamp`: _string_ (hex integer)
      - `depositContractAddress`: optional _string_ (address)
      - `eip1014Transition`: optional _string_ (hex integer)
      - `eip1052Transition`: optional _string_ (hex integer)
      - `eip1108Transition`: optional _string_ (hex integer)
      - `eip1153Transition`: optional _string_ (hex integer)
      - `eip1153TransitionTimestamp`: optional _string_ (hex integer)
      - `eip1283DisableTransition`: optional _string_ (hex integer)
      - `eip1283ReenableTransition`: optional _string_ (hex integer)
      - `eip1283Transition`: optional _string_ (hex integer)
      - `eip1344Transition`: optional _string_ (hex integer)
      - `eip140Transition`: optional _string_ (hex integer)
      - `eip145Transition`: optional _string_ (hex integer)
      - `eip150Transition`: optional _string_ (hex integer)
      - `eip152Transition`: optional _string_ (hex integer)
      - `eip1559BaseFeeInitialValue`: optional _string_ (hex integer)
      - `eip1559BaseFeeMaxChangeDenominator`: optional _string_ (hex integer)
      - `eip1559BaseFeeMinValue`: optional _string_ (hex integer)
      - `eip1559BaseFeeMinValueTransition`: optional _string_ (hex integer)
      - `eip1559ElasticityMultiplier`: optional _string_ (hex integer)
      - `eip1559FeeCollectorTransition`: optional _string_ (hex integer)
      - `eip1559Transition`: optional _string_ (hex integer)
      - `eip155Transition`: optional _string_ (hex integer)
      - `eip160Transition`: optional _string_ (hex integer)
      - `eip161abcTransition`: optional _string_ (hex integer)
      - `eip161dTransition`: optional _string_ (hex integer)
      - `eip1706Transition`: optional _string_ (hex integer)
      - `eip1884Transition`: optional _string_ (hex integer)
      - `eip2028Transition`: optional _string_ (hex integer)
      - `eip211Transition`: optional _string_ (hex integer)
      - `eip214Transition`: optional _string_ (hex integer)
      - `eip2200Transition`: optional _string_ (hex integer)
      - `eip2315Transition`: optional _string_ (hex integer)
      - `eip2537Transition`: optional _string_ (hex integer)
      - `eip2537TransitionTimestamp`: optional _string_ (hex integer)
      - `eip2565Transition`: optional _string_ (hex integer)
      - `eip2780TransitionTimestamp`: optional _string_ (hex integer)
      - `eip2929Transition`: optional _string_ (hex integer)
      - `eip2930Transition`: optional _string_ (hex integer)
      - `eip2935ContractAddress`: optional _string_ (address)
      - `eip2935RingBufferSize`: _string_ (hex integer)
      - `eip2935Transition`: optional _string_ (hex integer)
      - `eip2935TransitionTimestamp`: optional _string_ (hex integer)
      - `eip3198Transition`: optional _string_ (hex integer)
      - `eip3298TransitionTimestamp`: optional _string_ (hex integer)
      - `eip3529Transition`: optional _string_ (hex integer)
      - `eip3541Transition`: optional _string_ (hex integer)
      - `eip3607Transition`: optional _string_ (hex integer)
      - `eip3651Transition`: optional _string_ (hex integer)
      - `eip3651TransitionTimestamp`: optional _string_ (hex integer)
      - `eip3855Transition`: optional _string_ (hex integer)
      - `eip3855TransitionTimestamp`: optional _string_ (hex integer)
      - `eip3860Transition`: optional _string_ (hex integer)
      - `eip3860TransitionTimestamp`: optional _string_ (hex integer)
      - `eip4758TransitionTimestamp`: optional _string_ (hex integer)
      - `eip4788ContractAddress`: optional _string_ (address)
      - `eip4788TransitionTimestamp`: optional _string_ (hex integer)
      - `eip4844BlobGasPriceUpdateFraction`: optional _string_ (hex integer)
      - `eip4844FeeCollectorTransitionTimestamp`: optional _string_ (hex integer)
      - `eip4844MinBlobGasPrice`: optional _string_ (hex integer)
      - `eip4844Transition`: optional _string_ (hex integer)
      - `eip4844TransitionTimestamp`: optional _string_ (hex integer)
      - `eip4895TransitionTimestamp`: optional _string_ (hex integer)
      - `eip5656Transition`: optional _string_ (hex integer)
      - `eip5656TransitionTimestamp`: optional _string_ (hex integer)
      - `eip5920TransitionTimestamp`: optional _string_ (hex integer)
      - `eip6110TransitionTimestamp`: optional _string_ (hex integer)
      - `eip658Transition`: optional _string_ (hex integer)
      - `eip6780Transition`: optional _string_ (hex integer)
      - `eip6780TransitionTimestamp`: optional _string_ (hex integer)
      - `eip7002ContractAddress`: optional _string_ (address)
      - `eip7002TransitionTimestamp`: optional _string_ (hex integer)
      - `eip7251ContractAddress`: optional _string_ (address)
      - `eip7251TransitionTimestamp`: optional _string_ (hex integer)
      - `eip7594TransitionTimestamp`: optional _string_ (hex integer)
      - `eip7623Transition`: optional _string_ (hex integer)
      - `eip7623TransitionTimestamp`: optional _string_ (hex integer)
      - `eip7668TransitionTimestamp`: optional _string_ (hex integer)
      - `eip7702Transition`: optional _string_ (hex integer)
      - `eip7702TransitionTimestamp`: optional _string_ (hex integer)
      - `eip7708TransitionTimestamp`: optional _string_ (hex integer)
      - `eip7709TransitionTimestamp`: optional _string_ (hex integer)
      - `eip7778TransitionTimestamp`: optional _string_ (hex integer)
      - `eip7805TransitionTimestamp`: optional _string_ (hex integer)
      - `eip7823TransitionTimestamp`: optional _string_ (hex integer)
      - `eip7825TransitionTimestamp`: optional _string_ (hex integer)
      - `eip7843TransitionTimestamp`: optional _string_ (hex integer)
      - `eip7883TransitionTimestamp`: optional _string_ (hex integer)
      - `eip7906TransitionTimestamp`: optional _string_ (hex integer)
      - `eip7918TransitionTimestamp`: optional _string_ (hex integer)
      - `eip7928TransitionTimestamp`: optional _string_ (hex integer)
      - `eip7934MaxRlpBlockSize`: _integer_
      - `eip7934TransitionTimestamp`: optional _string_ (hex integer)
      - `eip7939TransitionTimestamp`: optional _string_ (hex integer)
      - `eip7951TransitionTimestamp`: optional _string_ (hex integer)
      - `eip7954TransitionTimestamp`: optional _string_ (hex integer)
      - `eip7976TransitionTimestamp`: optional _string_ (hex integer)
      - `eip7979TransitionTimestamp`: optional _string_ (hex integer)
      - `eip7981TransitionTimestamp`: optional _string_ (hex integer)
      - `eip7Transition`: optional _string_ (hex integer)
      - `eip8024TransitionTimestamp`: optional _string_ (hex integer)
      - `eip8037TransitionTimestamp`: optional _string_ (hex integer)
      - `eip8038TransitionTimestamp`: optional _string_ (hex integer)
      - `eip8116TransitionTimestamp`: optional _string_ (hex integer)
      - `eip8131TransitionTimestamp`: optional _string_ (hex integer)
      - `eip8141TransitionTimestamp`: optional _string_ (hex integer)
      - `eip8151TransitionTimestamp`: optional _string_ (hex integer)
      - `eip8246TransitionTimestamp`: optional _string_ (hex integer)
      - `eip8250TransitionTimestamp`: optional _string_ (hex integer)
      - `eip8253TransitionTimestamp`: optional _string_ (hex integer)
      - `eip8272TransitionTimestamp`: optional _string_ (hex integer)
      - `eip8279TransitionTimestamp`: optional _string_ (hex integer)
      - `eip8282TransitionTimestamp`: optional _string_ (hex integer)
      - `eip8298TransitionTimestamp`: optional _string_ (hex integer)
      - `eip8360TransitionTimestamp`: optional _string_ (hex integer)
      - `feeCollector`: optional _string_ (address)
      - `forkBlock`: optional _string_ (hex integer)
      - `forkCanonHash`: optional _string_ (hash)
      - `gasLimitBoundDivisor`: _string_ (hex integer)
      - `maxCodeSize`: optional _string_ (hex integer)
      - `maxCodeSizeTransition`: optional _string_ (hex integer)
      - `maxCodeSizeTransitionTimestamp`: optional _string_ (hex integer)
      - `maximumExtraDataSize`: _string_ (hex integer)
      - `mergeForkIdTransition`: optional _string_ (hex integer)
      - `minBalRetentionEpochs`: _string_ (hex integer)
      - `minGasLimit`: _string_ (hex integer)
      - `minHistoryRetentionEpochs`: _string_ (hex integer)
      - `registrar`: optional _string_ (address)
      - `rip7212TransitionTimestamp`: optional _string_ (hex integer)
      - `terminalPoWBlockNumber`: optional _string_ (hex integer)
      - `terminalTotalDifficulty`: optional _string_ (hex integer)
      - `transactionPermissionContract`: optional _string_ (address)
      - `transactionPermissionContractTransition`: optional _string_ (hex integer)
      - `validateChainIdTransition`: optional _string_ (hex integer)
      - `validateReceiptsTransition`: optional _string_ (hex integer)
      - `zeroNonceStorageAccounts`: optional array of _string_ (address)
    - `difficulty`: _string_ (hex integer)
    - `genesis`: _string_ (hash)
    - `head`: _string_ (hash)
    - `network`: _string_ (hex integer)

</TabItem>
</Tabs>

### admin_pauseBlockProcessing

Pauses local block processing. Blocks received from the network or consensus client are still queued but not processed; call `admin_resumeBlockProcessing` to process the accumulated backlog. Use `admin_isBlockProcessingPaused` to query the state. Intended for testing and diagnostics.

<Tabs>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "admin_pauseBlockProcessing",
      "params": []
    }'
```

</TabItem>
<TabItem value="response" label="Response">

`true` if block processing is paused after the call (the request succeeded); `false` if it did not take effect.

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

### admin_peers

Displays a list of connected peers including information about them.

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
  - `caps`: array of _string_ (protocol/version)
  - `clientType`: optional _integer_
  - `enode`: _string_
  - `enr`: optional _string_
  - `ethDetails`: optional _string_
  - `id`: _string_ (node id, no "0x" prefix)
  - `lastSignal`: optional _string_ (date-time)
  - `name`: optional _string_
  - `network`: _object_
    - `inbound`: _boolean_
    - `localAddress`: _string_
    - `remoteAddress`: _string_
    - `static`: _boolean_
    - `trusted`: _boolean_
  - `protocols`: map of _object_

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

`result`: _string_

</TabItem>
</Tabs>

### admin_removePeer

Removes the given node from the static peer set and disconnects any active session. Set `persistent` to also remove the peer from static-nodes.json so it is not restored on restart.

<Tabs>
<TabItem value="params" label="Parameters">

1. `enode`: _string_

2. `persistent`: _boolean_


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
      "params": [enode, persistent]
    }'
```

</TabItem>
<TabItem value="response" label="Response">

`true` if the input enode was valid and the removal was attempted.

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

### admin_removeTrustedPeer

Removes the given node from the trusted peer set. Set `persistent` to also remove the peer from trusted-nodes.json so it is not re-trusted on restart.

<Tabs>
<TabItem value="params" label="Parameters">

1. `enode`: _string_

2. `persistent`: _boolean_


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
      "params": [enode, persistent]
    }'
```

</TabItem>
<TabItem value="response" label="Response">

`true` if the input enode was valid and the removal was attempted.

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

### admin_resumeBlockProcessing

Resumes local block processing previously paused via `admin_pauseBlockProcessing`, processing any blocks accumulated in the queue. Intended for testing and diagnostics.

<Tabs>
<TabItem value="request" label="Request" default>

```bash
curl localhost:8545 \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "admin_resumeBlockProcessing",
      "params": []
    }'
```

</TabItem>
<TabItem value="response" label="Response">

`true` when the resume request was accepted.

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

Unsubscribes from a subscription. Returns true on success; if the subscription does not exist, a 'subscription not found' error is returned.

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

1. `block`: _string_ (block number or hash or either of `earliest`, `finalized`, `latest`, `pending`, or `safe`), _object_ (EIP-1898 `{blockHash, requireCanonical}` or `{blockNumber}`), or _integer_ (block number, if `JsonRpc.StrictHexFormat` is `false`)


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

