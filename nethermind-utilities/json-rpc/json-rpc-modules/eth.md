#eth

##eth\_chainId

Returns ChainID 

#### **Parameters**

_None_

Return type: `Quantity`

##eth\_protocolVersion

Returns ETH protocol version 

#### **Parameters**

_None_

Return type: `String`

##eth\_syncing

Returns syncing status 

#### **Parameters**

_None_

Return type: `Object`

##eth\_blockNumber

Returns current block number 

#### **Parameters**

_None_

Return type: `Quantity`

##eth\_getBalance

Returns account balance 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| address | `Object` |
| blockParameter | `Object` |

Return type: `Quantity`

##eth\_getStorageAt

Returns storage data at address. storage_index 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| address | `Object` |
| positionIndex | `Object` |
| blockParameter | `Object` |

Return type: `Data`

##eth\_getTransactionCount

Returns account nonce (number of trnsactions from the account since genesis) at the given block number 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| address | `Object` |
| blockParameter | `Object` |

Return type: `Quantity`

##eth\_getBlockTransactionCountByHash

Returns number of transactions in the block block hash 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockHash | `Object` |

Return type: `Quantity`

##eth\_getBlockTransactionCountByNumber

Returns number of transactions in the block by block number 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockParameter | `Object` |

Return type: `Quantity`

##eth\_getUncleCountByBlockHash

Returns number of uncles in the block by block hash 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockHash | `Object` |

Return type: `Quantity`

##eth\_getUncleCountByBlockNumber

Returns number of uncles in the block by block number 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockParameter | `Object` |

Return type: `Quantity`

##eth\_getCode

Returns account code at given address and block 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| address | `Object` |
| blockParameter | `Object` |

Return type: `Data`

##eth\_sendTransaction

Send a transaction to the tx pool and broadcasting 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| transactionForRpc | `Object` |

Return type: `Data`

##eth\_sendRawTransaction

Send a raw transaction to the tx pool and broadcasting 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| transaction | `Object` |

Return type: `Data`

##eth\_call

Executes a tx call (does not create a transaction) 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| transactionCall | `Object` |
| blockParameter | `Object` |

Return type: `String`

##eth\_estimateGas

Executes a tx call and returns gas used (does not create a transaction) 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| transactionCall | `Object` |
| blockParameter | `Object` |

Return type: `Quantity`

##eth\_getBlockByHash

Retrieves a block by hash 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockHash | `Object` |
| returnFullTransactionObjects | `Object` |

Return type: `Quantity`

##eth\_getBlockByNumber

Retrieves a block by number 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockParameter | `Object` |
| returnFullTransactionObjects | `Object` |

Return type: `Object`

##eth\_getTransactionByHash

Retrieves a transaction by hash 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| transactionHash | `Object` |

Return type: `Object`

##eth\_pendingTransactions

Returns the pending transactions list 

#### **Parameters**

_None_

Return type: `Array`

##eth\_getTransactionByBlockHashAndIndex

Retrieves a transaction by block hash and index 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockHash | `Object` |
| positionIndex | `Object` |

Return type: `Object`

##eth\_getTransactionByBlockNumberAndIndex

Retrieves a transaction by block number and index 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockParameter | `Object` |
| positionIndex | `Object` |

Return type: `Object`

##eth\_getTransactionReceipt

Retrieves a transaction receipt by tx hash 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| txHashData | `Object` |

Return type: `Object`

##eth\_getUncleByBlockHashAndIndex

Retrieves an uncle block header by block hash and uncle index 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockHashData | `Object` |
| positionIndex | `Object` |

Return type: `Object`

##eth\_getUncleByBlockNumberAndIndex

Retrieves an uncle block header by block number and uncle index 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockParameter | `Object` |
| positionIndex | `Object` |

Return type: `Object`

##eth\_newFilter

Creates an update filter 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| filter | `Object` |

Return type: `Quantity`

##eth\_newBlockFilter

Creates an update filter 

#### **Parameters**

_None_

Return type: `Quantity`

##eth\_newPendingTransactionFilter

Creates an update filter 

#### **Parameters**

_None_

Return type: `Quantity`

##eth\_uninstallFilter

Creates an update filter 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| filterId | `Object` |

Return type: `Boolean`

##eth\_getFilterChanges

Reads filter changes 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| filterId | `Object` |

Return type: `Array`

##eth\_getFilterLogs

Reads filter changes 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| filterId | `Object` |

Return type: `Array`

##eth\_getLogs

Reads logs 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| filter | `Object` |

Return type: `Array`

##eth\_getProof

https://github.com/ethereum/EIPs/issues/1186 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| accountAddress | `Object` |
| hashRate | `Object` |
| blockParameter | `Object` |

Return type: `Object`

