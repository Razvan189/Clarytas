import{z as p,B as y,r,E,D as _,_ as w,j as B,f as b,h as C,g as N,q as T,F as P,G as g}from"./index-d3dc8ec6.js";const j=["className","component"];function O(e={}){const{themeId:t,defaultTheme:o,defaultClassName:s="MuiBox-root",generateClassName:n}=e,c=p("div",{shouldForwardProp:a=>a!=="theme"&&a!=="sx"&&a!=="as"})(y);return r.forwardRef(function(d,l){const u=E(o),i=_(d),{className:m,component:x="div"}=i,h=w(i,j);return B.jsx(c,b({as:x,ref:l,className:C(m,n?n(s):s),theme:t&&u[t]||u},h))})}const R=typeof window<"u"?r.useLayoutEffect:r.useEffect,H=R;function L(e,t=166){let o;function s(...n){const c=()=>{e.apply(this,n)};clearTimeout(o),o=setTimeout(c,t)}return s.clear=()=>{clearTimeout(o)},s}function D(e){return e&&e.ownerDocument||document}function W(e){return D(e).defaultView||window}function F(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function k(...e){return r.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(o=>{F(o,t)})},e)}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,s){return o.__proto__=s,o},f(e,t)}function q(e){return typeof e=="string"}const M=N("MuiBox",["root"]),I=M,S=T(),$=O({themeId:P,defaultTheme:S,defaultClassName:I.root,generateClassName:g.generate}),z=$;export{z as B,f as _,k as a,W as b,O as c,L as d,q as i,D as o,F as s,H as u};
