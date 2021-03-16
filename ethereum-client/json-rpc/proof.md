# Proof module

## proof\_getTransactionByHash

This function returns the same result as `eth_getTransactionReceipt` and also a tx proof, receipt proof and serialized block headers.

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| txHash | `Hash` |
| includeHeader | `Boolean` |
{% endtab %}

{% tab title="Response" %}
### Return type

`TransactionWithProof object`
{% endtab %}

{% tab title="Object definitions" %}
### Objects definition

`TransactionWithProof`

| Fields name | Type |
| :--- | :--- |
| Transaction | `TransactionForRpc object` |
| TxProof | `Data` |
| BlockHeader | `Data` |

`TransactionForRpc`

| Fields name | Type |
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
| S | `Quantity` |
| R | `Quantity` |
{% endtab %}
{% endtabs %}

## proof\_getTransactionReceipt

This function should return the same result as `eth_call` and also proofs of all USED accunts and their storages and serialized block headers

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| txHash | `Hash` |
| includeHeader | `Boolean` |
{% endtab %}

{% tab title="Response" %}
### Return type

`ReceiptWithProof object`
{% endtab %}

{% tab title="Object definitions" %}
### Objects definition

`ReceiptWithProof`

| Fields name | Type |
| :--- | :--- |
| Receipt | `ReceiptForRpc object` |
| TxProof | `Data` |
| ReceiptProof | `Data` |
| BlockHeader | `Data` |

`ReceiptForRpc`

| Fields name | Type |
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
{% endtab %}
{% endtabs %}

