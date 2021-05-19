# evm

## evm_mine

Triggers block production. 

| Invocation |
| :--- |
| `{"method":"evm_mine","params":[]}` |

| This method doesn't have parameters. |
| :--- |

| 返回值类型 | 描述 |
| :--- | :--- |
| `Boolean` |  |

{% tabs %}
{% tab title="Example request of evm_mine" %}
```
curl --data '{"method":"evm_mine","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

