"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7145],{5943:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"hpc/storage/available_storage_systems","title":"Available storage systems","description":"The NYU HPC clusters are served by a General Parallel File System (GPFS) storage cluster. GPFS is a high-performance clustered file system software developed by IBM that provides concurrent high-speed file access to applications executing on multiple nodes of clusters.","source":"@site/docs/hpc/03_storage/02_available_storage_systems.md","sourceDirName":"hpc/03_storage","slug":"/hpc/storage/available_storage_systems","permalink":"/rts-docs-dev/pr-preview/pr-74/docs/hpc/storage/available_storage_systems","draft":false,"unlisted":false,"editUrl":"https://github.com/NYU-ITS/rts-docs-dev/blob/main/docs/hpc/03_storage/02_available_storage_systems.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{},"sidebar":"hpcSidebar","previous":{"title":"HPC Storage","permalink":"/rts-docs-dev/pr-preview/pr-74/docs/hpc/storage/intro_and_data_management"},"next":{"title":"Data Transfers","permalink":"/rts-docs-dev/pr-preview/pr-74/docs/hpc/storage/data_transfers"}}');var a=r(5105),t=r(3881);const i={},l="Available storage systems",o={},c=[{value:"GPFS",id:"gpfs",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Performance",id:"performance",level:3},{value:"Flash Tier Storage (VAST)",id:"flash-tier-storage-vast",level:2},{value:"Research Project Space (RPS)",id:"research-project-space-rps",level:2},{value:"Data Transfer Nodes Specs (gDTN)",id:"data-transfer-nodes-specs-gdtn",level:2}];function d(e){const s={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.header,{children:(0,a.jsx)(s.h1,{id:"available-storage-systems",children:"Available storage systems"})}),"\n",(0,a.jsx)(s.p,{children:"The NYU HPC clusters are served by a General Parallel File System (GPFS) storage cluster. GPFS is a high-performance clustered file system software developed by IBM that provides concurrent high-speed file access to applications executing on multiple nodes of clusters."}),"\n",(0,a.jsx)(s.h2,{id:"gpfs",children:"GPFS"}),"\n",(0,a.jsx)(s.h3,{id:"configuration",children:"Configuration"}),"\n",(0,a.jsx)(s.p,{children:"The NYU HPC cluster storage runs on Lenovo Distributed Storage Solution DSS-G hardware:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["2x DSS-G 202","\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"116 Solid State Drives (SSDs)"}),"\n",(0,a.jsx)(s.li,{children:"464TB raw storage"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["2x DSS-G 240","\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"668 Hard Disk Drives (HDDs)"}),"\n",(0,a.jsx)(s.li,{children:"9.1PB raw storage"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"performance",children:"Performance"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Read Speed: 78 GB per second read speeds"}),"\n",(0,a.jsx)(s.li,{children:"Write Speed: 42 GB per second write speeds"}),"\n",(0,a.jsx)(s.li,{children:"I/O Performance: up to 650k input/output operations per second (IOPS)"}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"flash-tier-storage-vast",children:"Flash Tier Storage (VAST)"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["An all flash file system, using ",(0,a.jsx)(s.a,{href:"https://www.vastdata.com/",children:"VAST Flash storage"}),", is now available on Greene. Flash storage is optimal for computational workloads with high I/O rates. For example, If you have jobs to run with huge amount of tiny files, VAST may be a good candidate.  If you and your lab members are interested, please reach out to ",(0,a.jsx)(s.a,{href:"mailto:hpc@nyu.edu",children:"hpc@nyu.edu"})," for more information."]}),"\n",(0,a.jsx)(s.li,{children:"NVMe interface"}),"\n",(0,a.jsx)(s.li,{children:"Total size: 778 TB"}),"\n",(0,a.jsx)(s.li,{children:"Access: /vast is available for all users to read and available to approved users to write data."}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"research-project-space-rps",children:"Research Project Space (RPS)"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Research Project Space (RPS) volumes provide working spaces for sharing data and code amongst project or lab members."}),"\n",(0,a.jsx)(s.li,{children:"RPS directories are available on the Greene HPC cluster."}),"\n",(0,a.jsx)(s.li,{children:"There is no old-file purging policy on RPS."}),"\n",(0,a.jsx)(s.li,{children:"RPS is backed up."}),"\n",(0,a.jsx)(s.li,{children:"There is a cost per TB per year and inodes per year for RPS volumes."}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["More information on the ",(0,a.jsx)(s.a,{href:"/rts-docs-dev/pr-preview/pr-74/docs/hpc/storage/research_project_space",children:"Research Project Space is available page"}),"."]}),"\n",(0,a.jsx)(s.h2,{id:"data-transfer-nodes-specs-gdtn",children:"Data Transfer Nodes Specs (gDTN)"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Node type: Lenovo SR630"}),"\n",(0,a.jsx)(s.li,{children:"Number of nodes: 2"}),"\n",(0,a.jsx)(s.li,{children:"CPU:  2x Intel Xeon Gold 6244 8C 150W 3.6GHz Processor"}),"\n",(0,a.jsx)(s.li,{children:"Memory: 192GB   (total) - 12x 16GB DDR4, 2933MHz"}),"\n",(0,a.jsx)(s.li,{children:"Local disk:  1x 1.92TB SSD"}),"\n",(0,a.jsx)(s.li,{children:"Infiniband interconnect: 1x Mellanox ConnectX-6 HDR100 /100GbE VPI 1-Port x16 PCIe 3.0 HCA"}),"\n",(0,a.jsx)(s.li,{children:"Ethernet connectivity to the NYU High-Speed Research Network ( HSRN ):  200Gbit  - 1x Mellanox ConnectX-5 EDR IB/100GbE VPI Dual-Port x16 PCIe 3.0 HCA"}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},3881:(e,s,r)=>{r.d(s,{R:()=>i,x:()=>l});var n=r(8101);const a={},t=n.createContext(a);function i(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);