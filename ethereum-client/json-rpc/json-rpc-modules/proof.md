#proof

##proof\_getTransactionByHash

This function returns the same result as `eth_getTransactionReceipt` and also a tx proof, receipt proof and serialized block headers. 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| txHash | `Hash` |
| includeHeader | `Boolean` |
{% endtab %}
{% tab title="Response" %}

#### Return type
`TransactionWithProof object`

{% endtab %}
{% tab title="Object definitions" %}
#### Objects definition

`TransactionWithProof`
| Fields name | Type |
| :--- | :--- |
| Transaction | `TransactionForRpc object` |
| TxProof | `Byte[][] object` |
| BlockHeader | `Data` |

{% endtab %}
##proof\_getTransactionReceipt

This function should return the same result as `eth_call` and also proofs of all USED accunts and their storages and serialized block headers 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| txHash | `Hash` |
| includeHeader | `Boolean` |
{% endtab %}
{% tab title="Response" %}

#### Return type
`ReceiptWithProof object`

{% endtab %}
{% tab title="Object definitions" %}
#### Objects definition

`ReceiptWithProof`
| Fields name | Type |
| :--- | :--- |
| Receipt | `ReceiptForRpc object` |
| TxProof | `Byte[][] object` |
| ReceiptProof | `Byte[][] object` |
| BlockHeader | `Data` |

{% endtab %}
