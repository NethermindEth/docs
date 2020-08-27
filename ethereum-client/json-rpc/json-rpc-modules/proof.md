# Proof

## proof\_getTransactionByHash

This function returns the same result as `eth_getTransactionReceipt` and also a tx proof, receipt proof and serialized block headers.

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| txHash | `Hash` |
| includeHeader | `Boolean` |

### Return type

`TransactionWithProof object`

### Objects definition

`TransactionWithProof`

| Fields name | Type |
| :--- | :--- |
| Transaction | `TransactionForRpc object` |
| TxProof | `Byte[][] object` |
| BlockHeader | `Data` |

## proof\_getTransactionReceipt

This function should return the same result as `eth_call` and also proofs of all USED accunts and their storages and serialized block headers

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| txHash | `Hash` |
| includeHeader | `Boolean` |

### Return type

`ReceiptWithProof object`

### Objects definition

`ReceiptWithProof`

| Fields name | Type |
| :--- | :--- |
| Receipt | `ReceiptForRpc object` |
| TxProof | `Byte[][] object` |
| ReceiptProof | `Byte[][] object` |
| BlockHeader | `Data` |

