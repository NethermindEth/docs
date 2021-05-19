# FAQ

## How do I upgrade my node prior to the upcoming Ethereum Berlin fork?

All details regarding the upgrade can be found on the official EF announcement [https://blog.ethereum.org/2021/03/08/ethereum-berlin-upgrade-announcement/](https://blog.ethereum.org/2021/03/08/ethereum-berlin-upgrade-announcement/)

### Upgrading Nethermind for Docker users

Pull the latest version of Nethermind using the `latest` or `1.10.58` version tag.

```text
docker pull nethermind/nethermind:1.10.58
```

or pull with docker-compose if the `nethermind/nethermind` base image is specified

```text
docker-compose pull
```

### Upgrading Nethermind for Systemd users

Simply download the latest Nethermind package either from [https://downloads.nethermind.io](https://downloads.nethermind.io/) or [https://github.com/NethermindEth/nethermind/releases](https://github.com/NethermindEth/nethermind/releases) and make sure that the package is extracted in the `WorkingDirectory` path defined in your `systemd` service.

```text
WorkingDirectory=/home/nethermind/nethermind
```

### Upgrading Nethermind when running as a background process

Download the latest Nethermind package either from [https://downloads.nethermind.io](https://downloads.nethermind.io/) or [https://github.com/NethermindEth/nethermind/releases](https://github.com/NethermindEth/nethermind/releases) and extract the package in the folder you currently use for running Nethermind.

## ¿Cuál es la configuración mínima viable para atender las solicitudes del validador ETH2?

Esta configuración descarga una cantidad mínima de cuerpos y recibos para poder atender las solicitudes del validador ETH2 desde la implementación del contrato de depósito. También habilita JSON RPC \(**asegúrese de no abrir el firewall al mundo exterior**\)

./Nethermind.Runner --config mainnet --JsonRpc.Enabled true --Sync.DownloadBodiesInFastSync true --Sync.DownloadReceiptsInFastSync true --Sync.AncientBodiesBarrier 11052984 --Sync.AncientReceiptsBarrier 11052984 --Init.BaseDbPath /your/db/path

**Si sincronizó con versiones anteriores a la 1.9.39:**

Actualice a 1.9.39 y ejecútelo una vez con '--Sync.FixReceipts true' y esto debería reparar su base de datos si falta algún logs / receipts.. Asegúrese de seguir las pautas de actualización:

{% page-ref page="upgrades.md" %}

Si tiene algún problema, comuníquese en Discord: [https://discord.gg/X539yhn](https://discord.gg/X539yhn)

## ¿Puedo deshabilitar el registro para archivar?

{% page-ref page="../cliente-de-ethereum/logging-configuration.md" %}

## ¿Puedo deshabilitar el registro de llamadas JSON RPC?

{% page-ref page="../cliente-de-ethereum/logging-configuration.md" %}

## ¿Cómo puedo configurar el validador en AuRa / Clique?

Puede encontrar más detalles sobre la ejecución de validadores en los documentos - & gt; para [AuRa](https://docs.nethermind.io/nethermind/guides-and-helpers/validator-setup/aura-validator) y para [Clique](https://docs.nethermind.io/nethermind/ethereum-client/private-networks/how-to-setup-a-nethermind-only-clique-based-chain).

{% page-ref page="validator-setup/aura-validator.md" %}

{% page-ref page="../cliente-de-ethereum/private-networks/how-to-setup-a-nethermind-only-clique-based-chain.md" %}

## El ancho de banda de mi red está agotado por el nodo Nethermind

Intente cambiar la configuración a un número menor \(`--Network.ActivePeersMaxCount 25`\)

## ¿Mi nodo está sincronizado?

Su nodo se sincroniza cuando muestra líneas de registro que comienzan con:

`Processed ...`

Y los números de bloque que se muestran están al principio de la cadena.

_En blockchain, ningún nodo nunca puede estar 100% seguro de que está sincronizado porque no hay una fuente central de la verdad por lo que su nodo generalmente no puede decirle que está sincronizado, pero sí puede decirle que cree que está sincronizado en función de lo que sabe de los pares con los que habla\)._

