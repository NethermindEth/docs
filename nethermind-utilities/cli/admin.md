# Admin module

## admin.addPeer\(enode, addToStaticNodes\)

Adds given node to the static nodes

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

### **Example**

{% tabs %}
{% tab title="Request" %}
```bash
admin.addPeer("enode://92c18bfbd45c9c7a8d46d5a766d7da4b6c1fac4f980cd11172738975e10cb84a4a98884affd240f4c40d98f371a7b2b8bd0e91c59c7beee20d20e4735a2af6e1@127.0.0.1:30001", true)
```
{% endtab %}

{% tab title="Response" %}
```bash
Request complete in 58129.371μs
"enode://92c18bfbd45c9c7a8d46d5a766d7da4b6c1fac4f980cd11172738975e10cb84a4a98884affd240f4c40d98f371a7b2b8bd0e91c59c7beee20d20e4735a2af6e1@127.0.0.1:30001"
```
{% endtab %}
{% endtabs %}

## admin.nodeInfo

{% tabs %}
{% tab title="Request" %}
### **Parameters**

_None_
{% endtab %}

{% tab title="Response" %}
### Return type

`Object`
{% endtab %}
{% endtabs %}

## admin.peers\(includeDetails\)

Displays a list of connected peers

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| includeDetails | `Boolean` |
{% endtab %}

{% tab title="Response" %}
### Return type

`Array`
{% endtab %}
{% endtabs %}

### **Example**

{% tabs %}
{% tab title="Request" %}
```bash
admin.peers
```
{% endtab %}

{% tab title="Response" %}
```bash
Request complete in 627464.281μs
[
  {
    "clientId": "Geth/v1.9.15-stable-0f77f34b/linux-amd64/go1.14.4",
    "host": "::ffff:47.218.109.107",
    "port": "34182",
    "address": "[::ffff:47.218.109.107]:34182",
    "isBootnode": false,
    "isTrusted": false,
    "isStatic": false,
    "enode": "enode://4df44eba60b4d2b9edadad10a4c4a9fb837e910932eb9b6aa5a90b3a99472af6e362ff2be5f45b5eca248521d87b42a461d119633e4856e291d304f93762821b@47.218.109.107:34182"
  }
]
```
{% endtab %}
{% endtabs %}

## admin.removePeer\(enode, removeFromStaticNodes\)

Removes given node from the static nodes

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

### **Example**

{% tabs %}
{% tab title="Request" %}
```bash
admin.removePeer("enode://92c18bfbd45c9c7a8d46d5a766d7da4b6c1fac4f980cd11172738975e10cb84a4a98884affd240f4c40d98f371a7b2b8bd0e91c59c7beee20d20e4735a2af6e1@127.0.0.1:30001", true)
```
{% endtab %}

{% tab title="Response" %}
```bash
Request complete in 361680.159μs
"enode://92c18bfbd45c9c7a8d46d5a766d7da4b6c1fac4f980cd11172738975e10cb84a4a98884affd240f4c40d98f371a7b2b8bd0e91c59c7beee20d20e4735a2af6e1@127.0.0.1:30001"
```
{% endtab %}
{% endtabs %}

{% page-ref page="../../ethereum-client/json-rpc/admin.md" %}









