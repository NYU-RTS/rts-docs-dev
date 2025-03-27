"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3844],{4716:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"hpc/storage/research_project_space","title":"Research Project Space (RPS)","description":"Description","source":"@site/docs/hpc/03_storage/05_research_project_space.md","sourceDirName":"hpc/03_storage","slug":"/hpc/storage/research_project_space","permalink":"/rts-docs-dev/pr-preview/pr-70/docs/hpc/storage/research_project_space","draft":false,"unlisted":false,"editUrl":"https://github.com/NYU-ITS/rts-docs-dev/blob/main/docs/hpc/03_storage/05_research_project_space.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{},"sidebar":"hpcSidebar","previous":{"title":"Globus","permalink":"/rts-docs-dev/pr-preview/pr-70/docs/hpc/storage/globus"},"next":{"title":"Best Practices on HPC Storage","permalink":"/rts-docs-dev/pr-preview/pr-70/docs/hpc/storage/best_practices"}}');var i=n(5105),r=n(3881);const a={},o="Research Project Space (RPS)",c={},l=[{value:"Description",id:"description",level:2},{value:"Calculating RPS Costs",id:"calculating-rps-costs",level:2},{value:"Example RPS Requests",id:"example-rps-requests",level:3},{value:"Submitting an RPS volume Request or Modification",id:"submitting-an-rps-volume-request-or-modification",level:2},{value:"Step 1: Decide the size (in TB) and number of inodes (files) that is needed for one year",id:"step-1-decide-the-size-in-tb-and-number-of-inodes-files-that-is-needed-for-one-year",level:3},{value:"Step 2: Determine the cost of the request",id:"step-2-determine-the-cost-of-the-request",level:3},{value:"Step 3: Verify that the project PI has a valid HPC user account",id:"step-3-verify-that-the-project-pi-has-a-valid-hpc-user-account",level:3},{value:"Step 4: The PI submits the request to the HPC team via email",id:"step-4-the-pi-submits-the-request-to-the-hpc-team-via-email",level:3},{value:"Current HPC RPS Stakeholders",id:"current-hpc-rps-stakeholders",level:2},{value:"FAQs",id:"faqs",level:2},{value:"Data Retention and Backups",id:"data-retention-and-backups",level:3},{value:"Billing and Payments",id:"billing-and-payments",level:3}];function d(e){const t={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"research-project-space-rps",children:"Research Project Space (RPS)"})}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Research Project Space (RPS) volumes provide working space for sharing data and code amongst project or lab members. RPS directories are built on the same parallel file system (GPFS) like HPC Scratch. They are mounted on the cluster Compute Nodes, and thus they can be accessed by running jobs. RPS directories are backed up and there is no old file purging policy. These features of RPS simplify the management of data in the HPC environment as users of the HPC Cluster can store their data and code on RPS directories and they do not need to move data between the HPC Scratch and the HPC Archive file systems."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Due to limitations of the underlying parallel file system, ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"the total number of RPS volumes that can be created is limited"})}),"."]}),"\n",(0,i.jsx)(t.li,{children:"There is an annual cost associated with RPS."}),"\n",(0,i.jsx)(t.li,{children:"The disk space and inode usage in RPS directories do not count towards quota limits in other HPC file systems (Home, Scratch, and Archive)."}),"\n"]})}),"\n",(0,i.jsx)(t.h2,{id:"calculating-rps-costs",children:"Calculating RPS Costs"}),"\n",(0,i.jsx)(t.p,{children:"The PI should estimate the cost of the RPS volume by taking into account storage size and number of inodes (files). The cost is calculated annually. Costs are divided into the total space, in terabytes, and the number of inodes, in blocks of 200,000."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"1 TB of Storage Cost:  $100"}),"\n",(0,i.jsx)(t.li,{children:"200,000 inodes Cost: $100"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"An initial RPS volume request must include both storage space and inodes. Modifications of existing RPS volumes can include just Storage or just inode adjustments."}),"\n",(0,i.jsx)(t.p,{children:"An initial request includes 1TB and 200,000 inodes for an annual cost of $200."}),"\n",(0,i.jsx)(t.h3,{id:"example-rps-requests",children:"Example RPS Requests"}),"\n",(0,i.jsx)(t.p,{children:"Requests can include more storage or files, as needed, such as 1TB and 400,000 inodes or 2TB and 200,000 inodes. Both of the previous examples would cost $300, since they are requesting an incremental increase of storage or inodes, respectively."}),"\n",(0,i.jsx)(t.p,{children:"This would be the breakdown of the examples listed above:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"1 TB ($100) + 400,000 inodes ($200) = $300"}),"\n",(0,i.jsx)(t.li,{children:"2 TB ($200) + 200,000 inodes ($100) = $300"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"submitting-an-rps-volume-request-or-modification",children:"Submitting an RPS volume Request or Modification"}),"\n",(0,i.jsx)(t.h3,{id:"step-1-decide-the-size-in-tb-and-number-of-inodes-files-that-is-needed-for-one-year",children:"Step 1: Decide the size (in TB) and number of inodes (files) that is needed for one year"}),"\n",(0,i.jsx)(t.p,{children:"The minimum size of an RPS request (to create a new RPS volume or extend an existing one) is 1TB of space."}),"\n",(0,i.jsxs)(t.p,{children:["If this is a new/first request, you must purchase both storage and inodes. ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"A typical request includes 200,000 inodes per TB of storage."})})]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"Before submitting an RPS request (request for a new RPS volume or extending the size of an existing volume) PIs should estimate the growth of their data (in terms of storage space and number of files) during the entire year, rather than submitting a request based on their data storage needs at the time of the request."})}),"\n",(0,i.jsx)(t.h3,{id:"step-2-determine-the-cost-of-the-request",children:"Step 2: Determine the cost of the request"}),"\n",(0,i.jsx)(t.p,{children:"Determine the total annual cost of the request and the contact info of the School/Department/Center finance person."}),"\n",(0,i.jsx)(t.h3,{id:"step-3-verify-that-the-project-pi-has-a-valid-hpc-user-account",children:"Step 3: Verify that the project PI has a valid HPC user account"}),"\n",(0,i.jsxs)(t.p,{children:["The PI administers the top level RTS directory and grants access to other users. Thus ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"the PI must have a valid HPC user account"})})," at the time of request.  Please note that the HPC user account of NYU faculty never expires and thus does not need to be renewed every year.  If the PI does not have an HPC account, please ",(0,i.jsx)(t.a,{href:"/rts-docs-dev/pr-preview/pr-70/docs/hpc/getting_started/getting_and_renewing_an_account",children:"request one here"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"step-4-the-pi-submits-the-request-to-the-hpc-team-via-email",children:"Step 4: The PI submits the request to the HPC team via email"}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"Only PIs can submit RPS requests."})}),"\n",(0,i.jsxs)(t.p,{children:["Submit your RPS request by contacting the HPC team via email (",(0,i.jsx)(t.a,{href:"mailto:hpc@nyu.edu",children:"hpc@nyu.edu"}),"). ",(0,i.jsx)("br",{}),"\nPlease include in the request:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"size in TB"}),"\n",(0,i.jsx)(t.li,{children:"number of inodes"}),"\n",(0,i.jsx)(t.li,{children:"contact information of the School/Department/Center finance person"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The HPC team will review the request and will contact the PI with any questions.  If the request is approved, the HPC team will create (or adjust) the RPS volume with the PI's HPC user account as the owner of the RPS directory. An invoice will be generated by the IT finance team."}),"\n",(0,i.jsx)(t.h2,{id:"current-hpc-rps-stakeholders",children:"Current HPC RPS Stakeholders"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://docs.google.com/spreadsheets/d/1NYH5y8yif7UpwGVtmdowMAy5NCIWtE1a2B697RNF_zU/edit?usp=sharing",children:"HPC RPS Stakeholders"})}),"\n",(0,i.jsx)(t.h2,{id:"faqs",children:"FAQs"}),"\n",(0,i.jsx)(t.h3,{id:"data-retention-and-backups",children:"Data Retention and Backups"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["How long can I keep the lab data in RPS?","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"For as long as the lab pays for the RPS resources. Even if the current HPC cluster retires, the RPS volumes will be transferred to the next cluster"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["How can I find out how much of the storage and inodes have I used in my lab RPS volume","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Please contact ",(0,i.jsx)(t.a,{href:"mailto:hpc@nyu.edu",children:"HPC support"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["What kind of backups are provided?","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Backups are done once a day (daily incremental). Backups are kept for 30 days. This means that if something was deleted more than 30 days ago, it won't be in the back ups and thus it won't be recoverable."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Where are backups stored?","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"RPS backups are stored on public cloud (AWS S3 Storage buckets)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"billing-and-payments",children:"Billing and Payments"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["What happens if I do not pay my bill?","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"If the invoice is not paid for more than 60 days, the lab RPS directory will be 'tar'-ed and copied to an archival area. If 60 more days pass and the invoice is still not paid the tar files will be deleted."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Can I pay for RPS using a credit card?","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Unfortunately we're unable to process credit card payments"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Can I pay for multiple years instead of paying every year?","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Yes, we can arrange for multiyear agreement"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},3881:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(8101);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);