# Eth module

## eth.blockNumber

{% tabs %}
{% tab title="Request" %}
### **Parameters**

_None_
{% endtab %}

{% tab title="Response" %}
### Return type

`Quantity`
{% endtab %}
{% endtabs %}

## eth.getProof\(address, storageKeys, blockParameter\)

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| address | `String` |
| storageKeys | `Array` |
| blockParameter | `String` |
{% endtab %}

{% tab title="Response" %}
### Return type

`JavaScript Object`
{% endtab %}
{% endtabs %}

## eth.call\(tx, blockParameter\)

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| tx | `Object` |
| blockParameter | `String` |
{% endtab %}

{% tab title="Response" %}
### Return type

`String`
{% endtab %}
{% endtabs %}

## eth.chainId

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

## eth.estimateGas\(json, blockParameter\)

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| json | `Object` |
| blockParameter | `String` |
{% endtab %}

{% tab title="Response" %}
### Return type

`String`
{% endtab %}
{% endtabs %}

## eth.getBalance\(address, blockParameter\)

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| address | `String` |
| blockParameter | `String` |
{% endtab %}

{% tab title="Response" %}
### Return type

`Quantity`
{% endtab %}
{% endtabs %}

## eth.getBlockByHash\(hash, returnFullTransactionObjects\)

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| hash | `String` |
| returnFullTransactionObjects | `Boolean` |
{% endtab %}

{% tab title="Response" %}
### Return type

`JavaScript Object`
{% endtab %}
{% endtabs %}

## eth.getBlockByNumber\(blockParameter, returnFullTransactionObjects\)

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockParameter | `String` |
| returnFullTransactionObjects | `Boolean` |
{% endtab %}

{% tab title="Response" %}
### Return type

`JavaScript Object`
{% endtab %}
{% endtabs %}

## eth.getBlockTransactionCountByHash\(hash\)

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| hash | `String` |
{% endtab %}

{% tab title="Response" %}
### Return type

`Quantity`
{% endtab %}
{% endtabs %}

## eth.getBlockTransactionCountByNumber\(blockParameter\)

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockParameter | `String` |
{% endtab %}

{% tab title="Response" %}
### Return type

`Quantity`
{% endtab %}
{% endtabs %}

## eth.getCode\(address, blockParameter\)

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| address | `String` |
| blockParameter | `String` |
{% endtab %}

{% tab title="Response" %}
### Return type

`String`
{% endtab %}
{% endtabs %}

## eth.getFilterChanges\(filterId\)

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| filterId | `Quantity` |
{% endtab %}

{% tab title="Response" %}
### Return type

`JavaScript Object`
{% endtab %}
{% endtabs %}

## eth.getLogs\(filter\)

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| filter | `Object` |
{% endtab %}

{% tab title="Response" %}
### Return type

`JavaScript Object`
{% endtab %}
{% endtabs %}

## eth.getStorageAt\(address, positionIndex, blockParameter\)

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| address | `String` |
| positionIndex | `String` |
| blockParameter | `String` |
{% endtab %}

{% tab title="Response" %}
### Return type

`String`
{% endtab %}
{% endtabs %}

## eth.getTransactionByBlockNumberAndIndex\(blockParameter, index\)

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockParameter | `String` |
| index | `String` |
{% endtab %}

{% tab title="Response" %}
### Return type

`JavaScript Object`
{% endtab %}
{% endtabs %}

## eth.getTransactionByHash\(txHash\)

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

## eth.getTransactionCount\(address, blockParameter\)

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| address | `String` |
| blockParameter | `String` |
{% endtab %}

{% tab title="Response" %}
### Return type

`String`
{% endtab %}
{% endtabs %}

## eth.getTransactionReceipt\(txHash\)

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

## eth.getUncleByBlockHashAndIndex\(hash, index\)

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| hash | `String` |
| index | `Quantity` |
{% endtab %}

{% tab title="Response" %}
### Return type

`JavaScript Object`
{% endtab %}
{% endtabs %}

## eth.getUncleByBlockNumberAndIndex\(blockParameter, index\)

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockParameter | `String` |
| index | `Quantity` |
{% endtab %}

{% tab title="Response" %}
### Return type

`JavaScript Object`
{% endtab %}
{% endtabs %}

## eth.getUncleCountByBlockNumber\(blockParameter\)

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockParameter | `String` |
{% endtab %}

{% tab title="Response" %}
### Return type

`Quantity`
{% endtab %}
{% endtabs %}

## eth.newPendingTransactionFilter

{% tabs %}
{% tab title="Request" %}
### **Parameters**

_None_
{% endtab %}

{% tab title="Response" %}
### Return type

`Quantity`
{% endtab %}
{% endtabs %}

## eth.pendingTransactions

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

## eth.protocolVersion

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

## eth.sendEth\(from, to, amountInEth\)

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| from | `String` |
| to | `String` |
| amountInEth | `Quantity` |
{% endtab %}

{% tab title="Response" %}
### Return type

`String`
{% endtab %}
{% endtabs %}

## eth.sendRawTransaction\(txRlp\)

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| txRlp | `String` |
{% endtab %}

{% tab title="Response" %}
### Return type

`String`
{% endtab %}
{% endtabs %}

## eth.sendTransaction\(tx\)

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| tx | `Object` |
{% endtab %}

{% tab title="Response" %}
### Return type

`String`
{% endtab %}
{% endtabs %}

## eth.sendWei\(from, to, amountInWei\)

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| from | `String` |
| to | `String` |
| amountInWei | `Quantity` |
{% endtab %}

{% tab title="Response" %}
### Return type

`String`
{% endtab %}
{% endtabs %}

## eth.syncing

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

