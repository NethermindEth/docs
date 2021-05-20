---
description: >-
  Cómo configurar un Validador Nethermind en el algoritmo de consenso Aura
  (Ronda de autoridad)
---

# Validador de aura

Este artículo lo guiará a través de la configuración de la ventana acoplable de **Nethermind Aura Validator** \(cadena xDai en este ejemplo\). Se puede obtener el mismo resultado \[Descargando\] \(../../ ethereum-client/download-sources/\) & \[Ejecutando Nethermind\] \(../../ ethereum-client/running-nethermind/running-the-client .md\) o por \[Building Nethermind\] \(../../ ethereum-client/building-nethermind.md\) desde el código fuente.

Si elige no usar docker-compose, puede omitir las secciones relacionadas con docker-compose y leer acerca de [config file](aura-validator.md#config-file) y [private key ](aura-validator.md#mining-private-key) solo configuración.

## Prerrequisitos

* [x] docker-compose
* [x] docker
* [x] Se recomienda una máquina con al menos 4 GB de RAM

```bash
sudo apt-get install docker docker-compose -y
```

## Sincronización de reloj

El reloj del sistema debe estar sincronizado; de lo contrario, es posible que se salte el sellado del bloque. Por defecto, `stepDuration` está configurado en `5s`.

Verifique si el reloj de su sistema está sincronizado, escriba `timedatectl status` y debería ver un resultado similar:

```bash
Local time: Tue 2020-06-30 17:16:19 UTC
Universal time: Tue 2020-06-30 17:16:19 UTC
RTC time: Tue 2020-06-30 17:16:19
Time zone: Etc/UTC (UTC, +0000)
System clock synchronized: yes
systemd-timesyncd.service active: yes
RTC in local TZ: no
```

Si `System clock synchronized` muestra `yes`, ya está todo listo; de lo contrario, es posible que deba:

* [x] sincronizar el reloj con los servidores NTP \(permitir **UDP** puerto **123** para ambos tráfico entrante y saliente\)
* [x] utilice el siguiente script para sincronizar con google.com:

Cree el script `fixtime.sh` y ejecútelo con el comando`watch -n 60` en la `pantalla`

```bash
echo sudo date -s '"$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"' > fixtime.sh
chmod +x fixtime.sh
screen -S time
watch -n 60 ./fixtime.sh
```

Presione `Ctrl + A + D` para salir de la `pantalla`

## Muestra de archivo Docker-compose

Cree y edite el archivo`docker-compose.yml`

```bash
nano docker-compose.yml
```

{% tabs %}
{% tab title="docker-compose.yml" %}
```yaml
version: '3.5'

services:
  nethermind-validator:
    image: nethermind/nethermind
    container_name: nethermind-validator
    restart: unless-stopped
    ports:
      - 8545:8545
      - 30303:30303
    network_mode: host
    environment:
      - NETHERMIND_CONFIG=xdai
    volumes:
      - ${PWD}/nethermind_db:/nethermind/nethermind_db
      - ${PWD}/keystore:/nethermind/keystore
      - ${PWD}/logs:/nethermind/logs
      - ${PWD}/xdai.cfg:/nethermind/configs/xdai.cfg 
      - ${PWD}/NLog.config:/nethermind/NLog.config
      - ${PWD}/static-nodes.json:/nethermind/Data/static-nodes.json

volumes:
  nethermind_db:
    driver: local
    name: nethermind_db
  keystore:
    driver: local
    name: keystore
  logs:
    driver: local
    name: logs
```
{% endtab %}
{% endtabs %}

Configure el nodo Nethermind a través de variables de entorno o use el archivo de configuración local y asígnelo al que existe dentro del contenedor \(archivo `xdai.cfg` en el ejemplo anterior\).

{% hint style="info" %}
Asegúrese de que`nethermind_db`, `keystore`\(`logs` - optional \) estén mapeados, de lo contrario podría perder la base de datos o las claves
{% endhint %}

[`NLog.config`](../../cliente-de-ethereum/running-nethermind/runtime.md#nlog-config) el archivo es opcional. [`static-nodes.json`](../../cliente-de-ethereum/running-nethermind/runtime.md#static-nodes) se puede completar con un array de enodos, esto también es opcional.

## Minería **LL**ave privada

{% hint style="danger" %}
Asegúrese de que el nombre del archivo contenga las llaves **public address** de lo contrario, Nethermind Client no lo reconocerá como un archivo de llaves.

Nombramiento correcto de un `archivo de llaves`: **key-a5237f7f43cc46cba43ac212dabd0c45e3e3050a**

El `archivo de llaves` debe almacenarse dentro del volumen del `almacén de claves`.
{% endhint %}

## Archivo de configuración

Cosas a configurar:

* [ ] `Init.IsMining` true
* [ ] `Init.MemoryHint` se puede dejar por defecto, se recomienda configurarlo de acuerdo con la configuración del hardware de la máquina \(para `xdai` 1000000000 es suficiente\)
* [ ] `EthStats`  sección si desea informar el estado del nodo a la página ethstats para una red determinada.
* [ ] `Metrics` sección si se ejecuta de forma local / remota [Infraestructura de métricas](../../cliente-de-ethereum/metrics/setting-up-local-metrics-infrastracture.md)
* [ ] `KeyStore.PasswordFiles` ruta al archivo que contiene la contraseña para **mining private key**
* [ ] `KeyStore.UnlockAccounts` **\*\*una array de cuentas, proporcione** mining private key\*\* aquí
* [ ] `KeyStore.BlockAuthorAccount` **mining public address** debe proporcionarse aquí también
* [ ] `Aura.ForceSealing` establecido en true

{% tabs %}
{% tab title="xdai.cfg" %}
```bash
{
  "Init": {
    "WebSocketsEnabled": false,
    "StoreReceipts": true,
    "IsMining": true,
    "ChainSpecPath": "chainspec/xdai.json",
    "GenesisHash": "0x4f1dd23188aab3a76b463e4af801b52b1248ef073c648cbdc4c9333d3da79756",
    "BaseDbPath": "nethermind_db/xdai",
    "LogFileName": "xdai.logs.txt",
    "MemoryHint": 3000000000,
    "StaticNodesPath": "Data/static-nodes.json"
  },
  "Network": {
    "DiscoveryPort": 30303,
    "P2PPort": 30303
  },
  "JsonRpc": {
    "Enabled": false,
    "Host": "127.0.0.1",
    "Port": 8545,
    "WebSocketsPort": 8546
  },
  "Db": {
    "HeadersDbCacheIndexAndFilterBlocks": false,
    "BlocksDbCacheIndexAndFilterBlocks": false,
    "ReceiptsDbCacheIndexAndFilterBlocks": false,
    "BlockInfosDbCacheIndexAndFilterBlocks": false
  },
  "Sync": {
    "FastSync": true,
    "PivotNumber": 10410000,
    "PivotHash": "0x806f498fdde010f25bd3beb18e6f8a9c9450752f8c0e27da2cd2465ff184628c",
    "PivotTotalDifficulty": "3542339439646969404653729663364707080928280566",
    "FastBlocks": true,
    "UseGethLimitsInFastBlocks": false,
    "FastSyncCatchUpHeightDelta": 10000000000
  },
  "EthStats": {
    "Enabled": false,
    "Server": "ws://localhost:3000/api",
    "Name": "Nethermind xDai",
    "Secret": "secret",
    "Contact": "hello@nethermind.io"
  },
  "Metrics": {
    "NodeName": "Nethermind xDai",
    "Enabled": false,
    "PushGatewayUrl": "http://localhost:9091/metrics",
    "IntervalSeconds": 5
  },
  "KeyStore": {
    "PasswordFiles": ["keystore/password.file"],
    "UnlockAccounts": ["0x..."],
    "BlockAuthorAccount": "0x..." 
  },
  "Aura": {
    "ForceSealing": true
  },
  "Bloom": {
    "IndexLevelBucketSizes": [
      16,
      16,
      16
    ]
  }
}
```
{% endtab %}
{% endtabs %}

## Ejecutando el nodo Validator

Ejecútela con un simple comando docker-compose.

```bash
docker-compose up -d
```

Deberas esperar a que el nodo esté completamente **synchronized**.

Para revisar los registros y verificar si está sellando los bloques como se esperaba \(busca el `Sealed block` log\).

```bash
docker-compose logs -f nethermind-validator
```

![](../../.gitbook/assets/image%20%2837%29.png)

