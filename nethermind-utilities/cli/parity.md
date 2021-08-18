# Parity module

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

[See also JSON RPC parity\_clearEngineSigner](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/parity#parity_clearenginesigner)

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

{% tab title="Example response of parity.enode" %}
```yaml
enode://a9cfa3cb16b537e131b0f141b5ef0c0ab9bf0dbec7799c3fc7bf8a974ff3e74e9b3258951b285dfed07ab395049bcd65fed96116bb92561612682551ec458497@18.193.43.58:30303
```
{% endtab %}
{% endtabs %}

[See also JSON RPC parity\_enode](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/parity#parity_enode)

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
parity.getBlockReceipts(latest)
```
{% endtab %}

{% tab title="Example response of parity.getBlockReceipts" %}
```yaml
{"transactionHash":"0x5bea2e9354f63960beaf02942e7c791e61ae47ce6952115afcb3d7fbd5b8043b","transactionIndex":"0x2","blockHash":"0x31fda0834473452ad7df17e351bb540294fe9cf9752472468851f6b3a2c5f5aa","blockNumber":"0x88de36","cumulativeGasUsed":"0x50e46","gasUsed":"0x5208","from":"0xdd078bc60e500d379eaf30fc8658661ea0f2608a","to":"0x5aab44fdc254f247dcb7ad89f248e7da346081d5","contractAddress":null,"logs":[],"logsBloom":"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","status":"0x1","type":"0x0"}, (...)
```
{% endtab %}

{% tab title="Objects in parity\_getBlockReceipts" %}
`BlockParameter`

| Field name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

* `Quantity` or `String` \(latest, earliest, pending\)

`ReceiptForRpc`

| Field name | Type |
| :--- | :--- |
| TransactionHash | `Hash` |
| TransactionIndex | `Quantity` |
| BlockHash | `Hash` |
| BlockNumber | `Quantity` |
| CumulativeGasUsed | `Quantity` |
| GasUsed | `Quantity` |
| EffectiveGasPrice | `Quantity` |
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
| Removed | `Boolean` |
| LogIndex | `Quantity` |
| TransactionIndex | `Quantity` |
| TransactionHash | `Hash` |
| BlockHash | `Hash` |
| BlockNumber | `Quantity` |
| Address | `Address` |
| Data | `Data` |
| Topics | `Keccak[] object` |

`TxType`

* [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type
{% endtab %}
{% endtabs %}

[See also JSON RPC parity\_getBlockReceipts](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/parity#parity_getblockreceipts)

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

{% tab title="Objects in parity\_netPeers" %}
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
| Id | `String` |
| Name | `String` |
| Caps | `Array` |
| Network | `PeerNetworkInfo object` |
| Protocols | `Array` |
{% endtab %}
{% endtabs %}

[See also JSON RPC parity\_netPeers](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/parity#parity_netpeers)

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

{% tab title="Example response of parity.pendingTransactions" %}
```yaml
{"hash":"0x9372fe18622fd45569ef117644d4cda4af51d11bb3c72fa27690e78c9b0d7808","nonce":"0x11b55","blockHash":null,"blockNumber":null,"transactionIndex":null,"from":"0x89a3fc1d3c68f927be68d3de139980940a89fc80","to":"0x89a3fc1d3c68f927be68d3de139980940a89fc80","value":"0x0","gasPrice":"0x3b9aca08","gas":"0x7530","input":"0x2f47e6a5c13bb151cad6f7297ceb6a197a9be6fdb3acbcfe1df3cad362525932","raw":"0xf88683011b55843b9aca088275309489a3fc1d3c68f927be68d3de139980940a89fc8080a02f47e6a5c13bb151cad6f7297ceb6a197a9be6fdb3acbcfe1df3cad3625259322ba04cfe3030a781f8af08ebe69286a4fab707f00ce4e535c392ba8249527bdae5e5a002203d6802596ff141506437f7ae72b4391b2bdffafba45f8cb561cf5d24b456","creates":null,"publicKey":"0xf409402c0b151206bb98e1031630681df4c046f0c278f920174daa14a34549fa2da52016ca659c0fe254c542fc3034c5a8da9f4d145fec6150db5ed19b4bc7ce","chainId":4,"condition":null,"r":"0x4cfe3030a781f8af08ebe69286a4fab707f00ce4e535c392ba8249527bdae5e5","s":"0x02203d6802596ff141506437f7ae72b4391b2bdffafba45f8cb561cf5d24b456","v":"0x2b","standardV":"0x0"}, (...)
```
{% endtab %}

{% tab title="Objects in parity\_pendingTransactions" %}
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
| ChainId | `Quantity` |
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
{% endtab %}
{% endtabs %}

[See also JSON RPC parity\_pendingTransactions](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/parity#parity_pendingtransactions)

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

{% tab title="Example response of parity.setEngineSigner" %}
```yaml
true
```
{% endtab %}
{% endtabs %}

[See also JSON RPC parity\_setEngineSigner](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/parity#parity_setenginesigner)

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

[See also JSON RPC parity\_setEngineSignerSecret](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/parity#parity_setenginesignersecret)

