# Clique module

## clique\_discard

删除正在运行的提案。签名者不再继续投票（赞成或反对）指定地址。

| Invocation                                      |
| ----------------------------------------------- |
| `{"method":"clique_discard","params":[signer]}` |

| 参数     | Type      | 描述 |
| ------ | --------- | -- |
| signer | `Address` |    |

| 返回值类型     | 描述 |
| --------- | -- |
| `Boolean` |    |

{% tabs %}
{% tab title="Example request of clique_discard" %}
```
curl --data '{"method":"clique_discard","params":[signer],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[参见 CLI clique.discard](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/clique#clique-discard)

## clique\_getBlockSigner

Retrieves the signer of the block with the given hash. Returns error of a block with the given hash does not exist.

| Invocation                                           |
| ---------------------------------------------------- |
| `{"method":"clique_getBlockSigner","params":[hash]}` |

| 参数   | Type   | 描述 |
| ---- | ------ | -- |
| hash | `Hash` |    |

| 返回值类型     | 描述 |
| --------- | -- |
| `Address` |    |

{% tabs %}
{% tab title="Example request of clique_getBlockSigner" %}
```
curl --data '{"method":"clique_getBlockSigner","params":[hash],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[参见 CLI clique.getBlockSigner](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/clique#clique-getblocksigner)

## clique\_getSigners

检索授权签名者列表。

| Invocation                                   |
| -------------------------------------------- |
| `{"method":"clique_getSigners","params":[]}` |

| This method doesn't have parameters. |
| ------------------------------------ |

| 返回值类型     | 描述 |
| --------- | -- |
| `Address` |    |

{% tabs %}
{% tab title="Example request of clique_getSigners" %}
```
curl --data '{"method":"clique_getSigners","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[参见 CLI clique.getSigners](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/clique#clique-getsigners)

## clique\_getSignersAnnotated

Retrieves the list of authorized signers but with signer names instead of addresses

| Invocation                                            |
| ----------------------------------------------------- |
| `{"method":"clique_getSignersAnnotated","params":[]}` |

| This method doesn't have parameters. |
| ------------------------------------ |

| 返回值类型    | 描述 |
| -------- | -- |
| `String` |    |

{% tabs %}
{% tab title="Example request of clique_getSignersAnnotated" %}
```
curl --data '{"method":"clique_getSignersAnnotated","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[参见 CLI clique.getSignersAnnotated](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/clique#clique-getsignersannotated)

## clique\_getSignersAtHash

根据哈希值检索指定区块的授权签名者列表。

| Invocation                                             |
| ------------------------------------------------------ |
| `{"method":"clique_getSignersAtHash","params":[hash]}` |

| 参数   | Type   | 描述 |
| ---- | ------ | -- |
| hash | `Hash` |    |

| 返回值类型     | 描述 |
| --------- | -- |
| `Address` |    |

{% tabs %}
{% tab title="Example request of clique_getSignersAtHash" %}
```
curl --data '{"method":"clique_getSignersAtHash","params":[hash],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[参见CLI clique.getSignersAtHash](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/clique#clique-getsignersathash)

## clique\_getSignersAtHashAnnotated

Retrieves the list of authorized signers at the specified block by hash but with signer names instead of addresses

| Invocation                                                      |
| --------------------------------------------------------------- |
| `{"method":"clique_getSignersAtHashAnnotated","params":[hash]}` |

| 参数   | Type   | 描述 |
| ---- | ------ | -- |
| hash | `Hash` |    |

| 返回值类型    | 描述 |
| -------- | -- |
| `String` |    |

{% tabs %}
{% tab title="Example request of clique_getSignersAtHashAnnotated" %}
```
curl --data '{"method":"clique_getSignersAtHashAnnotated","params":[hash],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[参见 CLI clique.getSignersAtHashAnnotated](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/clique#clique-getsignersathashannotated)

## clique\_getSignersAtNumber

根据区块编号检索指定区块的授权签名者列表。

| Invocation                                                 |
| ---------------------------------------------------------- |
| `{"method":"clique_getSignersAtNumber","params":[number]}` |

| 参数     | Type       | 描述 |
| ------ | ---------- | -- |
| number | `Quantity` |    |

| 返回值类型     | 描述 |
| --------- | -- |
| `Address` |    |

{% tabs %}
{% tab title="Example request of clique_getSignersAtNumber" %}
```
curl --data '{"method":"clique_getSignersAtNumber","params":[number],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[参见 CLI clique.getSignersAtNumber](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/clique#clique-getsignersatnumber)

## clique\_getSnapshot

检索指定区块的所有 clique 状态的快照。

| Invocation                                    |
| --------------------------------------------- |
| `{"method":"clique_getSnapshot","params":[]}` |

| This method doesn't have parameters. |
| ------------------------------------ |

| 返回值类型             | 描述 |
| ----------------- | -- |
| `Snapshot object` |    |

{% tabs %}
{% tab title="Example request of clique_getSnapshot" %}
```
curl --data '{"method":"clique_getSnapshot","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
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

[See also CLI clique.getSnapshot](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/clique#clique-getsnapshot)

## clique\_getSnapshotAtHash

检索指定区块的状态快照。

| Invocation                                              |
| ------------------------------------------------------- |
| `{"method":"clique_getSnapshotAtHash","params":[hash]}` |

| 参数   | Type   | 描述 |
| ---- | ------ | -- |
| hash | `Hash` |    |

| 返回值类型             | 描述 |
| ----------------- | -- |
| `Snapshot object` |    |

{% tabs %}
{% tab title="Example request of clique_getSnapshotAtHash" %}
```
curl --data '{"method":"clique_getSnapshotAtHash","params":[hash],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
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

[参见 CLI clique.getSnapshotAtHash](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/clique#clique-getsnapshotathash)

## clique\_produceBlock

Forces Clique block producer to produce a new block

| Invocation                                               |
| -------------------------------------------------------- |
| `{"method":"clique_produceBlock","params":[parentHash]}` |

| 参数         | Type   | 描述 |
| ---------- | ------ | -- |
| parentHash | `Hash` |    |

| 返回值类型     | 描述 |
| --------- | -- |
| `Boolean` |    |

{% tabs %}
{% tab title="Example request of clique_produceBlock" %}
```
curl --data '{"method":"clique_produceBlock","params":[parentHash],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[See also CLI clique.produceBlock](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/clique#clique-produceblock)

## clique\_propose

增加一个新的签名者授权提案。如果 `vote` 参数被设置为 true，则表示该签名者投票赞成指定地址加入授权签名者列表。如果 `vote` 参数被设置为 false，则表示该签名者投了反对票。

| Invocation                                            |
| ----------------------------------------------------- |
| `{"method":"clique_propose","params":[signer, vote]}` |

| 参数     | Type      | 描述 |
| ------ | --------- | -- |
| signer | `Address` |    |
| vote   | `Boolean` |    |

| 返回值类型     | 描述 |
| --------- | -- |
| `Boolean` |    |

{% tabs %}
{% tab title="Example request of clique_propose" %}
```
curl --data '{"method":"clique_propose","params":[signer, vote],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```
{% endtab %}
{% endtabs %}

[参见 CLI clique.propose](https://docs.nethermind.io/nethermind/nethermind-utilities/cli/clique#clique-propose)
