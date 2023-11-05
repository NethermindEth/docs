"use strict";(self.webpackChunknethermind_docs=self.webpackChunknethermind_docs||[]).push([[360],{8059:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var s=t(5893),r=t(1151),o=t(4866),i=t(5162);const a={title:"Troubleshooting",sidebar_position:8},l=void 0,c={id:"troubleshooting",title:"Troubleshooting",description:"This article requires a revision.",source:"@site/docs/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/troubleshooting.md",tags:[],version:"current",lastUpdatedAt:1699203178,formattedLastUpdatedAt:"Nov 5, 2023",sidebarPosition:8,frontMatter:{title:"Troubleshooting",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"FAQ",permalink:"/faq"}},u={},d=[{value:"File descriptor limits",id:"file-descriptor-limits",level:2},{value:"RocksDB checksum issue",id:"rocksdb-checksum-issue",level:2},{value:"Database LOCK files not removed by RocksDB",id:"database-lock-files-not-removed-by-rocksdb",level:2},{value:"Leaking Socket Descriptors",id:"leaking-socket-descriptors",level:2},{value:"RocksDB on macOS",id:"rocksdb-on-macos",level:2},{value:"Skipping consensus issues blocks",id:"skipping-consensus-issues-blocks",level:2},{value:"Main issues reported so far when using Nethermind for Eth2 (30.11.2020)",id:"main-issues-reported-so-far-when-using-nethermind-for-eth2-30112020",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"This article requires a revision."})}),"\n","\n","\n",(0,s.jsx)(n.h2,{id:"file-descriptor-limits",children:"File descriptor limits"}),"\n",(0,s.jsx)(n.p,{children:'In some cases, file descriptor limits may cause issues like "Too many open files". To solve that, see the instructions for your platform below.'}),"\n",(0,s.jsxs)(o.Z,{groupId:"os",children:[(0,s.jsxs)(i.Z,{value:"linux",label:"Linux",children:[(0,s.jsxs)(n.p,{children:["To increase the limits for the user running Nethermind (e.g., ",(0,s.jsx)(n.code,{children:"nethermind"}),"), run:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'sudo echo "nethermind soft nofile 100000" > /etc/security/limits.d/nethermind.conf\nsudo echo "nethermind hard nofile 100000" >> /etc/security/limits.d/nethermind.conf\n'})})]}),(0,s.jsxs)(i.Z,{value:"macos",label:"macOS",children:[(0,s.jsx)(n.p,{children:"To increase the limits, run:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ulimit -n 10000\n"})}),(0,s.jsxs)(n.p,{children:["If you run into issues with the above command, see the ",(0,s.jsx)(n.a,{href:"https://developer.apple.com/forums/thread/735798?answerId=762679022#762679022",children:"workaround"}),"."]}),(0,s.jsxs)(n.p,{children:["Note that the changes above are temporary and will be reset after the system reboot. To make them permanent, you can add them to your ",(0,s.jsx)(n.code,{children:"~/.bashrc"})," or ",(0,s.jsx)(n.code,{children:"~/.bash_profile"})," shell configuration file."]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"rocksdb-checksum-issue",children:"RocksDB checksum issue"}),"\n",(0,s.jsx)(n.p,{children:"Sometimes RocksDB may fail with an exception similar to the one below:"}),"\n",(0,s.jsx)(n.p,{children:"2020-11-29 12:02:01.1968|BlockchainProcessor encountered an exception. RocksDbSharp.RocksDbException: Corruption: block\nchecksum mismatch: expected 2087346143, got 2983326672 in C:\\Nethermind\\nethermind_db/mainnet\\state/037463.sst offset\n33439089 size 16319"}),"\n",(0,s.jsxs)(n.p,{children:["On XFS file system under very high memory pressure, this tend to happen. Turning on the\nflag ",(0,s.jsx)(n.code,{children:"--Db.UseDirectIoForFlushAndCompactions true"}),"will help, although it might reduce performance."]}),"\n",(0,s.jsxs)(n.p,{children:["On most cases however, this is due to RAM module issue. Please run ",(0,s.jsx)(n.a,{href:"https://www.memtest86.com/",children:"memtest86"})," to check your\nmemory module. "]}),"\n",(0,s.jsx)(n.h2,{id:"database-lock-files-not-removed-by-rocksdb",children:"Database LOCK files not removed by RocksDB"}),"\n",(0,s.jsx)(n.p,{children:"If the node complains about the LOCK files it may mean one of the two things:"}),"\n",(0,s.jsx)(n.p,{children:"(1) another Nethermind process is running and using the same DB"}),"\n",(0,s.jsx)(n.p,{children:"(2) previous process did not close the DB properly"}),"\n",(0,s.jsx)(n.p,{children:"When (2) happens you can run"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"find . -type f -name 'LOCK' -delete"})}),"\n",(0,s.jsx)(n.p,{children:"in the database folder."}),"\n",(0,s.jsx)(n.h2,{id:"leaking-socket-descriptors",children:"Leaking Socket Descriptors"}),"\n",(0,s.jsx)(n.p,{children:"On Linux our networking library is not closing socket descriptors properly. This results in the number of open files for\nthe process growing indefinitely. Limits for the number of open files per process are different for root and other\nusers. For root the limits are usually very high and the socket descriptors would probably not cause much trouble. Many\nof the cloud operators are launching VMs with root user access by default. If Nethermind process is frequently killed by\nOS then you may need to change the configuration for the maximum number of open files."}),"\n",(0,s.jsx)(n.h2,{id:"rocksdb-on-macos",children:"RocksDB on macOS"}),"\n",(0,s.jsx)(n.p,{children:"RocksDB library does not always load properly on macOS. One (hacky) workaround is to install the latest version of\nRocksDB by running brew install rocksdb."}),"\n",(0,s.jsx)(n.h2,{id:"skipping-consensus-issues-blocks",children:"Skipping consensus issues blocks"}),"\n",(0,s.jsx)(n.p,{children:"We do our best in Nethermind not to have consensus issues with other clients. But historically consensus issues had\nhappened. In that case we start working on a hotfix immediately and release it within hours time. If you need your node\nto be operational ASAP and can\u2019t wait for hotfix you do have an option to achieve that. Nethermind node allows you to\nfast sync to recent blocks and state. When node does fast sync it can skip over processing problematic blocks. In order\nto be able to fast sync we need SyncConfig.FastSync to be set to \u2018true\u2019. You also need to set\nSyncConfig.FastSyncCatchUpHeightDelta to a value lower than how far your node is behind the chain.\nSyncConfig.FastSyncCatchUpHeightDelta is the minimum difference between current chain height and chain head block number\nwhen node can switch from full sync (block processing) to fast sync. By default it is set to 1024. Please note that we\ndon\u2019t recommend setting this value to less than 32 in normal circumstances. After setting those values and restarting\nnode, the node will download block headers, bodies (if SyncConfig.DownloadBodiesInFastSync is \u2018true\u2019), receipts (if\nSyncConfig.DownloadReceiptsInFastSync is \u2018true\u2019) and current state. After that it will resume processing from new head\nblock. Please note that the historical state for skipped blocks might not be available. This can cause some JSON RPC\ncalls on the historical state not to work - same situation as if these blocks state was pruned."}),"\n",(0,s.jsxs)(n.p,{children:["For example if current chain head block number is 10,000,100 and node couldn\u2019t process block 10,000,000 due to consensus\nissue, if you set FastSync",":true"," and FastSyncCatchUpHeightDelta:100 (or as low as 32) and node should switch to fast\nsync, catch up with current chain head and switch back to full sync."]}),"\n",(0,s.jsx)(n.p,{children:"The time that it will take to fast sync to current chain head can take even up to 2 hours depending how many blocks and\nhow much new state there is to be downloaded."}),"\n",(0,s.jsx)(n.h1,{id:"eth2-issues",children:"ETH2 issues"}),"\n",(0,s.jsx)(n.h2,{id:"main-issues-reported-so-far-when-using-nethermind-for-eth2-30112020",children:"Main issues reported so far when using Nethermind for Eth2 (30.11.2020)"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["users who synced before version ",(0,s.jsx)(n.strong,{children:"1.9.41"})," and were not aware that old configs were ",(0,s.jsx)(n.strong,{children:"not"})," supporting Eth2 by default\nhad to resync with ",(0,s.jsx)(n.strong,{children:"1.9.41"})," (and they are reporting successful setups now) "]}),"\n",(0,s.jsxs)(n.li,{children:["users who synced with ",(0,s.jsx)(n.code,{children:"AncientReceiptsBarrier"})," (limiting disk space) cannot use ",(0,s.jsx)(n.strong,{children:"Teku"})," and ",(0,s.jsx)(n.strong,{children:"have to switch"})," to *\n",(0,s.jsx)(n.em,{children:"Prysm"}),"* or ",(0,s.jsx)(n.strong,{children:"Lighthouse"})]}),"\n",(0,s.jsx)(n.li,{children:"two users reported that their fully synced nodes on Windows 10 Pro failed after a few blocks (please let us know if\nyou have seen a similar issue)"}),"\n",(0,s.jsxs)(n.li,{children:["(fixed in 1.9.45) users are reporting issues on a hard shutdown of VMs / machines with Nethermind running - some\ndatabase corruptions occur often ",(0,s.jsx)(n.strong,{children:"requiring a resync"})]}),"\n",(0,s.jsxs)(n.li,{children:["users had trouble to sync node on a ZFS file system but this has been ",(0,s.jsx)(n.strong,{children:"resolved after removing ZFS"})]}),"\n",(0,s.jsxs)(n.li,{children:["users reported an issue where RocksDB was displaying a ",(0,s.jsx)(n.code,{children:"checksum mismatch"})," error in the logs -> ",(0,s.jsx)(n.strong,{children:"restarting a VM (not\nNethermind, but the machine) helped"})]}),"\n",(0,s.jsxs)(n.li,{children:["if you tried to launch Lighthouse with the old Nethermind (pre ",(0,s.jsx)(n.strong,{children:"1.9.41"}),") which failed and then resynced Nethermind\nand you are still getting errors then ",(0,s.jsx)(n.strong,{children:"wiping the Lighthouse DB and starting again will solve it."})]}),"\n"]})})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>i});t(7294);var s=t(6010);const r={tabItem:"tabItem_Ymn6"};var o=t(5893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,i),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>v});var s=t(7294),r=t(6010),o=t(2466),i=t(6550),a=t(469),l=t(1980),c=t(7392),u=t(12);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(o),(0,s.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=h(e),[i,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:o}))),[c,d]=p({queryString:t,groupId:r}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,u.Nk)(t);return[r,(0,s.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),g=(()=>{const e=c??f;return m({value:e,tabValues:o})?e:null})();(0,a.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=t(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(5893);function w(e){let{className:n,block:t,selectedValue:s,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),r=a[t].value;r!==s&&(c(n),i(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,r.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function k(e){const n=f(e);return(0,y.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,y.jsx)(w,{...e,...n}),(0,y.jsx)(x,{...e,...n})]})}function v(e){const n=(0,b.Z)();return(0,y.jsx)(k,{...e,children:d(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var s=t(7294);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);