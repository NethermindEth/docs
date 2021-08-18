# Trace module

## trace.block

Returns traces created at given block.

| Invocation |
| :--- |
| `trace.block(numberOrTag)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| numberOrTag | `BlockParameter object` |  |

| Returned type | Description |
| :--- | :--- |
| `ParityTxTraceFromStore object` |  |

{% tabs %}
{% tab title="Example request of trace.block" %}
```yaml
trace.block(latest)
```
{% endtab %}

{% tab title="Example response of trace.block" %}
```yaml
{"action":{"callType":"call","from":"0x31b98d14007bdee637298086988a0bbd31184523","gas":"0x0","input":"0x","to":"0x0e8cda5d7ebda67606a9b296a9dd4351bca1d263","value":"0x1043561a882930000"},"blockHash":"0x6537c92f1fae55d9ea9b0fb25744262114b09e50ac320d7d839830f8c4d723a0","blockNumber":8969312,"result":{"gasUsed":"0x0","output":"0x"},"subtraces":0,"traceAddress":[],"transactionHash":"0xf4860fc1dc22404b85db7d666dfae65dec7cdcb196837a67ffa992d709f78b9e","transactionPosition":11,"type":"call"},{"action":{"callType":"call","from":"0x71c95151c960aa3976b462ff41adb328790f110d","gas":"0x7205","input":"0x095ea7b3000000000000000000000000c5992c0e0a3267c7f75493d0f717201e26be35f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff","to":"0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea","value":"0x0"},"blockHash":"0x6537c92f1fae55d9ea9b0fb25744262114b09e50ac320d7d839830f8c4d723a0","blockNumber":8969312,"result":{"gasUsed":"0x5fdd","output":"0x0000000000000000000000000000000000000000000000000000000000000001"},"subtraces":0,"traceAddress":[],"transactionHash":"0xec216ca7e754ea289dd59fc7f9f2c9a5b90668afb5a52d49ee15c3c5fd559b3b","transactionPosition":12,"type":"call"}
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

[See also JSON RPC trace\_block](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/trace#trace_block)

## trace.call

Traces a call, returning the traces

| Invocation |
| :--- |
| `trace.call(message, traceTypes, blockParameter)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| message | `TransactionForRpc object` |  |
| traceTypes | `Array` |  |
| blockParameter | `BlockParameter object` |  |

| Returned type | Description |
| :--- | :--- |
| `ParityTxTraceFromReplay object` |  |

{% tabs %}
{% tab title="Example request of trace.call" %}
```yaml
trace.call(message, traceTypes, blockParameter)
```
{% endtab %}

{% tab title="Objects in trace\_call" %}
`TransactionForRpc`

| Field name | Type |
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
| MaxPriorityFeePerGas | `Quantity` |
| MaxFeePerGas | `Quantity` |
| Gas | `Quantity` |
| Data | `Data` |
| Input | `Data` |
| ChainId | `Quantity` |
| Type | `TxType object` |
| AccessList | `AccessListItemForRpc[] object` |
| V | `Quantity` |
| S | `Quantity` |
| R | `Quantity` |

`TxType`

* [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type

`AccessListItemForRpc[]`

| Field name | Type |
| :--- | :--- |
| Address | `Address` |
| StorageKeys | `Array` |

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

[See also JSON RPC trace\_call](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/trace#trace_call)

## trace.filter

Return all traces of the given filter

| Invocation |
| :--- |
| `trace.filter(traceFilterForRpc)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| traceFilterForRpc | `TraceFilterForRpc object` |  |

| Returned type | Description |
| :--- | :--- |
| `ParityTxTraceFromStore object` |  |

{% tabs %}
{% tab title="Example request of trace.filter" %}
```yaml
trace.filter(traceFilterForRpc)
```
{% endtab %}

{% tab title="Objects in trace\_filter" %}
`TraceFilterForRpc`

| Field name | Type |
| :--- | :--- |
| FromBlock | `BlockParameter object` |
| ToBlock | `BlockParameter object` |
| FromAddress | `Address[] object` |
| ToAddress | `Address[] object` |
| After | `Quantity` |
| Count | `Quantity` |

`BlockParameter`

| Field name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`Address[]`

| Field name | Type |
| :--- | :--- |
| Zero | `Address` |
| SystemUser | `Address` |
| Bytes | `Data` |
| Item | `Data` |

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

[See also JSON RPC trace\_filter](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/trace#trace_filter)

## trace.rawTransaction

Traces a call to eth\_sendRawTransaction without making the call, returning the traces

| Invocation |
| :--- |
| `trace.rawTransaction(data, traceTypes)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| data | `Data` |  |
| traceTypes | `Array` |  |

| Returned type | Description |
| :--- | :--- |
| `ParityTxTraceFromReplay object` |  |

{% tabs %}
{% tab title="Example request of trace.rawTransaction" %}
```yaml
trace.rawTransaction(data, traceTypes)
```
{% endtab %}

{% tab title="Example response of trace.rawTransaction" %}
```yaml
"output":"0x","stateDiff":null,"trace":[{"action":{"callType":"call","from":"0xc451c26cc24c25e46b148ac4716804c12c34e7d2","gas":"0x0","input":"0x","to":"0xb943b13292086848d8180d75c73361107920bb1a","value":"0x0"},"result":{"gasUsed":"0x0","output":"0x"},"subtraces":0,"traceAddress":[],"type":"call"}],"vmTrace":null
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

[See also JSON RPC trace\_rawTransaction](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/trace#trace_rawtransaction)

## trace.replayBlockTransactions

Replays all transactions in a block returning the requested traces for each transaction.

| Invocation |
| :--- |
| `trace.replayBlockTransactions(numberOrTag, traceTypes)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| numberOrTag | `BlockParameter object` |  |
| traceTypes | `Array` |  |

| Returned type | Description |
| :--- | :--- |
| `ParityTxTraceFromReplay object` |  |

{% tabs %}
{% tab title="Example request of trace.replayBlockTransactions" %}
```yaml
trace.replayBlockTransactions(numberOrTag, traceTypes)
```
{% endtab %}

{% tab title="Example response of trace.replayBlockTransactions" %}
```yaml
[{"output":"0x0000000000000000000000000000000000000000000000000000000000000001","stateDiff":null,"trace":[{"action":{"callType":"call","from":"0x37f207b3ebda37de11ad2b6d306464e313c4841a","gas":"0x3c36","input":"0xa9059cbb000000000000000000000000d20d2f4c0b595abedef821a4157b0b990a37dae60000000000000000000000000000000000000000000000008ac7230489e80000","to":"0x59a524d1f5dcbde3224fd42171795283596a8103","value":"0x0"},"result":{"gasUsed":"0x3c36","output":"0x0000000000000000000000000000000000000000000000000000000000000001"},"subtraces":0,"traceAddress":[],"type":"call"}],"transactionHash":"0x17dc0fef36bb997c79ee2a0a126d059227000a2d47c9bbd1f49b5902a4e7385a","vmTrace":null}, (...)]
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

[See also JSON RPC trace\_replayBlockTransactions](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/trace#trace_replayblocktransactions)

## trace.replayTransaction

Replays a transaction, returning the traces.

| Invocation |
| :--- |
| `trace.replayTransaction(txHash, traceTypes)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| txHash | `Hash` |  |
| traceTypes | `Array` |  |

| Returned type | Description |
| :--- | :--- |
| `ParityTxTraceFromReplay object` |  |

{% tabs %}
{% tab title="Example request of trace.replayTransaction" %}
```yaml
trace.replayTransaction(txHash, traceTypes)
```
{% endtab %}

{% tab title="Example response of trace.replayTransaction" %}
```yaml
{"output":"0x","stateDiff":null,"trace":[{"action":{"callType":"call","from":"0x3c436c8ec40e0679fe64168545812ac13220f150","gas":"0xc118","input":"0xd46eb119","to":"0x9e00de186f33e9fac9e28d69127f7f637b96c177","value":"0xde0b6b3a7640000"},"result":{"gasUsed":"0xc118","output":"0x"},"subtraces":4,"traceAddress":[],"type":"call"},{"action":{"callType":"call","from":"0x9e00de186f33e9fac9e28d69127f7f637b96c177","gas":"0xa965","input":"0x40c10f190000000000000000000000009e00de186f33e9fac9e28d69127f7f637b96c1770000000000000000000000000000000000000000000000000de0b6b3a7640000","to":"0x766cd52cb91f4d2d7ea8b4c175aff0aba3696be1","value":"0x0"},"result":{"gasUsed":"0x76b8","output":"0x"},"subtraces":0,"traceAddress":[0],"type":"call"}, (...)}]}
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

[See also JSON RPC trace\_replayTransaction](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/trace#trace_replaytransaction)

## trace.transaction

Returns all traces of given transaction

| Invocation |
| :--- |
| `trace.transaction(txHash)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| txHash | `Hash` |  |

| Returned type | Description |
| :--- | :--- |
| `ParityTxTraceFromStore object` |  |

{% tabs %}
{% tab title="Example request of trace.transaction" %}
```yaml
trace.transaction(["0x203abf19610ce15bc509d4b341e907ff8c5a8287ae61186fd4da82146408c28c"])
```
{% endtab %}

{% tab title="Example response of trace.transaction" %}
```yaml
[{"action":{"callType":"call","from":"0x3c436c8ec40e0679fe64168545812ac13220f150","gas":"0xc118","input":"0xd46eb119","to":"0x9e00de186f33e9fac9e28d69127f7f637b96c177","value":"0xde0b6b3a7640000"},"blockHash":"0xf40b4c9faaeaf116a50380ce3795297bc02068b062f1797cd507875347c3372e","blockNumber":8970132,"result":{"gasUsed":"0xc118","output":"0x"},"subtraces":4,"traceAddress":[],"transactionHash":"0x203abf19610ce15bc509d4b341e907ff8c5a8287ae61186fd4da82146408c28c","transactionPosition":9,"type":"call"},(...)]
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

[See also JSON RPC trace\_transaction](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/trace#trace_transaction)

