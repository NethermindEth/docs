import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Personal

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

<Tabs>
<TabItem value="request" label="Request">

```
curl --data '{"method":"personal_importRawKey","params":[keyData, passphrase],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
</TabItem>
<TabItem label="Response" value="response">

```yaml
{
  "jsonrpc": "2.0",
  "result": 0x707fc13c0eb628c074f7ff514ae21acaee0ec072,
  "id": 1
}
```
</TabItem>
</Tabs>


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

<Tabs>
<TabItem value="request" label="Request">

```
curl --data '{"method":"personal_listAccounts","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
</TabItem>
<TabItem label="Response" value="response">

```yaml
{
  "jsonrpc": "2.0",
  "result": ["0x247b5f5f007fb5d50de13cfcbd4460db21c12bcb","0x707fc13c0eb628c074f7ff514ae21acaee0ec072"],
  "id": 1
}
```
</TabItem>
</Tabs>


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

<Tabs>
<TabItem value="request" label="Request">

```
curl --data '{"method":"personal_lockAccount","params":[707Fc13C0eB628c074f7ff514Ae21ACaeE0ec072],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
</TabItem>
<TabItem label="Response" value="response">

```yaml
{
  "jsonrpc": "2.0",
  "result": true,
  "id": 1
}
```
</TabItem>
</Tabs>


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

<Tabs>
<TabItem value="request" label="Request">

```
curl --data '{"method":"personal_newAccount","params":[testPass],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
</TabItem>
<TabItem label="Response" value="response">

```yaml
{
  "jsonrpc": "2.0",
  "result": 0xfb06d31473545b0e0d62a24e02b266e08523c6a9,
  "id": 1
}
```
</TabItem>
</Tabs>


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

<Tabs>
<TabItem value="request" label="Request">

```
curl --data '{"method":"personal_unlockAccount","params":[address, passphrase],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
</TabItem>
<TabItem label="Response" value="response">

```yaml
{
  "jsonrpc": "2.0",
  "result": true,
  "id": 1
}
```
</TabItem>
</Tabs>


[See also CLI personal.unlockAccount](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/personal#personal-unlockaccount)
