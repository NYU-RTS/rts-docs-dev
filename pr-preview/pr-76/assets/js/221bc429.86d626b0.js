"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7700],{757:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"hpc/storage/best_practices","title":"Best Practices on HPC Storage","description":"User Quota Limits and the myquota command","source":"@site/docs/hpc/03_storage/06_best_practices.md","sourceDirName":"hpc/03_storage","slug":"/hpc/storage/best_practices","permalink":"/rts-docs-dev/pr-preview/pr-76/docs/hpc/storage/best_practices","draft":false,"unlisted":false,"editUrl":"https://github.com/NYU-ITS/rts-docs-dev/blob/main/docs/hpc/03_storage/06_best_practices.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{},"sidebar":"hpcSidebar","previous":{"title":"Research Project Space (RPS)","permalink":"/rts-docs-dev/pr-preview/pr-76/docs/hpc/storage/research_project_space"},"next":{"title":"Large Number of Small Files","permalink":"/rts-docs-dev/pr-preview/pr-76/docs/hpc/storage/large_number_of_small_files"}}');var o=n(5105),r=n(3881);const a={},i="Best Practices on HPC Storage",c={},d=[{value:"User Quota Limits and the myquota command",id:"user-quota-limits-and-the-myquota-command",level:2},{value:"Large number of small files",id:"large-number-of-small-files",level:2},{value:"Installing Python packages",id:"installing-python-packages",level:2}];function l(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.header,{children:(0,o.jsx)(s.h1,{id:"best-practices-on-hpc-storage",children:"Best Practices on HPC Storage"})}),"\n",(0,o.jsx)(s.h2,{id:"user-quota-limits-and-the-myquota-command",children:"User Quota Limits and the myquota command"}),"\n",(0,o.jsxs)(s.p,{children:["All users have quote limits set on HPC fie systems. There are several types of quota limits, such as limits on the amount of disk space (disk quota), number of files (inode quota) etc. The default user quota limits on HPC file systems are listed ",(0,o.jsx)(s.a,{href:"/rts-docs-dev/pr-preview/pr-76/docs/hpc/storage/intro_and_data_management#hpc-storage-mounts-comparison-table",children:"on our Data Management page"}),"."]}),"\n",(0,o.jsx)(s.p,{children:"Running out of quota causes a variety of issues such as running user jobs being interrupted or users being unable to finish the installation of packages under their home directory."}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.em,{children:"One of the common issues users report is running out of inodes in their home directory."})," This usually occurs during software installation, for example installing conda environment under their home directory. Users can check their current utilization of quota using the myquota command. The myquota command provides a report of the current quota limits on mounted file systems, the user's  quota utilization, as well as the percentage of quota utilization."]}),"\n",(0,o.jsxs)(s.p,{children:["In the following example the user who executes the ",(0,o.jsx)(s.code,{children:"myquota"})," command is out of inodes in their home directory. The user inode quota"]}),"\n",(0,o.jsxs)(s.p,{children:["limit on the ",(0,o.jsx)(s.code,{children:"/home"})," file system ",(0,o.jsx)(s.strong,{children:"30.0K inodes"})," and the user has ",(0,o.jsx)(s.strong,{children:"33000 inodes"}),", thus ",(0,o.jsx)(s.strong,{children:"110%"})," of the inode quota limit."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-sh",children:"$ myquota\nHostname: log-1 at Sun Mar 21 21:59:08 EDT 2021\nFilesystem   Environment   Backed up?   Allocation       Current Usage\nSpace        Variable      /Flushed?    Space / Files    Space(%) / Files(%)\n/home        $HOME         Yes/No       50.0GB/30.0K       8.96GB(17.91%)/33000(110.00%)\n/scratch     $SCRATCH      No/Yes        5.0TB/1.0M     811.09GB(15.84%)/2437(0.24%)\n/archive     $ARCHIVE      Yes/No        2.0TB/20.0K       0.00GB(0.00%)/1(0.00%)\n/vast        $VAST         No/Yes        2.0TB/5.0M        0.00GB(0.00%)/1(0.00%)\n"})}),"\n",(0,o.jsxs)(s.p,{children:["Users can find out the number of inodes (files) used per subdirectory under their home directory (",(0,o.jsx)(s.code,{children:"$HOME"}),"), by running the following commands:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-sh",children:"$cd $HOME\n$ for d in $(find $(pwd) -maxdepth 1 -mindepth 1 -type d | sort -u); do n_files=$(find $d | wc -l); echo $d $n_files; done\n/home/netid/.cache 1507\n/home/netid/.conda 2\n/home/netid/.config 2\n/home/netid/.ipython 11\n/home/netid/.jupyter 2\n/home/netid/.keras 2\n/home/netid/.local 24185\n/home/netid/.nv 2\n/home/netid/.sacrebleu 46\n/home/netid/.singularity 1\n/home/netid/.ssh 5\n/home/netid/.vscode-server 7216\n"})}),"\n",(0,o.jsx)(s.h2,{id:"large-number-of-small-files",children:"Large number of small files"}),"\n",(0,o.jsx)(s.p,{children:"In case your dataset or workflow requires to use large number of small files, this can create a bottleneck due to read/write rates."}),"\n",(0,o.jsxs)(s.p,{children:["Please refer to our page on working with a ",(0,o.jsx)(s.a,{href:"/rts-docs-dev/pr-preview/pr-76/docs/hpc/storage/large_number_of_small_files",children:"large number of files"})," to learn about some of the options we recommend to consider."]}),"\n",(0,o.jsx)(s.h2,{id:"installing-python-packages",children:"Installing Python packages"}),"\n",(0,o.jsx)(s.p,{children:"Your home directory has relatively small number of inodes.\nIn case you would create conda or python environment in you home directory, this can eat up all the inodes."}),"\n",(0,o.jsxs)(s.p,{children:["Please review best practices for managing packages under the Package Management section of the ",(0,o.jsx)(s.a,{href:"/rts-docs-dev/pr-preview/pr-76/docs/hpc/tools_and_software/software_on_greene",children:"Greene Software Page"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},3881:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>i});var t=n(8101);const o={},r=t.createContext(o);function a(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);