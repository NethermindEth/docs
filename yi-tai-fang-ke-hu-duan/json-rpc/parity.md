# Parity module

## parity\_clearEngineSigner

Clears an authority account for signing consensus messages. Blocks will not be sealed.

| Invocation                                          |
| --------------------------------------------------- |
| `{"method":"parity_clearEngineSigner","params":[]}` |

| This method doesn't have parameters. |
| ------------------------------------ |

| 返回值类型     | 描述 |
| --------- | -- |
| `Boolean` |    |

{% tabs %}
{% tab title="Example request of parity_clearEngineSigner" %}
```
curl --data '{"method":"parity_clearEngineSigner","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[参见 CLI parity.clearEngineSigner](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/parity#parity-clearenginesigner)

## parity\_enode

返回该节点的 enode URI。

| Invocation                              |
| --------------------------------------- |
| `{"method":"parity_enode","params":[]}` |

| This method doesn't have parameters. |
| ------------------------------------ |

| 返回值类型    | 描述 |
| -------- | -- |
| `String` |    |

{% tabs %}
{% tab title="Example request of parity_enode" %}
```
curl --data '{"method":"parity_enode","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[参见 CLI parity.enode](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/parity#parity-enode)

## parity\_getBlockReceipts

获取指定区块内所有交易的收据，比逐个获取收据更高效。

| Invocation                                                       |
| ---------------------------------------------------------------- |
| `{"method":"parity_getBlockReceipts","params":[blockParameter]}` |

| 参数             | Type                    | 描述 |
| -------------- | ----------------------- | -- |
| blockParameter | `BlockParameter object` |    |

| 返回值类型                  | 描述 |
| ---------------------- | -- |
| `ReceiptForRpc object` |    |

{% tabs %}
{% tab title="Example request of parity_getBlockReceipts" %}
```
curl --data '{"method":"parity_getBlockReceipts","params":[blockParameter],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in parity_getBlockReceipts" %}
`BlockParameter`

| 字段名称             | Type                        |
| ---------------- | --------------------------- |
| Type             | `BlockParameterType object` |
| BlockNumber      | `Quantity`                  |
| BlockHash        | `Hash`                      |
| RequireCanonical | `Boolean`                   |

`BlockParameterType`

* `Quantity` 或 `String` \（最新、最早、待处理\）

`ReceiptForRpc`

| 字段名称              | Type                      |
| ----------------- | ------------------------- |
| TransactionHash   | `Hash`                    |
| TransactionIndex  | `Quantity`                |
| BlockHash         | `Hash`                    |
| BlockNumber       | `Quantity`                |
| CumulativeGasUsed | `Quantity`                |
| GasUsed           | `Quantity`                |
| From              | `Address`                 |
| To                | `Address`                 |
| ContractAddress   | `Address`                 |
| Logs              | `LogEntryForRpc[] object` |
| LogsBloom         | `Bloom Object`            |
| Root              | `Hash`                    |
| Status            | `Quantity`                |
| Error             | `String`                  |
| Type              | `TxType object`           |

`LogEntryForRpc[]`

| 字段名称           | Type       |
| -------------- | ---------- |
| Length         | `Quantity` |
| LongLength     | `Quantity` |
| Rank           | `Quantity` |
| SyncRoot       | `Object`   |
| IsReadOnly     | `Boolean`  |
| IsFixedSize    | `Boolean`  |
| IsSynchronized | `Boolean`  |

`TxType`

* [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type
{% endtab %}
{% endtabs %}

[参见 CLI parity.getBlockReceipts](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/parity#parity-getblockreceipts)

## parity\_netPeers

Returns connected peers. Peers with non-empty protocols have completed handshake.

| Invocation                                 |
| ------------------------------------------ |
| `{"method":"parity_netPeers","params":[]}` |

| This method doesn't have parameters. |
| ------------------------------------ |

| 返回值类型                   | 描述 |
| ----------------------- | -- |
| `ParityNetPeers object` |    |

{% tabs %}
{% tab title="Example request of parity_netPeers" %}
```
curl --data '{"method":"parity_netPeers","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in parity_netPeers" %}
`ParityNetPeers`

| 字段名称      | Type                |
| --------- | ------------------- |
| Active    | `Quantity`          |
| Connected | `Quantity`          |
| Max       | `Quantity`          |
| Peers     | `PeerInfo[] object` |

`PeerInfo[]`

| 字段名称           | Type       |
| -------------- | ---------- |
| Length         | `Quantity` |
| LongLength     | `Quantity` |
| Rank           | `Quantity` |
| SyncRoot       | `Object`   |
| IsReadOnly     | `Boolean`  |
| IsFixedSize    | `Boolean`  |
| IsSynchronized | `Boolean`  |
{% endtab %}
{% endtabs %}

[参见 CLI parity.netPeers](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/parity#parity-netpeers)

## parity\_pendingTransactions

返回当前队列中交易的列表。

| Invocation                                            |
| ----------------------------------------------------- |
| `{"method":"parity_pendingTransactions","params":[]}` |

| This method doesn't have parameters. |
| ------------------------------------ |

| 返回值类型                      | 描述 |
| -------------------------- | -- |
| `ParityTransaction object` |    |

{% tabs %}
{% tab title="Example request of parity_pendingTransactions" %}
```
curl --data '{"method":"parity_pendingTransactions","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in parity_pendingTransactions" %}
`ParityTransaction`

| 字段名称             | Type               |
| ---------------- | ------------------ |
| Hash             | `Hash`             |
| Nonce            | `Quantity`         |
| BlockHash        | `Hash`             |
| BlockNumber      | `Quantity`         |
| TransactionIndex | `Quantity`         |
| From             | `Address`          |
| To               | `Address`          |
| Value            | `Quantity`         |
| GasPrice         | `Quantity`         |
| Gas              | `Quantity`         |
| Input            | `Data`             |
| Raw              | `Data`             |
| Creates          | `Address`          |
| PublicKey        | `PublicKey object` |
| ChainId          | `UInt64 object`    |
| Condition        | `Object`           |
| R                | `Data`             |
| S                | `Data`             |
| V                | `Quantity`         |
| StandardV        | `Quantity`         |

`PublicKey`

| 字段名称          | Type      |
| ------------- | --------- |
| Address       | `Address` |
| Bytes         | `Data`    |
| PrefixedBytes | `Data`    |

`UInt64`

| 字段名称 | Type |
| ---- | ---- |
{% endtab %}
{% endtabs %}

[参见 CLI parity.pendingTransactions](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/parity#parity-pendingtransactions)

## parity\_setEngineSigner

Sets an authority account for signing consensus messages.

| Invocation                                                         |
| ------------------------------------------------------------------ |
| `{"method":"parity_setEngineSigner","params":[address, password]}` |

| 参数       | Type      | 描述 |
| -------- | --------- | -- |
| address  | `Address` |    |
| password | `String`  |    |

| 返回值类型     | 描述 |
| --------- | -- |
| `Boolean` |    |

{% tabs %}
{% tab title="Example request of parity_setEngineSigner" %}
```
curl --data '{"method":"parity_setEngineSigner","params":[address, password],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[参见 CLI parity.setEngineSigner](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/parity#parity-setenginesigner)

## parity\_setEngineSignerSecret

Sets an authority account for signing consensus messages.

| Invocation                                                        |
| ----------------------------------------------------------------- |
| `{"method":"parity_setEngineSignerSecret","params":[privateKey]}` |

| 参数         | Type     | 描述 |
| ---------- | -------- | -- |
| privateKey | `String` |    |

| 返回值类型     | 描述 |
| --------- | -- |
| `Boolean` |    |

{% tabs %}
{% tab title="Example request of parity_setEngineSignerSecret" %}
```
curl --data '{"method":"parity_setEngineSignerSecret","params":[privateKey],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[参见 CLI parity.setEngineSignerSecret](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/parity#parity-setenginesignersecret)
