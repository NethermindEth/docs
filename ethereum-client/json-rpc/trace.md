# Trace module

## trace\_block

Returns traces created at given block.

| Invocation |
| :--- |
| `{"method":"trace_block","params":[numberOrTag]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| numberOrTag | `BlockParameter object` |  |

| Returned type | Description |
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

| Field name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

* `Quantity` or `String` \(latest, earliest, pending\)

`ParityTxTraceFromStore`

| Field name | Type |
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

| Field name | Type |
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

| Field name | Type |
| :--- | :--- |
| GasUsed | `Quantity` |
| Output | `Data` |
| Address | `Address` |
| Code | `Data` |
{% endtab %}
{% endtabs %}

[See also CLI trace.block](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/trace#trace-block)

## trace\_rawTransaction

Traces a call to eth\_sendRawTransaction without making the call, returning the traces

| Invocation |
| :--- |
| `{"method":"trace_rawTransaction","params":[data, traceTypes]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| data | `Data` |  |
| traceTypes | `Array` |  |

| Returned type | Description |
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

| Field name | Type |
| :--- | :--- |
| Output | `Data` |
| TransactionHash | `Hash` |
| VmTrace | `ParityVmTrace object` |
| Action | `ParityTraceAction object` |
| StateChanges | `Array` |

`ParityVmTrace`

| Field name | Type |
| :--- | :--- |
| Code | `Data` |
| Operations | `ParityVmOperationTrace[] object` |

`ParityTraceAction`

| Field name | Type |
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

[See also CLI trace.rawTransaction](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/trace#trace-rawtransaction)

## trace\_replayBlockTransactions

Replays all transactions in a block returning the requested traces for each transaction.

| Invocation |
| :--- |
| `{"method":"trace_replayBlockTransactions","params":[numberOrTag, traceTypes]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| numberOrTag | `BlockParameter object` |  |
| traceTypes | `Array` |  |

| Returned type | Description |
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

| Field name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

* `Quantity` or `String` \(latest, earliest, pending\)

`ParityTxTraceFromReplay`

| Field name | Type |
| :--- | :--- |
| Output | `Data` |
| TransactionHash | `Hash` |
| VmTrace | `ParityVmTrace object` |
| Action | `ParityTraceAction object` |
| StateChanges | `Array` |

`ParityVmTrace`

| Field name | Type |
| :--- | :--- |
| Code | `Data` |
| Operations | `ParityVmOperationTrace[] object` |

`ParityTraceAction`

| Field name | Type |
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

[See also CLI trace.replayBlockTransactions](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/trace#trace-replayblocktransactions)

## trace\_replayTransaction

Replays a transaction, returning the traces.

| Invocation |
| :--- |
| `{"method":"trace_replayTransaction","params":[txHash, traceTypes]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| txHash | `Hash` |  |
| traceTypes | `Array` |  |

| Returned type | Description |
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

| Field name | Type |
| :--- | :--- |
| Output | `Data` |
| TransactionHash | `Hash` |
| VmTrace | `ParityVmTrace object` |
| Action | `ParityTraceAction object` |
| StateChanges | `Array` |

`ParityVmTrace`

| Field name | Type |
| :--- | :--- |
| Code | `Data` |
| Operations | `ParityVmOperationTrace[] object` |

`ParityTraceAction`

| Field name | Type |
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

[See also CLI trace.replayTransaction](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/trace#trace-replaytransaction)

## trace\_transaction

Returns all traces of given transaction

| Invocation |
| :--- |
| `{"method":"trace_transaction","params":[txHash]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| txHash | `Hash` |  |

| Returned type | Description |
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

| Field name | Type |
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

| Field name | Type |
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

| Field name | Type |
| :--- | :--- |
| GasUsed | `Quantity` |
| Output | `Data` |
| Address | `Address` |
| Code | `Data` |
{% endtab %}
{% endtabs %}

[See also CLI trace.transaction](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/trace#trace-transaction)

