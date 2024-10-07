"use strict";(self.webpackChunknethermind_docs=self.webpackChunknethermind_docs||[]).push([[1492],{9908:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=i(4848),t=i(8453);const o={title:"Aura-based validators",sidebar_position:0},s=void 0,a={id:"validators/aura",title:"Aura-based validators",description:"This guide will walk you through configuring an Aura-based validator with Nethermind in a Docker container using the Energy Web chain as an example.",source:"@site/versioned_docs/version-1.29.0/validators/aura.md",sourceDirName:"validators",slug:"/validators/aura",permalink:"/validators/aura",draft:!1,unlisted:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/versioned_docs/version-1.29.0/validators/aura.md",tags:[],version:"1.29.0",lastUpdatedAt:1728311994e3,sidebarPosition:0,frontMatter:{title:"Aura-based validators",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Validators",permalink:"/validators/"},next:{title:"Building from source",permalink:"/developers/building-from-source"}},c={},d=[{value:"Configuring a Docker container",id:"configuring-a-docker-container",level:2},{value:"Configuring keyfile",id:"configuring-keyfile",level:2},{value:"Configuration settings",id:"configuration-settings",level:2},{value:"Running the validator",id:"running-the-validator",level:2}];function l(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This guide will walk you through configuring an Aura-based validator with Nethermind in a Docker container using the Energy Web chain as an example."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"Your machine's clock has to be synchronized. Otherwise, you might miss block sealing. By default, the block time is set to 5 seconds."})}),"\n",(0,r.jsx)(n.h2,{id:"configuring-a-docker-container",children:"Configuring a Docker container"}),"\n",(0,r.jsx)(n.p,{children:"The example below shows how to configure a Docker container for an Aura-based validator on the Energy Web chain:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="docker-compose.yml"',children:"services:\n  nethermind-validator:\n    image: nethermind/nethermind:latest\n    container_name: nethermind-validator\n    restart: unless-stopped\n    ports:\n      - 8545:8545\n      - 30303:30303\n    ulimits:\n      nofile:\n        soft: 1000000\n        hard: 1000000\n    environment:\n      - NETHERMIND_CONFIG=energyweb\n    volumes:\n      - ./keystore:/nethermind/keystore\n      - ./logs:/nethermind/logs\n      - ./nethermind_db:/nethermind/nethermind_db\n"})}),"\n",(0,r.jsx)(n.h2,{id:"configuring-keyfile",children:"Configuring keyfile"}),"\n",(0,r.jsxs)(n.p,{children:["Make sure that the keyfile name contains the public key (address). Otherwise, Nethermind doesn't recognize it as such.\nFor instance, a keyfile can be named ",(0,r.jsx)(n.code,{children:"key-0x1234567890123456789012345678901234567890"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The keyfile must be stored in the ",(0,r.jsx)(n.code,{children:"keystore"})," directory located in the Nethermind base data directory."]}),"\n",(0,r.jsx)(n.h2,{id:"configuration-settings",children:"Configuration settings"}),"\n",(0,r.jsx)(n.p,{children:"Here is an example of recommended settings for a validator. The most convenient way to configure these settings is either defining them in the configuration file or passing them as environment variables."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Init.IsMining"}),": ",(0,r.jsx)(n.code,{children:"true"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Init.MemoryHint"}),": Can be left unspecified. It's recommended to configure it accordingly to the machine specification(for Eneergy Web, 768000000 is enough)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"EthStats"})," namespace parameters if you want to report node status to Ethstats for your network."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Metrics"})," namespace parameters to enable node monitoring."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"KeyStore.PasswordFiles"}),": The  path to the file containing the password for the mining private key."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"KeyStore.UnlockAccounts"}),": An array of accounts. Provide the miner public address here."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"KeyStore.BlockAuthorAccount"}),": The miner public address should be provided here as well."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Aura.ForceSealing"}),": ",(0,r.jsx)(n.code,{children:"true"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Merge.Enabled"}),": ",(0,r.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Here's an example of above settings in the Energy Web configuration file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="energyweb.cfg"',children:'{\n  "Init": {\n    "ChainSpecPath": "chainspec/energyweb.json",\n    "GenesisHash": "0x0b6d3e680af2fc525392c720666cce58e3d8e6fe75ba4b48cb36bcc69039229b",\n    "BaseDbPath": "nethermind_db/energyweb",\n    "LogFileName": "energyweb.log",\n    "MemoryHint": 768000000\n  },\n  "Sync": {\n    "FastSync": true,\n    "PivotNumber": 26940000,\n    "PivotHash": "0x8835983de9578a4355313afd2a43d8eada6f2a4ddbd9c51da103e0d5f53c4d8b",\n    "PivotTotalDifficulty": "9167206964850082205703311924211835616257898274",\n    "FastBlocks": true,\n    "UseGethLimitsInFastBlocks": false,\n    "FastSyncCatchUpHeightDelta": 10000000000\n  },\n  "EthStats": {\n    "Enabled": true,\n    "Name": "Nethermind Energy Web",\n    "Secret": "secret...",\n    "Url": "ws://localhost:3000/api"\n  },\n  "Metrics": {\n    "Enabled": true,\n    "NodeName": "Energy Web",\n    "PushGatewayUrl": "http://localhost:9091/metrics"\n  },\n  "Mining": {\n    "MinGasPrice": 1\n  },\n  "Merge": {\n    "Enabled": false\n  },\n  "Aura": {\n    "ForceSealing": true\n  },\n  "KeyStore": {\n    "PasswordFiles": ["keystore/password"],\n    "UnlockAccounts": ["0x..."],\n    "BlockAuthorAccount": "0x..." \n  },\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"running-the-validator",children:"Running the validator"}),"\n",(0,r.jsxs)(n.p,{children:["The above Docker Compose file can be run from the directory the ",(0,r.jsx)(n.code,{children:"docker-compose.yml"})," is located in as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker compose up -d\n"})}),"\n",(0,r.jsx)(n.p,{children:"To check the logs and verify the sealing of blocks, run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker compose logs -f nethermind-validator\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>a});var r=i(6540);const t={},o=r.createContext(t);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);