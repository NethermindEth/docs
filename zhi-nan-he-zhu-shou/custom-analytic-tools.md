# 自定义分析工具

有多个扩展点，您可以在这些扩展点向Nethermind节点添加自定义分析（如果您知道一些C\#）。下面是一个使用两个非常有用的界面的示例-`IBlockVisitor`和 `ITreeVisitor`.。

为了执行代码，我添加了一个新的初始化步骤该步骤调用两个自定义验证器，我用两种不同的方法计算总供应量 - 通过计算采矿奖励和通过汇总所有帐户余额：

```text
    [RunnerStepDependencies(typeof(ReviewBlockTree))]
    public class RunCustomTools : IStep
    {
        private readonly EthereumRunnerContext _context;

        public RunCustomTools(EthereumRunnerContext context)
        {
            _context = context;
        }

        public Task Execute(CancellationToken cancellationToken)
        {
            ILogger logger = _context.LogManager.GetClassLogger();
            IInitConfig initConfig = _context.Config<IInitConfig>();

            switch (initConfig.DiagnosticMode)
            {
                case DiagnosticMode.VerifySupply:
                {
                    logger.Info("Genesis supply:");
                    SupplyVerifier supplyVerifier = new SupplyVerifier(logger);
                    StateDb stateDb = new StateDb(_context.DbProvider.StateDb.Innermost);
                    StateDb codeDb = new StateDb(_context.DbProvider.StateDb.Innermost);
                    StateReader stateReader = new StateReader(stateDb, codeDb, _context.LogManager);
                    stateReader.RunTreeVisitor(supplyVerifier, _context.BlockTree!.Genesis.StateRoot);

                    Block head = _context.BlockTree!.Head;
                    logger.Info($"Head ({head.Number}) block supply:");
                    supplyVerifier = new SupplyVerifier(logger);
                    stateReader.RunTreeVisitor(supplyVerifier, head.StateRoot);
                    break;
                }
                case DiagnosticMode.VerifyRewards:
                    _context.BlockTree!.Accept(new RewardsVerifier(_context.LogManager), cancellationToken);
                    break;
            }

            return Task.CompletedTask;
        }
    }
```

在下面，您将看到一个使用ITreeVisitor的示例，该示例允许检查所有块，如果需要的话，也可以检查一些丢弃的分支：

```text
    public class RewardsVerifier : IBlockTreeVisitor
    {
        private ILogger _logger;
        public bool PreventsAcceptingNewBlocks => true;
        public long StartLevelInclusive => 0;
        public long EndLevelExclusive => 10618000;

        private UInt256 _genesisAllocations = UInt256.Parse("72009990499480000000000000");
        private UInt256 _uncles;
        private UInt256 _blockRewards;

        public RewardsVerifier(ILogManager logManager)
        {
            _logger = logManager.GetClassLogger();
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
                    _blockRewards += rewards[i].Value;
                }
            }

            _logger.Info($"Visiting block {block.Number}, total supply is (genesis + miner rewards + uncle rewards) | {_genesisAllocations} + {_blockRewards} + {_uncles}");
            return Task.FromResult(BlockVisitOutcome.None);
        }

        public Task<LevelVisitOutcome> VisitLevelStart(ChainLevelInfo chainLevelInfo, CancellationToken cancellationToken)
            => Task.FromResult(LevelVisitOutcome.None);

        public Task<bool> VisitMissing(Keccak hash, CancellationToken cancellationToken)
            => Task.FromResult(true);

        public Task<bool> VisitHeader(BlockHeader header, CancellationToken cancellationToken)
            => Task.FromResult(true);

        public Task<LevelVisitOutcome> VisitLevelEnd(CancellationToken cancellationToken)
            => Task.FromResult(LevelVisitOutcome.None);
    }
```

在这里，你会发现一个树状访问者的示例，该示例总结了所有帐户余额：

```text
    public class SupplyVerifier : ITreeVisitor
    {
        private readonly ILogger _logger;
        private UInt256 _balance = UInt256.Zero;
        private int _accountsVisited;

        public SupplyVerifier(ILogger logger)
        {
            _logger = logger;
        }

        public bool ShouldVisit(Keccak nextNode) { return true; }

        public void VisitTree(Keccak rootHash, TrieVisitContext trieVisitContext) { }

        public void VisitMissingNode(Keccak nodeHash, TrieVisitContext trieVisitContext) { }

        public void VisitBranch(TrieNode node, TrieVisitContext trieVisitContext) { }

        public void VisitExtension(TrieNode node, TrieVisitContext trieVisitContext) { }

        public void VisitLeaf(TrieNode node, TrieVisitContext trieVisitContext, byte[] value = null)
        {
            if (trieVisitContext.IsStorage)
            {
                return;
            }

            AccountDecoder accountDecoder = new AccountDecoder();
            Account account = accountDecoder.Decode(node.Value.AsRlpStream());
            _balance += account.Balance;
            _accountsVisited++;

            _logger.Info($"Balance after visiting {_accountsVisited}: {_balance}");
        }

        public void VisitCode(Keccak codeHash, TrieVisitContext trieVisitContext) { }
    }
```

