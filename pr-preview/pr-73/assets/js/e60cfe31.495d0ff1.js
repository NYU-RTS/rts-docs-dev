"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9594],{8708:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"hpc/storage/intro_and_data_management","title":"HPC Storage","description":"The NYU HPC clusters are served by a General Parallel File System (GPFS) cluster and an all Flash VAST storage cluster.","source":"@site/docs/hpc/03_storage/01_intro_and_data_management.mdx","sourceDirName":"hpc/03_storage","slug":"/hpc/storage/intro_and_data_management","permalink":"/rts-docs-dev/pr-preview/pr-73/docs/hpc/storage/intro_and_data_management","draft":false,"unlisted":false,"editUrl":"https://github.com/NYU-ITS/rts-docs-dev/blob/main/docs/hpc/03_storage/01_intro_and_data_management.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"hpcSidebar","previous":{"title":"Open OnDemand (Web-based Graphical User Interface)","permalink":"/rts-docs-dev/pr-preview/pr-73/docs/hpc/connecting_to_hpc/ood"},"next":{"title":"Available storage systems","permalink":"/rts-docs-dev/pr-preview/pr-73/docs/hpc/storage/available_storage_systems"}}');var t=r(5105),i=r(3881);const a={},o="HPC Storage",c={},d=[{value:"Highlights",id:"highlights",level:2},{value:"Introduction to HPC Data Management",id:"introduction-to-hpc-data-management",level:2},{value:"Data Security Warning",id:"data-security-warning",level:3},{value:"Moderate Risk Data - HPC Approved",id:"moderate-risk-data---hpc-approved",level:4},{value:"High Risk Data - Secure Research Data Environments (SRDE) Approved",id:"high-risk-data---secure-research-data-environments-srde-approved",level:4},{value:"Data Storage options in the HPC Environment",id:"data-storage-options-in-the-hpc-environment",level:3},{value:"User Home Directories",id:"user-home-directories",level:4},{value:"HPC Scratch",id:"hpc-scratch",level:4},{value:"HPC Vast",id:"hpc-vast",level:4},{value:"HPC Research Project Space",id:"hpc-research-project-space",level:4},{value:"HPC Work",id:"hpc-work",level:4},{value:"HPC Archive",id:"hpc-archive",level:4},{value:"NYU (Google) Drive",id:"nyu-google-drive",level:4},{value:"HPC Storage Mounts Comparison Table",id:"hpc-storage-mounts-comparison-table",level:4}];function l(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"hpc-storage",children:"HPC Storage"})}),"\n",(0,t.jsx)(s.p,{children:"The NYU HPC clusters are served by a General Parallel File System (GPFS) cluster and an all Flash VAST storage cluster."}),"\n",(0,t.jsxs)(s.p,{children:["The NYU HPC team supports data storage, transfer, and archival needs on the HPC clusters, as well as collaborative research services like the ",(0,t.jsx)(s.a,{href:"/rts-docs-dev/pr-preview/pr-73/docs/hpc/storage/research_project_space",children:"Research Project Space (RPS)"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"highlights",children:"Highlights"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["9.5 PB Total GPFS Storage","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Up to 78 GB per second read speeds"}),"\n",(0,t.jsx)(s.li,{children:"Up to 650k input/output operations per second (IOPS)"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.li,{children:"Research Project Space (RPS): RPS volumes provide working spaces for sharing data and code amongst project or lab members"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"introduction-to-hpc-data-management",children:"Introduction to HPC Data Management"}),"\n",(0,t.jsxs)(s.p,{children:["The NYU HPC Environment provides access to a number of ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"file systems"})})," to better serve the needs of researchers managing data during the various stages of the research data lifecycle (data capture, analysis, archiving, etc.). Each HPC file system comes with different features, policies, and availability."]}),"\n",(0,t.jsxs)(s.p,{children:["In addition, a number of ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"data management tools"})})," are available that enable data transfers and  data sharing, recommended best practices, and various scenarios and use cases of managing data in the HPC Environment."]}),"\n",(0,t.jsxs)(s.p,{children:["Multiple ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"public data sets"})})," are available to all users of the HPC environment, such as a subset of The Cancer Genome Atlas (TCGA), the Million Song Database, ImageNet, and Reference Genomes."]}),"\n",(0,t.jsxs)(s.p,{children:["Below is a list of file systems with their characteristics and a summary table. Reviewing the list of available file systems and the various Scenarios/Use cases that are presented below, can help select the right file systems for a research project. As always, if you have any questions about data storage in the HPC environment, you can request a consultation with the HPC team by sending email to ",(0,t.jsx)(s.a,{href:"mailto:hpc@nyu.edu",children:"hpc@nyu.edu"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"data-security-warning",children:"Data Security Warning"}),"\n",(0,t.jsxs)(s.admonition,{type:"warning",children:[(0,t.jsx)(s.h4,{id:"moderate-risk-data---hpc-approved",children:"Moderate Risk Data - HPC Approved"}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["The HPC Environment has been approved for storing and analyzing ",(0,t.jsx)(s.strong,{children:"Moderate Risk research data"}),", as defined in the ",(0,t.jsx)(s.a,{href:"https://www.nyu.edu/about/policies-guidelines-compliance/policies-and-guidelines/electronic-data-and-system-risk-classification.html",children:"NYU Electronic Data and System Risk Classification Policy"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"High Risk"})," research data, such as those that include Personal Identifiable Information (",(0,t.jsx)(s.strong,{children:"PII"}),") or electronic Protected Health Information (",(0,t.jsx)(s.strong,{children:"ePHI"}),") or Controlled Unclassified Information (",(0,t.jsx)(s.strong,{children:"CUI"}),") ",(0,t.jsx)(s.strong,{children:"should NOT be stored in the HPC Environment"}),"."]}),"\n"]}),(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsx)(s.p,{children:"only the Office of Sponsored Projects (OSP) and Global Office of Information Security (GOIS) are empowered to classify the risk categories of data."})}),(0,t.jsxs)(s.admonition,{type:"tip",children:[(0,t.jsx)(s.h4,{id:"high-risk-data---secure-research-data-environments-srde-approved",children:"High Risk Data - Secure Research Data Environments (SRDE) Approved"}),(0,t.jsxs)(s.p,{children:["Because the HPC system is not approved for High Risk data, we recommend using an approved system like the  ",(0,t.jsx)(s.a,{href:"/rts-docs-dev/pr-preview/pr-73/docs/srde/getting_started/intro",children:"Secure Research Data Environments (SRDE)"}),"."]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"data-storage-options-in-the-hpc-environment",children:"Data Storage options in the HPC Environment"}),"\n",(0,t.jsx)(s.h4,{id:"user-home-directories",children:"User Home Directories"}),"\n",(0,t.jsxs)(s.p,{children:["Every individual user has a home directory (under ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"/home/$USER"})}),", environment variable ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"$HOME"})}),") for permanently storing code and important configuration files. Home Directories provide limited storage space (",(0,t.jsx)(s.strong,{children:"50 GB"}),") and inodes (files) ",(0,t.jsx)(s.strong,{children:"30,000"})," per user. Users can check their quota utilization using the ",(0,t.jsx)(s.a,{href:"http://www.info-ren.org/projects/ckp/tech/software/version/myquota.html",children:"myquota"})," command."]}),"\n",(0,t.jsxs)(s.p,{children:["User home directories are backed up daily and old files under ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"$HOME"})})," are not purged."]}),"\n",(0,t.jsx)(s.p,{children:"The User home directories are available on all HPC clusters (Greene) and on every cluster node (login nodes, compute nodes) as well as and Data Transfer Node (gDTN)."}),"\n",(0,t.jsx)(s.admonition,{type:"warning",children:(0,t.jsx)(s.p,{children:"Avoid changing file and directory permissions in your home directory to allow other users to access files."})}),"\n",(0,t.jsxs)(s.p,{children:["User Home Directories are not ideal for sharing files and folders with other users. HPC Scratch or ",(0,t.jsx)(s.a,{href:"/rts-docs-dev/pr-preview/pr-73/docs/hpc/storage/research_project_space",children:"Research Project Space (RPS)"})," are better file systems for sharing data."]}),"\n",(0,t.jsx)(s.admonition,{type:"warning",children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"One of the common issues that users report regarding their home directories is running out of inodes,"})," i.e. the number of files  stored under their home exceeds the inode limit, which by default is set to 30,000 files. This typically occurs when users install software under their home directories, for example, when working with Conda and Julia environments, that involve many small files."]})}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["To find out the current space and inode quota utilization and the distribution of files under your home directory, please see: ",(0,t.jsx)(s.a,{href:"/rts-docs-dev/pr-preview/pr-73/docs/hpc/storage/best_practices#user-quota-limits-and-the-myquota-command",children:"Understanding user quota limits and the myquota command."})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Working with Conda environments:"})," To avoid running out of inode limits in home directories, the HPC team recommends ",(0,t.jsx)(s.strong,{children:"setting up conda environments with Singularity overlay images"})]}),"\n"]})}),"\n",(0,t.jsx)(s.h4,{id:"hpc-scratch",children:"HPC Scratch"}),"\n",(0,t.jsxs)(s.p,{children:["The HPC scratch file system is the HPC file system where most of the users store research data needed during the analysis phase of their research projects. The scratch file system provides ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"temporary"})})," storage for datasets needed for running jobs."]}),"\n",(0,t.jsxs)(s.p,{children:["Files stored in the HPC scratch file system are subject to the ",(0,t.jsxs)("ins",{children:[(0,t.jsx)(s.strong,{children:"HPC Scratch old file purging policy:"})," Files on the /scratch file system that have not been accessed for 60 or more days will be purged."]})]}),"\n",(0,t.jsxs)(s.p,{children:["Every user has a dedicated scratch directory (",(0,t.jsx)(s.strong,{children:"/scratch/$USER"}),") with ",(0,t.jsx)(s.strong,{children:"5 TB"})," disk quota and ",(0,t.jsx)(s.strong,{children:"1,000,000 inodes"})," (files) limit per user."]}),"\n",(0,t.jsx)(s.p,{children:"The scratch file system is available on all nodes (compute, login, etc.) on Greene as well as Data Transfer Node (gDTN)."}),"\n",(0,t.jsx)(s.admonition,{type:"warning",children:(0,t.jsxs)(s.p,{children:["There are ",(0,t.jsx)(s.strong,{children:"No Back ups of the scratch file system."})," ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"Files that were deleted accidentally or removed due to storage system failures CAN NOT be recovered."})})]})}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Since there are ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"no back ups of HPC Scratch file system"})}),", users should not put important source code, scripts, libraries, executables in ",(0,t.jsx)(s.code,{children:"/scratch"}),". These important files should be stored in file systems that are backed up, such as ",(0,t.jsx)(s.code,{children:"/home"})," or ",(0,t.jsx)(s.a,{href:"/rts-docs-dev/pr-preview/pr-73/docs/hpc/storage/research_project_space",children:"Research Project Space (RPS)"}),". Code can also be stored in a ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"git"})})," repository."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"Old file purging policy on HPC Scratch:"})})," ",(0,t.jsxs)("ins",{children:["All files on the HPC Scratch file system that have not been accessed ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"for more than 60 days"})})," will be removed.  It is a policy violation to use scripts to change the file access time."]})," Any user found to be violating this policy will have their HPC account locked. A second violation may result in your HPC account being turned off."]}),"\n",(0,t.jsxs)(s.li,{children:["To find out the user's current disk space and inode quota utilization and the distribution of files under your scratch directory, please see: ",(0,t.jsx)(s.a,{href:"/rts-docs-dev/pr-preview/pr-73/docs/hpc/storage/best_practices#user-quota-limits-and-the-myquota-command",children:"Understanding user quota Limits and the myquota command."})]}),"\n",(0,t.jsxs)(s.li,{children:["Once a research project completes, users should archive their important files in the ",(0,t.jsx)(s.a,{href:"/rts-docs-dev/pr-preview/pr-73/docs/hpc/storage/intro_and_data_management#hpc-archive",children:"HPC Archive file system"}),"."]}),"\n"]})}),"\n",(0,t.jsx)(s.h4,{id:"hpc-vast",children:"HPC Vast"}),"\n",(0,t.jsxs)(s.p,{children:["The HPC Vast all-flash file system is the HPC file system where users store research data needed during the analysis phase of their research projects, particuarly for high I/O data that can bottleneck on the scratch file system. The Vast file system provides ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"temporary"})})," storage for datasets needed for running jobs."]}),"\n",(0,t.jsxs)(s.p,{children:["Files stored in the HPC vast file system are subject to the ",(0,t.jsxs)("ins",{children:[(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"HPC Vast old file purging policy:"})})," Files on the ",(0,t.jsx)(s.code,{children:"/vast"})," file system that have not been accessed for ",(0,t.jsx)(s.strong,{children:"60 or more days"})," will be purged."]})]}),"\n",(0,t.jsxs)(s.p,{children:["Every user has a dedicated vast directory (",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"/vast/$USER"})}),") with ",(0,t.jsx)(s.strong,{children:"2 TB"})," disk quota and ",(0,t.jsx)(s.strong,{children:"5,000,000 inodes"})," (files) limit per user."]}),"\n",(0,t.jsx)(s.p,{children:"The vast file system is available on all nodes (compute, login, etc.) on Greene as well as Data Transfer Node (gDTN)."}),"\n",(0,t.jsx)(s.admonition,{type:"warning",children:(0,t.jsxs)(s.p,{children:["There are ",(0,t.jsx)(s.strong,{children:"No Back ups"})," of the vastsc file system. ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"Files that were deleted accidentally or removed due to storage system failures CAN NOT be recovered."})})]})}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Since there are ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"no back ups of HPC Vast file system"})}),", users should not put important source code, scripts, libraries, executables in ",(0,t.jsx)(s.code,{children:"/vast"}),". These important files should be stored in file systems that are backed up, such as ",(0,t.jsx)(s.code,{children:"/home"})," or ",(0,t.jsx)(s.a,{href:"/rts-docs-dev/pr-preview/pr-73/docs/hpc/storage/research_project_space",children:"Research Project Space (RPS)"}),". Code can also be stored in a ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"git"})})," repository."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"Old file purging policy on HPC Vast:"})})," ",(0,t.jsxs)("ins",{children:["All files on the HPC Vast file system that have not been accessed ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"for more than 60 days will be removed."})}),"  It is a policy violation to use scripts to change the file access time."]})," Any user found to be violating this policy will have their HPC account locked. A second violation may result in your HPC account being turned off."]}),"\n",(0,t.jsxs)(s.li,{children:["To find out the user's current disk space and inode quota utilization and the distribution of files under your vast directory, please see: ",(0,t.jsx)(s.a,{href:"/rts-docs-dev/pr-preview/pr-73/docs/hpc/storage/best_practices#user-quota-limits-and-the-myquota-command",children:"Understanding user quota Limits and the myquota command."})]}),"\n",(0,t.jsxs)(s.li,{children:["Once a research project completes, users should archive their important files in the ",(0,t.jsx)(s.a,{href:"/rts-docs-dev/pr-preview/pr-73/docs/hpc/storage/intro_and_data_management#hpc-archive",children:"HPC Archive file system"}),"."]}),"\n"]})}),"\n",(0,t.jsx)(s.h4,{id:"hpc-research-project-space",children:"HPC Research Project Space"}),"\n",(0,t.jsxs)(s.p,{children:["The HPC Research Project Space (RPS) provides data storage space for research projects that is easily shared amongst collaborators, ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"backed up"})}),", and ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"not subject to the old file purging policy"})}),". HPC RPS was introduced to ease data management in the HPC environment and eliminate the need of having to frequently copying files between Scratch and Archive file systems by having all projects files under one area. ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"These benefits of the HPC RPS come at a cost"})}),". The cost is determined by the allocated disk space and the number of files (inodes)."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["For detailed information about RPS see: ",(0,t.jsx)(s.a,{href:"/rts-docs-dev/pr-preview/pr-73/docs/hpc/storage/research_project_space",children:"HPC Research Project Space"})]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"hpc-work",children:"HPC Work"}),"\n",(0,t.jsxs)(s.p,{children:["The HPC team makes available a number of public datasets that are commonly used in analysis jobs. The data sets are available Read-Only under ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"/scratch/work/public"})}),"."]}),"\n",(0,t.jsx)(s.p,{children:"For some of the datasets users must provide a signed usage agreement before accessing."}),"\n",(0,t.jsxs)(s.p,{children:["Public datasets available on the HPC clusters can be viewed on the ",(0,t.jsx)(s.a,{href:"/rts-docs-dev/pr-preview/pr-73/docs/hpc/getting_started/intro",children:"Datasets page"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"hpc-archive",children:"HPC Archive"}),"\n",(0,t.jsxs)(s.p,{children:["Once the Analysis stage of the research data lifecycle has completed, ",(0,t.jsxs)("ins",{children:[(0,t.jsxs)(s.em,{children:["HPC users should ",(0,t.jsx)(s.strong,{children:"tar"})," their data and code into a single tar.gz file and then copy the  file to their archive directory (",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"/archive/$USER"})})]}),")."]})," The HPC Archive file system is not accessible by running jobs; it is suitable for long-term data storage. Each user has access to a default disk quota of ",(0,t.jsx)(s.strong,{children:"2TB"})," and ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"20,000 inode (files) limit"})}),". The rather low limit on the number of inodes per user is intentional.  The archive file system is available only ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"on login nodes"})})," of Greene. The archive file system is backed up daily."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Here is an example ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"tar"})})," command that combines the data in a directory named ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"my_run_dir"})})," under ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"$SCRATCH"})})})," and outputs the tar file in the user's ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"$ARCHIVE"})})}),":"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"# to archive `$SCRATCH/my_run_dir`\ntar cvf $ARCHIVE/simulation_01.tar -C $SCRATCH my_run_dir\n"})}),"\n",(0,t.jsx)(s.h4,{id:"nyu-google-drive",children:"NYU (Google) Drive"}),"\n",(0,t.jsxs)(s.p,{children:["Google Drive (",(0,t.jsx)(s.a,{href:"https://www.nyu.edu/life/information-technology/communication-and-collaboration/document-collaboration-and-sharing/nyu-drive.html",children:"NYU Drive"}),") is accessible from the NYU HPC environment and provides an option to users who wish to archive data or share data with external collaborators who do not have access to the NYU HPC environment."]}),"\n",(0,t.jsx)(s.p,{children:"Currently (March 2021) there is no limit on the amount of data a user can store on Google Drive and there is no cost associated with storing data on Google Drive (although we hear rumors that free storage on Google Drive may be ending soon)."}),"\n",(0,t.jsx)(s.p,{children:"However, there are limits to the data transfer rate in moving to/from Google Drive. Thus, moving many small files to Google Drive is not going to be efficient."}),"\n",(0,t.jsxs)(s.p,{children:["Please read the ",(0,t.jsx)(s.a,{href:"/rts-docs-dev/pr-preview/pr-73/docs/hpc/storage/transferring_cloud_storage_data_with_rclone",children:"Instructions on how to use cloud storage within the NYU HPC Environment"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"hpc-storage-mounts-comparison-table",children:"HPC Storage Mounts Comparison Table"}),"\n",(0,t.jsx)("iframe",{width:"100%",height:"300em",src:"https://docs.google.com/spreadsheets/d/e/2PACX-1vT-q0rRueYg1Be_gcWSghB-GGFDonP8DaXNnm8Qi036w-Vi_l7CCOav4IPxi1yZy8TSnTRFy7S5dNTJ/pubhtml?widget=true&headers=false"}),"\n",(0,t.jsx)(s.p,{children:"Please see the next page for best practices for data management on NYU HPC systems."})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},3881:(e,s,r)=>{r.d(s,{R:()=>a,x:()=>o});var n=r(8101);const t={},i=n.createContext(t);function a(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);