---
description: 您的计算机应该遵守的防火墙规则
---

# 防火墙配置

{% hint style="info" %}
在非可信计算机上，请勿开启 8545（或8000-9000）端口。这是JSON RPC端口，可以赋予节点管理员权限。
{% endhint %}

{% hint style="info" %}
请对外开放 TCP 30303（或30300-30400），以便其它节点可以连接到您的节点。
{% endhint %}

{% hint style="info" %}
请对外开放 UDP 30303（或30300-30400），以便其它节点可以发现您的节点。
{% endhint %}

