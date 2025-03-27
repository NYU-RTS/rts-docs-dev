"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4400],{6111:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"hpc/tools_and_software/singularity_run_custom_applications_with_containers","title":"Singularity: Run Custom Applications with Containers","description":"What is Singularity","source":"@site/docs/hpc/06_tools_and_software/06_singularity_run_custom_applications_with_containers.md","sourceDirName":"hpc/06_tools_and_software","slug":"/hpc/tools_and_software/singularity_run_custom_applications_with_containers","permalink":"/rts-docs-dev/pr-preview/pr-71/docs/hpc/tools_and_software/singularity_run_custom_applications_with_containers","draft":false,"unlisted":false,"editUrl":"https://github.com/NYU-ITS/rts-docs-dev/blob/main/docs/hpc/06_tools_and_software/06_singularity_run_custom_applications_with_containers.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{},"sidebar":"hpcSidebar","previous":{"title":"Software on Greene","permalink":"/rts-docs-dev/pr-preview/pr-71/docs/hpc/tools_and_software/software_on_greene"},"next":{"title":"Apptainer/Singularity","permalink":"/rts-docs-dev/pr-preview/pr-71/docs/hpc/containers/intro"}}');var a=i(5105),r=i(3881);const s={},o="Singularity: Run Custom Applications with Containers",l={},c=[{value:"What is Singularity",id:"what-is-singularity",level:2},{value:"why do we use Singularity",id:"why-do-we-use-singularity",level:2},{value:"how to run a singularity container",id:"how-to-run-a-singularity-container",level:2},{value:"How to Create a Singularity Container",id:"how-to-create-a-singularity-container",level:2},{value:"Singularity vs Docker",id:"singularity-vs-docker",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"singularity-run-custom-applications-with-containers",children:"Singularity: Run Custom Applications with Containers"})}),"\n",(0,a.jsx)(n.h2,{id:"what-is-singularity",children:"What is Singularity"}),"\n",(0,a.jsx)(n.p,{children:"Singularity is a container based Linux kernel workspace that works just like docker.  You can run pre-built programs in containers without having to worry about the pre-install environment."}),"\n",(0,a.jsx)(n.p,{children:"For users who are familiar with Docker containers, Singularity works very similarly, and can even run Docker containers."}),"\n",(0,a.jsxs)(n.p,{children:["For a detailed introduction on Singularity, visit their official site ",(0,a.jsx)(n.a,{href:"https://apptainer.org/documentation/",children:"here"})]}),"\n",(0,a.jsx)(n.h2,{id:"why-do-we-use-singularity",children:"why do we use Singularity"}),"\n",(0,a.jsx)(n.p,{children:"There are multiple reasons to use Singularity on the HPC clusters:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Security: Singularity provides a layer of security as it does not require any root access on our clusters. This makes it safer against malware and bad scripts that might jeopardize the outer system. Thus we only support Singularity on our clusters(there are not other options such as Kubernetes or Docker on our clusters right now)"}),"\n",(0,a.jsx)(n.li,{children:"Containerization: Singularity will run all your images(packaged and pre-built programs) inside of its containers, each container works like a small vm. They contain all the required environment and files of a single Linux kernel and you don't have to worry about any pre-installation nonsense"}),"\n",(0,a.jsx)(n.li,{children:"Inter-connectivity: Containers are able to talk to each other, as well as the home system, so while each container has its own small space, they are still a part of a big interconnected structure. Thus enabling you to connect your programs."}),"\n",(0,a.jsx)(n.li,{children:"Accessibility: Probably the most important feature of all, Singularity allows you to run your program in 2 to 3 simple steps, as shown in the topic how to run a singularity container."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"how-to-run-a-singularity-container",children:"how to run a singularity container"}),"\n",(0,a.jsx)(n.p,{children:"There are 3 steps to run a Singularity container on our clusters:"}),"\n",(0,a.jsx)(n.p,{children:"pulling a image from Singularity hub or Docker hub"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"$ singularity pull <image name>\n# image name can be for example shub://vsoch/hello-world or docker://godlovedc/lolcow\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"singularity1",src:i(3945).A+"",width:"1280",height:"142"})}),"\n",(0,a.jsx)(n.p,{children:"build the image"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"$ singularity build <a name of your choosing>.simg:rw <image name>\n# the image name can be a local image or an image from a hub\n"})}),"\n",(0,a.jsxs)(n.p,{children:["We add the ",":rw",' tag at the end of the .simg to explicitly give it "read and write" permissions while building.']}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"singularity2",src:i(8802).A+"",width:"1280",height:"224"})}),"\n",(0,a.jsx)(n.p,{children:"You can now run your container using the built image:"}),"\n",(0,a.jsx)(n.p,{children:"run container"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"# this is one way of running a container\n$ singularity run <image name>.simg:ro\n# this is another way to run a container\n$ ./<image name>.simg:ro\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Unlike in the build phase, we add the ",":ro",' tag which means "read only" - as we are now just executing the image, not building it, and thus do not need it to be written. Writing access causes the Singularity image to be locked and it can become inaccessible while it is in read/write mode, so read only mode is best for executing commands.']}),"\n",(0,a.jsx)(n.p,{children:"running this would yield a menu for output:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"singularity3",src:i(7803).A+"",width:"1280",height:"365"})}),"\n",(0,a.jsx)(n.p,{children:"go into container"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"singularity shell <image name>.simg:ro\n# after this step, you will be going into the container and start your programming\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"singularity4",src:i(4212).A+"",width:"1280",height:"366"})}),"\n",(0,a.jsx)(n.p,{children:"you can run commands for the container using exec arguments without actually going into the container"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"$ singularity exec <image name>.simg:ro <commands>\n# adding commands to the back will return the display result of these commands in the container without actually going into the container\n"})}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"singularity5",src:i(365).A+"",width:"1280",height:"115"})}),"\n",(0,a.jsx)(n.p,{children:"That's it! Now you're good to go and can just use these simple steps to run singularity images and run your programs"}),"\n",(0,a.jsxs)(n.p,{children:["For full information and documentation on Singularity, visit their site ",(0,a.jsx)(n.a,{href:"https://sylabs.io/docs/",children:"here"})]}),"\n",(0,a.jsx)(n.h2,{id:"how-to-create-a-singularity-container",children:"How to Create a Singularity Container"}),"\n",(0,a.jsx)(n.p,{children:"So what if you want to create an image from your container and save it for a rainy day?"}),"\n",(0,a.jsxs)(n.p,{children:["The instructions are ",(0,a.jsx)(n.a,{href:"https://apptainer.org/documentation/",children:"here"})," for your convenience, read through them to create your own Singularity container and package it into an image!"]}),"\n",(0,a.jsx)(n.p,{children:"For those that know how docker containers are built, you can build docker containers using the information here and upload them onto docker hub and pulling them using Singularity. Singularity supports all docker images!"}),"\n",(0,a.jsx)(n.h2,{id:"singularity-vs-docker",children:"Singularity vs Docker"}),"\n",(0,a.jsx)(n.p,{children:"Why are there so many mentions of Docker? The reason is that Singularity is essentially the same as Docker and you don't need to relearn Singularity if you already have experience with Docker. Now let's get into some pros and cons between the two programs."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Docker is more accepted commercially than Singularity. You can download and run Docker on your own computer with any operating system and build containers with ease while Singularity is used in a more academic setting. Singularity only supports Linux operating systems and cannot run on a windows linux kernel(your windows ubuntu), so it is much more limited."}),"\n",(0,a.jsx)(n.li,{children:"However, Docker requires root or admin access for the operating system it deploys on, and our clusters do not offer that access to any software that requires this criteria. Thus Docker is not available on the clusters and Singularity is."}),"\n",(0,a.jsx)(n.li,{children:"A silver lining in all of this is that Singularity fully supports docker images and you can do everything in docker and push your image to docker hub and pull them on the clusters. Thus making sure that you don't need to relearn Singularity all over again and can just use it through the simplest of commands in this wiki."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Good luck with Singularity, and have fun!"})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},3945:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/singularity1-25aa0987f620a7c3971e961c28006b05.png"},8802:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/singularity2-3a3ca2dd209f3766478b1bb8da34eed1.png"},7803:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/singularity3-28a8e48782cd3e10b0414813d0971711.png"},4212:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/singularity4-fc6d63dbcb7e6c8d3d81220bc1cd8b40.png"},365:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/singularity5-8d0e2d09aeae68e1ad42966a1e623782.png"},3881:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>o});var t=i(8101);const a={},r=t.createContext(a);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);