# debug


## debug.config

| Invocation |
| :--- |
| `debug.config(category, name)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| category | `String` |  |
| name | `String` |  |

| Returned type | Description |
| :--- | :--- |
| `String` |  |

{% tabs %}
{% tab title="Example request of debug.config" %}
```yaml
debug.config(category, name)
```
{% endtab %}
{% endtabs %}




## debug.getBlockRlp

Retrieves a block in the RLP-serialized form. 


| Invocation |
| :--- |
| `debug.getBlockRlp(number)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| number | `Quantity` |  |

| Returned type | Description |
| :--- | :--- |
| `Data` |  |

{% tabs %}
{% tab title="Example request of debug.getBlockRlp" %}
```yaml
debug.getBlockRlp(number)
```
{% endtab %}
{% endtabs %}

[See also JSON RPC debug_getBlockRlp](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug_getblockrlp)


## debug.getBlockRlpByHash

Retrieves a block in the RLP-serialized form. 


| Invocation |
| :--- |
| `debug.getBlockRlpByHash(hash)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| hash | `Hash` |  |

| Returned type | Description |
| :--- | :--- |
| `Data` |  |

{% tabs %}
{% tab title="Example request of debug.getBlockRlpByHash" %}
```yaml
debug.getBlockRlpByHash(hash)
```
{% endtab %}
{% endtabs %}

[See also JSON RPC debug_getBlockRlpByHash](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug_getblockrlpbyhash)


## debug.getChainLevel

Retrieves a representation of tree branches on a given chain level (Nethermind specific). 


| Invocation |
| :--- |
| `debug.getChainLevel(number)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| number | `Quantity` |  |

| Returned type | Description |
| :--- | :--- |
| `ChainLevelForRpc object` |  |

{% tabs %}
{% tab title="Example request of debug.getChainLevel" %}
```yaml
debug.getChainLevel(number)
```
{% endtab %}

{% tab title="Objects in debug_getChainLevel" %}

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

[See also JSON RPC debug_getChainLevel](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug_getchainlevel)




## debug.migrateReceipts

Sets the block number up to which receipts will be migrated to (Nethermind specific). 


| Invocation |
| :--- |
| `debug.migrateReceipts(blockNumber)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| blockNumber | `Quantity` |  |

| Returned type | Description |
| :--- | :--- |
| `Boolean` |  |

{% tabs %}
{% tab title="Example request of debug.migrateReceipts" %}
```yaml
debug.migrateReceipts(blockNumber)
```
{% endtab %}
{% endtabs %}

[See also JSON RPC debug_migrateReceipts](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug_migratereceipts)



## debug.traceBlock

Returns the full stack trace of all invoked opcodes of all transactions that were included in the block specified. The parent of the block must be present or it will fail. 


| Invocation |
| :--- |
| `debug.traceBlock(blockRlp, options)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| blockRlp | `Data` |  |
| options | `GethTraceOptions object` |  |

| Returned type | Description |
| :--- | :--- |
| `GethLikeTxTrace object` |  |

{% tabs %}
{% tab title="Example request of debug.traceBlock" %}
```yaml
debug.traceBlock(blockRlp, options)
```
{% endtab %}

{% tab title="Objects in debug_traceBlock" %}

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

[See also JSON RPC debug_traceBlock](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug_traceblock)


## debug.traceBlockByHash

Similar to debug_traceBlock, this method accepts a block hash and replays the block that is already present in the database. 


| Invocation |
| :--- |
| `debug.traceBlockByHash(blockHash, options)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| blockHash | `Hash` |  |
| options | `GethTraceOptions object` |  |

| Returned type | Description |
| :--- | :--- |
| `GethLikeTxTrace object` |  |

{% tabs %}
{% tab title="Example request of debug.traceBlockByHash" %}
```yaml
debug.traceBlockByHash(blockHash, options)
```
{% endtab %}

{% tab title="Objects in debug_traceBlockByHash" %}

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

[See also JSON RPC debug_traceBlockByHash](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug_traceblockbyhash)


## debug.traceBlockByNumber

Similar to debug_traceBlock, this method accepts a block number as well as "latest" or "finalized" and replays the block that is already present in the database. 


| Invocation |
| :--- |
| `debug.traceBlockByNumber(blockParameter, options)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| blockParameter | `BlockParameter object` |  |
| options | `GethTraceOptions object` |  |

| Returned type | Description |
| :--- | :--- |
| `GethLikeTxTrace object` |  |

{% tabs %}
{% tab title="Example request of debug.traceBlockByNumber" %}
```yaml
debug.traceBlockByNumber(blockParameter, options)
```
{% endtab %}

{% tab title="Objects in debug_traceBlockByNumber" %}

`BlockParameter`

| Field name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

- `Quantity` or `String` (latest, earliest, pending)


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

[See also JSON RPC debug_traceBlockByNumber](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug_traceblockbynumber)



## debug.traceTransaction

This method will attempt to run the transaction in the exact same manner as it was executed on the network. It will replay any transaction that may have been executed prior to this one before it will finally attempt to execute the transaction that corresponds to the given hash. 


| Invocation |
| :--- |
| `debug.traceTransaction(transactionHash, options)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| transactionHash | `Hash` |  |
| options | `GethTraceOptions object` |  |

| Returned type | Description |
| :--- | :--- |
| `GethLikeTxTrace object` |  |

{% tabs %}
{% tab title="Example request of debug.traceTransaction" %}
```yaml
debug.traceTransaction(transactionHash, options)
```
{% endtab %}

{% tab title="Objects in debug_traceTransaction" %}

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

[See also JSON RPC debug_traceTransaction](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug_tracetransaction)


## debug.traceTransactionByBlockAndIndex

| Invocation |
| :--- |
| `debug.traceTransactionByBlockAndIndex(blockParameter, txIndex, options)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| blockParameter | `BlockParameter object` |  |
| txIndex | `Quantity` |  |
| options | `GethTraceOptions object` |  |

| Returned type | Description |
| :--- | :--- |
| `GethLikeTxTrace object` |  |

{% tabs %}
{% tab title="Example request of debug.traceTransactionByBlockAndIndex" %}
```yaml
debug.traceTransactionByBlockAndIndex(blockParameter, txIndex, options)
```
{% endtab %}

{% tab title="Objects in debug_traceTransactionByBlockAndIndex" %}

`BlockParameter`

| Field name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

- `Quantity` or `String` (latest, earliest, pending)


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

[See also JSON RPC debug_traceTransactionByBlockAndIndex](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug_tracetransactionbyblockandindex)


## debug.traceTransactionByBlockhashAndIndex

| Invocation |
| :--- |
| `debug.traceTransactionByBlockhashAndIndex(blockHash, txIndex, options)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| blockHash | `Hash` |  |
| txIndex | `Quantity` |  |
| options | `GethTraceOptions object` |  |

| Returned type | Description |
| :--- | :--- |
| `GethLikeTxTrace object` |  |

{% tabs %}
{% tab title="Example request of debug.traceTransactionByBlockhashAndIndex" %}
```yaml
debug.traceTransactionByBlockhashAndIndex(blockHash, txIndex, options)
```
{% endtab %}

{% tab title="Objects in debug_traceTransactionByBlockhashAndIndex" %}

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

[See also JSON RPC debug_traceTransactionByBlockhashAndIndex](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug_tracetransactionbyblockhashandindex)


## debug.traceTransactionInBlockByHash

| Invocation |
| :--- |
| `debug.traceTransactionInBlockByHash(blockRlp, transactionHash, options)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| blockRlp | `Data` |  |
| transactionHash | `Hash` |  |
| options | `GethTraceOptions object` |  |

| Returned type | Description |
| :--- | :--- |
| `GethLikeTxTrace object` |  |

{% tabs %}
{% tab title="Example request of debug.traceTransactionInBlockByHash" %}
```yaml
debug.traceTransactionInBlockByHash(blockRlp, transactionHash, options)
```
{% endtab %}

{% tab title="Objects in debug_traceTransactionInBlockByHash" %}

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

[See also JSON RPC debug_traceTransactionInBlockByHash](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug_tracetransactioninblockbyhash)


## debug.traceTransactionInBlockByIndex

| Invocation |
| :--- |
| `debug.traceTransactionInBlockByIndex(blockRlp, txIndex, options)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| blockRlp | `Data` |  |
| txIndex | `Quantity` |  |
| options | `GethTraceOptions object` |  |

| Returned type | Description |
| :--- | :--- |
| `GethLikeTxTrace object` |  |

{% tabs %}
{% tab title="Example request of debug.traceTransactionInBlockByIndex" %}
```yaml
debug.traceTransactionInBlockByIndex(blockRlp, txIndex, options)
```
{% endtab %}

{% tab title="Objects in debug_traceTransactionInBlockByIndex" %}

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

[See also JSON RPC debug_traceTransactionInBlockByIndex](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug_tracetransactioninblockbyindex)
