# Trace module

## trace\_block

Returns traces created at given block.

| Invocación |
| :--- |
| `{"method":"trace_block","params":[numberOrTag]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| numberOrTag | `BlockParameter object` |  |

| Tipo de retorno | Descripción |
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

| Nombre de los campos | Tipo |
| :--- | :--- |
| Tipo | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

* `Quantity` o  `String` \(latest, earliest, pending\)

`ParityTxTraceFromStore`

| Nombre de los campos | Tipo |
| :--- | :--- |
| Action | `ParityTraceAction object` |
| BlockHash | `Hash` |
| BlockNumber | `Quantity` |
| Result | `ParityTraceResult object` |
| Subtraces | `Quantity` |
| TraceAddress | `Array` |
| TransactionHash | `Hash` |
| TransactionPosition | `Quantity` |
| Tipo | `String` |

`ParityTraceAction`

| Nombre de los campos | Tipo |
| :--- | :--- |
| TraceAddress | `Array` |
| CallType | `String` |
| IncludeInTrace | `Boolean` |
| IsPrecompiled | `Boolean` |
| Tipo | `String` |
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

| Nombre de los campos | Tipo |
| :--- | :--- |
| GasUsed | `Quantity` |
| Output | `Data` |
| Address | `Address` |
| Code | `Data` |
{% endtab %}
{% endtabs %}

[ingrese a CLI trace.block](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/trace#trace-block)

## trace\_rawTransaction

Rastrea una llamada a eth\_sendRawTransaction sin hacer la llamada, devolviendo los rastros

| Invocación |
| :--- |
| `{"method":"trace_rawTransaction","params":[data, traceTypes]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| data | `Data` |  |
| traceTypes | `Array` |  |

| Tipo de retorno | Descripción |
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

| Nombre de los campos | Tipo |
| :--- | :--- |
| Output | `Data` |
| TransactionHash | `Hash` |
| VmTrace | `ParityVmTrace object` |
| Action | `ParityTraceAction object` |
| StateChanges | `Array` |

`ParityVmTrace`

| Nombre de los campos | Tipo |
| :--- | :--- |
| Code | `Data` |
| Operations | `ParityVmOperationTrace[] object` |

`ParityTraceAction`

| Nombre de los campos | Tipo |
| :--- | :--- |
| TraceAddress | `Array` |
| CallType | `String` |
| IncludeInTrace | `Boolean` |
| IsPrecompiled | `Boolean` |
| Tipo | `String` |
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

[ingrese a CLI trace.rawTransaction](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/trace#trace-rawtransaction)

## trace\_replayBlockTransactions

Replays all transactions in a block returning the requested traces for each transaction.

| Invocación |
| :--- |
| `{"method":"trace_replayBlockTransactions","params":[numberOrTag, traceTypes]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| numberOrTag | `BlockParameter object` |  |
| traceTypes | `Array` |  |

| Tipo de retorno | Descripción |
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

| Nombre de los campos | Tipo |
| :--- | :--- |
| Tipo | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

* `Quantity` o  `String` \(latest, earliest, pending\)

`ParityTxTraceFromReplay`

| Nombre de los campos | Tipo |
| :--- | :--- |
| Output | `Data` |
| TransactionHash | `Hash` |
| VmTrace | `ParityVmTrace object` |
| Action | `ParityTraceAction object` |
| StateChanges | `Array` |

`ParityVmTrace`

| Nombre de los campos | Tipo |
| :--- | :--- |
| Code | `Data` |
| Operations | `ParityVmOperationTrace[] object` |

`ParityTraceAction`

| Nombre de los campos | Tipo |
| :--- | :--- |
| TraceAddress | `Array` |
| CallType | `String` |
| IncludeInTrace | `Boolean` |
| IsPrecompiled | `Boolean` |
| Tipo | `String` |
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

[ingrese a CLI trace.replayBlockTransactions](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/trace#trace-replayblocktransactions)

## trace\_replayTransaction

Replays a transaction, returning the traces.

| Invocación |
| :--- |
| `{"method":"trace_replayTransaction","params":[txHash, traceTypes]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| txHash | `Hash` |  |
| traceTypes | `Array` |  |

| Tipo de retorno | Descripción |
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

| Nombre de los campos | Tipo |
| :--- | :--- |
| Output | `Data` |
| TransactionHash | `Hash` |
| VmTrace | `ParityVmTrace object` |
| Action | `ParityTraceAction object` |
| StateChanges | `Array` |

`ParityVmTrace`

| Nombre de los campos | Tipo |
| :--- | :--- |
| Code | `Data` |
| Operations | `ParityVmOperationTrace[] object` |

`ParityTraceAction`

| Nombre de los campos | Tipo |
| :--- | :--- |
| TraceAddress | `Array` |
| CallType | `String` |
| IncludeInTrace | `Boolean` |
| IsPrecompiled | `Boolean` |
| Tipo | `String` |
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

[ingrese a CLI trace.replayTransaction](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/trace#trace-replaytransaction)

## trace\_transaction

Returns all traces of given transaction

| Invocación |
| :--- |
| `{"method":"trace_transaction","params":[txHash]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| txHash | `Hash` |  |

| Tipo de retorno | Descripción |
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

| Nombre de los campos | Tipo |
| :--- | :--- |
| Action | `ParityTraceAction object` |
| BlockHash | `Hash` |
| BlockNumber | `Quantity` |
| Result | `ParityTraceResult object` |
| Subtraces | `Quantity` |
| TraceAddress | `Array` |
| TransactionHash | `Hash` |
| TransactionPosition | `Quantity` |
| Tipo | `String` |

`ParityTraceAction`

| Nombre de los campos | Tipo |
| :--- | :--- |
| TraceAddress | `Array` |
| CallType | `String` |
| IncludeInTrace | `Boolean` |
| IsPrecompiled | `Boolean` |
| Tipo | `String` |
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

| Nombre de los campos | Tipo |
| :--- | :--- |
| GasUsed | `Quantity` |
| Output | `Data` |
| Address | `Address` |
| Code | `Data` |
{% endtab %}
{% endtabs %}

[ingrese a CLI trace.transaction](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/trace#trace-transaction)

