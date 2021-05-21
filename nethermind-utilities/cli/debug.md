# Debug module

## debug.config

| Invocación |
| :--- |
| `debug.config(category, name)` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| category | `String` |  |
| name | `String` |  |

| Tipo de retorno | Descripción |
| :--- | :--- |
| `String` |  |

{% tabs %}
{% tab title="Example request of debug.config" %}
```yaml
debug.config(category, name)
```
{% endtab %}
{% endtabs %}

## debug.getBlockRlp

Recupera un bloque en la forma serializada RLP.

| Invocación |
| :--- |
| `debug.getBlockRlp(number)` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| number | `Quantity` |  |

| Tipo de retorno | Descripción |
| :--- | :--- |
| `Data` |  |

{% tabs %}
{% tab title="Example request of debug.getBlockRlp" %}
```yaml
debug.getBlockRlp(number)
```
{% endtab %}
{% endtabs %}

[See also JSON RPC debug\_getBlockRlp](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug_getblockrlp)

## debug.getBlockRlpByHash

Recupera un bloque en la forma serializada RLP.

| Invocación |
| :--- |
| `debug.getBlockRlpByHash(hash)` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| hash | `Hash` |  |

| Tipo de retorno | Descripción |
| :--- | :--- |
| `Data` |  |

{% tabs %}
{% tab title="Example request of debug.getBlockRlpByHash" %}
```yaml
debug.getBlockRlpByHash(hash)
```
{% endtab %}
{% endtabs %}

[See also JSON RPC debug\_getBlockRlpByHash](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug_getblockrlpbyhash)

## debug.getChainLevel

Recupera una representación de las ramas de los árboles en un nivel de cadena determinado \ (específico de Nethermind\).

| Invocación |
| :--- |
| `debug.getChainLevel(number)` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| number | `Quantity` |  |

| Tipo de retorno | Descripción |
| :--- | :--- |
| `ChainLevelForRpc object` |  |

{% tabs %}
{% tab title="Example request of debug.getChainLevel" %}
```yaml
debug.getChainLevel(number)
```
{% endtab %}

{% tab title="Objects in debug\_getChainLevel" %}
`ChainLevelForRpc`

| Nombre de los campos | Tipo |
| :--- | :--- |
| BlockInfos | `BlockInfoForRpc[] object` |
| HasBlockOnMainChain | `Boolean` |

`BlockInfoForRpc[]`

| Nombre de los campos | Tipo |
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

[See also JSON RPC debug\_getChainLevel](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug_getchainlevel)

## debug.migrateReceipts

Establece el número de bloque hasta el que se migrarán los recibos a \(específico de Nethermind\).

| Invocación |
| :--- |
| `debug.migrateReceipts(blockNumber)` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| blockNumber | `Quantity` |  |

| Tipo de retorno | Descripción |
| :--- | :--- |
| `Boolean` |  |

{% tabs %}
{% tab title="Example request of debug.migrateReceipts" %}
```yaml
debug.migrateReceipts(blockNumber)
```
{% endtab %}
{% endtabs %}

[See also JSON RPC debug\_migrateReceipts](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug_migratereceipts)

## debug.traceBlock

Devuelve un seguimiento completo de todos los códigos de operación invocados de todas las transacciones que se incluyeron en este bloque. El padre de este bloque debe estar presente o fallará.

| Invocación |
| :--- |
| `debug.traceBlock(blockRlp, options)` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| blockRlp | `Data` |  |
| options | `GethTraceOptions object` |  |

| Tipo de retorno | Descripción |
| :--- | :--- |
| `GethLikeTxTrace object` |  |

{% tabs %}
{% tab title="Example request of debug.traceBlock" %}
```yaml
debug.traceBlock(blockRlp, options)
```
{% endtab %}

{% tab title="Objects in debug\_traceBlock" %}
`GethTraceOptions`

| Nombre de los campos | Tipo |
| :--- | :--- |
| DisableStorage | `Boolean` |
| DisableMemory | `Boolean` |
| DisableStack | `Boolean` |
| Tracer | `String` |
| Timeout | `String` |

`GethLikeTxTrace`

| Nombre de los campos | Tipo |
| :--- | :--- |
| StoragesByDepth | `Array` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `Array` |
{% endtab %}
{% endtabs %}

[See also JSON RPC debug\_traceBlock](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug_traceblock)

## debug.traceBlockByHash

| Invocación |
| :--- |
| `debug.traceBlockByHash(blockHash, options)` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| blockHash | `Hash` |  |
| options | `GethTraceOptions object` |  |

| Tipo de retorno | Descripción |
| :--- | :--- |
| `GethLikeTxTrace object` |  |

{% tabs %}
{% tab title="Example request of debug.traceBlockByHash" %}
```yaml
debug.traceBlockByHash(blockHash, options)
```
{% endtab %}

{% tab title="Objects in debug\_traceBlockByHash" %}
`GethTraceOptions`

| Nombre de los campos | Tipo |
| :--- | :--- |
| DisableStorage | `Boolean` |
| DisableMemory | `Boolean` |
| DisableStack | `Boolean` |
| Tracer | `String` |
| Timeout | `String` |

`GethLikeTxTrace`

| Nombre de los campos | Tipo |
| :--- | :--- |
| StoragesByDepth | `Array` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `Array` |
{% endtab %}
{% endtabs %}

[See also JSON RPC debug\_traceBlockByHash](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug_traceblockbyhash)

## debug.traceBlockByNumber

| Invocación |
| :--- |
| `debug.traceBlockByNumber(number, options)` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| number | `Quantity` |  |
| options | `GethTraceOptions object` |  |

| Tipo de retorno | Descripción |
| :--- | :--- |
| `GethLikeTxTrace object` |  |

{% tabs %}
{% tab title="Example request of debug.traceBlockByNumber" %}
```yaml
debug.traceBlockByNumber(number, options)
```
{% endtab %}

{% tab title="Objects in debug\_traceBlockByNumber" %}
`GethTraceOptions`

| Nombre de los campos | Tipo |
| :--- | :--- |
| DisableStorage | `Boolean` |
| DisableMemory | `Boolean` |
| DisableStack | `Boolean` |
| Tracer | `String` |
| Timeout | `String` |

`GethLikeTxTrace`

| Nombre de los campos | Tipo |
| :--- | :--- |
| StoragesByDepth | `Array` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `Array` |
{% endtab %}
{% endtabs %}

[See also JSON RPC debug\_traceBlockByNumber](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug_traceblockbynumber)

## debug.traceTransaction

Este método intentará ejecutar la transacción exactamente de la misma manera en que se ejecutó en la red. Reproducirá cualquier transacción que se haya ejecutado antes de esta antes de intentar finalmente ejecutar la transacción que corresponde al hash dado.

| Invocación |
| :--- |
| `debug.traceTransaction(transactionHash, options)` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| transactionHash | `Hash` |  |
| options | `GethTraceOptions object` |  |

| Tipo de retorno | Descripción |
| :--- | :--- |
| `GethLikeTxTrace object` |  |

{% tabs %}
{% tab title="Example request of debug.traceTransaction" %}
```yaml
debug.traceTransaction(transactionHash, options)
```
{% endtab %}

{% tab title="Objects in debug\_traceTransaction" %}
`GethTraceOptions`

| Nombre de los campos | Tipo |
| :--- | :--- |
| DisableStorage | `Boolean` |
| DisableMemory | `Boolean` |
| DisableStack | `Boolean` |
| Tracer | `String` |
| Timeout | `String` |

`GethLikeTxTrace`

| Nombre de los campos | Tipo |
| :--- | :--- |
| StoragesByDepth | `Array` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `Array` |
{% endtab %}
{% endtabs %}

[See also JSON RPC debug\_traceTransaction](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug_tracetransaction)

## debug.traceTransactionByBlockAndIndex

| Invocación |
| :--- |
| `debug.traceTransactionByBlockAndIndex(blockParameter, txIndex, options)` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| blockParameter | `BlockParameter object` |  |
| txIndex | `Quantity` |  |
| options | `GethTraceOptions object` |  |

| Tipo de retorno | Descripción |
| :--- | :--- |
| `GethLikeTxTrace object` |  |

{% tabs %}
{% tab title="Example request of debug.traceTransactionByBlockAndIndex" %}
```yaml
debug.traceTransactionByBlockAndIndex(blockParameter, txIndex, options)
```
{% endtab %}

{% tab title="Objects in debug\_traceTransactionByBlockAndIndex" %}
`BlockParameter`

| Nombre de los campos | Tipo |
| :--- | :--- |
| Tipo | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

* `Quantity` o  `String` \(latest, earliest, pending\)

`GethTraceOptions`

| Nombre de los campos | Tipo |
| :--- | :--- |
| DisableStorage | `Boolean` |
| DisableMemory | `Boolean` |
| DisableStack | `Boolean` |
| Tracer | `String` |
| Timeout | `String` |

`GethLikeTxTrace`

| Nombre de los campos | Tipo |
| :--- | :--- |
| StoragesByDepth | `Array` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `Array` |
{% endtab %}
{% endtabs %}

[See also JSON RPC debug\_traceTransactionByBlockAndIndex](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug_tracetransactionbyblockandindex)

## debug.traceTransactionByBlockhashAndIndex

| Invocación |
| :--- |
| `debug.traceTransactionByBlockhashAndIndex(blockHash, txIndex, options)` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| blockHash | `Hash` |  |
| txIndex | `Quantity` |  |
| options | `GethTraceOptions object` |  |

| Tipo de retorno | Descripción |
| :--- | :--- |
| `GethLikeTxTrace object` |  |

{% tabs %}
{% tab title="Example request of debug.traceTransactionByBlockhashAndIndex" %}
```yaml
debug.traceTransactionByBlockhashAndIndex(blockHash, txIndex, options)
```
{% endtab %}

{% tab title="Objects in debug\_traceTransactionByBlockhashAndIndex" %}
`GethTraceOptions`

| Nombre de los campos | Tipo |
| :--- | :--- |
| DisableStorage | `Boolean` |
| DisableMemory | `Boolean` |
| DisableStack | `Boolean` |
| Tracer | `String` |
| Timeout | `String` |

`GethLikeTxTrace`

| Nombre de los campos | Tipo |
| :--- | :--- |
| StoragesByDepth | `Array` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `Array` |
{% endtab %}
{% endtabs %}

[See also JSON RPC debug\_traceTransactionByBlockhashAndIndex](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug_tracetransactionbyblockhashandindex)

## debug.traceTransactionInBlockByHash

| Invocación |
| :--- |
| `debug.traceTransactionInBlockByHash(blockRlp, transactionHash, options)` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| blockRlp | `Data` |  |
| transactionHash | `Hash` |  |
| options | `GethTraceOptions object` |  |

| Tipo de retorno | Descripción |
| :--- | :--- |
| `GethLikeTxTrace object` |  |

{% tabs %}
{% tab title="Example request of debug.traceTransactionInBlockByHash" %}
```yaml
debug.traceTransactionInBlockByHash(blockRlp, transactionHash, options)
```
{% endtab %}

{% tab title="Objects in debug\_traceTransactionInBlockByHash" %}
`GethTraceOptions`

| Nombre de los campos | Tipo |
| :--- | :--- |
| DisableStorage | `Boolean` |
| DisableMemory | `Boolean` |
| DisableStack | `Boolean` |
| Tracer | `String` |
| Timeout | `String` |

`GethLikeTxTrace`

| Nombre de los campos | Tipo |
| :--- | :--- |
| StoragesByDepth | `Array` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `Array` |
{% endtab %}
{% endtabs %}

[See also JSON RPC debug\_traceTransactionInBlockByHash](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug_tracetransactioninblockbyhash)

## debug.traceTransactionInBlockByIndex

| Invocación |
| :--- |
| `debug.traceTransactionInBlockByIndex(blockRlp, txIndex, options)` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| blockRlp | `Data` |  |
| txIndex | `Quantity` |  |
| options | `GethTraceOptions object` |  |

| Tipo de retorno | Descripción |
| :--- | :--- |
| `GethLikeTxTrace object` |  |

{% tabs %}
{% tab title="Example request of debug.traceTransactionInBlockByIndex" %}
```yaml
debug.traceTransactionInBlockByIndex(blockRlp, txIndex, options)
```
{% endtab %}

{% tab title="Objects in debug\_traceTransactionInBlockByIndex" %}
`GethTraceOptions`

| Nombre de los campos | Tipo |
| :--- | :--- |
| DisableStorage | `Boolean` |
| DisableMemory | `Boolean` |
| DisableStack | `Boolean` |
| Tracer | `String` |
| Timeout | `String` |

`GethLikeTxTrace`

| Nombre de los campos | Tipo |
| :--- | :--- |
| StoragesByDepth | `Array` |
| Gas | `Quantity` |
| Failed | `Boolean` |
| ReturnValue | `Data` |
| Entries | `Array` |
{% endtab %}
{% endtabs %}

[See also JSON RPC debug\_traceTransactionInBlockByIndex](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug_tracetransactioninblockbyindex)

