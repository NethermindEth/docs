# Trace module

## trace\_block

返回在指定区块上创建的踪迹

| Invocation |
| :--- |
| `{"method":"trace_block","params":[numberOrTag]}` |

| 参数 | Type | 描述 |
| :--- | :--- | :--- |
| numberOrTag | `BlockParameter object` |  |

| 返回值类型 | 描述 |
| :--- | :--- |
| `ParityTxTraceFromStore object` |  |

{% tabs %}
{% tab title="Example request of trace\_block" %}
```text
curl --data '{"method":"trace_block","params":[numberOrTag],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
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

[参见 CLI trace.block](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/trace#trace-block)

## trace\_rawTransaction

追踪对 eth \ _sendRawTransaction 的调用，但不进行该调用，并返回其踪迹。

| Invocation |
| :--- |
| `{"method":"trace_rawTransaction","params":[data, traceTypes]}` |

| 参数 | Type | 描述 |
| :--- | :--- | :--- |
| data | `Data` |  |
| traceTypes | `Array` |  |

| 返回值类型 | 描述 |
| :--- | :--- |
| `ParityTxTraceFromReplay object` |  |

{% tabs %}
{% tab title="Example request of trace\_rawTransaction" %}
```text
curl --data '{"method":"trace_rawTransaction","params":[data, traceTypes],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
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

[参见 CLI trace.rawTransaction](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/trace#trace-rawtransaction)

## trace\_replayBlockTransactions

重放一个区块中的所有交易，根据请求返回每个交易的踪迹

| Invocation |
| :--- |
| `{"method":"trace_replayBlockTransactions","params":[numberOrTag, traceTypes]}` |

| 参数 | Type | 描述 |
| :--- | :--- | :--- |
| numberOrTag | `BlockParameter object` |  |
| traceTypes | `Array` |  |

| 返回值类型 | 描述 |
| :--- | :--- |
| `ParityTxTraceFromReplay object` |  |

{% tabs %}
{% tab title="Example request of trace\_replayBlockTransactions" %}
```text
curl --data '{"method":"trace_replayBlockTransactions","params":[numberOrTag, traceTypes],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
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

[参见 CLI trace.replayBlockTransactions](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/trace#trace-replayblocktransactions)

## trace\_replayTransaction

重放一个交易，返回其踪迹

| Invocation |
| :--- |
| `{"method":"trace_replayTransaction","params":[txHash, traceTypes]}` |

| 参数 | Type | 描述 |
| :--- | :--- | :--- |
| txHash | `Hash` |  |
| traceTypes | `Array` |  |

| 返回值类型 | 描述 |
| :--- | :--- |
| `ParityTxTraceFromReplay object` |  |

{% tabs %}
{% tab title="Example request of trace\_replayTransaction" %}
```text
curl --data '{"method":"trace_replayTransaction","params":[txHash, traceTypes],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
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

[参见 CLI trace.replayTransaction](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/trace#trace-replaytransaction)

## trace\_transaction

返回指定交易的所有踪迹

| Invocation |
| :--- |
| `{"method":"trace_transaction","params":[txHash]}` |

| 参数 | Type | 描述 |
| :--- | :--- | :--- |
| txHash | `Hash` |  |

| 返回值类型 | 描述 |
| :--- | :--- |
| `ParityTxTraceFromStore object` |  |

{% tabs %}
{% tab title="Example request of trace\_transaction" %}
```text
curl --data '{"method":"trace_transaction","params":[txHash],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
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

[参见 CLI trace.transaction](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/trace#trace-transaction)

