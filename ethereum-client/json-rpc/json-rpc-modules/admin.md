# Admin

## admin\_addPeer

{% api-method method="post" host="http://localhost:8545" path="" %}
{% api-method-summary %}
admin\_addPeer
{% endapi-method-summary %}

{% api-method-description %}
Does something
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="param1" type="string" required=true %}
Means something
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-query-parameters %}
{% api-method-parameter name="" type="string" required=false %}
aaa
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}

{% api-method-body-parameters %}
{% api-method-parameter name="aaa" type="string" required=false %}
tests
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=302 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| enode | `String` |
| addToStaticNodes | `Boolean` |

### Return type

`ResultWrapper`1 object\`

### Objects definition

`ResultWrapper`1\`

| Fields name | Type |
| :--- | :--- |
| Data | `String` |
| Result | `Result object` |
| ErrorCode | `Quantity` |

## admin\_removePeer

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| enode | `String` |
| removeFromStaticNodes | `Boolean` |

### Return type

`ResultWrapper`1 object\`

### Objects definition

`ResultWrapper`1\`

| Fields name | Type |
| :--- | :--- |
| Data | `String` |
| Result | `Result object` |
| ErrorCode | `Quantity` |

## admin\_peers

### **Parameters**

_None_

### Return type

`PeerInfo[] object`

### Objects definition

`PeerInfo[]`

| Fields name | Type |
| :--- | :--- |
| Length | `Quantity` |
| LongLength | `Quantity` |
| Rank | `Quantity` |
| SyncRoot | `Object object` |
| IsReadOnly | `Boolean` |
| IsFixedSize | `Boolean` |
| IsSynchronized | `Boolean` |

## admin\_nodeInfo

Relevant information about this node

### **Parameters**

_None_

### Return type

`NodeInfo object`

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
| Protocols | `Dictionary`2 object\` |

