"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1996],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),u=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return i.createElement(s.Provider,{value:n},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(t),c=r,m=p["".concat(s,".").concat(c)]||p[c]||h[c]||a;return t?i.createElement(m,o(o({ref:n},d),{},{components:t})):i.createElement(m,o({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7674:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=t(7462),r=(t(7294),t(3905));const a={title:"Pruning",sidebar_position:5},o=void 0,l={unversionedId:"fundamentals/pruning",id:"fundamentals/pruning",title:"Pruning",description:"Overview",source:"@site/docs/fundamentals/pruning.md",sourceDirName:"fundamentals",slug:"/fundamentals/pruning",permalink:"/docs/fundamentals/pruning",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/fundamentals/pruning.md",tags:[],version:"current",lastUpdatedAt:1693730198,formattedLastUpdatedAt:"Sep 3, 2023",sidebarPosition:5,frontMatter:{title:"Pruning",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Database",permalink:"/docs/fundamentals/database"},next:{title:"Private networks",permalink:"/docs/fundamentals/private-networks/"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Preparation for Full Pruning",id:"preparation-for-full-pruning",level:2},{value:"How to configure Full Pruning",id:"how-to-configure-full-pruning",level:2},{value:"Manual trigger",id:"manual-trigger",level:3},{value:"Size of state database",id:"size-of-state-database",level:3},{value:"Free disk space left on machine",id:"free-disk-space-left-on-machine",level:3},{value:"Monitoring progress of Full Pruning",id:"monitoring-progress-of-full-pruning",level:2},{value:"Additional settings",id:"additional-settings",level:2},{value:"FullPruningMemoryBudgetMb",id:"fullpruningmemorybudgetmb",level:3},{value:"FullPruningCompletionBehavior",id:"fullpruningcompletionbehavior",level:3},{value:"FullPruningMaxDegreeOfParallelism",id:"fullpruningmaxdegreeofparallelism",level:3},{value:"Side notes",id:"side-notes",level:2}],d={toc:u},p="wrapper";function h(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Full Pruning pertains to the elimination or cleanup of obsolete historical data to optimize disk space. Clients are\nresponsible for maintaining the world state, which comprises a database that portrays the current Ethereum network\nstatus. The world state encompasses accounts, contracts, and other information."),(0,r.kt)("p",null,"The goal of Full Pruning is to reduce disk requirements by storing only the current world state and removing historical\ndata. This differs from archive nodes that retain complete transaction and state history. Full Pruning is useful for\nusers who don't require historical data and prefer to interact solely with the current state of the network. However,\nFull Pruning may limit the client's ability to fulfill requests that depend on historical information."),(0,r.kt)("h2",{id:"how-it-works"},"How it works"),(0,r.kt)("p",null,"During synchronization using the Snap Sync method, the Nethermind client produces a local copy of the Ethereum Network\nstate, which typically amounts to approximately 160 GB (state database). Entire database may rise up to 600-650GB.\nAlthough this size increases by around 30 GB each week, certain historical data is retained that is not necessary for\nnode operation or to maintain a current Ethereum state."),(0,r.kt)("p",null,"When Full Pruning is activated and initiated, it conducts a thorough examination of the entire state tree to determine\nwhich data is no longer required and can be treated as historical. It then determines which information corresponds to\nthe current state, and duplicates it alongside the existing version. During verification of each node in the state, the\nnew pruned state replaces the previous one. Once the verifier confirms that everything is functioning correctly, the old\nstate database is eliminated, resulting in significant disk space savings. As a result, the size of the database will be\nclose to its initial size again."),(0,r.kt)("h2",{id:"preparation-for-full-pruning"},"Preparation for Full Pruning"),(0,r.kt)("p",null,"Because Full Pruning is executed while the node is connected to the network, it can affect the performance of the node.\nThe process can consume significant amounts of RAM, CPU, and disk resources, which can impact block processing time.\nThis, in turn, can lead to reduced rewards for Validator setups, particularly for PoS chains."),(0,r.kt)("p",null,"Currently, Full Pruning takes between 20 to 30 hours to complete, although the duration may vary based on the user's\nhardware configuration. To ensure that the process runs smoothly, a minimum of 200 GB of free disk space is required.\nHowever, it's recommended to have at least 300 GB or more of free disk space."),(0,r.kt)("p",null,"Do not enable Full Pruning on an Archive node, as these are two opposing features. Archive nodes are designed to store\ncomplete historical data, whereas Full Pruning eliminates it. To ensure that Pruning.Mode is disabled for\nboth ",(0,r.kt)("inlineCode",{parentName:"p"},"InMemory")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Full"),", set the flag ",(0,r.kt)("inlineCode",{parentName:"p"},"Pruning.Mode=None"),"."),(0,r.kt)("h2",{id:"how-to-configure-full-pruning"},"How to configure Full Pruning"),(0,r.kt)("p",null,"As a very first point please review a Pruning configuration options from this documentation\npage: ",(0,r.kt)("a",{parentName:"p",href:"/docs/fundamentals/configuration#pruning"},"pruning.md"),"."),(0,r.kt)("p",null,"To activate the Full Pruning feature, you must set either the ",(0,r.kt)("inlineCode",{parentName:"p"},"Pruning.Mode=Hybrid")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Pruning.Mode=Full")," flag for your\nnode."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"Pruning.Mode=Hybrid")," enables both ",(0,r.kt)("inlineCode",{parentName:"p"},"InMemory")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Full")," modes. ",(0,r.kt)("inlineCode",{parentName:"p"},"InMemory")," mode helps the node grow at a slower\nrate compared to ",(0,r.kt)("inlineCode",{parentName:"p"},"Pruning.Mode=Full"),". With this configuration, Full Pruning is executed less frequently, promoting\nhealthier disk operation. Since Full Pruning is hardware-intensive, this configuration is also beneficial for\nattestation results.")),(0,r.kt)("p",null,"The next step is to determine the trigger conditions for Full Pruning. Currently, there are three options available:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Manual"),(0,r.kt)("li",{parentName:"ol"},"Size of state database"),(0,r.kt)("li",{parentName:"ol"},"Amount of free disk space")),(0,r.kt)("p",null,"Below is a brief explanation of each option."),(0,r.kt)("h3",{id:"manual-trigger"},"Manual trigger"),(0,r.kt)("p",null,"Manual mode enables Full Pruning to be triggered only upon request, providing full control over this functionality. To\nconfigure this mode, add the following flags to your node: ",(0,r.kt)("inlineCode",{parentName:"p"},"--Pruning.Mode=Hybrid --Pruning.FullPruningTrigger=Manual"),"."),(0,r.kt)("p",null,"Additionally, you can add an Admin module to your JsonRPC to\nexecute ",(0,r.kt)("a",{parentName:"p",href:"/docs/interacting/json-rpc/admin#admin_prune"},"#admin","_","prune")," command. Here's how\nto do it:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"Admin")," module to ",(0,r.kt)("inlineCode",{parentName:"li"},"EnabledModules")," on current JsonRpc port (below example - append Admin as last value if you are\noverriding it already):\\\n",(0,r.kt)("inlineCode",{parentName:"li"},"JsonRpc.EnabledModules=[Eth, Subscribe, Trace, TxPool, Web3, Personal, Proof, Net, Parity, Health, Rpc, Admin]")),(0,r.kt)("li",{parentName:"ol"},"Create a separate port only for ",(0,r.kt)("inlineCode",{parentName:"li"},"Admin")," module:\\\n",(0,r.kt)("inlineCode",{parentName:"li"},"JsonRpc.AdditionalRpcUrls=http://127.0.0.1:8555|http|admin"))),(0,r.kt)("p",null,"Now restart a node and if everything is properly configured, you should be able to\ntrigger ",(0,r.kt)("a",{parentName:"p",href:"/docs/interacting/json-rpc/admin#admin_prune"},"#admin","_","prune")," command and Full\nPruning should\nbe started."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"One potential disadvantage of Manual mode is that if Full Pruning is not triggered in time (due to insufficient disk\nspace), it cannot be executed. In such cases, the only option to free up disk space would be to resync the node from\nscratch.")),(0,r.kt)("h3",{id:"size-of-state-database"},"Size of state database"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"StateDbSize")," mode enables Full Pruning to be triggered automatically when the state database reaches a specified size.\nTo enable this mode, add the following\nflags: ",(0,r.kt)("inlineCode",{parentName:"p"},"--Pruning.Mode=Hybrid --Pruning.FullPruningTrigger=StateDbSize --Pruning.FullPruningThresholdMb=256000"),", where\n256000 should be set based on current requirements."),(0,r.kt)("p",null,"With this configuration, Full Pruning will be triggered automatically whenever the state database size exceeds 256000\nMB (250 GB). Since the state database initially has around 160 GB, pruning will be triggered when the database size\ngrows beyond 90 GB."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To avoid unexpected behavior and ensure that Full Pruning can be completed in full, it's recommended to set the\nthreshold value to trigger pruning before the free disk space drops below 250 GB as a minimum. This ensures that there\nis sufficient free disk space available for the Full Pruning process.")),(0,r.kt)("h3",{id:"free-disk-space-left-on-machine"},"Free disk space left on machine"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This is a recommended approach as it ensures, that pruning will be executed on time")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"VolumeFreeSpace")," mode allows Full Pruning to be triggered when the amount of free disk space reaches a selected\nminimum. To enable this mode, add the following\nflags: ",(0,r.kt)("inlineCode",{parentName:"p"},"--Pruning.Mode=Hybrid --Pruning.FullPruningTrigger=VolumeFreeSpace--Pruning.FullPruningThresholdMb=256000"),",\nwhere 256000 should be set based on current requirements. However, it should never be set below the default value of"),(0,r.kt)("ol",{start:256e3},(0,r.kt)("li",{parentName:"ol"})),(0,r.kt)("p",null,"This configuration will trigger Full Pruning whenever the amount of free disk space drops to 250 GB. This ensures that\npruning is invoked as infrequently as possible while also ensuring that there is always sufficient free space available\nto trigger it."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"It's recommended not to set the value below 250 GB for stability reasons. In reality, Full Pruning should require\napproximately the same amount of space as a fresh state database (around 160 GB), but it also needs a threshold for\nprocessing and other operations since it creates a copy of the existing state database. Therefore, it's essential to\nmaintain a minimum amount of free disk space to ensure stable and reliable pruning performance.")),(0,r.kt)("h2",{id:"monitoring-progress-of-full-pruning"},"Monitoring progress of Full Pruning"),(0,r.kt)("p",null,"When Full Pruning is triggered correctly, several messages will be visible in the logs of the Nethermind process."),(0,r.kt)("p",null,"Very first ones should be:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Full Pruning Ready to start: pruning garbage before state BLOCK","_","NUMBER with root ROOT","_","HASH.\\\n",(0,r.kt)("strong",{parentName:"p"},"WARN"),": Full Pruning Started on root hash ROOT","_","HASH: do not close the node until finished or progress will be lost.")),(0,r.kt)("p",null,"From that moment ensure that no restarts will be performed on a node to ensure that Full pruning will be done properly.\nAfter few minutes first logs with progress would start to appear:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Full Pruning In Progress: 00:00:57.0603307 1.00 mln nodes mirrored.\\\nFull Pruning In Progress: 00:01:40.3677103 2.00 mln nodes mirrored.\\\nFull Pruning In Progress: 00:02:25.6437030 3.00 mln nodes mirrored.")),(0,r.kt)("p",null,"Pruning may take even ",(0,r.kt)("strong",{parentName:"p"},"more than 30 hours")," (this depends on CPU and IO operations on disk)."),(0,r.kt)("p",null,"Whenever pruning will be completed, there will be a log message:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Full Pruning Finished: 15:25:59.1620756 1,560.29 mln nodes mirrored.")),(0,r.kt)("p",null,"As you can notice, on this example it took around 15 hours."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Since the amount of mirrored nodes is not a static value, it's not possible to provide a simple progress indicator in\npercentage. Therefore, the approximate value given should be used to determine when Full Pruning is expected to be\ncompleted.")),(0,r.kt)("h2",{id:"additional-settings"},"Additional settings"),(0,r.kt)("h3",{id:"fullpruningmemorybudgetmb"},"FullPruningMemoryBudgetMb"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"FullPruningMemoryBudgetMb")," configuration parameter controls the memory budget allocated for the trie visit during\nthe full pruning process. By increasing this value, the number of required read IOPS (Input/Output Operations Per\nSecond) can be significantly reduced, which results in a faster full pruning operation. However, this improvement comes\nat the expense of increased RAM usage.\\\n\\\nAssuming your system has a total of 64GB of RAM, with the application, CL client, and system expenses consuming 20GB,\nyou need to determine the maximum value for ",(0,r.kt)("inlineCode",{parentName:"p"},"FullPruningMemoryBudgetMb")," while ensuring that the system remains stable\nand respecting the given limit."),(0,r.kt)("p",null,"In this case, you have 44GB (64GB - 20GB) of available RAM for increasing the ",(0,r.kt)("inlineCode",{parentName:"p"},"FullPruningMemoryBudgetMb")," value. To\ncalculate the maximum value in megabytes, multiply the available RAM by 1024 (since 1GB = 1024MB):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"44GB * 1024MB/GB = 45056MB\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"FullPruningMemoryBudgetMb")," value higher than 16GB may not provide any additional performance benefits.")),(0,r.kt)("p",null,"However, there is a recommendation that the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"FullPruningMemoryBudgetMb")," should not be higher than 16GB. So,\nconsidering this guideline, you can set the ",(0,r.kt)("inlineCode",{parentName:"p"},"FullPruningMemoryBudgetMb")," value to a maximum of 16GB, which is equivalent\nto:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"16GB * 1024MB/GB = 16384MB\n")),(0,r.kt)("p",null,"To apply this value, update the configuration file as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Pruning.FullPruningMemoryBudgetMb=16384\n")),(0,r.kt)("p",null,"Please note that this example assumes that the remaining 44GB of RAM is sufficient for the full pruning memory budget.\nDepending on the specific use case and system requirements, it may be necessary to further adjust the value to optimize\nperformance and resource usage."),(0,r.kt)("h3",{id:"fullpruningcompletionbehavior"},"FullPruningCompletionBehavior"),(0,r.kt)("p",null,"This setting determines the behavior of the node after Full Pruning has completed. By default, the node will continue to\nprogress as usual. However, if the user wishes to shut down the node after Full Pruning has completed, there are two\noptions available:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"None"),": No special action will be taken."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"ShutdownOnSuccess"),": Nethermind will shut down if the Full Pruning process is successful."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"AlwaysShutdown"),": Nethermind will shut down once Full Pruning completes, regardless of whether it succeeded or\nfailed.")),(0,r.kt)("h3",{id:"fullpruningmaxdegreeofparallelism"},"FullPruningMaxDegreeOfParallelism"),(0,r.kt)("p",null,"This setting determines the number of parallel tasks and threads that can be used by Full Pruning:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"0: the number of logical processors"),(0,r.kt)("li",{parentName:"ol"},"1: Full Pruning will run on a single thread.")),(0,r.kt)("p",null,"The recommended value depends on the type of node being used. If the node needs to be responsive (e.g., RPC or Validator\nnode), it's recommended to use a value below the number of logical processors. If the node doesn't have many other\nresponsibilities but needs to reliably follow the chain without delays and produce live logs, the default value is\nrecommended. If the node doesn't need to be responsive, has very fast I/O (such as NVME), and the shortest pruning time\nis desired, this can be set to 2-3 times the number of logical processors."),(0,r.kt)("h2",{id:"side-notes"},"Side notes"),(0,r.kt)("p",null,"During the Full Pruning process, several things should be kept in mind:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Full Pruning is a very heavy task, but it's performed in the background, so the node continues to progress and follow\nthe chain."),(0,r.kt)("li",{parentName:"ol"},"Due to the heaviness of the task, it may affect validator rewards effectiveness, but since it's executed only once\nevery few months, it shouldn't have a significant impact on overall results (we've experienced approximately 5-10%\nloss of rewards during Full Pruning)."),(0,r.kt)("li",{parentName:"ol"},"Ensure that your disk has at least 250 GB of free space after syncing the node. Otherwise, Full Pruning will never\ncomplete successfully."),(0,r.kt)("li",{parentName:"ol"},"Several things can be done to reduce the size of the database after syncing (such as setting AncientBarriers to a\nproper value higher than 0, using CL which requires less disk space, and setting logs to the lowest level to avoid\nlog spamming).")))}h.isMDXComponent=!0}}]);