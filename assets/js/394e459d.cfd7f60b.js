"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1228],{462:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"accessing_hpc/ssh_tunneling_and_x11_forwarding","title":"SSH Tunneling and X11 Forwarding","description":"[xquartz]//www.xquartz.org/","source":"@site/docs/accessing_hpc/ssh_tunneling_and_x11_forwarding.md","sourceDirName":"accessing_hpc","slug":"/accessing_hpc/ssh_tunneling_and_x11_forwarding","permalink":"/rts-docs-dev/docs/accessing_hpc/ssh_tunneling_and_x11_forwarding","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/accessing_hpc/ssh_tunneling_and_x11_forwarding.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Accessing HPC Instructions","permalink":"/rts-docs-dev/docs/accessing_hpc/accessing_hpc_instructions"},"next":{"title":"Navigating the Cluster","permalink":"/rts-docs-dev/docs/navigating_the_cluster/"}}');var i=t(4848),o=t(8453);const r={sidebar_position:3},a="SSH Tunneling and X11 Forwarding",l={},d=[{value:"Avoiding Man in the Middle Warning",id:"avoiding-man-in-the-middle-warning",level:2},{value:"SSH Tunneling (Mac, Linux)",id:"ssh-tunneling-mac-linux",level:2},{value:"1. Set up a reusable tunnel",id:"1-set-up-a-reusable-tunnel",level:3},{value:"2. Start the tunnel",id:"2-start-the-tunnel",level:3},{value:"3. Log in via the tunnel",id:"3-log-in-via-the-tunnel",level:3},{value:"Tunneling (Windows)",id:"tunneling-windows",level:2},{value:"Step 1: Creating the tunnel",id:"step-1-creating-the-tunnel",level:3},{value:"Step 2: Logging in via your SSH tunnel",id:"step-2-logging-in-via-your-ssh-tunnel",level:3},{value:"X11 Forwarding",id:"x11-forwarding",level:2}];function c(n){const e={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"ssh-tunneling-and-x11-forwarding",children:"SSH Tunneling and X11 Forwarding"})}),"\n",(0,i.jsx)(e.h2,{id:"avoiding-man-in-the-middle-warning",children:"Avoiding Man in the Middle Warning"}),"\n",(0,i.jsx)(e.p,{children:"If you see this warning:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sh",children:"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n\nIT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!\nSomeone could be eavesdropping on you right now (man-in-the-middle attack)!\nIt is also possible that a host key has just been changed.\n"})}),"\n",(0,i.jsx)(e.p,{children:"Do not be alarmed - this is an issue that occurs because the cluster has multiple login nodes (log-1, log-2, and log-3) that greene.hpc.nyu.edu resolves to."}),"\n",(0,i.jsxs)(e.p,{children:["To avoid this warning, you can add these lines to your SSH configuration file. Open ",(0,i.jsx)(e.code,{children:"~/.ssh/config"})," and place the following lines in it:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sh",children:"Host greene.hpc.nyu.edu dtn.hpc.nyu.edu gw.hpc.nyu.edu\n  StrictHostKeyChecking no\n  ServerAliveInterval 60\n  ForwardAgent yes\n  StrictHostKeyChecking no\n  UserKnownHostsFile /dev/null\n  LogLevel ERROR\n"})}),"\n",(0,i.jsxs)(e.p,{children:["The above will also fix SSH timeout errors by extending the ",(0,i.jsx)(e.code,{children:"ServerAliveInterval"})," argument."]}),"\n",(0,i.jsx)(e.h2,{id:"ssh-tunneling-mac-linux",children:"SSH Tunneling (Mac, Linux)"}),"\n",(0,i.jsx)(e.p,{children:"Setting up your workstation for SSH tunneling will make logging in and transferring files significantly easier, and installing and running an X server will allow you to use graphical software on the HPC clusters. X server is a software package that draws on your local screen windows created on a remote computer such as on the remote HPC."}),"\n",(0,i.jsxs)(e.p,{children:["Linux users have X set up already. Mac users can download and install ",(0,i.jsx)(e.a,{href:"https://www.xquartz.org/",children:"XQuartz"}),"."]}),"\n",(0,i.jsx)(e.h3,{id:"1-set-up-a-reusable-tunnel",children:"1. Set up a reusable tunnel"}),"\n",(0,i.jsxs)(e.p,{children:["To avoid repeatedly setting up a tunnel, you can write the details of the tunnel into your SSH configuration file. Using your favorite editor, open the file ",(0,i.jsx)(e.code,{children:"~/.ssh/config"})," and place the following lines in it:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sh",children:"# first we create the tunnel, with instructions to pass incoming\n# packets on ports 8027 and 8028 through it and to specific locations\n\nHost hpcgwtunnel\n  HostName gw.hpc.nyu.edu\n  ForwardX11 no\n  StrictHostKeyChecking no\n  LocalForward 8027 greene.hpc.nyu.edu:22\n  UserKnownHostsFile /dev/null \n  User <Your NetID>\n\n# next we create an alias for incoming packets on the port\n# The alias corresponds to where the tunnel forwards these packets\n\nHost greene\n  HostName localhost\n  Port 8027\n  ForwardX11 yes\n  StrictHostKeyChecking no\n  UserKnownHostsFile /dev/null\n  LogLevel ERROR\n  User <Your NetID>\n"})}),"\n",(0,i.jsx)(e.p,{children:'Create this  file/directory  In case you don\'t have it. Make sure that ".ssh" directory has correct permissions (it should be "700" or "drwx------"). If needed, set permissions with:'}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sh",children:"chmod 700 ~/.ssh\n"})}),"\n",(0,i.jsx)(e.p,{children:"You may also need to setup permissions on your local computer:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sh",children:"chmod 700 $HOME\nchmod 700 $HOME/.ssh\n## to be safe, all files inside ~/.ssh should be set 600\nchmod 600 ~/.ssh/*\n"})}),"\n",(0,i.jsx)(e.h3,{id:"2-start-the-tunnel",children:"2. Start the tunnel"}),"\n",(0,i.jsx)(e.p,{children:"To create the tunnel, ssh to it with the following command:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sh",children:"ssh hpcgwtunnel\n"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.em,{children:"IMPORTANT NOTE:"})})," You must leave this window open for the tunnel to remain open. It is best to start a new terminal window for subsequent logins."]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"3-log-in-via-the-tunnel",children:"3. Log in via the tunnel"}),"\n",(0,i.jsx)(e.p,{children:"Open a new terminal window and use ssh to log in to the cluster, as shown below."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sh",children:"ssh greene\n"})}),"\n",(0,i.jsx)(e.p,{children:"Note that you must use the short name defined above in your .ssh/config file, not the fully qualified domain name:"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Creating a once-off tunnel."})}),"\n",(0,i.jsx)(e.p,{children:"Alternatively, you can set up a once-off tunnel without editing .ssh/config by running the following command:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sh",children:"ssh -L 8027:greene:22 NetID@gw.hpc.nyu.edu # to set up a tunnel\nssh -Y -p 8027 NetID@localhost\n"})}),"\n",(0,i.jsx)(e.p,{children:'This is the equivalent to running "ssh hpcgwtunnel" in the reusable tunnel instructions, but the port forwarding is specified on the command line.'}),"\n",(0,i.jsx)(e.h2,{id:"tunneling-windows",children:"Tunneling (Windows)"}),"\n",(0,i.jsx)(e.h3,{id:"step-1-creating-the-tunnel",children:"Step 1: Creating the tunnel"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:'First open Putty and prepare to log in to gw.hpc.nyu.edu. If you saved your session during that process, you can load it by selecting from the "Saved Sessions" box and hitting "Load". Don\'t hit "Open" yet!'}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:'Under "Connection" -> "SSH", just below "X11", select "Tunnels'}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:'Write "8026" (the port number) in the "Source port" box, and "greene.hpc.nyu.edu:22" (the machine you wish to tunnel to - 22 is the port that ssh listens on) in the \t"Destination" box'}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:'Click "Add". You can repeat step 3 with a different port number and a different destination. If you do this you will create multiple tunnels, one to each destination'}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:'Before hitting "Open", go back to the "Sessions" page, give the session a name ("hpcgw_tunnel") and hit "Save". Then next time you need not do all this again, just load the saved session'}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:'Hit "Open" to login in to gw.hpc.nyu.edu and create the tunnel. A terminal window will appear, asking for your login name (NYU NetID) and password (NYU password). \tWindows may also ask you to allow certain connections through its firewall - this is so you can ssh to port 8026 on your workstation - the entrance to the tunnel'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.em,{children:"NOTE:"})})}),"\n",(0,i.jsx)(e.p,{children:'You can add other NYU hosts to the tunnel by adding a new source port and destination and clicking "Add". For example, you could add "Source port = 8025" and "Destination = EXAMPLE.hpc.nyu.edu:22", then press "Add". You would then perform Step 2 (below) twice - once for greene on port 8026 and once for an example server on port 8025.'}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:'Using your SSH tunnel: To log in via the tunnel, first the tunnel must be open. If you\'ve just completed Step 1, it will be open and you can jump down to "Step 2: Logging in via your SSH tunnel". If you completed Step 1 yesterday, and now want to re-use the tunnel you created, first start the tunnel:'}),"\n",(0,i.jsx)(e.p,{children:"Starting the tunnel: During a session, you need only do this once - as long as the tunnel is open, new connections will go over it."}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Start Putty.exe (again, if necessary), and load the session you saved in settings during procedure above"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:'Hit "Open", and log in to the bastion host with your NYU NetID and password. This will create the tunnel.'}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"step-2-logging-in-via-your-ssh-tunnel",children:"Step 2: Logging in via your SSH tunnel"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:'Start the second Putty.exe. In the "Host Name" box, write "localhost" and in the "Port" box, write "8026" (or whichever port number you specified when you set up the tunnel in the procedure above). We use "localhost" because the entrance of the tunnel is actually on this workstation, at port 8026'}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:'Go to "Connections" -> "SSH" -> "X11" and check "Enable X11 forwarding"'}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:'Optionally, give this session a name (in "Saved Sessions") and hit "Save" to save it. Then next time instead of steps 1 and 2 you can simply load this saved session'}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:'Hit "Open". You will again get a terminal window asking for your login (NYU NetID) and password (NYU password). You are now logged in to the HPC cluster!'}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"x11-forwarding",children:"X11 Forwarding"}),"\n",(0,i.jsx)(e.p,{children:"In rare cases when you need to interact with GUI applications on HPC clusters, you need to enable X11 forwarding for your SSH connection. Mac and Linux users will need to run the ssh commands described above with an additional flag:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sh",children:"ssh -Y <NYU_NetID>@greene.hpc.nyu.edu\n"})}),"\n",(0,i.jsxs)(e.p,{children:["However, Mac users need to install ",(0,i.jsx)(e.a,{href:"https://www.xquartz.org/",children:"XQuartz"}),", since X-server is no longer shipped with the macOS."]}),"\n",(0,i.jsx)(e.p,{children:"Windows users will also need to install X server software. We recommend two options out there. We recommend installing Xming. Start Xming application and configure PuTTY to support X11 forwarding:"})]})}function h(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>a});var s=t(6540);const i={},o=s.createContext(i);function r(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);