# txpool

## txpool_content

Returns tx pool content. 

| Invocation |
| :--- |
| `{"method":"txpool_content","params":[]}` |

| This method doesn't have parameters. |
| :--- |

| Returned type | Description |
| :--- | :--- |
| `TxPoolContent object` |  |

{% tabs %}
{% tab title="Example request of txpool_content" %}
```
curl --data '{"method":"txpool_content","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
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

[See also CLI txpool.content](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/txpool#txpool-content)
## txpool_inspect

Returns a detailed info on tx pool transactions. 

| Invocation |
| :--- |
| `{"method":"txpool_inspect","params":[]}` |

| This method doesn't have parameters. |
| :--- |

| Returned type | Description |
| :--- | :--- |
| `TxPoolInspection object` |  |

{% tabs %}
{% tab title="Example request of txpool_inspect" %}
```
curl --data '{"method":"txpool_inspect","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
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

[See also CLI txpool.inspect](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/txpool#txpool-inspect)
## txpool_status

Returns a tx pool status. 

| Invocation |
| :--- |
| `{"method":"txpool_status","params":[]}` |

| This method doesn't have parameters. |
| :--- |

| Returned type | Description |
| :--- | :--- |
| `TxPoolStatus object` |  |

{% tabs %}
{% tab title="Example request of txpool_status" %}
```
curl --data '{"method":"txpool_status","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
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

[See also CLI txpool.status](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/txpool#txpool-status)
