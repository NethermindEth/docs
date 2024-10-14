"use strict";(self.webpackChunknethermind_docs=self.webpackChunknethermind_docs||[]).push([[546],{9093:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=t(4848),r=t(8453);const i={title:"Layer 2 networks",sidebar_position:2},s=void 0,a={id:"get-started/running-node/l2-networks",title:"Layer 2 networks",description:"OP Stack",source:"@site/versioned_docs/version-1.29.0/get-started/running-node/l2-networks.md",sourceDirName:"get-started/running-node",slug:"/get-started/running-node/l2-networks",permalink:"/get-started/running-node/l2-networks",draft:!1,unlisted:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/versioned_docs/version-1.29.0/get-started/running-node/l2-networks.md",tags:[],version:"1.29.0",lastUpdatedAt:1728923e6,sidebarPosition:2,frontMatter:{title:"Layer 2 networks",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Consensus clients",permalink:"/get-started/running-node/consensus-clients"},next:{title:"Migrating from Geth",permalink:"/get-started/migrating-from-geth"}},d={},c=[{value:"OP Stack",id:"op-stack",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"op-stack",children:"OP Stack"}),"\n",(0,o.jsxs)(n.p,{children:["An Optimism node ",(0,o.jsx)(n.a,{href:"https://docs.optimism.io/builders/node-operators/architecture",children:"consists of two nodes"}),": op-node, a rollup node, analogous to a consensus client in Ethereum, paired with a Layer 2 (L2) execution client, and a Layer 1 (L1) node of a pair of execution and consensus clients."]}),"\n",(0,o.jsx)(n.admonition,{title:"Before you begin",type:"info",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Running the OP stack requires access to an L1 node\u2014either on-premises or an external RPC provider. If you also plan to run an L1 node with Nethermind, note that you will need two Nethermind instances\u2014one for the L1 node and another for the L2 node, replacing op-geth."}),"\n",(0,o.jsx)(n.li,{children:"Depending on which OP Stack network you want to run on, the L1 node must be configured respectively. For instance, for OP Mainnet, the L1 node must run on Ethereum Mainnet. For OP Sepolia, on Sepolia."}),"\n",(0,o.jsxs)(n.li,{children:["Ensure your L1 node is up and running on the respective network before running the OP Stack. See ",(0,o.jsx)(n.a,{href:"/get-started/running-node/#ethereum",children:"Running a node on Ethereum"}),"."]}),"\n"]})}),"\n",(0,o.jsx)(n.admonition,{title:"Important",type:"warning",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Similar to the L1 node, the L2 instance of Nethermind also requires a ",(0,o.jsx)(n.a,{href:"/get-started/running-node/consensus-clients#configuring-json-rpc-interface",children:"properly configured"})," Engine API to communicate to op-node."]}),"\n",(0,o.jsx)(n.li,{children:"If both the L1 and L2 nodes run on the same machine, ensure they use different ports and data directories."}),"\n"]})}),"\n",(0,o.jsx)(n.p,{children:"To run Nethermind on the OP Mainnet, use the following command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"nethermind \\\n  -c op-mainnet \\\n  -dd path/to/data/dir \\\n  --JsonRpc.JwtSecretFile path/to/jwt.hex\n"})}),"\n",(0,o.jsx)(n.p,{children:"Below is a sample command to run op-node paired with Nethermind:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"export L1_RPC_URL=... # The URL of the L1 node RPC interface\nexport L1_BEACON_URL=... # The URL of the L1 node Beacon interface\n\nop-node \\\n  --l1=$L1_RPC_URL \\\n  --l1.rpckind=standard \\\n  --l1.beacon=$L1_BEACON_URL \\\n  --l2=http://localhost:8551 \\\n  --l2.jwt-secret=path/to/jwt.hex \\\n  --syncmode=execution-layer \\\n  --network=op-mainnet\n"})}),"\n",(0,o.jsxs)(n.p,{children:["For the full list of the configuration options, see the ",(0,o.jsx)(n.a,{href:"https://docs.optimism.io/builders/node-operators/configuration/consensus-config",children:"op-node documentation"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var o=t(6540);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);