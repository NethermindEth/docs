"use strict";(self.webpackChunknethermind_docs=self.webpackChunknethermind_docs||[]).push([[217],{4952:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"get-started/running-node/running-node","title":"Running a node","description":"- Ensure Nethermind is installed according to the installation guide.","source":"@site/docs/get-started/running-node/running-node.md","sourceDirName":"get-started/running-node","slug":"/get-started/running-node/","permalink":"/next/get-started/running-node/","draft":false,"unlisted":false,"editUrl":"https://github.com/NethermindEth/docs/tree/main/docs/get-started/running-node/running-node.md","tags":[],"version":"current","lastUpdatedAt":1742382633000,"sidebarPosition":0,"frontMatter":{"title":"Running a node","sidebar_position":0},"sidebar":"tutorialSidebar","previous":{"title":"Installing Nethermind","permalink":"/next/get-started/installing-nethermind"},"next":{"title":"Consensus clients","permalink":"/next/get-started/running-node/consensus-clients"}}');var s=i(4848),r=i(8453);const o={title:"Running a node",sidebar_position:0},a=void 0,d={},c=[{value:"Ethereum",id:"ethereum",level:2},{value:"Gnosis Chain",id:"gnosis-chain",level:2},{value:"OP Stack",id:"op-stack",level:2},{value:"Taiko",id:"taiko",level:2},{value:"Linea",id:"linea",level:2},{value:"Energy Web Chain",id:"energy-web-chain",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{title:"Before you begin",type:"info",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Ensure Nethermind is installed according to the ",(0,s.jsx)(n.a,{href:"/next/get-started/installing-nethermind",children:"installation guide"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Check out the ",(0,s.jsx)(n.a,{href:"/next/fundamentals/security",children:"security considerations"})," before using Nethermind for critical operations."]}),"\n"]})}),"\n",(0,s.jsxs)(n.p,{children:["In addition to the foundational Layer 1 networks, Nethermind supports various Layer 2 networks and sidechains out of the box. Running Nethermind on a supported network is as simple as specifying the respective ",(0,s.jsx)(n.a,{href:"/next/fundamentals/configuration#configuration-file",children:"configuration file"})," with the ",(0,s.jsx)(n.a,{href:"/next/fundamentals/configuration#config",children:(0,s.jsx)(n.code,{children:"-c, --config"})})," option."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["We urge you to always ",(0,s.jsx)(n.a,{href:"/next/fundamentals/configuration#data-dir",children:"explicitly specify"})," Nethermind's data directory outside of the Nethermind installation directory to avoid data loss during upgrades or reinstallation. The data directory must be on a disk with sufficient space and read/write permissions."]})}),"\n",(0,s.jsx)(n.h2,{id:"ethereum",children:"Ethereum"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Supported networks"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://ethereum.org/en/developers/docs/networks/#ethereum-mainnet",children:"Mainnet"})," - configurations: ",(0,s.jsx)(n.code,{children:"mainnet"})," ",(0,s.jsx)(n.code,{children:"mainnet_archive"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://holesky.ethpandaops.io",children:"Holesky"})," (testnet) - configurations: ",(0,s.jsx)(n.code,{children:"holesky"})," ",(0,s.jsx)(n.code,{children:"holesky_archive"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://hoodi.ethpandaops.io",children:"Hoodi"})," (testnet) - configurations: ",(0,s.jsx)(n.code,{children:"hoodi"})," ",(0,s.jsx)(n.code,{children:"hoodi_archive"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://sepolia.ethpandaops.io",children:"Sepolia"})," (testnet) - configurations: ",(0,s.jsx)(n.code,{children:"sepolia"})," ",(0,s.jsx)(n.code,{children:"sepolia_archive"})]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["We highly recommend checking out the ",(0,s.jsx)(n.a,{href:"https://ethereum.org/en/developers/docs/nodes-and-clients/run-a-node/",children:"Spin up your own Ethereum node"})," guide by the Ethereum Foundation."]})}),"\n",(0,s.jsx)(n.admonition,{title:"Important",type:"warning",children:(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.a,{href:"/next/get-started/running-node/consensus-clients",children:"consensus client"})," of your choice must be running before you start Nethermind."]})}),"\n",(0,s.jsx)(n.p,{children:"For instance, to launch the client with the default configuration for the Mainnet and custom data directory, run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nethermind \\\n  -c mainnet \\\n  --data-dir path/to/data/dir \\\n  --jsonrpc-jwtsecretfile path/to/jwt.hex\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For more info about configuring the JWT secret, see ",(0,s.jsx)(n.a,{href:"/next/get-started/running-node/consensus-clients#configuring-json-rpc-interface",children:"Configuring JSON-RPC interface"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["For archive (aka full) nodes, Nethermind provides separate configuration files prefixed with ",(0,s.jsx)(n.code,{children:"_archive"}),". Thus, to run Nethermind on the Mainnet as an archive node, simply change ",(0,s.jsx)(n.code,{children:"mainnet"})," to ",(0,s.jsx)(n.code,{children:"mainnet_archive"})," in the above command as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nethermind \\\n  -c mainnet_archive \\\n  --data-dir path/to/data/dir \\\n  --jsonrpc-jwtsecretfile path/to/jwt.hex\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Archive nodes are generally more resource-demanding. If you intend to run one, we recommend checking out the ",(0,s.jsx)(n.a,{href:"/next/get-started/system-requirements#hardware-requirements",children:"hardware requirements"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"gnosis-chain",children:"Gnosis Chain"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Supported networks"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.gnosischain.com/about/networks/mainnet",children:"Gnosis"})," - configurations: ",(0,s.jsx)(n.code,{children:"gnosis"})," ",(0,s.jsx)(n.code,{children:"gnosis_archive"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.gnosischain.com/about/networks/chiado",children:"Chiado"})," (testnet) - configurations: ",(0,s.jsx)(n.code,{children:"chiado"})," ",(0,s.jsx)(n.code,{children:"chiado_archive"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["To run Nethermind on the Gnosis Chain, see the ",(0,s.jsx)(n.a,{href:"https://docs.gnosischain.com/node",children:"Gnosis Chain documentation"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"op-stack",children:"OP Stack"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Supported networks"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Optimism","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.optimism.io/chain/networks#op-mainnet",children:"OP Mainnet"})," - configurations: ",(0,s.jsx)(n.code,{children:"op-mainnet"})," ",(0,s.jsx)(n.code,{children:"op-mainnet_archive"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.optimism.io/chain/networks#op-sepolia",children:"OP Sepolia"})," (testnet) - configurations: ",(0,s.jsx)(n.code,{children:"op-sepolia"})," ",(0,s.jsx)(n.code,{children:"op-sepolia_archive"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Base","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.base.org/network-information/#base-mainnet",children:"Base Mainnet"})," - configurations: ",(0,s.jsx)(n.code,{children:"base-mainnet"})," ",(0,s.jsx)(n.code,{children:"base-mainnet_archive"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.base.org/network-information/#base-testnet-sepolia",children:"Base Sepolia"})," (testnet) - configurations: ",(0,s.jsx)(n.code,{children:"base-sepolia"})," ",(0,s.jsx)(n.code,{children:"base-sepolia_archive"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["World Chain","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.world.org/world-chain/quick-start/info#world-chain-mainnet",children:"World Chain Mainnet"})," - configurations: ",(0,s.jsx)(n.code,{children:"worldchain-mainnet"})," ",(0,s.jsx)(n.code,{children:"worldchain-mainnet_archive"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.world.org/world-chain/quick-start/info#world-chain-sepolia-testnet",children:"World Chain Sepolia"})," (testnet) - configurations: ",(0,s.jsx)(n.code,{children:"worldchain-sepolia"})," ",(0,s.jsx)(n.code,{children:"worldchain-sepolia_archive"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["To run Nethermind on an OP Stack network, see ",(0,s.jsx)(n.a,{href:"/next/get-started/running-node/l2-networks#op-stack",children:"Layer 2 networks"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"taiko",children:"Taiko"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Supported networks"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.taiko.xyz/network-reference/rpc-configuration#taiko-alethia",children:"Taiko Alethia"})," - configurations: ",(0,s.jsx)(n.code,{children:"taiko-alethia"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.taiko.xyz/network-reference/rpc-configuration#taiko-hekla",children:"Taiko Hekla"})," (testnet) - configurations: ",(0,s.jsx)(n.code,{children:"taiko-hekla"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["To run Nethermind on Taiko, see ",(0,s.jsx)(n.a,{href:"/next/get-started/running-node/l2-networks#taiko",children:"Layer 2 networks"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"linea",children:"Linea"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Supported networks"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.linea.build/get-started/build/network-info",children:"Linea Mainnet"})," - configurations: ",(0,s.jsx)(n.code,{children:"linea-mainnet"})," ",(0,s.jsx)(n.code,{children:"linea-mainnet_archive"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.linea.build/get-started/build/network-info",children:"Linea Sepolia"})," (testnet) - configurations: ",(0,s.jsx)(n.code,{children:"linea-sepolia"})," ",(0,s.jsx)(n.code,{children:"linea-sepolia_archive"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"To run Nethermind on Linea, use the respective network configuration. For instance:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nethermind \\\n  -c linea-mainnet \\\n  --data-dir path/to/data/dir\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For more info about running a Linea node, see the ",(0,s.jsx)(n.a,{href:"https://docs.linea.build/get-started/how-to/run-a-node",children:"Linea documentation"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"energy-web-chain",children:"Energy Web Chain"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Supported networks"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://energy-web-foundation.gitbook.io/energy-web/ew-dos-technology-components-2023/trust-layer-energy-web-chain",children:"Energy Web"})," - configurations: ",(0,s.jsx)(n.code,{children:"energyweb"})," ",(0,s.jsx)(n.code,{children:"energyweb_archive"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://energy-web-foundation.gitbook.io/energy-web/ew-dos-technology-components-2023/trust-layer-energy-web-chain/ewc-guides-and-tutorials/testnet-and-mainnet#developing-on-volta-test-network",children:"Volta"})," (testnet) - configurations: ",(0,s.jsx)(n.code,{children:"volta"})," ",(0,s.jsx)(n.code,{children:"volta_archive"})]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"As the Energy Web Chain is an Aura-based network, running a node does not require a consensus client."})}),"\n",(0,s.jsxs)(n.p,{children:["To run Nethermind on the Energy Web Chain, see the ",(0,s.jsx)(n.a,{href:"https://energy-web-foundation.gitbook.io/energy-web/ew-dos-technology-components-2023/trust-layer-energy-web-chain/ewc-guides-and-tutorials/running-a-local-node",children:"Energy Web Chain documentation"}),"."]})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var t=i(6540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);