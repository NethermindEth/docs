"use strict";(self.webpackChunknethermind_docs=self.webpackChunknethermind_docs||[]).push([[7540],{501:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"fundamentals/security","title":"Security","description":"General security considerations","source":"@site/versioned_docs/version-1.28.0/fundamentals/security.md","sourceDirName":"fundamentals","slug":"/fundamentals/security","permalink":"/1.28.0/fundamentals/security","draft":false,"unlisted":false,"editUrl":"https://github.com/NethermindEth/docs/tree/main/versioned_docs/version-1.28.0/fundamentals/security.md","tags":[],"version":"1.28.0","lastUpdatedAt":1733413863000,"sidebarPosition":3,"frontMatter":{"title":"Security","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Sync","permalink":"/1.28.0/fundamentals/sync"},"next":{"title":"Logs","permalink":"/1.28.0/fundamentals/logs"}}');var r=n(4848),o=n(8453);const s={title:"Security",sidebar_position:3},c=void 0,a={},d=[{value:"General security considerations",id:"general-security-considerations",level:2},{value:"Networking security",id:"networking-security",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"general-security-considerations",children:"General security considerations"}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"Although Nethermind is thoroughly tested, the more popular it becomes, the more likely it will be a target of client-specific attacks. Generally, we recommend you always consider running backup client nodes from another developer for any critical operations."})}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["Enable only the ",(0,r.jsx)(t.a,{href:"/1.28.0/interacting/json-rpc-server",children:"JSON-RPC namespaces"})," you absolutely need. This is particularly important for namespaces like ",(0,r.jsx)(t.code,{children:"admin"})," and ",(0,r.jsx)(t.code,{children:"debug"}),", as they can be exploited to get elevated access to your node or for DOS attacks."]})}),"\n",(0,r.jsx)(t.admonition,{type:"danger",children:(0,r.jsx)(t.p,{children:"The private key the node id is derived from is stored on the disk as plaintext."})}),"\n",(0,r.jsx)(t.h2,{id:"networking-security",children:"Networking security"}),"\n",(0,r.jsxs)(t.p,{children:["These rules are ",(0,r.jsx)(t.strong,{children:"highly recommended"})," to be applied to your firewall:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Block all traffic to the port ",(0,r.jsx)(t.code,{children:"8545"}),", or whatever port is defined for JSON-RPC interface, except for traffic from explicitly defined trusted sources."]}),"\n",(0,r.jsxs)(t.li,{children:["Allow traffic to the TCP port ",(0,r.jsx)(t.code,{children:"30303"})," or whatever port is defined for P2P communication. This allows the node to connect to peers."]}),"\n",(0,r.jsxs)(t.li,{children:["Allow traffic to the UDP port ",(0,r.jsx)(t.code,{children:"30303"})," or whatever port ia defined for P2P communication. This allows node discovery."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var i=n(6540);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);