"use strict";(self.webpackChunknethermind_docs=self.webpackChunknethermind_docs||[]).push([[704],{1197:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=n(4848),o=n(8453);const r={title:"Private networks",description:"Use Kurtosis to deploy a private Ethereum devnet with Nethermind and any consensus client at any scale you need, wherever you need it.",sidebar_position:8},i=void 0,a={id:"fundamentals/private-networks",title:"Private networks",description:"Use Kurtosis to deploy a private Ethereum devnet with Nethermind and any consensus client at any scale you need, wherever you need it.",source:"@site/versioned_docs/version-1.27.0/fundamentals/private-networks.md",sourceDirName:"fundamentals",slug:"/fundamentals/private-networks",permalink:"/1.27.0/fundamentals/private-networks",draft:!1,unlisted:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/versioned_docs/version-1.27.0/fundamentals/private-networks.md",tags:[],version:"1.27.0",lastUpdatedAt:1728930686e3,sidebarPosition:8,frontMatter:{title:"Private networks",description:"Use Kurtosis to deploy a private Ethereum devnet with Nethermind and any consensus client at any scale you need, wherever you need it.",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Performance tuning",permalink:"/1.27.0/fundamentals/performance-tuning"},next:{title:"JSON-RPC server",permalink:"/1.27.0/interacting/json-rpc-server"}},c={},d=[{value:"Step 1: Prerequisites",id:"step-1-prerequisites",level:2},{value:"Step 2: Configure your network",id:"step-2-configure-your-network",level:2},{value:"Step 3: Deploy",id:"step-3-deploy",level:2},{value:"Step 4: Optional workflows",id:"step-4-optional-workflows",level:2},{value:"Simulating MEV workflows with <code>mev-boost</code>",id:"simulating-mev-workflows-with-mev-boost",level:3},{value:"Observability tools",id:"observability-tools",level:3},{value:"Deploying on Kubernetes",id:"deploying-on-kubernetes",level:3},{value:"Questions and feedback",id:"questions-and-feedback",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["This guide will walk you through using ",(0,s.jsxs)(t.a,{href:"https://github.com/ethpandaops/ethereum-package",children:["Kurtosis ",(0,s.jsx)(t.code,{children:"ethereum-package"})]})," to spin up a private, proof-of-stake (PoS) Ethereum devnet with three full Ethereum nodes locally over Docker. At the end of the guide, you will learn how to scale up your testnet on Kubernetes as well as enable optional services for your local testnet, such as network observability tools (e.g., Grafana, Prometheus) and Flashbot's ",(0,s.jsx)(t.code,{children:"mev-boost"})," infrastructure to simulate MEV workflows."]}),"\n",(0,s.jsx)(t.h2,{id:"step-1-prerequisites",children:"Step 1: Prerequisites"}),"\n",(0,s.jsxs)(t.p,{children:["Before you begin, ensure you have ",(0,s.jsx)(t.a,{href:"https://docs.kurtosis.com/install",children:"Kurtosis CLI"})," and ",(0,s.jsx)(t.a,{href:"https://docs.docker.com/get-docker",children:"Docker"})," installed. The ",(0,s.jsx)(t.a,{href:"https://github.com/ethpandaops/ethereum-package",children:(0,s.jsx)(t.code,{children:"ethereum-package"})})," is a Kurtosis environment definition known as a ",(0,s.jsx)(t.a,{href:"https://docs.kurtosis.com/concepts-reference/packages",children:"package"}),". For more info about Kurtosis, see the ",(0,s.jsx)(t.a,{href:"https://docs.kurtosis.com",children:"Kurtosis docs"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"step-2-configure-your-network",children:"Step 2: Configure your network"}),"\n",(0,s.jsxs)(t.p,{children:["Next, in your home directory, create a file with the name ",(0,s.jsx)(t.code,{children:"network_params.json"})," and populate it with the following contents:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",metastring:'title="network_params.json"',children:'{\n  "participants": [\n    {\n      "el_client_type": "nethermind",\n      "el_client_image": "nethermind/nethermind:latest",\n      "cl_client_type": "lighthouse",\n      "cl_client_image": "sigp/lighthouse:latest",\n      "count": 1\n    },\n    {\n      "el_client_type": "nethermind",\n      "el_client_image": "nethermind/nethermind:latest",\n      "cl_client_type": "teku",\n      "cl_client_image": "consensys/teku:latest",\n      "count": 1\n    },\n    {\n      "el_client_type": "nethermind",\n      "el_client_image": "nethermind/nethermind:latest",\n      "cl_client_type": "lodestar",\n      "cl_client_image": "chainsafe/lodestar:next",\n      "count": 1\n    }\n  ],\n  "mev_type": "None",\n  "launch_additional_services": false\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["As you can see above, you have effectively created a network configuration file that Kurtosis will use to pass in the necessary parameters at runtime for your network. Notice that the ",(0,s.jsx)(t.code,{children:"participant"})," key describes the execution and consensus client pairing desired for each full node and how many nodes of that type to instantiate."]}),"\n",(0,s.jsxs)(t.p,{children:["There are many other configurations and flags you can use, including metrics and observability tools (e.g., Grafana, Prometheus, etc). For all supported options, see the ",(0,s.jsx)(t.code,{children:"ethereum-package"})," ",(0,s.jsx)(t.a,{href:"https://github.com/ethpandaops/ethereum-package#configuration",children:"configuration"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"step-3-deploy",children:"Step 3: Deploy"}),"\n",(0,s.jsxs)(t.p,{children:["Finally, once you have saved the ",(0,s.jsx)(t.code,{children:"network_params.json"})," file, it is time to deploy the private net:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'kurtosis run github.com/ethpandaops/ethereum-package "$(cat ~/network_params.json)"\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Kurtosis will use the ",(0,s.jsx)(t.code,{children:"ethereum-package"})," environment definition and your custom network configuration (defined in ",(0,s.jsx)(t.code,{children:"network_params.json"}),") to spin up your network. Kurtosis will first spin up an ",(0,s.jsx)(t.a,{href:"https://docs.kurtosis.com/concepts-reference/enclaves",children:"enclave"})," (i.e., an ephemeral, isolated environment) and begin to configure and instantiate the nodes in your network. In the end, Kurtosis will print the services running in your enclave that form your private testnet alongside all the container ports and files that were generated and used to start up the private testnet."]}),"\n",(0,s.jsx)(t.p,{children:"Here is a sample output:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"INFO[2023-09-01T16:10:45-04:00] ====================================================\nINFO[2023-09-01T16:10:45-04:00] ||          Created enclave: timid-knoll          ||\nINFO[2023-09-01T16:10:45-04:00] ====================================================\nName:            timid-knoll\nUUID:            939dfb5d59b0\nStatus:          RUNNING\nCreation Time:   Fri, 01 Sep 2023 16:08:57 EDT\n\n========================================= Files Artifacts =========================================\nUUID           Name\na876b06035b7   1-lighthouse-nethermind-0-63\n87955ef69845   2-teku-nethermind-64-127\n4f77377da494   3-lodestar-nethermind-128-191\n9734313101e3   cl-genesis-data\n4164ed5c594c   el-genesis-data\na49a3d2774b5   genesis-generation-config-cl\n16fcc4f96236   genesis-generation-config-el\n5fc72346f646   geth-prefunded-keys\n96ae153a0b51   prysm-password\n\n========================================== User Services ==========================================\nUUID           Name                                       Ports                                         Status\nf369802ad2ae   cl-1-lighthouse-nethermind                 http: 4000/tcp -> http://127.0.0.1:49894      RUNNING\n                                                          metrics: 5054/tcp -> http://127.0.0.1:49892\n                                                          tcp-discovery: 9000/tcp -> 127.0.0.1:49893\n                                                          udp-discovery: 9000/udp -> 127.0.0.1:64949\n5e14eb26ef45   cl-1-lighthouse-nethermind-validator       http: 5042/tcp -> 127.0.0.1:49895             RUNNING\n                                                          metrics: 5064/tcp -> http://127.0.0.1:49896\nfed533d0e143   cl-2-teku-nethermind                       http: 4000/tcp -> 127.0.0.1:49899             RUNNING\n                                                          metrics: 8008/tcp -> 127.0.0.1:49897\n                                                          tcp-discovery: 9000/tcp -> 127.0.0.1:49898\n                                                          udp-discovery: 9000/udp -> 127.0.0.1:55521\n69cd832de246   cl-3-lodestar-nethermind                   http: 4000/tcp -> 127.0.0.1:49903             RUNNING\n                                                          metrics: 8008/tcp -> 127.0.0.1:49901\n                                                          tcp-discovery: 9000/tcp -> 127.0.0.1:49902\n                                                          udp-discovery: 9000/udp -> 127.0.0.1:50507\n75e3eec0c7d1   cl-3-lodestar-nethermind-validator         metrics: 8008/tcp -> 127.0.0.1:49904          RUNNING\ne10c3f07e0e0   el-1-nethermind-lighthouse                 engine-rpc: 8551/tcp -> 127.0.0.1:49872       RUNNING\n                                                          rpc: 8545/tcp -> 127.0.0.1:49870\n                                                          tcp-discovery: 30303/tcp -> 127.0.0.1:49869\n                                                          udp-discovery: 30303/udp -> 127.0.0.1:64508\n                                                          ws: 8546/tcp -> 127.0.0.1:49871\nc6a28d3136fe   el-2-nethermind-teku                       engine-rpc: 8551/tcp -> 127.0.0.1:49873       RUNNING\n                                                          rpc: 8545/tcp -> 127.0.0.1:49875\n                                                          tcp-discovery: 30303/tcp -> 127.0.0.1:49874\n                                                          udp-discovery: 30303/udp -> 127.0.0.1:52495\n                                                          ws: 8546/tcp -> 127.0.0.1:49876\n2fae3b3c41d3   el-3-nethermind-lodestar                   engine-rpc: 8551/tcp -> 127.0.0.1:49890       RUNNING\n                                                          rpc: 8545/tcp -> 127.0.0.1:49888\n                                                          tcp-discovery: 30303/tcp -> 127.0.0.1:49891\n                                                          udp-discovery: 30303/udp -> 127.0.0.1:62119\n                                                          ws: 8546/tcp -> 127.0.0.1:49889\n403cafe8416e   prelaunch-data-generator-cl-genesis-data   <none>                                        RUNNING\nebea71008cf4   prelaunch-data-generator-el-genesis-data   <none>                                        RUNNING\n"})}),"\n",(0,s.jsx)(t.p,{children:"And that is it! You now have a 3-node, private Ethereum devnet with Nethermind/Lodestar, Nethermind/Teku, and Nethermind/Lighthouse execution and consensus client combinations."}),"\n",(0,s.jsxs)(t.p,{children:["Notice how, at the end, Kurtosis will print out the contents of your enclave, which includes both the various ",(0,s.jsx)(t.a,{href:"https://docs.kurtosis.com/concepts-reference/files-artifacts",children:"files artifacts"})," and services that form your network. Kurtosis also maps the container ports to ephemeral local ports on your machine."]}),"\n",(0,s.jsxs)(t.p,{children:["Genesis data was generated using this ",(0,s.jsx)(t.a,{href:"https://github.com/ethpandaops/ethereum-genesis-generator",children:"genesis-generator"})," to bootstrap the execution and consensus clients for each node. The end result will be a private testnet with nodes deployed as Docker containers in an ephemeral, isolated environment on your machine called an ",(0,s.jsx)(t.a,{href:"https://docs.kurtosis.com/concepts-reference/enclaves",children:"enclave"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Kurtosis packages are modular, reproducible, and will work over Docker or Kubernetes. Read on to learn about additional services and configurations you may want to add to your private network."}),"\n",(0,s.jsx)(t.h2,{id:"step-4-optional-workflows",children:"Step 4: Optional workflows"}),"\n",(0,s.jsx)(t.p,{children:"This section briefly covers some optional configurations for your private devnet that are commonly used for validating and testing node-level behavior."}),"\n",(0,s.jsxs)(t.h3,{id:"simulating-mev-workflows-with-mev-boost",children:["Simulating MEV workflows with ",(0,s.jsx)(t.code,{children:"mev-boost"})]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"ethereum-package"})," can simulate out-of-protocol Proposer Builder Separation (PBS) workflows using Flashbot's ",(0,s.jsx)(t.code,{children:"mev-boost"})," infrastructure. With a single flag, you can configure your network's validators to be instantiated with ",(0,s.jsx)(t.code,{children:"mev-boost"})," and be registered with a relayer to receive payloads from builders."]}),"\n",(0,s.jsxs)(t.p,{children:["To enable this in your ",(0,s.jsx)(t.code,{children:"network_params.json"})," file, set ",(0,s.jsx)(t.code,{children:'"mev_type":'})," to ",(0,s.jsx)(t.code,{children:'"full"'})," or ",(0,s.jsx)(t.code,{children:'"mock"'}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["To learn more about how the ",(0,s.jsx)(t.code,{children:"mev-boost"})," infrastructure works with your private network, check out ",(0,s.jsx)(t.a,{href:"https://docs.kurtosis.com/how-to-full-mev-with-ethereum-package",children:"this guide"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"observability-tools",children:"Observability tools"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"ethereum-package"})," comes out of the box with a few observability tools, including:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"A Grafana and Prometheus instance"}),"\n",(0,s.jsxs)(t.li,{children:["A ",(0,s.jsx)(t.a,{href:"https://github.com/dapplion/beacon-metrics-gazer",children:"beacon metrics gazer service"})," to collect network-wide participation metrics"]}),"\n",(0,s.jsxs)(t.li,{children:["A ",(0,s.jsx)(t.a,{href:"https://github.com/ethDreamer/json_rpc_snoop",children:"JSON-RPC Snooper"})," to log responses & requests between the execution engine API and the consensus client"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["To add your own custom Grafana dashboard template, fork the ",(0,s.jsx)(t.code,{children:"ethereum-package"})," repository and add your configuration ",(0,s.jsx)(t.a,{href:"https://github.com/ethpandaops/ethereum-package/tree/main/static_files/grafana-config/dashboards",children:"here"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"deploying-on-kubernetes",children:"Deploying on Kubernetes"}),"\n",(0,s.jsxs)(t.p,{children:["As mentioned earlier, Kurtosis packages (i.e. environment definitions) are portable and will work the same way over Docker or on Kubernetes. Should you require a larger scale devnet, Kurtosis can deploy any package, including the ",(0,s.jsx)(t.code,{children:"ethereum-package"})," on Kubernetes, see ",(0,s.jsx)(t.a,{href:"https://docs.kurtosis.com/k8s",children:"Running Kurtosis in Kubernetes"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"questions-and-feedback",children:"Questions and feedback"}),"\n",(0,s.jsxs)(t.p,{children:["If you need help with your Nethermind full node in the private devnet, please don't hesitate to contact the Kurtosis team on ",(0,s.jsx)(t.a,{href:"https://github.com/ethpandaops/ethereum-package",children:"GitHub"})," or ",(0,s.jsx)(t.a,{href:"https://discord.gg/jJFG7XBqcY",children:"Discord"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var s=n(6540);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);