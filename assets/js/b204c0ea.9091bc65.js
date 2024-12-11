"use strict";(self.webpackChunknethermind_docs=self.webpackChunknethermind_docs||[]).push([[5732],{5866:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"developers/custom-analytic-tools","title":"Custom analytic tools","description":"This article is outdated and requires a revision.","source":"@site/versioned_docs/version-1.29.0/developers/custom-analytic-tools.md","sourceDirName":"developers","slug":"/developers/custom-analytic-tools","permalink":"/1.29.0/developers/custom-analytic-tools","draft":false,"unlisted":false,"editUrl":"https://github.com/NethermindEth/docs/tree/main/versioned_docs/version-1.29.0/developers/custom-analytic-tools.md","tags":[],"version":"1.29.0","lastUpdatedAt":1733931978000,"sidebarPosition":2,"frontMatter":{"title":"Custom analytic tools","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Plugins","permalink":"/1.29.0/developers/plugins"},"next":{"title":"Troubleshooting","permalink":"/1.29.0/troubleshooting"}}');var i=t(4848),r=t(8453);const s={title:"Custom analytic tools",sidebar_position:2},a=void 0,l={},c=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"This article is outdated and requires a revision."})}),"\n",(0,i.jsx)(n.p,{children:"Check plugins for some easy addition of analytical tools"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/1.29.0/developers/plugins",children:"Learn more about Plugins"})})}),"\n",(0,i.jsx)(n.p,{children:"You can also read more about some useful interfaces below:"}),"\n",(0,i.jsxs)(n.p,{children:["There are multiple extension points where you can add custom analytics to your Nethermind node if you know some C#.\nBelow you will find an example of using two very useful interfaces - ",(0,i.jsx)(n.code,{children:"IBlockVisitor"})," and ",(0,i.jsx)(n.code,{children:"ITreeVisitor"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Just to execute the code I have added one new initialization step that invokes two custom verifiers that I have used for\ncalculating total supply in two different ways - by calculating mining rewards and by summing up all account balances:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'    [RunnerStepDependencies(typeof(ReviewBlockTree))]\n    public class RunCustomTools : IStep\n    {\n        private readonly EthereumRunnerContext _context;\n\n        public RunCustomTools(EthereumRunnerContext context)\n        {\n            _context = context;\n        }\n\n        public Task Execute(CancellationToken cancellationToken)\n        {\n            ILogger logger = _context.LogManager.GetClassLogger();\n            IInitConfig initConfig = _context.Config<IInitConfig>();\n\n            switch (initConfig.DiagnosticMode)\n            {\n                case DiagnosticMode.VerifySupply:\n                {\n                    logger.Info("Genesis supply:");\n                    SupplyVerifier supplyVerifier = new SupplyVerifier(logger);\n                    StateDb stateDb = new StateDb(_context.DbProvider.StateDb.Innermost);\n                    StateDb codeDb = new StateDb(_context.DbProvider.StateDb.Innermost);\n                    StateReader stateReader = new StateReader(stateDb, codeDb, _context.LogManager);\n                    stateReader.RunTreeVisitor(supplyVerifier, _context.BlockTree!.Genesis.StateRoot);\n\n                    Block head = _context.BlockTree!.Head;\n                    logger.Info($"Head ({head.Number}) block supply:");\n                    supplyVerifier = new SupplyVerifier(logger);\n                    stateReader.RunTreeVisitor(supplyVerifier, head.StateRoot);\n                    break;\n                }\n                case DiagnosticMode.VerifyRewards:\n                    _context.BlockTree!.Accept(new RewardsVerifier(_context.LogManager), cancellationToken);\n                    break;\n            }\n\n            return Task.CompletedTask;\n        }\n    }\n'})}),"\n",(0,i.jsx)(n.p,{children:"Below you will see an example of using ITreeVisitor that allows to check all the blocks, including some of the discarded\nbranches if you wish so:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'    public class RewardsVerifier : IBlockTreeVisitor\n    {\n        private ILogger _logger;\n        public bool PreventsAcceptingNewBlocks => true;\n        public long StartLevelInclusive => 0;\n        public long EndLevelExclusive => 10618000;\n\n        private UInt256 _genesisAllocations = UInt256.Parse("72009990499480000000000000");\n        private UInt256 _uncles;\n        private UInt256 _blockRewards;\n\n        public RewardsVerifier(ILogManager logManager)\n        {\n            _logger = logManager.GetClassLogger();\n        }\n\n        private RewardCalculator _rewardCalculator = new RewardCalculator(MainnetSpecProvider.Instance);\n\n        public Task<BlockVisitOutcome> VisitBlock(Block block, CancellationToken cancellationToken)\n        {\n            BlockReward[] rewards = _rewardCalculator.CalculateRewards(block);\n            for (int i = 0; i < rewards.Length; i++)\n            {\n                if (rewards[i].RewardType == BlockRewardType.Uncle)\n                {\n                    _uncles += rewards[i].Value;\n                }\n                else\n                {\n                    _blockRewards += rewards[i].Value;\n                }\n            }\n\n            _logger.Info($"Visiting block {block.Number}, total supply is (genesis + miner rewards + uncle rewards) | {_genesisAllocations} + {_blockRewards} + {_uncles}");\n            return Task.FromResult(BlockVisitOutcome.None);\n        }\n\n        public Task<LevelVisitOutcome> VisitLevelStart(ChainLevelInfo chainLevelInfo, CancellationToken cancellationToken)\n            => Task.FromResult(LevelVisitOutcome.None);\n\n        public Task<bool> VisitMissing(Keccak hash, CancellationToken cancellationToken)\n            => Task.FromResult(true);\n\n        public Task<bool> VisitHeader(BlockHeader header, CancellationToken cancellationToken)\n            => Task.FromResult(true);\n\n        public Task<LevelVisitOutcome> VisitLevelEnd(CancellationToken cancellationToken)\n            => Task.FromResult(LevelVisitOutcome.None);\n    }\n'})}),"\n",(0,i.jsx)(n.p,{children:"And here you will find an example of a tree visitor that sums up all the account balances:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'    public class SupplyVerifier : ITreeVisitor\n    {\n        private readonly ILogger _logger;\n        private UInt256 _balance = UInt256.Zero;\n        private int _accountsVisited;\n\n        public SupplyVerifier(ILogger logger)\n        {\n            _logger = logger;\n        }\n\n        public bool ShouldVisit(Keccak nextNode) { return true; }\n\n        public void VisitTree(Keccak rootHash, TrieVisitContext trieVisitContext) { }\n\n        public void VisitMissingNode(Keccak nodeHash, TrieVisitContext trieVisitContext) { }\n\n        public void VisitBranch(TrieNode node, TrieVisitContext trieVisitContext) { }\n\n        public void VisitExtension(TrieNode node, TrieVisitContext trieVisitContext) { }\n\n        public void VisitLeaf(TrieNode node, TrieVisitContext trieVisitContext, byte[] value = null)\n        {\n            if (trieVisitContext.IsStorage)\n            {\n                return;\n            }\n\n            AccountDecoder accountDecoder = new AccountDecoder();\n            Account account = accountDecoder.Decode(node.Value.AsRlpStream());\n            _balance += account.Balance;\n            _accountsVisited++;\n\n            _logger.Info($"Balance after visiting {_accountsVisited}: {_balance}");\n        }\n\n        public void VisitCode(Keccak codeHash, TrieVisitContext trieVisitContext) { }\n    }\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var o=t(6540);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);