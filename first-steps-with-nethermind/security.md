---
description: >-
  Security measures that should be taken before running Nethermind Node on
  Ethereum Mainnet
---

# Security

{% hint style="danger" %}
📢 **DO NOT** use Nethermind wallet / signers for mainnet ETH handling!
{% endhint %}

{% hint style="danger" %}
📢 JSON RPC endpoint \(port `8545`\) should **NOT** be exposed publicly \(should be behind the firewall\).
{% endhint %}

{% hint style="danger" %}
📢The private key from which the node ID is derived is stored on disk \(**NOT** protected by password\).
{% endhint %}

{% hint style="warning" %}
Nethermind is thoroughly tested but the more popular it will get the more likely it will be the target of client-specific attacks. Generally you should always consider running backup client nodes implemented by a different team for any critical operations.
{% endhint %}

{% hint style="info" %}
For non-mainnet signing you can use dev wallet configurations.
{% endhint %}

