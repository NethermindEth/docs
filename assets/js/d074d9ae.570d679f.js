"use strict";(self.webpackChunknethermind_docs=self.webpackChunknethermind_docs||[]).push([[2645],{3797:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=t(4848),i=t(8453);const o={title:"Performance tuning",sidebar_position:7},r=void 0,a={id:"fundamentals/performance-tuning",title:"Performance tuning",description:"By default, Nethermind is configured for general use cases that fit well for most users. However, to improve various aspects of Nethermind performance, there are options for different subsystems that can be configured for your specific needs.",source:"@site/versioned_docs/version-1.28.0/fundamentals/performance-tuning.md",sourceDirName:"fundamentals",slug:"/fundamentals/performance-tuning",permalink:"/1.28.0/fundamentals/performance-tuning",draft:!1,unlisted:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/versioned_docs/version-1.28.0/fundamentals/performance-tuning.md",tags:[],version:"1.28.0",lastUpdatedAt:1728930686e3,sidebarPosition:7,frontMatter:{title:"Performance tuning",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Pruning",permalink:"/1.28.0/fundamentals/pruning"},next:{title:"Private networks",permalink:"/1.28.0/fundamentals/private-networks"}},c={},d=[{value:"Peer discovery",id:"peer-discovery",level:2},{value:"Port forwarding",id:"port-forwarding",level:2},{value:"Sync time",id:"sync-time",level:2},{value:"Snap sync",id:"snap-sync",level:2},{value:"Old bodies and receipts",id:"old-bodies-and-receipts",level:2},{value:"Block processing time and attestation",id:"block-processing-time-and-attestation",level:2}];function l(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"By default, Nethermind is configured for general use cases that fit well for most users. However, to improve various aspects of Nethermind performance, there are options for different subsystems that can be configured for your specific needs."}),"\n",(0,s.jsx)(n.h2,{id:"peer-discovery",children:"Peer discovery"}),"\n",(0,s.jsxs)(n.p,{children:["To connect to the Ethereum network, Nethermind needs to maintain connections to other clients. The number of connections can be configured with ",(0,s.jsx)(n.code,{children:"--Network.MaxActivePeers <value>"}),". The default value depends on the network. Increasing this number may reduce syncing time, while reducing this number may help with attestation performance.\nAlso, you can increase the rate at which a new connection is established with ",(0,s.jsx)(n.code,{children:"--Network.MaxOutgoingConnectPerSec <value>"}),". The default value is 20 while 50 would be a reasonable higher value. This tends to reduce the snap sync time; however, some ISPs may throttle your Internet connection if you set this value too high. Also, some WiFi routers may hang if the value is set too high."]}),"\n",(0,s.jsx)(n.h2,{id:"port-forwarding",children:"Port forwarding"}),"\n",(0,s.jsxs)(n.p,{children:["While port forwarding is not strictly required, it helps significantly with finding peers and is essential for the network's overall health. The exact steps for port forwarding highly depend on your environment, router, and ISP. For most home configurations, automatic port forwarding can be turned on with ",(0,s.jsx)(n.code,{children:"--Network.EnableUPnP true"}),".\nSome ISPs are more restrictive and do not support port forwarding and/or utilize provider-level NAT. In such cases, your best option is to use a VPN that supports port forwarding. Keep in mind that consensus clients need a separate port forwarding."]}),"\n",(0,s.jsx)(n.h2,{id:"sync-time",children:"Sync time"}),"\n",(0,s.jsx)(n.p,{children:"On the Ethereum mainnet, most of the syncing time is split into three phases: snap sync, old bodies, and old receipts. Strictly speaking, there are also fast sync, full sync, and state sync phases. However, they usually complete in less than a minute, with state sync usually taking up to 3 minutes."}),"\n",(0,s.jsx)(n.p,{children:"At the moment, the best test case sync time is 1 hour 50 minutes for all phases with the following configuration:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"CPU: AMD Ryzen 9 7950X"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Memory: 128GB RAM"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Storage: Intel Optane SSD 905P Series 900GB"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Network: 1 Gbps Internet with TorGuard VPN with WireGuard protocol. Both execution and consensus clients port forwarding are set up manually."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Command line options:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"--Network.EnableUPnP true\n--Network.MaxOutgoingConnectPerSec 50\n--Network.ProcessingThreadCount 32\n--Sync.TuneDbMode HeavyWrite\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"snap-sync",children:"Snap sync"}),"\n",(0,s.jsx)(n.p,{children:"Snap sync is the process of downloading the Ethereum state tree. After it is complete, and after the state sync phase, Nethermind can process and follow the chain. The fastest tested snap sync and state sync time is 25 minutes.\nThis phase is the most I/O-intensive sync phase, and therefore, assuming a fast internet, the sync time highly depends on your SSD's write speed. Remember that most SSDs only advertise peak write speed, usually above 5GB/s. However, they tend to slow down significantly to around 0.5GB/s (or even less for a QLC SSD) after a few seconds. Therefore, look for SSDs with high sustained write speed."}),"\n",(0,s.jsxs)(n.p,{children:["Also, ensuring your SSD is sufficiently cooled to prevent thermal throttling is essential. This is often overlooked as most workloads rarely stress SSD as much; however, to reduce sync time, Nethermind will utilize your SSD to its limit. If, for whatever reason, you need to minimize the I/O load, you can specify a rate limit with ",(0,s.jsx)(n.code,{children:"--Db.MaxBytesPerSec 1000000000"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Nethermind temporarily changes the database configuration during sync to optimize it for writing, notably the option ",(0,s.jsx)(n.code,{children:"--Sync.TuneDbMode HeavyWrite"})," is turned on by default. On some systems with slow SSDs, the use of the option ",(0,s.jsx)(n.code,{children:"--Sync.TuneDbMode AggressiveHeavyWrite"})," may boost. Also, the option ",(0,s.jsx)(n.code,{children:"--Sync.TuneDbMode DisableCompaction"})," can be used to disable compaction altogether. This is likely faster for systems using entry-level NVMe SSDs and is also useful to extend the lifespan of your SSD as it provides the lowest total writes possible. However, it uses about 3GB of extra memory during snap sync. The state sync phase may appear to hang for about 10 minutes as the whole database compacts for the first time after snap sync."]}),"\n",(0,s.jsxs)(n.p,{children:["If you are running on a VPS with artificially capped IOPS, or you are using SATA SSD (which is highly not recommended), increasing the state DB block size with ",(0,s.jsx)(n.code,{children:"--Db.StateDbBlockSize 16384"})," may help to reduce snap sync time. However, this negatively affects block processing time. An alternative is to turn on compaction readahead with ",(0,s.jsx)(n.code,{children:"--Db.CompactionReadAhead 128000"}),"; however, this may take up a few extra GB of memory depending on the readahead value."]}),"\n",(0,s.jsx)(n.h2,{id:"old-bodies-and-receipts",children:"Old bodies and receipts"}),"\n",(0,s.jsxs)(n.p,{children:["Old bodies and old receipts are the process of downloading block bodies and receipts. This is required for some RPC methods, such as ",(0,s.jsx)(n.code,{children:"eth_getLogs"}),", and for consensus clients to work correctly. If you don't need them, skip this phase with"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"--Sync.DownloadBodiesInFastSync false\n--Sync.DownloadReceiptsInFastSync false\n--Sync.NonValidatorNode true\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Old bodies and receipts are mainly limited by your Internet connection. With a 1Gbps connection, they consume around 250MB/s and 500MB/s of writes, respectively, which is generally reasonable for most PCIE SSDs. On older systems or VPS with low single thread performance and high Internet speed, the block body deserialization may be a bottleneck, in which case, you can increase the number of network processing threads with ",(0,s.jsx)(n.code,{children:"--Network.ProcessingThreadCount 32"}),". However, this may impact block processing time."]}),"\n",(0,s.jsx)(n.h2,{id:"block-processing-time-and-attestation",children:"Block processing time and attestation"}),"\n",(0,s.jsxs)(n.p,{children:["Block processing time is limited mainly by SSD performance. Strictly speaking, it's not the IOPS that matters, but the response time. Nevertheless, the IOPS is a good approximation as most SSDs don't advertise the response time.\nTo help further reduce reads from SSD, Nethermind has multiple levels of caching, which is tuned by the memory hint option ",(0,s.jsx)(n.code,{children:"--Init.MemoryHint 2000000000"}),". If you are running a system with more than 16GB of memory, it is highly recommended to increase this value. In-memory pruning (turned on by default) also improves block processing time."]}),"\n",(0,s.jsxs)(n.p,{children:["It is also possible to disable compression of the state DB with ",(0,s.jsx)(n.code,{children:"--Db.StateDbDisableCompression true"})," that improves block processing time by 3% to 5% but increases disk space usage correspondingly. Block processing is susceptible to the number of peers connected. Therefore, after the node is synced, it makes sense to reduce the number of peers with ",(0,s.jsx)(n.code,{children:"--Network.MaxActivePeers 20"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(6540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);