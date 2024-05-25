import{j as o}from"./jsx-runtime-BhBAkL08.js";import{a as I}from"./index-caxmlYbZ.js";import{c as w}from"./utils-C-5SdYIA.js";import{a as V,$ as F}from"./index-C56Ec2w9.js";import{c as N}from"./index-Bb4qSo10.js";import{c as P}from"./Search-BVt7rsam.js";const k=N("relative flex h-12.5 items-center justify-center gap-3 rounded-[3px] px-5 text-xl font-normal shadow-[0_2px_3px_0_rgba(0,0,0,0.10)]",{variants:{variant:{filled:"bg-primary-variant text-on-primary fill-on-primary stroke-on-primary hover:bg-primary-variant-dim disabled:bg-primary-variant/50",outlined:"bg-surface text-on-surface-light fill-on-surface-light stroke-on-surface-light border border-[#CCCCCC]","outlined-primary":"bg-surface text-primary fill-primary stroke-primary border border-primary"}},defaultVariants:{variant:"filled"}}),s=I.forwardRef(({variant:C="filled",iconPosition:i="left",icon:l,children:O,className:_,asChild:j=!1,...S},$)=>{const B=j?F:"button",r=l&&o.jsx("div",{className:"min-h-5 min-w-5",children:l});return o.jsxs(B,{ref:$,className:w(k({variant:C,className:_})),...S,children:[r&&i==="left"&&r,o.jsx(V,{children:O}),r&&i==="right"&&r]})});s.displayName="Button";s.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:'"filled"',computed:!1},required:!1},iconPosition:{defaultValue:{value:'"left"',computed:!1},required:!1},asChild:{defaultValue:{value:"false",computed:!1},required:!1}}};const G={title:"Components/Button",component:s,parameters:{layout:"centered"},args:{disabled:!1},tags:["autodocs"]},e={args:{children:"Filled",variant:"filled"}},a={args:{children:"Outlined",variant:"outlined"}},t={args:{children:"Outlined Primary",variant:"outlined-primary"}},n={args:{children:"Button with Icon",icon:o.jsx(P,{})}};var c,d,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: "Filled",
    variant: "filled"
  }
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,p,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: "Outlined",
    variant: "outlined"
  }
}`,...(f=(p=a.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var g,h,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: "Outlined Primary",
    variant: "outlined-primary"
  }
}`,...(v=(h=t.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var y,x,b;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: "Button with Icon",
    icon: <Search />
  }
}`,...(b=(x=n.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const H=["Filled","Outlined","OutlinedPrimary","Icon"];export{e as Filled,n as Icon,a as Outlined,t as OutlinedPrimary,H as __namedExportsOrder,G as default};
