"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5882],{4112:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"genai/external_llms/llm_access","title":"Portkey","description":"Portkey is an enterprise-grade LLM gateway running on-prem:","source":"@site/docs/genai/02_external_llms/01_llm_access.mdx","sourceDirName":"genai/02_external_llms","slug":"/genai/external_llms/llm_access","permalink":"/rts-docs-dev/pr-preview/pr-68/docs/genai/external_llms/llm_access","draft":false,"unlisted":false,"editUrl":"https://github.com/NYU-ITS/rts-docs-dev/blob/main/docs/genai/02_external_llms/01_llm_access.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"genaiSidebar","previous":{"title":"Pythia","permalink":"/rts-docs-dev/pr-preview/pr-68/docs/genai/getting_started/intro"},"next":{"title":"LLM Catalogue","permalink":"/rts-docs-dev/pr-preview/pr-68/docs/genai/external_llms/catalogue"}}');var o=n(5105),s=n(3881);const a={},i="Portkey",l={},c=[{value:"Onboarding",id:"onboarding",level:2},{value:"Getting started with Portkey",id:"getting-started-with-portkey",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"portkey",children:"Portkey"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://portkey.ai/docs/introduction/what-is-portkey",children:"Portkey"})," is an enterprise-grade LLM gateway running on-prem:"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Portkey Architecture",src:n(7916).A+"",width:"2908",height:"2044"})}),"\n",(0,o.jsx)(t.p,{children:"Broadly it facilitates:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Route requests"})," via configurations that can allow for fallbacks, load balance, etc"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Observability"})," via the control pane that displays your usage statistics and logs. You can retrive your logs via an API."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Prompt management"})," via the prompt playground. You can compare the respone for a prompt across multiple LLMs, collaborate with your team and export your prompts."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Guardrails"})," usage by allowing you to define them or integrate with third party guardrails."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Agentic workflows"})," by integrating with various agentic frameworks like langchain, llamaindex, etc."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Security & Governance"})," by allowing you to set budget and rate limits on the API keys created for your workspace"]}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{title:"Gateway URL",type:"tip",children:(0,o.jsxs)(t.p,{children:["Whenever you instantiate a Portkey client, the ",(0,o.jsx)(t.code,{children:"base_url"})," must be set to ",(0,o.jsx)(t.code,{children:'base_url="https://ai-gateway.apps.cloud.rt.nyu.edu/v1/"'}),". If you miss this parameter you would be connecting to the vendor's SaaS platform and NYU provisioned virtual keys will not work."]})}),"\n",(0,o.jsx)(t.h2,{id:"onboarding",children:"Onboarding"}),"\n",(0,o.jsxs)(t.p,{children:["Send an email to ",(0,o.jsx)(t.code,{children:"genai-support@nyu.edu"})," to start the onboarding process."]}),"\n",(0,o.jsx)(t.h2,{id:"getting-started-with-portkey",children:"Getting started with Portkey"}),"\n",(0,o.jsxs)(t.p,{children:["As part of the onboarding process, you would have received an invite which gives you access to a workspace. We will also add virtual keys for LLMs to your workspace as part of the onboarding process. Once you've accepted it, head over to ",(0,o.jsx)(t.code,{children:"https://app.portkey.ai/"})," and select the sign-in with Single Sign-On option and proceed with your NYU email address."]}),"\n",(0,o.jsx)(t.admonition,{title:"Access to Portkey is only permitted via NYU VPN",type:"danger",children:(0,o.jsx)(t.p,{children:"You need to be connected to the NYU VPN to access the Portkey LLM gateway. If you are not, your requests will timeout and result in connection errors."})}),"\n",(0,o.jsxs)(t.p,{children:["You will now be able to create an API key for yourself by access the ",(0,o.jsx)(t.code,{children:"API Keys"})," item on the left sidebar. With an API key and a virtual key at your disposal, you can now run the following script:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'from portkey_ai import Portkey\n\nportkey = Portkey(\n    base_url="https://ai-gateway.apps.cloud.rt.nyu.edu/v1/",\n    api_key="",  # Replace with your Portkey API key\n    virtual_key="",  # Replace with your virtual key for Google\n)\n\ncompletion = portkey.chat.completions.create(\n    messages=[\n        {"role": "system", "content": "You are not a helpful assistant"},\n        {"role": "user", "content": "Say this is a test"},\n    ],\n    model="gemini-2.0-flash-lite-preview-02-05",\n)\n\nprint(completion)\n'})}),"\n",(0,o.jsxs)(t.p,{children:["Once the script is executed, you can head back to ",(0,o.jsx)(t.code,{children:"app.portkey.ai"})," to view the logs for the call!"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},7916:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/portkey_arch-c4bb3b04daaab150a8acda8412665189.png"},3881:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var r=n(8101);const o={},s=r.createContext(o);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);