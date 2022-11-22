# TxPool module

## txpool\_content

Returns tx pool content.

| Invocation                                |
| ----------------------------------------- |
| `{"method":"txpool_content","params":[]}` |

| This method doesn't have parameters. |
| ------------------------------------ |

| 返回值类型                  | 描述 |
| ---------------------- | -- |
| `TxPoolContent object` |    |

{% tabs %}
{% tab title="Example request of txpool_content" %}
```
curl --data '{"method":"txpool_content","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in txpool_content" %}
`TxPoolContent`

| 字段名称    | Type    |
| ------- | ------- |
| Pending | `Array` |
| Queued  | `Array` |
{% endtab %}
{% endtabs %}

[参见 CLI txpool.content](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/txpool#txpool-content)

## txpool\_inspect

Returns a detailed info on tx pool transactions.

| Invocation                                |
| ----------------------------------------- |
| `{"method":"txpool_inspect","params":[]}` |

| This method doesn't have parameters. |
| ------------------------------------ |

| 返回值类型                     | 描述 |
| ------------------------- | -- |
| `TxPoolInspection object` |    |

{% tabs %}
{% tab title="Example request of txpool_inspect" %}
```
curl --data '{"method":"txpool_inspect","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in txpool_inspect" %}
`TxPoolInspection`

| 字段名称    | Type    |
| ------- | ------- |
| Pending | `Array` |
| Queued  | `Array` |
{% endtab %}
{% endtabs %}

[参见 CLI txpool.inspect](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/txpool#txpool-inspect)

## txpool\_status

Returns a tx pool status.

| Invocation                               |
| ---------------------------------------- |
| `{"method":"txpool_status","params":[]}` |

| This method doesn't have parameters. |
| ------------------------------------ |

| 返回值类型                 | 描述 |
| --------------------- | -- |
| `TxPoolStatus object` |    |

{% tabs %}
{% tab title="Example request of txpool_status" %}
```
curl --data '{"method":"txpool_status","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in txpool_status" %}
`TxPoolStatus`

| 字段名称    | Type       |
| ------- | ---------- |
| Pending | `Quantity` |
| Queued  | `Quantity` |
{% endtab %}
{% endtabs %}

[参见 CLI txpool.status](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/txpool#txpool-status)
