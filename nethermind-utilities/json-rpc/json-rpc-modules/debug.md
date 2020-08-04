# Debug

debug\_getChainLevel

Retrieves a representation of tree branches on a given chain level \(Nethermind specific\).

Is implemented : True

## **Parameters**

| Parameter name | Type |
| :--- | :--- |
| number | System.Int64& |

debug\_deleteChainSlice

Deletes a slice of a chain from the tree on all branches \(Nethermind specific\).

Is implemented : True

## **Parameters**

| Parameter name | Type |
| :--- | :--- |
| startNumber | System.Int64& |

debug\_resetHead

Updates / resets head block - use only when the node got stuck due to DB / memory corruption \(Nethermind specific\).

Is implemented : True

## **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockHash | Nethermind.Core.Crypto.Keccak |

debug\_traceTransaction

Is implemented : True

## **Parameters**

| Parameter name | Type |
| :--- | :--- |
| transactionHash | Nethermind.Core.Crypto.Keccak |
| options | Nethermind.Evm.Tracing.GethStyle.GethTraceOptions |

debug\_traceTransactionByBlockAndIndex

Is implemented : True

## **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockParameter | Nethermind.Blockchain.Find.BlockParameter |
| txIndex | System.Int32 |
| options | Nethermind.Evm.Tracing.GethStyle.GethTraceOptions |

debug\_traceTransactionByBlockhashAndIndex

Is implemented : True

## **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockHash | Nethermind.Core.Crypto.Keccak |
| txIndex | System.Int32 |
| options | Nethermind.Evm.Tracing.GethStyle.GethTraceOptions |

debug\_traceBlock

Is implemented : True

## **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockRlp | System.Byte\[\] |
| options | Nethermind.Evm.Tracing.GethStyle.GethTraceOptions |

debug\_traceBlockByNumber

Is implemented : True

## **Parameters**

| Parameter name | Type |
| :--- | :--- |
| number | Nethermind.Dirichlet.Numerics.UInt256 |
| options | Nethermind.Evm.Tracing.GethStyle.GethTraceOptions |

debug\_traceBlockByHash

Is implemented : True

## **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockHash | Nethermind.Core.Crypto.Keccak |
| options | Nethermind.Evm.Tracing.GethStyle.GethTraceOptions |

debug\_traceBlockFromFile

Is implemented : False

## **Parameters**

| Parameter name | Type |
| :--- | :--- |
| fileName | System.String |
| options | Nethermind.Evm.Tracing.GethStyle.GethTraceOptions |

debug\_dumpBlock

Is implemented : False

## **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockParameter | Nethermind.Blockchain.Find.BlockParameter |

debug\_gcStats

Is implemented : False

## **Parameters**

| Parameter name | Type |
| :--- | :--- |


debug\_getBlockRlp

Retrieves a block in the RLP-serialized form.

Is implemented : True

## **Parameters**

| Parameter name | Type |
| :--- | :--- |
| number | System.Int64 |

debug\_getBlockRlpByHash

Retrieves a block in the RLP-serialized form.

Is implemented : True

## **Parameters**

| Parameter name | Type |
| :--- | :--- |
| hash | Nethermind.Core.Crypto.Keccak |

debug\_memStats

Is implemented : False

## **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockParameter | Nethermind.Blockchain.Find.BlockParameter |

debug\_seedHash

Is implemented : False

## **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockParameter | Nethermind.Blockchain.Find.BlockParameter |

debug\_setHead

Is implemented : False

## **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockParameter | Nethermind.Blockchain.Find.BlockParameter |

debug\_getFromDb

Is implemented : False

## **Parameters**

| Parameter name | Type |
| :--- | :--- |
| dbName | System.String |
| key | System.Byte\[\] |

debug\_getConfigValue

Retrieves the Nethermind configuration value, e.g. JsonRpc.Enabled

Is implemented : True

## **Parameters**

| Parameter name | Type |
| :--- | :--- |
| category | System.String |
| name | System.String |

debug\_traceTransactionInBlockByHash

Is implemented : True

## **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockRlp | System.Byte\[\] |
| transactionHash | Nethermind.Core.Crypto.Keccak |
| options | Nethermind.Evm.Tracing.GethStyle.GethTraceOptions |

debug\_traceTransactionInBlockByIndex

Is implemented : True

## **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockRlp | System.Byte\[\] |
| txIndex | System.Int32 |
| options | Nethermind.Evm.Tracing.GethStyle.GethTraceOptions |

debug\_migrateReceipts

Sets the block number up to which receipts will be migrated to \(Nethermind specific\).

Is implemented : True

## **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockNumber | System.Int64 |

