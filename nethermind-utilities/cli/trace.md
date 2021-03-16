# Trace module

## trace.replayBlockTransactions\(blockNumber, traceTypes\)

Replays all transactions in a block returning the requested traces for each transaction.

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockNumber | `String` |
| traceTypes | `Array` |
{% endtab %}

{% tab title="Response" %}
### Return type

`JavaScript Object`
{% endtab %}
{% endtabs %}

## trace.replayTransaction\(txHash, traceTypes\)

Replays a transaction, returning the traces.

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| txHash | `String` |
| traceTypes | `Array` |
{% endtab %}

{% tab title="Response" %}
### Return type

`JavaScript Object`
{% endtab %}
{% endtabs %}

## trace.block\(blockNumber\)

Returns traces created at given block.

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockNumber | `String` |
{% endtab %}

{% tab title="Response" %}
### Return type

`JavaScript Object`
{% endtab %}
{% endtabs %}

## trace.call\(transaction, traceTypes, blockNumber\)

Traces a call, returning the traces

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| transaction | `Object` |
| traceTypes | `Array` |
| blockNumber | `String` |
{% endtab %}

{% tab title="Response" %}
### Return type

`JavaScript Object`
{% endtab %}
{% endtabs %}

## trace.rawTransaction\(txData, traceTypes\)

Traces a call to eth\_sendRawTransaction without making the call, returning the traces

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| txData | `String` |
| traceTypes | `Array` |
{% endtab %}

{% tab title="Response" %}
### Return type

`JavaScript Object`
{% endtab %}
{% endtabs %}

## trace.transaction\(txHash\)

Returns all traces of given transaction

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| txHash | `String` |
{% endtab %}

{% tab title="Response" %}
### Return type

`JavaScript Object`
{% endtab %}
{% endtabs %}

