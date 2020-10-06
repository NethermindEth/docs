# 插件

Nethermind插件是扩展本地节点功能的强大方法。

您可以编写的插件：

| 插件类型 | 作用 |
| :--- | :--- |
| RPC | 向客户端添加可以完全访问内部Nethermind API的其他RPC模块，并在与基础架构/系统集成时可以扩展节点的功能。 |
| Block Tree Visitors | 该代码使您能够分析从生成到起始块的整个块树，并执行汇总的计算和检查。 |
| Devp2p | 允许您为节点创建附加的devp2p网络协议，以通过TCP / IP进行通信。您还可以在Nethermind节点上的自定义产品构建将运行。 |
| State Visitors | 允许您在整个原始格式状态 \(或仅某些帐户存储\)上运行汇总分析。 |
| Config | 可以将其他配置类别添加到配置文件中，然后在env变量，json文件或命令行中使用它们来配置插件的行为。 |
| TxPool | TxPool行为和监听器 |
| Tracers | 定制，功能强大的EVM跟踪器，能够实时提取EVM执行元素 |
| CLI | Nethermind CLI的其他模块，可以使您构建一些快速的便笺式JavaScript行为。
  |

如何构建插件？我们在Nethermind.Analytics插件中包含了一个示例：

![](../.gitbook/assets/image%20%28133%29.png)

#### RPC插件示例：

```csharp
    [RpcModule(ModuleType.Clique)]
    public interface IAnalyticsModule : IModule
    {
        [JsonRpcMethod(Description = "Retrieves ETH supply counted from state.", IsImplemented = true)]
        ResultWrapper<UInt256> analytics_verifySupply();

        [JsonRpcMethod(Description = "Retrieves ETH supply counted from rewards.", IsImplemented = true)]
        ResultWrapper<UInt256> analytics_verifyRewards();
    }
```

#### CLI插件示例：

```csharp
[CliModule("analytics")]
public class AnalyticsCliModule : CliModuleBase
{
    [CliFunction("analytics", "verifySupply")]
    public string VerifySupply()
    {
        return NodeManager.Post<string>("analytics_verifySupply").Result;
    }

    [CliFunction("analytics", "verifyRewards")]
    public string VerifyRewards()
    {
        return NodeManager.Post<string>("analytics_verifyRewards").Result;
    }

    public AnalyticsCliModule(ICliEngine cliEngine, INodeManager nodeManager)
        : base(cliEngine, nodeManager) { }
}
```

#### Block Tree Visitor ( 块树访客 ) 插件示例：

```csharp
    public class RewardsVerifier : IBlockTreeVisitor
    {
        private ILogger _logger;
        public bool PreventsAcceptingNewBlocks => true;
        public long StartLevelInclusive => 0;
        public long EndLevelExclusive { get; }

        private UInt256 _genesisAllocations = UInt256.Parse("72009990499480000000000000");
        private UInt256 _uncles;

        public UInt256 BlockRewards { get; private set; }

        public RewardsVerifier(ILogManager logManager, long endLevelExclusive)
        {
            _logger = logManager.GetClassLogger();
            EndLevelExclusive = endLevelExclusive;
            BlockRewards = _genesisAllocations;
        }

        private RewardCalculator _rewardCalculator = new RewardCalculator(MainnetSpecProvider.Instance);

        public Task<BlockVisitOutcome> VisitBlock(Block block, CancellationToken cancellationToken)
        {
            BlockReward[] rewards = _rewardCalculator.CalculateRewards(block);
            for (int i = 0; i < rewards.Length; i++)
            {
                if (rewards[i].RewardType == BlockRewardType.Uncle)
                {
                    _uncles += rewards[i].Value;
                }
                else
                {
                    BlockRewards += rewards[i].Value;
                }
            }

            _logger.Info($"Visiting block {block.Number}, total supply is (genesis + miner rewards + uncle rewards) | {_genesisAllocations} + {BlockRewards} + {_uncles}");
            return Task.FromResult(BlockVisitOutcome.None);
        }

        public Task<LevelVisitOutcome> VisitLevelStart(ChainLevelInfo chainLevelInfo, CancellationToken cancellationToken)
            => Task.FromResult(LevelVisitOutcome.None);

        public Task<bool> VisitMissing(Keccak hash, CancellationToken cancellationToken)
            => Task.FromResult(true);

        public Task<HeaderVisitOutcome> VisitHeader(BlockHeader header, CancellationToken cancellationToken)
            => Task.FromResult(HeaderVisitOutcome.None);

        public Task<LevelVisitOutcome> VisitLevelEnd(CancellationToken cancellationToken)
            => Task.FromResult(LevelVisitOutcome.None);
    }
```

#### Config插件示例：

```csharp
public class AnalyticsConfig : IAnalyticsConfig
{
    public bool PluginsEnabled { get; set; }
    public bool StreamTransactions { get; set; }
    public bool StreamBlocks { get; set; }
    public bool LogPublishedData { get; set; }
}
```

#### State Tree Visitor  ( 状态树访问者 ) 示例：

```csharp
public class SupplyVerifier : ITreeVisitor
{
    private readonly ILogger _logger;
    private HashSet<Keccak> _ignoreThisOne = new HashSet<Keccak>();
    private int _accountsVisited;
    private int _nodesVisited;

    public SupplyVerifier(ILogger logger)
    {
        _logger = logger;
    }

    public UInt256 Balance { get; set; } = UInt256.Zero;

    public bool ShouldVisit(Keccak nextNode)
    {
        if (_ignoreThisOne.Count > 16)
        {
            _logger.Warn($"Ignore count leak -> {_ignoreThisOne.Count}");
        }

        if (_ignoreThisOne.Contains(nextNode))
        {
            _ignoreThisOne.Remove(nextNode);
            return false;
        }

        return true;
    }

    public void VisitTree(Keccak rootHash, TrieVisitContext trieVisitContext)
    {
    }

    public void VisitMissingNode(Keccak nodeHash, TrieVisitContext trieVisitContext)
    {
        _logger.Warn($"Missing node {nodeHash}");
    }

    public void VisitBranch(TrieNode node, TrieVisitContext trieVisitContext)
    {
        _logger.Info($"Balance after visiting {_accountsVisited} accounts and {_nodesVisited} nodes: {Balance}");
        _nodesVisited++;

        if (trieVisitContext.IsStorage)
        {
            for (int i = 0; i < 16; i++)
            {
                Keccak childHash = node.GetChildHash(i);
                if (childHash != null)
                {
                    _ignoreThisOne.Add(childHash);
                }
            }
        }
    }

    public void VisitExtension(TrieNode node, TrieVisitContext trieVisitContext)
    {
        _nodesVisited++;
        if (trieVisitContext.IsStorage)
        {
            _ignoreThisOne.Add(node.GetChildHash(0));
        }
    }

    public void VisitLeaf(TrieNode node, TrieVisitContext trieVisitContext, byte[] value = null)
    {
        _nodesVisited++;

        if (trieVisitContext.IsStorage)
        {
            return;
        }

        AccountDecoder accountDecoder = new AccountDecoder();
        Account account = accountDecoder.Decode(node.Value.AsRlpStream());
        Balance += account.Balance;
        _accountsVisited++;

        _logger.Info($"Balance after visiting {_accountsVisited} accounts and {_nodesVisited} nodes: {Balance}");
    }

    public void VisitCode(Keccak codeHash, TrieVisitContext trieVisitContext)
    {
        _nodesVisited++;
    }
}
```

