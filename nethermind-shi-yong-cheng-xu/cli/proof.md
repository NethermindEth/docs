# Proof module

## proof.getTransactionByHash

该函数返回与 `eth_getTransactionReceipt` 相同的结果，以及交易证明、收据证明和序列化的区块头。

| Invocation                                          |
| --------------------------------------------------- |
| `proof.getTransactionByHash(txHash, includeHeader)` |

| 参数            | Type      | 描述 |
| ------------- | --------- | -- |
| txHash        | `Hash`    |    |
| includeHeader | `Boolean` |    |

| 返回值类型                         | 描述 |
| ----------------------------- | -- |
| `TransactionWithProof object` |    |

{% tabs %}
{% tab title="Example request of proof.getTransactionByHash" %}
```yaml
proof.getTransactionByHash(txHash, includeHeader)
```
{% endtab %}

{% tab title="Objects in proof_getTransactionByHash" %}
`TransactionWithProof`

| 字段名称        | Type                       |
| ----------- | -------------------------- |
| Transaction | `TransactionForRpc object` |
| TxProof     | `Data`                     |
| BlockHeader | `Data`                     |

`TransactionForRpc`

| 字段名称             | Type                            |
| ---------------- | ------------------------------- |
| Hash             | `Hash`                          |
| Nonce            | `Quantity`                      |
| BlockHash        | `Hash`                          |
| BlockNumber      | `Quantity`                      |
| TransactionIndex | `Quantity`                      |
| From             | `Address`                       |
| To               | `Address`                       |
| Value            | `Quantity`                      |
| GasPrice         | `Quantity`                      |
| Gas              | `Quantity`                      |
| Data             | `Data`                          |
| Input            | `Data`                          |
| Type             | `TxType object`                 |
| AccessList       | `AccessListItemForRpc[] object` |
| V                | `Quantity`                      |
| S                | `Quantity`                      |
| R                | `Quantity`                      |
{% endtab %}
{% endtabs %}

[See also JSON RPC proof\_getTransactionByHash](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/proof#proof\_gettransactionbyhash)

## proof.getTransactionReceipt

该函数应返回与 `eth_call` 相同的结果，以及所有使用过的账户及其存储的证明，和序列化的区块头。

| Invocation                                           |
| ---------------------------------------------------- |
| `proof.getTransactionReceipt(txHash, includeHeader)` |

| 参数            | Type      | 描述 |
| ------------- | --------- | -- |
| txHash        | `Hash`    |    |
| includeHeader | `Boolean` |    |

| 返回值类型                     | 描述 |
| ------------------------- | -- |
| `ReceiptWithProof object` |    |

{% tabs %}
{% tab title="Example request of proof.getTransactionReceipt" %}
```yaml
proof.getTransactionReceipt(txHash, includeHeader)
```
{% endtab %}

{% tab title="Objects in proof_getTransactionReceipt" %}
`ReceiptWithProof`

| 字段名称         | Type                   |
| ------------ | ---------------------- |
| Receipt      | `ReceiptForRpc object` |
| TxProof      | `Data`                 |
| ReceiptProof | `Data`                 |
| BlockHeader  | `Data`                 |

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
{% endtab %}
{% endtabs %}

[参见 JSON RPC proof\_getTransactionReceipt](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/proof#proof\_gettransactionreceipt)
