# Personal module

## personal.importRawKey

| Invocation |
| :--- |
| `personal.importRawKey(keyData, passphrase)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| keyData | `Data` |  |
| passphrase | `String` |  |

| Returned type | Description |
| :--- | :--- |
| `Address` |  |

{% tabs %}
{% tab title="Example request of personal.importRawKey" %}
```yaml
personal.importRawKey(keyData, passphrase)
```
{% endtab %}
{% endtabs %}

[See also JSON RPC personal\_importRawKey](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/personal#personal_importrawkey)

## personal.listAccounts

| Invocation |
| :--- |
| `personal.listAccounts` |

| This method doesn't have parameters. |
| :--- |


| Returned type | Description |
| :--- | :--- |
| `Address` |  |

{% tabs %}
{% tab title="Example request of personal.listAccounts" %}
```yaml
personal.listAccounts
```
{% endtab %}
{% endtabs %}

[See also JSON RPC personal\_listAccounts](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/personal#personal_listaccounts)

## personal.lockAccount

| Invocation |
| :--- |
| `personal.lockAccount(address)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| address | `Address` |  |

| Returned type | Description |
| :--- | :--- |
| `Boolean` |  |

{% tabs %}
{% tab title="Example request of personal.lockAccount" %}
```yaml
personal.lockAccount(address)
```
{% endtab %}
{% endtabs %}

[See also JSON RPC personal\_lockAccount](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/personal#personal_lockaccount)

## personal.newAccount

| Invocation |
| :--- |
| `personal.newAccount(passphrase)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| passphrase | `String` |  |

| Returned type | Description |
| :--- | :--- |
| `Address` |  |

{% tabs %}
{% tab title="Example request of personal.newAccount" %}
```yaml
personal.newAccount(passphrase)
```
{% endtab %}
{% endtabs %}

[See also JSON RPC personal\_newAccount](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/personal#personal_newaccount)

## personal.unlockAccount

| Invocation |
| :--- |
| `personal.unlockAccount(address, passphrase)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| address | `Address` |  |
| passphrase | `String` |  |

| Returned type | Description |
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

