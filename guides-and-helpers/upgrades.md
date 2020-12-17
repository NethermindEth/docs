# 升级

升级当前数据库时，请确保您已阅读当前版本和目标版本之间所有版本的发布说明。

升级过程中的**最大风险**在于，会为**快速同步模式**下**未同步完成**的节点配置一个**新的 pivot 区块**（同步后是不应该更改 pivot 区块的，我们正在编写代码来阻止这种操作）。

通常来说，在升级数据库时，您应该确保：

* 使用与初始同步相同的 pivot 区块数据
* **或**删除数据库并重新同步

每个版本的 Nethermind 都要经过以下测试流程：

* 探索性测试，包括主网重新同步、Goerli 验证者测试、JSON RPC
* 执行专门针对 Nethermind 的单元和集成测试
* 执行 EVM、分叉选择、RLP、状态树相关的以太坊测试
* 执行 EVM、分叉选择、RLP、状态树相关的传统（旧版本的）以太坊测试
* 执行网络、同步和共识相关的 Hive 测试
* 从 Truffle 到 Nethermind Spaceneth 网络上部署 ERC20 合约
* 对以下每个同步执行冒烟测试：

{% page-ref page="ethereum-networks-synchronization-smoke-testing-with-nethermind.md" %}

| 网络 | 同步模式 | 共识 | 同步测试 |
| :--- | :--- | :--- | :--- |
| 主网 | 快速同步 | ethash | ✓ |
| 主网 | 归档 | ethash | x |
| 主网 | Beam 同步 | ethash | x |
| Goerli | 快速同步 | Clique | ✓ |
| Goerli | 归档 | Clique | ✓ |
| Goerli | Beam 同步 | Clique | x |
| Rinkeby | 快速同步 | Clique | ✓ |
| Rinkeby | 归档 | Clique | x |
| Rinkeby | Beam 同步 | Clique | x |
| Ropsten | 快速同步 | ethash | ✓ |
| Ropsten | 存档 | ethash | x |
| Ropsten | Beam 同步 | ethash | x |
| POA Core | 快速同步 | AuRa | ✓ |
| POA Core | 归档 | AuRa | x |
| POA Core | Beam 同步 | AuRa | x |
| Sokol | 快速同步 | AuRa | ✓ |
| Sokol | 归档 | AuRa | ✓ |
| Sokol | Beam 同步 | AuRa | x |
| xDAI | 快速同步 | POSDAO | ✓ |
| xDAI | 归档 | POSDAO | ✓ |
| xDAI | Beam 同步 | POSDAO | x |
| EnergyWeb | 快速同步 | AuRa | ✓ |
| EnergyWeb | 归档 | AuRa | ✓ |
| EnergyWeb | Beam 同步 | AuRA | x |
| Volta | 快速同步 | AuRa | ✓ |
| Volta | 归档 | AuRa | ✓ |
| Volta | Beam 同步 | AuRa | x |

![同步测试结果示例](../.gitbook/assets/image%20%2893%29.png)

