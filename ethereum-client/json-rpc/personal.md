# Personal module

## personal\_listAccounts

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

## personal\_lockAccount

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| address | `Address` |
{% endtab %}

{% tab title="Response" %}
### Return type

`Boolean`
{% endtab %}
{% endtabs %}

## personal\_newAccount

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| passphrase | `String` |
{% endtab %}

{% tab title="Response" %}
### Return type

`Address`
{% endtab %}
{% endtabs %}

## personal\_unlockAccount

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| address | `Address` |
| passphrase | `String` |
{% endtab %}

{% tab title="Response" %}
### Return type

`Boolean`
{% endtab %}
{% endtabs %}

