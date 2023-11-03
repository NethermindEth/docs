# clique

## clique_discard

This method drops a currently running proposal. The signer will not cast further votes (either for or against) the address. 

| Invocation |
| :--- |
| `{"method":"clique_discard","params":[signer]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| signer | `Address` |  |

| Returned type | Description |
| :--- | :--- |
| `Boolean` |  |

{% tabs %}
{% tab title="Example request of clique_discard" %}
```
curl --data '{"method":"clique_discard","params":[signer],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[See also CLI clique.discard](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/clique#clique-discard)
## clique_getBlockSigner

Retrieves the signer of the block with the given hash. Returns error of a block with the given hash does not exist. 

| Invocation |
| :--- |
| `{"method":"clique_getBlockSigner","params":[hash]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| hash | `Hash256 object` |  |

| Returned type | Description |
| :--- | :--- |
| `Address` |  |

{% tabs %}
{% tab title="Example request of clique_getBlockSigner" %}
```
curl --data '{"method":"clique_getBlockSigner","params":[hash],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in clique_getBlockSigner" %}

`Hash256`

| Field name | Type |
| :--- | :--- |
| ValueHash256 | `ValueHash256& object` |
| Bytes | `Array` |

`ValueHash256&`

| Field name | Type |
| :--- | :--- |
{% endtab %}
{% endtabs %}

[See also CLI clique.getBlockSigner](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/clique#clique-getblocksigner)
## clique_getSigners

Retrieves the list of authorized signers. 

| Invocation |
| :--- |
| `{"method":"clique_getSigners","params":[]}` |

| This method doesn't have parameters. |
| :--- |

| Returned type | Description |
| :--- | :--- |
| `Address` |  |

{% tabs %}
{% tab title="Example request of clique_getSigners" %}
```
curl --data '{"method":"clique_getSigners","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[See also CLI clique.getSigners](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/clique#clique-getsigners)
## clique_getSignersAnnotated

Retrieves the list of authorized signers but with signer names instead of addresses 

| Invocation |
| :--- |
| `{"method":"clique_getSignersAnnotated","params":[]}` |

| This method doesn't have parameters. |
| :--- |

| Returned type | Description |
| :--- | :--- |
| `String` |  |

{% tabs %}
{% tab title="Example request of clique_getSignersAnnotated" %}
```
curl --data '{"method":"clique_getSignersAnnotated","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[See also CLI clique.getSignersAnnotated](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/clique#clique-getsignersannotated)
## clique_getSignersAtHash

Retrieves the list of authorized signers at the specified block by hash. 

| Invocation |
| :--- |
| `{"method":"clique_getSignersAtHash","params":[hash]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| hash | `Hash256 object` |  |

| Returned type | Description |
| :--- | :--- |
| `Address` |  |

{% tabs %}
{% tab title="Example request of clique_getSignersAtHash" %}
```
curl --data '{"method":"clique_getSignersAtHash","params":[hash],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in clique_getSignersAtHash" %}

`Hash256`

| Field name | Type |
| :--- | :--- |
| ValueHash256 | `ValueHash256& object` |
| Bytes | `Array` |

`ValueHash256&`

| Field name | Type |
| :--- | :--- |
{% endtab %}
{% endtabs %}

[See also CLI clique.getSignersAtHash](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/clique#clique-getsignersathash)
## clique_getSignersAtHashAnnotated

Retrieves the list of authorized signers at the specified block by hash but with signer names instead of addresses 

| Invocation |
| :--- |
| `{"method":"clique_getSignersAtHashAnnotated","params":[hash]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| hash | `Hash256 object` |  |

| Returned type | Description |
| :--- | :--- |
| `String` |  |

{% tabs %}
{% tab title="Example request of clique_getSignersAtHashAnnotated" %}
```
curl --data '{"method":"clique_getSignersAtHashAnnotated","params":[hash],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in clique_getSignersAtHashAnnotated" %}

`Hash256`

| Field name | Type |
| :--- | :--- |
| ValueHash256 | `ValueHash256& object` |
| Bytes | `Array` |

`ValueHash256&`

| Field name | Type |
| :--- | :--- |
{% endtab %}
{% endtabs %}

[See also CLI clique.getSignersAtHashAnnotated](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/clique#clique-getsignersathashannotated)
## clique_getSignersAtNumber

Retrieves the list of authorized signers at the specified block by block number. 

| Invocation |
| :--- |
| `{"method":"clique_getSignersAtNumber","params":[number]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| number | `Quantity` |  |

| Returned type | Description |
| :--- | :--- |
| `Address` |  |

{% tabs %}
{% tab title="Example request of clique_getSignersAtNumber" %}
```
curl --data '{"method":"clique_getSignersAtNumber","params":[number],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[See also CLI clique.getSignersAtNumber](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/clique#clique-getsignersatnumber)
## clique_getSnapshot

Retrieves a snapshot of all clique state at a given block. 

| Invocation |
| :--- |
| `{"method":"clique_getSnapshot","params":[]}` |

| This method doesn't have parameters. |
| :--- |

| Returned type | Description |
| :--- | :--- |
| `Snapshot object` |  |

{% tabs %}
{% tab title="Example request of clique_getSnapshot" %}
```
curl --data '{"method":"clique_getSnapshot","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in clique_getSnapshot" %}

`Snapshot`

| Field name | Type |
| :--- | :--- |
| Number | `Quantity` |
| Hash | `Hash256 object` |
| Signers | `Array` |
| SignerLimit | `Quantity` |

`Hash256`

| Field name | Type |
| :--- | :--- |
| ValueHash256 | `ValueHash256& object` |
| Bytes | `Array` |
{% endtab %}
{% endtabs %}

[See also CLI clique.getSnapshot](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/clique#clique-getsnapshot)
## clique_getSnapshotAtHash

Retrieves the state snapshot at a given block. 

| Invocation |
| :--- |
| `{"method":"clique_getSnapshotAtHash","params":[hash]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| hash | `Hash256 object` |  |

| Returned type | Description |
| :--- | :--- |
| `Snapshot object` |  |

{% tabs %}
{% tab title="Example request of clique_getSnapshotAtHash" %}
```
curl --data '{"method":"clique_getSnapshotAtHash","params":[hash],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in clique_getSnapshotAtHash" %}

`Hash256`

| Field name | Type |
| :--- | :--- |
| ValueHash256 | `ValueHash256& object` |
| Bytes | `Array` |

`ValueHash256&`

| Field name | Type |
| :--- | :--- |

`Snapshot`

| Field name | Type |
| :--- | :--- |
| Number | `Quantity` |
| Hash | `Hash256 object` |
| Signers | `Array` |
| SignerLimit | `Quantity` |
{% endtab %}
{% endtabs %}

[See also CLI clique.getSnapshotAtHash](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/clique#clique-getsnapshotathash)
## clique_produceBlock

Forces Clique block producer to produce a new block 

| Invocation |
| :--- |
| `{"method":"clique_produceBlock","params":[parentHash]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| parentHash | `Hash256 object` |  |

| Returned type | Description |
| :--- | :--- |
| `Boolean` |  |

{% tabs %}
{% tab title="Example request of clique_produceBlock" %}
```
curl --data '{"method":"clique_produceBlock","params":[parentHash],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}

{% tab title="Objects in clique_produceBlock" %}

`Hash256`

| Field name | Type |
| :--- | :--- |
| ValueHash256 | `ValueHash256& object` |
| Bytes | `Array` |

`ValueHash256&`

| Field name | Type |
| :--- | :--- |
{% endtab %}
{% endtabs %}

[See also CLI clique.produceBlock](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/clique#clique-produceblock)
## clique_propose

Adds a new authorization proposal that the signer will attempt to push through. If the `vote` parameter is true, the local signer votes for the given address to be included in the set of authorized signers. With `vote` set to false, the signer is against the address. 

| Invocation |
| :--- |
| `{"method":"clique_propose","params":[signer, vote]}` |

| Parameter | Type | Description |
| :--- | :--- | :--- |
| signer | `Address` |  |
| vote | `Boolean` |  |

| Returned type | Description |
| :--- | :--- |
| `Boolean` |  |

{% tabs %}
{% tab title="Example request of clique_propose" %}
```
curl --data '{"method":"clique_propose","params":[signer, vote],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[See also CLI clique.propose](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/clique#clique-propose)
