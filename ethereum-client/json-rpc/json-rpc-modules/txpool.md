#txpool

##txpool\_status

_description missing_ 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

_None_
{% endtab %}

{% tab title="Response" %}

#### Return type
`TxPoolStatus object`

{% endtab %}
{% tab title="Object definitions" %}
#### Objects definition

`TxPoolStatus`
| Fields name | Type |
| :--- | :--- |
| Pending | `Quantity` |
| Queued | `Quantity` |

{% endtab %}
{% endtabs %}
##txpool\_content

_description missing_ 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

_None_
{% endtab %}

{% tab title="Response" %}

#### Return type
`TxPoolContent object`

{% endtab %}
{% tab title="Object definitions" %}
#### Objects definition

`TxPoolContent`
| Fields name | Type |
| :--- | :--- |
| Pending | `IDictionary`2 object` |
| Queued | `IDictionary`2 object` |

`IDictionary`2`
| Fields name | Type |
| :--- | :--- |
| Item | `Dictionary`2 object` |
| Keys | `Array` |
| Values | `Array` |

`IDictionary`2`
| Fields name | Type |
| :--- | :--- |
| Item | `Dictionary`2 object` |
| Keys | `Array` |
| Values | `Array` |

{% endtab %}
{% endtabs %}
##txpool\_inspect

_description missing_ 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

_None_
{% endtab %}

{% tab title="Response" %}

#### Return type
`TxPoolInspection object`

{% endtab %}
{% tab title="Object definitions" %}
#### Objects definition

`TxPoolInspection`
| Fields name | Type |
| :--- | :--- |
| Pending | `IDictionary`2 object` |
| Queued | `IDictionary`2 object` |

`IDictionary`2`
| Fields name | Type |
| :--- | :--- |
| Item | `Dictionary`2 object` |
| Keys | `Array` |
| Values | `Array` |

`IDictionary`2`
| Fields name | Type |
| :--- | :--- |
| Item | `Dictionary`2 object` |
| Keys | `Array` |
| Values | `Array` |

{% endtab %}
{% endtabs %}
