# Parity module

## parity.clearEngineSigner

Clears an authority account for signing consensus messages. Blocks will not be sealed.

| Invocation                   |
| ---------------------------- |
| `parity.clearEngineSigner()` |

| This method doesn't have parameters. |
| ------------------------------------ |

| 返回值类型     | 描述 |
| --------- | -- |
| `Boolean` |    |

{% tabs %}
{% tab title="Example request of parity.clearEngineSigner" %}
```yaml
parity.clearEngineSigner()
```
{% endtab %}
{% endtabs %}

[参见 JSON RPC parity\_clearEngineSigner](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/parity#parity\_clearenginesigner)

## parity.enode

返回该节点的 enode URI。

| Invocation     |
| -------------- |
| `parity.enode` |

| This method doesn't have parameters. |
| ------------------------------------ |

| 返回值类型    | 描述 |
| -------- | -- |
| `String` |    |

{% tabs %}
{% tab title="Example request of parity.enode" %}
```yaml
parity.enode
```
{% endtab %}
{% endtabs %}

[参见 JSON RPC parity\_enode](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/parity#parity\_enode)

## parity.getBlockReceipts

获取指定区块内所有交易的收据，比逐个获取收据更高效。

| Invocation                                |
| ----------------------------------------- |
| `parity.getBlockReceipts(blockParameter)` |

| 参数             | Type                    | 描述 |
| -------------- | ----------------------- | -- |
| blockParameter | `BlockParameter object` |    |

| 返回值类型                  | 描述 |
| ---------------------- | -- |
| `ReceiptForRpc object` |    |

{% tabs %}
{% tab title="Example request of parity.getBlockReceipts" %}
```yaml
parity.getBlockReceipts(blockParameter)
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

[参见 JSON RPC parity\_getBlockReceipts](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/parity#parity\_getblockreceipts)

## parity.netPeers

Returns connected peers. Peers with non-empty protocols have completed handshake.

| Invocation        |
| ----------------- |
| `parity.netPeers` |

| This method doesn't have parameters. |
| ------------------------------------ |

| 返回值类型                   | 描述 |
| ----------------------- | -- |
| `ParityNetPeers object` |    |

{% tabs %}
{% tab title="Example request of parity.netPeers" %}
```yaml
parity.netPeers
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

[参见 JSON RPC parity\_netPeers](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/parity#parity\_netpeers)

## parity.pendingTransactions

返回当前队列中交易的列表。

| Invocation                     |
| ------------------------------ |
| `parity.pendingTransactions()` |

| This method doesn't have parameters. |
| ------------------------------------ |

| 返回值类型                      | 描述 |
| -------------------------- | -- |
| `ParityTransaction object` |    |

{% tabs %}
{% tab title="Example request of parity.pendingTransactions" %}
```yaml
parity.pendingTransactions()
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

[参见 JSON RPC parity\_pendingTransactions](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/parity#parity\_pendingtransactions)

## parity.setEngineSigner

Sets an authority account for signing consensus messages.

| Invocation                                  |
| ------------------------------------------- |
| `parity.setEngineSigner(address, password)` |

| 参数       | Type      | 描述 |
| -------- | --------- | -- |
| address  | `Address` |    |
| password | `String`  |    |

| 返回值类型     | 描述 |
| --------- | -- |
| `Boolean` |    |

{% tabs %}
{% tab title="Example request of parity.setEngineSigner" %}
```yaml
parity.setEngineSigner(address, password)
```
{% endtab %}
{% endtabs %}

[参见 JSON RPC parity\_setEngineSigner](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/parity#parity\_setenginesigner)

## parity.setEngineSignerSecret

Sets an authority account for signing consensus messages.

| Invocation                                 |
| ------------------------------------------ |
| `parity.setEngineSignerSecret(privateKey)` |

| 参数         | Type     | 描述 |
| ---------- | -------- | -- |
| privateKey | `String` |    |

| 返回值类型     | 描述 |
| --------- | -- |
| `Boolean` |    |

{% tabs %}
{% tab title="Example request of parity.setEngineSignerSecret" %}
```yaml
parity.setEngineSignerSecret(privateKey)
```
{% endtab %}
{% endtabs %}

[参见 JSON RPC parity\_setEngineSignerSecret](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/parity#parity\_setenginesignersecret)
