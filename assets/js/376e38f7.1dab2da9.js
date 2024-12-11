"use strict";(self.webpackChunknethermind_docs=self.webpackChunknethermind_docs||[]).push([[7994],{2564:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>j,frontMatter:()=>c,metadata:()=>l,toc:()=>h});const l=JSON.parse('{"id":"interacting/json-rpc-ns/clique","title":"clique namespace","description":"clique_discard","source":"@site/docs/interacting/json-rpc-ns/clique.md","sourceDirName":"interacting/json-rpc-ns","slug":"/interacting/json-rpc-ns/clique","permalink":"/next/interacting/json-rpc-ns/clique","draft":false,"unlisted":false,"editUrl":"https://github.com/NethermindEth/docs/tree/main/docs/interacting/json-rpc-ns/clique.md","tags":[],"version":"current","lastUpdatedAt":1733931978000,"sidebarPosition":1,"frontMatter":{"title":"clique namespace","sidebar_label":"clique","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"admin","permalink":"/next/interacting/json-rpc-ns/admin"},"next":{"title":"debug","permalink":"/next/interacting/json-rpc-ns/debug"}}');var r=s(4848),i=s(8453),a=s(1470),t=s(9365);const c={title:"clique namespace",sidebar_label:"clique",sidebar_position:1},d=void 0,o={},h=[{value:"clique_discard",id:"clique_discard",level:3},{value:"clique_getBlockSigner",id:"clique_getblocksigner",level:3},{value:"clique_getSigners",id:"clique_getsigners",level:3},{value:"clique_getSignersAnnotated",id:"clique_getsignersannotated",level:3},{value:"clique_getSignersAtHash",id:"clique_getsignersathash",level:3},{value:"clique_getSignersAtHashAnnotated",id:"clique_getsignersathashannotated",level:3},{value:"clique_getSignersAtNumber",id:"clique_getsignersatnumber",level:3},{value:"clique_getSnapshot",id:"clique_getsnapshot",level:3},{value:"clique_getSnapshotAtHash",id:"clique_getsnapshotathash",level:3},{value:"clique_produceBlock",id:"clique_produceblock",level:3},{value:"clique_proposals",id:"clique_proposals",level:3},{value:"clique_propose",id:"clique_propose",level:3}];function u(e){const n={code:"code",em:"em",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"clique_discard",children:"clique_discard"}),"\n",(0,r.jsx)(n.p,{children:"This method drops a currently running proposal. The signer will not cast further votes (either for or against) the address."}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(t.A,{value:"params",label:"Parameters",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"signer"}),": ",(0,r.jsx)(n.em,{children:"string"})," (address)"]}),"\n"]})}),(0,r.jsx)(t.A,{value:"request",label:"Request",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "clique_discard",\n      "params": [signer]\n    }\'\n'})})}),(0,r.jsxs)(t.A,{value:"response",label:"Response",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"result"}),": ",(0,r.jsx)(n.em,{children:"boolean"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"clique_getblocksigner",children:"clique_getBlockSigner"}),"\n",(0,r.jsx)(n.p,{children:"Retrieves the signer of the block with the given hash. Returns error of a block with the given hash does not exist."}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(t.A,{value:"params",label:"Parameters",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"hash"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hash)"]}),"\n"]})}),(0,r.jsx)(t.A,{value:"request",label:"Request",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "clique_getBlockSigner",\n      "params": [hash]\n    }\'\n'})})}),(0,r.jsxs)(t.A,{value:"response",label:"Response",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"result"}),": ",(0,r.jsx)(n.em,{children:"string"})," (address)"]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"clique_getsigners",children:"clique_getSigners"}),"\n",(0,r.jsx)(n.p,{children:"Retrieves the list of authorized signers."}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(t.A,{value:"request",label:"Request",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "clique_getSigners",\n      "params": []\n    }\'\n'})})}),(0,r.jsxs)(t.A,{value:"response",label:"Response",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"result"}),": array of ",(0,r.jsx)(n.em,{children:"string"})," (address)"]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"clique_getsignersannotated",children:"clique_getSignersAnnotated"}),"\n",(0,r.jsx)(n.p,{children:"Retrieves the list of authorized signers but with signer names instead of addresses"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(t.A,{value:"request",label:"Request",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "clique_getSignersAnnotated",\n      "params": []\n    }\'\n'})})}),(0,r.jsxs)(t.A,{value:"response",label:"Response",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"result"}),": array of ",(0,r.jsx)(n.em,{children:"string"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"clique_getsignersathash",children:"clique_getSignersAtHash"}),"\n",(0,r.jsx)(n.p,{children:"Retrieves the list of authorized signers at the specified block by hash."}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(t.A,{value:"params",label:"Parameters",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"hash"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hash)"]}),"\n"]})}),(0,r.jsx)(t.A,{value:"request",label:"Request",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "clique_getSignersAtHash",\n      "params": [hash]\n    }\'\n'})})}),(0,r.jsxs)(t.A,{value:"response",label:"Response",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"result"}),": array of ",(0,r.jsx)(n.em,{children:"string"})," (address)"]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"clique_getsignersathashannotated",children:"clique_getSignersAtHashAnnotated"}),"\n",(0,r.jsx)(n.p,{children:"Retrieves the list of authorized signers at the specified block by hash but with signer names instead of addresses"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(t.A,{value:"params",label:"Parameters",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"hash"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hash)"]}),"\n"]})}),(0,r.jsx)(t.A,{value:"request",label:"Request",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "clique_getSignersAtHashAnnotated",\n      "params": [hash]\n    }\'\n'})})}),(0,r.jsxs)(t.A,{value:"response",label:"Response",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"result"}),": array of ",(0,r.jsx)(n.em,{children:"string"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"clique_getsignersatnumber",children:"clique_getSignersAtNumber"}),"\n",(0,r.jsx)(n.p,{children:"Retrieves the list of authorized signers at the specified block by block number."}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(t.A,{value:"params",label:"Parameters",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"number"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n"]})}),(0,r.jsx)(t.A,{value:"request",label:"Request",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "clique_getSignersAtNumber",\n      "params": [number]\n    }\'\n'})})}),(0,r.jsxs)(t.A,{value:"response",label:"Response",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"result"}),": array of ",(0,r.jsx)(n.em,{children:"string"})," (address)"]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"clique_getsnapshot",children:"clique_getSnapshot"}),"\n",(0,r.jsx)(n.p,{children:"Retrieves a snapshot of all clique state at a given block."}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(t.A,{value:"params",label:"Parameters",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"number"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n"]})}),(0,r.jsx)(t.A,{value:"request",label:"Request",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "clique_getSnapshot",\n      "params": [number]\n    }\'\n'})})}),(0,r.jsxs)(t.A,{value:"response",label:"Response",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"result"}),": ",(0,r.jsx)(n.em,{children:"object"})]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"hash"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hash)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"number"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"signerLimit"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"signers"}),": map of ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"tally"}),": map of ",(0,r.jsx)(n.em,{children:"object"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"authorize"}),": ",(0,r.jsx)(n.em,{children:"boolean"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"votes"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"votes"}),": array of ",(0,r.jsx)(n.em,{children:"object"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"address"}),": ",(0,r.jsx)(n.em,{children:"string"})," (address)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"authorize"}),": ",(0,r.jsx)(n.em,{children:"boolean"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"block"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"signer"}),": ",(0,r.jsx)(n.em,{children:"string"})," (address)"]}),"\n"]}),"\n"]}),"\n"]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"clique_getsnapshotathash",children:"clique_getSnapshotAtHash"}),"\n",(0,r.jsx)(n.p,{children:"Retrieves the state snapshot at a given block."}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(t.A,{value:"params",label:"Parameters",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"hash"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hash)"]}),"\n"]})}),(0,r.jsx)(t.A,{value:"request",label:"Request",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "clique_getSnapshotAtHash",\n      "params": [hash]\n    }\'\n'})})}),(0,r.jsxs)(t.A,{value:"response",label:"Response",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"result"}),": ",(0,r.jsx)(n.em,{children:"object"})]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"hash"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hash)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"number"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"signerLimit"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"signers"}),": map of ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"tally"}),": map of ",(0,r.jsx)(n.em,{children:"object"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"authorize"}),": ",(0,r.jsx)(n.em,{children:"boolean"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"votes"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"votes"}),": array of ",(0,r.jsx)(n.em,{children:"object"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"address"}),": ",(0,r.jsx)(n.em,{children:"string"})," (address)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"authorize"}),": ",(0,r.jsx)(n.em,{children:"boolean"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"block"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"signer"}),": ",(0,r.jsx)(n.em,{children:"string"})," (address)"]}),"\n"]}),"\n"]}),"\n"]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"clique_produceblock",children:"clique_produceBlock"}),"\n",(0,r.jsx)(n.p,{children:"Forces Clique block producer to produce a new block"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(t.A,{value:"params",label:"Parameters",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"parentHash"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hash)"]}),"\n"]})}),(0,r.jsx)(t.A,{value:"request",label:"Request",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "clique_produceBlock",\n      "params": [parentHash]\n    }\'\n'})})}),(0,r.jsxs)(t.A,{value:"response",label:"Response",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"result"}),": ",(0,r.jsx)(n.em,{children:"boolean"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"clique_proposals",children:"clique_proposals"}),"\n",(0,r.jsx)(n.p,{children:"Retrieves the current proposals the node is voting on."}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(t.A,{value:"request",label:"Request",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "clique_proposals",\n      "params": []\n    }\'\n'})})}),(0,r.jsxs)(t.A,{value:"response",label:"Response",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"result"}),": array of ",(0,r.jsx)(n.em,{children:"boolean"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"clique_propose",children:"clique_propose"}),"\n",(0,r.jsxs)(n.p,{children:["Adds a new authorization proposal that the signer will attempt to push through. If the ",(0,r.jsx)(n.code,{children:"vote"})," parameter is true, the local signer votes for the given address to be included in the set of authorized signers. With ",(0,r.jsx)(n.code,{children:"vote"})," set to false, the signer is against the address."]}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(t.A,{value:"params",label:"Parameters",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"signer"}),": ",(0,r.jsx)(n.em,{children:"string"})," (address)"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"vote"}),": ",(0,r.jsx)(n.em,{children:"boolean"})]}),"\n"]}),"\n"]})}),(0,r.jsx)(t.A,{value:"request",label:"Request",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "clique_propose",\n      "params": [signer, vote]\n    }\'\n'})})}),(0,r.jsxs)(t.A,{value:"response",label:"Response",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"result"}),": ",(0,r.jsx)(n.em,{children:"boolean"})]})]})]})]})}function j(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},9365:(e,n,s)=>{s.d(n,{A:()=>a});s(6540);var l=s(4164);const r={tabItem:"tabItem_Ymn6"};var i=s(4848);function a(e){let{children:n,hidden:s,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,l.A)(r.tabItem,a),hidden:s,children:n})}},1470:(e,n,s)=>{s.d(n,{A:()=>A});var l=s(6540),r=s(4164),i=s(3104),a=s(6347),t=s(205),c=s(7485),d=s(1682),o=s(679);function h(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,l.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:l,default:r}}=e;return{value:n,label:s,attributes:l,default:r}}))}(s);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function j(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:s}=e;const r=(0,a.W6)(),i=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,c.aZ)(i),(0,l.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function p(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,i=u(e),[a,c]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!j({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const l=s.find((e=>e.default))??s[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:i}))),[d,h]=x({queryString:s,groupId:r}),[p,g]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,o.Dv)(s);return[r,(0,l.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:r}),m=(()=>{const e=d??p;return j({value:e,tabValues:i})?e:null})();(0,t.A)((()=>{m&&c(m)}),[m]);return{selectedValue:a,selectValue:(0,l.useCallback)((e=>{if(!j({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),g(e)}),[h,g,i]),tabValues:i}}var g=s(2303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=s(4848);function v(e){let{className:n,block:s,selectedValue:l,selectValue:a,tabValues:t}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),o=e=>{const n=e.currentTarget,s=c.indexOf(n),r=t[s].value;r!==l&&(d(n),a(r))},h=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},n),children:t.map((e=>{let{value:n,label:s,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>c.push(e),onKeyDown:h,onClick:o,...i,className:(0,r.A)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":l===n}),children:s??n},n)}))})}function f(e){let{lazy:n,children:s,selectedValue:i}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===i));return e?(0,l.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function q(e){const n=p(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,b.jsx)(v,{...n,...e}),(0,b.jsx)(f,{...n,...e})]})}function A(e){const n=(0,g.A)();return(0,b.jsx)(q,{...e,children:h(e.children)},String(n))}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>t});var l=s(6540);const r={},i=l.createContext(r);function a(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);