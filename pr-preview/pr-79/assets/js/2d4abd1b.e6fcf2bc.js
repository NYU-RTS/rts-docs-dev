"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4395],{2334:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"hpc/tools_and_software/r_packages_with_renv","title":"R Packages with renv","description":"You may use the renv R package to create a personal R Project environment for R packages. Documentation on renv can be found on the RStudio site.","source":"@site/docs/hpc/06_tools_and_software/04_r_packages_with_renv.md","sourceDirName":"hpc/06_tools_and_software","slug":"/hpc/tools_and_software/r_packages_with_renv","permalink":"/rts-docs-dev/pr-preview/pr-79/docs/hpc/tools_and_software/r_packages_with_renv","draft":false,"unlisted":false,"editUrl":"https://github.com/NYU-ITS/rts-docs-dev/blob/main/docs/hpc/06_tools_and_software/04_r_packages_with_renv.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{},"sidebar":"hpcSidebar","previous":{"title":"Python Packages with Virtual Environments","permalink":"/rts-docs-dev/pr-preview/pr-79/docs/hpc/tools_and_software/python_packages_with_virtual_environments"},"next":{"title":"Software on Greene","permalink":"/rts-docs-dev/pr-preview/pr-79/docs/hpc/tools_and_software/software_on_greene"}}');var t=r(5105),a=r(3881);const o={},s="R Packages with renv",c={},l=[{value:"Setup",id:"setup",level:2},{value:"Automatic deletion of your files",id:"automatic-deletion-of-your-files",level:3},{value:"Cache directory setup",id:"cache-directory-setup",level:3},{value:"Init renv",id:"init-renv",level:3},{value:"Check",id:"check",level:3},{value:"Add/remove, etc. packages",id:"addremove-etc-packages",level:3},{value:"Clean up",id:"clean-up",level:3},{value:"Recommended Workflow",id:"recommended-workflow",level:3},{value:"Use with sbatch",id:"use-with-sbatch",level:2},{value:"Store and Share your R Project&#39;s R version and R Package Versions",id:"store-and-share-your-r-projects-r-version-and-r-package-versions",level:3},{value:"Reproduce Environment",id:"reproduce-environment",level:4},{value:"What to save/publish/commit with Git",id:"what-to-savepublishcommit-with-git",level:4},{value:"Migrating from Packrat",id:"migrating-from-packrat",level:4},{value:"Useful links",id:"useful-links",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"r-packages-with-renv",children:"R Packages with renv"})}),"\n",(0,t.jsxs)(n.p,{children:["You may use the renv R package to create a personal R Project environment for R packages. Documentation on renv can be found on the ",(0,t.jsx)(n.a,{href:"https://rstudio.github.io/renv/",children:"RStudio site"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsx)(n.p,{children:"Say your R code is in directory /scratch/$USER/projects/project1"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"cd /scratch/$USER/projects/project1\nmodule purge\nmodule load r/gcc/4.4.0\n\nR\n"})}),"\n",(0,t.jsx)(n.h3,{id:"automatic-deletion-of-your-files",children:"Automatic deletion of your files"}),"\n",(0,t.jsxs)(n.p,{children:["This page describes the installation of packages on /scratch. One has to remember, though, that files stored in the HPC scratch file system are subject to the HPC Scratch old file purging policy: Files on the ",(0,t.jsx)(n.code,{children:"/scratch"})," file system that have not been accessed for 60 or more days will be purged (read ",(0,t.jsx)(n.a,{href:"/rts-docs-dev/pr-preview/pr-79/docs/hpc/storage/intro_and_data_management",children:"more"}),")."]}),"\n",(0,t.jsx)(n.p,{children:"Thus you can consider the following options:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Reinstall your packages if some of the files get deleted","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"You can do this manually"}),"\n",(0,t.jsxs)(n.li,{children:["You can do this automatically. For example, within a workflow of a pipeline software like ",(0,t.jsx)(n.a,{href:"https://www.nextflow.io/",children:"Nextflow"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:['Pay for "Research Project Space" - read more ',(0,t.jsx)(n.a,{href:"/rts-docs-dev/pr-preview/pr-79/docs/hpc/storage/research_project_space",children:"here"})]}),"\n",(0,t.jsxs)(n.li,{children:["Use Singularity and install packages within a corresponding overlay file - read more ",(0,t.jsx)(n.a,{href:"/rts-docs-dev/pr-preview/pr-79/docs/hpc/containers/squash_file_system_and_singularity",children:"here"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"cache-directory-setup",children:"Cache directory setup"}),"\n",(0,t.jsxs)(n.p,{children:["By default, renv will cache package installation files to your home directory (most likely either in ",(0,t.jsx)(n.code,{children:"~/.local/share/renv"})," or ",(0,t.jsx)(n.code,{children:"~/.cache/R/renv/"})," or something similar)."]}),"\n",(0,t.jsx)(n.p,{children:"To avoid filling up your home directory, we advise to set up path to alternative cache directory (otherwise your home directory may fill up quickly)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Create directory"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"mkdir -p /scratch/$USER/.cache/R/renv\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Create a file in you project directory named .Renviron and put the following in in the file. It is the R project directory (",(0,t.jsx)(n.code,{children:"/scratch/$USER/projects/project1"}),") in this example."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"RENV_PATHS_ROOT=/scratch/<USER_NETID>/.cache/R/renv\n"})}),"\n",(0,t.jsx)(n.h3,{id:"init-renv",children:"Init renv"}),"\n",(0,t.jsxs)(n.p,{children:["The renv package is already installed for module ",(0,t.jsx)(n.code,{children:"r/gcc/4.4.0"}),". You need to install it yourself if you use other R module version"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-R",children:'## Do this if renv is not available (already installed for r/gcc/4.4.0)\n# install.packages("renv")  ## By default this will install renv package into a sub-directory within your home directory\n\n## init renv in project\'s directory\nrenv::init(".")\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Restart R for renv to take effect. Once you start R, your renv environment will be loaded automatically."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-R",children:"R version 4.4.0 (2024-04-24) -- \"Puppy Cup\"\n...\n\n* Project '/scratch/$USER/projects/project1' loaded. [renv 1.0.7]\n"})}),"\n",(0,t.jsx)(n.h3,{id:"check",children:"Check"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"You can check your library paths with the .libPaths() command"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-R",children:'> .libPaths()\n[1] "/scratch/$USER/projects/project1/renv/library/R-4.1/x86_64-pc-linux-gnu"\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"You can check where the cache is set with the following:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-R",children:'renv::paths$cache()\n#[1] "/home/$USER/.cache/R/renv/cache/v5/R-4.1/x86_64-pc-linux-gnu"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"addremove-etc-packages",children:"Add/remove, etc. packages"}),"\n",(0,t.jsx)(n.p,{children:"Install a package, such as reshape2. Below we can see it is not yet installed and then install it."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-R",children:'R\nlibrary(reshape2)\n\nError in library(reshape2) : there is no package called \u2018reshape2\u2019\ninstall.packages("reshape2")\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"You must be in the project1 directory for renv to load your project and the appropriate personal environment that you have created. If you want to copy your environment to a new location, use the bundle package, as shown below."})}),"\n",(0,t.jsx)(n.p,{children:"Test R file"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-R",children:'print("hello")\nrenv::restore()\nlibrary(reshape2)\nnames(airquality) <- tolower(names(airquality))\nhead(airquality)\naql <- melt(airquality)\nprint("hello again")\n'})}),"\n",(0,t.jsx)(n.p,{children:"For testing run it as"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-R",children:"srun --pty /bin/bash\n\nRscript test.R\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Your ",(0,t.jsx)(n.code,{children:".Rprofile"})," file will include line ",(0,t.jsx)(n.code,{children:'source("renv/activate.R")'})]})}),"\n",(0,t.jsx)(n.p,{children:"The file will output the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-R",children:'[1] "hello"\n* The library is already synchronized with the lockfile.\n  ozone solar.r wind temp month day\n1    41     190  7.4   67     5   1\n2    36     118  8.0   72     5   2\n3    12     149 12.6   74     5   3\n4    18     313 11.5   62     5   4\n5    NA      NA 14.3   56     5   5\n6    28      NA 14.9   66     5   6\nNo id variables; using all as measure variables\n[1] "hello again"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"clean-up",children:"Clean up"}),"\n",(0,t.jsx)(n.p,{children:"Keep only the packages that you use in this particular project (not all the packages available on the system)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-R",children:"R # launch R\nrenv::clean() # remove packages not recorded in the lockfile from the target library\n"})}),"\n",(0,t.jsx)(n.h3,{id:"recommended-workflow",children:"Recommended Workflow"}),"\n",(0,t.jsx)(n.p,{children:"The general workflow when working with renv is:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Call ",(0,t.jsx)(n.code,{children:"renv::init()"})," to initialize a new project-local environment with a private R library,"]}),"\n",(0,t.jsx)(n.li,{children:"Work in the project as normal, installing and removing new R packages as they are needed in the project,"}),"\n",(0,t.jsxs)(n.li,{children:["Call ",(0,t.jsx)(n.code,{children:"renv::snapshot()"})," to save the state of the project library to the lockfile (called ",(0,t.jsx)(n.code,{children:"renv.lock"}),"),","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["By default, ",(0,t.jsx)(n.code,{children:"renv::snapshot()"})," will only capture packages listed in your R scripts within the R Project. For more options read the ",(0,t.jsxs)(n.a,{href:"https://rstudio.github.io/renv/reference/snapshot.html",children:[(0,t.jsx)(n.code,{children:"renv::snapshot()"})," documentation"]}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Continue working on your project, installing and updating R packages as needed."}),"\n",(0,t.jsxs)(n.li,{children:["If needed, call ",(0,t.jsx)(n.code,{children:"renv::restore()"})," to revert to the previous state as encoded in the lockfile if your attempts to update packages introduced some new problems."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"renv::init()"})," function attempts to ensure the newly-created project library includes all R packages currently used by the project. It does this by crawling R files within the project for dependencies with the ",(0,t.jsx)(n.code,{children:"renv::dependencies()"})," function. The discovered packages are then installed into the project library with the ",(0,t.jsx)(n.code,{children:"renv::hydrate()"})," function, which will also attempt to save time by copying packages from your user library (rather than reinstalling from CRAN) as appropriate."]}),"\n",(0,t.jsxs)(n.p,{children:["Calling ",(0,t.jsx)(n.code,{children:"renv::init()"})," will also write out the infrastructure necessary to automatically load and use the private library for new R sessions launched from the project root directory. This is accomplished by creating (or amending) a project-local ",(0,t.jsx)(n.code,{children:".Rprofile"})," with the necessary code to load the project when the R session is started."]}),"\n",(0,t.jsxs)(n.p,{children:["If you\u2019d like to initialize a project without attempting dependency discovery and installation \u2013 that is, you\u2019d prefer to manually install the packages your project requires on your own \u2013 you can use ",(0,t.jsx)(n.code,{children:"renv::init(bare = TRUE)"})," to initialize a project with an empty project library."]}),"\n",(0,t.jsx)(n.h2,{id:"use-with-sbatch",children:"Use with sbatch"}),"\n",(0,t.jsx)(n.p,{children:"When you launch a job with sbatch,  R will check if there is renv directory, and if renv is on it will pick up packages, installed using renv in the current directory."}),"\n",(0,t.jsx)(n.p,{children:"Before you launch sbatch job, you need to make sure your project renv environment is ready, as outlined in the previous section."}),"\n",(0,t.jsx)(n.h3,{id:"store-and-share-your-r-projects-r-version-and-r-package-versions",children:"Store and Share your R Project's R version and R Package Versions"}),"\n",(0,t.jsx)(n.h4,{id:"reproduce-environment",children:"Reproduce Environment"}),"\n",(0,t.jsx)(n.p,{children:"If you already have file renv.lock or bundle file skip step 1"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"In the original location (your own laptop for example) go to project directory and execute\n(Make sure the whole path to project directory and names of your script files don't have empty spaces!)"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-R",children:'R\n# install.packages("renv")  ## if needed\nrenv::init()\nrenv::snapshot()\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Take file renv.lock and copy it to a new location for the project"}),"\n",(0,t.jsx)(n.li,{children:"At the new location - restore environment: go to directory of the project and execute. (Make sure version of R is the same)"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-R",children:"## Reproduce environment\nmodule purge\nmodule load r/gcc/4.4.0\nR\nrenv::restore()\nrenv::init()\n"})}),"\n",(0,t.jsx)(n.p,{children:"renv will install/compile what is needed on any system (Linux, Windows, etc). You can share your code with other researchers no matter what system they use. However, you should be careful that the same version of R is used between systems."}),"\n",(0,t.jsx)(n.h4,{id:"what-to-savepublishcommit-with-git",children:"What to save/publish/commit with Git"}),"\n",(0,t.jsx)(n.p,{children:"In order to have your work reproducible by you or/and others, save and/or commit your code in git, please including"}),"\n",(0,t.jsx)(n.p,{children:"renv.lock (which lists all packages and versions that you use including the version of R)"}),"\n",(0,t.jsx)(n.h4,{id:"migrating-from-packrat",children:"Migrating from Packrat"}),"\n",(0,t.jsxs)(n.p,{children:["The renv package has replaced the now deprecated Packrat package. The ",(0,t.jsx)(n.code,{children:"renv::migrate()"})," function makes it possible to migrate projects from Packrat to renv. See the ?migrate documentation for more details. In essence, calling ",(0,t.jsx)(n.code,{children:'renv::migrate("<project path>")'})," will be enough to migrate the Packrat library and lockfile such that they can then be used by renv."]}),"\n",(0,t.jsx)(n.h3,{id:"useful-links",children:"Useful links"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://rstudio.github.io/renv/articles/renv.html",children:"https://rstudio.github.io/renv/articles/renv.html"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},3881:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>s});var i=r(8101);const t={},a=i.createContext(t);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);