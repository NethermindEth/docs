# Admin

admin\_addPeer\(enode, addToStaticNodes\)

Adds given node to the static nodes

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| address | `string` |

#### **Returns**

`String` - The enode just added to the static nodes

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash
curl -X POST --data '{"jsonrpc":"2.0","method":"admin_addPeer","params":["enode://92c18bfbd45c9c7a8d46d5a766d7da4b6c1fac4f980cd11172738975e10cb84a4a98884affd240f4c40d98f371a7b2b8bd0e91c59c7beee20d20e4735a2af6e1@127.0.0.1:30001", true],"id":1}' localhost:8545
```
{% endtab %}

{% tab title="Response" %}
```bash

```
{% endtab %}
{% endtabs %}

### admin\_dataDir\(\)

None

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash
curl -X POST --data '{"jsonrpc":"2.0","method":"admin_dataDir","params":[],"id":1}' localhost:8545
```
{% endtab %}

{% tab title="Response" %}
```bash

```
{% endtab %}
{% endtabs %}

### admin\_removePeer\(enode, removeFromStaticNodes\)

Removes given node from the static nodes

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| enode | `string` |
| removeFromStaticNodes | `boolean` |

#### **Returns**

`String` - The enode just removed from the static nodes

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash
curl -X POST --data '{"jsonrpc":"2.0","method":"admin_removePeer","params":["enode://92c18bfbd45c9c7a8d46d5a766d7da4b6c1fac4f980cd11172738975e10cb84a4a98884affd240f4c40d98f371a7b2b8bd0e91c59c7beee20d20e4735a2af6e1@127.0.0.1:30001", true],"id":1}' localhost:8545
```
{% endtab %}

{% tab title="Response" %}
```bash

```
{% endtab %}
{% endtabs %}

### admin\_setSolc\(\)

None

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash
curl -X POST --data '{"jsonrpc":"2.0","method":"admin_setSolc","params":[],"id":1}' localhost:8545
```
{% endtab %}

{% tab title="Response" %}
```bash

```
{% endtab %}
{% endtabs %}

