# Debug module

## debug\_deleteChainSlice

将链的一部分从所有树分支上删除（Nethermind 特有功能）。

| Invocation |
| :--- |
| `{"method":"debug_deleteChainSlice","params":[startNumber]}` |

| 参数 | Type | 描述 |
| :--- | :--- | :--- |
| startNumber | `Quantity` |  |

| 返回值类型 | 描述 |
| :--- | :--- |
| `Quantity` |  |

{% tabs %}
{% tab title="Example request of debug\_deleteChainSlice" %}
```text
curl --data '{"method":"debug_deleteChainSlice","params":[startNumber],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

## debug\_getBlockRlp

检索 RLP 序列化格式的区块。

| Invocation |
| :--- |
| `{"method":"debug_getBlockRlp","params":[number]}` |

| 参数 | Type | 描述 |
| :--- | :--- | :--- |
| number | `Quantity` |  |

| 返回值类型 | 描述 |
| :--- | :--- |
| `Data` |  |

{% tabs %}
{% tab title="Example request of debug\_getBlockRlp" %}
```text
curl --data '{"method":"debug_getBlockRlp","params":[number],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[参见 CLI debug.getBlockRlp](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/debug#debug-getblockrlp)

## debug\_getBlockRlpByHash

检索 RLP 序列化格式的区块。

| Invocation |
| :--- |
| `{"method":"debug_getBlockRlpByHash","params":[hash]}` |

| 参数 | Type | 描述 |
| :--- | :--- | :--- |
| hash | `Hash` |  |

| 返回值类型 | 描述 |
| :--- | :--- |
| `Data` |  |

{% tabs %}
{% tab title="Example request of debug\_getBlockRlpByHash" %}
```text
curl --data '{"method":"debug_getBlockRlpByHash","params":[hash],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[参见 CLI debug.getBlockRlpByHash](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/debug#debug-getblockrlpbyhash)

## debug\_getChainLevel

检索指定链级别上的树分支的表示（Nethermind 特有功能）。

| Invocation |
| :--- |
| `{"method":"debug_getChainLevel","params":[number]}` |

| 参数 | Type | 描述 |
| :--- | :--- | :--- |
| number | `Quantity` |  |

| 返回值类型 | 描述 |
| :--- | :--- |
| `ChainLevelForRpc object` |  |

{% tabs %}
{% tab title="Example request of debug\_getChainLevel" %}
```text
curl --data '{"method":"debug_getChainLevel","params":[number],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in debug\_getChainLevel" %}
`ChainLevelForRpc`

| 字段名称 | Type |
| :--- | :--- |
| BlockInfos | `BlockInfoForRpc[] object` |
| HasBlockOnMainChain | `Boolean` |

`BlockInfoForRpc[]`

| 字段名称 | Type |
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

[参见 CLI debug.getChainLevel](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/debug#debug-getchainlevel)

## debug\_getConfigValue

检索 Nethermind 的配置值，例如，JsonRpc.Enabled。

| Invocation |
| :--- |
| `{"method":"debug_getConfigValue","params":[category, name]}` |

| 参数 | Type | 描述 |
| :--- | :--- | :--- |
| category | `String` |  |
| name | `String` |  |

| 返回值类型 | 描述 |
| :--- | :--- |
| `Object` |  |

{% tabs %}
{% tab title="Example request of debug\_getConfigValue" %}
```text
curl --data '{"method":"debug_getConfigValue","params":[category, name],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

## debug\_insertReceipts

在验证收据根的正确性之后，为该区块插入收据。

| Invocation |
| :--- |
| `{"method":"debug_insertReceipts","params":[blockParameter, receiptForRpc]}` |

| 参数 | Type | 描述 |
| :--- | :--- | :--- |
| blockParameter | `BlockParameter object` |  |
| receiptForRpc | `ReceiptForRpc[] object` |  |

| 返回值类型 | 描述 |
| :--- | :--- |
| `Boolean` |  |

{% tabs %}
{% tab title="Example request of debug\_insertReceipts" %}
```text
curl --data '{"method":"debug_insertReceipts","params":[blockParameter, receiptForRpc],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in debug\_insertReceipts" %}
`BlockParameter`

| 字段名称 | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

* `Quantity` 或 `String` \（最新、最早、待处理\）

`ReceiptForRpc[]`

| 字段名称 | Type |
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

## debug\_migrateReceipts

设置收据迁移的区块高度上限（Nethermind 特有功能）。

| Invocation |
| :--- |
| `{"method":"debug_migrateReceipts","params":[blockNumber]}` |

| 参数 | Type | 描述 |
| :--- | :--- | :--- |
| blockNumber | `Quantity` |  |

| 返回值类型 | 描述 |
| :--- | :--- |
| `Boolean` |  |

{% tabs %}
{% tab title="Example request of debug\_migrateReceipts" %}
```text
curl --data '{"method":"debug_migrateReceipts","params":[blockNumber],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[参见 CLI debug.migrateReceipts](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/debug#debug-migratereceipts)

## debug\_resetHead

更新/重置链首块，仅限节点因数据库/内存损坏而卡住时使用（Nethermind 特有功能）。

| Invocation |
| :--- |
| `{"method":"debug_resetHead","params":[blockHash]}` |

| 参数 | Type | 描述 |
| :--- | :--- | :--- |
| blockHash | `Hash` |  |

| 返回值类型 | 描述 |
| :--- | :--- |
| `Boolean` |  |

{% tabs %}
{% tab title="Example request of debug\_resetHead" %}
```text
curl --data '{"method":"debug_resetHead","params":[blockHash],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

## debug\_traceBlock

返回该区块内所有交易调用过的所有操作码的完整堆栈轨迹。该区块的父区块必须存在，否则就会失败。

| Invocation |
| :--- |
| `{"method":"debug_traceBlock","params":[blockRlp, options]}` |

| 参数 | Type | 描述 |
| :--- | :--- | :--- |
| blockRlp | `Data` |  |
| options | `GethTraceOptions object` |  |

| 返回值类型 | 描述 |
| :--- | :--- |
| `GethLikeTxTrace object` |  |

{% tabs %}
{% tab title="Example request of debug\_traceBlock" %}
```text
curl --data '{"method":"debug_traceBlock","params":[blockRlp, options],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in debug\_traceBlock" %}
`GethTraceOptions`

| 字段名称 | Type |
| :--- | :--- |
| DisableStorage | `Boolean` |
| DisableMemory | `Boolean` |
| DisableStack | `Boolean` |
| Tracer | `String` |
| Timeout | `String` |

`GethLikeTxTrace`

| 字段名称 | Type |
| :--- | :--- |
| StoragesByDepth | `Array` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `Array` |
{% endtab %}
{% endtabs %}

[参见 CLI debug.traceBlock](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/debug#debug-traceblock)

## debug\_traceBlockByHash

| Invocation |
| :--- |
| `{"method":"debug_traceBlockByHash","params":[blockHash, options]}` |

| 参数 | Type | 描述 |
| :--- | :--- | :--- |
| blockHash | `Hash` |  |
| options | `GethTraceOptions object` |  |

| 返回值类型 | 描述 |
| :--- | :--- |
| `GethLikeTxTrace object` |  |

{% tabs %}
{% tab title="Example request of debug\_traceBlockByHash" %}
```text
curl --data '{"method":"debug_traceBlockByHash","params":[blockHash, options],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in debug\_traceBlockByHash" %}
`GethTraceOptions`

| 字段名称 | Type |
| :--- | :--- |
| DisableStorage | `Boolean` |
| DisableMemory | `Boolean` |
| DisableStack | `Boolean` |
| Tracer | `String` |
| Timeout | `String` |

`GethLikeTxTrace`

| 字段名称 | Type |
| :--- | :--- |
| StoragesByDepth | `Array` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `Array` |
{% endtab %}
{% endtabs %}

[参见 CLI debug.traceBlockByHash](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/debug#debug-traceblockbyhash)

## debug\_traceBlockByNumber

| Invocation |
| :--- |
| `{"method":"debug_traceBlockByNumber","params":[number, options]}` |

| 参数 | Type | 描述 |
| :--- | :--- | :--- |
| number | `Quantity` |  |
| options | `GethTraceOptions object` |  |

| 返回值类型 | 描述 |
| :--- | :--- |
| `GethLikeTxTrace object` |  |

{% tabs %}
{% tab title="Example request of debug\_traceBlockByNumber" %}
```text
curl --data '{"method":"debug_traceBlockByNumber","params":[number, options],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in debug\_traceBlockByNumber" %}
`GethTraceOptions`

| 字段名称 | Type |
| :--- | :--- |
| DisableStorage | `Boolean` |
| DisableMemory | `Boolean` |
| DisableStack | `Boolean` |
| Tracer | `String` |
| Timeout | `String` |

`GethLikeTxTrace`

| 字段名称 | Type |
| :--- | :--- |
| StoragesByDepth | `Array` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `Array` |
{% endtab %}
{% endtabs %}

[参见 CLI debug.traceBlockByNumber](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/debug#debug-traceblockbynumber)

## debug\_traceTransaction

尝试以相同的方式将一笔已经在网络上执行过的交易再运行一遍。在尝试执行与指定哈希值相对应的交易之前，会先将在该交易之前可能已经执行过的所有交易重放。

| Invocation |
| :--- |
| `{"method":"debug_traceTransaction","params":[transactionHash, options]}` |

| 参数 | Type | 描述 |
| :--- | :--- | :--- |
| transactionHash | `Hash` |  |
| options | `GethTraceOptions object` |  |

| 返回值类型 | 描述 |
| :--- | :--- |
| `GethLikeTxTrace object` |  |

{% tabs %}
{% tab title="Example request of debug\_traceTransaction" %}
```text
curl --data '{"method":"debug_traceTransaction","params":[transactionHash, options],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in debug\_traceTransaction" %}
`GethTraceOptions`

| 字段名称 | Type |
| :--- | :--- |
| DisableStorage | `Boolean` |
| DisableMemory | `Boolean` |
| DisableStack | `Boolean` |
| Tracer | `String` |
| Timeout | `String` |

`GethLikeTxTrace`

| 字段名称 | Type |
| :--- | :--- |
| StoragesByDepth | `Array` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `Array` |
{% endtab %}
{% endtabs %}

[参见 CLI debug.traceTransaction](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/debug#debug-tracetransaction)

## debug\_traceTransactionByBlockAndIndex

| Invocation |
| :--- |
| `{"method":"debug_traceTransactionByBlockAndIndex","params":[blockParameter, txIndex, options]}` |

| 参数 | Type | 描述 |
| :--- | :--- | :--- |
| blockParameter | `BlockParameter object` |  |
| txIndex | `Quantity` |  |
| options | `GethTraceOptions object` |  |

| 返回值类型 | 描述 |
| :--- | :--- |
| `GethLikeTxTrace object` |  |

{% tabs %}
{% tab title="Example request of debug\_traceTransactionByBlockAndIndex" %}
```text
curl --data '{"method":"debug_traceTransactionByBlockAndIndex","params":[blockParameter, txIndex, options],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in debug\_traceTransactionByBlockAndIndex" %}
`BlockParameter`

| 字段名称 | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

* `Quantity` 或 `String` \（最新、最早、待处理\）

`GethTraceOptions`

| 字段名称 | Type |
| :--- | :--- |
| DisableStorage | `Boolean` |
| DisableMemory | `Boolean` |
| DisableStack | `Boolean` |
| Tracer | `String` |
| Timeout | `String` |

`GethLikeTxTrace`

| 字段名称 | Type |
| :--- | :--- |
| StoragesByDepth | `Array` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `Array` |
{% endtab %}
{% endtabs %}

[参见 CLI debug.traceTransactionByBlockAndIndex](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/debug#debug-tracetransactionbyblockandindex)

## debug\_traceTransactionByBlockhashAndIndex

| Invocation |
| :--- |
| `{"method":"debug_traceTransactionByBlockhashAndIndex","params":[blockHash, txIndex, options]}` |

| 参数 | Type | 描述 |
| :--- | :--- | :--- |
| blockHash | `Hash` |  |
| txIndex | `Quantity` |  |
| options | `GethTraceOptions object` |  |

| 返回值类型 | 描述 |
| :--- | :--- |
| `GethLikeTxTrace object` |  |

{% tabs %}
{% tab title="Example request of debug\_traceTransactionByBlockhashAndIndex" %}
```text
curl --data '{"method":"debug_traceTransactionByBlockhashAndIndex","params":[blockHash, txIndex, options],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in debug\_traceTransactionByBlockhashAndIndex" %}
`GethTraceOptions`

| 字段名称 | Type |
| :--- | :--- |
| DisableStorage | `Boolean` |
| DisableMemory | `Boolean` |
| DisableStack | `Boolean` |
| Tracer | `String` |
| Timeout | `String` |

`GethLikeTxTrace`

| 字段名称 | Type |
| :--- | :--- |
| StoragesByDepth | `Array` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `Array` |
{% endtab %}
{% endtabs %}

[参见 CLI debug.traceTransactionByBlockhashAndIndex](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/debug#debug-tracetransactionbyblockhashandindex)

## debug\_traceTransactionInBlockByHash

| Invocation |
| :--- |
| `{"method":"debug_traceTransactionInBlockByHash","params":[blockRlp, transactionHash, options]}` |

| 参数 | Type | 描述 |
| :--- | :--- | :--- |
| blockRlp | `Data` |  |
| transactionHash | `Hash` |  |
| options | `GethTraceOptions object` |  |

| 返回值类型 | 描述 |
| :--- | :--- |
| `GethLikeTxTrace object` |  |

{% tabs %}
{% tab title="Example request of debug\_traceTransactionInBlockByHash" %}
```text
curl --data '{"method":"debug_traceTransactionInBlockByHash","params":[blockRlp, transactionHash, options],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in debug\_traceTransactionInBlockByHash" %}
`GethTraceOptions`

| 字段名称 | Type |
| :--- | :--- |
| DisableStorage | `Boolean` |
| DisableMemory | `Boolean` |
| DisableStack | `Boolean` |
| Tracer | `String` |
| Timeout | `String` |

`GethLikeTxTrace`

| 字段名称 | Type |
| :--- | :--- |
| StoragesByDepth | `Array` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `Array` |
{% endtab %}
{% endtabs %}

[参见 CLI debug.traceTransactionInBlockByHash](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/debug#debug-tracetransactioninblockbyhash)

## debug\_traceTransactionInBlockByIndex

| Invocation |
| :--- |
| `{"method":"debug_traceTransactionInBlockByIndex","params":[blockRlp, txIndex, options]}` |

| 参数 | Type | 描述 |
| :--- | :--- | :--- |
| blockRlp | `Data` |  |
| txIndex | `Quantity` |  |
| options | `GethTraceOptions object` |  |

| 返回值类型 | 描述 |
| :--- | :--- |
| `GethLikeTxTrace object` |  |

{% tabs %}
{% tab title="Example request of debug\_traceTransactionInBlockByIndex" %}
```text
curl --data '{"method":"debug_traceTransactionInBlockByIndex","params":[blockRlp, txIndex, options],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in debug\_traceTransactionInBlockByIndex" %}
`GethTraceOptions`

| 字段名称 | Type |
| :--- | :--- |
| DisableStorage | `Boolean` |
| DisableMemory | `Boolean` |
| DisableStack | `Boolean` |
| Tracer | `String` |
| Timeout | `String` |

`GethLikeTxTrace`

| 字段名称 | Type |
| :--- | :--- |
| StoragesByDepth | `Array` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `Array` |
{% endtab %}
{% endtabs %}

[参见 CLI debug.traceTransactionInBlockByIndex](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/debug#debug-tracetransactioninblockbyindex)

