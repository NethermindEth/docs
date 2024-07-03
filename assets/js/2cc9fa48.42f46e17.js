"use strict";(self.webpackChunknethermind_docs=self.webpackChunknethermind_docs||[]).push([[4365],{3154:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=s(4848),i=s(8453);const r={title:"Validators",sidebar_position:0},a=void 0,o={id:"validators/validators",title:"Validators",description:"General considerations",source:"@site/docs/validators/validators.md",sourceDirName:"validators",slug:"/validators/",permalink:"/next/validators/",draft:!1,unlisted:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/validators/validators.md",tags:[],version:"current",lastUpdatedAt:1720025064e3,sidebarPosition:0,frontMatter:{title:"Validators",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Health check",permalink:"/next/monitoring/health-check"},next:{title:"Aura-based validators",permalink:"/next/validators/aura"}},l={},d=[{value:"General considerations",id:"general-considerations",level:2},{value:"Hardware configurations",id:"hardware-configurations",level:2},{value:"On-premises",id:"on-premises",level:3},{value:"AWS",id:"aws",level:3},{value:"Azure",id:"azure",level:3},{value:"GCP",id:"gcp",level:3},{value:"Gnosis validators",id:"gnosis-validators",level:2}];function c(e){const n={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"general-considerations",children:"General considerations"}),"\n",(0,t.jsx)(n.admonition,{title:"Important",type:"warning",children:(0,t.jsxs)(n.p,{children:["Please check out the ",(0,t.jsx)(n.a,{href:"/next/fundamentals/security",children:"security considerations"})," before using Nethermind as a validator."]})}),"\n",(0,t.jsxs)(n.p,{children:["For Ethereum validators, we highly recommend checking out ",(0,t.jsx)(n.a,{href:"https://ethereum.org/staking",children:"Staking with Ethereum"})," and ",(0,t.jsx)(n.a,{href:"https://launchpad.ethereum.org/en/checklist",children:"Validator checklist"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"hardware-configurations",children:"Hardware configurations"}),"\n",(0,t.jsx)(n.p,{children:"The following hardware configurations for Ethereum Mainnet validators have been battle-tested by us and our users. We have observed excellent validator performance and stability with these configurations."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Before setting up your infrastructure, check out ",(0,t.jsx)(n.a,{href:"/next/get-started/system-requirements#hardware-requirements",children:"Nethermind hardware requirements"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"on-premises",children:"On-premises"}),"\n",(0,t.jsx)(n.p,{children:"A single validator on Intel NUC 11:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"CPU: Intel Core i7-1165G7"}),"\n",(0,t.jsx)(n.li,{children:"Memory: Crucial 32GB DDR4-3200 SODIMM"}),"\n",(0,t.jsx)(n.li,{children:"Storage: Samsung 980 PRO PCIe NVMe SSD 2TB"}),"\n",(0,t.jsx)(n.li,{children:"Internet speed: 620 Mbps download, 160 Mbps upload"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"aws",children:"AWS"}),"\n",(0,t.jsx)(n.p,{children:"Multiple validators on the following EC2 instances:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://aws.amazon.com/ec2/instance-types/m6i/",children:"m6i.2xlarge"}),": 8 vCPU, 32 GiB memory"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://aws.amazon.com/ec2/instance-types/m7g/",children:"m7g.2xlarge"}),": 8 vCPU, 32 GiB memory"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["These configurations have proven to work well for 1000-1500 validators and haven't been tested for more validators. Also, the validator clients have been separated from the consensus and execution clients and running on ",(0,t.jsx)(n.a,{href:"https://aws.amazon.com/ec2/instance-types/t4/",children:"t4g.small"})," instances."]}),"\n",(0,t.jsx)(n.h3,{id:"azure",children:"Azure"}),"\n",(0,t.jsx)(n.p,{children:"Multiple validators on the following VM instances:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/virtual-machines/dv5-dsv5-series#dv5-series",children:"Standard_D8_v5"}),": 8 vCPU, 32 GiB memory"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/virtual-machines/dpsv5-dpdsv5-series#dpsv5-series",children:"Standard_D8ps_v5"}),": 8 vCPU, 32 GiB memory"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["These configurations have proven to work well for 1000-1500 validators and haven't been tested for more validators. Also, the validator clients have been separated from the consensus and execution clients and running on ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/virtual-machines/dplsv5-dpldsv5-series#dplsv5-series",children:"Standard_D2pls_v5"})," instances."]}),"\n",(0,t.jsx)(n.h3,{id:"gcp",children:"GCP"}),"\n",(0,t.jsxs)(n.p,{children:["Multiple validators on the ",(0,t.jsx)(n.a,{href:"https://cloud.google.com/compute/docs/compute-optimized-machines#c2d-high-mem",children:"c2d-highmem-4"})," instance: 4 vCPU, 32 GB memory"]}),"\n",(0,t.jsxs)(n.p,{children:["These configurations have proven to work well for 1000-1500 validators and haven't been tested for more validators. Also, the validator clients have been separated from the consensus and execution clients and running on ",(0,t.jsx)(n.a,{href:"https://cloud.google.com/compute/docs/general-purpose-machines#sharedcore",children:"e2-small"})," instances."]}),"\n",(0,t.jsx)(n.h2,{id:"gnosis-validators",children:"Gnosis validators"}),"\n",(0,t.jsxs)(n.p,{children:["To set up a Gnosis Chain validator, you can either do that ",(0,t.jsx)(n.a,{href:"https://docs.gnosischain.com/node/manual/",children:"manually"})," or use one of the available ",(0,t.jsx)(n.a,{href:"https://docs.gnosischain.com/node/tools",children:"one-click tools"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var t=s(6540);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);