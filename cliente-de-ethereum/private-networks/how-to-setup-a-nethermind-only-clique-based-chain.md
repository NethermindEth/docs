---
description: Set of validators sealing blocks on private clique network
---

# Cómo configurar una cadena basada solo en Nethermind Clique

## TL;DR

Download a script that will do all the steps described below for you. It will prompt you 2 things:

* Confirm installation of required packages
* The number of Validators you wish to run in your private network

Script can be found here:

{% embed url="https://github.com/NethermindEth/nethermind/blob/master/scripts/private-networking/clique-validators.sh" caption="" %}

or use this command to download it:

```bash
wget https://raw.githubusercontent.com/NethermindEth/nethermind/master/scripts/private-networking/clique-validators.sh
```

Finally give the script permissions and run it \(script requires `sudo` privileges\):

```bash
chmod +x clique-validators.sh
./clique-validators.sh
```

## Prerrequisitos

* Shell de bash de Linux
* Docker-compose
* Docker
* jq
* pwgen

```bash
sudo apt-get install -y docker-compose docker.io jq pwgen
```

## Manual setup

{% hint style="info" %}
All these steps are automated and written in the above `clique-validators.sh` script.
{% endhint %}

En esta configuración, crearemos una red privada de 3 nodos Nethermind ejecutando el algoritmo de consenso Clique.

* crea un directorio separado donde almacenaremos todos los archivos

```bash
mkdir private-networking
cd private-networking
```

* crear carpetas para cada nodo y génesis

```bash
mkdir node_1 node_2 node_3 genesis
```

* descargue el archivo chainspec con el motor clique y colocalo en la carpeta genesis \(usaremos goerli chainspec en este ejemplo\)

```bash
wget https://raw.githubusercontent.com/NethermindEth/nethermind/09389fc28b37605acc5eaed764d3e973969fe319/src/Nethermind/Chains/goerli.json
cp goerli.json genesis/goerli.json
```

* crear subcarpetas en cada carpeta de nodo

```bash
mkdir node_1/configs node_2/configs node_3/configs
```

* create a `static-nodes.json` file and place it in working directory

```bash
cat <<EOF > static-nodes.json
[

]
EOF
```

* crea el archivo `config.cfg` y colocalo en las subcarpetas `node_1 /configs` \(haga esto también para el nodo \_2 y el nodo \_3 \)

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

Para cada nodo, deberá cambiar los siguientes elementos en la configuración:

* `TestNodeKey` debe ser una cadena alfanumérica de 64 caracteres. Se puede generar con la herramienta `pwgen`, por ejemplo.
* `LocalIp`,`ExternalIp` y `Host` deben tener el mismo valor y deben incrementarse para cada nodo, Ejemplo. 10.5.0.3, 10.5.0.4 y así sucesivamente.

Copie el archivo docker-compose y colóquelo en el directorio de trabajo

```yaml
version: "3.5"
services:

    node_1:
        image: nethermind/nethermind:1.10.17
        command: --config config
        container_name: node_1
        volumes:
            - ./genesis:/config/genesis
            - ./node_1/configs/config.cfg:/nethermind/configs/config.cfg
            - ./static-nodes.json:/nethermind/Data/static-nodes.json
            - ./node_1/db/clique:/nethermind/nethermind_db/clique
            - ./node_1/keystore:/nethermind/keystore
        ports:
            - 0.0.0.0:8547:8545
        networks:
            vpcbr:
                ipv4_address: 10.5.0.2

    node_2:
        image: nethermind/nethermind:1.10.17
        command: --config config
        container_name: node_2
        volumes:
            - ./genesis:/config/genesis
            - ./node_2/configs/config.cfg:/nethermind/configs/config.cfg
            - ./static-nodes.json:/nethermind/Data/static-nodes.json
            - ./node_2/db/clique:/nethermind/nethermind_db/clique
            - ./node_2/keystore:/nethermind/keystore
        ports:
            - 0.0.0.0:8548:8545
        networks:
            vpcbr:
                ipv4_address: 10.5.0.3

    node_3:
        image: nethermind/nethermind:1.10.17
        command: --config config
        container_name: node_3
        volumes:
            - ./genesis:/config/genesis
            - ./node_3/configs/config.cfg:/nethermind/configs/config.cfg
            - ./static-nodes.json:/nethermind/Data/static-nodes.json
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

* ejecute cada nodo por separado para que podamos copiar `Enode` y `Node address` para cada nodo, los usaremos más adelante

```bash
docker-compose run node_1
```

Detenga el nodo cuando `la inicialización de Nethermind` se complete `Ctrl + C`. Copie los valores de `Este nodo` y`Dirección de nodo`  \(sin prefijos 0x \) en un archivo de texto. Continúe con el nodo \_2 y el nodo \_3.

{% hint style="info" %}
Puede usar`Nethermind.Cli`para obtener estos valores de los nodos ejecutando lo siguiente.  
`Nethermind.Cli`se puede encontrar en paquetes en las versiones de [Github](https://github.com/NethermindEth/nethermind/releases) o en la [página de descarga](http://downloads.nethermind.io/).
{% endhint %}

```bash
node.switch("http://localhost:8547")
node.enode
node.address
```

* el archivo debería verse similar a esto:

```text
SIGNER_1="b5bc4d9e63eb1cb16aeeb0fd08e8344283b45b0d"
STATIC_NODE_1="enode://2281549869465d98e90cebc45e1d6834a01465a990add7bcf07a49287e7e66b50ca27f9c70a46190cef7ad746dd5d5b6b9dfee0c9954104c8e9bd0d42758ec58@10.5.0.2:30300"
SIGNER_2="c4e3a14d33f765faaca31672bd90d0c325bfa0cf"
STATIC_NODE_2="enode://37878ec16a5ed87c9c80b4648e5428f5c768eddd79483be118319c49d11c4e535dac328b5216696cefe0792b7b64adc4de3aeb377550651e982590e62e5a500e@10.5.0.3:30300"
SIGNER_3="0076873eb11c627057834fdbdc7b391a33eb9f81"
STATIC_NODE_3="enode://6067f06d84c207e6233dacf1f3ef961bd7231f71d5425cbaf843cf19cfd5f7e13b024d234e4e5f6175bdb37c0bbccd14488b481b2280efb66d0631a20ae13ea3@10.5.0.4:30300"
```

* copie y pegue las variables anteriores en su terminal y cree las variables `EXTRA_VANITY` y`EXTRA_SEAL`

```bash
EXTRA_VANITY="0x22466c6578692069732061207468696e6722202d204166726900000000000000"
EXTRA_SEAL="0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
```

* create `EXTRA_DATA` variable accordingly to [https://eips.ethereum.org/EIPS/eip-225](https://eips.ethereum.org/EIPS/eip-225)

```bash
EXTRA_DATA=${EXTRA_VANITY}${SIGNER_1}${SIGNER_2}${SIGNER_3}${EXTRA_SEAL}
```

* en el archivo chainspec `goerli.json`, modifica la propiedad`extraData` en el campo `genesis`

Puedes hacer esto manualmente o usando el siguiente comando

```bash
cat goerli.json | jq '.genesis.extraData = '\"$EXTRA_DATA\"'' > genesis/goerli.json
```

* Modify the content of `static-nodes.json` files by appending `Enodes` to it

```bash
cat <<EOF > static-nodes.json
[
    "$STATIC_NODE_1",
    "$STATIC_NODE_2",
    "$STATIC_NODE_3"
]
EOF
```

* eliminar bases de datos para cada nodo

```bash
sudo rm -rf node_1/db/clique node_2/db/clique node_3/db/clique
```

* finalmente ejecute el archivo docker-compose

```bash
docker-compose up
```

Deberías ver la red privada funcionando y los nodos sellando bloques en el algoritmo de consenso de Clique 🎉

![Clique validators sealing blocks in private network](../../.gitbook/assets/image%20%288%29.png)

