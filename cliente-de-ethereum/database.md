---
description: información de dbpath y bases de datos
---

# Base de datos

Nethermind usa la base de datos \[RocksDB\] \([https://rocksdb.org](https://rocksdb.org)\) para almacenar el estado. De forma predeterminada, la base de datos se almacena en el mismo directorio donde están los binarios del cliente. Puedes cambiar eso proporcionando la configuración `--baseDbPath` en la línea de comandos, por ejemplo ,`./ Nethermind.Runner --config goerli --baseDbPath /home/username/nethermind_db`

Después de iniciar Nethermind, verá que aparecen varios directorios en el directorio _baseDbPath_.

![Ejemplo del directorio DB en una m&#xE1;quina virtual Ubuntu reci&#xE9;n implementada con Nethermind.](../.gitbook/assets/image%20%2861%29.png)

| Directorio de base de datos | Contenido |
| :--- | :--- |
| blockInfos | Información sobre bloques en cada nivel del árbol de bloques \(cadena canónica y ramas\) |
| blocks | Cuerpos de bloque \(bloquear transacciones y datos del tío\) |
| bloom | Indices de bloom para búsquedas rápidas de registros |
| canonicalHashTrie | Datos relacionados con el protocolo LES |
| code | bytecodes del contrato |
| discoveryNodes | Pares descubiertos a través del protocolo de descubrimiento: se usa para emparejamiento rápido después de reiniciar \(puedes copiar esta base de datos entre nodos para acelerar el emparejamiento\) |
| headers | Headers solo del bloque |
| pendingTx | \(esta base de datos se borra en cada reinicio\) caché de 2 nivel de transacciones pendientes / mempool \(1 nivel está en la memoria\) |
| peers | almacena información adicional de pares de sincronización \(como reputación de pares\): puedes copiar esta base de datos entre nodos para acelerar el intercambio de tráfico en una nueva sincronización |
| receipts | Datos de recibos de transacciones |
| state | Los estados de blockchain incluye las cuentas y almacenamiento por contrato \(Patricia trie nodos\) |

Puedes usar `rsync` entre sus nodos para clonar la base de datos \(Uno de nuestros usuarios copió el estado completo del archivo de 4.5TB de esta manera mientras el nodo se estaba ejecutando y solo detuvo el nodo para la última etapa de`rsync`\). También puedes simplemente copiar la base de datos entre los sistemas Unix y Windows \(y probablemente macOS\).

