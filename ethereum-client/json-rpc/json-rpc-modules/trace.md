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

{% endtab %}
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

{% endtab %}
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

`ParityTxTraceFromReplay`
| Fields name | Type |
| :--- | :--- |
| Output | `Data` |
| TransactionHash | `Hash` |
| VmTrace | `ParityVmTrace object` |
| Action | `ParityTraceAction object` |
| StateChanges | `Dictionary`2 object` |

{% endtab %}
##trace\_block

 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| numberOrTag | `BlockParameter object` |
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

{% endtab %}
##trace\_transaction

 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| txHash | `Hash` |
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

{% endtab %}
