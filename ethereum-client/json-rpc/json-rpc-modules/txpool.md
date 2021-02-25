# TxPool

## txpool_content

 

{% tabs %}
{% tab title="Request" %}
### **Parameters**

_None_
{% endtab %}

{% tab title="Response" %}
### Return type

`TxPoolContent object`
{% endtab %}

{% tab title="Object definitions" %}
### Objects definition

`TxPoolContent`

| Fields name | Type |
| :--- | :--- |
| Pending | `Array` |
| Queued | `Array` |
{% endtab %}
{% endtabs %}

## txpool_inspect

 

{% tabs %}
{% tab title="Request" %}
### **Parameters**

_None_
{% endtab %}

{% tab title="Response" %}
### Return type

`TxPoolInspection object`
{% endtab %}

{% tab title="Object definitions" %}
### Objects definition

`TxPoolInspection`

| Fields name | Type |
| :--- | :--- |
| Pending | `Array` |
| Queued | `Array` |
{% endtab %}
{% endtabs %}

## txpool_status

 

{% tabs %}
{% tab title="Request" %}
### **Parameters**

_None_
{% endtab %}

{% tab title="Response" %}
### Return type

`TxPoolStatus object`
{% endtab %}

{% tab title="Object definitions" %}
### Objects definition

`TxPoolStatus`

| Fields name | Type |
| :--- | :--- |
| Pending | `Quantity` |
| Queued | `Quantity` |
{% endtab %}
{% endtabs %}

