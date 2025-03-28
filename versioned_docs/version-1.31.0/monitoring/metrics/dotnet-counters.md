---
title: dotnet-counters
sidebar_position: 1
---

This guide will walk you through setting up performance counters using the [dotnet-counters](https://learn.microsoft.com/en-us/dotnet/core/diagnostics/dotnet-counters) performance monitoring tool that observes counters published via the [EventCounters API](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.tracing.eventcounter).

## Step 1: Install dotnet-counters

dotnet-counters can be either installed locally or in a Docker container.

### Installing locally

Use the dotnet tool install command as follows:

```bash
dotnet tool install -g dotnet-counters
```

Once installed, you can run the tool from the command line by typing `dotnet-counters`.


### Installing in a Docker container

To install dotnet-counters in a Docker container, create a Dockerfile with the following content:

```docker title="Dockerfile"
FROM mcr.microsoft.com/dotnet/sdk:9.0

RUN dotnet tool install -g dotnet-counters

ENV PATH="$PATH:/root/.dotnet/tools"

ENTRYPOINT ["/bin/bash"]
```

Then, build the Docker image:

```bash
docker build -t dotnet-counters .
```

## Step 2: Run Nethermind

To enable performance counters in Nethermind, set the [`Metrics.CountersEnabled`](../../fundamentals/configuration.md#metrics-countersenabled) configuration option to `true`. For more options, see the [Metrics](../../fundamentals/configuration.md#metrics) configuration section.

:::tip
See [Running a node](../../get-started/running-node/running-node.md) for more information on how to run Nethermind.
:::

### Running locally

Run Nethermind as follows:

```bash
nethermind \
  -c mainnet \
  --data-dir path/to/data/dir \
  --metrics-countersenabled true
```

### Running in a Docker container

The easiest way of collecting metrics in a Docker container is to use Docker Compose. Below, we use the Nethermind official Docker image and the `dotnet-counters` image we created earlier:

```yaml title="docker-compose.yml"
services:

  dotnet-counters:
    image: dotnet-counters
    container_name: dotnet-counters
    stdin_open: true
    tty: true
    pid: service:nethermind
    volumes:
      - metrics:/tmp
    depends_on:
      - nethermind

  nethermind:
    image: nethermind/nethermind:latest
    container_name: nethermind
    restart: unless-stopped
    ports:
      - 8545:8545
      - 8551:8551
      - 30303:30303
    command: -c mainnet --metrics-countersenabled true
    volumes:
      - ./keystore:/nethermind/keystore
      - ./logs:/nethermind/logs
      - ./nethermind_db:/nethermind/nethermind_db
      - metrics:/tmp

volumes:
  metrics:
```

:::info
dotnet-counters uses IPC socket communication to monitor the target process. For this, we use the `metrics` volume to share the IPC socket directory with the `nethermind` and `dotnet-counter` services. The `pid` option in the `dotnet-counters` service is used to share the PID namespace with the `nethermind` service. This is necessary for `dotnet-counters` to be able to see the Nethermind process.
:::

We can run the above file as follows:

```bash
docker compose up
```

## Step 3: Collect metrics

Once dotnet-counters is installed and Nethermind is running, we can start collecting the metrics. If you chose to collect metrics in the containers, run the following command in the `dotnet-counters` container:

```bash
dotnet-counters collect -n nethermind
```

By default, dotnet-counters stores the collected metrics in the current directory in CSV format. However, you may also store them in JSON format and another directory. For instance:

```bash
dotnet-counters collect -n nethermind -f json -o /tmp/counters.json
```

For more info about dotnet-counters, see its [official docs](https://learn.microsoft.com/en-us/dotnet/core/diagnostics/dotnet-counters).
