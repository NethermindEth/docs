# Trace

## trace\_rawTransaction

追踪对 eth \ _sendRawTransaction 的调用，但不进行该调用，并返回其踪迹。

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| data | `Data` |
| traceTypes | `Array` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`ParityTxTraceFromReplay object`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`ParityTxTraceFromReplay`

| 字段名称 | 类型 |
| :--- | :--- |
| Output | `Data` |
| TransactionHash | `Hash` |
| VmTrace | `ParityVmTrace object` |
| Action | `ParityTraceAction object` |
| StateChanges | `Dictionary`2 object\` |

`ParityVmTrace`

| 字段名称 | 类型 |
| :--- | :--- |
| Code | `Data` |
| Operations | `ParityVmOperationTrace[] object` |

`ParityTraceAction`

| 字段名称 | 类型 |
| :--- | :--- |
| TraceAddress | `Array` |
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
| Subtraces | `Array` |
| Author | `Address` |
| RewardType | `String` |
| Error | `String` |
{% endtab %}
{% endtabs %}

## trace\_replayTransaction

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| txHash | `Hash` |
| traceTypes | `Array` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`ParityTxTraceFromReplay object`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`ParityTxTraceFromReplay`

| 字段名称 | 类型 |
| :--- | :--- |
| Output | `Data` |
| TransactionHash | `Hash` |
| VmTrace | `ParityVmTrace object` |
| Action | `ParityTraceAction object` |
| StateChanges | `Dictionary`2 object\` |

`ParityVmTrace`

| 字段名称 | 类型 |
| :--- | :--- |
| Code | `Data` |
| Operations | `ParityVmOperationTrace[] object` |

`ParityTraceAction`

| 字段名称 | 类型 |
| :--- | :--- |
| TraceAddress | `Array` |
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
| Subtraces | `Array` |
| Author | `Address` |
| RewardType | `String` |
| Error | `String` |
{% endtab %}
{% endtabs %}

## trace\_replayBlockTransactions

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| numberOrTag | `BlockParameter object` |
| traceTypes | `Array` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`ParityTxTraceFromReplay object`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`BlockParameter`

| 字段名称 | 类型 |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType` `Quantity` 或 `String` \（最新、最早、待处理\）

`ParityTxTraceFromReplay`

| 字段名称 | 类型 |
| :--- | :--- |
| Output | `Data` |
| TransactionHash | `Hash` |
| VmTrace | `ParityVmTrace object` |
| Action | `ParityTraceAction object` |
| StateChanges | `Dictionary`2 object\` |

`ParityVmTrace`

| 字段名称 | 类型 |
| :--- | :--- |
| Code | `Data` |
| Operations | `ParityVmOperationTrace[] object` |

`ParityTraceAction`

| 字段名称 | 类型 |
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
| Subtraces | `List`1 object\` |
| Author | `Address` |
| RewardType | `String` |
| Error | `String` |
{% endtab %}
{% endtabs %}

## trace\_block

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| numberOrTag | `BlockParameter object` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`ParityTxTraceFromStore object`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`BlockParameter`

| 字段名称 | 类型 |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType` `Quantity` 或 `String` \（最新、最早、待处理\）

`ParityTxTraceFromStore`

| 字段名称 | 类型 |
| :--- | :--- |
| Action | `ParityTraceAction object` |
| BlockHash | `Hash` |
| BlockNumber | `Quantity` |
| Result | `ParityTraceResult object` |
| Subtraces | `Quantity` |
| TraceAddress | `Array` |
| TransactionHash | `Hash` |
| TransactionPosition | `Quantity` |
| Type | `String` |

`ParityTraceAction`

| 字段名称 | 类型 |
| :--- | :--- |
| TraceAddress | `Array` |
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
| Subtraces | `Array` |
| Author | `Address` |
| RewardType | `String` |
| Error | `String` |

`ParityTraceResult`

| 字段名称 | 类型 |
| :--- | :--- |
| GasUsed | `Quantity` |
| Output | `Data` |
| Address | `Address` |
| Code | `Data` |
{% endtab %}
{% endtabs %}

## trace\_transaction

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| txHash | `Hash` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`ParityTxTraceFromStore object`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`ParityTxTraceFromStore`

| 字段名称 | 类型 |
| :--- | :--- |
| Action | `ParityTraceAction object` |
| BlockHash | `Hash` |
| BlockNumber | `Quantity` |
| Result | `ParityTraceResult object` |
| Subtraces | `Quantity` |
| TraceAddress | `Array` |
| TransactionHash | `Hash` |
| TransactionPosition | `Quantity` |
| Type | `String` |

`ParityTraceAction`

| 字段名称 | 类型 |
| :--- | :--- |
| TraceAddress | `Array` |
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
| Subtraces | `Array` |
| Author | `Address` |
| RewardType | `String` |
| Error | `String` |

`ParityTraceResult`

| 字段名称 | 类型 |
| :--- | :--- |
| GasUsed | `Quantity` |
| Output | `Data` |
| Address | `Address` |
| Code | `Data` |
{% endtab %}
{% endtabs %}

