# 如何设置Nethermind仅基于Clique的链

## 先决条件

* Linux bash shell
* Docker-compose
* Docker
* jq

```bash
sudo apt-get install -y docker-compose docker.io jq
```

## 设置

在此设置中，我们创建一个由3个运行Clique共识算法的Nethermind节点组成的专用网络。

* 创建一个单独的目录，我们将在其中存储所有文件

```bash
mkdir private-networking
cd private-networking
```

* 为每个节点和起源创建文件夹

```bash
mkdir node_1 node_2 node_3 genesis
```

* 下载带有链式引擎的 chainspec 文件并放在 genesis 文件夹中 \(我们将在此示例中使用goerli chainspec\)

```bash
wget https://raw.githubusercontent.com/NethermindEth/nethermind/09389fc28b37605acc5eaed764d3e973969fe319/src/Nethermind/Chains/goerli.json
cp goerli.json genesis/goerli.json
```

* 在每个节点文件夹中创建子文件夹

```bash
mkdir node_1/configs node_1/staticNodes node_2/configs node_2/staticNodes node_3/configs node_3/staticNodes
```

* 创建一个 `static-nodes.json` 文件，并放置在 `node_1/staticNodes`  子文件夹中 \( 也对node\_2 和 node\_3 进行此操作\)

```bash
cat <<EOF > node_1/staticNodes/static-nodes.json
[

]
EOF
```

* 创建 `config.cfg` 文件，并放置在 `node_1/configs` 子文件夹中 \( 也对node\_2和node\_3 进行此操作\)

```bash
cat <<EOF > node_1/configs/config.cfg
{
    "Init": {
        "WebSocketsEnabled": false,
        "StoreReceipts" : true,
        "EnableUnsecuredDevWallet": true,
        "IsMining": true,
        "ChainSpecPath": "/config/genesis/goerli.json",
        "BaseDbPath": "nethermind_db/clique",
        "LogFileName": "clique.logs.txt",
        "StaticNodesPath": "Data/static-nodes.json"
    },
    "Network": {
        "DiscoveryPort": 30300,
        "P2PPort": 30300,
        "LocalIp": "10.5.0.2",
        "ExternalIp": "10.5.0.2"
    },
    "JsonRpc": {
        "Enabled": true,
        "Host": "10.5.0.2",
        "Port": 8545
    },
    "KeyStoreConfig": {
        "TestNodeKey": "8687A55019CCA647F6C063F530D47E9A90725D62D853F4B973E589DB24CA9305"
    }
}
EOF
```

对于每个节点，需要更改配置中的以下项目：

* `TestNodeKey` 应该是64个字符长的字母数字字符串。举例，可以使用`pwgen`工具生成。
* `LocalIp`，`ExternalIp` 和`Host` 应具有相同的值，并针对每个节点递增，例如 10.5.0.3, 10.5.0.4 等。

![](https://nethermind.readthedocs.io/en/latest/_images/configs.png)

* 复制docker-compose文件并放置在工作目录中

```yaml
version: "3.5"
services:

    node_1:
        image: nethermind/nethermind:alpine
        command: --config config
        volumes:
            - ./genesis:/config/genesis
            - ./node_1/configs/config.cfg:/nethermind/configs/config.cfg
            - ./node_1/staticNodes/static-nodes.json:/nethermind/Data/static-nodes.json
            - ./node_1/db/clique:/nethermind/nethermind_db/clique
            - ./node_1/keystore:/nethermind/keystore
        ports:
            - 0.0.0.0:8547:8545
        networks:
            vpcbr:
                ipv4_address: 10.5.0.2

    node_2:
        image: nethermind/nethermind:alpine
        command: --config config
        volumes:
            - ./genesis:/config/genesis
            - ./node_2/configs/config.cfg:/nethermind/configs/config.cfg
            - ./node_2/staticNodes/static-nodes.json:/nethermind/Data/static-nodes.json
            - ./node_2/db/clique:/nethermind/nethermind_db/clique
            - ./node_2/keystore:/nethermind/keystore
        ports:
            - 0.0.0.0:8548:8545
        networks:
            vpcbr:
                ipv4_address: 10.5.0.3

    node_3:
        image: nethermind/nethermind:alpine
        command: --config config
        volumes:
            - ./genesis:/config/genesis
            - ./node_3/configs/config.cfg:/nethermind/configs/config.cfg
            - ./node_3/staticNodes/static-nodes.json:/nethermind/Data/static-nodes.json
            - ./node_3/db/clique:/nethermind/nethermind_db/clique
            - ./node_3/keystore:/nethermind/keystore
        ports:
            - 0.0.0.0:8549:8545
        networks:
            vpcbr:
                ipv4_address: 10.5.0.4

networks:
    vpcbr:
        driver: bridge
        ipam:
            config:
                - subnet: 10.5.0.0/16
```

* 分别运行每个节点，以便我们能够为每个节点复制`Enode`和 `Node address` ，我们稍后就会使用。

```bash
docker-compose run node_1
```

当Nethermind初始化完成 `Ctrl +C`时停止节点。`This node` 和`Node address` \(无0x前缀\) 值复制到文本文件中。继续执行node\_2和node\_3。

![](https://nethermind.readthedocs.io/en/latest/_images/initialization.png)

{% hint style="info" %}
You can use `Nethermind.Cli` to fetch these values from nodes by executing the following.  
`Nethermind.Cli` can be found in packages on [Github Releases](https://github.com/NethermindEth/nethermind/releases) or [Download Page](http://downloads.nethermind.io/).
{% endhint %}

```bash
node.switch("http://localhost:8547")
node.enode
node.address
```

* 该文件应该跟以下内容相同：

```text
SIGNER_1="b5bc4d9e63eb1cb16aeeb0fd08e8344283b45b0d"
STATIC_NODE_1="enode://2281549869465d98e90cebc45e1d6834a01465a990add7bcf07a49287e7e66b50ca27f9c70a46190cef7ad746dd5d5b6b9dfee0c9954104c8e9bd0d42758ec58@10.5.0.2:30300"
SIGNER_2="c4e3a14d33f765faaca31672bd90d0c325bfa0cf"
STATIC_NODE_2="enode://37878ec16a5ed87c9c80b4648e5428f5c768eddd79483be118319c49d11c4e535dac328b5216696cefe0792b7b64adc4de3aeb377550651e982590e62e5a500e@10.5.0.3:30300"
SIGNER_3="0076873eb11c627057834fdbdc7b391a33eb9f81"
STATIC_NODE_3="enode://6067f06d84c207e6233dacf1f3ef961bd7231f71d5425cbaf843cf19cfd5f7e13b024d234e4e5f6175bdb37c0bbccd14488b481b2280efb66d0631a20ae13ea3@10.5.0.4:30300"
```

* 以上变量复制粘贴到终端中，以及创建`EXTRA_VANITY`和`EXTRA_SEAL`变量

```bash
EXTRA_VANITY="0x22466c6578692069732061207468696e6722202d204166726900000000000000"
EXTRA_SEAL="0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
```

* 根据 [https://eips.ethereum.org/EIPS/eip-225](https://eips.ethereum.org/EIPS/eip-225) 创建`EXTRA_DATA`变量

```bash
EXTRA_DATA=${EXTRA_VANITY}${SIGNER_1}${SIGNER_2}${SIGNER_3}${EXTRA_SEAL}
```

![](https://nethermind.readthedocs.io/en/latest/_images/extraData.png)

* 在`goerli.json` 链规范文件中，在`genesis` 字段中修改`extraData` 属性

此操作可以手动执行，或使用以下命令

```bash
cat goerli.json | jq '.genesis.extraData = '\"$EXTRA_DATA\"'' > genesis/goerli.json
```

* 对于每个节点，通过向其附加`Enodes`，修改先前创建的空`static-nodes.json` 文件

```bash
cat <<EOF > node_1/staticNodes/static-nodes.json
[
    "$STATIC_NODE_1",
    "$STATIC_NODE_2",
    "$STATIC_NODE_3"
]
EOF
```

![](https://nethermind.readthedocs.io/en/latest/_images/staticNodes.png)

* 删除每个节点的数据库

```bash
sudo rm -rf node_1/db/clique node_2/db/clique node_3/db/clique
```

* 最终运行docker-compose文件

```bash
docker-compose up
```

在Clique共识算法中应该能看到专用网络的工作和节点密封块 🎉

![](https://nethermind.readthedocs.io/en/latest/_images/finalization.png)

