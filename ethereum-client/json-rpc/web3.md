# Web3 module

## web3\_clientVersion

返回当前客户端版本。

| Invocation |
| :--- |
| `{"method":"web3_clientVersion","params":[]}` |

| This method doesn't have parameters. |
| :--- |


| 返回值类型 | 描述 |
| :--- | :--- |
| `String` |  |

{% tabs %}
{% tab title="Example request of web3\_clientVersion" %}
```text
curl --data '{"method":"web3_clientVersion","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[参见 CLI web3.clientVersion](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/web3#web3-clientversion)

## web3\_sha3

返回指定数据的 Keccak。

| Invocation |
| :--- |
| `{"method":"web3_sha3","params":[data]}` |

| 参数 | Type | 描述 |
| :--- | :--- | :--- |
| data | `Data` |  |

| 返回值类型 | 描述 |
| :--- | :--- |
| `Hash` |  |

{% tabs %}
{% tab title="Example request of web3\_sha3" %}
```text
curl --data '{"method":"web3_sha3","params":[data],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[参见 CLI web3.sha3](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/web3#web3-sha3)

