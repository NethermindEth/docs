"use strict";(self.webpackChunknethermind_docs=self.webpackChunknethermind_docs||[]).push([[1084],{601:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var s=t(4848),i=t(8453);const r={sidebar_label:"FAQ",sidebar_position:7},o="FAQ",d={id:"faq",title:"faq",description:"This article is outdated and requires a revision.",source:"@site/versioned_docs/version-1.27.0/faq.md",sourceDirName:".",slug:"/faq",permalink:"/1.27.0/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/versioned_docs/version-1.27.0/faq.md",tags:[],version:"1.27.0",lastUpdatedAt:17299516e5,sidebarPosition:7,frontMatter:{sidebar_label:"FAQ",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Custom analytic tools",permalink:"/1.27.0/developers/custom-analytic-tools"},next:{title:"Troubleshooting",permalink:"/1.27.0/troubleshooting"}},a={},h=[{value:"How do I upgrade my node?",id:"how-do-i-upgrade-my-node",level:2},{value:"Upgrading Nethermind for Docker users",id:"upgrading-nethermind-for-docker-users",level:3},{value:"Upgrading Nethermind for Systemd users",id:"upgrading-nethermind-for-systemd-users",level:3},{value:"Upgrading Nethermind when running as a background process",id:"upgrading-nethermind-when-running-as-a-background-process",level:3},{value:"What is the minimum viable config to serve ETH2 validator requests?",id:"what-is-the-minimum-viable-config-to-serve-eth2-validator-requests",level:2},{value:"Can I disable logging to file?",id:"can-i-disable-logging-to-file",level:2},{value:"Can I disable logging of JSON RPC calls?",id:"can-i-disable-logging-of-json-rpc-calls",level:2},{value:"How can I configure a validator?",id:"how-can-i-configure-a-validator",level:2},{value:"My network bandwidth is used up by the Nethermind node",id:"my-network-bandwidth-is-used-up-by-the-nethermind-node",level:2},{value:"Is my node synced?",id:"is-my-node-synced",level:2},{value:"I want to run two or more nodes on one machine. How can I achieve this?",id:"i-want-to-run-two-or-more-nodes-on-one-machine-how-can-i-achieve-this",level:2}];function l(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"This article is outdated and requires a revision."})}),"\n",(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"faq",children:"FAQ"})}),"\n",(0,s.jsx)(n.h2,{id:"how-do-i-upgrade-my-node",children:"How do I upgrade my node?"}),"\n",(0,s.jsx)(n.h3,{id:"upgrading-nethermind-for-docker-users",children:"Upgrading Nethermind for Docker users"}),"\n",(0,s.jsxs)(n.p,{children:["Pull the latest version of Nethermind using the ",(0,s.jsx)(n.code,{children:"latest"})," tag. You can find specific tag\nat ",(0,s.jsx)(n.a,{href:"https://hub.docker.com/r/nethermind/nethermind/tags",children:"Docker Hub"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"docker pull nethermind/nethermind:latest\n"})}),"\n",(0,s.jsxs)(n.p,{children:["or pull with docker-compose if the ",(0,s.jsx)(n.code,{children:"nethermind/nethermind:latest"})," base image is specified"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"docker-compose pull\n"})}),"\n",(0,s.jsx)(n.h3,{id:"upgrading-nethermind-for-systemd-users",children:"Upgrading Nethermind for Systemd users"}),"\n",(0,s.jsxs)(n.p,{children:["Simply download the latest Nethermind package either\nfrom ",(0,s.jsx)(n.a,{href:"https://downloads.nethermind.io/",children:"https://downloads.nethermind.io"}),"\nor ",(0,s.jsx)(n.a,{href:"https://github.com/NethermindEth/nethermind/releases",children:"https://github.com/NethermindEth/nethermind/releases"})," and make\nsure that the package is extracted in the ",(0,s.jsx)(n.code,{children:"WorkingDirectory"})," path defined in your ",(0,s.jsx)(n.code,{children:"systemd"})," service. Make sure to stop\nthe service before the upgrade and start it after."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-systemd",children:"WorkingDirectory=/home/nethermind/nethermind\n"})}),"\n",(0,s.jsx)(n.h3,{id:"upgrading-nethermind-when-running-as-a-background-process",children:"Upgrading Nethermind when running as a background process"}),"\n",(0,s.jsxs)(n.p,{children:["Download the latest Nethermind package either from ",(0,s.jsx)(n.a,{href:"https://downloads.nethermind.io/",children:"https://downloads.nethermind.io"}),"\nor ",(0,s.jsx)(n.a,{href:"https://github.com/NethermindEth/nethermind/releases",children:"https://github.com/NethermindEth/nethermind/releases"})," and\nextract the package in the folder you currently use for running Nethermind. Make sure the service is down before the\nupdate. Make sure to stop the service before the upgrade and start it after."]}),"\n",(0,s.jsx)(n.h2,{id:"what-is-the-minimum-viable-config-to-serve-eth2-validator-requests",children:"What is the minimum viable config to serve ETH2 validator requests?"}),"\n",(0,s.jsxs)(n.p,{children:["This config downloads a minimal amount of bodies and receipts to be able to serve ETH2 validator requests since the\ndeposit contract deployment. It also enables JSON RPC (",(0,s.jsx)(n.strong,{children:"important - make sure that you do not open firewall to the\noutside world!"}),")"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"nethermind --config mainnet --Init.BaseDbPath /your/db/path\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you have any issues, please reach out to us on Discord: ",(0,s.jsx)(n.a,{href:"https://discord.gg/X539yhn",children:"https://discord.gg/X539yhn"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"can-i-disable-logging-to-file",children:"Can I disable logging to file?"}),"\n",(0,s.jsxs)(n.p,{children:["You can find more details on the logging config page ",(0,s.jsx)(n.a,{href:"/1.27.0/fundamentals/logs",children:"here"})]}),"\n",(0,s.jsx)(n.h2,{id:"can-i-disable-logging-of-json-rpc-calls",children:"Can I disable logging of JSON RPC calls?"}),"\n",(0,s.jsxs)(n.p,{children:["You can find more details on the logging config page ",(0,s.jsx)(n.a,{href:"/1.27.0/fundamentals/logs",children:"here"})]}),"\n",(0,s.jsx)(n.h2,{id:"how-can-i-configure-a-validator",children:"How can I configure a validator?"}),"\n",(0,s.jsxs)(n.p,{children:["You can find more details on running validators ",(0,s.jsx)(n.a,{href:"/1.27.0/validators/",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"my-network-bandwidth-is-used-up-by-the-nethermind-node",children:"My network bandwidth is used up by the Nethermind node"}),"\n",(0,s.jsxs)(n.p,{children:["Try changing the config to a lower number (",(0,s.jsx)(n.code,{children:"--Network.ActivePeersMaxCount 25"}),")"]}),"\n",(0,s.jsx)(n.h2,{id:"is-my-node-synced",children:"Is my node synced?"}),"\n",(0,s.jsx)(n.p,{children:"Your node is synced when it shows log lines starting with:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Processed ..."})}),"\n",(0,s.jsx)(n.p,{children:"And the block numbers shown are at the head of the chain."}),"\n",(0,s.jsxs)(n.p,{children:["Also, to check if your node is synced, you may execute ",(0,s.jsx)(n.code,{children:"eth_syncing"})," call check its result"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"eth_syncing","params":[],"id":1}\' localhost:8545\n'})}),"\n",(0,s.jsxs)(n.p,{children:["If the result shows ",(0,s.jsx)(n.code,{children:"false"})," it means that your node is ",(0,s.jsx)(n.strong,{children:"synced"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'{"jsonrpc":"2.0","result":false,"id":1}\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"In blockchain, any node can never be 100% sure it is synced because there is no central source of truth - so your node\nis generally not able to tell you that it is synced but, it is able to tell you that it believes it is synced based on\nwhat it knows from the peers that it talks to)."})}),"\n",(0,s.jsx)(n.h2,{id:"i-want-to-run-two-or-more-nodes-on-one-machine-how-can-i-achieve-this",children:"I want to run two or more nodes on one machine. How can I achieve this?"}),"\n",(0,s.jsx)(n.p,{children:"You have to configure a few ports used by Nethermind."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Settings"}),(0,s.jsx)(n.th,{children:"Default Value"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"JsonRpc.EnginePort"}),(0,s.jsx)(n.td,{children:"8551"}),(0,s.jsx)(n.td,{children:"Remember to change it on your Consensus client."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"JsonRpc.Port"}),(0,s.jsx)(n.td,{children:"8545"}),(0,s.jsx)(n.td,{children:"Only needed if you are using standard JsonRpc"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"JsonRpc.WebSocketsPort"}),(0,s.jsx)(n.td,{children:"8545"}),(0,s.jsx)(n.td,{children:"By default same as the JsonRpc port. Only relevant when you use WebSockets"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Network.P2PPort"}),(0,s.jsx)(n.td,{children:"30303"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Network.DiscoveryPort"}),(0,s.jsx)(n.td,{children:"30303"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["The example of parameters that you have to pass to your second node when the first has been running with default\nsettings:",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"--JsonRpc.EnginePort 8552 --JsonRpc.Port 8546 --Network.P2PPort 30304 --Network.DiscoveryPort 30304"})]})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var s=t(6540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);