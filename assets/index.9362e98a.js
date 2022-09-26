import{a as k,j as m,r as q,F as Be}from"./jsx-runtime.503516e4.js";import{A as z}from"./index.e24b3ff4.js";import{s as R,a as qe}from"./theme.9c2e6479.js";import{B as J}from"./index.5651cac5.js";import{C as ut}from"./index.eeaf2df2.js";import{I as lt,c as He}from"./index.778e77b9.js";import{I as ve}from"./index.1d6d3abb.js";import{L as dt}from"./index.ee160c1a.js";import{c as ke}from"./iframe.14cb0103.js";import{M as oe}from"./index.4f40036b.js";import{C as pt}from"./index.93dfc771.js";import{C as ft}from"./index.ec2dee4a.js";import{I as mt}from"./index.87d4c893.js";import{T as Z}from"./index.cdd072d8.js";import{T as ht}from"./index.48ace947.js";import{T as je}from"./index.5acc641a.js";const Ae=R("h2",{margin:0,typo:{size:20,weight:"$2",height:"$2"},color:"$black"}),Ve=R("p",{margin:0,typo:{},color:"$darkGrey"}),Ye=R("div",{display:"flex",flexDirection:"column",alignItems:"center",padding:"48px 32px",textAlign:"center",[`& ${z.Container}`]:{marginBottom:"$4"},[`& ${Ae}`]:{marginBottom:8}}),yt=({name:e,description:t,image:r})=>k(Ye,{children:[m(z,{size:"large",image:r}),m(Ae,{children:e}),m(Ve,{children:t})]}),gt=Object.assign(yt,{Container:Ye,Title:Ae,Description:Ve});try{AssistantInfo.displayName="AssistantInfo",AssistantInfo.__docgenInfo={description:"",displayName:"AssistantInfo",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/AssistantInfo/index.tsx#AssistantInfo"]={docgenInfo:AssistantInfo.__docgenInfo,name:"AssistantInfo",path:"src/components/AssistantInfo/index.tsx#AssistantInfo"})}catch{}const Fe=R("footer",{padding:"$3 $4 0 $4",borderRadius:"$1",[`& ${lt.Container}`]:{flex:1},[`& ${J.Base}`]:{width:"100%"},variants:{withShadow:{true:{boxShadow:"0 12px 48px $shadow16"}}}}),Ue=R("aside",{display:"flex",justifyContent:"center",alignItems:"center",padding:"10px 0 $3 0",typo:{size:12,height:"17px"},color:"$darkGrey","& a":{marginLeft:"0.5ch",textDecoration:"none",color:"$primary","&:focus":{outline:0}}}),se=({hasEnded:e,onStart:t,onSend:r})=>{const[n,c]=q.exports.useState("");return k(Fe,{withShadow:!e,children:[e?m(J,{onClick:t,children:"Start New Chat"}):m(ut,{value:n,placeholder:"Message\u2026",autoFocus:!0,onValueChange:c,onSend:()=>{!n||(r==null||r(n),c(""))}}),k(Ue,{children:["Conversation \u26A1\uFE0F by",m("a",{target:"_blank",href:"https://voiceflow.com",rel:"noreferrer",children:"Voiceflow"})]})]})},St=Object.assign(se,{Container:Fe,Watermark:Ue});try{se.displayName="Footer",se.__docgenInfo={description:"",displayName:"Footer",props:{hasEnded:{defaultValue:null,description:"",name:"hasEnded",required:!1,type:{name:"boolean | undefined"}},onStart:{defaultValue:null,description:"",name:"onStart",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement> | undefined"}},onSend:{defaultValue:null,description:"",name:"onSend",required:!1,type:{name:"((message: string) => void) | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Footer/index.tsx#Footer"]={docgenInfo:se.__docgenInfo,name:"Footer",path:"src/components/Footer/index.tsx#Footer"})}catch{}const be=R("h1",{typo:{size:17,weight:"$2",height:"$2"},color:"rgba(255,255,255,0.95)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}),ze=R("button",{display:"flex",justifyContent:"center",alignItems:"center",height:32,width:32,marginLeft:8,border:0,borderRadius:6,padding:0,background:"none",trans:["background-color"],"&:focus":{outline:0},"&:hover":{cursor:"pointer",backgroundColor:"rgba(255,255,255,0.16)",[`& ${ve.Frame}`]:{color:"$white"}},[`& ${ve.Frame}`]:{height:"$xxs",width:"$xxs",color:"rgba(255,255,255,0.8)",trans:["color"]}}),Ke=R("header",{display:"flex",flexShrink:0,alignItems:"center",height:"$lg",padding:"0 $4 0 $5",backgroundColor:"$primary",boxShadow:"0 1px 2px $shadow16",[`& ${z.Container}`]:{height:32,width:32},[`& ${be}`]:{flex:1,marginLeft:14}}),ce=({title:e,image:t,actions:r=[]})=>k(Ke,{children:[m(z,{image:t}),m(be,{children:e}),r.map(({svg:n,onClick:c},u)=>m(ze,{onClick:c,children:m(ve,{svg:n})},u))]}),$t=Object.assign(ce,{Container:Ke,Title:be,Button:ze});try{ce.displayName="Header",ce.__docgenInfo={description:"",displayName:"Header",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"string"}},actions:{defaultValue:{value:"[]"},description:"",name:"actions",required:!1,type:{name:"HeaderActionProps[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Header/index.tsx#Header"]={docgenInfo:ce.__docgenInfo,name:"Header",path:"src/components/Header/index.tsx#Header"})}catch{}const We=R("div",{padding:"$4 $4 $3 $4",borderRadius:"$1",backgroundColor:"$white",boxShadow:"0 12px 48px 4px $shadow12",[`& ${J.Base}`]:{width:"100%",marginTop:"$1","&:first-of-type":{marginTop:0}}}),ue=({accept:e,cancel:t})=>k(We,{children:[m(J.Primary,{tabIndex:-1,...e,children:e.label}),m(J,{type:"subtle",tabIndex:-1,...t,children:t.label})]}),_e=Object.assign(ue,{Container:We});try{ue.displayName="Prompt",ue.__docgenInfo={description:"",displayName:"Prompt",props:{accept:{defaultValue:null,description:"",name:"accept",required:!0,type:{name:"PromptOptionProps"}},cancel:{defaultValue:null,description:"",name:"cancel",required:!0,type:{name:"PromptOptionProps"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Prompt/index.tsx#Prompt"]={docgenInfo:ue.__docgenInfo,name:"Prompt",path:"src/components/Prompt/index.tsx#Prompt"})}catch{}const Oe=q.exports.createContext({scrollToBottom:()=>{}}),{Consumer:ge}=Oe,le=({target:e,children:t})=>{const r=q.exports.useCallback(()=>{requestAnimationFrame(()=>{const c=e.current;if(!c)return;const{scrollTop:u,scrollHeight:y,clientHeight:w}=c,A=y-w;A!==u&&c.scrollTo({top:A})})},[]),n=q.exports.useMemo(()=>({scrollToBottom:r}),[r]);return m(Oe.Provider,{value:n,children:t})};try{ge.displayName="AutoScrollConsumer",ge.__docgenInfo={description:"",displayName:"AutoScrollConsumer",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/contexts/AutoScrollContext.tsx#AutoScrollConsumer"]={docgenInfo:ge.__docgenInfo,name:"AutoScrollConsumer",path:"src/contexts/AutoScrollContext.tsx#AutoScrollConsumer"})}catch{}try{le.displayName="AutoScrollProvider",le.__docgenInfo={description:"",displayName:"AutoScrollProvider",props:{target:{defaultValue:null,description:"",name:"target",required:!0,type:{name:"RefObject<T>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/contexts/AutoScrollContext.tsx#AutoScrollProvider"]={docgenInfo:le.__docgenInfo,name:"AutoScrollProvider",path:"src/contexts/AutoScrollContext.tsx#AutoScrollProvider"})}catch{}var vt={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(ke,function(){return function(r,n,c){r=r||{};var u=n.prototype,y={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function w(S,b,x,P){return u.fromToBase(S,b,x,P)}c.en.relativeTime=y,u.fromToBase=function(S,b,x,P,O){for(var i,C,l,M=x.$locale().relativeTime||y,g=r.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],T=g.length,E=0;E<T;E+=1){var $=g[E];$.d&&(i=P?c(S).diff(x,$.d,!0):x.diff(S,$.d,!0));var D=(r.rounding||Math.round)(Math.abs(i));if(l=i>0,D<=$.r||!$.r){D<=1&&E>0&&($=g[E-1]);var K=M[$.l];O&&(D=O(""+D)),C=typeof K=="string"?K.replace("%d",D):K(D,b,$.l,l);break}}if(b)return C;var Y=l?M.future:M.past;return typeof Y=="function"?Y(C):Y.replace("%s",C)},u.to=function(S,b){return w(S,b,this,!0)},u.from=function(S,b){return w(S,b,this)};var A=function(S){return S.$u?c.utc():c()};u.toNow=function(S){return this.to(A(this),S)},u.fromNow=function(S){return this.from(A(this),S)}}})})(vt);var Ge={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(ke,function(){var r=1e3,n=6e4,c=36e5,u="millisecond",y="second",w="minute",A="hour",S="day",b="week",x="month",P="quarter",O="year",i="date",C="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,M=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},T=function(h,s,o){var d=String(h);return!d||d.length>=s?h:""+Array(s+1-d.length).join(o)+h},E={s:T,z:function(h){var s=-h.utcOffset(),o=Math.abs(s),d=Math.floor(o/60),a=o%60;return(s<=0?"+":"-")+T(d,2,"0")+":"+T(a,2,"0")},m:function h(s,o){if(s.date()<o.date())return-h(o,s);var d=12*(o.year()-s.year())+(o.month()-s.month()),a=s.clone().add(d,x),f=o-a<0,p=s.clone().add(d+(f?-1:1),x);return+(-(d+(o-a)/(f?a-p:p-a))||0)},a:function(h){return h<0?Math.ceil(h)||0:Math.floor(h)},p:function(h){return{M:x,y:O,w:b,d:S,D:i,h:A,m:w,s:y,ms:u,Q:P}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(h){return h===void 0}},$="en",D={};D[$]=g;var K=function(h){return h instanceof ae},Y=function h(s,o,d){var a;if(!s)return $;if(typeof s=="string"){var f=s.toLowerCase();D[f]&&(a=f),o&&(D[f]=o,a=f);var p=s.split("-");if(!a&&p.length>1)return h(p[0])}else{var v=s.name;D[v]=s,a=v}return!d&&a&&($=a),a||!d&&$},N=function(h,s){if(K(h))return h.clone();var o=typeof s=="object"?s:{};return o.date=h,o.args=arguments,new ae(o)},_=E;_.l=Y,_.i=K,_.w=function(h,s){return N(h,{locale:s.$L,utc:s.$u,x:s.$x,$offset:s.$offset})};var ae=function(){function h(o){this.$L=Y(o.locale,null,!0),this.parse(o)}var s=h.prototype;return s.parse=function(o){this.$d=function(d){var a=d.date,f=d.utc;if(a===null)return new Date(NaN);if(_.u(a))return new Date;if(a instanceof Date)return new Date(a);if(typeof a=="string"&&!/Z$/i.test(a)){var p=a.match(l);if(p){var v=p[2]-1||0,L=(p[7]||"0").substring(0,3);return f?new Date(Date.UTC(p[1],v,p[3]||1,p[4]||0,p[5]||0,p[6]||0,L)):new Date(p[1],v,p[3]||1,p[4]||0,p[5]||0,p[6]||0,L)}}return new Date(a)}(o),this.$x=o.x||{},this.init()},s.init=function(){var o=this.$d;this.$y=o.getFullYear(),this.$M=o.getMonth(),this.$D=o.getDate(),this.$W=o.getDay(),this.$H=o.getHours(),this.$m=o.getMinutes(),this.$s=o.getSeconds(),this.$ms=o.getMilliseconds()},s.$utils=function(){return _},s.isValid=function(){return this.$d.toString()!==C},s.isSame=function(o,d){var a=N(o);return this.startOf(d)<=a&&a<=this.endOf(d)},s.isAfter=function(o,d){return N(o)<this.startOf(d)},s.isBefore=function(o,d){return this.endOf(d)<N(o)},s.$g=function(o,d,a){return _.u(o)?this[d]:this.set(a,o)},s.unix=function(){return Math.floor(this.valueOf()/1e3)},s.valueOf=function(){return this.$d.getTime()},s.startOf=function(o,d){var a=this,f=!!_.u(d)||d,p=_.p(o),v=function(X,H){var U=_.w(a.$u?Date.UTC(a.$y,H,X):new Date(a.$y,H,X),a);return f?U:U.endOf(S)},L=function(X,H){return _.w(a.toDate()[X].apply(a.toDate("s"),(f?[0,0,0,0]:[23,59,59,999]).slice(H)),a)},I=this.$W,B=this.$M,F=this.$D,V="set"+(this.$u?"UTC":"");switch(p){case O:return f?v(1,0):v(31,11);case x:return f?v(1,B):v(0,B+1);case b:var Q=this.$locale().weekStart||0,ee=(I<Q?I+7:I)-Q;return v(f?F-ee:F+(6-ee),B);case S:case i:return L(V+"Hours",0);case A:return L(V+"Minutes",1);case w:return L(V+"Seconds",2);case y:return L(V+"Milliseconds",3);default:return this.clone()}},s.endOf=function(o){return this.startOf(o,!1)},s.$set=function(o,d){var a,f=_.p(o),p="set"+(this.$u?"UTC":""),v=(a={},a[S]=p+"Date",a[i]=p+"Date",a[x]=p+"Month",a[O]=p+"FullYear",a[A]=p+"Hours",a[w]=p+"Minutes",a[y]=p+"Seconds",a[u]=p+"Milliseconds",a)[f],L=f===S?this.$D+(d-this.$W):d;if(f===x||f===O){var I=this.clone().set(i,1);I.$d[v](L),I.init(),this.$d=I.set(i,Math.min(this.$D,I.daysInMonth())).$d}else v&&this.$d[v](L);return this.init(),this},s.set=function(o,d){return this.clone().$set(o,d)},s.get=function(o){return this[_.p(o)]()},s.add=function(o,d){var a,f=this;o=Number(o);var p=_.p(d),v=function(B){var F=N(f);return _.w(F.date(F.date()+Math.round(B*o)),f)};if(p===x)return this.set(x,this.$M+o);if(p===O)return this.set(O,this.$y+o);if(p===S)return v(1);if(p===b)return v(7);var L=(a={},a[w]=n,a[A]=c,a[y]=r,a)[p]||1,I=this.$d.getTime()+o*L;return _.w(I,this)},s.subtract=function(o,d){return this.add(-1*o,d)},s.format=function(o){var d=this,a=this.$locale();if(!this.isValid())return a.invalidDate||C;var f=o||"YYYY-MM-DDTHH:mm:ssZ",p=_.z(this),v=this.$H,L=this.$m,I=this.$M,B=a.weekdays,F=a.months,V=function(H,U,ye,ie){return H&&(H[U]||H(d,f))||ye[U].slice(0,ie)},Q=function(H){return _.s(v%12||12,H,"0")},ee=a.meridiem||function(H,U,ye){var ie=H<12?"AM":"PM";return ye?ie.toLowerCase():ie},X={YY:String(this.$y).slice(-2),YYYY:this.$y,M:I+1,MM:_.s(I+1,2,"0"),MMM:V(a.monthsShort,I,F,3),MMMM:V(F,I),D:this.$D,DD:_.s(this.$D,2,"0"),d:String(this.$W),dd:V(a.weekdaysMin,this.$W,B,2),ddd:V(a.weekdaysShort,this.$W,B,3),dddd:B[this.$W],H:String(v),HH:_.s(v,2,"0"),h:Q(1),hh:Q(2),a:ee(v,L,!0),A:ee(v,L,!1),m:String(L),mm:_.s(L,2,"0"),s:String(this.$s),ss:_.s(this.$s,2,"0"),SSS:_.s(this.$ms,3,"0"),Z:p};return f.replace(M,function(H,U){return U||X[H]||p.replace(":","")})},s.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},s.diff=function(o,d,a){var f,p=_.p(d),v=N(o),L=(v.utcOffset()-this.utcOffset())*n,I=this-v,B=_.m(this,v);return B=(f={},f[O]=B/12,f[x]=B,f[P]=B/3,f[b]=(I-L)/6048e5,f[S]=(I-L)/864e5,f[A]=I/c,f[w]=I/n,f[y]=I/r,f)[p]||I,a?B:_.a(B)},s.daysInMonth=function(){return this.endOf(x).$D},s.$locale=function(){return D[this.$L]},s.locale=function(o,d){if(!o)return this.$L;var a=this.clone(),f=Y(o,d,!0);return f&&(a.$L=f),a},s.clone=function(){return _.w(this.$d,this)},s.toDate=function(){return new Date(this.valueOf())},s.toJSON=function(){return this.isValid()?this.toISOString():null},s.toISOString=function(){return this.$d.toISOString()},s.toString=function(){return this.$d.toUTCString()},h}(),Re=ae.prototype;return N.prototype=Re,[["$ms",u],["$s",y],["$m",w],["$H",A],["$W",S],["$M",x],["$y",O],["$D",i]].forEach(function(h){Re[h[1]]=function(s){return this.$g(s,h[0],h[1])}}),N.extend=function(h,s){return h.$i||(h(s,ae,N),h.$i=!0),N},N.locale=Y,N.isDayjs=K,N.unix=function(h){return N(1e3*h)},N.en=D[$],N.Ls=D,N.p={},N})})(Ge);const Me=Ge.exports,_t=e=>q.exports.useMemo(()=>{const t=Me(e),r=Me();switch(!0){case r.isSame(t,"day"):return"Today";case r.subtract(1,"day").isSame(t,"day"):return"Yesterday";default:return t.fromNow()}},[]);var xt=globalThis&&globalThis.__spreadArray||function(e,t,r){if(r||arguments.length===2)for(var n=0,c=t.length,u;n<c;n++)(u||!(n in t))&&(u||(u=Array.prototype.slice.call(t,0,n)),u[n]=t[n]);return e.concat(u||Array.prototype.slice.call(t))};function Ct(e,t,r){var n=e.length-t.length,c=Array.from(t);if(n===0)return e.apply(void 0,c);if(n===1){var u=function(y){return e.apply(void 0,xt([y],c,!1))};return(r||e.lazy)&&(u.lazy=r||e.lazy,u.lazyArgs=t),u}throw new Error("Wrong number of arguments")}var wt=function(){};function Le(){return Ct(At,arguments)}function At(e,t){var r=new Set(t);return Object.entries(e).reduce(function(n,c){var u=c[0],y=c[1];return r.has(u)||(n[u]=y),n},{})}const xe=Symbol("@ts-pattern/matcher"),Pe="@ts-pattern/anonymous-select-key",De=e=>Boolean(e&&typeof e=="object"),Se=e=>e&&!!e[xe],re=(e,t,r)=>{if(De(e)){if(Se(e)){const n=e[xe](),{matched:c,selections:u}=n.match(t);return c&&u&&Object.keys(u).forEach(y=>r(y,u[y])),c}if(!De(t))return!1;if(Array.isArray(e))return!!Array.isArray(t)&&e.length===t.length&&e.every((n,c)=>re(n,t[c],r));if(e instanceof Map)return t instanceof Map&&Array.from(e.keys()).every(n=>re(e.get(n),t.get(n),r));if(e instanceof Set){if(!(t instanceof Set))return!1;if(e.size===0)return t.size===0;if(e.size===1){const[n]=Array.from(e.values());return Se(n)?Array.from(t.values()).every(c=>re(n,c,r)):t.has(n)}return Array.from(e.values()).every(n=>t.has(n))}return Object.keys(e).every(n=>{const c=e[n];return(n in t||Se(u=c)&&u[xe]().matcherType==="optional")&&re(c,t[n],r);var u})}return Object.is(t,e)},Je=e=>new ne(e,[]);class ne{constructor(t,r){this.value=void 0,this.cases=void 0,this.value=t,this.cases=r}with(...t){const r=t[t.length-1],n=[t[0]],c=[];return t.length===3&&typeof t[1]=="function"?(n.push(t[0]),c.push(t[1])):t.length>2&&n.push(...t.slice(1,t.length-1)),new ne(this.value,this.cases.concat([{match:u=>{let y={};const w=Boolean(n.some(A=>re(A,u,(S,b)=>{y[S]=b}))&&c.every(A=>A(u)));return{matched:w,value:w&&Object.keys(y).length?Pe in y?y[Pe]:y:u}},handler:r}]))}when(t,r){return new ne(this.value,this.cases.concat([{match:n=>({matched:Boolean(t(n)),value:n}),handler:r}]))}otherwise(t){return new ne(this.value,this.cases.concat([{match:r=>({matched:!0,value:r}),handler:t}])).run()}exhaustive(){return this.run()}run(){let t,r=this.value;for(let n=0;n<this.cases.length;n++){const c=this.cases[n],u=c.match(this.value);if(u.matched){r=u.value,t=c.handler;break}}if(!t){let n;try{n=JSON.stringify(this.value)}catch{n=this.value}throw new Error(`Pattern matching error: no pattern matches value ${n}`)}return t(r,this.value)}}const Xe=(e=[])=>{const{scrollToBottom:t}=q.exports.useContext(Oe);q.exports.useLayoutEffect(()=>{t()},e)};var Ze={exports:{}};/*!
 * depd
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var bt=Ot;function Ot(e){if(!e)throw new TypeError("argument namespace is required");function t(r){}return t._file=void 0,t._ignored=!0,t._namespace=e,t._traced=!1,t._warned=Object.create(null),t.function=Tt,t.property=Et,t}function Tt(e,t){if(typeof e!="function")throw new TypeError("argument fn must be a function");return e}function Et(e,t,r){if(!e||typeof e!="object"&&typeof e!="function")throw new TypeError("argument obj must be object");var n=Object.getOwnPropertyDescriptor(e,t);if(!n)throw new TypeError("must call property on owner object");if(!n.configurable)throw new TypeError("property must be configurable")}var It=Object.setPrototypeOf||({__proto__:[]}instanceof Array?Rt:Mt);function Rt(e,t){return e.__proto__=t,e}function Mt(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(e,r)||(e[r]=t[r]);return e}const Lt={100:"Continue",101:"Switching Protocols",102:"Processing",103:"Early Hints",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Payload Too Large",414:"URI Too Long",415:"Unsupported Media Type",416:"Range Not Satisfiable",417:"Expectation Failed",418:"I'm a Teapot",421:"Misdirected Request",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",425:"Too Early",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",509:"Bandwidth Limit Exceeded",510:"Not Extended",511:"Network Authentication Required"};/*!
 * statuses
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */var Te=Lt,Pt=j;j.message=Te;j.code=Dt(Te);j.codes=Nt(Te);j.redirect={300:!0,301:!0,302:!0,303:!0,305:!0,307:!0,308:!0};j.empty={204:!0,205:!0,304:!0};j.retry={502:!0,503:!0,504:!0};function Dt(e){var t={};return Object.keys(e).forEach(function(n){var c=e[n],u=Number(n);t[c.toLowerCase()]=u}),t}function Nt(e){return Object.keys(e).map(function(r){return Number(r)})}function Bt(e){var t=e.toLowerCase();if(!Object.prototype.hasOwnProperty.call(j.code,t))throw new Error('invalid status message: "'+e+'"');return j.code[t]}function Ne(e){if(!Object.prototype.hasOwnProperty.call(j.message,e))throw new Error("invalid status code: "+e);return j.message[e]}function j(e){if(typeof e=="number")return Ne(e);if(typeof e!="string")throw new TypeError("code must be a number or string");var t=parseInt(e,10);return isNaN(t)?Bt(e):Ne(t)}var Ce={exports:{}};typeof Object.create=="function"?Ce.exports=function(t,r){r&&(t.super_=r,t.prototype=Object.create(r.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}))}:Ce.exports=function(t,r){if(r){t.super_=r;var n=function(){};n.prototype=r.prototype,t.prototype=new n,t.prototype.constructor=t}};/*!
 * toidentifier
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */var qt=Ht;function Ht(e){return e.split(" ").map(function(t){return t.slice(0,1).toUpperCase()+t.slice(1)}).join("").replace(/[^ _0-9a-z]/gi,"")}/*!
 * http-errors
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */(function(e){bt("http-errors");var t=It,r=Pt,n=Ce.exports,c=qt;e.exports=y,e.exports.HttpError=w(),e.exports.isHttpError=S(e.exports.HttpError),P(e.exports,r.codes,e.exports.HttpError);function u(i){return Number(String(i).charAt(0)+"00")}function y(){for(var i,C,l=500,M={},g=0;g<arguments.length;g++){var T=arguments[g],E=typeof T;if(E==="object"&&T instanceof Error)i=T,l=i.status||i.statusCode||l;else if(E==="number"&&g===0)l=T;else if(E==="string")C=T;else if(E==="object")M=T;else throw new TypeError("argument #"+(g+1)+" unsupported type "+E)}(typeof l!="number"||!r.message[l]&&(l<400||l>=600))&&(l=500);var $=y[l]||y[u(l)];i||(i=$?new $(C):new Error(C||r.message[l]),Error.captureStackTrace(i,y)),(!$||!(i instanceof $)||i.status!==l)&&(i.expose=l<500,i.status=i.statusCode=l);for(var D in M)D!=="status"&&D!=="statusCode"&&(i[D]=M[D]);return i}function w(){function i(){throw new TypeError("cannot construct abstract class")}return n(i,Error),i}function A(i,C,l){var M=O(C);function g(T){var E=T!=null?T:r.message[l],$=new Error(E);return Error.captureStackTrace($,g),t($,g.prototype),Object.defineProperty($,"message",{enumerable:!0,configurable:!0,value:E,writable:!0}),Object.defineProperty($,"name",{enumerable:!1,configurable:!0,value:M,writable:!0}),$}return n(g,i),x(g,M),g.prototype.status=l,g.prototype.statusCode=l,g.prototype.expose=!0,g}function S(i){return function(l){return!l||typeof l!="object"?!1:l instanceof i?!0:l instanceof Error&&typeof l.expose=="boolean"&&typeof l.statusCode=="number"&&l.status===l.statusCode}}function b(i,C,l){var M=O(C);function g(T){var E=T!=null?T:r.message[l],$=new Error(E);return Error.captureStackTrace($,g),t($,g.prototype),Object.defineProperty($,"message",{enumerable:!0,configurable:!0,value:E,writable:!0}),Object.defineProperty($,"name",{enumerable:!1,configurable:!0,value:M,writable:!0}),$}return n(g,i),x(g,M),g.prototype.status=l,g.prototype.statusCode=l,g.prototype.expose=!1,g}function x(i,C){var l=Object.getOwnPropertyDescriptor(i,"name");l&&l.configurable&&(l.value=C,Object.defineProperty(i,"name",l))}function P(i,C,l){C.forEach(function(g){var T,E=c(r.message[g]);switch(u(g)){case 400:T=A(l,E,g);break;case 500:T=b(l,E,g);break}T&&(i[g]=T,i[E]=T)})}function O(i){return i.substr(-5)!=="Error"?i+"Error":i}})(Ze);const sr=Ze.exports;var G=(e=>(e.TEXT="text",e.IMAGE="image",e.CARD="card",e.CAROUSEL="carousel",e))(G||{});const kt=1e3,jt={type:"indicator"},Vt={type:"actions"},Yt=(e,t)=>q.exports.useMemo(()=>{const r=e.flatMap(c=>[jt,{type:"message",message:c}]),n=t?[Vt]:[];return[...r,...n]},[]),Ft=({messages:e,isAnimated:t,hasActions:r,onAnimationEnd:n})=>{const c=t&&e.length,[u,y]=q.exports.useState(!1),[w,A]=q.exports.useState(!c),[S,b]=q.exports.useState(c?[]:e),x=Yt(e,r);return q.exports.useEffect(()=>{if(!c)return;const P=[...x];let O;const i=l=>{O=setTimeout(()=>{l()},kt)},C=()=>{const l=P.shift();!l||Je(l).with({type:"message"},({message:M})=>{y(!1),b(g=>[...g,M]),i(C),P.length||n()}).with({type:"indicator"},()=>{y(!0),i(C)}).with({type:"actions"},()=>{y(!1),A(!0),n()}).exhaustive()};return C(),()=>{clearTimeout(O)}},[]),{showIndicator:u,showActions:w,visibleMessages:S}},Qe=R("div",{display:"flex",flexWrap:"wrap",marginBottom:"$5",padding:"0 $5 0 34px",[`& ${J.Base}`]:{height:"unset",paddingTop:7,paddingBottom:7,marginTop:8,marginRight:8,whiteSpace:"normal",textAlign:"start"}}),Ee=R("div",{display:"flex",[`& ${z.Container}`]:{visibility:"hidden",alignSelf:"flex-end",margin:"0 8px 4px 0"},[`& ${Z.Container}`]:{alignSelf:"center",whiteSpace:"nowrap",marginLeft:8,opacity:"0%",trans:["opacity"]},[`&:hover ${Z.Container}`]:{opacity:"100%"},variants:{withImage:{true:{[`& ${z.Container}`]:{visibility:"visible"}}},scrollable:{true:{overflowX:"scroll",flexShrink:0}},center:{true:{alignItems:"center"}}}}),et=R("div",{display:"flex",flexDirection:"column",flexShrink:0,[`& ${oe.Container}`]:{marginBottom:"$1",maxWidth:248,"&:last-of-type":{marginBottom:0}}}),de=({image:e})=>k(Ee,{withImage:!0,center:!0,children:[m(z,{image:e}),m(ht,{})]}),tt=de;try{de.displayName="Indicator",de.__docgenInfo={description:"",displayName:"Indicator",props:{image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/SystemResponse/Indicator.tsx#Indicator"]={docgenInfo:de.__docgenInfo,name:"Indicator",path:"src/components/SystemResponse/Indicator.tsx#Indicator"})}catch{}const pe=({image:e,timestamp:t,messages:r,actions:n=[],isAnimated:c=!1,onAnimationEnd:u=wt})=>{const[y,w]=q.exports.useState(!1),{showIndicator:A,showActions:S,visibleMessages:b}=Ft({messages:r,isAnimated:c,hasActions:!!n.length,onAnimationEnd:u}),x=()=>w(!0);return Xe([b.length]),r.length?k(Be,{children:[b.map((P,O)=>k(Ee,{withImage:!A&&O===b.length-1,scrollable:P.type===G.CAROUSEL,children:[m(z,{image:e}),m(et,{children:Je(P).with({type:G.TEXT},({text:i})=>m(oe,{from:"system",children:i},O)).with({type:G.IMAGE},({url:i})=>m(mt,{image:i})).with({type:G.CARD},i=>m(pt,{...Le(i,["type"])})).with({type:G.CAROUSEL},i=>m(ft,{...Le(i,["type"])})).otherwise(()=>null)}),m(Z,{value:t})]},O)),S&&!y&&m(Qe,{children:n.map(({label:P,onClick:O},i)=>m(J,{variant:"secondary",onClick:He(O,x),children:P},i))}),A&&m(tt,{image:e})]}):null},W=Object.assign(pe,{Message:G,Container:Ee,List:et,Actions:Qe,Indicator:tt});try{pe.displayName="SystemResponse",pe.__docgenInfo={description:"",displayName:"SystemResponse",props:{image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"string"}},timestamp:{defaultValue:null,description:"",name:"timestamp",required:!0,type:{name:"Date"}},messages:{defaultValue:null,description:"",name:"messages",required:!0,type:{name:"MessageProps[]"}},actions:{defaultValue:{value:"[]"},description:"",name:"actions",required:!1,type:{name:"ResponseActionProps[]"}},isAnimated:{defaultValue:{value:"false"},description:"",name:"isAnimated",required:!1,type:{name:"boolean"}},onAnimationEnd:{defaultValue:{value:"R.noop"},description:"",name:"onAnimationEnd",required:!1,type:{name:"VoidFunction"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/SystemResponse/index.tsx#SystemResponse"]={docgenInfo:pe.__docgenInfo,name:"SystemResponse",path:"src/components/SystemResponse/index.tsx#SystemResponse"})}catch{}const rt=R("aside",{typo:{size:"12px",height:"17px"},color:"$darkGrey",marginTop:"$2"}),nt=R("div",{display:"flex",flexDirection:"column",flexShrink:0,alignItems:"flex-end",[`& ${oe.Container}`]:{maxWidth:282},[`& > ${je.Container}`]:{marginTop:"$1"}}),ot=R("div",{display:"flex",width:"100%",alignItems:"center",[`& ${Z.Container}`]:{flexGrow:1,marginRight:8,textAlign:"end",opacity:"0%",trans:["opacity"]},[`&:hover ${Z.Container}`]:{opacity:"100%"}}),fe=({message:e,timestamp:t,debug:r})=>{var n,c;return Xe(),k(nt,{children:[k(ot,{children:[m(Z,{value:t}),m(oe,{from:"user",children:e})]}),r&&k(Be,{children:[m(rt,{children:r.message}),r.reason&&m(je,{label:(n=r.action)==null?void 0:n.label,onClick:(c=r.action)==null?void 0:c.onClick,orientation:"right",children:r.reason})]})]})},te=Object.assign(fe,{Container:nt,Debug:rt,Row:ot});try{fe.displayName="UserResponse",fe.__docgenInfo={description:"",displayName:"UserResponse",props:{message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},timestamp:{defaultValue:null,description:"",name:"timestamp",required:!0,type:{name:"Date"}},debug:{defaultValue:null,description:"",name:"debug",required:!1,type:{name:"DebugResponseProps"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/UserResponse/index.tsx#UserResponse"]={docgenInfo:fe.__docgenInfo,name:"UserResponse",path:"src/components/UserResponse/index.tsx#UserResponse"})}catch{}const $e=10,he=R("div",{position:"absolute",top:0,bottom:0,left:0,right:0,zIndex:0,backgroundColor:"$shadow12"}),we=R("article",{position:"relative",display:"flex",flexDirection:"column",width:380,borderRadius:"$2",overflow:"hidden",backgroundColor:"$white",boxShadow:"0 2px 48px rgba(19,33,68,0.12), 0 0 0 1px $shadow4",[`& ${he}`]:{opacity:0,pointerEvents:"none",trans:["opacity"]},[`& ${_e.Container}`]:{position:"absolute",bottom:0,width:"100%",boxSizing:"border-box",paddingBottom:`calc($3 + ${$e}px)`,transition:"transform 320ms cubic-bezier(0.45, 1.29, 0.64, 1)",transform:`translateY(calc(100% + ${$e}px))`},variants:{withPrompt:{true:{[`& ${he}`]:{opacity:1,pointerEvents:"auto"},[`& ${_e.Container}`]:{transform:`translateY(${$e}px)`}}}}}),at={display:"flex",justifyContent:"center",typo:{size:12},color:"$darkGrey"},Ie=R("div",{...at}),it=R("main",{display:"flex",flexDirection:"column",height:"100%",overflowY:"scroll",overflowX:"hidden",paddingBottom:"$3",[`
    & ${W.List} > *,
    & ${oe.Container},
    & > ${W.Actions}
  `]:{anim:[qe]},[`
    & > ${te.Container},
    & > ${W.Container}
  `]:{padding:"0 $5"},[`& > ${W.Actions}`]:{padding:"0 $5 0 54px"},[`& ${W.Container}`]:{marginBottom:"$1","&:last-of-type":{marginBottom:0}},[`& ${te.Container} + ${te.Container}`]:{marginTop:"$1"},[`
    & ${W.Container} + ${te.Container},
    & ${te.Container} + ${W.Container}
  `]:{marginTop:"$5"},[`& ${Ie}`]:{marginTop:"$3",marginBottom:8}}),st=R("div",{flexGrow:1}),ct=R("span",{...at,paddingBottom:"$3",anim:[qe]}),me=({hasEnded:e,title:t,image:r,description:n,startTime:c,isLoading:u,onMinimize:y,onEnd:w,onStart:A,onSend:S,children:b})=>{const x=_t(c),P=q.exports.useRef(null),[O,i]=q.exports.useState(!1),C=M=>{e?w==null||w(M):i(!0)},l=()=>i(!1);return u?m(we,{children:m(dt,{})}):k(we,{withPrompt:O,children:[m($t,{title:t,image:r,actions:[{svg:"minus",onClick:y},{svg:"close",onClick:C}]}),m(it,{ref:P,children:k(le,{target:P,children:[m(gt,{name:t,image:r,description:n}),m(st,{}),m(ct,{children:x}),b,e&&m(Ie,{children:"You have ended the chat"})]})}),m(St,{hasEnded:e,onStart:A,onSend:S}),m(he,{}),m(_e,{accept:{label:"End Chat",type:"warn",onClick:He(w,l)},cancel:{label:"Cancel",onClick:l}})]})},cr=Object.assign(q.exports.memo(me),{Container:we,Dialog:it,Overlay:he,Spacer:st,Status:Ie,Timestamp:ct});try{me.displayName="Chat",me.__docgenInfo={description:"",displayName:"Chat",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},startTime:{defaultValue:null,description:"",name:"startTime",required:!0,type:{name:"Date"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!0,type:{name:"boolean"}},onMinimize:{defaultValue:null,description:"",name:"onMinimize",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},onEnd:{defaultValue:null,description:"",name:"onEnd",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"string"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"HeaderActionProps[]"}},hasEnded:{defaultValue:null,description:"",name:"hasEnded",required:!1,type:{name:"boolean | undefined"}},onStart:{defaultValue:null,description:"",name:"onStart",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement> | undefined"}},onSend:{defaultValue:null,description:"",name:"onSend",required:!1,type:{name:"((message: string) => void) | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Chat/index.tsx#Chat"]={docgenInfo:me.__docgenInfo,name:"Chat",path:"src/components/Chat/index.tsx#Chat"})}catch{}export{gt as A,cr as C,St as F,$t as H,Je as K,_e as P,W as S,te as U,sr as c,Le as o};
//# sourceMappingURL=index.9362e98a.js.map
