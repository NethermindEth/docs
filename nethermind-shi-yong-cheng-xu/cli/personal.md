# Personal module

## personal.importRawKey

| Invocation |
| :--- |
| `personal.importRawKey(keyData, passphrase)` |

| 参数 | Type | 描述 |
| :--- | :--- | :--- |
| keyData | `Data` |  |
| passphrase | `String` |  |

| 返回值类型 | 描述 |
| :--- | :--- |
| `Address` |  |

{% tabs %}
{% tab title="Example request of personal.importRawKey" %}
```yaml
personal.importRawKey(keyData, passphrase)
```
{% endtab %}
{% endtabs %}

[参见 JSON RPC personal\_importRawKey](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/personal#personal_importrawkey)

## personal.listAccounts

| Invocation |
| :--- |
| `personal.listAccounts` |

| This method doesn't have parameters. |
| :--- |


| 返回值类型 | 描述 |
| :--- | :--- |
| `Address` |  |

{% tabs %}
{% tab title="Example request of personal.listAccounts" %}
```yaml
personal.listAccounts
```
{% endtab %}
{% endtabs %}

[参见 JSON RPC personal\_listAccounts](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/personal#personal_listaccounts)

## personal.lockAccount

| Invocation |
| :--- |
| `personal.lockAccount(address)` |

| 参数 | Type | 描述 |
| :--- | :--- | :--- |
| address | `Address` |  |

| 返回值类型 | 描述 |
| :--- | :--- |
| `Boolean` |  |

{% tabs %}
{% tab title="Example request of personal.lockAccount" %}
```yaml
personal.lockAccount(address)
```
{% endtab %}
{% endtabs %}

[参见 JSON RPC personal\_lockAccount](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/personal#personal_lockaccount)

## personal.newAccount

| Invocation |
| :--- |
| `personal.newAccount(passphrase)` |

| 参数 | Type | 描述 |
| :--- | :--- | :--- |
| passphrase | `String` |  |

| 返回值类型 | 描述 |
| :--- | :--- |
| `Address` |  |

{% tabs %}
{% tab title="Example request of personal.newAccount" %}
```yaml
personal.newAccount(passphrase)
```
{% endtab %}
{% endtabs %}

[参见 JSON RPC personal\_newAccount](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/personal#personal_newaccount)

## personal.unlockAccount

| Invocation |
| :--- |
| `personal.unlockAccount(address, passphrase)` |

| 参数 | Type | 描述 |
| :--- | :--- | :--- |
| address | `Address` |  |
| passphrase | `String` |  |

| 返回值类型 | 描述 |
| :--- | :--- |
| `Boolean` |  |

{% tabs %}
{% tab title="Example request of personal.unlockAccount" %}
```yaml
personal.unlockAccount(address, passphrase)
```
{% endtab %}
{% endtabs %}

[See also JSON RPC personal\_unlockAccount](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/personal#personal_unlockaccount)

