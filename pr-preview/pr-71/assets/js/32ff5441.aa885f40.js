"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7450],{960:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"hpc/storage/transferring_cloud_storage_data_with_rclone","title":"Transferring Cloud Storage Data with rclone","description":"Transferring files to and from Google Drive with RCLONE","source":"@site/docs/hpc/03_storage/09_transferring_cloud_storage_data_with_rclone.md","sourceDirName":"hpc/03_storage","slug":"/hpc/storage/transferring_cloud_storage_data_with_rclone","permalink":"/rts-docs-dev/pr-preview/pr-71/docs/hpc/storage/transferring_cloud_storage_data_with_rclone","draft":false,"unlisted":false,"editUrl":"https://github.com/NYU-ITS/rts-docs-dev/blob/main/docs/hpc/03_storage/09_transferring_cloud_storage_data_with_rclone.md","tags":[],"version":"current","sidebarPosition":9,"frontMatter":{},"sidebar":"hpcSidebar","previous":{"title":"HPC Storage System Status","permalink":"/rts-docs-dev/pr-preview/pr-71/docs/hpc/storage/system_status"},"next":{"title":"Sharing Data on HPC","permalink":"/rts-docs-dev/pr-preview/pr-71/docs/hpc/storage/sharing_data_on_hpc"}}');var t=o(5105),i=o(3881);const s={},l="Transferring Cloud Storage Data with rclone",a={},c=[{value:"Transferring files to and from Google Drive with RCLONE",id:"transferring-files-to-and-from-google-drive-with-rclone",level:2},{value:"rclone Configuration",id:"rclone-configuration",level:2},{value:"Step 1: Login to Greene:",id:"step-1-login-to-greene",level:3},{value:"Step 2: Load the rclone module",id:"step-2-load-the-rclone-module",level:3},{value:"Step 3: Configure rclone",id:"step-3-configure-rclone",level:3},{value:"Step 4:",id:"step-4",level:3},{value:"Step 5:",id:"step-5",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"transferring-cloud-storage-data-with-rclone",children:"Transferring Cloud Storage Data with rclone"})}),"\n",(0,t.jsx)(n.h2,{id:"transferring-files-to-and-from-google-drive-with-rclone",children:"Transferring files to and from Google Drive with RCLONE"}),"\n",(0,t.jsx)(n.p,{children:"Having access to Google Drive from the HPC environment provides an option to archive data and even share data with collaborators who have no access to the NYU HPC environment. Other options to archiving data include the HPC Archive file system and using Globus to share data with collaborators."}),"\n",(0,t.jsxs)(n.p,{children:["Access to Google Drive is provided by ",(0,t.jsx)(n.a,{href:"https://rclone.org/drive/",children:"rclone"})," - rsync for cloud storage - a command line program to sync files and directories to and from cloud storage systems such as Google Drive, Amazon Drive, S3, B2 etc. ",(0,t.jsx)(n.a,{href:"https://rclone.org/drive/",children:"rclone"})," is available on Greene cluster as a module, the module currently (November 2022) is ",(0,t.jsx)(n.strong,{children:"rclone/1.60.1"})]}),"\n",(0,t.jsxs)(n.p,{children:["For more details on how to use rclone to sync files to Google Drive, please see: ",(0,t.jsx)(n.a,{href:"https://rclone.org/drive/",children:"https://rclone.org/drive/"})]}),"\n",(0,t.jsx)(n.p,{children:"rclone can be invoked in one of the three modes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://rclone.org/commands/rclone_copy/",children:"Copy"})," mode to just copy new/changed files"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://rclone.org/commands/rclone_sync/",children:"Sync"})," (one way) mode to make a directory identical"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://rclone.org/commands/rclone_check/",children:"Check"})," mode to check for file hash equality"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Please try with these options:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"rclone --transfers=32 --checkers=16 --drive-chunk-size=16384k --drive-upload-cutoff=16384k copy source:sourcepath dest:destpath\n"})}),"\n",(0,t.jsx)(n.p,{children:"This option works great for file sizes 1Gb+ to 250GB. Keep in mind that there is a rate limiting of 2 files/sec for upload into Google Drive.  Small file transfers don\u2019t work that well. If you have many small jobs, please tar the parent directory of such folders and splits the tar file into 100GB chunks and uploads then into Google Drive."}),"\n",(0,t.jsx)(n.h2,{id:"rclone-configuration",children:"rclone Configuration"}),"\n",(0,t.jsx)(n.p,{children:"You need to configure rclone before you will be able to move files between the HPC Environment and Google Drive"}),"\n",(0,t.jsxs)(n.p,{children:["There are specific instruction on the rclone web site: ",(0,t.jsx)(n.a,{href:"https://rclone.org/drive/",children:"https://rclone.org/drive/"})]}),"\n",(0,t.jsx)(n.h3,{id:"step-1-login-to-greene",children:"Step 1: Login to Greene:"}),"\n",(0,t.jsxs)(n.p,{children:["Follow ",(0,t.jsx)(n.a,{href:"/rts-docs-dev/pr-preview/pr-71/docs/hpc/connecting_to_hpc/connecting_to_hpc",children:"instructions"})," to log into the Greene HPC cluster."]}),"\n",(0,t.jsx)(n.h3,{id:"step-2-load-the-rclone-module",children:"Step 2: Load the rclone module"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"$ module load rclone/1.60.1\n"})}),"\n",(0,t.jsx)(n.h3,{id:"step-3-configure-rclone",children:"Step 3: Configure rclone"}),"\n",(0,t.jsx)(n.p,{children:"Configuring rclone and setting up remote access to your Google Drive, using the command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"$ rclone config\n"})}),"\n",(0,t.jsx)(n.p,{children:"This will try to open the config files and you will see the below content:"}),"\n",(0,t.jsx)(n.p,{children:"You can select one of the options (here we show how to set up a new remote)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'2021/03/23 18:10:29 NOTICE: Config file "/home/netid/.config/rclone/rclone.conf" not found - using defaults\nNo remotes found - make a new one\nn) New remote\ns) Set configuration password\nq) Quit config\nn/s/q> n\nname> remote1\nType of storage to configure.\nEnter a string value. Press Enter for the default ("").\nChoose a number from below, or type in your own value\n 1 / 1Fichier\n   \\ "fichier"\n 2 / Alias for an existing remote\n   \\ "alias"\n 3 / Amazon Drive\n   \\ "amazon cloud drive"\n 4 / Amazon S3 Compliant Storage Provider (AWS, Alibaba, Ceph, Digital Ocean, Dreamhost, IBM COS, Minio, Tencent COS, etc)\n   \\ "s3"\n 5 / Backblaze B2\n   \\ "b2"\n 6 / Box\n   \\ "box"\n 7 / Cache a remote\n   \\ "cache"\n 8 / Citrix Sharefile \n   \\ "sharefile"\n 9 / Dropbox\n   \\ "dropbox"\n10 / Encrypt/Decrypt a remote \n   \\ "crypt"\n11 / FTP Connection\n   \\ "ftp" \n12 / Google Cloud Storage (this is not Google Drive)\n   \\ "google cloud storage"\n13 / Google Drive\n   \\ "drive" \n14 / Google Photos\n   \\ "google photos"\n....\n....\n....\n37 / premiumize.me\n   \\ "premiumizeme"\n38 / seafile\n   \\ "seafile"\nStorage> 13\n** See help for drive backend at: https://rclone.org/drive/ **\nGoogle Application Client Id\nSetting your own is recommended.\nSee https://rclone.org/drive/#making-your-own-client-id for how to create your own.\nIf you leave this blank, it will use an internal key which is low performance.\nEnter a string value. Press Enter for the default ("").\nclient_id> Just Hit Enter\nOAuth Client Secret\nLeave blank normally.\nEnter a string value. Press Enter for the default ("").\nclient_secret> Just Hit Enter\nScope that rclone should use when requesting access from drive.\nEnter a string value. Press Enter for the default ("").\nChoose a number from below, or type in your own value\n 1 / Full access all files, excluding Application Data Folder.\n   \\ "drive"\n 2 / Read-only access to file metadata and file contents.\n   \\ "drive.readonly"\n   / Access to files created by rclone only.\n 3 | These are visible in the drive website.\n   | File authorization is revoked when the user deauthorizes the app.\n   \\ "drive.file"\n   / Allows read and write access to the Application Data folder.\n 4 | This is not visible in the drive website.\n   \\ "drive.appfolder"\n   / Allows read-only access to file metadata but\n 5 | does not allow any access to read or download file content.\n   \\ "drive.metadata.readonly"\nscope> 1\nID of the root folder\nLeave blank normally.\nFill in to access "Computers" folders (see docs), or for rclone to use\na non root folder as its starting point.\nEnter a string value. Press Enter for the default ("").\nroot_folder_id> Just Hit Enter\nService Account Credentials JSON file path\nLeave blank normally.\nNeeded only if you want use SA instead of interactive login.\nLeading `~` will be expanded in the file name as will environment variables such as `${RCLONE_CONFIG_DIR}`.\nEnter a string value. Press Enter for the default ("").\nservice_account_file> Just Hit Enter\nEdit advanced config? (y/n)\ny) Yes\nn) No (default)\ny/n> n\nRemote config\nUse auto config?\n * Say Y if not sure\n * Say N if you are working on a remote or headless machine\ny) Yes (default)\nn) No\ny/n> n\nPlease go to the following link: https://accounts.google.com/o/oauth2/auth?access_type=offline&client_id=\n CUT AND PASTE The URL ABOVE INTO A BROWSER ON YOUR LAPTOP/DESKTOP \nLog in and authorize rclone for access\nEnter verification code> ENTER VERIFICATION CODE HERE\nConfigure this as a team drive?\ny) Yes\nn) No (default)\ny/n> n\n--------------------\n[remote1]\ntype = drive\nscope = drive\ntoken = {"access_token":", removed "}\n--------------------\ny) Yes this is OK (default)\ne) Edit this remote\nd) Delete this remote\ny/e/d> y\nCurrent remotes:\nName                 Type\n====                 ====\nremote1              drive\ne) Edit existing remote\nn) New remote\nd) Delete remote\nr) Rename remote\nc) Copy remote\ns) Set configuration password\nq) Quit config\ne/n/d/r/c/s/q> q\n'})}),"\n",(0,t.jsx)(n.h3,{id:"step-4",children:"Step 4:"}),"\n",(0,t.jsx)(n.p,{children:"Sample commands:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"$ rclone lsd remote1:\n"})}),"\n",(0,t.jsx)(n.p,{children:"Transferring files to Google Drive, using the command below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"$ rclone copy <source_folder> <remote_name>:<name_of_folder_on_gdrive>\n"})}),"\n",(0,t.jsx)(n.p,{children:"It looks something like below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"$ rclone copy /home/user1 remote1:backup_home_user1\n"})}),"\n",(0,t.jsx)(n.h3,{id:"step-5",children:"Step 5:"}),"\n",(0,t.jsx)(n.p,{children:"The files are transferred and you can find the files on your Google Drive."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Rclone only copies new files or files different from the already existing files on Google Drive."})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},3881:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>l});var r=o(8101);const t={},i=r.createContext(t);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);