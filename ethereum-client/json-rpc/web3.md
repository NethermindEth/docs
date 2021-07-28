# Web3 module

## web3\_clientVersion

Returns the current client version.

| Invocation |
| :--- |
| `{"method":"web3_clientVersion","params":[]}` |

| This method doesn't have parameters. |
| :--- |


| Returned type | Description |
| :--- | :--- |
| `String` |  |

{% tabs %}
{% tab title="Example request of web3\_clientVersion" %}
```text
curl --data '{"method":"web3_clientVersion","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[See also CLI web3.clientVersion](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/web3#web3-clientversion)

## web3\_sha3

Returns Keccak of the given data.

| Invocation |
| :--- |
| `{"method":"web3_sha3","params":[data]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| data | `Data` |  |

| Returned type | Description |
| :--- | :--- |
| `Hash` |  |

{% tabs %}
{% tab title="Example request of web3\_sha3" %}
```text
curl --data '{"method":"web3_sha3","params":[data],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[See also CLI web3.sha3](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/web3#web3-sha3)

