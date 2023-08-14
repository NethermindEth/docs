"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6353],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),m=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=m(t.components);return r.createElement(c.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),s=m(n),f=a,k=s["".concat(c,".").concat(f)]||s[f]||d[f]||i;return n?r.createElement(k,o(o({ref:e},p),{},{components:n})):r.createElement(k,o({ref:e},p))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[s]="string"==typeof t?t:a,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2808:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const i={},o="Blockchain",l={unversionedId:"monitoring/metrics-explanation/blockchain",id:"monitoring/metrics-explanation/blockchain",title:"Blockchain",description:"| Metric | Description |",source:"@site/docs/04-monitoring/metrics-explanation/blockchain.md",sourceDirName:"04-monitoring/metrics-explanation",slug:"/monitoring/metrics-explanation/blockchain",permalink:"/nethermindeth/docs/monitoring/metrics-explanation/blockchain",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/04-monitoring/metrics-explanation/blockchain.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AccountAbstraction.Network",permalink:"/nethermindeth/docs/monitoring/metrics-explanation/accountabstraction.network"},next:{title:"Consensus.AuRa",permalink:"/nethermindeth/docs/monitoring/metrics-explanation/consensus.aura"}},c={},m=[],p={toc:m},s="wrapper";function d(t){let{components:e,...n}=t;return(0,a.kt)(s,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"blockchain"},"Blockchain"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_best_known_block_number"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The estimated highest block available.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_blockchain_height"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The current height of the canonical chain.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_blocks"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total number of blocks processed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_blocks_sealed"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total number of sealed blocks")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_failed_block_seals"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total number of failed block seals")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_gas_limit"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Gas Limit for processed blocks")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_gas_used"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Gas Used in processed blocks")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_last_difficulty"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Difficulty of the last block")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_mgas"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total MGas processed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_processing_queue_size"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of blocks awaiting for processing.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_recovery_queue_size"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of blocks awaiting for recovery of public keys from signatures.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_reorganizations"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total number of chain reorganizations")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_total_difficulty"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total difficulty on the chain")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_transactions"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total number of transactions processed")))))}d.isMDXComponent=!0}}]);