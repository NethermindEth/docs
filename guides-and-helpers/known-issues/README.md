---
description: Hay varios problemas conocidos con la versión actual de Nethermind
---

# Problemas conocidos

## Problema de checksum RocksDB

Se nos ha señalado que en algunos discos, RocksDB puede fallar con una excepción similar a la siguiente:

2020-11-29 12:02:01.1968\|BlockchainProcessor encountered an exception. RocksDbSharp.RocksDbException: Corruption: block checksum mismatch: expected 2087346143, got 2983326672 in C:\Nethermind\nethermind\_db/mainnet\state/037463.sst offset 33439089 size 16319

Curiosamente, lo que funcionó para algunos usuarios fue cerrar Nethermind, reiniciar la VM en la que se está ejecutando y lanzar Nethermind nuevamente. Esto pasa a ser un problema de RocksDB en algunos de los sistemas de los proveedores de la nube. Agregaremos más detalles cuando sepamos más sobre el problema.

## Archivos de LOCK de base de datos no eliminados por RocksDB

Si el nodo se queja de los archivos LOCK, puede significar una de las dos cosas:

\ (1 \) otro proceso Nethermind se está ejecutando y usa la misma base de datos

\(2 \) el proceso anterior no cerró la base de datos correctamente

Cuando ocurra \(2\) puedes correr

`find . -type f -name 'LOCK' -delete`

en la carpeta de la base de datos.

## Descriptores de Leaking Socket

En Linux, nuestra biblioteca de redes no cierra correctamente los descriptores de socket. Esto da como resultado que el número de archivos abiertos para el proceso crezca indefinidamente. Los límites para la cantidad de archivos abiertos por proceso son diferentes para usuarios raíz y otros. Para root, los límites suelen ser muy altos y los descriptores de socket probablemente no causarían muchos problemas. Muchos de los operadores de la nube están lanzando máquinas virtuales con acceso de usuario raíz de forma predeterminada. Si el proceso de Nethermind es anulado con frecuencia por el sistema operativo, es posible que deba cambiar la configuración para el número máximo de archivos abiertos.

## RocksDB en macOS

La libreria RocksDB no siempre se carga correctamente en macOS. Una solución \ (hacky \) es instalar la última versión de RocksDB ejecutando brew install rocksdb.

## Omitir bloques de problemas de consenso

Hacemos nuestro mejor esfuerzo en Nethermind para no tener problemas de consenso con otros clientes. Pero históricamente habían ocurrido problemas de consenso. En ese caso, comenzamos a trabajar en una revisión de inmediato y la lanzamos en cuestión de horas. Si necesita que su nodo esté operativo lo antes posible y no puede esperar a la revisión, tiene una opción para lograrlo. El nodo Nethermind le permite sincronizar rápidamente los bloques y el estado recientes. Cuando el nodo realiza una sincronización rápida, puede omitir el procesamiento de bloques problemáticos. Para poder realizar una sincronización rápida, necesitamos que SyncConfig.FastSync esté configurado como "verdadero". También debe establecer SyncConfig.FastSyncCatchUpHeightDelta en un valor más bajo que la distancia a la que se encuentra su nodo detrás de la cadena. SyncConfig.FastSyncCatchUpHeightDelta es la diferencia mínima entre la altura de la cadena actual y el número de bloque de la cabeza de la cadena cuando el nodo puede cambiar de sincronización completa \ (procesamiento de bloques \) a sincronización rápida. De forma predeterminada, está configurado en 1024. Tenga en cuenta que no recomendamos establecer este valor en menos de 32 en circunstancias normales. Después de establecer esos valores y reiniciar el nodo, el nodo descargará encabezados de bloque, cuerpos \ (si SyncConfig.DownloadBodiesInFastSync es "verdadero" \), recibos \ (si SyncConfig.DownloadReceiptsInFastSync es "verdadero" \) y estado actual. Después de eso, se reanudará el procesamiento desde el nuevo bloque de cabeza. Tenga en cuenta que es posible que el estado histórico de los bloques omitidos no esté disponible. Esto puede hacer que algunas llamadas JSON RPC en el estado histórico no funcionen, la misma situación que si se poda el estado de estos bloques.

Por ejemplo, si el número de bloque de cabeza de cadena actual es 10,000,100 y el nodo no pudo procesar el bloque 10,000,000 debido a un problema de consenso, si configura FastSync: true y FastSyncCatchUpHeightDelta: 100 \(o tan bajo como 32\) y el nodo debe cambiar a sincronización rápida, ponerse al día con la cabeza de la cadena actual y volver a la sincronización completa.

El tiempo que llevará la sincronización rápida con el cabezal de la cadena actual puede llevar incluso hasta 2 horas, dependiendo de cuántos bloques y cuánto estado nuevo haya que descargar.

