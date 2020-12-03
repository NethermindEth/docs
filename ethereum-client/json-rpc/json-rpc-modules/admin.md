# Admin

## admin\_addPeer

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| enode | `String` |
| addToStaticNodes | `Boolean` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`String`
{% endtab %}
{% endtabs %}

## admin\_removePeer

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| enode | `String` |
| removeFromStaticNodes | `Boolean` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`String`
{% endtab %}
{% endtabs %}

## admin\_peers

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| includeDetails | `Boolean` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`PeerInfo object`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`PeerInfo`

| 字段名称 | 类型 |
| :--- | :--- |
| ClientId | `String` |
| Host | `String` |
| Port | `Quantity` |
| Address | `String` |
| IsBootnode | `Boolean` |
| IsTrusted | `Boolean` |
| IsStatic | `Boolean` |
| Enode | `String` |
| ClientType | `String` |
| EthDetails | `String` |
| LastSignal | `String` |
{% endtab %}
{% endtabs %}

## admin\_nodeInfo

该节点的相关信息

{% tabs %}
{% tab title="Request" %}
### **参数**

_无_
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`NodeInfo object`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`NodeInfo`

| 字段名称 | 类型 |
| :--- | :--- |
| Enode | `String` |
| Id | `String` |
| Ip | `String` |
| ListenAddress | `String` |
| Name | `String` |
| Ports | `PortsInfo object` |
| Protocols | `Dictionary`2 object\` |

`PortsInfo`

| 字段名称 | 类型 |
| :--- | :--- |
| Discovery | `Quantity` |
| Listener | `Quantity` |
{% endtab %}
{% endtabs %}

