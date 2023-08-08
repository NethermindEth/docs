import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# admin

## admin.addPeer

Adds given node. 


| Invocation |
| :--- |
| `admin.addPeer(enode, addToStaticNodes)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| enode | `String` | Given node |
| addToStaticNodes | `Boolean` | Adding to static nodes if `true` (optional) |

| Returned type | Description |
| :--- | :--- |
| `String` | Added node |

<Tabs>
<TabItem label="Request" value="request">

```yaml
admin.addPeer("enode://deed356ddcaa1eb33a859b818a134765fff2a3dd5cd5b3d6cbe08c9424dca53b947bdc1c64e6f1257e29bb2960ac0a4fb56e307f360b7f8d4ddf48024cdb9d68@85.221.141.144:30303", true)
```
</TabItem>
<TabItem label="Response" value="response">

```yaml
"enode://deed356ddcaa1eb33a859b818a134765fff2a3dd5cd5b3d6cbe08c9424dca53b947bdc1c64e6f1257e29bb2960ac0a4fb56e307f360b7f8d4ddf48024cdb9d68@85.221.141.144:30303"
```
</TabItem>
</Tabs>

[See also JSON RPC admin_addPeer](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/admin#admin_addpeer)


## admin.nodeInfo

Displays relevant information about this node. 


| Invocation |
| :--- |
| `admin.nodeInfo` |

| This method doesn't have parameters. |
| :--- |

| Returned type | Description |
| :--- | :--- |
| `NodeInfo object` | Information about this node |

<Tabs>
<TabItem value="request" label="Request">

```yaml
admin.nodeInfo
```
</TabItem>
<TabItem value="response" label="Response">

```yaml
{
  "enode": "enode://deed356ddcaa1eb33a859b818a134765fff2a3dd5cd5b3d6cbe08c9424dca53b947bdc1c64e6f1257e29bb2960ac0a4fb56e307f360b7f8d4ddf48024cdb9d68@85.221.141.144:30303",
  "id": "b70bb308924de8247d73844f80561e488ae731105a6ef46004e4579edd4f378a",
  "ip": "85.221.141.144",
  "listenAddr": "85.221.141.144:30303",
  "name": "Nethermind/v1.10.37-0-068e5c399-20210315/X64-Windows/5.0.3",
  "ports": {
    "discovery": 30303,
    "listener": 30303
  },
  "protocols": {
    "eth": {
      "difficulty": "0x6372ca",
      "genesis": "0xbf7e331f7f7c1dd2e05159666b3bf8bc7a8a3a9eb1d518969eab529dd9b88c1a",
      "head": "0xf266b2639ef7e1db6ee769f7b161ef7eb2d74beb0ab8ffcd270036da04b41cd4",
      "network": "0x5"
    }
  }
}
```
</TabItem>
<TabItem value="objects" label="Object">


`NodeInfo`

| Field name | Type |
| :--- | :--- |
| Enode | `String` |
| Id | `String` |
| Ip | `String` |
| ListenAddress | `String` |
| Name | `String` |
| Ports | `PortsInfo object` |
| Protocols | `Array` |

`PortsInfo`

| Field name | Type |
| :--- | :--- |
| Discovery | `Quantity` |
| Listener | `Quantity` |
</TabItem>
</Tabs>


[See also JSON RPC admin_nodeInfo](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/admin#admin_nodeinfo)


## admin.peers

Displays a list of connected peers including information about them (`clientId`, `host`, `port`, `address`, `isBootnode`, `isStatic`, `enode`). 


| Invocation |
| :--- |
| `admin.peers(includeDetails)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| includeDetails | `Boolean` | If true, including `clientType`, `ethDetails` and `lastSignal` (optional) |

| Returned type | Description |
| :--- | :--- |
| `PeerInfo object` | List of connected peers including information |

<Tabs>
<TabItem value="request" label="Request">

```yaml
admin.peers(true)
```
</TabItem>
<TabItem value="response" label="Response">

```yaml
[
  {
    "clientId": "Nethermind/v1.10.33-1-5c4c185e8-20210310/X64-Linux/5.0.2",
    "host": "94.237.54.114",
    "port": 30313,
    "address": "94.237.54.114:30313",
    "isBootnode": false,
    "isTrusted": false,
    "isStatic": false,
    "enode": "enode://46add44b9f13965f7b9875ac6b85f016f341012d84f975377573800a863526f4da19ae2c620ec73d11591fa9510e992ecc03ad0751f53cc02f7c7ed6d55c7291@94.237.54.114:30313",
    "clientType": "Nethermind",
    "ethDetails": "eth65",
    "lastSignal": "03/11/2021 12:33:58"
  },
  
  (...)
  
]
```
</TabItem>
<TabItem value="objects" label="Object">


`PeerInfo`

| Field name | Type |
| :--- | :--- |
| ClientId | `String` |
| Host | `String` |
| Port | `Quantity` |
| Address | `String` |
| IsBootnode | `Boolean` |
| IsTrusted | `Boolean` |
| IsStatic | `Boolean` |
| Enode | `String` |
| ClientType | `String` |
| EthDetails | `String` |
| LastSignal | `String` |
</TabItem>
</Tabs>


[See also JSON RPC admin_peers](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/admin#admin_peers)



## admin.removePeer

Removes given node. 


| Invocation |
| :--- |
| `admin.removePeer(enode, removeFromStaticNodes)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| enode | `String` | Given node |
| removeFromStaticNodes | `Boolean` | Removing from static nodes if `true` (optional) |

| Returned type | Description |
| :--- | :--- |
| `String` | Removed node |

<Tabs>
<TabItem label="Request" value="request">

```yaml
admin.removePeer("enode://deed356ddcaa1eb33a859b818a134765fff2a3dd5cd5b3d6cbe08c9424dca53b947bdc1c64e6f1257e29bb2960ac0a4fb56e307f360b7f8d4ddf48024cdb9d68@85.221.141.144:30303", true)
```
</TabItem>
<TabItem label="Response" value="response">

```yaml
"enode://deed356ddcaa1eb33a859b818a134765fff2a3dd5cd5b3d6cbe08c9424dca53b947bdc1c64e6f1257e29bb2960ac0a4fb56e307f360b7f8d4ddf48024cdb9d68@85.221.141.144:30303"
```
</TabItem>
</Tabs>

[See also JSON RPC admin_removePeer](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/admin#admin_removepeer)
