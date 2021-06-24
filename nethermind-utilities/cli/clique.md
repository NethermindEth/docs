# Clique module

## clique.discard

This method drops a currently running proposal. The signer will not cast further votes \(either for or against\) the address.

| Invocation |
| :--- |
| `clique.discard(signer)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| signer | `Address` |  |

| Returned type | Description |
| :--- | :--- |
| `Boolean` |  |

{% tabs %}
{% tab title="Example request of clique.discard" %}
```yaml
clique.discard(signer)
```
{% endtab %}
{% endtabs %}

[See also JSON RPC clique\_discard](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/clique#clique_discard)

## clique.getBlockSigner

Retrieves the signer of the block with the given hash. Returns error of a block with the given hash does not exist.

| Invocation |
| :--- |
| `clique.getBlockSigner(hash)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| hash | `Hash` |  |

| Returned type | Description |
| :--- | :--- |
| `Address` |  |

{% tabs %}
{% tab title="Example request of clique.getBlockSigner" %}
```yaml
clique.getBlockSigner(hash)
```
{% endtab %}
{% endtabs %}

[See also JSON RPC clique\_getBlockSigner](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/clique#clique_getblocksigner)

## clique.getSigners

Retrieves the list of authorized signers.

| Invocation |
| :--- |
| `clique.getSigners()` |

| This method doesn't have parameters. |
| :--- |


| Returned type | Description |
| :--- | :--- |
| `Address` |  |

{% tabs %}
{% tab title="Example request of clique.getSigners" %}
```yaml
clique.getSigners()
```
{% endtab %}
{% endtabs %}

[See also JSON RPC clique\_getSigners](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/clique#clique_getsigners)

## clique.getSignersAnnotated

Retrieves the list of authorized signers but with signer names instead of addresses

| Invocation |
| :--- |
| `clique.getSignersAnnotated()` |

| This method doesn't have parameters. |
| :--- |


| Returned type | Description |
| :--- | :--- |
| `String` |  |

{% tabs %}
{% tab title="Example request of clique.getSignersAnnotated" %}
```yaml
clique.getSignersAnnotated()
```
{% endtab %}
{% endtabs %}

[See also JSON RPC clique\_getSignersAnnotated](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/clique#clique_getsignersannotated)

## clique.getSignersAtHash

Retrieves the list of authorized signers at the specified block by hash.

| Invocation |
| :--- |
| `clique.getSignersAtHash(hash)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| hash | `Hash` |  |

| Returned type | Description |
| :--- | :--- |
| `Address` |  |

{% tabs %}
{% tab title="Example request of clique.getSignersAtHash" %}
```yaml
clique.getSignersAtHash(hash)
```
{% endtab %}
{% endtabs %}

[See also JSON RPC clique\_getSignersAtHash](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/clique#clique_getsignersathash)

## clique.getSignersAtHashAnnotated

Retrieves the list of authorized signers at the specified block by hash but with signer names instead of addresses

| Invocation |
| :--- |
| `clique.getSignersAtHashAnnotated(hash)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| hash | `Hash` |  |

| Returned type | Description |
| :--- | :--- |
| `String` |  |

{% tabs %}
{% tab title="Example request of clique.getSignersAtHashAnnotated" %}
```yaml
clique.getSignersAtHashAnnotated(hash)
```
{% endtab %}
{% endtabs %}

[See also JSON RPC clique\_getSignersAtHashAnnotated](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/clique#clique_getsignersathashannotated)

## clique.getSignersAtNumber

Retrieves the list of authorized signers at the specified block by block number.

| Invocation |
| :--- |
| `clique.getSignersAtNumber(number)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| number | `Quantity` |  |

| Returned type | Description |
| :--- | :--- |
| `Address` |  |

{% tabs %}
{% tab title="Example request of clique.getSignersAtNumber" %}
```yaml
clique.getSignersAtNumber(number)
```
{% endtab %}
{% endtabs %}

[See also JSON RPC clique\_getSignersAtNumber](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/clique#clique_getsignersatnumber)

## clique.getSnapshot

Retrieves a snapshot of all clique state at a given block.

| Invocation |
| :--- |
| `clique.getSnapshot()` |

| This method doesn't have parameters. |
| :--- |


| Returned type | Description |
| :--- | :--- |
| `Snapshot object` |  |

{% tabs %}
{% tab title="Example request of clique.getSnapshot" %}
```yaml
clique.getSnapshot()
```
{% endtab %}

{% tab title="Objects in clique\_getSnapshot" %}
`Snapshot`

| Field name | Type |
| :--- | :--- |
| Number | `Quantity` |
| Hash | `Hash` |
| Signers | `Array` |
| SignerLimit | `Quantity` |
{% endtab %}
{% endtabs %}

[See also JSON RPC clique\_getSnapshot](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/clique#clique_getsnapshot)

## clique.getSnapshotAtHash

Retrieves the state snapshot at a given block.

| Invocation |
| :--- |
| `clique.getSnapshotAtHash(hash)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| hash | `Hash` |  |

| Returned type | Description |
| :--- | :--- |
| `Snapshot object` |  |

{% tabs %}
{% tab title="Example request of clique.getSnapshotAtHash" %}
```yaml
clique.getSnapshotAtHash(hash)
```
{% endtab %}

{% tab title="Objects in clique\_getSnapshotAtHash" %}
`Snapshot`

| Field name | Type |
| :--- | :--- |
| Number | `Quantity` |
| Hash | `Hash` |
| Signers | `Array` |
| SignerLimit | `Quantity` |
{% endtab %}
{% endtabs %}

[See also JSON RPC clique\_getSnapshotAtHash](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/clique#clique_getsnapshotathash)

## clique.produceBlock

Forces Clique block producer to produce a new block

| Invocation |
| :--- |
| `clique.produceBlock(parentHash)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| parentHash | `Hash` |  |

| Returned type | Description |
| :--- | :--- |
| `Boolean` |  |

{% tabs %}
{% tab title="Example request of clique.produceBlock" %}
```yaml
clique.produceBlock(parentHash)
```
{% endtab %}
{% endtabs %}

[See also JSON RPC clique\_produceBlock](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/clique#clique_produceblock)

## clique.propose

Adds a new authorization proposal that the signer will attempt to push through. If the `vote` parameter is true, the local signer votes for the given address to be included in the set of authorized signers. With `vote` set to false, the signer is against the address.

| Invocation |
| :--- |
| `clique.propose(signer, vote)` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| signer | `Address` |  |
| vote | `Boolean` |  |

| Returned type | Description |
| :--- | :--- |
| `Boolean` |  |

{% tabs %}
{% tab title="Example request of clique.propose" %}
```yaml
clique.propose(signer, vote)
```
{% endtab %}
{% endtabs %}

[See also JSON RPC clique\_propose](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/clique#clique_propose)

