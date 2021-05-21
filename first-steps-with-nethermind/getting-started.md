---
description: Un ejemplo de inicio rápido para la sincronización de Görli Testnet Nethermind
---

# Empezando

## 🔧 Configurar una máquina virtual

Si no está iniciando en su computadora portátil / computadora de escritorio, probablemente desee configurar una máquina virtual en la nube. Puede encontrar más información sobre cómo configurar todo con [proveedores en la nube] seleccionados (../guías-y-ayudantes/proveedores en la nube /).

{% page-ref page="../guides-and-helpers/cloud-providers/" %}

Asegúrese de configurar [firewall] (firewall-configuration.md) correctamente.

{% page-ref page="firewall-configuration.md" %}

Puede comprobar [sistemas operativos compatibles] (plataformas-compatibles.md) y arquitecturas y [requisitos de hardware] (requisitos de hardware.md).

{% page-ref page="supported-platforms.md" %}

{% page-ref page="hardware-requirements.md" %}

## ⏬ Descargando Nethermind

Primero debe descargar el paquete Nethermind. Actualmente hay 2 fuentes que proporcionan paquetes `Nethermind`. Consulte esta página para descubrirlos

{% page-ref page="../ethereum-client/download-sources/" %}

## 🔛 Lanzamiento de Nethermind

* [] Después de iniciar Nethermind a través de `. /Nethermind.Launcher`, primero debe elegir el nodo para comenzar.

![Opciones iniciales de Nethermind.Launcher](https://github.com/NethermindEth/nethermind/raw/master/docs/source/start/launcher.png)

* [] Seleccione `Goerli (red de testnet ligera Clique)`

![Opciones de red](https://github.com/NethermindEth/nethermind/raw/master/docs/source/start/goerli-choice.png)

* [] Seleccione el modo `Fast Sync`

![Opciones del modo de sincronización](https://github.com/NethermindEth/nethermind/raw/master/docs/source/start/fast-sync-choice.png)

* [] Asegúrese de que JSON RPC esté habilitado escribiendo `y` y presionando` enter`
* [] Presione `enter` para omitir la configuración de` Host IP` 127.0.0.1 se establecerá como predeterminado

{% hint style="warning" %}
If **not** running locall, you may need to change the `Host` value to the VM public IP address.
{% endhint %}

![Habilitación de JSON RPC a través de Nethermind.Launcher](https://github.com/NethermindEth/nethermind/raw/master/docs/source/start/json-choice.png)

* [] Omita el registro de ethstats escribiendo `y` y presionando` enter`

![Omitir configuración de EthStats](https://github.com/NethermindEth/nethermind/raw/master/docs/source/start/ethstats-choice.png)

## 👨💻 Explicando los registros de Nethermind

Después de que se inicie el nodo, verá información inicial sobre el nodo y luego comenzará la sincronización. La sincronización rápida de Görli utiliza inicialmente un modo de sincronización de `bloques rápidos`. La sincronización de `bloques rápidos` selecciona algún `pivot block` conocido del pasado y descarga los `headers`, `bodies` y `receipts` hacia abajo hasta llegar al `genesis block`. La pantalla de la consola muestra el número que crece de 0 a pivotar, pero esto es solo para que la pantalla sea más fácil de usar.

Verá información sobre el progreso de la sincronización, como a continuación:

1. Muestra el número de `headers`,` bodies` y `receipts` ya descargados de todos los que se descargarán en la etapa de bloques rápidos.
2. Muestra la cola actual de `blocks`,` headers` y `receipts` ya descargados esperando ser guardados en la base de datos.
3. Muestra la velocidad de descarga actual \(blocks per second - bps\).
4. Muestra la velocidad de descarga promedio \(blocks per second - bps\).

![Registros de sincronización de bloques rápidos](https://github.com/NethermindEth/nethermind/raw/master/docs/source/start/fast-blocks-sync-annotated.png)

Cuando finalice la etapa de bloques rápidos, habrá un período de descarga de bloques entre el `pivot` y los` últimos bloques` que tendrán información adicional:

1. Muestra la última entrada de la etapa de bloques rápidos.
2. Muestra el momento de transición de modo.
3. Muestra la velocidad \(en bloques por segund \) de todos los `headers`,` bodies` y `receipts` al mismo tiempo.
4. Aparecerá información adicional cada 30000 bloques con información sobre la época de Görli que se está almacenando.

![G&#xF6;rli registros de sincronización rápida](https://github.com/NethermindEth/nethermind/raw/master/docs/source/start/fast-sync-annotated.png)

Una vez finalizada la parte de `sincronización rápida`, el nodo pasará a la `etapa de sincronización de estado` cuando se esté descargando el `proceso de estado`. Se muestra mucha información sobre el progreso ya que este proceso puede llevar mucho tiempo en mainnet \(unas pocas horas\).

1. Se muestra el tiempo total transcurrido en `sincronización de estado`
2. Se muestra el tamaño total de la base de datos descargada \(en el mainnet, la sincronización termina alrededor de 34 GB en marzo de 2020, en Görli alrededor de 800 MB\).
3. Se muestra la velocidad de descarga en kilobytes por segundo.
4. Ocasionalmente puede aparecer un mensaje de revisión de la cola \(puedes ignorarlo\).
5. `P` representa el número de solicitudes paralelas actuales que el nodo está esperando.
6. `acc` representa la cantidad de datos de cuentas descargados.
7. `nodes` representa el número de `Patricia trie nodes` descargados por el proceso de sincronización.
8. `db_delay` muestra el tiempo empleado en el acceso de lectura / escritura a la base de datos. Cuanto mayor sea el valor, peor. Puede empeorar mucho si reinicia el nodo durante el proceso de sincronización, ya que se necesita volver a crear algunos cachés luego de leer los datos de la base de datos.
9. Ocasionalmente, mostramos información adicional sobre el estado de las solicitudes y las cachés que puede ignorar a menos que necesite informar algún problema.

![G&#xF6;rli registros de sincronización de estado](https://github.com/NethermindEth/nethermind/raw/master/docs/source/start/state-sync-annotated.png)

Cuando la sincronización de estado está a punto de completarse, es posible que vea una serie de información de `sincronización de rama` que se vuelve a cargar muchas veces desde el 0% hasta casi el 100%. Este es el nodo que intenta recuperar los pocos nodos de estado restantes y progresa rápidamente con el bloque principal:

![G&#xF6;rli registros de sincronización de rama](https://github.com/NethermindEth/nethermind/raw/master/docs/source/start/branch-sync.png)

En algún momento, se descarga todo el estado y el nodo entra en el modo de `sincronización completa` y le permitirá emitir consultas CLI / Web3 y enviar / recibir transacciones🥳

1. El `root` se guarda en el momento en que se descarga todo el` Patricia trie`.
2. También indicamos claramente que el nodo pasa a la `sincronización completa`.
3. Cuando veas que se está procesando el bloque, estás en la `sincronización completa` y se está calculando el bloque recién llegado.
4. Cada dos minutos, verá un resumen de los pares conectados con su versión de cliente, dirección IP, bloque sincronizado más alto y velocidades de descarga de datos.

![G&#xF6;rli registros de sincronización completos](https://github.com/NethermindEth/nethermind/raw/master/docs/source/start/full-sync-annotated.png)

Ahora puede iniciar CLI en el proceso separado \(iniciando Nethermind.Launcher nuevamente y seleccionando CLI en lugar de Node\). Puede leer más sobre [CLI aquí] (https://nethermind.readthedocs.io/en/latest/cli.html).

También puede conectarse al nodo desde Metamask seleccionando `localhost: 8545` de la lista de redes de Metamask.

![Conexión de metamask localhost](https://github.com/NethermindEth/nethermind/raw/master/docs/source/metamask/localhost.png)



