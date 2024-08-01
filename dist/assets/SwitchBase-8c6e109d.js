import{e as W,g as A,s as F,f as c,t as D,r as G,_ as H,j as x,h as J,k as K,i as M}from"./index-d3dc8ec6.js";import{u as Q}from"./InputBase-0890acc9.js";import{B as T}from"./ButtonBase-27728b09.js";import{u as V}from"./useControlled-b172b230.js";function X(e){return W("PrivateSwitchBase",e)}A("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Y=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Z=e=>{const{classes:o,checked:i,disabled:r,edge:a}=e,l={root:["root",i&&"checked",r&&"disabled",a&&`edge${K(a)}`],input:["input"]};return M(l,X,o)},ee=F(T)(({ownerState:e})=>c({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),se=F("input",{shouldForwardProp:D})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),te=G.forwardRef(function(o,i){const{autoFocus:r,checked:a,checkedIcon:l,className:w,defaultChecked:h,disabled:y,disableFocusRipple:p=!1,edge:S=!1,icon:R,id:P,inputProps:I,inputRef:j,name:z,onBlur:f,onChange:m,onFocus:g,readOnly:E,required:N=!1,tabIndex:U,type:d,value:b}=o,_=H(o,Y),[k,q]=V({controlled:a,default:!!h,name:"SwitchBase",state:"checked"}),t=Q(),v=s=>{g&&g(s),t&&t.onFocus&&t.onFocus(s)},L=s=>{f&&f(s),t&&t.onBlur&&t.onBlur(s)},O=s=>{if(s.nativeEvent.defaultPrevented)return;const C=s.target.checked;q(C),m&&m(s,C)};let n=y;t&&typeof n>"u"&&(n=t.disabled);const $=d==="checkbox"||d==="radio",u=c({},o,{checked:k,disabled:n,disableFocusRipple:p,edge:S}),B=Z(u);return x.jsxs(ee,c({component:"span",className:J(B.root,w),centerRipple:!0,focusRipple:!p,disabled:n,tabIndex:null,role:void 0,onFocus:v,onBlur:L,ownerState:u,ref:i},_,{children:[x.jsx(se,c({autoFocus:r,checked:a,defaultChecked:h,className:B.input,disabled:n,id:$?P:void 0,name:z,onChange:O,readOnly:E,ref:j,required:N,ownerState:u,tabIndex:U,type:d},d==="checkbox"&&b===void 0?{}:{value:b},I)),k?l:R]}))}),ce=te;export{ce as S};
