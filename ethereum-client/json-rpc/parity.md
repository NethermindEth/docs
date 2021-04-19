# parity

## parity_clearEngineSigner

Clears an authority account for signing consensus messages. Blocks will not be sealed. 

| Invocation |
| :--- |
| `{"method":"parity_clearEngineSigner","params":[]}` |

| This method doesn't have parameters. |
| :--- |

| Returned type | Description |
| :--- | :--- |
| `Boolean` |  |

{% tabs %}
{% tab title="Example request of parity_clearEngineSigner" %}
```
curl --data '{"method":"parity_clearEngineSigner","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[See also CLI parity.clearEngineSigner](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/parity#parity-clearenginesigner)
## parity_enode

Returns the node enode URI. 

| Invocation |
| :--- |
| `{"method":"parity_enode","params":[]}` |

| This method doesn't have parameters. |
| :--- |

| Returned type | Description |
| :--- | :--- |
| `String` |  |

{% tabs %}
{% tab title="Example request of parity_enode" %}
```
curl --data '{"method":"parity_enode","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[See also CLI parity.enode](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/parity#parity-enode)
## parity_getBlockReceipts

Get receipts from all transactions from particular block, more efficient than fetching the receipts one-by-one. 

| Invocation |
| :--- |
| `{"method":"parity_getBlockReceipts","params":[blockParameter]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| blockParameter | `BlockParameter object` |  |

| Returned type | Description |
| :--- | :--- |
| `ReceiptForRpc object` |  |

{% tabs %}
{% tab title="Example request of parity_getBlockReceipts" %}
```
curl --data '{"method":"parity_getBlockReceipts","params":[blockParameter],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
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

[See also CLI parity.getBlockReceipts](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/parity#parity-getblockreceipts)
## parity_netPeers

Returns connected peers. Peers with non-empty protocols have completed handshake. 

| Invocation |
| :--- |
| `{"method":"parity_netPeers","params":[]}` |

| This method doesn't have parameters. |
| :--- |

| Returned type | Description |
| :--- | :--- |
| `ParityNetPeers object` |  |

{% tabs %}
{% tab title="Example request of parity_netPeers" %}
```
curl --data '{"method":"parity_netPeers","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
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

[See also CLI parity.netPeers](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/parity#parity-netpeers)
## parity_pendingTransactions

Returns a list of transactions currently in the queue. 

| Invocation |
| :--- |
| `{"method":"parity_pendingTransactions","params":[]}` |

| This method doesn't have parameters. |
| :--- |

| Returned type | Description |
| :--- | :--- |
| `ParityTransaction object` |  |

{% tabs %}
{% tab title="Example request of parity_pendingTransactions" %}
```
curl --data '{"method":"parity_pendingTransactions","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
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

[See also CLI parity.pendingTransactions](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/parity#parity-pendingtransactions)
## parity_setEngineSigner

Sets an authority account for signing consensus messages. 

| Invocation |
| :--- |
| `{"method":"parity_setEngineSigner","params":[address, password]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| address | `Address` |  |
| password | `String` |  |

| Returned type | Description |
| :--- | :--- |
| `Boolean` |  |

{% tabs %}
{% tab title="Example request of parity_setEngineSigner" %}
```
curl --data '{"method":"parity_setEngineSigner","params":[address, password],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[See also CLI parity.setEngineSigner](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/parity#parity-setenginesigner)
## parity_setEngineSignerSecret

Sets an authority account for signing consensus messages. 

| Invocation |
| :--- |
| `{"method":"parity_setEngineSignerSecret","params":[privateKey]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| privateKey | `String` |  |

| Returned type | Description |
| :--- | :--- |
| `Boolean` |  |

{% tabs %}
{% tab title="Example request of parity_setEngineSignerSecret" %}
```
curl --data '{"method":"parity_setEngineSignerSecret","params":[privateKey],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[See also CLI parity.setEngineSignerSecret](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/parity#parity-setenginesignersecret)
