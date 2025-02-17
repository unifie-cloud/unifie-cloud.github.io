"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9624],{7817:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var t=s(4848),l=s(8453);const o={slug:"Green-blue-deployments",title:"Green-Blue Deployment via Route 53",authors:["TrapenokViktor"],tags:["cloud","cluster-management","Kubernetes","DevOps","LearnToCode","CloudComputing","TechSkills"]},i=void 0,r={permalink:"/doc/blog/Green-blue-deployments",source:"@site/blog/2025-02-12-Green-blue-deployments/index.md",title:"Green-Blue Deployment via Route 53",description:"Green-Blue deployment is a strategy where you have two versions of your application:",date:"2025-02-12T00:00:00.000Z",tags:[{inline:!0,label:"cloud",permalink:"/doc/blog/tags/cloud"},{inline:!0,label:"cluster-management",permalink:"/doc/blog/tags/cluster-management"},{inline:!0,label:"Kubernetes",permalink:"/doc/blog/tags/kubernetes"},{inline:!0,label:"DevOps",permalink:"/doc/blog/tags/dev-ops"},{inline:!0,label:"LearnToCode",permalink:"/doc/blog/tags/learn-to-code"},{inline:!0,label:"CloudComputing",permalink:"/doc/blog/tags/cloud-computing"},{inline:!0,label:"TechSkills",permalink:"/doc/blog/tags/tech-skills"}],readingTime:1.055,hasTruncateMarker:!0,authors:[{name:"Trapenok Viktor",title:"Maintainer of Unifie",url:"https://www.linkedin.com/in/victor-trapenok/",imageURL:"https://www.unifie.cloud/doc/img/blog/TrapenokViktor.jpeg",key:"TrapenokViktor",page:null}],frontMatter:{slug:"Green-blue-deployments",title:"Green-Blue Deployment via Route 53",authors:["TrapenokViktor"],tags:["cloud","cluster-management","Kubernetes","DevOps","LearnToCode","CloudComputing","TechSkills"]},unlisted:!1,nextItem:{title:"Meet K3s",permalink:"/doc/blog/Meet-K3s"}},c={authorsImageUrls:[void 0]},a=[{value:"\ud83d\udee0 How to Set It Up",id:"-how-to-set-it-up",level:2},{value:"\u23f3 Minimal TTL for Faster Updates",id:"-minimal-ttl-for-faster-updates",level:2}];function d(e){const n={br:"br",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Green-Blue deployment is a strategy where you have two versions of your application:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Blue"})," (current stable version)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Green"})," (new version)"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"With Route 53, you can implement this using a simple DNS switch."}),"\n",(0,t.jsx)(n.h2,{id:"-how-to-set-it-up",children:"\ud83d\udee0 How to Set It Up"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Deploy two versions of your application"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Run two environments (e.g., EC2 instances, ECS services, or ALBs) with different versions."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Create two DNS records in Route 53"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"blue.example.com"})," \u2192 Old version"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"green.example.com"})," \u2192 New version"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Set up the main DNS record"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Create a CNAME record ",(0,t.jsx)(n.code,{children:"app.example.com"})," pointing to the current stable version (",(0,t.jsx)(n.code,{children:"blue.example.com"}),")."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Switch to the new version"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Once the new version is ready, update ",(0,t.jsx)(n.code,{children:"app.example.com"})," to point to ",(0,t.jsx)(n.code,{children:"green.example.com"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Rollback if needed"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If something goes wrong, simply switch back to ",(0,t.jsx)(n.code,{children:"blue.example.com"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"-minimal-ttl-for-faster-updates",children:"\u23f3 Minimal TTL for Faster Updates"}),"\n",(0,t.jsxs)(n.p,{children:["To reduce switching delays, set a ",(0,t.jsx)(n.strong,{children:"low TTL"})," (e.g., 60 seconds) on your DNS records. This ensures changes propagate quickly when you update Route 53."]}),"\n",(0,t.jsxs)(n.p,{children:["\ud83d\udccc ",(0,t.jsx)(n.strong,{children:"Pros"}),": Simple setup, quick rollback, no complex tools required.",(0,t.jsx)(n.br,{}),"\n","\u2757 ",(0,t.jsx)(n.strong,{children:"Cons"}),": DNS propagation depends on TTL, no automated testing before switching."]}),"\n",(0,t.jsx)(n.p,{children:"This method is ideal for deployments where occasional manual updates are acceptable."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"k3s architecture on a single node with embedded database",src:s(9664).A+"",width:"1125",height:"1440"})})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},9664:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/devtip-3-green-blue-186b03077009cabba9a84f1125d506bf.gif"},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>r});var t=s(6540);const l={},o=t.createContext(l);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);