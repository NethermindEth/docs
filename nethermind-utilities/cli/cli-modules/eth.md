#eth

eth\_chainId

Returns ChainID 

Is implemented : True

### **Parameters**

| Parameter name | Type |
| :--- | :--- |

eth\_protocolVersion

Returns ETH protocol version 

Is implemented : True

### **Parameters**

| Parameter name | Type |
| :--- | :--- |

eth\_syncing

Returns syncing status 

Is implemented : True

### **Parameters**

| Parameter name | Type |
| :--- | :--- |

eth\_coinbase

Returns miner's coinbase 

Is implemented : False

### **Parameters**

| Parameter name | Type |
| :--- | :--- |

eth\_mining

Returns mining status 

Is implemented : False

### **Parameters**

| Parameter name | Type |
| :--- | :--- |

eth\_snapshot

Returns full state snapshot 

Is implemented : False

### **Parameters**

| Parameter name | Type |
| :--- | :--- |

eth\_hashrate

Returns mining hashrate 

Is implemented : False

### **Parameters**

| Parameter name | Type |
| :--- | :--- |

eth\_gasPrice

Returns miner's gas price 

Is implemented : False

### **Parameters**

| Parameter name | Type |
| :--- | :--- |

eth\_accounts

Returns accounts 

Is implemented : False

### **Parameters**

| Parameter name | Type |
| :--- | :--- |

eth\_blockNumber

Returns current block number 

Is implemented : True

### **Parameters**

| Parameter name | Type |
| :--- | :--- |

eth\_getBalance

Returns account balance 

Is implemented : True

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| address | Nethermind.Core.Address |
| blockParameter | Nethermind.Blockchain.Find.BlockParameter |

eth\_getStorageAt

Returns storage data at address. storage_index 

Is implemented : True

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| address | Nethermind.Core.Address |
| positionIndex | Nethermind.Dirichlet.Numerics.UInt256 |
| blockParameter | Nethermind.Blockchain.Find.BlockParameter |

eth\_getTransactionCount

Returns account nonce (number of trnsactions from the account since genesis) at the given block number 

Is implemented : True

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| address | Nethermind.Core.Address |
| blockParameter | Nethermind.Blockchain.Find.BlockParameter |

eth\_getBlockTransactionCountByHash

Returns number of transactions in the block block hash 

Is implemented : True

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockHash | Nethermind.Core.Crypto.Keccak |

eth\_getBlockTransactionCountByNumber

Returns number of transactions in the block by block number 

Is implemented : True

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockParameter | Nethermind.Blockchain.Find.BlockParameter |

eth\_getUncleCountByBlockHash

Returns number of uncles in the block by block hash 

Is implemented : True

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockHash | Nethermind.Core.Crypto.Keccak |

eth\_getUncleCountByBlockNumber

Returns number of uncles in the block by block number 

Is implemented : True

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockParameter | Nethermind.Blockchain.Find.BlockParameter |

eth\_getCode

Returns account code at given address and block 

Is implemented : True

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| address | Nethermind.Core.Address |
| blockParameter | Nethermind.Blockchain.Find.BlockParameter |

eth\_sign

Signs a transaction 

Is implemented : False

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| addressData | Nethermind.Core.Address |
| message | System.Byte[] |

eth\_sendTransaction

Send a transaction to the tx pool and broadcasting 

Is implemented : True

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| transactionForRpc | Nethermind.JsonRpc.Data.TransactionForRpc |

eth\_sendRawTransaction

Send a raw transaction to the tx pool and broadcasting 

Is implemented : True

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| transaction | System.Byte[] |

eth\_call

Executes a tx call (does not create a transaction) 

Is implemented : True

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| transactionCall | Nethermind.JsonRpc.Data.TransactionForRpc |
| blockParameter | Nethermind.Blockchain.Find.BlockParameter |

eth\_estimateGas

Executes a tx call and returns gas used (does not create a transaction) 

Is implemented : True

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| transactionCall | Nethermind.JsonRpc.Data.TransactionForRpc |
| blockParameter | Nethermind.Blockchain.Find.BlockParameter |

eth\_getBlockByHash

Retrieves a block by hash 

Is implemented : True

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockHash | Nethermind.Core.Crypto.Keccak |
| returnFullTransactionObjects | System.Boolean |

eth\_getBlockByNumber

Retrieves a block by number 

Is implemented : True

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockParameter | Nethermind.Blockchain.Find.BlockParameter |
| returnFullTransactionObjects | System.Boolean |

eth\_getTransactionByHash

Retrieves a transaction by hash 

Is implemented : True

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| transactionHash | Nethermind.Core.Crypto.Keccak |

eth\_pendingTransactions

Returns the pending transactions list 

Is implemented : True

### **Parameters**

| Parameter name | Type |
| :--- | :--- |

eth\_getTransactionByBlockHashAndIndex

Retrieves a transaction by block hash and index 

Is implemented : True

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockHash | Nethermind.Core.Crypto.Keccak |
| positionIndex | Nethermind.Dirichlet.Numerics.UInt256 |

eth\_getTransactionByBlockNumberAndIndex

Retrieves a transaction by block number and index 

Is implemented : True

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockParameter | Nethermind.Blockchain.Find.BlockParameter |
| positionIndex | Nethermind.Dirichlet.Numerics.UInt256 |

eth\_getTransactionReceipt

Retrieves a transaction receipt by tx hash 

Is implemented : True

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| txHashData | Nethermind.Core.Crypto.Keccak |

eth\_getUncleByBlockHashAndIndex

Retrieves an uncle block header by block hash and uncle index 

Is implemented : True

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockHashData | Nethermind.Core.Crypto.Keccak |
| positionIndex | Nethermind.Dirichlet.Numerics.UInt256 |

eth\_getUncleByBlockNumberAndIndex

Retrieves an uncle block header by block number and uncle index 

Is implemented : True

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockParameter | Nethermind.Blockchain.Find.BlockParameter |
| positionIndex | Nethermind.Dirichlet.Numerics.UInt256 |

eth\_newFilter

Creates an update filter 

Is implemented : True

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| filter | Nethermind.JsonRpc.Modules.Eth.Filter |

eth\_newBlockFilter

Creates an update filter 

Is implemented : True

### **Parameters**

| Parameter name | Type |
| :--- | :--- |

eth\_newPendingTransactionFilter

Creates an update filter 

Is implemented : True

### **Parameters**

| Parameter name | Type |
| :--- | :--- |

eth\_uninstallFilter

Creates an update filter 

Is implemented : True

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| filterId | Nethermind.Dirichlet.Numerics.UInt256 |

eth\_getFilterChanges

Reads filter changes 

Is implemented : True

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| filterId | Nethermind.Dirichlet.Numerics.UInt256 |

eth\_getFilterLogs

Reads filter changes 

Is implemented : True

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| filterId | Nethermind.Dirichlet.Numerics.UInt256 |

eth\_getLogs

Reads logs 

Is implemented : True

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| filter | Nethermind.JsonRpc.Modules.Eth.Filter |

eth\_getWork

 

Is implemented : False

### **Parameters**

| Parameter name | Type |
| :--- | :--- |

eth\_submitWork

 

Is implemented : False

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| nonce | System.Byte[] |
| headerPowHash | Nethermind.Core.Crypto.Keccak |
| mixDigest | System.Byte[] |

eth\_submitHashrate

 

Is implemented : False

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| hashRate | System.String |
| id | System.String |

eth\_getProof

https://github.com/ethereum/EIPs/issues/1186 

Is implemented : True

### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| accountAddress | Nethermind.Core.Address |
| hashRate | System.Byte[][] |
| blockParameter | Nethermind.Blockchain.Find.BlockParameter |

