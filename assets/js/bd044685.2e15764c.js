"use strict";(self.webpackChunknethermind_docs=self.webpackChunknethermind_docs||[]).push([[2378],{6229:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"developers/plugins","title":"Plugins","description":"This article is outdated and requires a revision.","source":"@site/versioned_docs/version-1.28.0/developers/plugins.md","sourceDirName":"developers","slug":"/developers/plugins","permalink":"/1.28.0/developers/plugins","draft":false,"unlisted":false,"editUrl":"https://github.com/NethermindEth/docs/tree/main/versioned_docs/version-1.28.0/developers/plugins.md","tags":[],"version":"1.28.0","lastUpdatedAt":1741970482000,"sidebarPosition":1,"frontMatter":{"title":"Plugins","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Building from source","permalink":"/1.28.0/developers/building-from-source"},"next":{"title":"Custom analytic tools","permalink":"/1.28.0/developers/custom-analytic-tools"}}');var l=i(4848),s=i(8453);const o={title:"Plugins",sidebar_position:1},r=void 0,a={},c=[{value:"RPC Plugin example:",id:"rpc-plugin-example",level:2},{value:"CLI Plugin example:",id:"cli-plugin-example",level:2},{value:"Block Tree Visitor Plugin example:",id:"block-tree-visitor-plugin-example",level:2},{value:"Config plugin example:",id:"config-plugin-example",level:2},{value:"State Tree Visitor example:",id:"state-tree-visitor-example",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsx)(n.p,{children:"This article is outdated and requires a revision."})}),"\n",(0,l.jsx)(n.p,{children:"Nethermind plugins is a powerful way of extending your local node capabilities."}),"\n",(0,l.jsxs)(n.p,{children:["(see also an article\nhere: ",(0,l.jsx)(n.a,{href:"https://medium.com/nethermind-eth/writing-your-first-nethermind-plugin-a9e04d81cf59",children:"https://medium.com/nethermind-eth/writing-your-first-nethermind-plugin-a9e04d81cf59"}),")"]}),"\n",(0,l.jsx)(n.p,{children:"Plugins that you can write:"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Plugin Type"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"What can it be used for?"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"RPC"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Adding additional RPC modules to the client that have full access to the internal Nethermind APIs and can extend capabilities of the node when integrating with your infrastructure / systems."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Block Tree Visitors"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Code allowing you to analyze entire block tree from genesis to the head block and execute aggregated calculations and checks."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Devp2p"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Allows you to create additional devp2p network protocol for your nodes to communicate over TCP/IP. You can also build custom products that will run attached to Nethermind nodes."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"State Visitors"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Allow you to run aggregated analysis on the entire raw format state (or just some accounts storages)."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Config"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"You can add additional configuration categories to our config files and then use them in env variables, json files or command line to configure behaviour of your plugins."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"TxPool"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"TxPool behaviours and listeners."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Tracers"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Custom, powerful EVM tracers capable of extracting elements of EVM execution in real time."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"CLI"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Additional modules for Nethermind CLI that can allow you build some quick scratchpad style JavaScript based behaviors."})]})]})]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Note:"})," When writing a plugin be carefull about exceptions you throw. Especially if you are hooking up event handlers\non some core objects like BlockProcessor or BlockTree. Those exceptions can bring the node down. This is by design. Its\nresponsibility of plugin writer to correctly handle those exceptions."]}),"\n",(0,l.jsx)(n.p,{children:"How to build a plugin? We included an example inside the Nethermind.Analytics plugin:"}),"\n",(0,l.jsx)(n.h2,{id:"rpc-plugin-example",children:"RPC Plugin example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-csharp",children:'    [RpcModule(ModuleType.Clique)]\n    public interface IAnalyticsModule : IModule\n    {\n        [JsonRpcMethod(Description = "Retrieves ETH supply counted from state.", IsImplemented = true)]\n        ResultWrapper<UInt256> analytics_verifySupply();\n\n        [JsonRpcMethod(Description = "Retrieves ETH supply counted from rewards.", IsImplemented = true)]\n        ResultWrapper<UInt256> analytics_verifyRewards();\n    }\n'})}),"\n",(0,l.jsx)(n.h2,{id:"cli-plugin-example",children:"CLI Plugin example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-csharp",children:'[CliModule("analytics")]\npublic class AnalyticsCliModule : CliModuleBase\n{\n    [CliFunction("analytics", "verifySupply")]\n    public string VerifySupply()\n    {\n        return NodeManager.Post<string>("analytics_verifySupply").Result;\n    }\n\n    [CliFunction("analytics", "verifyRewards")]\n    public string VerifyRewards()\n    {\n        return NodeManager.Post<string>("analytics_verifyRewards").Result;\n    }\n\n    public AnalyticsCliModule(ICliEngine cliEngine, INodeManager nodeManager)\n        : base(cliEngine, nodeManager) { }\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"block-tree-visitor-plugin-example",children:"Block Tree Visitor Plugin example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-csharp",children:'    public class RewardsVerifier : IBlockTreeVisitor\n    {\n        private ILogger _logger;\n        public bool PreventsAcceptingNewBlocks => true;\n        public long StartLevelInclusive => 0;\n        public long EndLevelExclusive { get; }\n\n        private UInt256 _genesisAllocations = UInt256.Parse("72009990499480000000000000");\n        private UInt256 _uncles;\n\n        public UInt256 BlockRewards { get; private set; }\n\n        public RewardsVerifier(ILogManager logManager, long endLevelExclusive)\n        {\n            _logger = logManager.GetClassLogger();\n            EndLevelExclusive = endLevelExclusive;\n            BlockRewards = _genesisAllocations;\n        }\n\n        private RewardCalculator _rewardCalculator = new RewardCalculator(MainnetSpecProvider.Instance);\n\n        public Task<BlockVisitOutcome> VisitBlock(Block block, CancellationToken cancellationToken)\n        {\n            BlockReward[] rewards = _rewardCalculator.CalculateRewards(block);\n            for (int i = 0; i < rewards.Length; i++)\n            {\n                if (rewards[i].RewardType == BlockRewardType.Uncle)\n                {\n                    _uncles += rewards[i].Value;\n                }\n                else\n                {\n                    BlockRewards += rewards[i].Value;\n                }\n            }\n\n            _logger.Info($"Visiting block {block.Number}, total supply is (genesis + miner rewards + uncle rewards) | {_genesisAllocations} + {BlockRewards} + {_uncles}");\n            return Task.FromResult(BlockVisitOutcome.None);\n        }\n\n        public Task<LevelVisitOutcome> VisitLevelStart(ChainLevelInfo chainLevelInfo, CancellationToken cancellationToken)\n            => Task.FromResult(LevelVisitOutcome.None);\n\n        public Task<bool> VisitMissing(Keccak hash, CancellationToken cancellationToken)\n            => Task.FromResult(true);\n\n        public Task<HeaderVisitOutcome> VisitHeader(BlockHeader header, CancellationToken cancellationToken)\n            => Task.FromResult(HeaderVisitOutcome.None);\n\n        public Task<LevelVisitOutcome> VisitLevelEnd(CancellationToken cancellationToken)\n            => Task.FromResult(LevelVisitOutcome.None);\n    }\n'})}),"\n",(0,l.jsx)(n.h2,{id:"config-plugin-example",children:"Config plugin example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-csharp",children:"public class AnalyticsConfig : IAnalyticsConfig\n{\n    public bool PluginsEnabled { get; set; }\n    public bool StreamTransactions { get; set; }\n    public bool StreamBlocks { get; set; }\n    public bool LogPublishedData { get; set; }\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"state-tree-visitor-example",children:"State Tree Visitor example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-csharp",children:'public class SupplyVerifier : ITreeVisitor\n{\n    private readonly ILogger _logger;\n    private HashSet<Keccak> _ignoreThisOne = new HashSet<Keccak>();\n    private int _accountsVisited;\n    private int _nodesVisited;\n\n    public SupplyVerifier(ILogger logger)\n    {\n        _logger = logger;\n    }\n\n    public UInt256 Balance { get; set; } = UInt256.Zero;\n\n    public bool ShouldVisit(Keccak nextNode)\n    {\n        if (_ignoreThisOne.Count > 16)\n        {\n            _logger.Warn($"Ignore count leak -> {_ignoreThisOne.Count}");\n        }\n\n        if (_ignoreThisOne.Contains(nextNode))\n        {\n            _ignoreThisOne.Remove(nextNode);\n            return false;\n        }\n\n        return true;\n    }\n\n    public void VisitTree(Keccak rootHash, TrieVisitContext trieVisitContext)\n    {\n    }\n\n    public void VisitMissingNode(Keccak nodeHash, TrieVisitContext trieVisitContext)\n    {\n        _logger.Warn($"Missing node {nodeHash}");\n    }\n\n    public void VisitBranch(TrieNode node, TrieVisitContext trieVisitContext)\n    {\n        _logger.Info($"Balance after visiting {_accountsVisited} accounts and {_nodesVisited} nodes: {Balance}");\n        _nodesVisited++;\n\n        if (trieVisitContext.IsStorage)\n        {\n            for (int i = 0; i < 16; i++)\n            {\n                Keccak childHash = node.GetChildHash(i);\n                if (childHash != null)\n                {\n                    _ignoreThisOne.Add(childHash);\n                }\n            }\n        }\n    }\n\n    public void VisitExtension(TrieNode node, TrieVisitContext trieVisitContext)\n    {\n        _nodesVisited++;\n        if (trieVisitContext.IsStorage)\n        {\n            _ignoreThisOne.Add(node.GetChildHash(0));\n        }\n    }\n\n    public void VisitLeaf(TrieNode node, TrieVisitContext trieVisitContext, byte[] value = null)\n    {\n        _nodesVisited++;\n\n        if (trieVisitContext.IsStorage)\n        {\n            return;\n        }\n\n        AccountDecoder accountDecoder = new AccountDecoder();\n        Account account = accountDecoder.Decode(node.Value.AsRlpStream());\n        Balance += account.Balance;\n        _accountsVisited++;\n\n        _logger.Info($"Balance after visiting {_accountsVisited} accounts and {_nodesVisited} nodes: {Balance}");\n    }\n\n    public void VisitCode(Keccak codeHash, TrieVisitContext trieVisitContext)\n    {\n        _nodesVisited++;\n    }\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var t=i(6540);const l={},s=t.createContext(l);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);