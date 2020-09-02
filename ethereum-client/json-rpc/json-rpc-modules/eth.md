#eth

##eth\_chainId

Returns ChainID 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

_None_
{% endtab %}
{% tab title="Response" %}

#### Return type
`Quantity`

{% endtab %}
##eth\_protocolVersion

Returns ETH protocol version 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

_None_
{% endtab %}
{% tab title="Response" %}

#### Return type
`String`

{% endtab %}
##eth\_syncing

Returns syncing status 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

_None_
{% endtab %}
{% tab title="Response" %}

#### Return type
`SyncingResult object`

{% endtab %}
{% tab title="Object definitions" %}
#### Objects definition

`SyncingResult`
| Fields name | Type |
| :--- | :--- |
| IsSyncing | `Boolean` |
| StartingBlock | `Quantity` |
| CurrentBlock | `Quantity` |
| HighestBlock | `Quantity` |

{% endtab %}
##eth\_blockNumber

Returns current block number 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

_None_
{% endtab %}
{% tab title="Response" %}

#### Return type
`Quantity`

{% endtab %}
##eth\_getBalance

Returns account balance 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| address | `Address` |
| blockParameter | `BlockParameter object` |
{% endtab %}
{% tab title="Response" %}

#### Return type
`Quantity`

{% endtab %}
{% tab title="Object definitions" %}
#### Objects definition

`BlockParameter`
| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

{% endtab %}
##eth\_getStorageAt

Returns storage data at address. storage_index 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| address | `Address` |
| positionIndex | `Quantity` |
| blockParameter | `BlockParameter object` |
{% endtab %}
{% tab title="Response" %}

#### Return type
`Byte object`

{% endtab %}
{% tab title="Object definitions" %}
#### Objects definition

`BlockParameter`
| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`Byte`
| Fields name | Type |
| :--- | :--- |

{% endtab %}
##eth\_getTransactionCount

Returns account nonce (number of trnsactions from the account since genesis) at the given block number 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| address | `Address` |
| blockParameter | `BlockParameter object` |
{% endtab %}
{% tab title="Response" %}

#### Return type
`Quantity`

{% endtab %}
{% tab title="Object definitions" %}
#### Objects definition

`BlockParameter`
| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

{% endtab %}
##eth\_getBlockTransactionCountByHash

Returns number of transactions in the block block hash 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockHash | `Hash` |
{% endtab %}
{% tab title="Response" %}

#### Return type
`Quantity`

{% endtab %}
##eth\_getBlockTransactionCountByNumber

Returns number of transactions in the block by block number 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockParameter | `BlockParameter object` |
{% endtab %}
{% tab title="Response" %}

#### Return type
`Quantity`

{% endtab %}
{% tab title="Object definitions" %}
#### Objects definition

`BlockParameter`
| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

{% endtab %}
##eth\_getUncleCountByBlockHash

Returns number of uncles in the block by block hash 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockHash | `Hash` |
{% endtab %}
{% tab title="Response" %}

#### Return type
`Quantity`

{% endtab %}
##eth\_getUncleCountByBlockNumber

Returns number of uncles in the block by block number 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockParameter | `BlockParameter object` |
{% endtab %}
{% tab title="Response" %}

#### Return type
`Quantity`

{% endtab %}
{% tab title="Object definitions" %}
#### Objects definition

`BlockParameter`
| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

{% endtab %}
##eth\_getCode

Returns account code at given address and block 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| address | `Address` |
| blockParameter | `BlockParameter object` |
{% endtab %}
{% tab title="Response" %}

#### Return type
`Byte object`

{% endtab %}
{% tab title="Object definitions" %}
#### Objects definition

`BlockParameter`
| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`Byte`
| Fields name | Type |
| :--- | :--- |

{% endtab %}
##eth\_sendTransaction

Send a transaction to the tx pool and broadcasting 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| transactionForRpc | `TransactionForRpc object` |
{% endtab %}
{% tab title="Response" %}

#### Return type
`Hash`

{% endtab %}
{% tab title="Object definitions" %}
#### Objects definition

`TransactionForRpc`
| Fields name | Type |
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
| V | `Quantity` |
| S | `Data` |
| R | `Data` |

{% endtab %}
##eth\_sendRawTransaction

Send a raw transaction to the tx pool and broadcasting 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| transaction | `Data` |
{% endtab %}
{% tab title="Response" %}

#### Return type
`Hash`

{% endtab %}
##eth\_call

Executes a tx call (does not create a transaction) 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| transactionCall | `TransactionForRpc object` |
| blockParameter | `BlockParameter object` |
{% endtab %}
{% tab title="Response" %}

#### Return type
`String`

{% endtab %}
{% tab title="Object definitions" %}
#### Objects definition

`TransactionForRpc`
| Fields name | Type |
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
| V | `Quantity` |
| S | `Data` |
| R | `Data` |

`BlockParameter`
| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

{% endtab %}
##eth\_estimateGas

Executes a tx call and returns gas used (does not create a transaction) 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| transactionCall | `TransactionForRpc object` |
| blockParameter | `BlockParameter object` |
{% endtab %}
{% tab title="Response" %}

#### Return type
`Quantity`

{% endtab %}
{% tab title="Object definitions" %}
#### Objects definition

`TransactionForRpc`
| Fields name | Type |
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
| V | `Quantity` |
| S | `Data` |
| R | `Data` |

`BlockParameter`
| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

{% endtab %}
##eth\_getBlockByHash

Retrieves a block by hash 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockHash | `Hash` |
| returnFullTransactionObjects | `Boolean` |
{% endtab %}
{% tab title="Response" %}

#### Return type
`BlockForRpc object`

{% endtab %}
{% tab title="Object definitions" %}
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
| Number | `Quantity` |
| ParentHash | `Hash` |
| ReceiptsRoot | `Hash` |
| Sha3Uncles | `Hash` |
| Signature | `Data` |
| Size | `Quantity` |
| StateRoot | `Hash` |
| Step | `Quantity` |
| TotalDifficulty | `Quantity` |
| Timestamp | `Quantity` |
| Transactions | `IEnumerable`1 object` |
| TransactionsRoot | `Hash` |
| Uncles | `IEnumerable`1 object` |

{% endtab %}
##eth\_getBlockByNumber

Retrieves a block by number 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockParameter | `BlockParameter object` |
| returnFullTransactionObjects | `Boolean` |
{% endtab %}
{% tab title="Response" %}

#### Return type
`BlockForRpc object`

{% endtab %}
{% tab title="Object definitions" %}
#### Objects definition

`BlockParameter`
| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
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
| Number | `Quantity` |
| ParentHash | `Hash` |
| ReceiptsRoot | `Hash` |
| Sha3Uncles | `Hash` |
| Signature | `Data` |
| Size | `Quantity` |
| StateRoot | `Hash` |
| Step | `Quantity` |
| TotalDifficulty | `Quantity` |
| Timestamp | `Quantity` |
| Transactions | `IEnumerable`1 object` |
| TransactionsRoot | `Hash` |
| Uncles | `IEnumerable`1 object` |

{% endtab %}
##eth\_getTransactionByHash

Retrieves a transaction by hash 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| transactionHash | `Hash` |
{% endtab %}
{% tab title="Response" %}

#### Return type
`TransactionForRpc object`

{% endtab %}
{% tab title="Object definitions" %}
#### Objects definition

`TransactionForRpc`
| Fields name | Type |
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
| V | `Quantity` |
| S | `Data` |
| R | `Data` |

{% endtab %}
##eth\_pendingTransactions

Returns the pending transactions list 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

_None_
{% endtab %}
{% tab title="Response" %}

#### Return type
`TransactionForRpc object`

{% endtab %}
{% tab title="Object definitions" %}
#### Objects definition

`TransactionForRpc`
| Fields name | Type |
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
| V | `Quantity` |
| S | `Data` |
| R | `Data` |

{% endtab %}
##eth\_getTransactionByBlockHashAndIndex

Retrieves a transaction by block hash and index 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockHash | `Hash` |
| positionIndex | `Quantity` |
{% endtab %}
{% tab title="Response" %}

#### Return type
`TransactionForRpc object`

{% endtab %}
{% tab title="Object definitions" %}
#### Objects definition

`TransactionForRpc`
| Fields name | Type |
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
| V | `Quantity` |
| S | `Data` |
| R | `Data` |

{% endtab %}
##eth\_getTransactionByBlockNumberAndIndex

Retrieves a transaction by block number and index 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockParameter | `BlockParameter object` |
| positionIndex | `Quantity` |
{% endtab %}
{% tab title="Response" %}

#### Return type
`TransactionForRpc object`

{% endtab %}
{% tab title="Object definitions" %}
#### Objects definition

`BlockParameter`
| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`TransactionForRpc`
| Fields name | Type |
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
| V | `Quantity` |
| S | `Data` |
| R | `Data` |

{% endtab %}
##eth\_getTransactionReceipt

Retrieves a transaction receipt by tx hash 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| txHashData | `Hash` |
{% endtab %}
{% tab title="Response" %}

#### Return type
`ReceiptForRpc object`

{% endtab %}
{% tab title="Object definitions" %}
#### Objects definition

`ReceiptForRpc`
| Fields name | Type |
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
| LogsBloom | `Bloom object` |
| Root | `Hash` |
| Status | `Quantity` |
| Error | `String` |

{% endtab %}
##eth\_getUncleByBlockHashAndIndex

Retrieves an uncle block header by block hash and uncle index 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockHashData | `Hash` |
| positionIndex | `Quantity` |
{% endtab %}
{% tab title="Response" %}

#### Return type
`BlockForRpc object`

{% endtab %}
{% tab title="Object definitions" %}
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
| Number | `Quantity` |
| ParentHash | `Hash` |
| ReceiptsRoot | `Hash` |
| Sha3Uncles | `Hash` |
| Signature | `Data` |
| Size | `Quantity` |
| StateRoot | `Hash` |
| Step | `Quantity` |
| TotalDifficulty | `Quantity` |
| Timestamp | `Quantity` |
| Transactions | `IEnumerable`1 object` |
| TransactionsRoot | `Hash` |
| Uncles | `IEnumerable`1 object` |

{% endtab %}
##eth\_getUncleByBlockNumberAndIndex

Retrieves an uncle block header by block number and uncle index 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockParameter | `BlockParameter object` |
| positionIndex | `Quantity` |
{% endtab %}
{% tab title="Response" %}

#### Return type
`BlockForRpc object`

{% endtab %}
{% tab title="Object definitions" %}
#### Objects definition

`BlockParameter`
| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
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
| Number | `Quantity` |
| ParentHash | `Hash` |
| ReceiptsRoot | `Hash` |
| Sha3Uncles | `Hash` |
| Signature | `Data` |
| Size | `Quantity` |
| StateRoot | `Hash` |
| Step | `Quantity` |
| TotalDifficulty | `Quantity` |
| Timestamp | `Quantity` |
| Transactions | `IEnumerable`1 object` |
| TransactionsRoot | `Hash` |
| Uncles | `IEnumerable`1 object` |

{% endtab %}
##eth\_newFilter

Creates an update filter 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| filter | `Filter object` |
{% endtab %}
{% tab title="Response" %}

#### Return type
`Quantity`

{% endtab %}
{% tab title="Object definitions" %}
#### Objects definition

`Filter`
| Fields name | Type |
| :--- | :--- |
| FromBlock | `BlockParameter object` |
| ToBlock | `BlockParameter object` |
| Address | `Object object` |
| Topics | `IEnumerable`1 object` |

{% endtab %}
##eth\_newBlockFilter

Creates an update filter 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

_None_
{% endtab %}
{% tab title="Response" %}

#### Return type
`Quantity`

{% endtab %}
##eth\_newPendingTransactionFilter

Creates an update filter 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

_None_
{% endtab %}
{% tab title="Response" %}

#### Return type
`Quantity`

{% endtab %}
##eth\_uninstallFilter

Creates an update filter 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| filterId | `Quantity` |
{% endtab %}
{% tab title="Response" %}

#### Return type
`Boolean`

{% endtab %}
##eth\_getFilterChanges

Reads filter changes 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| filterId | `Quantity` |
{% endtab %}
{% tab title="Response" %}

#### Return type
`IEnumerable`1 object`

{% endtab %}
{% tab title="Object definitions" %}
#### Objects definition

`IEnumerable`1`
| Fields name | Type |
| :--- | :--- |

{% endtab %}
##eth\_getFilterLogs

Reads filter changes 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| filterId | `Quantity` |
{% endtab %}
{% tab title="Response" %}

#### Return type
`IEnumerable`1 object`

{% endtab %}
{% tab title="Object definitions" %}
#### Objects definition

`IEnumerable`1`
| Fields name | Type |
| :--- | :--- |

{% endtab %}
##eth\_getLogs

Reads logs 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| filter | `Filter object` |
{% endtab %}
{% tab title="Response" %}

#### Return type
`IEnumerable`1 object`

{% endtab %}
{% tab title="Object definitions" %}
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

{% endtab %}
##eth\_getProof

https://github.com/ethereum/EIPs/issues/1186 

{% tabs %}
{% tab title="Request" %}
#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| accountAddress | `Address` |
| hashRate | `Byte[][] object` |
| blockParameter | `BlockParameter object` |
{% endtab %}
{% tab title="Response" %}

#### Return type
`AccountProof object`

{% endtab %}
{% tab title="Object definitions" %}
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
| BlockNumber | `Quantity` |
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

{% endtab %}
