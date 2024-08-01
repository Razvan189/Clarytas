import{g as z,e as R,s as m,k as r,f as t,J as u,r as y,m as B,_ as C,j as x,h as I,i as $}from"./index-d3dc8ec6.js";import{B as h}from"./ButtonBase-27728b09.js";function k(o){return R("MuiIconButton",o)}const M=z("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),_=M,U=["edge","children","className","color","disabled","disableFocusRipple","size"],j=o=>{const{classes:e,disabled:a,color:s,edge:i,size:n}=o,l={root:["root",a&&"disabled",s!=="default"&&`color${r(s)}`,i&&`edge${r(i)}`,`size${r(n)}`]};return $(l,k,e)},E=m(h,{name:"MuiIconButton",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.root,a.color!=="default"&&e[`color${r(a.color)}`],a.edge&&e[`edge${r(a.edge)}`],e[`size${r(a.size)}`]]}})(({theme:o,ownerState:e})=>t({textAlign:"center",flex:"0 0 auto",fontSize:o.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(o.vars||o).palette.action.active,transition:o.transitions.create("background-color",{duration:o.transitions.duration.shortest})},!e.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette.action.activeChannel} / ${o.vars.palette.action.hoverOpacity})`:u(o.palette.action.active,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12}),({theme:o,ownerState:e})=>{var a;const s=(a=(o.vars||o).palette)==null?void 0:a[e.color];return t({},e.color==="inherit"&&{color:"inherit"},e.color!=="inherit"&&e.color!=="default"&&t({color:s==null?void 0:s.main},!e.disableRipple&&{"&:hover":t({},s&&{backgroundColor:o.vars?`rgba(${s.mainChannel} / ${o.vars.palette.action.hoverOpacity})`:u(s.main,o.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),e.size==="small"&&{padding:5,fontSize:o.typography.pxToRem(18)},e.size==="large"&&{padding:12,fontSize:o.typography.pxToRem(28)},{[`&.${_.disabled}`]:{backgroundColor:"transparent",color:(o.vars||o).palette.action.disabled}})}),O=y.forwardRef(function(e,a){const s=B({props:e,name:"MuiIconButton"}),{edge:i=!1,children:n,className:l,color:g="default",disabled:c=!1,disableFocusRipple:d=!1,size:v="medium"}=s,b=C(s,U),p=t({},s,{edge:i,color:g,disabled:c,disableFocusRipple:d,size:v}),f=j(p);return x.jsx(E,t({className:I(f.root,l),centerRipple:!0,focusRipple:!d,disabled:c,ref:a},b,{ownerState:p,children:n}))}),N=O;export{N as M};
