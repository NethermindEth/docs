"use strict";(self.webpackChunknethermind_docs=self.webpackChunknethermind_docs||[]).push([[587],{519:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=t(5893),s=t(1151);const i={title:"JSON-RPC server",sidebar_position:0},r=void 0,c={id:"interacting/json-rpc-server",title:"JSON-RPC server",description:"Interacting with Nethermind requires using the JSON-RPC 2.0 protocol. Nethermind provides JSON-RPC over HTTP,  WebSocket, and IPC socket transports. Each transport must be enabled with the respective configuration option, as shown below. For more details, see the JSON-RPC configuration options.",source:"@site/docs/interacting/json-rpc-server.md",sourceDirName:"interacting",slug:"/interacting/json-rpc-server",permalink:"/interacting/json-rpc-server",draft:!1,unlisted:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/interacting/json-rpc-server.md",tags:[],version:"current",lastUpdatedAt:1699128824,formattedLastUpdatedAt:"Nov 4, 2023",sidebarPosition:0,frontMatter:{title:"JSON-RPC server",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Private networks",permalink:"/fundamentals/private-networks"},next:{title:"admin",permalink:"/interacting/json-rpc-ns/admin"}},a={},d=[{value:"Transports",id:"transports",level:2},{value:"HTTP",id:"http",level:3},{value:"WebSocket",id:"websocket",level:3},{value:"IPC socket",id:"ipc-socket",level:3},{value:"Engine API",id:"engine-api",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Interacting with Nethermind requires using the JSON-RPC 2.0 protocol. Nethermind provides JSON-RPC over ",(0,o.jsx)(n.a,{href:"#http",children:"HTTP"}),",  ",(0,o.jsx)(n.a,{href:"#websocket",children:"WebSocket"}),", and ",(0,o.jsx)(n.a,{href:"#ipc-socket",children:"IPC socket"})," transports. Each transport must be enabled with the respective configuration option, as shown below. For more details, see the ",(0,o.jsx)(n.a,{href:"/fundamentals/configuration#jsonrpc",children:"JSON-RPC configuration options"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The JSON-RPC API methods are grouped into several categories (namespaces) depending on their purpose. All API method names are composed of the namespace and the actual method name in that namespace. For instance, the ",(0,o.jsx)(n.code,{children:"eth_call"})," method belongs to the ",(0,o.jsx)(n.code,{children:"eth"})," namespace. See the sidebar for all supported namespaces and methods."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Not all of the JSON-RPC namespaces are enabled by default. Instead, they must be enabled explicitly with the ",(0,o.jsx)(n.code,{children:"--JsonRpc.EnabledModules"})," command line option. Otherwise, error code ",(0,o.jsx)(n.code,{children:"-32600"})," is returned. The enabled namespaces can be found in the configuration file specified with the ",(0,o.jsx)(n.code,{children:"--config"})," command line option."]})}),"\n",(0,o.jsx)(n.h2,{id:"transports",children:"Transports"}),"\n",(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsx)(n.p,{children:"The right choice of transport depends on the specific use case."}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"HTTP is a familiar and idempotent transport that closes connections between requests and can, therefore, have lower overall overhead for a relatively low number of requests."}),"\n",(0,o.jsx)(n.li,{children:"WebSocket provides a continuous open channel that enables event subscriptions and streaming and handles large volumes of requests with more negligible per-message overhead."}),"\n",(0,o.jsx)(n.li,{children:"IPC is generally the most secure as it is limited to local interactions and cannot be exposed to external traffic. It can also be used for event subscriptions."}),"\n"]})]}),"\n",(0,o.jsx)(n.h3,{id:"http",children:"HTTP"}),"\n",(0,o.jsxs)(n.p,{children:["HTTP is the most widely used transport for Nethermind. To enable the HTTP server, use the ",(0,o.jsx)(n.code,{children:"--JsonRpc.Enabled true"})," command line option. By default, Nethermind uses local loopback (",(0,o.jsx)(n.code,{children:"127.0.0.1"})," or ",(0,o.jsx)(n.code,{children:"localhost"}),") and ",(0,o.jsx)(n.code,{children:"8545"})," port. To use a different host or port, set the ",(0,o.jsx)(n.code,{children:"--JsonRpc.Host"})," and ",(0,o.jsx)(n.code,{children:"--JsonRpc.Port"})," command line options, respectively."]}),"\n",(0,o.jsx)(n.h3,{id:"websocket",children:"WebSocket"}),"\n",(0,o.jsxs)(n.p,{children:["The configuration of the WebSocket server follows the same pattern as the HTTP server. The WebSocket server is enabled automatically when the HTTP server is enabled and uses the same host and port. To disable the WebSocket server, use the ",(0,o.jsx)(n.code,{children:"--Init.WebSocketsEnabled false"})," command line option. To use a different a port, set the ",(0,o.jsx)(n.code,{children:"--JsonRpc.WebSocketsPort"})," command line option."]}),"\n",(0,o.jsx)(n.h3,{id:"ipc-socket",children:"IPC socket"}),"\n",(0,o.jsxs)(n.p,{children:["Nethermind uses IPC based on Unix domain socket. To enable the IPC server, use the ",(0,o.jsx)(n.code,{children:"--JsonRpc.IpcUnixDomainSocketPath path/to/ipc"})," command line option. If the ",(0,o.jsx)(n.code,{children:"path/to/ipc"})," doesn't exist, Nethermind creates one."]}),"\n",(0,o.jsx)(n.h2,{id:"engine-api",children:"Engine API"}),"\n",(0,o.jsx)(n.p,{children:"The Engine API is a set of RPC methods that enable communication between an execution and consensus client. The clients call these methods automatically when they need to exchange information. Engine API is enabled automatically by default and is not designed to be exposed to the user."}),"\n",(0,o.jsxs)(n.p,{children:["By default, the Engine API uses local loopback (",(0,o.jsx)(n.code,{children:"127.0.0.1"})," or ",(0,o.jsx)(n.code,{children:"localhost"}),") and ",(0,o.jsx)(n.code,{children:"8551"})," port. To use a different host or port, set the ",(0,o.jsx)(n.code,{children:"--JsonRpc.EngineHost"})," and ",(0,o.jsx)(n.code,{children:"--JsonRpc.EnginePort"})," command line options, respectively. For example, this can be useful when execution and consensus clients are on different machines."]}),"\n",(0,o.jsx)(n.admonition,{title:"Important",type:"warning",children:(0,o.jsxs)(n.p,{children:["When the ",(0,o.jsx)(n.code,{children:"--JsonRpc.EngineHost"})," option is specified, the ",(0,o.jsx)(n.code,{children:"--JsonRpc.EnginePort"})," option must be specified as well."]})}),"\n",(0,o.jsxs)(n.p,{children:["The Engine API uses JWT authentication and requires a JWT secret. By default, Nethermind creates one at ",(0,o.jsx)(n.code,{children:"keystore/jwt-secret"})," path in its root directory. To use a different path, specify the ",(0,o.jsx)(n.code,{children:"--JsonRpc.JwtSecretFile path/to/jwt.hex"})," command line option."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var o=t(7294);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);