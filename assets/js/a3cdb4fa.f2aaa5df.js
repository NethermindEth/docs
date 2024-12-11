"use strict";(self.webpackChunknethermind_docs=self.webpackChunknethermind_docs||[]).push([[639],{62:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"monitoring/health-check","title":"Health check","description":"To monitor liveness and readiness of your node, Nethermind provides a simple yet powerful health check feature. It is available at the default /health endpoint of the JSON-RPC server.","source":"@site/versioned_docs/version-1.29.0/monitoring/health-check.md","sourceDirName":"monitoring","slug":"/monitoring/health-check","permalink":"/1.29.0/monitoring/health-check","draft":false,"unlisted":false,"editUrl":"https://github.com/NethermindEth/docs/tree/main/versioned_docs/version-1.29.0/monitoring/health-check.md","tags":[],"version":"1.29.0","lastUpdatedAt":1733931978000,"sidebarPosition":1,"frontMatter":{"title":"Health check","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"dotnet-counters","permalink":"/1.29.0/monitoring/metrics/dotnet-counters"},"next":{"title":"Validators","permalink":"/1.29.0/validators/"}}');var o=t(4848),r=t(8453);t(1470),t(9365);const s={title:"Health check",sidebar_position:1},i=void 0,l={},c=[{value:"Basic configuration",id:"basic-configuration",level:2},{value:"Configuring a webhook",id:"webhook",level:2},{value:"Monitoring storage space",id:"storage-space",level:2},{value:"Monitoring blocks",id:"blocks",level:2},{value:"Monitoring consensus client",id:"consensus-client",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["To monitor liveness and readiness of your node, Nethermind provides a simple yet powerful health check feature. It is available at the default ",(0,o.jsx)(n.code,{children:"/health"})," endpoint of the ",(0,o.jsx)(n.a,{href:"/1.29.0/interacting/json-rpc-server",children:"JSON-RPC server"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"basic-configuration",children:"Basic configuration"}),"\n",(0,o.jsx)(n.admonition,{title:"Important",type:"warning",children:(0,o.jsxs)(n.p,{children:["The health check service requires the ",(0,o.jsx)(n.a,{href:"/1.29.0/interacting/json-rpc-server#http",children:"JSON-RPC API"})," to be enabled."]})}),"\n",(0,o.jsxs)(n.p,{children:["The health check service is disabled by default. To enable it, set the ",(0,o.jsx)(n.a,{href:"/1.29.0/fundamentals/configuration#healthchecks-enabled",children:(0,o.jsx)(n.code,{children:"HealthChecks.Enabled"})})," configuration option as follows:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"nethermind \\\n  -c mainnet \\\n  -dd path/to/data/dir \\\n  --HealthChecks.Enabled true\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Once Nethermind is up and running, the health check service can be accessed at the ",(0,o.jsx)(n.code,{children:"/health"})," endpoint:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"curl localhost:8545/health\n"})}),"\n",(0,o.jsx)(n.p,{children:"with a response similar to the following if healthy:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",metastring:'title="HTTP 200 OK"',children:'{\n  "status": "Healthy",\n  "totalDuration": "00:00:00.0006931",\n  "entries": {\n    "node-health": {\n      "data": {\n        "IsSyncing": false,\n        "Errors": []\n      },\n      "description": "The node is now fully synced with a network. Peers: 89.",\n      "duration": "00:00:00.0003797",\n      "status": "Healthy",\n      "tags": []\n    }\n  }\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"or similar to the following if unhealthy:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",metastring:'title="HTTP 503 Service Unavailable"',children:'{\n  "status": "Unhealthy",\n  "totalDuration": "00:00:00.0009477",\n  "entries": {\n    "node-health": {\n      "data": {\n        "IsSyncing": false,\n        "Errors": [ "NoPeers" ]\n      },\n      "description": "The node is now fully synced with a network. Node is not connected to any peers.",\n      "duration": "00:00:00.0001356",\n      "status": "Unhealthy",\n      "tags": []\n    }\n  }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["It is also possible to replace the default ",(0,o.jsx)(n.code,{children:"/health"})," endpoint with a custom one using the ",(0,o.jsx)(n.a,{href:"/1.29.0/fundamentals/configuration#healthchecks-slug",children:(0,o.jsx)(n.code,{children:"HealthChecks.Slug"})})," configuration option. For example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"--HealthChecks.Slug /my/custom/endpoint\n"})}),"\n",(0,o.jsx)(n.h2,{id:"webhook",children:"Configuring a webhook"}),"\n",(0,o.jsxs)(n.p,{children:["The health check service can be configured to send notifications to a webhook on node failure or recovery. This is achieved with the ",(0,o.jsx)(n.a,{href:"/1.29.0/fundamentals/configuration#healthchecks-uienabled",children:(0,o.jsx)(n.code,{children:"HealthChecks.UIEnabled"})}),", ",(0,o.jsx)(n.a,{href:"/1.29.0/fundamentals/configuration#healthchecks-webhooksenabled",children:(0,o.jsx)(n.code,{children:"HealthChecks.WebhooksEnabled"})}),", and ",(0,o.jsx)(n.a,{href:"/1.29.0/fundamentals/configuration#healthchecks-webhooksuri",children:(0,o.jsx)(n.code,{children:"HealthChecks.WebhooksUri"})})," configuration options. Optionally, the webhook payload data can be customized with the ",(0,o.jsx)(n.a,{href:"/1.29.0/fundamentals/configuration#healthchecks-webhookspayload",children:(0,o.jsx)(n.code,{children:"HealthChecks.WebhooksPayload"})})," and ",(0,o.jsx)(n.a,{href:"/1.29.0/fundamentals/configuration#healthchecks-webhooksrestorepayload",children:(0,o.jsx)(n.code,{children:"HealthChecks.WebhooksRestorePayload"})})," configuration options for failure and recovery events respectively."]}),"\n",(0,o.jsx)(n.p,{children:"The following example demonstrates how to configure a basic Slack webhook:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'nethermind \\\n  -c mainnet \\\n  -dd path/to/data/dir \\\n  --HealthChecks.Enabled true \\\n  --HealthChecks.UIEnabled true \\\n  --HealthChecks.WebhooksEnabled true \\\n  --HealthChecks.WebhooksUri https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX \\\n  --HealthChecks.WebhooksPayload \'{"text": "Node is unhealthy"}\' \\\n  --HealthChecks.WebhooksRestorePayload \'{"text": "Node is healthy"}\'\n'})}),"\n",(0,o.jsx)(n.h2,{id:"storage-space",children:"Monitoring storage space"}),"\n",(0,o.jsx)(n.p,{children:"Monitoring the available storage space is a crucial aspect of running a node. Nethermind provides a feature to track the free storage space and take action when the available space falls below a certain threshold. The following options are available:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/1.29.0/fundamentals/configuration#healthchecks-lowstoragecheckawaitonstartup",children:(0,o.jsx)(n.code,{children:"HealthChecks.LowStorageCheckAwaitOnStartup"})})," to check for low disk space on startup and suspend Nethermind until enough space is available"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/1.29.0/fundamentals/configuration#healthchecks-lowstoragespaceshutdownthreshold",children:(0,o.jsx)(n.code,{children:"HealthChecks.LowStorageSpaceShutdownThreshold"})})," to shut down Nethermind when the percentage of available disk space falls below the specified threshold"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/1.29.0/fundamentals/configuration#healthchecks-lowstoragespacewarningthreshold",children:(0,o.jsx)(n.code,{children:"HealthChecks.LowStorageSpaceWarningThreshold"})})," to issue a warning when the percentage of available disk space falls below the specified threshold"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"blocks",children:"Monitoring blocks"}),"\n",(0,o.jsx)(n.p,{children:"Another critical aspect of running a node is monitoring the production and processing of blocks. For that, Nethermind provides the following options:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/1.29.0/fundamentals/configuration#healthchecks-maxintervalwithoutprocessedblock",children:(0,o.jsx)(n.code,{children:"HealthChecks.MaxIntervalWithoutProcessedBlock"})})," to specify the max interval without processing a block before the node is considered unhealthy"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/1.29.0/fundamentals/configuration#healthchecks-maxintervalwithoutproducedblock",children:(0,o.jsx)(n.code,{children:"HealthChecks.MaxIntervalWithoutProducedBlock"})})," to specify the max interval without producing a block before the node is considered unhealthy"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"consensus-client",children:"Monitoring consensus client"}),"\n",(0,o.jsxs)(n.p,{children:["The health check service can also monitor the communication between Nethermind and the consensus client which can be configured by the ",(0,o.jsx)(n.a,{href:"/1.29.0/fundamentals/configuration#healthchecks-maxintervalclrequesttime",children:(0,o.jsx)(n.code,{children:"HealthChecks.MaxIntervalClRequestTime"})})," configuration option."]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var a=t(4164);const o={tabItem:"tabItem_Ymn6"};var r=t(4848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,s),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(6540),o=t(4164),r=t(3104),s=t(6347),i=t(205),l=t(7485),c=t(1682),h=t(679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:o}}=e;return{value:n,label:t,attributes:a,default:o}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const o=(0,s.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,r=u(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[c,d]=p({queryString:t,groupId:o}),[b,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,r]=(0,h.Dv)(t);return[o,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:o}),g=(()=>{const e=c??b;return f({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,r]),tabValues:r}}var m=t(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=t(4848);function v(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),h=e=>{const n=e.currentTarget,t=l.indexOf(n),o=i[t].value;o!==a&&(c(n),s(o))},d=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:d,onClick:h,...r,className:(0,o.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function j(e){const n=b(e);return(0,k.jsxs)("div",{className:(0,o.A)("tabs-container",g.tabList),children:[(0,k.jsx)(v,{...n,...e}),(0,k.jsx)(x,{...n,...e})]})}function w(e){const n=(0,m.A)();return(0,k.jsx)(j,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var a=t(6540);const o={},r=a.createContext(o);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);