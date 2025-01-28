import{j as s}from"./jsx-runtime-z8MfsBtr.js";import{R as V}from"./referrals.service-BPAwChe6.js";import{B as C}from"./Button-YtFrUkwT.js";import{F as G}from"./FormHeader-Dc9-TS-z.js";import{I as L}from"./Input-DiOAHkWd.js";import{r as v}from"./index-C2Vpk4u-.js";import"./index-C9rmetsa.js";import"./iframe-C_w7EeXN.js";import"./clsx-B-dksMZM.js";function H(){var p;const[S,_]=v.useState({}),[u,f]=v.useState({}),[b,R]=v.useState({}),y=v.useRef({}),x=(t,e)=>{var h;if(!t||!((h=b[t])!=null&&h.validation))return null;const{pattern:n,required:i,maxLength:o,minLength:c,min:m,max:g}=b[t];return i===!0&&(!e&&typeof e!="boolean"||Array.isArray(e)&&!e.length)?"Required field":n&&(typeof e=="string"&&!e.toLowerCase().match(n)&&e!==""||e===void 0&&i===!0)?"Invalid value":o&&typeof e=="string"&&e.length>o?"maxLength":c&&(typeof e=="string"&&e.length<c||e===void 0)?"minLength":m&&e<m?"min":g&&e>g?"max":null},N=()=>{Object.keys(u).forEach(e=>{const n=x(e,u[e].value);f(i=>({...i,[e]:{...i[e],error:n}}))})},I=async t=>{const{name:e,value:n,type:i,checked:o,files:c}=t.target||t,m=x(e,n);f(g=>({...g,[e]:{...g[e],value:i==="checkbox"?o:n,files:i==="file"?c:void 0,error:m}}))},F=t=>{const{name:e,value:n}=t.target,i=x(e,n);f(o=>({...o,[e]:{...o[e],value:n,error:i}}))},A=(t,e)=>{var B;const{required:n,type:i,pattern:o,maxLength:c,minLength:m,defaultValue:g,min:h,max:E}=e||{},T=!!(n||o||c||m||h||E),k=((B=u[t])==null?void 0:B.value)||"";return y.current&&(y.current={...y.current,[t]:{value:g,error:void 0,required:n||!1,pattern:o,maxLength:c,minLength:m,min:h,max:E,validation:T}}),{type:i,name:t,onChange:I,onBlur:F,value:k}},d=()=>{f(S)};v.useEffect(()=>{const t=y.current;R({...t});const n=Object.keys(t).reduce((i,o)=>{const c=t[o].value,m={value:c};return i[o]={value:t[o].validation?m===void 0?c:(m==null?void 0:m.value)||"":"",error:void 0},i},{});_(n),f(n)},[y]);let r=!1;const a=Object.values(u);a.length&&(r=a.every(t=>t.error===null||t.error===void 0));const l={};return(p=Object.keys(u))==null||p.forEach(t=>{var e;l[t]=(e=u==null?void 0:u[t])==null?void 0:e.error}),{validateAll:N,formData:u,error:l,isValid:r,reset:d,register:A}}const $="_main_dgvgl_1",U="_container_dgvgl_8",W="_group_dgvgl_14",z="_fields_dgvgl_17",q={main:$,container:U,group:W,fields:z},D=({title:S,data:_,onCreate:u})=>{const{register:f,formData:b,error:R,isValid:y,validateAll:x,reset:N}=H(),I=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,F=async d=>{if(d.preventDefault(),x(),y)try{let r="";if(b.avatar.files){const l=b.avatar.files[0];r=await V.uploadAvatar(l)}const a=Object.fromEntries(Object.entries(b).map(([l,p])=>[l,p.value]));await V.createReferral({...a,avatar:r}),N(),u&&u()}catch(r){r.details?alert(r.details):r.message&&alert(r.message),console.error(r)}},A=(d,r,a,l,p,t)=>{switch(d){case"text":return s.jsx(L,{name:r,placeholder:a,required:l,error:p,...f(r,{type:d,required:l,maxLength:t})});case"email":return s.jsx(L,{name:r,placeholder:a,required:l,error:p,...f(r,{type:d,required:l,maxLength:t,pattern:I})});case"file":return s.jsxs(s.Fragment,{children:[s.jsx("input",{id:"fileInput",style:{display:"none"},...f(r,{type:d,required:l})}),s.jsx(C,{type:"button",variant:"secondary",error:p,onClick:()=>{var e;return(e=document.getElementById("fileInput"))==null?void 0:e.click()},children:a})]});case"submit":return s.jsx(C,{type:"submit",variant:"primary",children:a})}};return s.jsx("div",{className:q.main,children:s.jsxs("div",{className:q.container,children:[s.jsx("h1",{children:S}),s.jsx("form",{onSubmit:F,children:_.map((d,r)=>s.jsxs("div",{className:q.group,children:[d.title&&s.jsx(G,{children:d.title}),s.jsx("div",{className:q.fields,children:d.fields.map((a,l)=>s.jsx("div",{children:A(a.type,a.name,a.label,a.required,!!R[a.name],100)},`form-fields-${r}${l}`))})]},`form-group-${r}`))})]})})};D.__docgenInfo={description:"",methods:[],displayName:"ReferralBuilderForm",props:{title:{required:!0,tsType:{name:"string"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"IFormGroup"}],raw:"IFormGroup[]"},description:""},onCreate:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const re={title:"Widgets/ReferralBuilderForm",component:D,tags:["autodocs"],argTypes:{}},j={args:{title:"Referral Builder",data:[{title:"Personal Details",fields:[{name:"givenName",label:"Given Name",type:"text",required:!0},{name:"surname",label:"Surname",type:"text",required:!0},{name:"email",label:"Email",type:"text",required:!0},{name:"phone",label:"Phone",type:"text",required:!0}]},{title:"Address",fields:[{name:"houseNo",label:"Home Name or #",type:"text",required:!0},{name:"street",label:"Street",type:"text",required:!0},{name:"suburb",label:"Suburb",type:"text",required:!0},{name:"state",label:"State",type:"text",required:!0},{name:"postcode",label:"Postcode",type:"text",required:!0},{name:"country",label:"Country",type:"text",required:!0}]},{fields:[{name:"avatar",label:"Upload Avatar",type:"file",required:!0},{name:"submit",label:"Create Referral",type:"submit",required:!0}]}]}};var O,P,w;j.parameters={...j.parameters,docs:{...(O=j.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    title: "Referral Builder",
    data: [{
      title: "Personal Details",
      fields: [{
        name: "givenName",
        label: "Given Name",
        type: "text",
        required: true
      }, {
        name: "surname",
        label: "Surname",
        type: "text",
        required: true
      }, {
        name: "email",
        label: "Email",
        type: "text",
        required: true
      }, {
        name: "phone",
        label: "Phone",
        type: "text",
        required: true
      }]
    }, {
      title: "Address",
      fields: [{
        name: "houseNo",
        label: "Home Name or #",
        type: "text",
        required: true
      }, {
        name: "street",
        label: "Street",
        type: "text",
        required: true
      }, {
        name: "suburb",
        label: "Suburb",
        type: "text",
        required: true
      }, {
        name: "state",
        label: "State",
        type: "text",
        required: true
      }, {
        name: "postcode",
        label: "Postcode",
        type: "text",
        required: true
      }, {
        name: "country",
        label: "Country",
        type: "text",
        required: true
      }]
    }, {
      fields: [{
        name: "avatar",
        label: "Upload Avatar",
        type: "file",
        required: true
      }, {
        name: "submit",
        label: "Create Referral",
        type: "submit",
        required: true
      }]
    }]
  }
}`,...(w=(P=j.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};const ne=["Default"];export{j as Default,ne as __namedExportsOrder,re as default};
