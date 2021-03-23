# TxPool module

## txpool\_content

| Invocation |
| :--- |
| `{"method":"txpool_content","params":[]}` |

| This method doesn't have parameters. |
| :--- |


| Returned type | Description |
| :--- | :--- |
| `TxPoolContent object` |  |

{% tabs %}
{% tab title="Example request of txpool\_content" %}
```text
curl --data '{"method":"txpool_content","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in txpool\_content" %}
`TxPoolContent`

| Field name | Type |
| :--- | :--- |
| Pending | `Array` |
| Queued | `Array` |
{% endtab %}
{% endtabs %}

[See also CLI txpool.content](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/txpool#txpool-content)

## txpool\_inspect

| Invocation |
| :--- |
| `{"method":"txpool_inspect","params":[]}` |

| This method doesn't have parameters. |
| :--- |


| Returned type | Description |
| :--- | :--- |
| `TxPoolInspection object` |  |

{% tabs %}
{% tab title="Example request of txpool\_inspect" %}
```text
curl --data '{"method":"txpool_inspect","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in txpool\_inspect" %}
`TxPoolInspection`

| Field name | Type |
| :--- | :--- |
| Pending | `Array` |
| Queued | `Array` |
{% endtab %}
{% endtabs %}

[See also CLI txpool.inspect](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/txpool#txpool-inspect)

## txpool\_status

| Invocation |
| :--- |
| `{"method":"txpool_status","params":[]}` |

| This method doesn't have parameters. |
| :--- |


| Returned type | Description |
| :--- | :--- |
| `TxPoolStatus object` |  |

{% tabs %}
{% tab title="Example request of txpool\_status" %}
```text
curl --data '{"method":"txpool_status","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in txpool\_status" %}
`TxPoolStatus`

| Field name | Type |
| :--- | :--- |
| Pending | `Quantity` |
| Queued | `Quantity` |
{% endtab %}
{% endtabs %}

[See also CLI txpool.status](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/txpool#txpool-status)

