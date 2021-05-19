# TxPool module

## txpool.content

Returns tx pool content.

| Invocation |
| :--- |
| `txpool.content` |

| This method doesn't have parameters. |
| :--- |


| 返回值类型 | 描述 |
| :--- | :--- |
| `TxPoolContent object` |  |

{% tabs %}
{% tab title="Example request of txpool.content" %}
```yaml
txpool.content
```
{% endtab %}

{% tab title="Objects in txpool\_content" %}
`TxPoolContent`

| 字段名称 | Type |
| :--- | :--- |
| Pending | `Array` |
| Queued | `Array` |
{% endtab %}
{% endtabs %}

[参见 JSON RPC txpool\_content](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/txpool#txpool_content)

## txpool.inspect

Returns a detailed info on tx pool transactions.

| Invocation |
| :--- |
| `txpool.inspect` |

| This method doesn't have parameters. |
| :--- |


| 返回值类型 | 描述 |
| :--- | :--- |
| `TxPoolInspection object` |  |

{% tabs %}
{% tab title="Example request of txpool.inspect" %}
```yaml
txpool.inspect
```
{% endtab %}

{% tab title="Objects in txpool\_inspect" %}
`TxPoolInspection`

| 字段名称 | Type |
| :--- | :--- |
| Pending | `Array` |
| Queued | `Array` |
{% endtab %}
{% endtabs %}

[参见 JSON RPC txpool\_inspect](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/txpool#txpool_inspect)

## txpool.status

Returns a tx pool status.

| Invocation |
| :--- |
| `txpool.status` |

| This method doesn't have parameters. |
| :--- |


| 返回值类型 | 描述 |
| :--- | :--- |
| `TxPoolStatus object` |  |

{% tabs %}
{% tab title="Example request of txpool.status" %}
```yaml
txpool.status
```
{% endtab %}

{% tab title="Objects in txpool\_status" %}
`TxPoolStatus`

| 字段名称 | Type |
| :--- | :--- |
| Pending | `Quantity` |
| Queued | `Quantity` |
{% endtab %}
{% endtabs %}

[参见 JSON RPC txpool\_status](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/txpool#txpool_status)

