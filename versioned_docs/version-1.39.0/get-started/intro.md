---
title: Introduction and overview
sidebar_label: Introduction
sidebar_position: 0
slug: /
---

Nethermind is a high-performance Ethereum execution client built on [.NET](https://aka.ms/dotnet). It provides fast sync, high-throughput JSON-RPC, and a plugin system for extending the client without forking. In production since 2017.

Runs on Linux, Windows, and macOS.

## Capabilities

Nethermind connects operators to the Ethereum network via [JSON-RPC](../interacting/json-rpc-server.md) over HTTP, WebSocket, and IPC. Snap sync, enabled by default, reaches the chain tip up to 10x faster than traditional fast sync. Node health and performance are exposed through a built-in [UI](../monitoring/ui.md) and [Prometheus](../monitoring/metrics/grafana-and-prometheus.md) metrics.

- **Performance:** The EVM is optimized for low-overhead block processing: direct opcode dispatch, hardware-accelerated bitwise operations, and zero heap allocation on the execution stack. A parallel pre-execution system warms state reads before a block's main loop, cutting block processing time roughly in half.

- **Modularity:** Every component of the Nethermind is independently extendable without forking the codebase. The plugin system lets teams add consensus algorithms, transaction types, network protocols, and RPC namespaces through a .NET assembly that loads on startup. Nethermind uses this same system internally for [L2 network][l2] support and [health checks](../monitoring/health-check.md).

- **Client diversity:** The Ethereum protocol becomes more resilient when no single node implementation dominates. A bug in any one implementation cannot cause the network to finalize a bad block if multiple independent clients are running.

- **L2 and rollup native:** Each supported [L2 network][l2] is implemented as a plugin, so the core stays untouched. For OP Stack operators, a rollup node is built directly into the client, fully replacing the separate `op-node` and cutting services from two down to one.

- **ZK-readiness:** ZK proving is being built directly into the production execution client. Execution witness capture, stateless block replay, and a minimal EVM binary are complete. See the [ZK roadmap](https://www.nethermind.io/blog/road-to-zk-implementation-nethermind-clients-path-to-proofs) for current status.

[l2]: ../get-started/running-node/l2-networks.md
