# Parity module

## parity.clearEngineSigner

Clears an authority account for signing consensus messages. Blocks will not be sealed.

| Invocación |
| :--- |
| `parity.clearEngineSigner()` |

| este método no tiene parametros  |
| :--- |


| Tipo de retorno | Descripción |
| :--- | :--- |
| `Boolean` |  |

{% tabs %}
{% tab title="Example request of parity.clearEngineSigner" %}
```yaml
parity.clearEngineSigner()
```
{% endtab %}
{% endtabs %}

[See also JSON RPC parity\_clearEngineSigner](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/parity#parity_clearenginesigner)

## parity.enode

Retorna el URI del enodo del nodo.

| Invocación |
| :--- |
| `parity.enode` |

| este método no tiene parametros  |
| :--- |


| Tipo de retorno | Descripción |
| :--- | :--- |
| `String` |  |

{% tabs %}
{% tab title="Example request of parity.enode" %}
```yaml
parity.enode
```
{% endtab %}
{% endtabs %}

[See also JSON RPC parity\_enode](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/parity#parity_enode)

## parity.getBlockReceipts

Obtiene los recibos de todas las transacciones de un bloque en particular, más eficiente que buscar los recibos uno por uno.

| Invocación |
| :--- |
| `parity.getBlockReceipts(blockParameter)` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| blockParameter | `BlockParameter object` |  |

| Tipo de retorno | Descripción |
| :--- | :--- |
| `ReceiptForRpc object` |  |

{% tabs %}
{% tab title="Example request of parity.getBlockReceipts" %}
```yaml
parity.getBlockReceipts(blockParameter)
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

[See also JSON RPC parity\_getBlockReceipts](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/parity#parity_getblockreceipts)

## parity.netPeers

Returns connected peers. Peers with non-empty protocols have completed handshake.

| Invocación |
| :--- |
| `parity.netPeers` |

| este método no tiene parametros  |
| :--- |


| Tipo de retorno | Descripción |
| :--- | :--- |
| `ParityNetPeers object` |  |

{% tabs %}
{% tab title="Example request of parity.netPeers" %}
```yaml
parity.netPeers
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

[See also JSON RPC parity\_netPeers](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/parity#parity_netpeers)

## parity.pendingTransactions

Retorna una lista de transacciones actualmente en cola.

| Invocación |
| :--- |
| `parity.pendingTransactions()` |

| este método no tiene parametros  |
| :--- |


| Tipo de retorno | Descripción |
| :--- | :--- |
| `ParityTransaction object` |  |

{% tabs %}
{% tab title="Example request of parity.pendingTransactions" %}
```yaml
parity.pendingTransactions()
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

[See also JSON RPC parity\_pendingTransactions](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/parity#parity_pendingtransactions)

## parity.setEngineSigner

Sets an authority account for signing consensus messages.

| Invocación |
| :--- |
| `parity.setEngineSigner(address, password)` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| address | `Address` |  |
| password | `String` |  |

| Tipo de retorno | Descripción |
| :--- | :--- |
| `Boolean` |  |

{% tabs %}
{% tab title="Example request of parity.setEngineSigner" %}
```yaml
parity.setEngineSigner(address, password)
```
{% endtab %}
{% endtabs %}

[See also JSON RPC parity\_setEngineSigner](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/parity#parity_setenginesigner)

## parity.setEngineSignerSecret

Sets an authority account for signing consensus messages.

| Invocación |
| :--- |
| `parity.setEngineSignerSecret(privateKey)` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| privateKey | `String` |  |

| Tipo de retorno | Descripción |
| :--- | :--- |
| `Boolean` |  |

{% tabs %}
{% tab title="Example request of parity.setEngineSignerSecret" %}
```yaml
parity.setEngineSignerSecret(privateKey)
```
{% endtab %}
{% endtabs %}

[See also JSON RPC parity\_setEngineSignerSecret](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/parity#parity_setenginesignersecret)

