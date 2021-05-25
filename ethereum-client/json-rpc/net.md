# net

## net_listening

 

| Invocation |
| :--- |
| `{"method":"net_listening","params":[]}` |

| This method doesn't have parameters. |
| :--- |

| Returned type | Description |
| :--- | :--- |
| `Boolean` |  |

{% tabs %}
{% tab title="Example request of net_listening" %}
```
curl --data '{"method":"net_listening","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

## net_localAddress

 

| Invocation |
| :--- |
| `{"method":"net_localAddress","params":[]}` |

| This method doesn't have parameters. |
| :--- |

| Returned type | Description |
| :--- | :--- |
| `Address` |  |

{% tabs %}
{% tab title="Example request of net_localAddress" %}
```
curl --data '{"method":"net_localAddress","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

## net_localEnode
| Invocation |
| :--- |
| `{"method":"net_localEnode","params":[]}` |

| This method doesn't have parameters. |
| :--- |

| Returned type | Description |
| :--- | :--- |
| `String` |  |

{% tabs %}
{% tab title="Example request of net_localEnode" %}
```
curl --data '{"method":"net_localEnode","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[See also CLI net.localEnode](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/net#net-localenode)
## net_peerCount
| Invocation |
| :--- |
| `{"method":"net_peerCount","params":[]}` |

| This method doesn't have parameters. |
| :--- |

| Returned type | Description |
| :--- | :--- |
| `Quantity` |  |

{% tabs %}
{% tab title="Example request of net_peerCount" %}
```
curl --data '{"method":"net_peerCount","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[See also CLI net.peerCount](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/net#net-peercount)
## net_version
| Invocation |
| :--- |
| `{"method":"net_version","params":[]}` |

| This method doesn't have parameters. |
| :--- |

| Returned type | Description |
| :--- | :--- |
| `String` |  |

{% tabs %}
{% tab title="Example request of net_version" %}
```
curl --data '{"method":"net_version","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[See also CLI net.version](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/net#net-version)
