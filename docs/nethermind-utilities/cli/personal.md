# personal



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
{% tab title="Example response of personal.importRawKey" %}
```yaml
0x707fc13c0eb628c074f7ff514ae21acaee0ec072
```
{% endtab %}
{% endtabs %}

[See also JSON RPC personal_importRawKey](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/personal#personal_importrawkey)


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
{% tab title="Example response of personal.listAccounts" %}
```yaml
["0x247b5f5f007fb5d50de13cfcbd4460db21c12bcb","0x707fc13c0eb628c074f7ff514ae21acaee0ec072"]
```
{% endtab %}
{% endtabs %}

[See also JSON RPC personal_listAccounts](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/personal#personal_listaccounts)


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
personal.lockAccount(707Fc13C0eB628c074f7ff514Ae21ACaeE0ec072)
```
{% endtab %}
{% tab title="Example response of personal.lockAccount" %}
```yaml
true
```
{% endtab %}
{% endtabs %}

[See also JSON RPC personal_lockAccount](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/personal#personal_lockaccount)


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
personal.newAccount(testPass)
```
{% endtab %}
{% tab title="Example response of personal.newAccount" %}
```yaml
0xfb06d31473545b0e0d62a24e02b266e08523c6a9
```
{% endtab %}
{% endtabs %}

[See also JSON RPC personal_newAccount](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/personal#personal_newaccount)


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
{% tab title="Example response of personal.unlockAccount" %}
```yaml
true
```
{% endtab %}
{% endtabs %}

[See also JSON RPC personal_unlockAccount](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/personal#personal_unlockaccount)
