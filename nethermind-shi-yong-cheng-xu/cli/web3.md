# Web3 module

## web3.abi

| Invocation |
| :--- |
| `web3.abi(name)` |

| 参数 | Type | 描述 |
| :--- | :--- | :--- |
| name | `String` |  |

| 返回值类型 | 描述 |
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

返回当前客户端版本。

| Invocation |
| :--- |
| `web3.clientVersion` |

| This method doesn't have parameters. |
| :--- |


| 返回值类型 | 描述 |
| :--- | :--- |
| `String` |  |

{% tabs %}
{% tab title="Example request of web3.clientVersion" %}
```yaml
web3.clientVersion
```
{% endtab %}
{% endtabs %}

[参见 JSON RPC web3\_clientVersion](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/web3#web3_clientversion)

## web3.sha3

返回指定数据的 Keccak。

| Invocation |
| :--- |
| `web3.sha3(data)` |

| 参数 | Type | 描述 |
| :--- | :--- | :--- |
| data | `Data` |  |

| 返回值类型 | 描述 |
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

| Invocation |
| :--- |
| `web3.toDecimal(hex)` |

| 参数 | Type | 描述 |
| :--- | :--- | :--- |
| hex | `String` |  |

| 返回值类型 | 描述 |
| :--- | :--- |
| `JavaScript Object` |  |

{% tabs %}
{% tab title="Example request of web3.toDecimal" %}
```yaml
web3.toDecimal(hex)
```
{% endtab %}
{% endtabs %}

