# TxPool module

## txpool.content

Returns tx pool content.

| Invocación       |
| ---------------- |
| `txpool.content` |

| este método no tiene parametros |
| ------------------------------- |

| Tipo de retorno        | Descripción |
| ---------------------- | ----------- |
| `TxPoolContent object` |             |

{% tabs %}
{% tab title="Example request of txpool.content" %}
```yaml
txpool.content
```
{% endtab %}

{% tab title="Objects in txpool_content" %}
`TxPoolContent`

| Nombre de los campos | Tipo    |
| -------------------- | ------- |
| Pending              | `Array` |
| Queued               | `Array` |
{% endtab %}
{% endtabs %}

[See also JSON RPC txpool\_content](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/txpool#txpool\_content)

## txpool.inspect

Returns a detailed info on tx pool transactions.

| Invocación       |
| ---------------- |
| `txpool.inspect` |

| este método no tiene parametros |
| ------------------------------- |

| Tipo de retorno           | Descripción |
| ------------------------- | ----------- |
| `TxPoolInspection object` |             |

{% tabs %}
{% tab title="Example request of txpool.inspect" %}
```yaml
txpool.inspect
```
{% endtab %}

{% tab title="Objects in txpool_inspect" %}
`TxPoolInspection`

| Nombre de los campos | Tipo    |
| -------------------- | ------- |
| Pending              | `Array` |
| Queued               | `Array` |
{% endtab %}
{% endtabs %}

[See also JSON RPC txpool\_inspect](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/txpool#txpool\_inspect)

## txpool.status

Returns a tx pool status.

| Invocación      |
| --------------- |
| `txpool.status` |

| este método no tiene parametros |
| ------------------------------- |

| Tipo de retorno       | Descripción |
| --------------------- | ----------- |
| `TxPoolStatus object` |             |

{% tabs %}
{% tab title="Example request of txpool.status" %}
```yaml
txpool.status
```
{% endtab %}

{% tab title="Objects in txpool_status" %}
`TxPoolStatus`

| Nombre de los campos | Tipo       |
| -------------------- | ---------- |
| Pending              | `Quantity` |
| Queued               | `Quantity` |
{% endtab %}
{% endtabs %}

[See also JSON RPC txpool\_status](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/txpool#txpool\_status)
