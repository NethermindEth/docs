# Eth module

## eth\_blockNumber

Retorna el número de bloque actual

| Invocación |
| :--- |
| `{"method":"eth_blockNumber","params":[]}` |

| este método no tiene parametros |
| :--- |


| Tipo de retorno | Descripción |
| :--- | :--- |
| `Quantity` |  |

{% tabs %}
{% tab title="Example request of eth\_blockNumber" %}
```text
curl --data '{"method":"eth_blockNumber","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[ingrese a CLI eth.blockNumber](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-blocknumber)

## eth\_call

Ejecuta una llamada tx \(no crea una transacción\)

| Invocación |
| :--- |
| `{"method":"eth_call","params":[transactionCall, blockParameter]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| transactionCall | `TransactionForRpc object` |  |
| blockParameter | `BlockParameter object` |  |

| Tipo de retorno | Descripción |
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

| Nombre de los campos | Tipo |
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
| Data | `Data` |
| Input | `Data` |
| Tipo | `TxType object` |
| AccessList | `AccessListItemForRpc[] object` |
| V | `Quantity` |
| S | `Quantity` |
| R | `Quantity` |

`TxType`

* [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type

`AccessListItemForRpc[]`

| Nombre de los campos | Tipo |
| :--- | :--- |
| Length | `Quantity` |
| LongLength | `Quantity` |
| Rank | `Quantity` |
| SyncRoot | `Object` |
| IsReadOnly | `Boolean` |
| IsFixedSize | `Boolean` |
| IsSynchronized | `Boolean` |

`BlockParameter`

| Nombre de los campos | Tipo |
| :--- | :--- |
| Tipo | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

* `Quantity` o  `String` \(latest, earliest, pending\)
{% endtab %}
{% endtabs %}

[ingrese a CLI eth.call](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-call)

## eth\_chainId

Retorna ChainID

| Invocación |
| :--- |
| `{"method":"eth_chainId","params":[]}` |

| este método no tiene parametros |
| :--- |


| Tipo de retorno | Descripción |
| :--- | :--- |
| `UInt64 object` |  |

{% tabs %}
{% tab title="Example request of eth\_chainId" %}
```text
curl --data '{"method":"eth_chainId","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in eth\_chainId" %}
`UInt64`

| Nombre de los campos | Tipo |
| :--- | :--- |
{% endtab %}
{% endtabs %}

[ingrese a CLI eth.chainId](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-chainid)

## eth\_createAccessList

Crea un \[EIP2930\] \([https://eips.ethereum.org/EIPS/eip-2930](https://eips.ethereum.org/EIPS/eip-2930)\) tipo AccessList para la transacción

{% hint style="info" %}
**Hint:** If your transaction has code executed, then you can generate transaction access list with eth\_createAccessList. If you send it with your transaction then it will lower your gas cost on Ethereum
{% endhint %}

| Invocación |
| :--- |
| `{"method":"eth_createAccessList","params":[transactionCall, blockParameter, optimize]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| transactionCall | `TransactionForRpc object` | Detalles de la transacción |
| blockParameter | `BlockParameter object` | \(opcional\) |
| optimizar | `Boolean` | \(opcional\) |

| Tipo de retorno | Descripción |
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

| Nombre de los campos | Tipo |
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
| Data | `Data` |
| Input | `Data` |
| Tipo | `TxType object` |
| AccessList | `AccessListItemForRpc[] object` |
| V | `Quantity` |
| S | `Quantity` |
| R | `Quantity` |

`TxType`

* [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type

`AccessListItemForRpc[]`

| Nombre de los campos | Tipo |
| :--- | :--- |
| Length | `Quantity` |
| LongLength | `Quantity` |
| Rank | `Quantity` |
| SyncRoot | `Object` |
| IsReadOnly | `Boolean` |
| IsFixedSize | `Boolean` |
| IsSynchronized | `Boolean` |

`BlockParameter`

| Nombre de los campos | Tipo |
| :--- | :--- |
| Tipo | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

* `Quantity` o  `String` \(latest, earliest, pending\)

`AccessListForRpc`

| Nombre de los campos | Tipo |
| :--- | :--- |
| AccessList | `AccessListItemForRpc[] object` |
| GasUsed | `Quantity` |
{% endtab %}
{% endtabs %}

[ingrese a CLI eth.createAccessList](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-createaccesslist)

## eth\_estimateGas

Ejecuta una llamada tx y retorna el gas usado \(no crea una transacción\)

| Invocación |
| :--- |
| `{"method":"eth_estimateGas","params":[transactionCall, blockParameter]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| transactionCall | `TransactionForRpc object` |  |
| blockParameter | `BlockParameter object` |  |

| Tipo de retorno | Descripción |
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

| Nombre de los campos | Tipo |
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
| Data | `Data` |
| Input | `Data` |
| Tipo | `TxType object` |
| AccessList | `AccessListItemForRpc[] object` |
| V | `Quantity` |
| S | `Quantity` |
| R | `Quantity` |

`TxType`

* [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type

`AccessListItemForRpc[]`

| Nombre de los campos | Tipo |
| :--- | :--- |
| Length | `Quantity` |
| LongLength | `Quantity` |
| Rank | `Quantity` |
| SyncRoot | `Object` |
| IsReadOnly | `Boolean` |
| IsFixedSize | `Boolean` |
| IsSynchronized | `Boolean` |

`BlockParameter`

| Nombre de los campos | Tipo |
| :--- | :--- |
| Tipo | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

* `Quantity` o  `String` \(latest, earliest, pending\)
{% endtab %}
{% endtabs %}

[ingrese a CLI eth.estimateGas](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-estimategas)

## eth\_getBalance

Retorno el saldo de la cuenta

| Invocación |
| :--- |
| `{"method":"eth_getBalance","params":[address, blockParameter]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| address | `Address` |  |
| blockParameter | `BlockParameter object` |  |

| Tipo de retorno | Descripción |
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

| Nombre de los campos | Tipo |
| :--- | :--- |
| Tipo | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

* `Quantity` o  `String` \(latest, earliest, pending\)
{% endtab %}
{% endtabs %}

[ingrese a CLI eth.getBalance](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getbalance)

## eth\_getBlockByHash

Recupera un bloque por hash

| Invocación |
| :--- |
| `{"method":"eth_getBlockByHash","params":[blockHash, returnFullTransactionObjects]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| blockHash | `Hash` |  |
| returnFullTransactionObjects | `Boolean` |  |

| Tipo de retorno | Descripción |
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

| Nombre de los campos | Tipo |
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
| Transactions | `Array` |
| TransactionsRoot | `Hash` |
| Uncles | `Array` |
{% endtab %}
{% endtabs %}

[ingrese a CLI eth.getBlockByHash](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getblockbyhash)

## eth\_getBlockByNumber

Recupera un bloque por número

| Invocación |
| :--- |
| `{"method":"eth_getBlockByNumber","params":[blockParameter, returnFullTransactionObjects]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| blockParameter | `BlockParameter object` |  |
| returnFullTransactionObjects | `Boolean` |  |

| Tipo de retorno | Descripción |
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

| Nombre de los campos | Tipo |
| :--- | :--- |
| Tipo | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

* `Quantity` o  `String` \(latest, earliest, pending\)

`BlockForRpc`

| Nombre de los campos | Tipo |
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
| Transactions | `Array` |
| TransactionsRoot | `Hash` |
| Uncles | `Array` |
{% endtab %}
{% endtabs %}

[ingrese a CLI eth.getBlockByNumber](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getblockbynumber)

## eth\_getBlockTransactionCountByHash

Retorna el número de transacciones en el bloque hash

| Invocación |
| :--- |
| `{"method":"eth_getBlockTransactionCountByHash","params":[blockHash]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| blockHash | `Hash` |  |

| Tipo de retorno | Descripción |
| :--- | :--- |
| `Quantity` |  |

{% tabs %}
{% tab title="Example request of eth\_getBlockTransactionCountByHash" %}
```text
curl --data '{"method":"eth_getBlockTransactionCountByHash","params":[blockHash],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[ingrese a CLI eth.getBlockTransactionCountByHash](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getblocktransactioncountbyhash)

## eth\_getBlockTransactionCountByNumber

Retorna el número de transacciones en el bloque por número de bloque

| Invocación |
| :--- |
| `{"method":"eth_getBlockTransactionCountByNumber","params":[blockParameter]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| blockParameter | `BlockParameter object` |  |

| Tipo de retorno | Descripción |
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

| Nombre de los campos | Tipo |
| :--- | :--- |
| Tipo | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

* `Quantity` o  `String` \(latest, earliest, pending\)
{% endtab %}
{% endtabs %}

[ingrese a CLI eth.getBlockTransactionCountByNumber](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getblocktransactioncountbynumber)

## eth\_getCode

Retorna el código de cuenta en la dirección y el bloque dados

| Invocación |
| :--- |
| `{"method":"eth_getCode","params":[address, blockParameter]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| address | `Address` |  |
| blockParameter | `BlockParameter object` |  |

| Tipo de retorno | Descripción |
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

| Nombre de los campos | Tipo |
| :--- | :--- |
| Tipo | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

* `Quantity` o  `String` \(latest, earliest, pending\)
{% endtab %}
{% endtabs %}

[ingrese a CLI eth.getCode](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getcode)

## eth\_getFilterChanges

Lee cambios de filtro

| Invocación |
| :--- |
| `{"method":"eth_getFilterChanges","params":[filterId]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| filterId | `Quantity` |  |

| Tipo de retorno | Descripción |
| :--- | :--- |
| `Array` |  |

{% tabs %}
{% tab title="Example request of eth\_getFilterChanges" %}
```text
curl --data '{"method":"eth_getFilterChanges","params":[filterId],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[ingrese a CLI eth.getFilterChanges](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getfilterchanges)

## eth\_getFilterLogs

Lee cambios de filtro

| Invocación |
| :--- |
| `{"method":"eth_getFilterLogs","params":[filterId]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| filterId | `Quantity` |  |

| Tipo de retorno | Descripción |
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

Lee registros

| Invocación |
| :--- |
| `{"method":"eth_getLogs","params":[filter]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| filter | `Filter object` |  |

| Tipo de retorno | Descripción |
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

| Nombre de los campos | Tipo |
| :--- | :--- |
| FromBlock | `BlockParameter object` |
| ToBlock | `BlockParameter object` |
| Address | `Object` |
| Topics | `Array` |

`BlockParameter`

| Nombre de los campos | Tipo |
| :--- | :--- |
| Tipo | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |
{% endtab %}
{% endtabs %}

[ingrese a CLI eth.getLogs](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getlogs)

## eth\_getProof

[https://github.com/ethereum/EIPs/issues/1186](https://github.com/ethereum/EIPs/issues/1186)

| Invocación |
| :--- |
| `{"method":"eth_getProof","params":[accountAddress, hashRate, blockParameter]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| accountAddress | `Address` |  |
| hashRate | `Data` |  |
| blockParameter | `BlockParameter object` |  |

| Tipo de retorno | Descripción |
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

| Nombre de los campos | Tipo |
| :--- | :--- |
| Tipo | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

* `Quantity` o  `String` \(latest, earliest, pending\)

`AccountProof`

| Nombre de los campos | Tipo |
| :--- | :--- |
| Address | `Address` |
| Proof | `Data` |
| Balance | `Quantity` |
| CodeHash | `Hash` |
| Nonce | `Quantity` |
| StorageRoot | `Hash` |
| StorageProofs | `StorageProof[] object` |

`StorageProof[]`

| Nombre de los campos | Tipo |
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

[ingrese a CLI eth.getProof](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getproof)

## eth\_getStorageAt

Retorna los datos de almacenamiento en la dirección. storage\_index

| Invocación |
| :--- |
| `{"method":"eth_getStorageAt","params":[address, positionIndex, blockParameter]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| address | `Address` |  |
| positionIndex | `Quantity` |  |
| blockParameter | `BlockParameter object` |  |

| Tipo de retorno | Descripción |
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

| Nombre de los campos | Tipo |
| :--- | :--- |
| Tipo | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

* `Quantity` o  `String` \(latest, earliest, pending\)
{% endtab %}
{% endtabs %}

[ingrese a CLI eth.getStorageAt](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getstorageat)

## eth\_getTransactionByBlockHashAndIndex

Retorna una transacción por bloque hash e índice

| Invocación |
| :--- |
| `{"method":"eth_getTransactionByBlockHashAndIndex","params":[blockHash, positionIndex]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| blockHash | `Hash` |  |
| positionIndex | `Quantity` |  |

| Tipo de retorno | Descripción |
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

| Nombre de los campos | Tipo |
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
| Data | `Data` |
| Input | `Data` |
| Tipo | `TxType object` |
| AccessList | `AccessListItemForRpc[] object` |
| V | `Quantity` |
| S | `Quantity` |
| R | `Quantity` |

`TxType`

* [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type

`AccessListItemForRpc[]`

| Nombre de los campos | Tipo |
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

## eth\_getTransactionByBlockNumberAndIndex

Retorna una transacción por número de bloque e índice

| Invocación |
| :--- |
| `{"method":"eth_getTransactionByBlockNumberAndIndex","params":[blockParameter, positionIndex]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| blockParameter | `BlockParameter object` |  |
| positionIndex | `Quantity` |  |

| Tipo de retorno | Descripción |
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

| Nombre de los campos | Tipo |
| :--- | :--- |
| Tipo | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

* `Quantity` o  `String` \(latest, earliest, pending\)

`TransactionForRpc`

| Nombre de los campos | Tipo |
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
| Data | `Data` |
| Input | `Data` |
| Tipo | `TxType object` |
| AccessList | `AccessListItemForRpc[] object` |
| V | `Quantity` |
| S | `Quantity` |
| R | `Quantity` |

`TxType`

* [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type

`AccessListItemForRpc[]`

| Nombre de los campos | Tipo |
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

[ingrese a CLI eth.getTransactionByBlockNumberAndIndex](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-gettransactionbyblocknumberandindex)

## eth\_getTransactionByHash

Recupera una transacción por hash

| Invocación |
| :--- |
| `{"method":"eth_getTransactionByHash","params":[transactionHash]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| transactionHash | `Hash` |  |

| Tipo de retorno | Descripción |
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

| Nombre de los campos | Tipo |
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
| Data | `Data` |
| Input | `Data` |
| Tipo | `TxType object` |
| AccessList | `AccessListItemForRpc[] object` |
| V | `Quantity` |
| S | `Quantity` |
| R | `Quantity` |

`TxType`

* [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type

`AccessListItemForRpc[]`

| Nombre de los campos | Tipo |
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

[ingrese a CLI eth.getTransactionByHash](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-gettransactionbyhash)

## eth\_getTransactionCount

Retorna la cuenta nonce \(número de transacciones de la cuenta desde el génesis\) en el número de bloque dado

| Invocación |
| :--- |
| `{"method":"eth_getTransactionCount","params":[address, blockParameter]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| address | `Address` |  |
| blockParameter | `BlockParameter object` |  |

| Tipo de retorno | Descripción |
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

| Nombre de los campos | Tipo |
| :--- | :--- |
| Tipo | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

* `Quantity` o  `String` \(latest, earliest, pending\)
{% endtab %}
{% endtabs %}

[ingrese a CLI eth.getTransactionCount](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-gettransactioncount)

## eth\_getTransactionReceipt

Retorna un recibo de transacción por tx hash

| Invocación |
| :--- |
| `{"method":"eth_getTransactionReceipt","params":[txHashData]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| txHashData | `Hash` |  |

| Tipo de retorno | Descripción |
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

| Nombre de los campos | Tipo |
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
| Tipo | `TxType object` |

`LogEntryForRpc[]`

| Nombre de los campos | Tipo |
| :--- | :--- |
| Length | `Quantity` |
| LongLength | `Quantity` |
| Rank | `Quantity` |
| SyncRoot | `Object` |
| IsReadOnly | `Boolean` |
| IsFixedSize | `Boolean` |
| IsSynchronized | `Boolean` |

`TxType`

* [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type
{% endtab %}
{% endtabs %}

[ingrese a CLI eth.getTransactionReceipt](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-gettransactionreceipt)

## eth\_getUncleByBlockHashAndIndex

Recupera un encabezado de bloque de tío por hash de bloque e índice de tío

| Invocación |
| :--- |
| `{"method":"eth_getUncleByBlockHashAndIndex","params":[blockHashData, positionIndex]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| blockHashData | `Hash` |  |
| positionIndex | `Quantity` |  |

| Tipo de retorno | Descripción |
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

| Nombre de los campos | Tipo |
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
| Transactions | `Array` |
| TransactionsRoot | `Hash` |
| Uncles | `Array` |
{% endtab %}
{% endtabs %}

[ingrese a CLI eth.getUncleByBlockHashAndIndex](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getunclebyblockhashandindex)

## eth\_getUncleByBlockNumberAndIndex

Recupera el header de bloque de tío por número de bloque e índice de tío

| Invocación |
| :--- |
| `{"method":"eth_getUncleByBlockNumberAndIndex","params":[blockParameter, positionIndex]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| blockParameter | `BlockParameter object` |  |
| positionIndex | `Quantity` |  |

| Tipo de retorno | Descripción |
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

| Nombre de los campos | Tipo |
| :--- | :--- |
| Tipo | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

* `Quantity` o  `String` \(latest, earliest, pending\)

`BlockForRpc`

| Nombre de los campos | Tipo |
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
| Transactions | `Array` |
| TransactionsRoot | `Hash` |
| Uncles | `Array` |
{% endtab %}
{% endtabs %}

[ingrese a CLI eth.getUncleByBlockNumberAndIndex](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getunclebyblocknumberandindex)

## eth\_getUncleCountByBlockHash

Retorna el número de tíos en el bloque por hash de bloque

| Invocación |
| :--- |
| `{"method":"eth_getUncleCountByBlockHash","params":[blockHash]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| blockHash | `Hash` |  |

| Tipo de retorno | Descripción |
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

Retorna el número de tíos en el bloque por número de bloque

| Invocación |
| :--- |
| `{"method":"eth_getUncleCountByBlockNumber","params":[blockParameter]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| blockParameter | `BlockParameter object` |  |

| Tipo de retorno | Descripción |
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

| Nombre de los campos | Tipo |
| :--- | :--- |
| Tipo | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |

`BlockParameterType`

* `Quantity` o  `String` \(latest, earliest, pending\)
{% endtab %}
{% endtabs %}

[ingrese a CLI eth.getUncleCountByBlockNumber](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-getunclecountbyblocknumber)

## eth\_newBlockFilter

Crea un filtro de actualización

| Invocación |
| :--- |
| `{"method":"eth_newBlockFilter","params":[]}` |

| este método no tiene parametros |
| :--- |


| Tipo de retorno | Descripción |
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

Crea un filtro de actualización

| Invocación |
| :--- |
| `{"method":"eth_newFilter","params":[filter]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| filter | `Filter object` |  |

| Tipo de retorno | Descripción |
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

| Nombre de los campos | Tipo |
| :--- | :--- |
| FromBlock | `BlockParameter object` |
| ToBlock | `BlockParameter object` |
| Address | `Object` |
| Topics | `Array` |

`BlockParameter`

| Nombre de los campos | Tipo |
| :--- | :--- |
| Tipo | `BlockParameterType object` |
| BlockNumber | `Quantity` |
| BlockHash | `Hash` |
| RequireCanonical | `Boolean` |
{% endtab %}
{% endtabs %}

## eth\_newPendingTransactionFilter

Crea un filtro de actualización

| Invocación |
| :--- |
| `{"method":"eth_newPendingTransactionFilter","params":[]}` |

| este método no tiene parametros |
| :--- |


| Tipo de retorno | Descripción |
| :--- | :--- |
| `Quantity` |  |

{% tabs %}
{% tab title="Example request of eth\_newPendingTransactionFilter" %}
```text
curl --data '{"method":"eth_newPendingTransactionFilter","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[ingrese a CLI eth.newPendingTransactionFilter](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-newpendingtransactionfilter)

## eth\_pendingTransactions

Retorna la lista de transacciones pendientes

| Invocación |
| :--- |
| `{"method":"eth_pendingTransactions","params":[]}` |

| este método no tiene parametros |
| :--- |


| Tipo de retorno | Descripción |
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

| Nombre de los campos | Tipo |
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
| Data | `Data` |
| Input | `Data` |
| Tipo | `TxType object` |
| AccessList | `AccessListItemForRpc[] object` |
| V | `Quantity` |
| S | `Quantity` |
| R | `Quantity` |

`TxType`

* [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type

`AccessListItemForRpc[]`

| Nombre de los campos | Tipo |
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

[ingrese a CLI eth.pendingTransactions](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-pendingtransactions)

## eth\_protocolVersion

Retorna la versión del protocolo ETH

| Invocación |
| :--- |
| `{"method":"eth_protocolVersion","params":[]}` |

| este método no tiene parametros |
| :--- |


| Tipo de retorno | Descripción |
| :--- | :--- |
| `String` |  |

{% tabs %}
{% tab title="Example request of eth\_protocolVersion" %}
```text
curl --data '{"method":"eth_protocolVersion","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[ingrese a CLI eth.protocolVersion](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-protocolversion)

## eth\_sendRawTransaction

Envíe una transacción sin procesar al tx pool y al broadcasting

| Invocación |
| :--- |
| `{"method":"eth_sendRawTransaction","params":[transaction]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| transaction | `Data` |  |

| Tipo de retorno | Descripción |
| :--- | :--- |
| `Hash` |  |

{% tabs %}
{% tab title="Example request of eth\_sendRawTransaction" %}
```text
curl --data '{"method":"eth_sendRawTransaction","params":[transaction],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[ingrese a CLI eth.sendRawTransaction](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-sendrawtransaction)

## eth\_sendTransaction

Envíe una transacción al tx pool y al broadcasting

| Invocación |
| :--- |
| `{"method":"eth_sendTransaction","params":[rpcTx]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| rpcTx | `TransactionForRpc object` |  |

| Tipo de retorno | Descripción |
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

| Nombre de los campos | Tipo |
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
| Data | `Data` |
| Input | `Data` |
| Tipo | `TxType object` |
| AccessList | `AccessListItemForRpc[] object` |
| V | `Quantity` |
| S | `Quantity` |
| R | `Quantity` |

`TxType`

* [EIP2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type

`AccessListItemForRpc[]`

| Nombre de los campos | Tipo |
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

[ingrese a CLI eth.sendTransaction](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-sendtransaction)

## eth\_syncing

Retorna el estado de sincronización

| Invocación |
| :--- |
| `{"method":"eth_syncing","params":[]}` |

| este método no tiene parametros |
| :--- |


| Tipo de retorno | Descripción |
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

| Nombre de los campos | Tipo |
| :--- | :--- |
| IsSyncing | `Boolean` |
| StartingBlock | `Quantity` |
| CurrentBlock | `Quantity` |
| HighestBlock | `Quantity` |
{% endtab %}
{% endtabs %}

[ingrese a CLI eth.syncing](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/eth#eth-syncing)

## eth\_uninstallFilter

Crea un filtro de actualización

| Invocación |
| :--- |
| `{"method":"eth_uninstallFilter","params":[filterId]}` |

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| filterId | `Quantity` |  |

| Tipo de retorno | Descripción |
| :--- | :--- |
| `Boolean` |  |

{% tabs %}
{% tab title="Example request of eth\_uninstallFilter" %}
```text
curl --data '{"method":"eth_uninstallFilter","params":[filterId],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

