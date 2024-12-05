"use strict";(self.webpackChunknethermind_docs=self.webpackChunknethermind_docs||[]).push([[1706],{3006:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>x,frontMatter:()=>c,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"fundamentals/database","title":"Database","description":"Nethermind uses the RocksDB database to store the state. By default, the database is located in the","source":"@site/docs/fundamentals/database.md","sourceDirName":"fundamentals","slug":"/fundamentals/database","permalink":"/next/fundamentals/database","draft":false,"unlisted":false,"editUrl":"https://github.com/NethermindEth/docs/tree/main/docs/fundamentals/database.md","tags":[],"version":"current","lastUpdatedAt":1733413863000,"sidebarPosition":5,"frontMatter":{"title":"Database","sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Logs","permalink":"/next/fundamentals/logs"},"next":{"title":"Pruning","permalink":"/next/fundamentals/pruning"}}');var t=s(4848),i=s(8453),l=s(1470),d=s(9365);const c={title:"Database",sidebar_position:5},a=void 0,o={},h=[{value:"Database directory structure",id:"database-directory-structure",level:2},{value:"Database size",id:"database-size",level:2},{value:"Reducing database size",id:"reducing-database-size",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Nethermind uses the ",(0,t.jsx)(n.a,{href:"https://rocksdb.org",children:"RocksDB"})," database to store the state. By default, the database is located in the\nsame directory where the Nethermind executable is. You can change the database location using the ",(0,t.jsx)(n.a,{href:"/next/fundamentals/configuration#basedbpath",children:(0,t.jsx)(n.code,{children:"-d, --baseDbPath"})})," command line option."]}),"\n",(0,t.jsx)(n.h2,{id:"database-directory-structure",children:"Database directory structure"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Directory"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"blockInfos"}),(0,t.jsx)(n.td,{children:"Information about blocks at each level of the block tree (canonical chain and branches)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"blocks"}),(0,t.jsx)(n.td,{children:"Block bodies (block transactions and uncles)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"bloom"}),(0,t.jsx)(n.td,{children:"Bloom indices for fast log searches"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"canonicalHashTrie"}),(0,t.jsx)(n.td,{children:"LES protocol related data"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"code"}),(0,t.jsx)(n.td,{children:"Contract bytecodes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"discoveryNodes"}),(0,t.jsx)(n.td,{children:"Peers discovered via discovery protocol - used for quick peering after restarts (you can copy this DB between nodes to speed up peering)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"headers"}),(0,t.jsx)(n.td,{children:"Block headers only"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"pendingTx"}),(0,t.jsx)(n.td,{children:"The second level cache of pending transactions/mempool (the first level is in memory). Wiped out on each restart."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"peers"}),(0,t.jsx)(n.td,{children:"Additional sync peers information (like peer reputation) - you can copy this DB between nodes to speed up peering on fresh sync"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"receipts"}),(0,t.jsx)(n.td,{children:"Transaction receipts"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"state"}),(0,t.jsx)(n.td,{children:"Blockchain state including accounts and contract storage (Patricia trie nodes)"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["You can use ",(0,t.jsx)(n.code,{children:"rsync"})," between your nodes to clone the database (One of our users copied the entire 4.5TB archive state this\nway while the node was running and only stopped the node for the very last stage of ",(0,t.jsx)(n.code,{children:"rsync"})," ). You can also copy\nthe database between Linux, Windows, and macOS."]}),"\n",(0,t.jsx)(n.h2,{id:"database-size",children:"Database size"}),"\n",(0,t.jsx)(n.p,{children:"Below is a comprehensive list of the supported chains, along with a detailed breakdown of their respective database directories. For reference, the database sizes listed have been determined using the standard configurations provided."}),"\n",(0,t.jsxs)(l.A,{children:[(0,t.jsx)(d.A,{value:"mainnet",label:"Mainnet",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"state"}),": 161 GB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"receipts"}),": 217 GB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"blocks"}),": 607 GB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"bloom"}),": 6.5 GB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"headers"}),": 9.1 GB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"code"}),": 4.9 GB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"blobTransactions"}),": 917 MB"]}),"\n",(0,t.jsx)(n.li,{children:"..."}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Total: 1007 GB"})}),"\n"]})}),(0,t.jsx)(d.A,{value:"sepolia",label:"Sepolia",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"state"}),": 45 GB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"receipts"}),": 42 GB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"blocks"}),": 311 GB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"bloom"}),": 2.2 GB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"headers"}),": 2.5 GB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"code"}),": 7.0 GB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"blobTransactions"}),": 178 MB"]}),"\n",(0,t.jsx)(n.li,{children:"..."}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Total: 409 GB"})}),"\n"]})}),(0,t.jsx)(d.A,{value:"holesky",label:"Holesky",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"state"}),": 22 GB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"receipts"}),": 17 GB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"blocks"}),": 60 GB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"bloom"}),": 848 MB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"headers"}),": 1.2 GB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"code"}),": 732 MB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"blobTransactions"}),": 81 MB"]}),"\n",(0,t.jsx)(n.li,{children:"..."}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Total: 101 GB"})}),"\n"]})}),(0,t.jsx)(d.A,{value:"gnosis",label:"Gnosis",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"state"}),": 66 GB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"receipts"}),": 218 GB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"blocks"}),": 202 GB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"bloom"}),": 9.4 GB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"headers"}),": 11 GB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"code"}),": 683 MB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"blobTransactions"}),": 75 MB"]}),"\n",(0,t.jsx)(n.li,{children:"..."}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Total: 509 GB"})}),"\n"]})}),(0,t.jsx)(d.A,{value:"chiado",label:"Chiado",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"state"}),": 2.6 GB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"receipts"}),": 1.5 GB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"blocks"}),": 9.7 GB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"bloom"}),": 3.3 GB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"headers"}),": 2.5 GB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"code"}),": 72 MB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"blobTransactions"}),": 407 MB"]}),"\n",(0,t.jsx)(n.li,{children:"..."}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Total: 22 GB"})}),"\n"]})}),(0,t.jsx)(d.A,{value:"energyweb",label:"Energyweb",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"state"}),": 27 GB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"receipts"}),": 4.6 GB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"blocks"}),": 25 GB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"bloom"}),": 11 GB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"headers"}),": 7.2 GB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"code"}),": 14 MB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"blobTransactions"}),":"]}),"\n",(0,t.jsx)(n.li,{children:"..."}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Total: 76 GB"})}),"\n"]})}),(0,t.jsx)(d.A,{value:"volta",label:"Volta",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"state"}),": 34 GB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"receipts"}),": 8.5 GB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"blocks"}),": 33 GB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"bloom"}),": 9.2 GB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"headers"}),": 7.0 GB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"code"}),": 96 MB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"blobTransactions"}),":"]}),"\n",(0,t.jsx)(n.li,{children:"..."}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Total: 95 GB"})}),"\n"]})})]}),"\n",(0,t.jsx)(n.h2,{id:"reducing-database-size",children:"Reducing database size"}),"\n",(0,t.jsx)(n.p,{children:"The Nethermind database can experience substantial growth over time, starting from an initial size of approximately 650\nGB. As a result, many node setups are configured to run on 1 TB disks. However, even with settings\ndesigned to slow the growth rate, these disks may eventually run out of free space."}),"\n",(0,t.jsx)(n.p,{children:"The current options to reduce the database size are as follows:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/next/fundamentals/sync#resync-a-node-from-scratch",children:"Resyncing database from scratch"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/next/fundamentals/pruning",children:"Pruning"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The table below presents a short comparison of these methods including possible fine-tuning of each method. Data was\nfetched from a node running on a machine with the below specifications:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Node.js"}),": v1.18.0"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Consensus client"}),": Lighthouse"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"CPU"}),": AMD EPYC 7713 (16 cores allocated for the VM)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"RAM"}),": 64 GB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Disk size"}),": 1.2 TB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Disk IOPS"}),": 70,000 to 80,000"]}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Metric"}),(0,t.jsx)(n.th,{children:"Resync"}),(0,t.jsx)(n.th,{children:"Pruning"}),(0,t.jsx)(n.th,{children:"Pruning and memory budget (4 GB)"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Execution time"})}),(0,t.jsx)(n.td,{children:"~4h"}),(0,t.jsx)(n.td,{children:"~24h"}),(0,t.jsx)(n.td,{children:"~12h"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Minimum free disk space"})}),(0,t.jsx)(n.td,{children:"N/A. You can execute resync even if there is 0 free space (avoid such a case)."}),(0,t.jsx)(n.td,{children:"250 GB"}),(0,t.jsx)(n.td,{children:"250 GB"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Attestation rate drop"})}),(0,t.jsx)(n.td,{children:"100%. No attestation rewards during that time or highly reduced."}),(0,t.jsx)(n.td,{children:"5\u201310% during that time"}),(0,t.jsx)(n.td,{children:"N/A"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Average block processing time of new blocks during the process"})}),(0,t.jsx)(n.td,{children:"N/A. New blocks are processed after state but are significantly slower until old bodies/receipts are downloaded. Afterward, average about 0.35s."}),(0,t.jsx)(n.td,{children:"0.7s"}),(0,t.jsx)(n.td,{children:"1.0s"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Is the node online during the process?"})}),(0,t.jsx)(n.td,{children:"No, unless the state is synced."}),(0,t.jsx)(n.td,{children:"Yes. The node follows the chain, and all modules are still enabled."}),(0,t.jsx)(n.td,{children:"Yes. The node follows chain and all modules are still enabled."})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"The command used for testing disk IOPS was as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"fio --randrepeat=1 --ioengine=libaio --direct=1 --gtod_reduce=1 --name=test --filename=test --bs=4k --iodepth=64 --size=4G --readwrite=randrw\n"})})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},9365:(e,n,s)=>{s.d(n,{A:()=>l});s(6540);var r=s(4164);const t={tabItem:"tabItem_Ymn6"};var i=s(4848);function l(e){let{children:n,hidden:s,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(t.tabItem,l),hidden:s,children:n})}},1470:(e,n,s)=>{s.d(n,{A:()=>y});var r=s(6540),t=s(4164),i=s(3104),l=s(6347),d=s(205),c=s(7485),a=s(1682),o=s(679);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:r,default:t}}=e;return{value:n,label:s,attributes:r,default:t}}))}(s);return function(e){const n=(0,a.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function x(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:s}=e;const t=(0,l.W6)(),i=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,c.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(t.location.search);n.set(i,e),t.replace({...t.location,search:n.toString()})}),[i,t])]}function b(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,i=u(e),[l,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[a,h]=j({queryString:s,groupId:t}),[b,p]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,i]=(0,o.Dv)(s);return[t,(0,r.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:t}),f=(()=>{const e=a??b;return x({value:e,tabValues:i})?e:null})();(0,d.A)((()=>{f&&c(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),p(e)}),[h,p,i]),tabValues:i}}var p=s(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=s(4848);function g(e){let{className:n,block:s,selectedValue:r,selectValue:l,tabValues:d}=e;const c=[],{blockElementScrollPositionUntilNextRender:a}=(0,i.a_)(),o=e=>{const n=e.currentTarget,s=c.indexOf(n),t=d[s].value;t!==r&&(a(n),l(t))},h=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":s},n),children:d.map((e=>{let{value:n,label:s,attributes:i}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:h,onClick:o,...i,className:(0,t.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":r===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:i}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function B(e){const n=b(e);return(0,m.jsxs)("div",{className:(0,t.A)("tabs-container",f.tabList),children:[(0,m.jsx)(g,{...n,...e}),(0,m.jsx)(v,{...n,...e})]})}function y(e){const n=(0,p.A)();return(0,m.jsx)(B,{...e,children:h(e.children)},String(n))}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>d});var r=s(6540);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);