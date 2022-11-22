# Eth module

## eth\_blockNumber

返回当前区块编号

| Invocation                                 |
| ------------------------------------------ |
| `{"method":"eth_blockNumber","params":[]}` |

| This method doesn't have parameters. |
| ------------------------------------ |

| 返回值类型      | 描述 |
| ---------- | -- |
| `Quantity` |    |

{% tabs %}
{% tab title="Example request of eth_blockNumber" %}
```
curl --data '{"method":"eth_blockNumber","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[参见 CLI eth.blockNumber](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-blocknumber)

## eth\_call

执行一次交易调用（不创建交易）

| Invocation                                                         |
| ------------------------------------------------------------------ |
| `{"method":"eth_call","params":[transactionCall, blockParameter]}` |

| 参数              | Type                       | 描述 |
| --------------- | -------------------------- | -- |
| transactionCall | `TransactionForRpc object` |    |
| blockParameter  | `BlockParameter object`    |    |

| 返回值类型    | 描述 |
| -------- | -- |
| `String` |    |

{% tabs %}
{% tab title="Example request of eth_call" %}
```
curl --data '{"method":"eth_call","params":[transactionCall, blockParameter],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth_call" %}
`TransactionForRpc`

| 字段名称             | Type                            |
| ---------------- | ------------------------------- |
| Hash             | `Hash`                          |
| Nonce            | `Quantity`                      |
| BlockHash        | `Hash`                          |
| BlockNumber      | `Quantity`                      |
| TransactionIndex | `Quantity`                      |
| From             | `Address`                       |
| To               | `Address`                       |
| Value            | `Quantity`                      |
| GasPrice         | `Quantity`                      |
| Gas              | `Quantity`                      |
| Data             | `Data`                          |
| Input            | `Data`                          |
| Type             | `TxType object`                 |
| AccessList       | `AccessListItemForRpc[] object` |
| V                | `Quantity`                      |
| S                | `Quantity`                      |
| R                | `Quantity`                      |

`TxType`

* [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type

`AccessListItemForRpc[]`

| 字段名称           | Type       |
| -------------- | ---------- |
| Length         | `Quantity` |
| LongLength     | `Quantity` |
| Rank           | `Quantity` |
| SyncRoot       | `Object`   |
| IsReadOnly     | `Boolean`  |
| IsFixedSize    | `Boolean`  |
| IsSynchronized | `Boolean`  |

`BlockParameter`

| 字段名称             | Type                        |
| ---------------- | --------------------------- |
| Type             | `BlockParameterType object` |
| BlockNumber      | `Quantity`                  |
| BlockHash        | `Hash`                      |
| RequireCanonical | `Boolean`                   |

`BlockParameterType`

* `Quantity` 或 `String` \（最新、最早、待处理\）
{% endtab %}
{% endtabs %}

[参见 CLI eth.call](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-call)

## eth\_chainId

返回 ChainID

| Invocation                             |
| -------------------------------------- |
| `{"method":"eth_chainId","params":[]}` |

| This method doesn't have parameters. |
| ------------------------------------ |

| 返回值类型           | 描述 |
| --------------- | -- |
| `UInt64 object` |    |

{% tabs %}
{% tab title="Example request of eth_chainId" %}
```
curl --data '{"method":"eth_chainId","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth_chainId" %}
`UInt64`

| 字段名称 | Type |
| ---- | ---- |
{% endtab %}
{% endtabs %}

[参见 CLI eth.chainId](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-chainid)

## eth\_createAccessList

Creates an [EIP2930](https://eips.ethereum.org/EIPS/eip-2930) type AccessList for the given transaction

{% hint style="info" %}
**Hint:** If your transaction has code executed, then you can generate transaction access list with eth\_createAccessList. If you send it with your transaction then it will lower your gas cost on Ethereum
{% endhint %}

| Invocation                                                                               |
| ---------------------------------------------------------------------------------------- |
| `{"method":"eth_createAccessList","params":[transactionCall, blockParameter, optimize]}` |

| 参数              | Type                       | 描述                    |
| --------------- | -------------------------- | --------------------- |
| transactionCall | `TransactionForRpc object` | Transaction's details |
| blockParameter  | `BlockParameter object`    | (可选)                  |
| optimize        | `Boolean`                  | (可选)                  |

| 返回值类型                     | 描述 |
| ------------------------- | -- |
| `AccessListForRpc object` |    |

{% tabs %}
{% tab title="Example request of eth_createAccessList" %}
```
curl --data '{"method":"eth_createAccessList","params":[transactionCall, blockParameter, optimize],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth_createAccessList" %}
`TransactionForRpc`

| 字段名称             | Type                            |
| ---------------- | ------------------------------- |
| Hash             | `Hash`                          |
| Nonce            | `Quantity`                      |
| BlockHash        | `Hash`                          |
| BlockNumber      | `Quantity`                      |
| TransactionIndex | `Quantity`                      |
| From             | `Address`                       |
| To               | `Address`                       |
| Value            | `Quantity`                      |
| GasPrice         | `Quantity`                      |
| Gas              | `Quantity`                      |
| Data             | `Data`                          |
| Input            | `Data`                          |
| Type             | `TxType object`                 |
| AccessList       | `AccessListItemForRpc[] object` |
| V                | `Quantity`                      |
| S                | `Quantity`                      |
| R                | `Quantity`                      |

`TxType`

* [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type

`AccessListItemForRpc[]`

| 字段名称           | Type       |
| -------------- | ---------- |
| Length         | `Quantity` |
| LongLength     | `Quantity` |
| Rank           | `Quantity` |
| SyncRoot       | `Object`   |
| IsReadOnly     | `Boolean`  |
| IsFixedSize    | `Boolean`  |
| IsSynchronized | `Boolean`  |

`BlockParameter`

| 字段名称             | Type                        |
| ---------------- | --------------------------- |
| Type             | `BlockParameterType object` |
| BlockNumber      | `Quantity`                  |
| BlockHash        | `Hash`                      |
| RequireCanonical | `Boolean`                   |

`BlockParameterType`

* `Quantity` 或 `String` \（最新、最早、待处理\）

`AccessListForRpc`

| 字段名称       | Type                            |
| ---------- | ------------------------------- |
| AccessList | `AccessListItemForRpc[] object` |
| GasUsed    | `Quantity`                      |
{% endtab %}
{% endtabs %}

[参见 CLI eth.createAccessList](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-createaccesslist)

## eth\_estimateGas

执行一次交易调用并返回已消耗 gas 量（不创建交易）

| Invocation                                                                |
| ------------------------------------------------------------------------- |
| `{"method":"eth_estimateGas","params":[transactionCall, blockParameter]}` |

| 参数              | Type                       | 描述 |
| --------------- | -------------------------- | -- |
| transactionCall | `TransactionForRpc object` |    |
| blockParameter  | `BlockParameter object`    |    |

| 返回值类型      | 描述 |
| ---------- | -- |
| `Quantity` |    |

{% tabs %}
{% tab title="Example request of eth_estimateGas" %}
```
curl --data '{"method":"eth_estimateGas","params":[transactionCall, blockParameter],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth_estimateGas" %}
`TransactionForRpc`

| 字段名称             | Type                            |
| ---------------- | ------------------------------- |
| Hash             | `Hash`                          |
| Nonce            | `Quantity`                      |
| BlockHash        | `Hash`                          |
| BlockNumber      | `Quantity`                      |
| TransactionIndex | `Quantity`                      |
| From             | `Address`                       |
| To               | `Address`                       |
| Value            | `Quantity`                      |
| GasPrice         | `Quantity`                      |
| Gas              | `Quantity`                      |
| Data             | `Data`                          |
| Input            | `Data`                          |
| Type             | `TxType object`                 |
| AccessList       | `AccessListItemForRpc[] object` |
| V                | `Quantity`                      |
| S                | `Quantity`                      |
| R                | `Quantity`                      |

`TxType`

* [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type

`AccessListItemForRpc[]`

| 字段名称           | Type       |
| -------------- | ---------- |
| Length         | `Quantity` |
| LongLength     | `Quantity` |
| Rank           | `Quantity` |
| SyncRoot       | `Object`   |
| IsReadOnly     | `Boolean`  |
| IsFixedSize    | `Boolean`  |
| IsSynchronized | `Boolean`  |

`BlockParameter`

| 字段名称             | Type                        |
| ---------------- | --------------------------- |
| Type             | `BlockParameterType object` |
| BlockNumber      | `Quantity`                  |
| BlockHash        | `Hash`                      |
| RequireCanonical | `Boolean`                   |

`BlockParameterType`

* `Quantity` 或 `String` \（最新、最早、待处理\）
{% endtab %}
{% endtabs %}

[参见 CLI eth.estimateGas](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-estimategas)

## eth\_getBalance

返回账户余额

| Invocation                                                       |
| ---------------------------------------------------------------- |
| `{"method":"eth_getBalance","params":[address, blockParameter]}` |

| 参数             | Type                    | 描述 |
| -------------- | ----------------------- | -- |
| address        | `Address`               |    |
| blockParameter | `BlockParameter object` |    |

| 返回值类型      | 描述 |
| ---------- | -- |
| `Quantity` |    |

{% tabs %}
{% tab title="Example request of eth_getBalance" %}
```
curl --data '{"method":"eth_getBalance","params":[address, blockParameter],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth_getBalance" %}
`BlockParameter`

| 字段名称             | Type                        |
| ---------------- | --------------------------- |
| Type             | `BlockParameterType object` |
| BlockNumber      | `Quantity`                  |
| BlockHash        | `Hash`                      |
| RequireCanonical | `Boolean`                   |

`BlockParameterType`

* `Quantity` 或 `String` \（最新、最早、待处理\）
{% endtab %}
{% endtabs %}

[参见 CLI eth.getBalance](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getbalance)

## eth\_getBlockByHash

根据哈希值检索区块

| Invocation                                                                           |
| ------------------------------------------------------------------------------------ |
| `{"method":"eth_getBlockByHash","params":[blockHash, returnFullTransactionObjects]}` |

| 参数                           | Type      | 描述 |
| ---------------------------- | --------- | -- |
| blockHash                    | `Hash`    |    |
| returnFullTransactionObjects | `Boolean` |    |

| 返回值类型                | 描述 |
| -------------------- | -- |
| `BlockForRpc object` |    |

{% tabs %}
{% tab title="Example request of eth_getBlockByHash" %}
```
curl --data '{"method":"eth_getBlockByHash","params":[blockHash, returnFullTransactionObjects],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth_getBlockByHash" %}
`BlockForRpc`

| 字段名称             | Type           |
| ---------------- | -------------- |
| Author           | `Address`      |
| Difficulty       | `Quantity`     |
| ExtraData        | `Data`         |
| GasLimit         | `Quantity`     |
| GasUsed          | `Quantity`     |
| Hash             | `Hash`         |
| LogsBloom        | `Bloom Object` |
| Miner            | `Address`      |
| MixHash          | `Hash`         |
| Nonce            | `Data`         |
| Number           | `Quantity`     |
| ParentHash       | `Hash`         |
| ReceiptsRoot     | `Hash`         |
| Sha3Uncles       | `Hash`         |
| Signature        | `Data`         |
| Size             | `Quantity`     |
| StateRoot        | `Hash`         |
| Step             | `Quantity`     |
| TotalDifficulty  | `Quantity`     |
| Timestamp        | `Quantity`     |
| Transactions     | `Array`        |
| TransactionsRoot | `Hash`         |
| Uncles           | `Array`        |
{% endtab %}
{% endtabs %}

[参见 CLI eth.getBlockByHash](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getblockbyhash)

## eth\_getBlockByNumber

根据区块编号检索区块

| Invocation                                                                                  |
| ------------------------------------------------------------------------------------------- |
| `{"method":"eth_getBlockByNumber","params":[blockParameter, returnFullTransactionObjects]}` |

| 参数                           | Type                    | 描述 |
| ---------------------------- | ----------------------- | -- |
| blockParameter               | `BlockParameter object` |    |
| returnFullTransactionObjects | `Boolean`               |    |

| 返回值类型                | 描述 |
| -------------------- | -- |
| `BlockForRpc object` |    |

{% tabs %}
{% tab title="Example request of eth_getBlockByNumber" %}
```
curl --data '{"method":"eth_getBlockByNumber","params":[blockParameter, returnFullTransactionObjects],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth_getBlockByNumber" %}
`BlockParameter`

| 字段名称             | Type                        |
| ---------------- | --------------------------- |
| Type             | `BlockParameterType object` |
| BlockNumber      | `Quantity`                  |
| BlockHash        | `Hash`                      |
| RequireCanonical | `Boolean`                   |

`BlockParameterType`

* `Quantity` 或 `String` \（最新、最早、待处理\）

`BlockForRpc`

| 字段名称             | Type           |
| ---------------- | -------------- |
| Author           | `Address`      |
| Difficulty       | `Quantity`     |
| ExtraData        | `Data`         |
| GasLimit         | `Quantity`     |
| GasUsed          | `Quantity`     |
| Hash             | `Hash`         |
| LogsBloom        | `Bloom Object` |
| Miner            | `Address`      |
| MixHash          | `Hash`         |
| Nonce            | `Data`         |
| Number           | `Quantity`     |
| ParentHash       | `Hash`         |
| ReceiptsRoot     | `Hash`         |
| Sha3Uncles       | `Hash`         |
| Signature        | `Data`         |
| Size             | `Quantity`     |
| StateRoot        | `Hash`         |
| Step             | `Quantity`     |
| TotalDifficulty  | `Quantity`     |
| Timestamp        | `Quantity`     |
| Transactions     | `Array`        |
| TransactionsRoot | `Hash`         |
| Uncles           | `Array`        |
{% endtab %}
{% endtabs %}

[参见 CLI eth.getBlockByNumber](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getblockbynumber)

## eth\_getBlockTransactionCountByHash

根据区块哈希返回对应区块中交易的数量

| Invocation                                                             |
| ---------------------------------------------------------------------- |
| `{"method":"eth_getBlockTransactionCountByHash","params":[blockHash]}` |

| 参数        | Type   | 描述 |
| --------- | ------ | -- |
| blockHash | `Hash` |    |

| 返回值类型      | 描述 |
| ---------- | -- |
| `Quantity` |    |

{% tabs %}
{% tab title="Example request of eth_getBlockTransactionCountByHash" %}
```
curl --data '{"method":"eth_getBlockTransactionCountByHash","params":[blockHash],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[参见 CLI eth.getBlockTransactionCountByHash](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getblocktransactioncountbyhash)

## eth\_getBlockTransactionCountByNumber

根据区块编号返回对应区块中交易的数量

| Invocation                                                                    |
| ----------------------------------------------------------------------------- |
| `{"method":"eth_getBlockTransactionCountByNumber","params":[blockParameter]}` |

| 参数             | Type                    | 描述 |
| -------------- | ----------------------- | -- |
| blockParameter | `BlockParameter object` |    |

| 返回值类型      | 描述 |
| ---------- | -- |
| `Quantity` |    |

{% tabs %}
{% tab title="Example request of eth_getBlockTransactionCountByNumber" %}
```
curl --data '{"method":"eth_getBlockTransactionCountByNumber","params":[blockParameter],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth_getBlockTransactionCountByNumber" %}
`BlockParameter`

| 字段名称             | Type                        |
| ---------------- | --------------------------- |
| Type             | `BlockParameterType object` |
| BlockNumber      | `Quantity`                  |
| BlockHash        | `Hash`                      |
| RequireCanonical | `Boolean`                   |

`BlockParameterType`

* `Quantity` 或 `String` \（最新、最早、待处理\）
{% endtab %}
{% endtabs %}

[参见 CLI eth.getBlockTransactionCountByNumber](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getblocktransactioncountbynumber)

## eth\_getCode

返回指定地址和指定区块处的帐户代码

| Invocation                                                    |
| ------------------------------------------------------------- |
| `{"method":"eth_getCode","params":[address, blockParameter]}` |

| 参数             | Type                    | 描述 |
| -------------- | ----------------------- | -- |
| address        | `Address`               |    |
| blockParameter | `BlockParameter object` |    |

| 返回值类型  | 描述 |
| ------ | -- |
| `Data` |    |

{% tabs %}
{% tab title="Example request of eth_getCode" %}
```
curl --data '{"method":"eth_getCode","params":[address, blockParameter],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth_getCode" %}
`BlockParameter`

| 字段名称             | Type                        |
| ---------------- | --------------------------- |
| Type             | `BlockParameterType object` |
| BlockNumber      | `Quantity`                  |
| BlockHash        | `Hash`                      |
| RequireCanonical | `Boolean`                   |

`BlockParameterType`

* `Quantity` 或 `String` \（最新、最早、待处理\）
{% endtab %}
{% endtabs %}

[参见 CLI eth.getCode](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getcode)

## eth\_getFilterChanges

读取过滤器更改

| Invocation                                              |
| ------------------------------------------------------- |
| `{"method":"eth_getFilterChanges","params":[filterId]}` |

| 参数       | Type       | 描述 |
| -------- | ---------- | -- |
| filterId | `Quantity` |    |

| 返回值类型   | 描述 |
| ------- | -- |
| `Array` |    |

{% tabs %}
{% tab title="Example request of eth_getFilterChanges" %}
```
curl --data '{"method":"eth_getFilterChanges","params":[filterId],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[参见 CLI eth.getFilterChanges](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getfilterchanges)

## eth\_getFilterLogs

读取过滤器更改

| Invocation                                           |
| ---------------------------------------------------- |
| `{"method":"eth_getFilterLogs","params":[filterId]}` |

| 参数       | Type       | 描述 |
| -------- | ---------- | -- |
| filterId | `Quantity` |    |

| 返回值类型   | 描述 |
| ------- | -- |
| `Array` |    |

{% tabs %}
{% tab title="Example request of eth_getFilterLogs" %}
```
curl --data '{"method":"eth_getFilterLogs","params":[filterId],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

## eth\_getLogs

Reads logs

| Invocation                                   |
| -------------------------------------------- |
| `{"method":"eth_getLogs","params":[filter]}` |

| 参数     | Type            | 描述 |
| ------ | --------------- | -- |
| filter | `Filter object` |    |

| 返回值类型   | 描述 |
| ------- | -- |
| `Array` |    |

{% tabs %}
{% tab title="Example request of eth_getLogs" %}
```
curl --data '{"method":"eth_getLogs","params":[filter],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth_getLogs" %}
`Filter`

| 字段名称      | Type                    |
| --------- | ----------------------- |
| FromBlock | `BlockParameter object` |
| ToBlock   | `BlockParameter object` |
| Address   | `Object`                |
| Topics    | `Array`                 |

`BlockParameter`

| 字段名称             | Type                        |
| ---------------- | --------------------------- |
| Type             | `BlockParameterType object` |
| BlockNumber      | `Quantity`                  |
| BlockHash        | `Hash`                      |
| RequireCanonical | `Boolean`                   |
{% endtab %}
{% endtabs %}

[参见 CLI eth.getLogs](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getlogs)

## eth\_getProof

[https://github.com/ethereum/EIPs/issues/1186](https://github.com/ethereum/EIPs/issues/1186)

| Invocation                                                                      |
| ------------------------------------------------------------------------------- |
| `{"method":"eth_getProof","params":[accountAddress, hashRate, blockParameter]}` |

| 参数             | Type                    | 描述 |
| -------------- | ----------------------- | -- |
| accountAddress | `Address`               |    |
| hashRate       | `Data`                  |    |
| blockParameter | `BlockParameter object` |    |

| 返回值类型                 | 描述 |
| --------------------- | -- |
| `AccountProof object` |    |

{% tabs %}
{% tab title="Example request of eth_getProof" %}
```
curl --data '{"method":"eth_getProof","params":[accountAddress, hashRate, blockParameter],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth_getProof" %}
`BlockParameter`

| 字段名称             | Type                        |
| ---------------- | --------------------------- |
| Type             | `BlockParameterType object` |
| BlockNumber      | `Quantity`                  |
| BlockHash        | `Hash`                      |
| RequireCanonical | `Boolean`                   |

`BlockParameterType`

* `Quantity` 或 `String` \（最新、最早、待处理\）

`AccountProof`

| 字段名称          | Type                    |
| ------------- | ----------------------- |
| Address       | `Address`               |
| Proof         | `Data`                  |
| Balance       | `Quantity`              |
| CodeHash      | `Hash`                  |
| Nonce         | `Quantity`              |
| StorageRoot   | `Hash`                  |
| StorageProofs | `StorageProof[] object` |

`StorageProof[]`

| 字段名称           | Type       |
| -------------- | ---------- |
| Length         | `Quantity` |
| LongLength     | `Quantity` |
| Rank           | `Quantity` |
| SyncRoot       | `Object`   |
| IsReadOnly     | `Boolean`  |
| IsFixedSize    | `Boolean`  |
| IsSynchronized | `Boolean`  |
{% endtab %}
{% endtabs %}

[参见 CLI eth.getProof](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getproof)

## eth\_getStorageAt

返回 address. storage\_index 处的存储数据

| Invocation                                                                        |
| --------------------------------------------------------------------------------- |
| `{"method":"eth_getStorageAt","params":[address, positionIndex, blockParameter]}` |

| 参数             | Type                    | 描述 |
| -------------- | ----------------------- | -- |
| address        | `Address`               |    |
| positionIndex  | `Quantity`              |    |
| blockParameter | `BlockParameter object` |    |

| 返回值类型  | 描述 |
| ------ | -- |
| `Data` |    |

{% tabs %}
{% tab title="Example request of eth_getStorageAt" %}
```
curl --data '{"method":"eth_getStorageAt","params":[address, positionIndex, blockParameter],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth_getStorageAt" %}
`BlockParameter`

| 字段名称             | Type                        |
| ---------------- | --------------------------- |
| Type             | `BlockParameterType object` |
| BlockNumber      | `Quantity`                  |
| BlockHash        | `Hash`                      |
| RequireCanonical | `Boolean`                   |

`BlockParameterType`

* `Quantity` 或 `String` \（最新、最早、待处理\）
{% endtab %}
{% endtabs %}

[参见 CLI eth.getStorageAt](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getstorageat)

## eth\_getTransactionByBlockHashAndIndex

根据区块哈希和索引检索交易

| Invocation                                                                               |
| ---------------------------------------------------------------------------------------- |
| `{"method":"eth_getTransactionByBlockHashAndIndex","params":[blockHash, positionIndex]}` |

| 参数            | Type       | 描述 |
| ------------- | ---------- | -- |
| blockHash     | `Hash`     |    |
| positionIndex | `Quantity` |    |

| 返回值类型                      | 描述 |
| -------------------------- | -- |
| `TransactionForRpc object` |    |

{% tabs %}
{% tab title="Example request of eth_getTransactionByBlockHashAndIndex" %}
```
curl --data '{"method":"eth_getTransactionByBlockHashAndIndex","params":[blockHash, positionIndex],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth_getTransactionByBlockHashAndIndex" %}
`TransactionForRpc`

| 字段名称             | Type                            |
| ---------------- | ------------------------------- |
| Hash             | `Hash`                          |
| Nonce            | `Quantity`                      |
| BlockHash        | `Hash`                          |
| BlockNumber      | `Quantity`                      |
| TransactionIndex | `Quantity`                      |
| From             | `Address`                       |
| To               | `Address`                       |
| Value            | `Quantity`                      |
| GasPrice         | `Quantity`                      |
| Gas              | `Quantity`                      |
| Data             | `Data`                          |
| Input            | `Data`                          |
| Type             | `TxType object`                 |
| AccessList       | `AccessListItemForRpc[] object` |
| V                | `Quantity`                      |
| S                | `Quantity`                      |
| R                | `Quantity`                      |

`TxType`

* [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type

`AccessListItemForRpc[]`

| 字段名称           | Type       |
| -------------- | ---------- |
| Length         | `Quantity` |
| LongLength     | `Quantity` |
| Rank           | `Quantity` |
| SyncRoot       | `Object`   |
| IsReadOnly     | `Boolean`  |
| IsFixedSize    | `Boolean`  |
| IsSynchronized | `Boolean`  |
{% endtab %}
{% endtabs %}

## eth\_getTransactionByBlockNumberAndIndex

根据区块编号和索引检索交易

| Invocation                                                                                      |
| ----------------------------------------------------------------------------------------------- |
| `{"method":"eth_getTransactionByBlockNumberAndIndex","params":[blockParameter, positionIndex]}` |

| 参数             | Type                    | 描述 |
| -------------- | ----------------------- | -- |
| blockParameter | `BlockParameter object` |    |
| positionIndex  | `Quantity`              |    |

| 返回值类型                      | 描述 |
| -------------------------- | -- |
| `TransactionForRpc object` |    |

{% tabs %}
{% tab title="Example request of eth_getTransactionByBlockNumberAndIndex" %}
```
curl --data '{"method":"eth_getTransactionByBlockNumberAndIndex","params":[blockParameter, positionIndex],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth_getTransactionByBlockNumberAndIndex" %}
`BlockParameter`

| 字段名称             | Type                        |
| ---------------- | --------------------------- |
| Type             | `BlockParameterType object` |
| BlockNumber      | `Quantity`                  |
| BlockHash        | `Hash`                      |
| RequireCanonical | `Boolean`                   |

`BlockParameterType`

* `Quantity` 或 `String` \（最新、最早、待处理\）

`TransactionForRpc`

| 字段名称             | Type                            |
| ---------------- | ------------------------------- |
| Hash             | `Hash`                          |
| Nonce            | `Quantity`                      |
| BlockHash        | `Hash`                          |
| BlockNumber      | `Quantity`                      |
| TransactionIndex | `Quantity`                      |
| From             | `Address`                       |
| To               | `Address`                       |
| Value            | `Quantity`                      |
| GasPrice         | `Quantity`                      |
| Gas              | `Quantity`                      |
| Data             | `Data`                          |
| Input            | `Data`                          |
| Type             | `TxType object`                 |
| AccessList       | `AccessListItemForRpc[] object` |
| V                | `Quantity`                      |
| S                | `Quantity`                      |
| R                | `Quantity`                      |

`TxType`

* [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type

`AccessListItemForRpc[]`

| 字段名称           | Type       |
| -------------- | ---------- |
| Length         | `Quantity` |
| LongLength     | `Quantity` |
| Rank           | `Quantity` |
| SyncRoot       | `Object`   |
| IsReadOnly     | `Boolean`  |
| IsFixedSize    | `Boolean`  |
| IsSynchronized | `Boolean`  |
{% endtab %}
{% endtabs %}

[参见 CLI eth.getTransactionByBlockNumberAndIndex](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-gettransactionbyblocknumberandindex)

## eth\_getTransactionByHash

根据哈希值检索交易

| Invocation                                                         |
| ------------------------------------------------------------------ |
| `{"method":"eth_getTransactionByHash","params":[transactionHash]}` |

| 参数              | Type   | 描述 |
| --------------- | ------ | -- |
| transactionHash | `Hash` |    |

| 返回值类型                      | 描述 |
| -------------------------- | -- |
| `TransactionForRpc object` |    |

{% tabs %}
{% tab title="Example request of eth_getTransactionByHash" %}
```
curl --data '{"method":"eth_getTransactionByHash","params":[transactionHash],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth_getTransactionByHash" %}
`TransactionForRpc`

| 字段名称             | Type                            |
| ---------------- | ------------------------------- |
| Hash             | `Hash`                          |
| Nonce            | `Quantity`                      |
| BlockHash        | `Hash`                          |
| BlockNumber      | `Quantity`                      |
| TransactionIndex | `Quantity`                      |
| From             | `Address`                       |
| To               | `Address`                       |
| Value            | `Quantity`                      |
| GasPrice         | `Quantity`                      |
| Gas              | `Quantity`                      |
| Data             | `Data`                          |
| Input            | `Data`                          |
| Type             | `TxType object`                 |
| AccessList       | `AccessListItemForRpc[] object` |
| V                | `Quantity`                      |
| S                | `Quantity`                      |
| R                | `Quantity`                      |

`TxType`

* [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type

`AccessListItemForRpc[]`

| 字段名称           | Type       |
| -------------- | ---------- |
| Length         | `Quantity` |
| LongLength     | `Quantity` |
| Rank           | `Quantity` |
| SyncRoot       | `Object`   |
| IsReadOnly     | `Boolean`  |
| IsFixedSize    | `Boolean`  |
| IsSynchronized | `Boolean`  |
{% endtab %}
{% endtabs %}

[参见 CLI eth.getTransactionByHash](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-gettransactionbyhash)

## eth\_getTransactionCount

返回某个帐户在指定区块编号处的 nonce（该账户自创世块以来的交易总量）

| Invocation                                                                |
| ------------------------------------------------------------------------- |
| `{"method":"eth_getTransactionCount","params":[address, blockParameter]}` |

| 参数             | Type                    | 描述 |
| -------------- | ----------------------- | -- |
| address        | `Address`               |    |
| blockParameter | `BlockParameter object` |    |

| 返回值类型      | 描述 |
| ---------- | -- |
| `Quantity` |    |

{% tabs %}
{% tab title="Example request of eth_getTransactionCount" %}
```
curl --data '{"method":"eth_getTransactionCount","params":[address, blockParameter],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth_getTransactionCount" %}
`BlockParameter`

| 字段名称             | Type                        |
| ---------------- | --------------------------- |
| Type             | `BlockParameterType object` |
| BlockNumber      | `Quantity`                  |
| BlockHash        | `Hash`                      |
| RequireCanonical | `Boolean`                   |

`BlockParameterType`

* `Quantity` 或 `String` \（最新、最早、待处理\）
{% endtab %}
{% endtabs %}

[参见 CLI eth.getTransactionCount](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-gettransactioncount)

## eth\_getTransactionReceipt

根据交易哈希检索交易收据

| Invocation                                                     |
| -------------------------------------------------------------- |
| `{"method":"eth_getTransactionReceipt","params":[txHashData]}` |

| 参数         | Type   | 描述 |
| ---------- | ------ | -- |
| txHashData | `Hash` |    |

| 返回值类型                  | 描述 |
| ---------------------- | -- |
| `ReceiptForRpc object` |    |

{% tabs %}
{% tab title="Example request of eth_getTransactionReceipt" %}
```
curl --data '{"method":"eth_getTransactionReceipt","params":[txHashData],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth_getTransactionReceipt" %}
`ReceiptForRpc`

| 字段名称              | Type                      |
| ----------------- | ------------------------- |
| TransactionHash   | `Hash`                    |
| TransactionIndex  | `Quantity`                |
| BlockHash         | `Hash`                    |
| BlockNumber       | `Quantity`                |
| CumulativeGasUsed | `Quantity`                |
| GasUsed           | `Quantity`                |
| From              | `Address`                 |
| To                | `Address`                 |
| ContractAddress   | `Address`                 |
| Logs              | `LogEntryForRpc[] object` |
| LogsBloom         | `Bloom Object`            |
| Root              | `Hash`                    |
| Status            | `Quantity`                |
| Error             | `String`                  |
| Type              | `TxType object`           |

`LogEntryForRpc[]`

| 字段名称           | Type       |
| -------------- | ---------- |
| Length         | `Quantity` |
| LongLength     | `Quantity` |
| Rank           | `Quantity` |
| SyncRoot       | `Object`   |
| IsReadOnly     | `Boolean`  |
| IsFixedSize    | `Boolean`  |
| IsSynchronized | `Boolean`  |

`TxType`

* [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type
{% endtab %}
{% endtabs %}

[参见 CLI eth.getTransactionReceipt](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-gettransactionreceipt)

## eth\_getUncleByBlockHashAndIndex

根据区块哈希和叔块索引检索叔块的区块头

| Invocation                                                                             |
| -------------------------------------------------------------------------------------- |
| `{"method":"eth_getUncleByBlockHashAndIndex","params":[blockHashData, positionIndex]}` |

| 参数            | Type       | 描述 |
| ------------- | ---------- | -- |
| blockHashData | `Hash`     |    |
| positionIndex | `Quantity` |    |

| 返回值类型                | 描述 |
| -------------------- | -- |
| `BlockForRpc object` |    |

{% tabs %}
{% tab title="Example request of eth_getUncleByBlockHashAndIndex" %}
```
curl --data '{"method":"eth_getUncleByBlockHashAndIndex","params":[blockHashData, positionIndex],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth_getUncleByBlockHashAndIndex" %}
`BlockForRpc`

| 字段名称             | Type           |
| ---------------- | -------------- |
| Author           | `Address`      |
| Difficulty       | `Quantity`     |
| ExtraData        | `Data`         |
| GasLimit         | `Quantity`     |
| GasUsed          | `Quantity`     |
| Hash             | `Hash`         |
| LogsBloom        | `Bloom Object` |
| Miner            | `Address`      |
| MixHash          | `Hash`         |
| Nonce            | `Data`         |
| Number           | `Quantity`     |
| ParentHash       | `Hash`         |
| ReceiptsRoot     | `Hash`         |
| Sha3Uncles       | `Hash`         |
| Signature        | `Data`         |
| Size             | `Quantity`     |
| StateRoot        | `Hash`         |
| Step             | `Quantity`     |
| TotalDifficulty  | `Quantity`     |
| Timestamp        | `Quantity`     |
| Transactions     | `Array`        |
| TransactionsRoot | `Hash`         |
| Uncles           | `Array`        |
{% endtab %}
{% endtabs %}

[参见 CLI eth.getUncleByBlockHashAndIndex](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getunclebyblockhashandindex)

## eth\_getUncleByBlockNumberAndIndex

根据区块编号和叔块索引检索叔块的区块头

| Invocation                                                                                |
| ----------------------------------------------------------------------------------------- |
| `{"method":"eth_getUncleByBlockNumberAndIndex","params":[blockParameter, positionIndex]}` |

| 参数             | Type                    | 描述 |
| -------------- | ----------------------- | -- |
| blockParameter | `BlockParameter object` |    |
| positionIndex  | `Quantity`              |    |

| 返回值类型                | 描述 |
| -------------------- | -- |
| `BlockForRpc object` |    |

{% tabs %}
{% tab title="Example request of eth_getUncleByBlockNumberAndIndex" %}
```
curl --data '{"method":"eth_getUncleByBlockNumberAndIndex","params":[blockParameter, positionIndex],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth_getUncleByBlockNumberAndIndex" %}
`BlockParameter`

| 字段名称             | Type                        |
| ---------------- | --------------------------- |
| Type             | `BlockParameterType object` |
| BlockNumber      | `Quantity`                  |
| BlockHash        | `Hash`                      |
| RequireCanonical | `Boolean`                   |

`BlockParameterType`

* `Quantity` 或 `String` \（最新、最早、待处理\）

`BlockForRpc`

| 字段名称             | Type           |
| ---------------- | -------------- |
| Author           | `Address`      |
| Difficulty       | `Quantity`     |
| ExtraData        | `Data`         |
| GasLimit         | `Quantity`     |
| GasUsed          | `Quantity`     |
| Hash             | `Hash`         |
| LogsBloom        | `Bloom Object` |
| Miner            | `Address`      |
| MixHash          | `Hash`         |
| Nonce            | `Data`         |
| Number           | `Quantity`     |
| ParentHash       | `Hash`         |
| ReceiptsRoot     | `Hash`         |
| Sha3Uncles       | `Hash`         |
| Signature        | `Data`         |
| Size             | `Quantity`     |
| StateRoot        | `Hash`         |
| Step             | `Quantity`     |
| TotalDifficulty  | `Quantity`     |
| Timestamp        | `Quantity`     |
| Transactions     | `Array`        |
| TransactionsRoot | `Hash`         |
| Uncles           | `Array`        |
{% endtab %}
{% endtabs %}

[参见 CLI eth.getUncleByBlockNumberAndIndex](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getunclebyblocknumberandindex)

## eth\_getUncleCountByBlockHash

根据区块哈希返回对应区块的叔块数量

| Invocation                                                       |
| ---------------------------------------------------------------- |
| `{"method":"eth_getUncleCountByBlockHash","params":[blockHash]}` |

| 参数        | Type   | 描述 |
| --------- | ------ | -- |
| blockHash | `Hash` |    |

| 返回值类型      | 描述 |
| ---------- | -- |
| `Quantity` |    |

{% tabs %}
{% tab title="Example request of eth_getUncleCountByBlockHash" %}
```
curl --data '{"method":"eth_getUncleCountByBlockHash","params":[blockHash],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

## eth\_getUncleCountByBlockNumber

根据区块编号返回对应区块的叔块数量

| Invocation                                                              |
| ----------------------------------------------------------------------- |
| `{"method":"eth_getUncleCountByBlockNumber","params":[blockParameter]}` |

| 参数             | Type                    | 描述 |
| -------------- | ----------------------- | -- |
| blockParameter | `BlockParameter object` |    |

| 返回值类型      | 描述 |
| ---------- | -- |
| `Quantity` |    |

{% tabs %}
{% tab title="Example request of eth_getUncleCountByBlockNumber" %}
```
curl --data '{"method":"eth_getUncleCountByBlockNumber","params":[blockParameter],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth_getUncleCountByBlockNumber" %}
`BlockParameter`

| 字段名称             | Type                        |
| ---------------- | --------------------------- |
| Type             | `BlockParameterType object` |
| BlockNumber      | `Quantity`                  |
| BlockHash        | `Hash`                      |
| RequireCanonical | `Boolean`                   |

`BlockParameterType`

* `Quantity` 或 `String` \（最新、最早、待处理\）
{% endtab %}
{% endtabs %}

[参见 CLI eth.getUncleCountByBlockNumber](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getunclecountbyblocknumber)

## eth\_newBlockFilter

创建一个更新过滤器

| Invocation                                    |
| --------------------------------------------- |
| `{"method":"eth_newBlockFilter","params":[]}` |

| This method doesn't have parameters. |
| ------------------------------------ |

| 返回值类型      | 描述 |
| ---------- | -- |
| `Quantity` |    |

{% tabs %}
{% tab title="Example request of eth_newBlockFilter" %}
```
curl --data '{"method":"eth_newBlockFilter","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

## eth\_newFilter

创建一个更新过滤器

| Invocation                                     |
| ---------------------------------------------- |
| `{"method":"eth_newFilter","params":[filter]}` |

| 参数     | Type            | 描述 |
| ------ | --------------- | -- |
| filter | `Filter object` |    |

| 返回值类型      | 描述 |
| ---------- | -- |
| `Quantity` |    |

{% tabs %}
{% tab title="Example request of eth_newFilter" %}
```
curl --data '{"method":"eth_newFilter","params":[filter],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth_newFilter" %}
`Filter`

| 字段名称      | Type                    |
| --------- | ----------------------- |
| FromBlock | `BlockParameter object` |
| ToBlock   | `BlockParameter object` |
| Address   | `Object`                |
| Topics    | `Array`                 |

`BlockParameter`

| 字段名称             | Type                        |
| ---------------- | --------------------------- |
| Type             | `BlockParameterType object` |
| BlockNumber      | `Quantity`                  |
| BlockHash        | `Hash`                      |
| RequireCanonical | `Boolean`                   |
{% endtab %}
{% endtabs %}

## eth\_newPendingTransactionFilter

创建一个更新过滤器

| Invocation                                                 |
| ---------------------------------------------------------- |
| `{"method":"eth_newPendingTransactionFilter","params":[]}` |

| This method doesn't have parameters. |
| ------------------------------------ |

| 返回值类型      | 描述 |
| ---------- | -- |
| `Quantity` |    |

{% tabs %}
{% tab title="Example request of eth_newPendingTransactionFilter" %}
```
curl --data '{"method":"eth_newPendingTransactionFilter","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[参见 CLI eth.newPendingTransactionFilter](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-newpendingtransactionfilter)

## eth\_pendingTransactions

返回待处理交易列表

| Invocation                                         |
| -------------------------------------------------- |
| `{"method":"eth_pendingTransactions","params":[]}` |

| This method doesn't have parameters. |
| ------------------------------------ |

| 返回值类型                      | 描述 |
| -------------------------- | -- |
| `TransactionForRpc object` |    |

{% tabs %}
{% tab title="Example request of eth_pendingTransactions" %}
```
curl --data '{"method":"eth_pendingTransactions","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth_pendingTransactions" %}
`TransactionForRpc`

| 字段名称             | Type                            |
| ---------------- | ------------------------------- |
| Hash             | `Hash`                          |
| Nonce            | `Quantity`                      |
| BlockHash        | `Hash`                          |
| BlockNumber      | `Quantity`                      |
| TransactionIndex | `Quantity`                      |
| From             | `Address`                       |
| To               | `Address`                       |
| Value            | `Quantity`                      |
| GasPrice         | `Quantity`                      |
| Gas              | `Quantity`                      |
| Data             | `Data`                          |
| Input            | `Data`                          |
| Type             | `TxType object`                 |
| AccessList       | `AccessListItemForRpc[] object` |
| V                | `Quantity`                      |
| S                | `Quantity`                      |
| R                | `Quantity`                      |

`TxType`

* [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type

`AccessListItemForRpc[]`

| 字段名称           | Type       |
| -------------- | ---------- |
| Length         | `Quantity` |
| LongLength     | `Quantity` |
| Rank           | `Quantity` |
| SyncRoot       | `Object`   |
| IsReadOnly     | `Boolean`  |
| IsFixedSize    | `Boolean`  |
| IsSynchronized | `Boolean`  |
{% endtab %}
{% endtabs %}

[参见 CLI eth.pendingTransactions](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-pendingtransactions)

## eth\_protocolVersion

返回以太坊协议版本

| Invocation                                     |
| ---------------------------------------------- |
| `{"method":"eth_protocolVersion","params":[]}` |

| This method doesn't have parameters. |
| ------------------------------------ |

| 返回值类型    | 描述 |
| -------- | -- |
| `String` |    |

{% tabs %}
{% tab title="Example request of eth_protocolVersion" %}
```
curl --data '{"method":"eth_protocolVersion","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[参见 CLI eth.protocolVersion](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-protocolversion)

## eth\_sendRawTransaction

将交易池发送一笔原始交易并进行广播

| Invocation                                                   |
| ------------------------------------------------------------ |
| `{"method":"eth_sendRawTransaction","params":[transaction]}` |

| 参数          | Type   | 描述 |
| ----------- | ------ | -- |
| transaction | `Data` |    |

| 返回值类型  | 描述 |
| ------ | -- |
| `Hash` |    |

{% tabs %}
{% tab title="Example request of eth_sendRawTransaction" %}
```
curl --data '{"method":"eth_sendRawTransaction","params":[transaction],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[参见 CLI eth.sendRawTransaction](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-sendrawtransaction)

## eth\_sendTransaction

向交易池发送一笔交易并进行广播

| Invocation                                          |
| --------------------------------------------------- |
| `{"method":"eth_sendTransaction","params":[rpcTx]}` |

| 参数    | Type                       | 描述 |
| ----- | -------------------------- | -- |
| rpcTx | `TransactionForRpc object` |    |

| 返回值类型  | 描述 |
| ------ | -- |
| `Hash` |    |

{% tabs %}
{% tab title="Example request of eth_sendTransaction" %}
```
curl --data '{"method":"eth_sendTransaction","params":[rpcTx],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth_sendTransaction" %}
`TransactionForRpc`

| 字段名称             | Type                            |
| ---------------- | ------------------------------- |
| Hash             | `Hash`                          |
| Nonce            | `Quantity`                      |
| BlockHash        | `Hash`                          |
| BlockNumber      | `Quantity`                      |
| TransactionIndex | `Quantity`                      |
| From             | `Address`                       |
| To               | `Address`                       |
| Value            | `Quantity`                      |
| GasPrice         | `Quantity`                      |
| Gas              | `Quantity`                      |
| Data             | `Data`                          |
| Input            | `Data`                          |
| Type             | `TxType object`                 |
| AccessList       | `AccessListItemForRpc[] object` |
| V                | `Quantity`                      |
| S                | `Quantity`                      |
| R                | `Quantity`                      |

`TxType`

* [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type

`AccessListItemForRpc[]`

| 字段名称           | Type       |
| -------------- | ---------- |
| Length         | `Quantity` |
| LongLength     | `Quantity` |
| Rank           | `Quantity` |
| SyncRoot       | `Object`   |
| IsReadOnly     | `Boolean`  |
| IsFixedSize    | `Boolean`  |
| IsSynchronized | `Boolean`  |
{% endtab %}
{% endtabs %}

[参见 CLI eth.sendTransaction](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-sendtransaction)

## eth\_syncing

返回同步状态

| Invocation                             |
| -------------------------------------- |
| `{"method":"eth_syncing","params":[]}` |

| This method doesn't have parameters. |
| ------------------------------------ |

| 返回值类型                  | 描述 |
| ---------------------- | -- |
| `SyncingResult object` |    |

{% tabs %}
{% tab title="Example request of eth_syncing" %}
```
curl --data '{"method":"eth_syncing","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth_syncing" %}
`SyncingResult`

| 字段名称          | Type       |
| ------------- | ---------- |
| IsSyncing     | `Boolean`  |
| StartingBlock | `Quantity` |
| CurrentBlock  | `Quantity` |
| HighestBlock  | `Quantity` |
{% endtab %}
{% endtabs %}

[参见 CLI eth.syncing](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-syncing)

## eth\_uninstallFilter

创建一个更新过滤器

| Invocation                                             |
| ------------------------------------------------------ |
| `{"method":"eth_uninstallFilter","params":[filterId]}` |

| 参数       | Type       | 描述 |
| -------- | ---------- | -- |
| filterId | `Quantity` |    |

| 返回值类型     | 描述 |
| --------- | -- |
| `Boolean` |    |

{% tabs %}
{% tab title="Example request of eth_uninstallFilter" %}
```
curl --data '{"method":"eth_uninstallFilter","params":[filterId],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}
