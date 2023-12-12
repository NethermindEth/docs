---
title: Building from source
sidebar_label: Building from source
sidebar_position: 0
---

The Nethermind's source code can be obtained from [our repository](https://github.com/NethermindEth/nethermind) on
GitHub:

```bash
git clone --recursive https://github.com/nethermindeth/nethermind.git
```

There are two options buiding Nethermind from source code:

* [Standalone binaries](#building-standalone-binaries)
* [Docker image](#bulding-docker-image)

## Building standalone binaries

### Prerequisites

To build Nethermind from source, install [.NET SDK](https://dotnet.microsoft.com/en-us/download) 7 or later.

### Building

To build both the client and tests, run the following command from the project's root directory:

```bash
dotnet build src/Nethermind/Nethermind.sln -c release
```

To simply run the client with a specific configuration without building tests, see below.

:::info
Before running the client or tests, ensure the
platform-specific [prerequisites](../get-started/installing-nethermind#prerequisites) are met.
:::

#### Running

Nethermind can be launched immediately without compiling explicitly (thus, the previous step can be skipped). The following command builds Nethermind if needed and runs it:

```bash
cd src/Nethermind/Nethermind.Runner
dotnet run -c release -- -c mainnet
```

All Nethermind-specific parameters can be specified after `--`. For instance, the command above specifies the Mainnet
configuration only.

The build artifacts can be found in the `bin/release/net7.0` directory. By default, the logs and database directories
are located here as well.

For more info, see [Running Nethermind](../get-started/installing-nethermind.md#running).

#### Testing

There are two test suites — Nethermind and Ethereum Foundation. Tests can be run with the following commands (the
initial step of the build is not required):

```bash
cd src/Nethermind

# Run Nethermind tests
dotnet test Nethermind.sln -c release

# Run Ethereum Foundation tests
dotnet test EthereumTests.sln -c release
```

## Bulding Docker image

To build Nethermind Docker image, run the following command from the project's root directory:

```bash
docker build -t nethermind .
```

For more info about running Docker containers,
see [Installing Nethermind](../get-started/installing-nethermind#docker-container).
