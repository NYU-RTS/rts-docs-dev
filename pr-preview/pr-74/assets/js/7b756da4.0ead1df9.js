"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5201],{5480:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>t,metadata:()=>d,toc:()=>o});const d=JSON.parse('{"id":"hpc/submitting_jobs/slurm_main_commands","title":"Slurm: Main Commands","description":"Slurm offers many utility commands to work with, some of the most popularly used commands are:","source":"@site/docs/hpc/05_submitting_jobs/03_slurm_main_commands.md","sourceDirName":"hpc/05_submitting_jobs","slug":"/hpc/submitting_jobs/slurm_main_commands","permalink":"/rts-docs-dev/pr-preview/pr-74/docs/hpc/submitting_jobs/slurm_main_commands","draft":false,"unlisted":false,"editUrl":"https://github.com/NYU-ITS/rts-docs-dev/blob/main/docs/hpc/05_submitting_jobs/03_slurm_main_commands.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"hpcSidebar","previous":{"title":"Slurm Tutorial","permalink":"/rts-docs-dev/pr-preview/pr-74/docs/hpc/submitting_jobs/slurm_tutorial"},"next":{"title":"Tools and Software","permalink":"/rts-docs-dev/pr-preview/pr-74/docs/hpc/tools_and_software/intro"}}');var n=r(5105),i=r(3881);const t={},c="Slurm: Main Commands",l={},o=[{value:"srun",id:"srun",level:2},{value:"sbatch",id:"sbatch",level:2},{value:"salloc",id:"salloc",level:2},{value:"sinfo",id:"sinfo",level:2},{value:"squeue",id:"squeue",level:2},{value:"sacct",id:"sacct",level:2},{value:"scancel",id:"scancel",level:2}];function h(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"slurm-main-commands",children:"Slurm: Main Commands"})}),"\n",(0,n.jsx)(s.p,{children:"Slurm offers many utility commands to work with, some of the most popularly used commands are:"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Command"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"#srun",children:"srun"})}),(0,n.jsx)(s.td,{children:"Run parallel jobs"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"#sbatch",children:"sbatch"})}),(0,n.jsx)(s.td,{children:"Submit a batch script to Slurm"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"#salloc",children:"salloc"})}),(0,n.jsx)(s.td,{children:"Obtain a Slurm job allocation ( for interactive workflows )"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"#sinfo",children:"sinfo"})}),(0,n.jsx)(s.td,{children:"View information about Slurm nodes and partitions"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"#squeue",children:"squeue"})}),(0,n.jsx)(s.td,{children:"View information about the jobs located in the slurm scheduling queue"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"#sacct",children:"sacct"})}),(0,n.jsx)(s.td,{children:"Displays accounting data for all jobs in and job steps in the slurm job accounting log or slurm database"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"#scancel",children:"scancel"})}),(0,n.jsx)(s.td,{children:"Used to signal jobs or job steps that are under the control of slurm"})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"srun",children:"srun"}),"\n",(0,n.jsx)(s.p,{children:"Run a parallel job on cluster managed by Slurm, can be used:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Individual job submission where resources are allocated."}),"\n",(0,n.jsxs)(s.li,{children:["In ",(0,n.jsx)(s.code,{children:"sbatch"})," batch scripts as ",(0,n.jsx)(s.code,{children:"job steps"})," making use of the allocated resource pool."]}),"\n",(0,n.jsxs)(s.li,{children:["within ",(0,n.jsx)(s.code,{children:"salloc"})," instance making use of the resource pool."]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sh",children:"man srun # for more information\n"})}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Option"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--help"})}),(0,n.jsx)(s.td,{children:"Display help information and exit"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--account"})}),(0,n.jsx)(s.td,{children:"Charge resource used by this job to a specified account"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"--ntasks"})," or ",(0,n.jsx)(s.code,{children:"--nodes"})]}),(0,n.jsx)(s.td,{children:"Request the number of tasks for the job Or Request the number of nodes to be allocated for this job"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--ntasks-per-node"})}),(0,n.jsxs)(s.td,{children:["Request that ",(0,n.jsx)(s.code,{children:"ntasks"})," be invoked on each node. Meant to be used with ",(0,n.jsx)(s.code,{children:"--nodes"})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--cpus-per-task"})}),(0,n.jsx)(s.td,{children:"Request  that  ncpus be allocated per process. This may be useful if the job is multithreaded  and requires  more than one CPU per task for optimal performance."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"--mem"})," or ",(0,n.jsx)(s.code,{children:"--mem-per-cpu"})]}),(0,n.jsxs)(s.td,{children:["Specify the real memory required ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.em,{children:"per node"})}),".  Default units are megabytes.  Different units can be specified using the suffix ",(0,n.jsx)(s.strong,{children:"[ K | M | G | T ]"})," Or Minimum memory required per allocated CPU"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--output"})}),(0,n.jsxs)(s.td,{children:["Redirect ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.em,{children:"stdout"})})," to a file"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--error"})}),(0,n.jsxs)(s.td,{children:["Redirect ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.em,{children:"stderr"})})," to a file"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--label"})}),(0,n.jsx)(s.td,{children:"Prepend task numbers to lines of stdout/err"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--partition"})}),(0,n.jsx)(s.td,{children:"Request a specific partition for the resource allocation. If not specified, the default behavior is to allow the slurm controller to select the default partition as designated by the  system  administrator."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--pty"})}),(0,n.jsxs)(s.td,{children:["Execute  task zero with pseudo terminal mode or using pseudo terminal specified by ",(0,n.jsx)(s.code,{children:"<File Descriptor>"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--gres"})}),(0,n.jsxs)(s.td,{children:["Specifies a comma-delimited list of generic consumable resources, examples: ",(0,n.jsx)(s.code,{children:"--gres=gpu:1"}),", ",(0,n.jsx)(s.code,{children:"--gres=gpu:v100:2"}),", ",(0,n.jsx)(s.code,{children:"--gres=help"})," or ",(0,n.jsx)(s.code,{children:"--gres=none"})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--chdir"})}),(0,n.jsxs)(s.td,{children:["Set the working directory of ",(0,n.jsx)(s.code,{children:"srun"})," before it is executed"]})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"sbatch",children:"sbatch"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sh",children:"man sbatch # for more information\n"})}),"\n",(0,n.jsx)(s.p,{children:"Some of the popularly used directives are:"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Option"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"#SBATCH --account"})}),(0,n.jsx)(s.td,{children:"Charge resource used by this jab to a specified account"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"#SBATCH --nodes"})," or ",(0,n.jsx)(s.code,{children:"#SBATCH --ntasks"})]}),(0,n.jsx)(s.td,{children:"Request allocation of minimum or maximum nodes for this job"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"#SBATCH --ntasks-per-node"})}),(0,n.jsxs)(s.td,{children:["Request that ntasks be invoked on each node, used with ",(0,n.jsx)(s.code,{children:"--nodes"})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"#SBATCH --cpus-per-task"})}),(0,n.jsx)(s.td,{children:"Advise the Slurm controller that ensuing job  steps will  require  ncpus number of processors per task. Without this option, the controller will just try to allocate one processor per task"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"#SBATCH --mem"})}),(0,n.jsxs)(s.td,{children:["Specify the real memory required per node. Default units are megabytes.  Different units can be specified  using the suffix ",(0,n.jsx)(s.strong,{children:"[ K | M | G | T ]"})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"#SBATCH --gres"})}),(0,n.jsx)(s.td,{children:"Specifies a comma-delimited list of generic consumable resources."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"#SBATCH --output"})}),(0,n.jsx)(s.td,{children:"Instruct  Slurm to connect the batch script's standard output directly to a specified filename"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"#SBATCH --error"})}),(0,n.jsx)(s.td,{children:"Instruct  Slurm to connect the batch script's standard error directly to a specified filename"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"#SBATCH --mail-user"})}),(0,n.jsxs)(s.td,{children:["User to receive email notifications of state changes as defined by ",(0,n.jsx)(s.code,{children:"--mail-type"})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"#SBATCH --mail-type"})}),(0,n.jsxs)(s.td,{children:["Notify user by email when certain event types occur. Valid type values are ",(0,n.jsx)(s.code,{children:"NONE"}),", ",(0,n.jsx)(s.code,{children:"BEGIN"}),", ",(0,n.jsx)(s.code,{children:"END"}),", ",(0,n.jsx)(s.code,{children:"FAIL"}),", ",(0,n.jsx)(s.code,{children:"REQUEUE"}),", ",(0,n.jsx)(s.code,{children:"ALL"})," etc. Multiple type values may be specified in a comma separated list.  The user to be notified is indicated  with  --mail-user."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"#SBATCH --job-name"})}),(0,n.jsx)(s.td,{children:"Specify a name for the job allocation, the default is the name of the batch script or just sbatch"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"#SBATCH --constraint"})}),(0,n.jsxs)(s.td,{children:["Enable constraints such as ",(0,n.jsx)(s.code,{children:'--constraint="nvidia"'})," to select any kind of nvidia GPUs or ",(0,n.jsx)(s.code,{children:'--constraint="amd"'})," to select any kind of amd GPUs or ",(0,n.jsx)(s.code,{children:'--constraint="a100|h100"'})," to select either any one of two GPUs"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"#SBATCH --chdir"})}),(0,n.jsxs)(s.td,{children:["Set the working directory of ",(0,n.jsx)(s.code,{children:"sbatch script"})," before it is executed"]})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"salloc",children:"salloc"}),"\n",(0,n.jsxs)(s.p,{children:["The options for ",(0,n.jsx)(s.code,{children:"salloc"})," are similar to the ones used by ",(0,n.jsx)(s.code,{children:"srun"})," or ",(0,n.jsx)(s.code,{children:"sbatch"}),", consult the salloc manual pages for more information on additional options and their environment variables:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sh",children:"man salloc # for detailed information\n"})}),"\n",(0,n.jsx)(s.h2,{id:"sinfo",children:"sinfo"}),"\n",(0,n.jsx)(s.p,{children:"View information about slurm nodes and partitions."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sh",children:"man sinfo # for more information\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sh",children:"sinfo --Format=Partition,GRES,CPUs,Features:26,NodeList\n"})}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Format"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"Available"})}),(0,n.jsx)(s.td,{children:"State/availability of a partition"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"CPUs"})}),(0,n.jsx)(s.td,{children:"Number of CPUs per node"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"CPUsState"})}),(0,n.jsx)(s.td,{children:'Number of CPUs by state in the format "allocated/idle/other/total"'})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"Features"}),":26"]}),(0,n.jsxs)(s.td,{children:["Features available on the node, use ",(0,n.jsx)(s.code,{children:":"})," followed by a number which specifies the max number of characters printed for this column. ",(0,n.jsx)(s.code,{children:"sinfo"})," prints ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.em,{children:"max 20 characters"})})," by default per column"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"Gres"})}),(0,n.jsx)(s.td,{children:"Generic resource associated with the nodes"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"GresUsed"})}),(0,n.jsx)(s.td,{children:"Generic resource currently in use on the nodes"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"MaxCPUsPerNode"})}),(0,n.jsx)(s.td,{children:"The Max number of CPUs per node available to jobs in this partition"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"Memory"})}),(0,n.jsx)(s.td,{children:"Size of memory per node in Megabytes"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"NodeAI"})}),(0,n.jsx)(s.td,{children:'Number of nodes by state in the format "allocated/idle"'})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"Nodes"})}),(0,n.jsx)(s.td,{children:"Number of nodes"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"NodeList"})}),(0,n.jsx)(s.td,{children:"List of node names"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"Partition"})," or ",(0,n.jsx)(s.code,{children:"PartitionName"})]}),(0,n.jsx)(s.td,{children:"Partition name"})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"squeue",children:"squeue"}),"\n",(0,n.jsx)(s.p,{children:"View information about jobs located on slurm scheduling queue."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sh",children:"man squeue # for more information\n"})}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Options"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--me"})}),(0,n.jsx)(s.td,{children:"Prints queued jobs for the current user"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--user"})}),(0,n.jsx)(s.td,{children:"Prints queued jobs under a specific user, or a comma list of users"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--job"})}),(0,n.jsx)(s.td,{children:"Specify a comma seperated list of job IDs to display"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--help"})}),(0,n.jsx)(s.td,{children:"Print a help message describing all options squeue"})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"sacct",children:"sacct"}),"\n",(0,n.jsx)(s.p,{children:"Displays accounting data for all jobs and job steps in the Slurm job accounting log or Slurm database."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sh",children:"man sacct # for more information\n"})}),"\n",(0,n.jsx)(s.p,{children:"Most popularly used format options are:"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Options"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--format"})}),(0,n.jsxs)(s.td,{children:['Comma  separated list of fields. (use "--helpformat" for a list of available fields). ',(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.em,{children:"NOTE:"})})," When using the format option for listing various fields you can put a ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.em,{children:"%NUMBER"})})," afterwards to specify how many characters should be printed. e.g. ",(0,n.jsx)(s.code,{children:"format=name%30"})," will  print  30  characters of field  name  right  justified. A ",(0,n.jsx)(s.code,{children:"%-30"})," will print 30 characters left justified."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--helpformat"})}),(0,n.jsxs)(s.td,{children:["Print a list of fields that can be specified with ",(0,n.jsx)(s.code,{children:"--format"})," option"]})]})]})]}),"\n",(0,n.jsxs)(s.p,{children:["Some popular options for ",(0,n.jsx)(s.code,{children:"--format"})," are:"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Format"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"JobID"})}),(0,n.jsxs)(s.td,{children:["The identification number of the ",(0,n.jsx)(s.code,{children:"job"})," or ",(0,n.jsx)(s.code,{children:"job step"})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"JobName"})}),(0,n.jsx)(s.td,{children:"The name of the job or job step"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"State"})}),(0,n.jsxs)(s.td,{children:["Displays the job status or state, such as ",(0,n.jsx)(s.code,{children:"COMPLETED"}),", ",(0,n.jsx)(s.code,{children:"TIMEOUT"}),", ",(0,n.jsx)(s.code,{children:"FAILED"})," etc"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"AllocCPUS"})}),(0,n.jsx)(s.td,{children:"Number of CPUs allocated to the job"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"Elapsed"})}),(0,n.jsx)(s.td,{children:"Elapsed time for the job"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"Start"})}),(0,n.jsx)(s.td,{children:"Initiation time for the job"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"End"})}),(0,n.jsx)(s.td,{children:"Termination time for the job"})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"scancel",children:"scancel"}),"\n",(0,n.jsxs)(s.p,{children:["Used to signal jobs or job steps that are under the control of slurm. A signal in the sense, send a ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.em,{children:"termination signal"})})," to cancel a job."]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Options"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--interactive"})}),(0,n.jsxs)(s.td,{children:["Interactive mode. Confirm  each  ",(0,n.jsx)(s.code,{children:"job_id.step_id"}),"  before performing the cancel operation"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--jobname"})}),(0,n.jsx)(s.td,{children:"Restrict the scancel operations to a provided job name"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--me"})}),(0,n.jsx)(s.td,{children:"Cancel all your jobs"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"scancel <a_job_id>"})}),(0,n.jsx)(s.td,{children:"Cancel a job and all it's steps"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"scancel <a_job_id>.<step_id_a> <a_job_id>.<step_id_b>"})}),(0,n.jsxs)(s.td,{children:["Only cancel steps ",(0,n.jsx)(s.code,{children:"a"})," and ",(0,n.jsx)(s.code,{children:"b"})," for a given job, but not the rest of the steps"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"scancel <JobID_ArrayID>"})}),(0,n.jsx)(s.td,{children:"Only cancel a array id of an job array"})]})]})]})]})}function a(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},3881:(e,s,r)=>{r.d(s,{R:()=>t,x:()=>c});var d=r(8101);const n={},i=d.createContext(n);function t(e){const s=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),d.createElement(i.Provider,{value:s},e.children)}}}]);