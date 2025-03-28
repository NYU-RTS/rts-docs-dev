"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1271],{1046:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>r});const t=JSON.parse('{"id":"srde/user_guide/connecting","title":"Connecting to SRDE","description":"Remote access to the secure environment workspace via the Command Line Interface. The SRDE consists of two separate servers:","source":"@site/docs/srde/02_user_guide/01_connecting.mdx","sourceDirName":"srde/02_user_guide","slug":"/srde/user_guide/connecting","permalink":"/rts-docs-dev/pr-preview/pr-72/docs/srde/user_guide/connecting","draft":false,"unlisted":false,"editUrl":"https://github.com/NYU-ITS/rts-docs-dev/blob/main/docs/srde/02_user_guide/01_connecting.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"srdeSidebar","previous":{"title":"Secure Research Data Environment (SRDE)","permalink":"/rts-docs-dev/pr-preview/pr-72/docs/srde/getting_started/eligibility_accounts"},"next":{"title":"Data Access","permalink":"/rts-docs-dev/pr-preview/pr-72/docs/srde/user_guide/data_access"}}');var o=s(5105),i=s(3881);const a={},l="Connecting to SRDE",c={},r=[{value:"Connecting through Google Cloud Console",id:"connecting-through-google-cloud-console",level:2},{value:"Connecting through Google Cloud Shell",id:"connecting-through-google-cloud-shell",level:2},{value:"Setting project and zone",id:"setting-project-and-zone",level:3},{value:"Confirm settings",id:"confirm-settings",level:3},{value:"Generate SSH keys",id:"generate-ssh-keys",level:3},{value:"Add SSH key to session",id:"add-ssh-key-to-session",level:3},{value:"Future logins",id:"future-logins",level:3},{value:"Connecting on MacOS/Linux",id:"connecting-on-macoslinux",level:2},{value:"Install gcloud CLI",id:"install-gcloud-cli",level:3},{value:"Configure local gcloud settings",id:"configure-local-gcloud-settings",level:3},{value:"Connect to the workspace",id:"connect-to-the-workspace",level:3},{value:"Connecting on Windows 10/11",id:"connecting-on-windows-1011",level:2},{value:"Start and Configure SSH-Agent Service",id:"start-and-configure-ssh-agent-service",level:3},{value:"Install gcloud CLI",id:"install-gcloud-cli-1",level:3},{value:"Install Git",id:"install-git",level:3},{value:"Install Putty",id:"install-putty",level:3},{value:"Install Python (&gt;version 3.0)",id:"install-python-version-30",level:3},{value:"Logging in:",id:"logging-in",level:3},{value:"SSH into the bastion VM from Git Bash",id:"ssh-into-the-bastion-vm-from-git-bash",level:3},{value:"Add SSH key to session",id:"add-ssh-key-to-session-1",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"connecting-to-srde",children:"Connecting to SRDE"})}),"\n",(0,o.jsx)(n.p,{children:"Remote access to the secure environment workspace via the Command Line Interface. The SRDE consists of two separate servers:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"The Workspace Host is where you access and analyze data"}),"\n",(0,o.jsx)(n.li,{children:"The Bastion Host acts as a proxy that allows your laptop/workstation to connect securely via the internet to the Workspace Host."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Accessing the Secure environment Workspace Host remotely via the Command Line Interface (CLI) is a two-step process: First you must connect to the Bastion Host and then from the Bastion Host access your Workspace Host.  The two-step process is demonstrated below:\n",(0,o.jsx)(n.img,{alt:"Virtual Private Network",src:s(3090).A+"",width:"1999",height:"742"})]}),"\n",(0,o.jsxs)(n.p,{children:["This two-step process is enabled with the use of SSH keys and SSH Agent Forwarding and is described in detail for some of the common Operating Systems (MacOS/Linux and Windows)  in the following sections of the User Guide. For more general information about using SSH keys and the use of Bastion Host ",(0,o.jsx)(n.a,{href:"https://medium.com/devops-dudes/setting-up-an-ssh-agent-to-access-the-bastion-in-vpc-532918577949",children:"see here"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["User access to the secure environment is controlled by ",(0,o.jsx)(n.a,{href:"https://cloud.google.com/security/products/iap?hl=en",children:"Identity-Aware Proxy (IAP)"})," Google Cloud service. IAP provides a central way of managing user access and enforcing access control policies, without requiring external/public IP addresses on the Bastion Host and the Workspace Host."]}),"\n",(0,o.jsxs)(n.admonition,{title:"Prerequisites",type:"tip",children:[(0,o.jsx)(n.p,{children:"In order to be able to access your Secure Environment Workspace Host, you will need the following information, provided by the Secure Research Data Admins:"}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Project Id"})," for the Bastion Host (ex. test-dev1-bastion-1234)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Zone Name"})," (ex. us-east4-a)"]}),"\n"]}),(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"At this time you are not required to be on the NYU Network (or VPN into the NYU Network) in order to access the Secure Environment workspace."})})]}),"\n",(0,o.jsx)(n.h2,{id:"connecting-through-google-cloud-console",children:"Connecting through Google Cloud Console"}),"\n",(0,o.jsxs)(n.p,{children:["Navigate to Google Cloud Console ",(0,o.jsx)(n.a,{href:"https://console.cloud.google.com/welcome",children:"https://console.cloud.google.com/welcome"})," and login with your NetID. Click the Select a project drop-down list at the top left corner of the page. In the Select a project window that appears, search and select the bastion project using the provided project ID (ex. test-dev1-bastion-1234)."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Select a project",src:s(7685).A+"",width:"752",height:"132"})}),"\n",(0,o.jsx)(n.p,{children:"Once selected, navigate to the VM Instances page via the Navigation menu (Menu in the top left corner of the page ) > Compute Engine > VM Instances. A running Bastion instance will be visible in the page as shown below:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Bastion Instance",src:s(2077).A+"",width:"1999",height:"398"})}),"\n",(0,o.jsx)(n.p,{children:"ssh to the Bastion instance by clicking on the SSH button, a new SSH-in-browser tab will appear with a restricted CLI ( Command line interface ) connected to the instance. We are now inside the Bastion Host."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"SSH in browser",src:s(3190).A+"",width:"1796",height:"668"})}),"\n",(0,o.jsxs)(n.p,{children:["Now we can ssh to our workspace host by using the workspace internal IP address ",(0,o.jsx)(n.code,{children:"10.0.0.2"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"ssh 10.0.0.2\n"})}),"\n",(0,o.jsx)(n.p,{children:"This will open the workspace CLI, with access to the workspace host having the computing needs to work on our data."}),"\n",(0,o.jsx)(n.h2,{id:"connecting-through-google-cloud-shell",children:"Connecting through Google Cloud Shell"}),"\n",(0,o.jsxs)(n.p,{children:["Navigate to ",(0,o.jsx)(n.a,{href:"https://shell.cloud.google.com/",children:"https://shell.cloud.google.com/"})," while logged in using your NetID."]}),"\n",(0,o.jsx)(n.h3,{id:"setting-project-and-zone",children:"Setting project and zone"}),"\n",(0,o.jsx)(n.p,{children:"Note - Ask your SRDE administrator for the appropriate GCP PROJECT_ID and ZONE_NAME. Replace the values in the two commands below and run them"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"gcloud config set project PROJECT_ID\ngcloud config set compute/zone ZONE_NAME\n"})}),"\n",(0,o.jsx)(n.h3,{id:"confirm-settings",children:"Confirm settings"}),"\n",(0,o.jsx)(n.p,{children:"Before proceeding, confirm that the project and zone match your GCP project ID and zone:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"gcloud config list\n\n\n[compute]\nregion = us-east4\nzone = us-east4-a\n[core]\naccount = netid@nyu.edu\ndisable_usage_reporting = False\nproject = test-dev1-bastion-1234\n\n\nYour active configuration is: [default]\n"})}),"\n",(0,o.jsx)(n.h3,{id:"generate-ssh-keys",children:"Generate SSH keys"}),"\n",(0,o.jsx)(n.admonition,{title:"Unused keys expire!",type:"tip",children:(0,o.jsx)(n.p,{children:"Google Cloud Shell will delete your files, including generated SSH keys, if they are not accessed for 120 days. If this happens you will need to generate them again."})}),"\n",(0,o.jsx)(n.p,{children:"The simplest way to generate SSH keys is to delegate the key generation to gcloud. In order to trigger key creation, run the following command."}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Ignore the result of this command. It will most likely print errors to the output console."})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"gcloud compute ssh bastion-vm\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You will be prompted to enter an SSH passphrase. This is optional, however it is recommended for additional user security.\n",(0,o.jsx)(n.img,{alt:"Getting into Bastion",src:s(3959).A+"",width:"1152",height:"816"})]}),"\n",(0,o.jsx)(n.p,{children:"The above command should log you into the bastion VM. You will see a prompt like:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"-bash-4.4$\u201d\n"})}),"\n",(0,o.jsx)(n.p,{children:"Before proceeding, exit back to your local machine"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"exit\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Then make sure the above step created two keys in your ssh home directory (",(0,o.jsx)(n.code,{children:"~/.ssh"}),") as shown below:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"ls ~/.ssh\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"List ssh keys",src:s(5643).A+"",width:"1104",height:"152"})}),"\n",(0,o.jsx)(n.p,{children:"Start the ssh-agent on your local machine"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"eval `ssh-agent -s`\n"})}),"\n",(0,o.jsx)(n.p,{children:"Add the google_compute_engine key to your ssh session"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"ssh-add ~/.ssh/google_compute_engine\n"})}),"\n",(0,o.jsx)(n.p,{children:"Connect to the instance with gcloud using the \u2013ssh-flag-\u201d-A\u201d flag"}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"This command uses the default project and zone set above."})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:'gcloud compute ssh bastion-vm --ssh-flag="-A"  --tunnel-through-iap\n'})}),"\n",(0,o.jsx)(n.h3,{id:"add-ssh-key-to-session",children:"Add SSH key to session"}),"\n",(0,o.jsxs)(n.p,{children:["Run the following command to add the google_compute_engine key to the current session",":ssh"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"ssh-add -L\n"})}),"\n",(0,o.jsx)(n.p,{children:"Connect to the workstation-vm"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"ssh 10.0.0.2\n"})}),"\n",(0,o.jsx)(n.h3,{id:"future-logins",children:"Future logins"}),"\n",(0,o.jsx)(n.p,{children:"After the initial login, you will not need to regenerate the SSH keys, but you will need the rest of the command sequence from \u201cStart the SSH agent\u201d. On your local machine:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:'eval `ssh-agent -s`\nssh-add ~/.ssh/google_compute_engine \ngcloud compute ssh bastion-vm --ssh-flag="-A" --tunnel-through-iap --project=PROJECT_ID\n'})}),"\n",(0,o.jsx)(n.p,{children:"And then on the bastion VM:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"ssh 10.0.0.2\n"})}),"\n",(0,o.jsx)(n.h2,{id:"connecting-on-macoslinux",children:"Connecting on MacOS/Linux"}),"\n",(0,o.jsx)(n.h3,{id:"install-gcloud-cli",children:"Install gcloud CLI"}),"\n",(0,o.jsxs)(n.p,{children:["Follow the ",(0,o.jsx)(n.a,{href:"https://cloud.google.com/sdk/docs/install-sdk#installing_the_latest_version",children:"official guidelines"})," to install the latest version of gcloud CLI locally on your computer."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["After completing the gcloud installation, verify that the ",(0,o.jsx)(n.code,{children:"gcloud"})," binary is in your $PATH environment variable."]})}),"\n",(0,o.jsx)(n.h3,{id:"configure-local-gcloud-settings",children:"Configure local gcloud settings"}),"\n",(0,o.jsx)(n.p,{children:"Run the following command. It generates a link as shown below"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"gcloud auth login --no-launch-browser\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"GCP authenticate login",src:s(383).A+"",width:"1999",height:"239"})}),"\n",(0,o.jsxs)(n.p,{children:["Copy the link and open your chrome browser in incognito mode to perform user sign in.Username is your NYU NetID email address. For e.g. ",(0,o.jsx)(n.a,{href:"mailto:netid@nyu.edu",children:"netid@nyu.edu"})]}),"\n",(0,o.jsx)(n.p,{children:"You will be redirected to the NYU SSO page and MFA verification through Duo Push. After successfully logging in, you will be asked to allow google SDK to access your account as shown below"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"OAuth consent screen",src:s(4697).A+"",width:"332",height:"645"})}),"\n",(0,o.jsxs)(n.p,{children:["Pressing the \u201cAllow\u201d button on this page will present the authorization code. Copy the code and paste it in the terminal. If this step is successful, you should see this text printed to the console. ",(0,o.jsxs)(n.strong,{children:["You are now logged in as [",(0,o.jsx)(n.a,{href:"mailto:netid@nyu.edu",children:"netid@nyu.edu"}),"]."]})]}),"\n",(0,o.jsx)(n.h3,{id:"connect-to-the-workspace",children:"Connect to the workspace"}),"\n",(0,o.jsx)(n.p,{children:"Follow the same instructions for connecting with Google Cloud Shell above, starting from section on setting project and zone above."}),"\n",(0,o.jsx)(n.h2,{id:"connecting-on-windows-1011",children:"Connecting on Windows 10/11"}),"\n",(0,o.jsx)(n.h3,{id:"start-and-configure-ssh-agent-service",children:"Start and Configure SSH-Agent Service"}),"\n",(0,o.jsx)(n.p,{children:"Using an elevated PowerShell window (run as admin), execute the following command to install the SSH-Agent service and configure it to start automatically when you log into your machine:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ps",children:"Get-Service ssh-agent | Set-Service -StartupType Automatic -PassThru | Start-Service\n\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Run a script in PowerShell",src:s(7512).A+"",width:"774",height:"170"})}),"\n",(0,o.jsx)(n.h3,{id:"install-gcloud-cli-1",children:"Install gcloud CLI"}),"\n",(0,o.jsxs)(n.p,{children:["Download the [Google Cloud CLI installer] (",(0,o.jsx)(n.a,{href:"https://dl.google.com/dl/cloudsdk/channels/rapid/GoogleCloudSDKInstaller.exe",children:"https://dl.google.com/dl/cloudsdk/channels/rapid/GoogleCloudSDKInstaller.exe"}),") and run the installer"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"GCloud Installer",src:s(5770).A+"",width:"489",height:"378"})}),"\n",(0,o.jsx)(n.p,{children:"Alternatively, run the following command to download and install:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ps",children:'(New-Object Net.WebClient).DownloadFile("https://dl.google.com/dl/cloudsdk/channels/rapid/GoogleCloudSDKInstaller.exe", "$env:Temp\\GoogleCloudSDKInstaller.exe")\n\n& $env:Temp\\GoogleCloudSDKInstaller.exe\n\n'})}),"\n",(0,o.jsx)(n.h3,{id:"install-git",children:"Install Git"}),"\n",(0,o.jsxs)(n.p,{children:["Download the Git Bash setup from the official website: ",(0,o.jsx)(n.a,{href:"https://git-scm.com/",children:"https://git-scm.com/"})," and run the installer"]}),"\n",(0,o.jsx)(n.h3,{id:"install-putty",children:"Install Putty"}),"\n",(0,o.jsxs)(n.p,{children:["Download and install Putty from this link ",(0,o.jsx)(n.a,{href:"https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html",children:"https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html"})]}),"\n",(0,o.jsx)(n.p,{children:"Post installation verify that the Putty authentication agent is installed and available"}),"\n",(0,o.jsxs)(n.p,{children:["For 64-bit installer, you will find this executable at ",(0,o.jsx)(n.code,{children:"C:/Program Files/PuTTY/pageant.exe"})]}),"\n",(0,o.jsx)(n.h3,{id:"install-python-version-30",children:"Install Python (>version 3.0)"}),"\n",(0,o.jsxs)(n.p,{children:["Install Python from the official website:",(0,o.jsx)(n.a,{href:"https://www.python.org/downloads/",children:"https://www.python.org/downloads/"})]}),"\n",(0,o.jsx)(n.p,{children:"Remember to check \u201cAdd python to the environment path.\u201d ***add screenshot"}),"\n",(0,o.jsx)(n.p,{children:"Make sure it's installed and available on PATH. On many systems Python comes pre-installed, you can try running the python command to start the Python interpreter to check and see if it is already installed."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Python in CMD Prompt",src:s(3205).A+"",width:"398",height:"165"})}),"\n",(0,o.jsx)(n.p,{children:"On windows you can also try the py command which is a launcher which is more likely to work. If it is installed you will see a response which will include the version number, for example:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Py in CMD Prompt",src:s(8874).A+"",width:"795",height:"137"})}),"\n",(0,o.jsx)(n.h3,{id:"logging-in",children:"Logging in:"}),"\n",(0,o.jsx)(n.p,{children:"Authenticate gcloud by starting a new session of command line or powershell. initialize and login to gcloud with your account (you will be redirected to the browser for authentication)"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ps",children:"gcloud auth login\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"OAuth on windows",src:s(6075).A+"",width:"2564",height:"1596"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"GCP login CMD prompt",src:s(3163).A+"",width:"967",height:"382"})}),"\n",(0,o.jsx)(n.p,{children:"Run Git Bash and start the ssh-agent on your local machine"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ps",children:"eval `ssh-agent -s`\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"SSH Agent command",src:s(4947).A+"",width:"501",height:"124"})}),"\n",(0,o.jsx)(n.p,{children:"Add the SSH key to agent by running"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ps",children:"pageant.exe\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"PAgent Windows",src:s(5698).A+"",width:"550",height:"459"})}),"\n",(0,o.jsxs)(n.p,{children:["The app runs in the background. you can find it in the tray.\n",(0,o.jsx)(n.img,{alt:"PAgent in tray",src:s(7977).A+"",width:"318",height:"173"})]}),"\n",(0,o.jsxs)(n.p,{children:['Right click the icon and select "Add Key". Add the google_compute_engine key with the PPK extension (~/.ssh/google_compute_engine) to your agent:\n',(0,o.jsx)(n.img,{alt:"PPK Add Key",src:s(7356).A+"",width:"456",height:"399"})]}),"\n",(0,o.jsx)(n.p,{children:":::Skip this step in the future\nGo to the Pageant shortcut icon from the Windows Start Menu or your desktop."}),"\n",(0,o.jsx)(n.p,{children:"Right click on the icon, and click on Properties. (If Properties is not an option on the menu, click on Open file location, then right click on the Pageant icon, and click on Properties)"}),"\n",(0,o.jsx)(n.p,{children:":::"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"PPK properties",src:s(6761).A+"",width:"237",height:"473"})}),"\n",(0,o.jsx)(n.p,{children:"From the Shortcut tab, edit the Target field. Leave the path to pageant.exe intact. After that path, add the path to your Google .ppk key file."}),"\n",(0,o.jsx)(n.admonition,{title:"Critical",type:"warning",children:(0,o.jsx)(n.p,{children:"The key path should be outside the quotation marks. i"})}),"\n",(0,o.jsx)(n.p,{children:"Here\u2019s an example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ps",children:'"C:\\Program Files\\PuTTY\\pageant.exe" C:\\Users\\Sam\\.ssh\\google_compute_engine.ppk\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"PAgent properties",src:s(4092).A+"",width:"354",height:"535"})}),"\n",(0,o.jsx)(n.h3,{id:"ssh-into-the-bastion-vm-from-git-bash",children:"SSH into the bastion VM from Git Bash"}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"Ask your SRDE administrator for the appropriate GCP project ID."})}),"\n",(0,o.jsx)(n.p,{children:"Replace gcp-project-id with that information in the below command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ps",children:'export PROJECT_ID=gcp-project-id;\n\ngcloud compute ssh bastion-vm --ssh-flag="-A" --zone=us-east4-a --tunnel-through-iap --project=${PROJECT_ID}\n\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Export Project ID and login",src:s(1471).A+"",width:"562",height:"117"})}),"\n",(0,o.jsxs)(n.p,{children:["When SSHing to bastion in the git bash window, a new terminal in putty appears with the bastion connection\n",(0,o.jsx)(n.img,{alt:"PUTTy bastion",src:s(32).A+"",width:"661",height:"418"})]}),"\n",(0,o.jsxs)(n.p,{children:["A PuTTY security alert window may pop up to accept the host key, click on Accept\n",(0,o.jsx)(n.img,{alt:"PUTTy security alert",src:s(3575).A+"",width:"512",height:"268"})]}),"\n",(0,o.jsx)(n.h3,{id:"add-ssh-key-to-session-1",children:"Add SSH key to session"}),"\n",(0,o.jsx)(n.p,{children:"Run ssh-add to add the google_compute_engine key to the current session"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ps",children:"ssh-add  -L \n"})}),"\n",(0,o.jsx)(n.p,{children:"Connect to the workstation-vm"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ps",children:"ssh 10.0.0.2\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"PUTTy ssh to vm",src:s(7952).A+"",width:"716",height:"544"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},383:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/auth_login-ec35e1cb0e46e35471971cb310f6eec1.png"},2077:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/bastion_instance-3176a007f4d8db85a8eea0b9158a1e74.png"},3163:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/cmd_prompt_gcp_login-490c1e5fe471f532d897842ada71314a.png"},8874:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/cmd_prompt_py-4f9dc1a20f1bd0710b93b46a148fa217.png"},3205:(e,n,s)=>{s.d(n,{A:()=>t});const t="data:image/png;base64,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"},5770:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/gcloud_windows_installer-65c72712314dc71cbe09837bf3aff6b1.png"},3959:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/getting_into_bastion-b09a6a901e11b36b7c0c856663430244.png"},5643:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/ls_dot_ssh-369c9555275bc7c66cfba19ce1866ec9.png"},4947:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/mingw_eval_ssh-5f753abf9bea111ab606a5eedda57d74.png"},1471:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/mingw_export_project_gcloud_login-e90f3562b96b70ffb21accf3121b7f98.png"},4697:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/oauth_consent-4efc3d8cf73320df92bcf53b7f63a7c3.png"},6075:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/oauth_consent_windows-5ad842a13653219e1b96fadc3814dde5.png"},7977:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/pagent_in_tray-b5eed5facbe7f178e49ab3c376761c68.png"},4092:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/pagent_properties_popout-9967929ffd4dd96e6631fcd9ac074046.png"},5698:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/pagent_windows-30302651a62685f54a6ae3b7e007bc39.png"},7512:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/powershell_script-1a97365e84dbb3bef1b730a6b8feb0a7.png"},7356:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/ppk_add_key-a9dc42d30a52e3b83f4137cd30d7724b.png"},6761:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/ppk_properties_trust-9d8cd23b466a8177c01c433274905e00.png"},32:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/putty_bastion-0e63d130072dcfb3c9f6a74cc2f56fd8.png"},3575:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/putty_security_alert-1dda8415febeaef26cedf0cb29d7a1f2.png"},7952:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/putty_ssh_to_vm-42c555f129ea260ae5642bbc0b7a0b4e.png"},7685:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/select_project-2d3445b242dce0d4ca53bb0e52f1d286.png"},3190:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/ssh_in_browser-38c37a9dd011d80c26e8e781a0693058.png"},3090:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/vpc_basics-bcca2bf1a5dcd1495402c39f74bf1801.png"},3881:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var t=s(8101);const o={},i=t.createContext(o);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);