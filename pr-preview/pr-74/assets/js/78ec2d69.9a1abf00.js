"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1159],{6107:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>l,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"hpc/tutorials/linux_tutorial","title":"Linux Tutorial","description":"Login to the Greene cluster as described in the section on connecting to the HPC cluster.","source":"@site/docs/hpc/10_tutorials/01_linux_tutorial.mdx","sourceDirName":"hpc/10_tutorials","slug":"/hpc/tutorials/linux_tutorial","permalink":"/rts-docs-dev/pr-preview/pr-74/docs/hpc/tutorials/linux_tutorial","draft":false,"unlisted":false,"editUrl":"https://github.com/NYU-ITS/rts-docs-dev/blob/main/docs/hpc/10_tutorials/01_linux_tutorial.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"hpcSidebar","previous":{"title":"Open OnDemand (OOD) with Conda/Singularity","permalink":"/rts-docs-dev/pr-preview/pr-74/docs/hpc/ood/open_on_demand"},"next":{"title":"HPC Foundations","permalink":"/rts-docs-dev/pr-preview/pr-74/docs/hpc/tutorials/hpc_foundations"}}');var s=i(5105),r=i(3881);const l={},d="Linux Tutorial",c={},o=[{value:"Available file systems on Greene",id:"available-file-systems-on-greene",level:2},{value:"Basic Linux Commands",id:"basic-linux-commands",level:2},{value:"Navigating the directory structure",id:"navigating-the-directory-structure",level:3},{value:"Copying, moving or deleting files locally",id:"copying-moving-or-deleting-files-locally",level:2},{value:"Text Editor",id:"text-editor",level:2},{value:"Writing Scripts",id:"writing-scripts",level:2},{value:"Setting execute permission with chmod",id:"setting-execute-permission-with-chmod",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"linux-tutorial",children:"Linux Tutorial"})}),"\n",(0,s.jsx)(t.admonition,{title:"Prerequisites",type:"tip",children:(0,s.jsxs)(t.p,{children:["Login to the Greene cluster as described in the section on ",(0,s.jsx)(t.a,{href:"/rts-docs-dev/pr-preview/pr-74/docs/hpc/connecting_to_hpc/connecting_to_hpc",children:"connecting to the HPC cluster"}),"."]})}),"\n",(0,s.jsx)(t.h2,{id:"available-file-systems-on-greene",children:"Available file systems on Greene"}),"\n",(0,s.jsx)(t.p,{children:"Files Systems for usage:"}),"\n",(0,s.jsx)(t.p,{children:"The NYU HPC clusters have multiple file systems for user's file storage needs. Each file system is configured differently to serve a different purpose."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Space"})}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Environment Variable"})}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Purpose"})}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Flushed?"})}),(0,s.jsxs)(t.th,{style:{textAlign:"left"},children:[(0,s.jsx)(t.strong,{children:"Allocation"})," (per user)"]})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"/home"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"$HOME"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Program Development space; For storing small files, source code, scripts etc that are backed up"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"NO"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"20GB"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"/scratch"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"$SCRATCH"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Computational Workspace; For storing large files/data, infrequent reads and writes"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"YES Files not accessed for 60 days are deleted"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"5TB"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"/archive"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"$ARCHIVE"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Long Term Storage ( Cold storage )"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"NO"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"2TB"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"basic-linux-commands",children:"Basic Linux Commands"}),"\n",(0,s.jsx)(t.h3,{id:"navigating-the-directory-structure",children:"Navigating the directory structure"}),"\n",(0,s.jsx)(t.p,{children:"We've already seen ssh, which takes us from the host we are on to a different host, and hostname, which tells us which host we are on now. Mostly you'll move around filesystems and directories, which resemble inverted tree structures as shown below schematically:"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"ls"})," - To ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.em,{children:"list"})})," files in the current directory"]}),"\n",(0,s.jsxs)(t.p,{children:["If this is your first time using the HPC Cluster, ",(0,s.jsx)(t.code,{children:"ls"})," probably won't return anything, because you have no files to list."]}),"\n",(0,s.jsx)(t.p,{children:"There are a couple of useful options for ls:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"ls -l"})," lists the directory contents in long format, one file or directory per line, with extra information about who own the file, how big it is, and what permissions are set."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"ls -a"})," lists hidden files. In Unix, files whose names begin with dot (",(0,s.jsx)(t.code,{children:"."}),") are hidden. This does not stop anything from using those files, it simply instructs ",(0,s.jsx)(t.code,{children:"ls"})," not to show the files unless the ",(0,s.jsx)(t.code,{children:"-a"})," option is used."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"A command typed at the Unix command prompt, looks something like this:"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"pwd"}),' - print working directory, or "',(0,s.jsx)(t.strong,{children:"where am i now ?"}),'" in the directory space.']}),"\n",(0,s.jsxs)(t.p,{children:['In Unix, filesystems and directories are arranged in a hierarchy. **A forward slash "',(0,s.jsx)(t.code,{children:"/"}),'" is the directory separator, and the topmost directory visible to a host is called "',(0,s.jsx)(t.code,{children:"/"}),'". Filesystems are also mounted into this directory structure, so you can access everything that is visible on this host by moving around in the directory hierarchy.']}),"\n",(0,s.jsxs)(t.p,{children:["You should see something like ",(0,s.jsx)(t.code,{children:"/home/NetID"})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.code,{children:"cd"})})})," - To change to a different directory,"]}),"\n",(0,s.jsxs)(t.p,{children:['use "cd" ("change directory"). You\'ll need to give it the path to the directory you wish to change into, eg "cd /scratch/NetID". You can go up one directory with "',(0,s.jsx)(t.code,{children:"cd .."}),'".']}),"\n",(0,s.jsxs)(t.p,{children:['If you run "',(0,s.jsx)(t.code,{children:"cd"}),'" with no arguments, you will be returned to your home directory and if you run "',(0,s.jsx)(t.code,{children:"cd -"}),'", you will be returned to the directory you were in most recently.']}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.code,{children:"mkdir"})})}),' - To create a new location, use "',(0,s.jsx)(t.code,{children:"mkdir new_directory_name"}),'".']}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.code,{children:"rmdir"})})}),' - To remove a directory, use "',(0,s.jsx)(t.code,{children:"rmdir new_directory_name"}),'".']}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.code,{children:"man"})})}),' - Manual page. This command provides more information about a command eg., "',(0,s.jsx)(t.code,{children:"man ls"}),'"']}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.code,{children:"cat"})})}),' - Prints the content of the file eg., "',(0,s.jsx)(t.code,{children:"cat filename"}),'"']}),"\n",(0,s.jsx)(t.h2,{id:"copying-moving-or-deleting-files-locally",children:"Copying, moving or deleting files locally"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Copying:"}),' The "',(0,s.jsx)(t.code,{children:"cp"}),'" command makes a duplicate copy of files and directories within a cluster or machine. The general usage is "',(0,s.jsx)(t.code,{children:"cp source destination"}),'":']}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"command"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Explanation"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["cp ",(0,s.jsx)(t.code,{children:"test_file.txt"})," ",(0,s.jsx)(t.code,{children:"test_file2.txt"})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Makes a duplicate copy of test_file.txt with a new name test_file2.txt"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"cp -r subdir subdir2"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:['That is, a new directory "subdir2" is created and each file under subdir is copied ',(0,s.jsx)(t.code,{children:"recursively"})," to the new subdir2"]})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Moving:"}),' The "',(0,s.jsx)(t.code,{children:"mv"}),'" command renames files and directories within a cluster or machine. The general usage is "',(0,s.jsx)(t.code,{children:"mv source_dir destination_dir"}),'"']}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"command"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Explanation"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"mv dummy_file.txt test_file.txt"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Renames dummy_file.txt as test_file.txt"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"mv subdir new_subdir"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:'Renames the directory "subdir" to a new directory "new_subdir"'})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Deleting files:"}),' The "',(0,s.jsx)(t.code,{children:"rm"}),'" ( remove ) command deletes files and optionally directories within a cluster or machine.']}),"\n",(0,s.jsxs)(t.admonition,{type:"danger",children:[(0,s.jsx)(t.mdxAdmonitionTitle,{}),(0,s.jsx)(t.p,{children:"There is no undelete in Unix. Once it is removed, it's gone !"})]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"command"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Explanation"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"rm dummy_file.txt"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Remove a file"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"rm -i dummy_file.txt"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"If you use -i you will be prompted for confirmation before each file is deleted"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"rm -f serious_file.txt"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Forcibly remove a file"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"rmdir subdir/"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Remove subdir only if it's empty"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"rm -r subdir/"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Recursively delete the directory subdir and everything else in it. ",(0,s.jsx)(t.code,{children:"Use it with care !"})]})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"text-editor",children:"Text Editor"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"nano"})," is a friendly text editor that can be used to edit the content of an existing file or create a new file. Here are some options used in nano editor."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Options"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Explanation"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Ctrl + O"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Save Changes"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Ctrl + X"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Exit nano"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Ctrl + K"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Cut single line"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Ctrl + U"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Paste the text"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"writing-scripts",children:"Writing Scripts"}),"\n",(0,s.jsx)(t.p,{children:"An entire sequence of commands can be captured in a script for repeated or later execution. This is the mechanism by which batch jobs are run on the HPC clusters. The essential elements of a script are illustrated in the example below:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"#!/bin/bash\n# the first line should begin with #! and the path to the interpreter under which the script should run\n \n# do stuff as if it were an interactive session:\ncd $HOME/some_place\ndate\nls -l\npwd\n \n# scripts can use loops and conditionals. See 'man bash' for syntax\nfor f in `ls`; do\n  echo \"found a file called $f\"\ndone\n"})}),"\n",(0,s.jsx)(t.p,{children:"There are two ways to run scripts:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Give the script execute permission. and run it as a command:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"chmod u+x my_script\n./my_script\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsx)(t.li,{children:"Run a shell, and pass the script as an argument"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"bash my_script\n"})}),"\n",(0,s.jsxs)(t.p,{children:['Notice in the first example that to run the script, we prefixed it with "',(0,s.jsx)(t.code,{children:"./"}),"\". If the script is not somewhere in the shell's ",(0,s.jsx)(t.code,{children:"$PATH"}),", it won't find it to run unless it's location is explicitly specified. This is even true when the script is in the normally in the ",(0,s.jsx)(t.code,{children:"$PATH"}),". Therefore, we specify that the script is in the current directory with ",(0,s.jsx)(t.code,{children:"./"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"setting-execute-permission-with-chmod",children:"Setting execute permission with chmod"}),"\n",(0,s.jsx)(t.p,{children:"In Unix, a file has three basic permissions, each of which can be set for three levels of user. The permissions are:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:'Read permission (" r ") - numeric value 4'}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:'Write permission (" w ") - numeric value 2'}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:'Execute permission (" x ") - numeric value 1.'}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"When applied to a directory, execute permission refers to whether the directory can be entered with 'cd'"})}),"\n",(0,s.jsx)(t.p,{children:"The three levels of user are:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:'The user who owns the file ( the "user", referred to with "u")'}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:'The group to which the file belongs - referred to with "g". Each user has a primary group and is optionally a member of other groups, when a user creates a file it is normally associated with the user\'s primary group. At NYU HPC all users are in a group named " users ", so group permissions has little meaning'}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:'All other users are referred to with " o "'}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:['You grant permissions with "',(0,s.jsx)(t.code,{children:"chmod who+what file"}),'" and revoke them with "',(0,s.jsx)(t.code,{children:"chmod who-what file"}),'".']}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:'The first has "+" and the second "-"'})}),"\n",(0,s.jsx)(t.p,{children:'Here "who" some combination of "u", "g" and "o" and what is some combination of "r", "w" and "x". So to set execute permission, as in the example above, we use:'}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"chmod u+x my_script\n"})})]})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},3881:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>d});var n=i(8101);const s={},r=n.createContext(s);function l(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);