# 如何设置一条仅由 Nethermind 节点运行且基于 Spaceneth 的链

Spaceneth 私有网络在设置流程上与 Clique 私有网络非常相似。但是，二者存在一些主要差异，详见下文。

## 必备条件

* Linux bash shell
* Docker-compose
* Docker
* jq
* Nethermind.Cli

```bash
sudo apt-get install -y docker-compose docker.io jq
```

## 设置

在该设置中，我们将创建一个私有网络，由 3 个 Nethermind 节点组成，并采用简单的 NethDev 共识算法。

* 创建一个单独的目录用来存储所有文件

```text
mkdir private-networking
cd private-networking
```

* 为每个节点和创世块创建文件夹

```text
mkdir node_1 node_2 node_3 genesis
```

* 使用 Clique 引擎下载[链规范](https://raw.githubusercontent.com/NethermindEth/nethermind/master/src/Nethermind/Chains/spaceneth.json)文件，并将其放入 `genesis` 文件夹。

```bash
wget https://raw.githubusercontent.com/NethermindEth/nethermind/master/src/Nethermind/Chains/spaceneth.json
cp spaceneth.json genesis/spaceneth.json
```

* 在每个节点文件夹中创建子文件夹

```bash
mkdir node_1/configs node_1/staticNodes node_2/configs node_2/staticNodes node_3/configs node_3/staticNodes
```

* 创建一个 `static-nodes.json` 文件，并将其放在 `node_1/staticNodes` 子文件夹中（并对 node\_2 和 node\_3 进行同样的操作）

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

对于每个节点，您都需要更改以下配置项：

* `LocalIp`、`ExternalIp` 和 `Host` 的值应该相同，而且逐节点递增，例如，10.5.0.3、10.5.0.4 并以此类推。

![](https://nethermind.readthedocs.io/en/latest/_images/configs-spaceneth.png)

* 复制 `docker-compose` 文件并将其放在工作目录中

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

* 分别运行各个节点，并为每个节点复制 `Enode`，以备后用。

```bash
docker-compose run node_1
```

当 Nethermind 初始化完成 `Ctrl +C` 时停止该节点。将 `This node` 的值复制到一个文本文件中。对 node\_2 和 node\_3 进行相同的操作。

![](https://nethermind.readthedocs.io/en/latest/_images/initialization-spaceneth.png)

{% hint style="info" %}
您可以执行以下命令，使用 Nethermind.Cli 从各个节点处获取这些值。Nethermind.Cli 可以在 [Github 版本发行页](https://github.com/NethermindEth/nethermind/releases)或[下载页](http://downloads.nethermind.io/)的软件包中找到。
{% endhint %}

```bash
node.switch("http://localhost:8547")
node.enode
```

* 该文本文件可能如下所示：

```bash
STATIC_NODE_1="enode://2281549869465d98e90cebc45e1d6834a01465a990add7bcf07a49287e7e66b50ca27f9c70a46190cef7ad746dd5d5b6b9dfee0c9954104c8e9bd0d42758ec58@10.5.0.2:30300"
STATIC_NODE_2="enode://37878ec16a5ed87c9c80b4648e5428f5c768eddd79483be118319c49d11c4e535dac328b5216696cefe0792b7b64adc4de3aeb377550651e982590e62e5a500e@10.5.0.3:30300"
STATIC_NODE_3="enode://6067f06d84c207e6233dacf1f3ef961bd7231f71d5425cbaf843cf19cfd5f7e13b024d234e4e5f6175bdb37c0bbccd14488b481b2280efb66d0631a20ae13ea3@10.5.0.4:30300"
```

* 将以上变量复制粘贴到您的终端上
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

![](https://nethermind.readthedocs.io/en/latest/_images/staticNodes-spaceneth.png)

* 删除每个节点的数据库

```bash
sudo rm -rf node_1/db/spaceneth node_2/db/spaceneth node_3/db/spaceneth
```

* 运行 `docker-compose` 文件

```text
docker-compose up
```

您应该可以看到私有网络正在运行。现在，为了让节点打包区块，我们需要发送交易。

* 运行 `Nethermind.Cli`
* 运行 `node.switch("http://localhost:8547")`
* 运行 `personal.listAccounts`
* 创建新帐户 `personal.newAccount("test")`

![](https://nethermind.readthedocs.io/en/latest/_images/cli-spaceneth.png)

* 重新运行 `personal.listAccounts` 并复制您的帐户地址
* 使用 `eth_sendTransaction` JSON RPC 方法或 `Nethermind.Cli` 发送交易来触发区块打包，并将 `from` 属性修改成您的帐户地址

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

