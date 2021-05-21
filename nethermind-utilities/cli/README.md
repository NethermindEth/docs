---
description: Guía para el proyecto Nethermind.Cli que es útil para administrar su nodo
---

# CLI

Después de iniciar Nethermind a través de `. /Nethermind.Launcher` tienes dos opciones: `Ethereum Node` y` CLI`.

Si inicia el nodo en un proceso y luego inicia la CLI en otro proceso, verá los comandos disponibles dentro de la CLI.

{% hint style="warning" %}
You have to ensure that the `JsonRpc.Enabled` is set to `true` either by enabling it when Launcher asks about it or by manually editing the relevant config file or by passing `--JsonRpc.Enabled true` parameter after the Launcher command
{% endhint %}

CLI mostrará las opciones disponibles \(funciones y propiedades\) cuando se inicie.

![Nethermind.Cli vista](../../.gitbook/assets/image%20%286%29.png)

CLI le permitirá consultar la información más básica sobre el nodo rápidamente.

1. Puedes ejecutar aritmética javascript
2. Puedes emitir solicitudes JSON RPC al nodo
3. Puedes combinar los dos anteriores
4. Puedes crear y llamar funciones
5. Puede recuperar objetos de nodo
6. Y trabajar con propiedades de objetos de nodo
7. También puede cargar archivos javascript desde el disco llamando a `load (" filepath.js ")`
8. Puedes navegar a los comandos anteriores usando las teclas de flecha
9. Puede autocompletar el comando básico con la pestaña

![Nethermind.Cli operations](https://github.com/NethermindEth/docs/tree/b8c795545ab876ff12dec434d0cd00585f2ba346/.gitbook/assets/image%20%2815%29%20%283%29%20%283%29%20%283%29%20%282%29%20%282%29.png)

Para operaciones más avanzadas con el nodo, use [Web3](https://nethermind.readthedocs.io/en/latest/web3.html) o ether.js libs o Truffle, Metamask, etc.

A continuación, encontrará la lista disponible de operaciones CLI y puede encontrar más información sobre cada llamada en la sección JSON RPC.

{% page-ref page="../../ethereum-client/json-rpc/" %}

