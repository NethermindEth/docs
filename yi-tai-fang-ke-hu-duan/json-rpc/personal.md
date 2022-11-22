# Personal module

## personal\_importRawKey

| Invocation                                                          |
| ------------------------------------------------------------------- |
| `{"method":"personal_importRawKey","params":[keyData, passphrase]}` |

| 参数         | Type     | 描述 |
| ---------- | -------- | -- |
| keyData    | `Data`   |    |
| passphrase | `String` |    |

| 返回值类型     | 描述 |
| --------- | -- |
| `Address` |    |

{% tabs %}
{% tab title="Example request of personal_importRawKey" %}
```
curl --data '{"method":"personal_importRawKey","params":[keyData, passphrase],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[参见 CLI personal.importRawKey](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/personal#personal-importrawkey)

## personal\_listAccounts

| Invocation                                       |
| ------------------------------------------------ |
| `{"method":"personal_listAccounts","params":[]}` |

| This method doesn't have parameters. |
| ------------------------------------ |

| 返回值类型     | 描述 |
| --------- | -- |
| `Address` |    |

{% tabs %}
{% tab title="Example request of personal_listAccounts" %}
```
curl --data '{"method":"personal_listAccounts","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[参见 CLI personal.listAccounts](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/personal#personal-listaccounts)

## personal\_lockAccount

| Invocation                                             |
| ------------------------------------------------------ |
| `{"method":"personal_lockAccount","params":[address]}` |

| 参数      | Type      | 描述 |
| ------- | --------- | -- |
| address | `Address` |    |

| 返回值类型     | 描述 |
| --------- | -- |
| `Boolean` |    |

{% tabs %}
{% tab title="Example request of personal_lockAccount" %}
```
curl --data '{"method":"personal_lockAccount","params":[address],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[参见 CLI personal.lockAccount](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/personal#personal-lockaccount)

## personal\_newAccount

| Invocation                                               |
| -------------------------------------------------------- |
| `{"method":"personal_newAccount","params":[passphrase]}` |

| 参数         | Type     | 描述 |
| ---------- | -------- | -- |
| passphrase | `String` |    |

| 返回值类型     | 描述 |
| --------- | -- |
| `Address` |    |

{% tabs %}
{% tab title="Example request of personal_newAccount" %}
```
curl --data '{"method":"personal_newAccount","params":[passphrase],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[参见 CLI personal.newAccount](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/personal#personal-newaccount)

## personal\_unlockAccount

| Invocation                                                           |
| -------------------------------------------------------------------- |
| `{"method":"personal_unlockAccount","params":[address, passphrase]}` |

| 参数         | Type      | 描述 |
| ---------- | --------- | -- |
| address    | `Address` |    |
| passphrase | `String`  |    |

| 返回值类型     | 描述 |
| --------- | -- |
| `Boolean` |    |

{% tabs %}
{% tab title="Example request of personal_unlockAccount" %}
```
curl --data '{"method":"personal_unlockAccount","params":[address, passphrase],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[参见 CLI personal.unlockAccount](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/personal#personal-unlockaccount)
