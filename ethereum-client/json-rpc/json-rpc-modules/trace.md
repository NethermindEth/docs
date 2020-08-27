# Trace

## trace\_rawTransaction

Traces a call to eth\_sendRawTransaction without making the call, returning the traces

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| data | `Data` |
| traceTypes | `Array` |

### Return type

`ParityTxTraceFromReplay object`

### Objects definition

`ParityTxTraceFromReplay`

| Fields name | Type |
| :--- | :--- |
| Output | `Data` |
| TransactionHash | `Hash` |
| VmTrace | `ParityVmTrace object` |
| Action | `ParityTraceAction object` |
| StateChanges | `Dictionary`2 object\` |

## trace\_replayTransaction

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| txHash | `Hash` |
| traceTypes | `Array` |

### Return type

`ParityTxTraceFromReplay object`

### Objects definition

`ParityTxTraceFromReplay`

| Fields name | Type |
| :--- | :--- |
| Output | `Data` |
| TransactionHash | `Hash` |
| VmTrace | `ParityVmTrace object` |
| Action | `ParityTraceAction object` |
| StateChanges | `Dictionary`2 object\` |

## trace\_replayBlockTransactions

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| numberOrTag | `BlockParameter object` |
| traceTypes | `Array` |

### Return type

`ParityTxTraceFromReplay[] object`

### Objects definition

`BlockParameter`

| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Nullable`1 object\` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`ParityTxTraceFromReplay[]`

| Fields name | Type |
| :--- | :--- |
| Length | `Quantity` |
| LongLength | `Quantity` |
| Rank | `Quantity` |
| SyncRoot | `Object object` |
| IsReadOnly | `Boolean` |
| IsFixedSize | `Boolean` |
| IsSynchronized | `Boolean` |

## trace\_block

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| numberOrTag | `BlockParameter object` |

### Return type

`ParityTxTraceFromStore[] object`

### Objects definition

`BlockParameter`

| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Nullable`1 object\` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`ParityTxTraceFromStore[]`

| Fields name | Type |
| :--- | :--- |
| Length | `Quantity` |
| LongLength | `Quantity` |
| Rank | `Quantity` |
| SyncRoot | `Object object` |
| IsReadOnly | `Boolean` |
| IsFixedSize | `Boolean` |
| IsSynchronized | `Boolean` |

## trace\_transaction

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| txHash | `Hash` |

### Return type

`ParityTxTraceFromStore[] object`

### Objects definition

`ParityTxTraceFromStore[]`

| Fields name | Type |
| :--- | :--- |
| Length | `Quantity` |
| LongLength | `Quantity` |
| Rank | `Quantity` |
| SyncRoot | `Object object` |
| IsReadOnly | `Boolean` |
| IsFixedSize | `Boolean` |
| IsSynchronized | `Boolean` |

