"use strict";(self.webpackChunknethermind_docs=self.webpackChunknethermind_docs||[]).push([[8022],{4068:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>j,frontMatter:()=>l,metadata:()=>h,toc:()=>o});var t=r(5893),n=r(1151),d=r(4866),i=r(5162);const l={title:"Database",sidebar_position:5},c=void 0,h={id:"fundamentals/database",title:"Database",description:"Nethermind uses the RocksDB database to store the state. By default, the database is located in the",source:"@site/versioned_docs/version-v1.23.0/fundamentals/database.md",sourceDirName:"fundamentals",slug:"/fundamentals/database",permalink:"/fundamentals/database",draft:!1,unlisted:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/versioned_docs/version-v1.23.0/fundamentals/database.md",tags:[],version:"v1.23.0",lastUpdatedAt:1702402765,formattedLastUpdatedAt:"Dec 12, 2023",sidebarPosition:5,frontMatter:{title:"Database",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Logs",permalink:"/fundamentals/logs"},next:{title:"Pruning",permalink:"/fundamentals/pruning"}},a={},o=[{value:"Database directory structure",id:"database-directory-structure",level:2},{value:"Database size",id:"database-size",level:2},{value:"Database size in details",id:"database-size-in-details",level:3},{value:"Reducing database size",id:"reducing-database-size",level:2}];function x(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["Nethermind uses the ",(0,t.jsx)(s.a,{href:"https://rocksdb.org",children:"RocksDB"})," database to store the state. By default, the database is located in the\nsame directory where the Nethermind executable is. You can change the database location using the ",(0,t.jsx)(s.a,{href:"/fundamentals/configuration#basic-options",children:(0,t.jsx)(s.code,{children:"-d, --baseDbPath"})})," command line option."]}),"\n",(0,t.jsx)(s.h2,{id:"database-directory-structure",children:"Database directory structure"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Directory"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"blockInfos"}),(0,t.jsx)(s.td,{children:"Information about blocks at each level of the block tree (canonical chain and branches)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"blocks"}),(0,t.jsx)(s.td,{children:"Block bodies (block transactions and uncles)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"bloom"}),(0,t.jsx)(s.td,{children:"Bloom indices for fast log searches"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"canonicalHashTrie"}),(0,t.jsx)(s.td,{children:"LES protocol related data"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"code"}),(0,t.jsx)(s.td,{children:"Contract bytecodes"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"discoveryNodes"}),(0,t.jsx)(s.td,{children:"Peers discovered via discovery protocol - used for quick peering after restarts (you can copy this DB between nodes to speed up peering)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"headers"}),(0,t.jsx)(s.td,{children:"Block headers only"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"pendingTx"}),(0,t.jsx)(s.td,{children:"The second level cache of pending transactions/mempool (the first level is in memory). Wiped out on each restart."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"peers"}),(0,t.jsx)(s.td,{children:"Additional sync peers information (like peer reputation) - you can copy this DB between nodes to speed up peering on fresh sync"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"receipts"}),(0,t.jsx)(s.td,{children:"Transaction receipts"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"state"}),(0,t.jsx)(s.td,{children:"Blockchain state including accounts and contract storage (Patricia trie nodes)"})]})]})]}),"\n",(0,t.jsxs)(s.p,{children:["You can use ",(0,t.jsx)(s.code,{children:"rsync"})," between your nodes to clone the database (One of our users copied the entire 4.5TB archive state this\nway while the node was running and only stopped the node for the very last stage of ",(0,t.jsx)(s.code,{children:"rsync"})," ). You can also copy\nthe database between Linux, Windows, and macOS."]}),"\n",(0,t.jsx)(s.h2,{id:"database-size",children:"Database size"}),"\n",(0,t.jsx)(s.p,{children:"The table below presents the Nethermind database size after fresh sync with different configurations and networks (as of\nMay 2023)."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Network/configuration"}),(0,t.jsx)(s.th,{children:"Database size after fresh sync"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Mainnet (default)"}),(0,t.jsx)(s.td,{children:"504 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Mainnet without ancient barriers"}),(0,t.jsx)(s.td,{children:"664 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Mainnet archive"}),(0,t.jsx)(s.td,{children:"14 TB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Mainnet without old bodies and receipts"}),(0,t.jsx)(s.td,{children:"178 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Gnosis"}),(0,t.jsx)(s.td,{children:"112 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Goerli"}),(0,t.jsx)(s.td,{children:"240 GB"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"database-size-in-details",children:"Database size in details"}),"\n",(0,t.jsx)(s.p,{children:"Below is a comprehensive list of the supported chains, along with a detailed breakdown of their respective database directories. For reference, the database sizes listed are based on the data from July 2023 and have been determined using the standard configurations provided."}),"\n",(0,t.jsxs)(d.Z,{children:[(0,t.jsx)(i.Z,{value:"mainnet",label:"Mainnet",children:(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Database"}),(0,t.jsx)(s.th,{children:"Mainnet"}),(0,t.jsx)(s.th,{children:"Mainnet with ancient barriers"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"State"}),(0,t.jsx)(s.td,{children:"161 GB"}),(0,t.jsx)(s.td,{children:"161 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Receipts"}),(0,t.jsx)(s.td,{children:"152 GB"}),(0,t.jsx)(s.td,{children:"104 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Blocks"}),(0,t.jsx)(s.td,{children:"334 GB"}),(0,t.jsx)(s.td,{children:"222 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Bloom"}),(0,t.jsx)(s.td,{children:"5.3 GB"}),(0,t.jsx)(s.td,{children:"5.3 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Headers"}),(0,t.jsx)(s.td,{children:"8.1 GB"}),(0,t.jsx)(s.td,{children:"8.1 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Code"}),(0,t.jsx)(s.td,{children:"3 GB"}),(0,t.jsx)(s.td,{children:"3 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Other"}),(0,t.jsx)(s.td,{children:"..."}),(0,t.jsx)(s.td,{children:".."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Total"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"664 GB"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"504 GB"})})]})]})]})}),(0,t.jsx)(i.Z,{value:"goerli",label:"Goerli",children:(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Directory"}),(0,t.jsx)(s.th,{children:"Size"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"state"}),(0,t.jsx)(s.td,{children:"51 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"receipts"}),(0,t.jsx)(s.td,{children:"35 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"blocks"}),(0,t.jsx)(s.td,{children:"185 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"code"}),(0,t.jsx)(s.td,{children:"7.4 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"peers"}),(0,t.jsx)(s.td,{children:"8 KB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"witness"}),(0,t.jsx)(s.td,{children:"4.1 MB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"blockInfos"}),(0,t.jsx)(s.td,{children:"417 MB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"bloom"}),(0,t.jsx)(s.td,{children:"2.5 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"headers"}),(0,t.jsx)(s.td,{children:"3.5 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"canonicalHashTrie"}),(0,t.jsx)(s.td,{children:"4.1 MB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"metadata"}),(0,t.jsx)(s.td,{children:"4.4 MB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"discoveryNodes"}),(0,t.jsx)(s.td,{children:"1.5 MB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"TOTAL"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"283 GB"})})]})]})]})}),(0,t.jsx)(i.Z,{value:"sepolia",label:"Sepolia",children:(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Directory"}),(0,t.jsx)(s.th,{children:"Size"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"state"}),(0,t.jsx)(s.td,{children:"8.5 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"receipts"}),(0,t.jsx)(s.td,{children:"8.2 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"blocks"}),(0,t.jsx)(s.td,{children:"36 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"code"}),(0,t.jsx)(s.td,{children:"1.5 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"peers"}),(0,t.jsx)(s.td,{children:"8 KB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"witness"}),(0,t.jsx)(s.td,{children:"4.1 MB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"blockInfos"}),(0,t.jsx)(s.td,{children:"177 MB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"bloom"}),(0,t.jsx)(s.td,{children:"1.3 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"headers"}),(0,t.jsx)(s.td,{children:"1.2 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"canonicalHashTrie"}),(0,t.jsx)(s.td,{children:"4.1 MB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"metadata"}),(0,t.jsx)(s.td,{children:"4.1 MB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"discoveryNodes"}),(0,t.jsx)(s.td,{children:"1.7 MB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"TOTAL"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"56 GB"})})]})]})]})}),(0,t.jsx)(i.Z,{value:"gnosis",label:"Gnosis",children:(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Directory"}),(0,t.jsx)(s.th,{children:"Size"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"state"}),(0,t.jsx)(s.td,{children:"40 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"receipts"}),(0,t.jsx)(s.td,{children:"21 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"blocks"}),(0,t.jsx)(s.td,{children:"43 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"code"}),(0,t.jsx)(s.td,{children:"350 MB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"peers"}),(0,t.jsx)(s.td,{children:"8 KB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"witness"}),(0,t.jsx)(s.td,{children:"4.1 MB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"blockInfos"}),(0,t.jsx)(s.td,{children:"1.5 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"bloom"}),(0,t.jsx)(s.td,{children:"7.5 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"headers"}),(0,t.jsx)(s.td,{children:"9.4 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"canonicalHashTrie"}),(0,t.jsx)(s.td,{children:"4.1 MB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"metadata"}),(0,t.jsx)(s.td,{children:"4.2 MB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"discoveryNodes"}),(0,t.jsx)(s.td,{children:"1.8 MB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"TOTAL"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"121 GB"})})]})]})]})}),(0,t.jsx)(i.Z,{value:"chiado",label:"Chiado",children:(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Directory"}),(0,t.jsx)(s.th,{children:"Size"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"state"}),(0,t.jsx)(s.td,{children:"1.6 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"receipts"}),(0,t.jsx)(s.td,{children:"646 MB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"blocks"}),(0,t.jsx)(s.td,{children:"2.3 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"code"}),(0,t.jsx)(s.td,{children:"22 MB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"peers"}),(0,t.jsx)(s.td,{children:"8 KB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"witness"}),(0,t.jsx)(s.td,{children:"4.1 MB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"blockInfos"}),(0,t.jsx)(s.td,{children:"224 MB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"bloom"}),(0,t.jsx)(s.td,{children:"1.4 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"headers"}),(0,t.jsx)(s.td,{children:"1.1 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"canonicalHashTrie"}),(0,t.jsx)(s.td,{children:"4.1 MB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"metadata"}),(0,t.jsx)(s.td,{children:"4.1 MB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"discoveryNodes"}),(0,t.jsx)(s.td,{children:"1.7 MB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"TOTAL"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"7.1 GB"})})]})]})]})}),(0,t.jsx)(i.Z,{value:"energyweb",label:"Energy Web",children:(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Directory"}),(0,t.jsx)(s.th,{children:"Size"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"state"}),(0,t.jsx)(s.td,{children:"31.13 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"receipts"}),(0,t.jsx)(s.td,{children:"5.13 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"blocks"}),(0,t.jsx)(s.td,{children:"15.55 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"code"}),(0,t.jsx)(s.td,{children:"7.20 MB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"peers"}),(0,t.jsx)(s.td,{children:"311 B"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"witness"}),(0,t.jsx)(s.td,{children:"103.11 KB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"blockInfos"}),(0,t.jsx)(s.td,{children:"1.22 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"bloom"}),(0,t.jsx)(s.td,{children:"7.78 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"headers"}),(0,t.jsx)(s.td,{children:"6.70 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"canonicalHashTrie"}),(0,t.jsx)(s.td,{children:"103.35 KB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"metadata"}),(0,t.jsx)(s.td,{children:"103.31 KB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"discoveryNodes"}),(0,t.jsx)(s.td,{children:"1.68 MB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"TOTAL"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"67.52 GB"})})]})]})]})}),(0,t.jsx)(i.Z,{value:"volta",label:"Volta",children:(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Directory"}),(0,t.jsx)(s.th,{children:"Size"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"state"}),(0,t.jsx)(s.td,{children:"35.71 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"receipts"}),(0,t.jsx)(s.td,{children:"7.67 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"blocks"}),(0,t.jsx)(s.td,{children:"25.11 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"code"}),(0,t.jsx)(s.td,{children:"75.14 MB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"peers"}),(0,t.jsx)(s.td,{children:"616 B"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"witness"}),(0,t.jsx)(s.td,{children:"119.95 KB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"blockInfos"}),(0,t.jsx)(s.td,{children:"1.15 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"bloom"}),(0,t.jsx)(s.td,{children:"7.40 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"headers"}),(0,t.jsx)(s.td,{children:"6.94 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"canonicalHashTrie"}),(0,t.jsx)(s.td,{children:"120.00 KB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"metadata"}),(0,t.jsx)(s.td,{children:"119.97 KB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"discoveryNodes"}),(0,t.jsx)(s.td,{children:"1.55 MB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"TOTAL"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"84.06 GB"})})]})]})]})})]}),"\n",(0,t.jsx)(s.h2,{id:"reducing-database-size",children:"Reducing database size"}),"\n",(0,t.jsx)(s.p,{children:"The Nethermind database can experience substantial growth over time, starting from an initial size of approximately 650\nGB. As a result, many node setups are configured to run on 1 TB disks. However, even with settings\ndesigned to slow the growth rate, these disks may eventually run out of free space."}),"\n",(0,t.jsx)(s.p,{children:"The current options to reduce the database size are as follows:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/fundamentals/sync#resync-a-node-from-scratch",children:"Resyncing database from scratch"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/fundamentals/pruning",children:"Pruning"})}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"The table below presents a short comparison of these methods including possible fine-tuning of each method. Data was\nfetched from a node running on a machine with the below specifications:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Node.js"}),": v1.18.0"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Consensus client"}),": Lighthouse"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"CPU"}),": AMD EPYC 7713 (16 cores allocated for the VM)"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"RAM"}),": 64 GB"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Disk size"}),": 1.2 TB"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Disk IOPS"}),": 70,000 to 80,000"]}),"\n"]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Metric"}),(0,t.jsx)(s.th,{children:"Resync"}),(0,t.jsx)(s.th,{children:"Pruning"}),(0,t.jsx)(s.th,{children:"Pruning and memory budget (4 GB)"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Execution time"})}),(0,t.jsx)(s.td,{children:"~4h"}),(0,t.jsx)(s.td,{children:"~24h"}),(0,t.jsx)(s.td,{children:"~12h"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Minimum free disk space"})}),(0,t.jsx)(s.td,{children:"N/A. You can execute resync even if there is 0 free space (avoid such a case)."}),(0,t.jsx)(s.td,{children:"250 GB"}),(0,t.jsx)(s.td,{children:"250 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Attestation rate drop"})}),(0,t.jsx)(s.td,{children:"100%. No attestation rewards during that time or highly reduced."}),(0,t.jsx)(s.td,{children:"5\u201310% during that time"}),(0,t.jsx)(s.td,{children:"N/A"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Average block processing time of new blocks during the process"})}),(0,t.jsx)(s.td,{children:"N/A. New blocks are processed after state but are significantly slower until old bodies/receipts are downloaded. Afterward, average about 0.35s."}),(0,t.jsx)(s.td,{children:"0.7s"}),(0,t.jsx)(s.td,{children:"1.0s"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Is the node online during the process?"})}),(0,t.jsx)(s.td,{children:"No, unless the state is synced."}),(0,t.jsx)(s.td,{children:"Yes. The node follows the chain, and all modules are still enabled."}),(0,t.jsx)(s.td,{children:"Yes. The node follows chain and all modules are still enabled."})]})]})]}),"\n",(0,t.jsx)(s.p,{children:"The command used for testing disk IOPS was as follows:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"fio --randrepeat=1 --ioengine=libaio --direct=1 --gtod_reduce=1 --name=test --filename=test --bs=4k --iodepth=64 --size=4G --readwrite=randrw\n"})})]})}function j(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},5162:(e,s,r)=>{r.d(s,{Z:()=>i});r(7294);var t=r(512);const n={tabItem:"tabItem_Ymn6"};var d=r(5893);function i(e){let{children:s,hidden:r,className:i}=e;return(0,d.jsx)("div",{role:"tabpanel",className:(0,t.Z)(n.tabItem,i),hidden:r,children:s})}},4866:(e,s,r)=>{r.d(s,{Z:()=>y});var t=r(7294),n=r(512),d=r(2466),i=r(6550),l=r(469),c=r(1980),h=r(7392),a=r(12);function o(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:s,children:r}=e;return(0,t.useMemo)((()=>{const e=s??function(e){return o(e).map((e=>{let{props:{value:s,label:r,attributes:t,default:n}}=e;return{value:s,label:r,attributes:t,default:n}}))}(r);return function(e){const s=(0,h.l)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,r])}function j(e){let{value:s,tabValues:r}=e;return r.some((e=>e.value===s))}function u(e){let{queryString:s=!1,groupId:r}=e;const n=(0,i.k6)(),d=function(e){let{queryString:s=!1,groupId:r}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:s,groupId:r});return[(0,c._X)(d),(0,t.useCallback)((e=>{if(!d)return;const s=new URLSearchParams(n.location.search);s.set(d,e),n.replace({...n.location,search:s.toString()})}),[d,n])]}function b(e){const{defaultValue:s,queryString:r=!1,groupId:n}=e,d=x(e),[i,c]=(0,t.useState)((()=>function(e){let{defaultValue:s,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!j({value:s,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:s,tabValues:d}))),[h,o]=u({queryString:r,groupId:n}),[b,p]=function(e){let{groupId:s}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(s),[n,d]=(0,a.Nk)(r);return[n,(0,t.useCallback)((e=>{r&&d.set(e)}),[r,d])]}({groupId:n}),f=(()=>{const e=h??b;return j({value:e,tabValues:d})?e:null})();(0,l.Z)((()=>{f&&c(f)}),[f]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!j({value:e,tabValues:d}))throw new Error(`Can't select invalid tab value=${e}`);c(e),o(e),p(e)}),[o,p,d]),tabValues:d}}var p=r(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=r(5893);function g(e){let{className:s,block:r,selectedValue:t,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:h}=(0,d.o5)(),a=e=>{const s=e.currentTarget,r=c.indexOf(s),n=l[r].value;n!==t&&(h(s),i(n))},o=e=>{let s=null;switch(e.key){case"Enter":a(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;s=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;s=c[r]??c[c.length-1];break}}s?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":r},s),children:l.map((e=>{let{value:s,label:r,attributes:d}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:t===s?0:-1,"aria-selected":t===s,ref:e=>c.push(e),onKeyDown:o,onClick:a,...d,className:(0,n.Z)("tabs__item",f.tabItem,d?.className,{"tabs__item--active":t===s}),children:r??s},s)}))})}function B(e){let{lazy:s,children:r,selectedValue:n}=e;const d=(Array.isArray(r)?r:[r]).filter(Boolean);if(s){const e=d.find((e=>e.props.value===n));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:d.map(((e,s)=>(0,t.cloneElement)(e,{key:s,hidden:e.props.value!==n})))})}function v(e){const s=b(e);return(0,m.jsxs)("div",{className:(0,n.Z)("tabs-container",f.tabList),children:[(0,m.jsx)(g,{...e,...s}),(0,m.jsx)(B,{...e,...s})]})}function y(e){const s=(0,p.Z)();return(0,m.jsx)(v,{...e,children:o(e.children)},String(s))}},1151:(e,s,r)=>{r.d(s,{Z:()=>l,a:()=>i});var t=r(7294);const n={},d=t.createContext(n);function i(e){const s=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(d.Provider,{value:s},e.children)}}}]);