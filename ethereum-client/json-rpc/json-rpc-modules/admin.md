#admin

##admin\_addPeer

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| enode | `String` |
| addToStaticNodes | `Boolean` |

{% endtab %}
{% tab title="Response" %}

#### Return type
`String`

{% endtab %}
{% endtabs %}
##admin\_removePeer

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| enode | `String` |
| removeFromStaticNodes | `Boolean` |

{% endtab %}
{% tab title="Response" %}

#### Return type
`String`

{% endtab %}
{% endtabs %}
##admin\_peers

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

_None_

{% endtab %}
{% tab title="Response" %}

#### Return type
`PeerInfo object`

{% endtab %}
{% tab title="Object definitions" %}
#### Objects definition

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

{% endtab %}
{% endtabs %}
##admin\_nodeInfo

Relevant information about this node 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

_None_

{% endtab %}
{% tab title="Response" %}

#### Return type
`NodeInfo object`

{% endtab %}
{% tab title="Object definitions" %}
#### Objects definition

`NodeInfo`
| Fields name | Type |
| :--- | :--- |
| Enode | `String` |
| Id | `String` |
| Ip | `String` |
| ListenAddress | `String` |
| Name | `String` |
| Ports | `PortsInfo object` |
| Protocols | `Dictionary`2 object` |

{% endtab %}
{% endtabs %}
