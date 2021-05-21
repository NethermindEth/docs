---
description: Redes privadas de Nethermind Client
---

# Redes privadas

Es posible configurar una red privada \(blockchain privada\) usando nodos Nethermind. Antes de configurar una red privada, deberá tomar algunas decisiones. Uno de ellas es elegir un protocolo de consenso que se utilizará para proteger la red.

## Algoritmos de consenso

Nethermind soporta los siguientes algoritmos de consenso:

* ethash \(PoW\)
* AuRa \(PoA\)
* Clique \(PoA\)
* NethDev \(debug / dev\)

#### PoW

En algoritmo de consenso de prueba de trabajo, algunos de los nodos participan en una carrera para extraer un nuevo bloque resolviendo un algoritmo matemático. La dificultad del algoritmo  \(la cantidad de cálculo necesaria para encontrar una solución\) se ajusta para hacer que los bloques aparezcan con una frecuencia promedio \(cada 15 segundos en la red principal de Ethereum\). PoW se utiliza actualmente para proteger la red principal pública de Ethereum y la red de prueba de Ropsten. El único algoritmo de minería utilizado para PoW en Ethereum se llama ethash y está diseñado para ser estrictamente duro con la memoria \(consulta [Funciones de hash estricto de memoria estricta](http://www.hashcash.org/papers/memohash.pdf)\).

#### Clique

Clique es una implementación del algoritmo de consenso Proof of Authority \(PoA\). La idea detrás de PoA es elegir un grupo de nodos dentro de la red con autoridad para crear \(sella \) nuevos bloques. En Clique, estos nodos se denominan firmantes y, después de la configuración inicial, los firmantes pueden votar para agregar nuevos firmantes al grupo o eliminar cualquiera de los firmantes existentes. Actualmente, Clique cuenta con el apoyo de Geth, Parity, Nethermind y Pantheon y se utiliza para asegurar las testnets de Goerli y Rinkeby.

#### AuRa

AuRa es otra implementación del algoritmo de consenso de prueba de autoridad. Actualmente solo es compatible con el cliente Nethermind y Parity Ethereum. Aura se utiliza para proteger los testnets de Kovan y la red de POA.

#### NethDev \(también lo llamamos Spaceneth\)

NethDev es un algoritmo de consenso muy simple \(o para describirlo mejor - falta de algoritmo de consenso\). NethDev se puede utilizar para configurar nodos con fines de desarrollo y prueba. En la red NethDev, cualquier nodo puede crear un bloque con transacciones y, siempre que sea un bloque Ethereum válido, todos los demás nodos lo aceptarán.

### Configuración

Nethermind usa el mismo formato de chainspec que se pueden usar para configurar redes privadas en Parity. La mayoría de los elementos de los archivos chainspec son compatibles con Nethermind:

* motor de consenso y sus parámetros \(a elegir entre Ethash, Clique, AuRa o NethDev\)
* especificación del bloque génesis
* Transiciones EIP
* asignaciones de cuenta iniciales
* bootnodes

Los siguientes elementos NO son compatibles en este momento:

* hashes de bloque de sincronización codificados
* definiciones de precompilación y bloques de activación de precompilación

Puede encontrar los links a continuación a algunos de los chainspec que se utilizan para definir varias redes Ethereum:

* [foundation](https://github.com/NethermindEth/nethermind/blob/09389fc28b37605acc5eaed764d3e973969fe319/src/Nethermind/Chains/foundation.json) - la red mainnet pública de Ethereum
* [rinkeby](https://github.com/NethermindEth/nethermind/blob/09389fc28b37605acc5eaed764d3e973969fe319/src/Nethermind/Chains/rinkeby.json) - la testnet basada en Clique original
* [goerli](https://github.com/NethermindEth/nethermind/blob/09389fc28b37605acc5eaed764d3e973969fe319/src/Nethermind/Chains/goerli.json) - la nueva testnet basada en Clique
* [spaceneth](https://github.com/NethermindEth/nethermind/blob/09389fc28b37605acc5eaed764d3e973969fe319/src/Nethermind/Chains/spaceneth.json) - un ejemplo de red privada con NethDev



