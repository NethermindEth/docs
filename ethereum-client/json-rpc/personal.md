# Personal module

## personal\_importRawKey

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
{% tab title="Example request of personal\_importRawKey" %}
```text
curl --data '{"method":"personal_importRawKey","params":[keyData, passphrase],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Example response of personal\_importRawKey" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": 0x707fc13c0eb628c074f7ff514ae21acaee0ec072,
  "id": 1
}
```
{% endtab %}
{% endtabs %}

[See also CLI personal.importRawKey](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/personal#personal-importrawkey)

## personal\_listAccounts

| Invocation |
| :--- |
| `{"method":"personal_listAccounts","params":[]}` |

| This method doesn't have parameters. |
| :--- |


| Returned type | Description |
| :--- | :--- |
| `Address` |  |

{% tabs %}
{% tab title="Example request of personal\_listAccounts" %}
```text
curl --data '{"method":"personal_listAccounts","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Example response of personal\_listAccounts" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": ["0x247b5f5f007fb5d50de13cfcbd4460db21c12bcb","0x707fc13c0eb628c074f7ff514ae21acaee0ec072"],
  "id": 1
}
```
{% endtab %}
{% endtabs %}

[See also CLI personal.listAccounts](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/personal#personal-listaccounts)

## personal\_lockAccount

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
{% tab title="Example request of personal\_lockAccount" %}
```text
curl --data '{"method":"personal_lockAccount","params":[707Fc13C0eB628c074f7ff514Ae21ACaeE0ec072],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Example response of personal\_lockAccount" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": true,
  "id": 1
}
```
{% endtab %}
{% endtabs %}

[See also CLI personal.lockAccount](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/personal#personal-lockaccount)

## personal\_newAccount

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
{% tab title="Example request of personal\_newAccount" %}
```text
curl --data '{"method":"personal_newAccount","params":[testPass],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Example response of personal\_newAccount" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": 0xfb06d31473545b0e0d62a24e02b266e08523c6a9,
  "id": 1
}
```
{% endtab %}
{% endtabs %}

[See also CLI personal.newAccount](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/personal#personal-newaccount)

## personal\_unlockAccount

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
{% tab title="Example request of personal\_unlockAccount" %}
```text
curl --data '{"method":"personal_unlockAccount","params":[address, passphrase],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Example response of personal\_unlockAccount" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": true,
  "id": 1
}
```
{% endtab %}
{% endtabs %}

[See also CLI personal.unlockAccount](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/personal#personal-unlockaccount)

