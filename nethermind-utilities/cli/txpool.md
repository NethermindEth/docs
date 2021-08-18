# txpool



## txpool.content

Returns tx pool content. 


| Invocation |
| :--- |
| `txpool.content` |

| This method doesn't have parameters. |
| :--- |

| Returned type | Description |
| :--- | :--- |
| `TxPoolContent object` |  |

{% tabs %}
{% tab title="Example request of txpool.content" %}
```yaml
txpool.content
```
{% endtab %}
{% tab title="Example response of txpool.content" %}
```yaml
"0x0f990ef7ec160f01af7148b74cc8a86fe46c551e":{"153":{"hash":"0x84f6f2e5d24b9a0c25bd7018adbbf4388b2c07842782f73d5ddc389906d5f2c8","nonce":"0x99","blockHash":null,"blockNumber":null,"transactionIndex":null,"from":"0x0f990ef7ec160f01af7148b74cc8a86fe46c551e","to":"0x1b4e4664de1d57b665b4bf3523cbccf007766de3","value":"0xc8","gasPrice":"0x3b9aca08","gas":"0x1c9c37f","data":"0xaeeb89600000000000000000000000000000000000000000000000000000000000000001","input":"0xaeeb89600000000000000000000000000000000000000000000000000000000000000001","type":"0x0","v":"0x2c","s":"0x20158ce3f4f9c65f8c657c0d91bbfb43632b2951f6192bca8fb3a25c26dd81d5","r":"0x2814d998f2a78dd4f37461485d88158a32ef5dcfa8c57e224b3ea77536df01b1"}}, (...)
```
{% endtab %}

{% tab title="Objects in txpool_content" %}

`TxPoolContent`

| Field name | Type |
| :--- | :--- |
| Pending | `Array` |
| Queued | `Array` |
{% endtab %}
{% endtabs %}

[See also JSON RPC txpool_content](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/txpool#txpool_content)


## txpool.inspect

Returns a detailed info on tx pool transactions. 


| Invocation |
| :--- |
| `txpool.inspect` |

| This method doesn't have parameters. |
| :--- |

| Returned type | Description |
| :--- | :--- |
| `TxPoolInspection object` |  |

{% tabs %}
{% tab title="Example request of txpool.inspect" %}
```yaml
txpool.inspect
```
{% endtab %}
{% tab title="Example response of txpool.inspect" %}
```yaml
"0xb49928fcb10123e451cfe63aa47edcaea0f8aeea":{"20":"0xb49928fcb10123e451cfe63aa47edcaea0f8aeea: 0 wei + 6721975 × 140000000000 gas","21":"0xb49928fcb10123e451cfe63aa47edcaea0f8aeea: 0 wei + 6721975 × 140000000000 gas","22":"0xb49928fcb10123e451cfe63aa47edcaea0f8aeea: 0 wei + 6721975 × 140000000000 gas","23":"0xb49928fcb10123e451cfe63aa47edcaea0f8aeea: 0 wei + 6700000 × 140000000000 gas","24":"0xb49928fcb10123e451cfe63aa47edcaea0f8aeea: 0 wei + 6700000 × 140000000000 gas","27":"0xb49928fcb10123e451cfe63aa47edcaea0f8aeea: 0 wei + 6700000 × 140000000000 gas"},"0xc51db3339a7603f70b347a0b9680554f777d1f3c":{"82":"0xc51db3339a7603f70b347a0b9680554f777d1f3c: 0 wei + 4500000 × 10000000000 gas"},"0x084dd4aefc6853253573fee9f5fcc23e849d164c":{"17":"0x084dd4aefc6853253573fee9f5fcc23e849d164c: 0 wei + 28472169 × 1000000008 gas"}, (...)
```
{% endtab %}

{% tab title="Objects in txpool_inspect" %}

`TxPoolInspection`

| Field name | Type |
| :--- | :--- |
| Pending | `Array` |
| Queued | `Array` |
{% endtab %}
{% endtabs %}

[See also JSON RPC txpool_inspect](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/txpool#txpool_inspect)


## txpool.status

Returns a tx pool status. 


| Invocation |
| :--- |
| `txpool.status` |

| This method doesn't have parameters. |
| :--- |

| Returned type | Description |
| :--- | :--- |
| `TxPoolStatus object` |  |

{% tabs %}
{% tab title="Example request of txpool.status" %}
```yaml
txpool.status
```
{% endtab %}
{% tab title="Example response of txpool.status" %}
```yaml
{"pending":1010,"queued":14}
```
{% endtab %}

{% tab title="Objects in txpool_status" %}

`TxPoolStatus`

| Field name | Type |
| :--- | :--- |
| Pending | `Quantity` |
| Queued | `Quantity` |
{% endtab %}
{% endtabs %}

[See also JSON RPC txpool_status](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/txpool#txpool_status)
