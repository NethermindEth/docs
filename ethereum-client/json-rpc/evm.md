# evm

## evm_mine

Triggers block production. 

| Invocación |
| :--- |
| `{"method":"evm_mine","params":[]}` |

| este método no tiene parametros  |
| :--- |

| Tipo de retorno | Descripción |
| :--- | :--- |
| `Boolean` |  |

{% tabs %}
{% tab title="Example request of evm_mine" %}
```
curl --data '{"method":"evm_mine","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

