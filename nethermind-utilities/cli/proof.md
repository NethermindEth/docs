# Proof module

## proof.getTransactionByHash

This function returns the same result as `eth_getTransactionReceipt` and also a tx proof, receipt proof and serialized block headers.

| Invocation |
| :--- |
| `proof.getTransactionByHash(txHash, includeHeader)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| txHash | `Hash` |  |
| includeHeader | `Boolean` |  |

| Returned type | Description |
| :--- | :--- |
| `TransactionWithProof object` |  |

{% tabs %}
{% tab title="Example request of proof.getTransactionByHash" %}
```yaml
proof.getTransactionByHash(txHash, includeHeader)
```
{% endtab %}

{% tab title="Objects in proof\_getTransactionByHash" %}
`TransactionWithProof`

| Field name | Type |
| :--- | :--- |
| Transaction | `TransactionForRpc object` |
| TxProof | `Data` |
| BlockHeader | `Data` |

`TransactionForRpc`

| Field name | Type |
| :--- | :--- |
| Hash | `Hash` |
| Nonce | `Quantity` |
| BlockHash | `Hash` |
| BlockNumber | `Quantity` |
| TransactionIndex | `Quantity` |
| From | `Address` |
| To | `Address` |
| Value | `Quantity` |
| GasPrice | `Quantity` |
| MaxPriorityFeePerGas | `Quantity` |
| MaxFeePerGas | `Quantity` |
| Gas | `Quantity` |
| Data | `Data` |
| Input | `Data` |
| Type | `TxType object` |
| AccessList | `AccessListItemForRpc[] object` |
| V | `Quantity` |
| S | `Quantity` |
| R | `Quantity` |
{% endtab %}
{% endtabs %}

[See also JSON RPC proof\_getTransactionByHash](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/proof#proof_gettransactionbyhash)

## proof.getTransactionReceipt

This function should return the same result as `eth_call` and also proofs of all USED accunts and their storages and serialized block headers

| Invocation |
| :--- |
| `proof.getTransactionReceipt(txHash, includeHeader)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| txHash | `Hash` |  |
| includeHeader | `Boolean` |  |

| Returned type | Description |
| :--- | :--- |
| `ReceiptWithProof object` |  |

{% tabs %}
{% tab title="Example request of proof.getTransactionReceipt" %}
```yaml
proof.getTransactionReceipt(txHash, includeHeader)
```
{% endtab %}

{% tab title="Objects in proof\_getTransactionReceipt" %}
`ReceiptWithProof`

| Field name | Type |
| :--- | :--- |
| Receipt | `ReceiptForRpc object` |
| TxProof | `Data` |
| ReceiptProof | `Data` |
| BlockHeader | `Data` |

`ReceiptForRpc`

| Field name | Type |
| :--- | :--- |
| TransactionHash | `Hash` |
| TransactionIndex | `Quantity` |
| BlockHash | `Hash` |
| BlockNumber | `Quantity` |
| CumulativeGasUsed | `Quantity` |
| GasUsed | `Quantity` |
| From | `Address` |
| To | `Address` |
| ContractAddress | `Address` |
| Logs | `LogEntryForRpc[] object` |
| LogsBloom | `Bloom Object` |
| Root | `Hash` |
| Status | `Quantity` |
| Error | `String` |
| Type | `TxType object` |
{% endtab %}
{% endtabs %}

[See also JSON RPC proof\_getTransactionReceipt](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/proof#proof_gettransactionreceipt)

