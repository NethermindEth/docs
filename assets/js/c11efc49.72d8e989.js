"use strict";(self.webpackChunknethermind_docs=self.webpackChunknethermind_docs||[]).push([[3597],{8016:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"developers/building-from-source","title":"Building from source","description":"The Nethermind\'s source code can be obtained from our repository on","source":"@site/versioned_docs/version-1.29.0/developers/building-from-source.md","sourceDirName":"developers","slug":"/developers/building-from-source","permalink":"/1.29.0/developers/building-from-source","draft":false,"unlisted":false,"editUrl":"https://github.com/NethermindEth/docs/tree/main/versioned_docs/version-1.29.0/developers/building-from-source.md","tags":[],"version":"1.29.0","lastUpdatedAt":1733931978000,"sidebarPosition":0,"frontMatter":{"title":"Building from source","sidebar_label":"Building from source","sidebar_position":0},"sidebar":"tutorialSidebar","previous":{"title":"Aura-based validators","permalink":"/1.29.0/validators/aura"},"next":{"title":"Plugins","permalink":"/1.29.0/developers/plugins"}}');var t=i(4848),s=i(8453);const d={title:"Building from source",sidebar_label:"Building from source",sidebar_position:0},o=void 0,l={},c=[{value:"Building standalone binaries",id:"building-standalone-binaries",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Building",id:"building",level:3},{value:"Running",id:"running",level:4},{value:"Testing",id:"testing",level:4},{value:"Bulding Docker image",id:"bulding-docker-image",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The Nethermind's source code can be obtained from ",(0,t.jsx)(n.a,{href:"https://github.com/NethermindEth/nethermind",children:"our repository"})," on\nGitHub:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone --recursive https://github.com/nethermindeth/nethermind.git\n"})}),"\n",(0,t.jsx)(n.p,{children:"There are two options buiding Nethermind from source code:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#building-standalone-binaries",children:"Standalone binaries"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#bulding-docker-image",children:"Docker image"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"building-standalone-binaries",children:"Building standalone binaries"}),"\n",(0,t.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.p,{children:["To build Nethermind from source, install ",(0,t.jsx)(n.a,{href:"https://dotnet.microsoft.com/en-us/download",children:".NET SDK"})," 8 or later."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"For a seamless experience, ensure your .NET SDK is up to date."})}),"\n",(0,t.jsx)(n.h3,{id:"building",children:"Building"}),"\n",(0,t.jsx)(n.p,{children:"To build both the client and tests, run the following command from the project's root directory:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"dotnet build src/Nethermind/Nethermind.sln -c release\n"})}),"\n",(0,t.jsx)(n.p,{children:"To simply run the client with a specific configuration without building tests, see below."}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Before running the client or tests, ensure the\nplatform-specific ",(0,t.jsx)(n.a,{href:"../get-started/installing-nethermind#prerequisites",children:"prerequisites"})," are met."]})}),"\n",(0,t.jsx)(n.h4,{id:"running",children:"Running"}),"\n",(0,t.jsx)(n.p,{children:"Nethermind can be launched immediately without compiling explicitly (thus, the previous step can be skipped). The following command builds Nethermind if needed and runs it:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd src/Nethermind/Nethermind.Runner\ndotnet run -c release -- -c mainnet\n"})}),"\n",(0,t.jsxs)(n.p,{children:["All Nethermind-specific parameters can be specified after ",(0,t.jsx)(n.code,{children:"--"}),". For instance, the command above specifies the Mainnet\nconfiguration only."]}),"\n",(0,t.jsxs)(n.p,{children:["The build artifacts can be found in the ",(0,t.jsx)(n.code,{children:"src/Nethermind/artifacts/bin/Nethermind.Runner/release"})," directory. By default, the logs and database directories are located here as well."]}),"\n",(0,t.jsxs)(n.p,{children:["For more info, see ",(0,t.jsx)(n.a,{href:"/1.29.0/get-started/running-node/",children:"Running a node"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"testing",children:"Testing"}),"\n",(0,t.jsx)(n.p,{children:"There are two test suites \u2014 Nethermind and Ethereum Foundation. Tests can be run with the following commands (the\ninitial step of the build is not required):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd src/Nethermind\n\n# Run Nethermind tests\ndotnet test Nethermind.sln -c release\n\n# Run Ethereum Foundation tests\ndotnet test EthereumTests.sln -c release\n"})}),"\n",(0,t.jsx)(n.h2,{id:"bulding-docker-image",children:"Bulding Docker image"}),"\n",(0,t.jsx)(n.p,{children:"Currently, there are three Docker images available in the project's root directory:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Dockerfile"}),": the default Nethermind Docker image."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Dockerfile.chiseled"}),": the rootless and ",(0,t.jsx)(n.a,{href:"https://ubuntu.com/engage/chiselled-ubuntu-images-for-containers",children:"chiseled"})," version of the Nethermind Docker image."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Dockerfile.diag"}),": the diagnostics image with pre-installed .NET diagnostic and tracing tools. This image is intended for internal use and is not distributed via public channels."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"All Docker images have the following optional arguments:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"BUILD_CONFIG"}),": the build configuration that is either ",(0,t.jsx)(n.code,{children:"release"})," or ",(0,t.jsx)(n.code,{children:"debug"}),". Defaults to ",(0,t.jsx)(n.code,{children:"release"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"BUILD_TIMESTAMP"}),": the build time as a Unix timestamp. Defaults to the current time."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"CI"}),": this is mostly used for CI builds determining whether the build is deterministic. Must be either ",(0,t.jsx)(n.code,{children:"true"})," or ",(0,t.jsx)(n.code,{children:"false"}),". Defaults to ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"COMMIT_HASH"}),": the Git commit hash to use as a part of the version string. Defaults to the latest commit hash."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Given the above, the following command builds the Nethermind chiseled Docker image from the project's root directory:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"build_timestamp=$(date '+%s')\ncommit_hash=$(git rev-parse HEAD)\n\ndocker build . \\\n  -f Dockerfile.chiseled \\\n  -t nethermind-chiseled \\\n  --build-arg BUILD_TIMESTAMP=$build_timestamp \\\n  --build-arg CI=true \\\n  --build-arg COMMIT_HASH=$commit_hash\n"})}),"\n",(0,t.jsx)(n.p,{children:"For quick testing images, the above arguments can be omitted if not needed:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker build . -t nethermind\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For more info about running Docker containers,\nsee ",(0,t.jsx)(n.a,{href:"../get-started/installing-nethermind#docker-container",children:"Installing Nethermind"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>o});var r=i(6540);const t={},s=r.createContext(t);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);