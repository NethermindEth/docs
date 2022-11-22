# Eth module

## eth.blockNumber

返回当前区块编号

| Invocation        |
| ----------------- |
| `eth.blockNumber` |

| This method doesn't have parameters. |
| ------------------------------------ |

| 返回值类型      | 描述 |
| ---------- | -- |
| `Quantity` |    |

{% tabs %}
{% tab title="Example request of eth.blockNumber" %}
```yaml
eth.blockNumber
```
{% endtab %}
{% endtabs %}

[参见 JSON RPC eth\_blockNumber](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_blocknumber)

## eth.call

执行一次交易调用（不创建交易）

| Invocation                                  |
| ------------------------------------------- |
| `eth.call(transactionCall, blockParameter)` |

| 参数              | Type                       | 描述 |
| --------------- | -------------------------- | -- |
| transactionCall | `TransactionForRpc object` |    |
| blockParameter  | `BlockParameter object`    |    |

| 返回值类型    | 描述 |
| -------- | -- |
| `String` |    |

{% tabs %}
{% tab title="Example request of eth.call" %}
```yaml
eth.call(transactionCall, blockParameter)
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

[参见 JSON RPC eth\_call](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_call)

## eth.chainId

返回 ChainID

| Invocation    |
| ------------- |
| `eth.chainId` |

| This method doesn't have parameters. |
| ------------------------------------ |

| 返回值类型           | 描述 |
| --------------- | -- |
| `UInt64 object` |    |

{% tabs %}
{% tab title="Example request of eth.chainId" %}
```yaml
eth.chainId
```
{% endtab %}

{% tab title="Objects in eth_chainId" %}
`UInt64`

| 字段名称 | Type |
| ---- | ---- |
{% endtab %}
{% endtabs %}

[参见 JSON RPC eth\_chainId](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_chainid)

## eth.createAccessList

Creates an [EIP2930](https://eips.ethereum.org/EIPS/eip-2930) type AccessList for the given transaction

{% hint style="info" %}
**Hint:** If your transaction has code executed, then you can generate transaction access list with eth\_createAccessList. If you send it with your transaction then it will lower your gas cost on Ethereum
{% endhint %}

| Invocation                                                        |
| ----------------------------------------------------------------- |
| `eth.createAccessList(transactionCall, blockParameter, optimize)` |

| 参数              | Type                       | 描述                    |
| --------------- | -------------------------- | --------------------- |
| transactionCall | `TransactionForRpc object` | Transaction's details |
| blockParameter  | `BlockParameter object`    | (可选)                  |
| optimize        | `Boolean`                  | (可选)                  |

| 返回值类型                     | 描述 |
| ------------------------- | -- |
| `AccessListForRpc object` |    |

{% tabs %}
{% tab title="Example request of eth.createAccessList" %}
```yaml
eth.createAccessList(transactionCall, blockParameter, optimize)
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

[参见 JSON RPC eth\_createAccessList](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_createaccesslist)

## eth.estimateGas

执行一次交易调用并返回已消耗 gas 量（不创建交易）

| Invocation                                         |
| -------------------------------------------------- |
| `eth.estimateGas(transactionCall, blockParameter)` |

| 参数              | Type                       | 描述 |
| --------------- | -------------------------- | -- |
| transactionCall | `TransactionForRpc object` |    |
| blockParameter  | `BlockParameter object`    |    |

| 返回值类型      | 描述 |
| ---------- | -- |
| `Quantity` |    |

{% tabs %}
{% tab title="Example request of eth.estimateGas" %}
```yaml
eth.estimateGas(transactionCall, blockParameter)
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

[参见 JSON RPC eth\_estimateGas](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_estimategas)

## eth.getBalance

返回账户余额

| Invocation                                |
| ----------------------------------------- |
| `eth.getBalance(address, blockParameter)` |

| 参数             | Type                    | 描述 |
| -------------- | ----------------------- | -- |
| address        | `Address`               |    |
| blockParameter | `BlockParameter object` |    |

| 返回值类型      | 描述 |
| ---------- | -- |
| `Quantity` |    |

{% tabs %}
{% tab title="Example request of eth.getBalance" %}
```yaml
eth.getBalance(address, blockParameter)
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

[参见 JSON RPC eth\_getBalance](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_getbalance)

## eth.getBlockByHash

根据哈希值检索区块

| Invocation                                                    |
| ------------------------------------------------------------- |
| `eth.getBlockByHash(blockHash, returnFullTransactionObjects)` |

| 参数                           | Type      | 描述 |
| ---------------------------- | --------- | -- |
| blockHash                    | `Hash`    |    |
| returnFullTransactionObjects | `Boolean` |    |

| 返回值类型                | 描述 |
| -------------------- | -- |
| `BlockForRpc object` |    |

{% tabs %}
{% tab title="Example request of eth.getBlockByHash" %}
```yaml
eth.getBlockByHash(blockHash, returnFullTransactionObjects)
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

[参见 JSON RPC eth\_getBlockByHash](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_getblockbyhash)

## eth.getBlockByNumber

根据区块编号检索区块

| Invocation                                                           |
| -------------------------------------------------------------------- |
| `eth.getBlockByNumber(blockParameter, returnFullTransactionObjects)` |

| 参数                           | Type                    | 描述 |
| ---------------------------- | ----------------------- | -- |
| blockParameter               | `BlockParameter object` |    |
| returnFullTransactionObjects | `Boolean`               |    |

| 返回值类型                | 描述 |
| -------------------- | -- |
| `BlockForRpc object` |    |

{% tabs %}
{% tab title="Example request of eth.getBlockByNumber" %}
```yaml
eth.getBlockByNumber(blockParameter, returnFullTransactionObjects)
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

[参见 JSON RPC eth\_getBlockByNumber](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_getblockbynumber)

## eth.getBlockTransactionCountByHash

根据区块哈希返回对应区块中交易的数量

| Invocation                                      |
| ----------------------------------------------- |
| `eth.getBlockTransactionCountByHash(blockHash)` |

| 参数        | Type   | 描述 |
| --------- | ------ | -- |
| blockHash | `Hash` |    |

| 返回值类型      | 描述 |
| ---------- | -- |
| `Quantity` |    |

{% tabs %}
{% tab title="Example request of eth.getBlockTransactionCountByHash" %}
```yaml
eth.getBlockTransactionCountByHash(blockHash)
```
{% endtab %}
{% endtabs %}

[参见 JSON RPC eth\_getBlockTransactionCountByHash](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_getblocktransactioncountbyhash)

## eth.getBlockTransactionCountByNumber

根据区块编号返回对应区块中交易的数量

| Invocation                                             |
| ------------------------------------------------------ |
| `eth.getBlockTransactionCountByNumber(blockParameter)` |

| 参数             | Type                    | 描述 |
| -------------- | ----------------------- | -- |
| blockParameter | `BlockParameter object` |    |

| 返回值类型      | 描述 |
| ---------- | -- |
| `Quantity` |    |

{% tabs %}
{% tab title="Example request of eth.getBlockTransactionCountByNumber" %}
```yaml
eth.getBlockTransactionCountByNumber(blockParameter)
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

[参见 JSON RPC eth\_getBlockTransactionCountByNumber](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_getblocktransactioncountbynumber)

## eth.getCode

返回指定地址和指定区块处的帐户代码

| Invocation                             |
| -------------------------------------- |
| `eth.getCode(address, blockParameter)` |

| 参数             | Type                    | 描述 |
| -------------- | ----------------------- | -- |
| address        | `Address`               |    |
| blockParameter | `BlockParameter object` |    |

| 返回值类型  | 描述 |
| ------ | -- |
| `Data` |    |

{% tabs %}
{% tab title="Example request of eth.getCode" %}
```yaml
eth.getCode(address, blockParameter)
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

[参见 JSON RPC eth\_getCode](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_getcode)

## eth.getFilterChanges

读取过滤器更改

| Invocation                       |
| -------------------------------- |
| `eth.getFilterChanges(filterId)` |

| 参数       | Type       | 描述 |
| -------- | ---------- | -- |
| filterId | `Quantity` |    |

| 返回值类型   | 描述 |
| ------- | -- |
| `Array` |    |

{% tabs %}
{% tab title="Example request of eth.getFilterChanges" %}
```yaml
eth.getFilterChanges(filterId)
```
{% endtab %}
{% endtabs %}

[参见 JSON RPC eth\_getFilterChanges](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_getfilterchanges)

## eth.getLogs

Reads logs

| Invocation            |
| --------------------- |
| `eth.getLogs(filter)` |

| 参数     | Type            | 描述 |
| ------ | --------------- | -- |
| filter | `Filter object` |    |

| 返回值类型   | 描述 |
| ------- | -- |
| `Array` |    |

{% tabs %}
{% tab title="Example request of eth.getLogs" %}
```yaml
eth.getLogs(filter)
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

[参见 JSON RPC eth\_getLogs](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_getlogs)

## eth.getProof

[https://github.com/ethereum/EIPs/issues/1186](https://github.com/ethereum/EIPs/issues/1186)

| Invocation                                               |
| -------------------------------------------------------- |
| `eth.getProof(accountAddress, hashRate, blockParameter)` |

| 参数             | Type                    | 描述 |
| -------------- | ----------------------- | -- |
| accountAddress | `Address`               |    |
| hashRate       | `Data`                  |    |
| blockParameter | `BlockParameter object` |    |

| 返回值类型                 | 描述 |
| --------------------- | -- |
| `AccountProof object` |    |

{% tabs %}
{% tab title="Example request of eth.getProof" %}
```yaml
eth.getProof(accountAddress, hashRate, blockParameter)
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

[参见 JSON RPC eth\_getProof](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_getproof)

## eth.getStorageAt

返回 address. storage\_index 处的存储数据

| Invocation                                                 |
| ---------------------------------------------------------- |
| `eth.getStorageAt(address, positionIndex, blockParameter)` |

| 参数             | Type                    | 描述 |
| -------------- | ----------------------- | -- |
| address        | `Address`               |    |
| positionIndex  | `Quantity`              |    |
| blockParameter | `BlockParameter object` |    |

| 返回值类型  | 描述 |
| ------ | -- |
| `Data` |    |

{% tabs %}
{% tab title="Example request of eth.getStorageAt" %}
```yaml
eth.getStorageAt(address, positionIndex, blockParameter)
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

[参见 JSON RPC eth\_getStorageAt](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_getstorageat)

## eth.getTransactionByBlockNumberAndIndex

根据区块编号和索引检索交易

| Invocation                                                               |
| ------------------------------------------------------------------------ |
| `eth.getTransactionByBlockNumberAndIndex(blockParameter, positionIndex)` |

| 参数             | Type                    | 描述 |
| -------------- | ----------------------- | -- |
| blockParameter | `BlockParameter object` |    |
| positionIndex  | `Quantity`              |    |

| 返回值类型                      | 描述 |
| -------------------------- | -- |
| `TransactionForRpc object` |    |

{% tabs %}
{% tab title="Example request of eth.getTransactionByBlockNumberAndIndex" %}
```yaml
eth.getTransactionByBlockNumberAndIndex(blockParameter, positionIndex)
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

[参见 JSON RPC eth\_getTransactionByBlockNumberAndIndex](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_gettransactionbyblocknumberandindex)

## eth.getTransactionByHash

根据哈希值检索交易

| Invocation                                  |
| ------------------------------------------- |
| `eth.getTransactionByHash(transactionHash)` |

| 参数              | Type   | 描述 |
| --------------- | ------ | -- |
| transactionHash | `Hash` |    |

| 返回值类型                      | 描述 |
| -------------------------- | -- |
| `TransactionForRpc object` |    |

{% tabs %}
{% tab title="Example request of eth.getTransactionByHash" %}
```yaml
eth.getTransactionByHash(transactionHash)
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

[参见 JSON RPC eth\_getTransactionByHash](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_gettransactionbyhash)

## eth.getTransactionCount

返回某个帐户在指定区块编号处的 nonce（该账户自创世块以来的交易总量）

| Invocation                                         |
| -------------------------------------------------- |
| `eth.getTransactionCount(address, blockParameter)` |

| 参数             | Type                    | 描述 |
| -------------- | ----------------------- | -- |
| address        | `Address`               |    |
| blockParameter | `BlockParameter object` |    |

| 返回值类型      | 描述 |
| ---------- | -- |
| `Quantity` |    |

{% tabs %}
{% tab title="Example request of eth.getTransactionCount" %}
```yaml
eth.getTransactionCount(address, blockParameter)
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

[参见 JSON RPC eth\_getTransactionCount](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_gettransactioncount)

## eth.getTransactionReceipt

根据交易哈希检索交易收据

| Invocation                              |
| --------------------------------------- |
| `eth.getTransactionReceipt(txHashData)` |

| 参数         | Type   | 描述 |
| ---------- | ------ | -- |
| txHashData | `Hash` |    |

| 返回值类型                  | 描述 |
| ---------------------- | -- |
| `ReceiptForRpc object` |    |

{% tabs %}
{% tab title="Example request of eth.getTransactionReceipt" %}
```yaml
eth.getTransactionReceipt(txHashData)
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

[参见 JSON RPC eth\_getTransactionReceipt](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_gettransactionreceipt)

## eth.getUncleByBlockHashAndIndex

根据区块哈希和叔块索引检索叔块的区块头

| Invocation                                                      |
| --------------------------------------------------------------- |
| `eth.getUncleByBlockHashAndIndex(blockHashData, positionIndex)` |

| 参数            | Type       | 描述 |
| ------------- | ---------- | -- |
| blockHashData | `Hash`     |    |
| positionIndex | `Quantity` |    |

| 返回值类型                | 描述 |
| -------------------- | -- |
| `BlockForRpc object` |    |

{% tabs %}
{% tab title="Example request of eth.getUncleByBlockHashAndIndex" %}
```yaml
eth.getUncleByBlockHashAndIndex(blockHashData, positionIndex)
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

[参见 JSON RPC eth\_getUncleByBlockHashAndIndex](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_getunclebyblockhashandindex)

## eth.getUncleByBlockNumberAndIndex

根据区块编号和叔块索引检索叔块的区块头

| Invocation                                                         |
| ------------------------------------------------------------------ |
| `eth.getUncleByBlockNumberAndIndex(blockParameter, positionIndex)` |

| 参数             | Type                    | 描述 |
| -------------- | ----------------------- | -- |
| blockParameter | `BlockParameter object` |    |
| positionIndex  | `Quantity`              |    |

| 返回值类型                | 描述 |
| -------------------- | -- |
| `BlockForRpc object` |    |

{% tabs %}
{% tab title="Example request of eth.getUncleByBlockNumberAndIndex" %}
```yaml
eth.getUncleByBlockNumberAndIndex(blockParameter, positionIndex)
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

[参见 JSON RPC eth\_getUncleByBlockNumberAndIndex](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_getunclebyblocknumberandindex)

## eth.getUncleCountByBlockNumber

根据区块编号返回对应区块的叔块数量

| Invocation                                       |
| ------------------------------------------------ |
| `eth.getUncleCountByBlockNumber(blockParameter)` |

| 参数             | Type                    | 描述 |
| -------------- | ----------------------- | -- |
| blockParameter | `BlockParameter object` |    |

| 返回值类型      | 描述 |
| ---------- | -- |
| `Quantity` |    |

{% tabs %}
{% tab title="Example request of eth.getUncleCountByBlockNumber" %}
```yaml
eth.getUncleCountByBlockNumber(blockParameter)
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

[参见 JSON RPC eth\_getUncleCountByBlockNumber](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_getunclecountbyblocknumber)

## eth.newPendingTransactionFilter

创建一个更新过滤器

| Invocation                          |
| ----------------------------------- |
| `eth.newPendingTransactionFilter()` |

| This method doesn't have parameters. |
| ------------------------------------ |

| 返回值类型      | 描述 |
| ---------- | -- |
| `Quantity` |    |

{% tabs %}
{% tab title="Example request of eth.newPendingTransactionFilter" %}
```yaml
eth.newPendingTransactionFilter()
```
{% endtab %}
{% endtabs %}

[参见 JSON RPC eth\_newPendingTransactionFilter](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_newpendingtransactionfilter)

## eth.pendingTransactions

返回待处理交易列表

| Invocation                |
| ------------------------- |
| `eth.pendingTransactions` |

| This method doesn't have parameters. |
| ------------------------------------ |

| 返回值类型                      | 描述 |
| -------------------------- | -- |
| `TransactionForRpc object` |    |

{% tabs %}
{% tab title="Example request of eth.pendingTransactions" %}
```yaml
eth.pendingTransactions
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

[参见 JSON RPC eth\_pendingTransactions](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_pendingtransactions)

## eth.protocolVersion

返回以太坊协议版本

| Invocation            |
| --------------------- |
| `eth.protocolVersion` |

| This method doesn't have parameters. |
| ------------------------------------ |

| 返回值类型    | 描述 |
| -------- | -- |
| `String` |    |

{% tabs %}
{% tab title="Example request of eth.protocolVersion" %}
```yaml
eth.protocolVersion
```
{% endtab %}
{% endtabs %}

[参见 JSON RPC eth\_protocolVersion](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_protocolversion)

## eth.sendEth

| Invocation                           |
| ------------------------------------ |
| `eth.sendEth(from, to, amountInEth)` |

| 参数          | Type       | 描述 |
| ----------- | ---------- | -- |
| from        | `String`   |    |
| to          | `String`   |    |
| amountInEth | `Quantity` |    |

| 返回值类型    | 描述 |
| -------- | -- |
| `String` |    |

{% tabs %}
{% tab title="Example request of eth.sendEth" %}
```yaml
eth.sendEth(from, to, amountInEth)
```
{% endtab %}
{% endtabs %}

## eth.sendRawTransaction

将交易池发送一笔原始交易并进行广播

| Invocation                            |
| ------------------------------------- |
| `eth.sendRawTransaction(transaction)` |

| 参数          | Type   | 描述 |
| ----------- | ------ | -- |
| transaction | `Data` |    |

| 返回值类型  | 描述 |
| ------ | -- |
| `Hash` |    |

{% tabs %}
{% tab title="Example request of eth.sendRawTransaction" %}
```yaml
eth.sendRawTransaction(transaction)
```
{% endtab %}
{% endtabs %}

[See also JSON RPC eth\_sendRawTransaction](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_sendrawtransaction)

## eth.sendTransaction

向交易池发送一笔交易并进行广播

| Invocation                   |
| ---------------------------- |
| `eth.sendTransaction(rpcTx)` |

| 参数    | Type                       | 描述 |
| ----- | -------------------------- | -- |
| rpcTx | `TransactionForRpc object` |    |

| 返回值类型  | 描述 |
| ------ | -- |
| `Hash` |    |

{% tabs %}
{% tab title="Example request of eth.sendTransaction" %}
```yaml
eth.sendTransaction(rpcTx)
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

[参见 JSON RPC eth\_sendTransaction](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_sendtransaction)

## eth.sendWei

| Invocation                           |
| ------------------------------------ |
| `eth.sendWei(from, to, amountInWei)` |

| 参数          | Type       | 描述 |
| ----------- | ---------- | -- |
| from        | `String`   |    |
| to          | `String`   |    |
| amountInWei | `Quantity` |    |

| 返回值类型    | 描述 |
| -------- | -- |
| `String` |    |

{% tabs %}
{% tab title="Example request of eth.sendWei" %}
```yaml
eth.sendWei(from, to, amountInWei)
```
{% endtab %}
{% endtabs %}

## eth.syncing

返回同步状态

| Invocation      |
| --------------- |
| `eth.syncing()` |

| This method doesn't have parameters. |
| ------------------------------------ |

| 返回值类型                  | 描述 |
| ---------------------- | -- |
| `SyncingResult object` |    |

{% tabs %}
{% tab title="Example request of eth.syncing" %}
```yaml
eth.syncing()
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

[参见 JSON RPC eth\_syncing](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_syncing)
