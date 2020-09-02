#parity

##parity\_pendingTransactions

Returns a list of transactions currently in the queue. 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

_None_
{% endtab %}
{% tab title="Response" %}

#### Return type
`ParityTransaction object`

{% endtab %}
{% tab title="Object definitions" %}
#### Objects definition

`ParityTransaction`
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

{% endtab %}
##parity\_getBlockReceipts

Get receipts from all transactions from particular block, more efficient than fetching the receipts one-by-one. 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockParameter | `BlockParameter object` |
{% endtab %}
{% tab title="Response" %}

#### Return type
`ReceiptForRpc object`

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
| LogsBloom | `Bloom object` |
| Root | `Hash` |
| Status | `Quantity` |
| Error | `String` |

{% endtab %}
##parity\_enode

Returns the node enode URI. 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

_None_
{% endtab %}
{% tab title="Response" %}

#### Return type
`String`

{% endtab %}
##parity\_setEngineSigner

 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| address | `Address` |
| password | `String` |
{% endtab %}
{% tab title="Response" %}

#### Return type
`Boolean`

{% endtab %}
##parity\_setEngineSignerSecret

 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| privateKey | `String` |
{% endtab %}
{% tab title="Response" %}

#### Return type
`Boolean`

{% endtab %}
##parity\_clearEngineSigner

 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

_None_
{% endtab %}
{% tab title="Response" %}

#### Return type
`Boolean`

{% endtab %}
