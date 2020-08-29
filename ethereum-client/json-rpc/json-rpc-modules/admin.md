#admin

##admin\_addPeer

 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| enode | `String` |
| addToStaticNodes | `Boolean` |

#### Return type
`ResultWrapper`1 object`

#### Objects definition

`ResultWrapper`1`
| Fields name | Type |
| :--- | :--- |
| Data | `String` |
| Result | `Result object` |
| ErrorCode | `Quantity` |

##admin\_removePeer

 

#### **Parameters**

| Parameter name | Type |
| :--- | :--- |
| enode | `String` |
| removeFromStaticNodes | `Boolean` |

#### Return type
`ResultWrapper`1 object`

#### Objects definition

`ResultWrapper`1`
| Fields name | Type |
| :--- | :--- |
| Data | `String` |
| Result | `Result object` |
| ErrorCode | `Quantity` |

##admin\_peers

 

#### **Parameters**

_None_

#### Return type
`PeerInfo[] object`

#### Objects definition

`PeerInfo[]`
| Fields name | Type |
| :--- | :--- |
| Length | `Quantity` |
| LongLength | `Quantity` |
| Rank | `Quantity` |
| SyncRoot | `Object object` |
| IsReadOnly | `Boolean` |
| IsFixedSize | `Boolean` |
| IsSynchronized | `Boolean` |

##admin\_nodeInfo

Relevant information about this node 

#### **Parameters**

_None_

#### Return type
`NodeInfo object`

#### Objects definition

`NodeInfo`
| Fields name | Type |
| :--- | :--- |
| Enode | `String` |
| Id | `String` |
| Ip | `String` |
| ListenAddress | `String` |
| Name | `String` |
| Ports | `PortsInfo object` |
| Protocols | `Dictionary`2 object` |

