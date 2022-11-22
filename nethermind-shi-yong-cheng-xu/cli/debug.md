# Debug module

## debug.config

| Invocation                     |
| ------------------------------ |
| `debug.config(category, name)` |

| 参数       | Type     | 描述 |
| -------- | -------- | -- |
| category | `String` |    |
| name     | `String` |    |

| 返回值类型    | 描述 |
| -------- | -- |
| `String` |    |

{% tabs %}
{% tab title="Example request of debug.config" %}
```yaml
debug.config(category, name)
```
{% endtab %}
{% endtabs %}

## debug.getBlockRlp

检索 RLP 序列化格式的区块。

| Invocation                  |
| --------------------------- |
| `debug.getBlockRlp(number)` |

| 参数     | Type       | 描述 |
| ------ | ---------- | -- |
| number | `Quantity` |    |

| 返回值类型  | 描述 |
| ------ | -- |
| `Data` |    |

{% tabs %}
{% tab title="Example request of debug.getBlockRlp" %}
```yaml
debug.getBlockRlp(number)
```
{% endtab %}
{% endtabs %}

[参见 JSON RPC debug\_getBlockRlp](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug\_getblockrlp)

## debug.getBlockRlpByHash

检索 RLP 序列化格式的区块。

| Invocation                      |
| ------------------------------- |
| `debug.getBlockRlpByHash(hash)` |

| 参数   | Type   | 描述 |
| ---- | ------ | -- |
| hash | `Hash` |    |

| 返回值类型  | 描述 |
| ------ | -- |
| `Data` |    |

{% tabs %}
{% tab title="Example request of debug.getBlockRlpByHash" %}
```yaml
debug.getBlockRlpByHash(hash)
```
{% endtab %}
{% endtabs %}

[参见 JSON RPC debug\_getBlockRlpByHash](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug\_getblockrlpbyhash)

## debug.getChainLevel

检索指定链级别上的树分支的表示（Nethermind 特有功能）。

| Invocation                    |
| ----------------------------- |
| `debug.getChainLevel(number)` |

| 参数     | Type       | 描述 |
| ------ | ---------- | -- |
| number | `Quantity` |    |

| 返回值类型                     | 描述 |
| ------------------------- | -- |
| `ChainLevelForRpc object` |    |

{% tabs %}
{% tab title="Example request of debug.getChainLevel" %}
```yaml
debug.getChainLevel(number)
```
{% endtab %}

{% tab title="Objects in debug_getChainLevel" %}
`ChainLevelForRpc`

| 字段名称                | Type                       |
| ------------------- | -------------------------- |
| BlockInfos          | `BlockInfoForRpc[] object` |
| HasBlockOnMainChain | `Boolean`                  |

`BlockInfoForRpc[]`

| 字段名称           | Type       |
| -------------- | ---------- |
| Length         | `Quantity` |
| LongLength     | `Quantity` |
| Rank           | `Quantity` |
| SyncRoot       | `Object`   |
| IsReadOnly     | `Boolean`  |
| IsFixedSize    | `Boolean`  |
| IsSynchronized | `Boolean`  |
{% endtab %}
{% endtabs %}

[参见 JSON RPC debug\_getChainLevel](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug\_getchainlevel)

## debug.migrateReceipts

设置收据迁移的区块高度上限（Nethermind 特有功能）。

| Invocation                           |
| ------------------------------------ |
| `debug.migrateReceipts(blockNumber)` |

| 参数          | Type       | 描述 |
| ----------- | ---------- | -- |
| blockNumber | `Quantity` |    |

| 返回值类型     | 描述 |
| --------- | -- |
| `Boolean` |    |

{% tabs %}
{% tab title="Example request of debug.migrateReceipts" %}
```yaml
debug.migrateReceipts(blockNumber)
```
{% endtab %}
{% endtabs %}

[参见 JSON RPC debug\_migrateReceipts](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug\_migratereceipts)

## debug.traceBlock

返回该区块内所有交易调用过的所有操作码的完整堆栈轨迹。该区块的父区块必须存在，否则就会失败。

| Invocation                            |
| ------------------------------------- |
| `debug.traceBlock(blockRlp, options)` |

| 参数       | Type                      | 描述 |
| -------- | ------------------------- | -- |
| blockRlp | `Data`                    |    |
| options  | `GethTraceOptions object` |    |

| 返回值类型                    | 描述 |
| ------------------------ | -- |
| `GethLikeTxTrace object` |    |

{% tabs %}
{% tab title="Example request of debug.traceBlock" %}
```yaml
debug.traceBlock(blockRlp, options)
```
{% endtab %}

{% tab title="Objects in debug_traceBlock" %}
`GethTraceOptions`

| 字段名称           | Type      |
| -------------- | --------- |
| DisableStorage | `Boolean` |
| DisableMemory  | `Boolean` |
| DisableStack   | `Boolean` |
| Tracer         | `String`  |
| Timeout        | `String`  |

`GethLikeTxTrace`

| 字段名称            | Type       |
| --------------- | ---------- |
| StoragesByDepth | `Array`    |
| Gas             | `Quantity` |
| Failed          | `Boolean`  |
| ReturnValue     | `Data`     |
| Entries         | `Array`    |
{% endtab %}
{% endtabs %}

[参见 JSON RPC debug\_traceBlock](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug\_traceblock)

## debug.traceBlockByHash

| Invocation                                   |
| -------------------------------------------- |
| `debug.traceBlockByHash(blockHash, options)` |

| 参数        | Type                      | 描述 |
| --------- | ------------------------- | -- |
| blockHash | `Hash`                    |    |
| options   | `GethTraceOptions object` |    |

| 返回值类型                    | 描述 |
| ------------------------ | -- |
| `GethLikeTxTrace object` |    |

{% tabs %}
{% tab title="Example request of debug.traceBlockByHash" %}
```yaml
debug.traceBlockByHash(blockHash, options)
```
{% endtab %}

{% tab title="Objects in debug_traceBlockByHash" %}
`GethTraceOptions`

| 字段名称           | Type      |
| -------------- | --------- |
| DisableStorage | `Boolean` |
| DisableMemory  | `Boolean` |
| DisableStack   | `Boolean` |
| Tracer         | `String`  |
| Timeout        | `String`  |

`GethLikeTxTrace`

| 字段名称            | Type       |
| --------------- | ---------- |
| StoragesByDepth | `Array`    |
| Gas             | `Quantity` |
| Failed          | `Boolean`  |
| ReturnValue     | `Data`     |
| Entries         | `Array`    |
{% endtab %}
{% endtabs %}

[参见 JSON RPC debug\_traceBlockByHash](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug\_traceblockbyhash)

## debug.traceBlockByNumber

| Invocation                                  |
| ------------------------------------------- |
| `debug.traceBlockByNumber(number, options)` |

| 参数      | Type                      | 描述 |
| ------- | ------------------------- | -- |
| number  | `Quantity`                |    |
| options | `GethTraceOptions object` |    |

| 返回值类型                    | 描述 |
| ------------------------ | -- |
| `GethLikeTxTrace object` |    |

{% tabs %}
{% tab title="Example request of debug.traceBlockByNumber" %}
```yaml
debug.traceBlockByNumber(number, options)
```
{% endtab %}

{% tab title="Objects in debug_traceBlockByNumber" %}
`GethTraceOptions`

| 字段名称           | Type      |
| -------------- | --------- |
| DisableStorage | `Boolean` |
| DisableMemory  | `Boolean` |
| DisableStack   | `Boolean` |
| Tracer         | `String`  |
| Timeout        | `String`  |

`GethLikeTxTrace`

| 字段名称            | Type       |
| --------------- | ---------- |
| StoragesByDepth | `Array`    |
| Gas             | `Quantity` |
| Failed          | `Boolean`  |
| ReturnValue     | `Data`     |
| Entries         | `Array`    |
{% endtab %}
{% endtabs %}

[参见 JSON RPC debug\_traceBlockByNumber](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug\_traceblockbynumber)

## debug.traceTransaction

尝试以相同的方式将一笔已经在网络上执行过的交易再运行一遍。在尝试执行与指定哈希值相对应的交易之前，会先将在该交易之前可能已经执行过的所有交易重放。

| Invocation                                         |
| -------------------------------------------------- |
| `debug.traceTransaction(transactionHash, options)` |

| 参数              | Type                      | 描述 |
| --------------- | ------------------------- | -- |
| transactionHash | `Hash`                    |    |
| options         | `GethTraceOptions object` |    |

| 返回值类型                    | 描述 |
| ------------------------ | -- |
| `GethLikeTxTrace object` |    |

{% tabs %}
{% tab title="Example request of debug.traceTransaction" %}
```yaml
debug.traceTransaction(transactionHash, options)
```
{% endtab %}

{% tab title="Objects in debug_traceTransaction" %}
`GethTraceOptions`

| 字段名称           | Type      |
| -------------- | --------- |
| DisableStorage | `Boolean` |
| DisableMemory  | `Boolean` |
| DisableStack   | `Boolean` |
| Tracer         | `String`  |
| Timeout        | `String`  |

`GethLikeTxTrace`

| 字段名称            | Type       |
| --------------- | ---------- |
| StoragesByDepth | `Array`    |
| Gas             | `Quantity` |
| Failed          | `Boolean`  |
| ReturnValue     | `Data`     |
| Entries         | `Array`    |
{% endtab %}
{% endtabs %}

[参见 JSON RPC debug\_traceTransaction](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug\_tracetransaction)

## debug.traceTransactionByBlockAndIndex

| Invocation                                                                |
| ------------------------------------------------------------------------- |
| `debug.traceTransactionByBlockAndIndex(blockParameter, txIndex, options)` |

| 参数             | Type                      | 描述 |
| -------------- | ------------------------- | -- |
| blockParameter | `BlockParameter object`   |    |
| txIndex        | `Quantity`                |    |
| options        | `GethTraceOptions object` |    |

| 返回值类型                    | 描述 |
| ------------------------ | -- |
| `GethLikeTxTrace object` |    |

{% tabs %}
{% tab title="Example request of debug.traceTransactionByBlockAndIndex" %}
```yaml
debug.traceTransactionByBlockAndIndex(blockParameter, txIndex, options)
```
{% endtab %}

{% tab title="Objects in debug_traceTransactionByBlockAndIndex" %}
`BlockParameter`

| 字段名称             | Type                        |
| ---------------- | --------------------------- |
| Type             | `BlockParameterType object` |
| BlockNumber      | `Quantity`                  |
| BlockHash        | `Hash`                      |
| RequireCanonical | `Boolean`                   |

`BlockParameterType`

* `Quantity` 或 `String` \（最新、最早、待处理\）

`GethTraceOptions`

| 字段名称           | Type      |
| -------------- | --------- |
| DisableStorage | `Boolean` |
| DisableMemory  | `Boolean` |
| DisableStack   | `Boolean` |
| Tracer         | `String`  |
| Timeout        | `String`  |

`GethLikeTxTrace`

| 字段名称            | Type       |
| --------------- | ---------- |
| StoragesByDepth | `Array`    |
| Gas             | `Quantity` |
| Failed          | `Boolean`  |
| ReturnValue     | `Data`     |
| Entries         | `Array`    |
{% endtab %}
{% endtabs %}

[参见 JSON RPC debug\_traceTransactionByBlockAndIndex](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug\_tracetransactionbyblockandindex)

## debug.traceTransactionByBlockhashAndIndex

| Invocation                                                               |
| ------------------------------------------------------------------------ |
| `debug.traceTransactionByBlockhashAndIndex(blockHash, txIndex, options)` |

| 参数        | Type                      | 描述 |
| --------- | ------------------------- | -- |
| blockHash | `Hash`                    |    |
| txIndex   | `Quantity`                |    |
| options   | `GethTraceOptions object` |    |

| 返回值类型                    | 描述 |
| ------------------------ | -- |
| `GethLikeTxTrace object` |    |

{% tabs %}
{% tab title="Example request of debug.traceTransactionByBlockhashAndIndex" %}
```yaml
debug.traceTransactionByBlockhashAndIndex(blockHash, txIndex, options)
```
{% endtab %}

{% tab title="Objects in debug_traceTransactionByBlockhashAndIndex" %}
`GethTraceOptions`

| 字段名称           | Type      |
| -------------- | --------- |
| DisableStorage | `Boolean` |
| DisableMemory  | `Boolean` |
| DisableStack   | `Boolean` |
| Tracer         | `String`  |
| Timeout        | `String`  |

`GethLikeTxTrace`

| 字段名称            | Type       |
| --------------- | ---------- |
| StoragesByDepth | `Array`    |
| Gas             | `Quantity` |
| Failed          | `Boolean`  |
| ReturnValue     | `Data`     |
| Entries         | `Array`    |
{% endtab %}
{% endtabs %}

[参见 JSON RPC debug\_traceTransactionByBlockhashAndIndex](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug\_tracetransactionbyblockhashandindex)

## debug.traceTransactionInBlockByHash

| Invocation                                                                |
| ------------------------------------------------------------------------- |
| `debug.traceTransactionInBlockByHash(blockRlp, transactionHash, options)` |

| 参数              | Type                      | 描述 |
| --------------- | ------------------------- | -- |
| blockRlp        | `Data`                    |    |
| transactionHash | `Hash`                    |    |
| options         | `GethTraceOptions object` |    |

| 返回值类型                    | 描述 |
| ------------------------ | -- |
| `GethLikeTxTrace object` |    |

{% tabs %}
{% tab title="Example request of debug.traceTransactionInBlockByHash" %}
```yaml
debug.traceTransactionInBlockByHash(blockRlp, transactionHash, options)
```
{% endtab %}

{% tab title="Objects in debug_traceTransactionInBlockByHash" %}
`GethTraceOptions`

| 字段名称           | Type      |
| -------------- | --------- |
| DisableStorage | `Boolean` |
| DisableMemory  | `Boolean` |
| DisableStack   | `Boolean` |
| Tracer         | `String`  |
| Timeout        | `String`  |

`GethLikeTxTrace`

| 字段名称            | Type       |
| --------------- | ---------- |
| StoragesByDepth | `Array`    |
| Gas             | `Quantity` |
| Failed          | `Boolean`  |
| ReturnValue     | `Data`     |
| Entries         | `Array`    |
{% endtab %}
{% endtabs %}

[参见 JSON RPC debug\_traceTransactionInBlockByHash](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug\_tracetransactioninblockbyhash)

## debug.traceTransactionInBlockByIndex

| Invocation                                                         |
| ------------------------------------------------------------------ |
| `debug.traceTransactionInBlockByIndex(blockRlp, txIndex, options)` |

| 参数       | Type                      | 描述 |
| -------- | ------------------------- | -- |
| blockRlp | `Data`                    |    |
| txIndex  | `Quantity`                |    |
| options  | `GethTraceOptions object` |    |

| 返回值类型                    | 描述 |
| ------------------------ | -- |
| `GethLikeTxTrace object` |    |

{% tabs %}
{% tab title="Example request of debug.traceTransactionInBlockByIndex" %}
```yaml
debug.traceTransactionInBlockByIndex(blockRlp, txIndex, options)
```
{% endtab %}

{% tab title="Objects in debug_traceTransactionInBlockByIndex" %}
`GethTraceOptions`

| 字段名称           | Type      |
| -------------- | --------- |
| DisableStorage | `Boolean` |
| DisableMemory  | `Boolean` |
| DisableStack   | `Boolean` |
| Tracer         | `String`  |
| Timeout        | `String`  |

`GethLikeTxTrace`

| 字段名称            | Type       |
| --------------- | ---------- |
| StoragesByDepth | `Array`    |
| Gas             | `Quantity` |
| Failed          | `Boolean`  |
| ReturnValue     | `Data`     |
| Entries         | `Array`    |
{% endtab %}
{% endtabs %}

[参见 JSON RPC debug\_traceTransactionInBlockByIndex](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug\_tracetransactioninblockbyindex)
