# Herramientas analíticas personalizadas

Verifique los plugins para una fácil adición de herramientas analíticas

{% page-ref page="../ethereum-client/plugins.md" %}

También puedes leer más sobre algunas interfaces útiles a continuación:

Hay varios puntos de extensión donde puede agregar análisis personalizados a su nodo Nethermind si tienes conocimiento sobre C\#.  A continuación encontrarás un ejemplo del uso de dos interfaces muy útiles: `IBlockVisitor` e` ITreeVisitor`.

Solo para ejecutar el código, agregué un nuevo paso de inicialización que invoca dos verificadores personalizados que he usado para calcular el suministro total de dos maneras diferentes - calculando las recompensas mineras y sumando todos los saldos de las cuentas:

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

A continuación verá un ejemplo de uso de ITreeVisitor que permite verificar todos los bloques, incluidas algunas de las ramas descartadas si así lo desea:

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

Y aquí encontrará un ejemplo de un visitante de árbol que resume todos los saldos de la cuenta:

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

