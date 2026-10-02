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
  To specify another endpoint for the Pushgateway, use the [`Metrics.PushGatewayUrl`](../../fundamentals/configuration.md#metrics-pushgatewayurl) configuration option.

## Step 3: Run Nethermind

To enable metrics in Nethermind, set the [`Metrics.Enabled`](../../fundamentals/configuration.md#metrics-enabled) configuration option to `true`. For more options, see the [Metrics](../../fundamentals/configuration.md#metrics) configuration section.

:::tip
See [Running a node](../../get-started/running-node/running-node.md) for more information on how to run Nethermind.
:::

Run Nethermind as follows:

```bash
nethermind \
  -c mainnet \
  --data-dir path/to/data/dir \
  --metrics-enabled \
  --metrics-pushgatewayurl http://localhost:9091
```

Alternatively, you may add the `nethermind` service to the `docker-compose.yml` file in the repository root to run everything altogether:

```yaml title="docker-compose.yml"
nethermind:
  image: nethermind/nethermind:latest
  container_name: nethermind
  restart: unless-stopped
  links:
    - pushgateway
  depends_on:
    - pushgateway
  ports:
    - 8545:8545
    - 8551:8551
    - 30303:30303
  ulimits:
    nofile:
      soft: 1000000
      hard: 1000000
  command: -c mainnet --metrics-enabled --metrics-pushgatewayurl http://pushgateway:9091
  volumes:
    - ./keystore:/nethermind/keystore
    - ./logs:/nethermind/logs
    - ./nethermind_db:/nethermind/nethermind_db
  networks:
    - metrics
```

In this case, you may want to configure your consensus client similarly.
