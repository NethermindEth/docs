# Cómo configurar una cadena basada solo en Spaceneth de Nethermind

La configuración de la red privada de Spaceneth es muy similar a la configuración anterior de Clique. Sin embargo, existen pocas diferencias importantes y se describirán a continuación.

## Prerrequisitos

* Shell de bash de Linux
* Docker-compose
* Docker
* jq
* Nethermind.Cli

```bash
sudo apt-get install -y docker-compose docker.io jq
```

## Configuración

En esta configuración, crearemos una red privada de 3 nodos Nethermind que ejecutaran un algoritmo de consenso de prueba NethDev.

* crea un directorio separado donde almacenaremos todos los archivos

```text
mkdir private-networking
cd private-networking
```

* crear carpetas para cada nodo y génesis

```text
mkdir node_1 node_2 node_3 genesis
```

* descarga [chainspec](https://raw.githubusercontent.com/NethermindEth/nethermind/master/src/Nethermind/Chains/spaceneth.json) archivo con el motor spaceneth y colocalo en la carpeta `genesis`.

```bash
wget https://raw.githubusercontent.com/NethermindEth/nethermind/master/src/Nethermind/Chains/spaceneth.json
cp spaceneth.json genesis/spaceneth.json
```

* crear subcarpetas en cada carpeta de nodo

```bash
mkdir node_1/configs node_1/staticNodes node_2/configs node_2/staticNodes node_3/configs node_3/staticNodes
```

* cree un archivo `static-nodes.json` y colocalo en las subcarpetas `node_1 /staticNodes`  \(haga esto también para node \_2 y node \_3 \)

```bash
cat <<EOF > node_1/staticNodes/static-nodes.json
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

Para cada nodo, deberá cambiar los siguientes elementos en la configuración:

* `LocalIp`,`ExternalIp` y `Host` deben tener el mismo valor y deben incrementarse para cada nodo, Ejemplo. 10.5.0.3, 10.5.0.4 y así sucesivamente.

![](https://nethermind.readthedocs.io/en/latest/_images/configs-spaceneth.png)

* copie el archivo `docker-compose` y colóquelo en el directorio de trabajo

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

* ejecute cada nodo por separado para que podamos copiar `Enode` para cada nodo, los usaremos más adelante

```bash
docker-compose run node_1
```

Detenga el nodo cuando la inicialización de Nethermind se complete `Ctrl + C`. Copie los valores de `Este nodo` en un archivo de texto. Continúe con el nodo \_2 y el nodo \_3.

![](https://nethermind.readthedocs.io/en/latest/_images/initialization-spaceneth.png)

{% hint style="info" %}
Puede usar`Nethermind.Cli` para obtener estos valores de los nodos ejecutando lo siguiente.   
`Nethermind.Cli`se puede encontrar en paquetes en las versiones de [Github](https://github.com/NethermindEth/nethermind/releases) o en la [página de descarga](http://downloads.nethermind.io/).
{% endhint %}

```bash
node.switch("http://localhost:8547")
node.enode
```

* el archivo debería verse similar a esto:

```bash
STATIC_NODE_1="enode://2281549869465d98e90cebc45e1d6834a01465a990add7bcf07a49287e7e66b50ca27f9c70a46190cef7ad746dd5d5b6b9dfee0c9954104c8e9bd0d42758ec58@10.5.0.2:30300"
STATIC_NODE_2="enode://37878ec16a5ed87c9c80b4648e5428f5c768eddd79483be118319c49d11c4e535dac328b5216696cefe0792b7b64adc4de3aeb377550651e982590e62e5a500e@10.5.0.3:30300"
STATIC_NODE_3="enode://6067f06d84c207e6233dacf1f3ef961bd7231f71d5425cbaf843cf19cfd5f7e13b024d234e4e5f6175bdb37c0bbccd14488b481b2280efb66d0631a20ae13ea3@10.5.0.4:30300"
```

* copia y pega las variables anteriores en su terminal
* para cada nodo, modifique los archivos `static-nodes.json` vacíos previamente creados agregando`Enodes` a ellos

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

* eliminar bases de datos para cada nodo

```bash
sudo rm -rf node_1/db/spaceneth node_2/db/spaceneth node_3/db/spaceneth
```

* ejecuta el archivo `docker-compose`

```text
docker-compose up
```

Debería ver la red privada funcionando. Ahora necesitamos enviar transacciones para comenzar a producir bloques.

* ejecuta `Nethermind.Cli`
* ejecuta `node.switch("http://localhost:8547")`
* ejecuta `personal.listAccounts`
* crear una nueva cuenta `personal.newAccount ("test")`

![](https://nethermind.readthedocs.io/en/latest/_images/cli-spaceneth.png)

* Vuelve a ejecutar `personal.listAccounts` y copie la dirección de su cuenta
* desencadenar bloques produciendo mediante el envío de transacciones utilizando el método `eth_sendTransaction`JSON RPC o`Nethermind.Cli`. Cambie la propiedad `from` a la dirección de su cuenta

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

