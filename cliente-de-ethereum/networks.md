---
description: Networks actualmente admitidas por Nethermind Client
---

# Networks

De forma predeterminada, Nethermind se inicia con la configuración de mainnet, pero puede sincronizar cualquiera de las siguientes redes agregando un interruptor de línea de comando:

```text
--config [NETWORK_NAME]
```

El nombre de la network puede ser cualquiera de los siguientes

* mainnet
* goerli
* rinkeby
* ropsten
* xdai
* poacore
* sokol
* energyweb
* volta
* kovan \(solo sincronización rápida y puede fallar si aparecen transacciones pWASM\)

## Mainnet

Esta es la principal red pública de Ethereum protegida por el algoritmo ethash PoW.

```text
Nethermind.Runner --config mainnet
```

{% embed url="https://ethstats.net/" caption="" %}

## Görli \(goerli\)

Esta es una red de prueba basada en Clique-PoA compatible con todos los clientes principales. Tiene un retraso de 15 segundos entre los bloques sellados por los validadores de Goerli.

```text
Nethermind.Runner --config goerli
```

{% embed url="https://stats.goerli.net/" caption="" %}

{% embed url="https://gitter.im/goerli/testnet" caption="" %}

## Ropsten

Esta es una testnet protegida por el algoritmo ethash PoW que se parece más a la red principal, pero es propensa a ataques basados en hashrate.

```text
Nethermind.Runner --config ropsten
```

{% embed url="https://ropsten-stats.parity.io/" caption="" %}

## Rinkeby

Esta es una red de prueba basada en Clique-PoA compatible con Geth y Nethermind. Tiene un retraso de 15 segundos entre bloques.

```text
Nethermind.Runner --config rinkeby
```

{% embed url="https://www.rinkeby.io/\#stats" caption="" %}

