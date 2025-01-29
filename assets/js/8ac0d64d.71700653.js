"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1769],{9515:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"slurm/slurm_tutorial","title":"Slurm Tutorial","description":"[getting and renewing an account page]: ../accessinghpc/gettingandrenewingan_account.md","source":"@site/docs/slurm/slurm_tutorial.md","sourceDirName":"slurm","slug":"/slurm/slurm_tutorial","permalink":"/rts-docs-dev/docs/slurm/slurm_tutorial","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/slurm/slurm_tutorial.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Slurm","permalink":"/rts-docs-dev/docs/slurm/"},"next":{"title":"Slurm: Main Commands","permalink":"/rts-docs-dev/docs/slurm/slurm_main_commands"}}');var r=s(4848),a=s(8453);const t={sidebar_position:2},i="Slurm Tutorial",l={},c=[{value:"Introduction to High Performance Computing Clusters",id:"introduction-to-high-performance-computing-clusters",level:2},{value:"Slurm Commands",id:"slurm-commands",level:2},{value:"Software and Environment Modules",id:"software-and-environment-modules",level:2},{value:"Batch Job Example",id:"batch-job-example",level:2},{value:"Interactive Job Example",id:"interactive-job-example",level:2},{value:"MPI Job Example",id:"mpi-job-example",level:2},{value:"Intel&#39;s OpenMPI",id:"intels-openmpi",level:3},{value:"GCC&#39;s OpenMPI",id:"gccs-openmpi",level:3},{value:"GPU Job Example",id:"gpu-job-example",level:2},{value:"Array Job Example",id:"array-job-example",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"slurm-tutorial",children:"Slurm Tutorial"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"#introduction-to-high-performance-computing-clusters",children:"Introduction to High Performance Computing Clusters"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"#slurm-commands",children:"Slurm Commands"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"#software-and-environment-modules",children:"Software and environment modules"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"#batch-job-example",children:"Batch Job Example"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"#interactive-job-example",children:"Interactive Job Example"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"#mpi-job-example",children:"MPI Job Example"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"#gpu-job-example",children:"GPU Job Example"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"#array-job-example",children:"Array Job Example"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"introduction-to-high-performance-computing-clusters",children:"Introduction to High Performance Computing Clusters"}),"\n",(0,r.jsx)(n.p,{children:"In a High Performance Computing Cluster, such as the NYU-IT HPC Greene cluster, there are hundreds of computing nodes interconnected by high-speed networks."}),"\n",(0,r.jsx)(n.p,{children:"Linux operating system ( in our case Red Hat Enterprise Linux) runs on each of the nodes individually. The resources are shared among many users for their technical or scientific computing purposes."}),"\n",(0,r.jsx)(n.p,{children:"Slurm is a cluster software layer built on top of the interconnected nodes, aiming at orchestrating the nodes' computing activites, so that the cluster could be viewed as a unified, enhanced and scalable computing system by its users."}),"\n",(0,r.jsx)(n.p,{children:"In NYU HPC clusters the users coming from many departments with various disciplines and subjects, with their own computing projects, impose on us very diverse requirements regarding hardware, software resources, and processing parallelism. Users submit jobs, which compete for computing resources."}),"\n",(0,r.jsx)(n.p,{children:"The Slurm software system is a resource manager and a job scheduler, which is designed to allocate resources and schedule jobs. Slurm is an open-source software, with a large user community, and has been installed on many top 500 supercomputers."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["This tutorial assumes you have a NYU HPC account. If not, you may find the steps to apply for an account on the ",(0,r.jsx)(n.a,{href:"/rts-docs-dev/docs/accessing_hpc/getting_and_renewing_an_account",children:"Getting and renewing an account page"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"It also assumes you are comfortable with Linux command-line environment. To learn about linux please read [Tutorial 1]."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Please review the [Hardware Specs page] for more information on Greene's hardware specifications."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"slurm-commands",children:"Slurm Commands"}),"\n",(0,r.jsx)(n.p,{children:"For an overview of useful Slurm commands, please read (Slurm Main Commands) page before continuing the tutorial."}),"\n",(0,r.jsx)(n.h2,{id:"software-and-environment-modules",children:"Software and Environment Modules"}),"\n",(0,r.jsx)(n.p,{children:"Lmod, an Environment Module system, is a tool for managing multiple versions and configurations of software packages and is used by many HPC centers around the world. With Environment Modules, software packages are installed away from the base system directories, and for each pacakge, an associated modulefile describes what must be altered in a user's shell environment - such as the $PATH environment variable - in order to use the software package. The modulefile also describes dependencies and conflicts between this software package and other package and versions."}),"\n",(0,r.jsx)(n.p,{children:"To use a given software package, you load the corresponding module. Unloading the module afterwards cleanly undoes the changes that loading the modules made to your environment, thus freeing you to use other software packages that might have conflicted with the first one."}),"\n",(0,r.jsx)(n.p,{children:"Below is a list of modules and their associated functions:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"module load <module-name>"})," : loads a module"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["For example : ",(0,r.jsx)(n.code,{children:"module load python3"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"module unload <module-name>"})," : unloads a module"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["For example : ",(0,r.jsx)(n.code,{children:"module unload python3"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"module show <module-name>"})," : see exactly what effect loading a module will have with"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"module purge"})," : remove all loaded modules from your environment"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"module whatis <module-name>"})," : Find out more about a software package"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"module list"})," : check which modules are currently loaded in your environment"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"module avail"})," : check what software packages are available"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"module help <module-name>"})," : A module file may include more detailed help for software package"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"batch-job-example",children:"Batch Job Example"}),"\n",(0,r.jsx)(n.p,{children:"Batch jobs require a script file for the SLURM scheduler to interpret and execute. The SBATCH file contains both commands specific for SLURM to interpret as well as programs for it execute. Below is a simple example of a batch job to run a Stata do file, the file is named myscript.sbatch :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"#!/bin/bash\n\n#SBATCH --nodes=1\n#SBATCH --ntasks-per-node=1\n#SBATCH --cpus-per-task=1\n#SBATCH --time=5:00:00\n#SBATCH --mem=2GB\n#SBATCH --job-name=myTest\n#SBATCH --mail-type=END\n#SBATCH --mail-user=bob.smith@nyu.edu\n#SBATCH --output=slurm_%j.out\n\nmodule purge\nmodule load stata/14.2\n\nRUNDIR=$SCRATCH/my_project/run-${SLURM_JOB_ID/.*}\nmkdir -p $RUNDIR\nDATADIR=$SCRATCH/my_project/data\ncd $RUNDIR\n\nstata -b do $DATADIR/data_0706.do\n"})}),"\n",(0,r.jsx)(n.p,{children:"Below we will break down each line of the SBATCH script. More options can be found on the (SchedMD website)."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"## This tells the shell how to execute the script\n#!/bin/bash\n\n## The #SBATCH lines are read by SLURM for options.\n## In the lines below we ask for a single node, \n## one task for that node, and one cpu for each task.\n#SBATCH --nodes=1\n#SBATCH --ntasks-per-node=1\n#SBATCH --cpus-per-task=1\n\n## Time is the estimated time to complete, in this case 5 hours.\n#SBATCH --time=5:00:00\n\n## We expect no more than 2GB of memory to be needed\n#SBATCH --mem=2GB\n\n## To make them easier to track, \n## it's best to name jobs something recognizable.\n## You can then use the name to look up reports with tools like squeue.\n#SBATCH --job-name=myTest\n\n## These lines manage mail alerts for when the job ends,\n## and who the email should be sent to.\n#SBATCH --mail-type=END\n#SBATCH --mail-user=bob.smith@nyu.edu\n\n## This places the standard output and standard error into the same file,\n## in this case slurm_<job_id>.out\n#SBATCH --output=slurm_%j.out\n\n## First we ensure a clean environment by purging the current one\nmodule purge\n\n## Load the desired software, in this case stata 14.2\nmodule load stata/14.2\n\n## Create a unique directory to run the job in.\nRUNDIR=$SCRATCH/my_project/run-${SLURM_JOB_ID/.*}\nmkdir -p $RUNDIR\n\n## Set an environment variable for where the data is stored.\nDATADIR=$SCRATCH/my_project/data\n\n## Change directories to the unique run directory\ncd $RUNDIR\n\n## Execute the desired Stata do file script\nstata -b do $DATADIR/data_0706.do\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can submit the job with the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"sbatch myscript.sbatch\n"})}),"\n",(0,r.jsx)(n.p,{children:"The command will result in the job queuing as it awaits resources to become available (which varies on the number of other jobs being run on the cluster). You can see the status of yor jobs with the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"squeue --me\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"NOTE:"})})," Calling just squeue without passing the ",(0,r.jsx)(n.code,{children:"--me"})," option will display all users' job queue status by default"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Lastly, you can read the output of your job in the ",(0,r.jsx)(n.code,{children:"slurm-<job_ID>"}),".out file produced by running your job. This is where logs regarding the execution of your job can be found, including errors or system messages. You can print the contents to the screen from the directory containing the output file with the following command:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"cat slurm-<job_ID>.out\n"})}),"\n",(0,r.jsx)(n.h2,{id:"interactive-job-example",children:"Interactive Job Example"}),"\n",(0,r.jsxs)(n.p,{children:["While the majority of the jobs on the cluster are submitted with the ",(0,r.jsx)(n.code,{children:"sbatch"})," command, and executed in the background, there are also methods to run applications interactively throughthe ",(0,r.jsx)(n.code,{children:"srun"})," command. Interactive jobs allow the users to enter commands and data on the command line (or in a graphical interface), providing an experience similar to working on a desktop or laptop. Examples of common interactive tasks are:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Editing files"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Compiling and debugging code"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Exploring data, to obtain a rough idea of characteristics on the topic"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Getting graphical windows to run visualization"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Running software tools in interactive sessions"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Interactive jobs also help avoid issues with the login nodes. If you are working on a login node and your job is too IO intensive, it may be removed without notice. Running interactive jobs on compute nodes does not impact many users and in addition provides access to resources that are not available on the login nodes, such as interactive access to GPUs, high memory, exclusive access to all the resources of a compute node, etc."}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.code,{children:"srun"})," example below, through ",(0,r.jsx)(n.code,{children:"--pty /bin/bash"})," we request allocation of a ",(0,r.jsx)(n.code,{children:"pseudo terminal"})," (pty) and start a ",(0,r.jsx)(n.code,{children:"bash shell session"}),". By default the resource allocated is a single CPU core and 2GB memory for 1 hour time limit."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"srun --pty /bin/bash\n"})}),"\n",(0,r.jsx)(n.p,{children:"To request resources such as 4 CPU cores, 4 GB memory for 2 hours of maximum duration, you can add the following arguments:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"srun --cpus-per-task=4 --time=2:00:00 --mem=4GB --pty /bin/bash\n"})}),"\n",(0,r.jsx)(n.p,{children:"Similarly, to request one GPU card, 3 GB memory for a duration of 1.5 hours you can pass the following arguments to srun:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"srun --time=1:30:00 --mem=3GB --gres=gpu:1 --pty /bin/bash\n"})}),"\n",(0,r.jsx)(n.p,{children:"Once the job begins you will notice your prompt change, for example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell-session",children:"[mdw303@log-3 ~]$ srun --pty /bin/bash\nsrun: job 7864254 queued and waiting for resources\nsrun: job 7864254 has been allocated resources\n[mdw303@cs080 ~]$\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can see above that the prompt changed from log-3 ( one of the login nodes ) to cs080 ( one of the compute nodes ), meaning we have created a pseudo terminal and logged in with a bash shell on a compute node from our login node."}),"\n",(0,r.jsx)(n.p,{children:"You can now load modules, software and run them interactively on the compute node having the resources ( CPUs, memory, GPUs etc ) that we asked for."}),"\n",(0,r.jsx)(n.p,{children:"Below outlines the steps to start an interactive session and launch R:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"[sk6404@log-1 ~]$ srun --cpus-per-task=1 --pty /bin/bash\n[sk6404@cs022 ~]$ module purge\n[sk6404@cs022 ~]$ module load r/intel/4.0.3\n[sk6404@cs022 ~]$ module list\nCurrently Loaded Modules:\n  1) intel/19.1.2   2) r/intel/4.0.3\n[sk6404@cs022 ~]$ R\nR version 4.0.3 (2020-10-10) -- \"Bunny-Wunnies Freak Out\"\nCopyright (C) 2020 The R Foundation for Statistical Computing\nPlatform: x86_64-centos-linux-gnu (64-bit)\nR is free software and comes with ABSOLUTELY NO WARRANTY.\nYou are welcome to redistribute it under certain conditions.\nType 'license()' or 'licence()' for distribution details.\n  Natural language support but running in an English locale\nR is a collaborative project with many contributors.\nType 'contributors()' for more information and\n'citation()' on how to cite R or R packages in publications.\nType 'demo()' for some demos, 'help()' for on-line help, or\n'help.start()' for an HTML browser interface to help.\nType 'q()' to quit R.\n> 5 + 10\n[1] 15\n> q()\nSave workspace image? [y/n/c]: n\n[sk6404@cs022 ~]$ exit\nexit\n[sk6404@log-1 ~]$\n"})}),"\n",(0,r.jsx)(n.h2,{id:"mpi-job-example",children:"MPI Job Example"}),"\n",(0,r.jsx)(n.p,{children:'MPI stands for "Message Passing Interface" and is managed by a program, such as OpenMPI, to coordinate code and resources across the HPC cluster for your job to run workloads in parallel. You may have heard of HPC sometimes referred to as "parallel computing" because the ability to run many processes simultaneously - aka in parallel - is how the best efficiencies can be realized on the cluster. Users interested in MPI generally must compile the program they want to run using an MPI compiler.'}),"\n",(0,r.jsx)(n.p,{children:"Greene supports two common OpenMPI versions, Intel and GCC. These can be loaded as modules:"}),"\n",(0,r.jsx)(n.h3,{id:"intels-openmpi",children:"Intel's OpenMPI"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"module load openmpi/intel/4.1.1\n"})}),"\n",(0,r.jsx)(n.h3,{id:"gccs-openmpi",children:"GCC's OpenMPI"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"module load openmpi/gcc/4.1.1\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Below we will illustrate an example of how to compile a C script for MPI. Copy this into your working directory as ",(0,r.jsx)(n.code,{children:"hellompi.c"})," :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-C",children:'#include <stdio.h>\n#include <stdlib.h>\n#include <mpi.h>\n\nint main(int argc, char *argv[], char *envp[]) {\n  int numprocs, rank, namelen;\n  char processor_name[MPI_MAX_PROCESSOR_NAME];\n\n  MPI_Init(&argc, &argv);\n  MPI_Comm_size(MPI_COMM_WORLD, &numprocs);\n  MPI_Comm_rank(MPI_COMM_WORLD, &rank);\n  MPI_Get_processor_name(processor_name, &namelen);\n\n  printf("Process %d on %s out of %d\\n", rank, processor_name, numprocs);\n\n  MPI_Finalize();\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Once copied into your directory, load OpenMPI and compile it with the following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"module load openmpi/intel/4.1.1\nmpicc hellompi.c -o hellompi\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Next, create a ",(0,r.jsx)(n.code,{children:"hellompi.sbatch"})," script:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"#!/bin/bash\n\n#SBATCH --nodes=4\n#SBATCH --ntasks-per-node=1\n#SBATCH --cpus-per-task=1\n#SBATCH --time=1:00:00\n#SBATCH --mem=2GB\n#SBATCH --job-name=hellompi\n#SBATCH --output=hellompi.out\n\n# Load the default OpenMPI module.\nmodule purge\nmodule load openmpi/intel/4.1.1\n\n# Run the hellompi program with mpirun. The -n flag is not required;\n# mpirun will automatically figure out the best configuration from the\n# Slurm environment variables.\nmpirun ./hellompi\n"})}),"\n",(0,r.jsx)(n.p,{children:"Run the job with the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"sbatch hellompi.sbatch\n"})}),"\n",(0,r.jsxs)(n.p,{children:["After the job runs, cat the ",(0,r.jsx)(n.code,{children:"hellompi.out"})," output file to see that your processes ran on multiple nodes. There may be some errors, but your output should contain something like the following, indicating the process was run in parallel on multiple nodes:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Process 0 on cs265.nyu.cluster out of 4\nProcess 1 on cs266.nyu.cluster out of 4\nProcess 2 on cs267.nyu.cluster out of 4\nProcess 3 on cs268.nyu.cluster out of 4\n"})}),"\n",(0,r.jsx)(n.h2,{id:"gpu-job-example",children:"GPU Job Example"}),"\n",(0,r.jsx)(n.p,{children:"To request one GPU card, use SBATCH directives in job script:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"#SBATCH --gres=gpu:1\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To request a specific card type, use e.g. ",(0,r.jsx)(n.code,{children:"--gres=gpu:v100:1"}),". The card types currently available are v100 and RTX 8000. As an example, let's submit an Amber job. Amber is a molecular dynamics software package. The recipe is:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"mkdir -p /scratch/$USER/myambertest\ncd /scratch/$USER/myambertest\ncp /share/apps/Tutorials/slurm/example/amberGPU/* .\nsbatch run-amber.s\n"})}),"\n",(0,r.jsx)(n.p,{children:'From the tutorial example directory we copy over Amber input data files "inpcrd", "prmtop" and "mdin", and the job script file "run-amber.s".'}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"NOTE:"})})," At the time of writing this you may need to update the run-amber.s script to load amber version 20.06, rather than the default 16.06."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:'The content of the job script "run-amber.s" should be as follows:'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"#!/bin/bash\n\n#SBATCH --job-name=myAmberJobGPU\n#SBATCH --nodes=1\n#SBATCH --cpus-per-task=1\n#SBATCH --time=00:30:00\n#SBATCH --mem=3GB\n#SBATCH --gres=gpu:1\n\nmodule purge\nmodule load amber/openmpi/intel/20.06\n\ncd /scratch/$USER/myambertest\npmemd.cuda -O\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The demo Amber job should take ~2 minutes to finish once it starts running. When the job is done, several output files are generated. Check the one named ",(0,r.jsx)(n.code,{children:"mdout"}),", which has a section most relevant here:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"|--------------------- INFORMATION ----------------------\n| GPU (CUDA) Version of PMEMD in use: NVIDIA GPU IN USE.\n|                    Version 16.0.0\n|\n|                      02/25/2016\n[......] \n\n|------------------- GPU DEVICE INFO --------------------\n|\n|            CUDA_VISIBLE_DEVICES: 0\n|   CUDA Capable Devices Detected:      1\n|           CUDA Device ID in use:      0\n|                CUDA Device Name: Tesla V100\n|     CUDA Device Global Mem Size:  11439 MB\n| CUDA Device Num Multiprocessors:     13\n|           CUDA Device Core Freq:   0.82 GHz\n|\n|--------------------------------------------------------\n"})}),"\n",(0,r.jsx)(n.h2,{id:"array-job-example",children:"Array Job Example"}),"\n",(0,r.jsxs)(n.p,{children:["Using job array you may submit many similar jobs with almost identical job requirement. This reduces loads on both users and the scheduler system. Job arrays can only be used in batch jobs. Usually the only requirement difference among jobs in a job array is the input file or files. Please follow the recipe below to try the example. There are 5 input files named ",(0,r.jsx)(n.code,{children:"sample-1.txt"}),", ",(0,r.jsx)(n.code,{children:"sample-2.txt"})," to ",(0,r.jsx)(n.code,{children:"sample-5.txt"})," in sequential order. Running one command ",(0,r.jsx)(n.code,{children:"sbatch run-jobarray.s"}),", you submit 5 jobs to process each of these input files individually. Run the following commands to create the directory and submit the array job:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"mkdir -p /scratch/$USER/myjarraytest\ncd /scratch/$USER/myjarraytest\ncp /share/apps/Tutorials/slurm/example/jobarray/* .\nls\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"OUTPUT:"})})," run-jobarray.s  sample-1.txt  sample-2.txt  sample-3.txt  sample-4.txt  sample-5.txt  wordcount.py"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"sbatch --array=1-5 run-jobarray.s\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The content of the job script ",(0,r.jsx)(n.code,{children:"run-jobarray.s"})," is copied below:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"#!/bin/bash\n\n#SBATCH --job-name=myJobarrayTest\n#SBATCH --nodes=1\n#SBATCH --tasks-per-node=1\n#SBATCH --array=1-5 # this creates an array!\n#SBATCH --time=5:00\n#SBATCH --mem=1GB\n#SBATCH --output=wordcounts_%A_%a.out\n#SBATCH --error=wordcounts_%A_%a.err\n\nmodule purge\nmodule load python/intel/3.8.6\n\ncd /scratch/$USER/myjarraytest\npython2 wordcount.py sample-$SLURM_ARRAY_TASK_ID.txt\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Job array submissions create an environment variable called ",(0,r.jsx)(n.code,{children:"SLURM_ARRAY_TASK_ID"}),", which is unique for each job in the array job. It is usually embedded somewhere so that at a job running time it's unique value is incorporated into producing a proper file name. Also as shown above: two additional options %A and %a, denoting the job ID and the task ID (i.e. job array index) respectively, are available for specifying a job's stdout, and stderr file names."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>i});var o=s(6540);const r={},a=o.createContext(r);function t(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);