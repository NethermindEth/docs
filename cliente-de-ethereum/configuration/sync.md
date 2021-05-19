# Sync module

| Propiedad | Descripción | Predeterminado |
| :--- | :--- | :--- |
| AncientBodiesBarrier | \[EXPERIMENTAL\] Defines the earliest body downloaded in fast sync when DownloadBodiesInFastSync is enabled. Actual values used will be Math.Max\(1, Math.Min\(PivotNumber, AncientBodiesBarrier\)\) | 0 |
| AncientReceiptsBarrier | \[EXPERIMENTAL\] Defines the earliest receipts downloaded in fast sync when DownloadReceiptsInFastSync is enabled. Actual value used will be Math.Max\(1, Math.Min\(PivotNumber, Math.Max\(AncientBodiesBarrier, AncientReceiptsBarrier\)\)\) | 0 |
| BeamSync | Enables beam sync that can be useful to create some JSON RPC queries while the node is fast syncing in the background. | false |
| BeamSyncContextTimeout | Number of seconds before a single beam sync request expires and throw an exception. If you want your JSON RPC requests to keep trying then set this value to a higher number. | 4 |
| BeamSyncFixMode | Should use beam sync to fix corrupted state DB \(dev use\). | false |
| BeamSyncPreProcessorTimeout | Number of seconds to pass without progress before beam sync stops trying to process a single block. | 15 |
| BeamSyncVerifiedMode | When beam syncing should verify each state item loaded from DB \(dev use\). | false |
| DownloadBodiesInFastSync | Si se establece en `true` entonces los cuerpos de los bloques serán descargados en el modo Fast Sync | true |
| DownloadHeadersInFastSync | If set to 'false' then beam sync will only download recent blocks. | true |
| DownloadReceiptsInFastSync | Si se establece en `true` entonces los recibos se descargarán en Fast Sync mode. Esto ralentizará el proceso por unas horas, pero le permitirá interactuar con dApps que ejecutan búsquedas extensas de registros históricos \(como Maker CDPs\) | true |
| FastBlocks | Si se establece en `true`, en el modo Fast Sync, los bloques se descargarán primero desde el PivotNumber proporcionado hacia abajo. Esto permite la paralelización de solicitudes con muchos pares de sincronización y sin necesidad de preocuparse por sincronizar una rama válida \(sincronizar hacia abajo a 0\). Debes ingresar el número de bloque dinámico, el hash y la dificultad total de una fuente confiable \(puedes usar etherscan y confirmar con otras fuentes si desea cambiarlo\) | false |
| FastSync | Si se establece en `true` entonces se utilizará el algoritmo de sincronización Fast Sync \(eth/63\) | false |
| FastSyncCatchUpHeightDelta | Relevante solo si `FastSync` es `true`. Si se establece en un valor, establecerá un límite de umbral de altura mínimo hasta el cual FullSync, si ya está activado, permanecerá activado cuando la cadena esté detrás de la red. Si se supera este límite, volverá a FastSync. Tenga en cuenta que los últimos 32 bloques siempre se procesarán en FullSync, por lo que establecerlo en menos o igual a 32 no tendrá ningún efecto | 8192 |
| FixReceipts | \[ONLY FOR MISSING RECEIPTS ISSUE\] Turns on receipts validation that checks for ones that might be missing due to previous bug. It downloads them from network if needed.If used please check that PivotNumber is same as original used when syncing the node as its used as a cut-off point. | false |
| PivotHash | Hash del bloque de pivote para la sincronización de Fast Blocks | null |
| PivotNumber | Número del bloque de pivote para la sincronización de Fast Blocks | null |
| PivotTotalDifficulty | Dificultad total del bloque de pivote para la sincronización de Fast Blocks \(no -esto es dificultad total y no dificultad\) | null |
| SynchronizationEnabled | Si es `falso` entonces el nodo no descarga / procesa nuevos bloques. | true |
| UseGethLimitsInFastBlocks | Si se establece en `true`, entonces en el modo Fast Blocks, Nethermind genera solicitudes más pequeñas para evitar que Geth se desconecte. En las redes pesadas de Geth \(mainnet\) se desea mientras que en las redes pesadas de Parity o Nethermind \(Goerli, AuRa\) ralentiza la sincronización en un factor de ~ 4 | true |
| WitnessProtocolEnabled | Enables witness protocol. | false |

