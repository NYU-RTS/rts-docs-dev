"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3570],{809:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"hpc/storage/large_number_of_small_files","title":"Large Number of Small Files","description":"Motivation","source":"@site/docs/hpc/03_storage/07_large_number_of_small_files.md","sourceDirName":"hpc/03_storage","slug":"/hpc/storage/large_number_of_small_files","permalink":"/rts-docs-dev/pr-preview/pr-76/docs/hpc/storage/large_number_of_small_files","draft":false,"unlisted":false,"editUrl":"https://github.com/NYU-ITS/rts-docs-dev/blob/main/docs/hpc/03_storage/07_large_number_of_small_files.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{},"sidebar":"hpcSidebar","previous":{"title":"Best Practices on HPC Storage","permalink":"/rts-docs-dev/pr-preview/pr-76/docs/hpc/storage/best_practices"},"next":{"title":"HPC Storage System Status","permalink":"/rts-docs-dev/pr-preview/pr-76/docs/hpc/storage/system_status"}}');var t=i(5105),r=i(3881);const o={},a="Large Number of Small Files",l={},h=[{value:"Motivation",id:"motivation",level:2},{value:"Squash file system to be used with Singularity",id:"squash-file-system-to-be-used-with-singularity",level:2},{value:"Use jpg/png files on disk",id:"use-jpgpng-files-on-disk",level:2},{value:"SLURM_TMPDIR",id:"slurm_tmpdir",level:2},{value:"SLURM_RAM_TMPDIR",id:"slurm_ram_tmpdir",level:2},{value:"Binary files (pickle, etc)",id:"binary-files-pickle-etc",level:2},{value:"Container files, one-file databases",id:"container-files-one-file-databases",level:2},{value:"SQLite",id:"sqlite",level:3},{value:"HDF5",id:"hdf5",level:3},{value:"LMDB",id:"lmdb",level:3},{value:"Formats inside HDF5/LMDB: binary, numpy, other..",id:"formats-inside-hdf5lmdb-binary-numpy-other",level:4},{value:"Other formats",id:"other-formats",level:4},{value:"Example Code",id:"example-code",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"large-number-of-small-files",children:"Large Number of Small Files"})}),"\n",(0,t.jsx)(s.h2,{id:"motivation",children:"Motivation"}),"\n",(0,t.jsxs)(s.p,{children:["Many datasets contain a large number of files (for example ",(0,t.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/ImageNet",children:"ImageNet"})," contains 14 million images, with ~150 GB size). How to deal with this data? How to store it? How to use for computations? Long-term storage of data is not an issue - an archive like tar.gz can handle this pretty well. However, when you want to use data in computations, the performance may depend on how you handle the data on disk."]}),"\n",(0,t.jsx)(s.p,{children:"Here are some ideas you can try and evaluate performance for your own project"}),"\n",(0,t.jsx)(s.h2,{id:"squash-file-system-to-be-used-with-singularity",children:"Squash file system to be used with Singularity"}),"\n",(0,t.jsxs)(s.p,{children:["Please read ",(0,t.jsx)(s.a,{href:"/rts-docs-dev/pr-preview/pr-76/docs/hpc/containers/squash_file_system_and_singularity",children:"here"})]}),"\n",(0,t.jsx)(s.h2,{id:"use-jpgpng-files-on-disk",children:"Use jpg/png files on disk"}),"\n",(0,t.jsx)(s.p,{children:"One option is to store image files (like png or jpg) on the disk and read from disk directly."}),"\n",(0,t.jsx)(s.p,{children:"An issue with this approach, is that many linux file system can hold only a limited number of files."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"# One can open greene cluster and run the following command\n$ df -ih /scratch/\nFilesystem                               Inodes IUsed IFree IUse% Mounted on\n10.0.0.40@o2ib:10.0.0.41@o2ib:/scratch1   1.6G  209M  1.4G   14% /scratch\n"})}),"\n",(0,t.jsx)(s.p,{children:"This shows us that the total number of files '/scratch' can hold  (currently) is about 1.6 G. This looks like a large number. But let us translate this into number of datasets like ImageNet (14 mil images) -> 100 datasets like that would almost fully occupy Total possible slots for files! This is a problem!"}),"\n",(0,t.jsx)(s.p,{children:"And even if you can ignore this on your own PC, on HPC, there is a limit of files each user can put on /scratch to prevent such problems."}),"\n",(0,t.jsxs)(s.p,{children:["This is the reason why you just can't extract all those files in ",(0,t.jsx)(s.code,{children:"/scratch"})]}),"\n",(0,t.jsx)(s.h2,{id:"slurm_tmpdir",children:"SLURM_TMPDIR"}),"\n",(0,t.jsxs)(s.p,{children:["Another option would be to start SLURM job and extract everything into ",(0,t.jsx)(s.code,{children:"$SLURM_TMPDIR"}),". This can work, but would require to do un-tar every time you run SLURM command."]}),"\n",(0,t.jsx)(s.h2,{id:"slurm_ram_tmpdir",children:"SLURM_RAM_TMPDIR"}),"\n",(0,t.jsxs)(s.p,{children:["You can also use the custom-made RAM mapped disk using ",(0,t.jsx)(s.code,{children:"#SLURM_RAM_TMPDIR"})," while submitting the job. In this case when you start a job you first un-tar your files to ",(0,t.jsx)(s.code,{children:"$SLURM_RAM_TMPDIR"})," and then read from there. This basically requires you to use 2*(size of the data) size of RAM just to hold the data."]}),"\n",(0,t.jsx)(s.h2,{id:"binary-files-pickle-etc",children:"Binary files (pickle, etc)"}),"\n",(0,t.jsx)(s.p,{children:"Store data in some binary file (say pickle in Python) which you load fully when you start SLURM job."}),"\n",(0,t.jsx)(s.p,{children:"This option may require a lot of RAM - thus you may have to wait a long time for scheduler to find resources for your job. Also this approach would not work on regular PC without so much RAM, and thus your scripts are not transferable."}),"\n",(0,t.jsx)(s.h2,{id:"container-files-one-file-databases",children:"Container files, one-file databases"}),"\n",(0,t.jsx)(s.p,{children:"Special containers, which allow to either load data fast fully or access chosen elements without loading the whole dataset into RAM."}),"\n",(0,t.jsx)(s.h3,{id:"sqlite",children:"SQLite"}),"\n",(0,t.jsx)(s.p,{children:"If you have structured data, a good option would be to use SQLite. Please refer to this page for more information"}),"\n",(0,t.jsx)(s.h3,{id:"hdf5",children:"HDF5"}),"\n",(0,t.jsx)(s.p,{children:'One can think about HDF5 file as a "container file" (database of a sort), which holds a lot of objects inside.'}),"\n",(0,t.jsx)(s.p,{children:"HDF5 files do not have a file size limitation, and can hold huge number of objects inside, providing fast read/write access to those objects."}),"\n",(0,t.jsx)(s.p,{children:"It is easy to learn how to subset data and load to RAM only to those data objects that you need."}),"\n",(0,t.jsx)(s.p,{children:"More info:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://www.hdfgroup.org/",children:"Developers website"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://www.oreilly.com/library/view/python-and-hdf5/9781491944981/",children:"book (free with NYU email)"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://www.h5py.org/",children:"hdf5 in Python"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://www.bioconductor.org/packages/release/bioc/vignettes/rhdf5/inst/doc/rhdf5.html",children:"hdf5 in R"})}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"hdf5 supports reading and writing in parallel, so you can use several nodes reading from the same file."}),"\n",(0,t.jsxs)(s.p,{children:["More info: ",(0,t.jsx)(s.a,{href:"https://support.hdfgroup.org/documentation/index.html",children:"Documentation"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/HDFGroup/hdf5-tutorial",children:"Tutorial"}),", ",(0,t.jsx)(s.a,{href:"https://hdfgroup.atlassian.net/servicedesk/customer/portal/6/user/login?destination=portal%2F6",children:"Help Desk"})]}),"\n",(0,t.jsx)(s.h3,{id:"lmdb",children:"LMDB"}),"\n",(0,t.jsx)(s.p,{children:"LMDB (Lightning Memory-Mapped Database) is a light-weight, high-speed embedded database for key-value data."}),"\n",(0,t.jsx)(s.p,{children:"Essentially, this is a large file sitting on the disk that contains a lot of smaller objects inside."}),"\n",(0,t.jsx)(s.p,{children:"This is a memory-mapped database meaning, file can be larger than RAM. OS is responsible for managing the pages (like caching frequently uses pages)."}),"\n",(0,t.jsx)(s.p,{children:"For practical use it means: say you have 10 GB of RAM, and LMDB file of 100 GB. When you connect to this file, OS may deside to load 5GB to RAM, and the rest 95GB will be attached as virtual memory. PRINCE does not have limit for virtual memory. Of course, if your RAM is larger than LMDB file, this database will perform the best, as OS will have enough resources to keep what is needed directly in RAM."}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["when you write key-value pairs to LMDB they have to be byte-encoded. For example, if you use Python you can use: for string ",(0,t.jsx)(s.code,{children:"st.encode()"}),", for np.array use ",(0,t.jsx)(s.code,{children:"ar.tobytes()"}),", or in general ",(0,t.jsx)(s.code,{children:"pickle.dumps()"})]})}),"\n",(0,t.jsxs)(s.p,{children:["Problem with large number of files: LMDB uses ",(0,t.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/B-tree",children:"B Tree"}),", which has O(long n) complexity for search."]}),"\n",(0,t.jsx)(s.p,{children:"Thus, when number of elements in LMDB becomes really big, search of specific element slows down considerably"}),"\n",(0,t.jsx)(s.p,{children:"More info:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://www.symas.com/mdb",children:"Developer website"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://lmdb.readthedocs.io/en/release/",children:"Python package for lmd"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/richfitz/thor",children:"R package for lmdb"})}),"\n",(0,t.jsxs)(s.li,{children:["Deep Learning","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://stackoverflow.com/questions/37337523/how-do-you-load-an-lmdb-file-into-tensorflow",children:"Tensorflow with LMDB example"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://discuss.pytorch.org/t/whats-the-best-way-to-load-large-data/2977/2",children:"Pytorch with LMDB example"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"LMDB supports reading by many readers and many parallel thread from the same file"}),"\n",(0,t.jsx)(s.h4,{id:"formats-inside-hdf5lmdb-binary-numpy-other",children:"Formats inside HDF5/LMDB: binary, numpy, other.."}),"\n",(0,t.jsx)(s.p,{children:"One can store data in different way inside LMDB or HDF5. For example we can store binary representation of jpeg, or we can store python numpy array. In the first case file can be read from any language, in the second - only from Python. We can also store objects from other languages - for example tibble in R"}),"\n",(0,t.jsx)(s.h4,{id:"other-formats",children:"Other formats"}),"\n",(0,t.jsxs)(s.p,{children:["There are other formats like ",(0,t.jsx)(s.a,{href:"http://bcolz.blosc.org/",children:"Bcolz"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/alimanfoo/zarr-python",children:"Zarr"}),", and others. Some examples can be found ",(0,t.jsx)(s.a,{href:"https://alimanfoo.github.io/2016/04/14/to-hdf5-and-beyond.html",children:"here"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"example-code",children:"Example Code"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["A benchmarking of various ways of reading data was performed on now retired Prince HPC cluster. You can find the code used to perform that benchmarking and the results ",(0,t.jsx)(s.a,{href:"https://github.com/nyuhpc/public_ml/tree/master/Data_read_benchmarking",children:"at this repository"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["For those of you interested in using multiple cores for data reading, ",(0,t.jsx)(s.a,{href:"https://github.com/nyuhpc/public_ml/blob/master/Data_read_benchmarking/TextImages/read_benchmarks/read_parallel.py",children:"this code example below may be useful"}),".","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Multiple cores on the same node are used. Parallelization is based on ",(0,t.jsx)(s.code,{children:"joblib"})," Python module"]}),"\n"]}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},3881:(e,s,i)=>{i.d(s,{R:()=>o,x:()=>a});var n=i(8101);const t={},r=n.createContext(t);function o(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);