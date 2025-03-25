"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6494],{7972:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"hpc/tools_and_software/software_on_greene","title":"Software on Greene","description":"Software Overview","source":"@site/docs/hpc/06_tools_and_software/05_software_on_greene.md","sourceDirName":"hpc/06_tools_and_software","slug":"/hpc/tools_and_software/software_on_greene","permalink":"/rts-docs-dev/pr-preview/pr-69/docs/hpc/tools_and_software/software_on_greene","draft":false,"unlisted":false,"editUrl":"https://github.com/NYU-ITS/rts-docs-dev/blob/main/docs/hpc/06_tools_and_software/05_software_on_greene.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{},"sidebar":"hpcSidebar","previous":{"title":"R Packages with renv","permalink":"/rts-docs-dev/pr-preview/pr-69/docs/hpc/tools_and_software/r_packages_with_renv"},"next":{"title":"Singularity: Run Custom Applications with Containers","permalink":"/rts-docs-dev/pr-preview/pr-69/docs/hpc/tools_and_software/singularity_run_custom_applications_with_containers"}}');var r=s(5105),i=s(3881);const l={},t="Software on Greene",o={},c=[{value:"Software Overview",id:"software-overview",level:2},{value:"Software and Environment Modules",id:"software-and-environment-modules",level:2},{value:"Package Management for R, Python, &amp; Julia, and Conda in general",id:"package-management-for-r-python--julia-and-conda-in-general",level:2},{value:"Examples of software usage on Greene",id:"examples-of-software-usage-on-greene",level:2},{value:"Accessing Datasets with Singularity",id:"accessing-datasets-with-singularity",level:2},{value:"Licensed Software",id:"licensed-software",level:2},{value:"SCHRODINGER",id:"schrodinger",level:3},{value:"Using SCHRODINGER on HPC Cluster",id:"using-schrodinger-on-hpc-cluster",level:4},{value:"Using SCHRODINGER on NYU Lab Computers",id:"using-schrodinger-on-nyu-lab-computers",level:4},{value:"Schrodinger Example Files",id:"schrodinger-example-files",level:4},{value:"COMSOL",id:"comsol",level:3},{value:"MATHEMATICA",id:"mathematica",level:3},{value:"SAS",id:"sas",level:3},{value:"Running a parallel SAS job on HPC cluster (Greene):",id:"running-a-parallel-sas-job-on-hpc-cluster-greene",level:4},{value:"MATLAB",id:"matlab",level:3},{value:"MATLAB on personal computers and laptops",id:"matlab-on-personal-computers-and-laptops",level:4},{value:"STATA",id:"stata",level:3},{value:"Running a parallel STATA job on HPC cluster (Greene):",id:"running-a-parallel-stata-job-on-hpc-cluster-greene",level:4},{value:"GAUSSIAN",id:"gaussian",level:3},{value:"Running a parallel Gaussian job on HPC cluster (Greene):",id:"running-a-parallel-gaussian-job-on-hpc-cluster-greene",level:4},{value:"Knitro",id:"knitro",level:3},{value:"Running a parallel Knitro job on HPC cluster (Greene):",id:"running-a-parallel-knitro-job-on-hpc-cluster-greene",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"software-on-greene",children:"Software on Greene"})}),"\n",(0,r.jsx)(n.h2,{id:"software-overview",children:"Software Overview"}),"\n",(0,r.jsx)(n.p,{children:"There are different types of software packages available"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Use ",(0,r.jsx)(n.code,{children:"module avail"})," command to see preinstalled software.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"This includes the licensed software listed below"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Singularity Containers","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["You can find those already built and ready to use, at location ",(0,r.jsx)(n.code,{children:"/scratch/work/public/singularity/"})]}),"\n",(0,r.jsxs)(n.li,{children:["For more information on running software with Singularity, ",(0,r.jsx)(n.a,{href:"/rts-docs-dev/pr-preview/pr-69/docs/hpc/tools_and_software/singularity_run_custom_applications_with_containers",children:"click here"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Python/R/Julia packages can be installed by a user"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If you need another linux program installed, please contact us at ",(0,r.jsx)(n.a,{href:"mailto:hpc@nyu.edu",children:"hpc@nyu.edu"})]}),"\n",(0,r.jsx)(n.h2,{id:"software-and-environment-modules",children:"Software and Environment Modules"}),"\n",(0,r.jsx)(n.p,{children:"Lmod, an Environment Module system, is a tool for managing multiple versions and configurations of software packages and is used by many HPC centers around the world. With Environment Modules, software packages are installed away from the base system directories, and for each package, an associated modulefile describes what must be altered in a user's shell environment - such as the $PATH environment variable - in order to use the software package. The modulefile also describes dependencies and conflicts between this software package and other packages and versions."}),"\n",(0,r.jsx)(n.p,{children:"To use a given software package, you load the corresponding module. Unloading the module afterwards cleanly undoes the changes that loading the module made to your environment, thus freeing you to use other software packages that might have conflicted with the first one."}),"\n",(0,r.jsx)(n.p,{children:"Below is a list of modules and their associated functions:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Command"}),(0,r.jsx)(n.th,{children:"Function"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["module unload ",(0,r.jsx)(n.code,{children:"<module-name>"})]}),(0,r.jsx)(n.td,{children:"unload a module"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["module show ",(0,r.jsx)(n.code,{children:"<module-name>"})]}),(0,r.jsx)(n.td,{children:"see exactly what effect loading the module will have with"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"module purge"}),(0,r.jsx)(n.td,{children:"remove all loaded modules from your environment"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["module load ",(0,r.jsx)(n.code,{children:"<module-name>"})]}),(0,r.jsx)(n.td,{children:"load a module"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["module whatis ",(0,r.jsx)(n.code,{children:"<module-name>"})]}),(0,r.jsx)(n.td,{children:"find out more about a software package"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"module list"}),(0,r.jsx)(n.td,{children:"check which modules are currently loaded in your environment"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"module avail"}),(0,r.jsx)(n.td,{children:"check what software packages are available"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["module help ",(0,r.jsx)(n.code,{children:"<module-name>"})]}),(0,r.jsx)(n.td,{children:"A module file may include more detailed help for the software package"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"package-management-for-r-python--julia-and-conda-in-general",children:"Package Management for R, Python, & Julia, and Conda in general"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/rts-docs-dev/pr-preview/pr-69/docs/hpc/tools_and_software/conda_environments",children:"Conda environments (Python, R)"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/rts-docs-dev/pr-preview/pr-69/docs/hpc/tools_and_software/python_packages_with_virtual_environments",children:"Using virtual environments for Python"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/rts-docs-dev/pr-preview/pr-69/docs/hpc/tools_and_software/r_packages_with_renv",children:"Managing R packages with renv"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/rts-docs-dev/pr-preview/pr-69/docs/hpc/containers/singularity_with_conda",children:"Singularity with Miniconda"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"examples-of-software-usage-on-greene",children:"Examples of software usage on Greene"}),"\n",(0,r.jsxs)(n.p,{children:["Examples can be found under ",(0,r.jsx)(n.code,{children:"/scratch/work/public/examples/"})," and include the following"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"alphafold"}),(0,r.jsx)(n.td,{children:"knitro"}),(0,r.jsx)(n.td,{children:"Singularity"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"amd GPUs"}),(0,r.jsx)(n.td,{children:"lammps"}),(0,r.jsx)(n.td,{children:"slurm"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"comsol"}),(0,r.jsx)(n.td,{children:"matlab"}),(0,r.jsx)(n.td,{children:"spark"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"c-sharp"}),(0,r.jsx)(n.td,{children:"mathematica"}),(0,r.jsx)(n.td,{children:"stata"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"crystal17"}),(0,r.jsx)(n.td,{children:"namd"}),(0,r.jsx)(n.td,{children:"squashfs"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fluent"}),(0,r.jsx)(n.td,{children:"orca"}),(0,r.jsx)(n.td,{children:"trinity"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"gaussian"}),(0,r.jsx)(n.td,{children:"quantum-espresso"}),(0,r.jsx)(n.td,{children:"vnc"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hadoop-streaming"}),(0,r.jsx)(n.td,{children:"R"}),(0,r.jsx)(n.td,{children:"vscode"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"julia"}),(0,r.jsx)(n.td,{children:"sas"}),(0,r.jsx)(n.td,{children:"xvfb"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"jupyter notebooks"}),(0,r.jsx)(n.td,{children:"schrodinger"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"accessing-datasets-with-singularity",children:"Accessing Datasets with Singularity"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/rts-docs-dev/pr-preview/pr-69/docs/hpc/containers/squash_file_system_and_singularity",children:"Singularity for Datasets"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"licensed-software",children:"Licensed Software"}),"\n",(0,r.jsx)(n.h3,{id:"schrodinger",children:"SCHRODINGER"}),"\n",(0,r.jsx)(n.p,{children:"Schr\xf6dinger provides a complete suite of software solutions with the latest advances in pharmaceutical research and computational chemistry. The NYU New York campus has a limited number of licenses for the Biologics Suite (ConfGen, Epik, Jaguar, Jaguar pKa, MacroModel, Prime, QSite, SiteMap), BioLuminate and the Basic Docking Suite."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Schr\xf6dinger can be used for non-commercial, academic purposes ONLY."})}),"\n",(0,r.jsx)(n.h4,{id:"using-schrodinger-on-hpc-cluster",children:"Using SCHRODINGER on HPC Cluster"}),"\n",(0,r.jsx)(n.p,{children:"To load Schrodinger module execute"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"$ module load schrodinger/2021-1\n"})}),"\n",(0,r.jsx)(n.h4,{id:"using-schrodinger-on-nyu-lab-computers",children:"Using SCHRODINGER on NYU Lab Computers"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Request your account at: ",(0,r.jsx)(n.a,{href:"https://www.schrodinger.com/request-account",children:"https://www.schrodinger.com/request-account"})]}),"\n",(0,r.jsxs)(n.li,{children:["Download the software at: ",(0,r.jsx)(n.a,{href:"https://www.schrodinger.com/downloads/releases",children:"https://www.schrodinger.com/downloads/releases"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"mailto:hpc@nyu.edu",children:"Contact NYU-HPC team"}),"  to request your license file."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"These license servers are accessible from NYU subnet."}),"\n",(0,r.jsx)(n.p,{children:"Please see the following links for installation of the license file:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.schrodinger.com/kb/377238",children:"https://www.schrodinger.com/kb/377238"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.schrodinger.com/license-installation-instructions",children:"https://www.schrodinger.com/license-installation-instructions"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"To check licenses status"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"# module load schrodinger/2021-1 # load schrodinger if not already loaded\n# licadmin STAT \n# licutil -jobs\n\n## For example:\n\n[wang@cs001 ~]$ licutil -jobs\n######## Server /share/apps/schrodinger/schrodinger.lic\nProduct & job type                            Jobs\nBIOLUMINATE                                     10\nBIOLUMINATE, Docking                             1\nBIOLUMINATE, Shared                             10\nCANVAS                                          50\nCOMBIGLIDE, Grid Generation                     11\nCOMBIGLIDE, Library Generation                  50\nCOMBIGLIDE, Protein Prep                        11\nCOMBIGLIDE, Reagent Prep                         1\nEPIK                                            11\nGLIDE, Grid Generation                          11\nGLIDE, Protein Prep                             11\nGLIDE, SP Docking                                1\nGLIDE, XP Descriptors                            1\nGLIDE, XP Docking                                1\nIMPACT                                          11\nJAGUAR                                           5\nJAGUAR, PKA                                      5\nKNIME                                           50\nLIGPREP, Desalter                                1\nLIGPREP, Ionizer                              3511\nLIGPREP, Ligparse                                1\nLIGPREP, Neutralizer                             1\nLIGPREP, Premin Bmin                             1\nLIGPREP, Ring Conf                               1\nLIGPREP, Stereoizer                              1\nLIGPREP, Tautomerizer                            1\nMACROMODEL                                       5\nMACROMODEL, Autoref                              5\nMACROMODEL, Confgen                              5\nMACROMODEL, Csearch Mbae                         5\nMAESTRO, Unix                                 1000\nMMLIBS                                        3511\nPHASE, CL Phasedb Confsites                      1\nPHASE, CL Phasedb Convert                        1\nPHASE, CL Phasedb Manage                         1\nPHASE, DPM Ligprep Clean Structures              1\nPHASE, DPM Ligprep Generate Conformers           5\nPHASE, MD Create sites                           1\nPRIME, CM Build Membrane                         2\nPRIME, CM Build Structure                        2\nPRIME, CM Edit Alignment                         2\nPRIME, CM Struct Align                          18\nPRIME, Threading Search                          2\nQSITE                                            5\nSITEMAP                                         10\n"})}),"\n",(0,r.jsx)(n.h4,{id:"schrodinger-example-files",children:"Schrodinger Example Files"}),"\n",(0,r.jsx)(n.p,{children:"Example SBATCH jobs and outputs are available to review here:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"/scratch/work/public/examples/schrodinger/\n"})}),"\n",(0,r.jsx)(n.h3,{id:"comsol",children:"COMSOL"}),"\n",(0,r.jsx)(n.p,{children:"COMSOL is a problem-solving simulation environment, enforcing compatibility guarantees consistent multiphysics models. COMSOL Multiphysics is a general-purpose software platform, based on advanced numerical methods, for modeling and simulating physics-based problems. The package is cross-platform (Windows, Mac, Linux). The COMSOL Desktop helps you organize your simulation by presenting a clear overview of your model at any point. It uses functional form, structure, and aesthetics as the means to achieve simplicity for modeling complex realities."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["This license is for academic use only with Floating Network Licensing in nature i.e., authorized users are allowed to use the software on desktops. Please contact ",(0,r.jsx)(n.a,{href:"mailto:hpc.nyu.edu",children:"hpc@nyu.edu"})," for the license. However, COMSOL is also available on NYU HPC cluster Greene."]})}),"\n",(0,r.jsxs)(n.p,{children:["In order to check what Comsol licenses are available on Greene use ",(0,r.jsx)(n.code,{children:"comsol_licenses"})," command in your terminal session."]}),"\n",(0,r.jsx)(n.p,{children:"Several versions of COMSOL are available on the HPC cluster. To use COMSOL on the Greene HPC cluster, please\nload the relevant module in your batch job submission script:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"module load comsol/5.6.0.280\n"})}),"\n",(0,r.jsx)(n.p,{children:"To submit a COMSOL job in a parallel fashion, running on multiple processing cores, follow the steps below:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:'Create a directory on "scratch" as given below.'}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"mkdir /scratch/<net_id>/example\ncd /scratch/<net_id>/example\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Copy example files to your newly created directory"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"cp /scratch/work/public/examples/comsol/run-comsol.sbatch /scratch/<net_id>/example/\ncp /scratch/work/public/examples/comsol/test-input.mph /scratch/<net_id>/example/\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Edit the slurm batch script file (run-comsol.sbatch) to match your case (for example chance location of the run directory)."}),"\n",(0,r.jsx)(n.li,{children:"Once the slurm batch script file is ready, it can be submitted to the job scheduler using sbatch. After successful completion of job, verify output log file for detail output information."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"sbatch run-comsol.sbatch\n"})}),"\n",(0,r.jsx)(n.h3,{id:"mathematica",children:"MATHEMATICA"}),"\n",(0,r.jsx)(n.p,{children:"Mathematica is a general computing environment with organizing algorithmic, visualization, and user interface capabilities. The many mathematical algorithms included in Mathematica make computation easy and fast."}),"\n",(0,r.jsx)(n.p,{children:"To run Mathematica on the Greene HPC cluster, please load the relevant module in your batch job submission script:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"module load mathematica/12.1.1\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"In the example below the module is loaded already in the sbatch script."})}),"\n",(0,r.jsx)(n.p,{children:"To submit a batch Mathematica job for running in a parallel mode on multiple processing cores, follow below steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:'Create a directory on "scratch" as given below.'}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"mkdir /scratch/<net_id>/example\ncd /scratch/<net_id>/example\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Copy example files to your newly created directory."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"cp /scratch/work/public/examples/mathematica/basic/example.m /scratch/<net_id>/example/\ncp /scratch/work/public/examples/mathematica/basic/run-mathematica.sbatch /scratch/<net_id>/example\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Edit the slurm batch script file (run-mathematica.sbatch) to match your case (for example chance location of the run directory)."}),"\n",(0,r.jsx)(n.li,{children:"Once the sbatch script file is ready, it can be submitted to the job scheduler using sbatch. After successful completion of job, verify output log file generated."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"sbatch run-mathematica.sbatch\n"})}),"\n",(0,r.jsx)(n.h3,{id:"sas",children:"SAS"}),"\n",(0,r.jsx)(n.p,{children:"SAS is a software package which enables programmers to perform many tasks, including:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Information retrieval"}),"\n",(0,r.jsx)(n.li,{children:"Data management"}),"\n",(0,r.jsx)(n.li,{children:"Report writing & graphics"}),"\n",(0,r.jsx)(n.li,{children:"Statistical analysis and data mining"}),"\n",(0,r.jsx)(n.li,{children:"Business planning"}),"\n",(0,r.jsx)(n.li,{children:"Forecasting and decision support"}),"\n",(0,r.jsx)(n.li,{children:"Operations research and project management"}),"\n",(0,r.jsx)(n.li,{children:"Quality improvement"}),"\n",(0,r.jsx)(n.li,{children:"Applications development"}),"\n",(0,r.jsx)(n.li,{children:"Data warehousing (extract, transform, load)"}),"\n",(0,r.jsx)(n.li,{children:"Platform independent and remote computing."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"There are licenses for 2 CPUs on the HPC Cluster."}),"\n",(0,r.jsx)(n.h4,{id:"running-a-parallel-sas-job-on-hpc-cluster-greene",children:"Running a parallel SAS job on HPC cluster (Greene):"}),"\n",(0,r.jsx)(n.p,{children:"To submit a SAS job for running on multiple processing elements, follow below steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:'Create a directory on "scratch":'}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"mkdir /scratch/<net_id>/example\ncd /scratch/<net_id>/example\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Copy example files to your newly created directory."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"cp /scratch/work/public/examples/sas/test.sas  /scratch/<net_id>/example/\ncp /scratch/work/public/examples/sas/test2.sas  /scratch/<net_id>/example/\ncp /scratch/work/public/examples/sas/run-sas.sbatch  /scratch/<net_id>/example/\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Submit as shown below. After successful completion of job, verify output log file generated."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"sbatch run-sas.sbatch\n"})}),"\n",(0,r.jsx)(n.h3,{id:"matlab",children:"MATLAB"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://www.mathworks.com/products/matlab.html",children:"MATLAB"})," is a technical computing environment for high performance numeric computation and visualization. MATLAB integrates numerical analysis, matrix computation, signal processing, and graphics in an easy to use environment without using traditional programming."]}),"\n",(0,r.jsx)(n.h4,{id:"matlab-on-personal-computers-and-laptops",children:"MATLAB on personal computers and laptops"}),"\n",(0,r.jsx)(n.p,{children:"NYU has a Total Academic Headcount (TAH) license which provides campus-wide access to MATLAB, Simulink, and a variety of add-on products. All faculty, researchers, and students (on any NYU campus) can use MATLAB on their personal computers and laptops and may go to the following site to download the NYU site license software free of charge."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://www.mathworks.com/academia/tah-portal/new-york-university-618777.html",children:"https://www.mathworks.com/academia/tah-portal/new-york-university-618777.html"})}),"\n",(0,r.jsx)(n.p,{children:"MATLAB can be used for non-commercial, academic purposes."}),"\n",(0,r.jsx)(n.p,{children:"There are several versions of Matlab available on the cluster and the relevant version can be loaded."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"module load matlab/2020b\nmodule load matlab/2021a\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In order to run MATLAB interactively on the cluster, ",(0,r.jsx)(n.a,{href:"/rts-docs-dev/pr-preview/pr-69/docs/hpc/submitting_jobs/slurm_submitting_jobs",children:"start an interactive slurm job"}),", load the matlab module and launch an interactive matlab session in the terminal."]}),"\n",(0,r.jsxs)(n.p,{children:["Mathworks has provided a ",(0,r.jsx)(n.a,{href:"https://drive.google.com/file/d/1lNNzf4lsFuH9a4bbsO18roCGhT3DwUq2/view",children:"Greene Matlab User Guide"})," that presents useful tips and practices for using Matlab on the cluster."]}),"\n",(0,r.jsx)(n.h3,{id:"stata",children:"STATA"}),"\n",(0,r.jsx)(n.p,{children:"Stata is a command and menu-driven software package for statistical analysis. It is available for Windows, Mac, and Linux operating systems. Most of its users work in research. Stata's capabilities include data management, statistical analysis, graphics, simulations, regression and custom programming."}),"\n",(0,r.jsx)(n.h4,{id:"running-a-parallel-stata-job-on-hpc-cluster-greene",children:"Running a parallel STATA job on HPC cluster (Greene):"}),"\n",(0,r.jsx)(n.p,{children:"To submit a STATA job for running on multiple processing elements, follow below steps."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:'Create a directory on "scratch":'}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"mkdir /scratch/<net_id>/example\ncd /scratch/<net_id>/example\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Copy example files to your newly created directory."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"cp /scratch/work/public/examples/stata/run-stata.sbatch  /scratch/<net_id>/example/\ncp /scratch/work/public/examples/stata/stata-test.do  /scratch/<net_id>/example/\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Submit using sbatch. After successful completion of job, verify output log file generated."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"sbatch run-stata.sbatch\n"})}),"\n",(0,r.jsx)(n.h3,{id:"gaussian",children:"GAUSSIAN"}),"\n",(0,r.jsx)(n.p,{children:"Gaussian uses basic quantum mechanic electronic structure programs. This software is capable of handling proteins and large molecules using semi-empirical, ab initio molecular orbital (MO), density functional, and molecular mechanics calculations."}),"\n",(0,r.jsxs)(n.p,{children:["The NYU Gaussian license only covers PIs at the Washington Square Park campus. We will grant access to you after verifying your WSP affiliation. For access, please email ",(0,r.jsx)(n.a,{href:"mailto:hpc.nyu.edu",children:"hpc@nyu.edu"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"running-a-parallel-gaussian-job-on-hpc-cluster-greene",children:"Running a parallel Gaussian job on HPC cluster (Greene):"}),"\n",(0,r.jsx)(n.p,{children:"To submit a Gaussian job for running on multiple processing elements, follow below steps."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:'Create a directory on "scratch":'}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"mkdir /scratch/<net_id>/example\ncd /scratch/<net_id>/example   #Copy example files to your newly created directory.\ncp /scratch/work/public/examples/gaussian/basic/test435.com  /scratch/<net_id>/example/\ncp /scratch/work/public/examples/gaussian/basic/run-gaussian.sbatch  /scratch/<net_id>/example/\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Once the sbatch script file is ready, it can be submitted to the job scheduler using sbatch. After successful completion of job, verify output log file generated."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"sbatch run-gaussian.sbatch\n"})}),"\n",(0,r.jsx)(n.h3,{id:"knitro",children:"Knitro"}),"\n",(0,r.jsx)(n.p,{children:"Knitro is a commercial software package for solving large scale mathematical optimization problems. Knitro is specialized for nonlinear optimization, but also solves linear programming problems, quadratic programming problems, systems of nonlinear equations, and problems with equilibrium constraints. The unknowns in these problems must be continuous variables in continuous functions; however, functions can be convex or nonconvex. Knitro computes a numerical solution to the problem\u2014it does not find a symbolic mathematical solution. Knitro versions 9.0.1 and 10.1.1 are available."}),"\n",(0,r.jsx)(n.h4,{id:"running-a-parallel-knitro-job-on-hpc-cluster-greene",children:"Running a parallel Knitro job on HPC cluster (Greene):"}),"\n",(0,r.jsx)(n.p,{children:"To submit a Knitro job for running on multiple processing elements, follow below steps."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:'Create a directory on "scratch":'}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"mkdir /scratch/<net_id>/example\ncd /scratch/<net_id>/example\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Copy example files to your newly created directory."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"cp /scratch/work/public/examples/knitro/knitro.py /scratch/<net_id>/example/\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"There is no sample sbatch script available for knitro."}),"\n",(0,r.jsx)(n.li,{children:"After creating your own sbatch script you can execute it as follows:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"sbatch <script>.sbatch\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3881:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>t});var a=s(8101);const r={},i=a.createContext(r);function l(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);