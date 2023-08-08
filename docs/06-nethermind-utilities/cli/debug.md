import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# debug

## debug.config

| Invocation                     |
|:-------------------------------|
| `debug.config(category, name)` |

| Parameter | Type     | Description |
|:----------|:---------|:------------|
| category  | `String` |             |
| name      | `String` |             |

| Returned type | Description |
|:--------------|:------------|
| `String`      |             |

``` yaml title="Example request of debug.config" 
debug.config(category, name)
```

## debug.getBlockRlp

Retrieves a block in the RLP-serialized form.

| Invocation                  |
|:----------------------------|
| `debug.getBlockRlp(number)` |

| Parameter | Type       | Description |
|:----------|:-----------|:------------|
| number    | `Quantity` |             |

| Returned type | Description |
|:--------------|:------------|
| `Data`        |             |

``` yaml title="Example request of debug.getBlockRlp" 
debug.getBlockRlp(number)
```

[See also JSON RPC debug_getBlockRlp](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug_getblockrlp)

## debug.getBlockRlpByHash

Retrieves a block in the RLP-serialized form.

| Invocation                      |
|:--------------------------------|
| `debug.getBlockRlpByHash(hash)` |

| Parameter | Type   | Description |
|:----------|:-------|:------------|
| hash      | `Hash` |             |

| Returned type | Description |
|:--------------|:------------|
| `Data`        |             |

``` yaml title="Example request of debug.getBlockRlpByHash" 
debug.getBlockRlpByHash(hash)
```

[See also JSON RPC debug_getBlockRlpByHash](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug_getblockrlpbyhash)

## debug.getChainLevel

Retrieves a representation of tree branches on a given chain level (Nethermind specific).

| Invocation                    |
|:------------------------------|
| `debug.getChainLevel(number)` |

| Parameter | Type       | Description |
|:----------|:-----------|:------------|
| number    | `Quantity` |             |

| Returned type             | Description |
|:--------------------------|:------------|
| `ChainLevelForRpc object` |             |

<Tabs>
<TabItem label="Request" value="request">

```yaml
debug.getChainLevel(number)
```

</TabItem>
<TabItem label="Object" value="objects">


`ChainLevelForRpc`

| Field name          | Type                       |
|:--------------------|:---------------------------|
| BlockInfos          | `BlockInfoForRpc[] object` |
| HasBlockOnMainChain | `Boolean`                  |

`BlockInfoForRpc[]`

| Field name      | Type       |
|:----------------|:-----------|
| BlockHash       | `Hash`     |
| TotalDifficulty | `Quantity` |
| WasProcessed    | `Boolean`  |
| IsFinalized     | `Boolean`  |

</TabItem>
</Tabs>

[See also JSON RPC debug_getChainLevel](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug_getchainlevel)

## debug.migrateReceipts

Sets the block number up to which receipts will be migrated to (Nethermind specific).

| Invocation                           |
|:-------------------------------------|
| `debug.migrateReceipts(blockNumber)` |

| Parameter   | Type       | Description |
|:------------|:-----------|:------------|
| blockNumber | `Quantity` |             |

| Returned type | Description |
|:--------------|:------------|
| `Boolean`     |             |

``` yaml title="Example request of debug.migrateReceipts" 
debug.migrateReceipts(blockNumber)
```

[See also JSON RPC debug_migrateReceipts](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug_migratereceipts)

## debug.traceBlock

Returns the full stack trace of all invoked opcodes of all transactions that were included in the block specified. The
parent of the block must be present or it will fail.

| Invocation                            |
|:--------------------------------------|
| `debug.traceBlock(blockRlp, options)` |

| Parameter | Type                      | Description |
|:----------|:--------------------------|:------------|
| blockRlp  | `Data`                    |             |
| options   | `GethTraceOptions object` |             |

| Returned type            | Description |
|:-------------------------|:------------|
| `GethLikeTxTrace object` |             |

<Tabs>
<TabItem label="Request" value="request">

```yaml
debug.traceBlock(blockRlp, options)
```

</TabItem>
<TabItem label="Object" value="objects">


`GethTraceOptions`

| Field name     | Type      |
|:---------------|:----------|
| DisableStorage | `Boolean` |
| DisableMemory  | `Boolean` |
| DisableStack   | `Boolean` |
| Tracer         | `String`  |
| Timeout        | `String`  |

`GethLikeTxTrace`

| Field name      | Type       |
|:----------------|:-----------|
| StoragesByDepth | `Array`    |
| Gas             | `Quantity` |
| Failed          | `Boolean`  |
| ReturnValue     | `Data`     |
| Entries         | `Array`    |

</TabItem>
</Tabs>

[See also JSON RPC debug_traceBlock](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug_traceblock)

## debug.traceBlockByHash

Similar to debug_traceBlock, this method accepts a block hash and replays the block that is already present in the
database.

| Invocation                                   |
|:---------------------------------------------|
| `debug.traceBlockByHash(blockHash, options)` |

| Parameter | Type                      | Description |
|:----------|:--------------------------|:------------|
| blockHash | `Hash`                    |             |
| options   | `GethTraceOptions object` |             |

| Returned type            | Description |
|:-------------------------|:------------|
| `GethLikeTxTrace object` |             |

<Tabs>
<TabItem label="Request" value="request">

```yaml
debug.traceBlockByHash(blockHash, options)
```

</TabItem>
<TabItem label="Object" value="objects">


`GethTraceOptions`

| Field name     | Type      |
|:---------------|:----------|
| DisableStorage | `Boolean` |
| DisableMemory  | `Boolean` |
| DisableStack   | `Boolean` |
| Tracer         | `String`  |
| Timeout        | `String`  |

`GethLikeTxTrace`

| Field name      | Type       |
|:----------------|:-----------|
| StoragesByDepth | `Array`    |
| Gas             | `Quantity` |
| Failed          | `Boolean`  |
| ReturnValue     | `Data`     |
| Entries         | `Array`    |

</TabItem>
</Tabs>

[See also JSON RPC debug_traceBlockByHash](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug_traceblockbyhash)

## debug.traceBlockByNumber

Similar to debug_traceBlock, this method accepts a block number as well as "latest" or "finalized" and replays the block
that is already present in the database.

| Invocation                                          |
|:----------------------------------------------------|
| `debug.traceBlockByNumber(blockParameter, options)` |

| Parameter      | Type                      | Description |
|:---------------|:--------------------------|:------------|
| blockParameter | `BlockParameter object`   |             |
| options        | `GethTraceOptions object` |             |

| Returned type            | Description |
|:-------------------------|:------------|
| `GethLikeTxTrace object` |             |

<Tabs>
<TabItem label="Request" value="request">

```yaml
debug.traceBlockByNumber(blockParameter, options)
```

</TabItem>
<TabItem label="Object" value="objects">


`BlockParameter`

| Field name       | Type                        |
|:-----------------|:----------------------------|
| Type             | `BlockParameterType object` |
| BlockNumber      | `Quantity`                  |
| BlockHash        | `Hash`                      |
| RequireCanonical | `Boolean`                   |

`BlockParameterType`

- `Quantity` or `String` (latest, earliest, pending)

`GethTraceOptions`

| Field name     | Type      |
|:---------------|:----------|
| DisableStorage | `Boolean` |
| DisableMemory  | `Boolean` |
| DisableStack   | `Boolean` |
| Tracer         | `String`  |
| Timeout        | `String`  |

`GethLikeTxTrace`

| Field name      | Type       |
|:----------------|:-----------|
| StoragesByDepth | `Array`    |
| Gas             | `Quantity` |
| Failed          | `Boolean`  |
| ReturnValue     | `Data`     |
| Entries         | `Array`    |

</TabItem>
</Tabs>

[See also JSON RPC debug_traceBlockByNumber](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug_traceblockbynumber)

## debug.traceTransaction

This method will attempt to run the transaction in the exact same manner as it was executed on the network. It will
replay any transaction that may have been executed prior to this one before it will finally attempt to execute the
transaction that corresponds to the given hash.

| Invocation                                         |
|:---------------------------------------------------|
| `debug.traceTransaction(transactionHash, options)` |

| Parameter       | Type                      | Description |
|:----------------|:--------------------------|:------------|
| transactionHash | `Hash`                    |             |
| options         | `GethTraceOptions object` |             |

| Returned type            | Description |
|:-------------------------|:------------|
| `GethLikeTxTrace object` |             |

<Tabs>
<TabItem label="Request" value="request">

```yaml
debug.traceTransaction(transactionHash, options)
```

</TabItem>
<TabItem label="Object" value="objects">


`GethTraceOptions`

| Field name     | Type      |
|:---------------|:----------|
| DisableStorage | `Boolean` |
| DisableMemory  | `Boolean` |
| DisableStack   | `Boolean` |
| Tracer         | `String`  |
| Timeout        | `String`  |

`GethLikeTxTrace`

| Field name      | Type       |
|:----------------|:-----------|
| StoragesByDepth | `Array`    |
| Gas             | `Quantity` |
| Failed          | `Boolean`  |
| ReturnValue     | `Data`     |
| Entries         | `Array`    |

</TabItem>
</Tabs>

[See also JSON RPC debug_traceTransaction](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug_tracetransaction)

## debug.traceTransactionByBlockAndIndex

| Invocation                                                                |
|:--------------------------------------------------------------------------|
| `debug.traceTransactionByBlockAndIndex(blockParameter, txIndex, options)` |

| Parameter      | Type                      | Description |
|:---------------|:--------------------------|:------------|
| blockParameter | `BlockParameter object`   |             |
| txIndex        | `Quantity`                |             |
| options        | `GethTraceOptions object` |             |

| Returned type            | Description |
|:-------------------------|:------------|
| `GethLikeTxTrace object` |             |

<Tabs>
<TabItem label="Request" value="request">

```yaml
debug.traceTransactionByBlockAndIndex(blockParameter, txIndex, options)
```

</TabItem>
<TabItem label="Object" value="Object">

`BlockParameter`

| Field name       | Type                        |
|:-----------------|:----------------------------|
| Type             | `BlockParameterType object` |
| BlockNumber      | `Quantity`                  |
| BlockHash        | `Hash`                      |
| RequireCanonical | `Boolean`                   |

`BlockParameterType`

- `Quantity` or `String` (latest, earliest, pending)

`GethTraceOptions`

| Field name     | Type      |
|:---------------|:----------|
| DisableStorage | `Boolean` |
| DisableMemory  | `Boolean` |
| DisableStack   | `Boolean` |
| Tracer         | `String`  |
| Timeout        | `String`  |

`GethLikeTxTrace`

| Field name      | Type       |
|:----------------|:-----------|
| StoragesByDepth | `Array`    |
| Gas             | `Quantity` |
| Failed          | `Boolean`  |
| ReturnValue     | `Data`     |
| Entries         | `Array`    |

</TabItem>
</Tabs>

[See also JSON RPC debug_traceTransactionByBlockAndIndex](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug_tracetransactionbyblockandindex)

## debug.traceTransactionByBlockhashAndIndex

| Invocation                                                               |
|:-------------------------------------------------------------------------|
| `debug.traceTransactionByBlockhashAndIndex(blockHash, txIndex, options)` |

| Parameter | Type                      | Description |
|:----------|:--------------------------|:------------|
| blockHash | `Hash`                    |             |
| txIndex   | `Quantity`                |             |
| options   | `GethTraceOptions object` |             |

| Returned type            | Description |
|:-------------------------|:------------|
| `GethLikeTxTrace object` |             |

<Tabs>
<TabItem label="Request" value="request">

```yaml
debug.traceTransactionByBlockhashAndIndex(blockHash, txIndex, options)
```

</TabItem>
<TabItem label="Object" value="objects">


`GethTraceOptions`

| Field name     | Type      |
|:---------------|:----------|
| DisableStorage | `Boolean` |
| DisableMemory  | `Boolean` |
| DisableStack   | `Boolean` |
| Tracer         | `String`  |
| Timeout        | `String`  |

`GethLikeTxTrace`

| Field name      | Type       |
|:----------------|:-----------|
| StoragesByDepth | `Array`    |
| Gas             | `Quantity` |
| Failed          | `Boolean`  |
| ReturnValue     | `Data`     |
| Entries         | `Array`    |

</TabItem>
</Tabs>

[See also JSON RPC debug_traceTransactionByBlockhashAndIndex](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug_tracetransactionbyblockhashandindex)

## debug.traceTransactionInBlockByHash

| Invocation                                                                |
|:--------------------------------------------------------------------------|
| `debug.traceTransactionInBlockByHash(blockRlp, transactionHash, options)` |

| Parameter       | Type                      | Description |
|:----------------|:--------------------------|:------------|
| blockRlp        | `Data`                    |             |
| transactionHash | `Hash`                    |             |
| options         | `GethTraceOptions object` |             |

| Returned type            | Description |
|:-------------------------|:------------|
| `GethLikeTxTrace object` |             |

<Tabs>
<TabItem label="Request" value="request">

```yaml
debug.traceTransactionInBlockByHash(blockRlp, transactionHash, options)
```

</TabItem>
<TabItem label="Object" value="objects">


`GethTraceOptions`

| Field name     | Type      |
|:---------------|:----------|
| DisableStorage | `Boolean` |
| DisableMemory  | `Boolean` |
| DisableStack   | `Boolean` |
| Tracer         | `String`  |
| Timeout        | `String`  |

`GethLikeTxTrace`

| Field name      | Type       |
|:----------------|:-----------|
| StoragesByDepth | `Array`    |
| Gas             | `Quantity` |
| Failed          | `Boolean`  |
| ReturnValue     | `Data`     |
| Entries         | `Array`    |

</TabItem>
</Tabs>

[See also JSON RPC debug_traceTransactionInBlockByHash](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug_tracetransactioninblockbyhash)

## debug.traceTransactionInBlockByIndex

| Invocation                                                         |
|:-------------------------------------------------------------------|
| `debug.traceTransactionInBlockByIndex(blockRlp, txIndex, options)` |

| Parameter | Type                      | Description |
|:----------|:--------------------------|:------------|
| blockRlp  | `Data`                    |             |
| txIndex   | `Quantity`                |             |
| options   | `GethTraceOptions object` |             |

| Returned type            | Description |
|:-------------------------|:------------|
| `GethLikeTxTrace object` |             |

<Tabs>
<TabItem label="Request" value="request">

```yaml
debug.traceTransactionInBlockByIndex(blockRlp, txIndex, options)
```

</TabItem>
<TabItem label="Object" value="objects">


`GethTraceOptions`

| Field name     | Type      |
|:---------------|:----------|
| DisableStorage | `Boolean` |
| DisableMemory  | `Boolean` |
| DisableStack   | `Boolean` |
| Tracer         | `String`  |
| Timeout        | `String`  |

`GethLikeTxTrace`

| Field name      | Type       |
|:----------------|:-----------|
| StoragesByDepth | `Array`    |
| Gas             | `Quantity` |
| Failed          | `Boolean`  |
| ReturnValue     | `Data`     |
| Entries         | `Array`    |

</TabItem>
</Tabs>

[See also JSON RPC debug_traceTransactionInBlockByIndex](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/debug#debug_tracetransactioninblockbyindex)
