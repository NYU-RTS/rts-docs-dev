"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2256],{2733:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>r});const s=JSON.parse('{"id":"hpc/tools_and_software/conda_environments","title":"Conda Environments (Python, R)","description":"What is Conda?","source":"@site/docs/hpc/06_tools_and_software/02_conda_environments.md","sourceDirName":"hpc/06_tools_and_software","slug":"/hpc/tools_and_software/conda_environments","permalink":"/rts-docs-dev/pr-preview/pr-65/docs/hpc/tools_and_software/conda_environments","draft":false,"unlisted":false,"editUrl":"https://github.com/NYU-ITS/rts-docs-dev/blob/main/docs/hpc/06_tools_and_software/02_conda_environments.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{},"sidebar":"hpcSidebar","previous":{"title":"Tools and Software","permalink":"/rts-docs-dev/pr-preview/pr-65/docs/hpc/tools_and_software/intro"},"next":{"title":"Python Packages with Virtual Environments","permalink":"/rts-docs-dev/pr-preview/pr-65/docs/hpc/tools_and_software/python_packages_with_virtual_environments"}}');var i=a(5105),o=a(3881);const l={},t="Conda Environments (Python, R)",d={},r=[{value:"What is Conda?",id:"what-is-conda",level:2},{value:"Advantages/disadvantages of using Conda",id:"advantagesdisadvantages-of-using-conda",level:2},{value:"Advantages",id:"advantages",level:3},{value:"Disadvantages",id:"disadvantages",level:3},{value:"Initializing Conda",id:"initializing-conda",level:2},{value:"Automatic deletion of your files",id:"automatic-deletion-of-your-files",level:3},{value:"Python",id:"python",level:2},{value:"R",id:"r",level:2},{value:"Reproducibility",id:"reproducibility",level:2},{value:"Use conda env in a batch script",id:"use-conda-env-in-a-batch-script",level:2},{value:"Python",id:"python-1",level:3},{value:"Single node",id:"single-node",level:4},{value:"Multiple nodes, using MPI",id:"multiple-nodes-using-mpi",level:4},{value:"R (conda packages only)",id:"r-conda-packages-only",level:3},{value:"Multiple nodes, using MPI",id:"multiple-nodes-using-mpi-1",level:4},{value:"R (conda with renv combination)",id:"r-conda-with-renv-combination",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"conda-environments-python-r",children:"Conda Environments (Python, R)"})}),"\n",(0,i.jsx)(n.h2,{id:"what-is-conda",children:"What is Conda?"}),"\n",(0,i.jsx)(n.p,{children:"Package, dependency and environment management for any language\u2014Python, R, Ruby, Lua, Scala, Java, JavaScript, C/ C++, FORTRAN, and more."}),"\n",(0,i.jsxs)(n.p,{children:["Please find more information at this link: ",(0,i.jsx)(n.a,{href:"https://docs.conda.io/en/latest/",children:"https://docs.conda.io/en/latest/"})]}),"\n",(0,i.jsx)(n.p,{children:"Conda provides a great way to install packages that are already compiled, so you don't need to go over the long compilation process. If a package you need is not available, you can install it (and compile it when needed) using pip (Python) or install.packages (R)."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Reproducibility:\nOne of the ways to ensure the reproducibility of your results is to have an independent conda environment in the directory of each project (one of the options shown below). This will also keep conda environment files away from your /home/$USER directory."})}),"\n",(0,i.jsx)(n.h2,{id:"advantagesdisadvantages-of-using-conda",children:"Advantages/disadvantages of using Conda"}),"\n",(0,i.jsx)(n.h3,{id:"advantages",children:"Advantages"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A lot of pre-compiled packages (fast and easy to install)"}),"\n",(0,i.jsxs)(n.li,{children:["Note for Python: pip also offers pre-compiled packages (wheels). List can be found here ",(0,i.jsx)(n.a,{href:"https://pythonwheels.com",children:"https://pythonwheels.com"}),". However, Conda has a significantly larger number of pre-compiled packages."]}),"\n",(0,i.jsx)(n.li,{children:"Compiled packages use highly efficient Intel Math Kernel Library (MKL) library"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"disadvantages",children:"Disadvantages"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Conda does not take advantage of packages already installed in the system (while ",(0,i.jsx)(n.a,{href:"/rts-docs-dev/pr-preview/pr-65/docs/hpc/tools_and_software/python_packages_with_virtual_environments",children:"virtualenv and venv"})," do)"]}),"\n",(0,i.jsx)(n.li,{children:"As you will see below, you may need to do additional steps to keep track of all installed packages (including those installed by pip and/or install.packages)"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"initializing-conda",children:"Initializing Conda"}),"\n",(0,i.jsx)(n.p,{children:"Load anaconda module"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"module purge\nmodule load anaconda3/2020.07\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Conda init can create problems with package installation, so we suggest using ",(0,i.jsx)(n.code,{children:"source activate"})," instead of ",(0,i.jsx)(n.code,{children:"conda activate"}),", even though conda activate is considered a best practice by the Anaconda developers."]}),"\n",(0,i.jsx)(n.h3,{id:"automatic-deletion-of-your-files",children:"Automatic deletion of your files"}),"\n",(0,i.jsxs)(n.p,{children:["This page describes the installation of packages on /scratch. One has to remember, though, that files stored in the HPC scratch file system are subject to the HPC Scratch old file purging policy: Files on the /scratch file system that have not been accessed for 60 or more days will be purged (read more about ",(0,i.jsx)(n.a,{href:"/rts-docs-dev/pr-preview/pr-65/docs/hpc/storage/intro_and_data_management",children:"Data Management"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Thus you can consider the following options"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Reinstall your packages if some of the files get deleted","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You can do this manually"}),"\n",(0,i.jsxs)(n.li,{children:["You can do this automatically. For example, within a workflow of a pipeline software like ",(0,i.jsx)(n.a,{href:"https://www.nextflow.io/",children:"Nextflow"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:['Pay for "Research Project Space" - read more ',(0,i.jsx)(n.a,{href:"/rts-docs-dev/pr-preview/pr-65/docs/hpc/storage/research_project_space",children:"here"})]}),"\n",(0,i.jsxs)(n.li,{children:["Use Singularity and install packages within a corresponding overlay file - read more ",(0,i.jsx)(n.a,{href:"/rts-docs-dev/pr-preview/pr-65/docs/hpc/containers/singularity_with_conda",children:"here"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,i.jsx)(n.p,{children:"Load anaconda module"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"module purge\nmodule load anaconda3/2020.07\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Keep your program/project in ",(0,i.jsx)(n.code,{children:"/scratch"})," and create conda environment using '-p' parameter. This will keep all the files inside the project's directory, instead of putting in in your ",(0,i.jsx)(n.code,{children:"/home/$USER"})]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"conda create -p ./penv python=3  ## environment will be created in project directory\nconda activate ./penv \n"})}),"\n",(0,i.jsx)(n.p,{children:"Also, you need to create a symbolic link, so conda will download files for packages to be installed into scratch, not your home directory."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"mkdir /home/<NetID>/.conda\nmkdir /scratch/<NetID>/conda_pkgs\nln -s /scratch/<NetID>/conda_pkgs /home/<NetID>/.conda/pkgs\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://anaconda.org/anaconda/repo",children:"Install pre-compiled packages available in conda"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"conda install -c anaconda pandas\n"})}),"\n",(0,i.jsx)(n.p,{children:"Other packages may be installed (and compiled when needed) using pip"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"pip install <package_name>\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Conda and packages install by default to ",(0,i.jsx)(n.code,{children:"~/.local/lib/python<version>"})]})}),"\n",(0,i.jsxs)(n.p,{children:["If you did use ",(0,i.jsx)(n.code,{children:"'pip install --user'"})," to install some packages (without conda or other virtual environment), they will be available in ",(0,i.jsx)(n.code,{children:"~/.local/lib/python<version>"})]}),"\n",(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"The primary takeaway:"})})}),(0,i.jsxs)(n.p,{children:["Let say you have tornado v.6 installed in ",(0,i.jsx)(n.code,{children:"~/.local/lib/python<version>"}),", and tornado v.5 installed by ",(0,i.jsx)(n.code,{children:"conda install"}),"."]}),(0,i.jsxs)(n.p,{children:["When you will do ",(0,i.jsx)(n.code,{children:"conda activate"})," you will have tornado v.6 available!! Not v.5!!"]}),(0,i.jsxs)(n.p,{children:["(this behaviour is the same for packages installed by to ",(0,i.jsx)(n.code,{children:"~/.local/lib/python<version>"})," before or after you create your conda environment)"]}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"pip freeze"})," will give v.6"]}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"conda list"})," will give v.5"]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Solution"})})}),(0,i.jsxs)(n.p,{children:["To overcome this, do ",(0,i.jsx)(n.code,{children:"export PYTHONNOUSERSITE=True"})," after conda activate"]})]}),"\n",(0,i.jsx)(n.h2,{id:"r",children:"R"}),"\n",(0,i.jsx)(n.p,{children:"Load anaconda module"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"module load anaconda3/2020.07\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Keep your program/project in ",(0,i.jsx)(n.code,{children:"/scratch"})," and create conda environment using '-p' parameter. This will keep all the files inside the project's directory, instead of putting them in your ",(0,i.jsx)(n.code,{children:"/home/$USER"})]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"conda create -p ./renv r=3.5 ## environment will be created in project directory\n## OR\nconda create -c conda-forge -p ./penv r-base=3.6.3 ## environment will be created in project directory\nconda activate ./renv\n"})}),"\n",(0,i.jsx)(n.p,{children:"Install pre-compiled packages available in conda:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://docs.anaconda.com/anaconda/packages/r-language-pkg-docs/",children:"https://docs.anaconda.com/anaconda/packages/r-language-pkg-docs/"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"conda install -c r r-dplyr\n"})}),"\n",(0,i.jsx)(n.p,{children:"Other packages may be installed (and compiled) using install.packages()"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'install.packages("<package_name>")\n'})}),"\n",(0,i.jsx)(n.h2,{id:"reproducibility",children:"Reproducibility"}),"\n",(0,i.jsx)(n.p,{children:"Packages installed only using conda"}),"\n",(0,i.jsx)(n.p,{children:"Save a list of packages (so you are able to report environment in publication, and to restore/reproduce env on another machine at any time)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"# save\nconda list --export > requirements.txt\n# restore\nconda create -p ./penv --file requirements.txt\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["This will not list packages installed by ",(0,i.jsx)(n.code,{children:"pip"})," or ",(0,i.jsx)(n.code,{children:"install.packages()"})]})}),"\n",(0,i.jsx)(n.p,{children:"If you installed extra packages using pip (Python)"}),"\n",(0,i.jsx)(n.p,{children:"In this you can use"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"export PYTHONNOUSERSITE=True  ## to ingnore packages in ~/.local/lib/python<version>\n# save\nconda list --export > conda_requirements.txt\npip freeze > pip_requirements.txt\n# restore\nconda create -p ./penv --file conda_requirements.txt\npip install -r pip_requirements.txt\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Alternatively, you can use conda env export > all_requirements.txt, which will save both: packages installed by conda and by pip."})}),"\n",(0,i.jsx)(n.p,{children:"However, this may fail if your conda environment is created as a sub-directory of your project's directory (which we recommend)"}),"\n",(0,i.jsx)(n.p,{children:"Installed extra packages using install.packages? (R)"}),"\n",(0,i.jsx)(n.p,{children:"Usecase: You need packages not availalbe in conda channels, and want to use install.packages."}),"\n",(0,i.jsxs)(n.p,{children:["Command ",(0,i.jsx)(n.code,{children:"conda list --export"}),' will not include packages installed by "install.packages". So, do not use ',(0,i.jsx)(n.code,{children:"conda install"})," at all. To have reproducibility in this case you need to use Conda and renv together, as described below"]}),"\n",(0,i.jsx)(n.p,{children:"Conda + pakcrat: specific version of R and install.packages (R)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"use conda to install version of R you need"}),"\n",(0,i.jsx)(n.li,{children:"do not use 'conda install' at all"}),"\n",(0,i.jsx)(n.li,{children:"use renv"}),"\n",(0,i.jsx)(n.li,{children:"install all the packages using install.packages"}),"\n",(0,i.jsxs)(n.li,{children:["use ",(0,i.jsx)(n.a,{href:"/rts-docs-dev/pr-preview/pr-65/docs/hpc/tools_and_software/r_packages_with_renv",children:"renv as described here"})," to keep track of the environment"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"In order for conda + renv to work, you need to add following steps:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["After you activate conda AND before loading R","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"export R_RENV_DEFAULT_LIBPATHS=<path_to_project_directory>/renv/lib/x86_64-conda_cos6-linux-gnu/<version>/\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Start R and execute","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'.libPaths(c(.libPaths(), Sys.getenv("R_RENV_SYSTEM_LIBRARY")))\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"use-conda-env-in-a-batch-script",children:"Use conda env in a batch script"}),"\n",(0,i.jsxs)(n.p,{children:["The part of the batch script which will call the command shall look like (replace ",(0,i.jsx)(n.code,{children:"<path_to_env>"})," to an appropriate value)"]}),"\n",(0,i.jsx)(n.h3,{id:"python-1",children:"Python"}),"\n",(0,i.jsx)(n.h4,{id:"single-node",children:"Single node"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"#!/bin/bash\n#SBATCH --job-name=test\n#SBATCH --nodes=1\n#SBATCH --cpus-per-task=1\n#SBATCH --ntasks-per-node=4\n#SBATCH --mem=8GB\n#SBATCH --time=1:00:00\nmodule purge;\nmodule load anaconda3/2020.07;\nexport OMP_NUM_THREADS=$SLURM_CPUS_PER_TASK;\nsource /share/apps/anaconda3/2020.07/etc/profile.d/conda.sh;\nconda activate ./penv;\nexport PATH=./penv/bin:$PATH;\npython python_script.py\n"})}),"\n",(0,i.jsx)(n.h4,{id:"multiple-nodes-using-mpi",children:"Multiple nodes, using MPI"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'mpiexec --mca bash -c "module purge;\nexport OMP_NUM_THREADS=$SLURM_CPUS_PER_TASK;\nmodule load anaconda3/2020.07;\nsource /share/apps/anaconda3/2020.07/etc/profile.d/conda.sh;\nconda activate ./penv;\nexport PATH=./penv/bin:$PATH;\npython python_script.py"\n'})}),"\n",(0,i.jsx)(n.h3,{id:"r-conda-packages-only",children:"R (conda packages only)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"#!/bin/bash\n#SBATCH --job-name=test\n#SBATCH --nodes=1\n#SBATCH --cpus-per-task=1\n#SBATCH --ntasks-per-node=4\n#SBATCH --mem=8GB\n#SBATCH --time=1:00:00\nmodule purge;\nmodule load anaconda3/2020.07;\nexport OMP_NUM_THREADS=$SLURM_CPUS_PER_TASK;\nsource /share/apps/anaconda3/2020.07/etc/profile.d/conda.sh;\nconda activate ./renv;\nexport PATH=./renv/bin:$PATH;\nRscript r_script.R\n"})}),"\n",(0,i.jsx)(n.h4,{id:"multiple-nodes-using-mpi-1",children:"Multiple nodes, using MPI"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'mpiexec --mca bash -c "module purge;\nexport OMP_NUM_THREADS=$SLURM_CPUS_PER_TASK;\nmodule load anaconda3/2020.07;\nsource /share/apps/anaconda3/2020.07/etc/profile.d/conda.sh;\nconda activate ./renv;\nexport PATH=./renv/bin:$PATH;\nRscript r_script.R"\n'})}),"\n",(0,i.jsx)(n.h3,{id:"r-conda-with-renv-combination",children:"R (conda with renv combination)"}),"\n",(0,i.jsx)(n.p,{children:"In this case, when you use sbatch you would activate conda in sbatch script, and R script will pickup packages installed in renv"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"module purge\nmodule load  anaconda3/2020.07\nsource /share/apps/anaconda3/2020.07/etc/profile.d/conda.sh\nconda activate ./renv\nRscript test.R\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},3881:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>t});var s=a(8101);const i={},o=s.createContext(i);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);