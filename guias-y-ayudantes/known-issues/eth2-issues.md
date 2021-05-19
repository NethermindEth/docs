# Problemas de ETH2

## Principales problemas reportados hasta ahora al usar Nethermind para Eth2 \(30.11.2020\)

{% hint style="warning" %}
* usuarios que sincronizaron antes de la versión **1.9.41** y no sabía que las configuraciones antiguas  **no**  admitían Eth2 de forma predeterminada, tuvieron que volver a sincronizar con **1.9.41**  \(y ahora están informando configuraciones exitosas\)
* usuarios que sincronizaron con `AncientReceiptsBarrier` \(limitando el espacio en disco\) no puede usar **Teku** y **tiene que cambiar** a **Prysm** o **Lighthouse**
* dos usuarios informaron que sus nodos completamente sincronizados en Windows 10 Pro fallaron después de algunos bloques \(háganos saber si ha visto un problema similar\)
*  \(solucionado en 1.9.45 \) los usuarios están informando problemas en un cierre completo de las máquinas virtuales / máquinas con Nethermind en ejecución: algunas corrupciones de la base de datos ocurren a menudo **requiriendo una resincronización**
* Los usuarios tuvieron problemas para sincronizar el nodo en un sistema de archivos ZFS, pero esto ha sido **resuelto después de eliminar ZFS**
* los usuarios informaron un problema en el que RocksDB mostraba `checksum mismatch`  un error en los registros - & gt; **reiniciar una VM  \(no Nethermind, pero la máquina \) ayudó**
* si intentaras lanzar Lighthouse con el viejo Nethermind \(pre **1.9.41**\)  que falló y luego volvió a sincronizar Nethermind y todavía está recibiendo errores **limpiar el Lighthouse DB y comenzar de nuevo lo resolverá**
{% endhint %}

