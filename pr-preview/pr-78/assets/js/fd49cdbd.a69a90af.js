"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5155],{9137:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"hpc/ood/open_on_demand","title":"Open OnDemand (OOD) with Conda/Singularity","description":"Open OnDemand is a tool that allows users to launch Graphical User Interfaces (GUIs) based applications are accessible without modifying your HPC environment. You can log into the Open OnDemand interface at https://ood.hpc.nyu.edu. Once logged in, select the Interactive Apps menu, select the desired application, and submit the job based on required resources and options.","source":"@site/docs/hpc/09_ood/01_open_on_demand.md","sourceDirName":"hpc/09_ood","slug":"/hpc/ood/open_on_demand","permalink":"/rts-docs-dev/pr-preview/pr-78/docs/hpc/ood/open_on_demand","draft":false,"unlisted":false,"editUrl":"https://github.com/NYU-ITS/rts-docs-dev/blob/main/docs/hpc/09_ood/01_open_on_demand.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"hpcSidebar","previous":{"title":"Fine tune LLMs on HPC","permalink":"/rts-docs-dev/pr-preview/pr-78/docs/hpc/ml_ai_hpc/llm_fine_tuning"},"next":{"title":"Linux Tutorial","permalink":"/rts-docs-dev/pr-preview/pr-78/docs/hpc/tutorials/linux_tutorial"}}');var o=t(5105),a=t(3881);const r={},s="Open OnDemand (OOD) with Conda/Singularity",l={},c=[{value:"OOD + Singularity + conda",id:"ood--singularity--conda",level:2},{value:"Log Into Greene via the Terminal",id:"log-into-greene-via-the-terminal",level:3},{value:"Preinstallation Warning",id:"preinstallation-warning",level:3},{value:"Prepare Overlay File",id:"prepare-overlay-file",level:3},{value:"Launch Singularity Environment for Installation",id:"launch-singularity-environment-for-installation",level:3},{value:"Install Miniforge to Overlay File",id:"install-miniforge-to-overlay-file",level:3},{value:"Install Packages to Miniforge Environment",id:"install-packages-to-miniforge-environment",level:3},{value:"Configure iPython Kernels",id:"configure-ipython-kernels",level:3},{value:"Launch an Open OnDemand Jupyter Notebook",id:"launch-an-open-ondemand-jupyter-notebook",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"open-ondemand-ood-with-condasingularity",children:"Open OnDemand (OOD) with Conda/Singularity"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://ood.hpc.nyu.edu/",children:"Open OnDemand"})," is a tool that allows users to launch Graphical User Interfaces (GUIs) based applications are accessible without modifying your HPC environment. You can log into the Open OnDemand interface at ",(0,o.jsx)(n.a,{href:"https://ood.hpc.nyu.edu",children:"https://ood.hpc.nyu.edu"}),". Once logged in, select the ",(0,o.jsx)(n.strong,{children:"Interactive Apps"})," menu, select the desired application, and submit the job based on required resources and options."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["If you're not on the NYU network, you may need to connect via NYU's Virtual Private Network (VPN) before connecting to ",(0,o.jsx)(n.a,{href:"https://ood.hpc.nyu.edu",children:"https://ood.hpc.nyu.edu"}),".  ",(0,o.jsx)(n.a,{href:"https://www.nyu.edu/life/information-technology/infrastructure/network-services/vpn.html",children:"Read the details about NYU's VPN and instructions for connecting"}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"ood--singularity--conda",children:"OOD + Singularity + conda"}),"\n",(0,o.jsx)(n.p,{children:"This page describes how to use your Singularity with conda environment in Open OnDemand (OOD) GUI at Greene."}),"\n",(0,o.jsx)(n.h3,{id:"log-into-greene-via-the-terminal",children:"Log Into Greene via the Terminal"}),"\n",(0,o.jsxs)(n.p,{children:["The following commands must be run from the terminal. Information on accessing via the terminal can be found at the ",(0,o.jsx)(n.a,{href:"/rts-docs-dev/pr-preview/pr-78/docs/hpc/connecting_to_hpc/connecting_to_hpc",children:"Connecting to the HPC page"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"preinstallation-warning",children:"Preinstallation Warning"}),"\n",(0,o.jsxs)(n.admonition,{type:"warning",children:[(0,o.jsx)(n.p,{children:"If you have initialized Conda in your base environment, your prompt on Greene may show something like:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"(base) [NETID@log-1 ~]$\n"})}),(0,o.jsxs)(n.p,{children:["then you must first comment out or remove this portion of your ",(0,o.jsx)(n.code,{children:"~/.bashrc"})," file:"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'# >>> conda initialize >>>\n# !! Contents within this block are managed by \'conda init\' !!\n__conda_setup="$(\'/share/apps/anaconda3/2020.07/bin/conda\' \'shell.bash\' \'hook\' 2> /dev/null)"\nif [ $? -eq 0 ]; then\n    eval "$__conda_setup"\nelse\n    if [ -f "/share/apps/anaconda3/2020.07/etc/profile.d/conda.sh" ]; then\n        . "/share/apps/anaconda3/2020.07/etc/profile.d/conda.sh"\n    else\n        export PATH="/share/apps/anaconda3/2020.07/bin:$PATH"\n    fi\nfi\nunset __conda_setup\n# <<< conda initialize <<<\n'})}),(0,o.jsx)(n.p,{children:"The above code automatically makes your environment look for the default shared installation of Conda on the cluster and will sabotage  any attempts to install packages to a Singularity environment. Once removed or commented out, log out and back into the cluster for a fresh environment."})]}),"\n",(0,o.jsx)(n.h3,{id:"prepare-overlay-file",children:"Prepare Overlay File"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"mkdir /scratch/$USER/my_env\ncd /scratch/$USER/my_env\ncp -rp /scratch/work/public/overlay-fs-ext3/overlay-15GB-500K.ext3.gz .\ngunzip overlay-15GB-500K.ext3.gz\n"})}),"\n",(0,o.jsxs)(n.p,{children:['Above we used the overlay file "overlay-15GB-500K.ext3.gz" which will contain all of the installed packages. There are more optional overlay files. You can find instructions on the following pages: ',(0,o.jsx)(n.a,{href:"/rts-docs-dev/pr-preview/pr-78/docs/hpc/containers/singularity_with_conda",children:"Singularity with Conda"}),", ",(0,o.jsx)(n.a,{href:"/rts-docs-dev/pr-preview/pr-78/docs/hpc/containers/squash_file_system_and_singularity",children:"Squash File System and Singularity"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"launch-singularity-environment-for-installation",children:"Launch Singularity Environment for Installation"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"singularity exec --overlay /scratch/$USER/my_env/overlay-15GB-500K.ext3:rw /scratch/work/public/singularity/cuda12.3.2-cudnn9.0.0-ubuntu-22.04.4.sif /bin/bash\n"})}),"\n",(0,o.jsxs)(n.p,{children:['Above we used the Singularity OS image "cuda12.3.2-cudnn9.0.0-ubuntu-22.04.4.sif " which provides the base operating system environment for the conda environment. There are other Singularity OS images available at ',(0,o.jsx)(n.code,{children:"/scratch/work/public/singularity"})]}),"\n",(0,o.jsx)(n.p,{children:"Launching Singularity with the --overlay flag mounts the overlay file to a new directory: /ext3 - you will notice that when not using Singularity /ext3 is not available. Be sure that you have the Singularity prompt (Singularity>) and that /ext3 is available before the next step:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"Singularity> ls -lah /ext3\ntotal 8.5K\ndrwxrwxr-x.  2 root root 4.0K Oct 19 10:01 .\ndrwx------. 29 root root 8.0K Oct 19 10:01 ..\n"})}),"\n",(0,o.jsx)(n.h3,{id:"install-miniforge-to-overlay-file",children:"Install Miniforge to Overlay File"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"wget --no-check-certificate https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-x86_64.sh\nsh Miniforge3-Linux-x86_64.sh -b -p /ext3/miniforge3\n"})}),"\n",(0,o.jsx)(n.p,{children:"Next, create a wrapper script at /ext3/env.sh"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"touch /ext3/env.sh\necho '#!/bin/bash' >> /ext3/env.sh\necho 'unset -f which' >> /ext3/env.sh\necho 'source /ext3/miniforge3/etc/profile.d/conda.sh' >> /ext3/env.sh\necho 'export PATH=/ext3/miniforge3/bin:$PATH'         >> /ext3/env.sh\necho 'export PYTHONPATH=/ext3/miniforge3/bin:$PATH'   >> /ext3/env.sh\n"})}),"\n",(0,o.jsx)(n.p,{children:"Your /ext3/env.sh file should now contain  the following:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"#!/bin/bash\n   unset -f which\nsource /ext3/miniforge3/etc/profile.d/conda.sh\nexport PATH=/ext3/miniforge3/bin:$PATH\nexport PYTHONPATH=/ext3/miniforge3/bin:$PATH\n"})}),"\n",(0,o.jsx)(n.p,{children:"The wrapper script will activate your conda environment, to which you will be installing your packages and dependencies."}),"\n",(0,o.jsx)(n.p,{children:"Next, activate your conda environment with the following:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"source /ext3/env.sh\n"})}),"\n",(0,o.jsx)(n.h3,{id:"install-packages-to-miniforge-environment",children:"Install Packages to Miniforge Environment"}),"\n",(0,o.jsx)(n.p,{children:"Now that your environment is activated, you can update and install packages"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"conda config --remove channels defaults\nconda update -n base conda -y\nconda clean --all --yes\nconda install pip --yes\nconda install ipykernel --yes # Note: ipykernel is required to run as a kernel in the Open OnDemand Jupyter Notebooks\n"})}),"\n",(0,o.jsx)(n.p,{children:"To confirm that your environment is appropriately referencing your Miniforge installation, try out the following:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"unset which\nwhich conda\n# output: /ext3/miniforge3/bin/conda\n\nwhich python\n# output: /ext3/miniforge3/bin/python\n\npython --version\n# output: Python 3.8.5\n\nwhich pip\n# output: /ext3/miniforge3/bin/pip\n"})}),"\n",(0,o.jsx)(n.p,{children:"Now use either conda install or pip to install your required python packages to the Miniforge environment."}),"\n",(0,o.jsx)(n.p,{children:"To install larger packages, like Tensorflow, you must first start an interactive job with adequate compute and memory resources to install packages. The login nodes restrict memory to 2GB per user, which may cause some large packages to crash."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"srun --cpus-per-task=2 --mem=10GB --time=04:00:00 --pty /bin/bash\n\n# wait to be assigned a node\n\nsingularity exec --overlay /scratch/$USER/my_env/overlay-15GB-500K.ext3:rw /scratch/work/public/singularity/cuda12.3.2-cudnn9.0.0-ubuntu-22.04.4.sif /bin/bash\n\nsource /ext3/env.sh\n# activate the environment\n"})}),"\n",(0,o.jsx)(n.p,{children:"After it is running, you\u2019ll be redirected to a compute node. From there, run singularity to setup on conda environment, same as you were doing on login node."}),"\n",(0,o.jsx)(n.h3,{id:"configure-ipython-kernels",children:"Configure iPython Kernels"}),"\n",(0,o.jsx)(n.p,{children:"To create a kernel named my_env copy the template files to your home directory."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"mkdir -p ~/.local/share/jupyter/kernels\ncd ~/.local/share/jupyter/kernels\ncp -R /share/apps/mypy/src/kernel_template ./my_env # this should be the name of your Singularity env\ncd ./my_env \n\nls\n#kernel.json  logo-32x32.png  logo-64x64.png  python # files in the ~/.local/share/jupyter/kernels directory\n"})}),"\n",(0,o.jsx)(n.p,{children:"To set the conda environment, edit the file named 'python' in /.local/share/jupyter/kernels/my_env/."}),"\n",(0,o.jsx)(n.p,{children:"The python file is a wrapper script that the Jupyter notebook will use to launch your Singularity container and attach it to the notebook."}),"\n",(0,o.jsx)(n.p,{children:"At the bottom of the file we have the template singularity command."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:'singularity exec $nv \\\n  --overlay /scratch/$USER/my_env/overlay-15GB-500K.ext3:ro \\\n  /scratch/work/public/singularity/cuda12.3.2-cudnn9.0.0-ubuntu-22.04.4.sif \\\n  /bin/bash -c "source /ext3/env.sh; $cmd $args"\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"If you used a different overlay (/scratch/$USER/my_env/overlay-15GB-500K.ext3 shown above) or .sif file (/scratch/work/public/singularity/cuda12.3.2-cudnn9.0.0-ubuntu-22.04.4.sif shown above), you MUST change those lines in the command above to the files you used."})}),"\n",(0,o.jsx)(n.p,{children:"Edit the default kernel.json file by setting PYTHON_LOCATION and KERNEL_DISPLAY_NAME using a text editor like nano/vim."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n "argv": [\n  "PYTHON_LOCATION",\n  "-m",\n  "ipykernel_launcher",\n  "-f",\n  "{connection_file}"\n ],\n "display_name": "KERNEL_DISPLAY_NAME",\n "language": "python"\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"to"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n "argv": [\n  "/home/<Your NetID>/.local/share/jupyter/kernels/my_env/python",\n  "-m",\n  "ipykernel_launcher",\n  "-f",\n  "{connection_file}"\n ],\n "display_name": "my_env",\n "language": "python"\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Update the ",(0,o.jsx)(n.code,{children:'"<Your NetID>"'})," to your own NetID without the ",(0,o.jsx)(n.code,{children:'"<>"'})," symbols."]}),"\n",(0,o.jsx)(n.h3,{id:"launch-an-open-ondemand-jupyter-notebook",children:"Launch an Open OnDemand Jupyter Notebook"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://ood.hpc.nyu.edu",children:"https://ood.hpc.nyu.edu"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"OOD Launch",src:t(7385).A+"",width:"1280",height:"402"})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},7385:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/OOD_launch-f9a2999702d36f8777a4f3dd33d1f975.png"},3881:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var i=t(8101);const o={},a=i.createContext(o);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);