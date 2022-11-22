# Proof module

## proof.getTransactionByHash

Esta función retorna el mismo resultado que `eth_getTransactionReceipt` y también una prueba de tx, prueba de recibo y encabezados de bloque serializados.

| Invocación                                          |
| --------------------------------------------------- |
| `proof.getTransactionByHash(txHash, includeHeader)` |

| Parámetro     | Tipo      | Descripción |
| ------------- | --------- | ----------- |
| txHash        | `Hash`    |             |
| includeHeader | `Boolean` |             |

| Tipo de retorno               | Descripción |
| ----------------------------- | ----------- |
| `TransactionWithProof object` |             |

{% tabs %}
{% tab title="Example request of proof.getTransactionByHash" %}
```yaml
proof.getTransactionByHash(txHash, includeHeader)
```
{% endtab %}

{% tab title="Objects in proof_getTransactionByHash" %}
`TransactionWithProof`

| Nombre de los campos | Tipo                       |
| -------------------- | -------------------------- |
| Transaction          | `TransactionForRpc object` |
| TxProof              | `Data`                     |
| BlockHeader          | `Data`                     |

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
{% endtab %}
{% endtabs %}

[See also JSON RPC proof\_getTransactionByHash](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/proof#proof\_gettransactionbyhash)

## proof.getTransactionReceipt

Esta función debería devolver el mismo resultado que `eth_call` y también pruebas de todas las cuentas USADAS y sus almacenamientos y encabezados de bloque serializados

| Invocación                                           |
| ---------------------------------------------------- |
| `proof.getTransactionReceipt(txHash, includeHeader)` |

| Parámetro     | Tipo      | Descripción |
| ------------- | --------- | ----------- |
| txHash        | `Hash`    |             |
| includeHeader | `Boolean` |             |

| Tipo de retorno           | Descripción |
| ------------------------- | ----------- |
| `ReceiptWithProof object` |             |

{% tabs %}
{% tab title="Example request of proof.getTransactionReceipt" %}
```yaml
proof.getTransactionReceipt(txHash, includeHeader)
```
{% endtab %}

{% tab title="Objects in proof_getTransactionReceipt" %}
`ReceiptWithProof`

| Nombre de los campos | Tipo                   |
| -------------------- | ---------------------- |
| Receipt              | `ReceiptForRpc object` |
| TxProof              | `Data`                 |
| ReceiptProof         | `Data`                 |
| BlockHeader          | `Data`                 |

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
{% endtab %}
{% endtabs %}

[See also JSON RPC proof\_getTransactionReceipt](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/proof#proof\_gettransactionreceipt)
