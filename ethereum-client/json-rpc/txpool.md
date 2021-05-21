# TxPool module

## txpool\_content

Returns tx pool content.

| Invocación |
| :--- |
| `{"method":"txpool_content","params":[]}` |

| este método no tiene parametros  |
| :--- |


| Tipo de retorno | Descripción |
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

| Nombre de los campos | Tipo |
| :--- | :--- |
| Pending | `Array` |
| Queued | `Array` |
{% endtab %}
{% endtabs %}

[ingrese a CLI txpool.content](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/txpool#txpool-content)

## txpool\_inspect

Returns a detailed info on tx pool transactions.

| Invocación |
| :--- |
| `{"method":"txpool_inspect","params":[]}` |

| este método no tiene parametros  |
| :--- |


| Tipo de retorno | Descripción |
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

| Nombre de los campos | Tipo |
| :--- | :--- |
| Pending | `Array` |
| Queued | `Array` |
{% endtab %}
{% endtabs %}

[See also CLI txpool.inspect](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/txpool#txpool-inspect)

## txpool\_status

Returns a tx pool status.

| Invocación |
| :--- |
| `{"method":"txpool_status","params":[]}` |

| este método no tiene parametros  |
| :--- |


| Tipo de retorno | Descripción |
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

| Nombre de los campos | Tipo |
| :--- | :--- |
| Pending | `Quantity` |
| Queued | `Quantity` |
{% endtab %}
{% endtabs %}

[See also CLI txpool.status](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/txpool#txpool-status)

