# Debug module

## debug\_deleteChainSlice

Deletes a slice of a chain from the tree on all branches \(Nethermind specific\).

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| startNumber | `Quantity` |
{% endtab %}

{% tab title="Response" %}
### Return type

`Quantity`
{% endtab %}
{% endtabs %}

## debug\_getBlockRlp

Retrieves a block in the RLP-serialized form.

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| number | `Quantity` |
{% endtab %}

{% tab title="Response" %}
### Return type

`Data`
{% endtab %}
{% endtabs %}

## debug\_getBlockRlpByHash

Retrieves a block in the RLP-serialized form.

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| hash | `Hash` |
{% endtab %}

{% tab title="Response" %}
### Return type

`Data`
{% endtab %}
{% endtabs %}

## debug\_getChainLevel

Retrieves a representation of tree branches on a given chain level \(Nethermind specific\).

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| number | `Quantity` |
{% endtab %}

{% tab title="Response" %}
### Return type

`ChainLevelForRpc object`
{% endtab %}

{% tab title="Object definitions" %}
### Objects definition

`ChainLevelForRpc`

| Fields name | Type |
| :--- | :--- |
| BlockInfos | `BlockInfoForRpc[] object` |
| HasBlockOnMainChain | `Boolean` |

`BlockInfoForRpc[]`

| Fields name | Type |
| :--- | :--- |
| Length | `Quantity` |
| LongLength | `Quantity` |
| Rank | `Quantity` |
| SyncRoot | `Object` |
| IsReadOnly | `Boolean` |
| IsFixedSize | `Boolean` |
| IsSynchronized | `Boolean` |
{% endtab %}
{% endtabs %}

## debug\_getConfigValue

Retrieves the Nethermind configuration value, e.g. JsonRpc.Enabled

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| category | `String` |
| name | `String` |
{% endtab %}

{% tab title="Response" %}
### Return type

`Object`
{% endtab %}
{% endtabs %}

## debug\_insertReceipts

Insert receipts for the block after verifying receipts root correctness.

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockParameter | `BlockParameter object` |
| receiptForRpc | `ReceiptForRpc[] object` |
{% endtab %}

{% tab title="Response" %}
### Return type

`Boolean`
{% endtab %}

{% tab title="Object definitions" %}
### Objects definition

`BlockParameter`

| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

* `Quantity` or `String` \(latest, earliest, pending\)

`ReceiptForRpc[]`

| Fields name | Type |
| :--- | :--- |
| Length | `Quantity` |
| LongLength | `Quantity` |
| Rank | `Quantity` |
| SyncRoot | `Object` |
| IsReadOnly | `Boolean` |
| IsFixedSize | `Boolean` |
| IsSynchronized | `Boolean` |
{% endtab %}
{% endtabs %}

## debug\_migrateReceipts

Sets the block number up to which receipts will be migrated to \(Nethermind specific\).

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockNumber | `Quantity` |
{% endtab %}

{% tab title="Response" %}
### Return type

`Boolean`
{% endtab %}
{% endtabs %}

## debug\_resetHead

Updates / resets head block - use only when the node got stuck due to DB / memory corruption \(Nethermind specific\).

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockHash | `Hash` |
{% endtab %}

{% tab title="Response" %}
### Return type

`Boolean`
{% endtab %}
{% endtabs %}

## debug\_traceBlock

Returns a full stack trace of all invoked opcodes of all transaction that were included included in this block. The parent of this block must be present or it will fail.

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockRlp | `Data` |
| options | `GethTraceOptions object` |
{% endtab %}

{% tab title="Response" %}
### Return type

`GethLikeTxTrace object`
{% endtab %}

{% tab title="Object definitions" %}
### Objects definition

`GethTraceOptions`

| Fields name | Type |
| :--- | :--- |
| DisableStorage | `Boolean` |
| DisableMemory | `Boolean` |
| DisableStack | `Boolean` |
| Tracer | `String` |
| Timeout | `String` |

`GethLikeTxTrace`

| Fields name | Type |
| :--- | :--- |
| StoragesByDepth | `Array` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `Array` |
{% endtab %}
{% endtabs %}

## debug\_traceBlockByHash

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockHash | `Hash` |
| options | `GethTraceOptions object` |
{% endtab %}

{% tab title="Response" %}
### Return type

`GethLikeTxTrace object`
{% endtab %}

{% tab title="Object definitions" %}
### Objects definition

`GethTraceOptions`

| Fields name | Type |
| :--- | :--- |
| DisableStorage | `Boolean` |
| DisableMemory | `Boolean` |
| DisableStack | `Boolean` |
| Tracer | `String` |
| Timeout | `String` |

`GethLikeTxTrace`

| Fields name | Type |
| :--- | :--- |
| StoragesByDepth | `Array` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `Array` |
{% endtab %}
{% endtabs %}

## debug\_traceBlockByNumber

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| number | `Quantity` |
| options | `GethTraceOptions object` |
{% endtab %}

{% tab title="Response" %}
### Return type

`GethLikeTxTrace object`
{% endtab %}

{% tab title="Object definitions" %}
### Objects definition

`GethTraceOptions`

| Fields name | Type |
| :--- | :--- |
| DisableStorage | `Boolean` |
| DisableMemory | `Boolean` |
| DisableStack | `Boolean` |
| Tracer | `String` |
| Timeout | `String` |

`GethLikeTxTrace`

| Fields name | Type |
| :--- | :--- |
| StoragesByDepth | `Array` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `Array` |
{% endtab %}
{% endtabs %}

## debug\_traceTransaction

This method will attempt to run the transaction in the exact same manner as it was executed on the network. It will replay any transaction that may have been executed prior to this one before it will finally attempt to execute the transaction that corresponds to the given hash.

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| transactionHash | `Hash` |
| options | `GethTraceOptions object` |
{% endtab %}

{% tab title="Response" %}
### Return type

`GethLikeTxTrace object`
{% endtab %}

{% tab title="Object definitions" %}
### Objects definition

`GethTraceOptions`

| Fields name | Type |
| :--- | :--- |
| DisableStorage | `Boolean` |
| DisableMemory | `Boolean` |
| DisableStack | `Boolean` |
| Tracer | `String` |
| Timeout | `String` |

`GethLikeTxTrace`

| Fields name | Type |
| :--- | :--- |
| StoragesByDepth | `Array` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `Array` |
{% endtab %}
{% endtabs %}

## debug\_traceTransactionByBlockAndIndex

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockParameter | `BlockParameter object` |
| txIndex | `Quantity` |
| options | `GethTraceOptions object` |
{% endtab %}

{% tab title="Response" %}
### Return type

`GethLikeTxTrace object`
{% endtab %}

{% tab title="Object definitions" %}
### Objects definition

`BlockParameter`

| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

* `Quantity` or `String` \(latest, earliest, pending\)

`GethTraceOptions`

| Fields name | Type |
| :--- | :--- |
| DisableStorage | `Boolean` |
| DisableMemory | `Boolean` |
| DisableStack | `Boolean` |
| Tracer | `String` |
| Timeout | `String` |

`GethLikeTxTrace`

| Fields name | Type |
| :--- | :--- |
| StoragesByDepth | `Array` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `Array` |
{% endtab %}
{% endtabs %}

## debug\_traceTransactionByBlockhashAndIndex

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockHash | `Hash` |
| txIndex | `Quantity` |
| options | `GethTraceOptions object` |
{% endtab %}

{% tab title="Response" %}
### Return type

`GethLikeTxTrace object`
{% endtab %}

{% tab title="Object definitions" %}
### Objects definition

`GethTraceOptions`

| Fields name | Type |
| :--- | :--- |
| DisableStorage | `Boolean` |
| DisableMemory | `Boolean` |
| DisableStack | `Boolean` |
| Tracer | `String` |
| Timeout | `String` |

`GethLikeTxTrace`

| Fields name | Type |
| :--- | :--- |
| StoragesByDepth | `Array` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `Array` |
{% endtab %}
{% endtabs %}

## debug\_traceTransactionInBlockByHash

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockRlp | `Data` |
| transactionHash | `Hash` |
| options | `GethTraceOptions object` |
{% endtab %}

{% tab title="Response" %}
### Return type

`GethLikeTxTrace object`
{% endtab %}

{% tab title="Object definitions" %}
### Objects definition

`GethTraceOptions`

| Fields name | Type |
| :--- | :--- |
| DisableStorage | `Boolean` |
| DisableMemory | `Boolean` |
| DisableStack | `Boolean` |
| Tracer | `String` |
| Timeout | `String` |

`GethLikeTxTrace`

| Fields name | Type |
| :--- | :--- |
| StoragesByDepth | `Array` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `Array` |
{% endtab %}
{% endtabs %}

## debug\_traceTransactionInBlockByIndex

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockRlp | `Data` |
| txIndex | `Quantity` |
| options | `GethTraceOptions object` |
{% endtab %}

{% tab title="Response" %}
### Return type

`GethLikeTxTrace object`
{% endtab %}

{% tab title="Object definitions" %}
### Objects definition

`GethTraceOptions`

| Fields name | Type |
| :--- | :--- |
| DisableStorage | `Boolean` |
| DisableMemory | `Boolean` |
| DisableStack | `Boolean` |
| Tracer | `String` |
| Timeout | `String` |

`GethLikeTxTrace`

| Fields name | Type |
| :--- | :--- |
| StoragesByDepth | `Array` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `Array` |
{% endtab %}
{% endtabs %}

