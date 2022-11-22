# Clique module

## clique\_discard

Este método descarta una propuesta en ejecución. El firmante no emitirá más votos (ni a favor ni en contra) de la dirección.

| Invocación                                      |
| ----------------------------------------------- |
| `{"method":"clique_discard","params":[signer]}` |

| Parámetro | Tipo      | Descripción |
| --------- | --------- | ----------- |
| signer    | `Address` |             |

| Tipo de retorno | Descripción |
| --------------- | ----------- |
| `Boolean`       |             |

{% tabs %}
{% tab title="Example request of clique_discard" %}
```
curl --data '{"method":"clique_discard","params":[signer],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[ingrese a CLI clique.discard](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/clique#clique-discard)

## clique\_getBlockSigner

Retrieves the signer of the block with the given hash. Returns error of a block with the given hash does not exist.

| Invocación                                           |
| ---------------------------------------------------- |
| `{"method":"clique_getBlockSigner","params":[hash]}` |

| Parámetro | Tipo   | Descripción |
| --------- | ------ | ----------- |
| hash      | `Hash` |             |

| Tipo de retorno | Descripción |
| --------------- | ----------- |
| `Address`       |             |

{% tabs %}
{% tab title="Example request of clique_getBlockSigner" %}
```
curl --data '{"method":"clique_getBlockSigner","params":[hash],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[ingrese a CLI clique.getBlockSigner](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/clique#clique-getblocksigner)

## clique\_getSigners

Recupera la lista de firmantes autorizados.

| Invocación                                   |
| -------------------------------------------- |
| `{"method":"clique_getSigners","params":[]}` |

| este método no tiene parametros |
| ------------------------------- |

| Tipo de retorno | Descripción |
| --------------- | ----------- |
| `Address`       |             |

{% tabs %}
{% tab title="Example request of clique_getSigners" %}
```
curl --data '{"method":"clique_getSigners","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[ingrese a CLI clique.getSigners](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/clique#clique-getsigners)

## clique\_getSignersAnnotated

Retrieves the list of authorized signers but with signer names instead of addresses

| Invocación                                            |
| ----------------------------------------------------- |
| `{"method":"clique_getSignersAnnotated","params":[]}` |

| este método no tiene parametros |
| ------------------------------- |

| Tipo de retorno | Descripción |
| --------------- | ----------- |
| `String`        |             |

{% tabs %}
{% tab title="Example request of clique_getSignersAnnotated" %}
```
curl --data '{"method":"clique_getSignersAnnotated","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[ingrese a CLI clique.getSignersAnnotated](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/clique#clique-getsignersannotated)

## clique\_getSignersAtHash

Recupera la lista de firmantes autorizados en un bloque especificado por hash.

| Invocación                                             |
| ------------------------------------------------------ |
| `{"method":"clique_getSignersAtHash","params":[hash]}` |

| Parámetro | Tipo   | Descripción |
| --------- | ------ | ----------- |
| hash      | `Hash` |             |

| Tipo de retorno | Descripción |
| --------------- | ----------- |
| `Address`       |             |

{% tabs %}
{% tab title="Example request of clique_getSignersAtHash" %}
```
curl --data '{"method":"clique_getSignersAtHash","params":[hash],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[ingrese a CLI clique.getSignersAtHash](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/clique#clique-getsignersathash)

## clique\_getSignersAtHashAnnotated

Retrieves the list of authorized signers at the specified block by hash but with signer names instead of addresses

| Invocación                                                      |
| --------------------------------------------------------------- |
| `{"method":"clique_getSignersAtHashAnnotated","params":[hash]}` |

| Parámetro | Tipo   | Descripción |
| --------- | ------ | ----------- |
| hash      | `Hash` |             |

| Tipo de retorno | Descripción |
| --------------- | ----------- |
| `String`        |             |

{% tabs %}
{% tab title="Example request of clique_getSignersAtHashAnnotated" %}
```
curl --data '{"method":"clique_getSignersAtHashAnnotated","params":[hash],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[ingrese a CLI clique.getSignersAtHashAnnotated](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/clique#clique-getsignersathashannotated)

## clique\_getSignersAtNumber

Recupera la lista de firmantes autorizados en un bloque especificado por número de bloque.

| Invocación                                                 |
| ---------------------------------------------------------- |
| `{"method":"clique_getSignersAtNumber","params":[number]}` |

| Parámetro | Tipo       | Descripción |
| --------- | ---------- | ----------- |
| number    | `Quantity` |             |

| Tipo de retorno | Descripción |
| --------------- | ----------- |
| `Address`       |             |

{% tabs %}
{% tab title="Example request of clique_getSignersAtNumber" %}
```
curl --data '{"method":"clique_getSignersAtNumber","params":[number],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[ingrese a CLI clique.getSignersAtNumber](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/clique#clique-getsignersatnumber)

## clique\_getSnapshot

Recupera una instantánea de todos los estados del clique en un bloque determinado.

| Invocación                                    |
| --------------------------------------------- |
| `{"method":"clique_getSnapshot","params":[]}` |

| este método no tiene parametros |
| ------------------------------- |

| Tipo de retorno   | Descripción |
| ----------------- | ----------- |
| `Snapshot object` |             |

{% tabs %}
{% tab title="Example request of clique_getSnapshot" %}
```
curl --data '{"method":"clique_getSnapshot","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in clique_getSnapshot" %}
`Snapshot`

| Nombre de los campos | Tipo       |
| -------------------- | ---------- |
| Number               | `Quantity` |
| Hash                 | `Hash`     |
| Signers              | `Array`    |
| SignerLimit          | `Quantity` |
{% endtab %}
{% endtabs %}

[ingrese a CLI clique.getSnapshot](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/clique#clique-getsnapshot)

## clique\_getSnapshotAtHash

Recupera el estado en un bloque determinado.

| Invocación                                              |
| ------------------------------------------------------- |
| `{"method":"clique_getSnapshotAtHash","params":[hash]}` |

| Parámetro | Tipo   | Descripción |
| --------- | ------ | ----------- |
| hash      | `Hash` |             |

| Tipo de retorno   | Descripción |
| ----------------- | ----------- |
| `Snapshot object` |             |

{% tabs %}
{% tab title="Example request of clique_getSnapshotAtHash" %}
```
curl --data '{"method":"clique_getSnapshotAtHash","params":[hash],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in clique_getSnapshotAtHash" %}
`Snapshot`

| Nombre de los campos | Tipo       |
| -------------------- | ---------- |
| Number               | `Quantity` |
| Hash                 | `Hash`     |
| Signers              | `Array`    |
| SignerLimit          | `Quantity` |
{% endtab %}
{% endtabs %}

[ingrese a CLI clique.getSnapshotAtHash](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/clique#clique-getsnapshotathash)

## clique\_produceBlock

Forces Clique block producer to produce a new block

| Invocación                                               |
| -------------------------------------------------------- |
| `{"method":"clique_produceBlock","params":[parentHash]}` |

| Parámetro  | Tipo   | Descripción |
| ---------- | ------ | ----------- |
| parentHash | `Hash` |             |

| Tipo de retorno | Descripción |
| --------------- | ----------- |
| `Boolean`       |             |

{% tabs %}
{% tab title="Example request of clique_produceBlock" %}
```
curl --data '{"method":"clique_produceBlock","params":[parentHash],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[ingrese a CLI clique.produceBlock](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/clique#clique-produceblock)

## clique\_propose

Agrega una nueva propuesta de autorización que el firmante intentará aprobar. Si el parámetro `vote` es true, el firmante local vota para que la dirección dada se incluya en el conjunto de firmantes autorizados. Con `vote` configurado como false, el firmante está en contra de la dirección.

| Invocación                                            |
| ----------------------------------------------------- |
| `{"method":"clique_propose","params":[signer, vote]}` |

| Parámetro | Tipo      | Descripción |
| --------- | --------- | ----------- |
| signer    | `Address` |             |
| vote      | `Boolean` |             |

| Tipo de retorno | Descripción |
| --------------- | ----------- |
| `Boolean`       |             |

{% tabs %}
{% tab title="Example request of clique_propose" %}
```
curl --data '{"method":"clique_propose","params":[signer, vote],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[ingrese a CLI clique.propose](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/clique#clique-propose)
