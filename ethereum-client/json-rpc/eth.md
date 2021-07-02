# Eth module

## eth\_blockNumber

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
{% tab title="Example request of eth\_blockNumber" %}
```text
curl --data '{"method":"eth_blockNumber","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[See also CLI eth.blockNumber](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-blocknumber)

## eth\_call

Executes a tx call \(does not create a transaction\)

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
{% tab title="Example request of eth\_call" %}
```text
curl --data '{"method":"eth_call","params":[transactionCall, blockParameter],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth\_call" %}
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
| V | `Quantity` |
| S | `Quantity` |
| R | `Quantity` |

`TxType`

* [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type

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

* `Quantity` or `String` \(latest, earliest, pending\)
{% endtab %}
{% endtabs %}

[See also CLI eth.call](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-call)

## eth\_chainId

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
{% tab title="Example request of eth\_chainId" %}
```text
curl --data '{"method":"eth_chainId","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[See also CLI eth.chainId](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-chainid)

## eth\_createAccessList

Creates an [EIP2930](https://eips.ethereum.org/EIPS/eip-2930) type AccessList for the given transaction

{% hint style="info" %}
**Hint:** If your transaction has code executed, then you can generate transaction access list with eth\_createAccessList. If you send it with your transaction then it will lower your gas cost on Ethereum
{% endhint %}

| Invocation |
| :--- |
| `{"method":"eth_createAccessList","params":[transactionCall, blockParameter, optimize]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| transactionCall | `TransactionForRpc object` | Transaction's details |
| blockParameter | `BlockParameter object` | \(optional\) |
| optimize | `Boolean` | \(optional\) |

| Returned type | Description |
| :--- | :--- |
| `AccessListForRpc object` |  |

{% tabs %}
{% tab title="Example request of eth\_createAccessList" %}
```text
curl --data '{"method":"eth_createAccessList","params":[transactionCall, blockParameter, optimize],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth\_createAccessList" %}
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
| V | `Quantity` |
| S | `Quantity` |
| R | `Quantity` |

`TxType`

* [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type

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

* `Quantity` or `String` \(latest, earliest, pending\)

`AccessListForRpc`

| Field name | Type |
| :--- | :--- |
| AccessList | `AccessListItemForRpc[] object` |
| GasUsed | `Quantity` |
{% endtab %}
{% endtabs %}

[See also CLI eth.createAccessList](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-createaccesslist)

## eth\_estimateGas

Executes a tx call and returns gas used \(does not create a transaction\)

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
{% tab title="Example request of eth\_estimateGas" %}
```text
curl --data '{"method":"eth_estimateGas","params":[transactionCall, blockParameter],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth\_estimateGas" %}
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
| V | `Quantity` |
| S | `Quantity` |
| R | `Quantity` |

`TxType`

* [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type

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

* `Quantity` or `String` \(latest, earliest, pending\)
{% endtab %}
{% endtabs %}

[See also CLI eth.estimateGas](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-estimategas)

## eth\_getBalance

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
{% tab title="Example request of eth\_getBalance" %}
```text
curl --data '{"method":"eth_getBalance","params":[address, blockParameter],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth\_getBalance" %}
`BlockParameter`

| Field name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

* `Quantity` or `String` \(latest, earliest, pending\)
{% endtab %}
{% endtabs %}

[See also CLI eth.getBalance](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getbalance)

## eth\_getBlockByHash

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
{% tab title="Example request of eth\_getBlockByHash" %}
```text
curl --data '{"method":"eth_getBlockByHash","params":[blockHash, returnFullTransactionObjects],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth\_getBlockByHash" %}
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
{% endtab %}
{% endtabs %}

[See also CLI eth.getBlockByHash](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getblockbyhash)

## eth\_getBlockByNumber

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
{% tab title="Example request of eth\_getBlockByNumber" %}
```text
curl --data '{"method":"eth_getBlockByNumber","params":[blockParameter, returnFullTransactionObjects],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth\_getBlockByNumber" %}
`BlockParameter`

| Field name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

* `Quantity` or `String` \(latest, earliest, pending\)

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
{% endtab %}
{% endtabs %}

[See also CLI eth.getBlockByNumber](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getblockbynumber)

## eth\_getBlockTransactionCountByHash

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
{% tab title="Example request of eth\_getBlockTransactionCountByHash" %}
```text
curl --data '{"method":"eth_getBlockTransactionCountByHash","params":[blockHash],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[See also CLI eth.getBlockTransactionCountByHash](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getblocktransactioncountbyhash)

## eth\_getBlockTransactionCountByNumber

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
{% tab title="Example request of eth\_getBlockTransactionCountByNumber" %}
```text
curl --data '{"method":"eth_getBlockTransactionCountByNumber","params":[blockParameter],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth\_getBlockTransactionCountByNumber" %}
`BlockParameter`

| Field name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

* `Quantity` or `String` \(latest, earliest, pending\)
{% endtab %}
{% endtabs %}

[See also CLI eth.getBlockTransactionCountByNumber](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getblocktransactioncountbynumber)

## eth\_getCode

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
{% tab title="Example request of eth\_getCode" %}
```text
curl --data '{"method":"eth_getCode","params":[address, blockParameter],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth\_getCode" %}
`BlockParameter`

| Field name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

* `Quantity` or `String` \(latest, earliest, pending\)
{% endtab %}
{% endtabs %}

[See also CLI eth.getCode](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getcode)

## eth\_getFilterChanges

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
{% tab title="Example request of eth\_getFilterChanges" %}
```text
curl --data '{"method":"eth_getFilterChanges","params":[filterId],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[See also CLI eth.getFilterChanges](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getfilterchanges)

## eth\_getFilterLogs

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
{% tab title="Example request of eth\_getFilterLogs" %}
```text
curl --data '{"method":"eth_getFilterLogs","params":[filterId],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

## eth\_getLogs

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
{% tab title="Example request of eth\_getLogs" %}
```text
curl --data '{"method":"eth_getLogs","params":[filter],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth\_getLogs" %}
`Filter`

| Field name | Type |
| :--- | :--- |
| FromBlock | `BlockParameter object` |
| ToBlock | `BlockParameter object` |
| Address | `Object` |
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

## eth\_getProof

[https://github.com/ethereum/EIPs/issues/1186](https://github.com/ethereum/EIPs/issues/1186)

| Invocation |
| :--- |
| `{"method":"eth_getProof","params":[accountAddress, hashRate, blockParameter]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| accountAddress | `Address` |  |
| hashRate | `Data` |  |
| blockParameter | `BlockParameter object` |  |

| Returned type | Description |
| :--- | :--- |
| `AccountProof object` |  |

{% tabs %}
{% tab title="Example request of eth\_getProof" %}
```text
curl --data '{"method":"eth_getProof","params":[accountAddress, hashRate, blockParameter],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth\_getProof" %}
`BlockParameter`

| Field name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

* `Quantity` or `String` \(latest, earliest, pending\)

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

## eth\_getStorageAt

Returns storage data at address. storage\_index

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
{% tab title="Example request of eth\_getStorageAt" %}
```text
curl --data '{"method":"eth_getStorageAt","params":[address, positionIndex, blockParameter],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth\_getStorageAt" %}
`BlockParameter`

| Field name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

* `Quantity` or `String` \(latest, earliest, pending\)
{% endtab %}
{% endtabs %}

[See also CLI eth.getStorageAt](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getstorageat)

## eth\_getTransactionByBlockHashAndIndex

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
{% tab title="Example request of eth\_getTransactionByBlockHashAndIndex" %}
```text
curl --data '{"method":"eth_getTransactionByBlockHashAndIndex","params":[blockHash, positionIndex],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth\_getTransactionByBlockHashAndIndex" %}
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
| V | `Quantity` |
| S | `Quantity` |
| R | `Quantity` |

`TxType`

* [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type

`AccessListItemForRpc[]`

| Field name | Type |
| :--- | :--- |
| Address | `Address` |
| StorageKeys | `Array` |
{% endtab %}
{% endtabs %}

## eth\_getTransactionByBlockNumberAndIndex

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
{% tab title="Example request of eth\_getTransactionByBlockNumberAndIndex" %}
```text
curl --data '{"method":"eth_getTransactionByBlockNumberAndIndex","params":[blockParameter, positionIndex],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth\_getTransactionByBlockNumberAndIndex" %}
`BlockParameter`

| Field name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

* `Quantity` or `String` \(latest, earliest, pending\)

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
| V | `Quantity` |
| S | `Quantity` |
| R | `Quantity` |

`TxType`

* [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type

`AccessListItemForRpc[]`

| Field name | Type |
| :--- | :--- |
| Address | `Address` |
| StorageKeys | `Array` |
{% endtab %}
{% endtabs %}

[See also CLI eth.getTransactionByBlockNumberAndIndex](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-gettransactionbyblocknumberandindex)

## eth\_getTransactionByHash

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
{% tab title="Example request of eth\_getTransactionByHash" %}
```text
curl --data '{"method":"eth_getTransactionByHash","params":[transactionHash],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth\_getTransactionByHash" %}
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
| V | `Quantity` |
| S | `Quantity` |
| R | `Quantity` |

`TxType`

* [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type

`AccessListItemForRpc[]`

| Field name | Type |
| :--- | :--- |
| Address | `Address` |
| StorageKeys | `Array` |
{% endtab %}
{% endtabs %}

[See also CLI eth.getTransactionByHash](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-gettransactionbyhash)

## eth\_getTransactionCount

Returns account nonce \(number of trnsactions from the account since genesis\) at the given block number

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
{% tab title="Example request of eth\_getTransactionCount" %}
```text
curl --data '{"method":"eth_getTransactionCount","params":[address, blockParameter],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth\_getTransactionCount" %}
`BlockParameter`

| Field name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

* `Quantity` or `String` \(latest, earliest, pending\)
{% endtab %}
{% endtabs %}

[See also CLI eth.getTransactionCount](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-gettransactioncount)

## eth\_getTransactionReceipt

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
{% tab title="Example request of eth\_getTransactionReceipt" %}
```text
curl --data '{"method":"eth_getTransactionReceipt","params":[txHashData],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth\_getTransactionReceipt" %}
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

[See also CLI eth.getTransactionReceipt](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-gettransactionreceipt)

## eth\_getUncleByBlockHashAndIndex

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
{% tab title="Example request of eth\_getUncleByBlockHashAndIndex" %}
```text
curl --data '{"method":"eth_getUncleByBlockHashAndIndex","params":[blockHashData, positionIndex],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth\_getUncleByBlockHashAndIndex" %}
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
{% endtab %}
{% endtabs %}

[See also CLI eth.getUncleByBlockHashAndIndex](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getunclebyblockhashandindex)

## eth\_getUncleByBlockNumberAndIndex

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
{% tab title="Example request of eth\_getUncleByBlockNumberAndIndex" %}
```text
curl --data '{"method":"eth_getUncleByBlockNumberAndIndex","params":[blockParameter, positionIndex],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth\_getUncleByBlockNumberAndIndex" %}
`BlockParameter`

| Field name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

* `Quantity` or `String` \(latest, earliest, pending\)

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
{% endtab %}
{% endtabs %}

[See also CLI eth.getUncleByBlockNumberAndIndex](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getunclebyblocknumberandindex)

## eth\_getUncleCountByBlockHash

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
{% tab title="Example request of eth\_getUncleCountByBlockHash" %}
```text
curl --data '{"method":"eth_getUncleCountByBlockHash","params":[blockHash],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

## eth\_getUncleCountByBlockNumber

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
{% tab title="Example request of eth\_getUncleCountByBlockNumber" %}
```text
curl --data '{"method":"eth_getUncleCountByBlockNumber","params":[blockParameter],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth\_getUncleCountByBlockNumber" %}
`BlockParameter`

| Field name | Type |
| :--- | :--- |
| Type | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

* `Quantity` or `String` \(latest, earliest, pending\)
{% endtab %}
{% endtabs %}

[See also CLI eth.getUncleCountByBlockNumber](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getunclecountbyblocknumber)

## eth\_newBlockFilter

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
{% tab title="Example request of eth\_newBlockFilter" %}
```text
curl --data '{"method":"eth_newBlockFilter","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

## eth\_newFilter

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
{% tab title="Example request of eth\_newFilter" %}
```text
curl --data '{"method":"eth_newFilter","params":[filter],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth\_newFilter" %}
`Filter`

| Field name | Type |
| :--- | :--- |
| FromBlock | `BlockParameter object` |
| ToBlock | `BlockParameter object` |
| Address | `Object` |
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

## eth\_newPendingTransactionFilter

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
{% tab title="Example request of eth\_newPendingTransactionFilter" %}
```text
curl --data '{"method":"eth_newPendingTransactionFilter","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[See also CLI eth.newPendingTransactionFilter](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-newpendingtransactionfilter)

## eth\_pendingTransactions

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
{% tab title="Example request of eth\_pendingTransactions" %}
```text
curl --data '{"method":"eth_pendingTransactions","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth\_pendingTransactions" %}
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
| V | `Quantity` |
| S | `Quantity` |
| R | `Quantity` |

`TxType`

* [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type

`AccessListItemForRpc[]`

| Field name | Type |
| :--- | :--- |
| Address | `Address` |
| StorageKeys | `Array` |
{% endtab %}
{% endtabs %}

[See also CLI eth.pendingTransactions](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-pendingtransactions)

## eth\_protocolVersion

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
{% tab title="Example request of eth\_protocolVersion" %}
```text
curl --data '{"method":"eth_protocolVersion","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[See also CLI eth.protocolVersion](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-protocolversion)

## eth\_sendRawTransaction

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
{% tab title="Example request of eth\_sendRawTransaction" %}
```text
curl --data '{"method":"eth_sendRawTransaction","params":[transaction],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[See also CLI eth.sendRawTransaction](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-sendrawtransaction)

## eth\_sendTransaction

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
{% tab title="Example request of eth\_sendTransaction" %}
```text
curl --data '{"method":"eth_sendTransaction","params":[rpcTx],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth\_sendTransaction" %}
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
| V | `Quantity` |
| S | `Quantity` |
| R | `Quantity` |

`TxType`

* [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type

`AccessListItemForRpc[]`

| Field name | Type |
| :--- | :--- |
| Address | `Address` |
| StorageKeys | `Array` |
{% endtab %}
{% endtabs %}

[See also CLI eth.sendTransaction](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-sendtransaction)

## eth\_syncing

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
{% tab title="Example request of eth\_syncing" %}
```text
curl --data '{"method":"eth_syncing","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth\_syncing" %}
`SyncingResult`

| Field name | Type |
| :--- | :--- |
| IsSyncing | `Boolean` |
| StartingBlock | `Quantity` |
| CurrentBlock | `Quantity` |
| HighestBlock | `Quantity` |
{% endtab %}
{% endtabs %}

[See also CLI eth.syncing](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-syncing)

## eth\_uninstallFilter

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
{% tab title="Example request of eth\_uninstallFilter" %}
```text
curl --data '{"method":"eth_uninstallFilter","params":[filterId],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

