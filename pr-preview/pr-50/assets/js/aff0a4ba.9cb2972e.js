"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5292],{1587:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>l,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"hpc/connecting_to_hpc/ood","title":"Open OnDemand (Web-based Graphical User Interface)","description":"Open OnDemand is designed to create easier access to users to interface with HPC systems. It comes with a variety of convenient tools to manage files, access the command line, manage and monitor jobs, and launch interactive applications, such as Jupyter Notebooks, RStudio sessions, and even full Linux Desktops. Features Include:","source":"@site/docs/hpc/02_connecting_to_hpc/03_ood.md","sourceDirName":"hpc/02_connecting_to_hpc","slug":"/hpc/connecting_to_hpc/ood","permalink":"/rts-docs-dev/pr-preview/pr-50/docs/hpc/connecting_to_hpc/ood","draft":false,"unlisted":false,"editUrl":"https://github.com/NYU-ITS/rts-docs-dev/blob/main/docs/hpc/02_connecting_to_hpc/03_ood.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"hpcSidebar","previous":{"title":"SSH Tunneling and X11 Forwarding","permalink":"/rts-docs-dev/pr-preview/pr-50/docs/hpc/connecting_to_hpc/ssh_tunneling_and_x11_forwarding"},"next":{"title":"Linux Tutorial","permalink":"/rts-docs-dev/pr-preview/pr-50/docs/hpc/navigating_the_cluster/linux_tutorial"}}');var o=t(6070),i=t(385);const c={},a="Open OnDemand (Web-based Graphical User Interface)",r={},d=[{value:"Access the Shell",id:"access-the-shell",level:2},{value:"Troubleshooting Connections to Open OnDemand",id:"troubleshooting-connections-to-open-ondemand",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"open-ondemand-web-based-graphical-user-interface",children:"Open OnDemand (Web-based Graphical User Interface)"})}),"\n",(0,o.jsx)(n.p,{children:"Open OnDemand is designed to create easier access to users to interface with HPC systems. It comes with a variety of convenient tools to manage files, access the command line, manage and monitor jobs, and launch interactive applications, such as Jupyter Notebooks, RStudio sessions, and even full Linux Desktops. Features Include:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Easy file management - upload and download files, view HTML and pictures without downloading"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Command-line shell access without any SSH client locally installed"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Job management and monitoring"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Full Linux desktop experience without X11"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Interactive Apps such as JupyterHub and RStudio without the need for port forwarding"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Open OnDemand (OOD) is accessible to all users with a valid NYU HPC account while on-campus network or through a VPN via ",(0,o.jsx)(n.a,{href:"https://ood.hpc.nyu.edu",children:"https://ood.hpc.nyu.edu"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"access-the-shell",children:"Access the Shell"}),"\n",(0,o.jsxs)(n.p,{children:["Under the ",(0,o.jsx)(n.strong,{children:"clusters"})," menu you can select the ",(0,o.jsx)(n.strong,{children:"Greene Shell Access"})," option to access the Linux shell. No local SSH client is required."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"img",src:t(4927).A+"",width:"1272",height:"524"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Interactive Applications"})}),"\n",(0,o.jsx)(n.p,{children:"GUI based applications are accessible without the need for port or X11 forwarding. Select the Interactive Apps menu, select the desired application, and submit the job based on required resources and options."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"interactive-applications",src:t(4024).A+"",width:"1936",height:"554"})}),"\n",(0,o.jsx)(n.h2,{id:"troubleshooting-connections-to-open-ondemand",children:"Troubleshooting Connections to Open OnDemand"}),"\n",(0,o.jsxs)(n.p,{children:["A common issue that can occur is receiving an error that the Open OnDemand page cannot be reached. Sometimes this can indicate that the service is down, but often this is an issue with the the local browser cache. You can test this by opening a private browser window and seeing if ",(0,o.jsx)(n.a,{href:"https://ood.hpc.nyu.edu",children:"https://ood.hpc.nyu.edu"})," will load. If it does, try deleting the cache for ",(0,o.jsx)(n.a,{href:"https://ood.hpc.nyu.edu",children:"https://ood.hpc.nyu.edu"})," in your browser history to resolve this issue."]}),"\n",(0,o.jsx)(n.p,{children:"In Chrome, this can be done by navigating to this page in your settings:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"chrome://settings/content/all?searchSubpage=ood.hpc.nyu.edu&search\n"})}),"\n",(0,o.jsx)(n.p,{children:"The link above will automatically search for the Open OnDemand site data and cookies. You can then simply click on the trashcan icon to delete the site cache."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Remove browser cache image",src:t(5610).A+"",width:"1280",height:"569"})}),"\n",(0,o.jsxs)(n.p,{children:["Once done, try navigating again to ",(0,o.jsx)(n.a,{href:"https://ood.hpc.nyu.edu",children:"https://ood.hpc.nyu.edu"})," and the site should load. For other issues please email ",(0,o.jsx)(n.a,{href:"mailto:hpc@nyu.edu",children:"hpc@nyu.edu"}),"."]})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},4024:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/interactive-applications-0b8e17567cef085197b541fd5eb10fe0.png"},5610:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/ood_remove_cache-a10302cdb6318e2426dd56be05ac485f.png"},4927:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/open_ondemand_gif-487a0570f48a097e73039b8753d17d97.gif"},385:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var s=t(758);const o={},i=s.createContext(o);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);