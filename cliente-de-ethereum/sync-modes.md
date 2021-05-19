# Modos de sincronización

## Hay tres modos de sincronización principales

* sincronización rápida
  * descarga solo el estado, los encabezados y, opcionalmente, los cuerpos y los recibos más recientes
  * puedes ejecutarlo así: `./Nethermind.Runner --config mainnet`
  * si tienes una buena conexión y una máquina razonable, entonces establecer --Network.MaxActiveSyncPeers en 256 \(consulte la sección Configuración de red en la configuración \) debería proporcionar tiempos de sincronización mucho mejores \(usamos 256 pares para obtener 5 horas de sincronización\) [https://docs.nethermind.io/nethermind/ethereum-client/configuration/modules/network](https://docs.nethermind.io/nethermind/ethereum-client/configuration/modules/network)
* sincronización de destello
  * Igual que la sincronización rápida, pero también permite consultar la cadena en los primeros minutos desde el inicio.
  * puedes ejecutarlo así: `./Nethermind.Runner --config mainnet_beam`
* sincronización de archivos
  * sincronización histórica pesada que verifica todas las transacciones y mantiene todo el estado histórico
  * puede ejecutarlo así `./Nethermind.Runner --config mainnet_archive`

| Modo de sincronización | Espacio en disco necesario | Estado actual completo | Estado actual completo y todos los estados históricos | Puedes sincronizar un nodo de archivo completo desde este | Es hora de sincronizar | Tiempo para RPC |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| archivo | ~5TB | SÍ | SÍ | SÍ | ~ 3 semanas | ~ 3 semanas |
| sincronización rápida predeterminada \(con barreras configuradas para admitir Eth2\) | ~100GB | SI | NO | NO | ~ 11 horas | ~ 11 horas |
| sincronización rápida con todos los cuerpos y recibos | ~320GB | SI | NO | SI | ~20 horas | ~20 horas |
| sincronización rápida sin recibos | ~130GB | SI | NO | SI | ~ 12 horas | ~ 12 horas |
| sincronización rápida sin cuerpos ni recibos | ~70GB | SI | NO | NO | ~9 horas | ~9 horas |
| sincronización destello | ~320GB | SI | NO | SI | ~30 horas | ~20 minutos |
| sincronización destellos sin recibos | ~140GB | SI | NO | SI | ~ 20 horas | ~20 minutos |
| sincronización destello sin cuerpos ni recibos | ~80GB | SI | NO | NO | ~10 horas | ~20 minutos |
| sincronización destello sin encabezados históricos | ~60GB | SI | NO | NO | ~9 horas | ~ 5 minutos |

## Sincronización rápida

La sincronización rápida es probablemente el método de sincronización más popular. Después de completar la sincronización rápida, su nodo tendrá la capacidad de responder preguntas como _'cuánto es el saldo de mi cuenta  **ahora** '_, _'cuántos tokens XYZ tiene SomeExchange **en este momento**'_.

La sincronización rápida es el método de sincronización predeterminado en Nethermind, por lo que cada vez que inicie configuraciones estándar, terminará usando Fast Sync.

`./Nethermind.Runner --config mainnet`

`./Nethermind.Runner --config goerli`

La sincronización rápida tiene varias etapas. Nethermind utiliza un número de `pivot block` para mejorar el rendimiento de la sincronización rápida. Los datos del `pivot block` se proporcionan en el archivo de configuración y consisten en el `block number`, el `block hash` y el `block total difficulty`.  \(tenga en cuenta que la `dificultad total` es diferente a la `dificultad`\). Tenga en cuenta que el significado de `pivot block` es diferente en Nethermind que en otros clientes, por ejemplo. Antes de sincronizar los datos de estado, Nethermind se sincroniza en dos direcciones: hacia atrás desde el `pivot block` a 0 para los encabezados y hacia adelante al encabezado de la cadena para los encabezados, bloques y recibos. La sincronización directa puede ser muy lenta \(5 - 50 bps\) por lo que es importante que utilice la última configuración o actualice su configuración antes de la sincronización.

Después de descargar los datos del bloque, Nethermind iniciará la sincronización de estado  \(descargando los últimos nodos de prueba de estado \). Proporcionamos una estimación del tamaño y el progreso de la descarga, pero el valor real puede ser diferente a la estimación. \(especialmente si está utilizando una versión antigua de Nethermind, ya que a veces ajustamos manualmente el estimador en función de nuestras observaciones de la tasa de crecimiento de la cadena\). Debido a esto, a veces su sincronización puede continuar incluso cuando muestra ~ 100% finalizada. El otro componente importante es la velocidad de su sincronización: si su IO/network/ sistema de archivos hace que la sincronización del estado sea mucho más lenta que alrededor de 1.5 MB por segundo en promedio, entonces comenzará a descargar algunas partes del trie una y otra vez. En tales casos, es posible que se sorprenda al ver algo como 58000 MB /53000 MB \(100%\). Significa que descargó alrededor de 5 GB de datos que ya no son necesarios. Si su sincronización es muy lenta \(se extiende más allá de dos días \), es muy probable que su configuración no pueda ponerse al día con el progreso de la cadena.

Después de que finalice la sincronización de estado, verá los mensajes _'Processed ...'_ como en la sincronización de archivos; significa que su nodo está sincronizado y está procesando los últimos bloques.

La sincronización de Mainnet, al momento de escribir  \(diciembre de 2020 \), toma alrededor de 8 horas en un UpCloud 16GB RAM 8 CPU $ 40 VM  \(y luego sincroniza recibos y cuerpos en segundo plano si los habilitó en la configuración \). La sincronización de Goerli debería tardar unos 40 minutos.

![Ejemplo de registros de sincronizaci&#xF3;n r&#xE1;pida para mainnet.](../.gitbook/assets/image%20%2859%29.png)

Los mensajes de registro de sincronización de estado tienen varios valores mostrados. Primero se muestra el tiempo total de sincronización del estado `dd.HH: mm: ss`, seguido de un progreso de sincronización estimado \(porcentaje del total de datos sincronizados de la base de datos\), luego se muestra la velocidad de descarga actual  \(habrá momentos en los que reduzca la velocidad a 0 o números de un solo dígito, especialmente hacia el final de la sincronización \). En general, los tiempos de sincronización de 6 horas que se muestran en las capturas de pantalla tienen una velocidad de sincronización promedio de alrededor de 2000 kB/s\(kilobytes por segundo\). Puede calcularlo en el ejemplo como ~ 45GB /  \(2MB/s \) ~ 22500 segundos ~ 6.25 horas. También mostramos la cantidad de cuentas estatales sincronizadas, la cantidad de nodos trie sincronizados y un mensaje de diagnóstico en el formato de   _\[número_   de  _pending  \_requests\]. \[Tiempo promedio empleado en el controlador de respuesta mostrado como milisegundos \]_  . Entonces, `5.6.20ms`significa que estamos esperando respuestas a 5 solicitudes que se han enviado a pares y el tiempo medio que nos lleva procesar una única respuesta es de 6,20 ms. Los tiempos de manejo de respuesta diferirán dependiendo de cuántos nodos de prueba ya estén almacenados en caché  \(por lo que serán significativamente más lentos durante un tiempo después del reinicio del nodo cuando la caché debe reconstruirse \) y según la rapidez con la que la IO de la base de datos es  \(SSD vs NVMe vs unidades en la nube \). Durante un tiempo de sincronización razonable, probablemente debería esperar que estos valores estén por debajo de 15 ms \(pero pueden ser tan altos como 700 ms durante un tiempo después de reiniciar el nodo\).

Un solo reinicio del nodo durante la sincronización rápida puede extender el tiempo de sincronización hasta dos horas porque el nodo tiene que reconstruir las cachés leyendo millones de valores de la base de datos.

En las últimas etapas de la sincronización, el nodo mostrará repetidamente el progreso de la sincronización de la rama y cambiará el número de bloque al que intenta ponerse al día. Esta etapa debería durar entre 30 minutos y dos horas. Si dura mucho más, es posible que no pueda ponerse al día con el progreso de la red.

Uno de los mejores indicadores de que está a punto de sincronizarse es el progreso combinado de ~ 100% del tamaño del estado y casi el 100% de progreso de sincronización de rama.

![](../.gitbook/assets/image%20%2864%29.png)

![](../.gitbook/assets/image%20%2862%29.png)

## Beam Sync

WARNING: we suggest that you do not pick the beam sync without the full understanding of its current downsides and benefits. Generally beam sync can only be useful for you if you know how to query the beam synced JSON RPC and you need it within the first 30 minutes of sync or so.

Current downsides of beam sync:

* JSON RPC queries have to be executed in a specific way \(they may timeout multiple times before you finally receive a valid response\)
* background state sync will be significantly slower \(and may be syncing long after the downloaded state shows 100%\)
* because of the longer sync times we test beam sync less thoroughly and we think there may be still some issues with the transition between the state sync and full sync at the last stages of the beam sync \(in fact we are just addressing on of such issues in the current 'wit' protocol testing that should be coming in early 1.10.x versions\)
* without the 'wit' protocol that we are currently working on, the mainnet beam sync can be quite inefficient in querying the recent blocks

Current benefits of the beam sync:

* if you know what you are doing, beam sync can give you state access very, very quickly \(within 10 - 30 minutes from starting the sync\)
* similarly to the above, if you know how to work with beam sync, you can start sending transactions from the beam sync node very quickly

La forma más sencilla de explicar la sincronización de haces es decir que la sincronización de haces es exactamente la misma que la sincronización rápida, pero además descarga los datos de estado  \(testigos \) de los últimos bloques. También permite ejecutar algunas consultas sobre el estado actual a través de JSON RPC mucho antes de que finalice la sincronización rápida real. Actualmente, la sincronización de haces requiere más recursos que la sincronización rápida y ralentiza significativamente la sincronización rápida, pero le permite consultar la cadena de bloques a los pocos minutos de comenzar.

![Beam sync logs ejemplo.](../.gitbook/assets/image%20%2860%29.png)

Cuando se muestra el mensaje _'Beam sync is ON'_, generalmente significa que puede preguntar sobre los últimos encabezados, las últimas transacciones, puede preguntar sobre `eth_getBalance`,`eth_getCode`, `eth_call`,`debug_trace`, `trace_replayTransactions`etc. No puedes preguntar acerca de los recibos o registros de transacciones, ya que la mayoría de ellos aún no se procesan. Con la sincronización de haces es posible crear y difundir transacciones de transferencia de Ether o token desde el nodo.

![](../.gitbook/assets/image%20%2865%29.png)

## Sincronización de archivos

La sincronización de archivos es el modo de sincronización 'más pesado' y más lento, pero permite hacer preguntas como  _'¿Cuál era el saldo de mi cuenta hace 2 años?'_ ,  _'¿Cuántos tokens XYZ se mantuvieron bajo la custodia de algunos Exchange en 2017?'_.

Hemos preparado configuraciones de sincronización de archivos predeterminadas y se pueden iniciar desde Nethermind Launcher \(solo elija las opciones de archivo\) o simplemente cargando la configuración apropiada al iniciar `./Nethermind.Runner --config mainnet_archive`

`./Nethermind.Runner --config goerli_archive`

Mientras que para algunas redes más pequeñas, la sincronización de archivos puede completarse muy rápidamente \(en minutos u horas\) la sincronización de mainnet tomaría de 2 a 6 semanas dependiendo de la velocidad de su IO  \(ya sea que use SSD o NVMe o dependiendo del proveedor de nube IOPS  \). El tamaño de la base de datos en la sincronización de archivos es el más grande de todos los modos, ya que almacenará todos los datos históricos.

![Ejemplo de registros de sincronizaci&#xF3;n de archivos](../.gitbook/assets/image%20%2858%29.png)

![](../.gitbook/assets/image%20%2857%29.png)

Explicación de algunos datos en los registros:

* al principio, es posible que vea un mensaje _'Esperando pares ...'_ mientras el nodo está tratando de descubrir nodos con los que se puede sincronizar.
* _'Downloaded 1234/8000000'_ muestra el número de bloques sin procesar  \(con transacciones \) descargados de la red. Para `mainnet`, este valor puede ser más lento que el procesamiento al principio, pero muy rápidamente verá que los bloques se descargan mucho más rápido de lo que se procesan. Los bloques vacíos pueden ser tan pequeños como 512 bytes  \(solo encabezados sin transacciones \) y los bloques completos con transacciones pesadas pueden alcanzar algunos cientos de kilobytes. Mostramos tanto la velocidad de descarga actual \(calculada en el último segundo\) como la velocidad promedio \(total\) desde que se inició el nodo.
* _'Processed ...'_ muestra los bloques que han sido procesados por EVM. El primer número muestra el número de bloque de cabeza actual, luego puede ver `mgasps` \(millones de gas por segundo\) - actual y total, luego`tps` \(transacciones por segundo\) - actual y total, `bps`  \(bloques por segundo \). Luego, `recv queue`  \(cola de recuperación de clave pública de firma de transacciones \),`proc queue`  \(procesador de cola \). Tanto la cola de recuperación como la cola del procesador están diseñadas para que cuando haya demasiados bloques en espera de procesamiento, solo sus hashes se mantengan en la memoria y los datos restantes se almacenen en la base de datos. Por lo tanto, los números de las colas que puede ver estarán limitados por algún número.
* _'Cache for epoch ...'_ informa sobre la caché `ethash` necesaria para la verificación del sello de bloque  \(solo en`mainnet` y `ropsten`\). Los cachés se calcularán cada 30000 bloques \(duración de una época\) pero también se pueden calcular para los últimos bloques que se transmiten en la red.
* Una vez finalizada la sincronización del archivo, verá el mensaje _'Processed ...'_ que aparece en promedio cada 15 segundos cuando se procesa el nuevo bloque.
* Los valores de `mgasps`,`tps`, `bps` no deben tratarse como comparables, ya que pueden diferir enormemente en diferentes partes de la cadena. Por ejemplo, cuando los bloques están vacíos, puede ver valores muy altos de `bps` con valores muy bajos de \(o incluso cero\)`tps` y `mgasps` ya que no hay transacciones ni gas para el procesamiento de EVM y los bloques son muy livianos. Por otro lado, cuando los bloques están llenos de transacciones muy pesadas, entonces `bps` puede ser muy bajo mientras que`mgasps` será muy alto. Incluso es posible que vea muchas transacciones muy ligeras donde `tps` será alto mientras que`bps` y `mgasps` serán promedio.

