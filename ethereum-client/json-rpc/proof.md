# proof

## proof_getTransactionByHash

This function returns the same result as `eth_getTransactionReceipt` and also a tx proof, receipt proof and serialized block headers. 

| Invocation |
| :--- |
| `{"method":"proof_getTransactionByHash","params":[txHash, includeHeader]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| txHash | `Hash` |  |
| includeHeader | `Boolean` |  |

| Returned type | Description |
| :--- | :--- |
| `TransactionWithProof object` |  |

{% tabs %}
{% tab title="Example request of proof_getTransactionByHash" %}
```
curl --data '{"method":"proof_getTransactionByHash","params":[txHash, includeHeader],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in proof_getTransactionByHash" %}

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

[See also CLI proof.getTransactionByHash](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/proof#proof-gettransactionbyhash)
## proof_getTransactionReceipt

This function should return the same result as `eth_call` and also proofs of all USED accunts and their storages and serialized block headers 

| Invocation |
| :--- |
| `{"method":"proof_getTransactionReceipt","params":[txHash, includeHeader]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| txHash | `Hash` |  |
| includeHeader | `Boolean` |  |

| Returned type | Description |
| :--- | :--- |
| `ReceiptWithProof object` |  |

{% tabs %}
{% tab title="Example request of proof_getTransactionReceipt" %}
```
curl --data '{"method":"proof_getTransactionReceipt","params":[txHash, includeHeader],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in proof_getTransactionReceipt" %}

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
{% endtab %}
{% endtabs %}

[See also CLI proof.getTransactionReceipt](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/proof#proof-gettransactionreceipt)
