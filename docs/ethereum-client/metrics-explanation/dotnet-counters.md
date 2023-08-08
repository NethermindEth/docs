---
description: >-
  How to use System.Diagnostics.Metrics and dotnet-counters to measure and
  observe a Nethermind node
---

# Using dotnet-counters

## Introduction

Nethermind can be configured to publish its metrics using [System.Diagnostics.Metrics](https://learn.microsoft.com/en-us/dotnet/core/diagnostics/metrics). This mechanism is a native tool embedded in .NET Platform. It allows for a low overhead monitoring and reporting. Once .NET Platform metrics are enabled, they can be monitored and collected using `dotnet-counters` and other tools.

## Configuration

Reporting metrics as _System.Diagnostics.Metrics_ is enabled by passing and additional argument `--Metrics.CountersEnabled true` to the Docker containers,`Nethermind.Runner` or `Nethermind.Launcher` e.g. `./Nethermind.Runner --Metrics.CountersEnabled true`.&#x20;

This flag can be configured separately from [setting-up-local-metrics-infrastracture.md](setting-up-local-metrics-infrastracture.md "mention")as this two reporting modes are treated separately.

## Metrics names

Metrics reported by a Nethermind node follow the module convention. Whenever there's a module `X`, its metrics will be reported under meter `Nethermind.X` For example, `Evm` module will be repoted under `Nethermind.Evm` and so on.

## dotnet-counters

`dotnet-counters` is a tool provided by the .NET team to monitor and collect metrics for further analysis. The usage of it is different when used on the same machine or in the Dockerized environment. To learn more about the tool, please visit the official documentation page of [metrics collection with dotnet-counters](https://learn.microsoft.com/en-us/dotnet/core/diagnostics/metrics-collection).

### Same machine

When a node is running on the same machine, `dotnet-counters` , given that the .NET runtime is already installed, can be installed with the following&#x20;

```
dotnet tool install -g dotnet-counters
```

This will install the tool globally and will allow the user to monitor and to collect metrics from any .NET process that is run on the same machine. For further information how to monitor and collect, please refer to [the original documentation of this command](https://learn.microsoft.com/en-us/dotnet/core/diagnostics/dotnet-counters).

### Docker image and docker compose

When running in a Dockerized environment, the most common way is to create a separate docker image for .NET diagnostics. This can be done with the following `Dockerfile`

```
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS base

RUN dotnet tool install -g dotnet-counters; \
    dotnet tool install -g dotnet-trace; \
    echo 'export PATH="$PATH:/root/.dotnet/tools"' >> /root/.bashrc

ENTRYPOINT ["/bin/bash"]
```

Once it's built, as `dotdiag` image, it will enable running `dotnet-counters` from within.

The second part is connecting the dockerized node with the `dotdiag`. Whether using `docker copose` or images run manually, it's important to remember that `dotnet-counters` communicate over a named pipe (Windows) or an IPC socked (Linux, macOS). To make it work, volume mapping should be provided so that the two images share the directory used for the communication. Similarly `pid namespace` needs to be shared between them.&#x20;

Let's visit an extract of a `docker-compose.yaml` that would provide such configuration.

```
version: "3.9"

services:

  execution:
    stop_grace_period: 30s
    container_name: execution-client
    restart: unless-stopped
    image: IMAGE_VERSION_GOES_HERE
    networks:
      - sedge
    volumes:
      - ./dotnet-tmp:/tmp # /tmp is used to create the IPC socket, expose it as ./dotnet-tmp
    ports:
      # ports omitted as they are not changed
    command:
      # make counters enabled so that reporting happens by setting the flag
      - --Metrics.CountersEnabled=true 
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "10"

  # the created dotdiag 
  dotdiag:
    container_name: dotdiag
    image: dotdiag
    stdin_open: true # docker run -i, so that it runs
    tty: true        # docker run -t, so that it runs
    volumes:
      - ./dotnet-tmp:/tmp # map to the same directory, to make IPC socket connection
    pid: "service:execution" # make pid namespaces are shared - processes are visible
    depends_on:
      - execution # make the dependency explicit

```
