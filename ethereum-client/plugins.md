# 插件

Nethermind 插件是一种有效扩展本地节点功能的方法。

您可以编写以下插件：

| 插件类型 | 用途 |
| :--- | :--- |
| RPC | 用来将额外的 RPC 模块添加到客户端上。这些模块可以完全访问内部 Nethermind API，并与您的基础设施/系统集成，从而扩展节点的功能。 |
| 区块树访问者 | 用来分析从创世块至链首块的整个区块树，并执行聚合计算和检查。 |
| Devp2p | 用来创建额外的 devp2p 网络协议，让您的节点通过 TCP/IP 协议进行通信。您还可以构建自定义产品，并在 Nethermind 节点上运行。 |
| 状态访问者 | 用来在整个原始格式状态（或某些帐户存储）上运行聚合分析。 |
| 配置 | 用来将额外的配置类别添加到我们的配置文件中，然后在 env 变量、json 文件或命令行中使用它们来配置插件行为。 |
| 交易池 | 交易池行为和监听器。 |
| 追踪器 | 强大的自定义 EVM 追踪器，能够实时提取 EVM 执行的元素。 |
| CLI | 额外的 Nethermind CLI 模块，能够让您构建一些快速的暂存器式 JavaScript 行为。
  |

如何构建一个插件？我们在 Nethermind.Analytics 插件中包含了一个示例：

![](../.gitbook/assets/image%20%28133%29.png)

#### RPC 插件示例：

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

#### CLI 插件示例：

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

#### 区块树访问者插件示例：

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

#### 配置插件示例：

```csharp
public class AnalyticsConfig : IAnalyticsConfig
{
    public bool PluginsEnabled { get; set; }
    public bool StreamTransactions { get; set; }
    public bool StreamBlocks { get; set; }
    public bool LogPublishedData { get; set; }
}
```

#### 状态树访问者插件示例：

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

