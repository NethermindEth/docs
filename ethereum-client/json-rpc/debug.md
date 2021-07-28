# Debug module

## debug\_deleteChainSlice

Deletes a slice of a chain from the tree on all branches \(Nethermind specific\).

| Invocation |
| :--- |
| `{"method":"debug_deleteChainSlice","params":[startNumber]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| startNumber | `Quantity` |  |

| Returned type | Description |
| :--- | :--- |
| `Quantity` |  |

{% tabs %}
{% tab title="Example request of debug\_deleteChainSlice" %}
```text
curl --data '{"method":"debug_deleteChainSlice","params":[startNumber],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

## debug\_getBlockRlp

Retrieves a block in the RLP-serialized form.

| Invocation |
| :--- |
| `{"method":"debug_getBlockRlp","params":[number]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| number | `Quantity` |  |

| Returned type | Description |
| :--- | :--- |
| `Data` |  |

{% tabs %}
{% tab title="Example request of debug\_getBlockRlp" %}
```text
curl --data '{"method":"debug_getBlockRlp","params":[number],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[See also CLI debug.getBlockRlp](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/debug#debug-getblockrlp)

## debug\_getBlockRlpByHash

Retrieves a block in the RLP-serialized form.

| Invocation |
| :--- |
| `{"method":"debug_getBlockRlpByHash","params":[hash]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| hash | `Hash` |  |

| Returned type | Description |
| :--- | :--- |
| `Data` |  |

{% tabs %}
{% tab title="Example request of debug\_getBlockRlpByHash" %}
```text
curl --data '{"method":"debug_getBlockRlpByHash","params":[hash],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[See also CLI debug.getBlockRlpByHash](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/debug#debug-getblockrlpbyhash)

## debug\_getChainLevel

Retrieves a representation of tree branches on a given chain level \(Nethermind specific\).

| Invocation |
| :--- |
| `{"method":"debug_getChainLevel","params":[number]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| number | `Quantity` |  |

| Returned type | Description |
| :--- | :--- |
| `ChainLevelForRpc object` |  |

{% tabs %}
{% tab title="Example request of debug\_getChainLevel" %}
```text
curl --data '{"method":"debug_getChainLevel","params":[number],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in debug\_getChainLevel" %}
`ChainLevelForRpc`

| Field name | Type |
| :--- | :--- |
| BlockInfos | `BlockInfoForRpc[] object` |
| HasBlockOnMainChain | `Boolean` |

`BlockInfoForRpc[]`

| Field name | Type |
| :--- | :--- |
| BlockHash | `Hash` |
| TotalDifficulty | `Quantity` |
| WasProcessed | `Boolean` |
| IsFinalized | `Boolean` |
{% endtab %}
{% endtabs %}

[See also CLI debug.getChainLevel](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/debug#debug-getchainlevel)

## debug\_getConfigValue

Retrieves the Nethermind configuration value, e.g. JsonRpc.Enabled

| Invocation |
| :--- |
| `{"method":"debug_getConfigValue","params":[category, name]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| category | `String` |  |
| name | `String` |  |

| Returned type | Description |
| :--- | :--- |
| `Object` |  |

{% tabs %}
{% tab title="Example request of debug\_getConfigValue" %}
```text
curl --data '{"method":"debug_getConfigValue","params":[category, name],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

## debug\_insertReceipts

Insert receipts for the block after verifying receipts root correctness.

| Invocation |
| :--- |
| `{"method":"debug_insertReceipts","params":[blockParameter, receiptForRpc]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| blockParameter | `BlockParameter object` |  |
| receiptForRpc | `ReceiptForRpc[] object` |  |

| Returned type | Description |
| :--- | :--- |
| `Boolean` |  |

{% tabs %}
{% tab title="Example request of debug\_insertReceipts" %}
```text
curl --data '{"method":"debug_insertReceipts","params":[blockParameter, receiptForRpc],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in debug\_insertReceipts" %}
`BlockParameter`

| Field name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

* `Quantity` or `String` \(latest, earliest, pending\)

`ReceiptForRpc[]`

| Field name | Type |
| :--- | :--- |
| TransactionHash | `Hash` |
| TransactionIndex | `Quantity` |
| BlockHash | `Hash` |
| BlockNumber | `Quantity` |
| CumulativeGasUsed | `Quantity` |
| GasUsed | `Quantity` |
| From | `Address` |
| To | `Address` |
| ContractAddress | `Address` |
| Logs | `LogEntryForRpc[] object` |
| LogsBloom | `Bloom Object` |
| Root | `Hash` |
| Status | `Quantity` |
| Error | `String` |
| Type | `TxType object` |
{% endtab %}
{% endtabs %}

## debug\_migrateReceipts

Sets the block number up to which receipts will be migrated to \(Nethermind specific\).

| Invocation |
| :--- |
| `{"method":"debug_migrateReceipts","params":[blockNumber]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| blockNumber | `Quantity` |  |

| Returned type | Description |
| :--- | :--- |
| `Boolean` |  |

{% tabs %}
{% tab title="Example request of debug\_migrateReceipts" %}
```text
curl --data '{"method":"debug_migrateReceipts","params":[blockNumber],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[See also CLI debug.migrateReceipts](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/debug#debug-migratereceipts)

## debug\_resetHead

Updates / resets head block - use only when the node got stuck due to DB / memory corruption \(Nethermind specific\).

| Invocation |
| :--- |
| `{"method":"debug_resetHead","params":[blockHash]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| blockHash | `Hash` |  |

| Returned type | Description |
| :--- | :--- |
| `Boolean` |  |

{% tabs %}
{% tab title="Example request of debug\_resetHead" %}
```text
curl --data '{"method":"debug_resetHead","params":[blockHash],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

## debug\_traceBlock

Returns a full stack trace of all invoked opcodes of all transaction that were included included in this block. The parent of this block must be present or it will fail.

| Invocation |
| :--- |
| `{"method":"debug_traceBlock","params":[blockRlp, options]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| blockRlp | `Data` |  |
| options | `GethTraceOptions object` |  |

| Returned type | Description |
| :--- | :--- |
| `GethLikeTxTrace object` |  |

{% tabs %}
{% tab title="Example request of debug\_traceBlock" %}
```text
curl --data '{"method":"debug_traceBlock","params":[blockRlp, options],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in debug\_traceBlock" %}
`GethTraceOptions`

| Field name | Type |
| :--- | :--- |
| DisableStorage | `Boolean` |
| DisableMemory | `Boolean` |
| DisableStack | `Boolean` |
| Tracer | `String` |
| Timeout | `String` |

`GethLikeTxTrace`

| Field name | Type |
| :--- | :--- |
| StoragesByDepth | `Array` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `Array` |
{% endtab %}
{% endtabs %}

[See also CLI debug.traceBlock](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/debug#debug-traceblock)

## debug\_traceBlockByHash

| Invocation |
| :--- |
| `{"method":"debug_traceBlockByHash","params":[blockHash, options]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| blockHash | `Hash` |  |
| options | `GethTraceOptions object` |  |

| Returned type | Description |
| :--- | :--- |
| `GethLikeTxTrace object` |  |

{% tabs %}
{% tab title="Example request of debug\_traceBlockByHash" %}
```text
curl --data '{"method":"debug_traceBlockByHash","params":[blockHash, options],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in debug\_traceBlockByHash" %}
`GethTraceOptions`

| Field name | Type |
| :--- | :--- |
| DisableStorage | `Boolean` |
| DisableMemory | `Boolean` |
| DisableStack | `Boolean` |
| Tracer | `String` |
| Timeout | `String` |

`GethLikeTxTrace`

| Field name | Type |
| :--- | :--- |
| StoragesByDepth | `Array` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `Array` |
{% endtab %}
{% endtabs %}

[See also CLI debug.traceBlockByHash](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/debug#debug-traceblockbyhash)

## debug\_traceBlockByNumber

| Invocation |
| :--- |
| `{"method":"debug_traceBlockByNumber","params":[number, options]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| number | `Quantity` |  |
| options | `GethTraceOptions object` |  |

| Returned type | Description |
| :--- | :--- |
| `GethLikeTxTrace object` |  |

{% tabs %}
{% tab title="Example request of debug\_traceBlockByNumber" %}
```text
curl --data '{"method":"debug_traceBlockByNumber","params":[number, options],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in debug\_traceBlockByNumber" %}
`GethTraceOptions`

| Field name | Type |
| :--- | :--- |
| DisableStorage | `Boolean` |
| DisableMemory | `Boolean` |
| DisableStack | `Boolean` |
| Tracer | `String` |
| Timeout | `String` |

`GethLikeTxTrace`

| Field name | Type |
| :--- | :--- |
| StoragesByDepth | `Array` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `Array` |
{% endtab %}
{% endtabs %}

[See also CLI debug.traceBlockByNumber](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/debug#debug-traceblockbynumber)

## debug\_traceTransaction

This method will attempt to run the transaction in the exact same manner as it was executed on the network. It will replay any transaction that may have been executed prior to this one before it will finally attempt to execute the transaction that corresponds to the given hash.

| Invocation |
| :--- |
| `{"method":"debug_traceTransaction","params":[transactionHash, options]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| transactionHash | `Hash` |  |
| options | `GethTraceOptions object` |  |

| Returned type | Description |
| :--- | :--- |
| `GethLikeTxTrace object` |  |

{% tabs %}
{% tab title="Example request of debug\_traceTransaction" %}
```text
curl --data '{"method":"debug_traceTransaction","params":[transactionHash, options],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in debug\_traceTransaction" %}
`GethTraceOptions`

| Field name | Type |
| :--- | :--- |
| DisableStorage | `Boolean` |
| DisableMemory | `Boolean` |
| DisableStack | `Boolean` |
| Tracer | `String` |
| Timeout | `String` |

`GethLikeTxTrace`

| Field name | Type |
| :--- | :--- |
| StoragesByDepth | `Array` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `Array` |
{% endtab %}
{% endtabs %}

[See also CLI debug.traceTransaction](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/debug#debug-tracetransaction)

## debug\_traceTransactionByBlockAndIndex

| Invocation |
| :--- |
| `{"method":"debug_traceTransactionByBlockAndIndex","params":[blockParameter, txIndex, options]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| blockParameter | `BlockParameter object` |  |
| txIndex | `Quantity` |  |
| options | `GethTraceOptions object` |  |

| Returned type | Description |
| :--- | :--- |
| `GethLikeTxTrace object` |  |

{% tabs %}
{% tab title="Example request of debug\_traceTransactionByBlockAndIndex" %}
```text
curl --data '{"method":"debug_traceTransactionByBlockAndIndex","params":[blockParameter, txIndex, options],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in debug\_traceTransactionByBlockAndIndex" %}
`BlockParameter`

| Field name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

* `Quantity` or `String` \(latest, earliest, pending\)

`GethTraceOptions`

| Field name | Type |
| :--- | :--- |
| DisableStorage | `Boolean` |
| DisableMemory | `Boolean` |
| DisableStack | `Boolean` |
| Tracer | `String` |
| Timeout | `String` |

`GethLikeTxTrace`

| Field name | Type |
| :--- | :--- |
| StoragesByDepth | `Array` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `Array` |
{% endtab %}
{% endtabs %}

[See also CLI debug.traceTransactionByBlockAndIndex](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/debug#debug-tracetransactionbyblockandindex)

## debug\_traceTransactionByBlockhashAndIndex

| Invocation |
| :--- |
| `{"method":"debug_traceTransactionByBlockhashAndIndex","params":[blockHash, txIndex, options]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| blockHash | `Hash` |  |
| txIndex | `Quantity` |  |
| options | `GethTraceOptions object` |  |

| Returned type | Description |
| :--- | :--- |
| `GethLikeTxTrace object` |  |

{% tabs %}
{% tab title="Example request of debug\_traceTransactionByBlockhashAndIndex" %}
```text
curl --data '{"method":"debug_traceTransactionByBlockhashAndIndex","params":[blockHash, txIndex, options],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in debug\_traceTransactionByBlockhashAndIndex" %}
`GethTraceOptions`

| Field name | Type |
| :--- | :--- |
| DisableStorage | `Boolean` |
| DisableMemory | `Boolean` |
| DisableStack | `Boolean` |
| Tracer | `String` |
| Timeout | `String` |

`GethLikeTxTrace`

| Field name | Type |
| :--- | :--- |
| StoragesByDepth | `Array` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `Array` |
{% endtab %}
{% endtabs %}

[See also CLI debug.traceTransactionByBlockhashAndIndex](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/debug#debug-tracetransactionbyblockhashandindex)

## debug\_traceTransactionInBlockByHash

| Invocation |
| :--- |
| `{"method":"debug_traceTransactionInBlockByHash","params":[blockRlp, transactionHash, options]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| blockRlp | `Data` |  |
| transactionHash | `Hash` |  |
| options | `GethTraceOptions object` |  |

| Returned type | Description |
| :--- | :--- |
| `GethLikeTxTrace object` |  |

{% tabs %}
{% tab title="Example request of debug\_traceTransactionInBlockByHash" %}
```text
curl --data '{"method":"debug_traceTransactionInBlockByHash","params":[blockRlp, transactionHash, options],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in debug\_traceTransactionInBlockByHash" %}
`GethTraceOptions`

| Field name | Type |
| :--- | :--- |
| DisableStorage | `Boolean` |
| DisableMemory | `Boolean` |
| DisableStack | `Boolean` |
| Tracer | `String` |
| Timeout | `String` |

`GethLikeTxTrace`

| Field name | Type |
| :--- | :--- |
| StoragesByDepth | `Array` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `Array` |
{% endtab %}
{% endtabs %}

[See also CLI debug.traceTransactionInBlockByHash](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/debug#debug-tracetransactioninblockbyhash)

## debug\_traceTransactionInBlockByIndex

| Invocation |
| :--- |
| `{"method":"debug_traceTransactionInBlockByIndex","params":[blockRlp, txIndex, options]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| blockRlp | `Data` |  |
| txIndex | `Quantity` |  |
| options | `GethTraceOptions object` |  |

| Returned type | Description |
| :--- | :--- |
| `GethLikeTxTrace object` |  |

{% tabs %}
{% tab title="Example request of debug\_traceTransactionInBlockByIndex" %}
```text
curl --data '{"method":"debug_traceTransactionInBlockByIndex","params":[blockRlp, txIndex, options],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in debug\_traceTransactionInBlockByIndex" %}
`GethTraceOptions`

| Field name | Type |
| :--- | :--- |
| DisableStorage | `Boolean` |
| DisableMemory | `Boolean` |
| DisableStack | `Boolean` |
| Tracer | `String` |
| Timeout | `String` |

`GethLikeTxTrace`

| Field name | Type |
| :--- | :--- |
| StoragesByDepth | `Array` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `Array` |
{% endtab %}
{% endtabs %}

[See also CLI debug.traceTransactionInBlockByIndex](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/debug#debug-tracetransactioninblockbyindex)

