import{r as a,f as A,_ as ie,R as W,h as x,j as $,g as Re,U as re,s as oe,m as ye,e as Ke,i as ze}from"./index-d3dc8ec6.js";import{b as Oe,_ as Ae,T as de,a as Xe,u as H}from"./TransitionGroupContext-50cf2de2.js";import{_ as Ye}from"./assertThisInitialized-081f9914.js";import{a as fe}from"./Box-34926251.js";let G=!0,te=!1;const We=new Oe,He={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Ge(e){const{type:t,tagName:r}=e;return!!(r==="INPUT"&&He[t]&&!e.readOnly||r==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function qe(e){e.metaKey||e.altKey||e.ctrlKey||(G=!0)}function ee(){G=!1}function Je(){this.visibilityState==="hidden"&&te&&(G=!0)}function Qe(e){e.addEventListener("keydown",qe,!0),e.addEventListener("mousedown",ee,!0),e.addEventListener("pointerdown",ee,!0),e.addEventListener("touchstart",ee,!0),e.addEventListener("visibilitychange",Je,!0)}function Ze(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return G||Ge(t)}function et(){const e=a.useCallback(n=>{n!=null&&Qe(n.ownerDocument)},[]),t=a.useRef(!1);function r(){return t.current?(te=!0,We.start(100,()=>{te=!1}),t.current=!1,!0):!1}function l(n){return Ze(n)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:l,onBlur:r,ref:e}}function se(e,t){var r=function(i){return t&&a.isValidElement(i)?t(i):i},l=Object.create(null);return e&&a.Children.map(e,function(n){return n}).forEach(function(n){l[n.key]=r(n)}),l}function tt(e,t){e=e||{},t=t||{};function r(f){return f in t?t[f]:e[f]}var l=Object.create(null),n=[];for(var i in e)i in t?n.length&&(l[i]=n,n=[]):n.push(i);var o,c={};for(var u in t){if(l[u])for(o=0;o<l[u].length;o++){var p=l[u][o];c[l[u][o]]=r(p)}c[u]=r(u)}for(o=0;o<n.length;o++)c[n[o]]=r(n[o]);return c}function k(e,t,r){return r[t]!=null?r[t]:e.props[t]}function nt(e,t){return se(e.children,function(r){return a.cloneElement(r,{onExited:t.bind(null,r),in:!0,appear:k(r,"appear",e),enter:k(r,"enter",e),exit:k(r,"exit",e)})})}function it(e,t,r){var l=se(e.children),n=tt(t,l);return Object.keys(n).forEach(function(i){var o=n[i];if(a.isValidElement(o)){var c=i in t,u=i in l,p=t[i],f=a.isValidElement(p)&&!p.props.in;u&&(!c||f)?n[i]=a.cloneElement(o,{onExited:r.bind(null,o),in:!0,exit:k(o,"exit",e),enter:k(o,"enter",e)}):!u&&c&&!f?n[i]=a.cloneElement(o,{in:!1}):u&&c&&a.isValidElement(p)&&(n[i]=a.cloneElement(o,{onExited:r.bind(null,o),in:p.props.in,exit:k(o,"exit",e),enter:k(o,"enter",e)}))}}),n}var rt=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},ot={component:"div",childFactory:function(t){return t}},ae=function(e){Ae(t,e);function t(l,n){var i;i=e.call(this,l,n)||this;var o=i.handleExited.bind(Ye(i));return i.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},i}var r=t.prototype;return r.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},r.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(n,i){var o=i.children,c=i.handleExited,u=i.firstRender;return{children:u?nt(n,c):it(n,o,c),firstRender:!1}},r.handleExited=function(n,i){var o=se(this.props.children);n.key in o||(n.props.onExited&&n.props.onExited(i),this.mounted&&this.setState(function(c){var u=A({},c.children);return delete u[n.key],{children:u}}))},r.render=function(){var n=this.props,i=n.component,o=n.childFactory,c=ie(n,["component","childFactory"]),u=this.state.contextValue,p=rt(this.state.children).map(o);return delete c.appear,delete c.enter,delete c.exit,i===null?W.createElement(de.Provider,{value:u},p):W.createElement(de.Provider,{value:u},W.createElement(i,c,p))},t}(W.Component);ae.propTypes={};ae.defaultProps=ot;const st=ae;function at(e){const{className:t,classes:r,pulsate:l=!1,rippleX:n,rippleY:i,rippleSize:o,in:c,onExited:u,timeout:p}=e,[f,g]=a.useState(!1),b=x(t,r.ripple,r.rippleVisible,l&&r.ripplePulsate),C={width:o,height:o,top:-(o/2)+i,left:-(o/2)+n},h=x(r.child,f&&r.childLeaving,l&&r.childPulsate);return!c&&!f&&g(!0),a.useEffect(()=>{if(!c&&u!=null){const R=setTimeout(u,p);return()=>{clearTimeout(R)}}},[u,c,p]),$.jsx("span",{className:b,style:C,children:$.jsx("span",{className:h})})}const lt=Re("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),m=lt,ut=["center","classes","className"];let q=e=>e,he,me,be,ge;const ne=550,ct=80,pt=re(he||(he=q`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),dt=re(me||(me=q`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),ft=re(be||(be=q`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),ht=oe("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),mt=oe(at,{name:"MuiTouchRipple",slot:"Ripple"})(ge||(ge=q`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),m.rippleVisible,pt,ne,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,dt,ne,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,ft,({theme:e})=>e.transitions.easing.easeInOut),bt=a.forwardRef(function(t,r){const l=ye({props:t,name:"MuiTouchRipple"}),{center:n=!1,classes:i={},className:o}=l,c=ie(l,ut),[u,p]=a.useState([]),f=a.useRef(0),g=a.useRef(null);a.useEffect(()=>{g.current&&(g.current(),g.current=null)},[u]);const b=a.useRef(!1),C=Xe(),h=a.useRef(null),R=a.useRef(null),j=a.useCallback(d=>{const{pulsate:y,rippleX:M,rippleY:D,rippleSize:U,cb:K}=d;p(T=>[...T,$.jsx(mt,{classes:{ripple:x(i.ripple,m.ripple),rippleVisible:x(i.rippleVisible,m.rippleVisible),ripplePulsate:x(i.ripplePulsate,m.ripplePulsate),child:x(i.child,m.child),childLeaving:x(i.childLeaving,m.childLeaving),childPulsate:x(i.childPulsate,m.childPulsate)},timeout:ne,pulsate:y,rippleX:M,rippleY:D,rippleSize:U},f.current)]),f.current+=1,g.current=K},[i]),N=a.useCallback((d={},y={},M=()=>{})=>{const{pulsate:D=!1,center:U=n||y.pulsate,fakeElement:K=!1}=y;if((d==null?void 0:d.type)==="mousedown"&&b.current){b.current=!1;return}(d==null?void 0:d.type)==="touchstart"&&(b.current=!0);const T=K?null:R.current,w=T?T.getBoundingClientRect():{width:0,height:0,left:0,top:0};let V,P,L;if(U||d===void 0||d.clientX===0&&d.clientY===0||!d.clientX&&!d.touches)V=Math.round(w.width/2),P=Math.round(w.height/2);else{const{clientX:F,clientY:v}=d.touches&&d.touches.length>0?d.touches[0]:d;V=Math.round(F-w.left),P=Math.round(v-w.top)}if(U)L=Math.sqrt((2*w.width**2+w.height**2)/3),L%2===0&&(L+=1);else{const F=Math.max(Math.abs((T?T.clientWidth:0)-V),V)*2+2,v=Math.max(Math.abs((T?T.clientHeight:0)-P),P)*2+2;L=Math.sqrt(F**2+v**2)}d!=null&&d.touches?h.current===null&&(h.current=()=>{j({pulsate:D,rippleX:V,rippleY:P,rippleSize:L,cb:M})},C.start(ct,()=>{h.current&&(h.current(),h.current=null)})):j({pulsate:D,rippleX:V,rippleY:P,rippleSize:L,cb:M})},[n,j,C]),_=a.useCallback(()=>{N({},{pulsate:!0})},[N]),I=a.useCallback((d,y)=>{if(C.clear(),(d==null?void 0:d.type)==="touchend"&&h.current){h.current(),h.current=null,C.start(0,()=>{I(d,y)});return}h.current=null,p(M=>M.length>0?M.slice(1):M),g.current=y},[C]);return a.useImperativeHandle(r,()=>({pulsate:_,start:N,stop:I}),[_,N,I]),$.jsx(ht,A({className:x(m.root,i.root,o),ref:R},c,{children:$.jsx(st,{component:null,exit:!0,children:u})}))}),gt=bt;function Rt(e){return Ke("MuiButtonBase",e)}const yt=Re("MuiButtonBase",["root","disabled","focusVisible"]),Mt=yt,Tt=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Et=e=>{const{disabled:t,focusVisible:r,focusVisibleClassName:l,classes:n}=e,o=ze({root:["root",t&&"disabled",r&&"focusVisible"]},Rt,n);return r&&l&&(o.root+=` ${l}`),o},xt=oe("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Mt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Ct=a.forwardRef(function(t,r){const l=ye({props:t,name:"MuiButtonBase"}),{action:n,centerRipple:i=!1,children:o,className:c,component:u="button",disabled:p=!1,disableRipple:f=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:C="a",onBlur:h,onClick:R,onContextMenu:j,onDragLeave:N,onFocus:_,onFocusVisible:I,onKeyDown:d,onKeyUp:y,onMouseDown:M,onMouseLeave:D,onMouseUp:U,onTouchEnd:K,onTouchMove:T,onTouchStart:w,tabIndex:V=0,TouchRippleProps:P,touchRippleRef:L,type:F}=l,v=ie(l,Tt),z=a.useRef(null),E=a.useRef(null),Me=fe(E,L),{isFocusVisibleRef:le,onFocus:Te,onBlur:Ee,ref:xe}=et(),[S,X]=a.useState(!1);p&&S&&X(!1),a.useImperativeHandle(n,()=>({focusVisible:()=>{X(!0),z.current.focus()}}),[]);const[J,Ce]=a.useState(!1);a.useEffect(()=>{Ce(!0)},[]);const Ve=J&&!f&&!p;a.useEffect(()=>{S&&b&&!f&&J&&E.current.pulsate()},[f,b,S,J]);function B(s,ce,_e=g){return H(pe=>(ce&&ce(pe),!_e&&E.current&&E.current[s](pe),!0))}const ve=B("start",M),Be=B("stop",j),we=B("stop",N),Pe=B("stop",U),Le=B("stop",s=>{S&&s.preventDefault(),D&&D(s)}),De=B("start",w),Fe=B("stop",K),Se=B("stop",T),ke=B("stop",s=>{Ee(s),le.current===!1&&X(!1),h&&h(s)},!1),$e=H(s=>{z.current||(z.current=s.currentTarget),Te(s),le.current===!0&&(X(!0),I&&I(s)),_&&_(s)}),Q=()=>{const s=z.current;return u&&u!=="button"&&!(s.tagName==="A"&&s.href)},Z=a.useRef(!1),Ne=H(s=>{b&&!Z.current&&S&&E.current&&s.key===" "&&(Z.current=!0,E.current.stop(s,()=>{E.current.start(s)})),s.target===s.currentTarget&&Q()&&s.key===" "&&s.preventDefault(),d&&d(s),s.target===s.currentTarget&&Q()&&s.key==="Enter"&&!p&&(s.preventDefault(),R&&R(s))}),Ie=H(s=>{b&&s.key===" "&&E.current&&S&&!s.defaultPrevented&&(Z.current=!1,E.current.stop(s,()=>{E.current.pulsate(s)})),y&&y(s),R&&s.target===s.currentTarget&&Q()&&s.key===" "&&!s.defaultPrevented&&R(s)});let Y=u;Y==="button"&&(v.href||v.to)&&(Y=C);const O={};Y==="button"?(O.type=F===void 0?"button":F,O.disabled=p):(!v.href&&!v.to&&(O.role="button"),p&&(O["aria-disabled"]=p));const Ue=fe(r,xe,z),ue=A({},l,{centerRipple:i,component:u,disabled:p,disableRipple:f,disableTouchRipple:g,focusRipple:b,tabIndex:V,focusVisible:S}),je=Et(ue);return $.jsxs(xt,A({as:Y,className:x(je.root,c),ownerState:ue,onBlur:ke,onClick:R,onContextMenu:Be,onFocus:$e,onKeyDown:Ne,onKeyUp:Ie,onMouseDown:ve,onMouseLeave:Le,onMouseUp:Pe,onDragLeave:we,onTouchEnd:Fe,onTouchMove:Se,onTouchStart:De,ref:Ue,tabIndex:p?-1:V,type:F},O,v,{children:[o,Ve?$.jsx(gt,A({ref:Me,center:i},P)):null]}))}),Lt=Ct;export{Lt as B,et as u};
