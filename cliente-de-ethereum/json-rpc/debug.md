# Debug module

## debug\_deleteChainSlice

Elimina una porción de una cadena del árbol en todas las ramas \(específico de Nethermind\).

| Invocación |
| :--- |
| `{"method":"debug_deleteChainSlice","params":[startNumber]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| startNumber | `Quantity` |  |

| Tipo de retorno | Descripción |
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

Recupera un bloque en la forma serializada RLP.

| Invocación |
| :--- |
| `{"method":"debug_getBlockRlp","params":[number]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| number | `Quantity` |  |

| Tipo de retorno | Descripción |
| :--- | :--- |
| `Data` |  |

{% tabs %}
{% tab title="Example request of debug\_getBlockRlp" %}
```text
curl --data '{"method":"debug_getBlockRlp","params":[number],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[ingrese a CLI debug.getBlockRlp](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/debug#debug-getblockrlp)

## debug\_getBlockRlpByHash

Recupera un bloque en la forma serializada RLP.

| Invocación |
| :--- |
| `{"method":"debug_getBlockRlpByHash","params":[hash]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| hash | `Hash` |  |

| Tipo de retorno | Descripción |
| :--- | :--- |
| `Data` |  |

{% tabs %}
{% tab title="Example request of debug\_getBlockRlpByHash" %}
```text
curl --data '{"method":"debug_getBlockRlpByHash","params":[hash],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[ingrese a CLI debug.getBlockRlpByHash](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/debug#debug-getblockrlpbyhash)

## debug\_getChainLevel

Recupera una representación de las ramas de los árboles en un nivel de cadena determinado  \(específico de Nethermind\).

| Invocación |
| :--- |
| `{"method":"debug_getChainLevel","params":[number]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| number | `Quantity` |  |

| Tipo de retorno | Descripción |
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

[ingrese a CLI debug.getChainLevel](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/debug#debug-getchainlevel)

## debug\_getConfigValue

Recupera el valor de configuración de Nethermind Ej. JsonRpc.Enabled

| Invocación |
| :--- |
| `{"method":"debug_getConfigValue","params":[category, name]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| category | `String` |  |
| name | `String` |  |

| Tipo de retorno | Descripción |
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

Inserta los recibos para el bloque después de verificar que los recibos sean correctos.

| Invocación |
| :--- |
| `{"method":"debug_insertReceipts","params":[blockParameter, receiptForRpc]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| blockParameter | `BlockParameter object` |  |
| receiptForRpc | `ReceiptForRpc[] object` |  |

| Tipo de retorno | Descripción |
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

| Nombre de los campos | Tipo |
| :--- | :--- |
| Tipo | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

* `Quantity` o  `String` \(latest, earliest, pending\)

`ReceiptForRpc[]`

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

## debug\_migrateReceipts

Establece el número de bloque hasta el que se migrarán los recibos a \(específico de Nethermind\).

| Invocación |
| :--- |
| `{"method":"debug_migrateReceipts","params":[blockNumber]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| blockNumber | `Quantity` |  |

| Tipo de retorno | Descripción |
| :--- | :--- |
| `Boolean` |  |

{% tabs %}
{% tab title="Example request of debug\_migrateReceipts" %}
```text
curl --data '{"method":"debug_migrateReceipts","params":[blockNumber],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[ingrese a CLI debug.migrateReceipts](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/debug#debug-migratereceipts)

## debug\_resetHead

Actualiza / resetea el bloque principal: utilízalo sólo cuando el nodo se atascó debido a daños en la base de datos / corrupción de memoria \(específico de Nethermind\).

| Invocación |
| :--- |
| `{"method":"debug_resetHead","params":[blockHash]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| blockHash | `Hash` |  |

| Tipo de retorno | Descripción |
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

Devuelve un seguimiento completo de todos los códigos de operación invocados de todas las transacciones que se incluyeron en este bloque. El padre de este bloque debe estar presente o fallará.

| Invocación |
| :--- |
| `{"method":"debug_traceBlock","params":[blockRlp, options]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| blockRlp | `Data` |  |
| options | `GethTraceOptions object` |  |

| Tipo de retorno | Descripción |
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

[ingrese a CLI debug.traceBlock](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/debug#debug-traceblock)

## debug\_traceBlockByHash

| Invocación |
| :--- |
| `{"method":"debug_traceBlockByHash","params":[blockHash, options]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| blockHash | `Hash` |  |
| options | `GethTraceOptions object` |  |

| Tipo de retorno | Descripción |
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

[ingrese a CLI debug.traceBlockByHash](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/debug#debug-traceblockbyhash)

## debug\_traceBlockByNumber

| Invocación |
| :--- |
| `{"method":"debug_traceBlockByNumber","params":[number, options]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| number | `Quantity` |  |
| options | `GethTraceOptions object` |  |

| Tipo de retorno | Descripción |
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

[ingrese a CLI debug.traceBlockByNumber](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/debug#debug-traceblockbynumber)

## debug\_traceTransaction

Este método intentará ejecutar la transacción exactamente de la misma manera en que se ejecutó en la red. Reproducirá cualquier transacción que se haya ejecutado antes de esta antes de intentar finalmente ejecutar la transacción que corresponde al hash dado.

| Invocación |
| :--- |
| `{"method":"debug_traceTransaction","params":[transactionHash, options]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| transactionHash | `Hash` |  |
| options | `GethTraceOptions object` |  |

| Tipo de retorno | Descripción |
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

[ingrese a CLI debug.traceTransaction](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/debug#debug-tracetransaction)

## debug\_traceTransactionByBlockAndIndex

| Invocación |
| :--- |
| `{"method":"debug_traceTransactionByBlockAndIndex","params":[blockParameter, txIndex, options]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| blockParameter | `BlockParameter object` |  |
| txIndex | `Quantity` |  |
| options | `GethTraceOptions object` |  |

| Tipo de retorno | Descripción |
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

[ingrese a CLI debug.traceTransactionByBlockAndIndex](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/debug#debug-tracetransactionbyblockandindex)

## debug\_traceTransactionByBlockhashAndIndex

| Invocación |
| :--- |
| `{"method":"debug_traceTransactionByBlockhashAndIndex","params":[blockHash, txIndex, options]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| blockHash | `Hash` |  |
| txIndex | `Quantity` |  |
| options | `GethTraceOptions object` |  |

| Tipo de retorno | Descripción |
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

[ingrese a CLI debug.traceTransactionByBlockhashAndIndex](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/debug#debug-tracetransactionbyblockhashandindex)

## debug\_traceTransactionInBlockByHash

| Invocación |
| :--- |
| `{"method":"debug_traceTransactionInBlockByHash","params":[blockRlp, transactionHash, options]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| blockRlp | `Data` |  |
| transactionHash | `Hash` |  |
| options | `GethTraceOptions object` |  |

| Tipo de retorno | Descripción |
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

[ingrese a CLI debug.traceTransactionInBlockByHash](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/debug#debug-tracetransactioninblockbyhash)

## debug\_traceTransactionInBlockByIndex

| Invocación |
| :--- |
| `{"method":"debug_traceTransactionInBlockByIndex","params":[blockRlp, txIndex, options]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| blockRlp | `Data` |  |
| txIndex | `Quantity` |  |
| options | `GethTraceOptions object` |  |

| Tipo de retorno | Descripción |
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

[ingrese a CLI debug.traceTransactionInBlockByIndex](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/debug#debug-tracetransactioninblockbyindex)

