# Personal

## personal\_listAccounts

{% tabs %}
{% tab title="Request" %}
### **参数**

_无_
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`Address`
{% endtab %}
{% endtabs %}

## personal\_lockAccount

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| address | `Address` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`Boolean`
{% endtab %}
{% endtabs %}

## personal\_unlockAccount

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| address | `Address` |
| passphrase | `String` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`Boolean`
{% endtab %}
{% endtabs %}

## personal\_newAccount

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| passphrase | `String` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`Address`
{% endtab %}
{% endtabs %}

