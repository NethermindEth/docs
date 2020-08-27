#eth

##eth\_chainId

Returns ChainID 

#### **Parameters**

_None_

#### Return type
`Quantity`

##eth\_protocolVersion

Returns ETH protocol version 

#### **Parameters**

_None_

#### Return type
`String`

##eth\_syncing

Returns syncing status 

#### **Parameters**

_None_

#### Return type
`SyncingResult object`

#### Objects definition

`SyncingResult`
| Fields name | Type |
| :--- | :--- |
| IsSyncing | `Boolean` |
| StartingBlock | `Quantity` |
| CurrentBlock | `Quantity` |
| HighestBlock | `Quantity` |

##eth\_blockNumber

Returns current block number 

#### **Parameters**

_None_

#### Return type
`ResultWrapper`1 object`

#### Objects definition

`ResultWrapper`1`
| Fields name | Type |
| :--- | :--- |
| Data | `Nullable`1 object` |
| Result | `Result object` |
| ErrorCode | `Quantity` |

##eth\_getBalance

Returns account balance 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| address | `Address` |
| blockParameter | `BlockParameter object` |

#### Return type
`ResultWrapper`1 object`

#### Objects definition

`BlockParameter`
| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Nullable`1 object` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`ResultWrapper`1`
| Fields name | Type |
| :--- | :--- |
| Data | `Nullable`1 object` |
| Result | `Result object` |
| ErrorCode | `Quantity` |

##eth\_getStorageAt

Returns storage data at address. storage_index 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| address | `Address` |
| positionIndex | `Quantity` |
| blockParameter | `BlockParameter object` |

#### Return type
`Data`

#### Objects definition

`BlockParameter`
| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Nullable`1 object` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

##eth\_getTransactionCount

Returns account nonce (number of trnsactions from the account since genesis) at the given block number 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| address | `Address` |
| blockParameter | `BlockParameter object` |

#### Return type
`ResultWrapper`1 object`

#### Objects definition

`BlockParameter`
| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Nullable`1 object` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`ResultWrapper`1`
| Fields name | Type |
| :--- | :--- |
| Data | `Nullable`1 object` |
| Result | `Result object` |
| ErrorCode | `Quantity` |

##eth\_getBlockTransactionCountByHash

Returns number of transactions in the block block hash 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockHash | `Hash` |

#### Return type
`Nullable`1 object`

#### Objects definition

`Nullable`1`
| Fields name | Type |
| :--- | :--- |
| HasValue | `Boolean` |
| Value | `Quantity` |

##eth\_getBlockTransactionCountByNumber

Returns number of transactions in the block by block number 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockParameter | `BlockParameter object` |

#### Return type
`Nullable`1 object`

#### Objects definition

`BlockParameter`
| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Nullable`1 object` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`Nullable`1`
| Fields name | Type |
| :--- | :--- |
| HasValue | `Boolean` |
| Value | `Quantity` |

##eth\_getUncleCountByBlockHash

Returns number of uncles in the block by block hash 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockHash | `Hash` |

#### Return type
`Nullable`1 object`

#### Objects definition

`Nullable`1`
| Fields name | Type |
| :--- | :--- |
| HasValue | `Boolean` |
| Value | `Quantity` |

##eth\_getUncleCountByBlockNumber

Returns number of uncles in the block by block number 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockParameter | `BlockParameter object` |

#### Return type
`Nullable`1 object`

#### Objects definition

`BlockParameter`
| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Nullable`1 object` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`Nullable`1`
| Fields name | Type |
| :--- | :--- |
| HasValue | `Boolean` |
| Value | `Quantity` |

##eth\_getCode

Returns account code at given address and block 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| address | `Address` |
| blockParameter | `BlockParameter object` |

#### Return type
`Data`

#### Objects definition

`BlockParameter`
| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Nullable`1 object` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

##eth\_sendTransaction

Send a transaction to the tx pool and broadcasting 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| transactionForRpc | `TransactionForRpc object` |

#### Return type
`ResultWrapper`1 object`

#### Objects definition

`TransactionForRpc`
| Fields name | Type |
| :--- | :--- |
| Hash | `Hash` |
| Nonce | `Nullable`1 object` |
| BlockHash | `Hash` |
| BlockNumber | `Nullable`1 object` |
| TransactionIndex | `Nullable`1 object` |
| From | `Address` |
| To | `Address` |
| Value | `Nullable`1 object` |
| GasPrice | `Nullable`1 object` |
| Gas | `Nullable`1 object` |
| Data | `Data` |
| Input | `Data` |
| V | `Nullable`1 object` |
| S | `Data` |
| R | `Data` |

`ResultWrapper`1`
| Fields name | Type |
| :--- | :--- |
| Data | `Hash` |
| Result | `Result object` |
| ErrorCode | `Quantity` |

##eth\_sendRawTransaction

Send a raw transaction to the tx pool and broadcasting 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| transaction | `Data` |

#### Return type
`ResultWrapper`1 object`

#### Objects definition

`ResultWrapper`1`
| Fields name | Type |
| :--- | :--- |
| Data | `Hash` |
| Result | `Result object` |
| ErrorCode | `Quantity` |

##eth\_call

Executes a tx call (does not create a transaction) 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| transactionCall | `TransactionForRpc object` |
| blockParameter | `BlockParameter object` |

#### Return type
`String`

#### Objects definition

`TransactionForRpc`
| Fields name | Type |
| :--- | :--- |
| Hash | `Hash` |
| Nonce | `Nullable`1 object` |
| BlockHash | `Hash` |
| BlockNumber | `Nullable`1 object` |
| TransactionIndex | `Nullable`1 object` |
| From | `Address` |
| To | `Address` |
| Value | `Nullable`1 object` |
| GasPrice | `Nullable`1 object` |
| Gas | `Nullable`1 object` |
| Data | `Data` |
| Input | `Data` |
| V | `Nullable`1 object` |
| S | `Data` |
| R | `Data` |

`BlockParameter`
| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Nullable`1 object` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

##eth\_estimateGas

Executes a tx call and returns gas used (does not create a transaction) 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| transactionCall | `TransactionForRpc object` |
| blockParameter | `BlockParameter object` |

#### Return type
`Nullable`1 object`

#### Objects definition

`TransactionForRpc`
| Fields name | Type |
| :--- | :--- |
| Hash | `Hash` |
| Nonce | `Nullable`1 object` |
| BlockHash | `Hash` |
| BlockNumber | `Nullable`1 object` |
| TransactionIndex | `Nullable`1 object` |
| From | `Address` |
| To | `Address` |
| Value | `Nullable`1 object` |
| GasPrice | `Nullable`1 object` |
| Gas | `Nullable`1 object` |
| Data | `Data` |
| Input | `Data` |
| V | `Nullable`1 object` |
| S | `Data` |
| R | `Data` |

`BlockParameter`
| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Nullable`1 object` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`Nullable`1`
| Fields name | Type |
| :--- | :--- |
| HasValue | `Boolean` |
| Value | `Quantity` |

##eth\_getBlockByHash

Retrieves a block by hash 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockHash | `Hash` |
| returnFullTransactionObjects | `Boolean` |

#### Return type
`BlockForRpc object`

#### Objects definition

`BlockForRpc`
| Fields name | Type |
| :--- | :--- |
| Author | `Address` |
| Difficulty | `Quantity` |
| ExtraData | `Data` |
| GasLimit | `Quantity` |
| GasUsed | `Quantity` |
| Hash | `Hash` |
| LogsBloom | `Bloom object` |
| Miner | `Address` |
| MixHash | `Hash` |
| Nonce | `Data` |
| Number | `Nullable`1 object` |
| ParentHash | `Hash` |
| ReceiptsRoot | `Hash` |
| Sha3Uncles | `Hash` |
| Signature | `Data` |
| Size | `Quantity` |
| StateRoot | `Hash` |
| Step | `Nullable`1 object` |
| TotalDifficulty | `Quantity` |
| Timestamp | `Quantity` |
| Transactions | `IEnumerable`1 object` |
| TransactionsRoot | `Hash` |
| Uncles | `IEnumerable`1 object` |

##eth\_getBlockByNumber

Retrieves a block by number 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockParameter | `BlockParameter object` |
| returnFullTransactionObjects | `Boolean` |

#### Return type
`BlockForRpc object`

#### Objects definition

`BlockParameter`
| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Nullable`1 object` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockForRpc`
| Fields name | Type |
| :--- | :--- |
| Author | `Address` |
| Difficulty | `Quantity` |
| ExtraData | `Data` |
| GasLimit | `Quantity` |
| GasUsed | `Quantity` |
| Hash | `Hash` |
| LogsBloom | `Bloom object` |
| Miner | `Address` |
| MixHash | `Hash` |
| Nonce | `Data` |
| Number | `Nullable`1 object` |
| ParentHash | `Hash` |
| ReceiptsRoot | `Hash` |
| Sha3Uncles | `Hash` |
| Signature | `Data` |
| Size | `Quantity` |
| StateRoot | `Hash` |
| Step | `Nullable`1 object` |
| TotalDifficulty | `Quantity` |
| Timestamp | `Quantity` |
| Transactions | `IEnumerable`1 object` |
| TransactionsRoot | `Hash` |
| Uncles | `IEnumerable`1 object` |

##eth\_getTransactionByHash

Retrieves a transaction by hash 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| transactionHash | `Hash` |

#### Return type
`TransactionForRpc object`

#### Objects definition

`TransactionForRpc`
| Fields name | Type |
| :--- | :--- |
| Hash | `Hash` |
| Nonce | `Nullable`1 object` |
| BlockHash | `Hash` |
| BlockNumber | `Nullable`1 object` |
| TransactionIndex | `Nullable`1 object` |
| From | `Address` |
| To | `Address` |
| Value | `Nullable`1 object` |
| GasPrice | `Nullable`1 object` |
| Gas | `Nullable`1 object` |
| Data | `Data` |
| Input | `Data` |
| V | `Nullable`1 object` |
| S | `Data` |
| R | `Data` |

##eth\_pendingTransactions

Returns the pending transactions list 

#### **Parameters**

_None_

#### Return type
`TransactionForRpc[] object`

#### Objects definition

`TransactionForRpc[]`
| Fields name | Type |
| :--- | :--- |
| Length | `Quantity` |
| LongLength | `Quantity` |
| Rank | `Quantity` |
| SyncRoot | `Object object` |
| IsReadOnly | `Boolean` |
| IsFixedSize | `Boolean` |
| IsSynchronized | `Boolean` |

##eth\_getTransactionByBlockHashAndIndex

Retrieves a transaction by block hash and index 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockHash | `Hash` |
| positionIndex | `Quantity` |

#### Return type
`TransactionForRpc object`

#### Objects definition

`TransactionForRpc`
| Fields name | Type |
| :--- | :--- |
| Hash | `Hash` |
| Nonce | `Nullable`1 object` |
| BlockHash | `Hash` |
| BlockNumber | `Nullable`1 object` |
| TransactionIndex | `Nullable`1 object` |
| From | `Address` |
| To | `Address` |
| Value | `Nullable`1 object` |
| GasPrice | `Nullable`1 object` |
| Gas | `Nullable`1 object` |
| Data | `Data` |
| Input | `Data` |
| V | `Nullable`1 object` |
| S | `Data` |
| R | `Data` |

##eth\_getTransactionByBlockNumberAndIndex

Retrieves a transaction by block number and index 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockParameter | `BlockParameter object` |
| positionIndex | `Quantity` |

#### Return type
`TransactionForRpc object`

#### Objects definition

`BlockParameter`
| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Nullable`1 object` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`TransactionForRpc`
| Fields name | Type |
| :--- | :--- |
| Hash | `Hash` |
| Nonce | `Nullable`1 object` |
| BlockHash | `Hash` |
| BlockNumber | `Nullable`1 object` |
| TransactionIndex | `Nullable`1 object` |
| From | `Address` |
| To | `Address` |
| Value | `Nullable`1 object` |
| GasPrice | `Nullable`1 object` |
| Gas | `Nullable`1 object` |
| Data | `Data` |
| Input | `Data` |
| V | `Nullable`1 object` |
| S | `Data` |
| R | `Data` |

##eth\_getTransactionReceipt

Retrieves a transaction receipt by tx hash 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| txHashData | `Hash` |

#### Return type
`ResultWrapper`1 object`

#### Objects definition

`ResultWrapper`1`
| Fields name | Type |
| :--- | :--- |
| Data | `ReceiptForRpc object` |
| Result | `Result object` |
| ErrorCode | `Quantity` |

##eth\_getUncleByBlockHashAndIndex

Retrieves an uncle block header by block hash and uncle index 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockHashData | `Hash` |
| positionIndex | `Quantity` |

#### Return type
`BlockForRpc object`

#### Objects definition

`BlockForRpc`
| Fields name | Type |
| :--- | :--- |
| Author | `Address` |
| Difficulty | `Quantity` |
| ExtraData | `Data` |
| GasLimit | `Quantity` |
| GasUsed | `Quantity` |
| Hash | `Hash` |
| LogsBloom | `Bloom object` |
| Miner | `Address` |
| MixHash | `Hash` |
| Nonce | `Data` |
| Number | `Nullable`1 object` |
| ParentHash | `Hash` |
| ReceiptsRoot | `Hash` |
| Sha3Uncles | `Hash` |
| Signature | `Data` |
| Size | `Quantity` |
| StateRoot | `Hash` |
| Step | `Nullable`1 object` |
| TotalDifficulty | `Quantity` |
| Timestamp | `Quantity` |
| Transactions | `IEnumerable`1 object` |
| TransactionsRoot | `Hash` |
| Uncles | `IEnumerable`1 object` |

##eth\_getUncleByBlockNumberAndIndex

Retrieves an uncle block header by block number and uncle index 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockParameter | `BlockParameter object` |
| positionIndex | `Quantity` |

#### Return type
`BlockForRpc object`

#### Objects definition

`BlockParameter`
| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Nullable`1 object` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockForRpc`
| Fields name | Type |
| :--- | :--- |
| Author | `Address` |
| Difficulty | `Quantity` |
| ExtraData | `Data` |
| GasLimit | `Quantity` |
| GasUsed | `Quantity` |
| Hash | `Hash` |
| LogsBloom | `Bloom object` |
| Miner | `Address` |
| MixHash | `Hash` |
| Nonce | `Data` |
| Number | `Nullable`1 object` |
| ParentHash | `Hash` |
| ReceiptsRoot | `Hash` |
| Sha3Uncles | `Hash` |
| Signature | `Data` |
| Size | `Quantity` |
| StateRoot | `Hash` |
| Step | `Nullable`1 object` |
| TotalDifficulty | `Quantity` |
| Timestamp | `Quantity` |
| Transactions | `IEnumerable`1 object` |
| TransactionsRoot | `Hash` |
| Uncles | `IEnumerable`1 object` |

##eth\_newFilter

Creates an update filter 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| filter | `Filter object` |

#### Return type
`Nullable`1 object`

#### Objects definition

`Filter`
| Fields name | Type |
| :--- | :--- |
| FromBlock | `BlockParameter object` |
| ToBlock | `BlockParameter object` |
| Address | `Object object` |
| Topics | `IEnumerable`1 object` |

`Nullable`1`
| Fields name | Type |
| :--- | :--- |
| HasValue | `Boolean` |
| Value | `Quantity` |

##eth\_newBlockFilter

Creates an update filter 

#### **Parameters**

_None_

#### Return type
`Nullable`1 object`

#### Objects definition

`Nullable`1`
| Fields name | Type |
| :--- | :--- |
| HasValue | `Boolean` |
| Value | `Quantity` |

##eth\_newPendingTransactionFilter

Creates an update filter 

#### **Parameters**

_None_

#### Return type
`Nullable`1 object`

#### Objects definition

`Nullable`1`
| Fields name | Type |
| :--- | :--- |
| HasValue | `Boolean` |
| Value | `Quantity` |

##eth\_uninstallFilter

Creates an update filter 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| filterId | `Quantity` |

#### Return type
`Nullable`1 object`

#### Objects definition

`Nullable`1`
| Fields name | Type |
| :--- | :--- |
| HasValue | `Boolean` |
| Value | `Boolean` |

##eth\_getFilterChanges

Reads filter changes 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| filterId | `Quantity` |

#### Return type
`IEnumerable`1 object`

#### Objects definition

`IEnumerable`1`
| Fields name | Type |
| :--- | :--- |

##eth\_getFilterLogs

Reads filter changes 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| filterId | `Quantity` |

#### Return type
`IEnumerable`1 object`

#### Objects definition

`IEnumerable`1`
| Fields name | Type |
| :--- | :--- |

##eth\_getLogs

Reads logs 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| filter | `Filter object` |

#### Return type
`IEnumerable`1 object`

#### Objects definition

`Filter`
| Fields name | Type |
| :--- | :--- |
| FromBlock | `BlockParameter object` |
| ToBlock | `BlockParameter object` |
| Address | `Object object` |
| Topics | `IEnumerable`1 object` |

`IEnumerable`1`
| Fields name | Type |
| :--- | :--- |

##eth\_getProof

https://github.com/ethereum/EIPs/issues/1186 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| accountAddress | `Address` |
| hashRate | `Byte[][] object` |
| blockParameter | `BlockParameter object` |

#### Return type
`AccountProof object`

#### Objects definition

`Byte[][]`
| Fields name | Type |
| :--- | :--- |
| Length | `Quantity` |
| LongLength | `Quantity` |
| Rank | `Quantity` |
| SyncRoot | `Object object` |
| IsReadOnly | `Boolean` |
| IsFixedSize | `Boolean` |
| IsSynchronized | `Boolean` |

`BlockParameter`
| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Nullable`1 object` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`AccountProof`
| Fields name | Type |
| :--- | :--- |
| Address | `Address` |
| Proof | `Byte[][] object` |
| Balance | `Quantity` |
| CodeHash | `Hash` |
| Nonce | `Quantity` |
| StorageRoot | `Hash` |
| StorageProofs | `StorageProof[] object` |

