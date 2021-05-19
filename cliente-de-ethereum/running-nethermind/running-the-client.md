---
description: Ejecuta tu nodo Nethermind con nuestro cliente Ethereum multiplataforma
---

# Ejecutando el cliente

Chequea [Fuentes de descarga](https://github.com/NethermindEth/docs/tree/784c230b658cce2db380be5e572663b39e27fb35/ethereum-client/%20download-sources%20/README.md) para obtener el último paquete de Nethermind para tu sistema operativo.

{% tabs %}
{% tab title="Linux" %}
* [x] [Descarga el paquete](../download-sources/)

```bash
wget [LINUX_PACKAGE_URL]
```

![Descargar paquete con wget](../../.gitbook/assets/image%20%282%29.png)

* [x] Instalar dependencias de Linux

```bash
sudo apt-get update && sudo apt-get install libsnappy-dev libc6-dev libc6 unzip -y
```

![Instalar dependencias de Linux](../../.gitbook/assets/image%20%2816%29.png)

* [x] `unzip` el paquete

```bash
unzip [LINUX_PACKAGE_FILENAME] -d nethermind
```

![Unzip el paquete](../../.gitbook/assets/image%20%287%29.png)

* [x] Cambiar de directorio

```bash
cd nethermind
```

![Switch directory](../../.gitbook/assets/image%20%288%29%20%281%29%20%281%29%20%281%29%20%281%29.png)

* [x] Ejecuta `Nethermind.Launcher` y selecciona`Ethereum Node`

```bash
./Nethermind.Launcher
```

![Ejecuta Nethermind.Launcher](../../.gitbook/assets/image%20%2819%29.png)

* [x] Seleccione la [red](../networks.md)

![Seleccione la red](../../.gitbook/assets/image%20%2814%29.png)

* [x] Selecciona [modo de sincronización](../sync-modes.md)

![Selecciona el modo de sincronizaci&#xF3;n](../../.gitbook/assets/image%20%285%29.png)

* [x] Configura `JSON RPC`/`EthStats` si es necesario

![JSON RPC / EthStats configuraci&#xF3;n](../../.gitbook/assets/image%20%2813%29.png)

* [x] El nodo Nethermind ahora se está ejecutando 🎉, consulte este artículo para familiarizarse con los [registros](../../#explaining-nethermind-logs)

![Nethermind client running Ethereum Mainnet](../../.gitbook/assets/image%20%2818%29%20%281%29%20%281%29%20%281%29%20%281%29%20%281%29%20%281%29%20%282%29.png)

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

```text
brew install gmp snappy lz4 zstd
```

* `unzip` el archivo
* Ejecuta `Nethermind.Launcher`
* ⚠ If you will be prompted with a warning, check instructions here -&gt; [https://support.apple.com/en-us/HT202491](https://support.apple.com/en-us/HT202491)
* Seleccione la configuración deseada
{% endtab %}
{% endtabs %}

