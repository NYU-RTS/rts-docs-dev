"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9989],{2308:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"hpc/connecting_to_hpc/connecting_to_hpc","title":"Connecting to the HPC Cluster","description":"There are several ways to interact with the Greene HPC cluster. Similar to other Linux clusters, the most common method of connection is via a Command Line Interface (CLI). A CLI is a program that allows you to create and delete files, run programs, and navigate through directories and files via a typed prompt. On Mac, the built-in CLI application is called Terminal. While Windows 11 machines support a Linux Subsystem, which allows for similar functionality, a popular tool used to connect to a Linux server is a free application called PuTTY.","source":"@site/docs/hpc/02_connecting_to_hpc/01_connecting_to_hpc.md","sourceDirName":"hpc/02_connecting_to_hpc","slug":"/hpc/connecting_to_hpc/connecting_to_hpc","permalink":"/rts-docs-dev/docs/hpc/connecting_to_hpc/connecting_to_hpc","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/hpc/02_connecting_to_hpc/01_connecting_to_hpc.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"hpcSidebar","previous":{"title":"HPC Accounts for Sponsored External Collaborators","permalink":"/rts-docs-dev/docs/hpc/getting_started/hpc_accounts_external_collaborators"},"next":{"title":"SSH Tunneling and X11 Forwarding","permalink":"/rts-docs-dev/docs/hpc/connecting_to_hpc/ssh_tunneling_and_x11_forwarding"}}');var s=t(4848),i=t(8453);const r={},c="Connecting to the HPC Cluster",a={},l=[{value:"Remote Connections with the NYU VPN &amp; HPC Gateway Server",id:"remote-connections-with-the-nyu-vpn--hpc-gateway-server",level:2},{value:"Command Line Interface (Use Terminal)",id:"command-line-interface-use-terminal",level:2},{value:"Mac &amp; Linux Access",id:"mac--linux-access",level:3},{value:"Windows CMD",id:"windows-cmd",level:3},{value:"Windows WSL2",id:"windows-wsl2",level:3},{value:"Setting up SSH Keys",id:"setting-up-ssh-keys",level:3},{value:"PuTTY (Only for Windows)",id:"putty-only-for-windows",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"connecting-to-the-hpc-cluster",children:"Connecting to the HPC Cluster"})}),"\n",(0,s.jsxs)(n.p,{children:["There are several ways to interact with the Greene HPC cluster. Similar to other Linux clusters, the most common method of connection is via a Command Line Interface (CLI). A CLI is a program that allows you to create and delete files, run programs, and navigate through directories and files via a typed prompt. On Mac, the built-in CLI application is called Terminal. While Windows 11 machines support a Linux Subsystem, which allows for similar functionality, a popular tool used to connect to a Linux server is a free application called ",(0,s.jsx)(n.a,{href:"https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html",children:"PuTTY"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If you'd prefer to access the HPC cluster via a web gateway instead, please refer to ",(0,s.jsx)(n.a,{href:"/rts-docs-dev/docs/hpc/connecting_to_hpc/ood",children:"the section describing OpenOnDemand"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The following sections will outline basic ways to connect to the Greene cluster. Access to the clusters is primarily handled via the Secure Shell Protocol, or ssh. Below we outline ways to connect via ssh on Mac, Linux, and Windows machines."}),"\n",(0,s.jsx)(n.h2,{id:"remote-connections-with-the-nyu-vpn--hpc-gateway-server",children:"Remote Connections with the NYU VPN & HPC Gateway Server"}),"\n",(0,s.jsx)(n.p,{children:"If you are connecting from a remote location that is not on the NYU network (your home for example), you have two options:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VPN Option:"})," ",(0,s.jsx)(n.a,{href:"https://www.nyu.edu/life/information-technology/infrastructure/network-services/vpn.html",children:"Set up your computer to use the NYU VPN"}),". Once you've created a VPN connection, you can proceed as if you were connected to the NYU net"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Gateway Option:"})," Go through our gateway servers (example below). Gateways are designed to support only a very minimal set of commands and their only purpose is to let users connect HPC systems without needing to first connect to the VPN"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"You do not need to use the NYU VPN or gateways if you are connected to the NYU network (wired connection in your office or WiFi) or if you have VPN connection initiated. In this case you can ssh directly to the clusters."}),"\n",(0,s.jsx)(n.h2,{id:"command-line-interface-use-terminal",children:"Command Line Interface (Use Terminal)"}),"\n",(0,s.jsx)(n.h3,{id:"mac--linux-access",children:"Mac & Linux Access"}),"\n",(0,s.jsxs)(n.p,{children:["To connect to the gateway servers, simply open a ",(0,s.jsx)(n.a,{href:"https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac#:~:text=Open%20Terminal,%2C%20then%20double%2Dclick%20Terminal.",children:"terminal application"})," and enter the following command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"ssh <NetID>@gw.hpc.nyu.edu\n"})}),"\n",(0,s.jsx)(n.p,{children:"After typing in your password you will be logged in to the cluster. Once this connection is established, you can make one more hop and connect to one of the HPC clusters:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"# this will connect you to Greene HPC cluster\nssh <NetID>@greene.hpc.nyu.edu\n"})}),"\n",(0,s.jsx)(n.h3,{id:"windows-cmd",children:"Windows CMD"}),"\n",(0,s.jsx)(n.p,{children:"Windows 11 users have several options. First, the CMD program should contain an ssh client, allowing you to log into Greene or Hudson the same way as with a Linux terminal."}),"\n",(0,s.jsx)(n.h3,{id:"windows-wsl2",children:"Windows WSL2"}),"\n",(0,s.jsx)(n.p,{children:"If you run Windows 10, you can install WSL, and then install Ubuntu or other Linux distribution (for example, from Microsoft Store). You will have a fully functional Ubuntu with terminal and can connect to cluster using instructions provided above for Linux/Mac users."}),"\n",(0,s.jsxs)(n.p,{children:["Instructions on WSL installation can be found here: ",(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10",children:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"})]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"One of many options to get terminal that support tabs, etc. is to install 'Windows Terminal' from Microsoft Store."}),"\n",(0,s.jsxs)(n.li,{children:["If you are using WSL 2 (Windows subsystem for Linux), you may not be able to access internet when Cisco AnyConnect VPN, installed from exe file, is activated. A potential solution: uninstall Cisco AnyConnect and install AnyConnect using Microsoft Store, and then setup new VPN connection using settings described on ",(0,s.jsx)(n.a,{href:"https://nyu.service-now.com/sp?sys_kb_id=6177d7031c811904bbcf4dc2835ec340&id=kb_article_view&sysparm_rank=3&sysparm_tsqueryId=9a07fee81b146410a54ffdd51a4bcb8e",children:"IT webpage"}),"."]}),"\n"]})}),"\n",(0,s.jsx)(n.h3,{id:"setting-up-ssh-keys",children:"Setting up SSH Keys"}),"\n",(0,s.jsx)(n.p,{children:"Instead of typing your password every time you need to log in, you can also specify an ssh key."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Only do that on the computer you trust"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Generate ssh key pair (terminal in Linux/Mac or cmd/WSL in Windows):\n",(0,s.jsx)(n.a,{href:"https://www.ssh.com/ssh/keygen/",children:"https://www.ssh.com/ssh/keygen/"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Note the path to ssh key files. Don't share key files with anybody - anybody with this key file can login to your account"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Log into cluster using regular login/password and then add the content of generated public key file (the one with .pub) to ",(0,s.jsx)(n.code,{children:"$HOME/.ssh/authorized_keys"})," on cluster"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Next time you will log into cluster no password will be required"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"For additional recommendations on how to configure your SSH sessions, see the [ssh configuring and x11 forwarding page]."}),"\n",(0,s.jsx)(n.h2,{id:"putty-only-for-windows",children:"PuTTY (Only for Windows)"}),"\n",(0,s.jsxs)(n.p,{children:["There are many SSH clients for Windows OS, but we recommend using ",(0,s.jsx)(n.a,{href:"https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html",children:"PuTTY SSH"}),' if you have not already. Once it is installed, launch PuTTY and configure new session "Session" category as in the screenshot below:']}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"putty configuration image",src:t(4922).A+"",width:"1292",height:"1166"})}),"\n",(0,s.jsx)(n.p,{children:"Here we are instructing PuTTY to connect to host gw.hpc.nyu.edu on port 22 using SSH protocol (note, that this interface allows you to save this connection configuration for future). Just like for Linux and Mac users, if you are connecting from the outside of NYU network, you need to go through the gateway servers."}),"\n",(0,s.jsx)(n.p,{children:'Once you click "Open", a terminal window with prompt for password will pop up. Enter your NetID password and you should be authorized on the gateway server. Gateways are designed to support only a very minimal set of commands and their only purpose it to let users access HPC systems. Once you are there type in an ssh command that will let you connect to Greene cluster :'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"# Greene Login\nssh greene.hpc.nyu.edu\n"})}),"\n",(0,s.jsx)(n.p,{children:"A new command line interface window will open up that prompts you for your password on the gateway server, from there you can connect to Greene by entering the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"ssh greene.hpc.nyu.edu\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},4922:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/putty_config-1870760ac54d7b38b1447a6e082ccea2.png"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var o=t(6540);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);