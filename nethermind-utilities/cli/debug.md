# Debug module

## debug.getBlockRlp\(number\)

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| number | `Quantity` |
{% endtab %}

{% tab title="Response" %}
### Return type

`String`
{% endtab %}
{% endtabs %}

## debug.getBlockRlpByHash\(hash\)

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| hash | `String` |
{% endtab %}

{% tab title="Response" %}
### Return type

`String`
{% endtab %}
{% endtabs %}

## debug.getChainLevel\(number\)

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| number | `Quantity` |
{% endtab %}

{% tab title="Response" %}
### Return type

`JavaScript Object`
{% endtab %}
{% endtabs %}

## debug.config\(category, name\)

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| category | `String` |
| name | `String` |
{% endtab %}

{% tab title="Response" %}
### Return type

`String`
{% endtab %}
{% endtabs %}

## debug.migrateReceipts\(number\)

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| number | `Quantity` |
{% endtab %}

{% tab title="Response" %}
### Return type

`Boolean`
{% endtab %}
{% endtabs %}

## debug.traceBlock\(rlp, options\)

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| rlp | `String` |
| options | `Object` |
{% endtab %}

{% tab title="Response" %}
### Return type

`JavaScript Object`
{% endtab %}
{% endtabs %}

## debug.traceBlockByHash\(hash, options\)

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| hash | `String` |
| options | `Object` |
{% endtab %}

{% tab title="Response" %}
### Return type

`JavaScript Object`
{% endtab %}
{% endtabs %}

## debug.traceBlockByNumber\(number, options\)

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| number | `String` |
| options | `Object` |
{% endtab %}

{% tab title="Response" %}
### Return type

`JavaScript Object`
{% endtab %}
{% endtabs %}

## debug.traceTransaction\(hash, options\)

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| hash | `String` |
| options | `Object` |
{% endtab %}

{% tab title="Response" %}
### Return type

`JavaScript Object`
{% endtab %}
{% endtabs %}

## debug.traceTransactionByBlockAndIndex\(hash, options\)

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| hash | `String` |
| options | `Object` |
{% endtab %}

{% tab title="Response" %}
### Return type

`JavaScript Object`
{% endtab %}
{% endtabs %}

## debug.traceTransactionByBlockhashAndIndex\(hash, options\)

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| hash | `String` |
| options | `Object` |
{% endtab %}

{% tab title="Response" %}
### Return type

`JavaScript Object`
{% endtab %}
{% endtabs %}

## debug.traceTransactionInBlockByHash\(rlp, hash, options\)

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| rlp | `String` |
| hash | `String` |
| options | `Object` |
{% endtab %}

{% tab title="Response" %}
### Return type

`JavaScript Object`
{% endtab %}
{% endtabs %}

## debug.traceTransactionInBlockByIndex\(rlp, index, options\)

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| rlp | `String` |
| index | `Quantity` |
| options | `Object` |
{% endtab %}

{% tab title="Response" %}
### Return type

`JavaScript Object`
{% endtab %}
{% endtabs %}

