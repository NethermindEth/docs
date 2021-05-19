# Personal module

## personal\_importRawKey

| Invocación |
| :--- |
| `{"method":"personal_importRawKey","params":[keyData, passphrase]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| keyData | `Data` |  |
| passphrase | `String` |  |

| Tipo de retorno | Descripción |
| :--- | :--- |
| `Address` |  |

{% tabs %}
{% tab title="Example request of personal\_importRawKey" %}
```text
curl --data '{"method":"personal_importRawKey","params":[keyData, passphrase],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[ingrese a CLI personal.importRawKey](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/personal#personal-importrawkey)

## personal\_listAccounts

| Invocación |
| :--- |
| `{"method":"personal_listAccounts","params":[]}` |

| este método no tiene parametros  |
| :--- |


| Tipo de retorno | Descripción |
| :--- | :--- |
| `Address` |  |

{% tabs %}
{% tab title="Example request of personal\_listAccounts" %}
```text
curl --data '{"method":"personal_listAccounts","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[ingrese a CLI personal.listAccounts](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/personal#personal-listaccounts)

## personal\_lockAccount

| Invocación |
| :--- |
| `{"method":"personal_lockAccount","params":[address]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| address | `Address` |  |

| Tipo de retorno | Descripción |
| :--- | :--- |
| `Boolean` |  |

{% tabs %}
{% tab title="Example request of personal\_lockAccount" %}
```text
curl --data '{"method":"personal_lockAccount","params":[address],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[ingrese a CLI personal.lockAccount](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/personal#personal-lockaccount)

## personal\_newAccount

| Invocación |
| :--- |
| `{"method":"personal_newAccount","params":[passphrase]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| passphrase | `String` |  |

| Tipo de retorno | Descripción |
| :--- | :--- |
| `Address` |  |

{% tabs %}
{% tab title="Example request of personal\_newAccount" %}
```text
curl --data '{"method":"personal_newAccount","params":[passphrase],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[ingrese a CLI personal.newAccount](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/personal#personal-newaccount)

## personal\_unlockAccount

| Invocación |
| :--- |
| `{"method":"personal_unlockAccount","params":[address, passphrase]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| address | `Address` |  |
| passphrase | `String` |  |

| Tipo de retorno | Descripción |
| :--- | :--- |
| `Boolean` |  |

{% tabs %}
{% tab title="Example request of personal\_unlockAccount" %}
```text
curl --data '{"method":"personal_unlockAccount","params":[address, passphrase],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[ingrese a CLI personal.unlockAccount](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/personal#personal-unlockaccount)

