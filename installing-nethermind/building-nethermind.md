# Building From Source

## Installing Dependencies

To build Nethermind on any platform you will need to install **Git** and the **.NET SDK 6.0.**

{% embed url="https://git-scm.com/downloads" %}

{% embed url="https://dotnet.microsoft.com/en-us/download" %}

Depending on the platform you are using you may need to install extra dependencies.

### Windows

This is not needed in all cases. Only install if you get an error during the build process.

{% embed url="https://docs.microsoft.com/en-US/cpp/windows/latest-supported-vc-redist?view=msvc-170" %}

### MacOS

MacOS users will have to install the following dependencies.

```bash
brew install gmp snappy lz4 zstd
```

<details>

<summary>Apple Silicon (M1) users only</summary>

You will need to create symlink for homebrew dependencies.

```bash
sudo ln -s find /opt/homebrew/Cellar/snappy -name "libsnappy.dylib" /usr/local/lib/libsnappy.dylib
```

</details>

### Linux

<details>

<summary>Ubuntu</summary>

## amd64

```
sudo apt-get install libsnappy-dev libc6-dev libc6
```

#### Link Libraries For 21.04+

```
/sudo ln -s /usr/lib/x86_64-linux-gnu/libdl.so.2 /usr/lib/x86_64-linux-gnu/libdl.so
```

## arm64/aarch64

```
sudo apt-get install libsnappy-dev libc6-dev libc6 libgflags-dev
```

#### Link Libraries For 21.04+

```
/sudo ln -s /usr/lib/aarch64-linux-gnu/libdl.so.2 /usr/lib/aarch64-linux-gnu/libdl.so
```

</details>

<details>

<summary>Debian</summary>

```
sudo apt-get install libsnappy-dev libc6-dev libc6
```

</details>

<details>

<summary>CentOS</summary>

```
sudo yum install -y glibc-devel bzip2-devel libzstd
```

#### Link Libraries

```
sudo ln -s `find /usr/lib64/ -type f -name "libbz2.so.1*"` /usr/lib64/libbz2.so.1.0 && \
sudo ln -s `find /usr/lib64/ -type f -name "libsnappy.so.1*"` /usr/lib64/libsnappy.so
```

</details>

<details>

<summary>Fedora</summary>

```
sudo yum install -y glibc-devel snappy libzstd
```

#### Link Libraires

```
sudo ln -s `find /usr/lib64/ -type f -name "libbz2.so.1*"` /usr/lib64/libbz2.so.1.0 && \
sudo ln -s `find /usr/lib64/ -type f -name "libsnappy.so.1*"` /usr/lib64/libsnappy.so
```

#### Extra Requirements For Fedora 35

```
//sudo ln -s `find /usr/lib64/ -type f -name "libdl.so.2*"` /usr/lib64/libdl.so
```

</details>

## Building Nethermind

After you have installed all of the dependencies for your platform you need to clone the Nethermind repo from GitHub.

```
git clone --recursive https://github.com/NethermindEth/nethermind.git
```

Once the download has finished enter the `nethermind/src/Nethermind` directory and run the build command.

```bash
cd nethermind/src/Nethermind
dotnet build Nethermind.sln -c Release
```

Follow the link for instructions on running Nethermind

{% content-ref url="../ethereum-client/running-nethermind/" %}
[running-nethermind](../ethereum-client/running-nethermind/)
{% endcontent-ref %}

## Directories

If you built the application locally then the entry point will be located in:

```bash
src/Nethermind/Nethermind.Runner/bin/Release/netcoreapp3.1/
```

Log files by default are located in:

```bash
src/Nethermind/Nethermind.Runner/bin/Release/netcoreapp3.1/logs
```

Database by default is located in:

```bash
src/Nethermind/Nethermind.Runner/bin/Release/netcoreapp3.1/nethermind_db
```
