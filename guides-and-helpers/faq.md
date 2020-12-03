# 常见问题

## 我可以禁止将日志记录到文件中吗?

{% page-ref page="../ethereum-client/logging-configuration.md" %}

## 我可以禁用 JSON RPC 调用的日志记录吗？

{% page-ref page="../ethereum-client/logging-configuration.md" %}

## 如何在 AuRa / Clique 上配置验证者节点？

点击下方链接，了解如何在 [AuRa](https://docs.nethermind.io/nethermind/guides-and-helpers/validator-setup/aura-validator) 和 [Clique](https://docs.nethermind.io/nethermind/ethereum-client/private-networks/how-to-setup-a-nethermind-only-clique-based-chain) 上运行验证者节点。

{% page-ref page="validator-setup/aura-validator.md" %}

{% page-ref page="../ethereum-client/private-networks/how-to-setup-a-nethermind-only-clique-based-chain.md" %}

## 如果我的网络带宽被 Nethermind 节点耗尽该怎么办？

请尝试改低这项配置（`--Network.ActivePeersMaxCount 25`）。

## 我的节点同步了吗？

当您的节点完成同步时，其日志行开头将如下所示：

`Processed ...`

所示区块编号即链首块的编号。

_由于区块链中不存在中心化的事实来源，任何节点都无法 100％ 确保自己是同步的。因此，您的节点无法告诉您它是同步的，但它能够基于从对等节点处了解到的信息，告诉您它相信自己是同步的。_

