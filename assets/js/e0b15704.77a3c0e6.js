"use strict";(self.webpackChunknethermind_docs=self.webpackChunknethermind_docs||[]).push([[3011],{3409:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var r=t(4848),s=t(8453);const i={title:"Grafana and Prometheus",sidebar_position:0},a=void 0,o={id:"monitoring/metrics/grafana-and-prometheus",title:"Grafana and Prometheus",description:"This guide will walk you through setting up a local metrics infrastructure using Grafana and Prometheus.",source:"@site/versioned_docs/version-1.29.0/monitoring/metrics/grafana-and-prometheus.md",sourceDirName:"monitoring/metrics",slug:"/monitoring/metrics/grafana-and-prometheus",permalink:"/monitoring/metrics/grafana-and-prometheus",draft:!1,unlisted:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/versioned_docs/version-1.29.0/monitoring/metrics/grafana-and-prometheus.md",tags:[],version:"1.29.0",lastUpdatedAt:17299516e5,sidebarPosition:0,frontMatter:{title:"Grafana and Prometheus",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Metrics",permalink:"/monitoring/metrics/"},next:{title:"dotnet-counters",permalink:"/monitoring/metrics/dotnet-counters"}},c={},h=[{value:"Step 1: Set up Grafana and Prometheus",id:"step-1-set-up-grafana-and-prometheus",level:2},{value:"Step 2: Run the stack",id:"step-2-run-the-stack",level:2},{value:"Step 3: Run Nethermind",id:"step-3-run-nethermind",level:2}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["This guide will walk you through setting up a local metrics infrastructure using ",(0,r.jsx)(n.a,{href:"https://grafana.com",children:"Grafana"})," and ",(0,r.jsx)(n.a,{href:"https://prometheus.io",children:"Prometheus"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"step-1-set-up-grafana-and-prometheus",children:"Step 1: Set up Grafana and Prometheus"}),"\n",(0,r.jsxs)(n.p,{children:["To simplify the process, we will use the ",(0,r.jsx)(n.a,{href:"https://github.com/NethermindEth/metrics-infrastructure",children:"metrics-infrastructure"})," repository, which contains the necessary configuration files to run Grafana and Prometheus in a Docker container. However, you can also set up Grafana and Prometheus manually the way it fits your specific needs."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/NethermindEth/metrics-infrastructure.git\n"})}),"\n",(0,r.jsx)(n.h2,{id:"step-2-run-the-stack",children:"Step 2: Run the stack"}),"\n",(0,r.jsx)(n.p,{children:"After cloning the repository, navigate to its root directory and run the containers using Docker Compose as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker compose up\n"})}),"\n",(0,r.jsx)(n.p,{children:"Once the stack is running, you can access the following services:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Grafana"}),": ",(0,r.jsx)(n.a,{href:"http://localhost:3000",children:"localhost:3000"}),(0,r.jsx)(n.br,{}),"\n","Use ",(0,r.jsx)(n.code,{children:"admin"})," for both the username and password. When asked for a password change, you may skip it. Then, navigate to Dashboards > Nethermind Dashboard."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Prometheus"}),": ",(0,r.jsx)(n.a,{href:"http://localhost:9090",children:"localhost:9090"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Pushgateway"}),": ",(0,r.jsx)(n.a,{href:"http://localhost:9091",children:"localhost:9091"}),(0,r.jsx)(n.br,{}),"\n","To specify another endpoint for the Pushgateway, use the ",(0,r.jsx)(n.a,{href:"/fundamentals/configuration#metrics-pushgatewayurl",children:(0,r.jsx)(n.code,{children:"Metrics.PushGatewayUrl"})})," configuration option."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"step-3-run-nethermind",children:"Step 3: Run Nethermind"}),"\n",(0,r.jsxs)(n.p,{children:["To enable metrics in Nethermind, set the ",(0,r.jsx)(n.a,{href:"/fundamentals/configuration#metrics-enabled",children:(0,r.jsx)(n.code,{children:"Metrics.Enabled"})})," configuration option to ",(0,r.jsx)(n.code,{children:"true"}),". For more options, see the ",(0,r.jsx)(n.a,{href:"/fundamentals/configuration#metrics",children:"Metrics"})," configuration section."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/get-started/running-node/",children:"Running a node"})," for more information on how to run Nethermind."]})}),"\n",(0,r.jsx)(n.p,{children:"Run Nethermind as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"nethermind \\\n  -c mainnet \\\n  -dd path/to/data/dir \\\n  --Metrics.Enabled true \\\n  --Metrics.PushGatewayUrl http://localhost:9091\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Alternatively, you may add the ",(0,r.jsx)(n.code,{children:"nethermind"})," service to the ",(0,r.jsx)(n.code,{children:"docker-compose.yml"})," file in the repository root to run everything altogether:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="docker-compose.yml"',children:"nethermind:\n  image: nethermind/nethermind:latest\n  container_name: nethermind\n  restart: unless-stopped\n  links:\n    - pushgateway\n  depends_on:\n    - pushgateway\n  ports:\n    - 8545:8545\n    - 8551:8551\n    - 30303:30303\n  ulimits:\n    nofile:\n      soft: 1000000\n      hard: 1000000\n  command: -c mainnet --Metrics.Enabled true --Metrics.PushGatewayUrl http://pushgateway:9091\n  volumes:\n    - ./keystore:/nethermind/keystore\n    - ./logs:/nethermind/logs\n    - ./nethermind_db:/nethermind/nethermind_db\n  networks:\n    - metrics\n"})}),"\n",(0,r.jsx)(n.p,{children:"In this case, you may want to configure your consensus client similarly."})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(6540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);