#parity

##parity\_pendingTransactions

Returns a list of transactions currently in the queue. 

#### **Parameters**

_None_

#### Return type
`ParityTransaction[] object`

#### Objects definition

`ParityTransaction[]`
| Fields name | Type |
| :--- | :--- |
| Length | `Quantity` |
| LongLength | `Quantity` |
| Rank | `Quantity` |
| SyncRoot | `Object object` |
| IsReadOnly | `Boolean` |
| IsFixedSize | `Boolean` |
| IsSynchronized | `Boolean` |

##parity\_getBlockReceipts

Get receipts from all transactions from particular block, more efficient than fetching the receipts one-by-one. 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| blockParameter | `BlockParameter object` |

#### Return type
`ReceiptForRpc[] object`

#### Objects definition

`BlockParameter`
| Fields name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Nullable`1 object` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`ReceiptForRpc[]`
| Fields name | Type |
| :--- | :--- |
| Length | `Quantity` |
| LongLength | `Quantity` |
| Rank | `Quantity` |
| SyncRoot | `Object object` |
| IsReadOnly | `Boolean` |
| IsFixedSize | `Boolean` |
| IsSynchronized | `Boolean` |

##parity\_enode

Returns the node enode URI. 

#### **Parameters**

_None_

#### Return type
`String`

##parity\_setEngineSigner

 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| address | `Address` |
| password | `String` |

#### Return type
`Boolean`

##parity\_setEngineSignerSecret

 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| privateKey | `String` |

#### Return type
`Boolean`

##parity\_clearEngineSigner

 

#### **Parameters**

_None_

#### Return type
`Boolean`

