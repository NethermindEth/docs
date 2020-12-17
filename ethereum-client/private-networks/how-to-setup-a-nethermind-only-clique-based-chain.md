# 如何设置一条仅由 Nethermind 节点运行且基于 Clique 的链

### 必备条件

* Linux bash shell
* Docker-compose
* Docker
* jq

```bash
sudo apt-get install -y docker-compose docker.io jq
```

### 设置

在该设置中，我们将创建一个私有网络，由 3 个 Nethermind 节点组成，并且采用 Clique 共识算法。

* 创建一个单独的目录用来存储所有文件

```bash
mkdir private-networking
cd private-networking
```

* 为每个节点和创世块创建文件夹

```bash
mkdir node_1 node_2 node_3 genesis
```

* 使用 clique 引擎下载链规范文件，并将其放在创世块文件夹中（在本例中，我们使用 goerli 链规范文件）

```bash
wget https://raw.githubusercontent.com/NethermindEth/nethermind/09389fc28b37605acc5eaed764d3e973969fe319/src/Nethermind/Chains/goerli.json
cp goerli.json genesis/goerli.json
```

* 在每个节点文件夹中创建子文件夹

```bash
mkdir node_1/configs node_1/staticNodes node_2/configs node_2/staticNodes node_3/configs node_3/staticNodes
```

* 创建一个 `static-nodes.json` 文件，并将其放在 `node_1/staticNodes`  子文件夹中（并对 node\_2 和 node\_3 进行同样的操作）

```bash
cat <<EOF > node_1/staticNodes/static-nodes.json
[

]
EOF
```

* 创建 `config.cfg` 文件，并将其放在 `node_1/configs` 子文件夹中（并对 node\_2 和 node\_3 进行同样的操作）

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

对于每个节点，您都需要更改以下配置项：

* `TestNodeKey` 应该是一个由字母和数字组成的字符串，长度为 64 个字符，可以使用 `pwgen` 之类的工具生成。
* `LocalIp`、`ExternalIp` 和 `Host` 的值应该相同，而且逐节点递增，例如，10.5.0.3、10.5.0.4 并以此类推。

![](https://nethermind.readthedocs.io/en/latest/_images/configs.png)

* 复制 docker-compose 文件并将其放在工作目录中

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

* 分别运行各个节点，并为每个节点复制 `Enode` 和 `Node address`，以备后用。

```bash
docker-compose run node_1
```

当 Nethermind 初始化完成 `Ctrl +C` 时停止该节点。将 `This node` 和 `Node address`（去掉 0x 前缀）的值复制到一个文本文件中。对 node\_2 和 node\_3 进行相同的操作。

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

* 该文本文件可能如下所示：

```text
SIGNER_1="b5bc4d9e63eb1cb16aeeb0fd08e8344283b45b0d"
STATIC_NODE_1="enode://2281549869465d98e90cebc45e1d6834a01465a990add7bcf07a49287e7e66b50ca27f9c70a46190cef7ad746dd5d5b6b9dfee0c9954104c8e9bd0d42758ec58@10.5.0.2:30300"
SIGNER_2="c4e3a14d33f765faaca31672bd90d0c325bfa0cf"
STATIC_NODE_2="enode://37878ec16a5ed87c9c80b4648e5428f5c768eddd79483be118319c49d11c4e535dac328b5216696cefe0792b7b64adc4de3aeb377550651e982590e62e5a500e@10.5.0.3:30300"
SIGNER_3="0076873eb11c627057834fdbdc7b391a33eb9f81"
STATIC_NODE_3="enode://6067f06d84c207e6233dacf1f3ef961bd7231f71d5425cbaf843cf19cfd5f7e13b024d234e4e5f6175bdb37c0bbccd14488b481b2280efb66d0631a20ae13ea3@10.5.0.4:30300"
```

* 将以上变量复制粘贴到您的终端上，并创建 `EXTRA_VANITY` 和 `EXTRA_SEAL` 变量

```bash
EXTRA_VANITY="0x22466c6578692069732061207468696e6722202d204166726900000000000000"
EXTRA_SEAL="0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
```

* 根据 https://eips.ethereum.org/EIPS/eip-225 创建 `EXTRA_DATA` 变量

```bash
EXTRA_DATA=${EXTRA_VANITY}${SIGNER_1}${SIGNER_2}${SIGNER_3}${EXTRA_SEAL}
```

![](https://nethermind.readthedocs.io/en/latest/_images/extraData.png)

* 在 `goerli.json` 链规范文件中，修改 `genesis` 字段中的 `extraData` 属性

您可以手动修改，也可以使用以下命令修改。

```bash
cat goerli.json | jq '.genesis.extraData = '\"$EXTRA_DATA\"'' > genesis/goerli.json
```

* 找到之前为每个节点创建的空的 `static-nodes.json` 文件，将 `Enodes` 添加到这些文件上

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

* 最后运行 docker-compose 文件

```bash
docker-compose up
```

接下来，您将看到私有网络运行，节点根据 Clique 共识算法打包区块。🎉 

![](https://nethermind.readthedocs.io/en/latest/_images/finalization.png)

