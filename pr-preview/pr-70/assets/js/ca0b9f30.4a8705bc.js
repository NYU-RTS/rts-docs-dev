"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1361],{6653:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"hpc/tools_and_software/sqlite_handling_large_structured_data","title":"SQLite: Handling Large Structured Data","description":"Overview","source":"@site/docs/hpc/06_tools_and_software/07_sqlite_handling_large_structured_data.md","sourceDirName":"hpc/06_tools_and_software","slug":"/hpc/tools_and_software/sqlite_handling_large_structured_data","permalink":"/rts-docs-dev/pr-preview/pr-70/docs/hpc/tools_and_software/sqlite_handling_large_structured_data","draft":false,"unlisted":false,"editUrl":"https://github.com/NYU-ITS/rts-docs-dev/blob/main/docs/hpc/06_tools_and_software/07_sqlite_handling_large_structured_data.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{},"sidebar":"hpcSidebar","previous":{"title":"Singularity: Run Custom Applications with Containers","permalink":"/rts-docs-dev/pr-preview/pr-70/docs/hpc/tools_and_software/singularity_run_custom_applications_with_containers"},"next":{"title":"Apptainer/Singularity","permalink":"/rts-docs-dev/pr-preview/pr-70/docs/hpc/containers/intro"}}');var s=t(5105),a=t(3881);const l={},r="SQLite: Handling Large Structured Data",o={},d=[{value:"Overview",id:"overview",level:2},{value:"Some use-cases",id:"some-use-cases",level:3},{value:"Benefits:",id:"benefits",level:3},{value:"Major benefits of SQLite compared to MySQL (PostgreSQL, etc)",id:"major-benefits-of-sqlite-compared-to-mysql-postgresql-etc",level:3},{value:"Limits",id:"limits",level:3},{value:"Command line (CLI) example",id:"command-line-cli-example",level:2},{value:"R example",id:"r-example",level:2},{value:"Install",id:"install",level:3},{value:"Use",id:"use",level:3},{value:"Alternative: read csv file to SQLite directly",id:"alternative-read-csv-file-to-sqlite-directly",level:3},{value:"UI for SQLite - SQLiteStudio",id:"ui-for-sqlite---sqlitestudio",level:2}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"sqlite-handling-large-structured-data",children:"SQLite: Handling Large Structured Data"})}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(n.p,{children:["Storing your data in the ",(0,s.jsx)(n.a,{href:"https://www.sqlite.org/index.html",children:"SQLite"})," format allows you to get benefits of a database, and at the same time the simplicity of storage of data in a file on a disk."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["SQLite is the ",(0,s.jsx)(n.a,{href:"https://www.sqlite.org/mostdeployed.html",children:"most used"})," database engine in the world. SQLite is built into all mobile phones and most computers and comes bundled inside countless other applications that people use every day. The SQLite ",(0,s.jsx)(n.a,{href:"https://www.sqlite.org/fileformat2.html",children:"file format"})," is stable, cross-platform, and backwards compatible and the developers pledge to keep it that way through at least the year 2050."]}),"\n",(0,s.jsxs)(n.p,{children:["-- ",(0,s.jsx)(n.a,{href:"https://www.sqlite.org/index.html",children:"SQLite website"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"some-use-cases",children:"Some use-cases"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"You think you need MySQL, PostreSQL, etc for your ML project. Usually you don't"}),"\n",(0,s.jsx)(n.li,{children:"You have to deal with hundreds of GB of table-stuctured data (or larger) and your script (for whatever reason) can't be made parallel."}),"\n",(0,s.jsx)(n.li,{children:"You would request a lot of RAM and work with data slowly."}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"This would be a waste of RAM."})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"It is better in this case to request smaller amount of RAM and read data (efficiently) from disk - for example using SQLite"})}),"\n",(0,s.jsx)(n.h3,{id:"benefits",children:"Benefits:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"You are not limited by RAM any longer"}),"\n",(0,s.jsx)(n.li,{children:"Compared to other file formats SQLite is very good in selecting certain lines (especially if you use indexing)"}),"\n",(0,s.jsxs)(n.li,{children:["You can use familiar dplyr syntax or execute SQL queries directly","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://dplyr.tidyverse.org/",children:"dplyr"})," is an interface for working with data in a database, not for modifying remote tables."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://dbi.r-dbi.org/",children:"DBI package"})," allows to both read and modify tables"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["SQLite is ",(0,s.jsx)(n.a,{href:"https://www.sqlite.org/speed.html",children:"actually faster for common data analysis tasks"})," than other popular databases."]}),"\n",(0,s.jsx)(n.li,{children:"You can have multiple threads accessing an SQLite database simultaneously (for read operations. Writing is more tricky)"}),"\n",(0,s.jsx)(n.li,{children:"Merging/Joining datasets on disk"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"major-benefits-of-sqlite-compared-to-mysql-postgresql-etc",children:"Major benefits of SQLite compared to MySQL (PostgreSQL, etc)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"You control your own data (sqlite file). You don't depend on any service like MySQL"}),"\n",(0,s.jsx)(n.li,{children:"You can copy a file to your own laptop and work with it"}),"\n",(0,s.jsxs)(n.li,{children:["Again, ",(0,s.jsx)(n.a,{href:"https://www.sqlite.org/speed.html",children:"SQLite is faster"}),"!"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"limits",children:"Limits"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"SQLite has some limitations in terms of concurrency, which usually don't apply for typical ML/AI jobs."}),"\n",(0,s.jsxs)(n.li,{children:["See ",(0,s.jsx)(n.a,{href:"https://medium.com/@gwendal.roue/four-different-ways-to-handle-sqlite-concurrency-db3bcc74d00e",children:"Four Different Ways To Handle SQLite Concurrency"})," for more information."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"command-line-cli-example",children:"Command line (CLI) example"}),"\n",(0,s.jsx)(n.p,{children:"Create environment"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"mkdir projects/sqlite-test\ncd projects/sqlite-test\nconda create -p ./cenv\nconda activate ./cenv\nconda install -y sqlite\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then ",(0,s.jsx)(n.a,{href:"https://sqlite.org/cli.html",children:"follow this SQLite example"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"sqlite3 db_file.sqlite\ncreate table tbl1(one varchar(10), two smallint);\ninsert into tbl1 values('hello!',10);\ninsert into tbl1 values('goodbye', 20);\nselect * from tbl1;\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now Close session (Ctrl-D)."}),"\n",(0,s.jsx)(n.p,{children:"Reopen session to check if changes are saved"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"sqlite3 db_file.sqlite\nselect * from tbl1;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"r-example",children:"R example"}),"\n",(0,s.jsx)(n.h3,{id:"install",children:"Install"}),"\n",(0,s.jsx)(n.p,{children:"Here we use conda, as a great way to keep everything isolated and reproducible."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"conda will install pre-compiled packages. Which is good (faster) and bad (not fully optimized for a specific hardware)"})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["Alternative: install packages to a local directory or use renv as described in ",(0,s.jsx)(n.a,{href:"/rts-docs-dev/pr-preview/pr-70/docs/hpc/tools_and_software/r_packages_with_renv",children:"R Packages with renv"})]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"mkdir /scratch/$USER/projects/myTempProject\ncd  /scratch/$USER/projects/myTempProject\n\nmodule load anaconda3/2020.07\n\nconda create -p ./cenv -c conda-forge r=4.1\nconda activate ./cenv\nconda install -c r r-rsqlite\nconda install -c r r-tidyverse\nconda install -c conda-forge r-remotes\nconda install -c r r-feather\nconda install -c r r-nycflights13\n"})}),(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/r-dbi/RSQLite/issues/268",children:"window functions (row_number in particular) require newer version of rsqlite"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-R",children:'R\nremotes::install_github("r-dbi/RSQLite")\n## update ALL\n'})})]})]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"Save list of installed packages for reproducibility"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"## conda list --export > requirements.txt\n"})})]}),"\n",(0,s.jsx)(n.h3,{id:"use",children:"Use"}),"\n",(0,s.jsx)(n.p,{children:"Many examples can be found here:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://solutions.posit.co/connections/db/databases/sqlite/",children:"SQL syntax"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://solutions.posit.co/connections/db/r-packages/dplyr/",children:"dplyr syntax"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-R",children:'library(tidyverse)\nlibrary(DBI)\n# Create RSQLite database file with name "allData"\ncon <- dbConnect(RSQLite::SQLite(), "allData")\n'})}),"\n",(0,s.jsx)(n.p,{children:"Copy data frame to database (dplyr)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-R",children:'copy_to(con, nycflights13::flights, "fl", temporary=FALSE)\n'})}),"\n",(0,s.jsx)(n.p,{children:"Or copy data to database using DBI"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-R",children:'dbCreateTable(con, "fl", nycflights13::flights, temporary = FALSE)\ndbAppendTable(con, "fl", nycflights13::flights)\n'})}),"\n",(0,s.jsx)(n.p,{children:"Connect to a specific table"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-R",children:'dbListTables(con)\ndf_con <- tbl(con, "fl")\n## check number of rows\ndf_con %>% count()\n'})}),"\n",(0,s.jsx)(n.p,{children:"Subset"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-R",children:"df_temp <- df_con %>% filter( row_number() %in%  c(1, 3) ) %>% collect\n"})}),"\n",(0,s.jsx)(n.p,{children:"Save as feather"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-R",children:'feather::write_feather(df_temp, paste0("file_", ind, ".feather"))\n'})}),"\n",(0,s.jsx)(n.h3,{id:"alternative-read-csv-file-to-sqlite-directly",children:"Alternative: read csv file to SQLite directly"}),"\n",(0,s.jsx)(n.p,{children:"If you already have a large csv file on disk, and you don't want to read it to RAM, you can read it to SQLite file directly"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-R",children:'conda install -c conda-forge r-sqldf \nR\nlibrary(sqldf)\n## create data file\nsqldf("attach allData as new")\n## read file directly from csv to sqlite\nread.csv.sql(file = "test.tab", sql = "create table states_data as select * from file", dbname = "allData")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ui-for-sqlite---sqlitestudio",children:"UI for SQLite - SQLiteStudio"}),"\n",(0,s.jsxs)(n.p,{children:["Once you have SQLite file, you can easily transfer it to your own laptop and explore it using ",(0,s.jsx)(n.a,{href:"https://sqlitestudio.pl/",children:"SQLiteStudio"}),", if you like to use UI instead of terminal"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},3881:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var i=t(8101);const s={},a=i.createContext(s);function l(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);