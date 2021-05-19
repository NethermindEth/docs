# Web3 module

## web3\_clientVersion

Retorna la versión actual del cliente.

| Invocación |
| :--- |
| `{"method":"web3_clientVersion","params":[]}` |

| este método no tiene parametros |
| :--- |


| Tipo de retorno | Descripción |
| :--- | :--- |
| `String` |  |

{% tabs %}
{% tab title="Example request of web3\_clientVersion" %}
```text
curl --data '{"method":"web3_clientVersion","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[ingrese a CLI web3.clientVersion](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/web3#web3-clientversion)

## web3\_sha3

Retorna el Keccak de los datos proporcionados.

| Invocación |
| :--- |
| `{"method":"web3_sha3","params":[data]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| data | `Data` |  |

| Tipo de retorno | Descripción |
| :--- | :--- |
| `Hash` |  |

{% tabs %}
{% tab title="Example request of web3\_sha3" %}
```text
curl --data '{"method":"web3_sha3","params":[data],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[ingrese a CLI web3.sha3](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/web3#web3-sha3)

