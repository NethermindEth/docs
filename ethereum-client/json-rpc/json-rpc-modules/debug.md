#debug

##debug\_getChainLevel

Retrieves a representation of tree branches on a given chain level (Nethermind specific). 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| number | `Object` |

Return type: `Object`

##debug\_deleteChainSlice

Deletes a slice of a chain from the tree on all branches (Nethermind specific). 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| startNumber | `Object` |

Return type: `Quantity`

##debug\_resetHead

Updates / resets head block - use only when the node got stuck due to DB / memory corruption (Nethermind specific). 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockHash | `Object` |

Return type: `Boolean`

##debug\_traceTransaction

This method will attempt to run the transaction in the exact same manner as it was executed on the network. It will replay any transaction that may have been executed prior to this one before it will finally attempt to execute the transaction that corresponds to the given hash. 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| transactionHash | `Object` |
| options | `Object` |

Return type: `Object`

##debug\_traceTransactionByBlockAndIndex

 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockParameter | `Object` |
| txIndex | `Object` |
| options | `Object` |

Return type: ``

##debug\_traceTransactionByBlockhashAndIndex

 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockHash | `Object` |
| txIndex | `Object` |
| options | `Object` |

Return type: ``

##debug\_traceBlock

Returns a full stack trace of all invoked opcodes of all transaction that were included included in this block. The parent of this block must be present or it will fail. 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockRlp | `Object` |
| options | `Object` |

Return type: `Array`

##debug\_traceBlockByNumber

 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| number | `Object` |
| options | `Object` |

Return type: ``

##debug\_traceBlockByHash

 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockHash | `Object` |
| options | `Object` |

Return type: ``

##debug\_getBlockRlp

Retrieves a block in the RLP-serialized form. 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| number | `Object` |

Return type: ``

##debug\_getBlockRlpByHash

Retrieves a block in the RLP-serialized form. 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| hash | `Object` |

Return type: ``

##debug\_getConfigValue

Retrieves the Nethermind configuration value, e.g. JsonRpc.Enabled 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| category | `Object` |
| name | `Object` |

Return type: ``

##debug\_traceTransactionInBlockByHash

 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockRlp | `Object` |
| transactionHash | `Object` |
| options | `Object` |

Return type: ``

##debug\_traceTransactionInBlockByIndex

 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockRlp | `Object` |
| txIndex | `Object` |
| options | `Object` |

Return type: ``

##debug\_migrateReceipts

Sets the block number up to which receipts will be migrated to (Nethermind specific). 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockNumber | `Object` |

Return type: ``

