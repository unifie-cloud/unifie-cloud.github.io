"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6747],{8148:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var r=t(4848),n=t(8453);const c={},i="AWS EKS - manual creation",a={id:"Cluster-provisioning/Create-aws-cluster/index",title:"AWS EKS - manual creation",description:"If you do not have cluster, create it in AWS console or use other ways like terraform. We will use AWS console as the simplest way to get kubernetes cluster.",source:"@site/docs/04-Cluster-provisioning/02-Create-aws-cluster/index.md",sourceDirName:"04-Cluster-provisioning/02-Create-aws-cluster",slug:"/Cluster-provisioning/Create-aws-cluster/",permalink:"/doc/home/Cluster-provisioning/Create-aws-cluster/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AWS EKS - simple creation",permalink:"/doc/home/Cluster-provisioning/AWS-terraform/"},next:{title:"K3S - for local machine",permalink:"/doc/home/Cluster-provisioning/k3s/"}},o={},l=[{value:"EKS cluster creation step 1",id:"eks-cluster-creation-step-1",level:3},{value:"EKS cluster creation step 2.",id:"eks-cluster-creation-step-2",level:3},{value:"Create IAM role for cluster.",id:"create-iam-role-for-cluster",level:3},{value:"Create IAM role for cluster. Step 2",id:"create-iam-role-for-cluster-step-2",level:3},{value:"Create IAM role for cluster. Step 3",id:"create-iam-role-for-cluster-step-3",level:3},{value:"Create IAM role for cluster. Step 4",id:"create-iam-role-for-cluster-step-4",level:3},{value:"EKS cluster creation step 3",id:"eks-cluster-creation-step-3",level:3},{value:"EKS cluster creation step 4.",id:"eks-cluster-creation-step-4",level:3},{value:"EKS cluster creation step 5.",id:"eks-cluster-creation-step-5",level:3},{value:"EKS cluster creation step 6",id:"eks-cluster-creation-step-6",level:3},{value:"EKS cluster creation step 7",id:"eks-cluster-creation-step-7",level:3},{value:"Create a role for nodegroup",id:"create-a-role-for-nodegroup",level:3}];function d(e){const s={h1:"h1",h3:"h3",header:"header",img:"img",p:"p",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"aws-eks---manual-creation",children:"AWS EKS - manual creation"})}),"\n",(0,r.jsxs)(s.p,{children:["If you do not have cluster, create it in AWS console or use other ways like terraform. We will use AWS console as the simplest way to get kubernetes cluster.\n",(0,r.jsx)(s.img,{alt:"AWS console",src:t(310).A+"",width:"1024",height:"476"})]}),"\n",(0,r.jsx)(s.h3,{id:"eks-cluster-creation-step-1",children:"EKS cluster creation step 1"}),"\n",(0,r.jsxs)(s.p,{children:["You need to create or select IAM role for cluster. Click to create role button.\n",(0,r.jsx)(s.img,{alt:"step 1",src:t(4077).A+"",width:"1024",height:"545"})]}),"\n",(0,r.jsx)(s.h3,{id:"eks-cluster-creation-step-2",children:"EKS cluster creation step 2."}),"\n",(0,r.jsxs)(s.p,{children:["You need to create or select IAM role for cluster. Click to create role button.\n",(0,r.jsx)(s.img,{alt:"step 2",src:t(6596).A+"",width:"1024",height:"523"})]}),"\n",(0,r.jsx)(s.h3,{id:"create-iam-role-for-cluster",children:"Create IAM role for cluster."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Create IAM role",src:t(968).A+"",width:"1024",height:"525"})}),"\n",(0,r.jsx)(s.h3,{id:"create-iam-role-for-cluster-step-2",children:"Create IAM role for cluster. Step 2"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Create IAM role step 2",src:t(4930).A+"",width:"1024",height:"542"})}),"\n",(0,r.jsx)(s.h3,{id:"create-iam-role-for-cluster-step-3",children:"Create IAM role for cluster. Step 3"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Create IAM role step 3",src:t(8937).A+"",width:"1024",height:"541"})}),"\n",(0,r.jsx)(s.h3,{id:"create-iam-role-for-cluster-step-4",children:"Create IAM role for cluster. Step 4"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Create IAM role step 4",src:t(3184).A+"",width:"987",height:"950"})}),"\n",(0,r.jsxs)(s.p,{children:["Now we have a new role and can use it to create a new cluster. Come back to cluster creation form.\n",(0,r.jsx)(s.img,{alt:"Come back to cluster creation form",src:t(7015).A+"",width:"987",height:"950"})]}),"\n",(0,r.jsx)(s.h3,{id:"eks-cluster-creation-step-3",children:"EKS cluster creation step 3"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"EKS cluster creation step 3",src:t(3374).A+"",width:"966",height:"982"})}),"\n",(0,r.jsx)(s.h3,{id:"eks-cluster-creation-step-4",children:"EKS cluster creation step 4."}),"\n",(0,r.jsxs)(s.p,{children:["Here you can select addons to your cluster.\n",(0,r.jsx)(s.img,{alt:"select addons to your cluster",src:t(836).A+"",width:"1024",height:"534"})]}),"\n",(0,r.jsx)(s.h3,{id:"eks-cluster-creation-step-5",children:"EKS cluster creation step 5."}),"\n",(0,r.jsxs)(s.p,{children:["Here you can configure selected addons to your cluster.\n",(0,r.jsx)(s.img,{alt:"configure selected addons",src:t(7517).A+"",width:"1024",height:"533"})]}),"\n",(0,r.jsx)(s.h3,{id:"eks-cluster-creation-step-6",children:"EKS cluster creation step 6"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"cluster creation step 6",src:t(6310).A+"",width:"1024",height:"516"})}),"\n",(0,r.jsx)(s.h3,{id:"eks-cluster-creation-step-7",children:"EKS cluster creation step 7"}),"\n",(0,r.jsxs)(s.p,{children:["Almoste done. Just wait until the cluster will be ready.\n",(0,r.jsx)(s.img,{alt:"Just wait until the cluster",src:t(5327).A+"",width:"1024",height:"551"})]}),"\n",(0,r.jsxs)(s.p,{children:["Now it is ready.\n",(0,r.jsx)(s.img,{alt:"Now it is ready",src:t(723).A+"",width:"1024",height:"512"})]}),"\n",(0,r.jsxs)(s.p,{children:["Cluster is ready, but you need to add nodes to the cluster.\n",(0,r.jsx)(s.img,{alt:"add nodes",src:t(9353).A+"",width:"1024",height:"505"})]}),"\n",(0,r.jsxs)(s.p,{children:["Again, you need new IAM role for nodegroup\n",(0,r.jsx)(s.img,{alt:"new IAM role",src:t(9618).A+"",width:"1024",height:"397"})]}),"\n",(0,r.jsx)(s.h3,{id:"create-a-role-for-nodegroup",children:"Create a role for nodegroup"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Create a role for nodegroup",src:t(747).A+"",width:"1024",height:"485"})}),"\n",(0,r.jsxs)(s.p,{children:["Add permissions\n",(0,r.jsx)(s.img,{alt:"Add permissions",src:t(4908).A+"",width:"1024",height:"380"})]}),"\n",(0,r.jsxs)(s.p,{children:["Add more permissions\n",(0,r.jsx)(s.img,{alt:"Add more permissions",src:t(7797).A+"",width:"1024",height:"325"})]}),"\n",(0,r.jsxs)(s.p,{children:["Check permissions\n",(0,r.jsx)(s.img,{alt:"Check permissions",src:t(697).A+"",width:"1024",height:"503"})]}),"\n",(0,r.jsxs)(s.p,{children:["Continuer with node group creation flow (step 1)\n",(0,r.jsx)(s.img,{alt:"Continuer with node group creation 1",src:t(6496).A+"",width:"803",height:"642"})]}),"\n",(0,r.jsxs)(s.p,{children:["Continuer with node group creation flow (step 2)\n",(0,r.jsx)(s.img,{alt:"Continuer with node group creation 2",src:t(4059).A+"",width:"1024",height:"952"})]}),"\n",(0,r.jsxs)(s.p,{children:["Nodegroup creation flow (step 3)\n",(0,r.jsx)(s.img,{alt:"Nodegroup creation flow (step 3)",src:t(2514).A+"",width:"1024",height:"432"})]}),"\n",(0,r.jsxs)(s.p,{children:["Nodegroup creation flow (step 4)\n",(0,r.jsx)(s.img,{alt:"Nodegroup creation flow (step 4)",src:t(2493).A+"",width:"1024",height:"813"})]}),"\n",(0,r.jsxs)(s.p,{children:["Almost ready\n",(0,r.jsx)(s.img,{alt:"Almost ready",src:t(9252).A+"",width:"1024",height:"541"})]}),"\n",(0,r.jsx)(s.p,{children:"Good. You have new kubernetes cluster."}),"\n",(0,r.jsx)(s.p,{children:"The next step \u2013 install unifie into your cluster"})]})}function p(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},310:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/1-6f3526e5d3f6a37df9eaa788cca3eaac.png"},836:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/10-863c06b5982b12b486c4a7e3e8887fa4.png"},7517:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/11-827ea684349f324f991361917c523b9b.png"},6310:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/12-bb28be5e8c76265f5db98a2f8ea1ea9c.png"},5327:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/13-0f71e594ef7dcbb073dd8e8c73e52f48.png"},723:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/14-a59ab0f8a38d12a8eaf4dce070988810.png"},9353:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/15-4f1a4892f8ae0f2335f3f3439152b44c.png"},9618:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/16-b79ea555db57340217e14eece20430c0.png"},747:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/17-bbc9148eefe24ab6a85b84bf7cf90464.png"},4908:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/18-c307e9ca299de57883cb1d37680da95c.png"},7797:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/19-3b846d83456ce52c6a0a3595712ebf0b.png"},4077:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/2-d814d46b8bf01def16d7ff9b3c212cca.png"},697:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/20-006fd1aa3aa15d212963a4bc2307f004.png"},6496:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/21-bbb699b0e1efeeb21287163696369d3e.png"},4059:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/22-39d55dc05c81ac0243b562366d21c84b.png"},2514:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/23-469016593e28017a47402b42925174b8.png"},2493:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/24-c94cc6ae3dab813a6edeaab9b7176f6e.png"},9252:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/25-de04922d1857fdf00dd7e0129669fec5.png"},6596:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/3-871b3d63722ba3e7e23db6cafb560992.png"},968:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/4-2fa8a0131d9a8b0a992c803c7c3214ac.png"},4930:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/5-c08f77469a7cc0960965fa1682a8cb1b.png"},8937:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/6-6feaa8acfae546edf7a6400ba700c4ca.png"},3184:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/7-f9371272ae18f8622b4e84e706c984ce.png"},7015:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/8-f9371272ae18f8622b4e84e706c984ce.png"},3374:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/9-afdebd44388c3756ee74dd152d81138a.png"},8453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>a});var r=t(6540);const n={},c=r.createContext(n);function i(e){const s=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(c.Provider,{value:s},e.children)}}}]);