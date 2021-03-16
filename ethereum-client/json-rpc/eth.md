# Eth module

## eth\_blockNumber

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

## eth\_call

Executes a tx call \(does not create a transaction\)

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

* `Quantity` or `String` \(latest, earliest, pending\)
{% endtab %}
{% endtabs %}

## eth\_chainId

Returns ChainID

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

## eth\_estimateGas

Executes a tx call and returns gas used \(does not create a transaction\)

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

* `Quantity` or `String` \(latest, earliest, pending\)
{% endtab %}
{% endtabs %}

## eth\_getBalance

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

* `Quantity` or `String` \(latest, earliest, pending\)
{% endtab %}
{% endtabs %}

## eth\_getBlockByHash

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

## eth\_getBlockByNumber

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

* `Quantity` or `String` \(latest, earliest, pending\)

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

## eth\_getBlockTransactionCountByHash

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

## eth\_getBlockTransactionCountByNumber

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

* `Quantity` or `String` \(latest, earliest, pending\)
{% endtab %}
{% endtabs %}

## eth\_getCode

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

* `Quantity` or `String` \(latest, earliest, pending\)
{% endtab %}
{% endtabs %}

## eth\_getFilterChanges

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

## eth\_getFilterLogs

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

## eth\_getLogs

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

## eth\_getProof

[https://github.com/ethereum/EIPs/issues/1186](https://github.com/ethereum/EIPs/issues/1186)

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

* `Quantity` or `String` \(latest, earliest, pending\)

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

## eth\_getStorageAt

Returns storage data at address. storage\_index

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

* `Quantity` or `String` \(latest, earliest, pending\)
{% endtab %}
{% endtabs %}

## eth\_getTransactionByBlockHashAndIndex

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

## eth\_getTransactionByBlockNumberAndIndex

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

* `Quantity` or `String` \(latest, earliest, pending\)

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

## eth\_getTransactionByHash

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

## eth\_getTransactionCount

Returns account nonce \(number of trnsactions from the account since genesis\) at the given block number

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

* `Quantity` or `String` \(latest, earliest, pending\)
{% endtab %}
{% endtabs %}

## eth\_getTransactionReceipt

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

## eth\_getUncleByBlockHashAndIndex

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

## eth\_getUncleByBlockNumberAndIndex

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

* `Quantity` or `String` \(latest, earliest, pending\)

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

## eth\_getUncleCountByBlockHash

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

## eth\_getUncleCountByBlockNumber

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

* `Quantity` or `String` \(latest, earliest, pending\)
{% endtab %}
{% endtabs %}

## eth\_newBlockFilter

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

## eth\_newFilter

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

## eth\_newPendingTransactionFilter

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

## eth\_pendingTransactions

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

## eth\_protocolVersion

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

## eth\_sendRawTransaction

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

## eth\_sendTransaction

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

## eth\_syncing

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

## eth\_uninstallFilter

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

