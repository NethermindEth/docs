---
description: 检查是否可以使用当前设置运行Nethermind
---

# 硬体需求

通常, **IO操作越快越好**。因此，到目前为止， [Digital Ocean](https://www.digitalocean.com/)和[UpCloud](https://upcloud.com/)是我们在运行Nethermind节点时测试过的最佳云提供商。

启动后，该节点将显示估计的最大内存使用量，但并不能说明所有内容，并且某些块处理/某些快速同步临时缓存可能会超过这些值。

可以使用配置选项--Init.MemoryHint来建议数据库和某些网络操作要使用的内存量。在同步过程中，将有更多的内存用于缓存。

建议的要求可以在下面找到。

可以尝试使用较小的网络, 低一点的设置。也可以在初始同步后降级虚拟机\（如果已使用16GB RAM进行同步，则4GB RAM应该足以使用--Init.MemoryHint 1500000000运行同步的主网节点。

| 网络 | 磁盘空间 | 内存 | 核心数 |
| :--- | :--- | :--- | :--- |
| **Goerli快速同步** | 20+ GB | 3 GB | 2 |
| **主网快速同步** | 350+ GB | 6 GB | 4 |
| **Rinkeby 快速同步** | 50+ GB | 6 GB | 4 |
| **Ropsten快速同步** | 100+ GB | 6 GB | 4 |
| **主网完整档案** | 4.5+ TB | 16 GB | 6 |

磁盘空间要求：

新近快速同步的主网磁盘空间使用\（截至2020年7月\）：

![&#x5982;&#x679C;&#x540C;&#x6B65;&#x65F6;&#x6CA1;&#x6709;&#x6536;&#x636E;&#xFF0C;&#x5219;&#x53EF;&#x4EE5;&#x8282;&#x7701;160GB&#x7684;&#x7A7A;&#x95F4;&#x3002; &#x65E0;&#x673A;&#x8EAB;-99GB&#x4EE5;&#x4E0A;&#x3002;](../.gitbook/assets/image%20%2856%29.png)
