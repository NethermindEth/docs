# Eth module

## eth.blockNumber

Retorna el número de bloque actual

| Invocación        |
| ----------------- |
| `eth.blockNumber` |

| este método no tiene parametros |
| ------------------------------- |

| Tipo de retorno | Descripción |
| --------------- | ----------- |
| `Quantity`      |             |

{% tabs %}
{% tab title="Example request of eth.blockNumber" %}
```yaml
eth.blockNumber
```
{% endtab %}
{% endtabs %}

[See also JSON RPC eth\_blockNumber](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_blocknumber)

## eth.call

Ejecuta una llamada tx (no crea una transacción)

| Invocación                                  |
| ------------------------------------------- |
| `eth.call(transactionCall, blockParameter)` |

| Parámetro       | Tipo                       | Descripción |
| --------------- | -------------------------- | ----------- |
| transactionCall | `TransactionForRpc object` |             |
| blockParameter  | `BlockParameter object`    |             |

| Tipo de retorno | Descripción |
| --------------- | ----------- |
| `String`        |             |

{% tabs %}
{% tab title="Example request of eth.call" %}
```yaml
eth.call(transactionCall, blockParameter)
```
{% endtab %}

{% tab title="Objects in eth_call" %}
`TransactionForRpc`

| Nombre de los campos | Tipo                            |
| -------------------- | ------------------------------- |
| Hash                 | `Hash`                          |
| Nonce                | `Quantity`                      |
| BlockHash            | `Hash`                          |
| BlockNumber          | `Quantity`                      |
| TransactionIndex     | `Quantity`                      |
| From                 | `Address`                       |
| To                   | `Address`                       |
| Value                | `Quantity`                      |
| GasPrice             | `Quantity`                      |
| Gas                  | `Quantity`                      |
| Data                 | `Data`                          |
| Input                | `Data`                          |
| Tipo                 | `TxType object`                 |
| AccessList           | `AccessListItemForRpc[] object` |
| V                    | `Quantity`                      |
| S                    | `Quantity`                      |
| R                    | `Quantity`                      |

`TxType`

* [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type

`AccessListItemForRpc[]`

| Nombre de los campos | Tipo       |
| -------------------- | ---------- |
| Length               | `Quantity` |
| LongLength           | `Quantity` |
| Rank                 | `Quantity` |
| SyncRoot             | `Object`   |
| IsReadOnly           | `Boolean`  |
| IsFixedSize          | `Boolean`  |
| IsSynchronized       | `Boolean`  |

`BlockParameter`

| Nombre de los campos | Tipo                        |
| -------------------- | --------------------------- |
| Tipo                 | `BlockParameterType object` |
| BlockNumber          | `Quantity`                  |
| BlockHash            | `Hash`                      |
| RequireCanonical     | `Boolean`                   |

`BlockParameterType`

* `Quantity` o  `String` (latest, earliest, pending)
{% endtab %}
{% endtabs %}

[See also JSON RPC eth\_call](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_call)

## eth.chainId

Retorna ChainID

| Invocación    |
| ------------- |
| `eth.chainId` |

| este método no tiene parametros |
| ------------------------------- |

| Tipo de retorno | Descripción |
| --------------- | ----------- |
| `UInt64 object` |             |

{% tabs %}
{% tab title="Example request of eth.chainId" %}
```yaml
eth.chainId
```
{% endtab %}

{% tab title="Objects in eth_chainId" %}
`UInt64`

| Nombre de los campos | Tipo |
| -------------------- | ---- |
{% endtab %}
{% endtabs %}

[See also JSON RPC eth\_chainId](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_chainid)

## eth.createAccessList

Crea un \[EIP2930] ([https://eips.ethereum.org/EIPS/eip-2930](https://eips.ethereum.org/EIPS/eip-2930)) tipo AccessList para la transacción

{% hint style="info" %}
**Hint:** If your transaction has code executed, then you can generate transaction access list with eth\_createAccessList. If you send it with your transaction then it will lower your gas cost on Ethereum
{% endhint %}

| Invocación                                                        |
| ----------------------------------------------------------------- |
| `eth.createAccessList(transactionCall, blockParameter, optimize)` |

| Parámetro       | Tipo                       | Descripción                |
| --------------- | -------------------------- | -------------------------- |
| transactionCall | `TransactionForRpc object` | Detalles de la transacción |
| blockParameter  | `BlockParameter object`    | (opcional)                 |
| optimizar       | `Boolean`                  | (opcional)                 |

| Tipo de retorno           | Descripción |
| ------------------------- | ----------- |
| `AccessListForRpc object` |             |

{% tabs %}
{% tab title="Example request of eth.createAccessList" %}
```yaml
eth.createAccessList(transactionCall, blockParameter, optimize)
```
{% endtab %}

{% tab title="Objects in eth_createAccessList" %}
`TransactionForRpc`

| Nombre de los campos | Tipo                            |
| -------------------- | ------------------------------- |
| Hash                 | `Hash`                          |
| Nonce                | `Quantity`                      |
| BlockHash            | `Hash`                          |
| BlockNumber          | `Quantity`                      |
| TransactionIndex     | `Quantity`                      |
| From                 | `Address`                       |
| To                   | `Address`                       |
| Value                | `Quantity`                      |
| GasPrice             | `Quantity`                      |
| Gas                  | `Quantity`                      |
| Data                 | `Data`                          |
| Input                | `Data`                          |
| Tipo                 | `TxType object`                 |
| AccessList           | `AccessListItemForRpc[] object` |
| V                    | `Quantity`                      |
| S                    | `Quantity`                      |
| R                    | `Quantity`                      |

`TxType`

* [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type

`AccessListItemForRpc[]`

| Nombre de los campos | Tipo       |
| -------------------- | ---------- |
| Length               | `Quantity` |
| LongLength           | `Quantity` |
| Rank                 | `Quantity` |
| SyncRoot             | `Object`   |
| IsReadOnly           | `Boolean`  |
| IsFixedSize          | `Boolean`  |
| IsSynchronized       | `Boolean`  |

`BlockParameter`

| Nombre de los campos | Tipo                        |
| -------------------- | --------------------------- |
| Tipo                 | `BlockParameterType object` |
| BlockNumber          | `Quantity`                  |
| BlockHash            | `Hash`                      |
| RequireCanonical     | `Boolean`                   |

`BlockParameterType`

* `Quantity` o  `String` (latest, earliest, pending)

`AccessListForRpc`

| Nombre de los campos | Tipo                            |
| -------------------- | ------------------------------- |
| AccessList           | `AccessListItemForRpc[] object` |
| GasUsed              | `Quantity`                      |
{% endtab %}
{% endtabs %}

[See also JSON RPC eth\_createAccessList](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_createaccesslist)

## eth.estimateGas

Ejecuta una llamada tx y retorna el gas usado (no crea una transacción)

| Invocación                                         |
| -------------------------------------------------- |
| `eth.estimateGas(transactionCall, blockParameter)` |

| Parámetro       | Tipo                       | Descripción |
| --------------- | -------------------------- | ----------- |
| transactionCall | `TransactionForRpc object` |             |
| blockParameter  | `BlockParameter object`    |             |

| Tipo de retorno | Descripción |
| --------------- | ----------- |
| `Quantity`      |             |

{% tabs %}
{% tab title="Example request of eth.estimateGas" %}
```yaml
eth.estimateGas(transactionCall, blockParameter)
```
{% endtab %}

{% tab title="Objects in eth_estimateGas" %}
`TransactionForRpc`

| Nombre de los campos | Tipo                            |
| -------------------- | ------------------------------- |
| Hash                 | `Hash`                          |
| Nonce                | `Quantity`                      |
| BlockHash            | `Hash`                          |
| BlockNumber          | `Quantity`                      |
| TransactionIndex     | `Quantity`                      |
| From                 | `Address`                       |
| To                   | `Address`                       |
| Value                | `Quantity`                      |
| GasPrice             | `Quantity`                      |
| Gas                  | `Quantity`                      |
| Data                 | `Data`                          |
| Input                | `Data`                          |
| Tipo                 | `TxType object`                 |
| AccessList           | `AccessListItemForRpc[] object` |
| V                    | `Quantity`                      |
| S                    | `Quantity`                      |
| R                    | `Quantity`                      |

`TxType`

* [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type

`AccessListItemForRpc[]`

| Nombre de los campos | Tipo       |
| -------------------- | ---------- |
| Length               | `Quantity` |
| LongLength           | `Quantity` |
| Rank                 | `Quantity` |
| SyncRoot             | `Object`   |
| IsReadOnly           | `Boolean`  |
| IsFixedSize          | `Boolean`  |
| IsSynchronized       | `Boolean`  |

`BlockParameter`

| Nombre de los campos | Tipo                        |
| -------------------- | --------------------------- |
| Tipo                 | `BlockParameterType object` |
| BlockNumber          | `Quantity`                  |
| BlockHash            | `Hash`                      |
| RequireCanonical     | `Boolean`                   |

`BlockParameterType`

* `Quantity` o  `String` (latest, earliest, pending)
{% endtab %}
{% endtabs %}

[See also JSON RPC eth\_estimateGas](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_estimategas)

## eth.getBalance

Retorno el saldo de la cuenta

| Invocación                                |
| ----------------------------------------- |
| `eth.getBalance(address, blockParameter)` |

| Parámetro      | Tipo                    | Descripción |
| -------------- | ----------------------- | ----------- |
| address        | `Address`               |             |
| blockParameter | `BlockParameter object` |             |

| Tipo de retorno | Descripción |
| --------------- | ----------- |
| `Quantity`      |             |

{% tabs %}
{% tab title="Example request of eth.getBalance" %}
```yaml
eth.getBalance(address, blockParameter)
```
{% endtab %}

{% tab title="Objects in eth_getBalance" %}
`BlockParameter`

| Nombre de los campos | Tipo                        |
| -------------------- | --------------------------- |
| Tipo                 | `BlockParameterType object` |
| BlockNumber          | `Quantity`                  |
| BlockHash            | `Hash`                      |
| RequireCanonical     | `Boolean`                   |

`BlockParameterType`

* `Quantity` o  `String` (latest, earliest, pending)
{% endtab %}
{% endtabs %}

[See also JSON RPC eth\_getBalance](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_getbalance)

## eth.getBlockByHash

Recupera un bloque por hash

| Invocación                                                    |
| ------------------------------------------------------------- |
| `eth.getBlockByHash(blockHash, returnFullTransactionObjects)` |

| Parámetro                    | Tipo      | Descripción |
| ---------------------------- | --------- | ----------- |
| blockHash                    | `Hash`    |             |
| returnFullTransactionObjects | `Boolean` |             |

| Tipo de retorno      | Descripción |
| -------------------- | ----------- |
| `BlockForRpc object` |             |

{% tabs %}
{% tab title="Example request of eth.getBlockByHash" %}
```yaml
eth.getBlockByHash(blockHash, returnFullTransactionObjects)
```
{% endtab %}

{% tab title="Objects in eth_getBlockByHash" %}
`BlockForRpc`

| Nombre de los campos | Tipo           |
| -------------------- | -------------- |
| Author               | `Address`      |
| Difficulty           | `Quantity`     |
| ExtraData            | `Data`         |
| GasLimit             | `Quantity`     |
| GasUsed              | `Quantity`     |
| Hash                 | `Hash`         |
| LogsBloom            | `Bloom Object` |
| Miner                | `Address`      |
| MixHash              | `Hash`         |
| Nonce                | `Data`         |
| Number               | `Quantity`     |
| ParentHash           | `Hash`         |
| ReceiptsRoot         | `Hash`         |
| Sha3Uncles           | `Hash`         |
| Signature            | `Data`         |
| Size                 | `Quantity`     |
| StateRoot            | `Hash`         |
| Step                 | `Quantity`     |
| TotalDifficulty      | `Quantity`     |
| Timestamp            | `Quantity`     |
| Transactions         | `Array`        |
| TransactionsRoot     | `Hash`         |
| Uncles               | `Array`        |
{% endtab %}
{% endtabs %}

[See also JSON RPC eth\_getBlockByHash](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_getblockbyhash)

## eth.getBlockByNumber

Recupera un bloque por número

| Invocación                                                           |
| -------------------------------------------------------------------- |
| `eth.getBlockByNumber(blockParameter, returnFullTransactionObjects)` |

| Parámetro                    | Tipo                    | Descripción |
| ---------------------------- | ----------------------- | ----------- |
| blockParameter               | `BlockParameter object` |             |
| returnFullTransactionObjects | `Boolean`               |             |

| Tipo de retorno      | Descripción |
| -------------------- | ----------- |
| `BlockForRpc object` |             |

{% tabs %}
{% tab title="Example request of eth.getBlockByNumber" %}
```yaml
eth.getBlockByNumber(blockParameter, returnFullTransactionObjects)
```
{% endtab %}

{% tab title="Objects in eth_getBlockByNumber" %}
`BlockParameter`

| Nombre de los campos | Tipo                        |
| -------------------- | --------------------------- |
| Tipo                 | `BlockParameterType object` |
| BlockNumber          | `Quantity`                  |
| BlockHash            | `Hash`                      |
| RequireCanonical     | `Boolean`                   |

`BlockParameterType`

* `Quantity` o  `String` (latest, earliest, pending)

`BlockForRpc`

| Nombre de los campos | Tipo           |
| -------------------- | -------------- |
| Author               | `Address`      |
| Difficulty           | `Quantity`     |
| ExtraData            | `Data`         |
| GasLimit             | `Quantity`     |
| GasUsed              | `Quantity`     |
| Hash                 | `Hash`         |
| LogsBloom            | `Bloom Object` |
| Miner                | `Address`      |
| MixHash              | `Hash`         |
| Nonce                | `Data`         |
| Number               | `Quantity`     |
| ParentHash           | `Hash`         |
| ReceiptsRoot         | `Hash`         |
| Sha3Uncles           | `Hash`         |
| Signature            | `Data`         |
| Size                 | `Quantity`     |
| StateRoot            | `Hash`         |
| Step                 | `Quantity`     |
| TotalDifficulty      | `Quantity`     |
| Timestamp            | `Quantity`     |
| Transactions         | `Array`        |
| TransactionsRoot     | `Hash`         |
| Uncles               | `Array`        |
{% endtab %}
{% endtabs %}

[See also JSON RPC eth\_getBlockByNumber](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_getblockbynumber)

## eth.getBlockTransactionCountByHash

Retorna el número de transacciones en el bloque hash

| Invocación                                      |
| ----------------------------------------------- |
| `eth.getBlockTransactionCountByHash(blockHash)` |

| Parámetro | Tipo   | Descripción |
| --------- | ------ | ----------- |
| blockHash | `Hash` |             |

| Tipo de retorno | Descripción |
| --------------- | ----------- |
| `Quantity`      |             |

{% tabs %}
{% tab title="Example request of eth.getBlockTransactionCountByHash" %}
```yaml
eth.getBlockTransactionCountByHash(blockHash)
```
{% endtab %}
{% endtabs %}

[See also JSON RPC eth\_getBlockTransactionCountByHash](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_getblocktransactioncountbyhash)

## eth.getBlockTransactionCountByNumber

Retorna el número de transacciones en el bloque por número de bloque

| Invocación                                             |
| ------------------------------------------------------ |
| `eth.getBlockTransactionCountByNumber(blockParameter)` |

| Parámetro      | Tipo                    | Descripción |
| -------------- | ----------------------- | ----------- |
| blockParameter | `BlockParameter object` |             |

| Tipo de retorno | Descripción |
| --------------- | ----------- |
| `Quantity`      |             |

{% tabs %}
{% tab title="Example request of eth.getBlockTransactionCountByNumber" %}
```yaml
eth.getBlockTransactionCountByNumber(blockParameter)
```
{% endtab %}

{% tab title="Objects in eth_getBlockTransactionCountByNumber" %}
`BlockParameter`

| Nombre de los campos | Tipo                        |
| -------------------- | --------------------------- |
| Tipo                 | `BlockParameterType object` |
| BlockNumber          | `Quantity`                  |
| BlockHash            | `Hash`                      |
| RequireCanonical     | `Boolean`                   |

`BlockParameterType`

* `Quantity` o  `String` (latest, earliest, pending)
{% endtab %}
{% endtabs %}

[See also JSON RPC eth\_getBlockTransactionCountByNumber](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_getblocktransactioncountbynumber)

## eth.getCode

Retorna el código de cuenta en la dirección y el bloque dados

| Invocación                             |
| -------------------------------------- |
| `eth.getCode(address, blockParameter)` |

| Parámetro      | Tipo                    | Descripción |
| -------------- | ----------------------- | ----------- |
| address        | `Address`               |             |
| blockParameter | `BlockParameter object` |             |

| Tipo de retorno | Descripción |
| --------------- | ----------- |
| `Data`          |             |

{% tabs %}
{% tab title="Example request of eth.getCode" %}
```yaml
eth.getCode(address, blockParameter)
```
{% endtab %}

{% tab title="Objects in eth_getCode" %}
`BlockParameter`

| Nombre de los campos | Tipo                        |
| -------------------- | --------------------------- |
| Tipo                 | `BlockParameterType object` |
| BlockNumber          | `Quantity`                  |
| BlockHash            | `Hash`                      |
| RequireCanonical     | `Boolean`                   |

`BlockParameterType`

* `Quantity` o  `String` (latest, earliest, pending)
{% endtab %}
{% endtabs %}

[See also JSON RPC eth\_getCode](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_getcode)

## eth.getFilterChanges

Lee cambios de filtro

| Invocación                       |
| -------------------------------- |
| `eth.getFilterChanges(filterId)` |

| Parámetro | Tipo       | Descripción |
| --------- | ---------- | ----------- |
| filterId  | `Quantity` |             |

| Tipo de retorno | Descripción |
| --------------- | ----------- |
| `Array`         |             |

{% tabs %}
{% tab title="Example request of eth.getFilterChanges" %}
```yaml
eth.getFilterChanges(filterId)
```
{% endtab %}
{% endtabs %}

[See also JSON RPC eth\_getFilterChanges](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_getfilterchanges)

## eth.getLogs

Lee registros

| Invocación            |
| --------------------- |
| `eth.getLogs(filter)` |

| Parámetro | Tipo            | Descripción |
| --------- | --------------- | ----------- |
| filter    | `Filter object` |             |

| Tipo de retorno | Descripción |
| --------------- | ----------- |
| `Array`         |             |

{% tabs %}
{% tab title="Example request of eth.getLogs" %}
```yaml
eth.getLogs(filter)
```
{% endtab %}

{% tab title="Objects in eth_getLogs" %}
`Filter`

| Nombre de los campos | Tipo                    |
| -------------------- | ----------------------- |
| FromBlock            | `BlockParameter object` |
| ToBlock              | `BlockParameter object` |
| Address              | `Object`                |
| Topics               | `Array`                 |

`BlockParameter`

| Nombre de los campos | Tipo                        |
| -------------------- | --------------------------- |
| Tipo                 | `BlockParameterType object` |
| BlockNumber          | `Quantity`                  |
| BlockHash            | `Hash`                      |
| RequireCanonical     | `Boolean`                   |
{% endtab %}
{% endtabs %}

[See also JSON RPC eth\_getLogs](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_getlogs)

## eth.getProof

[https://github.com/ethereum/EIPs/issues/1186](https://github.com/ethereum/EIPs/issues/1186)

| Invocación                                               |
| -------------------------------------------------------- |
| `eth.getProof(accountAddress, hashRate, blockParameter)` |

| Parámetro      | Tipo                    | Descripción |
| -------------- | ----------------------- | ----------- |
| accountAddress | `Address`               |             |
| hashRate       | `Data`                  |             |
| blockParameter | `BlockParameter object` |             |

| Tipo de retorno       | Descripción |
| --------------------- | ----------- |
| `AccountProof object` |             |

{% tabs %}
{% tab title="Example request of eth.getProof" %}
```yaml
eth.getProof(accountAddress, hashRate, blockParameter)
```
{% endtab %}

{% tab title="Objects in eth_getProof" %}
`BlockParameter`

| Nombre de los campos | Tipo                        |
| -------------------- | --------------------------- |
| Tipo                 | `BlockParameterType object` |
| BlockNumber          | `Quantity`                  |
| BlockHash            | `Hash`                      |
| RequireCanonical     | `Boolean`                   |

`BlockParameterType`

* `Quantity` o  `String` (latest, earliest, pending)

`AccountProof`

| Nombre de los campos | Tipo                    |
| -------------------- | ----------------------- |
| Address              | `Address`               |
| Proof                | `Data`                  |
| Balance              | `Quantity`              |
| CodeHash             | `Hash`                  |
| Nonce                | `Quantity`              |
| StorageRoot          | `Hash`                  |
| StorageProofs        | `StorageProof[] object` |

`StorageProof[]`

| Nombre de los campos | Tipo       |
| -------------------- | ---------- |
| Length               | `Quantity` |
| LongLength           | `Quantity` |
| Rank                 | `Quantity` |
| SyncRoot             | `Object`   |
| IsReadOnly           | `Boolean`  |
| IsFixedSize          | `Boolean`  |
| IsSynchronized       | `Boolean`  |
{% endtab %}
{% endtabs %}

[See also JSON RPC eth\_getProof](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_getproof)

## eth.getStorageAt

Retorna los datos de almacenamiento en la dirección. storage\_index

| Invocación                                                 |
| ---------------------------------------------------------- |
| `eth.getStorageAt(address, positionIndex, blockParameter)` |

| Parámetro      | Tipo                    | Descripción |
| -------------- | ----------------------- | ----------- |
| address        | `Address`               |             |
| positionIndex  | `Quantity`              |             |
| blockParameter | `BlockParameter object` |             |

| Tipo de retorno | Descripción |
| --------------- | ----------- |
| `Data`          |             |

{% tabs %}
{% tab title="Example request of eth.getStorageAt" %}
```yaml
eth.getStorageAt(address, positionIndex, blockParameter)
```
{% endtab %}

{% tab title="Objects in eth_getStorageAt" %}
`BlockParameter`

| Nombre de los campos | Tipo                        |
| -------------------- | --------------------------- |
| Tipo                 | `BlockParameterType object` |
| BlockNumber          | `Quantity`                  |
| BlockHash            | `Hash`                      |
| RequireCanonical     | `Boolean`                   |

`BlockParameterType`

* `Quantity` o  `String` (latest, earliest, pending)
{% endtab %}
{% endtabs %}

[See also JSON RPC eth\_getStorageAt](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_getstorageat)

## eth.getTransactionByBlockNumberAndIndex

Retorna una transacción por número de bloque e índice

| Invocación                                                               |
| ------------------------------------------------------------------------ |
| `eth.getTransactionByBlockNumberAndIndex(blockParameter, positionIndex)` |

| Parámetro      | Tipo                    | Descripción |
| -------------- | ----------------------- | ----------- |
| blockParameter | `BlockParameter object` |             |
| positionIndex  | `Quantity`              |             |

| Tipo de retorno            | Descripción |
| -------------------------- | ----------- |
| `TransactionForRpc object` |             |

{% tabs %}
{% tab title="Example request of eth.getTransactionByBlockNumberAndIndex" %}
```yaml
eth.getTransactionByBlockNumberAndIndex(blockParameter, positionIndex)
```
{% endtab %}

{% tab title="Objects in eth_getTransactionByBlockNumberAndIndex" %}
`BlockParameter`

| Nombre de los campos | Tipo                        |
| -------------------- | --------------------------- |
| Tipo                 | `BlockParameterType object` |
| BlockNumber          | `Quantity`                  |
| BlockHash            | `Hash`                      |
| RequireCanonical     | `Boolean`                   |

`BlockParameterType`

* `Quantity` o  `String` (latest, earliest, pending)

`TransactionForRpc`

| Nombre de los campos | Tipo                            |
| -------------------- | ------------------------------- |
| Hash                 | `Hash`                          |
| Nonce                | `Quantity`                      |
| BlockHash            | `Hash`                          |
| BlockNumber          | `Quantity`                      |
| TransactionIndex     | `Quantity`                      |
| From                 | `Address`                       |
| To                   | `Address`                       |
| Value                | `Quantity`                      |
| GasPrice             | `Quantity`                      |
| Gas                  | `Quantity`                      |
| Data                 | `Data`                          |
| Input                | `Data`                          |
| Tipo                 | `TxType object`                 |
| AccessList           | `AccessListItemForRpc[] object` |
| V                    | `Quantity`                      |
| S                    | `Quantity`                      |
| R                    | `Quantity`                      |

`TxType`

* [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type

`AccessListItemForRpc[]`

| Nombre de los campos | Tipo       |
| -------------------- | ---------- |
| Length               | `Quantity` |
| LongLength           | `Quantity` |
| Rank                 | `Quantity` |
| SyncRoot             | `Object`   |
| IsReadOnly           | `Boolean`  |
| IsFixedSize          | `Boolean`  |
| IsSynchronized       | `Boolean`  |
{% endtab %}
{% endtabs %}

[See also JSON RPC eth\_getTransactionByBlockNumberAndIndex](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_gettransactionbyblocknumberandindex)

## eth.getTransactionByHash

Recupera una transacción por hash

| Invocación                                  |
| ------------------------------------------- |
| `eth.getTransactionByHash(transactionHash)` |

| Parámetro       | Tipo   | Descripción |
| --------------- | ------ | ----------- |
| transactionHash | `Hash` |             |

| Tipo de retorno            | Descripción |
| -------------------------- | ----------- |
| `TransactionForRpc object` |             |

{% tabs %}
{% tab title="Example request of eth.getTransactionByHash" %}
```yaml
eth.getTransactionByHash(transactionHash)
```
{% endtab %}

{% tab title="Objects in eth_getTransactionByHash" %}
`TransactionForRpc`

| Nombre de los campos | Tipo                            |
| -------------------- | ------------------------------- |
| Hash                 | `Hash`                          |
| Nonce                | `Quantity`                      |
| BlockHash            | `Hash`                          |
| BlockNumber          | `Quantity`                      |
| TransactionIndex     | `Quantity`                      |
| From                 | `Address`                       |
| To                   | `Address`                       |
| Value                | `Quantity`                      |
| GasPrice             | `Quantity`                      |
| Gas                  | `Quantity`                      |
| Data                 | `Data`                          |
| Input                | `Data`                          |
| Tipo                 | `TxType object`                 |
| AccessList           | `AccessListItemForRpc[] object` |
| V                    | `Quantity`                      |
| S                    | `Quantity`                      |
| R                    | `Quantity`                      |

`TxType`

* [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type

`AccessListItemForRpc[]`

| Nombre de los campos | Tipo       |
| -------------------- | ---------- |
| Length               | `Quantity` |
| LongLength           | `Quantity` |
| Rank                 | `Quantity` |
| SyncRoot             | `Object`   |
| IsReadOnly           | `Boolean`  |
| IsFixedSize          | `Boolean`  |
| IsSynchronized       | `Boolean`  |
{% endtab %}
{% endtabs %}

[See also JSON RPC eth\_getTransactionByHash](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_gettransactionbyhash)

## eth.getTransactionCount

Retorna la cuenta nonce (número de transacciones de la cuenta desde el génesis) en el número de bloque dado

| Invocación                                         |
| -------------------------------------------------- |
| `eth.getTransactionCount(address, blockParameter)` |

| Parámetro      | Tipo                    | Descripción |
| -------------- | ----------------------- | ----------- |
| address        | `Address`               |             |
| blockParameter | `BlockParameter object` |             |

| Tipo de retorno | Descripción |
| --------------- | ----------- |
| `Quantity`      |             |

{% tabs %}
{% tab title="Example request of eth.getTransactionCount" %}
```yaml
eth.getTransactionCount(address, blockParameter)
```
{% endtab %}

{% tab title="Objects in eth_getTransactionCount" %}
`BlockParameter`

| Nombre de los campos | Tipo                        |
| -------------------- | --------------------------- |
| Tipo                 | `BlockParameterType object` |
| BlockNumber          | `Quantity`                  |
| BlockHash            | `Hash`                      |
| RequireCanonical     | `Boolean`                   |

`BlockParameterType`

* `Quantity` o  `String` (latest, earliest, pending)
{% endtab %}
{% endtabs %}

[See also JSON RPC eth\_getTransactionCount](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_gettransactioncount)

## eth.getTransactionReceipt

Retorna un recibo de transacción por tx hash

| Invocación                              |
| --------------------------------------- |
| `eth.getTransactionReceipt(txHashData)` |

| Parámetro  | Tipo   | Descripción |
| ---------- | ------ | ----------- |
| txHashData | `Hash` |             |

| Tipo de retorno        | Descripción |
| ---------------------- | ----------- |
| `ReceiptForRpc object` |             |

{% tabs %}
{% tab title="Example request of eth.getTransactionReceipt" %}
```yaml
eth.getTransactionReceipt(txHashData)
```
{% endtab %}

{% tab title="Objects in eth_getTransactionReceipt" %}
`ReceiptForRpc`

| Nombre de los campos | Tipo                      |
| -------------------- | ------------------------- |
| TransactionHash      | `Hash`                    |
| TransactionIndex     | `Quantity`                |
| BlockHash            | `Hash`                    |
| BlockNumber          | `Quantity`                |
| CumulativeGasUsed    | `Quantity`                |
| GasUsed              | `Quantity`                |
| From                 | `Address`                 |
| To                   | `Address`                 |
| ContractAddress      | `Address`                 |
| Logs                 | `LogEntryForRpc[] object` |
| LogsBloom            | `Bloom Object`            |
| Root                 | `Hash`                    |
| Status               | `Quantity`                |
| Error                | `String`                  |
| Tipo                 | `TxType object`           |

`LogEntryForRpc[]`

| Nombre de los campos | Tipo       |
| -------------------- | ---------- |
| Length               | `Quantity` |
| LongLength           | `Quantity` |
| Rank                 | `Quantity` |
| SyncRoot             | `Object`   |
| IsReadOnly           | `Boolean`  |
| IsFixedSize          | `Boolean`  |
| IsSynchronized       | `Boolean`  |

`TxType`

* [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type
{% endtab %}
{% endtabs %}

[See also JSON RPC eth\_getTransactionReceipt](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_gettransactionreceipt)

## eth.getUncleByBlockHashAndIndex

Recupera un encabezado de bloque de tío por hash de bloque e índice de tío

| Invocación                                                      |
| --------------------------------------------------------------- |
| `eth.getUncleByBlockHashAndIndex(blockHashData, positionIndex)` |

| Parámetro     | Tipo       | Descripción |
| ------------- | ---------- | ----------- |
| blockHashData | `Hash`     |             |
| positionIndex | `Quantity` |             |

| Tipo de retorno      | Descripción |
| -------------------- | ----------- |
| `BlockForRpc object` |             |

{% tabs %}
{% tab title="Example request of eth.getUncleByBlockHashAndIndex" %}
```yaml
eth.getUncleByBlockHashAndIndex(blockHashData, positionIndex)
```
{% endtab %}

{% tab title="Objects in eth_getUncleByBlockHashAndIndex" %}
`BlockForRpc`

| Nombre de los campos | Tipo           |
| -------------------- | -------------- |
| Author               | `Address`      |
| Difficulty           | `Quantity`     |
| ExtraData            | `Data`         |
| GasLimit             | `Quantity`     |
| GasUsed              | `Quantity`     |
| Hash                 | `Hash`         |
| LogsBloom            | `Bloom Object` |
| Miner                | `Address`      |
| MixHash              | `Hash`         |
| Nonce                | `Data`         |
| Number               | `Quantity`     |
| ParentHash           | `Hash`         |
| ReceiptsRoot         | `Hash`         |
| Sha3Uncles           | `Hash`         |
| Signature            | `Data`         |
| Size                 | `Quantity`     |
| StateRoot            | `Hash`         |
| Step                 | `Quantity`     |
| TotalDifficulty      | `Quantity`     |
| Timestamp            | `Quantity`     |
| Transactions         | `Array`        |
| TransactionsRoot     | `Hash`         |
| Uncles               | `Array`        |
{% endtab %}
{% endtabs %}

[See also JSON RPC eth\_getUncleByBlockHashAndIndex](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_getunclebyblockhashandindex)

## eth.getUncleByBlockNumberAndIndex

Recupera el header de bloque de tío por número de bloque e índice de tío

| Invocación                                                         |
| ------------------------------------------------------------------ |
| `eth.getUncleByBlockNumberAndIndex(blockParameter, positionIndex)` |

| Parámetro      | Tipo                    | Descripción |
| -------------- | ----------------------- | ----------- |
| blockParameter | `BlockParameter object` |             |
| positionIndex  | `Quantity`              |             |

| Tipo de retorno      | Descripción |
| -------------------- | ----------- |
| `BlockForRpc object` |             |

{% tabs %}
{% tab title="Example request of eth.getUncleByBlockNumberAndIndex" %}
```yaml
eth.getUncleByBlockNumberAndIndex(blockParameter, positionIndex)
```
{% endtab %}

{% tab title="Objects in eth_getUncleByBlockNumberAndIndex" %}
`BlockParameter`

| Nombre de los campos | Tipo                        |
| -------------------- | --------------------------- |
| Tipo                 | `BlockParameterType object` |
| BlockNumber          | `Quantity`                  |
| BlockHash            | `Hash`                      |
| RequireCanonical     | `Boolean`                   |

`BlockParameterType`

* `Quantity` o  `String` (latest, earliest, pending)

`BlockForRpc`

| Nombre de los campos | Tipo           |
| -------------------- | -------------- |
| Author               | `Address`      |
| Difficulty           | `Quantity`     |
| ExtraData            | `Data`         |
| GasLimit             | `Quantity`     |
| GasUsed              | `Quantity`     |
| Hash                 | `Hash`         |
| LogsBloom            | `Bloom Object` |
| Miner                | `Address`      |
| MixHash              | `Hash`         |
| Nonce                | `Data`         |
| Number               | `Quantity`     |
| ParentHash           | `Hash`         |
| ReceiptsRoot         | `Hash`         |
| Sha3Uncles           | `Hash`         |
| Signature            | `Data`         |
| Size                 | `Quantity`     |
| StateRoot            | `Hash`         |
| Step                 | `Quantity`     |
| TotalDifficulty      | `Quantity`     |
| Timestamp            | `Quantity`     |
| Transactions         | `Array`        |
| TransactionsRoot     | `Hash`         |
| Uncles               | `Array`        |
{% endtab %}
{% endtabs %}

[See also JSON RPC eth\_getUncleByBlockNumberAndIndex](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_getunclebyblocknumberandindex)

## eth.getUncleCountByBlockNumber

Retorna el número de tíos en el bloque por número de bloque

| Invocación                                       |
| ------------------------------------------------ |
| `eth.getUncleCountByBlockNumber(blockParameter)` |

| Parámetro      | Tipo                    | Descripción |
| -------------- | ----------------------- | ----------- |
| blockParameter | `BlockParameter object` |             |

| Tipo de retorno | Descripción |
| --------------- | ----------- |
| `Quantity`      |             |

{% tabs %}
{% tab title="Example request of eth.getUncleCountByBlockNumber" %}
```yaml
eth.getUncleCountByBlockNumber(blockParameter)
```
{% endtab %}

{% tab title="Objects in eth_getUncleCountByBlockNumber" %}
`BlockParameter`

| Nombre de los campos | Tipo                        |
| -------------------- | --------------------------- |
| Tipo                 | `BlockParameterType object` |
| BlockNumber          | `Quantity`                  |
| BlockHash            | `Hash`                      |
| RequireCanonical     | `Boolean`                   |

`BlockParameterType`

* `Quantity` o  `String` (latest, earliest, pending)
{% endtab %}
{% endtabs %}

[See also JSON RPC eth\_getUncleCountByBlockNumber](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_getunclecountbyblocknumber)

## eth.newPendingTransactionFilter

Crea un filtro de actualización

| Invocación                          |
| ----------------------------------- |
| `eth.newPendingTransactionFilter()` |

| este método no tiene parametros |
| ------------------------------- |

| Tipo de retorno | Descripción |
| --------------- | ----------- |
| `Quantity`      |             |

{% tabs %}
{% tab title="Example request of eth.newPendingTransactionFilter" %}
```yaml
eth.newPendingTransactionFilter()
```
{% endtab %}
{% endtabs %}

[See also JSON RPC eth\_newPendingTransactionFilter](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_newpendingtransactionfilter)

## eth.pendingTransactions

Retorna la lista de transacciones pendientes

| Invocación                |
| ------------------------- |
| `eth.pendingTransactions` |

| este método no tiene parametros |
| ------------------------------- |

| Tipo de retorno            | Descripción |
| -------------------------- | ----------- |
| `TransactionForRpc object` |             |

{% tabs %}
{% tab title="Example request of eth.pendingTransactions" %}
```yaml
eth.pendingTransactions
```
{% endtab %}

{% tab title="Objects in eth_pendingTransactions" %}
`TransactionForRpc`

| Nombre de los campos | Tipo                            |
| -------------------- | ------------------------------- |
| Hash                 | `Hash`                          |
| Nonce                | `Quantity`                      |
| BlockHash            | `Hash`                          |
| BlockNumber          | `Quantity`                      |
| TransactionIndex     | `Quantity`                      |
| From                 | `Address`                       |
| To                   | `Address`                       |
| Value                | `Quantity`                      |
| GasPrice             | `Quantity`                      |
| Gas                  | `Quantity`                      |
| Data                 | `Data`                          |
| Input                | `Data`                          |
| Tipo                 | `TxType object`                 |
| AccessList           | `AccessListItemForRpc[] object` |
| V                    | `Quantity`                      |
| S                    | `Quantity`                      |
| R                    | `Quantity`                      |

`TxType`

* [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type

`AccessListItemForRpc[]`

| Nombre de los campos | Tipo       |
| -------------------- | ---------- |
| Length               | `Quantity` |
| LongLength           | `Quantity` |
| Rank                 | `Quantity` |
| SyncRoot             | `Object`   |
| IsReadOnly           | `Boolean`  |
| IsFixedSize          | `Boolean`  |
| IsSynchronized       | `Boolean`  |
{% endtab %}
{% endtabs %}

[See also JSON RPC eth\_pendingTransactions](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_pendingtransactions)

## eth.protocolVersion

Retorna la versión del protocolo ETH

| Invocación            |
| --------------------- |
| `eth.protocolVersion` |

| este método no tiene parametros |
| ------------------------------- |

| Tipo de retorno | Descripción |
| --------------- | ----------- |
| `String`        |             |

{% tabs %}
{% tab title="Example request of eth.protocolVersion" %}
```yaml
eth.protocolVersion
```
{% endtab %}
{% endtabs %}

[See also JSON RPC eth\_protocolVersion](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_protocolversion)

## eth.sendEth

| Invocación                           |
| ------------------------------------ |
| `eth.sendEth(from, to, amountInEth)` |

| Parámetro   | Tipo       | Descripción |
| ----------- | ---------- | ----------- |
| from        | `String`   |             |
| to          | `String`   |             |
| amountInEth | `Quantity` |             |

| Tipo de retorno | Descripción |
| --------------- | ----------- |
| `String`        |             |

{% tabs %}
{% tab title="Example request of eth.sendEth" %}
```yaml
eth.sendEth(from, to, amountInEth)
```
{% endtab %}
{% endtabs %}

## eth.sendRawTransaction

Envíe una transacción sin procesar al tx pool y al broadcasting

| Invocación                            |
| ------------------------------------- |
| `eth.sendRawTransaction(transaction)` |

| Parámetro   | Tipo   | Descripción |
| ----------- | ------ | ----------- |
| transaction | `Data` |             |

| Tipo de retorno | Descripción |
| --------------- | ----------- |
| `Hash`          |             |

{% tabs %}
{% tab title="Example request of eth.sendRawTransaction" %}
```yaml
eth.sendRawTransaction(transaction)
```
{% endtab %}
{% endtabs %}

[See also JSON RPC eth\_sendRawTransaction](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_sendrawtransaction)

## eth.sendTransaction

Envíe una transacción al tx pool y al broadcasting

| Invocación                   |
| ---------------------------- |
| `eth.sendTransaction(rpcTx)` |

| Parámetro | Tipo                       | Descripción |
| --------- | -------------------------- | ----------- |
| rpcTx     | `TransactionForRpc object` |             |

| Tipo de retorno | Descripción |
| --------------- | ----------- |
| `Hash`          |             |

{% tabs %}
{% tab title="Example request of eth.sendTransaction" %}
```yaml
eth.sendTransaction(rpcTx)
```
{% endtab %}

{% tab title="Objects in eth_sendTransaction" %}
`TransactionForRpc`

| Nombre de los campos | Tipo                            |
| -------------------- | ------------------------------- |
| Hash                 | `Hash`                          |
| Nonce                | `Quantity`                      |
| BlockHash            | `Hash`                          |
| BlockNumber          | `Quantity`                      |
| TransactionIndex     | `Quantity`                      |
| From                 | `Address`                       |
| To                   | `Address`                       |
| Value                | `Quantity`                      |
| GasPrice             | `Quantity`                      |
| Gas                  | `Quantity`                      |
| Data                 | `Data`                          |
| Input                | `Data`                          |
| Tipo                 | `TxType object`                 |
| AccessList           | `AccessListItemForRpc[] object` |
| V                    | `Quantity`                      |
| S                    | `Quantity`                      |
| R                    | `Quantity`                      |

`TxType`

* [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type

`AccessListItemForRpc[]`

| Nombre de los campos | Tipo       |
| -------------------- | ---------- |
| Length               | `Quantity` |
| LongLength           | `Quantity` |
| Rank                 | `Quantity` |
| SyncRoot             | `Object`   |
| IsReadOnly           | `Boolean`  |
| IsFixedSize          | `Boolean`  |
| IsSynchronized       | `Boolean`  |
{% endtab %}
{% endtabs %}

[See also JSON RPC eth\_sendTransaction](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_sendtransaction)

## eth.sendWei

| Invocación                           |
| ------------------------------------ |
| `eth.sendWei(from, to, amountInWei)` |

| Parámetro   | Tipo       | Descripción |
| ----------- | ---------- | ----------- |
| from        | `String`   |             |
| to          | `String`   |             |
| amountInWei | `Quantity` |             |

| Tipo de retorno | Descripción |
| --------------- | ----------- |
| `String`        |             |

{% tabs %}
{% tab title="Example request of eth.sendWei" %}
```yaml
eth.sendWei(from, to, amountInWei)
```
{% endtab %}
{% endtabs %}

## eth.syncing

Retorna el estado de sincronización

| Invocación      |
| --------------- |
| `eth.syncing()` |

| este método no tiene parametros |
| ------------------------------- |

| Tipo de retorno        | Descripción |
| ---------------------- | ----------- |
| `SyncingResult object` |             |

{% tabs %}
{% tab title="Example request of eth.syncing" %}
```yaml
eth.syncing()
```
{% endtab %}

{% tab title="Objects in eth_syncing" %}
`SyncingResult`

| Nombre de los campos | Tipo       |
| -------------------- | ---------- |
| IsSyncing            | `Boolean`  |
| StartingBlock        | `Quantity` |
| CurrentBlock         | `Quantity` |
| HighestBlock         | `Quantity` |
{% endtab %}
{% endtabs %}

[See also JSON RPC eth\_syncing](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/eth#eth\_syncing)
