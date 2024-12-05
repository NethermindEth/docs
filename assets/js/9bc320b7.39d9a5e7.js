"use strict";(self.webpackChunknethermind_docs=self.webpackChunknethermind_docs||[]).push([[6015],{2976:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>j,frontMatter:()=>d,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"interacting/json-rpc-ns/admin","title":"admin namespace","description":"admin_addPeer","source":"@site/versioned_docs/version-1.26.0/interacting/json-rpc-ns/admin.md","sourceDirName":"interacting/json-rpc-ns","slug":"/interacting/json-rpc-ns/admin","permalink":"/1.26.0/interacting/json-rpc-ns/admin","draft":false,"unlisted":false,"editUrl":"https://github.com/NethermindEth/docs/tree/main/versioned_docs/version-1.26.0/interacting/json-rpc-ns/admin.md","tags":[],"version":"1.26.0","lastUpdatedAt":1733413863000,"sidebarPosition":0,"frontMatter":{"title":"admin namespace","sidebar_label":"admin","sidebar_position":0},"sidebar":"tutorialSidebar","previous":{"title":"JSON-RPC server","permalink":"/1.26.0/interacting/json-rpc-server"},"next":{"title":"clique","permalink":"/1.26.0/interacting/json-rpc-ns/clique"}}');var l=s(4848),i=s(8453),a=s(1470),t=s(9365);const d={title:"admin namespace",sidebar_label:"admin",sidebar_position:0},c=void 0,o={},u=[{value:"admin_addPeer",id:"admin_addpeer",level:3},{value:"admin_nodeInfo",id:"admin_nodeinfo",level:3},{value:"admin_peers",id:"admin_peers",level:3},{value:"admin_prune",id:"admin_prune",level:3},{value:"admin_removePeer",id:"admin_removepeer",level:3}];function h(e){const n={code:"code",em:"em",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h3,{id:"admin_addpeer",children:"admin_addPeer"}),"\n",(0,l.jsx)(n.p,{children:"Adds given node."}),"\n",(0,l.jsxs)(a.A,{children:[(0,l.jsx)(t.A,{value:"params",label:"Parameters",children:(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"enode"}),": ",(0,l.jsx)(n.em,{children:"string"})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"addToStaticNodes"}),": ",(0,l.jsx)(n.em,{children:"boolean"})]}),"\n"]}),"\n"]})}),(0,l.jsx)(t.A,{value:"request",label:"Request",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "admin_addPeer",\n      "params": [enode, addToStaticNodes]\n    }\'\n'})})}),(0,l.jsxs)(t.A,{value:"response",label:"Response",children:[(0,l.jsx)(n.p,{children:"Added node"}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"result"}),": ",(0,l.jsx)(n.em,{children:"string"})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"admin_nodeinfo",children:"admin_nodeInfo"}),"\n",(0,l.jsx)(n.p,{children:"Displays relevant information about this node."}),"\n",(0,l.jsxs)(a.A,{children:[(0,l.jsx)(t.A,{value:"request",label:"Request",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "admin_nodeInfo",\n      "params": []\n    }\'\n'})})}),(0,l.jsxs)(t.A,{value:"response",label:"Response",children:[(0,l.jsx)(n.p,{children:"Information about this node"}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"result"}),": ",(0,l.jsx)(n.em,{children:"object"})]}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"enode"}),": ",(0,l.jsx)(n.em,{children:"string"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"id"}),": ",(0,l.jsx)(n.em,{children:"string"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"ip"}),": ",(0,l.jsx)(n.em,{children:"string"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"listenAddress"}),": ",(0,l.jsx)(n.em,{children:"string"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"name"}),": ",(0,l.jsx)(n.em,{children:"string"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"ports"}),": ",(0,l.jsx)(n.em,{children:"object"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"discovery"}),": ",(0,l.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"listener"}),": ",(0,l.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"protocols"}),": map of ",(0,l.jsx)(n.em,{children:"object"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"difficulty"}),": ",(0,l.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"genesisHash"}),": ",(0,l.jsx)(n.em,{children:"string"})," (hash)"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"headHash"}),": ",(0,l.jsx)(n.em,{children:"string"})," (hash)"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"newtorkId"}),": ",(0,l.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n"]}),"\n"]}),"\n"]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"admin_peers",children:"admin_peers"}),"\n",(0,l.jsxs)(n.p,{children:["Displays a list of connected peers including information about them (",(0,l.jsx)(n.code,{children:"clientId"}),", ",(0,l.jsx)(n.code,{children:"host"}),", ",(0,l.jsx)(n.code,{children:"port"}),", ",(0,l.jsx)(n.code,{children:"address"}),", ",(0,l.jsx)(n.code,{children:"isBootnode"}),", ",(0,l.jsx)(n.code,{children:"isStatic"}),", ",(0,l.jsx)(n.code,{children:"enode"}),")."]}),"\n",(0,l.jsxs)(a.A,{children:[(0,l.jsx)(t.A,{value:"params",label:"Parameters",children:(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"includeDetails"}),": ",(0,l.jsx)(n.em,{children:"boolean"})]}),"\n"]})}),(0,l.jsx)(t.A,{value:"request",label:"Request",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "admin_peers",\n      "params": [includeDetails]\n    }\'\n'})})}),(0,l.jsxs)(t.A,{value:"response",label:"Response",children:[(0,l.jsx)(n.p,{children:"List of connected peers including information"}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"result"}),": array of ",(0,l.jsx)(n.em,{children:"object"})]}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"address"}),": ",(0,l.jsx)(n.em,{children:"string"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"clientId"}),": ",(0,l.jsx)(n.em,{children:"string"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"clientType"}),": ",(0,l.jsx)(n.em,{children:"string"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"enode"}),": ",(0,l.jsx)(n.em,{children:"string"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"ethDetails"}),": ",(0,l.jsx)(n.em,{children:"string"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"host"}),": ",(0,l.jsx)(n.em,{children:"string"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"isBootnode"}),": ",(0,l.jsx)(n.em,{children:"boolean"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"isStatic"}),": ",(0,l.jsx)(n.em,{children:"boolean"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"isTrusted"}),": ",(0,l.jsx)(n.em,{children:"boolean"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"lastSignal"}),": ",(0,l.jsx)(n.em,{children:"string"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"port"}),": ",(0,l.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n"]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"admin_prune",children:"admin_prune"}),"\n",(0,l.jsx)(n.p,{children:"Runs full pruning if enabled."}),"\n",(0,l.jsxs)(a.A,{children:[(0,l.jsx)(t.A,{value:"request",label:"Request",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "admin_prune",\n      "params": []\n    }\'\n'})})}),(0,l.jsxs)(t.A,{value:"response",label:"Response",children:[(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"result"}),": ",(0,l.jsx)(n.em,{children:"integer"})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"admin_removepeer",children:"admin_removePeer"}),"\n",(0,l.jsx)(n.p,{children:"Removes given node."}),"\n",(0,l.jsxs)(a.A,{children:[(0,l.jsx)(t.A,{value:"params",label:"Parameters",children:(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"enode"}),": ",(0,l.jsx)(n.em,{children:"string"})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"removeFromStaticNodes"}),": ",(0,l.jsx)(n.em,{children:"boolean"})]}),"\n"]}),"\n"]})}),(0,l.jsx)(t.A,{value:"request",label:"Request",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "admin_removePeer",\n      "params": [enode, removeFromStaticNodes]\n    }\'\n'})})}),(0,l.jsxs)(t.A,{value:"response",label:"Response",children:[(0,l.jsx)(n.p,{children:"Removed node"}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"result"}),": ",(0,l.jsx)(n.em,{children:"string"})]})]})]})]})}function j(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},9365:(e,n,s)=>{s.d(n,{A:()=>a});s(6540);var r=s(4164);const l={tabItem:"tabItem_Ymn6"};var i=s(4848);function a(e){let{children:n,hidden:s,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,a),hidden:s,children:n})}},1470:(e,n,s)=>{s.d(n,{A:()=>y});var r=s(6540),l=s(4164),i=s(3104),a=s(6347),t=s(205),d=s(7485),c=s(1682),o=s(679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:r,default:l}}=e;return{value:n,label:s,attributes:r,default:l}}))}(s);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function j(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:s}=e;const l=(0,a.W6)(),i=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,d.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(l.location.search);n.set(i,e),l.replace({...l.location,search:n.toString()})}),[i,l])]}function m(e){const{defaultValue:n,queryString:s=!1,groupId:l}=e,i=h(e),[a,d]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!j({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,u]=x({queryString:s,groupId:l}),[m,p]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,i]=(0,o.Dv)(s);return[l,(0,r.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:l}),b=(()=>{const e=c??m;return j({value:e,tabValues:i})?e:null})();(0,t.A)((()=>{b&&d(b)}),[b]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!j({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),p(e)}),[u,p,i]),tabValues:i}}var p=s(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(4848);function f(e){let{className:n,block:s,selectedValue:r,selectValue:a,tabValues:t}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),o=e=>{const n=e.currentTarget,s=d.indexOf(n),l=t[s].value;l!==r&&(c(n),a(l))},u=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const s=d.indexOf(e.currentTarget)+1;n=d[s]??d[0];break}case"ArrowLeft":{const s=d.indexOf(e.currentTarget)-1;n=d[s]??d[d.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":s},n),children:t.map((e=>{let{value:n,label:s,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>d.push(e),onKeyDown:u,onClick:o,...i,className:(0,l.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":r===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:i}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function _(e){const n=m(e);return(0,g.jsxs)("div",{className:(0,l.A)("tabs-container",b.tabList),children:[(0,g.jsx)(f,{...n,...e}),(0,g.jsx)(v,{...n,...e})]})}function y(e){const n=(0,p.A)();return(0,g.jsx)(_,{...e,children:u(e.children)},String(n))}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>t});var r=s(6540);const l={},i=r.createContext(l);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);