"use strict";(self.webpackChunknethermind_docs=self.webpackChunknethermind_docs||[]).push([[6494],{3495:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var r=i(5893),t=i(1151);const s={title:"Building from source",sidebar_label:"Building from source",sidebar_position:0},o=void 0,d={id:"developers/building-from-source",title:"Building from source",description:"The Nethermind's source code can be obtained from our repository on",source:"@site/docs/developers/building-from-source.md",sourceDirName:"developers",slug:"/developers/building-from-source",permalink:"/docs/developers/building-from-source",draft:!1,unlisted:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/developers/building-from-source.md",tags:[],version:"current",lastUpdatedAt:1698878579,formattedLastUpdatedAt:"Nov 1, 2023",sidebarPosition:0,frontMatter:{title:"Building from source",sidebar_label:"Building from source",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Aura Validator",permalink:"/docs/validators/aura-validator"},next:{title:"Plugins",permalink:"/docs/developers/plugins"}},l={},c=[{value:"Building standalone binaries",id:"building-standalone-binaries",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Building",id:"building",level:3},{value:"Running the client",id:"running-the-client",level:4},{value:"Testing",id:"testing",level:4},{value:"Bulding Docker image",id:"bulding-docker-image",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The Nethermind's source code can be obtained from ",(0,r.jsx)(n.a,{href:"https://github.com/NethermindEth/nethermind",children:"our repository"})," on\nGitHub:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone --recursive https://github.com/nethermindeth/nethermind.git\n"})}),"\n",(0,r.jsx)(n.p,{children:"There are two options buiding Nethermind from source code:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#building-standalone-binaries",children:"Standalone binaries"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#bulding-docker-image",children:"Docker image"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"building-standalone-binaries",children:"Building standalone binaries"}),"\n",(0,r.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.p,{children:["To build Nethermind from source, install ",(0,r.jsx)(n.a,{href:"https://dotnet.microsoft.com/en-us/download",children:".NET SDK"})," 7 or later."]}),"\n",(0,r.jsx)(n.h3,{id:"building",children:"Building"}),"\n",(0,r.jsx)(n.p,{children:"To build both the client and tests, run the following command from the project's root directory:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"dotnet build src/Nethermind/Nethermind.sln -c release\n"})}),"\n",(0,r.jsx)(n.p,{children:"To simply run the client with a specific configuration without building tests, see below."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Before running the client or tests, ensure the\nplatform-specific ",(0,r.jsx)(n.a,{href:"../get-started/installing-nethermind#prerequisites",children:"prerequisites"})," are met."]})}),"\n",(0,r.jsx)(n.h4,{id:"running-the-client",children:"Running the client"}),"\n",(0,r.jsx)(n.p,{children:"To launch the client, run the following command from the project's root directory (the previous step of the build is not\nrequired):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd src/Nethermind/Nethermind.Runner\ndotnet run -c release -- -c mainnet\n"})}),"\n",(0,r.jsxs)(n.p,{children:["All Nethermind-specific parameters can be specified after ",(0,r.jsx)(n.code,{children:"--"}),". For instance, the command above specifies the Mainnet\nconfiguration only."]}),"\n",(0,r.jsxs)(n.p,{children:["The build artifacts can be found in the ",(0,r.jsx)(n.code,{children:"bin/release/net7.0"})," directory. By default, the logs and database directories\nare located here as well."]}),"\n",(0,r.jsxs)(n.p,{children:["For more info about launching Nethermind, see the ",(0,r.jsx)(n.a,{href:"/docs/get-started/installing-nethermind#launching",children:"Launching"})," section."]}),"\n",(0,r.jsx)(n.h4,{id:"testing",children:"Testing"}),"\n",(0,r.jsx)(n.p,{children:"There are two test suites \u2014 Nethermind and Ethereum Foundation. Tests can be run with the following commands (the\ninitial step of the build is not required):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd src/Nethermind\n\n# Run Nethermind tests\ndotnet test Nethermind.sln -c release\n\n# Run Ethereum Foundation tests\ndotnet test EthereumTests.sln -c release\n"})}),"\n",(0,r.jsx)(n.h2,{id:"bulding-docker-image",children:"Bulding Docker image"}),"\n",(0,r.jsx)(n.p,{children:"To build Nethermind Docker image, run the following command from the project's root directory:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker build -t nethermind .\n"})}),"\n",(0,r.jsxs)(n.p,{children:["For more info about running Docker containers,\nsee ",(0,r.jsx)(n.a,{href:"../get-started/installing-nethermind#docker-container",children:"Installing Nethermind"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>o});var r=i(7294);const t={},s=r.createContext(t);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);