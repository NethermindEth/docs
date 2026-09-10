---
title: Security
sidebar_position: 3
---

## General security considerations

:::tip
Although Nethermind is thoroughly tested, the more popular it becomes, the more likely it will be a target of client-specific attacks. Generally, we recommend you always consider running backup client nodes from another developer for any critical operations.
:::

:::warning
Enable only the [JSON-RPC namespaces](../interacting/json-rpc-server.md) you absolutely need. This is particularly important for namespaces like `admin` and `debug`, as they can be exploited to get elevated access to your node or for DOS attacks.
:::

:::danger
The private key the node id is derived from is stored on the disk as plaintext.
:::

## Networking security

These rules are **highly recommended** to be applied to your firewall:

- Block all traffic to the port `8545`, or whatever port is defined for JSON-RPC interface, except for traffic from explicitly defined trusted sources.
- Allow traffic to the TCP port `30303` or whatever port is defined for P2P communication. This allows the node to connect to peers.
- Allow traffic to the UDP port `30303` or whatever port ia defined for P2P communication. This allows node discovery.

