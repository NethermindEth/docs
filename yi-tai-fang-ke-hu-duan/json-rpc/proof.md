# Proof module

## proof\_getTransactionByHash

该函数返回与 `eth_getTransactionReceipt` 相同的结果，以及交易证明、收据证明和序列化的区块头。

| Invocation                                                                 |
| -------------------------------------------------------------------------- |
| `{"method":"proof_getTransactionByHash","params":[txHash, includeHeader]}` |

| 参数            | Type      | 描述 |
| ------------- | --------- | -- |
| txHash        | `Hash`    |    |
| includeHeader | `Boolean` |    |

| 返回值类型                         | 描述 |
| ----------------------------- | -- |
| `TransactionWithProof object` |    |

{% tabs %}
{% tab title="Example request of proof_getTransactionByHash" %}
```
curl --data '{"method":"proof_getTransactionByHash","params":[txHash, includeHeader],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
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

[参见 CLI proof.getTransactionByHash](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/proof#proof-gettransactionbyhash)

## proof\_getTransactionReceipt

该函数应返回与 `eth_call` 相同的结果，以及所有使用过的账户及其存储的证明，和序列化的区块头。

| Invocation                                                                  |
| --------------------------------------------------------------------------- |
| `{"method":"proof_getTransactionReceipt","params":[txHash, includeHeader]}` |

| 参数            | Type      | 描述 |
| ------------- | --------- | -- |
| txHash        | `Hash`    |    |
| includeHeader | `Boolean` |    |

| 返回值类型                     | 描述 |
| ------------------------- | -- |
| `ReceiptWithProof object` |    |

{% tabs %}
{% tab title="Example request of proof_getTransactionReceipt" %}
```
curl --data '{"method":"proof_getTransactionReceipt","params":[txHash, includeHeader],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
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

[参见 CLI proof.getTransactionReceipt](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/proof#proof-gettransactionreceipt)
