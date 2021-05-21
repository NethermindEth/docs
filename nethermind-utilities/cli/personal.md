# Personal module

## personal.importRawKey

| Invocación |
| :--- |
| `personal.importRawKey(keyData, passphrase)` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| keyData | `Data` |  |
| passphrase | `String` |  |

| Tipo de retorno | Descripción |
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

| Invocación |
| :--- |
| `personal.listAccounts` |

| este método no tiene parametros  |
| :--- |


| Tipo de retorno | Descripción |
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

| Invocación |
| :--- |
| `personal.lockAccount(address)` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| address | `Address` |  |

| Tipo de retorno | Descripción |
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

| Invocación |
| :--- |
| `personal.newAccount(passphrase)` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| passphrase | `String` |  |

| Tipo de retorno | Descripción |
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

| Invocación |
| :--- |
| `personal.unlockAccount(address, passphrase)` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| address | `Address` |  |
| passphrase | `String` |  |

| Tipo de retorno | Descripción |
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

