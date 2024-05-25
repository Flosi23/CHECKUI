import{j as e}from"./jsx-runtime-BhBAkL08.js";import{r as m}from"./index-caxmlYbZ.js";import{c as l}from"./utils-C-5SdYIA.js";import{a as E,$ as p}from"./index-C56Ec2w9.js";import{a as R}from"./Search-BVt7rsam.js";import{f as S}from"./index-Cq_GZlP2.js";import{I as T}from"./Input-DIA5l6Fv.js";import"./index-Bqoxw6Vv.js";import"./Spinner-BTECRXR7.js";import"./index-Bb4qSo10.js";const u=m.forwardRef(({onClickClose:r,asChild:t,children:o,className:s,id:a,...n},k)=>{const _=t?p:"div",$=m.useId(),N=a||$;return e.jsxs(_,{id:N,className:l("relative rounded-[5px] border border-primary bg-surface p-4 shadow-box",s),...n,children:[e.jsx(E,{children:o}),r&&e.jsx("button",{"aria-controls":N,className:l("absolute right-2.5 top-2.5 rounded-full text-surface"),onClick:r,"aria-description":"Close note",children:e.jsx(R,{className:"h-3.5 w-3.5 fill-on-surface-very-light"})}),e.jsx("div",{className:"absolute left-1/2 top-0 -z-10 mt-[4px] h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 -scale-x-100 -scale-y-100 transform border-b border-r border-primary bg-surface"}),e.jsx("div",{className:`absolute left-1/2 top-0 mt-[4px] h-[14px] w-[14px] -translate-x-1/2 -translate-y-1/2 rotate-45 -scale-x-100 -scale-y-100
         transform bg-surface`})]})});u.displayName="InputNote";const f=m.forwardRef(({className:r,children:t,asChild:o,...s},a)=>{const n=o?p:"div";return e.jsx(n,{ref:a,className:l("mb-1.5 font-bold text-on-surface",r),...s,children:t})});f.displayName="InputNoteTitle";const x=m.forwardRef(({className:r,children:t,asChild:o,...s},a)=>{const n=o?p:"div";return e.jsx(n,{ref:a,className:l("text-on-surface",r),...s,children:t})});x.displayName="InputNoteContent";u.__docgenInfo={description:"",methods:[],displayName:"InputNote"};f.__docgenInfo={description:"",methods:[],displayName:"InputNoteTitle"};x.__docgenInfo={description:"",methods:[],displayName:"InputNoteContent"};const D={title:"Components/InputNote",component:u,parameters:{layout:"centered"},args:{children:e.jsxs(e.Fragment,{children:[e.jsx(f,{children:"Information from CHECK24"}),e.jsx(x,{children:"You will receive a confirmation via email."})]})},tags:["autodocs"]},c={},i={args:{onClickClose:S()}},d={decorators:[r=>e.jsxs("div",{children:[e.jsx(T,{label:"Email"}),e.jsx("div",{className:"mt-4",children:e.jsx(r,{})})]})]};var I,b,g;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:"{}",...(g=(b=c.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var h,j,v;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    onClickClose: fn()
  }
}`,...(v=(j=i.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var y,C,w;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  decorators: [Story => <div>
        <Input label="Email" />
        <div className="mt-4">
          <Story />
        </div>
      </div>]
}`,...(w=(C=d.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};const G=["Regular","Close","WithInput"];export{i as Close,c as Regular,d as WithInput,G as __namedExportsOrder,D as default};
