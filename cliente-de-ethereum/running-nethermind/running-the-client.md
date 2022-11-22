---
description: Ejecuta tu nodo Nethermind con nuestro cliente Ethereum multiplataforma
---

# Ejecutando el cliente

Chequea [Fuentes de descarga](https://github.com/NethermindEth/docs/tree/e7dcca48f72221e633ca307fe7c357d79c42a082/ethereum-client/%20download-sources%20/README.md) para obtener el último paquete de Nethermind para tu sistema operativo.

{% tabs %}
{% tab title="Linux" %}
* [x] [Descarga el paquete](../download-sources/)

```bash
wget [LINUX_PACKAGE_URL]
```

![Descargar paquete con wget](<../../.gitbook/assets/image (2).png>)

* [x] Instalar dependencias de Linux

```bash
sudo apt-get update && sudo apt-get install libsnappy-dev libc6-dev libc6 unzip -y
```

![Instalar dependencias de Linux](<../../.gitbook/assets/image (16).png>)

* [x] `unzip` el paquete

```bash
unzip [LINUX_PACKAGE_FILENAME] -d nethermind
```

![Unzip el paquete](<../../.gitbook/assets/image (7).png>)

* [x] Cambiar de directorio

```bash
cd nethermind
```

![Switch directory](<../../.gitbook/assets/image (8) (1) (1) (1) (1).png>)

* [x] Ejecuta `Nethermind.Launcher` y selecciona`Ethereum Node`

```bash
./Nethermind.Launcher
```

![Ejecuta Nethermind.Launcher](<../../.gitbook/assets/image (19).png>)

* [x] Seleccione la [red](../networks.md)

![Seleccione la red](<../../.gitbook/assets/image (14).png>)

* [x] Selecciona [modo de sincronización](../sync-modes.md)

![Selecciona el modo de sincronización](<../../.gitbook/assets/image (5).png>)

* [x] Configura `JSON RPC`/`EthStats` si es necesario

![JSON RPC / EthStats configuración](<../../.gitbook/assets/image (13).png>)

* [x] El nodo Nethermind ahora se está ejecutando 🎉, consulte este artículo para familiarizarse con los [registros](../../#explaining-nethermind-logs)

![Nethermind client running Ethereum Mainnet](<../../.gitbook/assets/image (18) (1) (1) (1) (1) (1) (1) (4) (2) (1) (3).png>)

{% hint style="danger" %}
## Para Ubuntu 16.04, necesitará instalar dependencias adicionales.
{% endhint %}

```bash
sudo add-apt-repository ppa:ubuntu-toolchain-r/test
sudo apt-get update
sudo apt-get install gcc-6 g++-6 -y
sudo apt install libzstd1 -y
```
{% endtab %}

{% tab title="Windows" %}
1. Descargue el paquete `Windows`
2. `unzip` el archivo
3. Ejecuta `Nethermind.Launcher.exe`
4. Seleccione la configuración deseada
{% endtab %}

{% tab title="MacOS" %}
* Descargar el paquete `Darwin`
* Instalar dependencias de `MacOS`

```
brew install gmp snappy lz4 zstd
```

* `unzip` el archivo
* Ejecuta `Nethermind.Launcher`
* ⚠ If you will be prompted with a warning, check instructions here -> [https://support.apple.com/en-us/HT202491](https://support.apple.com/en-us/HT202491)
* Seleccione la configuración deseada
{% endtab %}
{% endtabs %}
