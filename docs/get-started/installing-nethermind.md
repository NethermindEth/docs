---
title: Installing Nethermind
sidebar_label: Installing Nethermind
sidebar_position: 2
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Nethermind can be installed in several ways:

- [Via a package manager](#package-managers)
- [As a standalone download](#standalone-downloads)
- [As a Docker container](#docker-container)
- [By building from source code](../for-developers/building-nethermind.md)

## Prerequisites
:::info
Does not apply to Docker distributions.
:::

<Tabs groupId="os">
<TabItem value="linux" label="Linux">

On Linux systems, Snappy is a required dependency. Below are the installation instructions for the supported distros.

#### Ubuntu and Debian-based distros

```bash
sudo apt-get install libsnappy-dev
```

#### CentOS, Fedora, and RHEL-like distros

```bash
sudo dnf install snappy
```

On RHEL-like systems, Nethermind also requires the following symlink to bzip2:

```bash
sudo ln -s `find /usr/lib64/ -type f -name "libbz2.so.1*"` /usr/lib64/libbz2.so.1.0
```

</TabItem>
<TabItem value="windows" label="Windows">

Although the modern versions of Windows are bundled with a recent version of [Microsoft Visual C++ Redistributable](https://aka.ms/vcredist), in some cases, it may need an update:

```powershell
winget install Microsoft.VCRedist.2015+.x64
```

</TabItem>
<TabItem value="macos" label="macOS">None</TabItem>
</Tabs>

## Package managers

Package managers are the easiest and fastest way of installing Nethermind.

### Ubuntu

On Ubuntu and other Linux distros supporting PPA, Nethermind can be installed via Launchpad PPA.

First, add the Nethermind repository:

```bash
sudo add-apt-repository ppa:nethermindeth/nethermind
```

:::note
If the command is not found, run:

```bash
sudo apt-get install software-properties-common
```
:::

Then, install Nethermind as follows:

```bash
sudo apt-get update
sudo apt-get install nethermind
```

### Windows

On Windows, Nethermind can be installed via Windows Package Manager as follows:

```powershell
winget install nethermind
```

### macOS

On macOS, Nethermind can be installed via Homebrew.

First, add the Nethermind repository:

```sh
brew tap nethermindeth/nethermind
```

Then, install Nethermind as follows:

```sh
brew install nethermind
```

For further instructions, see [Running Nethermind](../ethereum-client/running-nethermind/running-the-client.md).

## Standalone downloads

Standalone downloads give users more flexibility by allowing them to install a specific version of Nethermind, choose the installation location, and prevent automatic updates.

Standalone downloads are available on [GitHub Releases](https://github.com/NethermindEth/nethermind/releases) and at [downloads.nethermind.io](https://downloads.nethermind.io) as ZIP archives for x64 and AArch64 (ARM64) CPU architectures for Linux, Windows, and macOS.

For further instructions, see [Running Nethermind](../ethereum-client/running-nethermind/running-the-client.md).

## Docker container

The Docker images of Nethermind are available on [Docker Hub](https://hub.docker.com/r/nethermind/nethermind).

This registry provides production versions of Nethermind with two types of tags:

- `nethermind/nethermind:latest` is the latest version of Nethermind (the default tag)
- `nethermind/nethermind:<version>` is the specific version of Nethermind where `<version>` is the actual version of Nethermind.

To download the image from the registry, run:

```bash
docker pull nethermind/nethermind
```

Starting a node is achieved by:

```bash
docker run -it nethermind/nethermind
```

The following ports are exposed by default:

- `8545`: TCP, for the JSON-RPC interface
- `8551`: TCP, for the consensus client JSON-RPC interface
- `30303`: TCP and UDP, for P2P networking

:::tip
It's highly recommended to mount data volumes as the Nethermind's data directories to ensure the synced data is preserved between the container restarts.
:::

The following volume mount points are available by default:

- `/nethermind/nethermind_db`: used to store the database
- `/nethermind/logs`: used to store the logs
- `/nethermind/keystore`: used to store the keys

To mount separate volumes for each directory listed above, run:

```bash
docker run -it \
  --mount type=bind,source=path/to/db,target=/nethermind/nethermind_db \
  --mount type=bind,source=path/to/logs,target=/nethermind/logs \
  --mount type=bind,source=path/to/keystore,target=/nethermind/keystore \
  nethermind/nethermind
```

Alternatively, a single volume can be specified as the Nethermind data directory as follows:

```bash
docker run -it \
  --mount type=bind,source=path/to/data_dir,target=/nethermind/data_dir \
  nethermind/nethermind -dd /nethermind/data_dir
```

Note that any Nethermind-specific configuration option can be specified at the end. For instance, the `-dd` option in this case.

#### See also

- [Configuration options](../ethereum-client/configuration/)
- [Building Docker image](../for-developers/building-nethermind.md#bulding-docker-image)
