"use strict";(self.webpackChunknethermind_docs=self.webpackChunknethermind_docs||[]).push([[9119],{3286:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>c});var i=s(4848),r=s(8453);const o={title:"Logs",sidebar_position:4},d=void 0,t={id:"fundamentals/logs",title:"Logs",description:"This article is outdated and requires a revision.",source:"@site/versioned_docs/version-1.28.0/fundamentals/logs.md",sourceDirName:"fundamentals",slug:"/fundamentals/logs",permalink:"/1.28.0/fundamentals/logs",draft:!1,unlisted:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/versioned_docs/version-1.28.0/fundamentals/logs.md",tags:[],version:"1.28.0",lastUpdatedAt:17299516e5,sidebarPosition:4,frontMatter:{title:"Logs",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Security",permalink:"/1.28.0/fundamentals/security"},next:{title:"Database",permalink:"/1.28.0/fundamentals/database"}},l={},c=[{value:"Log config file location",id:"log-config-file-location",level:2},{value:"Log config file syntax",id:"log-config-file-syntax",level:2},{value:"Config or CLI log rules",id:"config-or-cli-log-rules",level:2},{value:"Global logging override",id:"global-logging-override",level:2},{value:"JSON RPC logging level",id:"json-rpc-logging-level",level:2},{value:"Enterprise Logging",id:"enterprise-logging",level:2},{value:"Explaining Nethermind logs",id:"explaining-nethermind-logs",level:2}];function a(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"This article is outdated and requires a revision."})}),"\n",(0,i.jsx)(n.h2,{id:"log-config-file-location",children:"Log config file location"}),"\n",(0,i.jsx)(n.p,{children:"Logging in Nethermind is done via NLog library that can be configured by editing the NLog.config file."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Environment Type"}),(0,i.jsx)(n.th,{children:"NLog.config location"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"built from src - Debug mode"}),(0,i.jsx)(n.td,{children:"src\\Nethermind\\Nethermind.Runner\\bin\\Debug\\netcoreapp3.1\\NLog.config"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"built from src - Release mode"}),(0,i.jsx)(n.td,{children:"src\\Nethermind\\Nethermind.Runner\\bin\\Release\\netcoreapp3.1\\NLog.config"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"PPA"}),(0,i.jsx)(n.td,{children:"/usr/share/nethermind/NLog.config"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Docker"}),(0,i.jsx)(n.td,{children:"/nethermind/NLog.config"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["from ",(0,i.jsx)(n.a,{href:"https://downloads.nethermind.io",children:"downloads page"})]}),(0,i.jsx)(n.td,{children:"top level directory after unzipping the package"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["from ",(0,i.jsx)(n.a,{href:"https://github.com/NethermindEth/nethermind/releases",children:"GitHub releases page"})]}),(0,i.jsx)(n.td,{children:"top level directory after unzipping the package"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"dAppNode"}),(0,i.jsx)(n.td,{children:"? [to be documented]"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"log-config-file-syntax",children:"Log config file syntax"}),"\n",(0,i.jsxs)(n.p,{children:["Detailed NLog configuration options can be found\nhere: ",(0,i.jsx)(n.a,{href:"https://nlog-project.org/config/",children:"https://nlog-project.org/config/"})]}),"\n",(0,i.jsx)(n.h2,{id:"config-or-cli-log-rules",children:"Config or CLI log rules"}),"\n",(0,i.jsx)(n.p,{children:"Simple logging rules can be added through configuration file or command line argument."}),"\n",(0,i.jsxs)(n.p,{children:["For example this would add ",(0,i.jsx)(n.code,{children:"Trace"})," level logs to any logger under ",(0,i.jsx)(n.code,{children:"Synchronization"})," module and ",(0,i.jsx)(n.code,{children:"Debug"})," level logs\nfor ",(0,i.jsx)(n.code,{children:"BlockTree"})," from ",(0,i.jsx)(n.code,{children:"Blockchain"})," module:",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"--Init.LogRules Synchronization.*:Trace;Blockchain.BlockTree:Debug"})]}),"\n",(0,i.jsx)(n.h2,{id:"global-logging-override",children:"Global logging override"}),"\n",(0,i.jsx)(n.p,{children:"Additionally there are global logging override that you can use temporarily:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Command line override"}),(0,i.jsx)(n.th,{children:"Log level"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"./Nethermind.Runner --config mainnet --log TRACE"}),(0,i.jsx)(n.td,{children:"TRACE"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"./Nethermind.Runner --config mainnet --log DEBUG"}),(0,i.jsx)(n.td,{children:"DEBUG"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"./Nethermind.Runner --config mainnet --log INFO"}),(0,i.jsx)(n.td,{children:"INFO"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"./Nethermind.Runner --config mainnet --log WARN"}),(0,i.jsx)(n.td,{children:"WARN"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"./Nethermind.Runner --config mainnet --log ERROR"}),(0,i.jsx)(n.td,{children:"ERROR"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"json-rpc-logging-level",children:"JSON RPC logging level"}),"\n",(0,i.jsx)(n.p,{children:"This can be done by including these lines in the logging configuration file:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'<logger name="JsonRpc.*" minlevel="Error" writeTo="file-async"/>\n<logger name="JsonRpc.*" minlevel="Error" writeTo="auto-colored-console-async" final="true"/>\n<logger name="JsonRpc.*" final="true"/>\n'})}),"\n",(0,i.jsx)(n.h2,{id:"enterprise-logging",children:"Enterprise Logging"}),"\n",(0,i.jsxs)(n.p,{children:["See how to configure Seq ",(0,i.jsx)(n.a,{href:"https://docs.nethermind.io/nethermind/enterprise/seq",children:"here"})]}),"\n",(0,i.jsx)(n.h2,{id:"explaining-nethermind-logs",children:"Explaining Nethermind logs"}),"\n",(0,i.jsxs)(n.p,{children:["You can check the supported operating systems, architectures and hardware requirements\nhere: ",(0,i.jsx)(n.a,{href:"/1.28.0/get-started/system-requirements",children:"system-requirements.md"})]}),"\n",(0,i.jsxs)(n.p,{children:["After the node starts, you will see some initial info about the node and then the sync will start. G\xf6rli fast sync uses\na ",(0,i.jsx)(n.code,{children:"fast blocks"})," sync mode initially. The ",(0,i.jsx)(n.code,{children:"fast blocks"})," sync picks some known ",(0,i.jsx)(n.code,{children:"pivot block"})," from the past and\ndownloads ",(0,i.jsx)(n.code,{children:"headers"}),", ",(0,i.jsx)(n.code,{children:"bodies"}),", and ",(0,i.jsx)(n.code,{children:"receipts"})," downwards all the way to ",(0,i.jsx)(n.code,{children:"genesis block"}),". All blocks from 0 to\nthe ",(0,i.jsx)(n.code,{children:"pivot block"})," are showed as ",(0,i.jsx)(n.code,{children:"Old Headers"})," in the ",(0,i.jsx)(n.code,{children:"fast blocks sync"})," logs. The console display shows the number\ngrowing from 0 to pivot, but this is just to make the display more user-friendly."]}),"\n",(0,i.jsx)(n.p,{children:"You will see some information about the sync progress, like below:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Shows the number of already downloaded ",(0,i.jsx)(n.code,{children:"headers"}),", ",(0,i.jsx)(n.code,{children:"bodies"})," and ",(0,i.jsx)(n.code,{children:"receipts"})," under the name ",(0,i.jsx)(n.code,{children:"Downloaded"})," out of all to\nbe downloaded in the fast blocks stage."]}),"\n",(0,i.jsxs)(n.li,{children:["Shows the current queue of already downloaded ",(0,i.jsx)(n.code,{children:"blocks"}),", ",(0,i.jsx)(n.code,{children:"headers"})," and ",(0,i.jsx)(n.code,{children:"receipts"})," waiting for being saved to the\ndatabase."]}),"\n",(0,i.jsx)(n.li,{children:"Shows the current download speed (blocks per second - bps)."}),"\n",(0,i.jsx)(n.li,{children:"Shows the average download speed (blocks per second - bps)."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Fast blocks sync logs",src:s(8973).A+"",width:"1219",height:"572"})}),"\n",(0,i.jsxs)(n.p,{children:["When the fast blocks stage finishes, there will be some period of downloading blocks between the ",(0,i.jsx)(n.code,{children:"pivot"})," and\nthe",(0,i.jsx)(n.code,{children:"latest blocks"})," which will have some additional info:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Shows the last entry from the fast blocks stage."}),"\n",(0,i.jsx)(n.li,{children:"Shows the mode transition moment."}),"\n",(0,i.jsxs)(n.li,{children:["Displays the speed (in blocks per second) of all ",(0,i.jsx)(n.code,{children:"headers"}),", ",(0,i.jsx)(n.code,{children:"bodies"})," and ",(0,i.jsx)(n.code,{children:"receipts"})," at the same time."]}),"\n",(0,i.jsx)(n.li,{children:"Additional info will appear every 30000 blocks with information about the G\xf6rli epoch being stored."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"G\xf6rli fast sync logs",src:s(245).A+"",width:"1528",height:"643"})}),"\n",(0,i.jsxs)(n.p,{children:["After the ",(0,i.jsx)(n.code,{children:"fast sync"})," part finished, the node will transition to the ",(0,i.jsx)(n.code,{children:"state sync stage"})," when the ",(0,i.jsx)(n.code,{children:"state trie"})," is being\ndownloaded. Much information is displayed about the progress, as this process may take a long time on mainnet (a few\nhours)."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Total elapsed time in ",(0,i.jsx)(n.code,{children:"state sync"})," is displayed."]}),"\n",(0,i.jsx)(n.li,{children:"The total percentage of downloaded DB size is displayed (on mainnet the sync finishes around 34GB in March 2020, on\nG\xf6rli around 800MB)."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"branches"})," stands for the percentage of downloaded branches."]}),"\n",(0,i.jsx)(n.li,{children:"Download speed in kilobytes per second is displayed."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"accounts"})," stands for the number of accounts data downloaded already."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"nodes"})," stands for the number of ",(0,i.jsx)(n.code,{children:"Patricia trie nodes"})," downloaded by the sync process."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"diagnostic"})," shows the time spent in the DB write / read access. The higher the value, the worse. It may get much\nworse if you restart the node during the sync process, as we need to recreate some caches then by reading data from\nthe DB."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"G\xf6rli state sync logs",src:s(9378).A+"",width:"1528",height:"742"})}),"\n",(0,i.jsxs)(n.p,{children:["When the state sync is nearing completion, you may see a series of ",(0,i.jsx)(n.code,{children:"branch sync"})," information reloading many times from\n0% to nearly 100%. This is the node trying to retrieve the few remaining state nodes and progressing with the head block\nrapidly:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"G\xf6rli branch sync logs",src:s(1548).A+"",width:"1441",height:"572"})}),"\n",(0,i.jsxs)(n.p,{children:["At some point, the entire state is downloaded and the node enters the ",(0,i.jsx)(n.code,{children:"full sync"})," mode and will allow you to issue CLI /\nWeb3 queries and send / receive transactions\ud83e\udd73"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"root"})," is saved at the moment when the entire ",(0,i.jsx)(n.code,{children:"Patricia trie"})," is downloaded."]}),"\n",(0,i.jsxs)(n.li,{children:["We also clearly state that the node transitions to the ",(0,i.jsx)(n.code,{children:"full sync"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["When you see the block being processed, then you are in the ",(0,i.jsx)(n.code,{children:"full sync"})," and the newly arrived block is being\ncalculated."]}),"\n",(0,i.jsx)(n.li,{children:"Every two minutes you will see a summary of connected peers with their client version, IP address, highest synced\nblock, and data download speeds."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"G\xf6rli full sync logs",src:s(3035).A+"",width:"1441",height:"572"})}),"\n",(0,i.jsx)(n.p,{children:"Also, every now and then, a peer report will appear like below:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(4922).A+"",width:"2560",height:"1337"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["First bracket is for Allocated contexts. It has possible values of ",(0,i.jsx)(n.code,{children:"H"})," for Headers, ",(0,i.jsx)(n.code,{children:"B"})," for Bodies, ",(0,i.jsx)(n.code,{children:"R"})," for\nReceipts, ",(0,i.jsx)(n.code,{children:"N"})," for State, ",(0,i.jsx)(n.code,{children:"S"})," for Snap, and ",(0,i.jsx)(n.code,{children:"W"})," for Witness."]}),"\n",(0,i.jsxs)(n.li,{children:["Second bracket is for Sleeping contexts. It has possible values of ",(0,i.jsx)(n.code,{children:"H"})," for Headers, ",(0,i.jsx)(n.code,{children:"B"})," for Bodies, ",(0,i.jsx)(n.code,{children:"R"})," for\nReceipts, ",(0,i.jsx)(n.code,{children:"N"})," for State, ",(0,i.jsx)(n.code,{children:"S"})," for Snap, and ",(0,i.jsx)(n.code,{children:"W"})," for Witness."]}),"\n",(0,i.jsx)(n.li,{children:"Third bracket contains Peer Info."}),"\n",(0,i.jsxs)(n.li,{children:["Fourth bracket is for Speeds as Follows:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Latency"}),"\n",(0,i.jsx)(n.li,{children:"Headers Transfer"}),"\n",(0,i.jsx)(n.li,{children:"Bodies Transfer"}),"\n",(0,i.jsx)(n.li,{children:"Receipts Transfer"}),"\n",(0,i.jsx)(n.li,{children:"Node Data Transfer"}),"\n",(0,i.jsx)(n.li,{children:"Snap Ranges Transfer"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Fifth bracket is for Client Info like Client Name, Client Version, Operating System and Language Version."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},4922:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/Screenshot2022-08-10205144-bfd083dd36a793971757cf3f339f0ec5.png"},1548:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/getting_started_26-95f467f0f83edd0b39d11b5d0ea338a5.png"},245:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/getting_started_7-cfece39092ef238f8e8da3b69eab7432.png"},9378:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/getting_started_8-d24674b3244863f2722c9dab5cb965d1.png"},3035:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/getting_started_9-37c7f085184a8606321fe307bec67a25.png"},8973:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/getting_started_log_0-ff150d1f099976816bf5d0f90c6c22ec.png"},8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>t});var i=s(6540);const r={},o=i.createContext(r);function d(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);