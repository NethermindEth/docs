# Debug

## debug\_getChainLevel

Retrieves a representation of tree branches on a given chain level \(Nethermind specific\).

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| number | `Int64& object` |

### Return type

`ChainLevelForRpc object`

### Objects definition

`Int64&`

| Fields name | Type |
| :--- | :--- |


`ChainLevelForRpc`

| Fields name | Type |
| :--- | :--- |
| BlockInfos | `BlockInfoForRpc[] object` |
| HasBlockOnMainChain | `Boolean` |

## debug\_deleteChainSlice

Deletes a slice of a chain from the tree on all branches \(Nethermind specific\).

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| startNumber | `Int64& object` |

### Return type

`Quantity`

### Objects definition

`Int64&`

| Fields name | Type |
| :--- | :--- |


## debug\_resetHead

Updates / resets head block - use only when the node got stuck due to DB / memory corruption \(Nethermind specific\).

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockHash | `Hash` |

### Return type

`Boolean`

## debug\_traceTransaction

This method will attempt to run the transaction in the exact same manner as it was executed on the network. It will replay any transaction that may have been executed prior to this one before it will finally attempt to execute the transaction that corresponds to the given hash.

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| transactionHash | `Hash` |
| options | `GethTraceOptions object` |

### Return type

`GethLikeTxTrace object`

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
| StoragesByDepth | `Stack`1 object\` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `List`1 object\` |

## debug\_traceTransactionByBlockAndIndex

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockParameter | `BlockParameter object` |
| txIndex | `Quantity` |
| options | `GethTraceOptions object` |

### Return type

`GethLikeTxTrace object`

### Objects definition

`BlockParameter`

| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Nullable`1 object\` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

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
| StoragesByDepth | `Stack`1 object\` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `List`1 object\` |

## debug\_traceTransactionByBlockhashAndIndex

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockHash | `Hash` |
| txIndex | `Quantity` |
| options | `GethTraceOptions object` |

### Return type

`GethLikeTxTrace object`

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
| StoragesByDepth | `Stack`1 object\` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `List`1 object\` |

## debug\_traceBlock

Returns a full stack trace of all invoked opcodes of all transaction that were included included in this block. The parent of this block must be present or it will fail.

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockRlp | `Data` |
| options | `GethTraceOptions object` |

### Return type

`GethLikeTxTrace[] object`

### Objects definition

`GethTraceOptions`

| Fields name | Type |
| :--- | :--- |
| DisableStorage | `Boolean` |
| DisableMemory | `Boolean` |
| DisableStack | `Boolean` |
| Tracer | `String` |
| Timeout | `String` |

`GethLikeTxTrace[]`

| Fields name | Type |
| :--- | :--- |
| Length | `Quantity` |
| LongLength | `Quantity` |
| Rank | `Quantity` |
| SyncRoot | `Object object` |
| IsReadOnly | `Boolean` |
| IsFixedSize | `Boolean` |
| IsSynchronized | `Boolean` |

## debug\_traceBlockByNumber

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| number | `Quantity` |
| options | `GethTraceOptions object` |

### Return type

`GethLikeTxTrace[] object`

### Objects definition

`GethTraceOptions`

| Fields name | Type |
| :--- | :--- |
| DisableStorage | `Boolean` |
| DisableMemory | `Boolean` |
| DisableStack | `Boolean` |
| Tracer | `String` |
| Timeout | `String` |

`GethLikeTxTrace[]`

| Fields name | Type |
| :--- | :--- |
| Length | `Quantity` |
| LongLength | `Quantity` |
| Rank | `Quantity` |
| SyncRoot | `Object object` |
| IsReadOnly | `Boolean` |
| IsFixedSize | `Boolean` |
| IsSynchronized | `Boolean` |

## debug\_traceBlockByHash

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockHash | `Hash` |
| options | `GethTraceOptions object` |

### Return type

`GethLikeTxTrace[] object`

### Objects definition

`GethTraceOptions`

| Fields name | Type |
| :--- | :--- |
| DisableStorage | `Boolean` |
| DisableMemory | `Boolean` |
| DisableStack | `Boolean` |
| Tracer | `String` |
| Timeout | `String` |

`GethLikeTxTrace[]`

| Fields name | Type |
| :--- | :--- |
| Length | `Quantity` |
| LongLength | `Quantity` |
| Rank | `Quantity` |
| SyncRoot | `Object object` |
| IsReadOnly | `Boolean` |
| IsFixedSize | `Boolean` |
| IsSynchronized | `Boolean` |

## debug\_getBlockRlp

Retrieves a block in the RLP-serialized form.

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| number | `Quantity` |

### Return type

`Data`

## debug\_getBlockRlpByHash

Retrieves a block in the RLP-serialized form.

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| hash | `Hash` |

### Return type

`Data`

## debug\_getConfigValue

Retrieves the Nethermind configuration value, e.g. JsonRpc.Enabled

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| category | `String` |
| name | `String` |

### Return type

`Object object`

### Objects definition

`Object`

| Fields name | Type |
| :--- | :--- |


## debug\_traceTransactionInBlockByHash

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockRlp | `Data` |
| transactionHash | `Hash` |
| options | `GethTraceOptions object` |

### Return type

`GethLikeTxTrace object`

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
| StoragesByDepth | `Stack`1 object\` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `List`1 object\` |

## debug\_traceTransactionInBlockByIndex

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockRlp | `Data` |
| txIndex | `Quantity` |
| options | `GethTraceOptions object` |

### Return type

`GethLikeTxTrace object`

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
| StoragesByDepth | `Stack`1 object\` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `List`1 object\` |

## debug\_migrateReceipts

Sets the block number up to which receipts will be migrated to \(Nethermind specific\).

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockNumber | `Quantity` |

### Return type

`ResultWrapper`1 object\`

### Objects definition

`ResultWrapper`1\`

| Fields name | Type |
| :--- | :--- |
| Data | `Boolean` |
| Result | `Result object` |
| ErrorCode | `Quantity` |

