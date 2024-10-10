---
title: Grafana and Prometheus
sidebar_position: 0
---

This guide will walk you through setting up a local metrics infrastructure using [Grafana](https://grafana.com) and [Prometheus](https://prometheus.io).

## Step 1: Set up Grafana and Prometheus

To simplify the process, we will use the [metrics-infrastructure](https://github.com/NethermindEth/metrics-infrastructure) repository, which contains the necessary configuration files to run Grafana and Prometheus in a Docker container. However, you can also set up Grafana and Prometheus manually the way it fits your specific needs.

```bash
git clone https://github.com/NethermindEth/metrics-infrastructure.git
```

## Step 2: Run the stack

After cloning the repository, navigate to its root directory and run the containers using Docker Compose as follows:

```bash
docker compose up
```

Once the stack is running, you can access the following services:

- **Grafana**: [localhost:3000](http://localhost:3000)\
  Use `admin` for both the username and password. When asked for a password change, you may skip it. Then, navigate to Dashboards > Nethermind Dashboard.
- **Prometheus**: [localhost:9090](http://localhost:9090)
- **Pushgateway**: [localhost:9091](http://localhost:9091)\
  To specify another endpoint for the Pushgateway, use the `--Metrics.PushGatewayUrl` command line option.

## Step 3: Run Nethermind

To enable metrics in Nethermind, use the `--Metrics.Enabled true` command line option. For more options, see the [Metrics](../../fundamentals/configuration.md#metrics) configuration section.

:::warning Important
A [consensus client](../../get-started/running-node/consensus-clients.md) of your choice must be running before you start Nethermind.
:::

Run Nethermind as follows:

```bash
nethermind -c mainnet --Metrics.Enabled true
```

Alternatively, you may add the `nethermind` service to the `docker-compose.yml` file in the repository root to run everything altogether:

```yaml title="docker-compose.yml"
nethermind:
  image: nethermind/nethermind:latest
  container_name: nethermind
  restart: unless-stopped
  ports:
    - 8545:8545
    - 8551:8551
    - 30303:30303
  ulimits:
    nofile:
      soft: 1000000
      hard: 1000000
  command: -c mainnet --Metrics.Enabled true
  volumes:
    - ./keystore:/nethermind/keystore
    - ./logs:/nethermind/logs
    - ./nethermind_db:/nethermind/nethermind_db
```

In this case, you may want to configure your consensus client similarly.
