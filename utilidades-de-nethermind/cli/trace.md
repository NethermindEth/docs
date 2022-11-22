# Trace module

## trace.block

Returns traces created at given block.

| Invocación                 |
| -------------------------- |
| `trace.block(numberOrTag)` |

| Parámetro   | Tipo                    | Descripción |
| ----------- | ----------------------- | ----------- |
| numberOrTag | `BlockParameter object` |             |

| Tipo de retorno                 | Descripción |
| ------------------------------- | ----------- |
| `ParityTxTraceFromStore object` |             |

{% tabs %}
{% tab title="Example request of trace.block" %}
```yaml
trace.block(numberOrTag)
```
{% endtab %}

{% tab title="Objects in trace_block" %}
`BlockParameter`

| Nombre de los campos | Tipo                        |
| -------------------- | --------------------------- |
| Tipo                 | `BlockParameterType object` |
| BlockNumber          | `Quantity`                  |
| BlockHash            | `Hash`                      |
| RequireCanonical     | `Boolean`                   |

`BlockParameterType`

* `Quantity` o  `String` (latest, earliest, pending)

`ParityTxTraceFromStore`

| Nombre de los campos | Tipo                       |
| -------------------- | -------------------------- |
| Action               | `ParityTraceAction object` |
| BlockHash            | `Hash`                     |
| BlockNumber          | `Quantity`                 |
| Result               | `ParityTraceResult object` |
| Subtraces            | `Quantity`                 |
| TraceAddress         | `Array`                    |
| TransactionHash      | `Hash`                     |
| TransactionPosition  | `Quantity`                 |
| Tipo                 | `String`                   |

`ParityTraceAction`

| Nombre de los campos | Tipo                       |
| -------------------- | -------------------------- |
| TraceAddress         | `Array`                    |
| CallType             | `String`                   |
| IncludeInTrace       | `Boolean`                  |
| IsPrecompiled        | `Boolean`                  |
| Tipo                 | `String`                   |
| CreationMethod       | `String`                   |
| From                 | `Address`                  |
| To                   | `Address`                  |
| Gas                  | `Quantity`                 |
| Value                | `Quantity`                 |
| Input                | `Data`                     |
| Result               | `ParityTraceResult object` |
| Subtraces            | `Array`                    |
| Author               | `Address`                  |
| RewardType           | `String`                   |
| Error                | `String`                   |

`ParityTraceResult`

| Nombre de los campos | Tipo       |
| -------------------- | ---------- |
| GasUsed              | `Quantity` |
| Output               | `Data`     |
| Address              | `Address`  |
| Code                 | `Data`     |
{% endtab %}
{% endtabs %}

[See also JSON RPC trace\_block](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/trace#trace\_block)

## trace.rawTransaction

Rastrea una llamada a eth\_sendRawTransaction sin hacer la llamada, devolviendo los rastros

| Invocación                               |
| ---------------------------------------- |
| `trace.rawTransaction(data, traceTypes)` |

| Parámetro  | Tipo    | Descripción |
| ---------- | ------- | ----------- |
| data       | `Data`  |             |
| traceTypes | `Array` |             |

| Tipo de retorno                  | Descripción |
| -------------------------------- | ----------- |
| `ParityTxTraceFromReplay object` |             |

{% tabs %}
{% tab title="Example request of trace.rawTransaction" %}
```yaml
trace.rawTransaction(data, traceTypes)
```
{% endtab %}

{% tab title="Objects in trace_rawTransaction" %}
`ParityTxTraceFromReplay`

| Nombre de los campos | Tipo                       |
| -------------------- | -------------------------- |
| Output               | `Data`                     |
| TransactionHash      | `Hash`                     |
| VmTrace              | `ParityVmTrace object`     |
| Action               | `ParityTraceAction object` |
| StateChanges         | `Array`                    |

`ParityVmTrace`

| Nombre de los campos | Tipo                              |
| -------------------- | --------------------------------- |
| Code                 | `Data`                            |
| Operations           | `ParityVmOperationTrace[] object` |

`ParityTraceAction`

| Nombre de los campos | Tipo                       |
| -------------------- | -------------------------- |
| TraceAddress         | `Array`                    |
| CallType             | `String`                   |
| IncludeInTrace       | `Boolean`                  |
| IsPrecompiled        | `Boolean`                  |
| Tipo                 | `String`                   |
| CreationMethod       | `String`                   |
| From                 | `Address`                  |
| To                   | `Address`                  |
| Gas                  | `Quantity`                 |
| Value                | `Quantity`                 |
| Input                | `Data`                     |
| Result               | `ParityTraceResult object` |
| Subtraces            | `Array`                    |
| Author               | `Address`                  |
| RewardType           | `String`                   |
| Error                | `String`                   |
{% endtab %}
{% endtabs %}

[See also JSON RPC trace\_rawTransaction](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/trace#trace\_rawtransaction)

## trace.replayBlockTransactions

Replays all transactions in a block returning the requested traces for each transaction.

| Invocación                                               |
| -------------------------------------------------------- |
| `trace.replayBlockTransactions(numberOrTag, traceTypes)` |

| Parámetro   | Tipo                    | Descripción |
| ----------- | ----------------------- | ----------- |
| numberOrTag | `BlockParameter object` |             |
| traceTypes  | `Array`                 |             |

| Tipo de retorno                  | Descripción |
| -------------------------------- | ----------- |
| `ParityTxTraceFromReplay object` |             |

{% tabs %}
{% tab title="Example request of trace.replayBlockTransactions" %}
```yaml
trace.replayBlockTransactions(numberOrTag, traceTypes)
```
{% endtab %}

{% tab title="Objects in trace_replayBlockTransactions" %}
`BlockParameter`

| Nombre de los campos | Tipo                        |
| -------------------- | --------------------------- |
| Tipo                 | `BlockParameterType object` |
| BlockNumber          | `Quantity`                  |
| BlockHash            | `Hash`                      |
| RequireCanonical     | `Boolean`                   |

`BlockParameterType`

* `Quantity` o  `String` (latest, earliest, pending)

`ParityTxTraceFromReplay`

| Nombre de los campos | Tipo                       |
| -------------------- | -------------------------- |
| Output               | `Data`                     |
| TransactionHash      | `Hash`                     |
| VmTrace              | `ParityVmTrace object`     |
| Action               | `ParityTraceAction object` |
| StateChanges         | `Array`                    |

`ParityVmTrace`

| Nombre de los campos | Tipo                              |
| -------------------- | --------------------------------- |
| Code                 | `Data`                            |
| Operations           | `ParityVmOperationTrace[] object` |

`ParityTraceAction`

| Nombre de los campos | Tipo                       |
| -------------------- | -------------------------- |
| TraceAddress         | `Array`                    |
| CallType             | `String`                   |
| IncludeInTrace       | `Boolean`                  |
| IsPrecompiled        | `Boolean`                  |
| Tipo                 | `String`                   |
| CreationMethod       | `String`                   |
| From                 | `Address`                  |
| To                   | `Address`                  |
| Gas                  | `Quantity`                 |
| Value                | `Quantity`                 |
| Input                | `Data`                     |
| Result               | `ParityTraceResult object` |
| Subtraces            | `Array`                    |
| Author               | `Address`                  |
| RewardType           | `String`                   |
| Error                | `String`                   |
{% endtab %}
{% endtabs %}

[See also JSON RPC trace\_replayBlockTransactions](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/trace#trace\_replayblocktransactions)

## trace.replayTransaction

Replays a transaction, returning the traces.

| Invocación                                    |
| --------------------------------------------- |
| `trace.replayTransaction(txHash, traceTypes)` |

| Parámetro  | Tipo    | Descripción |
| ---------- | ------- | ----------- |
| txHash     | `Hash`  |             |
| traceTypes | `Array` |             |

| Tipo de retorno                  | Descripción |
| -------------------------------- | ----------- |
| `ParityTxTraceFromReplay object` |             |

{% tabs %}
{% tab title="Example request of trace.replayTransaction" %}
```yaml
trace.replayTransaction(txHash, traceTypes)
```
{% endtab %}

{% tab title="Objects in trace_replayTransaction" %}
`ParityTxTraceFromReplay`

| Nombre de los campos | Tipo                       |
| -------------------- | -------------------------- |
| Output               | `Data`                     |
| TransactionHash      | `Hash`                     |
| VmTrace              | `ParityVmTrace object`     |
| Action               | `ParityTraceAction object` |
| StateChanges         | `Array`                    |

`ParityVmTrace`

| Nombre de los campos | Tipo                              |
| -------------------- | --------------------------------- |
| Code                 | `Data`                            |
| Operations           | `ParityVmOperationTrace[] object` |

`ParityTraceAction`

| Nombre de los campos | Tipo                       |
| -------------------- | -------------------------- |
| TraceAddress         | `Array`                    |
| CallType             | `String`                   |
| IncludeInTrace       | `Boolean`                  |
| IsPrecompiled        | `Boolean`                  |
| Tipo                 | `String`                   |
| CreationMethod       | `String`                   |
| From                 | `Address`                  |
| To                   | `Address`                  |
| Gas                  | `Quantity`                 |
| Value                | `Quantity`                 |
| Input                | `Data`                     |
| Result               | `ParityTraceResult object` |
| Subtraces            | `Array`                    |
| Author               | `Address`                  |
| RewardType           | `String`                   |
| Error                | `String`                   |
{% endtab %}
{% endtabs %}

[See also JSON RPC trace\_replayTransaction](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/trace#trace\_replaytransaction)

## trace.transaction

Returns all traces of given transaction

| Invocación                  |
| --------------------------- |
| `trace.transaction(txHash)` |

| Parámetro | Tipo   | Descripción |
| --------- | ------ | ----------- |
| txHash    | `Hash` |             |

| Tipo de retorno                 | Descripción |
| ------------------------------- | ----------- |
| `ParityTxTraceFromStore object` |             |

{% tabs %}
{% tab title="Example request of trace.transaction" %}
```yaml
trace.transaction(txHash)
```
{% endtab %}

{% tab title="Objects in trace_transaction" %}
`ParityTxTraceFromStore`

| Nombre de los campos | Tipo                       |
| -------------------- | -------------------------- |
| Action               | `ParityTraceAction object` |
| BlockHash            | `Hash`                     |
| BlockNumber          | `Quantity`                 |
| Result               | `ParityTraceResult object` |
| Subtraces            | `Quantity`                 |
| TraceAddress         | `Array`                    |
| TransactionHash      | `Hash`                     |
| TransactionPosition  | `Quantity`                 |
| Tipo                 | `String`                   |

`ParityTraceAction`

| Nombre de los campos | Tipo                       |
| -------------------- | -------------------------- |
| TraceAddress         | `Array`                    |
| CallType             | `String`                   |
| IncludeInTrace       | `Boolean`                  |
| IsPrecompiled        | `Boolean`                  |
| Tipo                 | `String`                   |
| CreationMethod       | `String`                   |
| From                 | `Address`                  |
| To                   | `Address`                  |
| Gas                  | `Quantity`                 |
| Value                | `Quantity`                 |
| Input                | `Data`                     |
| Result               | `ParityTraceResult object` |
| Subtraces            | `Array`                    |
| Author               | `Address`                  |
| RewardType           | `String`                   |
| Error                | `String`                   |

`ParityTraceResult`

| Nombre de los campos | Tipo       |
| -------------------- | ---------- |
| GasUsed              | `Quantity` |
| Output               | `Data`     |
| Address              | `Address`  |
| Code                 | `Data`     |
{% endtab %}
{% endtabs %}

[See also JSON RPC trace\_transaction](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/trace#trace\_transaction)
