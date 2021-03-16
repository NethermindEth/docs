# Clique module

## clique\_discard

This method drops a currently running proposal. The signer will not cast further votes \(either for or against\) the address.

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| signer | `Address` |
{% endtab %}

{% tab title="Response" %}
### Return type

`Boolean`
{% endtab %}
{% endtabs %}

## clique\_getSigners

Retrieves the list of authorized signers.

{% tabs %}
{% tab title="Request" %}
### **Parameters**

_None_
{% endtab %}

{% tab title="Response" %}
### Return type

`Address`
{% endtab %}
{% endtabs %}

## clique\_getSignersAnnotated

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

## clique\_getSignersAtHash

Retrieves the list of authorized signers at the specified block by hash.

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| hash | `Hash` |
{% endtab %}

{% tab title="Response" %}
### Return type

`Address`
{% endtab %}
{% endtabs %}

## clique\_getSignersAtHashAnnotated

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| hash | `Hash` |
{% endtab %}

{% tab title="Response" %}
### Return type

`String`
{% endtab %}
{% endtabs %}

## clique\_getSignersAtNumber

Retrieves the list of authorized signers at the specified block by block number.

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| number | `Quantity` |
{% endtab %}

{% tab title="Response" %}
### Return type

`Address`
{% endtab %}
{% endtabs %}

## clique\_getSnapshot

Retrieves a snapshot of all clique state at a given block.

{% tabs %}
{% tab title="Request" %}
### **Parameters**

_None_
{% endtab %}

{% tab title="Response" %}
### Return type

`Snapshot object`
{% endtab %}

{% tab title="Object definitions" %}
### Objects definition

`Snapshot`

| Fields name | Type |
| :--- | :--- |
| Number | `Quantity` |
| Hash | `Hash` |
| Signers | `Array` |
| SignerLimit | `Quantity` |
{% endtab %}
{% endtabs %}

## clique\_getSnapshotAtHash

Retrieves the state snapshot at a given block.

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| hash | `Hash` |
{% endtab %}

{% tab title="Response" %}
### Return type

`Snapshot object`
{% endtab %}

{% tab title="Object definitions" %}
### Objects definition

`Snapshot`

| Fields name | Type |
| :--- | :--- |
| Number | `Quantity` |
| Hash | `Hash` |
| Signers | `Array` |
| SignerLimit | `Quantity` |
{% endtab %}
{% endtabs %}

## clique\_produceBlock

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| parentHash | `Hash` |
{% endtab %}

{% tab title="Response" %}
### Return type

`Boolean`
{% endtab %}
{% endtabs %}

## clique\_propose

Adds a new authorization proposal that the signer will attempt to push through. If the `vote` parameter is true, the local signer votes for the given address to be included in the set of authorized signers. With `vote` set to false, the signer is against the address.

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| signer | `Address` |
| vote | `Boolean` |
{% endtab %}

{% tab title="Response" %}
### Return type

`Boolean`
{% endtab %}
{% endtabs %}

