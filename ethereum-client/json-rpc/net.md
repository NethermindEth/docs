# Net module

## net\_listening

| Invocación |
| :--- |
| `{"method":"net_listening","params":[]}` |

| este método no tiene parametros  |
| :--- |


| Tipo de retorno | Descripción |
| :--- | :--- |
| `Boolean` |  |

{% tabs %}
{% tab title="Example request of net\_listening" %}
```text
curl --data '{"method":"net_listening","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

## net\_localAddress

| Invocación |
| :--- |
| `{"method":"net_localAddress","params":[]}` |

| este método no tiene parametros  |
| :--- |


| Tipo de retorno | Descripción |
| :--- | :--- |
| `Address` |  |

{% tabs %}
{% tab title="Example request of net\_localAddress" %}
```text
curl --data '{"method":"net_localAddress","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

## net\_localEnode

| Invocación |
| :--- |
| `{"method":"net_localEnode","params":[]}` |

| este método no tiene parametros  |
| :--- |


| Tipo de retorno | Descripción |
| :--- | :--- |
| `String` |  |

{% tabs %}
{% tab title="Example request of net\_localEnode" %}
```text
curl --data '{"method":"net_localEnode","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[ingrese a CLI net.localEnode](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/net#net-localenode)

## net\_peerCount

| Invocación |
| :--- |
| `{"method":"net_peerCount","params":[]}` |

| este método no tiene parametros  |
| :--- |


| Tipo de retorno | Descripción |
| :--- | :--- |
| `Quantity` |  |

{% tabs %}
{% tab title="Example request of net\_peerCount" %}
```text
curl --data '{"method":"net_peerCount","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[ingrese a CLI net.peerCount](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/net#net-peercount)

## net\_version

| Invocación |
| :--- |
| `{"method":"net_version","params":[]}` |

| este método no tiene parametros  |
| :--- |


| Tipo de retorno | Descripción |
| :--- | :--- |
| `String` |  |

{% tabs %}
{% tab title="Example request of net\_version" %}
```text
curl --data '{"method":"net_version","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[ingrese a CLI net.version](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/net#net-version)

