# eth

## eth_blockNumber

Returns current block number 

| Invocation |
| :--- |
| `{"method":"eth_blockNumber","params":[]}` |

| This method doesn't have parameters. |
| :--- |

| Returned type | Description |
| :--- | :--- |
| `Quantity` |  |

{% tabs %}
{% tab title="Example request of eth_blockNumber" %}
```
curl --data '{"method":"eth_blockNumber","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% tab title="Example response of eth_blockNumber" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": 0x885480,
  "id": 1
}
```
{% endtab %}
{% endtabs %}

[See also CLI eth.blockNumber](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-blocknumber)
## eth_call

Executes a tx call (does not create a transaction) 

| Invocation |
| :--- |
| `{"method":"eth_call","params":[transactionCall, blockParameter]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| transactionCall | `TransactionForRpc object` |  |
| blockParameter | `BlockParameter object` |  |

| Returned type | Description |
| :--- | :--- |
| `String` |  |

{% tabs %}
{% tab title="Example request of eth_call" %}
```
curl --data '{"method":"eth_call","params":[transactionCall, blockParameter],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% tab title="Example response of eth_call" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": 0x,
  "id": 1
}
```
{% endtab %}

{% tab title="Objects in eth_call" %}

`TransactionForRpc`

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
| MaxPriorityFeePerGas | `Quantity` |
| MaxFeePerGas | `Quantity` |
| Gas | `Quantity` |
| Data | `Data` |
| Input | `Data` |
| ChainId | `Quantity` |
| Type | `TxType object` |
| AccessList | `AccessListItemForRpc[] object` |
| MaxFeePerBlobGas | `Quantity` |
| BlobVersionedHashes | `Data` |
| V | `Quantity` |
| S | `Quantity` |
| R | `Quantity` |
| YParity | `Quantity` |

`TxType`

- [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type


`AccessListItemForRpc[]`

| Field name | Type |
| :--- | :--- |
| Address | `Address` |
| StorageKeys | `Array` |

`BlockParameter`

| Field name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

- `Quantity` or `String` (latest, earliest, pending)

{% endtab %}
{% endtabs %}

[See also CLI eth.call](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-call)
## eth_chainId

Returns ChainID 

| Invocation |
| :--- |
| `{"method":"eth_chainId","params":[]}` |

| This method doesn't have parameters. |
| :--- |

| Returned type | Description |
| :--- | :--- |
| `Quantity` |  |

{% tabs %}
{% tab title="Example request of eth_chainId" %}
```
curl --data '{"method":"eth_chainId","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% tab title="Example response of eth_chainId" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": 0x4,
  "id": 1
}
```
{% endtab %}
{% endtabs %}

[See also CLI eth.chainId](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-chainid)
## eth_createAccessList

Creates an [EIP2930](https://eips.ethereum.org/EIPS/eip-2930) type AccessList for the given transaction 

{% hint style="info" %}
**Hint:** If your transaction has code executed, then you can generate transaction access list with eth_createAccessList. If you send it with your transaction then it will lower your gas cost on Ethereum
{% endhint %}
| Invocation |
| :--- |
| `{"method":"eth_createAccessList","params":[transactionCall, blockParameter, optimize]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| transactionCall | `TransactionForRpc object` | Transaction's details |
| blockParameter | `BlockParameter object` | (optional) |
| optimize | `Boolean` | (optional) |

| Returned type | Description |
| :--- | :--- |
| `AccessListForRpc object` |  |

{% tabs %}
{% tab title="Example request of eth_createAccessList" %}
```
curl --data '{"method":"eth_createAccessList","params":[transactionCall, blockParameter, optimize],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% tab title="Example response of eth_createAccessList" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": {"accessList":[{"address":"0xfffffffffffffffffffffffffffffffffffffffe","storageKeys":["0x0000000000000000000000000000000000000000000000000000000000000001","0x0000000000000000000000000000000000000000000000000000000000000002"]},{"address":"0x76e68a8696537e4141926f3e528733af9e237d69","storageKeys":[]}],"gasUsed":"0xf71b"},
  "id": 1
}
```
{% endtab %}

{% tab title="Objects in eth_createAccessList" %}

`TransactionForRpc`

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
| MaxPriorityFeePerGas | `Quantity` |
| MaxFeePerGas | `Quantity` |
| Gas | `Quantity` |
| Data | `Data` |
| Input | `Data` |
| ChainId | `Quantity` |
| Type | `TxType object` |
| AccessList | `AccessListItemForRpc[] object` |
| MaxFeePerBlobGas | `Quantity` |
| BlobVersionedHashes | `Data` |
| V | `Quantity` |
| S | `Quantity` |
| R | `Quantity` |
| YParity | `Quantity` |

`TxType`

- [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type


`AccessListItemForRpc[]`

| Field name | Type |
| :--- | :--- |
| Address | `Address` |
| StorageKeys | `Array` |

`BlockParameter`

| Field name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

- `Quantity` or `String` (latest, earliest, pending)


`AccessListForRpc`

| Field name | Type |
| :--- | :--- |
| AccessList | `AccessListItemForRpc[] object` |
| GasUsed | `Quantity` |
{% endtab %}
{% endtabs %}

[See also CLI eth.createAccessList](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-createaccesslist)
## eth_estimateGas

Executes a tx call and returns gas used (does not create a transaction) 

| Invocation |
| :--- |
| `{"method":"eth_estimateGas","params":[transactionCall, blockParameter]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| transactionCall | `TransactionForRpc object` |  |
| blockParameter | `BlockParameter object` |  |

| Returned type | Description |
| :--- | :--- |
| `Quantity` |  |

{% tabs %}
{% tab title="Example request of eth_estimateGas" %}
```
curl --data '{"method":"eth_estimateGas","params":[transactionCall, blockParameter],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% tab title="Example response of eth_estimateGas" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": 0x,
  "id": 1
}
```
{% endtab %}

{% tab title="Objects in eth_estimateGas" %}

`TransactionForRpc`

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
| MaxPriorityFeePerGas | `Quantity` |
| MaxFeePerGas | `Quantity` |
| Gas | `Quantity` |
| Data | `Data` |
| Input | `Data` |
| ChainId | `Quantity` |
| Type | `TxType object` |
| AccessList | `AccessListItemForRpc[] object` |
| MaxFeePerBlobGas | `Quantity` |
| BlobVersionedHashes | `Data` |
| V | `Quantity` |
| S | `Quantity` |
| R | `Quantity` |
| YParity | `Quantity` |

`TxType`

- [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type


`AccessListItemForRpc[]`

| Field name | Type |
| :--- | :--- |
| Address | `Address` |
| StorageKeys | `Array` |

`BlockParameter`

| Field name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

- `Quantity` or `String` (latest, earliest, pending)

{% endtab %}
{% endtabs %}

[See also CLI eth.estimateGas](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-estimategas)
## eth_feeHistory

Returns block fee history. 

| Invocation |
| :--- |
| `{"method":"eth_feeHistory","params":[blockCount, newestBlock, rewardPercentiles]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| blockCount | `Quantity` |  |
| newestBlock | `BlockParameter object` |  |
| rewardPercentiles | `Double[] object` |  |

| Returned type | Description |
| :--- | :--- |
| `FeeHistoryResults object` |  |

{% tabs %}
{% tab title="Example request of eth_feeHistory" %}
```
curl --data '{"method":"eth_feeHistory","params":[blockCount, newestBlock, rewardPercentiles],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% tab title="Example response of eth_feeHistory" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": {"baseFeePerGas": ["0x116c1cbb03", "0x10c3714c06"], "gasUsedRatio": [0.3487305666666667, 0.3], "oldestBlock": "0xc7e5ff", "reward": [["0x3b9aca00","0x3b9aca00"], ["0x0","0x3bb24dfa"]]},
  "id": 1
}
```
{% endtab %}

{% tab title="Objects in eth_feeHistory" %}

`BlockParameter`

| Field name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

- `Quantity` or `String` (latest, earliest, pending)


`Double[]`

| Field name | Type |
| :--- | :--- |

`FeeHistoryResults`

| Field name | Type |
| :--- | :--- |
| BaseFeePerGas | `Array` |
| GasUsedRatio | `Double[] object` |
| OldestBlock | `Quantity` |
| Reward | `UInt256[][] object` |

`UInt256[][]`

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

[See also CLI eth.feeHistory](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-feehistory)
## eth_getAccount

Retrieves Accounts via Address and Blocknumber 

| Invocation |
| :--- |
| `{"method":"eth_getAccount","params":[accountAddress, blockParameter]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| accountAddress | `Address` |  |
| blockParameter | `BlockParameter object` |  |

| Returned type | Description |
| :--- | :--- |
| `AccountForRpc object` |  |

{% tabs %}
{% tab title="Example request of eth_getAccount" %}
```
curl --data '{"method":"eth_getAccount","params":[accountAddress, blockParameter],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth_getAccount" %}

`BlockParameter`

| Field name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

- `Quantity` or `String` (latest, earliest, pending)


`AccountForRpc`

| Field name | Type |
| :--- | :--- |
| CodeHash | `Hash` |
| StorageRoot | `Hash` |
| Balance | `Quantity` |
| Nonce | `Quantity` |
{% endtab %}
{% endtabs %}

[See also CLI eth.getAccount](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getaccount)
## eth_getBalance

Returns account balance 

| Invocation |
| :--- |
| `{"method":"eth_getBalance","params":[address, blockParameter]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| address | `Address` |  |
| blockParameter | `BlockParameter object` |  |

| Returned type | Description |
| :--- | :--- |
| `Quantity` |  |

{% tabs %}
{% tab title="Example request of eth_getBalance" %}
```
curl --data '{"method":"eth_getBalance","params":[address, blockParameter],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% tab title="Example response of eth_getBalance" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": 0x6c8ae945bfe6e,
  "id": 1
}
```
{% endtab %}

{% tab title="Objects in eth_getBalance" %}

`BlockParameter`

| Field name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

- `Quantity` or `String` (latest, earliest, pending)

{% endtab %}
{% endtabs %}

[See also CLI eth.getBalance](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getbalance)
## eth_getBlockByHash

Retrieves a block by hash 

| Invocation |
| :--- |
| `{"method":"eth_getBlockByHash","params":[blockHash, returnFullTransactionObjects]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| blockHash | `Hash` |  |
| returnFullTransactionObjects | `Boolean` |  |

| Returned type | Description |
| :--- | :--- |
| `BlockForRpc object` |  |

{% tabs %}
{% tab title="Example request of eth_getBlockByHash" %}
```
curl --data '{"method":"eth_getBlockByHash","params":[blockHash, returnFullTransactionObjects],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% tab title="Example response of eth_getBlockByHash" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": {"author":"0x0000000000000000000000000000000000000000","difficulty":"0x1","extraData":"0x000000000000436f6e73656e5379732048797065726c656467657220426573754d3f7b71165a8266fcc569c96b6fcf9971ee4a8df59eeec4dcced0df8d778733429988e21d0124918859f988be9debf4b25fb5282ea41a2fc15f827f446ec93200","gasLimit":"0x1c9c364","gasUsed":"0x3aa87","hash":"0xf33507f93a046dbdbb80dee5f47b84283297f6c53f1b665adc3cb6fe4138aa84","logsBloom":"0x00000000000020000000000008000060000000000000000000000000000000000000000000000000201000020008000000000000000000000100000000200020000000000000000000000008000000000000000010000000000000000000000000000000000000000000080000000000000000000000002000000010000000000000000000000000000000000000000000040000001000000000000000020000020400000000000000000000000000000000000000000000000000010000000000000002080000000000000000020000000000000000000000000000000000000010020000000000000000000000000100000000000000000000010000000000","miner":"0x0000000000000000000000000000000000000000","mixHash":"0x0000000000000000000000000000000000000000000000000000000000000000","nonce":"0x0000000000000000","number":"0x4e3d79","parentHash":"0x01dba3a7eb61dc6dba3f9663c8fb632f76f60a476f57df74c3e5bd9d0a246339","receiptsRoot":"0x70f3bd929735d8edeb953cd30a27e703e7dd3ec4af32cb74fe8ac302f9e7fb87","sha3Uncles":"0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347","size":"0x754","stateRoot":"0x71af7e25302d1baa4c988c267450eb2c7fa20938fac377809c8d77f8ff8108ac","totalDifficulty":"0x726275","timestamp":"0x60ec1218","baseFeePerGas":"0x7","transactions":["0xa65d391d8149ed0906fab923e870d2bc7f6d27c2be10fe1bcfc6f02869b38ef3","0x369a89354041b7a8cb40edce51c36ebb0ee6ffa4d8056f5a658d90f3bbe1a81a","0xf857daf60d03381b9a6ecb341b62798b424d20dc05763858e13955dd866b489d"],"transactionsRoot":"0x90115f8dc10c08e748675f52f3904615729a014461ca80d72c60239bf75ee209","uncles":[]},
  "id": 1
}
```
{% endtab %}

{% tab title="Objects in eth_getBlockByHash" %}

`BlockForRpc`

| Field name | Type |
| :--- | :--- |
| Author | `Address` |
| Difficulty | `Quantity` |
| ExtraData | `Data` |
| GasLimit | `Quantity` |
| GasUsed | `Quantity` |
| Hash | `Hash` |
| LogsBloom | `Bloom Object` |
| Miner | `Address` |
| MixHash | `Hash` |
| Nonce | `Data` |
| Number | `Quantity` |
| ParentHash | `Hash` |
| ReceiptsRoot | `Hash` |
| Sha3Uncles | `Hash` |
| Signature | `Data` |
| Size | `Quantity` |
| StateRoot | `Hash` |
| Step | `Quantity` |
| TotalDifficulty | `Quantity` |
| Timestamp | `Quantity` |
| BaseFeePerGas | `Quantity` |
| Transactions | `Array` |
| TransactionsRoot | `Hash` |
| Uncles | `Array` |
| Withdrawals | `Array` |
| WithdrawalsRoot | `Hash` |
| DataGasUsed | `Quantity` |
| ExcessBlobGas | `Quantity` |
{% endtab %}
{% endtabs %}

[See also CLI eth.getBlockByHash](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getblockbyhash)
## eth_getBlockByNumber

Retrieves a block by number 

| Invocation |
| :--- |
| `{"method":"eth_getBlockByNumber","params":[blockParameter, returnFullTransactionObjects]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| blockParameter | `BlockParameter object` |  |
| returnFullTransactionObjects | `Boolean` |  |

| Returned type | Description |
| :--- | :--- |
| `BlockForRpc object` |  |

{% tabs %}
{% tab title="Example request of eth_getBlockByNumber" %}
```
curl --data '{"method":"eth_getBlockByNumber","params":[blockParameter, returnFullTransactionObjects],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% tab title="Example response of eth_getBlockByNumber" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": {"author":"0x0000000000000000000000000000000000000000","difficulty":"0x1","extraData":"0x000000000000436f6e73656e5379732048797065726c656467657220426573754d3f7b71165a8266fcc569c96b6fcf9971ee4a8df59eeec4dcced0df8d778733429988e21d0124918859f988be9debf4b25fb5282ea41a2fc15f827f446ec93200","gasLimit":"0x1c9c364","gasUsed":"0x3aa87","hash":"0xf33507f93a046dbdbb80dee5f47b84283297f6c53f1b665adc3cb6fe4138aa84","logsBloom":"0x00000000000020000000000008000060000000000000000000000000000000000000000000000000201000020008000000000000000000000100000000200020000000000000000000000008000000000000000010000000000000000000000000000000000000000000080000000000000000000000002000000010000000000000000000000000000000000000000000040000001000000000000000020000020400000000000000000000000000000000000000000000000000010000000000000002080000000000000000020000000000000000000000000000000000000010020000000000000000000000000100000000000000000000010000000000","miner":"0x0000000000000000000000000000000000000000","mixHash":"0x0000000000000000000000000000000000000000000000000000000000000000","nonce":"0x0000000000000000","number":"0x4e3d79","parentHash":"0x01dba3a7eb61dc6dba3f9663c8fb632f76f60a476f57df74c3e5bd9d0a246339","receiptsRoot":"0x70f3bd929735d8edeb953cd30a27e703e7dd3ec4af32cb74fe8ac302f9e7fb87","sha3Uncles":"0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347","size":"0x754","stateRoot":"0x71af7e25302d1baa4c988c267450eb2c7fa20938fac377809c8d77f8ff8108ac","totalDifficulty":"0x726275","timestamp":"0x60ec1218","baseFeePerGas":"0x7","transactions":["0xa65d391d8149ed0906fab923e870d2bc7f6d27c2be10fe1bcfc6f02869b38ef3","0x369a89354041b7a8cb40edce51c36ebb0ee6ffa4d8056f5a658d90f3bbe1a81a","0xf857daf60d03381b9a6ecb341b62798b424d20dc05763858e13955dd866b489d"],"transactionsRoot":"0x90115f8dc10c08e748675f52f3904615729a014461ca80d72c60239bf75ee209","uncles":[]},
  "id": 1
}
```
{% endtab %}

{% tab title="Objects in eth_getBlockByNumber" %}

`BlockParameter`

| Field name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

- `Quantity` or `String` (latest, earliest, pending)


`BlockForRpc`

| Field name | Type |
| :--- | :--- |
| Author | `Address` |
| Difficulty | `Quantity` |
| ExtraData | `Data` |
| GasLimit | `Quantity` |
| GasUsed | `Quantity` |
| Hash | `Hash` |
| LogsBloom | `Bloom Object` |
| Miner | `Address` |
| MixHash | `Hash` |
| Nonce | `Data` |
| Number | `Quantity` |
| ParentHash | `Hash` |
| ReceiptsRoot | `Hash` |
| Sha3Uncles | `Hash` |
| Signature | `Data` |
| Size | `Quantity` |
| StateRoot | `Hash` |
| Step | `Quantity` |
| TotalDifficulty | `Quantity` |
| Timestamp | `Quantity` |
| BaseFeePerGas | `Quantity` |
| Transactions | `Array` |
| TransactionsRoot | `Hash` |
| Uncles | `Array` |
| Withdrawals | `Array` |
| WithdrawalsRoot | `Hash` |
| DataGasUsed | `Quantity` |
| ExcessBlobGas | `Quantity` |
{% endtab %}
{% endtabs %}

[See also CLI eth.getBlockByNumber](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getblockbynumber)
## eth_getBlockTransactionCountByHash

Returns number of transactions in the block block hash 

| Invocation |
| :--- |
| `{"method":"eth_getBlockTransactionCountByHash","params":[blockHash]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| blockHash | `Hash` |  |

| Returned type | Description |
| :--- | :--- |
| `Quantity` |  |

{% tabs %}
{% tab title="Example request of eth_getBlockTransactionCountByHash" %}
```
curl --data '{"method":"eth_getBlockTransactionCountByHash","params":[["0x199c2ef63392fb67f929fe0580e11f62fa6c54b9951a624896da91375a6805b1"]],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% tab title="Example response of eth_getBlockTransactionCountByHash" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": 0x20,
  "id": 1
}
```
{% endtab %}
{% endtabs %}

[See also CLI eth.getBlockTransactionCountByHash](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getblocktransactioncountbyhash)
## eth_getBlockTransactionCountByNumber

Returns number of transactions in the block by block number 

| Invocation |
| :--- |
| `{"method":"eth_getBlockTransactionCountByNumber","params":[blockParameter]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| blockParameter | `BlockParameter object` |  |

| Returned type | Description |
| :--- | :--- |
| `Quantity` |  |

{% tabs %}
{% tab title="Example request of eth_getBlockTransactionCountByNumber" %}
```
curl --data '{"method":"eth_getBlockTransactionCountByNumber","params":[["8934677"]],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% tab title="Example response of eth_getBlockTransactionCountByNumber" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": 0x20,
  "id": 1
}
```
{% endtab %}

{% tab title="Objects in eth_getBlockTransactionCountByNumber" %}

`BlockParameter`

| Field name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

- `Quantity` or `String` (latest, earliest, pending)

{% endtab %}
{% endtabs %}

[See also CLI eth.getBlockTransactionCountByNumber](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getblocktransactioncountbynumber)
## eth_getCode

Returns account code at given address and block 

| Invocation |
| :--- |
| `{"method":"eth_getCode","params":[address, blockParameter]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| address | `Address` |  |
| blockParameter | `BlockParameter object` |  |

| Returned type | Description |
| :--- | :--- |
| `Data` |  |

{% tabs %}
{% tab title="Example request of eth_getCode" %}
```
curl --data '{"method":"eth_getCode","params":[address, blockParameter],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth_getCode" %}

`BlockParameter`

| Field name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

- `Quantity` or `String` (latest, earliest, pending)

{% endtab %}
{% endtabs %}

[See also CLI eth.getCode](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getcode)
## eth_getFilterChanges

Reads filter changes 

| Invocation |
| :--- |
| `{"method":"eth_getFilterChanges","params":[filterId]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| filterId | `Quantity` |  |

| Returned type | Description |
| :--- | :--- |
| `Array` |  |

{% tabs %}
{% tab title="Example request of eth_getFilterChanges" %}
```
curl --data '{"method":"eth_getFilterChanges","params":[["0x9"]],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% tab title="Example response of eth_getFilterChanges" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": [],
  "id": 1
}
```
{% endtab %}
{% endtabs %}

[See also CLI eth.getFilterChanges](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getfilterchanges)
## eth_getFilterLogs

Reads filter changes 

| Invocation |
| :--- |
| `{"method":"eth_getFilterLogs","params":[filterId]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| filterId | `Quantity` |  |

| Returned type | Description |
| :--- | :--- |
| `Array` |  |

{% tabs %}
{% tab title="Example request of eth_getFilterLogs" %}
```
curl --data '{"method":"eth_getFilterLogs","params":[["0x9"]],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% tab title="Example response of eth_getFilterLogs" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": [],
  "id": 1
}
```
{% endtab %}
{% endtabs %}

## eth_getLogs

Reads logs 

| Invocation |
| :--- |
| `{"method":"eth_getLogs","params":[filter]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| filter | `Filter object` |  |

| Returned type | Description |
| :--- | :--- |
| `Array` |  |

{% tabs %}
{% tab title="Example request of eth_getLogs" %}
```
curl --data '{"method":"eth_getLogs","params":[filter],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth_getLogs" %}

`Filter`

| Field name | Type |
| :--- | :--- |
| Address | `Object` |
| FromBlock | `BlockParameter object` |
| ToBlock | `BlockParameter object` |
| Topics | `Array` |

`BlockParameter`

| Field name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |
{% endtab %}
{% endtabs %}

[See also CLI eth.getLogs](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getlogs)
## eth_getProof

https://github.com/ethereum/EIPs/issues/1186 

| Invocation |
| :--- |
| `{"method":"eth_getProof","params":[accountAddress, hashRate, blockParameter]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| accountAddress | `Address` |  |
| hashRate | `Array` |  |
| blockParameter | `BlockParameter object` |  |

| Returned type | Description |
| :--- | :--- |
| `AccountProof object` |  |

{% tabs %}
{% tab title="Example request of eth_getProof" %}
```
curl --data '{"method":"eth_getProof","params":[accountAddress, hashRate, blockParameter],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% tab title="Example response of eth_getProof" %}
```yaml
{
  "jsonrpc": "2.0",
  "result":  "accountProof": ["0xf90211a0446f43a2d3e433732c75bcf3519f4844e0441a4d39b31395ee9a65700c30d3b4a0b9720db63afe9909418fb6e02c9d9f225310856549cc1b66b486041f2d867250a046e6e560e52d4fe0d2f6609f489ba85f18ad1655fee18452588dc08388fbd711a01e68f36c91bd15cbf65587d6db2a7cbd6635907291e77dd80152161da9a28a48a0d2178a1891c26ccaa2d2cec82c231a0640a26a1f5e07c7b5493761bdb3aa94e5a0fa909327d406980a2e602eadd3f56cf8dc89320d4662340962e9cac2beee3d8da0a0fc71e7dec6320a993b4b65b2f82544910d0a4a7c6f8c5a1ebaa38357d259e3a0680161dec84c5f1c8d5e2a585c9708b1b6fbc2dc664a432e045d99f5e7d89259a0f76a745765be58d46d795c44d3900a4a05b6396530244d50822616c8bbb11e19a0594824352d58f5caff819c8df9581b6a41d0e94eb584ed0431d48b48f320bb5ca0e762eb52b2bcacd728fac605de6229dc83588001ecddcd3b454b64c393ee69eda0d319cf1021af0a8535e4916c3404c84917957d73d0711f71fd6456b4533993bba0878240238a894e6fa798671ac3792563c6666a7c7fba8066d090b65d6a7aa701a03c03fdb4d8f4b241442814cbab24ddb42b75c78874f92fedc162b65d0820fc4da06a3318509aa9ff009b9acb9b348f197a134a46a46295714f436d4fbb19057e69a04139df1b6e0a59b093b35f34f9e5e890bc06832e63b366d768dc29e8638b828480","0xf90211a023459f17e04fba3d19c6993f5be413969842fdbdc85d234a91b2f6b08a38be87a0153060eafecbff55ef0794802ef722b6c66698141cdc0610352d3a426976adeba0bd642b7c5111a1fd09da33feb6df031dc352b6cb20fbbe5ebe3eb328db233bd4a0705bff29e05c7ef69c07fecaa5db2457b2f124befc82f9fe6b0e54c8e35632eba03c1b4ffc076434de97050d2351c24689cfaefaa6cf8dc398dd3b8ce365e652c1a0a1ebf845ea0eb252e2a2e5c422ccd74878a3733144dfd62bcaad34758cc98652a01e4184586f5bdbb17ba74fd87539f02378c7adcef99f1538108f9555520e32d6a0b8acdfd5b644fa2c9a54f68039a3af4c6562c1e7f91ea9e63bda5a849f1260b6a05c1f036a2e7a5829799fc7df2d87eac3e7aee55df461b040c36f5b5c61781059a0a67fd871d32642e44120331f76c2616096d04d7fa1a7db421bafbc39713d8bfba085c15b7ab64f61670f4422adb82176d5808fad4abde6fddda507b0e5ff92ba14a0d95e8f16a39d4e52c67c617eef486adcd947854373ac074ff498150c7ca1ab5da03d9d7be595000872ad6aec05667ad85e1aaaeb2050a692818d3e60d8f1628d8ba0984c657192b052d13fb717051631d67fbc83dd5dcb4d074a2fddc01aa122d95ba03643408862d758aea269c05027a1cd616c957e0db5daea529b56964db8b4f04ba01020dce8d692c3d84d9ae3e42c35e4d8adbddf7b4dd3e09e543fc980849f016e80","0xf90211a04c71b4b56ed723da1c1353ec1b4c23e71dfa821664d4041c1ee1770221f507b6a031c851f261a38df9b2bece1a1cb6985bccfaa10d2bb15954b82cd2ceaad87032a08a4a3d0cc260cf0e0fef54490ce45796fdd3f522451976ca7834563c839c630fa003d074f79074566cd33a3d6a57b6ca8426ca9ea972f66b5dfde00f73287fcfcea07003d29a5bd192038600118ab5941af5c79c1f0fc6184ad564180b809c36c7c4a05f181c50402dcff567abe1c6679a8d5e3825125abca4d969c7cbf76503416813a06a85dfca80e442ef79b66162099d52eaf67718589eb794755ce57dc071a85cdaa085cba9e6937a8a5f0a7d1b5ee9eb9f03c40f89eb13d9d4e0e5fbc574c2b852faa063f93dce441a3373cfc2d1c855884682dfd8d09d1eb9844c73d88eb8d5a7cdfda0e4bc0d2597e5fd0a4cd5e76a03b657ef8959264bdeaf95c4412ebd4ff736ce44a00239290e698aa04485e0c342cfb76ccf27a3e45a161b8b1b534e0c46707b92c8a0080c3439fb84730924539797aad8d017c5f7e008314ed9086450d80ec2b0d7aba0861dbe37b9b9e0f58b6fdb83eec28045c5f7f1861530f47f78fc8a2b18a6bd8da0036697e8dc063e9086d115d468c934a01123adb3c66dcc236ee4aa8141888626a033c6f574ee79d9b1322e9ca1131a5984b33cc8881e6ac8ebd6ca36f3437cedcda07fc2855e6bb0f276202094dffe49f2b62f2366d9aba9db3ffe76d62bcdc29f0d80","0xf90211a06995d919b53eefa0b097d75c2a5dee2c54109a06d3b60586327fa0086437b801a05c7d7c92f9f1e49cf27c5d97b4a96302f033d42df5b1d7c013ef05031d67e567a05278417d007913a1e7d6606fb464e7b81f6cee91b6a1d250c67b3822d9fc68d8a0fba6d9cd68fe72db07af9d99e30c32502e0afb15ee9712f6781014195444b9e1a07dca25ba23f429b5960d9feb23367e2a088e50211f280118b7f1703e6d47103fa0399eb6e0d4390688f6b28df56c7ad72d6b6cbac9066110c6a727fe35cd889e9da08ef84ddaa3b70095fb5624878289744740a9f8761ef1132ba722abc977a218ffa04296811ae184892e2d5ecc18d05fc6279d6168eb0f3abb1f97d8d0a0721c12fba05c46766c579b8a0b8a0b79b84f6cd1e5dae1c53a2988883b0385daa2cf3bdf82a01a4ba17dd1b59147a321dd374a22a0d959f1a79d70132db7f1a8b89968ff6062a0f7ffc6f3921c6bccd47c862519409e63f51d39aaa215819c664b1adb48a940b0a0dc6e636385407900a649917fb772b0972d50d197e9fd5cdb853a1c98a29e6a47a0674b224cf784c59ca937bfebbdcd8dec05ddbd57400b04f5965558a0c2d2299ca0f95ce8c921c5b17ebf74563f2496a88631aa6a697bfd9e3e22b326efa453115ea0fc133bc6b9dd098933c816660df2959074f47dfc4ab3a10fd2059a2b2e0e911aa057cac15218d6013890df78eec099144ba2000e3eea73a3498d0eb9b1f733459080","0xf90211a0400aafe69a1a482277db720d12b9c0b98695f5dd78c6faf5421b3ddac50165a6a0235987542e4b37aa8e6957776c9dff11d6818797db5ad505de5e0049045c7e20a0f573b4776f8b323b7d55850300d53855cfa6fa5fe6e36ba64da6bb263fef774aa0b3a36d14d660c3492785b0f1488a2231b6d83bd51268685b95ba9267aa331fe2a0096e8c65bae8fce7d234710a1e1b8c98bd4fb2d56f8bb2eda7ef20d1cf31c7e2a059194c8bf50c2ac393c4c60a59c7ddf0c515bd9f545fc4ef212629a8b96af62aa0ffe882f4e2f1e8e49c7777f6f9b4438a9f31d4e5cefe82c96fdd3587d9a95173a00127ced7fdbdd57cd5ed8b766c9312c09e0c67a350087d22b4cc7b2d17a45479a0cfc030a250448838caa716cd2767cd1a4837b29019f474980720c94fe2ce412ea079ec358d2b4122692bf70eb73a0ddb0ff4bfeb05d503fe1acafe068e2d3d33cfa0733e2ccdc638ca3c940c566c742a1b9d58f7caaa062e8a121c07f5e3367160a8a0aa1f403798b71c67b821e6f6128cc5366bebe145ebd563714cf9972b2474814ea01b988afc628922aeed3de606a8a462093f1c0c803a563bbe178552a360bad1e1a0082741e2219024bf4e19f5b1b0643e5e885cb7dfb4cdc0a51faf5bd9f92ff9b6a03c86490fe8f0256be44b95815086d95cb62fdbc3ede63ca08d12d68f274b7fc5a03a81565e860ac32921ed4c9f4e0ace3b341c342abd030d4955f2d1e64dd81d2b80","0xf8f1a0bd9a0d9559513a6c7bf427816142d254d5a9049e9ff385f3514b50cb828951fc808080a07d37353f509c9bdc99635bd75fde71a6ef99271154ac4ffd5c437e0b951d5eaca029e3beec2f52c99a1fa73251ed64486f2766af3dcb950900679f7fd740badfdaa09b348c93803521a41bd2a754e3ea5435bb2663724cdfb70a87984458b53f03dea0904e696aceac8c89e2825e0dae8add52a9b46faef2ffbabb932e8bc1267e48ba80a0935dedba6ec5fb5b89285993c5f1be0cb77492e63e11bb38b5aca18011699eb8a06b52f587932dfb669f6cbefe35b251c6d8e6b5e8a2e1c1a7c2a452a4f2917b0d808080808080"],"address":"0x7f0d15c7faae65896648c8273b6d7e43f58fa842","balance":"0x0","codeHash":"0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470","nonce":"0x0","storageHash":"0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421","storageProof":[{"key":"0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421","proof":[],"value":"0x00"],
  "id": 1
}
```
{% endtab %}

{% tab title="Objects in eth_getProof" %}

`BlockParameter`

| Field name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

- `Quantity` or `String` (latest, earliest, pending)


`AccountProof`

| Field name | Type |
| :--- | :--- |
| Address | `Address` |
| Proof | `Data` |
| Balance | `Quantity` |
| CodeHash | `Hash` |
| Nonce | `Quantity` |
| StorageRoot | `Hash` |
| StorageProofs | `StorageProof[] object` |

`StorageProof[]`

| Field name | Type |
| :--- | :--- |
| Proof | `Data` |
| Key | `Data` |
| Value | `Data` |
{% endtab %}
{% endtabs %}

[See also CLI eth.getProof](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getproof)
## eth_getStorageAt

Returns storage data at address. storage_index 

| Invocation |
| :--- |
| `{"method":"eth_getStorageAt","params":[address, positionIndex, blockParameter]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| address | `Address` |  |
| positionIndex | `Quantity` |  |
| blockParameter | `BlockParameter object` |  |

| Returned type | Description |
| :--- | :--- |
| `Data` |  |

{% tabs %}
{% tab title="Example request of eth_getStorageAt" %}
```
curl --data '{"method":"eth_getStorageAt","params":[address, positionIndex, blockParameter],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% tab title="Example response of eth_getStorageAt" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": 0x,
  "id": 1
}
```
{% endtab %}

{% tab title="Objects in eth_getStorageAt" %}

`BlockParameter`

| Field name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

- `Quantity` or `String` (latest, earliest, pending)

{% endtab %}
{% endtabs %}

[See also CLI eth.getStorageAt](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getstorageat)
## eth_getTransactionByBlockHashAndIndex

Retrieves a transaction by block hash and index 

| Invocation |
| :--- |
| `{"method":"eth_getTransactionByBlockHashAndIndex","params":[blockHash, positionIndex]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| blockHash | `Hash` |  |
| positionIndex | `Quantity` |  |

| Returned type | Description |
| :--- | :--- |
| `TransactionForRpc object` |  |

{% tabs %}
{% tab title="Example request of eth_getTransactionByBlockHashAndIndex" %}
```
curl --data '{"method":"eth_getTransactionByBlockHashAndIndex","params":[blockHash, positionIndex],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% tab title="Example response of eth_getTransactionByBlockHashAndIndex" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": {"hash":"0xb87ec4c8cb36a06f49cdd93c2e9f63e0b7db9af07a605c8bcf1fbe705162344e","nonce":"0x5d","blockHash":"0xfe47fb3539ccce9d19a032473effdd6ce19e3c921bbae2746152ccf82ceef48e","blockNumber":"0x4dfc90","transactionIndex":"0x2","from":"0xaa9a0f962e433755c843175488fe088fccf8526f","to":"0x074b24cef703f17fe123fa1b82081055775b7004","value":"0x0","gasPrice":"0x2540be401","gas":"0x130ab","data":"0x428dc451000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000030000000000000000000000005d3c0f4ca5ee99f8e8f59ff9a5fab04f6a7e007f0000000000000000000000009d233a907e065855d2a9c7d4b552ea27fb2e5a36000000000000000000000000cbe56b00d173a26a5978ce90db2e33622fd95a28","input":"0x428dc451000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000030000000000000000000000005d3c0f4ca5ee99f8e8f59ff9a5fab04f6a7e007f0000000000000000000000009d233a907e065855d2a9c7d4b552ea27fb2e5a36000000000000000000000000cbe56b00d173a26a5978ce90db2e33622fd95a28","type":"0x0","v":"0x2e","s":"0x696f6db060a6dd30435a7f592506ba3213f81cf4704e211a1a45a99f8984189a","r":"0x7e07076186e38b68cb7e4f68a04258a5744c5a2ad1a7153456ee662a07902954"},
  "id": 1
}
```
{% endtab %}

{% tab title="Objects in eth_getTransactionByBlockHashAndIndex" %}

`TransactionForRpc`

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
| MaxPriorityFeePerGas | `Quantity` |
| MaxFeePerGas | `Quantity` |
| Gas | `Quantity` |
| Data | `Data` |
| Input | `Data` |
| ChainId | `Quantity` |
| Type | `TxType object` |
| AccessList | `AccessListItemForRpc[] object` |
| MaxFeePerBlobGas | `Quantity` |
| BlobVersionedHashes | `Data` |
| V | `Quantity` |
| S | `Quantity` |
| R | `Quantity` |
| YParity | `Quantity` |

`TxType`

- [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type


`AccessListItemForRpc[]`

| Field name | Type |
| :--- | :--- |
| Address | `Address` |
| StorageKeys | `Array` |
{% endtab %}
{% endtabs %}

## eth_getTransactionByBlockNumberAndIndex

Retrieves a transaction by block number and index 

| Invocation |
| :--- |
| `{"method":"eth_getTransactionByBlockNumberAndIndex","params":[blockParameter, positionIndex]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| blockParameter | `BlockParameter object` |  |
| positionIndex | `Quantity` |  |

| Returned type | Description |
| :--- | :--- |
| `TransactionForRpc object` |  |

{% tabs %}
{% tab title="Example request of eth_getTransactionByBlockNumberAndIndex" %}
```
curl --data '{"method":"eth_getTransactionByBlockNumberAndIndex","params":[blockParameter, positionIndex],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% tab title="Example response of eth_getTransactionByBlockNumberAndIndex" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": {"hash":"0xfd320a4949990929f64b52041c58a74c8ce13289b3d6853bd8073b0580aa031a","nonce":"0x5b","blockHash":"0xd779e1a5ce8f34544d66d219bb3e5331a7b280fae89a36d7d52813a23e1ca1e3","blockNumber":"0x4dfdd8","transactionIndex":"0x8","from":"0xadb540569e2db497bd973c141b0b63be98461e40","to":"0x074b24cef703f17fe123fa1b82081055775b7004","value":"0x0","gasPrice":"0x12a05f200","gas":"0x927c0","data":"0x428dc451000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000030000000000000000000000005d3c0f4ca5ee99f8e8f59ff9a5fab04f6a7e007f0000000000000000000000009d233a907e065855d2a9c7d4b552ea27fb2e5a36000000000000000000000000cbe56b00d173a26a5978ce90db2e33622fd95a28","input":"0x428dc451000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000030000000000000000000000005d3c0f4ca5ee99f8e8f59ff9a5fab04f6a7e007f0000000000000000000000009d233a907e065855d2a9c7d4b552ea27fb2e5a36000000000000000000000000cbe56b00d173a26a5978ce90db2e33622fd95a28","type":"0x0","v":"0x2e","s":"0x37b90a929884787df717c87258f0434e2f115ce2fbb4bfc230322112fa9d5bbc","r":"0x5222eff9e16b5c3e9e8901d9c45fc8e0f9cf774e8a56546a504025ef67ceefec"},
  "id": 1
}
```
{% endtab %}

{% tab title="Objects in eth_getTransactionByBlockNumberAndIndex" %}

`BlockParameter`

| Field name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

- `Quantity` or `String` (latest, earliest, pending)


`TransactionForRpc`

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
| MaxPriorityFeePerGas | `Quantity` |
| MaxFeePerGas | `Quantity` |
| Gas | `Quantity` |
| Data | `Data` |
| Input | `Data` |
| ChainId | `Quantity` |
| Type | `TxType object` |
| AccessList | `AccessListItemForRpc[] object` |
| MaxFeePerBlobGas | `Quantity` |
| BlobVersionedHashes | `Data` |
| V | `Quantity` |
| S | `Quantity` |
| R | `Quantity` |
| YParity | `Quantity` |

`TxType`

- [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type


`AccessListItemForRpc[]`

| Field name | Type |
| :--- | :--- |
| Address | `Address` |
| StorageKeys | `Array` |
{% endtab %}
{% endtabs %}

[See also CLI eth.getTransactionByBlockNumberAndIndex](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-gettransactionbyblocknumberandindex)
## eth_getTransactionByHash

Retrieves a transaction by hash 

| Invocation |
| :--- |
| `{"method":"eth_getTransactionByHash","params":[transactionHash]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| transactionHash | `Hash` |  |

| Returned type | Description |
| :--- | :--- |
| `TransactionForRpc object` |  |

{% tabs %}
{% tab title="Example request of eth_getTransactionByHash" %}
```
curl --data '{"method":"eth_getTransactionByHash","params":["0xabca23910646013d608ec671de099447ab60b2b7159ad8319c3c088e8d9ea0fa"],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% tab title="Example response of eth_getTransactionByHash" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": {"hash":"0xabca23910646013d608ec671de099447ab60b2b7159ad8319c3c088e8d9ea0fa","nonce":"0x1a","blockHash":"0xcb6756f69e0469acd5e5bb77966be580786ec2c11de85c9ddfd75257010e34f8","blockNumber":"0x4dfbc7","transactionIndex":"0xb","from":"0xe1e7ab1c643dbe5b24739fdf2a5c7c193b54dd99","to":"0x0b10e304088b2ba2b2acfd2f72573faad31a13a5","value":"0x0","gasPrice":"0x2540be400","gas":"0xb4a4","data":"0x095ea7b300000000000000000000000092c1576845703089cf6c0788379ed81f75f45dd500000000000000000000000000000000000000000000000000000002540be400","input":"0x095ea7b300000000000000000000000092c1576845703089cf6c0788379ed81f75f45dd500000000000000000000000000000000000000000000000000000002540be400","type":"0x0","v":"0x2d","s":"0x496d72d435ead8a8a9a865b14d6a102c1a9f848681d050dbbf11c522c612235","r":"0xc8350e831203fecc8bff41f5cf858ac1d121e4b4d9e59c1137cc9440516ca9fd"},
  "id": 1
}
```
{% endtab %}

{% tab title="Objects in eth_getTransactionByHash" %}

`TransactionForRpc`

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
| MaxPriorityFeePerGas | `Quantity` |
| MaxFeePerGas | `Quantity` |
| Gas | `Quantity` |
| Data | `Data` |
| Input | `Data` |
| ChainId | `Quantity` |
| Type | `TxType object` |
| AccessList | `AccessListItemForRpc[] object` |
| MaxFeePerBlobGas | `Quantity` |
| BlobVersionedHashes | `Data` |
| V | `Quantity` |
| S | `Quantity` |
| R | `Quantity` |
| YParity | `Quantity` |

`TxType`

- [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type


`AccessListItemForRpc[]`

| Field name | Type |
| :--- | :--- |
| Address | `Address` |
| StorageKeys | `Array` |
{% endtab %}
{% endtabs %}

[See also CLI eth.getTransactionByHash](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-gettransactionbyhash)
## eth_getTransactionCount

Returns account nonce (number of trnsactions from the account since genesis) at the given block number 

| Invocation |
| :--- |
| `{"method":"eth_getTransactionCount","params":[address, blockParameter]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| address | `Address` |  |
| blockParameter | `BlockParameter object` |  |

| Returned type | Description |
| :--- | :--- |
| `Quantity` |  |

{% tabs %}
{% tab title="Example request of eth_getTransactionCount" %}
```
curl --data '{"method":"eth_getTransactionCount","params":[address, blockParameter],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% tab title="Example response of eth_getTransactionCount" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": 0x3e,
  "id": 1
}
```
{% endtab %}

{% tab title="Objects in eth_getTransactionCount" %}

`BlockParameter`

| Field name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

- `Quantity` or `String` (latest, earliest, pending)

{% endtab %}
{% endtabs %}

[See also CLI eth.getTransactionCount](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-gettransactioncount)
## eth_getTransactionReceipt

Retrieves a transaction receipt by tx hash 

| Invocation |
| :--- |
| `{"method":"eth_getTransactionReceipt","params":[txHashData]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| txHashData | `Hash` |  |

| Returned type | Description |
| :--- | :--- |
| `ReceiptForRpc object` |  |

{% tabs %}
{% tab title="Example request of eth_getTransactionReceipt" %}
```
curl --data '{"method":"eth_getTransactionReceipt","params":[["0x80757153e93d1b475e203406727b62a501187f63e23b8fa999279e219ee3be71"]],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% tab title="Example response of eth_getTransactionReceipt" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": {"transactionHash":"0x80757153e93d1b475e203406727b62a501187f63e23b8fa999279e219ee3be71","transactionIndex":"0x7","blockHash":"0x42def051b21038905cd2a2bc28d460a94df2249466847f0e1bcb4be4eb21891a","blockNumber":"0x4e3f39","cumulativeGasUsed":"0x62c9d","gasUsed":"0xe384","effectiveGasPrice":"0x12a05f200","from":"0x0afe0a94415e8974052e7e6cfab19ee1c2ef4f69","to":"0x19e8c84d4943e58b035626b064cfc76ee13ee6cb","contractAddress":null,"logs":[{"removed":false,"logIndex":"0x0","transactionIndex":"0x7","transactionHash":"0x80757153e93d1b475e203406727b62a501187f63e23b8fa999279e219ee3be71","blockHash":"0x42def051b21038905cd2a2bc28d460a94df2249466847f0e1bcb4be4eb21891a","blockNumber":"0x4e3f39","address":"0x2ac3c1d3e24b45c6c310534bc2dd84b5ed576335","data":"0x0000000000000000000000000000000000000000000000000000000000000000","topics":["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef","0x00000000000000000000000019e8c84d4943e58b035626b064cfc76ee13ee6cb","0x00000000000000000000000028078300a459a9e136f872285654cdc74463041e"]},{"removed":false,"logIndex":"0x1","transactionIndex":"0x7","transactionHash":"0x80757153e93d1b475e203406727b62a501187f63e23b8fa999279e219ee3be71","blockHash":"0x42def051b21038905cd2a2bc28d460a94df2249466847f0e1bcb4be4eb21891a","blockNumber":"0x4e3f39","address":"0x19e8c84d4943e58b035626b064cfc76ee13ee6cb","data":"0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007735940000000000000000000000000000000000000000000000000000000000000000000","topics":["0x950494fc3642fae5221b6c32e0e45765c95ebb382a04a71b160db0843e74c99f","0x0000000000000000000000000afe0a94415e8974052e7e6cfab19ee1c2ef4f69","0x00000000000000000000000028078300a459a9e136f872285654cdc74463041e","0x0000000000000000000000000afe0a94415e8974052e7e6cfab19ee1c2ef4f69"]}],"logsBloom":"0x00000000000000000000000000000000000000000000000020000000000000800000000000000000000400000000000000000000000000000000000000002000000000000000000000000008000000000000000000000000000000000000000000000002002000000000000000000000000000000000000000000812000000000000000000000000000001000000000000000000000008000400008000000000000000000000000000000000000000000000000000000000800000000000000000000002000000000000000000000000000000000000100000000000000000002000000000000000000000000010000000000000000000000400000000020000","status":"0x1","type":"0x0"},
  "id": 1
}
```
{% endtab %}

{% tab title="Objects in eth_getTransactionReceipt" %}

`ReceiptForRpc`

| Field name | Type |
| :--- | :--- |
| TransactionHash | `Hash` |
| TransactionIndex | `Quantity` |
| BlockHash | `Hash` |
| BlockNumber | `Quantity` |
| CumulativeGasUsed | `Quantity` |
| GasUsed | `Quantity` |
| DataGasUsed | `Quantity` |
| DataGasPrice | `Quantity` |
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

- [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type

{% endtab %}
{% endtabs %}

[See also CLI eth.getTransactionReceipt](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-gettransactionreceipt)
## eth_getUncleByBlockHashAndIndex

Retrieves an uncle block header by block hash and uncle index 

| Invocation |
| :--- |
| `{"method":"eth_getUncleByBlockHashAndIndex","params":[blockHashData, positionIndex]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| blockHashData | `Hash` |  |
| positionIndex | `Quantity` |  |

| Returned type | Description |
| :--- | :--- |
| `BlockForRpc object` |  |

{% tabs %}
{% tab title="Example request of eth_getUncleByBlockHashAndIndex" %}
```
curl --data '{"method":"eth_getUncleByBlockHashAndIndex","params":[blockHashData, positionIndex],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth_getUncleByBlockHashAndIndex" %}

`BlockForRpc`

| Field name | Type |
| :--- | :--- |
| Author | `Address` |
| Difficulty | `Quantity` |
| ExtraData | `Data` |
| GasLimit | `Quantity` |
| GasUsed | `Quantity` |
| Hash | `Hash` |
| LogsBloom | `Bloom Object` |
| Miner | `Address` |
| MixHash | `Hash` |
| Nonce | `Data` |
| Number | `Quantity` |
| ParentHash | `Hash` |
| ReceiptsRoot | `Hash` |
| Sha3Uncles | `Hash` |
| Signature | `Data` |
| Size | `Quantity` |
| StateRoot | `Hash` |
| Step | `Quantity` |
| TotalDifficulty | `Quantity` |
| Timestamp | `Quantity` |
| BaseFeePerGas | `Quantity` |
| Transactions | `Array` |
| TransactionsRoot | `Hash` |
| Uncles | `Array` |
| Withdrawals | `Array` |
| WithdrawalsRoot | `Hash` |
| DataGasUsed | `Quantity` |
| ExcessBlobGas | `Quantity` |
{% endtab %}
{% endtabs %}

[See also CLI eth.getUncleByBlockHashAndIndex](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getunclebyblockhashandindex)
## eth_getUncleByBlockNumberAndIndex

Retrieves an uncle block header by block number and uncle index 

| Invocation |
| :--- |
| `{"method":"eth_getUncleByBlockNumberAndIndex","params":[blockParameter, positionIndex]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| blockParameter | `BlockParameter object` |  |
| positionIndex | `Quantity` |  |

| Returned type | Description |
| :--- | :--- |
| `BlockForRpc object` |  |

{% tabs %}
{% tab title="Example request of eth_getUncleByBlockNumberAndIndex" %}
```
curl --data '{"method":"eth_getUncleByBlockNumberAndIndex","params":[blockParameter, positionIndex],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth_getUncleByBlockNumberAndIndex" %}

`BlockParameter`

| Field name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

- `Quantity` or `String` (latest, earliest, pending)


`BlockForRpc`

| Field name | Type |
| :--- | :--- |
| Author | `Address` |
| Difficulty | `Quantity` |
| ExtraData | `Data` |
| GasLimit | `Quantity` |
| GasUsed | `Quantity` |
| Hash | `Hash` |
| LogsBloom | `Bloom Object` |
| Miner | `Address` |
| MixHash | `Hash` |
| Nonce | `Data` |
| Number | `Quantity` |
| ParentHash | `Hash` |
| ReceiptsRoot | `Hash` |
| Sha3Uncles | `Hash` |
| Signature | `Data` |
| Size | `Quantity` |
| StateRoot | `Hash` |
| Step | `Quantity` |
| TotalDifficulty | `Quantity` |
| Timestamp | `Quantity` |
| BaseFeePerGas | `Quantity` |
| Transactions | `Array` |
| TransactionsRoot | `Hash` |
| Uncles | `Array` |
| Withdrawals | `Array` |
| WithdrawalsRoot | `Hash` |
| DataGasUsed | `Quantity` |
| ExcessBlobGas | `Quantity` |
{% endtab %}
{% endtabs %}

[See also CLI eth.getUncleByBlockNumberAndIndex](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getunclebyblocknumberandindex)
## eth_getUncleCountByBlockHash

Returns number of uncles in the block by block hash 

| Invocation |
| :--- |
| `{"method":"eth_getUncleCountByBlockHash","params":[blockHash]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| blockHash | `Hash` |  |

| Returned type | Description |
| :--- | :--- |
| `Quantity` |  |

{% tabs %}
{% tab title="Example request of eth_getUncleCountByBlockHash" %}
```
curl --data '{"method":"eth_getUncleCountByBlockHash","params":[["0xe495c3385bb9162103bc07989d7160c38759e017c37c7d0608268bd5989d6bed "]],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% tab title="Example response of eth_getUncleCountByBlockHash" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": 0x0,
  "id": 1
}
```
{% endtab %}
{% endtabs %}

## eth_getUncleCountByBlockNumber

Returns number of uncles in the block by block number 

| Invocation |
| :--- |
| `{"method":"eth_getUncleCountByBlockNumber","params":[blockParameter]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| blockParameter | `BlockParameter object` |  |

| Returned type | Description |
| :--- | :--- |
| `Quantity` |  |

{% tabs %}
{% tab title="Example request of eth_getUncleCountByBlockNumber" %}
```
curl --data '{"method":"eth_getUncleCountByBlockNumber","params":[["5127400"]],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% tab title="Example response of eth_getUncleCountByBlockNumber" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": 0x0,
  "id": 1
}
```
{% endtab %}

{% tab title="Objects in eth_getUncleCountByBlockNumber" %}

`BlockParameter`

| Field name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

- `Quantity` or `String` (latest, earliest, pending)

{% endtab %}
{% endtabs %}

[See also CLI eth.getUncleCountByBlockNumber](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getunclecountbyblocknumber)
## eth_newBlockFilter

Creates an update filter 

| Invocation |
| :--- |
| `{"method":"eth_newBlockFilter","params":[]}` |

| This method doesn't have parameters. |
| :--- |

| Returned type | Description |
| :--- | :--- |
| `Quantity` |  |

{% tabs %}
{% tab title="Example request of eth_newBlockFilter" %}
```
curl --data '{"method":"eth_newBlockFilter","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% tab title="Example response of eth_newBlockFilter" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": 0x0,
  "id": 1
}
```
{% endtab %}
{% endtabs %}

## eth_newFilter

Creates an update filter 

| Invocation |
| :--- |
| `{"method":"eth_newFilter","params":[filter]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| filter | `Filter object` |  |

| Returned type | Description |
| :--- | :--- |
| `Quantity` |  |

{% tabs %}
{% tab title="Example request of eth_newFilter" %}
```
curl --data '{"method":"eth_newFilter","params":[[{"toBlock":"latest"}]],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% tab title="Example response of eth_newFilter" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": 0x9,
  "id": 1
}
```
{% endtab %}

{% tab title="Objects in eth_newFilter" %}

`Filter`

| Field name | Type |
| :--- | :--- |
| Address | `Object` |
| FromBlock | `BlockParameter object` |
| ToBlock | `BlockParameter object` |
| Topics | `Array` |

`BlockParameter`

| Field name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |
{% endtab %}
{% endtabs %}

## eth_newPendingTransactionFilter

Creates an update filter 

| Invocation |
| :--- |
| `{"method":"eth_newPendingTransactionFilter","params":[]}` |

| This method doesn't have parameters. |
| :--- |

| Returned type | Description |
| :--- | :--- |
| `Quantity` |  |

{% tabs %}
{% tab title="Example request of eth_newPendingTransactionFilter" %}
```
curl --data '{"method":"eth_newPendingTransactionFilter","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% tab title="Example response of eth_newPendingTransactionFilter" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": 0x1,
  "id": 1
}
```
{% endtab %}
{% endtabs %}

[See also CLI eth.newPendingTransactionFilter](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-newpendingtransactionfilter)
## eth_pendingTransactions

Returns the pending transactions list 

| Invocation |
| :--- |
| `{"method":"eth_pendingTransactions","params":[]}` |

| This method doesn't have parameters. |
| :--- |

| Returned type | Description |
| :--- | :--- |
| `TransactionForRpc object` |  |

{% tabs %}
{% tab title="Example request of eth_pendingTransactions" %}
```
curl --data '{"method":"eth_pendingTransactions","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% tab title="Example response of eth_pendingTransactions" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": [],
  "id": 1
}
```
{% endtab %}

{% tab title="Objects in eth_pendingTransactions" %}

`TransactionForRpc`

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
| MaxPriorityFeePerGas | `Quantity` |
| MaxFeePerGas | `Quantity` |
| Gas | `Quantity` |
| Data | `Data` |
| Input | `Data` |
| ChainId | `Quantity` |
| Type | `TxType object` |
| AccessList | `AccessListItemForRpc[] object` |
| MaxFeePerBlobGas | `Quantity` |
| BlobVersionedHashes | `Data` |
| V | `Quantity` |
| S | `Quantity` |
| R | `Quantity` |
| YParity | `Quantity` |

`TxType`

- [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type


`AccessListItemForRpc[]`

| Field name | Type |
| :--- | :--- |
| Address | `Address` |
| StorageKeys | `Array` |
{% endtab %}
{% endtabs %}

[See also CLI eth.pendingTransactions](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-pendingtransactions)
## eth_protocolVersion

Returns ETH protocol version 

| Invocation |
| :--- |
| `{"method":"eth_protocolVersion","params":[]}` |

| This method doesn't have parameters. |
| :--- |

| Returned type | Description |
| :--- | :--- |
| `String` |  |

{% tabs %}
{% tab title="Example request of eth_protocolVersion" %}
```
curl --data '{"method":"eth_protocolVersion","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% tab title="Example response of eth_protocolVersion" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": 0x41,
  "id": 1
}
```
{% endtab %}
{% endtabs %}

[See also CLI eth.protocolVersion](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-protocolversion)
## eth_sendRawTransaction

Send a raw transaction to the tx pool and broadcasting 

| Invocation |
| :--- |
| `{"method":"eth_sendRawTransaction","params":[transaction]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| transaction | `Data` |  |

| Returned type | Description |
| :--- | :--- |
| `Hash` |  |

{% tabs %}
{% tab title="Example request of eth_sendRawTransaction" %}
```
curl --data '{"method":"eth_sendRawTransaction","params":[["0xf86380843b9aca0082520894b943b13292086848d8180d75c73361107920bb1a80802ea0385656b91b8f1f5139e9ba3449b946a446c9cfe7adb91b180ddc22c33b17ac4da01fe821879d386b140fd8080dcaaa98b8c709c5025c8c4dea1334609ebac41b6c"]],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% tab title="Example response of eth_sendRawTransaction" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": 0x7a5a94d5b5e3ce017ce2c2022f02ec5db10611c43695c3256861bdb19317ab0e,
  "id": 1
}
```
{% endtab %}
{% endtabs %}

[See also CLI eth.sendRawTransaction](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-sendrawtransaction)
## eth_sendTransaction

Send a transaction to the tx pool and broadcasting 

| Invocation |
| :--- |
| `{"method":"eth_sendTransaction","params":[rpcTx]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| rpcTx | `TransactionForRpc object` |  |

| Returned type | Description |
| :--- | :--- |
| `Hash` |  |

{% tabs %}
{% tab title="Example request of eth_sendTransaction" %}
```
curl --data '{"method":"eth_sendTransaction","params":[[{"From": "0xc2208fe87805279b03c1a8a78d7ee4bfdb0e48ee", "Gas":"21000","GasPrice":"20000000000", "Nonce":"23794", "To":"0x2d44c0e097f6cd0f514edac633d82e01280b4a5c"}]],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% tab title="Example response of eth_sendTransaction" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": 0x03783fac2efed8fbc9ad443e592ee30e61d65f471140c10ca155e937b435b760,
  "id": 1
}
```
{% endtab %}

{% tab title="Objects in eth_sendTransaction" %}

`TransactionForRpc`

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
| MaxPriorityFeePerGas | `Quantity` |
| MaxFeePerGas | `Quantity` |
| Gas | `Quantity` |
| Data | `Data` |
| Input | `Data` |
| ChainId | `Quantity` |
| Type | `TxType object` |
| AccessList | `AccessListItemForRpc[] object` |
| MaxFeePerBlobGas | `Quantity` |
| BlobVersionedHashes | `Data` |
| V | `Quantity` |
| S | `Quantity` |
| R | `Quantity` |
| YParity | `Quantity` |

`TxType`

- [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type


`AccessListItemForRpc[]`

| Field name | Type |
| :--- | :--- |
| Address | `Address` |
| StorageKeys | `Array` |
{% endtab %}
{% endtabs %}

[See also CLI eth.sendTransaction](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-sendtransaction)
## eth_syncing

Returns syncing status 

| Invocation |
| :--- |
| `{"method":"eth_syncing","params":[]}` |

| This method doesn't have parameters. |
| :--- |

| Returned type | Description |
| :--- | :--- |
| `SyncingResult object` |  |

{% tabs %}
{% tab title="Example request of eth_syncing" %}
```
curl --data '{"method":"eth_syncing","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% tab title="Example response of eth_syncing" %}
```yaml
{
  "jsonrpc": "2.0",
  "result": {"isSyncing":true,"startingBlock":"0x0","currentBlock":"0x0","highestBlock":"0x4df8a4"},"id":1},
  "id": 1
}
```
{% endtab %}

{% tab title="Objects in eth_syncing" %}

`SyncingResult`

| Field name | Type |
| :--- | :--- |
| IsSyncing | `Boolean` |
| StartingBlock | `Quantity` |
| CurrentBlock | `Quantity` |
| HighestBlock | `Quantity` |
| SyncMode | `SyncMode object` |

`SyncMode`

| Field name | Type |
| :--- | :--- |
{% endtab %}
{% endtabs %}

[See also CLI eth.syncing](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-syncing)
## eth_uninstallFilter

Creates an update filter 

| Invocation |
| :--- |
| `{"method":"eth_uninstallFilter","params":[filterId]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| filterId | `Quantity` |  |

| Returned type | Description |
| :--- | :--- |
| `Boolean` |  |

{% tabs %}
{% tab title="Example request of eth_uninstallFilter" %}
```
curl --data '{"method":"eth_uninstallFilter","params":[filterId],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

