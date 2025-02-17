"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4599],{4754:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var t=r(4848),s=r(8453);const n={id:"Private-container-registries",title:"Private container registries"},a="Private container registries",c={id:"User-Guide/Pull-Secrets/Private-container-registries",title:"Private container registries",description:"A private container registry is a storage and distribution system for container images i.e. files that include all the code, libraries and other resources required to run an application inside a containerized environment.",source:"@site/docs/02-User-Guide/08-Pull-Secrets/index.md",sourceDirName:"02-User-Guide/08-Pull-Secrets",slug:"/User-Guide/Pull-Secrets/",permalink:"/doc/home/User-Guide/Pull-Secrets/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"Private-container-registries",title:"Private container registries"},sidebar:"tutorialSidebar",previous:{title:"CI/CD integration",permalink:"/doc/home/User-Guide/CI-CD/"},next:{title:"Environment variables",permalink:"/doc/home/User-Guide/Environment-variables/"}},o={},l=[];function d(e){const i={a:"a",code:"code",h1:"h1",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"private-container-registries",children:"Private container registries"})}),"\n",(0,t.jsx)(i.p,{children:"A private container registry is a storage and distribution system for container images i.e. files that include all the code, libraries and other resources required to run an application inside a containerized environment."}),"\n",(0,t.jsx)(i.p,{children:"Private registries allow for access control to their images without having them in the open domain. Public registries also often have bandwidth limits because they are mostly based on a cloud service, which charges per gigabyte of bandwidth."}),"\n",(0,t.jsx)(i.h1,{id:"pull-an-image-from-a-private-registry",children:"Pull an Image from a Private Registry"}),"\n",(0,t.jsxs)(i.p,{children:["Unifie can help you create image pull secret on tab ",(0,t.jsx)(i.code,{children:"Pull secrets"})]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"pull secrets",src:r(9580).A+"",width:"1920",height:"552"})}),"\n",(0,t.jsx)(i.p,{children:"You can create secrets for"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"AWS ECR"}),"\n",(0,t.jsx)(i.li,{children:"Quay.io"}),"\n",(0,t.jsx)(i.li,{children:"Docker hub"}),"\n",(0,t.jsx)(i.li,{children:"Other"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"pull secrets",src:r(4532).A+"",width:"1920",height:"777"})}),"\n",(0,t.jsx)(i.p,{children:"After secret was created - you can see it in application resulting YAML. And can use it in pod definitions."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"pull secrets",src:r(5661).A+"",width:"1920",height:"516"})}),"\n",(0,t.jsxs)(i.p,{children:["If you use a ",(0,t.jsx)(i.a,{href:"https://www.unifie.cloud/doc/docs/User-Guide/Unifie-Service-Types/Docker/",children:"Docker type service"})," - you can create secret here:"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"pull secrets in wizard",src:r(508).A+"",width:"1920",height:"777"})}),"\n",(0,t.jsx)(i.h1,{id:"other-container-storage-providers",children:"Other Container storage providers"}),"\n",(0,t.jsxs)(i.p,{children:["You can create image Pull secret manually ",(0,t.jsx)(i.a,{href:"https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/",children:"with this instructions"})]})]})}function u(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},9580:(e,i,r)=>{r.d(i,{A:()=>t});const t=r.p+"assets/images/pull-secrets-461fa23d5119a5bd455efa287fb7aec0.png"},4532:(e,i,r)=>{r.d(i,{A:()=>t});const t=r.p+"assets/images/pull-secrets2-2d6eb990aecc056408048bbe47434585.png"},5661:(e,i,r)=>{r.d(i,{A:()=>t});const t=r.p+"assets/images/pull-secrets3-75ed1838185c63182903eaccea784a8b.png"},508:(e,i,r)=>{r.d(i,{A:()=>t});const t=r.p+"assets/images/pull-secrets4-wizard-a707c0c5f459d64b31d4dc65a2b5b364.png"},8453:(e,i,r)=>{r.d(i,{R:()=>a,x:()=>c});var t=r(6540);const s={},n=t.createContext(s);function a(e){const i=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(n.Provider,{value:i},e.children)}}}]);