# Compilando Nethermind

### IDE \(opcional \)

* [JetBrains Rider](https://www.jetbrains.com/rider/)
* [VS Code](https://code.visualstudio.com/docs/other/dotnet)

### SDKs

Para compilar Nethermind  **1.9.\*** necesitarás ** .NET SDK 3.1 **. Puedes descargarlo aquí \(asegúrate de seleccionar la plataforma y distribución correctas\):

{% embed url="https://dotnet.microsoft.com/download" caption=".NET SDK for Linux, macOS, Windows" %}

Para compilar Nethermind **1.10.\*** necesitarás **.NET SDK 5.0** . Puedes descargarlo desde la URL anterior.

### Linux

{% tabs %}
{% tab title="Linux \(Ubuntu 18.04+/Debian 10\)" %}
```
sudo apt-get update && sudo apt-get install libsnappy-dev libc6-dev libc6
```
{% endtab %}

{% tab title="Linux \(Ubuntu 16.04\)" %}
```text
sudo apt-get update && sudo apt-get install libsnappy-dev libc6-dev libc6 && \
sudo add-apt-repository ppa:ubuntu-toolchain-r/test && \
sudo apt-get update && \
sudo apt-get install gcc-6 g++-6 && \
sudo apt install libzstd1
```
{% endtab %}

{% tab title="Linux \(CentOS 8\)" %}
    sudo yum install -y glibc-devel && \
    sudo yum install -y bzip2-devel && \
    sudo yum install -y libzstd && \
    sudo ln -s `find /usr/lib64/ -type f -name "libbz2.so.1*"` /usr/lib64/libbz2.so.1.0 && \
    sudo ln -s `find /usr/lib64/ -type f -name "libsnappy.so.1*"` /usr/lib64/libsnappy.so
{% endtab %}

{% tab title="Linux \(Fedora 31\)" %}
    sudo yum install -y glibc-devel && \
    sudo yum install -y snappy && \
    sudo yum install -y libzstd && \
    sudo ln -s `find /usr/lib64/ -type f -name "libbz2.so.1*"` /usr/lib64/libbz2.so.1.0 && \
    sudo ln -s `find /usr/lib64/ -type f -name "libsnappy.so.1*"` /usr/lib64/libsnappy.so
{% endtab %}
{% endtabs %}

### MacOS

```text
brew install gmp snappy lz4 zstd
```

### Windows

Es posible que debas instalar [https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads)

### Todas las Plataformas

{% hint style="warning" %}
If dotnet command is not found then probably you forgot to install SDK \(see instructions above\)
{% endhint %}

{% hint style="info" %}
On Linux distributions we suggest that at this stage you start `screen` so you can go back to session with `screen -rd` command later on
{% endhint %}

Clona el repositorio de Nethermind y sus submódulos, luego compile Nethermind en el modo `Release` o `Debug`.

```bash
git clone https://github.com/NethermindEth/nethermind.git --recursive
cd nethermind/src/Nethermind
dotnet build Nethermind.sln -c Release
```

Inicie goerli testnet para sincronizaciones rápidas y pruebas

```bash
cd Nethermind.Runner
dotnet run --no-build -c Release -- --config goerli
```

Puedes confirmar el último bloque de la tetsnet Goerli aquí:

{% embed url="https://blockscout.com/eth/goerli/" %}

o para ejecutar Ethereum Mainnet

```text
cd Nethermind.Runner
dotnet run --no-build -c Release -- --config mainnet
```

### Problemas Potenciales

Si tiene instaladas algunas versiones preliminares de .NET Core instaladas, pueden causar conflictos. Su caso puede ser único, por lo que es mejor buscar ayuda en línea.

