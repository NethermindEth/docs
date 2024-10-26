"use strict";(self.webpackChunknethermind_docs=self.webpackChunknethermind_docs||[]).push([[118],{8259:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>j,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var r=s(4848),i=s(8453),l=s(1470),t=s(9365);const c={title:"txpool namespace",sidebar_label:"txpool",sidebar_position:9},d=void 0,o={id:"interacting/json-rpc-ns/txpool",title:"txpool namespace",description:"txpool_content",source:"@site/versioned_docs/version-1.29.0/interacting/json-rpc-ns/txpool.md",sourceDirName:"interacting/json-rpc-ns",slug:"/interacting/json-rpc-ns/txpool",permalink:"/interacting/json-rpc-ns/txpool",draft:!1,unlisted:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/versioned_docs/version-1.29.0/interacting/json-rpc-ns/txpool.md",tags:[],version:"1.29.0",lastUpdatedAt:1729918648e3,sidebarPosition:9,frontMatter:{title:"txpool namespace",sidebar_label:"txpool",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"trace",permalink:"/interacting/json-rpc-ns/trace"},next:{title:"web3",permalink:"/interacting/json-rpc-ns/web3"}},a={},h=[{value:"txpool_content",id:"txpool_content",level:3},{value:"txpool_inspect",id:"txpool_inspect",level:3},{value:"txpool_status",id:"txpool_status",level:3}];function x(e){const n={code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"txpool_content",children:"txpool_content"}),"\n",(0,r.jsx)(n.p,{children:"Returns tx pool content."}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(t.A,{value:"request",label:"Request",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "txpool_content",\n      "params": []\n    }\'\n'})})}),(0,r.jsxs)(t.A,{value:"response",label:"Response",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"result"}),": ",(0,r.jsx)(n.em,{children:"object"})]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pending"}),": map of map of ",(0,r.jsx)(n.em,{children:"object"}),"\nmap of ",(0,r.jsx)(n.em,{children:"object"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"accessList"}),": array of ",(0,r.jsx)(n.em,{children:"object"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"address"}),": ",(0,r.jsx)(n.em,{children:"string"})," (address)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"storageKeys"}),": array of ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"blobVersionedHashes"}),": array of ",(0,r.jsx)(n.em,{children:"string"})," (hex data)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"blockHash"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hash)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"blockNumber"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"chainId"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"data"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex data)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"from"}),": ",(0,r.jsx)(n.em,{children:"string"})," (address)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gas"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gasPrice"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"hash"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hash)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"input"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex data)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"isSystemTx"}),": ",(0,r.jsx)(n.em,{children:"boolean"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"maxFeePerBlobGas"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"maxFeePerGas"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"maxPriorityFeePerGas"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"mint"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"nonce"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"r"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"s"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"sourceHash"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hash)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"to"}),": ",(0,r.jsx)(n.em,{children:"string"})," (address)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"transactionIndex"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"type"}),": ",(0,r.jsx)(n.em,{children:"integer"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"v"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"value"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"yParity"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"queued"}),": map of map of ",(0,r.jsx)(n.em,{children:"object"}),"\nmap of ",(0,r.jsx)(n.em,{children:"object"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"accessList"}),": array of ",(0,r.jsx)(n.em,{children:"object"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"address"}),": ",(0,r.jsx)(n.em,{children:"string"})," (address)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"storageKeys"}),": array of ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"blobVersionedHashes"}),": array of ",(0,r.jsx)(n.em,{children:"string"})," (hex data)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"blockHash"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hash)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"blockNumber"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"chainId"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"data"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex data)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"from"}),": ",(0,r.jsx)(n.em,{children:"string"})," (address)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gas"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gasPrice"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"hash"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hash)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"input"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex data)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"isSystemTx"}),": ",(0,r.jsx)(n.em,{children:"boolean"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"maxFeePerBlobGas"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"maxFeePerGas"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"maxPriorityFeePerGas"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"mint"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"nonce"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"r"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"s"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"sourceHash"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hash)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"to"}),": ",(0,r.jsx)(n.em,{children:"string"})," (address)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"transactionIndex"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"type"}),": ",(0,r.jsx)(n.em,{children:"integer"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"v"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"value"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"yParity"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n"]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"txpool_inspect",children:"txpool_inspect"}),"\n",(0,r.jsx)(n.p,{children:"Returns a detailed info on tx pool transactions."}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(t.A,{value:"request",label:"Request",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "txpool_inspect",\n      "params": []\n    }\'\n'})})}),(0,r.jsxs)(t.A,{value:"response",label:"Response",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"result"}),": ",(0,r.jsx)(n.em,{children:"object"})]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pending"}),": map of map of ",(0,r.jsx)(n.em,{children:"string"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"queued"}),": map of map of ",(0,r.jsx)(n.em,{children:"string"})]}),"\n"]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"txpool_status",children:"txpool_status"}),"\n",(0,r.jsx)(n.p,{children:"Returns a tx pool status."}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(t.A,{value:"request",label:"Request",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "txpool_status",\n      "params": []\n    }\'\n'})})}),(0,r.jsxs)(t.A,{value:"response",label:"Response",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"result"}),": ",(0,r.jsx)(n.em,{children:"object"})]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pending"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"queued"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n"]})]})]})]})}function j(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},9365:(e,n,s)=>{s.d(n,{A:()=>t});s(6540);var r=s(4164);const i={tabItem:"tabItem_Ymn6"};var l=s(4848);function t(e){let{children:n,hidden:s,className:t}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,t),hidden:s,children:n})}},1470:(e,n,s)=>{s.d(n,{A:()=>_});var r=s(6540),i=s(4164),l=s(3104),t=s(6347),c=s(205),d=s(7485),o=s(1682),a=s(679);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:r,default:i}}=e;return{value:n,label:s,attributes:r,default:i}}))}(s);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function j(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function u(e){let{queryString:n=!1,groupId:s}=e;const i=(0,t.W6)(),l=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,d.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(i.location.search);n.set(l,e),i.replace({...i.location,search:n.toString()})}),[l,i])]}function m(e){const{defaultValue:n,queryString:s=!1,groupId:i}=e,l=x(e),[t,d]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!j({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[o,h]=u({queryString:s,groupId:i}),[m,p]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,l]=(0,a.Dv)(s);return[i,(0,r.useCallback)((e=>{s&&l.set(e)}),[s,l])]}({groupId:i}),g=(()=>{const e=o??m;return j({value:e,tabValues:l})?e:null})();(0,c.A)((()=>{g&&d(g)}),[g]);return{selectedValue:t,selectValue:(0,r.useCallback)((e=>{if(!j({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),p(e)}),[h,p,l]),tabValues:l}}var p=s(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=s(4848);function f(e){let{className:n,block:s,selectedValue:r,selectValue:t,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.a_)(),a=e=>{const n=e.currentTarget,s=d.indexOf(n),i=c[s].value;i!==r&&(o(n),t(i))},h=e=>{let n=null;switch(e.key){case"Enter":a(e);break;case"ArrowRight":{const s=d.indexOf(e.currentTarget)+1;n=d[s]??d[0];break}case"ArrowLeft":{const s=d.indexOf(e.currentTarget)-1;n=d[s]??d[d.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":s},n),children:c.map((e=>{let{value:n,label:s,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>d.push(e),onKeyDown:h,onClick:a,...l,className:(0,i.A)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":r===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:l}=e;const t=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function y(e){const n=m(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,b.jsx)(f,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function _(e){const n=(0,p.A)();return(0,b.jsx)(y,{...e,children:h(e.children)},String(n))}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var r=s(6540);const i={},l=r.createContext(i);function t(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);