import{r as d}from"./index-d3dc8ec6.js";var te=typeof global=="object"&&global&&global.Object===Object&&global;const ie=te;var re=typeof self=="object"&&self&&self.Object===Object&&self,se=ie||re||Function("return this")();const q=se;var le=q.Symbol;const _=le;var U=Object.prototype,oe=U.hasOwnProperty,ne=U.toString,M=_?_.toStringTag:void 0;function ae(i){var t=oe.call(i,M),r=i[M];try{i[M]=void 0;var e=!0}catch{}var s=ne.call(i);return e&&(t?i[M]=r:delete i[M]),s}var ce=Object.prototype,he=ce.toString;function fe(i){return he.call(i)}var ue="[object Null]",de="[object Undefined]",I=_?_.toStringTag:void 0;function ve(i){return i==null?i===void 0?de:ue:I&&I in Object(i)?ae(i):fe(i)}function pe(i){return i!=null&&typeof i=="object"}var ge="[object Symbol]";function me(i){return typeof i=="symbol"||pe(i)&&ve(i)==ge}var be=/\s/;function ye(i){for(var t=i.length;t--&&be.test(i.charAt(t)););return t}var Ee=/^\s+/;function xe(i){return i&&i.slice(0,ye(i)+1).replace(Ee,"")}function P(i){var t=typeof i;return i!=null&&(t=="object"||t=="function")}var X=0/0,Se=/^[-+]0x[0-9a-f]+$/i,Oe=/^0b[01]+$/i,we=/^0o[0-7]+$/i,We=parseInt;function Y(i){if(typeof i=="number")return i;if(me(i))return X;if(P(i)){var t=typeof i.valueOf=="function"?i.valueOf():i;i=P(t)?t+"":t}if(typeof i!="string")return i===0?i:+i;i=xe(i);var r=Oe.test(i);return r||we.test(i)?We(i.slice(2),r?2:8):Se.test(i)?X:+i}var ke=function(){return q.Date.now()};const j=ke;var Ne="Expected a function",Ae=Math.max,ze=Math.min;function L(i,t,r){var e,s,l,n,o,f,c=0,p=!1,a=!1,v=!0;if(typeof i!="function")throw new TypeError(Ne);t=Y(t)||0,P(r)&&(p=!!r.leading,a="maxWait"in r,l=a?Ae(Y(r.maxWait)||0,t):l,v="trailing"in r?!!r.trailing:v);function h(u){var y=e,E=s;return e=s=void 0,c=u,n=i.apply(E,y),n}function N(u){return c=u,o=setTimeout(b,t),p?h(u):n}function S(u){var y=u-f,E=u-c,B=t-y;return a?ze(B,l-E):B}function x(u){var y=u-f,E=u-c;return f===void 0||y>=t||y<0||a&&E>=l}function b(){var u=j();if(x(u))return O(u);o=setTimeout(b,S(u))}function O(u){return o=void 0,v&&e?h(u):(e=s=void 0,n)}function R(){o!==void 0&&clearTimeout(o),c=0,e=f=s=o=void 0}function D(){return o===void 0?n:O(j())}function T(){var u=j(),y=x(u);if(e=arguments,s=this,f=u,y){if(o===void 0)return N(f);if(a)return clearTimeout(o),o=setTimeout(b,t),h(f)}return o===void 0&&(o=setTimeout(b,t)),n}return T.cancel=R,T.flush=D,T}var Te="Expected a function";function Me(i,t,r){var e=!0,s=!0;if(typeof i!="function")throw new TypeError(Te);return P(r)&&(e="leading"in r?!!r.leading:e,s="trailing"in r?!!r.trailing:s),L(i,t,{leading:e,maxWait:t,trailing:s})}var z=function(){return z=Object.assign||function(t){for(var r,e=1,s=arguments.length;e<s;e++){r=arguments[e];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(t[l]=r[l])}return t},z.apply(this,arguments)};function G(i){return!i||!i.ownerDocument||!i.ownerDocument.defaultView?window:i.ownerDocument.defaultView}function Q(i){return!i||!i.ownerDocument?document:i.ownerDocument}var Z=function(i){var t={},r=Array.prototype.reduce.call(i,function(e,s){var l=s.name.match(/data-simplebar-(.+)/);if(l){var n=l[1].replace(/\W+(.)/g,function(o,f){return f.toUpperCase()});switch(s.value){case"true":e[n]=!0;break;case"false":e[n]=!1;break;case void 0:e[n]=!0;break;default:e[n]=s.value}}return e},t);return r};function J(i,t){var r;i&&(r=i.classList).add.apply(r,t.split(" "))}function K(i,t){i&&t.split(" ").forEach(function(r){i.classList.remove(r)})}function ee(i){return".".concat(i.split(" ").join("."))}var H=!!(typeof window<"u"&&window.document&&window.document.createElement),Ce=Object.freeze({__proto__:null,addClasses:J,canUseDOM:H,classNamesToQuery:ee,getElementDocument:Q,getElementWindow:G,getOptions:Z,removeClasses:K}),A=null,F=null;H&&window.addEventListener("resize",function(){F!==window.devicePixelRatio&&(F=window.devicePixelRatio,A=null)});function $(){if(A===null){if(typeof document>"u")return A=0,A;var i=document.body,t=document.createElement("div");t.classList.add("simplebar-hide-scrollbar"),i.appendChild(t);var r=t.getBoundingClientRect().right;i.removeChild(t),A=r}return A}var w=G,V=Q,Re=Z,W=J,k=K,g=ee,C=function(){function i(t,r){r===void 0&&(r={});var e=this;if(this.removePreventClickId=null,this.minScrollbarWidth=20,this.stopScrollDelay=175,this.isScrolling=!1,this.isMouseEntering=!1,this.isDragging=!1,this.scrollXTicking=!1,this.scrollYTicking=!1,this.wrapperEl=null,this.contentWrapperEl=null,this.contentEl=null,this.offsetEl=null,this.maskEl=null,this.placeholderEl=null,this.heightAutoObserverWrapperEl=null,this.heightAutoObserverEl=null,this.rtlHelpers=null,this.scrollbarWidth=0,this.resizeObserver=null,this.mutationObserver=null,this.elStyles=null,this.isRtl=null,this.mouseX=0,this.mouseY=0,this.onMouseMove=function(){},this.onWindowResize=function(){},this.onStopScrolling=function(){},this.onMouseEntered=function(){},this.onScroll=function(){var s=w(e.el);e.scrollXTicking||(s.requestAnimationFrame(e.scrollX),e.scrollXTicking=!0),e.scrollYTicking||(s.requestAnimationFrame(e.scrollY),e.scrollYTicking=!0),e.isScrolling||(e.isScrolling=!0,W(e.el,e.classNames.scrolling)),e.showScrollbar("x"),e.showScrollbar("y"),e.onStopScrolling()},this.scrollX=function(){e.axis.x.isOverflowing&&e.positionScrollbar("x"),e.scrollXTicking=!1},this.scrollY=function(){e.axis.y.isOverflowing&&e.positionScrollbar("y"),e.scrollYTicking=!1},this._onStopScrolling=function(){k(e.el,e.classNames.scrolling),e.options.autoHide&&(e.hideScrollbar("x"),e.hideScrollbar("y")),e.isScrolling=!1},this.onMouseEnter=function(){e.isMouseEntering||(W(e.el,e.classNames.mouseEntered),e.showScrollbar("x"),e.showScrollbar("y"),e.isMouseEntering=!0),e.onMouseEntered()},this._onMouseEntered=function(){k(e.el,e.classNames.mouseEntered),e.options.autoHide&&(e.hideScrollbar("x"),e.hideScrollbar("y")),e.isMouseEntering=!1},this._onMouseMove=function(s){e.mouseX=s.clientX,e.mouseY=s.clientY,(e.axis.x.isOverflowing||e.axis.x.forceVisible)&&e.onMouseMoveForAxis("x"),(e.axis.y.isOverflowing||e.axis.y.forceVisible)&&e.onMouseMoveForAxis("y")},this.onMouseLeave=function(){e.onMouseMove.cancel(),(e.axis.x.isOverflowing||e.axis.x.forceVisible)&&e.onMouseLeaveForAxis("x"),(e.axis.y.isOverflowing||e.axis.y.forceVisible)&&e.onMouseLeaveForAxis("y"),e.mouseX=-1,e.mouseY=-1},this._onWindowResize=function(){e.scrollbarWidth=e.getScrollbarWidth(),e.hideNativeScrollbar()},this.onPointerEvent=function(s){if(!(!e.axis.x.track.el||!e.axis.y.track.el||!e.axis.x.scrollbar.el||!e.axis.y.scrollbar.el)){var l,n;e.axis.x.track.rect=e.axis.x.track.el.getBoundingClientRect(),e.axis.y.track.rect=e.axis.y.track.el.getBoundingClientRect(),(e.axis.x.isOverflowing||e.axis.x.forceVisible)&&(l=e.isWithinBounds(e.axis.x.track.rect)),(e.axis.y.isOverflowing||e.axis.y.forceVisible)&&(n=e.isWithinBounds(e.axis.y.track.rect)),(l||n)&&(s.stopPropagation(),s.type==="pointerdown"&&s.pointerType!=="touch"&&(l&&(e.axis.x.scrollbar.rect=e.axis.x.scrollbar.el.getBoundingClientRect(),e.isWithinBounds(e.axis.x.scrollbar.rect)?e.onDragStart(s,"x"):e.onTrackClick(s,"x")),n&&(e.axis.y.scrollbar.rect=e.axis.y.scrollbar.el.getBoundingClientRect(),e.isWithinBounds(e.axis.y.scrollbar.rect)?e.onDragStart(s,"y"):e.onTrackClick(s,"y"))))}},this.drag=function(s){var l,n,o,f,c,p,a,v,h,N,S;if(!(!e.draggedAxis||!e.contentWrapperEl)){var x,b=e.axis[e.draggedAxis].track,O=(n=(l=b.rect)===null||l===void 0?void 0:l[e.axis[e.draggedAxis].sizeAttr])!==null&&n!==void 0?n:0,R=e.axis[e.draggedAxis].scrollbar,D=(f=(o=e.contentWrapperEl)===null||o===void 0?void 0:o[e.axis[e.draggedAxis].scrollSizeAttr])!==null&&f!==void 0?f:0,T=parseInt((p=(c=e.elStyles)===null||c===void 0?void 0:c[e.axis[e.draggedAxis].sizeAttr])!==null&&p!==void 0?p:"0px",10);s.preventDefault(),s.stopPropagation(),e.draggedAxis==="y"?x=s.pageY:x=s.pageX;var u=x-((v=(a=b.rect)===null||a===void 0?void 0:a[e.axis[e.draggedAxis].offsetAttr])!==null&&v!==void 0?v:0)-e.axis[e.draggedAxis].dragOffset;u=e.draggedAxis==="x"&&e.isRtl?((N=(h=b.rect)===null||h===void 0?void 0:h[e.axis[e.draggedAxis].sizeAttr])!==null&&N!==void 0?N:0)-R.size-u:u;var y=u/(O-R.size),E=y*(D-T);e.draggedAxis==="x"&&e.isRtl&&(E=!((S=i.getRtlHelpers())===null||S===void 0)&&S.isScrollingToNegative?-E:E),e.contentWrapperEl[e.axis[e.draggedAxis].scrollOffsetAttr]=E}},this.onEndDrag=function(s){e.isDragging=!1;var l=V(e.el),n=w(e.el);s.preventDefault(),s.stopPropagation(),k(e.el,e.classNames.dragging),e.onStopScrolling(),l.removeEventListener("mousemove",e.drag,!0),l.removeEventListener("mouseup",e.onEndDrag,!0),e.removePreventClickId=n.setTimeout(function(){l.removeEventListener("click",e.preventClick,!0),l.removeEventListener("dblclick",e.preventClick,!0),e.removePreventClickId=null})},this.preventClick=function(s){s.preventDefault(),s.stopPropagation()},this.el=t,this.options=z(z({},i.defaultOptions),r),this.classNames=z(z({},i.defaultOptions.classNames),r.classNames),this.axis={x:{scrollOffsetAttr:"scrollLeft",sizeAttr:"width",scrollSizeAttr:"scrollWidth",offsetSizeAttr:"offsetWidth",offsetAttr:"left",overflowAttr:"overflowX",dragOffset:0,isOverflowing:!0,forceVisible:!1,track:{size:null,el:null,rect:null,isVisible:!1},scrollbar:{size:null,el:null,rect:null,isVisible:!1}},y:{scrollOffsetAttr:"scrollTop",sizeAttr:"height",scrollSizeAttr:"scrollHeight",offsetSizeAttr:"offsetHeight",offsetAttr:"top",overflowAttr:"overflowY",dragOffset:0,isOverflowing:!0,forceVisible:!1,track:{size:null,el:null,rect:null,isVisible:!1},scrollbar:{size:null,el:null,rect:null,isVisible:!1}}},typeof this.el!="object"||!this.el.nodeName)throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el));this.onMouseMove=Me(this._onMouseMove,64),this.onWindowResize=L(this._onWindowResize,64,{leading:!0}),this.onStopScrolling=L(this._onStopScrolling,this.stopScrollDelay),this.onMouseEntered=L(this._onMouseEntered,this.stopScrollDelay),this.init()}return i.getRtlHelpers=function(){if(i.rtlHelpers)return i.rtlHelpers;var t=document.createElement("div");t.innerHTML='<div class="simplebar-dummy-scrollbar-size"><div></div></div>';var r=t.firstElementChild,e=r==null?void 0:r.firstElementChild;if(!e)return null;document.body.appendChild(r),r.scrollLeft=0;var s=i.getOffset(r),l=i.getOffset(e);r.scrollLeft=-999;var n=i.getOffset(e);return document.body.removeChild(r),i.rtlHelpers={isScrollOriginAtZero:s.left!==l.left,isScrollingToNegative:l.left!==n.left},i.rtlHelpers},i.prototype.getScrollbarWidth=function(){try{return this.contentWrapperEl&&getComputedStyle(this.contentWrapperEl,"::-webkit-scrollbar").display==="none"||"scrollbarWidth"in document.documentElement.style||"-ms-overflow-style"in document.documentElement.style?0:$()}catch{return $()}},i.getOffset=function(t){var r=t.getBoundingClientRect(),e=V(t),s=w(t);return{top:r.top+(s.pageYOffset||e.documentElement.scrollTop),left:r.left+(s.pageXOffset||e.documentElement.scrollLeft)}},i.prototype.init=function(){H&&(this.initDOM(),this.rtlHelpers=i.getRtlHelpers(),this.scrollbarWidth=this.getScrollbarWidth(),this.recalculate(),this.initListeners())},i.prototype.initDOM=function(){var t,r;this.wrapperEl=this.el.querySelector(g(this.classNames.wrapper)),this.contentWrapperEl=this.options.scrollableNode||this.el.querySelector(g(this.classNames.contentWrapper)),this.contentEl=this.options.contentNode||this.el.querySelector(g(this.classNames.contentEl)),this.offsetEl=this.el.querySelector(g(this.classNames.offset)),this.maskEl=this.el.querySelector(g(this.classNames.mask)),this.placeholderEl=this.findChild(this.wrapperEl,g(this.classNames.placeholder)),this.heightAutoObserverWrapperEl=this.el.querySelector(g(this.classNames.heightAutoObserverWrapperEl)),this.heightAutoObserverEl=this.el.querySelector(g(this.classNames.heightAutoObserverEl)),this.axis.x.track.el=this.findChild(this.el,"".concat(g(this.classNames.track)).concat(g(this.classNames.horizontal))),this.axis.y.track.el=this.findChild(this.el,"".concat(g(this.classNames.track)).concat(g(this.classNames.vertical))),this.axis.x.scrollbar.el=((t=this.axis.x.track.el)===null||t===void 0?void 0:t.querySelector(g(this.classNames.scrollbar)))||null,this.axis.y.scrollbar.el=((r=this.axis.y.track.el)===null||r===void 0?void 0:r.querySelector(g(this.classNames.scrollbar)))||null,this.options.autoHide||(W(this.axis.x.scrollbar.el,this.classNames.visible),W(this.axis.y.scrollbar.el,this.classNames.visible))},i.prototype.initListeners=function(){var t=this,r,e=w(this.el);if(this.el.addEventListener("mouseenter",this.onMouseEnter),this.el.addEventListener("pointerdown",this.onPointerEvent,!0),this.el.addEventListener("mousemove",this.onMouseMove),this.el.addEventListener("mouseleave",this.onMouseLeave),(r=this.contentWrapperEl)===null||r===void 0||r.addEventListener("scroll",this.onScroll),e.addEventListener("resize",this.onWindowResize),!!this.contentEl){if(window.ResizeObserver){var s=!1,l=e.ResizeObserver||ResizeObserver;this.resizeObserver=new l(function(){s&&e.requestAnimationFrame(function(){t.recalculate()})}),this.resizeObserver.observe(this.el),this.resizeObserver.observe(this.contentEl),e.requestAnimationFrame(function(){s=!0})}this.mutationObserver=new e.MutationObserver(function(){e.requestAnimationFrame(function(){t.recalculate()})}),this.mutationObserver.observe(this.contentEl,{childList:!0,subtree:!0,characterData:!0})}},i.prototype.recalculate=function(){if(!(!this.heightAutoObserverEl||!this.contentEl||!this.contentWrapperEl||!this.wrapperEl||!this.placeholderEl)){var t=w(this.el);this.elStyles=t.getComputedStyle(this.el),this.isRtl=this.elStyles.direction==="rtl";var r=this.contentEl.offsetWidth,e=this.heightAutoObserverEl.offsetHeight<=1,s=this.heightAutoObserverEl.offsetWidth<=1||r>0,l=this.contentWrapperEl.offsetWidth,n=this.elStyles.overflowX,o=this.elStyles.overflowY;this.contentEl.style.padding="".concat(this.elStyles.paddingTop," ").concat(this.elStyles.paddingRight," ").concat(this.elStyles.paddingBottom," ").concat(this.elStyles.paddingLeft),this.wrapperEl.style.margin="-".concat(this.elStyles.paddingTop," -").concat(this.elStyles.paddingRight," -").concat(this.elStyles.paddingBottom," -").concat(this.elStyles.paddingLeft);var f=this.contentEl.scrollHeight,c=this.contentEl.scrollWidth;this.contentWrapperEl.style.height=e?"auto":"100%",this.placeholderEl.style.width=s?"".concat(r||c,"px"):"auto",this.placeholderEl.style.height="".concat(f,"px");var p=this.contentWrapperEl.offsetHeight;this.axis.x.isOverflowing=r!==0&&c>r,this.axis.y.isOverflowing=f>p,this.axis.x.isOverflowing=n==="hidden"?!1:this.axis.x.isOverflowing,this.axis.y.isOverflowing=o==="hidden"?!1:this.axis.y.isOverflowing,this.axis.x.forceVisible=this.options.forceVisible==="x"||this.options.forceVisible===!0,this.axis.y.forceVisible=this.options.forceVisible==="y"||this.options.forceVisible===!0,this.hideNativeScrollbar();var a=this.axis.x.isOverflowing?this.scrollbarWidth:0,v=this.axis.y.isOverflowing?this.scrollbarWidth:0;this.axis.x.isOverflowing=this.axis.x.isOverflowing&&c>l-v,this.axis.y.isOverflowing=this.axis.y.isOverflowing&&f>p-a,this.axis.x.scrollbar.size=this.getScrollbarSize("x"),this.axis.y.scrollbar.size=this.getScrollbarSize("y"),this.axis.x.scrollbar.el&&(this.axis.x.scrollbar.el.style.width="".concat(this.axis.x.scrollbar.size,"px")),this.axis.y.scrollbar.el&&(this.axis.y.scrollbar.el.style.height="".concat(this.axis.y.scrollbar.size,"px")),this.positionScrollbar("x"),this.positionScrollbar("y"),this.toggleTrackVisibility("x"),this.toggleTrackVisibility("y")}},i.prototype.getScrollbarSize=function(t){var r,e;if(t===void 0&&(t="y"),!this.axis[t].isOverflowing||!this.contentEl)return 0;var s=this.contentEl[this.axis[t].scrollSizeAttr],l=(e=(r=this.axis[t].track.el)===null||r===void 0?void 0:r[this.axis[t].offsetSizeAttr])!==null&&e!==void 0?e:0,n=l/s,o;return o=Math.max(~~(n*l),this.options.scrollbarMinSize),this.options.scrollbarMaxSize&&(o=Math.min(o,this.options.scrollbarMaxSize)),o},i.prototype.positionScrollbar=function(t){var r,e,s;t===void 0&&(t="y");var l=this.axis[t].scrollbar;if(!(!this.axis[t].isOverflowing||!this.contentWrapperEl||!l.el||!this.elStyles)){var n=this.contentWrapperEl[this.axis[t].scrollSizeAttr],o=((r=this.axis[t].track.el)===null||r===void 0?void 0:r[this.axis[t].offsetSizeAttr])||0,f=parseInt(this.elStyles[this.axis[t].sizeAttr],10),c=this.contentWrapperEl[this.axis[t].scrollOffsetAttr];c=t==="x"&&this.isRtl&&(!((e=i.getRtlHelpers())===null||e===void 0)&&e.isScrollOriginAtZero)?-c:c,t==="x"&&this.isRtl&&(c=!((s=i.getRtlHelpers())===null||s===void 0)&&s.isScrollingToNegative?c:-c);var p=c/(n-f),a=~~((o-l.size)*p);a=t==="x"&&this.isRtl?-a+(o-l.size):a,l.el.style.transform=t==="x"?"translate3d(".concat(a,"px, 0, 0)"):"translate3d(0, ".concat(a,"px, 0)")}},i.prototype.toggleTrackVisibility=function(t){t===void 0&&(t="y");var r=this.axis[t].track.el,e=this.axis[t].scrollbar.el;!r||!e||!this.contentWrapperEl||(this.axis[t].isOverflowing||this.axis[t].forceVisible?(r.style.visibility="visible",this.contentWrapperEl.style[this.axis[t].overflowAttr]="scroll",this.el.classList.add("".concat(this.classNames.scrollable,"-").concat(t))):(r.style.visibility="hidden",this.contentWrapperEl.style[this.axis[t].overflowAttr]="hidden",this.el.classList.remove("".concat(this.classNames.scrollable,"-").concat(t))),this.axis[t].isOverflowing?e.style.display="block":e.style.display="none")},i.prototype.showScrollbar=function(t){t===void 0&&(t="y"),this.axis[t].isOverflowing&&!this.axis[t].scrollbar.isVisible&&(W(this.axis[t].scrollbar.el,this.classNames.visible),this.axis[t].scrollbar.isVisible=!0)},i.prototype.hideScrollbar=function(t){t===void 0&&(t="y"),!this.isDragging&&this.axis[t].isOverflowing&&this.axis[t].scrollbar.isVisible&&(k(this.axis[t].scrollbar.el,this.classNames.visible),this.axis[t].scrollbar.isVisible=!1)},i.prototype.hideNativeScrollbar=function(){this.offsetEl&&(this.offsetEl.style[this.isRtl?"left":"right"]=this.axis.y.isOverflowing||this.axis.y.forceVisible?"-".concat(this.scrollbarWidth,"px"):"0px",this.offsetEl.style.bottom=this.axis.x.isOverflowing||this.axis.x.forceVisible?"-".concat(this.scrollbarWidth,"px"):"0px")},i.prototype.onMouseMoveForAxis=function(t){t===void 0&&(t="y");var r=this.axis[t];!r.track.el||!r.scrollbar.el||(r.track.rect=r.track.el.getBoundingClientRect(),r.scrollbar.rect=r.scrollbar.el.getBoundingClientRect(),this.isWithinBounds(r.track.rect)?(this.showScrollbar(t),W(r.track.el,this.classNames.hover),this.isWithinBounds(r.scrollbar.rect)?W(r.scrollbar.el,this.classNames.hover):k(r.scrollbar.el,this.classNames.hover)):(k(r.track.el,this.classNames.hover),this.options.autoHide&&this.hideScrollbar(t)))},i.prototype.onMouseLeaveForAxis=function(t){t===void 0&&(t="y"),k(this.axis[t].track.el,this.classNames.hover),k(this.axis[t].scrollbar.el,this.classNames.hover),this.options.autoHide&&this.hideScrollbar(t)},i.prototype.onDragStart=function(t,r){var e;r===void 0&&(r="y"),this.isDragging=!0;var s=V(this.el),l=w(this.el),n=this.axis[r].scrollbar,o=r==="y"?t.pageY:t.pageX;this.axis[r].dragOffset=o-(((e=n.rect)===null||e===void 0?void 0:e[this.axis[r].offsetAttr])||0),this.draggedAxis=r,W(this.el,this.classNames.dragging),s.addEventListener("mousemove",this.drag,!0),s.addEventListener("mouseup",this.onEndDrag,!0),this.removePreventClickId===null?(s.addEventListener("click",this.preventClick,!0),s.addEventListener("dblclick",this.preventClick,!0)):(l.clearTimeout(this.removePreventClickId),this.removePreventClickId=null)},i.prototype.onTrackClick=function(t,r){var e=this,s,l,n,o;r===void 0&&(r="y");var f=this.axis[r];if(!(!this.options.clickOnTrack||!f.scrollbar.el||!this.contentWrapperEl)){t.preventDefault();var c=w(this.el);this.axis[r].scrollbar.rect=f.scrollbar.el.getBoundingClientRect();var p=this.axis[r].scrollbar,a=(l=(s=p.rect)===null||s===void 0?void 0:s[this.axis[r].offsetAttr])!==null&&l!==void 0?l:0,v=parseInt((o=(n=this.elStyles)===null||n===void 0?void 0:n[this.axis[r].sizeAttr])!==null&&o!==void 0?o:"0px",10),h=this.contentWrapperEl[this.axis[r].scrollOffsetAttr],N=r==="y"?this.mouseY-a:this.mouseX-a,S=N<0?-1:1,x=S===-1?h-v:h+v,b=40,O=function(){e.contentWrapperEl&&(S===-1?h>x&&(h-=b,e.contentWrapperEl[e.axis[r].scrollOffsetAttr]=h,c.requestAnimationFrame(O)):h<x&&(h+=b,e.contentWrapperEl[e.axis[r].scrollOffsetAttr]=h,c.requestAnimationFrame(O)))};O()}},i.prototype.getContentElement=function(){return this.contentEl},i.prototype.getScrollElement=function(){return this.contentWrapperEl},i.prototype.removeListeners=function(){var t=w(this.el);this.el.removeEventListener("mouseenter",this.onMouseEnter),this.el.removeEventListener("pointerdown",this.onPointerEvent,!0),this.el.removeEventListener("mousemove",this.onMouseMove),this.el.removeEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl&&this.contentWrapperEl.removeEventListener("scroll",this.onScroll),t.removeEventListener("resize",this.onWindowResize),this.mutationObserver&&this.mutationObserver.disconnect(),this.resizeObserver&&this.resizeObserver.disconnect(),this.onMouseMove.cancel(),this.onWindowResize.cancel(),this.onStopScrolling.cancel(),this.onMouseEntered.cancel()},i.prototype.unMount=function(){this.removeListeners()},i.prototype.isWithinBounds=function(t){return this.mouseX>=t.left&&this.mouseX<=t.left+t.width&&this.mouseY>=t.top&&this.mouseY<=t.top+t.height},i.prototype.findChild=function(t,r){var e=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector;return Array.prototype.filter.call(t.children,function(s){return e.call(s,r)})[0]},i.rtlHelpers=null,i.defaultOptions={forceVisible:!1,clickOnTrack:!0,scrollbarMinSize:25,scrollbarMaxSize:0,ariaLabel:"scrollable content",tabIndex:0,classNames:{contentEl:"simplebar-content",contentWrapper:"simplebar-content-wrapper",offset:"simplebar-offset",mask:"simplebar-mask",wrapper:"simplebar-wrapper",placeholder:"simplebar-placeholder",scrollbar:"simplebar-scrollbar",track:"simplebar-track",heightAutoObserverWrapperEl:"simplebar-height-auto-observer-wrapper",heightAutoObserverEl:"simplebar-height-auto-observer",visible:"simplebar-visible",horizontal:"simplebar-horizontal",vertical:"simplebar-vertical",hover:"simplebar-hover",dragging:"simplebar-dragging",scrolling:"simplebar-scrolling",scrollable:"simplebar-scrollable",mouseEntered:"simplebar-mouse-entered"},scrollableNode:null,contentNode:null,autoHide:!0},i.getOptions=Re,i.helpers=Ce,i}(),m=function(){return m=Object.assign||function(t){for(var r,e=1,s=arguments.length;e<s;e++){r=arguments[e];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(t[l]=r[l])}return t},m.apply(this,arguments)};function Le(i,t){var r={};for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&t.indexOf(e)<0&&(r[e]=i[e]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,e=Object.getOwnPropertySymbols(i);s<e.length;s++)t.indexOf(e[s])<0&&Object.prototype.propertyIsEnumerable.call(i,e[s])&&(r[e[s]]=i[e[s]]);return r}var _e=d.forwardRef(function(i,t){var r=i.children,e=i.scrollableNodeProps,s=e===void 0?{}:e,l=Le(i,["children","scrollableNodeProps"]),n=d.useRef(),o=d.useRef(),f=d.useRef(),c={},p={};Object.keys(l).forEach(function(h){Object.prototype.hasOwnProperty.call(C.defaultOptions,h)?c[h]=l[h]:p[h]=l[h]});var a=m(m({},C.defaultOptions.classNames),c.classNames),v=m(m({},s),{className:"".concat(a.contentWrapper).concat(s.className?" ".concat(s.className):""),tabIndex:c.tabIndex||C.defaultOptions.tabIndex,role:"region","aria-label":c.ariaLabel||C.defaultOptions.ariaLabel});return d.useEffect(function(){var h;return o.current=v.ref?v.ref.current:o.current,n.current&&(h=new C(n.current,m(m(m({},c),o.current&&{scrollableNode:o.current}),f.current&&{contentNode:f.current})),typeof t=="function"?t(h):t&&(t.current=h)),function(){h==null||h.unMount(),h=null,typeof t=="function"&&t(null)}},[]),d.createElement("div",m({"data-simplebar":"init",ref:n},p),d.createElement("div",{className:a.wrapper},d.createElement("div",{className:a.heightAutoObserverWrapperEl},d.createElement("div",{className:a.heightAutoObserverEl})),d.createElement("div",{className:a.mask},d.createElement("div",{className:a.offset},typeof r=="function"?r({scrollableNodeRef:o,scrollableNodeProps:m(m({},v),{ref:o}),contentNodeRef:f,contentNodeProps:{className:a.contentEl,ref:f}}):d.createElement("div",m({},v),d.createElement("div",{className:a.contentEl},r)))),d.createElement("div",{className:a.placeholder})),d.createElement("div",{className:"".concat(a.track," simplebar-horizontal")},d.createElement("div",{className:a.scrollbar})),d.createElement("div",{className:"".concat(a.track," simplebar-vertical")},d.createElement("div",{className:a.scrollbar})))});_e.displayName="SimpleBar";export{_e as S};
