# parity



## parity.clearEngineSigner

Clears an authority account for signing consensus messages. Blocks will not be sealed. 


| Invocation |
| :--- |
| `parity.clearEngineSigner()` |

| This method doesn't have parameters. |
| :--- |

| Returned type | Description |
| :--- | :--- |
| `Boolean` |  |

{% tabs %}
{% tab title="Example request of parity.clearEngineSigner" %}
```yaml
parity.clearEngineSigner()
```
{% endtab %}
{% endtabs %}

[See also JSON RPC parity_clearEngineSigner](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/parity#parity_clearenginesigner)


## parity.enode

Returns the node enode URI. 


| Invocation |
| :--- |
| `parity.enode` |

| This method doesn't have parameters. |
| :--- |

| Returned type | Description |
| :--- | :--- |
| `String` |  |

{% tabs %}
{% tab title="Example request of parity.enode" %}
```yaml
parity.enode
```
{% endtab %}
{% endtabs %}

[See also JSON RPC parity_enode](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/parity#parity_enode)


## parity.getBlockReceipts

Get receipts from all transactions from particular block, more efficient than fetching the receipts one-by-one. 


| Invocation |
| :--- |
| `parity.getBlockReceipts(blockParameter)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| blockParameter | `BlockParameter object` |  |

| Returned type | Description |
| :--- | :--- |
| `ReceiptForRpc object` |  |

{% tabs %}
{% tab title="Example request of parity.getBlockReceipts" %}
```yaml
parity.getBlockReceipts(blockParameter)
```
{% endtab %}

{% tab title="Objects in parity_getBlockReceipts" %}

`BlockParameter`

| Field name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

- `Quantity` or `String` (latest, earliest, pending)


`ReceiptForRpc`

| Field name | Type |
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
| Type | `TxType object` |

`LogEntryForRpc[]`

| Field name | Type |
| :--- | :--- |
| Length | `Quantity` |
| LongLength | `Quantity` |
| Rank | `Quantity` |
| SyncRoot | `Object` |
| IsReadOnly | `Boolean` |
| IsFixedSize | `Boolean` |
| IsSynchronized | `Boolean` |

`TxType`

- [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type

{% endtab %}
{% endtabs %}

[See also JSON RPC parity_getBlockReceipts](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/parity#parity_getblockreceipts)


## parity.netPeers

Returns connected peers. Peers with non-empty protocols have completed handshake. 


| Invocation |
| :--- |
| `parity.netPeers` |

| This method doesn't have parameters. |
| :--- |

| Returned type | Description |
| :--- | :--- |
| `ParityNetPeers object` |  |

{% tabs %}
{% tab title="Example request of parity.netPeers" %}
```yaml
parity.netPeers
```
{% endtab %}

{% tab title="Objects in parity_netPeers" %}

`ParityNetPeers`

| Field name | Type |
| :--- | :--- |
| Active | `Quantity` |
| Connected | `Quantity` |
| Max | `Quantity` |
| Peers | `PeerInfo[] object` |

`PeerInfo[]`

| Field name | Type |
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

[See also JSON RPC parity_netPeers](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/parity#parity_netpeers)


## parity.pendingTransactions

Returns a list of transactions currently in the queue. 


| Invocation |
| :--- |
| `parity.pendingTransactions()` |

| This method doesn't have parameters. |
| :--- |

| Returned type | Description |
| :--- | :--- |
| `ParityTransaction object` |  |

{% tabs %}
{% tab title="Example request of parity.pendingTransactions" %}
```yaml
parity.pendingTransactions()
```
{% endtab %}

{% tab title="Objects in parity_pendingTransactions" %}

`ParityTransaction`

| Field name | Type |
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

| Field name | Type |
| :--- | :--- |
| Address | `Address` |
| Bytes | `Data` |
| PrefixedBytes | `Data` |

`UInt64`

| Field name | Type |
| :--- | :--- |
{% endtab %}
{% endtabs %}

[See also JSON RPC parity_pendingTransactions](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/parity#parity_pendingtransactions)


## parity.setEngineSigner

Sets an authority account for signing consensus messages. 


| Invocation |
| :--- |
| `parity.setEngineSigner(address, password)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| address | `Address` |  |
| password | `String` |  |

| Returned type | Description |
| :--- | :--- |
| `Boolean` |  |

{% tabs %}
{% tab title="Example request of parity.setEngineSigner" %}
```yaml
parity.setEngineSigner(address, password)
```
{% endtab %}
{% endtabs %}

[See also JSON RPC parity_setEngineSigner](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/parity#parity_setenginesigner)


## parity.setEngineSignerSecret

Sets an authority account for signing consensus messages. 


| Invocation |
| :--- |
| `parity.setEngineSignerSecret(privateKey)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| privateKey | `String` |  |

| Returned type | Description |
| :--- | :--- |
| `Boolean` |  |

{% tabs %}
{% tab title="Example request of parity.setEngineSignerSecret" %}
```yaml
parity.setEngineSignerSecret(privateKey)
```
{% endtab %}
{% endtabs %}

[See also JSON RPC parity_setEngineSignerSecret](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/parity#parity_setenginesignersecret)
