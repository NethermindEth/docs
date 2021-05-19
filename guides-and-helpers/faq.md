# 常见问题

## How do I upgrade my node prior to the upcoming Ethereum Berlin fork?

All details regarding the upgrade can be found on the official EF announcement [https://blog.ethereum.org/2021/03/08/ethereum-berlin-upgrade-announcement/](https://blog.ethereum.org/2021/03/08/ethereum-berlin-upgrade-announcement/)

### Upgrading Nethermind for Docker users

Pull the latest version of Nethermind using the `latest` or `1.10.58` version tag.

```text
docker pull nethermind/nethermind:1.10.58
```

or pull with docker-compose if the `nethermind/nethermind` base image is specified

```text
docker-compose pull
```

### Upgrading Nethermind for Systemd users

Simply download the latest Nethermind package either from [https://downloads.nethermind.io](https://downloads.nethermind.io/) or [https://github.com/NethermindEth/nethermind/releases](https://github.com/NethermindEth/nethermind/releases) and make sure that the package is extracted in the `WorkingDirectory` path defined in your `systemd` service.

```text
WorkingDirectory=/home/nethermind/nethermind
```

### Upgrading Nethermind when running as a background process

Download the latest Nethermind package either from [https://downloads.nethermind.io](https://downloads.nethermind.io/) or [https://github.com/NethermindEth/nethermind/releases](https://github.com/NethermindEth/nethermind/releases) and extract the package in the folder you currently use for running Nethermind.

## 什么是服务 ETH 2.0 验证者请求的最小可行配置？

该配置下载了自存款合约部署以来，服务 ETH 2.0 验证者请求所需的最小量区块体和收据。该配置也会启用 JSON RPC\(**请勿对外打开防火墙!**\)

./Nethermind.Runner --config mainnet --JsonRpc.Enabled true --Sync.DownloadBodiesInFastSync true --Sync.DownloadReceiptsInFastSync true --Sync.AncientBodiesBarrier 11052984 --Sync.AncientReceiptsBarrier 11052984 --Init.BaseDbPath /your/db/path

**如果您同步的是 1.9.39 之前的版本：**

将软件更新至 1.9.39 版本，并在 '--Sync.FixReceipts 设置为 true' 的情况下运行该软件。如果您的数据库缺少任何日志/收据，即可得到修复。请遵循以下更新指南：

{% page-ref page="upgrades.md" %}

如果您有任何问题，请在 Discord 上联系我们：[https://discord.gg/X539yhn](https://discord.gg/X539yhn)

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

_由于区块链中不存在中心化的事实来源，任何节点都无法 100％ 确保自己是同步的。因此，您的节点无法告诉您它是同步的，但它能够基于从对等节点处了解到的信息，告诉您它相信自己是同步的\)._

