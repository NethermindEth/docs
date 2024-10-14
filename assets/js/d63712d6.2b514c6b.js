"use strict";(self.webpackChunknethermind_docs=self.webpackChunknethermind_docs||[]).push([[9448],{4240:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>h,toc:()=>a});var i=t(4848),s=t(8453);const r={title:"Migrating from Geth",sidebar_position:4},o=void 0,h={id:"get-started/migrating-from-geth",title:"Migrating from Geth",description:"This guide will walk you through all the steps required for a seamless and quick transition.",source:"@site/versioned_docs/version-1.29.0/get-started/migrating-from-geth.md",sourceDirName:"get-started",slug:"/get-started/migrating-from-geth",permalink:"/get-started/migrating-from-geth",draft:!1,unlisted:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/versioned_docs/version-1.29.0/get-started/migrating-from-geth.md",tags:[],version:"1.29.0",lastUpdatedAt:1728930686e3,sidebarPosition:4,frontMatter:{title:"Migrating from Geth",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Layer 2 networks",permalink:"/get-started/running-node/l2-networks"},next:{title:"Configuration",permalink:"/fundamentals/configuration"}},d={},a=[{value:"Option 1: Sync Nethermind next to Geth",id:"option-1",level:2},{value:"Option 2: Sync Nethermind using Sedge next to Geth",id:"option-2",level:2},{value:"Option 3: Remove Geth and sync Nethermind",id:"option-3",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"This guide will walk you through all the steps required for a seamless and quick transition."}),"\n",(0,i.jsxs)(n.p,{children:["First, ensure ",(0,i.jsx)(n.em,{children:"the disk has enough space"}),". The most secure way is having a Nethermind synced on the same machine as Geth without shutting Geth down. That allows you to check whether Nethermind is syncing properly, verify whether everything works as expected, and reduce node downtime to a bare minimum. This is a recommended approach for any public JSON-RPC provider or a validator."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If the disk has enough space, ",(0,i.jsx)(n.a,{href:"#option-1",children:"option 1"})," or ",(0,i.jsx)(n.a,{href:"#option-2",children:"option 2"})," are the recommended choices."]}),"\n",(0,i.jsx)(n.li,{children:"If there is not enough disk space, and downtime is not an option, we recommend either extending the disk or, if not possible, hosting Nethermind on another machine, syncing it, and whenever it completes, moving everything validator-related to that machine, and abandoning the first one."}),"\n",(0,i.jsxs)(n.li,{children:["If downtime of around 12 hours or more is not a problem, see the ",(0,i.jsx)(n.a,{href:"#option-3",children:"option 3"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"option-1",children:"Option 1: Sync Nethermind next to Geth"}),"\n",(0,i.jsxs)(n.p,{children:["First, ",(0,i.jsx)(n.a,{href:"/get-started/installing-nethermind",children:"install Nethermind"})," and a ",(0,i.jsx)(n.a,{href:"/get-started/running-node/consensus-clients",children:"consensus client"})," of your choice."]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If you choose the same consensus client for Nethermind that is already being used with Geth, ensure their settings, such as data directories, do not interfere."}),"\n",(0,i.jsx)(n.li,{children:"Ensure the network ports of the consensus client paired with Nethermind and the one paired with Geth do not interfere with each other."}),"\n",(0,i.jsxs)(n.li,{children:["Ensure the JSON-RPC port, Engine API port, and the P2P networking ports of Nethermind are different from the ones used by Geth. These ports are set using the following command line options:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"--JsonRpc.Port <port>"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"--JsonRpc.EnginePort <port>"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"--Network.DiscoveryPort <port>"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"--Network.P2PPort <port>"})}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,i.jsxs)(n.p,{children:["Once you fulfill the above requirements, you can start syncing Nethermind. To check the sync status, use the ",(0,i.jsx)(n.a,{href:"/interacting/json-rpc-ns/eth#eth_syncing",children:(0,i.jsx)(n.code,{children:"eth_syncing"})})," JSON-RPC method. When it returns ",(0,i.jsx)(n.code,{children:"false"}),", Nethermind is considered fully synced with all block bodies and receipts needed to work properly as a validator. Another option to monitor the sync is a ",(0,i.jsx)(n.a,{href:"/monitoring/health-check",children:"health check"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Once Nethermind is synced, shut down both Geth and Nethermind, along with its paired consensus client. Then, restart Nethermind using the ports assigned for and the JWT secret used by Geth before. Ensure no warnings or errors are present in the logs of both Nethermind and the consensus client. Also, check if Nethermind is following the chain properly. If everything is alright, you can remove Geth and the consensus client paired with Nethermind previously along with their data."}),"\n",(0,i.jsx)(n.h2,{id:"option-2",children:"Option 2: Sync Nethermind using Sedge next to Geth"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://docs.sedge.nethermind.io",children:"Sedge"})," is a setup tool for PoS validators and nodes that runs on Linux and macOS."]}),"\n",(0,i.jsxs)(n.p,{children:["This option is similar to the ",(0,i.jsx)(n.a,{href:"#option-1",children:"option 1"}),", but Sedge automatically takes care of conflicting settings making the entire process much easier."]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.p,{children:"You can add a flag to Sedge as follows. For instance:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["For the execution client, ",(0,i.jsx)(n.code,{children:"--el-extra-flag JsonRpc.Port=8546"})]}),"\n",(0,i.jsxs)(n.li,{children:["For the consensus client, ",(0,i.jsx)(n.code,{children:"--cl-extra-flag rpc-port=4001"})]}),"\n"]})]}),"\n",(0,i.jsxs)(n.p,{children:["Once Nethermind is synced, you can remove extra flags if any from the ",(0,i.jsx)(n.code,{children:"docker-compose.yml"})," and restart the node as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker compose stop execution\ndocker compose up -d execution\n"})}),"\n",(0,i.jsx)(n.h2,{id:"option-3",children:"Option 3: Remove Geth and sync Nethermind"}),"\n",(0,i.jsx)(n.p,{children:"This is the simplest option as it doesn't require configuration adjustments. However, the node will be down until Nethermind is syncing."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Shut down and remove Geth along with its data."}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/get-started/installing-nethermind",children:"Install Nethermind"})}),"\n",(0,i.jsx)(n.li,{children:"Ensure Nethermind uses the same network ports as Geth before and the same JWT secret. Otherwise, you must reconfigure the consensus client to the Nethermind settings."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Once you fulfill the above requirements, you can start syncing Nethermind. While Nethermid is syncing, ensure no errors are present in the logs of both Nethermind and the consensus client. Note that sync may take a while, depending on the chain. Also, you can periodically check the ",(0,i.jsx)(n.a,{href:"/interacting/json-rpc-ns/eth#eth_syncing",children:(0,i.jsx)(n.code,{children:"eth_syncing"})})," JSON-RPC method or the ",(0,i.jsx)(n.a,{href:"/monitoring/health-check",children:"health check"}),"."]})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>h});var i=t(6540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function h(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);