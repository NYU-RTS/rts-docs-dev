"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6063],{4026:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"srde/user_guide/data_access","title":"Data Access","description":"After you are connected to the Workspace Host using SSH per the instructions in the previous section, you can access data that has been placed in the workspace ingress bucket by your Data Steward. You can use the gsutil ls and cp commands to copy the data into your home directory using the steps described below.","source":"@site/docs/srde/02_user_guide/02_data_access.mdx","sourceDirName":"srde/02_user_guide","slug":"/srde/user_guide/data_access","permalink":"/rts-docs-dev/pr-preview/pr-68/docs/srde/user_guide/data_access","draft":false,"unlisted":false,"editUrl":"https://github.com/NYU-ITS/rts-docs-dev/blob/main/docs/srde/02_user_guide/02_data_access.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{},"sidebar":"srdeSidebar","previous":{"title":"Connecting to SRDE","permalink":"/rts-docs-dev/pr-preview/pr-68/docs/srde/user_guide/connecting"},"next":{"title":"Managing Data Transfer","permalink":"/rts-docs-dev/pr-preview/pr-68/docs/srde/user_guide/data_transfers"}}');var r=t(5105),a=t(3881);const o={},i="Data Access",c={},d=[];function u(e){const s={code:"code",h1:"h1",header:"header",img:"img",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"data-access",children:"Data Access"})}),"\n",(0,r.jsx)(s.p,{children:"After you are connected to the Workspace Host using SSH per the instructions in the previous section, you can access data that has been placed in the workspace ingress bucket by your Data Steward. You can use the gsutil ls and cp commands to copy the data into your home directory using the steps described below."}),"\n",(0,r.jsx)(s.p,{children:"Use the following command to see list of folders in your workspace:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"gsutil ls\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Running &quot;gsutils ls&quot;",src:t(848).A+"",width:"687",height:"116"})}),"\n",(0,r.jsx)(s.p,{children:"As shown above, there are several folders. Data that has been transferred into the workspace is in the Ingress folder.  Use the following command to list the objects in the ingress folder, replacing the path with your project\u2019s path:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"gsutil ls gs://your-workspace-ingress-path\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Running &quot;gsutils ls&quot; on your workspace path",src:t(3268).A+"",width:"1044",height:"65"})}),"\n",(0,r.jsx)(s.p,{children:"List the contents of the folder with the timestamp corresponding to the date the data was transferred into the workspace, and you will see the files that were uploaded:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"gsutil ls gs://your-workspace-ingress-path/data-timestamp-folder\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Running &quot;gsutils ls&quot; on timestamped folder within your workspace path",src:t(6999).A+"",width:"1495",height:"75"})}),"\n",(0,r.jsx)(s.p,{children:"To copy the files into your home directory use gsutil cp command (use period at end to copy to your home directory):"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"gsutil cp gs://your-workspace-ingress-path/data-timestamp-folder/filename .\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Copying with &quot;gsutils cp&quot;",src:t(4894).A+"",width:"1242",height:"240"})})]})}function l(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},4894:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/gsutils_cp-63a2465b353ff56787f15ba5c5df7cf9.png"},848:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/gsutils_ls-8285378bd8537132218b4aa8e0e6fc4f.png"},3268:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/gsutils_ls_on_your_workspace_path-032057646584f810b067ab846736d1cf.png"},6999:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/gsutils_ls_on_your_workspace_path_timestamped_folder-7ad196d9f97b71f405c813eb20299d3a.png"},3881:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>i});var n=t(8101);const r={},a=n.createContext(r);function o(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);