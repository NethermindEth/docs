# Clique

## clique\_getSnapshot

检索指定区块的所有 clique 状态的快照。

{% tabs %}
{% tab title="Request" %}
### **参数**

_无_
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`Snapshot object`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`Snapshot`

| 字段名称 | 类型 |
| :--- | :--- |
| Number | `Quantity` |
| Hash | `Hash` |
| Signers | `Array` |
| SignerLimit | `Quantity` |
{% endtab %}
{% endtabs %}

## clique\_getSnapshotAtHash

检索指定区块的状态快照。

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| hash | `Hash` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`Snapshot object`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`Snapshot`

| 字段名称 | 类型 |
| :--- | :--- |
| Number | `Quantity` |
| Hash | `Hash` |
| Signers | `Array` |
| SignerLimit | `Quantity` |
{% endtab %}
{% endtabs %}

## clique\_getSigners

检索授权签名者列表。

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

## clique\_getSignersAtHash

根据哈希值检索指定区块的授权签名者列表。

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| hash | `Hash` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`Address`
{% endtab %}
{% endtabs %}

## clique\_getSignersAtNumber

根据区块编号检索指定区块的授权签名者列表。

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| number | `Quantity` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`Address`
{% endtab %}
{% endtabs %}

## clique\_getSignersAnnotated

{% tabs %}
{% tab title="Request" %}
### **参数**

_无_
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`String`
{% endtab %}
{% endtabs %}

## clique\_getSignersAtHashAnnotated

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| hash | `Hash` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`String`
{% endtab %}
{% endtabs %}

## clique\_propose

增加一个新的签名者授权提案。如果 `vote` 参数被设置为 true，则表示该签名者投票赞成指定地址加入授权签名者列表。如果 `vote` 参数被设置为 false，则表示该签名者投了反对票。

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| signer | `Address` |
| vote | `Boolean` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`Boolean`
{% endtab %}
{% endtabs %}

## clique\_discard

删除正在运行的提案。签名者不再继续投票（赞成或反对）指定地址。

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| signer | `Address` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`Boolean`
{% endtab %}
{% endtabs %}

## clique\_produceBlock

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| parentHash | `Hash` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`Boolean`
{% endtab %}
{% endtabs %}

