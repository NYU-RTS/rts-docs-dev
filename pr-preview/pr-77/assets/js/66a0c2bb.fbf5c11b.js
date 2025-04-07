"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4423],{4066:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"hpc/tools_and_software/python_packages_with_virtual_environments","title":"Python Packages with Virtual Environments","description":"In order to be able to install new Python packages and make your work reproducible, please use virtual environments.","source":"@site/docs/hpc/06_tools_and_software/03_python_packages_with_virtual_environments.md","sourceDirName":"hpc/06_tools_and_software","slug":"/hpc/tools_and_software/python_packages_with_virtual_environments","permalink":"/rts-docs-dev/pr-preview/pr-77/docs/hpc/tools_and_software/python_packages_with_virtual_environments","draft":false,"unlisted":false,"editUrl":"https://github.com/NYU-ITS/rts-docs-dev/blob/main/docs/hpc/06_tools_and_software/03_python_packages_with_virtual_environments.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"hpcSidebar","previous":{"title":"Conda Environments (Python, R)","permalink":"/rts-docs-dev/pr-preview/pr-77/docs/hpc/tools_and_software/conda_environments"},"next":{"title":"R Packages with renv","permalink":"/rts-docs-dev/pr-preview/pr-77/docs/hpc/tools_and_software/r_packages_with_renv"}}');var a=t(5105),i=t(3881);const s={},o="Python Packages with Virtual Environments",l={},c=[{value:"Create project directory and load Python module",id:"create-project-directory-and-load-python-module",level:2},{value:"Automatic deletion of your files",id:"automatic-deletion-of-your-files",level:2},{value:"Create virtual environment",id:"create-virtual-environment",level:2},{value:"virtualenv",id:"virtualenv",level:3},{value:"venv",id:"venv",level:3},{value:"Install packages. Keep things reproducible",id:"install-packages-keep-things-reproducible",level:2},{value:"Close an Activated Virtual Environment",id:"close-an-activated-virtual-environment",level:2},{value:"Use with sbatch",id:"use-with-sbatch",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"python-packages-with-virtual-environments",children:"Python Packages with Virtual Environments"})}),"\n",(0,a.jsx)(n.p,{children:"In order to be able to install new Python packages and make your work reproducible, please use virtual environments."}),"\n",(0,a.jsx)(n.p,{children:"There is more than one way to create a private environment in Python."}),"\n",(0,a.jsx)(n.h2,{id:"create-project-directory-and-load-python-module",children:"Create project directory and load Python module"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"## Find python version you need\nmodule avail python\n## created directory for your project and cd there\nmkdir /scratch/$USER/my_project\ncd /scratch/$USER/my_project\n## load python module (different versions available)\nmodule load  python/intel/3.8.6\n"})}),"\n",(0,a.jsx)(n.h2,{id:"automatic-deletion-of-your-files",children:"Automatic deletion of your files"}),"\n",(0,a.jsxs)(n.p,{children:["This page describes the installation of packages on /scratch. One has to remember, though, that files stored in the HPC scratch file system are subject to the HPC Scratch old file purging policy: Files on the /scratch file system that have not been accessed for 60 or more days will be purged (read ",(0,a.jsx)(n.a,{href:"/rts-docs-dev/pr-preview/pr-77/docs/hpc/storage/intro_and_data_management",children:"more"}),")."]}),"\n",(0,a.jsx)(n.p,{children:"Thus you can consider the following options"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Reinstall your packages if some of the files get deleted","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"You can do this manually"}),"\n",(0,a.jsxs)(n.li,{children:["You can do this automatically. For example, within a workflow of a pipeline software like ",(0,a.jsx)(n.a,{href:"https://www.nextflow.io/",children:"Nextflow"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:['Pay for "Research Project Space" - read more ',(0,a.jsx)(n.a,{href:"/rts-docs-dev/pr-preview/pr-77/docs/hpc/storage/research_project_space",children:"here"})]}),"\n",(0,a.jsxs)(n.li,{children:["Use Singularity and install packages within a corresponding overlay file - read more ",(0,a.jsx)(n.a,{href:"/rts-docs-dev/pr-preview/pr-77/docs/hpc/containers/singularity_with_conda",children:"here"})]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"create-virtual-environment",children:"Create virtual environment"}),"\n",(0,a.jsxs)(n.p,{children:["It is advisable to create private environment inside the project directory. This boosts reproducibility and does not use space in ",(0,a.jsx)(n.code,{children:"/home/$USER"})]}),"\n",(0,a.jsx)(n.h3,{id:"virtualenv",children:"virtualenv"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://virtualenv.pypa.io/en/latest/",children:"virtualenv"})," is a tool to create isolated Python environments"]}),"\n",(0,a.jsx)(n.p,{children:"Since Python 3.3, a subset of it has been integrated into the standard library under the venv module."}),"\n",(0,a.jsxs)(n.p,{children:["Note: you may need to install virtualenv first, if it is not yet installed (",(0,a.jsx)(n.a,{href:"https://virtualenv.pypa.io/en/latest/installation.html",children:"instructions"}),")"]}),"\n",(0,a.jsx)(n.p,{children:"Now create new virtual environment in current directory"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Empty"}),"\n",(0,a.jsx)(n.li,{children:"OR"}),"\n",(0,a.jsx)(n.li,{children:"inherit all packages from those installed on HPC already (and available in PATH after you load python module)"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"## created directory for your project and cd there\nmkdir /scratch/$USER/my_project\ncd /scratch/$USER/my_project\n\n## Create an EMPTY virtual environment\nvirtualenv venv\n\n## Create an virtual environment that inherits system packages\nvirtualenv venv --system-site-packages\n"})}),"\n",(0,a.jsx)(n.h3,{id:"venv",children:"venv"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://docs.python.org/3/library/venv.html",children:"venv"})," is package shipped with Python3. It provides subset of options available in virtualenv tool (",(0,a.jsx)(n.a,{href:"https://virtualenv.pypa.io/en/latest/",children:"link"}),")."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"python3 -m venv venv\n"})}),"\n",(0,a.jsx)(n.p,{children:"Create new virtual environment in current directory"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Empty"}),"\n",(0,a.jsx)(n.li,{children:"OR"}),"\n",(0,a.jsx)(n.li,{children:"inherit all packages from those installed on HPC already (and available in PATH after you load python module)"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:'## created directory for your project and cd there\nmkdir /scratch/$USER/my_project\ncd /scratch/$USER/my_project\n##EMPTY\n## (use venv command to create environment called "venv")\n\npython3 -m venv venv\n\n## Inhering all packages\npython3 -m venv venv --system-site-packages\n'})}),"\n",(0,a.jsx)(n.h2,{id:"install-packages-keep-things-reproducible",children:"Install packages. Keep things reproducible"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"## activate\nsource venv/bin/activate\n## install packages\npip install <package you need>\n## If package was inherited, but you want to install it in your own env anyway\npip install <package you need> --ignore-installed\n## export list of packages (to report together with paper and/or to reproduce environment on another computer)\npip freeze > requirements.txt\n## restore\npip install -r requirements.txt\n"})}),"\n",(0,a.jsx)(n.h2,{id:"close-an-activated-virtual-environment",children:"Close an Activated Virtual Environment"}),"\n",(0,a.jsx)(n.p,{children:"If you have activated a virtual environment, you can exit it with the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"deactivate\n"})}),"\n",(0,a.jsx)(n.h2,{id:"use-with-sbatch",children:"Use with sbatch"}),"\n",(0,a.jsx)(n.p,{children:"When you use this env in sbatch script, please use"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"module purge;\nsource venv/bin/activate;\nexport OMP_NUM_THREADS=$SLURM_CPUS_PER_TASK;\npython python_script.py\n"})}),"\n",(0,a.jsx)(n.p,{children:"If you use mpi"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:'mpiexec  bash -c "module purge;\n                  source venv/bin/activate;\n                  export OMP_NUM_THREADS=$SLURM_CPUS_PER_TASK;\n                  python python_script.py"\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},3881:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(8101);const a={},i=r.createContext(a);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);