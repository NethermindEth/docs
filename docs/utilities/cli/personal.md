import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# personal

## personal.importRawKey

| Invocation                                   |
|:---------------------------------------------|
| `personal.importRawKey(keyData, passphrase)` |

| Parameter  | Type     | Description |
|:-----------|:---------|:------------|
| keyData    | `Data`   |             |
| passphrase | `String` |             |

| Returned type | Description |
|:--------------|:------------|
| `Address`     |             |

<Tabs>
<TabItem label="Request" value="request">

```yaml
personal.importRawKey(keyData, passphrase)
```

</TabItem>
<TabItem label="Response" value="response">

```yaml
0x707fc13c0eb628c074f7ff514ae21acaee0ec072
```

</TabItem>
</Tabs>

[See also JSON RPC personal_importRawKey](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/personal#personal_importrawkey)

## personal.listAccounts

| Invocation              |
|:------------------------|
| `personal.listAccounts` |

| This method doesn't have parameters. |
|:-------------------------------------|

| Returned type | Description |
|:--------------|:------------|
| `Address`     |             |

<Tabs>
<TabItem label="Request" value="request">

```yaml
personal.listAccounts
```

</TabItem>
<TabItem label="Response" value="response">

```yaml
[ "0x247b5f5f007fb5d50de13cfcbd4460db21c12bcb","0x707fc13c0eb628c074f7ff514ae21acaee0ec072" ]
```

</TabItem>
</Tabs>

[See also JSON RPC personal_listAccounts](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/personal#personal_listaccounts)

## personal.lockAccount

| Invocation                      |
|:--------------------------------|
| `personal.lockAccount(address)` |

| Parameter | Type      | Description |
|:----------|:----------|:------------|
| address   | `Address` |             |

| Returned type | Description |
|:--------------|:------------|
| `Boolean`     |             |

<Tabs>
<TabItem label="Request" value="request">

```yaml
personal.lockAccount(707Fc13C0eB628c074f7ff514Ae21ACaeE0ec072)
```

</TabItem>
<TabItem label="Response" value="response">

```yaml
true
```

</TabItem>
</Tabs>

[See also JSON RPC personal_lockAccount](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/personal#personal_lockaccount)

## personal.newAccount

| Invocation                        |
|:----------------------------------|
| `personal.newAccount(passphrase)` |

| Parameter  | Type     | Description |
|:-----------|:---------|:------------|
| passphrase | `String` |             |

| Returned type | Description |
|:--------------|:------------|
| `Address`     |             |

<Tabs>
<TabItem label="Request" value="request">

```yaml
personal.newAccount(testPass)
```

</TabItem>
<TabItem label="Response" value="response">

```yaml
0xfb06d31473545b0e0d62a24e02b266e08523c6a9
```

</TabItem>
</Tabs>

[See also JSON RPC personal_newAccount](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/personal#personal_newaccount)

## personal.unlockAccount

| Invocation                                    |
|:----------------------------------------------|
| `personal.unlockAccount(address, passphrase)` |

| Parameter  | Type      | Description |
|:-----------|:----------|:------------|
| address    | `Address` |             |
| passphrase | `String`  |             |

| Returned type | Description |
|:--------------|:------------|
| `Boolean`     |             |

<Tabs>
<TabItem label="Request" value="request">

```yaml
personal.unlockAccount(address, passphrase)
```

</TabItem>
<TabItem label="Response" value="response">

```yaml
true
```

</TabItem>
</Tabs>

[See also JSON RPC personal_unlockAccount](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/personal#personal_unlockaccount)
