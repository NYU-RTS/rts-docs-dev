"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8862],{2683:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"accessing_hpc/accessing_hpc_instructions","title":"Accessing HPC Instructions","description":"[putty link]//www.chiark.greenend.org.uk/~sgtatham/putty/latest.html","source":"@site/docs/accessing_hpc/accessing_hpc_instructions.md","sourceDirName":"accessing_hpc","slug":"/accessing_hpc/accessing_hpc_instructions","permalink":"/rts-docs-dev/pr-preview/pr-20/docs/accessing_hpc/accessing_hpc_instructions","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/accessing_hpc/accessing_hpc_instructions.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Getting and Renewing an Account","permalink":"/rts-docs-dev/pr-preview/pr-20/docs/accessing_hpc/getting_and_renewing_an_account"},"next":{"title":"SSH Tunneling and X11 Forwarding","permalink":"/rts-docs-dev/pr-preview/pr-20/docs/accessing_hpc/ssh_tunneling_and_x11_forwarding"}}');var i=s(6070),o=s(385);const r={sidebar_position:2},c="Accessing HPC Instructions",a={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Remote Connections with the NYU VPN &amp; HPC Gateway Server",id:"remote-connections-with-the-nyu-vpn--hpc-gateway-server",level:2},{value:"Command Line Interface (Use Terminal)",id:"command-line-interface-use-terminal",level:2},{value:"Mac &amp; Linux Access",id:"mac--linux-access",level:3},{value:"Windows CMD",id:"windows-cmd",level:3},{value:"Windows WSL2",id:"windows-wsl2",level:3},{value:"Setting up SSH Keys",id:"setting-up-ssh-keys",level:3},{value:"PuTTY (Only for Windows)",id:"putty-only-for-windows",level:2},{value:"Open OnDemand (Web-based Graphical User Interface)",id:"open-ondemand-web-based-graphical-user-interface",level:2},{value:"Access the Shell",id:"access-the-shell",level:3},{value:"Troubleshooting Connections to Open OnDemand",id:"troubleshooting-connections-to-open-ondemand",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"accessing-hpc-instructions",children:"Accessing HPC Instructions"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"#introduction",children:"Introduction"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"#remote-connections-with-the-nyu-vpn--hpc-gateway-server",children:"Remote Connections with the NYU VPN & HPC Gateway Server"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"#command-line-interface-use-terminal",children:"Command Line Interface (Use Terminal)"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"#putty-only-for-windows",children:"PuTTY (Only for Windows)"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"#open-ondemand-web-based-graphical-user-interface",children:"Open OnDemand (Web-based Graphical User Interface)"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(n.p,{children:["There are several ways to interact with the Greene HPC cluster. Similar to other Linux clusters, the most common method of connection is via a Command Line Interface (CLI). A CLI is a program that allows you to create and delete files, run programs, and navigate through directories and files via a typed prompt. On Mac, the built-in CLI application is called Terminal. While Windows 11 machines support a Linux Subsystem, which allows for similar functionality, a popular tool used to connect to a Linux server is a free application called ",(0,i.jsx)(n.a,{href:"https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html",children:"PuTTY"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The following sections will outline basic ways to connect to the Greene cluster. Access to the clusters is primarily handled via the Secure Shell Protocol, or ssh. Below we outline ways to connect via ssh on Mac, Linux, and Windows machines."}),"\n",(0,i.jsx)(n.h2,{id:"remote-connections-with-the-nyu-vpn--hpc-gateway-server",children:"Remote Connections with the NYU VPN & HPC Gateway Server"}),"\n",(0,i.jsx)(n.p,{children:"If you are connecting from a remote location that is not on the NYU network (your home for example), you have two options:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"VPN Option:"})," ",(0,i.jsx)(n.a,{href:"https://www.nyu.edu/life/information-technology/infrastructure/network-services/vpn.html",children:"Set up your computer to use the NYU VPN"}),". Once you've created a VPN connection, you can proceed as if you were connected to the NYU net"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Gateway Option:"})," Go through our gateway servers (example below). Gateways are designed to support only a very minimal set of commands and their only purpose is to let users connect HPC systems without needing to first connect to the VPN"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"You do not need to use the NYU VPN or gateways if you are connected to the NYU network (wired connection in your office or WiFi) or if you have VPN connection initiated. In this case you can ssh directly to the clusters."}),"\n",(0,i.jsx)(n.h2,{id:"command-line-interface-use-terminal",children:"Command Line Interface (Use Terminal)"}),"\n",(0,i.jsx)(n.h3,{id:"mac--linux-access",children:"Mac & Linux Access"}),"\n",(0,i.jsxs)(n.p,{children:["To connect to the gateway servers, simply open a ",(0,i.jsx)(n.a,{href:"https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac#:~:text=Open%20Terminal,%2C%20then%20double%2Dclick%20Terminal.",children:"terminal application"})," and enter the following command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"ssh <NetID>@gw.hpc.nyu.edu\n"})}),"\n",(0,i.jsx)(n.p,{children:"After typing in your password you will be logged in to the cluster. Once this connection is established, you can make one more hop and connect to one of the HPC clusters:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"# this will connect you to Greene HPC cluster\nssh <NetID>@greene.hpc.nyu.edu\n"})}),"\n",(0,i.jsx)(n.h3,{id:"windows-cmd",children:"Windows CMD"}),"\n",(0,i.jsx)(n.p,{children:"Windows 11 users have several options. First, the CMD program should contain an ssh client, allowing you to log into Greene or Hudson the same way as with a Linux terminal."}),"\n",(0,i.jsx)(n.h3,{id:"windows-wsl2",children:"Windows WSL2"}),"\n",(0,i.jsx)(n.p,{children:"If you run Windows 10, you can install WSL, and then install Ubuntu or other Linux distribution (for example, from Microsoft Store). You will have a fully functional Ubuntu with terminal and can connect to cluster using instructions provided above for Linux/Mac users."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"Instructions on WSL installation:"})})," ",(0,i.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10",children:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"})]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"TIPS:"})})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"One of many options to get terminal that support tabs, etc. is to install 'Windows Terminal' from Microsoft Store."}),"\n",(0,i.jsxs)(n.li,{children:["If you are using WSL 2 (Windows subsystem for Linux), you may not be able to access internet when Cisco AnyConnect VPN, installed from exe file, is activated. A potential solution: uninstall Cisco AnyConnect and install AnyConnect using Microsoft Store, and then setup new VPN connection using settings described on ",(0,i.jsx)(n.a,{href:"https://nyu.service-now.com/sp?sys_kb_id=6177d7031c811904bbcf4dc2835ec340&id=kb_article_view&sysparm_rank=3&sysparm_tsqueryId=9a07fee81b146410a54ffdd51a4bcb8e",children:"IT webpage"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"setting-up-ssh-keys",children:"Setting up SSH Keys"}),"\n",(0,i.jsx)(n.p,{children:"Instead of typing your password every time you need to log in, you can also specify an ssh key."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Only do that on the computer you trust"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Generate ssh key pair (terminal in Linux/Mac or cmd/WSL in Windows):\n",(0,i.jsx)(n.a,{href:"https://www.ssh.com/ssh/keygen/",children:"https://www.ssh.com/ssh/keygen/"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Note the path to ssh key files. Don't share key files with anybody - anybody with this key file can login to your account"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Log into cluster using regular login/password and then add the content of generated public key file (the one with .pub) to ",(0,i.jsx)(n.code,{children:"$HOME/.ssh/authorized_keys"})," on cluster"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Next time you will log into cluster no password will be required"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For additional recommendations on how to configure your SSH sessions, see the [ssh configuring and x11 forwarding page]."}),"\n",(0,i.jsx)(n.h2,{id:"putty-only-for-windows",children:"PuTTY (Only for Windows)"}),"\n",(0,i.jsxs)(n.p,{children:["There are many SSH clients for Windows OS, but we recommend using ",(0,i.jsx)(n.a,{href:"https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html",children:"PuTTY SSH"}),' if you have not already. Once it is installed, launch PuTTY and configure new session "Session" category as in the screenshot below:']}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"putty configuration image",src:s(754).A+"",width:"1292",height:"1166"})}),"\n",(0,i.jsx)(n.p,{children:"Here we are instructing PuTTY to connect to host gw.hpc.nyu.edu on port 22 using SSH protocol (note, that this interface allows you to save this connection configuration for future). Just like for Linux and Mac users, if you are connecting from the outside of NYU network, you need to go through the gateway servers."}),"\n",(0,i.jsx)(n.p,{children:'Once you click "Open", a terminal window with prompt for password will pop up. Enter your NetID password and you should be authorized on the gateway server. Gateways are designed to support only a very minimal set of commands and their only purpose it to let users access HPC systems. Once you are there type in an ssh command that will let you connect to Greene cluster :'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"# Greene Login\nssh greene.hpc.nyu.edu\n"})}),"\n",(0,i.jsx)(n.p,{children:"A new command line interface window will open up that prompts you for your password on the gateway server, from there you can connect to Greene by entering the following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"ssh greene.hpc.nyu.edu\n"})}),"\n",(0,i.jsx)(n.h2,{id:"open-ondemand-web-based-graphical-user-interface",children:"Open OnDemand (Web-based Graphical User Interface)"}),"\n",(0,i.jsx)(n.p,{children:"Open OnDemand is an open source project funded by the National Science Foundation (NSF). Open OnDemand is designed to create easier access to users to interface with HPC systems. Originally developed by Ohio Supercomputer Center (OSC), used by many universities around the world, and now servicing the NYU Greene HPC cluster."}),"\n",(0,i.jsx)(n.p,{children:"Open OnDemand has a variety of convenient tools to manage files, access the command line, manage and monitor jobs, and launch interactive applications, such as Jupyter Notebooks, RStudio sessions, and even full Linux Desktops."}),"\n",(0,i.jsx)(n.p,{children:"Features Include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Easy file management - upload and download files, view HTML and pictures without downloading"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Command-line shell access without any SSH client locally installed"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Job management and monitoring"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Full Linux desktop experience without X11"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Interactive Apps such as JupyterHub and RStudio without the need for port forwarding"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Open OnDemand (OOD) is accessible to all users with a valid NYU HPC account while on-campus network or through a VPN."}),"\n",(0,i.jsxs)(n.p,{children:["To access OOD visit: ",(0,i.jsx)(n.a,{href:"https://ood.hpc.nyu.edu",children:"https://ood.hpc.nyu.edu"})," (VPN Required)"]}),"\n",(0,i.jsx)(n.h3,{id:"access-the-shell",children:"Access the Shell"}),"\n",(0,i.jsxs)(n.p,{children:["Under the ",(0,i.jsx)(n.strong,{children:"clusters"})," menu you can select the ",(0,i.jsx)(n.strong,{children:"Greene Shell Access"})," option to access the Linux shell. No local SSH client is required."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img",src:s(6168).A+"",width:"1272",height:"524"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Interactive Applications"})}),"\n",(0,i.jsx)(n.p,{children:"GUI based applications are accessible without the need for port or X11 forwarding. Select the Interactive Apps menu, select the desired application, and submit the job based on required resources and options."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"interactive-applications",src:s(6673).A+"",width:"1936",height:"554"})}),"\n",(0,i.jsx)(n.h3,{id:"troubleshooting-connections-to-open-ondemand",children:"Troubleshooting Connections to Open OnDemand"}),"\n",(0,i.jsxs)(n.p,{children:["A common issue that can occur is receiving an error that the Open OnDemand page cannot be reached. Sometimes this can indicate that the service is down, but often this is an issue with the the local browser cache. You can test this by opening a private browser window and seeing if ",(0,i.jsx)(n.a,{href:"https://ood.hpc.nyu.edu",children:"https://ood.hpc.nyu.edu"})," will load. If it does, try deleting the cache for ",(0,i.jsx)(n.a,{href:"https://ood.hpc.nyu.edu",children:"https://ood.hpc.nyu.edu"})," in your browser history to resolve this issue."]}),"\n",(0,i.jsx)(n.p,{children:"In Chrome, this can be done by navigating to this page in your settings:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"chrome://settings/content/all?searchSubpage=ood.hpc.nyu.edu&search\n"})}),"\n",(0,i.jsx)(n.p,{children:"The link above will automatically search for the Open OnDemand site data and cookies. You can then simply click on the trashcan icon to delete the site cache."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Remove browser cache image",src:s(4516).A+"",width:"1280",height:"569"})}),"\n",(0,i.jsxs)(n.p,{children:["Once done, try navigating again to ",(0,i.jsx)(n.a,{href:"https://ood.hpc.nyu.edu",children:"https://ood.hpc.nyu.edu"})," and the site should load. For other issues please email ",(0,i.jsx)(n.a,{href:"mailto:hpc@nyu.edu",children:"hpc@nyu.edu"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},6673:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/interactive-applications-0b8e17567cef085197b541fd5eb10fe0.png"},4516:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/ood_remove_cache-a10302cdb6318e2426dd56be05ac485f.png"},6168:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/open_ondemand_gif-487a0570f48a097e73039b8753d17d97.gif"},754:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/putty_config-1870760ac54d7b38b1447a6e082ccea2.png"},385:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var t=s(758);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);