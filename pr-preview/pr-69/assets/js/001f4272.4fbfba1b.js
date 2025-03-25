"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3259],{8896:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"srde/dlp/dlp","title":"DLP Interpretation Guide","description":"Data Loss Prevention (DLP) is a tool provided by Google Cloud that automatically detects potentially sensitive information such as names, dates, social security numbers, credit card numbers, etc. As part of the SRDE egress process, we run a DLP scan to help the data steward more easily judge whether the data being exported is in compliance with the relevant data use agreement(s). The scan will flag any information it considers potentially sensitive, and it is up to the data steward to review the results and either approve the export or send it back to the researchers for further review.","source":"@site/docs/srde/03_dlp/dlp.mdx","sourceDirName":"srde/03_dlp","slug":"/srde/dlp/dlp","permalink":"/rts-docs-dev/pr-preview/pr-69/docs/srde/dlp/dlp","draft":false,"unlisted":false,"editUrl":"https://github.com/NYU-ITS/rts-docs-dev/blob/main/docs/srde/03_dlp/dlp.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"srdeSidebar","previous":{"title":"Best Practices","permalink":"/rts-docs-dev/pr-preview/pr-69/docs/srde/user_guide/best_practices"},"next":{"title":"About SRDE, projects and getting started","permalink":"/rts-docs-dev/pr-preview/pr-69/docs/srde/faq/basics"}}');var n=s(5105),r=s(3881);const o={},a="DLP Interpretation Guide",l={},d=[{value:"Viewing results from the DLP report",id:"viewing-results-from-the-dlp-report",level:2},{value:"Sample Queries: selecting a subset of flagged items",id:"sample-queries-selecting-a-subset-of-flagged-items",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"dlp-interpretation-guide",children:"DLP Interpretation Guide"})}),"\n",(0,n.jsx)(t.p,{children:"Data Loss Prevention (DLP) is a tool provided by Google Cloud that automatically detects potentially sensitive information such as names, dates, social security numbers, credit card numbers, etc. As part of the SRDE egress process, we run a DLP scan to help the data steward more easily judge whether the data being exported is in compliance with the relevant data use agreement(s). The scan will flag any information it considers potentially sensitive, and it is up to the data steward to review the results and either approve the export or send it back to the researchers for further review."}),"\n",(0,n.jsxs)(t.p,{children:["The DLP scan is triggered by the Egress_2 script as part of the ",(0,n.jsx)(t.a,{href:"/rts-docs-dev/pr-preview/pr-69/docs/srde/user_guide/data_transfers",children:"data egress process"}),". Once it is generated, you can explore the table of flagged items in BigQuery. First, open a query tab as shown in the screenshot below, and then use SQL queries like the examples in this guide to check specific items and view overall statistics on the table."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"DLP scan in BigQuery",src:s(1944).A+"",width:"1266",height:"740"})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"DLP is just a tool, and it is not infallible. Use your best judgment, and if you see results that look confusing, get in touch with the PI for clarification."})}),"\n",(0,n.jsx)(t.h2,{id:"viewing-results-from-the-dlp-report",children:"Viewing results from the DLP report"}),"\n",(0,n.jsx)(t.p,{children:"This query, the most basic, fetches the first 100 flagged items in the report."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"SELECT\n quote,\n info_type.name,\n info_type.sensitivity_score.score,\n likelihood\nFROM `your_table_name` LIMIT 100\n"})}),"\n",(0,n.jsx)(t.p,{children:"Each row of the report contains a great deal of metadata on where the potentially sensitive metadata was found, as well as metadata on the DLP scan itself, but here we select only the following four columns:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"quote"}),": the span of text that was flagged as sensitive info"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"info_type.name"}),": the type of sensitive info"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Info_type.sensitivity_score.score"}),": the sensitivity level (LOW, MODERATE, or HIGH)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"likelihood"}),": the confidence with which the DLP tool has flagged the item (POSSIBLE, LIKELY, or VERY_LIKELY)"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The results should look something like this. As you can see, the same piece of text may be flagged multiple times with different types, depending on the results of DLP\u2019s auto-detection algorithms.\n",(0,n.jsx)(t.img,{alt:"DLP query results",src:s(5426).A+"",width:"863",height:"364"})]}),"\n",(0,n.jsxs)(t.p,{children:["To see more results, you can adjust the value of the ",(0,n.jsx)(t.code,{children:"LIMIT"})," clause or remove it entirely. Alternatively, use some of the sample queries below to view targeted subsets of the data."]}),"\n",(0,n.jsx)(t.h2,{id:"sample-queries-selecting-a-subset-of-flagged-items",children:"Sample Queries: selecting a subset of flagged items"}),"\n",(0,n.jsx)(t.p,{children:"Select only high-sensitivity items"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:'SELECT quote, info_type.name, info_type.sensitivity_score.score, likelihood\nFROM `your_table_name`\nWHERE info_type.sensitivity_score.score = "SENSITIVITY_HIGH"\nLIMIT 100\n'})}),"\n",(0,n.jsx)(t.p,{children:"Select only items that are high-sensitivity and have a likelihood higher than \u201cpossible\u201d"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:'SELECT quote, info_type.name, info_type.sensitivity_score.score, likelihood\nFROM `your_table_name`\nWHERE info_type.sensitivity_score.score = "SENSITIVITY_HIGH"\nAND likelihood != "POSSIBLE"\nLIMIT 100\n'})}),"\n",(0,n.jsx)(t.p,{children:"Select all items, sorted by type"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"SELECT quote, info_type.name, info_type.sensitivity_score.score, likelihood\nFROM `your_table_name`\nORDER BY info_type.name\n"})}),"\n",(0,n.jsx)(t.p,{children:"Select all items of type PERSON_NAME, ordered alphabetically"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:'SELECT quote, info_type.name, info_type.sensitivity_score.score, likelihood\nFROM `your_table_name`\nWHERE info_type.name = "PERSON_NAME"\nORDER BY quote\n'})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},5426:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/dlp_query_results-da7f501dd8e25e2cc1fc80197a219507.png"},1944:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/dlp_scan_big_query-cfc60654ce0b07cd0ffceb8048d567bb.png"},3881:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>a});var i=s(8101);const n={},r=i.createContext(n);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);