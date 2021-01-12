# How to setup a Nethermind only Spaceneth based chain

Spaceneth private network setup looks very similar to the above Clique setup. However, there are few major differences and will be described below.

## Prerequisites

* Linux bash shell
* Docker-compose
* Docker
* jq
* Nethermind.Cli

```bash
sudo apt-get install -y docker-compose docker.io jq
```

## Setup

In this setup we will create a private network of 3 Nethermind nodes running a simple testing NethDev consensus algorithm.

* create separate directory where we will store all files

```text
mkdir private-networking
cd private-networking
```

* create folders for each node and genesis

```text
mkdir node_1 node_2 node_3 genesis
```

* download [chainspec](https://raw.githubusercontent.com/NethermindEth/nethermind/master/src/Nethermind/Chains/spaceneth.json) file with spaceneth engine and place it in `genesis` folder.

```bash
wget https://raw.githubusercontent.com/NethermindEth/nethermind/master/src/Nethermind/Chains/spaceneth.json
cp spaceneth.json genesis/spaceneth.json
```

* create subfolders in each node folder

```bash
mkdir node_1/configs node_1/staticNodes node_2/configs node_2/staticNodes node_3/configs node_3/staticNodes
```

* create a `static-nodes.json` file and place it in `node_1/staticNodes` subfolders \(do this for node\_2 and node\_3 as well\)

```bash
cat <<EOF > node_1/staticNodes/static-nodes.json
[

]
EOF
```

* create `config.cfg` file and place it in `node_1/configs` subfolders \(do this for node\_2 and node\_3 as well\)

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

For each node you will need to change following items in configuration:

* `LocalIp`, `ExternalIp` and `Host` should have the same value and be incremented for each node e.g. 10.5.0.3, 10.5.0.4 and so on and so forth.

![](https://nethermind.readthedocs.io/en/latest/_images/configs-spaceneth.png)

* copy `docker-compose` file and place it in working directory

```yaml
version: "3.5"
services:

    node_1:
        image: nethermind/nethermind
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
        image: nethermind/nethermind
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
        image: nethermind/nethermind
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

* run each node separately so that we can copy `Enode` for each node, we will use them later

```bash
docker-compose run node_1
```

Stop the node when Nethermind initialization completes `Ctrl +C`. Copy `This node` values to a text file. Continue with node\_2 and node\_3.

![](https://nethermind.readthedocs.io/en/latest/_images/initialization-spaceneth.png)

{% hint style="info" %}
You can use `Nethermind.Cli` to fetch these values from nodes by executing the following.  
`Nethermind.Cli` can be found in packages on [Github Releases](https://github.com/NethermindEth/nethermind/releases) or [Download Page](http://downloads.nethermind.io/).
{% endhint %}

```bash
node.switch("http://localhost:8547")
node.enode
```

* the file should look similar to this:

```bash
STATIC_NODE_1="enode://2281549869465d98e90cebc45e1d6834a01465a990add7bcf07a49287e7e66b50ca27f9c70a46190cef7ad746dd5d5b6b9dfee0c9954104c8e9bd0d42758ec58@10.5.0.2:30300"
STATIC_NODE_2="enode://37878ec16a5ed87c9c80b4648e5428f5c768eddd79483be118319c49d11c4e535dac328b5216696cefe0792b7b64adc4de3aeb377550651e982590e62e5a500e@10.5.0.3:30300"
STATIC_NODE_3="enode://6067f06d84c207e6233dacf1f3ef961bd7231f71d5425cbaf843cf19cfd5f7e13b024d234e4e5f6175bdb37c0bbccd14488b481b2280efb66d0631a20ae13ea3@10.5.0.4:30300"
```

* copy & paste above variables into your terminal
* for each node modify previously created empty `static-nodes.json` files by appending `Enodes` to them

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

* remove databases for each node

```bash
sudo rm -rf node_1/db/spaceneth node_2/db/spaceneth node_3/db/spaceneth
```

* run `docker-compose` file

```text
docker-compose up
```

You should see the private network working. We now need to send transactions in order to start producing blocks.

* run `Nethermind.Cli`
* run `node.switch("http://localhost:8547")`
* run `personal.listAccounts`
* create new account `personal.newAccount("test")`

![](https://nethermind.readthedocs.io/en/latest/_images/cli-spaceneth.png)

* re-run `personal.listAccounts` and copy your account address
* trigger blocks producing by sending transaction using `eth_sendTransaction`JSON RPC method or `Nethermind.Cli`. Change `from` property to your account address

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

