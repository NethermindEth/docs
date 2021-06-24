---
description: 关于如何有效管理节点的 Nethermind.Cli 项目指南
---

# CLI

启动 `./Nethermind.Launcher` 之后，您有两个选择——`Ethereum Node`（以太坊节点）和 `CLI`。

如果您在一个进程中启动节点，然后在另一个进程中启动 CLI，您将在 CLI 中看到可用的命令。

{% hint style="warning" %}
You have to ensure that the `JsonRpc.Enabled` is set to `true` either by enabling it when Launcher asks about it or by manually editing the relevant config file or by passing `--JsonRpc.Enabled true` parameter after the Launcher command
{% endhint %}

CLI 在启动时将显示可用选项（功能和特性）。

![Nethermind.Cli &#x89C6;&#x56FE;](../../.gitbook/assets/image%20%286%29.png)

CLI 可以让您快速查询您的节点的基本信息。

1. 您可以执行 JavaScript 算术
2. 您可以向节点发出 JSON RPC 请求
3. 您可以将前两者相结合
4. 您可以创建和调用函数
5. 您可以检索节点对象
6. 您可以使用节点对象属性
7. 您可以通过调用 `load("filepath.js")` 从磁盘加载 javascript 文件
8. 您可以使用箭头键导航到之前的命令
9. 您可以使用 Tab 键自动补全基本命令

![Nethermind.Cli operations](https://github.com/NethermindEth/docs/tree/b8c795545ab876ff12dec434d0cd00585f2ba346/.gitbook/assets/image%20%2815%29%20%283%29%20%283%29%20%283%29%20%282%29%20%282%29.png)

如需对节点进行更高级的操作，您可以使用 [Web3](https://nethermind.readthedocs.io/en/latest/web3.html)、ether.js 库、Truffle 或 Metamask 等。

点击下方链接，即可查看可用的 CLI 操作列表。您还可以在 JSON RPC 部分找到更多关于每个调用的信息。

{% page-ref page="../../yi-tai-fang-ke-hu-duan/json-rpc/" %}

