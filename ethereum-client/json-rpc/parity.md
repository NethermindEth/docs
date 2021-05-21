# Parity module

## parity\_clearEngineSigner

Clears an authority account for signing consensus messages. Blocks will not be sealed.

| Invocación |
| :--- |
| `{"method":"parity_clearEngineSigner","params":[]}` |

| este método no tiene parametros  |
| :--- |


| Tipo de retorno | Descripción |
| :--- | :--- |
| `Boolean` |  |

{% tabs %}
{% tab title="Example request of parity\_clearEngineSigner" %}
```text
curl --data '{"method":"parity_clearEngineSigner","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[ingrese a CLI parity.clearEngineSigner](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/parity#parity-clearenginesigner)

## parity\_enode

Retorna el URI del enodo del nodo.

| Invocación |
| :--- |
| `{"method":"parity_enode","params":[]}` |

| este método no tiene parametros  |
| :--- |


| Tipo de retorno | Descripción |
| :--- | :--- |
| `String` |  |

{% tabs %}
{% tab title="Example request of parity\_enode" %}
```text
curl --data '{"method":"parity_enode","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[ingrese a CLI parity.enode](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/parity#parity-enode)

## parity\_getBlockReceipts

Obtiene los recibos de todas las transacciones de un bloque en particular, más eficiente que buscar los recibos uno por uno.

| Invocación |
| :--- |
| `{"method":"parity_getBlockReceipts","params":[blockParameter]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| blockParameter | `BlockParameter object` |  |

| Tipo de retorno | Descripción |
| :--- | :--- |
| `ReceiptForRpc object` |  |

{% tabs %}
{% tab title="Example request of parity\_getBlockReceipts" %}
```text
curl --data '{"method":"parity_getBlockReceipts","params":[blockParameter],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in parity\_getBlockReceipts" %}
`BlockParameter`

| Nombre de los campos | Tipo |
| :--- | :--- |
| Tipo | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

* `Quantity` o  `String` \(latest, earliest, pending\)

`ReceiptForRpc`

| Nombre de los campos | Tipo |
| :--- | :--- |
| TransactionHash | `Hash` |
| TransactionIndex | `Quantity` |
| BlockHash | `Hash` |
| BlockNumber | `Quantity` |
| CumulativeGasUsed | `Quantity` |
| GasUsed | `Quantity` |
| From | `Address` |
| To | `Address` |
| ContractAddress | `Address` |
| Logs | `LogEntryForRpc[] object` |
| LogsBloom | `Bloom Object` |
| Root | `Hash` |
| Status | `Quantity` |
| Error | `String` |
| Tipo | `TxType object` |

`LogEntryForRpc[]`

| Nombre de los campos | Tipo |
| :--- | :--- |
| Length | `Quantity` |
| LongLength | `Quantity` |
| Rank | `Quantity` |
| SyncRoot | `Object` |
| IsReadOnly | `Boolean` |
| IsFixedSize | `Boolean` |
| IsSynchronized | `Boolean` |

`TxType`

* [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type
{% endtab %}
{% endtabs %}

[ingrese a CLI parity.getBlockReceipts](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/parity#parity-getblockreceipts)

## parity\_netPeers

Returns connected peers. Peers with non-empty protocols have completed handshake.

| Invocación |
| :--- |
| `{"method":"parity_netPeers","params":[]}` |

| este método no tiene parametros  |
| :--- |


| Tipo de retorno | Descripción |
| :--- | :--- |
| `ParityNetPeers object` |  |

{% tabs %}
{% tab title="Example request of parity\_netPeers" %}
```text
curl --data '{"method":"parity_netPeers","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in parity\_netPeers" %}
`ParityNetPeers`

| Nombre de los campos | Tipo |
| :--- | :--- |
| Active | `Quantity` |
| Connected | `Quantity` |
| Max | `Quantity` |
| Peers | `PeerInfo[] object` |

`PeerInfo[]`

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

[ingrese a CLI parity.netPeers](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/parity#parity-netpeers)

## parity\_pendingTransactions

Retorna una lista de transacciones actualmente en cola.

| Invocación |
| :--- |
| `{"method":"parity_pendingTransactions","params":[]}` |

| este método no tiene parametros  |
| :--- |


| Tipo de retorno | Descripción |
| :--- | :--- |
| `ParityTransaction object` |  |

{% tabs %}
{% tab title="Example request of parity\_pendingTransactions" %}
```text
curl --data '{"method":"parity_pendingTransactions","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in parity\_pendingTransactions" %}
`ParityTransaction`

| Nombre de los campos | Tipo |
| :--- | :--- |
| Hash | `Hash` |
| Nonce | `Quantity` |
| BlockHash | `Hash` |
| BlockNumber | `Quantity` |
| TransactionIndex | `Quantity` |
| From | `Address` |
| To | `Address` |
| Value | `Quantity` |
| GasPrice | `Quantity` |
| Gas | `Quantity` |
| Input | `Data` |
| Raw | `Data` |
| Creates | `Address` |
| PublicKey | `PublicKey object` |
| ChainId | `UInt64 object` |
| Condition | `Object` |
| R | `Data` |
| S | `Data` |
| V | `Quantity` |
| StandardV | `Quantity` |

`PublicKey`

| Nombre de los campos | Tipo |
| :--- | :--- |
| Address | `Address` |
| Bytes | `Data` |
| PrefixedBytes | `Data` |

`UInt64`

| Nombre de los campos | Tipo |
| :--- | :--- |
{% endtab %}
{% endtabs %}

[ingrese a CLI parity.pendingTransactions](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/parity#parity-pendingtransactions)

## parity\_setEngineSigner

Sets an authority account for signing consensus messages.

| Invocación |
| :--- |
| `{"method":"parity_setEngineSigner","params":[address, password]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| address | `Address` |  |
| password | `String` |  |

| Tipo de retorno | Descripción |
| :--- | :--- |
| `Boolean` |  |

{% tabs %}
{% tab title="Example request of parity\_setEngineSigner" %}
```text
curl --data '{"method":"parity_setEngineSigner","params":[address, password],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[ingrese a CLI parity.setEngineSigner](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/parity#parity-setenginesigner)

## parity\_setEngineSignerSecret

Sets an authority account for signing consensus messages.

| Invocación |
| :--- |
| `{"method":"parity_setEngineSignerSecret","params":[privateKey]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| privateKey | `String` |  |

| Tipo de retorno | Descripción |
| :--- | :--- |
| `Boolean` |  |

{% tabs %}
{% tab title="Example request of parity\_setEngineSignerSecret" %}
```text
curl --data '{"method":"parity_setEngineSignerSecret","params":[privateKey],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[ingrese a CLI parity.setEngineSignerSecret](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/parity#parity-setenginesignersecret)

