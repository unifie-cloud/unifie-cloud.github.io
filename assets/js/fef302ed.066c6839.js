"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[524],{9960:(e,s,d)=>{d.r(s),d.d(s,{Badge:()=>g,Bullet:()=>c,Details:()=>x,SpecifiedBy:()=>h,assets:()=>t,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>b});var n=d(4848),l=d(8453),o=d(6540);const a={id:"versions-model",title:"VersionsModel"},i=void 0,r={id:"api-v1/types/objects/versions-model",title:"VersionsModel",description:"Returns versions list. The version is a set of images for deployment. images are managed via the UI in the deployment settings. get request",source:"@site/docs/api-v1/types/objects/versions-model.mdx",sourceDirName:"api-v1/types/objects",slug:"/api-v1/types/objects/versions-model",permalink:"/doc/docs/api-v1/types/objects/versions-model",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"versions-model",title:"VersionsModel"},sidebar:"tutorialSidebar",previous:{title:"VersionsListResult",permalink:"/doc/docs/api-v1/types/objects/versions-list-result"},next:{title:"Boolean",permalink:"/doc/docs/api-v1/types/scalars/boolean"}},t={},c=()=>{const e={span:"span",...(0,l.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const s={a:"a",...(0,l.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const s={span:"span",...(0,l.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:s,children:d,startOpen:a=!1})=>{const i={details:"details",summary:"summary",...(0,l.R)()},[r,t]=(0,o.useState)(a);return(0,n.jsxs)(i.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(i.summary,{onClick:e=>{e.preventDefault(),t((e=>!e))},style:{listStyle:"none"},children:r?e:s}),r&&d]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>VersionsModel.<b>id</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"versionsmodelidint-",level:4},{value:'<code>VersionsModel.<b>channel</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"versionsmodelchannelstring-",level:4},{value:'<code>VersionsModel.<b>name</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"versionsmodelnamestring-",level:4},{value:'<code>VersionsModel.<b>build</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"versionsmodelbuildint-",level:4},{value:'<code>VersionsModel.<b>title</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"versionsmodeltitlestring-",level:4},{value:'<code>VersionsModel.<b>description</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"versionsmodeldescriptionstring-",level:4},{value:'<code>VersionsModel.<b>isAvailable</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"versionsmodelisavailableboolean-",level:4},{value:'<code>VersionsModel.<b>images</b></code><Bullet></Bullet><code>JSON</code> <Badge class="badge badge--secondary"></Badge>',id:"versionsmodelimagesjson-",level:4},{value:'<code>VersionsModel.<b>updatedAt</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"versionsmodelupdatedatstring-",level:4},{value:'<code>VersionsModel.<b>createdAt</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"versionsmodelcreatedatstring-",level:4},{value:"Member Of",id:"member-of",level:3}];function j(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"Returns versions list. The version is a set of images for deployment. images are managed via the UI in the deployment settings. get request"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-graphql",children:"type VersionsModel {\n  id: Int\n  channel: String\n  name: String\n  build: Int\n  title: String\n  description: String\n  isAvailable: Boolean\n  images: JSON\n  updatedAt: String\n  createdAt: String\n}\n"})}),"\n",(0,n.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(s.h4,{id:"versionsmodelidint-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["VersionsModel.",(0,n.jsx)("b",{children:"id"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(s.a,{href:"/doc/docs/api-v1/types/scalars/int",children:(0,n.jsx)(s.code,{children:"Int"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(s.h4,{id:"versionsmodelchannelstring-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["VersionsModel.",(0,n.jsx)("b",{children:"channel"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(s.a,{href:"/doc/docs/api-v1/types/scalars/string",children:(0,n.jsx)(s.code,{children:"String"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(s.h4,{id:"versionsmodelnamestring-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["VersionsModel.",(0,n.jsx)("b",{children:"name"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(s.a,{href:"/doc/docs/api-v1/types/scalars/string",children:(0,n.jsx)(s.code,{children:"String"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(s.h4,{id:"versionsmodelbuildint-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["VersionsModel.",(0,n.jsx)("b",{children:"build"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(s.a,{href:"/doc/docs/api-v1/types/scalars/int",children:(0,n.jsx)(s.code,{children:"Int"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(s.h4,{id:"versionsmodeltitlestring-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["VersionsModel.",(0,n.jsx)("b",{children:"title"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(s.a,{href:"/doc/docs/api-v1/types/scalars/string",children:(0,n.jsx)(s.code,{children:"String"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(s.h4,{id:"versionsmodeldescriptionstring-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["VersionsModel.",(0,n.jsx)("b",{children:"description"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(s.a,{href:"/doc/docs/api-v1/types/scalars/string",children:(0,n.jsx)(s.code,{children:"String"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(s.h4,{id:"versionsmodelisavailableboolean-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["VersionsModel.",(0,n.jsx)("b",{children:"isAvailable"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(s.a,{href:"/doc/docs/api-v1/types/scalars/boolean",children:(0,n.jsx)(s.code,{children:"Boolean"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(s.h4,{id:"versionsmodelimagesjson-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["VersionsModel.",(0,n.jsx)("b",{children:"images"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(s.a,{href:"/doc/docs/api-v1/types/scalars/json",children:(0,n.jsx)(s.code,{children:"JSON"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(s.h4,{id:"versionsmodelupdatedatstring-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["VersionsModel.",(0,n.jsx)("b",{children:"updatedAt"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(s.a,{href:"/doc/docs/api-v1/types/scalars/string",children:(0,n.jsx)(s.code,{children:"String"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(s.h4,{id:"versionsmodelcreatedatstring-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["VersionsModel.",(0,n.jsx)("b",{children:"createdAt"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(s.a,{href:"/doc/docs/api-v1/types/scalars/string",children:(0,n.jsx)(s.code,{children:"String"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/doc/docs/api-v1/types/objects/versions-list-result",children:(0,n.jsx)(s.code,{children:"VersionsListResult"})}),"  ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function m(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(j,{...e})}):j(e)}},8453:(e,s,d)=>{d.d(s,{R:()=>a,x:()=>i});var n=d(6540);const l={},o=n.createContext(l);function a(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);