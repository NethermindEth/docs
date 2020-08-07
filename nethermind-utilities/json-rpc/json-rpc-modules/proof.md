#proof

##proof\_getTransactionByHash

This function returns the same result as `eth_getTransactionReceipt` and also a tx proof, receipt proof and serialized block headers. 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| txHash | `Object` |
| includeHeader | `Object` |

Return type: ``

##proof\_getTransactionReceipt

This function should return the same result as `eth_call` and also proofs of all USED accunts and their storages and serialized block headers 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| txHash | `Object` |
| includeHeader | `Object` |

Return type: ``

