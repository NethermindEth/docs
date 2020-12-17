---
description: Görli 测试网上 Nethermind 同步的快速入门示例
---

# 入门指南

## 🔧 搭建虚拟机

如果您不在笔记本电脑/台式机上启动 Nethermind，可以选择设置云虚拟机。点击下方链接，查看更多关于如何使用已选[云提供商](../guides-and-helpers/cloud-providers/)进行设置的信息。

{% page-ref page="../guides-and-helpers/cloud-providers/" %}

确保您已正确配置[防火墙](firewall-configuration.md)。

{% page-ref page="firewall-configuration.md" %}

您可以查看[已支持操作系统](supported-platforms.md)和架构，以及[硬件要求](hardware-requirements.md)。

{% page-ref page="supported-platforms.md" %}

{% page-ref page="hardware-requirements.md" %}

## ⏬ 下载 Nethermind

首先，您需要下载 Nethermind 软件包。目前有两个来源提供 `Nethermind` 软件包。请点击下方链接，打开下载页面：

{% page-ref page="../ethereum-client/download-sources/" %}

## 🔛 启动 Nethermind

* [] 在通过 `./Nethermind.Launcher` 启动 Nethermind 之后，您首先需要选择一个节点。

![Nethermind.Launcher 初始选项](https://github.com/NethermindEth/nethermind/raw/master/docs/source/start/launcher.png)

* [ ] 选择 `Goerli (light Clique testnet)`

![网络选项](https://github.com/NethermindEth/nethermind/raw/master/docs/source/start/goerli-choice.png)

* [ ] 选择 `Fast Sync` 模式

![同步模式选项](https://github.com/NethermindEth/nethermind/raw/master/docs/source/start/fast-sync-choice.png)

* [ ] 输入 `y` 并按 `enter` ，确保已启用 JSON RPC。
* [ ] 按 `enter` 跳过 `Host IP` 设置，则默认设置为 127.0.0.1 。

{% hint style="warning" %}
If **not** running locall, you may need to change the `Host` value to the VM public IP address.
{% endhint %}

![使用 Nethermind.Launcher 启用 JSON RPC](https://github.com/NethermindEth/nethermind/raw/master/docs/source/start/json-choice.png)

* [ ] 输入 `y` 并按 `enter` ，跳过 ethstats 注册。

![跳过 EthStats 配置](https://github.com/NethermindEth/nethermind/raw/master/docs/source/start/ethstats-choice.png)

## 👨💻 介绍 Nethermind 日志

节点启动后，您会看到该节点的一些初始信息，然后节点将开始同步区块链。Görli 快速同步最初采用 `fast blocks` 同步模式。`fast blocks` 同步模式会选取一个已知的 `pivot block`，从该区块开始向下下载 `headers`（区块头）、`bodies` （区块体）和 `receipts`（收据），直至 `genesis block`（创世块）为止。控制台显示器会显示从 0 至 pivot 区块的区块号，但这只是为了带来更好的用户体验。

在同步过程中，您将看到一些信息，例如：

1. 在 fast blocks 同步阶段需要下载的所有数据中，已下载的 `headers`、`bodies` 和 `receipts` 的数量。
2. 当前已下载的 `headers`、`bodies` 和 `receipts` 等待被存入数据库的顺序。
3. 当前下载速度（每秒下载区块数量）。
4. 平均下载速度（每秒下载区块数量）。

![Fast blocks 同步日志](https://github.com/NethermindEth/nethermind/raw/master/docs/source/start/fast-blocks-sync-annotated.png)

当 fast blocks 同步阶段结束后，还有一个下载 `pivot` 和 `latest blocks` 之间区块的过程，因此会显示一些额外的信息：

1. fast blocks 阶段的最后一个条目。
2. 模式转换的时间。
3. 所有 `headers`、`bodies` 和 `receipts` 的下载速度（每秒下载区块数量）。
4. 每下载 30000 个区块，将显示额外信息，并存储该时段内有关 Görli 的信息。

![Görli 快速同步日志](https://github.com/NethermindEth/nethermind/raw/master/docs/source/start/fast-sync-annotated.png)

当 `fast sync` 模式结束后，将开始下载 `state trie`，节点会切换到 `state sync stage`。这一过程可能需要在主网上耗费较长时间（几个小时），因此控制台会显示大量关于该过程的信息。

1. `state sync` 的总运行时长。
2. 已下载数据库的总大小（在主网上，这一同步过程于 2020 年 3 月结束，总计下载数据约为 34GB；在 Goerli 测试网上，下载数据约为 800MB）。
3. 下载速度（以 KB/s 为单位）。
4. 偶尔出现的队列查看消息（可忽略）。
5. `P` 代表节点正在等待的当前并行请求数量。
6. `acc` 代表已下载的帐户数据数量。
7. `nodes` 代表同步过程中下载的 `Patricia trie nodes` 数量。
8. `db_delay` 代表数据库读写访问所消耗的时间。该值越高，表示情况越糟糕。如果您在同步过程中重新启动节点，可能会导致情况变得更加糟糕，因为我们需要从数据库读取数据，来重新创建缓存。
9. 偶尔会显示其它有关请求和缓存健康状况的信息。如果您不需要报告任何问题，可以忽略这些信息。

![Görli 状态同步日志](https://github.com/NethermindEth/nethermind/raw/master/docs/source/start/state-sync-annotated.png)

当状态同步即将完成时，您可能会看到一系列 `branch sync` 信息反复从 0％ 加载到 100％ 左右。这是节点在尝试检索剩余的状态节点，并快速打包新的区块：

![Görli 分支同步日志](https://github.com/NethermindEth/nethermind/raw/master/docs/source/start/branch-sync.png)

当所有状态下载完成后，该节点将进入 `full sync` 模式。接下来，您可以发出 CLI / Web3 查询请求，并发送/接收交易了。🥳

1. 当整个 `Patricia trie` 下载完成后，`root` 将被保存。
2. 节点切换 `full sync` 模式时会有提醒。
3. 如果您看到节点正在处理区块，则表明您正处于 `full sync` 模式。新收到的区块会接受验证。
4. 每过两分钟，您都会看到已连接对等节点的摘要，包括它们的客户端版本、IP地址、最高的已同步区块和数据下载速度。

![Görli 完全同步日志](https://github.com/NethermindEth/nethermind/raw/master/docs/source/start/full-sync-annotated.png)

现在，您可以在独立进程中启动 CLI（再次启动 Nethermind.Launcher，然后选择 CLI 而非 Node）。 点击[此处](https://nethermind.readthedocs.io/en/latest/cli.html)，了解更多有关 CLI 的信息。

您还可以通过 Metamask 连接至该节点，只需从 Metamask 网络列表中选择 `localhost:8545` 即可。

![Metamask 本地主机连接](https://github.com/NethermindEth/nethermind/raw/master/docs/source/metamask/localhost.png)



