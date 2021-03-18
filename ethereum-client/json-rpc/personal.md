# personal

## personal_importRawKey
| Invocation |
| :--- |
| `{"method":"personal_importRawKey","params":[keyData, passphrase]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| keyData | `Data` |  |
| passphrase | `String` |  |

| Returned type | Description |
| :--- | :--- |
| `Address` |  |

{% tabs %}
{% tab title="Example request of personal_importRawKey" %}
```
curl --data '{"method":"personal_importRawKey","params":[keyData, passphrase],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[See also CLI personal.importRawKey](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/personal#personal-importrawkey)
## personal_listAccounts
| Invocation |
| :--- |
| `{"method":"personal_listAccounts","params":[]}` |

| This method doesn't have parameters. |
| :--- |

| Returned type | Description |
| :--- | :--- |
| `Address` |  |

{% tabs %}
{% tab title="Example request of personal_listAccounts" %}
```
curl --data '{"method":"personal_listAccounts","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[See also CLI personal.listAccounts](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/personal#personal-listaccounts)
## personal_lockAccount
| Invocation |
| :--- |
| `{"method":"personal_lockAccount","params":[address]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| address | `Address` |  |

| Returned type | Description |
| :--- | :--- |
| `Boolean` |  |

{% tabs %}
{% tab title="Example request of personal_lockAccount" %}
```
curl --data '{"method":"personal_lockAccount","params":[address],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[See also CLI personal.lockAccount](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/personal#personal-lockaccount)
## personal_newAccount
| Invocation |
| :--- |
| `{"method":"personal_newAccount","params":[passphrase]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| passphrase | `String` |  |

| Returned type | Description |
| :--- | :--- |
| `Address` |  |

{% tabs %}
{% tab title="Example request of personal_newAccount" %}
```
curl --data '{"method":"personal_newAccount","params":[passphrase],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[See also CLI personal.newAccount](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/personal#personal-newaccount)
## personal_unlockAccount
| Invocation |
| :--- |
| `{"method":"personal_unlockAccount","params":[address, passphrase]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| address | `Address` |  |
| passphrase | `String` |  |

| Returned type | Description |
| :--- | :--- |
| `Boolean` |  |

{% tabs %}
{% tab title="Example request of personal_unlockAccount" %}
```
curl --data '{"method":"personal_unlockAccount","params":[address, passphrase],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[See also CLI personal.unlockAccount](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/personal#personal-unlockaccount)
