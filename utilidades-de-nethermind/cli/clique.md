# Clique module

## clique.discard

Este método descarta una propuesta en ejecución. El firmante no emitirá más votos (ni a favor ni en contra) de la dirección.

| Invocación               |
| ------------------------ |
| `clique.discard(signer)` |

| Parámetro | Tipo      | Descripción |
| --------- | --------- | ----------- |
| signer    | `Address` |             |

| Tipo de retorno | Descripción |
| --------------- | ----------- |
| `Boolean`       |             |

{% tabs %}
{% tab title="Example request of clique.discard" %}
```yaml
clique.discard(signer)
```
{% endtab %}
{% endtabs %}

[See also JSON RPC clique\_discard](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/clique#clique\_discard)

## clique.getBlockSigner

Retrieves the signer of the block with the given hash. Returns error of a block with the given hash does not exist.

| Invocación                    |
| ----------------------------- |
| `clique.getBlockSigner(hash)` |

| Parámetro | Tipo   | Descripción |
| --------- | ------ | ----------- |
| hash      | `Hash` |             |

| Tipo de retorno | Descripción |
| --------------- | ----------- |
| `Address`       |             |

{% tabs %}
{% tab title="Example request of clique.getBlockSigner" %}
```yaml
clique.getBlockSigner(hash)
```
{% endtab %}
{% endtabs %}

[See also JSON RPC clique\_getBlockSigner](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/clique#clique\_getblocksigner)

## clique.getSigners

Recupera la lista de firmantes autorizados.

| Invocación            |
| --------------------- |
| `clique.getSigners()` |

| este método no tiene parametros |
| ------------------------------- |

| Tipo de retorno | Descripción |
| --------------- | ----------- |
| `Address`       |             |

{% tabs %}
{% tab title="Example request of clique.getSigners" %}
```yaml
clique.getSigners()
```
{% endtab %}
{% endtabs %}

[See also JSON RPC clique\_getSigners](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/clique#clique\_getsigners)

## clique.getSignersAnnotated

Retrieves the list of authorized signers but with signer names instead of addresses

| Invocación                     |
| ------------------------------ |
| `clique.getSignersAnnotated()` |

| este método no tiene parametros |
| ------------------------------- |

| Tipo de retorno | Descripción |
| --------------- | ----------- |
| `String`        |             |

{% tabs %}
{% tab title="Example request of clique.getSignersAnnotated" %}
```yaml
clique.getSignersAnnotated()
```
{% endtab %}
{% endtabs %}

[See also JSON RPC clique\_getSignersAnnotated](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/clique#clique\_getsignersannotated)

## clique.getSignersAtHash

Recupera la lista de firmantes autorizados en un bloque especificado por hash.

| Invocación                      |
| ------------------------------- |
| `clique.getSignersAtHash(hash)` |

| Parámetro | Tipo   | Descripción |
| --------- | ------ | ----------- |
| hash      | `Hash` |             |

| Tipo de retorno | Descripción |
| --------------- | ----------- |
| `Address`       |             |

{% tabs %}
{% tab title="Example request of clique.getSignersAtHash" %}
```yaml
clique.getSignersAtHash(hash)
```
{% endtab %}
{% endtabs %}

[See also JSON RPC clique\_getSignersAtHash](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/clique#clique\_getsignersathash)

## clique.getSignersAtHashAnnotated

Retrieves the list of authorized signers at the specified block by hash but with signer names instead of addresses

| Invocación                               |
| ---------------------------------------- |
| `clique.getSignersAtHashAnnotated(hash)` |

| Parámetro | Tipo   | Descripción |
| --------- | ------ | ----------- |
| hash      | `Hash` |             |

| Tipo de retorno | Descripción |
| --------------- | ----------- |
| `String`        |             |

{% tabs %}
{% tab title="Example request of clique.getSignersAtHashAnnotated" %}
```yaml
clique.getSignersAtHashAnnotated(hash)
```
{% endtab %}
{% endtabs %}

[See also JSON RPC clique\_getSignersAtHashAnnotated](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/clique#clique\_getsignersathashannotated)

## clique.getSignersAtNumber

Recupera la lista de firmantes autorizados en un bloque especificado por número de bloque.

| Invocación                          |
| ----------------------------------- |
| `clique.getSignersAtNumber(number)` |

| Parámetro | Tipo       | Descripción |
| --------- | ---------- | ----------- |
| number    | `Quantity` |             |

| Tipo de retorno | Descripción |
| --------------- | ----------- |
| `Address`       |             |

{% tabs %}
{% tab title="Example request of clique.getSignersAtNumber" %}
```yaml
clique.getSignersAtNumber(number)
```
{% endtab %}
{% endtabs %}

[See also JSON RPC clique\_getSignersAtNumber](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/clique#clique\_getsignersatnumber)

## clique.getSnapshot

Recupera una instantánea de todos los estados del clique en un bloque determinado.

| Invocación             |
| ---------------------- |
| `clique.getSnapshot()` |

| este método no tiene parametros |
| ------------------------------- |

| Tipo de retorno   | Descripción |
| ----------------- | ----------- |
| `Snapshot object` |             |

{% tabs %}
{% tab title="Example request of clique.getSnapshot" %}
```yaml
clique.getSnapshot()
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

[See also JSON RPC clique\_getSnapshot](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/clique#clique\_getsnapshot)

## clique.getSnapshotAtHash

Recupera el estado en un bloque determinado.

| Invocación                       |
| -------------------------------- |
| `clique.getSnapshotAtHash(hash)` |

| Parámetro | Tipo   | Descripción |
| --------- | ------ | ----------- |
| hash      | `Hash` |             |

| Tipo de retorno   | Descripción |
| ----------------- | ----------- |
| `Snapshot object` |             |

{% tabs %}
{% tab title="Example request of clique.getSnapshotAtHash" %}
```yaml
clique.getSnapshotAtHash(hash)
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

[See also JSON RPC clique\_getSnapshotAtHash](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/clique#clique\_getsnapshotathash)

## clique.produceBlock

Forces Clique block producer to produce a new block

| Invocación                        |
| --------------------------------- |
| `clique.produceBlock(parentHash)` |

| Parámetro  | Tipo   | Descripción |
| ---------- | ------ | ----------- |
| parentHash | `Hash` |             |

| Tipo de retorno | Descripción |
| --------------- | ----------- |
| `Boolean`       |             |

{% tabs %}
{% tab title="Example request of clique.produceBlock" %}
```yaml
clique.produceBlock(parentHash)
```
{% endtab %}
{% endtabs %}

[See also JSON RPC clique\_produceBlock](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/clique#clique\_produceblock)

## clique.propose

Agrega una nueva propuesta de autorización que el firmante intentará aprobar. Si el parámetro `vote` es true, el firmante local vota para que la dirección dada se incluya en el conjunto de firmantes autorizados. Con `vote` configurado como false, el firmante está en contra de la dirección.

| Invocación                     |
| ------------------------------ |
| `clique.propose(signer, vote)` |

| Parámetro | Tipo      | Descripción |
| --------- | --------- | ----------- |
| signer    | `Address` |             |
| vote      | `Boolean` |             |

| Tipo de retorno | Descripción |
| --------------- | ----------- |
| `Boolean`       |             |

{% tabs %}
{% tab title="Example request of clique.propose" %}
```yaml
clique.propose(signer, vote)
```
{% endtab %}
{% endtabs %}

[See also JSON RPC clique\_propose](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/clique#clique\_propose)
