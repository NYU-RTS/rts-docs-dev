"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8633],{7559:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>o});const a=JSON.parse('{"id":"hpc/containers/squash_file_system_and_singularity","title":"Squash File System and Singularity","description":"View available datasets on the Datasets page.","source":"@site/docs/hpc/07_containers/04_squash_file_system_and_singularity.md","sourceDirName":"hpc/07_containers","slug":"/hpc/containers/squash_file_system_and_singularity","permalink":"/rts-docs-dev/pr-preview/pr-77/docs/hpc/containers/squash_file_system_and_singularity","draft":false,"unlisted":false,"editUrl":"https://github.com/NYU-ITS/rts-docs-dev/blob/main/docs/hpc/07_containers/04_squash_file_system_and_singularity.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{},"sidebar":"hpcSidebar","previous":{"title":"Singularity with Conda","permalink":"/rts-docs-dev/pr-preview/pr-77/docs/hpc/containers/singularity_with_conda"},"next":{"title":"Machine Learning on HPC","permalink":"/rts-docs-dev/pr-preview/pr-77/docs/hpc/ml_ai_hpc/intro"}}');var t=n(5105),i=n(3881);const r={},c="Squash File System and Singularity",l={},o=[{value:"Working with Datasets",id:"working-with-datasets",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"squash-file-system-and-singularity",children:"Squash File System and Singularity"})}),"\n",(0,t.jsxs)(s.p,{children:["View available datasets on the ",(0,t.jsx)(s.a,{href:"/rts-docs-dev/pr-preview/pr-77/docs/hpc/datasets/intro",children:"Datasets page"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"working-with-datasets",children:"Working with Datasets"}),"\n",(0,t.jsx)(s.p,{children:"Writable ext3 overlay images have conda environments installed inside, Singularity can work with squashFS for fixed datasets, such as the coco datasets."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"/scratch/work/public/ml-datasets/coco/coco-2014.sqf\n/scratch/work/public/ml-datasets/coco/coco-2015.sqf\n/scratch/work/public/ml-datasets/coco/coco-2017.sqf\n\n\nsingularity exec \\\n--overlay /scratch/wang/zzz/pytorch1.8.0-cuda11.1.ext3:ro \\\n--overlay /scratch/work/public/ml-datasets/coco/coco-2014.sqf:ro \\\n--overlay /scratch/work/public/ml-datasets/coco/coco-2015.sqf:ro \\\n--overlay /scratch/work/public/ml-datasets/coco/coco-2017.sqf:ro \\\n/scratch/work/public/singularity/cuda11.1-cudnn8-devel-ubuntu18.04.sif /bin/bash\n"})}),"\n",(0,t.jsx)(s.p,{children:"If you have many tiny files as fixed datasets, please make squashFS files to work with Singularity. Here is an example"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Make a temporary folder in /state/partition1, it is a folder in local hard drive on each computer node"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"mkdir -p /state/partition1/sw77\ncd /state/partition1/sw77\n"})}),"\n",(0,t.jsxs)(s.ol,{start:"2",children:["\n",(0,t.jsx)(s.li,{children:"Unzip files there, for example"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"tar -vxzf /scratch/work/public/examples/squashfs/imagenet-example.tar.gz\n"})}),"\n",(0,t.jsxs)(s.ol,{start:"3",children:["\n",(0,t.jsx)(s.li,{children:"Change access permissions in case we'll share files with others"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"find imagenet-example -type d -exec chmod 755 {} \\;\nfind imagenet-example -type f -exec chmod 644 {} \\;\n"})}),"\n",(0,t.jsxs)(s.ol,{start:"4",children:["\n",(0,t.jsx)(s.li,{children:"Convert to a single squashFS file on host"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"mksquashfs imagenet-example imagenet-example.sqf  -keep-as-directory\n"})}),"\n",(0,t.jsxs)(s.p,{children:["For more details on working with squashFS, please see ",(0,t.jsx)(s.a,{href:"http://www.iitk.ac.in/LDP/HOWTO/SquashFS-HOWTO/mksqoverview.html",children:"this page from the SquashFS documentation"}),"."]}),"\n",(0,t.jsxs)(s.ol,{start:"5",children:["\n",(0,t.jsx)(s.li,{children:"Copy this file to /scratch"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"cp -rp /state/partition1/sw77/imagenet-example.sqf /scratch/sw77/.\n"})}),"\n",(0,t.jsxs)(s.ol,{start:"6",children:["\n",(0,t.jsx)(s.li,{children:"To test, files are in /imagenet-example inside Singularity container"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"singularity exec --overlay /scratch/sw77/imagenet-example.sqf:ro /scratch/work/public/singularity/ubuntu-20.04.1.sif /bin/bash\nSingularity> find /imagenet-example | wc -l\n1303\nSingularity> find /state/partition1/sw77/imagenet-example | wc -l\n1303\n"})}),"\n",(0,t.jsxs)(s.ol,{start:"7",children:["\n",(0,t.jsx)(s.li,{children:"To delete the tempoary folder on host"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"rm -rf /state/partition1/sw77\n"})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},3881:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>c});var a=n(8101);const t={},i=a.createContext(t);function r(e){const s=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(i.Provider,{value:s},e.children)}}}]);