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

Prometheus metrics are available at `http://127.0.0.1:6060/metrics`. They include discovery message and traffic rates, routing-table buckets, CPU, and memory. A local Prometheus and Grafana setup is available in the [Bootnode observability directory](https://github.com/NethermindEth/nethermind/tree/master/tools/Bootnode/observability).

For more command-line options and a source-build example, see the Bootnode README's [options](https://github.com/NethermindEth/nethermind/blob/master/tools/Bootnode/README.md#options) and [run](https://github.com/NethermindEth/nethermind/blob/master/tools/Bootnode/README.md#run) sections. For Docker, use the published image tag shown above.
