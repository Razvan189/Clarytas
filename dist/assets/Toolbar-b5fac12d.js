import{e as d,g,s as b,f as e,r as m,m as f,_ as v,j as T,h as x,i as R}from"./index-d3dc8ec6.js";function C(s){return d("MuiToolbar",s)}g("MuiToolbar",["root","gutters","regular","dense"]);const G=["className","component","disableGutters","variant"],j=s=>{const{classes:t,disableGutters:o,variant:a}=s;return R({root:["root",!o&&"gutters",a]},C,t)},y=b("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:o}=s;return[t.root,!o.disableGutters&&t.gutters,t[o.variant]]}})(({theme:s,ownerState:t})=>e({position:"relative",display:"flex",alignItems:"center"},!t.disableGutters&&{paddingLeft:s.spacing(2),paddingRight:s.spacing(2),[s.breakpoints.up("sm")]:{paddingLeft:s.spacing(3),paddingRight:s.spacing(3)}},t.variant==="dense"&&{minHeight:48}),({theme:s,ownerState:t})=>t.variant==="regular"&&s.mixins.toolbar),M=m.forwardRef(function(t,o){const a=f({props:t,name:"MuiToolbar"}),{className:r,component:n="div",disableGutters:l=!1,variant:c="regular"}=a,u=v(a,G),i=e({},a,{component:n,disableGutters:l,variant:c}),p=j(i);return T.jsx(y,e({as:n,className:x(p.root,r),ref:o,ownerState:i},u))}),_=M;export{_ as T};
