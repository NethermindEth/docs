---
description: Comprueba si puedes ejecutar Nethermind con su configuración actual
---

# Requisitos de hardware

Generalmente ** cuanto más rápidas sean las operaciones de IO mejor **. Por esta razón, [Digital Ocean] (https://www.digitalocean.com/) y [UpCloud] (https://upcloud.com/) son hasta ahora los mejores proveedores de nube que hemos probado al ejecutar nodos Nethermind.

Al sincronizar localmente, asegúrese de obtener el SSD más rápido posible. Suponga que no se admite ningún almacenamiento a nivel de velocidad de HDD \(lo más probable es que la sincronización demore muchas veces más y posiblemente no pueda ponerse al día con la red\).

Después del inicio, el nodo mostrará el uso máximo de memoria estimado, pero no todo se tiene en cuenta y algunos procesos de bloques / algunas memorias caché temporales de sincronización rápida pueden superar estos valores.

Puedes utilizar la opción de configuración --Init.MemoryHint para sugerir la cantidad de memoria que utilizará la base de datos y algunas operaciones de red. Durante el proceso de sincronización, se utilizará más memoria para cachés.

Los requisitos sugeridos se pueden encontrar a continuación.

Puedes probar configuraciones mucho más bajas con redes más pequeñas. También puede degradar la VM después de la sincronización inicial \(si ha usado 16 GB de RAM para la sincronización, entonces 4 GB de RAM deberían ser suficientes para ejecutar un nodo de mainnet sincronizado con --Init.MemoryHint 1500000000

| Network | Espacio del disco | Memoria | Cores |
| :--- | :--- | :--- | :--- |
| **Goerli Fast Sync** | 20+ GB | 4 GB | 2 |
| **Mainnet Fast Sync** | 350+ GB | 16 GB | 4 |
| **Rinkeby Fast Sync** | 50+ GB | 8 GB | 4 |
| **Ropsten Fast Sync** | 100+ GB | 8 GB | 4 |
| **Mainnet Full Archive** | 4.5+ TB | 32 GB | 6 |

Requisitos de espacio en disco:

Uso de espacio en disco mainnet sincronizado recientemente \(a partir de julio de 2020\):

![Si sincroniza sin receipts, se puede guardar el espacio de 160 GB. Sin cuerpos: 99 GB más.](../.gitbook/assets/image%20%2856%29.png)





