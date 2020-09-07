#trace

##trace\_rawTransaction

Traces a call to eth_sendRawTransaction without making the call, returning the traces 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| data | `Data` |
| traceTypes | `Array` |
{% endtab %}
{% tab title="Response" %}

{% endtab %}
{% tab title="Response" %}

#### Return type
`ParityTxTraceFromReplay object`

{% endtab %}
{% tab title="Object definitions" %}
#### Objects definition

`ParityTxTraceFromReplay`
| Fields name | Type |
| :--- | :--- |
| Output | `Data` |
| TransactionHash | `Hash` |
| VmTrace | `ParityVmTrace object` |
| Action | `ParityTraceAction object` |
| StateChanges | `Dictionary`2 object` |

`Byte[]`
| Fields name | Type |
| :--- | :--- |
| Length | `Quantity` |
| LongLength | `Quantity` |
| Rank | `Quantity` |
| SyncRoot | `Object object` |
| IsReadOnly | `Boolean` |
| IsFixedSize | `Boolean` |
| IsSynchronized | `Boolean` |

`ParityVmTrace`
| Fields name | Type |
| :--- | :--- |
| Code | `Data` |
| Operations | `ParityVmOperationTrace[] object` |

`ParityTraceAction`
| Fields name | Type |
| :--- | :--- |
| TraceAddress | `Int32[] object` |
| CallType | `String` |
| IncludeInTrace | `Boolean` |
| IsPrecompiled | `Boolean` |
| Type | `String` |
| CreationMethod | `String` |
| From | `Address` |
| To | `Address` |
| Gas | `Quantity` |
| Value | `Quantity` |
| Input | `Data` |
| Result | `ParityTraceResult object` |
| Subtraces | `List`1 object` |
| Author | `Address` |
| RewardType | `String` |
| Error | `String` |

`Dictionary`2`
| Fields name | Type |
| :--- | :--- |
| Comparer | `IEqualityComparer`1 object` |
| Count | `Quantity` |
| Keys | `KeyCollection object` |
| Values | `ValueCollection object` |
| Item | `ParityAccountStateChange object` |

{% endtab %}
{% endtabs %}
##trace\_replayTransaction

 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| txHash | `Hash` |
| traceTypes | `Array` |
{% endtab %}
{% tab title="Response" %}

{% endtab %}
{% tab title="Response" %}

#### Return type
`ParityTxTraceFromReplay object`

{% endtab %}
{% tab title="Object definitions" %}
#### Objects definition

`ParityTxTraceFromReplay`
| Fields name | Type |
| :--- | :--- |
| Output | `Data` |
| TransactionHash | `Hash` |
| VmTrace | `ParityVmTrace object` |
| Action | `ParityTraceAction object` |
| StateChanges | `Dictionary`2 object` |

`Byte[]`
| Fields name | Type |
| :--- | :--- |
| Length | `Quantity` |
| LongLength | `Quantity` |
| Rank | `Quantity` |
| SyncRoot | `Object object` |
| IsReadOnly | `Boolean` |
| IsFixedSize | `Boolean` |
| IsSynchronized | `Boolean` |

`ParityVmTrace`
| Fields name | Type |
| :--- | :--- |
| Code | `Data` |
| Operations | `ParityVmOperationTrace[] object` |

`ParityTraceAction`
| Fields name | Type |
| :--- | :--- |
| TraceAddress | `Int32[] object` |
| CallType | `String` |
| IncludeInTrace | `Boolean` |
| IsPrecompiled | `Boolean` |
| Type | `String` |
| CreationMethod | `String` |
| From | `Address` |
| To | `Address` |
| Gas | `Quantity` |
| Value | `Quantity` |
| Input | `Data` |
| Result | `ParityTraceResult object` |
| Subtraces | `List`1 object` |
| Author | `Address` |
| RewardType | `String` |
| Error | `String` |

`Dictionary`2`
| Fields name | Type |
| :--- | :--- |
| Comparer | `IEqualityComparer`1 object` |
| Count | `Quantity` |
| Keys | `KeyCollection object` |
| Values | `ValueCollection object` |
| Item | `ParityAccountStateChange object` |

{% endtab %}
{% endtabs %}
##trace\_replayBlockTransactions

 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| numberOrTag | `BlockParameter object` |
| traceTypes | `Array` |
{% endtab %}
{% tab title="Response" %}

{% endtab %}
{% tab title="Response" %}

#### Return type
`ParityTxTraceFromReplay object`

{% endtab %}
{% tab title="Object definitions" %}
#### Objects definition

`BlockParameter`
| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`
`Quantity` or `String` (latest, earliest, pending)

`Int64`
| Fields name | Type |
| :--- | :--- |

`ParityTxTraceFromReplay`
| Fields name | Type |
| :--- | :--- |
| Output | `Data` |
| TransactionHash | `Hash` |
| VmTrace | `ParityVmTrace object` |
| Action | `ParityTraceAction object` |
| StateChanges | `Dictionary`2 object` |

`Byte[]`
| Fields name | Type |
| :--- | :--- |
| Length | `Quantity` |
| LongLength | `Quantity` |
| Rank | `Quantity` |
| SyncRoot | `Object object` |
| IsReadOnly | `Boolean` |
| IsFixedSize | `Boolean` |
| IsSynchronized | `Boolean` |

`ParityVmTrace`
| Fields name | Type |
| :--- | :--- |
| Code | `Data` |
| Operations | `ParityVmOperationTrace[] object` |

`ParityTraceAction`
| Fields name | Type |
| :--- | :--- |
| TraceAddress | `Int32[] object` |
| CallType | `String` |
| IncludeInTrace | `Boolean` |
| IsPrecompiled | `Boolean` |
| Type | `String` |
| CreationMethod | `String` |
| From | `Address` |
| To | `Address` |
| Gas | `Quantity` |
| Value | `Quantity` |
| Input | `Data` |
| Result | `ParityTraceResult object` |
| Subtraces | `List`1 object` |
| Author | `Address` |
| RewardType | `String` |
| Error | `String` |

`Dictionary`2`
| Fields name | Type |
| :--- | :--- |
| Comparer | `IEqualityComparer`1 object` |
| Count | `Quantity` |
| Keys | `KeyCollection object` |
| Values | `ValueCollection object` |
| Item | `ParityAccountStateChange object` |

{% endtab %}
{% endtabs %}
##trace\_block

 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| numberOrTag | `BlockParameter object` |
{% endtab %}
{% tab title="Response" %}

{% endtab %}
{% tab title="Response" %}

#### Return type
`ParityTxTraceFromStore object`

{% endtab %}
{% tab title="Object definitions" %}
#### Objects definition

`BlockParameter`
| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`
`Quantity` or `String` (latest, earliest, pending)

`Int64`
| Fields name | Type |
| :--- | :--- |

`ParityTxTraceFromStore`
| Fields name | Type |
| :--- | :--- |
| Action | `ParityTraceAction object` |
| BlockHash | `Hash` |
| BlockNumber | `Quantity` |
| Result | `ParityTraceResult object` |
| Subtraces | `Quantity` |
| TraceAddress | `Int32[] object` |
| TransactionHash | `Hash` |
| TransactionPosition | `Quantity` |
| Type | `String` |

`ParityTraceAction`
| Fields name | Type |
| :--- | :--- |
| TraceAddress | `Int32[] object` |
| CallType | `String` |
| IncludeInTrace | `Boolean` |
| IsPrecompiled | `Boolean` |
| Type | `String` |
| CreationMethod | `String` |
| From | `Address` |
| To | `Address` |
| Gas | `Quantity` |
| Value | `Quantity` |
| Input | `Data` |
| Result | `ParityTraceResult object` |
| Subtraces | `List`1 object` |
| Author | `Address` |
| RewardType | `String` |
| Error | `String` |

`ParityTraceResult`
| Fields name | Type |
| :--- | :--- |
| GasUsed | `Quantity` |
| Output | `Data` |
| Address | `Address` |
| Code | `Data` |

`Int32[]`
| Fields name | Type |
| :--- | :--- |
| Length | `Quantity` |
| LongLength | `Quantity` |
| Rank | `Quantity` |
| SyncRoot | `Object object` |
| IsReadOnly | `Boolean` |
| IsFixedSize | `Boolean` |
| IsSynchronized | `Boolean` |

`Int32`
| Fields name | Type |
| :--- | :--- |

{% endtab %}
{% endtabs %}
##trace\_transaction

 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| txHash | `Hash` |
{% endtab %}
{% tab title="Response" %}

{% endtab %}
{% tab title="Response" %}

#### Return type
`ParityTxTraceFromStore object`

{% endtab %}
{% tab title="Object definitions" %}
#### Objects definition

`ParityTxTraceFromStore`
| Fields name | Type |
| :--- | :--- |
| Action | `ParityTraceAction object` |
| BlockHash | `Hash` |
| BlockNumber | `Quantity` |
| Result | `ParityTraceResult object` |
| Subtraces | `Quantity` |
| TraceAddress | `Int32[] object` |
| TransactionHash | `Hash` |
| TransactionPosition | `Quantity` |
| Type | `String` |

`ParityTraceAction`
| Fields name | Type |
| :--- | :--- |
| TraceAddress | `Int32[] object` |
| CallType | `String` |
| IncludeInTrace | `Boolean` |
| IsPrecompiled | `Boolean` |
| Type | `String` |
| CreationMethod | `String` |
| From | `Address` |
| To | `Address` |
| Gas | `Quantity` |
| Value | `Quantity` |
| Input | `Data` |
| Result | `ParityTraceResult object` |
| Subtraces | `List`1 object` |
| Author | `Address` |
| RewardType | `String` |
| Error | `String` |

`ParityTraceResult`
| Fields name | Type |
| :--- | :--- |
| GasUsed | `Quantity` |
| Output | `Data` |
| Address | `Address` |
| Code | `Data` |

`Int32[]`
| Fields name | Type |
| :--- | :--- |
| Length | `Quantity` |
| LongLength | `Quantity` |
| Rank | `Quantity` |
| SyncRoot | `Object object` |
| IsReadOnly | `Boolean` |
| IsFixedSize | `Boolean` |
| IsSynchronized | `Boolean` |

`Int32`
| Fields name | Type |
| :--- | :--- |

{% endtab %}
{% endtabs %}
