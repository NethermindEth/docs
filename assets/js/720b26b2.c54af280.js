"use strict";(self.webpackChunknethermind_docs=self.webpackChunknethermind_docs||[]).push([[7794],{1973:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(4848),s=n(8453),i=n(1470),a=n(9365);const o={title:"Troubleshooting",sidebar_position:8},l=void 0,c={id:"troubleshooting",title:"Troubleshooting",description:"File descriptor limits",source:"@site/versioned_docs/version-1.29.0/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/versioned_docs/version-1.29.0/troubleshooting.md",tags:[],version:"1.29.0",lastUpdatedAt:1728923e6,sidebarPosition:8,frontMatter:{title:"Troubleshooting",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Custom analytic tools",permalink:"/developers/custom-analytic-tools"}},u={},d=[{value:"File descriptor limits",id:"file-descriptor-limits",level:2},{value:"Database corruption issues",id:"database-corruption-issues",level:2},{value:"TrieNodeException errors",id:"trienodeexception-errors",level:2},{value:"Issues with lock files",id:"issues-with-lock-files",level:2},{value:"Block checksum mismatch",id:"block-checksum-mismatch",level:2},{value:"Plugin loading failure",id:"plugin-loading-failure",level:2}];function h(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"file-descriptor-limits",children:"File descriptor limits"}),"\n",(0,r.jsx)(t.p,{children:'In some cases, file descriptor limits may cause errors like "Too many open files". To solve that, see the instructions for your platform below.'}),"\n",(0,r.jsxs)(i.A,{groupId:"os",children:[(0,r.jsxs)(a.A,{value:"linux",label:"Linux",children:[(0,r.jsxs)(t.p,{children:["To increase the limits for the user running Nethermind (given the process name of ",(0,r.jsx)(t.code,{children:"nethermind"}),"), run:"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'sudo echo "nethermind soft nofile 100000" > /etc/security/limits.d/nethermind.conf\nsudo echo "nethermind hard nofile 100000" >> /etc/security/limits.d/nethermind.conf\n'})})]}),(0,r.jsxs)(a.A,{value:"macos",label:"macOS",children:[(0,r.jsx)(t.p,{children:"To increase the limits, run:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"ulimit -n 10000\n"})}),(0,r.jsxs)(t.p,{children:["If you run into issues with the above command, see the ",(0,r.jsx)(t.a,{href:"https://developer.apple.com/forums/thread/735798?answerId=762679022#762679022",children:"workaround"}),"."]}),(0,r.jsxs)(t.p,{children:["Note that the changes above are temporary and will be reset after the system reboot. To make them permanent, you can add them to your ",(0,r.jsx)(t.code,{children:"~/.bashrc"})," or ",(0,r.jsx)(t.code,{children:"~/.bash_profile"})," shell configuration file."]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"database-corruption-issues",children:"Database corruption issues"}),"\n",(0,r.jsx)(t.p,{children:"Database corruption is one of the issues that happen now and then; it has many possible causes among them:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Hardware failures: disk failures, memory errors, hardware overheating, etc."}),"\n",(0,r.jsx)(t.li,{children:"Power cuts and abrupt shutdowns"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["There's no shortcut in such situations, and ",(0,r.jsx)(t.a,{href:"/fundamentals/sync#resync-a-node-from-scratch",children:"resyncing Nethermind from scratch"})," is the recommended remedy."]}),"\n",(0,r.jsx)(t.h2,{id:"trienodeexception-errors",children:"TrieNodeException errors"}),"\n",(0,r.jsxs)(t.p,{children:["If Nethermind reports ",(0,r.jsx)(t.code,{children:"Nethermind.Trie.TrieNodeException"})," or ",(0,r.jsx)(t.code,{children:"Nethermind.Trie.MissingTrieNodeException"})," errors, that usually indicates database corruption or missing data. The following steps may help:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"If the node is still syncing, wait until it has been fully synced and observe for errors"}),"\n",(0,r.jsx)(t.li,{children:"Restart the node and observe for errors"}),"\n",(0,r.jsx)(t.li,{children:"Update to the latest version of Nethermind"}),"\n",(0,r.jsxs)(t.li,{children:["If the above steps fail, a ",(0,r.jsx)(t.a,{href:"/fundamentals/sync#resync-a-node-from-scratch",children:"resync"})," may be required"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"issues-with-lock-files",children:"Issues with lock files"}),"\n",(0,r.jsx)(t.p,{children:"If Nethermind complains about the lock files, it perhaps because of one of the following:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Another Nethermind process is running using the same database"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["The database has not been appropriately closed on the last run.",(0,r.jsx)(t.br,{}),"\n","In this case, run the following command from the Nethermind database directory:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"find . -type f -name 'LOCK' -delete\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"block-checksum-mismatch",children:"Block checksum mismatch"}),"\n",(0,r.jsx)(t.p,{children:"Sometimes Nethermind may fail with an error similar the following:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"Corruption: block checksum mismatch: expected 2087346143, got 2983326672 in...\n"})}),"\n",(0,r.jsxs)(t.p,{children:["This tends to happen on XFS file systems under very high memory pressure. The issue can be mitigated by using the ",(0,r.jsx)(t.code,{children:"--Db.UseDirectIoForFlushAndCompactions true"})," option although at the cost of performance."]}),"\n",(0,r.jsx)(t.p,{children:"However, quite often, this is because of memory module issues."}),"\n",(0,r.jsx)(t.h2,{id:"plugin-loading-failure",children:"Plugin loading failure"}),"\n",(0,r.jsxs)(t.p,{children:["If Nethermind fails to start with a message like ",(0,r.jsx)(t.code,{children:"Failed to load plugin..."}),", this is most likely due to a missing or incompatible plugin. Reinstalling Nethermind usually fixes the issue."]}),"\n",(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsxs)(t.p,{children:["If you install Nethermind over an existing installation, remove the old installation first, particularly the ",(0,r.jsx)(t.code,{children:"plugins"})," directory. Package managers do this automatically."]}),(0,r.jsx)(t.p,{children:"Watch out not to accidentally delete the database directory with the sync data, if any."})]})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>a});n(6540);var r=n(4164);const s={tabItem:"tabItem_Ymn6"};var i=n(4848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(6540),s=n(4164),i=n(3104),a=n(6347),o=n(205),l=n(7485),c=n(1682),u=n(679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const s=(0,a.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,i=h(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[c,d]=p({queryString:n,groupId:s}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,u.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:s}),x=(()=>{const e=c??f;return m({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{x&&l(x)}),[x]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=n(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),s=o[n].value;s!==r&&(c(t),a(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,s.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:i}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function j(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,g.jsx)(v,{...t,...e}),(0,g.jsx)(y,{...t,...e})]})}function w(e){const t=(0,b.A)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(6540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);