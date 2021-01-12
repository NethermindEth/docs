# Parity

## parity\_pendingTransactions

返回当前队列中交易的列表。

{% tabs %}
{% tab title="Request" %}
### **参数**

_无_
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`ParityTransaction object`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`ParityTransaction`

| 字段名称 | 类型 |
| :--- | :--- |
| Hash | `Hash` |
| Nonce | `Quantity` |
| BlockHash | `Hash` |
| BlockNumber | `Quantity` |
| TransactionIndex | `Quantity` |
| From | `Address` |
| To | `Address` |
| Value | `Quantity` |
| GasPrice | `Quantity` |
| Gas | `Quantity` |
| Input | `Data` |
| Raw | `Data` |
| Creates | `Address` |
| PublicKey | `PublicKey object` |
| ChainId | `Quantity` |
| Condition | `Object object` |
| R | `Data` |
| S | `Data` |
| V | `Quantity` |
| StandardV | `Quantity` |

`PublicKey`

| 字段名称 | 类型 |
| :--- | :--- |
| Address | `Address` |
| Bytes | `Data` |
| PrefixedBytes | `Data` |
{% endtab %}
{% endtabs %}

## parity\_getBlockReceipts

获取指定区块内所有交易的收据，比逐个获取收据更高效。

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| blockParameter | `BlockParameter object` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`ReceiptForRpc object`
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

`ReceiptForRpc`

| 字段名称 | 类型 |
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
| LogsBloom | `Bloom object` |
| Root | `Hash` |
| Status | `Quantity` |
| Error | `String` |

`LogEntryForRpc[]`

| 字段名称 | 类型 |
| :--- | :--- |
| Length | `Quantity` |
| LongLength | `Quantity` |
| Rank | `Quantity` |
| SyncRoot | `Object object` |
| IsReadOnly | `Boolean` |
| IsFixedSize | `Boolean` |
| IsSynchronized | `Boolean` |
{% endtab %}
{% endtabs %}

## parity\_enode

返回该节点的 enode URI。

{% tabs %}
{% tab title="Request" %}
### **参数**

_无_
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`String`
{% endtab %}
{% endtabs %}

## parity\_setEngineSigner

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| address | `Address` |
| password | `String` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`Boolean`
{% endtab %}
{% endtabs %}

## parity\_setEngineSignerSecret

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| privateKey | `String` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`Boolean`
{% endtab %}
{% endtabs %}

## parity\_clearEngineSigner

{% tabs %}
{% tab title="Request" %}
### **参数**

_无_
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`Boolean`
{% endtab %}
{% endtabs %}

