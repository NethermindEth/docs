# Web3 module

## web3.abi

| Invocation |
| :--- |
| `web3.abi(name)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| name | `String` |  |

| Returned type | Description |
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

Returns the current client version.

| Invocation |
| :--- |
| `web3.clientVersion` |

| This method doesn't have parameters. |
| :--- |


| Returned type | Description |
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

Returns Keccak of the given data.

| Invocation |
| :--- |
| `web3.sha3(data)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| data | `Data` |  |

| Returned type | Description |
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

| Parameter | Type | Description |
| :--- | :--- | :--- |
| hex | `String` |  |

| Returned type | Description |
| :--- | :--- |
| `JavaScript Object` |  |

{% tabs %}
{% tab title="Example request of web3.toDecimal" %}
```yaml
web3.toDecimal(hex)
```
{% endtab %}
{% endtabs %}

