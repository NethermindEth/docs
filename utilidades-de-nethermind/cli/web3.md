# Web3 module

## web3.abi

| Invocación |
| :--- |
| `web3.abi(name)` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| name | `String` |  |

| Tipo de retorno | Descripción |
| :--- | :--- |
| `String` |  |

{% tabs %}
{% tab title="Example request of web3.abi" %}
```yaml
web3.abi(name)
```
{% endtab %}
{% endtabs %}

## web3.clientVersion

Retorna la versión actual del cliente.

| Invocación |
| :--- |
| `web3.clientVersion` |

| este método no tiene parametros |
| :--- |


| Tipo de retorno | Descripción |
| :--- | :--- |
| `String` |  |

{% tabs %}
{% tab title="Example request of web3.clientVersion" %}
```yaml
web3.clientVersion
```
{% endtab %}
{% endtabs %}

[See also JSON RPC web3\_clientVersion](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/web3#web3_clientversion)

## web3.sha3

Retorna el Keccak de los datos proporcionados.

| Invocación |
| :--- |
| `web3.sha3(data)` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| data | `Data` |  |

| Tipo de retorno | Descripción |
| :--- | :--- |
| `Hash` |  |

{% tabs %}
{% tab title="Example request of web3.sha3" %}
```yaml
web3.sha3(data)
```
{% endtab %}
{% endtabs %}

[See also JSON RPC web3\_sha3](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/web3#web3_sha3)

## web3.toDecimal

| Invocación |
| :--- |
| `web3.toDecimal(hex)` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| hex | `String` |  |

| Tipo de retorno | Descripción |
| :--- | :--- |
| `JavaScript Object` |  |

{% tabs %}
{% tab title="Example request of web3.toDecimal" %}
```yaml
web3.toDecimal(hex)
```
{% endtab %}
{% endtabs %}

