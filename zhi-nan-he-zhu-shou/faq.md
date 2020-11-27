# 常见问题

## 我可以禁用日志文件吗?

{% page-ref page="../yi-tai-fang-ke-hu-duan/logging-configuration.md" %}

## 我可以禁用JSON RPC调用的日志记录吗？

{% page-ref page="../yi-tai-fang-ke-hu-duan/logging-configuration.md" %}

## 如何在AuRa / Clique上配置验证器？

您可以在docs-＆gt;中找到有关运行验证器的更多详细信息。[AuRa](https://docs.nethermind.io/nethermind/guides-and-helpers/validator-setup/aura-validator) [Clique](https://docs.nethermind.io/nethermind/ethereum-client/private-networks/how-to-setup-a-nethermind-only-clique-based-chain)。

{% page-ref page="validator-setup/aura-validator.md" %}

{% page-ref page="../yi-tai-fang-ke-hu-duan/private-networks/how-to-setup-a-nethermind-only-clique-based-chain.md" %}

## 我的网络带宽被Nethermind节点耗尽

配置更改为较小的数字\(`--Network.ActivePeersMaxCount 25`\)

## 我的节点同步了吗？

当您的节点显示以以下内容开头的日志行时，您的节点已同步：

`Processed ...`

所示的块号在链的顶部。

_在区块链中，因为没有中心的真实来源，所以任何节点都无法100％确保其已同步 - 因此，您的节点通常不能告诉您它是同步的，但基于它从对等方的交谈之中所了解到的信息，能够告诉您它相信是已同步的\）_

