const __vite__fileDeps=["./DocsRenderer-K4EAMTCU-Bd9gVIkM.js","./iframe-DJhZmA4S.js","./index-caxmlYbZ.js","./react-18-Dd1Bp02Z.js","./index-BmNgusFo.js","./index-C56Ec2w9.js","./index-B4ZogDlv.js","./index-DkFm1ALj.js","./index-DXimoRZY.js","./_getPrototype-c4M9LX2-.js","./index-DrFu-skq.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as a}from"./iframe-DJhZmA4S.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),n={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-K4EAMTCU-Bd9gVIkM.js").then(r=>r.D),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{n as parameters};