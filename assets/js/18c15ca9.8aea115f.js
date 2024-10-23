"use strict";(self.webpackChunknethermind_docs=self.webpackChunknethermind_docs||[]).push([[2154],{7105:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var i=t(4848),s=t(8453);const r={title:"Running a node",sidebar_position:0},o=void 0,d={id:"get-started/running-node/running-node",title:"Running a node",description:"- Ensure Nethermind is installed according to the installation guide.",source:"@site/versioned_docs/version-1.29.0/get-started/running-node/running-node.md",sourceDirName:"get-started/running-node",slug:"/get-started/running-node/",permalink:"/get-started/running-node/",draft:!1,unlisted:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/versioned_docs/version-1.29.0/get-started/running-node/running-node.md",tags:[],version:"1.29.0",lastUpdatedAt:172971098e4,sidebarPosition:0,frontMatter:{title:"Running a node",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Installing Nethermind",permalink:"/get-started/installing-nethermind"},next:{title:"Consensus clients",permalink:"/get-started/running-node/consensus-clients"}},a={},c=[{value:"Ethereum",id:"ethereum",level:2},{value:"OP Stack",id:"op-stack",level:2},{value:"Gnosis Chain",id:"gnosis-chain",level:2},{value:"Energy Web Chain",id:"energy-web-chain",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{title:"Before you begin",type:"info",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Ensure Nethermind is installed according to the ",(0,i.jsx)(n.a,{href:"/get-started/installing-nethermind",children:"installation guide"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Check out the ",(0,i.jsx)(n.a,{href:"/fundamentals/security",children:"security considerations"})," before using Nethermind for critical operations."]}),"\n"]})}),"\n",(0,i.jsxs)(n.p,{children:["In addition to the foundational Layer 1 networks, Nethermind supports various Layer 2 networks and sidechains out of the box. Running Nethermind on a supported network is as simple as specifying the respective ",(0,i.jsx)(n.a,{href:"/fundamentals/configuration#configuration-file",children:"configuration file"})," with the ",(0,i.jsx)(n.a,{href:"/fundamentals/configuration#config",children:(0,i.jsx)(n.code,{children:"-c, --config"})})," option."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["We urge you to always ",(0,i.jsx)(n.a,{href:"/fundamentals/configuration#datadir",children:"explicitly specify"})," Nethermind's data directory outside of the Nethermind installation directory to avoid data loss during upgrades or reinstallation. The data directory must be on a disk with sufficient space and read/write permissions."]})}),"\n",(0,i.jsx)(n.h2,{id:"ethereum",children:"Ethereum"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Supported networks"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://ethereum.org/en/developers/docs/networks/#ethereum-mainnet",children:"Mainnet"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/eth-clients/holesky",children:"Holesky"})," (testnet)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/eth-clients/sepolia",children:"Sepolia"})," (testnet)"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["We highly recommend checking out the ",(0,i.jsx)(n.a,{href:"https://ethereum.org/en/developers/docs/nodes-and-clients/run-a-node/",children:"Spin up your own Ethereum node"})," guide by the Ethereum Foundation."]})}),"\n",(0,i.jsx)(n.admonition,{title:"Important",type:"warning",children:(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.a,{href:"/get-started/running-node/consensus-clients",children:"consensus client"})," of your choice must be running before you start Nethermind."]})}),"\n",(0,i.jsx)(n.p,{children:"For instance, to launch the client with the default configuration for the Mainnet and custom data directory, run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"nethermind \\\n  -c mainnet \\\n  -dd path/to/data/dir \\\n  --JsonRpc.JwtSecretFile path/to/jwt.hex\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For more info about configuring the JWT secret, see ",(0,i.jsx)(n.a,{href:"/get-started/running-node/consensus-clients#configuring-json-rpc-interface",children:"Configuring JSON-RPC interface"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["For archive (aka full) nodes, Nethermind provides separate configuration files prefixed with ",(0,i.jsx)(n.code,{children:"_archive"}),". Thus, to run Nethermind on the Mainnet as an archive node, simply change ",(0,i.jsx)(n.code,{children:"mainnet"})," to ",(0,i.jsx)(n.code,{children:"mainnet_archive"})," in the above command as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"nethermind \\\n  -c mainnet_archive \\\n  -dd path/to/data/dir \\\n  --JsonRpc.JwtSecretFile path/to/jwt.hex\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Archive nodes are generally more resource-demanding. If you intend to run one, we recommend checking out the ",(0,i.jsx)(n.a,{href:"/get-started/system-requirements#hardware-requirements",children:"hardware requirements"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"op-stack",children:"OP Stack"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Supported networks"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Optimism","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.optimism.io/chain/networks#op-mainnet",children:"OP Mainnet"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://docs.optimism.io/chain/networks#op-sepolia",children:"OP Sepolia"})," (testnet)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Base","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.base.org/network-information/#base-mainnet",children:"Base Mainnet"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://docs.base.org/network-information/#base-testnet-sepolia",children:"Base Sepolia"})," (testnet)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["To run Nethermind on an OP Stack network, see ",(0,i.jsx)(n.a,{href:"/get-started/running-node/l2-networks#op-stack",children:"Layer 2 networks"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"gnosis-chain",children:"Gnosis Chain"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Supported networks"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.gnosischain.com/about/networks/mainnet",children:"Gnosis"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://docs.gnosischain.com/about/networks/chiado",children:"Chiado"})," (testnet)"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["To run Nethermind on the Gnosis Chain, see the ",(0,i.jsx)(n.a,{href:"https://docs.gnosischain.com/node",children:"Gnosis Chain documentation"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"energy-web-chain",children:"Energy Web Chain"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Supported networks"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://energy-web-foundation.gitbook.io/energy-web/ew-dos-technology-components-2023/trust-layer-energy-web-chain",children:"Energy Web"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://energy-web-foundation.gitbook.io/energy-web/ew-dos-technology-components-2023/trust-layer-energy-web-chain/ewc-guides-and-tutorials/testnet-and-mainnet#developing-on-volta-test-network",children:"Volta"})," (testnet)"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"As the Energy Web Chain is an Aura-based network, running a node does not require a consensus client."})}),"\n",(0,i.jsxs)(n.p,{children:["To run Nethermind on the Energy Web Chain, see the ",(0,i.jsx)(n.a,{href:"https://energy-web-foundation.gitbook.io/energy-web/ew-dos-technology-components-2023/trust-layer-energy-web-chain/ewc-guides-and-tutorials/running-a-local-node",children:"Energy Web Chain documentation"}),"."]})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var i=t(6540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);