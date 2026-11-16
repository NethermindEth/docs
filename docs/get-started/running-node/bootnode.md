---
title: Running a discovery bootnode
sidebar_position: 3
---

Nethermind Bootnode is a standalone discovery service. It speaks discv4 and discv5 on one UDP port and gives other nodes a stable entry point to peer discovery. It does not execute blocks or accept TCP peer connections.

## Start the bootnode

Run the [published Bootnode image](https://hub.docker.com/r/nethermind/nethermind-bootnode/tags?name=bootnode-2.0.0) with a persistent data volume:

```bash
docker run --rm -it \
  -p 30303:30303/udp \
  -p 127.0.0.1:8546:8546 \
  -p 127.0.0.1:6060:6060 \
  -v bootnode-data:/nethermind-bootnode/data \
  nethermind/nethermind-bootnode:bootnode-2.0.0
```

Allow inbound UDP traffic to port `30303` in your firewall. The volume preserves the node key and discovery routing-table data across restarts; keep it if you want the bootnode's identity to remain stable. Give each bootnode instance its own volume. The API's retained-node records rebuild after a restart.

The bootnode detects an advertised IP automatically. If it advertises a container or private address, append `--external-ip YOUR_PUBLIC_IP` after the image name. `--protocols v4` or `--protocols v5` enables only one discovery protocol; the default is `all`.

The HTTP API and metrics endpoints have no authentication. The command publishes both on host loopback only. Keep them private or put an authenticated reverse proxy in front of them before allowing remote access.

## Connect a Nethermind node

Get the bootnode's advertised enode:

```bash
curl http://127.0.0.1:8546/identity
```

The response includes `enode` and `enr`. Check that the advertised address is reachable over UDP, then put the `enode` value in your Nethermind configuration:

```json
{
  "Network": {
    "Bootnodes": "enode://YOUR_BOOTNODE_PUBLIC_KEY@YOUR_PUBLIC_IP:0?discport=30303"
  }
}
```

Replace the example with the complete `enode` returned by `/identity`. [`Network.Bootnodes`](../../fundamentals/configuration.md#network-bootnodes) accepts a comma-separated enode list. The bootnode advertises TCP port `0` because it serves discovery only; the UDP discovery port is the one clients need to reach.

## Query discovered nodes

The REST API provides status, identity, and paginated node lists:

```bash
curl http://127.0.0.1:8546/status
curl 'http://127.0.0.1:8546/nodes/active?offset=0&limit=100'
curl 'http://127.0.0.1:8546/nodes/all?offset=0&limit=100'
```

For JSON-RPC, send requests to `/rpc`:

```bash
curl http://127.0.0.1:8546/rpc \
  -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","method":"bootnode_activeNodes","params":{"offset":0,"limit":100},"id":1}'
```

The JSON-RPC methods are `bootnode_status`, `bootnode_nodeInfo`, `bootnode_activeNodes`, and `bootnode_allNodes`. Node lists default to 1,000 entries per page and accept a `limit` from 1 to 1,000. Increase `offset` to fetch later pages. List entries include separate `tcpPort` and `discoveryPort` fields.

The bootnode targets 100,000 retained node identities. Repeat observations update the existing record and its `seenCount`; older records are evicted when the store is full. Configured bootnodes are exempt from eviction. The `nodes.all` count in `/status` is a retained-record count, not a live network size estimate. An `active` entry was marked active by discovery and may no longer be reachable. The retained records and `seenCount` rebuild after a restart.

## Monitor the bootnode

Prometheus metrics are available at `http://127.0.0.1:6060/metrics` when the port is published as shown above. They include discovery message and traffic rates, routing-table buckets, CPU, and memory.

### Run Bootnode, Prometheus, and Grafana together

The Nethermind repository includes a [Grafana dashboard and provisioning files](https://github.com/NethermindEth/nethermind/tree/master/tools/Bootnode/observability). This Compose setup runs its own bootnode, so stop any instance started with the standalone `docker run` command above before continuing. Clone the repository if you do not already have it, then enter the observability directory:

```bash
git clone --depth 1 https://github.com/NethermindEth/nethermind.git
cd nethermind/tools/Bootnode/observability
```

Save the following as `docker-compose.full.yml` in that directory. It adds the bootnode to the existing Prometheus and Grafana Compose stack and keeps the API and metrics ports on host loopback:

```yaml
services:
  bootnode:
    image: nethermind/nethermind-bootnode:bootnode-2.0.0
    ports:
      - '30303:30303/udp'
      - '127.0.0.1:8546:8546'
      - '127.0.0.1:6060:6060'
    volumes:
      - bootnode-data:/nethermind-bootnode/data

  prometheus:
    volumes:
      - ./prometheus.full.yml:/etc/prometheus/prometheus.yml:ro

volumes:
  bootnode-data:
    name: bootnode-data
```

The explicit volume name lets this setup reuse the key and routing data from the standalone `docker run` example if you followed it first.

Save this as `prometheus.full.yml` alongside it:

```yaml
global:
  scrape_interval: 5s

scrape_configs:
  - job_name: nethermind-bootnode
    metrics_path: /metrics
    static_configs:
      - targets: [bootnode:6060]
```

Set a Grafana admin password and start the stack:

```bash
export GRAFANA_ADMIN_PASSWORD='choose-a-password'
docker compose -f docker-compose.yml -f docker-compose.full.yml up -d
```

Open [Prometheus targets](http://127.0.0.1:9090/targets) and check that `nethermind-bootnode` is **UP**. Then open [Grafana](http://127.0.0.1:3000) and go to **Dashboards → Nethermind → Nethermind Bootnode**. The dashboard is viewable without signing in; use `admin` and the password you set if you need to manage it. It includes discovered-node counts, discovery traffic, CPU, and memory. The 100,000-record target described above is not a network-size estimate.

The bootnode API remains available at `http://127.0.0.1:8546`. If `/identity` reports an address that peers cannot reach, add `command: ["--external-ip", "YOUR_PUBLIC_IP"]` under the `bootnode` service and run the `docker compose ... up -d` command again. Allow inbound UDP traffic to port `30303`.

To stop the stack without deleting the bootnode's data volume, run:

```bash
docker compose -f docker-compose.yml -f docker-compose.full.yml down
```

For more command-line options and a source-build example, see the Bootnode README's [options](https://github.com/NethermindEth/nethermind/blob/master/tools/Bootnode/README.md#options) and [run](https://github.com/NethermindEth/nethermind/blob/master/tools/Bootnode/README.md#run) sections. For Docker, use the published image tag shown above.
