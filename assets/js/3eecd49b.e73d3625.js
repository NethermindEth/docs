"use strict";(self.webpackChunknethermind_docs=self.webpackChunknethermind_docs||[]).push([[9601],{6822:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var t=i(5893),r=i(1151);const s={title:"Pruning",sidebar_position:6},o=void 0,a={id:"fundamentals/pruning",title:"Pruning",description:"This article requires a revision.",source:"@site/versioned_docs/version-v1.23.0/fundamentals/pruning.md",sourceDirName:"fundamentals",slug:"/fundamentals/pruning",permalink:"/v1.23.0/fundamentals/pruning",draft:!1,unlisted:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/versioned_docs/version-v1.23.0/fundamentals/pruning.md",tags:[],version:"v1.23.0",lastUpdatedAt:1704307202,formattedLastUpdatedAt:"Jan 3, 2024",sidebarPosition:6,frontMatter:{title:"Pruning",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Database",permalink:"/v1.23.0/fundamentals/database"},next:{title:"Performance tuning",permalink:"/v1.23.0/fundamentals/performance-tuning"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Preparation for Full Pruning",id:"preparation-for-full-pruning",level:2},{value:"How to configure Full Pruning",id:"how-to-configure-full-pruning",level:2},{value:"Manual trigger",id:"manual-trigger",level:3},{value:"Size of state database",id:"size-of-state-database",level:3},{value:"Free disk space left on machine",id:"free-disk-space-left-on-machine",level:3},{value:"Monitoring progress of Full Pruning",id:"monitoring-progress-of-full-pruning",level:2},{value:"Additional settings",id:"additional-settings",level:2},{value:"FullPruningMemoryBudgetMb",id:"fullpruningmemorybudgetmb",level:3},{value:"FullPruningCompletionBehavior",id:"fullpruningcompletionbehavior",level:3},{value:"FullPruningMaxDegreeOfParallelism",id:"fullpruningmaxdegreeofparallelism",level:3},{value:"Side notes",id:"side-notes",level:2}];function u(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"This article requires a revision."})}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"Full Pruning pertains to the elimination or cleanup of obsolete historical data to optimize disk space. Clients are\nresponsible for maintaining the world state, which comprises a database that portrays the current Ethereum network\nstatus. The world state encompasses accounts, contracts, and other information."}),"\n",(0,t.jsx)(n.p,{children:"The goal of Full Pruning is to reduce disk requirements by storing only the current world state and removing historical\ndata. This differs from archive nodes that retain complete transaction and state history. Full Pruning is useful for\nusers who don't require historical data and prefer to interact solely with the current state of the network. However,\nFull Pruning may limit the client's ability to fulfill requests that depend on historical information."}),"\n",(0,t.jsx)(n.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,t.jsx)(n.p,{children:"During synchronization using the Snap Sync method, the Nethermind client produces a local copy of the Ethereum Network\nstate, which typically amounts to approximately 160 GB (state database). Entire database may rise up to 600-650GB.\nAlthough this size increases by around 30 GB each week, certain historical data is retained that is not necessary for\nnode operation or to maintain a current Ethereum state."}),"\n",(0,t.jsx)(n.p,{children:"When Full Pruning is activated and initiated, it conducts a thorough examination of the entire state tree to determine\nwhich data is no longer required and can be treated as historical. It then determines which information corresponds to\nthe current state, and duplicates it alongside the existing version. During verification of each node in the state, the\nnew pruned state replaces the previous one. Once the verifier confirms that everything is functioning correctly, the old\nstate database is eliminated, resulting in significant disk space savings. As a result, the size of the database will be\nclose to its initial size again."}),"\n",(0,t.jsx)(n.h2,{id:"preparation-for-full-pruning",children:"Preparation for Full Pruning"}),"\n",(0,t.jsx)(n.p,{children:"Because Full Pruning is executed while the node is connected to the network, it can affect the performance of the node.\nThe process can consume significant amounts of RAM, CPU, and disk resources, which can impact block processing time.\nThis, in turn, can lead to reduced rewards for Validator setups, particularly for PoS chains."}),"\n",(0,t.jsx)(n.p,{children:"Currently, Full Pruning takes between 20 to 30 hours to complete, although the duration may vary based on the user's\nhardware configuration. To ensure that the process runs smoothly, a minimum of 200 GB of free disk space is required.\nHowever, it's recommended to have at least 300 GB or more of free disk space."}),"\n",(0,t.jsxs)(n.p,{children:["Do not enable Full Pruning on an Archive node, as these are two opposing features. Archive nodes are designed to store\ncomplete historical data, whereas Full Pruning eliminates it. To ensure that Pruning.Mode is disabled for\nboth ",(0,t.jsx)(n.code,{children:"InMemory"})," and ",(0,t.jsx)(n.code,{children:"Full"}),", set the flag ",(0,t.jsx)(n.code,{children:"Pruning.Mode=None"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"how-to-configure-full-pruning",children:"How to configure Full Pruning"}),"\n",(0,t.jsxs)(n.p,{children:["As a very first point please review a Pruning configuration options from this documentation\npage: ",(0,t.jsx)(n.a,{href:"/v1.23.0/fundamentals/configuration#pruning",children:"pruning.md"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["To activate the Full Pruning feature, you must set either the ",(0,t.jsx)(n.code,{children:"Pruning.Mode=Hybrid"})," or ",(0,t.jsx)(n.code,{children:"Pruning.Mode=Full"})," flag for your\nnode."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Setting ",(0,t.jsx)(n.code,{children:"Pruning.Mode=Hybrid"})," enables both ",(0,t.jsx)(n.code,{children:"InMemory"})," and ",(0,t.jsx)(n.code,{children:"Full"})," modes. ",(0,t.jsx)(n.code,{children:"InMemory"})," mode helps the node grow at a slower\nrate compared to ",(0,t.jsx)(n.code,{children:"Pruning.Mode=Full"}),". With this configuration, Full Pruning is executed less frequently, promoting\nhealthier disk operation. Since Full Pruning is hardware-intensive, this configuration is also beneficial for\nattestation results."]})}),"\n",(0,t.jsx)(n.p,{children:"The next step is to determine the trigger conditions for Full Pruning. Currently, there are three options available:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Manual"}),"\n",(0,t.jsx)(n.li,{children:"Size of state database"}),"\n",(0,t.jsx)(n.li,{children:"Amount of free disk space"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Below is a brief explanation of each option."}),"\n",(0,t.jsx)(n.h3,{id:"manual-trigger",children:"Manual trigger"}),"\n",(0,t.jsxs)(n.p,{children:["Manual mode enables Full Pruning to be triggered only upon request, providing full control over this functionality. To\nconfigure this mode, add the following flags to your node: ",(0,t.jsx)(n.code,{children:"--Pruning.Mode=Hybrid --Pruning.FullPruningTrigger=Manual"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Additionally, you can add an Admin module to your JsonRPC to\nexecute ",(0,t.jsx)(n.a,{href:"/v1.23.0/interacting/json-rpc-ns/admin#admin_prune",children:"#admin_prune"})," command. Here's how\nto do it:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Add ",(0,t.jsx)(n.code,{children:"Admin"})," module to ",(0,t.jsx)(n.code,{children:"EnabledModules"})," on current JsonRpc port (below example - append Admin as last value if you are\noverriding it already):",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"JsonRpc.EnabledModules=[Eth, Subscribe, Trace, TxPool, Web3, Personal, Proof, Net, Parity, Health, Rpc, Admin]"})]}),"\n",(0,t.jsxs)(n.li,{children:["Create a separate port only for ",(0,t.jsx)(n.code,{children:"Admin"})," module:",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"JsonRpc.AdditionalRpcUrls=http://127.0.0.1:8555|http|admin"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Now restart a node and if everything is properly configured, you should be able to\ntrigger ",(0,t.jsx)(n.a,{href:"/v1.23.0/interacting/json-rpc-ns/admin#admin_prune",children:"#admin_prune"})," command and Full\nPruning should\nbe started."]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"One potential disadvantage of Manual mode is that if Full Pruning is not triggered in time (due to insufficient disk\nspace), it cannot be executed. In such cases, the only option to free up disk space would be to resync the node from\nscratch."})}),"\n",(0,t.jsx)(n.h3,{id:"size-of-state-database",children:"Size of state database"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"StateDbSize"})," mode enables Full Pruning to be triggered automatically when the state database reaches a specified size.\nTo enable this mode, add the following\nflags: ",(0,t.jsx)(n.code,{children:"--Pruning.Mode=Hybrid --Pruning.FullPruningTrigger=StateDbSize --Pruning.FullPruningThresholdMb=256000"}),", where\n256000 should be set based on current requirements."]}),"\n",(0,t.jsx)(n.p,{children:"With this configuration, Full Pruning will be triggered automatically whenever the state database size exceeds 256000\nMB (250 GB). Since the state database initially has around 160 GB, pruning will be triggered when the database size\ngrows beyond 90 GB."}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"To avoid unexpected behavior and ensure that Full Pruning can be completed in full, it's recommended to set the\nthreshold value to trigger pruning before the free disk space drops below 250 GB as a minimum. This ensures that there\nis sufficient free disk space available for the Full Pruning process."})}),"\n",(0,t.jsx)(n.h3,{id:"free-disk-space-left-on-machine",children:"Free disk space left on machine"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"This is a recommended approach as it ensures, that pruning will be executed on time"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"VolumeFreeSpace"})," mode allows Full Pruning to be triggered when the amount of free disk space reaches a selected\nminimum. To enable this mode, add the following\nflags: ",(0,t.jsx)(n.code,{children:"--Pruning.Mode=Hybrid --Pruning.FullPruningTrigger=VolumeFreeSpace--Pruning.FullPruningThresholdMb=256000"}),",\nwhere 256000 should be set based on current requirements. However, it should never be set below the default value of"]}),"\n",(0,t.jsxs)(n.ol,{start:"256000",children:["\n",(0,t.jsx)(n.li,{}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This configuration will trigger Full Pruning whenever the amount of free disk space drops to 250 GB. This ensures that\npruning is invoked as infrequently as possible while also ensuring that there is always sufficient free space available\nto trigger it."}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsx)(n.p,{children:"It's recommended not to set the value below 250 GB for stability reasons. In reality, Full Pruning should require\napproximately the same amount of space as a fresh state database (around 160 GB), but it also needs a threshold for\nprocessing and other operations since it creates a copy of the existing state database. Therefore, it's essential to\nmaintain a minimum amount of free disk space to ensure stable and reliable pruning performance."})}),"\n",(0,t.jsx)(n.h2,{id:"monitoring-progress-of-full-pruning",children:"Monitoring progress of Full Pruning"}),"\n",(0,t.jsx)(n.p,{children:"When Full Pruning is triggered correctly, several messages will be visible in the logs of the Nethermind process."}),"\n",(0,t.jsx)(n.p,{children:"Very first ones should be:"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Full Pruning Ready to start: pruning garbage before state BLOCK_NUMBER with root ROOT_HASH.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"WARN"}),": Full Pruning Started on root hash ROOT_HASH: do not close the node until finished or progress will be lost."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"From that moment ensure that no restarts will be performed on a node to ensure that Full pruning will be done properly.\nAfter few minutes first logs with progress would start to appear:"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Full Pruning In Progress: 00:00:57.0603307 1.00 mln nodes mirrored.",(0,t.jsx)(n.br,{}),"\n","Full Pruning In Progress: 00:01:40.3677103 2.00 mln nodes mirrored.",(0,t.jsx)(n.br,{}),"\n","Full Pruning In Progress: 00:02:25.6437030 3.00 mln nodes mirrored."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Pruning may take even ",(0,t.jsx)(n.strong,{children:"more than 30 hours"})," (this depends on CPU and IO operations on disk)."]}),"\n",(0,t.jsx)(n.p,{children:"Whenever pruning will be completed, there will be a log message:"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Full Pruning Finished: 15:25:59.1620756 1,560.29 mln nodes mirrored."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"As you can notice, on this example it took around 15 hours."}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Since the amount of mirrored nodes is not a static value, it's not possible to provide a simple progress indicator in\npercentage. Therefore, the approximate value given should be used to determine when Full Pruning is expected to be\ncompleted."})}),"\n",(0,t.jsx)(n.h2,{id:"additional-settings",children:"Additional settings"}),"\n",(0,t.jsx)(n.h3,{id:"fullpruningmemorybudgetmb",children:"FullPruningMemoryBudgetMb"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"FullPruningMemoryBudgetMb"})," configuration parameter controls the memory budget allocated for the trie visit during\nthe full pruning process. By increasing this value, the number of required read IOPS (Input/Output Operations Per\nSecond) can be significantly reduced, which results in a faster full pruning operation. However, this improvement comes\nat the expense of increased RAM usage.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.br,{}),"\n","Assuming your system has a total of 64GB of RAM, with the application, CL client, and system expenses consuming 20GB,\nyou need to determine the maximum value for ",(0,t.jsx)(n.code,{children:"FullPruningMemoryBudgetMb"})," while ensuring that the system remains stable\nand respecting the given limit."]}),"\n",(0,t.jsxs)(n.p,{children:["In this case, you have 44GB (64GB - 20GB) of available RAM for increasing the ",(0,t.jsx)(n.code,{children:"FullPruningMemoryBudgetMb"})," value. To\ncalculate the maximum value in megabytes, multiply the available RAM by 1024 (since 1GB = 1024MB):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"44GB * 1024MB/GB = 45056MB\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Setting the ",(0,t.jsx)(n.code,{children:"FullPruningMemoryBudgetMb"})," value higher than 16GB may not provide any additional performance benefits."]})}),"\n",(0,t.jsxs)(n.p,{children:["However, there is a recommendation that the value of ",(0,t.jsx)(n.code,{children:"FullPruningMemoryBudgetMb"})," should not be higher than 16GB. So,\nconsidering this guideline, you can set the ",(0,t.jsx)(n.code,{children:"FullPruningMemoryBudgetMb"})," value to a maximum of 16GB, which is equivalent\nto:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"16GB * 1024MB/GB = 16384MB\n"})}),"\n",(0,t.jsx)(n.p,{children:"To apply this value, update the configuration file as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Pruning.FullPruningMemoryBudgetMb=16384\n"})}),"\n",(0,t.jsx)(n.p,{children:"Please note that this example assumes that the remaining 44GB of RAM is sufficient for the full pruning memory budget.\nDepending on the specific use case and system requirements, it may be necessary to further adjust the value to optimize\nperformance and resource usage."}),"\n",(0,t.jsx)(n.h3,{id:"fullpruningcompletionbehavior",children:"FullPruningCompletionBehavior"}),"\n",(0,t.jsx)(n.p,{children:"This setting determines the behavior of the node after Full Pruning has completed. By default, the node will continue to\nprogress as usual. However, if the user wishes to shut down the node after Full Pruning has completed, there are two\noptions available:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"None"}),": No special action will be taken."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ShutdownOnSuccess"}),": Nethermind will shut down if the Full Pruning process is successful."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"AlwaysShutdown"}),": Nethermind will shut down once Full Pruning completes, regardless of whether it succeeded or\nfailed."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"fullpruningmaxdegreeofparallelism",children:"FullPruningMaxDegreeOfParallelism"}),"\n",(0,t.jsx)(n.p,{children:"This setting determines the number of parallel tasks and threads that can be used by Full Pruning:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"0: the number of logical processors"}),"\n",(0,t.jsx)(n.li,{children:"1: Full Pruning will run on a single thread."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The recommended value depends on the type of node being used. If the node needs to be responsive (e.g., RPC or Validator\nnode), it's recommended to use a value below the number of logical processors. If the node doesn't have many other\nresponsibilities but needs to reliably follow the chain without delays and produce live logs, the default value is\nrecommended. If the node doesn't need to be responsive, has very fast I/O (such as NVME), and the shortest pruning time\nis desired, this can be set to 2-3 times the number of logical processors."}),"\n",(0,t.jsx)(n.h2,{id:"side-notes",children:"Side notes"}),"\n",(0,t.jsx)(n.p,{children:"During the Full Pruning process, several things should be kept in mind:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Full Pruning is a very heavy task, but it's performed in the background, so the node continues to progress and follow\nthe chain."}),"\n",(0,t.jsx)(n.li,{children:"Due to the heaviness of the task, it may affect validator rewards effectiveness, but since it's executed only once\nevery few months, it shouldn't have a significant impact on overall results (we've experienced approximately 5-10%\nloss of rewards during Full Pruning)."}),"\n",(0,t.jsx)(n.li,{children:"Ensure that your disk has at least 250 GB of free space after syncing the node. Otherwise, Full Pruning will never\ncomplete successfully."}),"\n",(0,t.jsx)(n.li,{children:"Several things can be done to reduce the size of the database after syncing (such as setting AncientBarriers to a\nproper value higher than 0, using CL which requires less disk space, and setting logs to the lowest level to avoid\nlog spamming)."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>o});var t=i(7294);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);