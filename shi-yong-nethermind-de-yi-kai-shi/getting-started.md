---
description: GörliTestnet Nethermind同步的快速入门示例
---

# 入门指南

## 🔧设置虚拟机

如果不在笔记本电脑/台式机上启动，则可能需要设置云虚拟机。下面可以找到有关使用选定的\[云提供商\]设置所有内容的更多信息 \(../guides-and-helpers/cloud-providers/\)。

{% page-ref page="../zhi-nan-he-zhu-shou/cloud-providers/" %}

确保正确配置\[防火墙\]（防火墙配置.md）。

{% page-ref page="firewall-configuration.md" %}

您可以检查\[支持的操作系统\]（受支持的平台.md）和体系结构以及\[硬件要求\]（硬件要求.md）。

{% page-ref page="supported-platforms.md" %}

{% page-ref page="hardware-requirements.md" %}

## ⏬ 下载Nethermind

首先您需要下载Nethermind软件包。当前有2个提供`Nethermind`软件包的资源。找软件包的资源请检查此页

{% page-ref page="../yi-tai-fang-ke-hu-duan/download-sources/" %}

## 🔛启动Nethermind

* \[\]通过 `./Nethermind.Launcher` 启动Nethermind，然后选择首先启动的Node。

![Nethermind.Launcher initial options](https://github.com/NethermindEth/nethermind/raw/master/docs/source/start/launcher.png)

* [ ] 选择`Goerli（light clique 测试网）`

![Network options](https://github.com/NethermindEth/nethermind/raw/master/docs/source/start/goerli-choice.png)

* [ ] 选择`快速同步` 模式

![Synchronization mode options](https://github.com/NethermindEth/nethermind/raw/master/docs/source/start/fast-sync-choice.png)

* [ ] 输入`y`并按`enter`来确保启用了JSON RPC。
* [ ] 按`enter` 跳过设置 `Host IP` ，127.0.0.1将被设置为默认值

{% hint style="warning" %}
如果不在本地运行，则可能需要将“主机”值更改为VM的公共IP地址。
{% endhint %}



![&#x4F7F;&#x7528;Nethermind.Launcher&#x542F;&#x7528;JSON RPC](https://github.com/NethermindEth/nethermind/raw/master/docs/source/start/json-choice.png)

* [ ] 输入`y`并按 `enter` 跳过ethstats注册。

![EthStats configuration skip](https://github.com/NethermindEth/nethermind/raw/master/docs/source/start/ethstats-choice.png)

## 👨💻  解释Nethermind日志

节点启动后，您就会看到有关该节点的一些初始信息，然后同步将开始。Görli快速同步最初使`快速块`同步模式。`快速块`同步从之前挑选一些已知的`枢轴块`，向下下载`标头`，`正文`和`收据`，一直到`创世块`。控制台显示屏显示数字从0增长到枢轴，但这只是为了使显示屏更加用户友好。

您将看到一些像这样的有关同步进度的信息：

1. 显示在快速阻止阶段要下载的所有已下载的 `标头`， `正文`和 `收据`的数量。
2. 显示已下载的 `块`， `标头`和 `收据`的当前队列，等待保存到数据库。
3. 显示当前的下载速度\(每秒的块数-bps\)。
4. 显示平均下载速度\(每秒的块数-bps\)。

![Fast blocks sync logs](https://github.com/NethermindEth/nethermind/raw/master/docs/source/start/fast-blocks-sync-annotated.png)

当快速块阶段结束时，在`列转行` 和`最新块` 之间会有一些下载块，其中将包含一些其他信息：

1. 显示快速块阶段的最后一个条目。
2. 显示模式转换时刻。
3. 同时显示所有`标头`，`正文`和`收据`的速度（以每秒块为单位）。
4. 附加信息将每30000个块显示一次，并存储有关Görli epoch 的信息。

![G&#xF6;rli fast sync logs](https://github.com/NethermindEth/nethermind/raw/master/docs/source/start/fast-sync-annotated.png)

`快速同步` 部分完成后，当下载 `trie状态` 时，节点将转换到 `状态同步阶段`。 因为该过程在主网（mainnet \)上可能要花费很长时间\(几个小时\)，因此会显示许多有关进度的信息。

1. 显示`状态同步`中的总经过时间。
2. 显示已下载的数据库总大小（在主网\( mainnet \)上，到2020年3月，同步完成约34GB，在Goerli上完成约800MB）。
3. 显示下载速度（以千字节/秒为单位）。
4. 有时可能会出现队列查看消息（可忽略）
5. `P`代表节点正在等待的当前并行请求数。
6. `acc` 代表已经下载的帐户数据数量。
7. `nodes` 代表同步过程中下载的`Patricia trie节点`数。
8. `db_delay`  显示在数据库写/读访问中花费的时间。 值越高，越不好。 如果在同步过程中重新启动节点，可能会变得更糟糕，因为我们需要先创建一些缓存，然后从数据库读取数据来重新创建该缓存。
9. 有时我们会显示有关请求和缓存运行状况的其他信息，忽略这些信息，除非您需要报告任何问题。

![G&#xF6;rli state sync logs](https://github.com/NethermindEth/nethermind/raw/master/docs/source/start/state-sync-annotated.png)

状态同步快要完成时，您可能会看到一系列`分支同步` 信息从0％重新加载到接近100％。 这是试图检索剩余的少量状态节点并快速处理头块的节点：

![G&#xF6;rli branch sync logs](https://github.com/NethermindEth/nethermind/raw/master/docs/source/start/branch-sync.png)

在某个时刻，将下载整个状态，并且该节点进入`完全同步`模式，并允许您发出CLI / Web3查询以及发送/接收事务。🥳

1. 在下载整个 `Patricia trie` 时，`根目录`被保存。
2. 我们还明确指出该节点已转换为`完全同步`。
3. 看到正在处理的块时，您就处于`完全同步` 状态，并且正在计算新到达的块。
4. 每两分钟，您将看到一个已连接对等设备的摘要，包括其客户端版本，IP地址，最高同步块和数据下载速度。

![G&#xF6;rli full sync logs](https://github.com/NethermindEth/nethermind/raw/master/docs/source/start/full-sync-annotated.png)

现在，您可以在单独的过程中启动CLI \(再次启动Nethermind.Launcher，然后选择CLI而不是Node\)。 \[在此处\]了解更多有关CLI的信息\([https://nethermind.readthedocs.io/en/latest/cli.html](https://nethermind.readthedocs.io/en/latest/cli.html)\).

您还可以通过从Metamask网络列表中选择`localhost:8545`从Metamask连接到该节点。

![Metamask localhost connection](https://github.com/NethermindEth/nethermind/raw/master/docs/source/metamask/localhost.png)

