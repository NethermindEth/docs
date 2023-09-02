---
title: Security
sidebar_position: 3
---

# Security

:::danger
:loudspeaker: **DO NOT** use Nethermind wallet / signers for mainnet ETH handling!
:::

:::danger
:loudspeaker: JSON RPC endpoint (port `8545`) should **NOT** be exposed publicly (should be behind the firewall).
:::

:::danger
:loudspeaker:The private key from which the node ID is derived is stored on disk (**NOT** protected by password).
:::

:::caution
Nethermind is thoroughly tested but the more popular it will get the more likely it will be the target of client-specific attacks. Generally you should always consider running backup client nodes implemented by a different team for any critical operations.
:::

:::info
For non-mainnet signing you can use dev wallet configurations.
:::
