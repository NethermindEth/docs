# Eth module

## eth.blockNumber

Returns current block number

| Invocation |
| :--- |
| `eth.blockNumber` |

| This method doesn't have parameters. |
| :--- |


| Returned type | Description |
| :--- | :--- |
| `Quantity` |  |

{% tabs %}
{% tab title="Example request of eth.blockNumber" %}
```yaml
eth.blockNumber
```
{% endtab %}
{% endtabs %}

[See also JSON RPC eth\_blockNumber](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth_blocknumber)

## eth.call

Executes a tx call \(does not create a transaction\)

| Invocation |
| :--- |
| `eth.call(transactionCall, blockParameter)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| transactionCall | `TransactionForRpc object` |  |
| blockParameter | `BlockParameter object` |  |

| Returned type | Description |
| :--- | :--- |
| `String` |  |

{% tabs %}
{% tab title="Example request of eth.call" %}
```yaml
eth.call(transactionCall, blockParameter)
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

[See also JSON RPC eth\_call](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth_call)

## eth.chainId

Returns ChainID

| Invocation |
| :--- |
| `eth.chainId` |

| This method doesn't have parameters. |
| :--- |


| Returned type | Description |
| :--- | :--- |
| `Quantity` |  |

{% tabs %}
{% tab title="Example request of eth.chainId" %}
```yaml
eth.chainId
```
{% endtab %}
{% endtabs %}

[See also JSON RPC eth\_chainId](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth_chainid)

## eth.createAccessList

Creates an [EIP2930](https://eips.ethereum.org/EIPS/eip-2930) type AccessList for the given transaction

{% hint style="info" %}
**Hint:** If your transaction has code executed, then you can generate transaction access list with eth\_createAccessList. If you send it with your transaction then it will lower your gas cost on Ethereum
{% endhint %}

| Invocation |
| :--- |
| `eth.createAccessList(transactionCall, blockParameter, optimize)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| transactionCall | `TransactionForRpc object` | Transaction's details |
| blockParameter | `BlockParameter object` | \(optional\) |
| optimize | `Boolean` | \(optional\) |

| Returned type | Description |
| :--- | :--- |
| `AccessListForRpc object` |  |

{% tabs %}
{% tab title="Example request of eth.createAccessList" %}
```yaml
eth.createAccessList(transactionCall, blockParameter, optimize)
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

[See also JSON RPC eth\_createAccessList](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth_createaccesslist)

## eth.estimateGas

Executes a tx call and returns gas used \(does not create a transaction\)

| Invocation |
| :--- |
| `eth.estimateGas(transactionCall, blockParameter)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| transactionCall | `TransactionForRpc object` |  |
| blockParameter | `BlockParameter object` |  |

| Returned type | Description |
| :--- | :--- |
| `Quantity` |  |

{% tabs %}
{% tab title="Example request of eth.estimateGas" %}
```yaml
eth.estimateGas(transactionCall, blockParameter)
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

[See also JSON RPC eth\_estimateGas](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth_estimategas)

## eth.getBalance

Returns account balance

| Invocation |
| :--- |
| `eth.getBalance(address, blockParameter)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| address | `Address` |  |
| blockParameter | `BlockParameter object` |  |

| Returned type | Description |
| :--- | :--- |
| `Quantity` |  |

{% tabs %}
{% tab title="Example request of eth.getBalance" %}
```yaml
eth.getBalance(address, blockParameter)
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

[See also JSON RPC eth\_getBalance](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth_getbalance)

## eth.getBlockByHash

Retrieves a block by hash

| Invocation |
| :--- |
| `eth.getBlockByHash(blockHash, returnFullTransactionObjects)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| blockHash | `Hash` |  |
| returnFullTransactionObjects | `Boolean` |  |

| Returned type | Description |
| :--- | :--- |
| `BlockForRpc object` |  |

{% tabs %}
{% tab title="Example request of eth.getBlockByHash" %}
```yaml
eth.getBlockByHash(blockHash, returnFullTransactionObjects)
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

[See also JSON RPC eth\_getBlockByHash](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth_getblockbyhash)

## eth.getBlockByNumber

Retrieves a block by number

| Invocation |
| :--- |
| `eth.getBlockByNumber(blockParameter, returnFullTransactionObjects)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| blockParameter | `BlockParameter object` |  |
| returnFullTransactionObjects | `Boolean` |  |

| Returned type | Description |
| :--- | :--- |
| `BlockForRpc object` |  |

{% tabs %}
{% tab title="Example request of eth.getBlockByNumber" %}
```yaml
eth.getBlockByNumber(blockParameter, returnFullTransactionObjects)
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

[See also JSON RPC eth\_getBlockByNumber](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth_getblockbynumber)

## eth.getBlockTransactionCountByHash

Returns number of transactions in the block block hash

| Invocation |
| :--- |
| `eth.getBlockTransactionCountByHash(blockHash)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| blockHash | `Hash` |  |

| Returned type | Description |
| :--- | :--- |
| `Quantity` |  |

{% tabs %}
{% tab title="Example request of eth.getBlockTransactionCountByHash" %}
```yaml
eth.getBlockTransactionCountByHash(blockHash)
```
{% endtab %}
{% endtabs %}

[See also JSON RPC eth\_getBlockTransactionCountByHash](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth_getblocktransactioncountbyhash)

## eth.getBlockTransactionCountByNumber

Returns number of transactions in the block by block number

| Invocation |
| :--- |
| `eth.getBlockTransactionCountByNumber(blockParameter)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| blockParameter | `BlockParameter object` |  |

| Returned type | Description |
| :--- | :--- |
| `Quantity` |  |

{% tabs %}
{% tab title="Example request of eth.getBlockTransactionCountByNumber" %}
```yaml
eth.getBlockTransactionCountByNumber(blockParameter)
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

[See also JSON RPC eth\_getBlockTransactionCountByNumber](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth_getblocktransactioncountbynumber)

## eth.getCode

Returns account code at given address and block

| Invocation |
| :--- |
| `eth.getCode(address, blockParameter)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| address | `Address` |  |
| blockParameter | `BlockParameter object` |  |

| Returned type | Description |
| :--- | :--- |
| `Data` |  |

{% tabs %}
{% tab title="Example request of eth.getCode" %}
```yaml
eth.getCode(address, blockParameter)
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

[See also JSON RPC eth\_getCode](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth_getcode)

## eth.getFilterChanges

Reads filter changes

| Invocation |
| :--- |
| `eth.getFilterChanges(filterId)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| filterId | `Quantity` |  |

| Returned type | Description |
| :--- | :--- |
| `Array` |  |

{% tabs %}
{% tab title="Example request of eth.getFilterChanges" %}
```yaml
eth.getFilterChanges(filterId)
```
{% endtab %}
{% endtabs %}

[See also JSON RPC eth\_getFilterChanges](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth_getfilterchanges)

## eth.getLogs

Reads logs

| Invocation |
| :--- |
| `eth.getLogs(filter)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| filter | `Filter object` |  |

| Returned type | Description |
| :--- | :--- |
| `Array` |  |

{% tabs %}
{% tab title="Example request of eth.getLogs" %}
```yaml
eth.getLogs(filter)
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

[See also JSON RPC eth\_getLogs](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth_getlogs)

## eth.getProof

[https://github.com/ethereum/EIPs/issues/1186](https://github.com/ethereum/EIPs/issues/1186)

| Invocation |
| :--- |
| `eth.getProof(accountAddress, hashRate, blockParameter)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| accountAddress | `Address` |  |
| hashRate | `Data` |  |
| blockParameter | `BlockParameter object` |  |

| Returned type | Description |
| :--- | :--- |
| `AccountProof object` |  |

{% tabs %}
{% tab title="Example request of eth.getProof" %}
```yaml
eth.getProof(accountAddress, hashRate, blockParameter)
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

[See also JSON RPC eth\_getProof](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth_getproof)

## eth.getStorageAt

Returns storage data at address. storage\_index

| Invocation |
| :--- |
| `eth.getStorageAt(address, positionIndex, blockParameter)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| address | `Address` |  |
| positionIndex | `Quantity` |  |
| blockParameter | `BlockParameter object` |  |

| Returned type | Description |
| :--- | :--- |
| `Data` |  |

{% tabs %}
{% tab title="Example request of eth.getStorageAt" %}
```yaml
eth.getStorageAt(address, positionIndex, blockParameter)
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

[See also JSON RPC eth\_getStorageAt](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth_getstorageat)

## eth.getTransactionByBlockNumberAndIndex

Retrieves a transaction by block number and index

| Invocation |
| :--- |
| `eth.getTransactionByBlockNumberAndIndex(blockParameter, positionIndex)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| blockParameter | `BlockParameter object` |  |
| positionIndex | `Quantity` |  |

| Returned type | Description |
| :--- | :--- |
| `TransactionForRpc object` |  |

{% tabs %}
{% tab title="Example request of eth.getTransactionByBlockNumberAndIndex" %}
```yaml
eth.getTransactionByBlockNumberAndIndex(blockParameter, positionIndex)
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

[See also JSON RPC eth\_getTransactionByBlockNumberAndIndex](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth_gettransactionbyblocknumberandindex)

## eth.getTransactionByHash

Retrieves a transaction by hash

| Invocation |
| :--- |
| `eth.getTransactionByHash(transactionHash)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| transactionHash | `Hash` |  |

| Returned type | Description |
| :--- | :--- |
| `TransactionForRpc object` |  |

{% tabs %}
{% tab title="Example request of eth.getTransactionByHash" %}
```yaml
eth.getTransactionByHash(transactionHash)
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

[See also JSON RPC eth\_getTransactionByHash](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth_gettransactionbyhash)

## eth.getTransactionCount

Returns account nonce \(number of trnsactions from the account since genesis\) at the given block number

| Invocation |
| :--- |
| `eth.getTransactionCount(address, blockParameter)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| address | `Address` |  |
| blockParameter | `BlockParameter object` |  |

| Returned type | Description |
| :--- | :--- |
| `Quantity` |  |

{% tabs %}
{% tab title="Example request of eth.getTransactionCount" %}
```yaml
eth.getTransactionCount(address, blockParameter)
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

[See also JSON RPC eth\_getTransactionCount](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth_gettransactioncount)

## eth.getTransactionReceipt

Retrieves a transaction receipt by tx hash

| Invocation |
| :--- |
| `eth.getTransactionReceipt(txHashData)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| txHashData | `Hash` |  |

| Returned type | Description |
| :--- | :--- |
| `ReceiptForRpc object` |  |

{% tabs %}
{% tab title="Example request of eth.getTransactionReceipt" %}
```yaml
eth.getTransactionReceipt(txHashData)
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

[See also JSON RPC eth\_getTransactionReceipt](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth_gettransactionreceipt)

## eth.getUncleByBlockHashAndIndex

Retrieves an uncle block header by block hash and uncle index

| Invocation |
| :--- |
| `eth.getUncleByBlockHashAndIndex(blockHashData, positionIndex)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| blockHashData | `Hash` |  |
| positionIndex | `Quantity` |  |

| Returned type | Description |
| :--- | :--- |
| `BlockForRpc object` |  |

{% tabs %}
{% tab title="Example request of eth.getUncleByBlockHashAndIndex" %}
```yaml
eth.getUncleByBlockHashAndIndex(blockHashData, positionIndex)
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

[See also JSON RPC eth\_getUncleByBlockHashAndIndex](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth_getunclebyblockhashandindex)

## eth.getUncleByBlockNumberAndIndex

Retrieves an uncle block header by block number and uncle index

| Invocation |
| :--- |
| `eth.getUncleByBlockNumberAndIndex(blockParameter, positionIndex)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| blockParameter | `BlockParameter object` |  |
| positionIndex | `Quantity` |  |

| Returned type | Description |
| :--- | :--- |
| `BlockForRpc object` |  |

{% tabs %}
{% tab title="Example request of eth.getUncleByBlockNumberAndIndex" %}
```yaml
eth.getUncleByBlockNumberAndIndex(blockParameter, positionIndex)
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

[See also JSON RPC eth\_getUncleByBlockNumberAndIndex](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth_getunclebyblocknumberandindex)

## eth.getUncleCountByBlockNumber

Returns number of uncles in the block by block number

| Invocation |
| :--- |
| `eth.getUncleCountByBlockNumber(blockParameter)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| blockParameter | `BlockParameter object` |  |

| Returned type | Description |
| :--- | :--- |
| `Quantity` |  |

{% tabs %}
{% tab title="Example request of eth.getUncleCountByBlockNumber" %}
```yaml
eth.getUncleCountByBlockNumber(blockParameter)
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

[See also JSON RPC eth\_getUncleCountByBlockNumber](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth_getunclecountbyblocknumber)

## eth.newPendingTransactionFilter

Creates an update filter

| Invocation |
| :--- |
| `eth.newPendingTransactionFilter()` |

| This method doesn't have parameters. |
| :--- |


| Returned type | Description |
| :--- | :--- |
| `Quantity` |  |

{% tabs %}
{% tab title="Example request of eth.newPendingTransactionFilter" %}
```yaml
eth.newPendingTransactionFilter()
```
{% endtab %}
{% endtabs %}

[See also JSON RPC eth\_newPendingTransactionFilter](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth_newpendingtransactionfilter)

## eth.pendingTransactions

Returns the pending transactions list

| Invocation |
| :--- |
| `eth.pendingTransactions` |

| This method doesn't have parameters. |
| :--- |


| Returned type | Description |
| :--- | :--- |
| `TransactionForRpc object` |  |

{% tabs %}
{% tab title="Example request of eth.pendingTransactions" %}
```yaml
eth.pendingTransactions
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

[See also JSON RPC eth\_pendingTransactions](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth_pendingtransactions)

## eth.protocolVersion

Returns ETH protocol version

| Invocation |
| :--- |
| `eth.protocolVersion` |

| This method doesn't have parameters. |
| :--- |


| Returned type | Description |
| :--- | :--- |
| `String` |  |

{% tabs %}
{% tab title="Example request of eth.protocolVersion" %}
```yaml
eth.protocolVersion
```
{% endtab %}
{% endtabs %}

[See also JSON RPC eth\_protocolVersion](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth_protocolversion)

## eth.sendEth

| Invocation |
| :--- |
| `eth.sendEth(from, to, amountInEth)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| from | `String` |  |
| to | `String` |  |
| amountInEth | `Quantity` |  |

| Returned type | Description |
| :--- | :--- |
| `String` |  |

{% tabs %}
{% tab title="Example request of eth.sendEth" %}
```yaml
eth.sendEth(from, to, amountInEth)
```
{% endtab %}
{% endtabs %}

## eth.sendRawTransaction

Send a raw transaction to the tx pool and broadcasting

| Invocation |
| :--- |
| `eth.sendRawTransaction(transaction)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| transaction | `Data` |  |

| Returned type | Description |
| :--- | :--- |
| `Hash` |  |

{% tabs %}
{% tab title="Example request of eth.sendRawTransaction" %}
```yaml
eth.sendRawTransaction(transaction)
```
{% endtab %}
{% endtabs %}

[See also JSON RPC eth\_sendRawTransaction](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth_sendrawtransaction)

## eth.sendTransaction

Send a transaction to the tx pool and broadcasting

| Invocation |
| :--- |
| `eth.sendTransaction(rpcTx)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| rpcTx | `TransactionForRpc object` |  |

| Returned type | Description |
| :--- | :--- |
| `Hash` |  |

{% tabs %}
{% tab title="Example request of eth.sendTransaction" %}
```yaml
eth.sendTransaction(rpcTx)
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

[See also JSON RPC eth\_sendTransaction](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth_sendtransaction)

## eth.sendWei

| Invocation |
| :--- |
| `eth.sendWei(from, to, amountInWei)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| from | `String` |  |
| to | `String` |  |
| amountInWei | `Quantity` |  |

| Returned type | Description |
| :--- | :--- |
| `String` |  |

{% tabs %}
{% tab title="Example request of eth.sendWei" %}
```yaml
eth.sendWei(from, to, amountInWei)
```
{% endtab %}
{% endtabs %}

## eth.syncing

Returns syncing status

| Invocation |
| :--- |
| `eth.syncing()` |

| This method doesn't have parameters. |
| :--- |


| Returned type | Description |
| :--- | :--- |
| `SyncingResult object` |  |

{% tabs %}
{% tab title="Example request of eth.syncing" %}
```yaml
eth.syncing()
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

[See also JSON RPC eth\_syncing](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth_syncing)

