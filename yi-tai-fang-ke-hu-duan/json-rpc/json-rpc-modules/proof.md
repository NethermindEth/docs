# Proof

## proof\_getTransactionByHash

返回与 `eth_getTransactionReceipt` 相同的结果，以及交易证明、收据证明和序列化的区块头。

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| txHash | `Hash` |
| includeHeader | `Boolean` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`TransactionWithProof object`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`TransactionWithProof`

| 字段名称 | 类型 |
| :--- | :--- |
| Transaction | `TransactionForRpc object` |
| TxProof | `Data` |
| BlockHeader | `Data` |

`TransactionForRpc`

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
| Data | `Data` |
| Input | `Data` |
| V | `Quantity` |
| S | `Data` |
| R | `Data` |
{% endtab %}
{% endtabs %}

## proof\_getTransactionReceipt

应返回与 `eth_call` 相同的结果，以及所有使用过的账户及其存储的证明，和序列化的区块头。

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| txHash | `Hash` |
| includeHeader | `Boolean` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`ReceiptWithProof object`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`ReceiptWithProof`

| 字段名称 | 类型 |
| :--- | :--- |
| Receipt | `ReceiptForRpc object` |
| TxProof | `Data` |
| ReceiptProof | `Data` |
| BlockHeader | `Data` |

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
{% endtab %}
{% endtabs %}

