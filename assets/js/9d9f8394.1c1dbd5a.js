"use strict";(self.webpackChunknethermind_docs=self.webpackChunknethermind_docs||[]).push([[9013],{4343:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=t(4848),s=t(8453),i=t(1470),a=t(9365);const o={title:"Troubleshooting",sidebar_position:8},l=void 0,c={id:"troubleshooting",title:"Troubleshooting",description:"File descriptor limits",source:"@site/docs/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/next/troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/troubleshooting.md",tags:[],version:"current",lastUpdatedAt:172554209e4,sidebarPosition:8,frontMatter:{title:"Troubleshooting",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"FAQ",permalink:"/next/faq"}},u={},d=[{value:"File descriptor limits",id:"file-descriptor-limits",level:2},{value:"Database corruption issues",id:"database-corruption-issues",level:2},{value:"TrieNodeException errors",id:"trienodeexception-errors",level:2},{value:"Issues with lock files",id:"issues-with-lock-files",level:2},{value:"Block checksum mismatch",id:"block-checksum-mismatch",level:2},{value:"Plugin loading failure",id:"plugin-loading-failure",level:2}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"file-descriptor-limits",children:"File descriptor limits"}),"\n",(0,r.jsx)(n.p,{children:'In some cases, file descriptor limits may cause errors like "Too many open files". To solve that, see the instructions for your platform below.'}),"\n",(0,r.jsxs)(i.A,{groupId:"os",children:[(0,r.jsxs)(a.A,{value:"linux",label:"Linux",children:[(0,r.jsxs)(n.p,{children:["To increase the limits for the user running Nethermind (given the process name of ",(0,r.jsx)(n.code,{children:"nethermind"}),"), run:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'sudo echo "nethermind soft nofile 100000" > /etc/security/limits.d/nethermind.conf\nsudo echo "nethermind hard nofile 100000" >> /etc/security/limits.d/nethermind.conf\n'})})]}),(0,r.jsxs)(a.A,{value:"macos",label:"macOS",children:[(0,r.jsx)(n.p,{children:"To increase the limits, run:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ulimit -n 10000\n"})}),(0,r.jsxs)(n.p,{children:["If you run into issues with the above command, see the ",(0,r.jsx)(n.a,{href:"https://developer.apple.com/forums/thread/735798?answerId=762679022#762679022",children:"workaround"}),"."]}),(0,r.jsxs)(n.p,{children:["Note that the changes above are temporary and will be reset after the system reboot. To make them permanent, you can add them to your ",(0,r.jsx)(n.code,{children:"~/.bashrc"})," or ",(0,r.jsx)(n.code,{children:"~/.bash_profile"})," shell configuration file."]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"database-corruption-issues",children:"Database corruption issues"}),"\n",(0,r.jsx)(n.p,{children:"Database corruption is one of the issues that happen now and then; it has many possible causes among them:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Hardware failures: disk failures, memory errors, hardware overheating, etc."}),"\n",(0,r.jsx)(n.li,{children:"Power cuts and abrupt shutdowns"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["There's no shortcut in such situations, and ",(0,r.jsx)(n.a,{href:"/next/fundamentals/sync#resync-a-node-from-scratch",children:"resyncing Nethermind from scratch"})," is the recommended remedy."]}),"\n",(0,r.jsx)(n.h2,{id:"trienodeexception-errors",children:"TrieNodeException errors"}),"\n",(0,r.jsxs)(n.p,{children:["If Nethermind reports ",(0,r.jsx)(n.code,{children:"Nethermind.Trie.TrieNodeException"})," or ",(0,r.jsx)(n.code,{children:"Nethermind.Trie.MissingTrieNodeException"})," errors, that usually indicates database corruption or missing data. The following steps may help:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If the node is still syncing, wait until it has been fully synced and observe for errors"}),"\n",(0,r.jsx)(n.li,{children:"Restart the node and observe for errors"}),"\n",(0,r.jsx)(n.li,{children:"Update to the latest version of Nethermind"}),"\n",(0,r.jsxs)(n.li,{children:["If the above steps fail, a ",(0,r.jsx)(n.a,{href:"/next/fundamentals/sync#resync-a-node-from-scratch",children:"resync"})," may be required"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"issues-with-lock-files",children:"Issues with lock files"}),"\n",(0,r.jsx)(n.p,{children:"If Nethermind complains about the lock files, it perhaps because of one of the following:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Another Nethermind process is running using the same database"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The database has not been appropriately closed on the last run.",(0,r.jsx)(n.br,{}),"\n","In this case, run the following command from the Nethermind database directory:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"find . -type f -name 'LOCK' -delete\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"block-checksum-mismatch",children:"Block checksum mismatch"}),"\n",(0,r.jsx)(n.p,{children:"Sometimes Nethermind may fail with an error similar the following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Corruption: block checksum mismatch: expected 2087346143, got 2983326672 in... \n"})}),"\n",(0,r.jsxs)(n.p,{children:["This tends to happen on XFS file systems under very high memory pressure. The issue can be mitigated by using the ",(0,r.jsx)(n.code,{children:"--Db.UseDirectIoForFlushAndCompactions true"})," option although at the cost of performance."]}),"\n",(0,r.jsx)(n.p,{children:"However, quite often, this is because of memory module issues."}),"\n",(0,r.jsx)(n.h2,{id:"plugin-loading-failure",children:"Plugin loading failure"}),"\n",(0,r.jsxs)(n.p,{children:["If Nethermind fails to start with a message like ",(0,r.jsx)(n.code,{children:"Failed to load plugin..."}),", this is most likely due to a missing or incompatible plugin. Reinstalling Nethermind usually fixes the issue."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["If you install Nethermind over an existing installation, remove the old installation first, particularly the ",(0,r.jsx)(n.code,{children:"plugins"})," directory. Package managers do this automatically."]})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>a});t(6540);var r=t(4164);const s={tabItem:"tabItem_Ymn6"};var i=t(4848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(6540),s=t(4164),i=t(3104),a=t(6347),o=t(205),l=t(7485),c=t(1682),u=t(679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,i=h(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,d]=p({queryString:t,groupId:s}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,u.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),x=(()=>{const e=c??f;return m({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{x&&l(x)}),[x]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=t(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(4848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),s=o[t].value;s!==r&&(c(n),a(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,s.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,g.jsx)(v,{...n,...e}),(0,g.jsx)(j,{...n,...e})]})}function w(e){const n=(0,b.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(6540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);