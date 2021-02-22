# Eth

## eth_blockNumber

Returns current block number 

{% tabs %}
{% tab title="Request" %}
### **Parameters**

_None_
{% endtab %}

{% tab title="Response" %}
### Return type

`Quantity`
{% endtab %}
{% endtabs %}

## eth_call

Executes a tx call (does not create a transaction) 

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| transactionCall | `TransactionForRpc object` |
| blockParameter | `BlockParameter object` |
{% endtab %}

{% tab title="Response" %}
### Return type

`String`
{% endtab %}

{% tab title="Object definitions" %}
### Objects definition

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
| S | `Quantity` |
| R | `Quantity` |

`BlockParameter`

| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

- `Quantity` or `String` (latest, earliest, pending)

{% endtab %}
{% endtabs %}

## eth_chainId

Returns ChainID 

{% tabs %}
{% tab title="Request" %}
### **Parameters**

_None_
{% endtab %}

{% tab title="Response" %}
### Return type

`UInt64 object`
{% endtab %}

{% tab title="Object definitions" %}
### Objects definition

`UInt64`

| Fields name | Type |
| :--- | :--- |
{% endtab %}
{% endtabs %}

## eth_estimateGas

Executes a tx call and returns gas used (does not create a transaction) 

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| transactionCall | `TransactionForRpc object` |
| blockParameter | `BlockParameter object` |
{% endtab %}

{% tab title="Response" %}
### Return type

`Quantity`
{% endtab %}

{% tab title="Object definitions" %}
### Objects definition

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
| S | `Quantity` |
| R | `Quantity` |

`BlockParameter`

| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

- `Quantity` or `String` (latest, earliest, pending)

{% endtab %}
{% endtabs %}

## eth_getBalance

Returns account balance 

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| address | `Address` |
| blockParameter | `BlockParameter object` |
{% endtab %}

{% tab title="Response" %}
### Return type

`Quantity`
{% endtab %}

{% tab title="Object definitions" %}
### Objects definition

`BlockParameter`

| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

- `Quantity` or `String` (latest, earliest, pending)

{% endtab %}
{% endtabs %}

## eth_getBlockByHash

Retrieves a block by hash 

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockHash | `Hash` |
| returnFullTransactionObjects | `Boolean` |
{% endtab %}

{% tab title="Response" %}
### Return type

`BlockForRpc object`
{% endtab %}

{% tab title="Object definitions" %}
### Objects definition

`BlockForRpc`

| Fields name | Type |
| :--- | :--- |
| Author | `Address` |
| Difficulty | `Quantity` |
| ExtraData | `Data` |
| GasLimit | `Quantity` |
| GasUsed | `Quantity` |
| Hash | `Hash` |
| LogsBloom | `Bloom Object` |
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
| Transactions | `Array` |
| TransactionsRoot | `Hash` |
| Uncles | `Array` |
{% endtab %}
{% endtabs %}

## eth_getBlockByNumber

Retrieves a block by number 

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockParameter | `BlockParameter object` |
| returnFullTransactionObjects | `Boolean` |
{% endtab %}

{% tab title="Response" %}
### Return type

`BlockForRpc object`
{% endtab %}

{% tab title="Object definitions" %}
### Objects definition

`BlockParameter`

| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

- `Quantity` or `String` (latest, earliest, pending)


`BlockForRpc`

| Fields name | Type |
| :--- | :--- |
| Author | `Address` |
| Difficulty | `Quantity` |
| ExtraData | `Data` |
| GasLimit | `Quantity` |
| GasUsed | `Quantity` |
| Hash | `Hash` |
| LogsBloom | `Bloom Object` |
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
| Transactions | `Array` |
| TransactionsRoot | `Hash` |
| Uncles | `Array` |
{% endtab %}
{% endtabs %}

## eth_getBlockTransactionCountByHash

Returns number of transactions in the block block hash 

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockHash | `Hash` |
{% endtab %}

{% tab title="Response" %}
### Return type

`Quantity`
{% endtab %}
{% endtabs %}

## eth_getBlockTransactionCountByNumber

Returns number of transactions in the block by block number 

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockParameter | `BlockParameter object` |
{% endtab %}

{% tab title="Response" %}
### Return type

`Quantity`
{% endtab %}

{% tab title="Object definitions" %}
### Objects definition

`BlockParameter`

| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

- `Quantity` or `String` (latest, earliest, pending)

{% endtab %}
{% endtabs %}

## eth_getCode

Returns account code at given address and block 

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| address | `Address` |
| blockParameter | `BlockParameter object` |
{% endtab %}

{% tab title="Response" %}
### Return type

`Data`
{% endtab %}

{% tab title="Object definitions" %}
### Objects definition

`BlockParameter`

| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

- `Quantity` or `String` (latest, earliest, pending)

{% endtab %}
{% endtabs %}

## eth_getFilterChanges

Reads filter changes 

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| filterId | `Quantity` |
{% endtab %}

{% tab title="Response" %}
### Return type

`Array`
{% endtab %}
{% endtabs %}

## eth_getFilterLogs

Reads filter changes 

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| filterId | `Quantity` |
{% endtab %}

{% tab title="Response" %}
### Return type

`Array`
{% endtab %}
{% endtabs %}

## eth_getLogs

Reads logs 

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| filter | `Filter object` |
{% endtab %}

{% tab title="Response" %}
### Return type

`Array`
{% endtab %}

{% tab title="Object definitions" %}
### Objects definition

`Filter`

| Fields name | Type |
| :--- | :--- |
| FromBlock | `BlockParameter object` |
| ToBlock | `BlockParameter object` |
| Address | `Object` |
| Topics | `Array` |

`BlockParameter`

| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |
{% endtab %}
{% endtabs %}

## eth_getProof

https://github.com/ethereum/EIPs/issues/1186 

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| accountAddress | `Address` |
| hashRate | `Data` |
| blockParameter | `BlockParameter object` |
{% endtab %}

{% tab title="Response" %}
### Return type

`AccountProof object`
{% endtab %}

{% tab title="Object definitions" %}
### Objects definition

`BlockParameter`

| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

- `Quantity` or `String` (latest, earliest, pending)


`AccountProof`

| Fields name | Type |
| :--- | :--- |
| Address | `Address` |
| Proof | `Data` |
| Balance | `Quantity` |
| CodeHash | `Hash` |
| Nonce | `Quantity` |
| StorageRoot | `Hash` |
| StorageProofs | `StorageProof[] object` |

`StorageProof[]`

| Fields name | Type |
| :--- | :--- |
| Length | `Quantity` |
| LongLength | `Quantity` |
| Rank | `Quantity` |
| SyncRoot | `Object` |
| IsReadOnly | `Boolean` |
| IsFixedSize | `Boolean` |
| IsSynchronized | `Boolean` |
{% endtab %}
{% endtabs %}

## eth_getStorageAt

Returns storage data at address. storage_index 

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| address | `Address` |
| positionIndex | `Quantity` |
| blockParameter | `BlockParameter object` |
{% endtab %}

{% tab title="Response" %}
### Return type

`Data`
{% endtab %}

{% tab title="Object definitions" %}
### Objects definition

`BlockParameter`

| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

- `Quantity` or `String` (latest, earliest, pending)

{% endtab %}
{% endtabs %}

## eth_getTransactionByBlockHashAndIndex

Retrieves a transaction by block hash and index 

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockHash | `Hash` |
| positionIndex | `Quantity` |
{% endtab %}

{% tab title="Response" %}
### Return type

`TransactionForRpc object`
{% endtab %}

{% tab title="Object definitions" %}
### Objects definition

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
| S | `Quantity` |
| R | `Quantity` |
{% endtab %}
{% endtabs %}

## eth_getTransactionByBlockNumberAndIndex

Retrieves a transaction by block number and index 

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockParameter | `BlockParameter object` |
| positionIndex | `Quantity` |
{% endtab %}

{% tab title="Response" %}
### Return type

`TransactionForRpc object`
{% endtab %}

{% tab title="Object definitions" %}
### Objects definition

`BlockParameter`

| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

- `Quantity` or `String` (latest, earliest, pending)


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
| S | `Quantity` |
| R | `Quantity` |
{% endtab %}
{% endtabs %}

## eth_getTransactionByHash

Retrieves a transaction by hash 

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| transactionHash | `Hash` |
{% endtab %}

{% tab title="Response" %}
### Return type

`TransactionForRpc object`
{% endtab %}

{% tab title="Object definitions" %}
### Objects definition

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
| S | `Quantity` |
| R | `Quantity` |
{% endtab %}
{% endtabs %}

## eth_getTransactionCount

Returns account nonce (number of trnsactions from the account since genesis) at the given block number 

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| address | `Address` |
| blockParameter | `BlockParameter object` |
{% endtab %}

{% tab title="Response" %}
### Return type

`Quantity`
{% endtab %}

{% tab title="Object definitions" %}
### Objects definition

`BlockParameter`

| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

- `Quantity` or `String` (latest, earliest, pending)

{% endtab %}
{% endtabs %}

## eth_getTransactionReceipt

Retrieves a transaction receipt by tx hash 

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| txHashData | `Hash` |
{% endtab %}

{% tab title="Response" %}
### Return type

`ReceiptForRpc object`
{% endtab %}

{% tab title="Object definitions" %}
### Objects definition

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
| LogsBloom | `Bloom Object` |
| Root | `Hash` |
| Status | `Quantity` |
| Error | `String` |

`LogEntryForRpc[]`

| Fields name | Type |
| :--- | :--- |
| Length | `Quantity` |
| LongLength | `Quantity` |
| Rank | `Quantity` |
| SyncRoot | `Object` |
| IsReadOnly | `Boolean` |
| IsFixedSize | `Boolean` |
| IsSynchronized | `Boolean` |
{% endtab %}
{% endtabs %}

## eth_getUncleByBlockHashAndIndex

Retrieves an uncle block header by block hash and uncle index 

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockHashData | `Hash` |
| positionIndex | `Quantity` |
{% endtab %}

{% tab title="Response" %}
### Return type

`BlockForRpc object`
{% endtab %}

{% tab title="Object definitions" %}
### Objects definition

`BlockForRpc`

| Fields name | Type |
| :--- | :--- |
| Author | `Address` |
| Difficulty | `Quantity` |
| ExtraData | `Data` |
| GasLimit | `Quantity` |
| GasUsed | `Quantity` |
| Hash | `Hash` |
| LogsBloom | `Bloom Object` |
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
| Transactions | `Array` |
| TransactionsRoot | `Hash` |
| Uncles | `Array` |
{% endtab %}
{% endtabs %}

## eth_getUncleByBlockNumberAndIndex

Retrieves an uncle block header by block number and uncle index 

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockParameter | `BlockParameter object` |
| positionIndex | `Quantity` |
{% endtab %}

{% tab title="Response" %}
### Return type

`BlockForRpc object`
{% endtab %}

{% tab title="Object definitions" %}
### Objects definition

`BlockParameter`

| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

- `Quantity` or `String` (latest, earliest, pending)


`BlockForRpc`

| Fields name | Type |
| :--- | :--- |
| Author | `Address` |
| Difficulty | `Quantity` |
| ExtraData | `Data` |
| GasLimit | `Quantity` |
| GasUsed | `Quantity` |
| Hash | `Hash` |
| LogsBloom | `Bloom Object` |
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
| Transactions | `Array` |
| TransactionsRoot | `Hash` |
| Uncles | `Array` |
{% endtab %}
{% endtabs %}

## eth_getUncleCountByBlockHash

Returns number of uncles in the block by block hash 

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockHash | `Hash` |
{% endtab %}

{% tab title="Response" %}
### Return type

`Quantity`
{% endtab %}
{% endtabs %}

## eth_getUncleCountByBlockNumber

Returns number of uncles in the block by block number 

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockParameter | `BlockParameter object` |
{% endtab %}

{% tab title="Response" %}
### Return type

`Quantity`
{% endtab %}

{% tab title="Object definitions" %}
### Objects definition

`BlockParameter`

| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

- `Quantity` or `String` (latest, earliest, pending)

{% endtab %}
{% endtabs %}

## eth_newBlockFilter

Creates an update filter 

{% tabs %}
{% tab title="Request" %}
### **Parameters**

_None_
{% endtab %}

{% tab title="Response" %}
### Return type

`Quantity`
{% endtab %}
{% endtabs %}

## eth_newFilter

Creates an update filter 

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| filter | `Filter object` |
{% endtab %}

{% tab title="Response" %}
### Return type

`Quantity`
{% endtab %}

{% tab title="Object definitions" %}
### Objects definition

`Filter`

| Fields name | Type |
| :--- | :--- |
| FromBlock | `BlockParameter object` |
| ToBlock | `BlockParameter object` |
| Address | `Object` |
| Topics | `Array` |

`BlockParameter`

| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |
{% endtab %}
{% endtabs %}

## eth_newPendingTransactionFilter

Creates an update filter 

{% tabs %}
{% tab title="Request" %}
### **Parameters**

_None_
{% endtab %}

{% tab title="Response" %}
### Return type

`Quantity`
{% endtab %}
{% endtabs %}

## eth_pendingTransactions

Returns the pending transactions list 

{% tabs %}
{% tab title="Request" %}
### **Parameters**

_None_
{% endtab %}

{% tab title="Response" %}
### Return type

`TransactionForRpc object`
{% endtab %}

{% tab title="Object definitions" %}
### Objects definition

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
| S | `Quantity` |
| R | `Quantity` |
{% endtab %}
{% endtabs %}

## eth_protocolVersion

Returns ETH protocol version 

{% tabs %}
{% tab title="Request" %}
### **Parameters**

_None_
{% endtab %}

{% tab title="Response" %}
### Return type

`String`
{% endtab %}
{% endtabs %}

## eth_sendRawTransaction

Send a raw transaction to the tx pool and broadcasting 

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| transaction | `Data` |
{% endtab %}

{% tab title="Response" %}
### Return type

`Hash`
{% endtab %}
{% endtabs %}

## eth_sendTransaction

Send a transaction to the tx pool and broadcasting 

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| rpcTx | `TransactionForRpc object` |
{% endtab %}

{% tab title="Response" %}
### Return type

`Hash`
{% endtab %}

{% tab title="Object definitions" %}
### Objects definition

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
| S | `Quantity` |
| R | `Quantity` |
{% endtab %}
{% endtabs %}

## eth_syncing

Returns syncing status 

{% tabs %}
{% tab title="Request" %}
### **Parameters**

_None_
{% endtab %}

{% tab title="Response" %}
### Return type

`SyncingResult object`
{% endtab %}

{% tab title="Object definitions" %}
### Objects definition

`SyncingResult`

| Fields name | Type |
| :--- | :--- |
| IsSyncing | `Boolean` |
| StartingBlock | `Quantity` |
| CurrentBlock | `Quantity` |
| HighestBlock | `Quantity` |
{% endtab %}
{% endtabs %}

## eth_uninstallFilter

Creates an update filter 

{% tabs %}
{% tab title="Request" %}
### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| filterId | `Quantity` |
{% endtab %}

{% tab title="Response" %}
### Return type

`Boolean`
{% endtab %}
{% endtabs %}

