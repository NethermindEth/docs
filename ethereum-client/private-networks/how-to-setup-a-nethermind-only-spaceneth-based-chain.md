# 如何设置仅基于Nethermind的Spaceneth链

Spaceneth专用网络设置看起来与上述Clique设置非常相似。主要差异不大，下面将进行描述

### 先决条件

* Linux bash shell
* Docker-compose
* Docker
* jq
* Nethermind.Cli

```bash
sudo apt-get install -y docker-compose docker.io jq
```

### 设置

在此设置中，我们将创建一个由3个Nethermind节点组成的专用网络，运行一个简单的测试NethDev共识算法。

* 创建一个单独的目录，我们将在其中存储所有文件

```text
mkdir private-networking
cd private-networking
```

* 为每个节点和起源创建文件夹

```text
mkdir node_1 node_2 node_3 genesis
```

* 使用自动引擎下载 [chainspec](https://raw.githubusercontent.com/NethermindEth/nethermind/master/src/Nethermind/Chains/spaceneth.json)文件并放置在``genesis''文件夹中。

```bash
wget https://raw.githubusercontent.com/NethermindEth/nethermind/master/src/Nethermind/Chains/spaceneth.json
cp spaceneth.json genesis/spaceneth.json
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
        "ChainSpecPath": "/config/genesis/spaceneth.json",
        "BaseDbPath": "nethermind_db/spaceneth",
        "LogFileName": "spaceneth.logs.txt",
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
    }
}
EOF
```

对于每个节点，需要更改配置中的以下项目：

* `LocalIp`，`ExternalIp` 和`Host` 应具有相同的值，并针对每个节点递增，例如 10.5.0.3, 10.5.0.4 等。

![](https://nethermind.readthedocs.io/en/latest/_images/configs-spaceneth.png)

* 复制 `docker-compose`文件并放置在工作目录中

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
            - ./node_1/db/spaceneth:/nethermind/nethermind_db/spaceneth
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
            - ./node_2/db/spaceneth:/nethermind/nethermind_db/spaceneth
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
            - ./node_3/db/spaceneth:/nethermind/nethermind_db/spaceneth
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

* 分别运行每个节点，以便我们能够为每个节点复制`Enode` ，我们稍后就会使用。

```bash
docker-compose run node_1
```

当Nethermind初始化完成 `Ctrl +C`.  时停止节点。将 `This node`  值复制到文本文件中。继续执行node\_2和node\_3。

![](https://nethermind.readthedocs.io/en/latest/_images/initialization-spaceneth.png)

{% hint style="info" %}
You can use `Nethermind.Cli` to fetch these values from nodes by executing the following.  
`Nethermind.Cli` can be found in packages on [Github Releases](https://github.com/NethermindEth/nethermind/releases) or [Download Page](http://downloads.nethermind.io/).
{% endhint %}

```bash
node.switch("http://localhost:8547")
node.enode
```

* 该文件应该跟以下内容相同：

```bash
STATIC_NODE_1="enode://2281549869465d98e90cebc45e1d6834a01465a990add7bcf07a49287e7e66b50ca27f9c70a46190cef7ad746dd5d5b6b9dfee0c9954104c8e9bd0d42758ec58@10.5.0.2:30300"
STATIC_NODE_2="enode://37878ec16a5ed87c9c80b4648e5428f5c768eddd79483be118319c49d11c4e535dac328b5216696cefe0792b7b64adc4de3aeb377550651e982590e62e5a500e@10.5.0.3:30300"
STATIC_NODE_3="enode://6067f06d84c207e6233dacf1f3ef961bd7231f71d5425cbaf843cf19cfd5f7e13b024d234e4e5f6175bdb37c0bbccd14488b481b2280efb66d0631a20ae13ea3@10.5.0.4:30300"
```

* 以上变量复制粘贴到终端中
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

![](https://nethermind.readthedocs.io/en/latest/_images/staticNodes-spaceneth.png)

* 删除每个节点的数据库

```bash
sudo rm -rf node_1/db/spaceneth node_2/db/spaceneth node_3/db/spaceneth
```

* 运行`docker-compose`文件

```text
docker-compose up
```

应该看到专用网络正在运行。现在，为了开始生产区块，我们需要发送事务。

* 运行`Nethermind.Cli`
* 运行  `node.switch("http://localhost:8547")`
* 运行`personal.listAccounts`
* 创建新帐户 `personal.newAccount("test")`

![](https://nethermind.readthedocs.io/en/latest/_images/cli-spaceneth.png)

* 重新运行`personal.listAccounts`并复制帐户地址
*  使用  `eth_sendTransaction`JSON RPC  或 `Nethermind.Cli` 方法发送事务来触发生产块。`from` ''属性更改为您的帐户地址

```bash
curl --data '{"jsonrpc":"2.0","method":"eth_sendTransaction","params":[{
    "from": "0x89892f2c746d98cf270ff2a76672e493d9731c24",
    "to": "0xe1ab8145f7e55dc933d51a18c793f901a3a0b276",
    "gas": "0x76c0",
    "gasPrice": "0x9184e72a000",
    "value": "0x9184e72a",
    "data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"
}],"id":0}' -H "Content-Type: application/json" -X POST localhost:8547
```

![](https://nethermind.readthedocs.io/en/latest/_images/finalization-spaceneth.png)

