"use strict";(self.webpackChunknethermind_docs=self.webpackChunknethermind_docs||[]).push([[1431],{2120:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>j,frontMatter:()=>t,metadata:()=>d,toc:()=>u});var r=s(4848),l=s(8453),a=s(1470),i=s(9365);const t={title:"clique namespace",sidebar_label:"clique",sidebar_position:1},c=void 0,d={id:"interacting/json-rpc-ns/clique",title:"clique namespace",description:"clique_discard",source:"@site/versioned_docs/version-1.27.0/interacting/json-rpc-ns/clique.md",sourceDirName:"interacting/json-rpc-ns",slug:"/interacting/json-rpc-ns/clique",permalink:"/1.27.0/interacting/json-rpc-ns/clique",draft:!1,unlisted:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/versioned_docs/version-1.27.0/interacting/json-rpc-ns/clique.md",tags:[],version:"1.27.0",lastUpdatedAt:1728923e6,sidebarPosition:1,frontMatter:{title:"clique namespace",sidebar_label:"clique",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"admin",permalink:"/1.27.0/interacting/json-rpc-ns/admin"},next:{title:"debug",permalink:"/1.27.0/interacting/json-rpc-ns/debug"}},o={},u=[{value:"clique_discard",id:"clique_discard",level:3},{value:"clique_getBlockSigner",id:"clique_getblocksigner",level:3},{value:"clique_getSigners",id:"clique_getsigners",level:3},{value:"clique_getSignersAnnotated",id:"clique_getsignersannotated",level:3},{value:"clique_getSignersAtHash",id:"clique_getsignersathash",level:3},{value:"clique_getSignersAtHashAnnotated",id:"clique_getsignersathashannotated",level:3},{value:"clique_getSignersAtNumber",id:"clique_getsignersatnumber",level:3},{value:"clique_getSnapshot",id:"clique_getsnapshot",level:3},{value:"clique_getSnapshotAtHash",id:"clique_getsnapshotathash",level:3},{value:"clique_produceBlock",id:"clique_produceblock",level:3},{value:"clique_propose",id:"clique_propose",level:3}];function h(e){const n={code:"code",em:"em",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"clique_discard",children:"clique_discard"}),"\n",(0,r.jsx)(n.p,{children:"This method drops a currently running proposal. The signer will not cast further votes (either for or against) the address."}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(i.A,{value:"params",label:"Parameters",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"signer"}),": ",(0,r.jsx)(n.em,{children:"string"})," (address)"]}),"\n"]})}),(0,r.jsx)(i.A,{value:"request",label:"Request",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "clique_discard",\n      "params": [signer]\n    }\'\n'})})}),(0,r.jsxs)(i.A,{value:"response",label:"Response",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"result"}),": ",(0,r.jsx)(n.em,{children:"boolean"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"clique_getblocksigner",children:"clique_getBlockSigner"}),"\n",(0,r.jsx)(n.p,{children:"Retrieves the signer of the block with the given hash. Returns error of a block with the given hash does not exist."}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(i.A,{value:"params",label:"Parameters",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"hash"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hash)"]}),"\n"]})}),(0,r.jsx)(i.A,{value:"request",label:"Request",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "clique_getBlockSigner",\n      "params": [hash]\n    }\'\n'})})}),(0,r.jsxs)(i.A,{value:"response",label:"Response",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"result"}),": ",(0,r.jsx)(n.em,{children:"string"})," (address)"]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"clique_getsigners",children:"clique_getSigners"}),"\n",(0,r.jsx)(n.p,{children:"Retrieves the list of authorized signers."}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(i.A,{value:"request",label:"Request",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "clique_getSigners",\n      "params": []\n    }\'\n'})})}),(0,r.jsxs)(i.A,{value:"response",label:"Response",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"result"}),": array of ",(0,r.jsx)(n.em,{children:"string"})," (address)"]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"clique_getsignersannotated",children:"clique_getSignersAnnotated"}),"\n",(0,r.jsx)(n.p,{children:"Retrieves the list of authorized signers but with signer names instead of addresses"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(i.A,{value:"request",label:"Request",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "clique_getSignersAnnotated",\n      "params": []\n    }\'\n'})})}),(0,r.jsxs)(i.A,{value:"response",label:"Response",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"result"}),": array of ",(0,r.jsx)(n.em,{children:"string"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"clique_getsignersathash",children:"clique_getSignersAtHash"}),"\n",(0,r.jsx)(n.p,{children:"Retrieves the list of authorized signers at the specified block by hash."}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(i.A,{value:"params",label:"Parameters",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"hash"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hash)"]}),"\n"]})}),(0,r.jsx)(i.A,{value:"request",label:"Request",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "clique_getSignersAtHash",\n      "params": [hash]\n    }\'\n'})})}),(0,r.jsxs)(i.A,{value:"response",label:"Response",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"result"}),": array of ",(0,r.jsx)(n.em,{children:"string"})," (address)"]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"clique_getsignersathashannotated",children:"clique_getSignersAtHashAnnotated"}),"\n",(0,r.jsx)(n.p,{children:"Retrieves the list of authorized signers at the specified block by hash but with signer names instead of addresses"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(i.A,{value:"params",label:"Parameters",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"hash"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hash)"]}),"\n"]})}),(0,r.jsx)(i.A,{value:"request",label:"Request",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "clique_getSignersAtHashAnnotated",\n      "params": [hash]\n    }\'\n'})})}),(0,r.jsxs)(i.A,{value:"response",label:"Response",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"result"}),": array of ",(0,r.jsx)(n.em,{children:"string"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"clique_getsignersatnumber",children:"clique_getSignersAtNumber"}),"\n",(0,r.jsx)(n.p,{children:"Retrieves the list of authorized signers at the specified block by block number."}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(i.A,{value:"params",label:"Parameters",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"number"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n"]})}),(0,r.jsx)(i.A,{value:"request",label:"Request",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "clique_getSignersAtNumber",\n      "params": [number]\n    }\'\n'})})}),(0,r.jsxs)(i.A,{value:"response",label:"Response",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"result"}),": array of ",(0,r.jsx)(n.em,{children:"string"})," (address)"]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"clique_getsnapshot",children:"clique_getSnapshot"}),"\n",(0,r.jsx)(n.p,{children:"Retrieves a snapshot of all clique state at a given block."}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(i.A,{value:"request",label:"Request",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "clique_getSnapshot",\n      "params": []\n    }\'\n'})})}),(0,r.jsxs)(i.A,{value:"response",label:"Response",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"result"}),": ",(0,r.jsx)(n.em,{children:"object"})]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"hash"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hash)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"number"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"signerLimit"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"signers"}),": map of ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n"]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"clique_getsnapshotathash",children:"clique_getSnapshotAtHash"}),"\n",(0,r.jsx)(n.p,{children:"Retrieves the state snapshot at a given block."}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(i.A,{value:"params",label:"Parameters",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"hash"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hash)"]}),"\n"]})}),(0,r.jsx)(i.A,{value:"request",label:"Request",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "clique_getSnapshotAtHash",\n      "params": [hash]\n    }\'\n'})})}),(0,r.jsxs)(i.A,{value:"response",label:"Response",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"result"}),": ",(0,r.jsx)(n.em,{children:"object"})]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"hash"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hash)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"number"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"signerLimit"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"signers"}),": map of ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n"]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"clique_produceblock",children:"clique_produceBlock"}),"\n",(0,r.jsx)(n.p,{children:"Forces Clique block producer to produce a new block"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(i.A,{value:"params",label:"Parameters",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"parentHash"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hash)"]}),"\n"]})}),(0,r.jsx)(i.A,{value:"request",label:"Request",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "clique_produceBlock",\n      "params": [parentHash]\n    }\'\n'})})}),(0,r.jsxs)(i.A,{value:"response",label:"Response",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"result"}),": ",(0,r.jsx)(n.em,{children:"boolean"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"clique_propose",children:"clique_propose"}),"\n",(0,r.jsxs)(n.p,{children:["Adds a new authorization proposal that the signer will attempt to push through. If the ",(0,r.jsx)(n.code,{children:"vote"})," parameter is true, the local signer votes for the given address to be included in the set of authorized signers. With ",(0,r.jsx)(n.code,{children:"vote"})," set to false, the signer is against the address."]}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(i.A,{value:"params",label:"Parameters",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"signer"}),": ",(0,r.jsx)(n.em,{children:"string"})," (address)"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"vote"}),": ",(0,r.jsx)(n.em,{children:"boolean"})]}),"\n"]}),"\n"]})}),(0,r.jsx)(i.A,{value:"request",label:"Request",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "clique_propose",\n      "params": [signer, vote]\n    }\'\n'})})}),(0,r.jsxs)(i.A,{value:"response",label:"Response",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"result"}),": ",(0,r.jsx)(n.em,{children:"boolean"})]})]})]})]})}function j(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,n,s)=>{s.d(n,{A:()=>i});s(6540);var r=s(4164);const l={tabItem:"tabItem_Ymn6"};var a=s(4848);function i(e){let{children:n,hidden:s,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,i),hidden:s,children:n})}},1470:(e,n,s)=>{s.d(n,{A:()=>A});var r=s(6540),l=s(4164),a=s(3104),i=s(6347),t=s(205),c=s(7485),d=s(1682),o=s(679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:r,default:l}}=e;return{value:n,label:s,attributes:r,default:l}}))}(s);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function j(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:s}=e;const l=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,c.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(l.location.search);n.set(a,e),l.replace({...l.location,search:n.toString()})}),[a,l])]}function x(e){const{defaultValue:n,queryString:s=!1,groupId:l}=e,a=h(e),[i,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!j({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[d,u]=p({queryString:s,groupId:l}),[x,g]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,a]=(0,o.Dv)(s);return[l,(0,r.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:l}),m=(()=>{const e=d??x;return j({value:e,tabValues:a})?e:null})();(0,t.A)((()=>{m&&c(m)}),[m]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!j({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),g(e)}),[u,g,a]),tabValues:a}}var g=s(2303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=s(4848);function v(e){let{className:n,block:s,selectedValue:r,selectValue:i,tabValues:t}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),o=e=>{const n=e.currentTarget,s=c.indexOf(n),l=t[s].value;l!==r&&(d(n),i(l))},u=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":s},n),children:t.map((e=>{let{value:n,label:s,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:u,onClick:o,...a,className:(0,l.A)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":r===n}),children:s??n},n)}))})}function f(e){let{lazy:n,children:s,selectedValue:a}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function q(e){const n=x(e);return(0,b.jsxs)("div",{className:(0,l.A)("tabs-container",m.tabList),children:[(0,b.jsx)(v,{...n,...e}),(0,b.jsx)(f,{...n,...e})]})}function A(e){const n=(0,g.A)();return(0,b.jsx)(q,{...e,children:u(e.children)},String(n))}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>t});var r=s(6540);const l={},a=r.createContext(l);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);