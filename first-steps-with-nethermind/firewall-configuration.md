---
description: Rules that should be added to your machine's firewall
---

# Firewall Configuration

{% hint style="info" %}
Keep `8545` \(or `8000-9000`\) closed except for the trusted machines - this is the JSON RPC port which gives admin access to the node.
{% endhint %}

{% hint style="info" %}
Keep TCP `30303` \(or `30300-30400`\) open for the outside world so other nodes can connect to your node.
{% endhint %}

{% hint style="info" %}
Keep UDP `30303` \(or `30300-30400`\) open for the outside world so other nodes can discover your node.
{% endhint %}

