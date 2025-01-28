import{j as o}from"./jsx-runtime-z8MfsBtr.js";import{R as c,r as h}from"./index-C2Vpk4u-.js";import{R}from"./referrals.service-BPAwChe6.js";import"./index-C9rmetsa.js";import"./iframe-C_w7EeXN.js";var P={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},v=c.createContext&&c.createContext(P),S=["attr","size","title"];function z(e,t){if(e==null)return{};var n=I(e,t),r,i;if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(i=0;i<m.length;i++)r=m[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function I(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?j(Object(n),!0).forEach(function(r){M(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function M(e,t,n){return t=B(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B(e){var t=D(e,"string");return typeof t=="symbol"?t:t+""}function D(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function N(e){return e&&e.map((t,n)=>c.createElement(t.tag,L({key:n},t.attr),N(t.child)))}function _(e){return t=>c.createElement(T,g({attr:L({},e.attr)},t),N(e.child))}function T(e){var t=n=>{var{attr:r,size:i,title:m}=e,b=z(e,S),p=i||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),c.createElement("svg",g({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,b,{className:u,style:L(L({color:e.color||n.color},n.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),m&&c.createElement("title",null,m),e.children)};return v!==void 0?c.createElement(v.Consumer,null,n=>t(n)):t(P)}function A(e){return _({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M64 368v80h80l235.727-235.729-79.999-79.998L64 368zm377.602-217.602c8.531-8.531 8.531-21.334 0-29.865l-50.135-50.135c-8.531-8.531-21.334-8.531-29.865 0l-39.468 39.469 79.999 79.998 39.469-39.467z"},child:[]}]})(e)}function H(e){return _({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M128 405.429C128 428.846 147.198 448 170.667 448h170.667C364.802 448 384 428.846 384 405.429V160H128v245.429zM416 96h-80l-26.785-32H202.786L176 96H96v32h320V96z"},child:[]}]})(e)}const J="_main_1oh48_1",W="_container_1oh48_10",q="_actions_1oh48_36",G="_actionBtn_1oh48_41",l={main:J,container:W,actions:q,actionBtn:G},C=({headers:e,referrals:t,onEdit:n,onDelete:r})=>{const i=h.useRef(null),[m,b]=h.useState(0),p=()=>{n&&n()},u=async(s,a)=>{if(window.confirm("Are you sure you want to delete?"))try{await R.deleteReferralWithAvatar(s,a),r&&r()}catch(E){console.error(E)}},d=()=>{if(i.current){const s=i.current.getBoundingClientRect().height,a=(t==null?void 0:t.length)??0,y=Math.round((s-40)/45-a);b(y)}};return h.useEffect(()=>{d()},[t]),h.useEffect(()=>(d(),window.addEventListener("resize",d),()=>{window.removeEventListener("resize",d)}),[]),o.jsx("div",{className:l.main,children:o.jsx("div",{className:l.container,ref:i,children:o.jsxs("table",{children:[o.jsx("thead",{children:o.jsx("tr",{children:e.map((s,a)=>o.jsx("th",{children:s},`th-${a}`))})}),o.jsxs("tbody",{children:[t==null?void 0:t.map((s,a)=>o.jsxs("tr",{children:[o.jsx("td",{children:s.name}),o.jsx("td",{children:s.surname}),o.jsx("td",{children:s.email}),o.jsx("td",{children:s.phone}),o.jsxs("td",{className:l.actions,children:[o.jsx("div",{className:l.actionBtn,onClick:p,children:o.jsx(A,{size:18})}),o.jsx("div",{className:l.actionBtn,onClick:()=>u(s.id,s.avatar),children:o.jsx(H,{size:18})})]})]},`tr-${a}`)),[...Array(m)].map((s,a)=>o.jsx("tr",{children:o.jsx("td",{children:" "})},`line-${a}`))]})]})})})};C.__docgenInfo={description:"",methods:[],displayName:"ReferralPreview",props:{headers:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},referrals:{required:!0,tsType:{name:"union",raw:"IReferral[] | null",elements:[{name:"Array",elements:[{name:"IReferral"}],raw:"IReferral[]"},{name:"null"}]},description:""},onEdit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Q={title:"Widgets/ReferralPreview",component:C,tags:["autodocs"],argTypes:{}},f={args:{headers:["Given Name","Surname","Email","Phone","Actions"],referrals:[{name:"John",surname:"Matthew",email:"jh@email21.com",phone:"0453-283-283",houseNo:"123",street:"Lorem ipsum",suburb:"Lorem ipsum",state:"Lorem ipsum",postCode:"Lorem ipsum",country:"Lorem ipsum"},{name:"Matthew",surname:"Lombard",email:"mat197501@gmail.com",phone:"0453-283-283",houseNo:"123",street:"Lorem ipsum",suburb:"Lorem ipsum",state:"Lorem ipsum",postCode:"Lorem ipsum",country:"Lorem ipsum"},{name:"Joe",surname:"Dickson",email:"joe@dickson.com",phone:"0453-283-283",houseNo:"123",street:"Lorem ipsum",suburb:"Lorem ipsum",state:"Lorem ipsum",postCode:"Lorem ipsum",country:"Lorem ipsum"},{name:"Scarlet",surname:"Johnson",email:"scarlet@johnson.com",phone:"0453-283-283",houseNo:"123",street:"Lorem ipsum",suburb:"Lorem ipsum",state:"Lorem ipsum",postCode:"Lorem ipsum",country:"Lorem ipsum"},{name:"Peter",surname:"Rhonda",email:"peter101@yahoo.com",phone:"0453-283-283",houseNo:"123",street:"Lorem ipsum",suburb:"Lorem ipsum",state:"Lorem ipsum",postCode:"Lorem ipsum",country:"Lorem ipsum"}]}};var w,x,O;f.parameters={...f.parameters,docs:{...(w=f.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    headers: ["Given Name", "Surname", "Email", "Phone", "Actions"],
    referrals: [{
      name: "John",
      surname: "Matthew",
      email: "jh@email21.com",
      phone: "0453-283-283",
      houseNo: "123",
      street: "Lorem ipsum",
      suburb: "Lorem ipsum",
      state: "Lorem ipsum",
      postCode: "Lorem ipsum",
      country: "Lorem ipsum"
    }, {
      name: "Matthew",
      surname: "Lombard",
      email: "mat197501@gmail.com",
      phone: "0453-283-283",
      houseNo: "123",
      street: "Lorem ipsum",
      suburb: "Lorem ipsum",
      state: "Lorem ipsum",
      postCode: "Lorem ipsum",
      country: "Lorem ipsum"
    }, {
      name: "Joe",
      surname: "Dickson",
      email: "joe@dickson.com",
      phone: "0453-283-283",
      houseNo: "123",
      street: "Lorem ipsum",
      suburb: "Lorem ipsum",
      state: "Lorem ipsum",
      postCode: "Lorem ipsum",
      country: "Lorem ipsum"
    }, {
      name: "Scarlet",
      surname: "Johnson",
      email: "scarlet@johnson.com",
      phone: "0453-283-283",
      houseNo: "123",
      street: "Lorem ipsum",
      suburb: "Lorem ipsum",
      state: "Lorem ipsum",
      postCode: "Lorem ipsum",
      country: "Lorem ipsum"
    }, {
      name: "Peter",
      surname: "Rhonda",
      email: "peter101@yahoo.com",
      phone: "0453-283-283",
      houseNo: "123",
      street: "Lorem ipsum",
      suburb: "Lorem ipsum",
      state: "Lorem ipsum",
      postCode: "Lorem ipsum",
      country: "Lorem ipsum"
    }]
  }
}`,...(O=(x=f.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};const U=["Default"];export{f as Default,U as __namedExportsOrder,Q as default};
