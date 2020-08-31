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
{% api-method-form-data-parameters %}
{% api-method-parameter name="TestParameter" type="object" required=false %}
Object of some type 
{% endapi-method-parameter %}

{% api-method-parameter name="BlockParameter" type="string" required=false %}
TAG OR QUANTITY
{% endapi-method-parameter %}
{% endapi-method-form-data-parameters %}
{% endapi-method-request %}


{% api-method-test %}
{% api-method-form-data-parameters %}
{% api-method-parameter name="TestParameter" type="object" required=false %}
Object of some type 
{% endapi-method-parameter %}

{% api-method-parameter name="BlockParameter" type="string" required=false %}
TAG OR QUANTITY
{% endapi-method-parameter %}
{% endapi-method-form-data-parameters %}
{% endapi-method-test %} 

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
When request is OK 
{% endapi-method-response-example-description %}

```
{"jsonrpc":"2.0"}
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

