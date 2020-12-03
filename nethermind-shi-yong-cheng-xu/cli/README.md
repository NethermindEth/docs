---
description: Nethermind.Cli项目指南 （对管理节点非常有用）
---

# CLI

启动`./Nethermind.Launcher`之后，有两个选择-`Ethereum Node`（以太坊节点）和 `CLI`。

如果在一个进程中启动节点，然后在另一进程中启动CLI，则在CLI中将看到可用的命令。

{% hint style="warning" %}
You have to ensure that the `JsonRpc.Enabled` is set to `true` either by enabling it when Launcher asks about it or by manually editing the relevant config file or by passing `--JsonRpc.Enabled true` parameter after the Launcher command
{% endhint %}

CLI在启动时将显示可用选项\(功能和属性\)。

![Nethermind.Cli view](../../.gitbook/assets/image%20%286%29.png)

CLI允许您快速查询有关该节点的最基本信息。

1. 可以执行JavaScript算法
2. 可以向节点发出JSON RPC请求
3. 可以将前两者结合
4. 可以创建和调用函数
5. 可以检索节点对象
6. 可以使用节点对象属性
7. 可以通过调用load `load("filepath.js")`从磁盘加载javascript文件
8. 可以使用箭头键导航到先前的命令
9. 可以使用Tab键自动完成基本命令

![Nethermind.Cli operations](../../.gitbook/assets/image%20%2815%29%20%283%29%20%282%29.png)

要对该节点进行更高级的操作，请使用 [Web3](https://nethermind.readthedocs.io/en/latest/web3.html)或ether.js库或Truffle，Metamask等。

下面是可用的CLI操作列表，您可以在JSON RPC部分找到关于每个调用的更多信息。

{% page-ref page="../../yi-tai-fang-ke-hu-duan/json-rpc/" %}

