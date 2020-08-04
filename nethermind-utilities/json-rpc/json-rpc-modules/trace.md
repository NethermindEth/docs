#trace

trace\_call

 

Is implemented : False

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| message | Nethermind.JsonRpc.Data.TransactionForRpc |
| traceTypes | System.String[] |
| blockParameter | Nethermind.Blockchain.Find.BlockParameter |

trace\_callMany

 

Is implemented : False

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| calls | System.ValueTuple`3[Nethermind.JsonRpc.Data.TransactionForRpc,System.String[],Nethermind.Blockchain.Find.BlockParameter][] |

trace\_rawTransaction

Traces a call to eth_sendRawTransaction without making the call, returning the traces 

Is implemented : True

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| data | System.Byte[] |
| traceTypes | System.String[] |

trace\_replayTransaction

 

Is implemented : True

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| txHash | Nethermind.Core.Crypto.Keccak |
| traceTypes | System.String[] |

trace\_replayBlockTransactions

 

Is implemented : True

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| numberOrTag | Nethermind.Blockchain.Find.BlockParameter |
| traceTypes | System.String[] |

trace\_filter

 

Is implemented : False

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| fromBlock | Nethermind.Blockchain.Find.BlockParameter |
| toBlock | Nethermind.Blockchain.Find.BlockParameter |
| toAddress | Nethermind.Core.Address |
| after | System.Int32 |
| count | System.Int32 |

trace\_block

 

Is implemented : True

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| numberOrTag | Nethermind.Blockchain.Find.BlockParameter |

trace\_get

 

Is implemented : False

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| txHash | Nethermind.Core.Crypto.Keccak |
| positions | System.Int32[] |

trace\_transaction

 

Is implemented : True

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| txHash | Nethermind.Core.Crypto.Keccak |

