#parity

##parity\_pendingTransactions

Returns a list of transactions currently in the queue. 

#### **Parameters**

_None_

Return type: `Array`

##parity\_getBlockReceipts

Get receipts from all transactions from particular block, more efficient than fetching the receipts one-by-one. 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockParameter | `Object` |

Return type: `Array`

##parity\_enode

Returns the node enode URI. 

#### **Parameters**

_None_

Return type: `String`

##parity\_setEngineSigner

 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| address | `Object` |
| password | `Object` |

Return type: `Boolean`

##parity\_setEngineSignerSecret

 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| privateKey | `Object` |

Return type: `Boolean`

##parity\_clearEngineSigner

 

#### **Parameters**

_None_

Return type: `Boolean`

