"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7189],{8641:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"navigating_the_cluster/linux_tutorial","title":"Linux Tutorial","description":"- Getting a new Account on the NYU HPC cluster","source":"@site/docs/navigating_the_cluster/linux_tutorial.md","sourceDirName":"navigating_the_cluster","slug":"/navigating_the_cluster/linux_tutorial","permalink":"/rts-docs-dev/pr-preview/pr-20/docs/navigating_the_cluster/linux_tutorial","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/navigating_the_cluster/linux_tutorial.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Navigating the Cluster","permalink":"/rts-docs-dev/pr-preview/pr-20/docs/navigating_the_cluster/"},"next":{"title":"Training and Support","permalink":"/rts-docs-dev/pr-preview/pr-20/docs/training_and_support/"}}');var i=n(6070),r=n(2790);const l={},c="Linux Tutorial",o={},d=[{value:"Getting a new Account on the NYU HPC cluster",id:"getting-a-new-account-on-the-nyu-hpc-cluster",level:2},{value:"Getting Started on HPC Greene Cluster",id:"getting-started-on-hpc-greene-cluster",level:2},{value:"The process to log into the Greene Cluster:",id:"the-process-to-log-into-the-greene-cluster",level:3},{value:"Available file systems on Greene",id:"available-file-systems-on-greene",level:2},{value:"Basic Linux Commands",id:"basic-linux-commands",level:2},{value:"Navigating the directory structure",id:"navigating-the-directory-structure",level:3},{value:"Copying, moving or deleting files locally",id:"copying-moving-or-deleting-files-locally",level:2},{value:"Text Editor (NANO)",id:"text-editor-nano",level:2},{value:"Writing Scripts",id:"writing-scripts",level:2},{value:"Setting execute permission with chmod",id:"setting-execute-permission-with-chmod",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"linux-tutorial",children:"Linux Tutorial"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"#getting-a-new-account-on-the-nyu-hpc-cluster",children:"Getting a new Account on the NYU HPC cluster"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"#getting-started-on-hpc-greene-cluster",children:"Getting Started on HPC Greene Cluster"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"#available-file-systems-on-greene",children:"Available file systems on Greene"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"#basic-linux-commands",children:"Basic Linux Commands"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"#copying-moving-or-deleting-files-locally",children:"Copying, moving or deleting files locally"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"#text-editor-nano",children:"Text Editor (NANO)"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"#writing-scripts",children:"Writing Scripts"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"#setting-execute-permission-with-chmod",children:"Setting execute permission with chmod"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"getting-a-new-account-on-the-nyu-hpc-cluster",children:"Getting a new Account on the NYU HPC cluster"}),"\n",(0,i.jsx)(t.p,{children:"It is expected of everyone to have an NYU HPC Cluster Account. If not follow the steps from [Getting and Renewing an Account page] to apply for a new account."}),"\n",(0,i.jsx)(t.h2,{id:"getting-started-on-hpc-greene-cluster",children:"Getting Started on HPC Greene Cluster"}),"\n",(0,i.jsx)(t.p,{children:"In a Linux cluster, there are hundreds of computing nodes interconnected by high-speed networks. Linux operating system runs on each of the nodes individually. The resources are shared among many users for their technical or scientific computing purposes."}),"\n",(0,i.jsx)(t.h3,{id:"the-process-to-log-into-the-greene-cluster",children:"The process to log into the Greene Cluster:"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"NYU Campus:"})," From within the NYU network, that is from an on-campus location, or after you have establisehd a VPN connection with the NYU network, you can login to the HPC clusters directly."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Off-campus:"})," The host name of Greene is ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.code,{children:"greene.hpc.nyu.edu"})}),". Logging in to Greene is a two-stage process. The HPC clusters (Greene) are not directly visible to the internet (outside the NYU Network). If you are outside NYU's Network (off-campus) you must first login to a bastion host named ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.code,{children:"gw.hpc.nyu.edu"})})," ."]}),"\n",(0,i.jsx)(t.p,{children:"From within the NYU network, that is, from an on-campus location, or after you are in the NYU's network via VPN, you can login to the HPC clusters directly. You do not need to login to the bastion host."}),"\n",(0,i.jsx)(t.p,{children:"To login into the HPC cluster ( Greene ), simply use:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"ssh <NYUNetID>@greene.hpc.nyu.edu\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"To access from Windows Operating System with PuTTY, please follow the steps at [Accessing HPC via windows page]"}),"\n",(0,i.jsx)(t.li,{children:"Or To connect to VPN from Linux/Mac OS, please follow the steps at [Accessing HPC via linux/MacOS page]"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"From an off-campus location or without a VPN (outside NYU-NET), logging in to the HPC clusters is a 2 step process:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Frist login to the bastion host, ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.code,{children:"gw.hpc.nyu.edu"})}),". From a Mac or Linux workstation, this is a simple terminal command. Your password is the same password you use for NYU Home:"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"ssh <NYUNetID>@gw.hpc.nyu.edu\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"Windows users will need to use Putty, see [Accessing HPC via windows page]"})}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsx)(t.li,{children:"Next login to the cluster. For Greene, this is done with:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"ssh <NYUNetID>@greene.hpc.nyu.edu\n"})}),"\n",(0,i.jsx)(t.h2,{id:"available-file-systems-on-greene",children:"Available file systems on Greene"}),"\n",(0,i.jsx)(t.p,{children:"Files Systems for usage:"}),"\n",(0,i.jsx)(t.p,{children:"The NYU HPC clusters have multiple file systems for user's file storage needs. Each file system is configured differently to serve a different purpose."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"Space"})}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"Environment Variabe"})}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"Space Purpose"})}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"Flushed"})}),(0,i.jsxs)(t.th,{style:{textAlign:"left"},children:[(0,i.jsx)(t.strong,{children:"Allocation"})," (per user)"]})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"/home"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"$HOME"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Program Development space; For storing small files, source code, scripts etc that are backed up"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"NO"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"20GB"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"/scratch"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"$SCRATCH"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Computational Workspace; For storing large files/data, infrequent reads and writes"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"YES Files not accessed for 60 days are deleted"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"5TB"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"/archive"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"$ARCHIVE"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Long Term Storage ( Cold storage )"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"NO"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2TB"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"basic-linux-commands",children:"Basic Linux Commands"}),"\n",(0,i.jsx)(t.h3,{id:"navigating-the-directory-structure",children:"Navigating the directory structure"}),"\n",(0,i.jsx)(t.p,{children:"We've already seen ssh, which takes us from the host we are on to a different host, and hostname, which tells us which host we are on now. Mostly you'll move around filesystems and directories, which resemble inverted tree structures as shown below schematically:"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"ls"})," - To ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.em,{children:"list"})})," files in the current directory"]}),"\n",(0,i.jsxs)(t.p,{children:["If this is your first time using the HPC Cluster, ",(0,i.jsx)(t.code,{children:"ls"})," probably won't return anything, because you have no files to list."]}),"\n",(0,i.jsx)(t.p,{children:"There are a couple of useful options for ls:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"ls -l"})," lists the directory contents in long format, one file or directory per line, with extra information about who own the file, how big it is, and what permissions are set."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"ls -a"})," lists hidden files. In Unix, files whose names begin with dot (",(0,i.jsx)(t.code,{children:"."}),") are hidden. This does not stop anything from using those files, it simply instructs ",(0,i.jsx)(t.code,{children:"ls"})," not to show the files unless the ",(0,i.jsx)(t.code,{children:"-a"})," option is used."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"A command typed at the Unix command prompt, looks something like this:"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"pwd"}),' - print working directory, or "',(0,i.jsx)(t.strong,{children:"where am i now ?"}),'" in the directory space.']}),"\n",(0,i.jsxs)(t.p,{children:['In Unix, filesystems and directories are arranged in a hierarchy. **A forward slash "',(0,i.jsx)(t.code,{children:"/"}),'" is the directory separator, and the topmost directory visible to a host is called "',(0,i.jsx)(t.code,{children:"/"}),'". Filesystems are also mounted into this directory structure, so you can access everything that is visible on this host by moving around in the directory hierarchy.']}),"\n",(0,i.jsxs)(t.p,{children:["You should see something like ",(0,i.jsx)(t.code,{children:"/home/NetID"})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.em,{children:(0,i.jsx)(t.code,{children:"cd"})})})," - To change to a different directory,"]}),"\n",(0,i.jsxs)(t.p,{children:['use "cd" ("change directory"). You\'ll need to give it the path to the directory you wish to change into, eg "cd /scratch/NetID". You can go up one directory with "',(0,i.jsx)(t.code,{children:"cd .."}),'".']}),"\n",(0,i.jsxs)(t.p,{children:['If you run "',(0,i.jsx)(t.code,{children:"cd"}),'" with no arguments, you will be returned to your home directory and if you run "',(0,i.jsx)(t.code,{children:"cd -"}),'", you will be returned to the directory you were in most recently.']}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.em,{children:(0,i.jsx)(t.code,{children:"mkdir"})})}),' - To create a new location, use "',(0,i.jsx)(t.code,{children:"mkdir new_directory_name"}),'".']}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.em,{children:(0,i.jsx)(t.code,{children:"rmdir"})})}),' - To remove a directory, use "',(0,i.jsx)(t.code,{children:"rmdir new_directory_name"}),'".']}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.em,{children:(0,i.jsx)(t.code,{children:"man"})})}),' - Manual page. This command provides more information about a command eg., "',(0,i.jsx)(t.code,{children:"man ls"}),'"']}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.em,{children:(0,i.jsx)(t.code,{children:"cat"})})}),' - Prints the content of the file eg., "',(0,i.jsx)(t.code,{children:"cat filename"}),'"']}),"\n",(0,i.jsx)(t.h2,{id:"copying-moving-or-deleting-files-locally",children:"Copying, moving or deleting files locally"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Copying:"}),' The "',(0,i.jsx)(t.code,{children:"cp"}),'" command makes a duplicate copy of files and directories within a cluster or machine. The general usage is "',(0,i.jsx)(t.code,{children:"cp source destination"}),'":']}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"command"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Explanation"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["cp ",(0,i.jsx)(t.code,{children:"test_file.txt"})," ",(0,i.jsx)(t.code,{children:"test_file2.txt"})]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Makes a duplicate copy of test_file.txt with a new name test_file2.txt"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"cp -r subdir subdir2"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:['That is, a new directory "subdir2" is created and each file under subdir is copied ',(0,i.jsx)(t.code,{children:"recursively"})," to the new subdir2"]})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Moving:"}),' The "',(0,i.jsx)(t.code,{children:"mv"}),'" command renames files and directories within a cluster or machine. The general usage is "',(0,i.jsx)(t.code,{children:"mv source_dir destination_dir"}),'"']}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"command"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Explanation"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"mv dummy_file.txt test_file.txt"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Renames dummy_file.txt as test_file.txt"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"mv subdir new_subdir"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:'Renames the directory "subdir" to a new directory "new_subdir"'})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Deleting files:"}),' The "',(0,i.jsx)(t.code,{children:"rm"}),'" ( remove ) command deletes files and optionally directories within a cluster or machine.']}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.em,{children:"WARNING:"})})," There is no undelete in Unix. Once it is removed, it's gone !"]}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"command"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Explanation"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"rm dummy_file.txt"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Remove a file"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"rm -i dummy_file.txt"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"If you use -i you will be prompted for confirmation before each file is deleted"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"rm -f serious_file.txt"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Forcibly remove a file"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"rmdir subdir/"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Remove subdir only if it's empty"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"rm -r subdir/"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Recursively delete the directory subdir and everything else in it. ",(0,i.jsx)(t.code,{children:"Use it with care !"})]})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"text-editor-nano",children:"Text Editor (NANO)"}),"\n",(0,i.jsx)(t.p,{children:'"nano" is a friendly text editor that can be used to edit the content of an existing file or create a new file. Here are some options used in nano editor.'}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Options"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Explanation"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Ctrl + O"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Save Changes"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Ctrl + X"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Exit nano"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Ctrl + K"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Cut single line"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Ctrl + U"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Paste the text"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"writing-scripts",children:"Writing Scripts"}),"\n",(0,i.jsx)(t.p,{children:"An entire sequence of commands can be captured in a script for repeated or later execution. This is the mechanism by which batch jobs are run on the HPC clusters. The essential elements of a script are illustrated in the example below:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"#!/bin/bash\n# the first line should begin with #! and the path to the interpreter under which the script should run\n \n# do stuff as if it were an interactive session:\ncd $HOME/some_place\ndate\nls -l\npwd\n \n# scripts can use loops and conditionals. See 'man bash' for syntax\nfor f in `ls`; do\n  echo \"found a file called $f\"\ndone\n"})}),"\n",(0,i.jsx)(t.p,{children:"There are two ways to run scripts:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Give the script execute permission. and run it as a command:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"chmod u+x my_script\n./my_script\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsx)(t.li,{children:"Run a shell, and pass the script as an argument"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"bash my_script\n"})}),"\n",(0,i.jsxs)(t.p,{children:['Notice in the first example that to run the script, we prefixed it with "',(0,i.jsx)(t.code,{children:"./"}),"\". If the script is not somewhere in the shell's ",(0,i.jsx)(t.code,{children:"$PATH"}),", it won't find it to run unless it's location is explicitly specified. This is even true when the script is in the normally in the ",(0,i.jsx)(t.code,{children:"$PATH"}),". Therefore, we specify that the script is in the current directory with ",(0,i.jsx)(t.code,{children:"./"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"setting-execute-permission-with-chmod",children:"Setting execute permission with chmod"}),"\n",(0,i.jsx)(t.p,{children:"In Unix, a file has three basic permissions, each of which can be set for three levels of user. The permissions are:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:'Read permission (" r ") - numeric value 4'}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:'Write permission (" w ") - numeric value 2'}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:'Execute permission (" x ") - numeric value 1.'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.em,{children:"NOTE:"})})," When applied to a directory, execute permission refers to whether the directory can be entered with 'cd'"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The three levels of user are:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:'The user who owns the file ( the "user", referred to with "u")'}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:'The group to which the file belongs - referred to with "g". Each user has a primary group and is optionally a member of other groups, when a user creates a file it is normally associated with the user\'s primary group. At NYU HPC all users are in a group named " users ", so group permissions has little meaning'}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:'All other users are referred to with " o "'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:['You grant permissions with "',(0,i.jsx)(t.code,{children:"chmod who+what file"}),'" and revoke them with "',(0,i.jsx)(t.code,{children:"chmod who-what file"}),'".']}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.em,{children:"NOTICE:"})}),' The first has "+" and the second "-"']}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:'Here "who" some combination of "u", "g" and "o" and what is some combination of "r", "w" and "x". So to set execute permission, as in the example above, we use:'}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"chmod u+x my_script\n"})})]})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},2790:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>c});var s=n(758);const i={},r=s.createContext(i);function l(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);