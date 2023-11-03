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
{% tab title="Example response of parity_enode" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": enode://a9cfa3cb16b537e131b0f141b5ef0c0ab9bf0dbec7799c3fc7bf8a974ff3e74e9b3258951b285dfed07ab395049bcd65fed96116bb92561612682551ec458497@18.193.43.58:30303,
  "id": 1
}
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
curl --data '{"method":"parity_getBlockReceipts","params":[latest],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% tab title="Example response of parity_getBlockReceipts" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": {"transactionHash":"0x5bea2e9354f63960beaf02942e7c791e61ae47ce6952115afcb3d7fbd5b8043b","transactionIndex":"0x2","blockHash":"0x31fda0834473452ad7df17e351bb540294fe9cf9752472468851f6b3a2c5f5aa","blockNumber":"0x88de36","cumulativeGasUsed":"0x50e46","gasUsed":"0x5208","from":"0xdd078bc60e500d379eaf30fc8658661ea0f2608a","to":"0x5aab44fdc254f247dcb7ad89f248e7da346081d5","contractAddress":null,"logs":[],"logsBloom":"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","status":"0x1","type":"0x0"}, (...),
  "id": 1
}
```
{% endtab %}

{% tab title="Objects in parity_getBlockReceipts" %}

`BlockParameter`

| Field name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash256 object` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

- `Quantity` or `String` (latest, earliest, pending)


`Hash256`

| Field name | Type |
| :--- | :--- |
| ValueHash256 | `ValueHash256& object` |
| Bytes | `Array` |

`ReceiptForRpc`

| Field name | Type |
| :--- | :--- |
| TransactionHash | `Hash256 object` |
| TransactionIndex | `Quantity` |
| BlockHash | `Hash256 object` |
| BlockNumber | `Quantity` |
| CumulativeGasUsed | `Quantity` |
| GasUsed | `Quantity` |
| BlobGasUsed | `Quantity` |
| BlobGasPrice | `Quantity` |
| EffectiveGasPrice | `Quantity` |
| From | `Address` |
| To | `Address` |
| ContractAddress | `Address` |
| Logs | `LogEntryForRpc[] object` |
| LogsBloom | `Bloom Object` |
| Root | `Hash256 object` |
| Status | `Quantity` |
| Error | `String` |
| Type | `TxType object` |

`LogEntryForRpc[]`

| Field name | Type |
| :--- | :--- |
| Removed | `Boolean` |
| LogIndex | `Quantity` |
| TransactionIndex | `Quantity` |
| TransactionHash | `Hash256 object` |
| BlockHash | `Hash256 object` |
| BlockNumber | `Quantity` |
| Address | `Address` |
| Data | `Data` |
| Topics | `Hash256[] object` |

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
| Id | `String` |
| Name | `String` |
| Caps | `Array` |
| Network | `PeerNetworkInfo object` |
| Protocols | `Array` |
{% endtab %}
{% endtabs %}

[See also CLI parity.netPeers](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/parity#parity-netpeers)
## parity_pendingTransactions

Returns a list of transactions currently in the queue. If address is provided, returns transactions only with given sender address. 

| Invocation |
| :--- |
| `{"method":"parity_pendingTransactions","params":[address]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| address | `Address` |  |

| Returned type | Description |
| :--- | :--- |
| `ParityTransaction object` |  |

{% tabs %}
{% tab title="Example request of parity_pendingTransactions" %}
```
curl --data '{"method":"parity_pendingTransactions","params":[["0x78467cada5f1883e79fcf0f3ebfa50abeec8c820"]],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% tab title="Example response of parity_pendingTransactions" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": {"hash":"0x9372fe18622fd45569ef117644d4cda4af51d11bb3c72fa27690e78c9b0d7808","nonce":"0x11b55","blockHash":null,"blockNumber":null,"transactionIndex":null,"from":"0x89a3fc1d3c68f927be68d3de139980940a89fc80","to":"0x89a3fc1d3c68f927be68d3de139980940a89fc80","value":"0x0","gasPrice":"0x3b9aca08","gas":"0x7530","input":"0x2f47e6a5c13bb151cad6f7297ceb6a197a9be6fdb3acbcfe1df3cad362525932","raw":"0xf88683011b55843b9aca088275309489a3fc1d3c68f927be68d3de139980940a89fc8080a02f47e6a5c13bb151cad6f7297ceb6a197a9be6fdb3acbcfe1df3cad3625259322ba04cfe3030a781f8af08ebe69286a4fab707f00ce4e535c392ba8249527bdae5e5a002203d6802596ff141506437f7ae72b4391b2bdffafba45f8cb561cf5d24b456","creates":null,"publicKey":"0xf409402c0b151206bb98e1031630681df4c046f0c278f920174daa14a34549fa2da52016ca659c0fe254c542fc3034c5a8da9f4d145fec6150db5ed19b4bc7ce","chainId":4,"condition":null,"r":"0x4cfe3030a781f8af08ebe69286a4fab707f00ce4e535c392ba8249527bdae5e5","s":"0x02203d6802596ff141506437f7ae72b4391b2bdffafba45f8cb561cf5d24b456","v":"0x2b","standardV":"0x0"}, (...),
  "id": 1
}
```
{% endtab %}

{% tab title="Objects in parity_pendingTransactions" %}

`ParityTransaction`

| Field name | Type |
| :--- | :--- |
| Hash | `Hash256 object` |
| Nonce | `Quantity` |
| BlockHash | `Hash256 object` |
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

`Hash256`

| Field name | Type |
| :--- | :--- |
| ValueHash256 | `ValueHash256& object` |
| Bytes | `Array` |

`PublicKey`

| Field name | Type |
| :--- | :--- |
| Address | `Address` |
| Bytes | `Data` |
| PrefixedBytes | `Data` |
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
{% tab title="Example response of parity_setEngineSigner" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": true,
  "id": 1
}
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
