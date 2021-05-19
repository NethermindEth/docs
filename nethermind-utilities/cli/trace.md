# Trace module

## trace.block

返回在指定区块上创建的踪迹

| Invocation |
| :--- |
| `trace.block(numberOrTag)` |

| 参数 | Type | 描述 |
| :--- | :--- | :--- |
| numberOrTag | `BlockParameter object` |  |

| 返回值类型 | 描述 |
| :--- | :--- |
| `ParityTxTraceFromStore object` |  |

{% tabs %}
{% tab title="Example request of trace.block" %}
```yaml
trace.block(numberOrTag)
```
{% endtab %}

{% tab title="Objects in trace\_block" %}
`BlockParameter`

| 字段名称 | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

* `Quantity` 或 `String` \（最新、最早、待处理\）

`ParityTxTraceFromStore`

| 字段名称 | Type |
| :--- | :--- |
| Action | `ParityTraceAction object` |
| BlockHash | `Hash` |
| BlockNumber | `Quantity` |
| Result | `ParityTraceResult object` |
| Subtraces | `Quantity` |
| TraceAddress | `Array` |
| TransactionHash | `Hash` |
| TransactionPosition | `Quantity` |
| Type | `String` |

`ParityTraceAction`

| 字段名称 | Type |
| :--- | :--- |
| TraceAddress | `Array` |
| CallType | `String` |
| IncludeInTrace | `Boolean` |
| IsPrecompiled | `Boolean` |
| Type | `String` |
| CreationMethod | `String` |
| From | `Address` |
| To | `Address` |
| Gas | `Quantity` |
| Value | `Quantity` |
| Input | `Data` |
| Result | `ParityTraceResult object` |
| Subtraces | `Array` |
| Author | `Address` |
| RewardType | `String` |
| Error | `String` |

`ParityTraceResult`

| 字段名称 | Type |
| :--- | :--- |
| GasUsed | `Quantity` |
| Output | `Data` |
| Address | `Address` |
| Code | `Data` |
{% endtab %}
{% endtabs %}

[参见 JSON RPC trace\_block](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/trace#trace_block)

## trace.rawTransaction

追踪对 eth \ _sendRawTransaction 的调用，但不进行该调用，并返回其踪迹。

| Invocation |
| :--- |
| `trace.rawTransaction(data, traceTypes)` |

| 参数 | Type | 描述 |
| :--- | :--- | :--- |
| data | `Data` |  |
| traceTypes | `Array` |  |

| 返回值类型 | 描述 |
| :--- | :--- |
| `ParityTxTraceFromReplay object` |  |

{% tabs %}
{% tab title="Example request of trace.rawTransaction" %}
```yaml
trace.rawTransaction(data, traceTypes)
```
{% endtab %}

{% tab title="Objects in trace\_rawTransaction" %}
`ParityTxTraceFromReplay`

| 字段名称 | Type |
| :--- | :--- |
| Output | `Data` |
| TransactionHash | `Hash` |
| VmTrace | `ParityVmTrace object` |
| Action | `ParityTraceAction object` |
| StateChanges | `Array` |

`ParityVmTrace`

| 字段名称 | Type |
| :--- | :--- |
| Code | `Data` |
| Operations | `ParityVmOperationTrace[] object` |

`ParityTraceAction`

| 字段名称 | Type |
| :--- | :--- |
| TraceAddress | `Array` |
| CallType | `String` |
| IncludeInTrace | `Boolean` |
| IsPrecompiled | `Boolean` |
| Type | `String` |
| CreationMethod | `String` |
| From | `Address` |
| To | `Address` |
| Gas | `Quantity` |
| Value | `Quantity` |
| Input | `Data` |
| Result | `ParityTraceResult object` |
| Subtraces | `Array` |
| Author | `Address` |
| RewardType | `String` |
| Error | `String` |
{% endtab %}
{% endtabs %}

[参见 JSON RPC trace\_rawTransaction](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/trace#trace_rawtransaction)

## trace.replayBlockTransactions

重放一个区块中的所有交易，根据请求返回每个交易的踪迹

| Invocation |
| :--- |
| `trace.replayBlockTransactions(numberOrTag, traceTypes)` |

| 参数 | Type | 描述 |
| :--- | :--- | :--- |
| numberOrTag | `BlockParameter object` |  |
| traceTypes | `Array` |  |

| 返回值类型 | 描述 |
| :--- | :--- |
| `ParityTxTraceFromReplay object` |  |

{% tabs %}
{% tab title="Example request of trace.replayBlockTransactions" %}
```yaml
trace.replayBlockTransactions(numberOrTag, traceTypes)
```
{% endtab %}

{% tab title="Objects in trace\_replayBlockTransactions" %}
`BlockParameter`

| 字段名称 | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

* `Quantity` 或 `String` \（最新、最早、待处理\）

`ParityTxTraceFromReplay`

| 字段名称 | Type |
| :--- | :--- |
| Output | `Data` |
| TransactionHash | `Hash` |
| VmTrace | `ParityVmTrace object` |
| Action | `ParityTraceAction object` |
| StateChanges | `Array` |

`ParityVmTrace`

| 字段名称 | Type |
| :--- | :--- |
| Code | `Data` |
| Operations | `ParityVmOperationTrace[] object` |

`ParityTraceAction`

| 字段名称 | Type |
| :--- | :--- |
| TraceAddress | `Array` |
| CallType | `String` |
| IncludeInTrace | `Boolean` |
| IsPrecompiled | `Boolean` |
| Type | `String` |
| CreationMethod | `String` |
| From | `Address` |
| To | `Address` |
| Gas | `Quantity` |
| Value | `Quantity` |
| Input | `Data` |
| Result | `ParityTraceResult object` |
| Subtraces | `Array` |
| Author | `Address` |
| RewardType | `String` |
| Error | `String` |
{% endtab %}
{% endtabs %}

[参见 JSON RPC trace\_replayBlockTransactions](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/trace#trace_replayblocktransactions)

## trace.replayTransaction

重放一个交易，返回其踪迹

| Invocation |
| :--- |
| `trace.replayTransaction(txHash, traceTypes)` |

| 参数 | Type | 描述 |
| :--- | :--- | :--- |
| txHash | `Hash` |  |
| traceTypes | `Array` |  |

| 返回值类型 | 描述 |
| :--- | :--- |
| `ParityTxTraceFromReplay object` |  |

{% tabs %}
{% tab title="Example request of trace.replayTransaction" %}
```yaml
trace.replayTransaction(txHash, traceTypes)
```
{% endtab %}

{% tab title="Objects in trace\_replayTransaction" %}
`ParityTxTraceFromReplay`

| 字段名称 | Type |
| :--- | :--- |
| Output | `Data` |
| TransactionHash | `Hash` |
| VmTrace | `ParityVmTrace object` |
| Action | `ParityTraceAction object` |
| StateChanges | `Array` |

`ParityVmTrace`

| 字段名称 | Type |
| :--- | :--- |
| Code | `Data` |
| Operations | `ParityVmOperationTrace[] object` |

`ParityTraceAction`

| 字段名称 | Type |
| :--- | :--- |
| TraceAddress | `Array` |
| CallType | `String` |
| IncludeInTrace | `Boolean` |
| IsPrecompiled | `Boolean` |
| Type | `String` |
| CreationMethod | `String` |
| From | `Address` |
| To | `Address` |
| Gas | `Quantity` |
| Value | `Quantity` |
| Input | `Data` |
| Result | `ParityTraceResult object` |
| Subtraces | `Array` |
| Author | `Address` |
| RewardType | `String` |
| Error | `String` |
{% endtab %}
{% endtabs %}

[参见 JSON RPC trace\_replayTransaction](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/trace#trace_replaytransaction)

## trace.transaction

返回指定交易的所有踪迹

| Invocation |
| :--- |
| `trace.transaction(txHash)` |

| 参数 | Type | 描述 |
| :--- | :--- | :--- |
| txHash | `Hash` |  |

| 返回值类型 | 描述 |
| :--- | :--- |
| `ParityTxTraceFromStore object` |  |

{% tabs %}
{% tab title="Example request of trace.transaction" %}
```yaml
trace.transaction(txHash)
```
{% endtab %}

{% tab title="Objects in trace\_transaction" %}
`ParityTxTraceFromStore`

| 字段名称 | Type |
| :--- | :--- |
| Action | `ParityTraceAction object` |
| BlockHash | `Hash` |
| BlockNumber | `Quantity` |
| Result | `ParityTraceResult object` |
| Subtraces | `Quantity` |
| TraceAddress | `Array` |
| TransactionHash | `Hash` |
| TransactionPosition | `Quantity` |
| Type | `String` |

`ParityTraceAction`

| 字段名称 | Type |
| :--- | :--- |
| TraceAddress | `Array` |
| CallType | `String` |
| IncludeInTrace | `Boolean` |
| IsPrecompiled | `Boolean` |
| Type | `String` |
| CreationMethod | `String` |
| From | `Address` |
| To | `Address` |
| Gas | `Quantity` |
| Value | `Quantity` |
| Input | `Data` |
| Result | `ParityTraceResult object` |
| Subtraces | `Array` |
| Author | `Address` |
| RewardType | `String` |
| Error | `String` |

`ParityTraceResult`

| 字段名称 | Type |
| :--- | :--- |
| GasUsed | `Quantity` |
| Output | `Data` |
| Address | `Address` |
| Code | `Data` |
{% endtab %}
{% endtabs %}

[参见 JSON RPC trace\_transaction](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/trace#trace_transaction)

