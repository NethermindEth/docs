"use strict";(self.webpackChunknethermind_docs=self.webpackChunknethermind_docs||[]).push([[762],{765:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>j,frontMatter:()=>t,metadata:()=>a,toc:()=>h});var s=r(4848),i=r(8453),l=r(1470),c=r(9365);const t={title:"proof namespace",sidebar_label:"proof",sidebar_position:7},d=void 0,a={id:"interacting/json-rpc-ns/proof",title:"proof namespace",description:"proof_getTransactionByHash",source:"@site/versioned_docs/version-v1.27.0/interacting/json-rpc-ns/proof.md",sourceDirName:"interacting/json-rpc-ns",slug:"/interacting/json-rpc-ns/proof",permalink:"/interacting/json-rpc-ns/proof",draft:!1,unlisted:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/versioned_docs/version-v1.27.0/interacting/json-rpc-ns/proof.md",tags:[],version:"v1.27.0",lastUpdatedAt:171899224e4,sidebarPosition:7,frontMatter:{title:"proof namespace",sidebar_label:"proof",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"personal",permalink:"/interacting/json-rpc-ns/personal"},next:{title:"trace",permalink:"/interacting/json-rpc-ns/trace"}},o={},h=[{value:"proof_getTransactionByHash",id:"proof_gettransactionbyhash",level:3},{value:"proof_getTransactionReceipt",id:"proof_gettransactionreceipt",level:3}];function x(e){const n={code:"code",em:"em",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"proof_gettransactionbyhash",children:"proof_getTransactionByHash"}),"\n",(0,s.jsxs)(n.p,{children:["This function returns the same result as ",(0,s.jsx)(n.code,{children:"eth_getTransactionReceipt"})," and also a tx proof, receipt proof and serialized block headers."]}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(c.A,{value:"params",label:"Parameters",children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"txHash"}),": ",(0,s.jsx)(n.em,{children:"string"})," (hash)"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"includeHeader"}),": ",(0,s.jsx)(n.em,{children:"boolean"})]}),"\n"]}),"\n"]})}),(0,s.jsx)(c.A,{value:"request",label:"Request",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "proof_getTransactionByHash",\n      "params": [txHash, includeHeader]\n    }\'\n'})})}),(0,s.jsxs)(c.A,{value:"response",label:"Response",children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"result"}),": ",(0,s.jsx)(n.em,{children:"object"})]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"blockHeader"}),": ",(0,s.jsx)(n.em,{children:"string"})," (hex data)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"transaction"}),": ",(0,s.jsx)(n.em,{children:"object"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"accessList"}),": array of ",(0,s.jsx)(n.em,{children:"object"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"address"}),": ",(0,s.jsx)(n.em,{children:"string"})," (address)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"storageKeys"}),": array of ",(0,s.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"blobVersionedHashes"}),": array of ",(0,s.jsx)(n.em,{children:"string"})," (hex data)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"blockHash"}),": ",(0,s.jsx)(n.em,{children:"string"})," (hash)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"blockNumber"}),": ",(0,s.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"chainId"}),": ",(0,s.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"data"}),": ",(0,s.jsx)(n.em,{children:"string"})," (hex data)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"from"}),": ",(0,s.jsx)(n.em,{children:"string"})," (address)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gas"}),": ",(0,s.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gasPrice"}),": ",(0,s.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"hash"}),": ",(0,s.jsx)(n.em,{children:"string"})," (hash)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"input"}),": ",(0,s.jsx)(n.em,{children:"string"})," (hex data)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"isSystemTx"}),": ",(0,s.jsx)(n.em,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"maxFeePerBlobGas"}),": ",(0,s.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"maxFeePerGas"}),": ",(0,s.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"maxPriorityFeePerGas"}),": ",(0,s.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"mint"}),": ",(0,s.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"nonce"}),": ",(0,s.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"r"}),": ",(0,s.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"s"}),": ",(0,s.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"sourceHash"}),": ",(0,s.jsx)(n.em,{children:"string"})," (hash)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"to"}),": ",(0,s.jsx)(n.em,{children:"string"})," (address)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"transactionIndex"}),": ",(0,s.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"type"}),": ",(0,s.jsx)(n.em,{children:"integer"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"v"}),": ",(0,s.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"value"}),": ",(0,s.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"yParity"}),": ",(0,s.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"txProof"}),": array of ",(0,s.jsx)(n.em,{children:"string"})," (hex data)"]}),"\n"]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"proof_gettransactionreceipt",children:"proof_getTransactionReceipt"}),"\n",(0,s.jsxs)(n.p,{children:["This function should return the same result as ",(0,s.jsx)(n.code,{children:"eth_call"})," and also proofs of all used accounts and their storages and serialized block headers."]}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(c.A,{value:"params",label:"Parameters",children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"txHash"}),": ",(0,s.jsx)(n.em,{children:"string"})," (hash)"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"includeHeader"}),": ",(0,s.jsx)(n.em,{children:"boolean"})]}),"\n"]}),"\n"]})}),(0,s.jsx)(c.A,{value:"request",label:"Request",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "proof_getTransactionReceipt",\n      "params": [txHash, includeHeader]\n    }\'\n'})})}),(0,s.jsxs)(c.A,{value:"response",label:"Response",children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"result"}),": ",(0,s.jsx)(n.em,{children:"object"})]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"blockHeader"}),": ",(0,s.jsx)(n.em,{children:"string"})," (hex data)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"receipt"}),": ",(0,s.jsx)(n.em,{children:"object"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"blobGasPrice"}),": ",(0,s.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"blobGasUsed"}),": ",(0,s.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"blockHash"}),": ",(0,s.jsx)(n.em,{children:"string"})," (hash)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"blockNumber"}),": ",(0,s.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"contractAddress"}),": ",(0,s.jsx)(n.em,{children:"string"})," (address)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cumulativeGasUsed"}),": ",(0,s.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"effectiveGasPrice"}),": ",(0,s.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"error"}),": ",(0,s.jsx)(n.em,{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"from"}),": ",(0,s.jsx)(n.em,{children:"string"})," (address)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gasUsed"}),": ",(0,s.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"logs"}),": array of ",(0,s.jsx)(n.em,{children:"object"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"address"}),": ",(0,s.jsx)(n.em,{children:"string"})," (address)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"blockHash"}),": ",(0,s.jsx)(n.em,{children:"string"})," (hash)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"blockNumber"}),": ",(0,s.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"data"}),": ",(0,s.jsx)(n.em,{children:"string"})," (hex data)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"logIndex"}),": ",(0,s.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"removed"}),": ",(0,s.jsx)(n.em,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"topics"}),": array of ",(0,s.jsx)(n.em,{children:"string"})," (hash)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"transactionHash"}),": ",(0,s.jsx)(n.em,{children:"string"})," (hash)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"transactionIndex"}),": ",(0,s.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"logsBloom"}),": ",(0,s.jsx)(n.em,{children:"string"})," (hex data)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"root"}),": ",(0,s.jsx)(n.em,{children:"string"})," (hash)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"status"}),": ",(0,s.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"to"}),": ",(0,s.jsx)(n.em,{children:"string"})," (address)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"transactionHash"}),": ",(0,s.jsx)(n.em,{children:"string"})," (hash)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"transactionIndex"}),": ",(0,s.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"type"}),": ",(0,s.jsx)(n.em,{children:"integer"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"receiptProof"}),": array of ",(0,s.jsx)(n.em,{children:"string"})," (hex data)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"txProof"}),": array of ",(0,s.jsx)(n.em,{children:"string"})," (hex data)"]}),"\n"]})]})]})]})}function j(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>c});r(6540);var s=r(4164);const i={tabItem:"tabItem_Ymn6"};var l=r(4848);function c(e){let{children:n,hidden:r,className:c}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,s.A)(i.tabItem,c),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>T});var s=r(6540),i=r(4164),l=r(3104),c=r(6347),t=r(205),d=r(7485),a=r(1682),o=r(679);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:i}}=e;return{value:n,label:r,attributes:s,default:i}}))}(r);return function(e){const n=(0,a.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function j(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function u(e){let{queryString:n=!1,groupId:r}=e;const i=(0,c.W6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,d.aZ)(l),(0,s.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(i.location.search);n.set(l,e),i.replace({...i.location,search:n.toString()})}),[l,i])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:i}=e,l=x(e),[c,d]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!j({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:l}))),[a,h]=u({queryString:r,groupId:i}),[m,g]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,l]=(0,o.Dv)(r);return[i,(0,s.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:i}),p=(()=>{const e=a??m;return j({value:e,tabValues:l})?e:null})();(0,t.A)((()=>{p&&d(p)}),[p]);return{selectedValue:c,selectValue:(0,s.useCallback)((e=>{if(!j({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),g(e)}),[h,g,l]),tabValues:l}}var g=r(2303);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(4848);function b(e){let{className:n,block:r,selectedValue:s,selectValue:c,tabValues:t}=e;const d=[],{blockElementScrollPositionUntilNextRender:a}=(0,l.a_)(),o=e=>{const n=e.currentTarget,r=d.indexOf(n),i=t[r].value;i!==s&&(a(n),c(i))},h=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;n=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;n=d[r]??d[d.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},n),children:t.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>d.push(e),onKeyDown:h,onClick:o,...l,className:(0,i.A)("tabs__item",p.tabItem,l?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:i}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=m(e);return(0,f.jsxs)("div",{className:(0,i.A)("tabs-container",p.tabList),children:[(0,f.jsx)(b,{...n,...e}),(0,f.jsx)(v,{...n,...e})]})}function T(e){const n=(0,g.A)();return(0,f.jsx)(y,{...e,children:h(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>t});var s=r(6540);const i={},l=s.createContext(i);function c(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);