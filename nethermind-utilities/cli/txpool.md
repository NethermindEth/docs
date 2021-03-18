# txpool



## txpool.content

| Invocation |
| :--- |
| `txpool.content` |

| This method doesn't have parameters. |
| :--- |

| Returned type | Description |
| :--- | :--- |
| `TxPoolContent object` |  |

{% tabs %}
{% tab title="Example request of txpool.content" %}
```yaml
txpool.content
```
{% endtab %}

{% tab title="Objects in txpool_content" %}

`TxPoolContent`

| Field name | Type |
| :--- | :--- |
| Pending | `Array` |
| Queued | `Array` |
{% endtab %}
{% endtabs %}

[See also JSON RPC txpool_content](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/txpool#txpool_content)


## txpool.inspect

| Invocation |
| :--- |
| `txpool.inspect` |

| This method doesn't have parameters. |
| :--- |

| Returned type | Description |
| :--- | :--- |
| `TxPoolInspection object` |  |

{% tabs %}
{% tab title="Example request of txpool.inspect" %}
```yaml
txpool.inspect
```
{% endtab %}

{% tab title="Objects in txpool_inspect" %}

`TxPoolInspection`

| Field name | Type |
| :--- | :--- |
| Pending | `Array` |
| Queued | `Array` |
{% endtab %}
{% endtabs %}

[See also JSON RPC txpool_inspect](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/txpool#txpool_inspect)


## txpool.status

| Invocation |
| :--- |
| `txpool.status` |

| This method doesn't have parameters. |
| :--- |

| Returned type | Description |
| :--- | :--- |
| `TxPoolStatus object` |  |

{% tabs %}
{% tab title="Example request of txpool.status" %}
```yaml
txpool.status
```
{% endtab %}

{% tab title="Objects in txpool_status" %}

`TxPoolStatus`

| Field name | Type |
| :--- | :--- |
| Pending | `Quantity` |
| Queued | `Quantity` |
{% endtab %}
{% endtabs %}

[See also JSON RPC txpool_status](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/txpool#txpool_status)
