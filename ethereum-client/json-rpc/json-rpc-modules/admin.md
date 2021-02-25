# Admin

## admin_addPeer

 

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| enode | `String` |
| addToStaticNodes | `Boolean` |
{% endtab %}

{% tab title="Response" %}
### Return type

`String`
{% endtab %}
{% endtabs %}

## admin_nodeInfo

Relevant information about this node 

{% tabs %}
{% tab title="Request" %}
### **Parameters**

_None_
{% endtab %}

{% tab title="Response" %}
### Return type

`NodeInfo object`
{% endtab %}

{% tab title="Object definitions" %}
### Objects definition

`NodeInfo`

| Fields name | Type |
| :--- | :--- |
| Enode | `String` |
| Id | `String` |
| Ip | `String` |
| ListenAddress | `String` |
| Name | `String` |
| Ports | `PortsInfo object` |
| Protocols | `Array` |

`PortsInfo`

| Fields name | Type |
| :--- | :--- |
| Discovery | `Quantity` |
| Listener | `Quantity` |
{% endtab %}
{% endtabs %}

## admin_peers

 

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| includeDetails | `Boolean` |
{% endtab %}

{% tab title="Response" %}
### Return type

`PeerInfo object`
{% endtab %}

{% tab title="Object definitions" %}
### Objects definition

`PeerInfo`

| Fields name | Type |
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

## admin_removePeer

 

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| enode | `String` |
| removeFromStaticNodes | `Boolean` |
{% endtab %}

{% tab title="Response" %}
### Return type

`String`
{% endtab %}
{% endtabs %}

