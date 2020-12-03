# Eth

## eth\_chainId

返回 ChainID

{% tabs %}
{% tab title="Request" %}
### **参数**

_无_
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`Quantity`
{% endtab %}
{% endtabs %}

## eth\_protocolVersion

返回以太坊协议版本

{% tabs %}
{% tab title="Request" %}
### **参数**

_无_
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`String`
{% endtab %}
{% endtabs %}

## eth\_syncing

返回同步状态

{% tabs %}
{% tab title="Request" %}
### **参数**

_无_
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`SyncingResult object`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`SyncingResult`

| 字段名称 | 类型 |
| :--- | :--- |
| IsSyncing | `Boolean` |
| StartingBlock | `Quantity` |
| CurrentBlock | `Quantity` |
| HighestBlock | `Quantity` |
{% endtab %}
{% endtabs %}

## eth\_blockNumber

返回当前区块编号

{% tabs %}
{% tab title="Request" %}
### **参数**

_无_
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`Quantity`
{% endtab %}
{% endtabs %}

## eth\_getBalance

返回账户余额

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| address | `Address` |
| blockParameter | `BlockParameter object` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`Quantity`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`BlockParameter`

| **字段名称** | 类型 |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType` `Quantity` 或 `String`（最新、最早、待处理）
{% endtab %}
{% endtabs %}

## eth\_getStorageAt

返回 address. storage\_index 处的存储数据

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| address | `Address` |
| positionIndex | `Quantity` |
| blockParameter | `BlockParameter object` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`Data`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`BlockParameter`

| 字段名称 | 类型 |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType` `Quantity` 或 `String`（最新、最早、待处理）
{% endtab %}
{% endtabs %}

## eth\_getTransactionCount

返回某个帐户在指定区块编号处的 nonce（该账户自创世块以来的交易总量）

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| address | `Address` |
| blockParameter | `BlockParameter object` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`Quantity`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`BlockParameter`

| 字段名称 | 类型 |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType` `Quantity` 或 `String`（最新、最早、待处理）
{% endtab %}
{% endtabs %}

## eth\_getBlockTransactionCountByHash

根据区块哈希返回对应区块中交易的数量

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| blockHash | `Hash` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`Quantity`
{% endtab %}
{% endtabs %}

## eth\_getBlockTransactionCountByNumber

根据区块编号返回对应区块中交易的数量

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| blockParameter | `BlockParameter object` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`Quantity`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`BlockParameter`

| 字段名称 | 类型 |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType` `Quantity` 或 `String`（最新、最早、待处理）
{% endtab %}
{% endtabs %}

## eth\_getUncleCountByBlockHash

根据区块哈希返回对应区块的叔块数量

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| blockHash | `Hash` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`Quantity`
{% endtab %}
{% endtabs %}

## eth\_getUncleCountByBlockNumber

根据区块编号返回对应区块的叔块数量

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| blockParameter | `BlockParameter object` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`Quantity`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`BlockParameter`

| 字段名称 | 类型 |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType` `Quantity` 或 `String`（最新、最早、待处理）
{% endtab %}
{% endtabs %}

## eth\_getCode

返回指定地址和指定区块处的帐户代码

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| address | `Address` |
| blockParameter | `BlockParameter object` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`Data`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`BlockParameter`

| 字段名称 | 类型 |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType` `Quantity` 或 `String`（最新、最早、待处理）
{% endtab %}
{% endtabs %}

## eth\_sendTransaction

向交易池发送一笔交易并进行广播

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| transactionForRpc | `TransactionForRpc object` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`Hash`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`TransactionForRpc`

| 字段名称 | 类型 |
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
{% endtabs %}

## eth\_sendRawTransaction

向交易池发送一笔原始交易并进行广播

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| transaction | `Data` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`Hash`
{% endtab %}
{% endtabs %}

## eth\_call

执行一次交易调用（不创建交易）

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| transactionCall | `TransactionForRpc object` |
| blockParameter | `BlockParameter object` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`String`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`TransactionForRpc`

| 字段名称 | 类型 |
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

| 字段名称 | 类型 |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType` `Quantity` 或 `String`（最新、最早、待处理）
{% endtab %}
{% endtabs %}

## eth\_estimateGas

执行一次交易调用并返回已消耗 gas 量（不创建交易）

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| transactionCall | `TransactionForRpc object` |
| blockParameter | `BlockParameter object` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`Quantity`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`TransactionForRpc`

| 字段名称 | 类型 |
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

| 字段名称 | 类型 |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType` `Quantity` 或 `String`（最新、最早、待处理）
{% endtab %}
{% endtabs %}

## eth\_getBlockByHash

根据哈希值检索区块

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| blockHash | `Hash` |
| returnFullTransactionObjects | `Boolean` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`BlockForRpc object`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`BlockForRpc`

| 字段名称 | 类型 |
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
| Transactions | `Array` |
| TransactionsRoot | `Hash` |
| Uncles | `Array` |
{% endtab %}
{% endtabs %}

## eth\_getBlockByNumber

根据区块编号检索区块

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| blockParameter | `BlockParameter object` |
| returnFullTransactionObjects | `Boolean` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`BlockForRpc object`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`BlockParameter`

| 字段名称 | 类型 |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType` `Quantity` 或 `String`（最新、最早、待处理）

`BlockForRpc`

| 字段名称 | 类型 |
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
| Transactions | `Array` |
| TransactionsRoot | `Hash` |
| Uncles | `Array` |
{% endtab %}
{% endtabs %}

## eth\_getTransactionByHash

根据哈希值检索交易

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| transactionHash | `Hash` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`TransactionForRpc object`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`TransactionForRpc`

| 字段名称 | 类型 |
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
{% endtabs %}

## eth\_pendingTransactions

返回待处理交易列表

{% tabs %}
{% tab title="Request" %}
### **参数**

_无_
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`TransactionForRpc object`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`TransactionForRpc`

| 字段名称 | 类型 |
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
{% endtabs %}

## eth\_getTransactionByBlockHashAndIndex

根据区块哈希和索引检索交易

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| blockHash | `Hash` |
| positionIndex | `Quantity` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`TransactionForRpc object`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`TransactionForRpc`

| 字段名称 | 类型 |
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
{% endtabs %}

## eth\_getTransactionByBlockNumberAndIndex

根据区块编号和索引检索交易

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| blockParameter | `BlockParameter object` |
| positionIndex | `Quantity` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`TransactionForRpc object`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`BlockParameter`

| 字段名称 | 类型 |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType` `Quantity` 或 `String`（最新、最早、待处理）

`TransactionForRpc`

| 字段名称 | 类型 |
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
{% endtabs %}

## eth\_getTransactionReceipt

根据交易哈希检索交易收据

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| txHashData | `Hash` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`ReceiptForRpc object`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`ReceiptForRpc`

| 字段名称 | 类型 |
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
| LogsBloom | `Array` |
| Root | `Hash` |
| Status | `Quantity` |
| Error | `String` |

`LogEntryForRpc[]`

| 字段名称 | 类型 |
| :--- | :--- |
| Length | `Quantity` |
| LongLength | `Quantity` |
| Rank | `Quantity` |
| SyncRoot | `Object object` |
| IsReadOnly | `Boolean` |
| IsFixedSize | `Boolean` |
| IsSynchronized | `Boolean` |
{% endtab %}
{% endtabs %}

## eth\_getUncleByBlockHashAndIndex

根据区块哈希和叔块索引检索叔块的区块头

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| blockHashData | `Hash` |
| positionIndex | `Quantity` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`BlockForRpc object`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`BlockForRpc`

| 字段名称 | 类型 |
| :--- | :--- |
| Author | `Address` |
| Difficulty | `Quantity` |
| ExtraData | `Data` |
| GasLimit | `Quantity` |
| GasUsed | `Quantity` |
| Hash | `Hash` |
| LogsBloom | `Array` |
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

根据区块编号和叔块索引检索叔块的区块头

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| blockParameter | `BlockParameter object` |
| positionIndex | `Quantity` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`BlockForRpc object`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`BlockParameter`

| 字段名称 | 类型 |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType` `Quantity` 或 `String`（最新、最早、待处理）

`BlockForRpc`

| 字段名称 | 类型 |
| :--- | :--- |
| Author | `Address` |
| Difficulty | `Quantity` |
| ExtraData | `Data` |
| GasLimit | `Quantity` |
| GasUsed | `Quantity` |
| Hash | `Hash` |
| LogsBloom | `Array` |
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

## eth\_newFilter

创建一个更新过滤器

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| filter | `Filter object` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`Quantity`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`Filter`

| 字段名称 | 类型 |
| :--- | :--- |
| FromBlock | `BlockParameter object` |
| ToBlock | `BlockParameter object` |
| Address | `Address` |
| Topics | `Array` |

`BlockParameter`

| 字段名称 | 类型 |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |
{% endtab %}
{% endtabs %}

## eth\_newBlockFilter

创建一个更新过滤器

{% tabs %}
{% tab title="Request" %}
### **参数**

_无_
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`Quantity`
{% endtab %}
{% endtabs %}

## eth\_newPendingTransactionFilter

创建一个更新过滤器

{% tabs %}
{% tab title="Request" %}
### **参数**

_无_
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`Quantity`
{% endtab %}
{% endtabs %}

## eth\_uninstallFilter

创建一个更新过滤器

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| filterId | `Quantity` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`Boolean`
{% endtab %}
{% endtabs %}

## eth\_getFilterChanges

读取过滤器更改

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| filterId | `Quantity` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`Array`
{% endtab %}
{% endtabs %}

## eth\_getFilterLogs

读取过滤器更改

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| filterId | `Quantity` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`Array`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义
{% endtab %}
{% endtabs %}

## eth\_getLogs

读取日志

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| filter | `Filter object` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`Array`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`Filter`

| 字段名称 | 类型 |
| :--- | :--- |
| FromBlock | `BlockParameter object` |
| ToBlock | `BlockParameter object` |
| Address | `Object object` |
| Topics | `IEnumerable`1 object\` |

`BlockParameter`

| 字段名称 | 类型 |
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
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| accountAddress | `Address` |
| hashRate | `Data` |
| blockParameter | `BlockParameter object` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`AccountProof object`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`BlockParameter`

| 字段名称 | 类型 |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType` `Quantity` 或 `String`（最新、最早、待处理）

`AccountProof`

| 字段名称 | 类型 |
| :--- | :--- |
| Address | `Address` |
| Proof | `Data` |
| Balance | `Quantity` |
| CodeHash | `Hash` |
| Nonce | `Quantity` |
| StorageRoot | `Hash` |
| StorageProofs | `StorageProof[] object` |

`StorageProof[]`

| 字段名称 | 类型 |
| :--- | :--- |
| Length | `Quantity` |
| LongLength | `Quantity` |
| Rank | `Quantity` |
| SyncRoot | `Object object` |
| IsReadOnly | `Boolean` |
| IsFixedSize | `Boolean` |
| IsSynchronized | `Boolean` |
{% endtab %}
{% endtabs %}

