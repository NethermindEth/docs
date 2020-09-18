# 升级

升级现有数据库时，请确保已阅读当前版本和要升级到的版本之间所有版本的发行说明。

升级时的**最大风险**是升级配置中的新枢纽块，以**升级未处于同步状态的快速同步节点**\(同步后更改枢纽块是不应该这样做的 - 我们正在编写可阻止的代码\)。********

通常，您应确保在升级时：

* 使用与初始同步中相同的枢轴块数据（pivot block data）
* **或**删除数据库并重新同步

每个Nethermind的版本都要通过以下测试过程：

* 探索性测试，包括主网重新同步，Goerli验证程序测试，JSON RPC
* 执行Nethermind特定的单元和集成测试
* 对EVM、fork choice、RLP、Trie执行以太坊测试
* 对EVM、fork choice、RLP、Trie执行遗留\（旧网络版本\）以太坊测试
* 执行网络、同步和一致性的配置单元测试
* 从Truffle到Nethermind Spaceneth网络部署ERC20合同
* 对以下每个同步执行烟雾测试：

{% page-ref page="ethereum-networks-synchronization-smoke-testing-with-nethermind.md" %}

| 网络 | 同步模式 | 共识 | 同步测试 |
| :--- | :--- | :--- | :--- |
| 主网 | 快速同步 | ethash | ✓ |
| 主网 | 存档 | ethash | x |
| 主网 | Beam 同步 | ethash | x |
| Goerli | 快速同步 | Clique | ✓ |
| Goerli | 存档 | Clique | ✓ |
| Goerli | Beam 同步 | Clique | x |
| Rinkeby | 快速同步 | Clique | ✓ |
| Rinkeby | 存档 | Clique | x |
| Rinkeby | Beam 同步 | Clique | x |
| Ropsten | 快速同步 | ethash | ✓ |
| Ropsten | 存档 | ethash | x |
| Ropsten | Beam 同步 | ethash | x |
| POA核心 | 快速同步 | AuRa | ✓ |
| POA核心 | 存档 | AuRa | x |
| POA核心 | Beam 同步 | AuRa | x |
| Sokol | 快速同步 | AuRa | ✓ |
| Sokol | 存档 | AuRa | ✓ |
| Sokol | Beam 同步 | AuRa | x |
| xDAI | 快速同步 | POSDAO | ✓ |
| xDAI | 存档 | POSDAO | ✓ |
| xDAI | Beam 同步 | POSDAO | x |
| EnergyWeb | 快速同步 | AuRa | ✓ |
| EnergyWeb | 存档 | AuRa | ✓ |
| EnergyWeb | Beam 同步 | AuRA | x |
| Volta | 快速同步 | AuRa | ✓ |
| Volta | 存档 | AuRa | ✓ |
| Volta | Beam 同步 | AuRa | x |

![Example of sync test results](../.gitbook/assets/image%20%2893%29.png)

