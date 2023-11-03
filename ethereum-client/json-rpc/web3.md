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
{% tab title="Example response of web3_clientVersion" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": Nethermind/v1.10.75-0-310037468-20210717/X64-Linux/5.0.7,
  "id": 1
}
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
| `Hash256 object` |  |

{% tabs %}
{% tab title="Example request of web3_sha3" %}
```
curl --data '{"method":"web3_sha3","params":[["0x47767638636211111a8d7341e5e972fc677286384f802f8ef42a5ec5f03bbfa254cb01abc"]],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% tab title="Example response of web3_sha3" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": 0xed3a98886604dcd55a159d55d35f7c14fa2f2aab7fbccbfa5511d8dadeea9442,
  "id": 1
}
```
{% endtab %}

{% tab title="Objects in web3_sha3" %}

`Hash256`

| Field name | Type |
| :--- | :--- |
| ValueHash256 | `ValueHash256& object` |
| Bytes | `Array` |

`ValueHash256&`

| Field name | Type |
| :--- | :--- |
{% endtab %}
{% endtabs %}

[See also CLI web3.sha3](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/web3#web3-sha3)
