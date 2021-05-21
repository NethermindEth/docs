# Actualizaciones

Al actualizar la base de datos existente, asegúrese de leer las notas de la versión para todas las versiones entre su versión actual y la versión a la que está actualizando.

El **biggest risk** al actualizar es **upgrade a fast synced node** que **not in a synced state** con un **new pivot block** en la configuración \(no se debe cambiar el bloque de pivote después de la sincronización; estamos en el proceso de escribir un código que lo evitaría\).

Por lo general, debe asegurarse de que cuando actualice:

* utilizar los mismos datos del bloque de pivote que en la sincronización inicial
* **O** elimine la base de datos y vuelva a sincronizar

Cada versión de Nethermind pasa por el siguiente procedimiento de prueba:

* Pruebas exploratorias, incluidas resincronizaciones de mainnet, pruebas de validación de Goerli, JSON RPC
* Se ejecutan pruebas de integración y unidad específicas de Nethermind
* Las pruebas de Ethereum se ejecutan para EVM, elección de horquilla, RLP, Trie
* Legacy \(versiones de red antiguas\) Las pruebas de Ethereum se ejecutan para EVM, fork choice, RLP, Trie
* Se ejecutan pruebas de Hive para redes, sincronización y consenso.
* Despliegue de un contrato ERC20 de Truffle a Nethermind spaceneth network
* Las pruebas de humo se ejecutan para cada una de las siguientes sincronizaciones:

{% page-ref page="ethereum-networks-synchronization-smoke-testing-with-nethermind.md" %}

| Network | Modo de sincronización | Consenso | Sync Test |
| :--- | :--- | :--- | :--- |
| Mainnet | fast sync | ethash | YES |
| Mainnet | archive | ethash | NO |
| Mainnet | beam sync | ethash | NO |
| Goerli | fast sync | Clique | YES |
| Goerli | archive | Clique | YES |
| Goerli | beam sync | Clique | NO |
| Rinkeby | fast sync | Clique | YES |
| Rinkeby | archive | Clique | NO |
| Rinkeby | beam sync | Clique | NO |
| Ropsten | fast sync | ethash | YES |
| Ropsten | archive | ethash | NO |
| Ropsten | beam sync | ethash | NO |
| POA Core | fast sync | AuRa | YES |
| POA Core | archive | AuRa | NO |
| POA Core | beam sync | AuRa | NO |
| Sokol | fast sync | AuRa | YES |
| Sokol | archive | AuRa | YES |
| Sokol | beam sync | AuRa | NO |
| xDAI | fast sync | POSDAO | YES |
| xDAI | archive | POSDAO | YES |
| xDAI | beam sync | POSDAO | NO |
| EnergyWeb | fast sync | AuRa | YES |
| EnergyWeb | archive | AuRa | YES |
| EnergyWeb | beam sync | AuRA | NO |
| Volta | fast sync | AuRa | YES |
| Volta | archive | AuRa | YES |
| Volta | beam sync | AuRa | NO |

![Ejemplo de resultados de la prueba de sincronización](../.gitbook/assets/image%20%2893%29.png)

