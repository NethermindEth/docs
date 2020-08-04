#proof

proof\_call

This function returns the same result as `eth_getTransactionByHash` and also a tx proof and a serialized block header. 

Is implemented : False

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| tx | Nethermind.JsonRpc.Data.TransactionForRpc |
| blockParameter | Nethermind.Blockchain.Find.BlockParameter |

proof\_getTransactionByHash

This function returns the same result as `eth_getTransactionReceipt` and also a tx proof, receipt proof and serialized block headers. 

Is implemented : True

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| txHash | Nethermind.Core.Crypto.Keccak |
| includeHeader | System.Boolean |

proof\_getTransactionReceipt

This function should return the same result as `eth_call` and also proofs of all USED accunts and their storages and serialized block headers 

Is implemented : True

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| txHash | Nethermind.Core.Crypto.Keccak |
| includeHeader | System.Boolean |

