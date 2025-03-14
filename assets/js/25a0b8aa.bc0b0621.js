"use strict";(self.webpackChunknethermind_docs=self.webpackChunknethermind_docs||[]).push([[5751],{5711:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>t});const i=JSON.parse('{"id":"fundamentals/logs","title":"Logs","description":"Processing logs","source":"@site/versioned_docs/version-1.30.0/fundamentals/logs.md","sourceDirName":"fundamentals","slug":"/fundamentals/logs","permalink":"/1.30.0/fundamentals/logs","draft":false,"unlisted":false,"editUrl":"https://github.com/NethermindEth/docs/tree/main/versioned_docs/version-1.30.0/fundamentals/logs.md","tags":[],"version":"1.30.0","lastUpdatedAt":1741970482000,"sidebarPosition":4,"frontMatter":{"title":"Logs","sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Security","permalink":"/1.30.0/fundamentals/security"},"next":{"title":"Database","permalink":"/1.30.0/fundamentals/database"}}');var o=s(4848),r=s(8453);const l={title:"Logs",sidebar_position:4},d=void 0,c={},t=[{value:"Processing logs",id:"processing-logs",level:2},{value:"Block metadata",id:"block-metadata",level:4},{value:"Block execution details",id:"block-execution-details",level:4},{value:"Processing metrics",id:"processing-metrics",level:4},{value:"Fork and sync events",id:"fork-and-sync-events",level:4},{value:"Configuring logs",id:"configuring-logs",level:2},{value:"Log levels",id:"log-levels",level:3},{value:"Advanced logging",id:"advanced-logging",level:3},{value:"Enterprise-grade logging",id:"enterprise-grade-logging",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"processing-logs",children:"Processing logs"}),"\n",(0,o.jsx)(n.p,{children:"The Nethermind processing logs are a comprehensive resource for understanding Ethereum block processing. They provide real-time insights into block data, performance metrics, and the state of the blockchain."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Nethermind Processing Logs",src:s(108).A+"",width:"1750",height:"1245"})}),"\n",(0,o.jsx)(n.h4,{id:"block-metadata",children:"Block metadata"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Block number"}),": Current block being processed, e.g., ",(0,o.jsx)(n.code,{children:"21288004"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Block hash"}),": Unique block identifier, e.g., ",(0,o.jsx)(n.code,{children:"0xf42e2a...8c5d7b"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Extra data"}),": Metadata given by the block builders; either interpreted utf8 string, hex data, or address if none provided"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"block-execution-details",children:"Block execution details"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Block reward"}),": and whether it is a PBS ",(0,o.jsx)(n.code,{children:"mev"})," reward, e.g., ",(0,o.jsx)(n.code,{children:"mev 0.0339 ETH"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Total gas"}),": consumed by block, e.g., ",(0,o.jsx)(n.code,{children:"16.08 MGas"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Total transactions"}),": in a block, e.g., ",(0,o.jsx)(n.code,{children:"162 txs"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Calls"}),": Total number of calls (including to EOAs), e.g., ",(0,o.jsx)(n.code,{children:"585 (13)"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"sload"})}),": Number of storage reads, e.g., ",(0,o.jsx)(n.code,{children:"1,865"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"sstore"})}),": Number of storage writes, e.g., ",(0,o.jsx)(n.code,{children:"618"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"create"})}),": Number of contract deployments (and self-destructs), e.g., ",(0,o.jsx)(n.code,{children:"10 (-2)"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Gas prices"}),": minimum, median, (mean), and maximum gas prices in gwei for block.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Example: ",(0,o.jsx)(n.code,{children:"14.65 gwei .. 14.65 (17.04) .. 55.00 gwei"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Smart contracts"}),":","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Run from code cache, e.g., ",(0,o.jsx)(n.code,{children:"exec code from cache 1,480"})]}),"\n",(0,o.jsxs)(n.li,{children:["Non-cached smart contracts loaded, e.g., ",(0,o.jsx)(n.code,{children:"new 2"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"processing-metrics",children:"Processing metrics"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Processing time"}),": Time taken to validate a block, e.g., ",(0,o.jsx)(n.code,{children:"17.1 ms"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Slot time"}),": Time between blocks, e.g., ",(0,o.jsx)(n.code,{children:"12,318 ms"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"MGas/s"}),": Processing speed in Millions of Gas per second, e.g., ",(0,o.jsx)(n.code,{children:"696.39 MGas/s"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Transactions per second (TPS)"}),": Speed of transaction processing, e.g., ",(0,o.jsx)(n.code,{children:"9,457.6 tps"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Blocks per second"})," The number of these blocks that could be processed per second, e.g., ",(0,o.jsx)(n.code,{children:"28.53 Blk/s"})]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"fork-and-sync-events",children:"Fork and sync events"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Received New Block"}),": Block received with number, hash and extra data ",(0,o.jsx)(n.code,{children:"21288296 (0xb61f74...cbfbe7), Extra Data: Titan (titanbuilder.xyz)"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Processed"}),": Block or block range processed, e.g., or ",(0,o.jsx)(n.code,{children:"x4 21288291 .. 21288295"})," or  ",(0,o.jsx)(n.code,{children:"21288296"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Received ForkChoice"}),": Updates on the blockchain's canonical chain; with safe and finalized block, e.g., ",(0,o.jsx)(n.code,{children:"21288296 (0xb61f74...cbfbe7), Safe: 21288252 (0x46906d...7777b8), Finalized: 21288221 (0x22a7d2...ebeae9)"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Synced Chain Head"}),": Latest synced block number and hash on the chain, e.g., ",(0,o.jsx)(n.code,{children:"21288296 (0xb61f74...cbfbe7)"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"configuring-logs",children:"Configuring logs"}),"\n",(0,o.jsx)(n.h3,{id:"log-levels",children:"Log levels"}),"\n",(0,o.jsx)(n.p,{children:"Nethermind uses the following log levels in descending by severity:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"error"}),": Indicates error conditions that impair some operation."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"warning"}),": Signifies potential issues that may lead to errors or unexpected behavior in the future if not addressed."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"info"}),": Includes messages with all the necessary information that a node operator may need."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"debug"}),": Intended for logging detailed information for debugging purposes. Not recommended for production workloads for performance reasons."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"trace"}),": The most verbose log level. As the name suggests, it's used for tracing and diagnostics purposes. Not recommended for production workloads for performance reasons."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"off"}),": Turns off logging."]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Not that setting a specific log level turns off messages with less severity while keeping messages with higher severity. For example, the ",(0,o.jsx)(n.code,{children:"info"})," level logs the ",(0,o.jsx)(n.code,{children:"info"})," ",(0,o.jsx)(n.code,{children:"warning"})," ",(0,o.jsx)(n.code,{children:"error"})," messages while ignoring the ",(0,o.jsx)(n.code,{children:"debug"})," ",(0,o.jsx)(n.code,{children:"trace"})," ones."]})}),"\n",(0,o.jsxs)(n.p,{children:["The log level can be configured with the ",(0,o.jsx)(n.a,{href:"/1.30.0/fundamentals/configuration#log",children:(0,o.jsx)(n.code,{children:"-l, --log"})})," command line option. For instance:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"nethermind \\\n  -c mainnet \\\n  --data-dir path/to/data/dir \\\n  -l debug\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The above approach affects all of the Nethermind logs. For more fine-grained control, the ",(0,o.jsx)(n.a,{href:"/1.30.0/fundamentals/configuration#init-logrules",children:(0,o.jsx)(n.code,{children:"Init.LogRules"})})," confuguration option comes at help. The example below sets the ",(0,o.jsx)(n.code,{children:"debug"})," level for the ",(0,o.jsx)(n.code,{children:"BlockTree"})," of the ",(0,o.jsx)(n.code,{children:"Blockchain"})," module, and the ",(0,o.jsx)(n.code,{children:"trace"})," level for any logger in the ",(0,o.jsx)(n.code,{children:"Synchronization"})," module."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"nethermind \\\n  -c mainnet \\\n  --data-dir path/to/data/dir \\\n  --init-logrules Blockchain.BlockTree:debug;Synchronization.*:trace\n"})}),"\n",(0,o.jsx)(n.p,{children:"For even more control over logging, see the next section."}),"\n",(0,o.jsx)(n.h3,{id:"advanced-logging",children:"Advanced logging"}),"\n",(0,o.jsxs)(n.p,{children:["Logging in Nethermind is highly configurable and uses the ",(0,o.jsx)(n.a,{href:"https://nlog-project.org",children:"NLog"})," library under the hood. The default location of the logging configuration file ",(0,o.jsx)(n.code,{children:"NLog.config"})," is the Nethermind installation directory. For more information about the ",(0,o.jsx)(n.code,{children:"NLog.config"}),", see the NLog ",(0,o.jsx)(n.a,{href:"https://nlog-project.org/config/",children:"configuration options"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The location of the ",(0,o.jsx)(n.code,{children:"NLog.config"})," can be configured with the ",(0,o.jsx)(n.a,{href:"/1.30.0/fundamentals/configuration#logger-config",children:(0,o.jsx)(n.code,{children:"--logger-config"})})," command line options as follows:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"nethermind \\\n  -c mainnet \\\n  --data-dir path/to/data/dir \\\n  --logger-config path/to/NLog.config\n"})}),"\n",(0,o.jsx)(n.h2,{id:"enterprise-grade-logging",children:"Enterprise-grade logging"}),"\n",(0,o.jsxs)(n.p,{children:["Nethermind provides enterprise-grade logging out of the box using ",(0,o.jsx)(n.a,{href:"https://datalust.co/seq",children:"Seq"}),". It's off by default and can be easily turned on, as in the following example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"nethermind \\\n  -c mainnet \\\n  --data-dir path/to/data/dir \\\n  --seq-apikey 9fs9V80bjlkgau9adsjH \\\n  --seq-minlevel info \\\n  --seq-serverurl https://seq.example.com\n"})}),"\n",(0,o.jsxs)(n.p,{children:["See the ",(0,o.jsx)(n.a,{href:"/1.30.0/fundamentals/configuration#seq",children:(0,o.jsx)(n.code,{children:"Seq"})})," configuration options."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},108:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/log_processing-e3d2b11c98585386f7b5942fdfb26031.png"},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>d});var i=s(6540);const o={},r=i.createContext(o);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);