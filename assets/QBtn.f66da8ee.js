import{c,A as ee,B as me,h as g,w as te,g as K,C as z,b as he,e as be,D as ne,d as ye,E as ae,r as Q,o as ke,s as w,T as pe,F as xe}from"./index.98b7dee7.js";const N={xs:18,sm:24,md:32,lg:38,xl:46},re={size:String};function le(e,t=N){return c(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const I=e=>ee(me(e)),qe=e=>ee(e);function Ee(e,t){return e!==void 0&&e()||t}function A(e,t){return e!==void 0?t.concat(e()):t}function Je(e,t,n,i,u,o){t.key=i+u;const s=g(e,t,n);return u===!0?te(s,o()):s}const D="0 0 24 24",F=e=>e,j=e=>`ionicons ${e}`,ie={"mdi-":e=>`mdi ${e}`,"icon-":F,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":j,"ion-ios":j,"ion-logo":j,"iconfont ":F,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},ue={o_:"-outlined",r_:"-round",s_:"-sharp"},se={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},$e=new RegExp("^("+Object.keys(ie).join("|")+")"),Re=new RegExp("^("+Object.keys(ue).join("|")+")"),H=new RegExp("^("+Object.keys(se).join("|")+")"),Se=/^[Mm]\s?[-+]?\.?\d/,we=/^img:/,Be=/^svguse:/,Le=/^ion-/,_e=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var U=I({name:"QIcon",props:{...re,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=K(),i=le(e),u=c(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),o=c(()=>{let s,a=e.name;if(a==="none"||!a)return{none:!0};if(n.iconMapFn!==null){const v=n.iconMapFn(a);if(v!==void 0)if(v.icon!==void 0){if(a=v.icon,a==="none"||!a)return{none:!0}}else return{cls:v.cls,content:v.content!==void 0?v.content:" "}}if(Se.test(a)===!0){const[v,y=D]=a.split("|");return{svg:!0,viewBox:y,nodes:v.split("&&").map(k=>{const[r,p,b]=k.split("@@");return g("path",{style:p,d:r,transform:b})})}}if(we.test(a)===!0)return{img:!0,src:a.substring(4)};if(Be.test(a)===!0){const[v,y=D]=a.split("|");return{svguse:!0,src:v.substring(7),viewBox:y}}let h=" ";const E=a.match($e);if(E!==null)s=ie[E[1]](a);else if(_e.test(a)===!0)s=a;else if(Le.test(a)===!0)s=`ionicons ion-${n.platform.is.ios===!0?"ios":"md"}${a.substring(3)}`;else if(H.test(a)===!0){s="notranslate material-symbols";const v=a.match(H);v!==null&&(a=a.substring(6),s+=se[v[1]]),h=a}else{s="notranslate material-icons";const v=a.match(Re);v!==null&&(a=a.substring(2),s+=ue[v[1]]),h=a}return{cls:s,content:h}});return()=>{const s={class:u.value,style:i.value,"aria-hidden":"true",role:"presentation"};return o.value.none===!0?g(e.tag,s,Ee(t.default)):o.value.img===!0?g("span",s,A(t.default,[g("img",{src:o.value.src})])):o.value.svg===!0?g("span",s,A(t.default,[g("svg",{viewBox:o.value.viewBox||"0 0 24 24"},o.value.nodes)])):o.value.svguse===!0?g("span",s,A(t.default,[g("svg",{viewBox:o.value.viewBox},[g("use",{"xlink:href":o.value.src})])])):(o.value.cls!==void 0&&(s.class+=" "+o.value.cls),g(e.tag,s,A(t.default,[o.value.content])))}}});const Ce={size:{type:[Number,String],default:"1em"},color:String};function Pe(e){return{cSize:c(()=>e.size in N?`${N[e.size]}px`:e.size),classes:c(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var Te=I({name:"QSpinner",props:{...Ce,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:n}=Pe(e);return()=>g("svg",{class:n.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[g("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function Ae(e,t){const n=e.style;for(const i in t)n[i]=t[i]}function Me(e,t=250){let n=!1,i;return function(){return n===!1&&(n=!0,setTimeout(()=>{n=!1},t),i=e.apply(this,arguments)),i}}function W(e,t,n,i){n.modifiers.stop===!0&&ne(e);const u=n.modifiers.color;let o=n.modifiers.center;o=o===!0||i===!0;const s=document.createElement("span"),a=document.createElement("span"),h=ye(e),{left:E,top:v,width:y,height:k}=t.getBoundingClientRect(),r=Math.sqrt(y*y+k*k),p=r/2,b=`${(y-r)/2}px`,d=o?b:`${h.left-E-p}px`,f=`${(k-r)/2}px`,x=o?f:`${h.top-v-p}px`;a.className="q-ripple__inner",Ae(a,{height:`${r}px`,width:`${r}px`,transform:`translate3d(${d},${x},0) scale3d(.2,.2,1)`,opacity:0}),s.className=`q-ripple${u?" text-"+u:""}`,s.setAttribute("dir","ltr"),s.appendChild(a),t.appendChild(s);const S=()=>{s.remove(),clearTimeout($)};n.abort.push(S);let $=setTimeout(()=>{a.classList.add("q-ripple__inner--enter"),a.style.transform=`translate3d(${b},${f},0) scale3d(1,1,1)`,a.style.opacity=.2,$=setTimeout(()=>{a.classList.remove("q-ripple__inner--enter"),a.classList.add("q-ripple__inner--leave"),a.style.opacity=0,$=setTimeout(()=>{s.remove(),n.abort.splice(n.abort.indexOf(S),1)},275)},250)},50)}function X(e,{modifiers:t,value:n,arg:i}){const u=Object.assign({},e.cfg.ripple,t,n);e.modifiers={early:u.early===!0,stop:u.stop===!0,center:u.center===!0,color:u.color||i,keyCodes:[].concat(u.keyCodes||13)}}var Oe=qe({name:"ripple",beforeMount(e,t){const n=t.instance.$.appContext.config.globalProperties.$q.config||{};if(n.ripple===!1)return;const i={cfg:n,enabled:t.value!==!1,modifiers:{},abort:[],start(u){i.enabled===!0&&u.qSkipRipple!==!0&&u.type===(i.modifiers.early===!0?"pointerdown":"click")&&W(u,e,i,u.qKeyEvent===!0)},keystart:Me(u=>{i.enabled===!0&&u.qSkipRipple!==!0&&z(u,i.modifiers.keyCodes)===!0&&u.type===`key${i.modifiers.early===!0?"down":"up"}`&&W(u,e,i,!0)},300)};X(i,t),e.__qripple=i,he(i,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const n=e.__qripple;n!==void 0&&(n.enabled=t.value!==!1,n.enabled===!0&&Object(t.value)===t.value&&X(n,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(n=>{n()}),be(t,"main"),delete e._qripple)}});const oe={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},je=Object.keys(oe),ze={align:{type:String,validator:e=>je.includes(e)}};function Ne(e){return c(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${oe[t]}`})}function ce(e,t){typeof t.type=="symbol"?Array.isArray(t.children)===!0&&t.children.forEach(n=>{ce(e,n)}):e.add(t)}function Ze(e){const t=new Set;return e.forEach(n=>{ce(t,n)}),Array.from(t)}function Ke(e){return e.appContext.config.globalProperties.$router!==void 0}function Y(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function G(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ie(e,t){for(const n in t){const i=t[n],u=e[n];if(typeof i=="string"){if(i!==u)return!1}else if(Array.isArray(u)===!1||u.length!==i.length||i.some((o,s)=>o!==u[s]))return!1}return!0}function J(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((n,i)=>n===t[i]):e.length===1&&e[0]===t}function Ve(e,t){return Array.isArray(e)===!0?J(e,t):Array.isArray(t)===!0?J(t,e):e===t}function Qe(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(Ve(e[n],t[n])===!1)return!1;return!0}const De={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function Fe(e){const t=K(),{props:n,proxy:i}=t,u=Ke(t),o=c(()=>n.disable!==!0&&n.href!==void 0),s=c(()=>u===!0&&n.disable!==!0&&o.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),a=c(()=>{if(s.value===!0)try{return i.$router.resolve(n.to)}catch{}return null}),h=c(()=>a.value!==null),E=c(()=>o.value===!0||h.value===!0),v=c(()=>n.type==="a"||E.value===!0?"a":n.tag||e||"div"),y=c(()=>o.value===!0?{href:n.href,target:n.target}:h.value===!0?{href:a.value.href,target:n.target}:{}),k=c(()=>{if(h.value===!1)return null;const{matched:f}=a.value,{length:x}=f,S=f[x-1];if(S===void 0)return-1;const $=i.$route.matched;if($.length===0)return-1;const C=$.findIndex(G.bind(null,S));if(C>-1)return C;const M=Y(f[x-2]);return x>1&&Y(S)===M&&$[$.length-1].path!==M?$.findIndex(G.bind(null,f[x-2])):C}),r=c(()=>h.value===!0&&k.value>-1&&Ie(i.$route.params,a.value.params)),p=c(()=>r.value===!0&&k.value===i.$route.matched.length-1&&Qe(i.$route.params,a.value.params)),b=c(()=>h.value===!0?p.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":r.value===!0?` ${n.activeClass}`:"":"");function d(f){return n.disable===!0||f.metaKey||f.altKey||f.ctrlKey||f.shiftKey||f.__qNavigate!==!0&&f.defaultPrevented===!0||f.button!==void 0&&f.button!==0||n.target==="_blank"?!1:(ae(f),i.$router[n.replace===!0?"replace":"push"](n.to).catch(x=>x))}return{hasRouterLink:h,hasHrefLink:o,hasLink:E,linkTag:v,linkRoute:a,linkIsActive:r,linkIsExactActive:p,linkClass:b,linkProps:y,navigateToRouterLink:d}}const Z={none:0,xs:4,sm:8,md:16,lg:24,xl:32},He={xs:8,sm:10,md:14,lg:20,xl:24},Ue=["button","submit","reset"],We=/[^\s]\/[^\s]/,Xe={...re,...De,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,round:Boolean,square:Boolean,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...ze.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function Ye(e){const t=le(e,He),n=Ne(e),{hasRouterLink:i,hasLink:u,linkTag:o,linkProps:s,navigateToRouterLink:a}=Fe("button"),h=c(()=>{const d=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},d,{padding:e.padding.split(/\s+/).map(f=>f in Z?Z[f]+"px":f).join(" "),minWidth:"0",minHeight:"0"}):d}),E=c(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),v=c(()=>e.disable!==!0&&e.loading!==!0),y=c(()=>v.value===!0?e.tabindex||0:-1),k=c(()=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":"standard"),r=c(()=>{const d={tabindex:y.value};return u.value===!0?Object.assign(d,s.value):Ue.includes(e.type)===!0&&(d.type=e.type),o.value==="a"?(e.disable===!0?d["aria-disabled"]="true":d.href===void 0&&(d.role="button"),i.value!==!0&&We.test(e.type)===!0&&(d.type=e.type)):e.disable===!0&&(d.disabled="",d["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(d,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),d}),p=c(()=>{let d;e.color!==void 0?e.flat===!0||e.outline===!0?d=`text-${e.textColor||e.color}`:d=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(d=`text-${e.textColor}`);const f=e.round===!0?"round":`rectangle${E.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${k.value} q-btn--${f}`+(d!==void 0?" "+d:"")+(v.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),b=c(()=>n.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:p,style:h,innerClasses:b,attributes:r,hasRouterLink:i,hasLink:u,linkTag:o,navigateToRouterLink:a,isActionable:v}}const{passiveCapture:q}=xe;let B=null,L=null,_=null;var et=I({name:"QBtn",props:{...Xe,percentage:Number,darkPercentage:Boolean},emits:["click","keydown","touchstart","mousedown","keyup"],setup(e,{slots:t,emit:n}){const{proxy:i}=K(),{classes:u,style:o,innerClasses:s,attributes:a,hasRouterLink:h,hasLink:E,linkTag:v,navigateToRouterLink:y,isActionable:k}=Ye(e),r=Q(null),p=Q(null);let b=null,d,f;const x=c(()=>e.label!==void 0&&e.label!==null&&e.label!==""),S=c(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:E.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),$=c(()=>({center:e.round})),C=c(()=>{const l=Math.max(0,Math.min(100,e.percentage));return l>0?{transition:"transform 0.6s",transform:`translateX(${l-100}%)`}:{}}),M=c(()=>e.loading===!0?{onMousedown:T,onTouchstartPassive:T,onClick:T,onKeydown:T,onKeyup:T}:k.value===!0?{onClick:V,onKeydown:fe,onMousedown:ge,onTouchstart:ve}:{onClick:w}),de=c(()=>({ref:r,class:"q-btn q-btn-item non-selectable no-outline "+u.value,style:o.value,...a.value,...M.value}));function V(l){if(r.value!==null){if(l!==void 0){if(l.defaultPrevented===!0)return;const m=document.activeElement;if(e.type==="submit"&&m!==document.body&&r.value.contains(m)===!1&&m.contains(r.value)===!1){r.value.focus();const O=()=>{document.removeEventListener("keydown",w,!0),document.removeEventListener("keyup",O,q),r.value!==null&&r.value.removeEventListener("blur",O,q)};document.addEventListener("keydown",w,!0),document.addEventListener("keyup",O,q),r.value.addEventListener("blur",O,q)}}if(h.value===!0){const m=()=>{l.__qNavigate=!0,y(l)};n("click",l,m),l.defaultPrevented!==!0&&m()}else n("click",l)}}function fe(l){r.value!==null&&(n("keydown",l),z(l,[13,32])===!0&&L!==r.value&&(L!==null&&P(),l.defaultPrevented!==!0&&(r.value.focus(),L=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("keyup",R,!0),r.value.addEventListener("blur",R,q)),w(l)))}function ve(l){r.value!==null&&(n("touchstart",l),l.defaultPrevented!==!0&&(B!==r.value&&(B!==null&&P(),B=r.value,b=l.target,b.addEventListener("touchcancel",R,q),b.addEventListener("touchend",R,q)),d=!0,clearTimeout(f),f=setTimeout(()=>{d=!1},200)))}function ge(l){r.value!==null&&(l.qSkipRipple=d===!0,n("mousedown",l),l.defaultPrevented!==!0&&_!==r.value&&(_!==null&&P(),_=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("mouseup",R,q)))}function R(l){if(r.value!==null&&!(l!==void 0&&l.type==="blur"&&document.activeElement===r.value)){if(l!==void 0&&l.type==="keyup"){if(L===r.value&&z(l,[13,32])===!0){const m=new MouseEvent("click",l);m.qKeyEvent=!0,l.defaultPrevented===!0&&ae(m),l.cancelBubble===!0&&ne(m),r.value.dispatchEvent(m),w(l),l.qKeyEvent=!0}n("keyup",l)}P()}}function P(l){const m=p.value;l!==!0&&(B===r.value||_===r.value)&&m!==null&&m!==document.activeElement&&(m.setAttribute("tabindex",-1),m.focus()),B===r.value&&(b!==null&&(b.removeEventListener("touchcancel",R,q),b.removeEventListener("touchend",R,q)),B=b=null),_===r.value&&(document.removeEventListener("mouseup",R,q),_=null),L===r.value&&(document.removeEventListener("keyup",R,!0),r.value!==null&&r.value.removeEventListener("blur",R,q),L=null),r.value!==null&&r.value.classList.remove("q-btn--active")}function T(l){w(l),l.qSkipRipple=!0}return ke(()=>{P(!0)}),Object.assign(i,{click:V}),()=>{let l=[];e.icon!==void 0&&l.push(g(U,{name:e.icon,left:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"})),x.value===!0&&l.push(g("span",{class:"block"},[e.label])),l=A(t.default,l),e.iconRight!==void 0&&e.round===!1&&l.push(g(U,{name:e.iconRight,right:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"}));const m=[g("span",{class:"q-focus-helper",ref:p})];return e.loading===!0&&e.percentage!==void 0&&m.push(g("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[g("span",{class:"q-btn__progress-indicator fit block",style:C.value})])),m.push(g("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+s.value},l)),e.loading!==null&&m.push(g(pe,{name:"q-transition--fade"},()=>e.loading===!0?[g("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[g(Te)])]:null)),te(g(v.value,de.value,m),[[Oe,S.value,void 0,$.value]])}}});export{U as Q,Oe as R,qe as a,A as b,I as c,Je as d,et as e,Ze as g,Ee as h};
