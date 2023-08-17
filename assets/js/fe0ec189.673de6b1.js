"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[30],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(t),g=a,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||r;return t?i.createElement(m,l(l({ref:n},u),{},{components:t})):i.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=t[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},8772:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=t(7462),a=(t(7294),t(3905));const r={},l="Plugins",o={unversionedId:"developers/plugins",id:"developers/plugins",title:"Plugins",description:"Nethermind plugins is a powerful way of extending your local node capabilities.",source:"@site/docs/developers/plugins.md",sourceDirName:"developers",slug:"/developers/plugins",permalink:"/docs/developers/plugins",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/developers/plugins.md",tags:[],version:"current",lastUpdatedAt:1692271277,formattedLastUpdatedAt:"Aug 17, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Custom Analytic Tools",permalink:"/docs/developers/custom-analytic-tools"},next:{title:"Web3.py",permalink:"/docs/developers/web3.py"}},s={},c=[{value:"RPC Plugin example:",id:"rpc-plugin-example",level:2},{value:"CLI Plugin example:",id:"cli-plugin-example",level:2},{value:"Block Tree Visitor Plugin example:",id:"block-tree-visitor-plugin-example",level:2},{value:"Config plugin example:",id:"config-plugin-example",level:2},{value:"State Tree Visitor example:",id:"state-tree-visitor-example",level:2}],u={toc:c},d="wrapper";function p(e){let{components:n,...r}=e;return(0,a.kt)(d,(0,i.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"plugins"},"Plugins"),(0,a.kt)("p",null,"Nethermind plugins is a powerful way of extending your local node capabilities."),(0,a.kt)("p",null,"(","see also an article\nhere: ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/nethermind-eth/writing-your-first-nethermind-plugin-a9e04d81cf59"},"https://medium.com/nethermind-eth/writing-your-first-nethermind-plugin-a9e04d81cf59"),")"),(0,a.kt)("p",null,"Plugins that you can write:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Plugin Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"What can it be used for?"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"RPC"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Adding additional RPC modules to the client that have full access to the internal Nethermind APIs and can extend capabilities of the node when integrating with your infrastructure / systems.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Block Tree Visitors"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Code allowing you to analyze entire block tree from genesis to the head block and execute aggregated calculations and checks.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Devp2p"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Allows you to create additional devp2p network protocol for your nodes to communicate over TCP/IP. You can also build custom products that will run attached to Nethermind nodes.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"State Visitors"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Allow you to run aggregated analysis on the entire raw format state ","(","or just some accounts storages",")",".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Config"),(0,a.kt)("td",{parentName:"tr",align:"left"},"You can add additional configuration categories to our config files and then use them in env variables, json files or command line to configure behaviour of your plugins.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"TxPool"),(0,a.kt)("td",{parentName:"tr",align:"left"},"TxPool behaviours and listeners.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Tracers"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Custom, powerful EVM tracers capable of extracting elements of EVM execution in real time.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"CLI"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Additional modules for Nethermind CLI that can allow you build some quick scratchpad style JavaScript based behaviors.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," When writing a plugin be carefull about exceptions you throw. Especially if you are hooking up event handlers\non some core objects like BlockProcessor or BlockTree. Those exceptions can bring the node down. This is by design. Its\nresponsibility of plugin writer to correctly handle those exceptions."),(0,a.kt)("p",null,"How to build a plugin? We included an example inside the Nethermind.Analytics plugin:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(864).Z,width:"547",height:"417"})),(0,a.kt)("h2",{id:"rpc-plugin-example"},"RPC Plugin example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'    [RpcModule(ModuleType.Clique)]\n    public interface IAnalyticsModule : IModule\n    {\n        [JsonRpcMethod(Description = "Retrieves ETH supply counted from state.", IsImplemented = true)]\n        ResultWrapper<UInt256> analytics_verifySupply();\n\n        [JsonRpcMethod(Description = "Retrieves ETH supply counted from rewards.", IsImplemented = true)]\n        ResultWrapper<UInt256> analytics_verifyRewards();\n    }\n')),(0,a.kt)("h2",{id:"cli-plugin-example"},"CLI Plugin example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'[CliModule("analytics")]\npublic class AnalyticsCliModule : CliModuleBase\n{\n    [CliFunction("analytics", "verifySupply")]\n    public string VerifySupply()\n    {\n        return NodeManager.Post<string>("analytics_verifySupply").Result;\n    }\n\n    [CliFunction("analytics", "verifyRewards")]\n    public string VerifyRewards()\n    {\n        return NodeManager.Post<string>("analytics_verifyRewards").Result;\n    }\n\n    public AnalyticsCliModule(ICliEngine cliEngine, INodeManager nodeManager)\n        : base(cliEngine, nodeManager) { }\n}\n')),(0,a.kt)("h2",{id:"block-tree-visitor-plugin-example"},"Block Tree Visitor Plugin example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'    public class RewardsVerifier : IBlockTreeVisitor\n    {\n        private ILogger _logger;\n        public bool PreventsAcceptingNewBlocks => true;\n        public long StartLevelInclusive => 0;\n        public long EndLevelExclusive { get; }\n\n        private UInt256 _genesisAllocations = UInt256.Parse("72009990499480000000000000");\n        private UInt256 _uncles;\n\n        public UInt256 BlockRewards { get; private set; }\n\n        public RewardsVerifier(ILogManager logManager, long endLevelExclusive)\n        {\n            _logger = logManager.GetClassLogger();\n            EndLevelExclusive = endLevelExclusive;\n            BlockRewards = _genesisAllocations;\n        }\n\n        private RewardCalculator _rewardCalculator = new RewardCalculator(MainnetSpecProvider.Instance);\n\n        public Task<BlockVisitOutcome> VisitBlock(Block block, CancellationToken cancellationToken)\n        {\n            BlockReward[] rewards = _rewardCalculator.CalculateRewards(block);\n            for (int i = 0; i < rewards.Length; i++)\n            {\n                if (rewards[i].RewardType == BlockRewardType.Uncle)\n                {\n                    _uncles += rewards[i].Value;\n                }\n                else\n                {\n                    BlockRewards += rewards[i].Value;\n                }\n            }\n\n            _logger.Info($"Visiting block {block.Number}, total supply is (genesis + miner rewards + uncle rewards) | {_genesisAllocations} + {BlockRewards} + {_uncles}");\n            return Task.FromResult(BlockVisitOutcome.None);\n        }\n\n        public Task<LevelVisitOutcome> VisitLevelStart(ChainLevelInfo chainLevelInfo, CancellationToken cancellationToken)\n            => Task.FromResult(LevelVisitOutcome.None);\n\n        public Task<bool> VisitMissing(Keccak hash, CancellationToken cancellationToken)\n            => Task.FromResult(true);\n\n        public Task<HeaderVisitOutcome> VisitHeader(BlockHeader header, CancellationToken cancellationToken)\n            => Task.FromResult(HeaderVisitOutcome.None);\n\n        public Task<LevelVisitOutcome> VisitLevelEnd(CancellationToken cancellationToken)\n            => Task.FromResult(LevelVisitOutcome.None);\n    }\n')),(0,a.kt)("h2",{id:"config-plugin-example"},"Config plugin example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public class AnalyticsConfig : IAnalyticsConfig\n{\n    public bool PluginsEnabled { get; set; }\n    public bool StreamTransactions { get; set; }\n    public bool StreamBlocks { get; set; }\n    public bool LogPublishedData { get; set; }\n}\n")),(0,a.kt)("h2",{id:"state-tree-visitor-example"},"State Tree Visitor example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'public class SupplyVerifier : ITreeVisitor\n{\n    private readonly ILogger _logger;\n    private HashSet<Keccak> _ignoreThisOne = new HashSet<Keccak>();\n    private int _accountsVisited;\n    private int _nodesVisited;\n\n    public SupplyVerifier(ILogger logger)\n    {\n        _logger = logger;\n    }\n\n    public UInt256 Balance { get; set; } = UInt256.Zero;\n\n    public bool ShouldVisit(Keccak nextNode)\n    {\n        if (_ignoreThisOne.Count > 16)\n        {\n            _logger.Warn($"Ignore count leak -> {_ignoreThisOne.Count}");\n        }\n\n        if (_ignoreThisOne.Contains(nextNode))\n        {\n            _ignoreThisOne.Remove(nextNode);\n            return false;\n        }\n\n        return true;\n    }\n\n    public void VisitTree(Keccak rootHash, TrieVisitContext trieVisitContext)\n    {\n    }\n\n    public void VisitMissingNode(Keccak nodeHash, TrieVisitContext trieVisitContext)\n    {\n        _logger.Warn($"Missing node {nodeHash}");\n    }\n\n    public void VisitBranch(TrieNode node, TrieVisitContext trieVisitContext)\n    {\n        _logger.Info($"Balance after visiting {_accountsVisited} accounts and {_nodesVisited} nodes: {Balance}");\n        _nodesVisited++;\n\n        if (trieVisitContext.IsStorage)\n        {\n            for (int i = 0; i < 16; i++)\n            {\n                Keccak childHash = node.GetChildHash(i);\n                if (childHash != null)\n                {\n                    _ignoreThisOne.Add(childHash);\n                }\n            }\n        }\n    }\n\n    public void VisitExtension(TrieNode node, TrieVisitContext trieVisitContext)\n    {\n        _nodesVisited++;\n        if (trieVisitContext.IsStorage)\n        {\n            _ignoreThisOne.Add(node.GetChildHash(0));\n        }\n    }\n\n    public void VisitLeaf(TrieNode node, TrieVisitContext trieVisitContext, byte[] value = null)\n    {\n        _nodesVisited++;\n\n        if (trieVisitContext.IsStorage)\n        {\n            return;\n        }\n\n        AccountDecoder accountDecoder = new AccountDecoder();\n        Account account = accountDecoder.Decode(node.Value.AsRlpStream());\n        Balance += account.Balance;\n        _accountsVisited++;\n\n        _logger.Info($"Balance after visiting {_accountsVisited} accounts and {_nodesVisited} nodes: {Balance}");\n    }\n\n    public void VisitCode(Keccak codeHash, TrieVisitContext trieVisitContext)\n    {\n        _nodesVisited++;\n    }\n}\n')))}p.isMDXComponent=!0},864:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/image(133)-d0b560bfa6aa952c52df2334be1287fa.png"}}]);