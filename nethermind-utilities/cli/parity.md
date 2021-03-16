# Parity module

## parity.clearEngineSigner

Clears an authority account for signing consensus messages. Blocks will not be sealed.

{% tabs %}
{% tab title="Request" %}
### **Parameters**

_None_
{% endtab %}

{% tab title="Response" %}
### Return type

`Boolean`
{% endtab %}
{% endtabs %}

## parity.enode

Returns the node enode URI.

{% tabs %}
{% tab title="Request" %}
### **Parameters**

_None_
{% endtab %}

{% tab title="Response" %}
### Return type

`String`
{% endtab %}
{% endtabs %}

## parity.getBlockReceipts\(blockParameter\)

Returns receipts from all transactions from particular block

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockParameter | `String` |
{% endtab %}

{% tab title="Response" %}
### Return type

`JavaScript Object`
{% endtab %}
{% endtabs %}

## parity.netPeers

Returns connected peers. Peers with non-empty protocols have completed handshake.

{% tabs %}
{% tab title="Request" %}
### **Parameters**

_None_
{% endtab %}

{% tab title="Response" %}
### Return type

`JavaScript Object`
{% endtab %}
{% endtabs %}

## parity.pendingTransactions

Returns the pending transactions using Parity format

{% tabs %}
{% tab title="Request" %}
### **Parameters**

_None_
{% endtab %}

{% tab title="Response" %}
### Return type

`JavaScript Object`
{% endtab %}
{% endtabs %}

## parity.setEngineSignerSecret\(privateKey\)

Sets an authority account for signing consensus messages.

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| privateKey | `String` |
{% endtab %}

{% tab title="Response" %}
### Return type

`Boolean`
{% endtab %}
{% endtabs %}

## parity.setEngineSigner\(address, password\)

Sets an authority account for signing consensus messages.

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| address | `Address` |
| password | `String` |
{% endtab %}

{% tab title="Response" %}
### Return type

`Boolean`
{% endtab %}
{% endtabs %}

