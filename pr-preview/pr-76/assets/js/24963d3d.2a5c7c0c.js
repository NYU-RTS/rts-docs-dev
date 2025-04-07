"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6848],{1699:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"hpc/storage/data_transfers","title":"Data Transfers","description":"Introduction","source":"@site/docs/hpc/03_storage/03_data_transfers.md","sourceDirName":"hpc/03_storage","slug":"/hpc/storage/data_transfers","permalink":"/rts-docs-dev/pr-preview/pr-76/docs/hpc/storage/data_transfers","draft":false,"unlisted":false,"editUrl":"https://github.com/NYU-ITS/rts-docs-dev/blob/main/docs/hpc/03_storage/03_data_transfers.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"hpcSidebar","previous":{"title":"Available storage systems","permalink":"/rts-docs-dev/pr-preview/pr-76/docs/hpc/storage/available_storage_systems"},"next":{"title":"Globus","permalink":"/rts-docs-dev/pr-preview/pr-76/docs/hpc/storage/globus"}}');var t=s(5105),a=s(3881);const o={},i="Data Transfers",l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Data-Transfer nodes",id:"data-transfer-nodes",level:2},{value:"Linux &amp; Mac Tools",id:"linux--mac-tools",level:2},{value:"scp and rsync",id:"scp-and-rsync",level:3},{value:"Windows Tools",id:"windows-tools",level:2},{value:"File Transfer Clients",id:"file-transfer-clients",level:3},{value:"Tunneling",id:"tunneling",level:3},{value:"Globus",id:"globus",level:2},{value:"rclone",id:"rclone",level:2},{value:"Open OnDemand",id:"open-ondemand",level:2},{value:"FDT",id:"fdt",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"data-transfers",children:"Data Transfers"})}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"The main tools to transfer data to/from HPC systems"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Linux tools like scp and rsync"}),"\n",(0,t.jsx)(n.li,{children:"Please use Data transfer nodes"}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Note: while one can transfer data while on login nodes, it is  considered a bad practice"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Globus"}),"\n",(0,t.jsx)(n.li,{children:"rclone to/from cloud storage like NYU (Google) Drive"}),"\n",(0,t.jsx)(n.li,{children:"OpenOnDemand"}),"\n",(0,t.jsx)(n.li,{children:"Other tools"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"data-transfer-nodes",children:"Data-Transfer nodes"}),"\n",(0,t.jsx)(n.p,{children:"Attached to the NYU HPC cluster Greene, the Greene Data Transfer Node (gDTN) are  nodes optimized for transferring data between cluster file systems (e.g. scratch)  and other endpoints outside the NYU HPC clusters, including user laptops and desktops. The gDTNs have 100-Gb/s Ethernet connections to the High Speed Research Network (HSRN) and are connected to the HDR Infiniband fabric of the HPC clusters."}),"\n",(0,t.jsxs)(n.p,{children:["The HPC cluster filesystems include ",(0,t.jsx)(n.code,{children:"/home"}),", ",(0,t.jsx)(n.code,{children:"/scratch"}),", ",(0,t.jsx)(n.code,{children:"/archive"})," and the ",(0,t.jsx)(n.a,{href:"/rts-docs-dev/pr-preview/pr-76/docs/hpc/storage/research_project_space",children:"HPC Research Project Space"})," are available on the gDTN."]}),"\n",(0,t.jsx)(n.p,{children:"The Data-Transfer Node (DTN) can be access in a variety of ways"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"From NYU-net and the High Speed Research Network: use SSH to the DTN hostname gdtn.hpc.nyu.edu"}),"\n",(0,t.jsx)(n.li,{children:"From the Greene cluster (e.g., the login nodes): the hostname can be shortened to gdtn"}),"\n",(0,t.jsx)(n.li,{children:"For example, to log in to a DTN from the Greene cluster, to carry out some copy operation, and to log back out, you can use a command sequence like:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"ssh gdtn\nrsync ...\nlogout\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Via specific tools like Globus (see below)"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"linux--mac-tools",children:"Linux & Mac Tools"}),"\n",(0,t.jsx)(n.h3,{id:"scp-and-rsync",children:"scp and rsync"}),"\n",(0,t.jsx)(n.p,{children:"Please transfer data using Data-Transfer nodes"}),"\n",(0,t.jsx)(n.p,{children:"Sometimes these two tools are convenient for transferring small files. Using the DTNs does not require to set up an SSH tunnel; use the hostname dtn.hpc.nyu.edu for one-step copying. See below for examples of commands invoked on the command line on a laptop running a Unix-like operating system:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"scp HMLHWBGX7_n01_HK16.fastq.gz jdoe55@dtn.hpc.nyu.edu:/scratch/jdoe55/\nrsync -av HMLHWBGX7_n01_HK16.fastq.gz jdoe55@dtn.hpc.nyu.edu:/scratch/jdoe55/ \n"})}),"\n",(0,t.jsx)(n.p,{children:"In particular, rsync can also be used on the DTNs to copy directories recursively between filesystems, e.g. (assuming that you are logged in to a DTN),"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"rsync -av /scratch/username/project1 /rw/sharename/\n"})}),"\n",(0,t.jsx)(n.p,{children:"where username would be your user name, project1 a directory to be copied to the Research Workspace, and sharename the name of a share on the Research Workspace (either your NetID or the name of a project you're a member of)."}),"\n",(0,t.jsx)(n.h2,{id:"windows-tools",children:"Windows Tools"}),"\n",(0,t.jsx)(n.h3,{id:"file-transfer-clients",children:"File Transfer Clients"}),"\n",(0,t.jsxs)(n.p,{children:["Windows 10 machines may have the Linux Subsystem installed, which will allow for the use of Linux tools, as listed above, but generally it is recommended to use a client such as ",(0,t.jsx)(n.a,{href:"https://winscp.net/eng/docs/tunneling",children:"WinSCP"})," or ",(0,t.jsx)(n.a,{href:"https://filezilla-project.org/",children:"FileZilla"})," to transfer data. Additionally, Windows users may also take advantage of ",(0,t.jsx)(n.a,{href:"/rts-docs-dev/pr-preview/pr-76/docs/hpc/storage/globus",children:"Globus"})," to transfer files."]}),"\n",(0,t.jsx)(n.h3,{id:"tunneling",children:"Tunneling"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/rts-docs-dev/pr-preview/pr-76/docs/hpc/connecting_to_hpc/ssh_tunneling_and_x11_forwarding",children:"Read the detailed instructions for setting up tunnels."})}),"\n",(0,t.jsx)(n.h2,{id:"globus",children:"Globus"}),"\n",(0,t.jsx)(n.p,{children:"Globus is the recommended tool to use for large-volume data transfers. It features automatic performance tuning and automatic retries in cases of file-transfer failures. Data-transfer tasks can be submitted via a web portal. The Globus service will take care of the rest, to make sure files are copied efficiently, reliably, and securely. Globus is also a tool for you to share data with collaborators, for whom you only need to provide the email addresses."}),"\n",(0,t.jsxs)(n.p,{children:["The Globus endpoint for Greene is available at ",(0,t.jsx)(n.code,{children:"nyu#greene"}),". The endpoint ",(0,t.jsx)(n.code,{children:"nyu#prince"})," has been retired."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/rts-docs-dev/pr-preview/pr-76/docs/hpc/storage/globus",children:"Please see detailed instructions"})}),"\n",(0,t.jsx)(n.h2,{id:"rclone",children:"rclone"}),"\n",(0,t.jsx)(n.p,{children:"rclone - rsync for cloud storage, is a command line program to sync files and directories to and from cloud storage systems such as Google Drive, Amazon Drive, S3, B2 etc. rclone is available on DTNs."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://rclone.org/",children:"Please see the documentation for how to use it."})}),"\n",(0,t.jsx)(n.h2,{id:"open-ondemand",children:"Open OnDemand"}),"\n",(0,t.jsx)(n.p,{children:"One can use Open OnDemand interface to upload data.\nHowever, please use it only for small data!"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Please use Data-Transfer nodes while moving large data"})}),"\n",(0,t.jsx)(n.h3,{id:"fdt",children:"FDT"}),"\n",(0,t.jsxs)(n.p,{children:['FDT stands for "Fast Data Transfer". It is a command line application written in Java. With the plugin mechanism, FDT allows users to load user-defined classes for Pre- and Post-Processing of file transfers. Users can start their own server processes. If you have use cases for FDT, visit the download page to get ',(0,t.jsx)(n.code,{children:"fdt.jar"})," to start. Please contact ",(0,t.jsx)(n.a,{href:"mailto:hpc@nyu.edu",children:"hpc@nyu.edu"})," for any questions."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},3881:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>i});var r=s(8101);const t={},a=r.createContext(t);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);