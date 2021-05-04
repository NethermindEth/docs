# web3

## web3_clientVersion

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
{% tab title="Example request of web3_clientVersion" %}
```
curl --data '{"method":"web3_clientVersion","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[See also CLI web3.clientVersion](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/web3#web3-clientversion)
## web3_sha3

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
{% tab title="Example request of web3_sha3" %}
```
curl --data '{"method":"web3_sha3","params":[data],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[See also CLI web3.sha3](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/web3#web3-sha3)
