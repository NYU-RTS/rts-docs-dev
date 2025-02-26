"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4307],{5344:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"hpc/containers/singularity_with_conda","title":"Singularity with Conda","description":"What is Singularity?","source":"@site/docs/hpc/07_containers/03_singularity_with_conda.md","sourceDirName":"hpc/07_containers","slug":"/hpc/containers/singularity_with_conda","permalink":"/rts-docs-dev/pr-preview/pr-66/docs/hpc/containers/singularity_with_conda","draft":false,"unlisted":false,"editUrl":"https://github.com/NYU-ITS/rts-docs-dev/blob/main/docs/hpc/07_containers/03_singularity_with_conda.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"hpcSidebar","previous":{"title":"Basics of containers","permalink":"/rts-docs-dev/pr-preview/pr-66/docs/hpc/containers/containers"},"next":{"title":"Squash File System and Singularity","permalink":"/rts-docs-dev/pr-preview/pr-66/docs/hpc/containers/squash_file_system_and_singularity"}}');var s=i(5105),t=i(3881);const r={},l="Singularity with Conda",o={},c=[{value:"What is Singularity?",id:"what-is-singularity",level:2},{value:"Using Singularity Overlays for Miniforge (Python &amp; Julia)",id:"using-singularity-overlays-for-miniforge-python--julia",level:2},{value:"Preinstallation Warning",id:"preinstallation-warning",level:3},{value:"Miniforge Environment PyTorch Example",id:"miniforge-environment-pytorch-example",level:3},{value:"Install packages",id:"install-packages",level:4},{value:"Test your PyTorch Singularity Image",id:"test-your-pytorch-singularity-image",level:4},{value:"Using your Singularity Container in a SLURM Batch Job",id:"using-your-singularity-container-in-a-slurm-batch-job",level:3},{value:"Optional: Convert ext3 to a compressed, read-only squashfs filesystem",id:"optional-convert-ext3-to-a-compressed-read-only-squashfs-filesystem",level:3},{value:"Use a squashFS Image for Running Jobs",id:"use-a-squashfs-image-for-running-jobs",level:4},{value:"Adding Packages to a Full ext3 or squashFS Image",id:"adding-packages-to-a-full-ext3-or-squashfs-image",level:4},{value:"Julia Singularity Image",id:"julia-singularity-image",level:3},{value:"Using CentOS 8 for Julia (for Module Compatibility)",id:"using-centos-8-for-julia-for-module-compatibility",level:3},{value:"Installing New Julia Packages Later",id:"installing-new-julia-packages-later",level:4}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"singularity-with-conda",children:"Singularity with Conda"})}),"\n",(0,s.jsx)(n.h2,{id:"what-is-singularity",children:"What is Singularity?"}),"\n",(0,s.jsx)(n.p,{children:"Singularity is a free, cross-platform and open-source program that creates and executes containers on the HPC clusters. Containers are streamlined, virtualized environments for specific programs or packages. Singularity is an industry standard tool to utilize containers in HPC environments. Containers allow for the support of highly specific environments and further increase scientific reproducibility and portability. Using Singularity containers, researchers can work in the reproducible containerized environments of their choice can easily tailor them to their needs."}),"\n",(0,s.jsx)(n.h2,{id:"using-singularity-overlays-for-miniforge-python--julia",children:"Using Singularity Overlays for Miniforge (Python & Julia)"}),"\n",(0,s.jsx)(n.h3,{id:"preinstallation-warning",children:"Preinstallation Warning"}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsx)(n.p,{children:"If you have initialized Conda in your base environment, your prompt on Greene may show something like:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"(base) [NETID@log-1 ~]$\n"})}),(0,s.jsxs)(n.p,{children:["then you must first comment out or remove this portion of your ",(0,s.jsx)(n.code,{children:"~/.bashrc"})," file:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# >>> conda initialize >>>\n# !! Contents within this block are managed by \'conda init\' !!\n__conda_setup="$(\'/share/apps/anaconda3/2020.07/bin/conda\' \'shell.bash\' \'hook\' 2> /dev/null)"\nif [ $? -eq 0 ]; then\n    eval "$__conda_setup"\nelse\n    if [ -f "/share/apps/anaconda3/2020.07/etc/profile.d/conda.sh" ]; then\n        . "/share/apps/anaconda3/2020.07/etc/profile.d/conda.sh"\n    else\n        export PATH="/share/apps/anaconda3/2020.07/bin:$PATH"\n    fi\nfi\nunset __conda_setup\n# <<< conda initialize <<<\n'})}),(0,s.jsx)(n.p,{children:"The above code automatically makes your environment look for the default shared installation of Conda on the cluster and will sabotage  any attempts to install packages to a Singularity environment. Once removed or commented out, log out and back into the cluster for a fresh environment."})]}),"\n",(0,s.jsx)(n.h3,{id:"miniforge-environment-pytorch-example",children:"Miniforge Environment PyTorch Example"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html",children:"Conda environments"}),' allow users to create customizable, portable work environments and dependencies to support specific packages or versions of software for research. Common conda distributions include Anaconda, Miniconda and Miniforge. Packages are available via "channels". Popular channels include "conda-forge" and "bioconda".  In this tutorial we shall use ',(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/miniforge",children:"Miniforge"}),' which sets "conda-forge" as the package channel. Traditional conda environments, however, also create a large number of files that can cut into quotas. To help reduce this issue, we suggest using ',(0,s.jsx)(n.a,{href:"https://docs.sylabs.io/guides/4.1/user-guide/",children:"Singularity"}),", a container technology that is popular on HPC systems. Below is an example of how to create a pytorch environment using Singularity and Miniforge."]}),"\n",(0,s.jsx)(n.p,{children:"Create a directory for the environment"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"mkdir /scratch/<NetID>/pytorch-example\ncd /scratch/<NetID>/pytorch-example\n"})}),"\n",(0,s.jsx)(n.p,{children:"Copy an appropriate gzipped overlay images from the overlay directory. You can browse available images to see available options"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"ls /scratch/work/public/overlay-fs-ext3\n"})}),"\n",(0,s.jsx)(n.p,{children:"In this example we use overlay-15GB-500K.ext3.gz as it has enough available storage for most conda environments. It has 15GB free space inside and is able to hold 500K files\nYou can use another size as needed."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"cp -rp /scratch/work/public/overlay-fs-ext3/overlay-15GB-500K.ext3.gz .\ngunzip overlay-15GB-500K.ext3.gz\n"})}),"\n",(0,s.jsx)(n.p,{children:"Choose a corresponding Singularity image. For this example we will use the following image"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"/scratch/work/public/singularity/cuda12.1.1-cudnn8.9.0-devel-ubuntu22.04.2.sif \n"})}),"\n",(0,s.jsx)(n.p,{children:"For Singularity image available on nyu HPC greene,  please check the singularity images folder"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"/scratch/work/public/singularity/\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For the most recent supported versions of PyTorch, please check the ",(0,s.jsx)(n.a,{href:"https://pytorch.org/get-started/locally/",children:"PyTorch website"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Launch the appropriate Singularity container in read/write mode (with the ",":rw"," flag)"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"singularity exec --overlay overlay-15GB-500K.ext3:rw /scratch/work/public/singularity/cuda12.1.1-cudnn8.9.0-devel-ubuntu22.04.2.sif /bin/bash\n"})}),"\n",(0,s.jsx)(n.p,{children:"The above starts a bash shell inside the referenced Singularity Container overlayed with the 15GB 500K you set up earlier. This creates the functional illusion of having a writable filesystem inside the typically read-only Singularity container."}),"\n",(0,s.jsxs)(n.p,{children:["Now, inside the container, download and install miniforge to ",(0,s.jsx)(n.code,{children:"/ext3/miniforge3"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"wget --no-check-certificate https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-x86_64.sh\nbash Miniforge3-Linux-x86_64.sh -b -p /ext3/miniforge3\n# rm Miniforge3-Linux-x86_64.sh # if you don't need this file any longer\n"})}),"\n",(0,s.jsx)(n.p,{children:"Next, create a wrapper script /ext3/env.sh using a text editor, like nano."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"touch /ext3/env.sh\nnano /ext3/env.sh\n"})}),"\n",(0,s.jsx)(n.p,{children:"The wrapper script will activate your conda environment, to which you will be installing your packages and dependencies. The script should contain the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"#!/bin/bash\n\nunset -f which\n\nsource /ext3/miniforge3/etc/profile.d/conda.sh\nexport PATH=/ext3/miniforge3/bin:$PATH\nexport PYTHONPATH=/ext3/miniforge3/bin:$PATH\n"})}),"\n",(0,s.jsx)(n.p,{children:"Activate your conda environment with the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"source /ext3/env.sh\n"})}),"\n",(0,s.jsx)(n.p,{children:'If you have the "defaults" channel enabled, please disable it with'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"conda config --remove channels defaults\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now that your environment is activated, you can update and install packages:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"conda update -n base conda -y\nconda clean --all --yes\nconda install pip -y\nconda install ipykernel -y # Note: ipykernel is required to run as a kernel in the Open OnDemand Jupyter Notebooks\n"})}),"\n",(0,s.jsx)(n.p,{children:"To confirm that your environment is appropriately referencing your Miniforge installation, try out the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"unset -f which\nwhich conda\n# output: /ext3/miniforge3/bin/conda\n\nwhich python\n# output: /ext3/miniforge3/bin/python\n\npython --version\n# output: Python 3.8.5\n\nwhich pip\n# output: /ext3/miniforge3/bin/pip\n\nexit\n# exit Singularity\n"})}),"\n",(0,s.jsx)(n.h4,{id:"install-packages",children:"Install packages"}),"\n",(0,s.jsx)(n.p,{children:"You may now install packages into the environment with either the pip install or conda install commands."}),"\n",(0,s.jsx)(n.p,{children:"First, start an interactive job with adequate compute and memory resources to install packages. The login nodes restrict memory to 2GB per user, which may cause some large packages to crash."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"srun --cpus-per-task=2 --mem=10GB --time=04:00:00 --pty /bin/bash\n\n# wait to be assigned a node\n\nsingularity exec --overlay overlay-15GB-500K.ext3:rw /scratch/work/public/singularity/cuda12.1.1-cudnn8.9.0-devel-ubuntu22.04.2.sif /bin/bash\n\nsource /ext3/env.sh\n# activate the environment\n"})}),"\n",(0,s.jsx)(n.p,{children:"After it is running, you\u2019ll be redirected to a compute node. From there, run singularity to setup on conda environment, same as you were doing on login node."}),"\n",(0,s.jsx)(n.p,{children:"We will install PyTorch as an example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"pip3 install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cu116\n\npip3 install jupyter jupyterhub pandas matplotlib scipy scikit-learn scikit-image Pillow\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For the latest versions of PyTorch please check the ",(0,s.jsx)(n.a,{href:"https://pytorch.org/",children:"PyTorch website"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"You can see the available space left on your image with the following commands:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"find /ext3 | wc -l\n# output: should be something like 45445\n\ndu -sh  /ext3        \n# output should be something like 4.9G    /ext3\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now, exit the Singularity container and then rename the overlay image. Typing 'exit' and hitting enter will exit the Singularity container if you are currently inside it. You can tell if you're in a Singularity container because your prompt will be different, such as showing the prompt 'Singularity>'"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"exit\nmv overlay-15GB-500K.ext3 my_pytorch.ext3\n"})}),"\n",(0,s.jsx)(n.h4,{id:"test-your-pytorch-singularity-image",children:"Test your PyTorch Singularity Image"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"singularity exec --overlay /scratch/<NetID>/pytorch-example/my_pytorch.ext3:ro /scratch/work/public/singularity/cuda12.1.1-cudnn8.9.0-devel-ubuntu22.04.2.sif /bin/bash -c 'source /ext3/env.sh; python -c \"import torch; print(torch.__file__); print(torch.__version__)\"'\n\n#output: /ext3/miniforge3/lib/python3.8/site-packages/torch/__init__.py\n#output: 1.8.0+cu111\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["the end '",":ro","' addition at the end of the pytorch ext3 image starts the image in read-only mode. To add packages you will need to use '",":rw","' to launch it in read-write mode."]})}),"\n",(0,s.jsx)(n.h3,{id:"using-your-singularity-container-in-a-slurm-batch-job",children:"Using your Singularity Container in a SLURM Batch Job"}),"\n",(0,s.jsx)(n.p,{children:"Below is an example script of how to call a python script, in this case torch-test.py, from a SLURM batch job using your new Singularity image"}),"\n",(0,s.jsx)(n.p,{children:"torch-test.py:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"#!/bin/env python\n\nimport torch\n\nprint(torch.__file__)\nprint(torch.__version__)\n\n# How many GPUs are there?\nprint(torch.cuda.device_count())\n\n# Get the name of the current GPU\nprint(torch.cuda.get_device_name(torch.cuda.current_device()))\n\n# Is PyTorch using a GPU?\nprint(torch.cuda.is_available())\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now we will write the SLURM job script, run-test.SBATCH, that will start our Singularity Image and call the torch-test.py script."}),"\n",(0,s.jsx)(n.p,{children:"run-test.SBATCH:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\n#SBATCH --nodes=1\n#SBATCH --ntasks-per-node=1\n#SBATCH --cpus-per-task=1\n#SBATCH --time=1:00:00\n#SBATCH --mem=2GB\n#SBATCH --gres=gpu\n#SBATCH --job-name=torch\n\nmodule purge\n\nsingularity exec --nv \\\n\t    --overlay /scratch/<NetID>/pytorch-example/my_pytorch.ext3:ro \\\n\t    /scratch/work/public/singularity/cuda12.1.1-cudnn8.9.0-devel-ubuntu22.04.2.sif\\\n\t    /bin/bash -c "source /ext3/env.sh; python torch-test.py"\n'})}),"\n",(0,s.jsx)(n.p,{children:"You will notice that the singularity exec command features the '--nv flag' - this flag is reguired to pass the CUDA drivers from a GPU to the Singularity container."}),"\n",(0,s.jsx)(n.p,{children:"Run the run-test.SBATCH script"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"sbatch run-test.SBATCH\n"})}),"\n",(0,s.jsx)(n.p,{children:"Check your SLURM output for results, an example is shown below"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"cat slurm-3752662.out\n\n# example output:\n# /ext3/miniforge3/lib/python3.8/site-packages/torch/__init__.py\n# 1.8.0+cu111\n# 1\n# Quadro RTX 8000\n# True\n"})}),"\n",(0,s.jsx)(n.h3,{id:"optional-convert-ext3-to-a-compressed-read-only-squashfs-filesystem",children:"Optional: Convert ext3 to a compressed, read-only squashfs filesystem"}),"\n",(0,s.jsx)(n.p,{children:"Singularity images can be compressed into read-only squashfs filesystems to conserve space in your environment. Use the following steps to convert your ext3 Singularity image into a smaller squashfs filesystem."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"srun -N1 -c4 singularity exec --overlay my_pytorch.ext3:ro /scratch/work/public/singularity/centos-8.2.2004.sif mksquashfs /ext3 /scratch/<NetID>/pytorch-example/my_pytorch.sqf -keep-as-directory -processors 4\n"})}),"\n",(0,s.jsx)(n.p,{children:"Here is an example of the amount of compression that can be realized by converting:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"ls -ltrsh my_pytorch.*\n5.5G -rw-r--r-- 1 wang wang 5.5G Mar 14 20:45 my_pytorch.ext3\n2.2G -rw-r--r-- 1 wang wang 2.2G Mar 14 20:54 my_pytorch.sqf\n"})}),"\n",(0,s.jsx)(n.p,{children:"Notice that it saves over 3GB of storage in this case, though your results may vary."}),"\n",(0,s.jsx)(n.h4,{id:"use-a-squashfs-image-for-running-jobs",children:"Use a squashFS Image for Running Jobs"}),"\n",(0,s.jsx)(n.p,{children:"You can use squashFS images similarly to the ext3 images."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"singularity exec --overlay /scratch/<NetID>/pytorch-example/my_pytorch.sqf:ro /scratch/work/public/singularity/cuda12.1.1-cudnn8.9.0-devel-ubuntu22.04.2.sif  /bin/bash -c 'source /ext3/env.sh; python -c \"import torch; print(torch.__file__); print(torch.__version__)\"'\n\n#example output: /ext3/miniforge3/lib/python3.8/site-packages/torch/__init__.py\n#example output: 1.8.0+cu111\n"})}),"\n",(0,s.jsx)(n.h4,{id:"adding-packages-to-a-full-ext3-or-squashfs-image",children:"Adding Packages to a Full ext3 or squashFS Image"}),"\n",(0,s.jsx)(n.p,{children:"If the first ext3 overlay image runs out of space or you are using a squashFS conda enviorment, but need to install a new package inside, please copy another writable ext3 overlay image to work together."}),"\n",(0,s.jsx)(n.p,{children:"Open the first image in read only mode"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"cp -rp /scratch/work/public/overlay-fs-ext3/overlay-2GB-100K.ext3.gz .\ngunzip overlay-2GB-100K.ext3.gz\n\nsingularity exec --overlay overlay-2GB-100K.ext3 --overlay /scratch/<NetID>/pytorch-example/my_pytorch.ext3:ro /scratch/work/public/singularity/cuda12.1.1-cudnn8.9.0-devel-ubuntu-22.04.2.sif \n/bin/bash\nsource /ext3/env.sh\npip install tensorboard\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/rts-docs-dev/pr-preview/pr-66/docs/hpc/tools_and_software/conda_environments",children:"Click here"})," for information on how to configure your conda environment."]})}),"\n",(0,s.jsx)(n.p,{children:"Please also keep in mind that once the overlay image is opened in default read-write mode, the file will be locked. You will not be able to open it from a new process. Once the overlay is opened either in read-write or read-only mode, it cannot be opened in RW mode from other processes either. For production jobs to run, the overlay image should be open in read-only mode. You can run many jobs at the same time as long as they are run in read-only mode. In this ways, it will protect the computation software environment, software packages are not allowed to change when there are jobs running."}),"\n",(0,s.jsx)(n.h3,{id:"julia-singularity-image",children:"Julia Singularity Image"}),"\n",(0,s.jsx)(n.p,{children:"Singularity can be used to set up a Julia environment."}),"\n",(0,s.jsxs)(n.p,{children:["Create a directory for your julia work, such as ",(0,s.jsx)(n.code,{children:"/scratch/<NetID>/julia"}),", and then change to your home directory. An example is shown below."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"mkdir /home/<NetID>/julia\ncd /home/<NetID>/julia\n"})}),"\n",(0,s.jsx)(n.p,{children:"Copy an overlay image, such as the 2GB 100K overlay, which generally has enough storage for Julia packages. Once copied, unzip to the same folder, rename to julia-pkgs.ext3"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"cp -rp /scratch/work/public/overlay-fs-ext3/overlay-2GB-100K.ext3.gz .\ngunzip overlay-2GB-100K.ext3.gz\nmv overlay-2GB-100K.ext3 julia-pkgs.ext3\n"})}),"\n",(0,s.jsx)(n.p,{children:"Copy the following wrapper script in the directory"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"cp -rp /share/apps/utils/julia-setup/* .\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now launch writable Singularity overlay to install packages"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'module purge\nmodule load knitro/12.3.0\nmodule load julia/1.5.3\n\n~/julia/my-julia-writable\n\nusing Pkg\nPkg.add("KNITRO")\nPkg.add("JuMP")\n'})}),"\n",(0,s.jsx)(n.p,{children:"Now exit from the container to launch a read only version to test (example below)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-julia",children:'~/julia/my-julia\n              _\n  _       _ _(_)_     |  Documentation: https://docs.julialang.org\n  (_)     | (_) (_)    |\n  _ _   _| |_  __ _   |  Type "?" for help, "]?" for Pkg help.\n  | | | | | | |/ _` |  |\n  | | |_| | | | (_| |  |  Version 1.5.3 (2020-11-09)\n_/ |\\__\'_|_|_|\\__\'_|  |  Official https://julialang.org/ release\n|__/                   |\n\njulia> using Pkg\n\njulia> using JuMP, KNITRO\n\njulia> m = Model(with_optimizer(KNITRO.Optimizer))\nA JuMP Model\nFeasibility problem with:\nVariables: 0\nModel mode: AUTOMATIC\nCachingOptimizer state: EMPTY_OPTIMIZER\nSolver name: Knitro\n\njulia> @variable(m, x1 >= 0)\nx1\n\njulia> @variable(m, x2 >= 0)\nx2\n\njulia> @NLconstraint(m, x1*x2 == 0)\nx1 * x2 - 0.0 = 0\n\njulia> @NLobjective(m, Min, x1*(1-x2^2))\n\njulia> optimize!(m)\n'})}),"\n",(0,s.jsx)(n.p,{children:"You can make the above code into a julia script to test batch jobs. Save the following as test-knitro.jl"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-julia",children:"using Pkg\nusing JuMP, KNITRO\nm = Model(with_optimizer(KNITRO.Optimizer))\n@variable(m, x1 >= 0)\n@variable(m, x2 >= 0)\n@NLconstraint(m, x1*x2 == 0)\n@NLobjective(m, Min, x1*(1-x2^2))\noptimize!(m)\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can add additional packages with commands like the one below."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Please do not install new packages when you have Julia jobs running, this may create issues with your Julia installation)"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-julia",children:'~/julia/my-julia-writable -e \'using Pkg; Pkg.add(["Calculus", "LinearAlgebra"])\'\n'})}),"\n",(0,s.jsx)(n.p,{children:"Run a SLURM job to test with the following sbatch command (e.g. julia-test.SBATCH)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"#!/bin/bash \n\n#SBATCH --nodes=1\n#SBATCH --ntasks-per-node=1\n#SBATCH --cpus-per-task=1\n#SBATCH --time=1:00:00\n#SBATCH --mem=2GB\n#SBATCH --job-name=julia-test\n\nmodule purge\nmodule load julia/1.5.3\nmodule load knitro/12.3.0\n\n~/julia/my-julia test-knitro.jl\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then run the command with the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"sbatch julia-test.SBATCH\n"})}),"\n",(0,s.jsx)(n.p,{children:"Once the job completes, check the SLURM output (example below)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"cat slurm-1022969.out\n\n=======================================\n           Academic License\n       (NOT FOR COMMERCIAL USE)\n         Artelys Knitro 12.3.0\n=======================================\n\nKnitro presolve eliminated 0 variables and 0 constraints.\n\ndatacheck:               0\nhessian_no_f:            1\npar_numthreads:          1\n\nProblem Characteristics                                 (   Presolved)\n-----------------------\nObjective goal:  Minimize\nObjective type:  general\nNumber of variables:                                  2 (           2)\n    bounded below only:                               2 (           2)\n    bounded above only:                               0 (           0)\n    bounded below and above:                          0 (           0)\n    fixed:                                            0 (           0)\n    free:                                             0 (           0)\nNumber of constraints:                                1 (           1)\n    linear equalities:                                0 (           0)\n    quadratic equalities:                             0 (           0)\n    gen. nonlinear equalities:                        1 (           1)\n    linear one-sided inequalities:                    0 (           0)\n    quadratic one-sided inequalities:                 0 (           0)\n    gen. nonlinear one-sided inequalities:            0 (           0)\n    linear two-sided inequalities:                    0 (           0)\n    quadratic two-sided inequalities:                 0 (           0)\n    gen. nonlinear two-sided inequalities:            0 (           0)\nNumber of nonzeros in Jacobian:                       2 (           2)\nNumber of nonzeros in Hessian:                        3 (           3)\n\nKnitro using the Interior-Point/Barrier Direct algorithm.\n\n  Iter      Objective      FeasError   OptError    ||Step||    CGits \n--------  --------------  ----------  ----------  ----------  -------\n       0    0.000000e+00   0.000e+00\n\nWARNING: The initial point is a stationary point and only the first order\n         optimality conditions have been verified.\n\nEXIT: Locally optimal solution found.\n\nFinal Statistics\n----------------\nFinal objective value               =   0.00000000000000e+00\nFinal feasibility error (abs / rel) =   0.00e+00 / 0.00e+00\nFinal optimality error  (abs / rel) =   0.00e+00 / 0.00e+00\n# of iterations                     =          0 \n# of CG iterations                  =          0 \n# of function evaluations           =          1\n# of gradient evaluations           =          1\n# of Hessian evaluations            =          0\nTotal program time (secs)           =       1.03278 (     1.014 CPU time)\nTime spent in evaluations (secs)    =       0.00000\n\n===============================================================================\n"})}),"\n",(0,s.jsx)(n.h3,{id:"using-centos-8-for-julia-for-module-compatibility",children:"Using CentOS 8 for Julia (for Module Compatibility)"}),"\n",(0,s.jsx)(n.p,{children:"Building on the previous Julia example, this will demonstrate how to set up a similar environment using the Singularity CentOS 8 image for additional customization. Using the CentOS 8 overlay allows for the loading of modules installed on Greene, such as Knitro 12.3.0"}),"\n",(0,s.jsx)(n.p,{children:"Copy overlay image"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"cp -rp /scratch/work/public/overlay-fs-ext3/overlay-2GB-100K.ext3.gz .\ngunzip overlay-2GB-100K.ext3.gz\nmv overlay-2GB-100K.ext3 julia-pkgs.ext3\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The path in this example is ",(0,s.jsx)(n.code,{children:"/scratch/<NetID>/julia/julia-pkgs.ext3"})]}),"\n",(0,s.jsxs)(n.p,{children:["To use modules installed into ",(0,s.jsx)(n.code,{children:"/share/apps"})," you can make two directories"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"mkdir julia-compiled julia-logs\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now, in this example, the absoulte paths are as follows"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"/scratch/<NetID>/julia/julia-compiled\n/scratch/<NetID>/julia/julia-logs\n"})}),"\n",(0,s.jsx)(n.p,{children:"To launch Singularity with overlay images in writable mode to install packages"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"singularity exec \\\n        --overlay /scratch/<NetID>/julia/julia-pkgs.ext3 \\\n        --bind /share/apps \\\n        --bind /scratch/<NetID>/julia/julia-compiled:/ext3/pkgs/compiled \\\n        --bind /scratch/<NetID>/julia/julia-logs:/ext3/pkgs/logs  \\\n        /scratch/work/public/apps/greene/centos-8.2.2004.sif \\\n        /bin/bash\n"})}),"\n",(0,s.jsx)(n.p,{children:"Implement a wrapper script /ext3/env.sh"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"#/bin/bash\n\nexport JULIA_DEPOT_PATH=/ext3/pkgs # this changes the default installation path to the environment\nsource /opt/apps/lmod/lmod/init/bash\nmodule use /share/apps/modulefiles\nmodule purge\nmodule load knitro/12.3.0\nmodule load julia/1.5.3\n"})}),"\n",(0,s.jsx)(n.p,{children:"Load julia via the wrapper script and check that it loads properly"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"source /ext3/env.sh\nwhich julia\n# example output: /share/apps/julia/1.5.3/bin/julia\njulia --version\n# example output: julia version 1.5.3\n"})}),"\n",(0,s.jsx)(n.p,{children:"Run julia to install packages"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-julia",children:'julia\n> using Pkg\n> Pkg.add("KNITRO")\n> Pkg.add("JuMP")\n'})}),"\n",(0,s.jsx)(n.p,{children:"Set up a similar test script like the test-knitro.jl script above. Name it test.jl:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-julia",children:"using Pkg\nusing JuMP, KNITRO\nm = Model(with_optimizer(KNITRO.Optimizer))\n@variable(m, x1 >= 0)\n@variable(m, x2 >= 0)\n@NLconstraint(m, x1*x2 == 0)\n@NLobjective(m, Min, x1*(1-x2^2))\noptimize!(m)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now implement a wrapper script named julia into ~/bin, the overlay image is in readonly mode"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\nargs=\'\'\nfor i in "$@"; do\n    i="${i//\\\\/\\\\\\\\}"\n    args="$args \\"${i//\\"/\\\\\\"}\\""\ndone\n\nmodule purge\n\nsingularity exec \\\n        --overlay /scratch/<NetID>/julia/julia-pkgs.ext3:ro  \\\n        --bind /share/apps \\\n        --bind /scratch/<NetID>/julia/julia-compiled:/ext3/pkgs/compiled \\\n        --bind /scratch/<NetID>/julia/julia-logs:/ext3/pkgs/logs  \\\n        /scratch/work/public/apps/greene/centos-8.2.2004.sif \\\n        /bin/bash -c "\nsource /ext3/env.sh\njulia $args\n"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Make the wrapper executable"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"chmod 755 ~/bin/julia\n"})}),"\n",(0,s.jsx)(n.p,{children:"Test your installation with a SLURM job example. The following code has been put into a file called test-julia-centos.SBATCH"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"#!/bin/bash \n\n#SBATCH --nodes=1\n#SBATCH --ntasks-per-node=1\n#SBATCH --cpus-per-task=1\n#SBATCH --time=1:00:00\n#SBATCH --mem=2GB\n#SBATCH --job-name=julia-test\nmodule purge\n\njulia test.jl\n"})}),"\n",(0,s.jsx)(n.p,{children:"Run the above with the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"sbatch test-julia-centos.SBATCH\n"})}),"\n",(0,s.jsx)(n.p,{children:"Read the output (example below)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"cat slurm-764085.out \n"})}),"\n",(0,s.jsx)(n.h4,{id:"installing-new-julia-packages-later",children:"Installing New Julia Packages Later"}),"\n",(0,s.jsx)(n.p,{children:"Implement another writable julia-writable with overlay image writable in order to install new Julia packages later"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'cd /home/<NetID>/bin\ncp -rp julia julia-writable\n\n#!/bin/bash\n\nargs=\'\'\nfor i in "$@"; do\n    i="${i//\\\\/\\\\\\\\}"\n    args="$args \\"${i//\\"/\\\\\\"}\\""\ndone\n\nmodule purge\n\nsingularity exec \\\n        --overlay /scratch/<NetID>/julia/julia-pkgs.ext3  \\\n        --bind /share/apps \\\n        --bind /scratch/<NetID>/julia/julia-compiled:/ext3/pkgs/compiled \\\n        --bind /scratch/<NetID>/julia/julia-logs:/ext3/pkgs/logs  \\\n        /scratch/work/public/apps/greene/centos-8.2.2004.sif \\\n        /bin/bash -c "\nsource /ext3/env.sh\njulia $args\n"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Check the writable image"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"which julia-writable\n#example output: ~/bin/julia-writable\n"})}),"\n",(0,s.jsx)(n.p,{children:"Install packages to the writable image"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'julia-writable -e \'using Pkg; Pkg.add(["Calculus", "LinearAlgebra"])\'\n'})}),"\n",(0,s.jsx)(n.p,{children:"If you do not need host packages installed in /share/apps, you can work with Singularity OS image"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"/scratch/work/public/singularity/ubuntu-20.04.1.sif \n"})}),"\n",(0,s.jsxs)(n.p,{children:["download Julia installation package from ",(0,s.jsx)(n.a,{href:"https://julialang-s3.julialang.org/bin/linux/x64/1.5/julia-1.5.3-linux-x86_64.tar.gz",children:"https://julialang-s3.julialang.org/bin/linux/x64/1.5/julia-1.5.3-linux-x86_64.tar.gz"})]}),"\n",(0,s.jsxs)(n.p,{children:["install Julia to ",(0,s.jsx)(n.code,{children:"/ext3"}),", setup PATH properly. It will be easy to move to other servers in future."]})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},3881:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var a=i(8101);const s={},t=a.createContext(s);function r(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);