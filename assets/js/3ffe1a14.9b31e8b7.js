"use strict";(self.webpackChunknethermind_docs=self.webpackChunknethermind_docs||[]).push([[946],{1209:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=i(4848),t=i(8453);const s={title:"Pruning",sidebar_position:6},o=void 0,a={id:"fundamentals/pruning",title:"Pruning",description:"Overview",source:"@site/versioned_docs/version-v1.27.0/fundamentals/pruning.md",sourceDirName:"fundamentals",slug:"/fundamentals/pruning",permalink:"/v1.27.0/fundamentals/pruning",draft:!1,unlisted:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/versioned_docs/version-v1.27.0/fundamentals/pruning.md",tags:[],version:"v1.27.0",lastUpdatedAt:1723736898e3,sidebarPosition:6,frontMatter:{title:"Pruning",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Database",permalink:"/v1.27.0/fundamentals/database"},next:{title:"Performance tuning",permalink:"/v1.27.0/fundamentals/performance-tuning"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Preparation for full pruning",id:"preparation-for-full-pruning",level:2},{value:"Configuring full pruning",id:"configuring-full-pruning",level:2},{value:"Manual",id:"manual",level:3},{value:"State database size threshold",id:"state-db-threshold",level:3},{value:"Remaining storage space threshold",id:"storage-left-threshold",level:3},{value:"Monitoring progress",id:"monitoring-progress",level:2},{value:"Additional settings",id:"additional-settings",level:2},{value:"Memory budget",id:"memory-budget",level:3},{value:"Pruning completion behavior",id:"pruning-completion-behavior",level:3},{value:"Number of pruning concurrent tasks",id:"number-of-pruning-concurrent-tasks",level:3},{value:"In-memory cache size",id:"in-memory-cache-size",level:3},{value:"Side notes",id:"side-notes",level:2}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"Pruning pertains to eliminating or cleaning obsolete historical data to optimize disk space. Clients are responsible for maintaining the world state, which comprises a database that portrays the current Ethereum network status. The world state encompasses accounts, contracts, and other information."}),"\n",(0,r.jsxs)(n.p,{children:["Pruning aims to reduce disk requirements by storing only the current world state and removing historical data. This differs from archive nodes that retain complete transaction and state history. Pruning is helpful for users who don't require historical data and prefer to interact solely with the current state of the network. However, pruning may limit the client's ability to fulfill requests that depend on historical information. Nethermind provides two kinds of pruning \u2013 ",(0,r.jsx)(n.em,{children:"full pruning"})," and ",(0,r.jsx)(n.em,{children:"in-memory pruning"}),"; both are enabled by default, also called ",(0,r.jsx)(n.em,{children:"hybrid pruning"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,r.jsxs)(n.p,{children:["During synchronization using the snap sync method, Nethermind produces a local copy of the Ethereum network state. Although this size increases by around 30 GB each week, specific historical data is retained that is not necessary for node operation or to maintain the current Ethereum state. For a detailed description of the disk usage usage, check out the ",(0,r.jsx)(n.a,{href:"/v1.27.0/fundamentals/database#database-size",children:"database size"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"When full pruning is activated and initiated, a thorough examination of the entire state tree is conducted to determine which data is no longer required and can be treated as historical. It then determines which information corresponds to the current state and duplicates it alongside the existing version. During verification of each node in the state, the new pruned state replaces the previous one. Once the verifier confirms everything is functioning correctly, the old state database is eliminated, resulting in significant savings in disk space. As a result, the size of the database will be close to its initial size again."}),"\n",(0,r.jsx)(n.p,{children:"In-memory pruning is a continuous process that occurs under regular operation. Instead of saving a new state on each block, Nethermind will keep it in memory until a certain threshold is reached. At that point, Nethermind will only store data required by the newer state and discard unnecessary ones. This significantly reduces the total amount of data written while improving block processing performance. In-memory pruning is independent of full pruning."}),"\n",(0,r.jsx)(n.h2,{id:"preparation-for-full-pruning",children:"Preparation for full pruning"}),"\n",(0,r.jsx)(n.p,{children:"Because full pruning is executed while the node is connected to the network, it can affect the node's performance.\nThe process can consume significant memory, CPU, and disk resources, impacting block processing time.\nThis, in turn, can lead to reduced rewards for validator setups, particularly for proof-of-stake chains."}),"\n",(0,r.jsx)(n.p,{children:"Currently, full pruning takes between 20 to 30 hours to complete, although the duration may vary based on the hardware configuration. At least 200 GB of storage is required to ensure pruning runs smoothly. Nevertheless, it's recommended to have 300 GB or more."}),"\n",(0,r.jsx)(n.admonition,{title:"Important",type:"warning",children:(0,r.jsxs)(n.p,{children:["Do not turn on full pruning on an archive node, as these are two opposing features. Archive nodes are designed to store\ncomplete historical data, whereas full pruning eliminates it. Use the option ",(0,r.jsx)(n.code,{children:"--Pruning.Mode None"})," to ensure that pruning is turned off completely."]})}),"\n",(0,r.jsx)(n.h2,{id:"configuring-full-pruning",children:"Configuring full pruning"}),"\n",(0,r.jsxs)(n.p,{children:["As a very first point, check out the ",(0,r.jsx)(n.a,{href:"/v1.27.0/fundamentals/configuration#pruning",children:"pruning configuration options"}),".",(0,r.jsx)(n.br,{}),"\n","To activate full pruning, use either the ",(0,r.jsx)(n.code,{children:"--Pruning.Mode Hybrid"})," or ",(0,r.jsx)(n.code,{children:"--Pruning.Mode Full"})," command line options."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Setting ",(0,r.jsx)(n.code,{children:"--Pruning.Mode Hybrid"})," enables both ",(0,r.jsx)(n.code,{children:"InMemory"})," and ",(0,r.jsx)(n.code,{children:"Full"})," modes. The ",(0,r.jsx)(n.code,{children:"InMemory"})," mode helps the node storage grow slower than the ",(0,r.jsx)(n.code,{children:"Full"})," mode. Because of this, full pruning is executed less frequently, promoting\nhealthier disk operation. Since full pruning is hardware-intensive, this configuration also benefits attestation results."]})}),"\n",(0,r.jsx)(n.p,{children:"The next step is to determine the trigger conditions for full pruning. Currently, there are 3 options available:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#manual",children:"Manual"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#state-db-threshold",children:"State database size threshold"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#storage-left-threshold",children:"Remaining storage space threshold"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"manual",children:"Manual"}),"\n",(0,r.jsxs)(n.p,{children:["Manual mode triggers full pruning only upon request, providing complete control. To configure this mode, use the following options: ",(0,r.jsx)(n.code,{children:"--Pruning.Mode Hybrid --Pruning.FullPruningTrigger Manual"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Pruning can also be triggered using the ",(0,r.jsx)(n.a,{href:"/v1.27.0/interacting/json-rpc-ns/admin#admin_prune",children:(0,r.jsx)(n.code,{children:"admin_prune"})})," JSON-RPC method. Here's how to configure it:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Add the ",(0,r.jsx)(n.code,{children:"admin"})," namespace to ",(0,r.jsx)(n.code,{children:"--JsonRpc.EnabledModules"}),". For instance,",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"--JsonRpc.EnabledModules [eth,net,...,admin]"})]}),"\n",(0,r.jsxs)(n.li,{children:["Create a separate port for ",(0,r.jsx)(n.code,{children:"admin"})," namespace only:",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"--JsonRpc.AdditionalRpcUrls http://localhost:8555|http|admin"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Restart the client, and if everything is configured correctly, you should be able to call the ",(0,r.jsx)(n.code,{children:"admin_prune"})," method, and full pruning should start."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"One potential disadvantage of the manual mode is that if full pruning is not triggered on time, it cannot be performed later because of insufficient disk space. In such cases, the only option to free up the disk space is to resync the node from scratch."})}),"\n",(0,r.jsx)(n.h3,{id:"state-db-threshold",children:"State database size threshold"}),"\n",(0,r.jsxs)(n.p,{children:["This mode triggers full pruning automatically when the state database reaches the specified size.\nTo enable this mode, use the following options: ",(0,r.jsx)(n.code,{children:"--Pruning.Mode Hybrid --Pruning.FullPruningTrigger StateDbSize --Pruning.FullPruningThresholdMb 256000"}),", where the value of ",(0,r.jsx)(n.code,{children:"Pruning.FullPruningThresholdMb"})," should be set based on your requirements."]}),"\n",(0,r.jsx)(n.p,{children:"The above configuration triggers full pruning automatically whenever the state database size exceeds 256,000\nMB (250 GB). Assuming the state database has initially around 160 GB, pruning will be triggered when the database size grows by more than 90 GB."}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"To avoid unexpected behavior and ensure that full pruning can be completed in full, it's recommended to set the threshold value to trigger pruning before the free disk space drops below 250 GB as a minimum. This ensures that sufficient free disk space is available for the pruning process."})}),"\n",(0,r.jsx)(n.h3,{id:"storage-left-threshold",children:"Remaining storage space threshold"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"This is the recommended approach as it ensures that pruning is executed on time."})}),"\n",(0,r.jsxs)(n.p,{children:["This mode triggers full pruning when the storage space reaches the specified minimum. To enable this mode, use the following options: ",(0,r.jsx)(n.code,{children:"--Pruning.Mode Hybrid --Pruning.FullPruningTrigger VolumeFreeSpace --Pruning.FullPruningThresholdMb 256000"}),", where the value of ",(0,r.jsx)(n.code,{children:"Pruning.FullPruningThresholdMb"})," should be set based on your requirements. However, it should not be set below the default value of ",(0,r.jsx)(n.code,{children:"256000"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The above configuration triggers full pruning whenever free disk space drops to 256,000 MB (250 GB) or below. This ensures that pruning is invoked as infrequently as possible while also ensuring that sufficient free storage is always available to trigger it."}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"It's recommended not to set the value below 250 GB for stability reasons. In reality, full pruning should require approximately the same amount of storage as a fresh state database (around 160 GB). Still, it also needs a threshold for processing and other operations since it creates a copy of the existing state database. Therefore, it's essential to maintain a minimum amount of storage to ensure a robust pruning performance."})}),"\n",(0,r.jsx)(n.h2,{id:"monitoring-progress",children:"Monitoring progress"}),"\n",(0,r.jsx)(n.p,{children:"When full pruning is triggered correctly, the corresponding messages appear in the Nethermind logs."}),"\n",(0,r.jsx)(n.p,{children:"The very first ones should be:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Full Pruning Ready to start: pruning garbage before state <block number> with root <hash>.\nWARN: Full Pruning Started on root hash <hash>: do not close the node until finished or progress will be lost.\n"})}),"\n",(0,r.jsx)(n.p,{children:"From that moment, ensure that no restarts will be performed on Nethermind to ensure that full pruning runs correctly.\nAfter a few minutes first logs with progress would start to appear. For instance:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Full Pruning In Progress: 00:00:57.0603307 1.00 mln nodes mirrored.\nFull Pruning In Progress: 00:01:40.3677103 2.00 mln nodes mirrored.\nFull Pruning In Progress: 00:02:25.6437030 3.00 mln nodes mirrored.\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Pruning may take even ",(0,r.jsx)(n.em,{children:"more than 30 hours"}),", depending on hardware configuration."]}),"\n",(0,r.jsx)(n.p,{children:"When pruning is completed, there is a log message similar the following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Full Pruning Finished: 15:25:59.1620756 1,560.29 mln nodes mirrored.\n"})}),"\n",(0,r.jsx)(n.p,{children:"As you may notice, it took around 15 hours in this example."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"Since the amount of mirrored nodes is not a static value, providing a simple progress indicator in percentage is impossible. Therefore, the approximate value given should be used to determine when full pruning is expected to be completed."})}),"\n",(0,r.jsx)(n.h2,{id:"additional-settings",children:"Additional settings"}),"\n",(0,r.jsx)(n.h3,{id:"memory-budget",children:"Memory budget"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Pruning.FullPruningMemoryBudgetMb"})," configuration option controls the memory budget allocated for the trie visit during\nthe full pruning process. During pruning, pending nodes are queued to a pool of nodes whose size is determined by this value. This allows multiple nodes to share a single I/O. By increasing this value, the required read IOP per second can be significantly reduced, resulting in a faster full pruning operation. However, this improvement comes at the expense of increased memory usage."]}),"\n",(0,r.jsxs)(n.p,{children:["Assuming your system has 64GB of RAM, with Nethermind, the consensus client, and system expenses consuming 20GB,\nyou need to determine the maximum value for ",(0,r.jsx)(n.code,{children:"Pruning.FullPruningMemoryBudgetMb"})," while ensuring the system remains stable and respects the given limit. In this case, you have 44 GB (64 GB - 20 GB) of available memory for increasing the ",(0,r.jsx)(n.code,{children:"Pruning.FullPruningMemoryBudgetMb"})," value. To calculate the maximum value in MB, multiply the available memory by 1024: ",(0,r.jsx)(n.code,{children:"44 GB * 1024 = 45,056 MB"})]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Because of the workload on Ethereum Mainnet, setting the value of ",(0,r.jsx)(n.code,{children:"Pruning.FullPruningMemoryBudgetMb"})," higher than 16 GB may not provide any additional performance benefits."]})}),"\n",(0,r.jsx)(n.p,{children:"Please note that this example assumes the remaining 44 GB of memory is sufficient for the full pruning memory budget.\nDepending on the specific use case and system requirements, it may be necessary to adjust the value further to optimize performance and resource usage."}),"\n",(0,r.jsx)(n.h3,{id:"pruning-completion-behavior",children:"Pruning completion behavior"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Pruning.FullPruningCompletionBehavior"})," configuration option determines Nethermind's behavior after full pruning is completed. By default, Nethermind will continue to progress as usual. However, if a user wishes to shut down the node after pruning, there are three options available:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"None"}),": No action taken"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ShutdownOnSuccess"}),": Nethermind shuts down if pruning succeeds"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"AlwaysShutdown"}),": Nethermind shuts down once pruning completes, regardless of whether it succeeds or fails"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"number-of-pruning-concurrent-tasks",children:"Number of pruning concurrent tasks"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Pruning.FullPruningMaxDegreeOfParallelism"})," configuration option determines the number of parallel tasks/threads that can be used by pruning:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-1"}),": uses the number of logical processors"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"0"}),": uses 25% of logical processors"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"1"}),": runs on a single thread"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The recommended value depends on the type of node being used. If the node needs to be responsive (e.g., RPC or validator), using a value below the number of logical processors is recommended. The default value is recommended if the node doesn't have many other responsibilities but needs to follow the chain without delays and produce live logs reliably. If the node doesn't need to be responsive, has very fast I/O (such as NVMe), and the shortest pruning time\nis desired, this can be set to 2\u20133 times the number of logical processors."}),"\n",(0,r.jsx)(n.h3,{id:"in-memory-cache-size",children:"In-memory cache size"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Pruning.CacheMb"})," configuration option determines the size, in MB, of the memory pool of nodes used for in-memory pruning. The default value is 1024. Increasing this value can help reduce the rate at which the state database grows."]}),"\n",(0,r.jsx)(n.h2,{id:"side-notes",children:"Side notes"}),"\n",(0,r.jsx)(n.p,{children:"For pruning, keep in mind the following:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Full pruning is a cumbersome task, but it's performed in the background, so the node continues progressing and following the chain."}),"\n",(0,r.jsx)(n.li,{children:"The process' heaviness may affect the effectiveness of the validator rewards. Still, since it's executed only once every few months, it shouldn't have a significant impact on overall results (we've xperienced approximately 5\u201310% loss of rewards during full pruning)."}),"\n",(0,r.jsx)(n.li,{children:"Ensure that your storage has at least 250 GB of free space after syncing the node. Otherwise, full pruning will never complete successfully."}),"\n",(0,r.jsxs)(n.li,{children:["Several things can be done to reduce the size of the database after syncing: setting ",(0,r.jsx)(n.code,{children:"Sync.AncientBodiesBarrier"})," and ",(0,r.jsx)(n.code,{children:"Sync.AncientReceiptsBarrier"})," to a proper value higher than 0, using a consensus client that requires less storage, and setting logs to the lowest level to avoid log spamming."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var r=i(6540);const t={},s=r.createContext(t);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);