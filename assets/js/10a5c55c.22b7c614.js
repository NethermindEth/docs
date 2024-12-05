"use strict";(self.webpackChunknethermind_docs=self.webpackChunknethermind_docs||[]).push([[9274],{916:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>r,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"get-started/consensus-clients","title":"Consensus clients","description":"Ethereum\'s long-awaited shift from proof-of-work (PoW) to proof-of-stake (PoS) known as The Merge happened on September 15, 2022, and came with fundamental changes to the network. The most notable change is the addition of the consensus layer (aka Beacon Chain) which replaced the PoW mining. It is coordinating and pseudorandomly selecting block producers from the pool of stakers/validators in a way that makes it extremely difficult for validators to coordinate attacks on the network.","source":"@site/versioned_docs/version-1.25.4/get-started/consensus-clients.md","sourceDirName":"get-started","slug":"/get-started/consensus-clients","permalink":"/1.25.4/get-started/consensus-clients","draft":false,"unlisted":false,"editUrl":"https://github.com/NethermindEth/docs/tree/main/versioned_docs/version-1.25.4/get-started/consensus-clients.md","tags":[],"version":"1.25.4","lastUpdatedAt":1733413863000,"sidebarPosition":3,"frontMatter":{"title":"Consensus clients","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Installing Nethermind","permalink":"/1.25.4/get-started/installing-nethermind"},"next":{"title":"Migrating from Geth","permalink":"/1.25.4/get-started/migrating-from-geth"}}');var o=t(4848),i=t(8453);const r={title:"Consensus clients",sidebar_position:3},c=void 0,a={},h=[{value:"Choosing a consensus client",id:"choosing-a-consensus-client",level:2},{value:"Configuring JSON-RPC interface",id:"configuring-json-rpc-interface",level:2},{value:"Running the consensus client",id:"running-the-consensus-client",level:2},{value:"Lighthouse",id:"lighthouse",level:3},{value:"Lodestar",id:"lodestar",level:3},{value:"Nimbus",id:"nimbus",level:3},{value:"Prysm",id:"prysm",level:3},{value:"Teku",id:"teku",level:3},{value:"Running Nethermind",id:"running-nethermind",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Ethereum's long-awaited shift from proof-of-work (PoW) to proof-of-stake (PoS) known as The Merge happened on September 15, 2022, and came with fundamental changes to the network. The most notable change is the addition of the consensus layer (aka Beacon Chain) which replaced the PoW mining. It is coordinating and pseudorandomly selecting block producers from the pool of stakers/validators in a way that makes it extremely difficult for validators to coordinate attacks on the network.\nThe Merge changed how operators run nodes on the Ethereum blockchain. A node now needs two clients that work together as a pair. In addition to the ",(0,o.jsx)(n.a,{href:"https://ethereum.org/en/glossary/#execution-client",children:"execution client"})," (e.g., Nethermind), you need a ",(0,o.jsx)(n.a,{href:"https://ethereum.org/en/glossary/#consensus-client",children:"consensus client"})," that connects to the consensus layer and runs the PoS algorithm. This guide shows how to run an Ethereum node with Nethermind and a consensus client of your choice."]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["An easy way to run both consensus and execution clients is with ",(0,o.jsx)(n.a,{href:"https://docs.sedge.nethermind.io",children:"Sedge"}),". Sedge is a setup tool for PoS validators and nodes that runs on Linux and macOS."]})}),"\n",(0,o.jsx)(n.h2,{id:"choosing-a-consensus-client",children:"Choosing a consensus client"}),"\n",(0,o.jsx)(n.p,{children:"On the consensus layer, there are 5 client implementations to choose from. Though all consensus clients are great, check them out yourself to find the one best suited to your needs."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://lighthouse-book.sigmaprime.io",children:"Lighthouse"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://chainsafe.github.io/lodestar",children:"Lodestar"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://nimbus.guide",children:"Nimbus"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://docs.prylabs.network",children:"Prysm"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://docs.teku.consensys.net",children:"Teku"})}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{title:"Important",type:"warning",children:(0,o.jsxs)(n.p,{children:["We urge you to take ",(0,o.jsx)(n.a,{href:"https://ethereum.org/en/developers/docs/nodes-and-clients/client-diversity",children:"client diversity"})," into consideration when choosing your consensus client and avoid the majority clients."]})}),"\n",(0,o.jsx)(n.h2,{id:"configuring-json-rpc-interface",children:"Configuring JSON-RPC interface"}),"\n",(0,o.jsxs)(n.p,{children:["Execution and consensus clients communicate via an authenticated endpoint specified in Engine JSON-RPC API. In order to connect to a consensus client, the execution client must generate a ",(0,o.jsx)(n.a,{href:"https://jwt.io",children:"JWT"})," secret at a known path. Although the secret is generated automatically by Nethermind on startup at ",(0,o.jsx)(n.code,{children:"keystore/jwt-secret"})," path in its root directory, in some cases, you might need to do it yourself. You can generate one using ",(0,o.jsx)(n.a,{href:"https://www.openssl.org",children:"OpenSSL"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"openssl rand -hex 32 > path/to/jwt.hex\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Since the JWT secret is simply a 64-character hex value, there are many other ways of generating it, including online resources. However, for security reasons, we recommend using OpenSSL."})}),"\n",(0,o.jsxs)(n.p,{children:["The generated JWT secret can be specified with the ",(0,o.jsx)(n.code,{children:"--JsonRpc.JwtSecretFile path/to/jwt.hex"})," command line option. For more configuration options, see ",(0,o.jsx)(n.a,{href:"/1.25.4/interacting/json-rpc-server#engine-api",children:"Engine API"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"running-the-consensus-client",children:"Running the consensus client"}),"\n",(0,o.jsxs)(n.p,{children:["This step assumes that you have already ",(0,o.jsx)(n.a,{href:"/1.25.4/get-started/installing-nethermind",children:"installed"})," Nethermind, the ",(0,o.jsx)(n.a,{href:"#choosing-a-consensus-client",children:"consensus client"})," of your choice, and, optionally, created the ",(0,o.jsx)(n.a,{href:"#configuring-json-rpc-interface",children:"JWT secret"}),"."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["As syncing from the scratch can take a very long time on some networks (up to several days), the commands below optionally use ",(0,o.jsx)(n.a,{href:"https://ethereum.org/en/developers/docs/nodes-and-clients/#checkpoint-sync",children:"checkpoint sync"})," to speed up the process."]})}),"\n",(0,o.jsx)(n.h3,{id:"lighthouse",children:"Lighthouse"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"lighthouse bn \\\n  --network mainnet \\\n  --execution-endpoint http://localhost:8551 \\\n  --execution-jwt path/to/jwt.hex \\\n  --checkpoint-sync-url https://mainnet.checkpoint.sigp.io \\\n  --http\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The command above runs Lighthouse on Mainnet. For other networks, set the ",(0,o.jsx)(n.code,{children:"--network"})," and ",(0,o.jsx)(n.code,{children:"--checkpoint-sync-url"})," options accordingly. See the ",(0,o.jsx)(n.a,{href:"https://lighthouse-book.sigmaprime.io",children:"Lighthouse documentation"})," and ",(0,o.jsx)(n.a,{href:"https://eth-clients.github.io/checkpoint-sync-endpoints",children:"public checkpoint sync endpoints"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"lodestar",children:"Lodestar"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"lodestar beacon \\\n  --network mainnet \\\n  --jwt-secret path/to/jwt.hex \\\n  --checkpointSyncUrl https://beaconstate-mainnet.chainsafe.io\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The command above runs Lodestar on Mainnet. For other networks, set the ",(0,o.jsx)(n.code,{children:"--network"})," and ",(0,o.jsx)(n.code,{children:"--checkpointSyncUrl"})," options accordingly. See the ",(0,o.jsx)(n.a,{href:"https://chainsafe.github.io/lodestar",children:"Lodestar documentation"})," and ",(0,o.jsx)(n.a,{href:"https://eth-clients.github.io/checkpoint-sync-endpoints",children:"public checkpoint sync endpoints"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"nimbus",children:"Nimbus"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"./run-mainnet-beacon-node.sh \\\n  --web3-url=http://127.0.0.1:8551 \\\n  --jwt-secret=path/to/jwt.hex\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The command above runs Numbus on Mainnet without checkpoint sync. For checkpoint sync, see ",(0,o.jsx)(n.a,{href:"https://nimbus.guide/trusted-node-sync.html",children:"Sync from a trusted node"}),". For other networks, see the ",(0,o.jsx)(n.a,{href:"https://nimbus.guide",children:"Nimbus documentation"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"prysm",children:"Prysm"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"./prysm.sh beacon-chain \\\n  --mainnet \\\n  --execution-endpoint=http://localhost:8551 \\\n  --jwt-secret=path/to/jwt.hex \\\n  --checkpoint-sync-url=https://beaconstate.ethstaker.cc \\\n  --genesis-beacon-api-url=https://beaconstate.ethstaker.cc\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The command above runs Prysm on Mainnet. For other networks, replace the ",(0,o.jsx)(n.code,{children:"--mainnet"})," and set ",(0,o.jsx)(n.code,{children:"--checkpoint-sync-url"})," and ",(0,o.jsx)(n.code,{children:"--genesis-beacon-api-url"})," options accordingly. See the ",(0,o.jsx)(n.a,{href:"https://docs.prylabs.network",children:"Prysm documentation"})," and ",(0,o.jsx)(n.a,{href:"https://eth-clients.github.io/checkpoint-sync-endpoints",children:"public checkpoint sync endpoints"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"teku",children:"Teku"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"teku \\\n  --network=mainnet \\\n  --ee-endpoint=http://localhost:8551 \\\n  --ee-jwt-secret-file=path/to/jwt.hex \\\n  --metrics-enabled=true \\\n  --rest-api-enabled=true \\\n  --initial-state=https://beaconstate.ethstaker.cc\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The command above runs Teku on Mainnet. For other networks, set the ",(0,o.jsx)(n.code,{children:"--network"})," and ",(0,o.jsx)(n.code,{children:"--initial-state"})," options accordingly. See the ",(0,o.jsx)(n.a,{href:"https://docs.teku.consensys.net",children:"Teku documentation"})," and ",(0,o.jsx)(n.a,{href:"https://eth-clients.github.io/checkpoint-sync-endpoints",children:"public checkpoint sync endpoints"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"running-nethermind",children:"Running Nethermind"}),"\n",(0,o.jsx)(n.admonition,{title:"Important",type:"warning",children:(0,o.jsx)(n.p,{children:"The consensus client must be running before you start Nethermind."})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"nethermind \\\n  -c mainnet \\\n  --JsonRpc.JwtSecretFile path/to/jwt.hex\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The command above runs Nethermind on Mainnet. For other networks, set the ",(0,o.jsx)(n.code,{children:"-c"})," option accordingly. For more info, see ",(0,o.jsx)(n.a,{href:"/1.25.4/get-started/installing-nethermind#running",children:"Running Nethermind"}),"."]})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var s=t(6540);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);