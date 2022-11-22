# Clique module

## clique.discard

删除正在运行的提案。签名者不再继续投票（赞成或反对）指定地址。

| Invocation               |
| ------------------------ |
| `clique.discard(signer)` |

| 参数     | Type      | 描述 |
| ------ | --------- | -- |
| signer | `Address` |    |

| 返回值类型     | 描述 |
| --------- | -- |
| `Boolean` |    |

{% tabs %}
{% tab title="Example request of clique.discard" %}
```yaml
clique.discard(signer)
```
{% endtab %}
{% endtabs %}

[参见 JSON RPC clique\_discard](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/clique#clique\_discard)

## clique.getBlockSigner

Retrieves the signer of the block with the given hash. Returns error of a block with the given hash does not exist.

| Invocation                    |
| ----------------------------- |
| `clique.getBlockSigner(hash)` |

| 参数   | Type   | 描述 |
| ---- | ------ | -- |
| hash | `Hash` |    |

| 返回值类型     | 描述 |
| --------- | -- |
| `Address` |    |

{% tabs %}
{% tab title="Example request of clique.getBlockSigner" %}
```yaml
clique.getBlockSigner(hash)
```
{% endtab %}
{% endtabs %}

[参见 JSON RPC clique\_getBlockSigner](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/clique#clique\_getblocksigner)

## clique.getSigners

检索授权签名者列表。

| Invocation            |
| --------------------- |
| `clique.getSigners()` |

| This method doesn't have parameters. |
| ------------------------------------ |

| 返回值类型     | 描述 |
| --------- | -- |
| `Address` |    |

{% tabs %}
{% tab title="Example request of clique.getSigners" %}
```yaml
clique.getSigners()
```
{% endtab %}
{% endtabs %}

[参见 JSON RPC clique\_getSigners](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/clique#clique\_getsigners)

## clique.getSignersAnnotated

Retrieves the list of authorized signers but with signer names instead of addresses

| Invocation                     |
| ------------------------------ |
| `clique.getSignersAnnotated()` |

| This method doesn't have parameters. |
| ------------------------------------ |

| 返回值类型    | 描述 |
| -------- | -- |
| `String` |    |

{% tabs %}
{% tab title="Example request of clique.getSignersAnnotated" %}
```yaml
clique.getSignersAnnotated()
```
{% endtab %}
{% endtabs %}

[参见 JSON RPC clique\_getSignersAnnotated](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/clique#clique\_getsignersannotated)

## clique.getSignersAtHash

根据哈希值检索指定区块的授权签名者列表。

| Invocation                      |
| ------------------------------- |
| `clique.getSignersAtHash(hash)` |

| 参数   | Type   | 描述 |
| ---- | ------ | -- |
| hash | `Hash` |    |

| 返回值类型     | 描述 |
| --------- | -- |
| `Address` |    |

{% tabs %}
{% tab title="Example request of clique.getSignersAtHash" %}
```yaml
clique.getSignersAtHash(hash)
```
{% endtab %}
{% endtabs %}

[参见 JSON RPC clique\_getSignersAtHash](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/clique#clique\_getsignersathash)

## clique.getSignersAtHashAnnotated

Retrieves the list of authorized signers at the specified block by hash but with signer names instead of addresses

| Invocation                               |
| ---------------------------------------- |
| `clique.getSignersAtHashAnnotated(hash)` |

| 参数   | Type   | 描述 |
| ---- | ------ | -- |
| hash | `Hash` |    |

| 返回值类型    | 描述 |
| -------- | -- |
| `String` |    |

{% tabs %}
{% tab title="Example request of clique.getSignersAtHashAnnotated" %}
```yaml
clique.getSignersAtHashAnnotated(hash)
```
{% endtab %}
{% endtabs %}

[参见 JSON RPC clique\_getSignersAtHashAnnotated](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/clique#clique\_getsignersathashannotated)

## clique.getSignersAtNumber

根据区块编号检索指定区块的授权签名者列表。

| Invocation                          |
| ----------------------------------- |
| `clique.getSignersAtNumber(number)` |

| 参数     | Type       | 描述 |
| ------ | ---------- | -- |
| number | `Quantity` |    |

| 返回值类型     | 描述 |
| --------- | -- |
| `Address` |    |

{% tabs %}
{% tab title="Example request of clique.getSignersAtNumber" %}
```yaml
clique.getSignersAtNumber(number)
```
{% endtab %}
{% endtabs %}

[参见 JSON RPC clique\_getSignersAtNumber](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/clique#clique\_getsignersatnumber)

## clique.getSnapshot

检索指定区块的所有 clique 状态的快照。

| Invocation             |
| ---------------------- |
| `clique.getSnapshot()` |

| This method doesn't have parameters. |
| ------------------------------------ |

| 返回值类型             | 描述 |
| ----------------- | -- |
| `Snapshot object` |    |

{% tabs %}
{% tab title="Example request of clique.getSnapshot" %}
```yaml
clique.getSnapshot()
```
{% endtab %}

{% tab title="Objects in clique_getSnapshot" %}
`Snapshot`

| 字段名称        | Type       |
| ----------- | ---------- |
| Number      | `Quantity` |
| Hash        | `Hash`     |
| Signers     | `Array`    |
| SignerLimit | `Quantity` |
{% endtab %}
{% endtabs %}

[参见 JSON RPC clique\_getSnapshot](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/clique#clique\_getsnapshot)

## clique.getSnapshotAtHash

检索指定区块的状态快照。

| Invocation                       |
| -------------------------------- |
| `clique.getSnapshotAtHash(hash)` |

| 参数   | Type   | 描述 |
| ---- | ------ | -- |
| hash | `Hash` |    |

| 返回值类型             | 描述 |
| ----------------- | -- |
| `Snapshot object` |    |

{% tabs %}
{% tab title="Example request of clique.getSnapshotAtHash" %}
```yaml
clique.getSnapshotAtHash(hash)
```
{% endtab %}

{% tab title="Objects in clique_getSnapshotAtHash" %}
`Snapshot`

| 字段名称        | Type       |
| ----------- | ---------- |
| Number      | `Quantity` |
| Hash        | `Hash`     |
| Signers     | `Array`    |
| SignerLimit | `Quantity` |
{% endtab %}
{% endtabs %}

[参见 JSON RPC clique\_getSnapshotAtHash](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/clique#clique\_getsnapshotathash)

## clique.produceBlock

Forces Clique block producer to produce a new block

| Invocation                        |
| --------------------------------- |
| `clique.produceBlock(parentHash)` |

| 参数         | Type   | 描述 |
| ---------- | ------ | -- |
| parentHash | `Hash` |    |

| 返回值类型     | 描述 |
| --------- | -- |
| `Boolean` |    |

{% tabs %}
{% tab title="Example request of clique.produceBlock" %}
```yaml
clique.produceBlock(parentHash)
```
{% endtab %}
{% endtabs %}

[参见 JSON RPC clique\_produceBlock](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/clique#clique\_produceblock)

## clique.propose

增加一个新的签名者授权提案。如果 `vote` 参数被设置为 true，则表示该签名者投票赞成指定地址加入授权签名者列表。如果 `vote` 参数被设置为 false，则表示该签名者投了反对票。

| Invocation                     |
| ------------------------------ |
| `clique.propose(signer, vote)` |

| 参数     | Type      | 描述 |
| ------ | --------- | -- |
| signer | `Address` |    |
| vote   | `Boolean` |    |

| 返回值类型     | 描述 |
| --------- | -- |
| `Boolean` |    |

{% tabs %}
{% tab title="Example request of clique.propose" %}
```yaml
clique.propose(signer, vote)
```
{% endtab %}
{% endtabs %}

[参见 JSON RPC clique\_propose](https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/clique#clique\_propose)
