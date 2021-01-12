# Debug

## debug\_getChainLevel

检索位于指定区块链层级的树分支的表示\（Nethermind 特有功能\）。

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| number | `Quantity` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`ChainLevelForRpc object`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`ChainLevelForRpc`

| 字段名称 | 类型 |
| :--- | :--- |
| BlockInfos | `BlockInfoForRpc[] object` |
| HasBlockOnMainChain | `Boolean` |

`BlockInfoForRpc[]`

| **字段名称** | 类型 |
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

## debug\_deleteChainSlice

将链的一部分从所有树分支上删除（Nethermind 特有功能）。

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| startNumber | `Quantity` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`Quantity`
{% endtab %}
{% endtabs %}

## debug\_resetHead

更新/重置链首块，仅限节点因数据库/内存损坏而卡住时使用（Nethermind 特有功能）。

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| blockHash | `Hash` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`Boolean`
{% endtab %}
{% endtabs %}

## debug\_traceTransaction

尝试以相同的方式将一笔已经在网络上执行过的交易再运行一遍。在尝试执行与指定哈希值相对应的交易之前，会先将在该交易之前可能已经执行过的所有交易重放。

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| transactionHash | `Hash` |
| options | `GethTraceOptions object` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`GethLikeTxTrace object`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`GethTraceOptions`

| 字段名称 | 类型 |
| :--- | :--- |
| DisableStorage | `Boolean` |
| DisableMemory | `Boolean` |
| DisableStack | `Boolean` |
| Tracer | `String` |
| Timeout | `String` |

`GethLikeTxTrace`

| 字段名称 | 类型 |
| :--- | :--- |
| StoragesByDepth | `Array` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `Array` |
{% endtab %}
{% endtabs %}

## debug\_traceTransactionByBlockAndIndex

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| blockParameter | `BlockParameter object` |
| txIndex | `Quantity` |
| options | `GethTraceOptions object` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`GethLikeTxTrace object`
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

`BlockParameterType` `Quantity` 或 `String` \（最新、最早、待处理\）

`GethTraceOptions`

| 字段名称 | 类型 |
| :--- | :--- |
| DisableStorage | `Boolean` |
| DisableMemory | `Boolean` |
| DisableStack | `Boolean` |
| Tracer | `String` |
| Timeout | `String` |

`GethLikeTxTrace`

| 字段名称 | 类型 |
| :--- | :--- |
| StoragesByDepth | `Array` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `Array` |
{% endtab %}
{% endtabs %}

## debug\_traceTransactionByBlockhashAndIndex

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| blockHash | `Hash` |
| txIndex | `Quantity` |
| options | `GethTraceOptions object` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`GethLikeTxTrace object`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`GethTraceOptions`

| 字段名称 | 类型 |
| :--- | :--- |
| DisableStorage | `Boolean` |
| DisableMemory | `Boolean` |
| DisableStack | `Boolean` |
| Tracer | `String` |
| Timeout | `String` |

`GethLikeTxTrace`

| 字段名称 | 类型 |
| :--- | :--- |
| StoragesByDepth | `Array` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `Array` |
{% endtab %}
{% endtabs %}

## debug\_traceBlock

返回该区块内所有交易调用过的所有操作码的完整堆栈轨迹。该区块的父区块必须存在，否则就会失败。

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| blockRlp | `Data` |
| options | `GethTraceOptions object` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`GethLikeTxTrace object`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`GethTraceOptions`

| 字段名称 | 类型 |
| :--- | :--- |
| DisableStorage | `Boolean` |
| DisableMemory | `Boolean` |
| DisableStack | `Boolean` |
| Tracer | `String` |
| Timeout | `String` |

`GethLikeTxTrace`

| 字段名称 | 类型 |
| :--- | :--- |
| StoragesByDepth | `Array` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `Array` |
{% endtab %}
{% endtabs %}

## debug\_traceBlockByNumber

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| number | `Quantity` |
| options | `GethTraceOptions object` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`GethLikeTxTrace object`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`GethTraceOptions`

| 字段名称 | 类型 |
| :--- | :--- |
| DisableStorage | `Boolean` |
| DisableMemory | `Boolean` |
| DisableStack | `Boolean` |
| Tracer | `String` |
| Timeout | `String` |

`GethLikeTxTrace`

| 字段名称 | 类型 |
| :--- | :--- |
| StoragesByDepth | `Array` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `Array` |
{% endtab %}
{% endtabs %}

## debug\_traceBlockByHash

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| blockHash | `Hash` |
| options | `GethTraceOptions object` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`GethLikeTxTrace object`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`GethTraceOptions`

| 字段名称 | 类型 |
| :--- | :--- |
| DisableStorage | `Boolean` |
| DisableMemory | `Boolean` |
| DisableStack | `Boolean` |
| Tracer | `String` |
| Timeout | `String` |

`GethLikeTxTrace`

| 字段名称 | 类型 |
| :--- | :--- |
| StoragesByDepth | `Array` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `Array` |
{% endtab %}
{% endtabs %}

## debug\_getBlockRlp

检索 RLP 序列化格式的区块。

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| number | `Quantity` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`Data`
{% endtab %}
{% endtabs %}

## debug\_getBlockRlpByHash

检索 RLP 序列化格式的区块。

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| hash | `Hash` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`Data`
{% endtab %}
{% endtabs %}

## debug\_getConfigValue

检索 Nethermind 的配置值，例如，JsonRpc.Enabled。

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| category | `String` |
| name | `String` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`String`
{% endtab %}
{% endtabs %}

## debug\_traceTransactionInBlockByHash

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| blockRlp | `Data` |
| transactionHash | `Hash` |
| options | `GethTraceOptions object` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`GethLikeTxTrace object`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`GethTraceOptions`

| 字段名称 | 类型 |
| :--- | :--- |
| DisableStorage | `Boolean` |
| DisableMemory | `Boolean` |
| DisableStack | `Boolean` |
| Tracer | `String` |
| Timeout | `String` |

`GethLikeTxTrace`

| 字段名称 | 类型 |
| :--- | :--- |
| StoragesByDepth | `Array` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `Array` |
{% endtab %}
{% endtabs %}

## debug\_traceTransactionInBlockByIndex

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| blockRlp | `Data` |
| txIndex | `Quantity` |
| options | `GethTraceOptions object` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`GethLikeTxTrace object`
{% endtab %}

{% tab title="Object definitions" %}
### 对象定义

`GethTraceOptions`

| 字段名称 | 类型 |
| :--- | :--- |
| DisableStorage | `Boolean` |
| DisableMemory | `Boolean` |
| DisableStack | `Boolean` |
| Tracer | `String` |
| Timeout | `String` |

`GethLikeTxTrace`

| 字段名称 | 类型 |
| :--- | :--- |
| StoragesByDepth | `Array` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `Array` |
{% endtab %}
{% endtabs %}

## debug\_migrateReceipts

设置收据迁移的区块高度上限（Nethermind 特有功能）。

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| blockNumber | `Quantity` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`Boolean`
{% endtab %}
{% endtabs %}

## debug\_insertReceipts

在验证收据根的正确性之后，为该区块插入收据。

{% tabs %}
{% tab title="Request" %}
### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| blockParameter | `BlockParameter object` |
| receiptForRpc | `ReceiptForRpc[] object` |
{% endtab %}

{% tab title="Response" %}
### 返回值类型

`Boolean`
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

`BlockParameterType` `Quantity` 或 `String` \（最新、最早、待处理\）

`ReceiptForRpc`

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

