# trace

## trace_block

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
{% tab title="Example request of trace_block" %}
```
curl --data '{"method":"trace_block","params":[latest],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% tab title="Example response of trace_block" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": {"action":{"callType":"call","from":"0x31b98d14007bdee637298086988a0bbd31184523","gas":"0x0","input":"0x","to":"0x0e8cda5d7ebda67606a9b296a9dd4351bca1d263","value":"0x1043561a882930000"},"blockHash":"0x6537c92f1fae55d9ea9b0fb25744262114b09e50ac320d7d839830f8c4d723a0","blockNumber":8969312,"result":{"gasUsed":"0x0","output":"0x"},"subtraces":0,"traceAddress":[],"transactionHash":"0xf4860fc1dc22404b85db7d666dfae65dec7cdcb196837a67ffa992d709f78b9e","transactionPosition":11,"type":"call"},{"action":{"callType":"call","from":"0x71c95151c960aa3976b462ff41adb328790f110d","gas":"0x7205","input":"0x095ea7b3000000000000000000000000c5992c0e0a3267c7f75493d0f717201e26be35f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff","to":"0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea","value":"0x0"},"blockHash":"0x6537c92f1fae55d9ea9b0fb25744262114b09e50ac320d7d839830f8c4d723a0","blockNumber":8969312,"result":{"gasUsed":"0x5fdd","output":"0x0000000000000000000000000000000000000000000000000000000000000001"},"subtraces":0,"traceAddress":[],"transactionHash":"0xec216ca7e754ea289dd59fc7f9f2c9a5b90668afb5a52d49ee15c3c5fd559b3b","transactionPosition":12,"type":"call"},
  "id": 1
}
```
{% endtab %}

{% tab title="Objects in trace_block" %}

`BlockParameter`

| Field name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

- `Quantity` or `String` (latest, earliest, pending)


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
| Error | `String` |

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
## trace_call

Traces a call, returning the traces 

| Invocation |
| :--- |
| `{"method":"trace_call","params":[call, traceTypes, blockParameter]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| call | `TransactionForRpc object` |  |
| traceTypes | `Array` |  |
| blockParameter | `BlockParameter object` |  |

| Returned type | Description |
| :--- | :--- |
| `ParityTxTraceFromReplay object` |  |

{% tabs %}
{% tab title="Example request of trace_call" %}
```
curl --data '{"method":"trace_call","params":[call, traceTypes, blockParameter],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in trace_call" %}

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

- [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type


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

- `Quantity` or `String` (latest, earliest, pending)


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

[See also CLI trace.call](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/trace#trace-call)
## trace_filter

Return all traces of the given filter 

| Invocation |
| :--- |
| `{"method":"trace_filter","params":[traceFilterForRpc]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| traceFilterForRpc | `TraceFilterForRpc object` |  |

| Returned type | Description |
| :--- | :--- |
| `ParityTxTraceFromStore object` |  |

{% tabs %}
{% tab title="Example request of trace_filter" %}
```
curl --data '{"method":"trace_filter","params":[traceFilterForRpc],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in trace_filter" %}

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
| Error | `String` |

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

[See also CLI trace.filter](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/trace#trace-filter)
## trace_rawTransaction

Traces a call to eth_sendRawTransaction without making the call, returning the traces 

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
{% tab title="Example request of trace_rawTransaction" %}
```
curl --data '{"method":"trace_rawTransaction","params":[data, traceTypes],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% tab title="Example response of trace_rawTransaction" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": "output":"0x","stateDiff":null,"trace":[{"action":{"callType":"call","from":"0xc451c26cc24c25e46b148ac4716804c12c34e7d2","gas":"0x0","input":"0x","to":"0xb943b13292086848d8180d75c73361107920bb1a","value":"0x0"},"result":{"gasUsed":"0x0","output":"0x"},"subtraces":0,"traceAddress":[],"type":"call"}],"vmTrace":null,
  "id": 1
}
```
{% endtab %}

{% tab title="Objects in trace_rawTransaction" %}

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
## trace_replayBlockTransactions

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
{% tab title="Example request of trace_replayBlockTransactions" %}
```
curl --data '{"method":"trace_replayBlockTransactions","params":[numberOrTag, traceTypes],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% tab title="Example response of trace_replayBlockTransactions" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": [{"output":"0x0000000000000000000000000000000000000000000000000000000000000001","stateDiff":null,"trace":[{"action":{"callType":"call","from":"0x37f207b3ebda37de11ad2b6d306464e313c4841a","gas":"0x3c36","input":"0xa9059cbb000000000000000000000000d20d2f4c0b595abedef821a4157b0b990a37dae60000000000000000000000000000000000000000000000008ac7230489e80000","to":"0x59a524d1f5dcbde3224fd42171795283596a8103","value":"0x0"},"result":{"gasUsed":"0x3c36","output":"0x0000000000000000000000000000000000000000000000000000000000000001"},"subtraces":0,"traceAddress":[],"type":"call"}],"transactionHash":"0x17dc0fef36bb997c79ee2a0a126d059227000a2d47c9bbd1f49b5902a4e7385a","vmTrace":null}, (...)],
  "id": 1
}
```
{% endtab %}

{% tab title="Objects in trace_replayBlockTransactions" %}

`BlockParameter`

| Field name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

- `Quantity` or `String` (latest, earliest, pending)


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
## trace_replayTransaction

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
{% tab title="Example request of trace_replayTransaction" %}
```
curl --data '{"method":"trace_replayTransaction","params":[txHash, traceTypes],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% tab title="Example response of trace_replayTransaction" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": {"output":"0x","stateDiff":null,"trace":[{"action":{"callType":"call","from":"0x3c436c8ec40e0679fe64168545812ac13220f150","gas":"0xc118","input":"0xd46eb119","to":"0x9e00de186f33e9fac9e28d69127f7f637b96c177","value":"0xde0b6b3a7640000"},"result":{"gasUsed":"0xc118","output":"0x"},"subtraces":4,"traceAddress":[],"type":"call"},{"action":{"callType":"call","from":"0x9e00de186f33e9fac9e28d69127f7f637b96c177","gas":"0xa965","input":"0x40c10f190000000000000000000000009e00de186f33e9fac9e28d69127f7f637b96c1770000000000000000000000000000000000000000000000000de0b6b3a7640000","to":"0x766cd52cb91f4d2d7ea8b4c175aff0aba3696be1","value":"0x0"},"result":{"gasUsed":"0x76b8","output":"0x"},"subtraces":0,"traceAddress":[0],"type":"call"}, (...)}]},
  "id": 1
}
```
{% endtab %}

{% tab title="Objects in trace_replayTransaction" %}

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
## trace_transaction

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
{% tab title="Example request of trace_transaction" %}
```
curl --data '{"method":"trace_transaction","params":[["0x203abf19610ce15bc509d4b341e907ff8c5a8287ae61186fd4da82146408c28c"]],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% tab title="Example response of trace_transaction" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": [{"action":{"callType":"call","from":"0x3c436c8ec40e0679fe64168545812ac13220f150","gas":"0xc118","input":"0xd46eb119","to":"0x9e00de186f33e9fac9e28d69127f7f637b96c177","value":"0xde0b6b3a7640000"},"blockHash":"0xf40b4c9faaeaf116a50380ce3795297bc02068b062f1797cd507875347c3372e","blockNumber":8970132,"result":{"gasUsed":"0xc118","output":"0x"},"subtraces":4,"traceAddress":[],"transactionHash":"0x203abf19610ce15bc509d4b341e907ff8c5a8287ae61186fd4da82146408c28c","transactionPosition":9,"type":"call"},(...)],
  "id": 1
}
```
{% endtab %}

{% tab title="Objects in trace_transaction" %}

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
| Error | `String` |

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
