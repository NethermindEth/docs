# Admin module

## admin\_addPeer

Adds given node.

| Invocación |
| :--- |
| `{"method":"admin_addPeer","params":[enode, addToStaticNodes]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| enode | `String` | Nodo dado. |
| addToStaticNodes | `Boolean` | Adding to static nodes if `true` \(optional\) |

| Tipo de retorno | Descripción |
| :--- | :--- |
| `String` | Added node |

{% tabs %}
{% tab title="Example request of admin\_addPeer" %}
```text
curl --data '{"method":"admin_addPeer","params":["enode://deed356ddcaa1eb33a859b818a134765fff2a3dd5cd5b3d6cbe08c9424dca53b947bdc1c64e6f1257e29bb2960ac0a4fb56e307f360b7f8d4ddf48024cdb9d68@85.221.141.144:30303", true],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Example response of admin\_addPeer" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": "enode://deed356ddcaa1eb33a859b818a134765fff2a3dd5cd5b3d6cbe08c9424dca53b947bdc1c64e6f1257e29bb2960ac0a4fb56e307f360b7f8d4ddf48024cdb9d68@85.221.141.144:30303",
  "id": 1
}
```
{% endtab %}
{% endtabs %}

[ingrese a CLI admin.addPeer](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/admin#admin-addpeer)

## admin\_nodeInfo

Displays relevant information about this node.

| Invocación |
| :--- |
| `{"method":"admin_nodeInfo","params":[]}` |

| este método no tiene parametros  |
| :--- |


| Tipo de retorno | Descripción |
| :--- | :--- |
| `NodeInfo object` | Información sobre este nodo |

{% tabs %}
{% tab title="Example request of admin\_nodeInfo" %}
```text
curl --data '{"method":"admin_nodeInfo","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Example response of admin\_nodeInfo" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": {
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
  },
  "id": 1
}
```
{% endtab %}

{% tab title="Objects in admin\_nodeInfo" %}
`NodeInfo`

| Nombre de los campos | Tipo |
| :--- | :--- |
| Enode | `String` |
| Id | `String` |
| Ip | `String` |
| ListenAddress | `String` |
| Name | `String` |
| Ports | `PortsInfo object` |
| Protocols | `Array` |

`PortsInfo`

| Nombre de los campos | Tipo |
| :--- | :--- |
| Descubrimiento | `Quantity` |
| Listener | `Quantity` |
{% endtab %}
{% endtabs %}

[ingrese a CLI admin.nodeInfo](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/admin#admin-nodeinfo)

## admin\_peers

Displays a list of connected peers including information about them \(`clientId`, `host`, `port`, `address`, `isBootnode`, `isStatic`, `enode`\).

| Invocación |
| :--- |
| `{"method":"admin_peers","params":[includeDetails]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| includeDetails | `Boolean` | If true, including `clientType`, `ethDetails` and `lastSignal` \(optional\) |

| Tipo de retorno | Descripción |
| :--- | :--- |
| `PeerInfo object` | List of connected peers including information |

{% tabs %}
{% tab title="Example request of admin\_peers" %}
```text
curl --data '{"method":"admin_peers","params":[true],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Example response of admin\_peers" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": [
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

  ],
  "id": 1
}
```
{% endtab %}

{% tab title="Objects in admin\_peers" %}
`PeerInfo`

| Nombre de los campos | Tipo |
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
{% endtab %}
{% endtabs %}

[ingrese a CLI admin.peers](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/admin#admin-peers)

## admin\_removePeer

Elimina un nodo dado.

| Invocación |
| :--- |
| `{"method":"admin_removePeer","params":[enode, removeFromStaticNodes]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| enode | `String` | Nodo dado. |
| removeFromStaticNodes | `Boolean` | Removing from static nodes if `true` \(optional\) |

| Tipo de retorno | Descripción |
| :--- | :--- |
| `String` | Removed node |

{% tabs %}
{% tab title="Example request of admin\_removePeer" %}
```text
curl --data '{"method":"admin_removePeer","params":["enode://deed356ddcaa1eb33a859b818a134765fff2a3dd5cd5b3d6cbe08c9424dca53b947bdc1c64e6f1257e29bb2960ac0a4fb56e307f360b7f8d4ddf48024cdb9d68@85.221.141.144:30303", true],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Example response of admin\_removePeer" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": "enode://deed356ddcaa1eb33a859b818a134765fff2a3dd5cd5b3d6cbe08c9424dca53b947bdc1c64e6f1257e29bb2960ac0a4fb56e307f360b7f8d4ddf48024cdb9d68@85.221.141.144:30303",
  "id": 1
}
```
{% endtab %}
{% endtabs %}

[ingrese a CLI admin.removePeer](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/admin#admin-removepeer)

