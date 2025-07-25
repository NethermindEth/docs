---
title: Installing Nethermind
sidebar_position: 2
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Nethermind can be installed in several ways:

- [Via a package manager](#package-managers)
- [As a standalone download](#standalone-downloads)
- [As a Docker container](#docker-container)
- [By building from source code](../developers/building-from-source.md)

## Prerequisites

:::info
Does not apply to Docker distributions.
:::

Before installing Nethermind, your specific platform might need the following prerequisites.

<Tabs groupId="os">
<TabItem value="linux" label="Linux">None</TabItem>
<TabItem value="windows" label="Windows">

Although the modern versions of Windows are bundled with a recent version of [Microsoft Visual C++ Redistributable](https://aka.ms/vcredist), in some cases, it may need an update:

```powershell
winget install --id Microsoft.VCRedist.2015+.x64
```

</TabItem>
<TabItem value="macos" label="macOS">None</TabItem>
</Tabs>

## Package managers

Package managers are the easiest and fastest way of installing Nethermind.

<Tabs groupId="os">
<TabItem value="linux" label="Linux">

On Ubuntu and other Linux distros supporting PPA, Nethermind can be installed via Launchpad PPA.

First, add the Nethermind repository:

```bash
sudo add-apt-repository ppa:nethermindeth/nethermind

# If the command is not found, run
# sudo apt-get install software-properties-common
```

Then, install Nethermind as follows:

```bash
sudo apt-get update
sudo apt-get install nethermind
```

</TabItem>
<TabItem value="windows" label="Windows">

On Windows, Nethermind can be installed via Windows Package Manager as follows:

```powershell
winget install --id Nethermind.Nethermind
```

</TabItem>
<TabItem value="macos" label="macOS">

On macOS, Nethermind can be installed via Homebrew.

First, add the Nethermind repository:

```sh
brew tap nethermindeth/nethermind
```

Then, install Nethermind as follows:

```sh
brew install nethermind
```

</TabItem>
</Tabs>

For further instructions, see [Running a node](running-node/running-node.md).

## Standalone downloads

Standalone downloads give users more flexibility by allowing them to install a specific version of Nethermind, choose the installation location, and prevent automatic updates.

Standalone downloads are available on [GitHub Releases](https://github.com/NethermindEth/nethermind/releases) and at [downloads.nethermind.io](https://downloads.nethermind.io) as ZIP archives for x64 and AArch64 (ARM64) CPU architectures for Linux, Windows, and macOS.

### Configuring as a Linux service

Installing Nethermind as a Linux `systemd` service takes just a few simple steps:

1. Create a separate user and group for Nethermind and configure them as follows:

   ```bash
   # Create a new user and group
   sudo useradd -m -s /bin/bash nethermind

   # Increase the maximum number of open files
   sudo bash -c 'echo "nethermind soft nofile 100000" > /etc/security/limits.d/nethermind.conf'
   sudo bash -c 'echo "nethermind hard nofile 100000" >> /etc/security/limits.d/nethermind.conf'

   # Switch to the nethermind user
   sudo su -l nethermind

   # Create required directories
   # Note that the home directory (~) is now /home/nethermind
   mkdir ~/bin
   mkdir ~/data
   ```

2. [Download Nethermind](#standalone-downloads) and extract the package contents to the `~/bin` directory created in the previous step.
3. Configure Nethermind options in the `~/.env` file:

   ```bash title="~/.env"
   # Required
   NETHERMIND_CONFIG="mainnet"

   # Optional
   NETHERMIND_HEALTHCHECKSCONFIG_ENABLED="true"
   ```

   For available options, see [Configuration](../fundamentals/configuration.md).

4. Create the `~/nethermind.service` unit file:

   ```ini title="~/nethermind.service"
   [Unit]
   Description=Nethermind node
   Documentation=https://docs.nethermind.io
   After=network.target

   [Service]
   User=nethermind
   Group=nethermind
   EnvironmentFile=/home/nethermind/.env
   WorkingDirectory=/home/nethermind
   ExecStart=/home/nethermind/bin/nethermind --data-dir /home/nethermind/data
   Restart=on-failure
   LimitNOFILE=1000000

   [Install]
   WantedBy=default.target
   ```

5. Finally, set up the Linux service:

   ```bash
   # Move the unit file to the systemd directory
   sudo mv nethermind.service /etc/systemd/system

   # Reload the systemd daemon
   sudo systemctl daemon-reload

   # Start the service
   sudo systemctl start nethermind

   # Optionally, enable the service to start on boot
   sudo systemctl enable nethermind
   ```

Done! To ensure the service is up and running, check its status as follows:

```bash
sudo systemctl status nethermind
```

To monitor the Nethermind output, run:

```bash
journalctl -u nethermind -f
```

For further instructions, see [Running a node](running-node/running-node.md).

## Docker container

The Docker images of Nethermind are available on [Docker Hub](https://hub.docker.com/r/nethermind/nethermind).

The Docker images are based on Ubuntu 24.04 and support x64 and AArch64 (ARM64) CPU architectures. They are tagged as follows:

- `latest`: the latest version of Nethermind (the default tag).
- `latest-chiseled`: a _rootless_ and [chiseled](https://ubuntu.com/engage/chiselled-ubuntu-images-for-containers) image of the latest version of Nethermind.\
  For security reasons, this image contains only the absolutely necessary components and is intended to run as a non-root `app` user with UID/GID of `64198`.
- `x.x.x`: a specific version of Nethermind. For instance, `1.27.0`.
- `x.x.x-chiseled`: a rootless and chiseled image of the specific version of Nethermind. For instance, `1.27.0-chiseled`.

For example, to download the latest chiseled image from the registry, run:

```bash
docker pull nethermind/nethermind:latest-chiseled
```

Starting the container is achieved by:

```bash
docker run -it nethermind/nethermind:latest-chiseled
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
  nethermind/nethermind --data-dir /nethermind/data_dir
```

Note that any Nethermind-specific configuration option can be specified at the end. For instance, the `--data-dir` option in this case. For further instructions, see [Running a node](running-node/running-node.md).

To build the Docker image yourself, see [Building Docker image](../developers/building-from-source.md#building-docker-image).
