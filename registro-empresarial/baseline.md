---
description: Ejemplo local de configuración de Baseline
---

# Baseline

Para iniciar los nodos locales para experimentar con algunos comandos de Baseline, prueba el siguiente ejemplo debajo:

Los archivos de configuración de Baseline tienen los procesos de descubrimiento de red deshabilitados y en el ejemplo usamos nodos estáticos en su lugar. La configuración de nodos estáticos se puede encontrar en los archivos `Data/static-nodes-baseline.json`. Cada nodo estático tiene una entrada enode con una llave pública derivada de la llave privada del nodo \(las configuraciones del `TestNodeKey` en nuestro ejemplo\), direcciones IP y puerto.

Inicie el nodo A \(las llaves del nodo de prueba son consistentes con Data/static-nodes-baseline.json\)

```text
./Nethermind.Runner --config baseline --JsonRpc.Enabled true --JsonRpc.Port 8511 --Network.DiscoveryPort 30111 --Network.P2PPort 30111 --KeyStore.TestNodeKey 120102030405060708090a0b0c0d0e0f000102030405060708090a0b0c0d0e0f
```

Inicie el nodo B \(las llaves del nodo de prueba son consistentes con Data/static-nodes-baseline.json\)

```text
./Nethermind.Runner --config baseline --JsonRpc.Enabled true --JsonRpc.Port 8522 --Network.DiscoveryPort 30222 --Network.P2PPort 30222 --KeyStore.TestNodeKey 020102030405060708090a0b0c0d0e0f000102030405060708090a0b0c0d0e0f
```

![Conectividad inicial a ambos nodos y despliegue del contrato de &#xE1;rbol de baseline](../.gitbook/assets/image%20%2833%29.png)

![Enviar la transaction a un nodo y el nuevo nodo ser&#xE1; creado y sincronizado](../.gitbook/assets/image%20%2832%29.png)

![Ejemplo de interacci&#xF3;n con el contrato Baseline Merkle Tree desplegado \(errores guardados para responder las preguntas frecuentes\)](../.gitbook/assets/image%20%2834%29.png)

![Aqu&#xED; agregamos algunos datos al &#xE1;rbol y solicitamos pruebas de Merkle \(rutas hermanas\)](../.gitbook/assets/image%20%2835%29.png)

![Verificaci&#xF3;n de una hoja contra la ra&#xED;z y la rutas hermanas.](../.gitbook/assets/image%20%2836%29.png)

Encontrarás debajo una descripción de alto nivel sobre el Baseline Protocol Atomic Workflow Step con la infraestructura proveída y el node Nethermind sirviendo como la entrada al Ethereum mainnet y manteniendo los datos del Baseline Merkle trees.

![](../.gitbook/assets/provide_neth%20%281%29%20%281%29%20%282%29.png)

