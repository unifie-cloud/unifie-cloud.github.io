"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5831],{5312:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=t(4848),r=t(8453);const i={},o="AWS EKS - simple creation",a={id:"Cluster-provisioning/AWS-terraform/index",title:"AWS EKS - simple creation",description:"Unifie can create kubernetes cluster from UI in AWS EKS inside your own account automatically (with terraform script)",source:"@site/docs/04-Cluster-provisioning/01-AWS-terraform/index.md",sourceDirName:"04-Cluster-provisioning/01-AWS-terraform",slug:"/Cluster-provisioning/AWS-terraform/",permalink:"/doc/docs/Cluster-provisioning/AWS-terraform/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cluster provisioning",permalink:"/doc/docs/Cluster-provisioning/"},next:{title:"AWS EKS - manual creation",permalink:"/doc/docs/Cluster-provisioning/Create-aws-cluster/"}},l={},c=[{value:"Install addons (Integrations)",id:"install-addons-integrations",level:2},{value:"Jobs history",id:"jobs-history",level:2},{value:"Create cluster troubleshooting",id:"create-cluster-troubleshooting",level:2},{value:"Destroy cluster",id:"destroy-cluster",level:2},{value:"Destroy cluster troubleshooting",id:"destroy-cluster-troubleshooting",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"aws-eks---simple-creation",children:"AWS EKS - simple creation"})}),"\n",(0,s.jsx)(n.p,{children:"Unifie can create kubernetes cluster from UI in AWS EKS inside your own account automatically (with terraform script)"}),"\n",(0,s.jsx)(n.p,{children:"It is a simplest way to get production ready cluster."}),"\n",(0,s.jsx)(n.h1,{id:"video-tutorial",children:"Video tutorial"}),"\n",(0,s.jsx)("iframe",{width:"100%",height:"480",src:"https://www.youtube.com/embed/B_mM74JDtsA?si=vqtn4WLiXXMPIrHw",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),"\n",(0,s.jsx)(n.h1,{id:"text-instructions",children:"Text instructions"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"create1",src:t(2215).A+"",width:"1399",height:"544"})}),"\n",(0,s.jsx)(n.p,{children:"Unifie need to have AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY. Keys will be used to get access to the AWS api and create a cluster."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"create1",src:t(5739).A+"",width:"1918",height:"455"})}),"\n",(0,s.jsx)(n.p,{children:"Now you can specify cluster size, version and node type. Default values are good for a common usage."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"create1",src:t(4610).A+"",width:"1919",height:"675"})}),"\n",(0,s.jsx)(n.p,{children:"Cluster creating in two steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Plan job - this step do not change anything. It just check the existed resources and build a plan of steps (changes) that need to be done to bring infrastructure to the target state. You can create plan job in any time and run them again and again, it will not affect to real infrastructure."}),"\n",(0,s.jsx)(n.li,{children:"Apply job - perform steps from the plan. It makes changes. It create new resources and remove or update existed."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"create1",src:t(2509).A+"",width:"1916",height:"561"})}),"\n",(0,s.jsx)(n.p,{children:"If you got any kind of errors during apply or plan - you can run plan job again and new plan job build a new plan according thr real infrastructure status. It will not create 2 clusters instead one."}),"\n",(0,s.jsx)(n.p,{children:"On this screen - we got an error because of on the previous steps use a wrong aws keys. It is not a problem. Will use proper keys and try again."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"create1",src:t(9093).A+"",width:"1916",height:"947"})}),"\n",(0,s.jsx)(n.p,{children:"When you got a successfully finished plan job - check the logs. There you can get fully detailed information about the planing changes in infrastructure."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"create1",src:t(2369).A+"",width:"1918",height:"648"})}),"\n",(0,s.jsx)(n.p,{children:"If all is okay - continuer with a plan."}),"\n",(0,s.jsx)(n.admonition,{title:"Important",type:"info",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Cluster creation will increase your bills in ",(0,s.jsx)(n.strong,{children:"your"})," account in AWS"]}),"\n",(0,s.jsx)(n.li,{children:"If you will stop apply process, you will need to destroy the cluster manually."}),"\n",(0,s.jsx)(n.li,{children:"AWS EKS cluster is paid."}),"\n",(0,s.jsx)(n.li,{children:"AWS will bill you for everything (nodes, traffic, IP v4, volumes and so on ...)."}),"\n",(0,s.jsx)(n.li,{children:"Price will depend from your usage and cluster size."}),"\n",(0,s.jsx)(n.li,{children:"Price will be more than 180 USD per month."}),"\n",(0,s.jsx)(n.li,{children:"You can destroy cluster at any time later."}),"\n"]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"create1",src:t(858).A+"",width:"1919",height:"884"})}),"\n",(0,s.jsx)(n.p,{children:"Cluster creation can take 20 - 30 minutes, please be patient. You can see the progress in the logs in realtime."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"create1",src:t(9691).A+"",width:"1920",height:"743"})}),"\n",(0,s.jsx)(n.p,{children:"When cluster is ready - you can see this screen."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"create1",src:t(954).A+"",width:"1920",height:"733"})}),"\n",(0,s.jsx)(n.h2,{id:"install-addons-integrations",children:"Install addons (Integrations)"}),"\n",(0,s.jsxs)(n.p,{children:["Now you have a working cluster. We recommend to ",(0,s.jsx)(n.a,{href:"https://www.unifie.cloud/doc/docs/Cluster-provisioning/Install-Addons/",children:"install addons for this cluster"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Ingress if you want to deploy web service that should be available from internet"}),"\n",(0,s.jsx)(n.li,{children:"Karpenter - allow to add nodes autoscaling functional for cluster"}),"\n",(0,s.jsx)(n.li,{children:"KEDA - Kubernetes-based Event Driven autoscaler for deployments"}),"\n",(0,s.jsx)(n.li,{children:"Metrics-Server - need to performance monitoring"}),"\n",(0,s.jsx)(n.li,{children:"Prometheus and OpenCost- good for monitoring"}),"\n",(0,s.jsx)(n.li,{children:"EBS and EFS drivers - need if you will deploy Stateful applications (Databases, MySQL, Wordpress, Redis and others)"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://www.unifie.cloud/doc/docs/Cluster-provisioning/Install-Addons/",children:"More about addons"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"jobs-history",children:"Jobs history"}),"\n",(0,s.jsx)(n.p,{children:"You can see all previous jobs in a list and can check the logs for them"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"create1",src:t(8404).A+"",width:"1917",height:"700"})}),"\n",(0,s.jsx)(n.h2,{id:"create-cluster-troubleshooting",children:"Create cluster troubleshooting"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Be sure that use a proper AWS keys with proper permissions"}),"\n",(0,s.jsx)(n.li,{children:"Check that you do not have cluster with the same name in your account"}),"\n",(0,s.jsx)(n.li,{children:"By default aws have a limit for 5 VPC per region. Be sure that you have less than 5 VPC in selected aws region (Cluster will create a new one for own network)"}),"\n",(0,s.jsx)(n.li,{children:"if your apply job finished with error - you can run it again. It will not create a second cluster. It will try to finish creation from the last job."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"destroy-cluster",children:"Destroy cluster"}),"\n",(0,s.jsx)("iframe",{width:"100%",height:"480",src:"https://www.youtube.com/embed/rxheDAYKQc0?si=AwGWMCSCdlS94Mkm",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),"\n",(0,s.jsx)(n.p,{children:"To remove cluster from unifie - you should delete all applications deployed in this cluster.\nThan just use delete button."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Remove cluster",src:t(7292).A+"",width:"1918",height:"655"})}),"\n",(0,s.jsx)(n.p,{children:"If cluster was created from unifie UI (with terraform), please run destroy job before remove the cluster."}),"\n",(0,s.jsx)(n.admonition,{title:"Important",type:"info",children:(0,s.jsx)(n.p,{children:"AWS will charge you if you did not remove unused resources."})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"run destroy job",src:t(7513).A+"",width:"1164",height:"572"})}),"\n",(0,s.jsx)(n.p,{children:"Cluster destroying in two steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Destroy plan"})," job - this step do not change anything. It just check the existed resources and build a plan of steps (changes) that need to be done to remove all resources. You can create plan job in any time and run them again and again, it will not affect to real infrastructure."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Destroy"})," job - perform steps from the plan. It makes changes. It remove all resources."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"Destroy plan"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Destroy plan",src:t(4623).A+"",width:"1413",height:"720"})}),"\n",(0,s.jsxs)(n.p,{children:["When you got a successfully finished ",(0,s.jsx)(n.code,{children:"Destroy plan"})," job - check the logs. There you can get fully detailed information about the planing changes in infrastructure."]}),"\n",(0,s.jsxs)(n.p,{children:["If all is okay - continuer with click ",(0,s.jsx)(n.code,{children:"Destroy"})," button."]}),"\n",(0,s.jsx)(n.p,{children:"When destroy is done - check the logs. They should not have an errors."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"destroy is done",src:t(6602).A+"",width:"1116",height:"261"})}),"\n",(0,s.jsx)(n.h2,{id:"destroy-cluster-troubleshooting",children:"Destroy cluster troubleshooting"}),"\n",(0,s.jsx)(n.p,{children:"If you created any resources manually in cluster network (Loadbalancers, RDS databases, Virtual servers, Peering and so on) - AWS not allow to remove this VPC network. And Destroy job will failure."}),"\n",(0,s.jsxs)(n.p,{children:["In this case you need to open your aws account and manually try to remove cluster VPC network and all internal resources.\nWhen it will be done - run ",(0,s.jsx)(n.code,{children:"Destroy plan"})," and ",(0,s.jsx)(n.code,{children:"Destroy"})," job again."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},4623:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/Destroy-plan-logs-cb98c6cc0f379607f4cdfdf04aa71b9f.png"},7292:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/Remove-cluster-e0474afd0d5facd43525b70afc5e6130.png"},2215:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/create1-pik-97b5cebc73c7917bf28ba12327c2847d.png"},5739:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/create2-9ff7a536559518df3e60ff4a86e10ca3.png"},4610:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/create3-9998baa5d071ed54ae4b74ecace220e0.png"},2509:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/create4-111e5699fb7b272b1115f7ddac169b0d.png"},9093:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/create5-on-error-2bf780bf54952ef6673edbc149da469c.png"},2369:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/create5-on-ok-4947c11aa6ec161b8770a9ac86d60bc5.png"},858:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/create6-on-ok-72e12319557f2b23db88775e69c2a54c.png"},9691:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/create7-on-ok-6140269f08c6c2909f4ae48689ae3319.png"},8404:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/create8logs-94aa18704c70698fea992bbe52edf3ae.png"},954:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/create9-ready-3a65bcec7efc751c4592eb791f6b7c66.png"},6602:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/image-847fffc083ba548fc061cec8ab3f4c68.png"},7513:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/run-destroy-job-0aa81e61d82ae9109e7446de895ef248.png"},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(6540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);