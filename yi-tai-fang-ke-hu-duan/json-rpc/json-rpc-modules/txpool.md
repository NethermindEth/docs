# TxPool

## txpool\_status

_无描述_

{% tabs %}
{% tab title="Request" %}
### **参数**

_无_
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`TxPoolStatus object`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`TxPoolStatus`

| 字段名称 | 类型 |
| :--- | :--- |
| Pending | `Quantity` |
| Queued | `Quantity` |
{% endtab %}
{% endtabs %}

## txpool\_content

_无描述_

{% tabs %}
{% tab title="Request" %}
### **参数**

_无_
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`TxPoolContent object`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`TxPoolContent`

| 字段名称 | 类型 |
| :--- | :--- |
| Pending | `IDictionary`2 object\` |
| Queued | `IDictionary`2 object\` |

`IDictionary`2\`

| 字段名称 | 类型 |
| :--- | :--- |
| Item | `Dictionary`2 object\` |
| Keys | `Array` |
| Values | `Array` |

`IDictionary`2\`

| 字段名称 | 类型 |
| :--- | :--- |
| Item | `Dictionary`2 object\` |
| Keys | `Array` |
| Values | `Array` |
{% endtab %}
{% endtabs %}

## txpool\_inspect

_无描述_

{% tabs %}
{% tab title="Request" %}
### **参数**

_无_
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`TxPoolInspection object`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`TxPoolInspection`

| 字段名称 | 类型 |
| :--- | :--- |
| Pending | `IDictionary`2 object\` |
| Queued | `IDictionary`2 object\` |

`IDictionary`2\`

| 字段名称 | 类型 |
| :--- | :--- |
| Item | `Dictionary`2 object\` |
| Keys | `Array` |
| Values | `Array` |

`IDictionary`2\`

| 字段名称 | 类型 |
| :--- | :--- |
| Item | `Dictionary`2 object\` |
| Keys | `Array` |
| Values | `Array` |
{% endtab %}
{% endtabs %}

