"use strict";(self.webpackChunknethermind_docs=self.webpackChunknethermind_docs||[]).push([[3992],{4014:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=s(4848),i=s(8453);const r={title:"System requirements",sidebar_position:1},d=void 0,a={id:"get-started/system-requirements",title:"System requirements",description:"Supported operating systems",source:"@site/versioned_docs/version-1.27.0/get-started/system-requirements.md",sourceDirName:"get-started",slug:"/get-started/system-requirements",permalink:"/1.27.0/get-started/system-requirements",draft:!1,unlisted:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/versioned_docs/version-1.27.0/get-started/system-requirements.md",tags:[],version:"1.27.0",lastUpdatedAt:172971098e4,sidebarPosition:1,frontMatter:{title:"System requirements",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/1.27.0/"},next:{title:"Installing Nethermind",permalink:"/1.27.0/get-started/installing-nethermind"}},o={},l=[{value:"Supported operating systems",id:"supported-operating-systems",level:2},{value:"Hardware requirements",id:"hardware-requirements",level:2},{value:"Disk requirements",id:"disk-requirements",level:3},{value:"Database growth",id:"database-growth",level:4},{value:"Disk speed",id:"disk-speed",level:4},{value:"Sync modes and disk usage",id:"sync-modes-and-disk-usage",level:4}];function c(e){const n={a:"a",br:"br",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"supported-operating-systems",children:"Supported operating systems"}),"\n",(0,t.jsxs)(n.p,{children:["Nethermind supports a broad range of modern ",(0,t.jsx)(n.em,{children:"64-bit"})," operating systems including but not limited to:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Linux"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Alpine 3.17+"}),"\n",(0,t.jsx)(n.li,{children:"CentOS Stream 9+"}),"\n",(0,t.jsx)(n.li,{children:"Debian 11+"}),"\n",(0,t.jsx)(n.li,{children:"Fedora 37+"}),"\n",(0,t.jsx)(n.li,{children:"openSUSE 15+"}),"\n",(0,t.jsx)(n.li,{children:"RHEL 8+"}),"\n",(0,t.jsx)(n.li,{children:"SLES 15+"}),"\n",(0,t.jsx)(n.li,{children:"Ubuntu 20.04+"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Windows"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Windows 10+ (x64 only)"}),"\n",(0,t.jsx)(n.li,{children:"Windows Server 2012+ (x64 only)"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"macOS"})," 10.15+"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"hardware-requirements",children:"Hardware requirements"}),"\n",(0,t.jsx)(n.p,{children:"Suggested requirements can be found below."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Network"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Memory"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"CPU cores"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Mainnet"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"16 GB"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"4"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Mainnet archive"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"128 GB"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"8"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Gnosis"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"16 GB"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Energy Web"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"8 GB"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Volta"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"8 GB"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"2"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"disk-requirements",children:"Disk requirements"}),"\n",(0,t.jsxs)(n.p,{children:["Running an Ethereum Mainnet full node requires at least a 1 TB fast disk, such as NVMe or a fast SSD. However, ",(0,t.jsx)(n.strong,{children:"2\nTB is recommended"})," to minimize maintenance requirements. To choose a specific disk model, we recommend\nchecking out ",(0,t.jsx)(n.a,{href:"https://gist.github.com/yorickdowne/f3a3e79a573bf35767cd002cc977b038#the-good",children:"this guide"}),".",(0,t.jsx)(n.br,{}),"\n","Choosing a 2 TB disk is a comfortable option for most common Mainnet node usage patterns, including staking.\nNonetheless, for a comprehensive understanding of disk growth and usage, we recommend delving further into the topic."]}),"\n",(0,t.jsx)(n.h4,{id:"database-growth",children:"Database growth"}),"\n",(0,t.jsxs)(n.p,{children:["Nethermind requires approximately 898 GB of disk space (as of Jan 2024) after a fresh Ethereum Mainnet sync using default parameters. This size increases over time as the Ethereum chain grows. The node's database is in its most optimal state immediately after a sync or full pruning. Following the initial sync, the database grows at a rate of approximately 27 GB per week. To maintain this process, occasional resyncing or pruning of the node is necessary to bring it back to its optimal database size. For more info on managing node disk usage growth, see ",(0,t.jsx)(n.a,{href:"/1.27.0/fundamentals/database#reducing-database-size",children:"how to reduce database size"}),".",(0,t.jsx)(n.br,{}),"\n","Having a larger disk space allocation reduces the need for frequent maintenance and alleviates concerns about the chain outgrowing the available space. It's worth noting that the only drawback of running a smaller disk is the requirement for more regular resyncing or pruning. We believe that a 2 TB disk will suffice for most users. However, the choice between 1 TB and 2 TB depends on factors such as hardware costs, cloud provider expenses, and individual requirements."]}),"\n",(0,t.jsxs)(n.p,{children:["For more details, see ",(0,t.jsx)(n.a,{href:"/1.27.0/fundamentals/database#database-size",children:"Database size"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"disk-speed",children:"Disk speed"}),"\n",(0,t.jsx)(n.p,{children:"The speed of the disk often acts as a bottleneck for the node's performance. It is crucial for optimizing your validator's performance rewards and the syncing process. We highly recommend a disk with a minimum of 10,000 IOPS for both write and read operations. Slower disks may hinder your ability to synchronize the blockchain successfully."}),"\n",(0,t.jsx)(n.h4,{id:"sync-modes-and-disk-usage",children:"Sync modes and disk usage"}),"\n",(0,t.jsx)(n.p,{children:"A node can be run using different syncing options, and each option has different characteristics of disk space usage."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Archive node."})," This mode stores the full historical state for all blocks. As of July 2023, an archive node requires at least 14 TB of disk space, and it grows by approximately 60 GB per week."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Ancient barriers."})," Nethermind allows you to specify how many old block bodies and receipts you want to store. By default, Nethermind sets the ancient barrier at block 11052984. This block is significant because it marks the deployment of the deposit contract required for consensus client deposit scanning for validators. Peers and JSON-RPC requests will not have access to block bodies and receipts older than the ancient barrier."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Non-validator mode."})," This mode drops all historical receipts and bodies, but it cannot be used for validation."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For more details, see ",(0,t.jsx)(n.a,{href:"/1.27.0/fundamentals/sync",children:"sync modes"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>a});var t=s(6540);const i={},r=t.createContext(i);function d(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);