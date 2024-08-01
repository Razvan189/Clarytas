import{g as k,e as h,s as x,f as n,r as v,m as C,_ as L,j as f,h as F,k as z,i as g,t as $}from"./index-d3dc8ec6.js";import{u as q,f as I}from"./InputBase-0890acc9.js";function R(s){return h("MuiFormLabel",s)}const M=k("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),p=M,y=["children","className","color","component","disabled","error","filled","focused","required"],A=s=>{const{classes:r,color:o,focused:e,disabled:d,error:l,filled:i,required:u}=s,t={root:["root",`color${z(o)}`,d&&"disabled",l&&"error",i&&"filled",e&&"focused",u&&"required"],asterisk:["asterisk",l&&"error"]};return g(t,R,r)},N=x("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:({ownerState:s},r)=>n({},r.root,s.color==="secondary"&&r.colorSecondary,s.filled&&r.filled)})(({theme:s,ownerState:r})=>n({color:(s.vars||s).palette.text.secondary},s.typography.body1,{lineHeight:"1.4375em",padding:0,position:"relative",[`&.${p.focused}`]:{color:(s.vars||s).palette[r.color].main},[`&.${p.disabled}`]:{color:(s.vars||s).palette.text.disabled},[`&.${p.error}`]:{color:(s.vars||s).palette.error.main}})),W=x("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(s,r)=>r.asterisk})(({theme:s})=>({[`&.${p.error}`]:{color:(s.vars||s).palette.error.main}})),j=v.forwardRef(function(r,o){const e=C({props:r,name:"MuiFormLabel"}),{children:d,className:l,component:i="label"}=e,u=L(e,y),t=q(),a=I({props:e,muiFormControl:t,states:["color","required","focused","disabled","error","filled"]}),c=n({},e,{color:a.color||"primary",component:i,disabled:a.disabled,error:a.error,filled:a.filled,focused:a.focused,required:a.required}),m=A(c);return f.jsxs(N,n({as:i,ownerState:c,className:F(m.root,l),ref:o},u,{children:[d,a.required&&f.jsxs(W,{ownerState:c,"aria-hidden":!0,className:m.asterisk,children:[" ","*"]})]}))}),E=j;function U(s){return h("MuiInputLabel",s)}k("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);const P=["disableAnimation","margin","shrink","variant","className"],S=s=>{const{classes:r,formControl:o,size:e,shrink:d,disableAnimation:l,variant:i,required:u}=s,t={root:["root",o&&"formControl",!l&&"animated",d&&"shrink",e&&e!=="normal"&&`size${z(e)}`,i],asterisk:[u&&"asterisk"]},a=g(t,U,r);return n({},r,a)},_=x(E,{shouldForwardProp:s=>$(s)||s==="classes",name:"MuiInputLabel",slot:"Root",overridesResolver:(s,r)=>{const{ownerState:o}=s;return[{[`& .${p.asterisk}`]:r.asterisk},r.root,o.formControl&&r.formControl,o.size==="small"&&r.sizeSmall,o.shrink&&r.shrink,!o.disableAnimation&&r.animated,o.focused&&r.focused,r[o.variant]]}})(({theme:s,ownerState:r})=>n({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},r.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},r.size==="small"&&{transform:"translate(0, 17px) scale(1)"},r.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},!r.disableAnimation&&{transition:s.transitions.create(["color","transform","max-width"],{duration:s.transitions.duration.shorter,easing:s.transitions.easing.easeOut})},r.variant==="filled"&&n({zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},r.size==="small"&&{transform:"translate(12px, 13px) scale(1)"},r.shrink&&n({userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"},r.size==="small"&&{transform:"translate(12px, 4px) scale(0.75)"})),r.variant==="outlined"&&n({zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},r.size==="small"&&{transform:"translate(14px, 9px) scale(1)"},r.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 32px)",transform:"translate(14px, -9px) scale(0.75)"}))),w=v.forwardRef(function(r,o){const e=C({name:"MuiInputLabel",props:r}),{disableAnimation:d=!1,shrink:l,className:i}=e,u=L(e,P),t=q();let a=l;typeof a>"u"&&t&&(a=t.filled||t.focused||t.adornedStart);const c=I({props:e,muiFormControl:t,states:["size","variant","required","focused"]}),m=n({},e,{disableAnimation:d,formControl:t,shrink:a,size:c.size,variant:c.variant,required:c.required,focused:c.focused}),b=S(m);return f.jsx(_,n({"data-shrink":a,ownerState:m,ref:o,className:F(b.root,i)},u,{classes:b}))}),T=w;export{E as F,T as I};
