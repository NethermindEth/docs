# Net module

## net\_listening

| Invocation                               |
| ---------------------------------------- |
| `{"method":"net_listening","params":[]}` |

| This method doesn't have parameters. |
| ------------------------------------ |

| 返回值类型     | 描述 |
| --------- | -- |
| `Boolean` |    |

{% tabs %}
{% tab title="Example request of net_listening" %}
```
curl --data '{"method":"net_listening","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

## net\_localAddress

| Invocation                                  |
| ------------------------------------------- |
| `{"method":"net_localAddress","params":[]}` |

| This method doesn't have parameters. |
| ------------------------------------ |

| 返回值类型     | 描述 |
| --------- | -- |
| `Address` |    |

{% tabs %}
{% tab title="Example request of net_localAddress" %}
```
curl --data '{"method":"net_localAddress","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

## net\_localEnode

| Invocation                                |
| ----------------------------------------- |
| `{"method":"net_localEnode","params":[]}` |

| This method doesn't have parameters. |
| ------------------------------------ |

| 返回值类型    | 描述 |
| -------- | -- |
| `String` |    |

{% tabs %}
{% tab title="Example request of net_localEnode" %}
```
curl --data '{"method":"net_localEnode","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[参见 CLI net.localEnode](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/net#net-localenode)

## net\_peerCount

| Invocation                               |
| ---------------------------------------- |
| `{"method":"net_peerCount","params":[]}` |

| This method doesn't have parameters. |
| ------------------------------------ |

| 返回值类型      | 描述 |
| ---------- | -- |
| `Quantity` |    |

{% tabs %}
{% tab title="Example request of net_peerCount" %}
```
curl --data '{"method":"net_peerCount","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[参见 CLI net.peerCount](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/net#net-peercount)

## net\_version

| Invocation                             |
| -------------------------------------- |
| `{"method":"net_version","params":[]}` |

| This method doesn't have parameters. |
| ------------------------------------ |

| 返回值类型    | 描述 |
| -------- | -- |
| `String` |    |

{% tabs %}
{% tab title="Example request of net_version" %}
```
curl --data '{"method":"net_version","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[参见 CLI net.version](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/net#net-version)
