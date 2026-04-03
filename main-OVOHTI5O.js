import{a as I3}from"./chunk-N5B4HRXN.js";import{a as Cn}from"./chunk-2URZGDMV.js";import{a as Sn,b as Ln,c as En}from"./chunk-H4M6ZWTS.js";import{a as F3,b as D3}from"./chunk-SRLTWXXR.js";import{a as ke}from"./chunk-54WW45P3.js";import{a as yn,b as Mn}from"./chunk-2IKEZMIR.js";import{a as gn}from"./chunk-AO2EU4QT.js";import{a as P3}from"./chunk-64TPFHKS.js";import{a as kn}from"./chunk-ZSEIRNIV.js";import{a as we}from"./chunk-IRXK3LXQ.js";import{a as wn}from"./chunk-K7WOHYXU.js";import{a as w3,b as O5,e as K1,g as K5,h as Y1}from"./chunk-NWXC4DEL.js";import{a as xn}from"./chunk-VWBXCRL4.js";import{a as zn}from"./chunk-OCJINJ7E.js";import{a as xe}from"./chunk-OEUQR4OO.js";import{A as U5,B as Q5,D as T3,G as A3,H as _n,a as x3,b as k3,c as N5,d as A5,e as P5,f as h2,j as I5,o as F5,q as b2,r as D5,s as V2}from"./chunk-XWMLM5BP.js";import"./chunk-QS6E4XPV.js";import{b as Z5}from"./chunk-ZBRJJCXO.js";import{a as w5,c as S5,d as C5,e as L5,g as E5,h as T5,i as _2,j as y2}from"./chunk-3JOXZUQO.js";import{a as L3}from"./chunk-AHSROPK4.js";import{$ as cn,A as X5,E as H2,G as J5,H as en,I as Me,J as E3,K as u4,L as ze,M as p4,O as We,R as tn,V as nn,W as an,X as rn,Y as on,a as R5,b as B5,ca as sn,d as B1,da as ln,e as S2,f as n2,ga as mn,h as j5,ha as dn,i as q5,j as V5,k as G5,ka as fn,l as $5,ma as N3,na as v2,o as S3,q as H5,r as C2,sa as W2,ua as U2,v as f4,w as W5,y as a2,z as Y5}from"./chunk-R4JMH6OL.js";import{$a as n4,$b as y3,Ab as t2,Ad as vn,Bb as i2,C as f3,Ca as k2,Cb as C,Cc as A1,Da as h3,Db as g,Dc as f5,E as D2,Eb as _,Ec as u5,F as J1,Fa as Ge,Fb as H,Fc as L1,G as Qi,Ga as M,Gb as a4,Hb as s5,Hc as J,Ia as r1,Ic as He,Ja as b3,Jb as v3,K as Ki,Kb as _3,L as u3,Lb as l5,M as e4,Mb as M1,N as Yi,Na as i4,Nb as p2,Nc as p5,Ob as B,Pb as m5,Qb as T,Qc as m4,Ra as e5,Rb as o1,Sa as t5,Sb as j,T as Xi,Tb as U1,Ua as x,Ub as h1,Uc as h5,V as re,Va as i5,Vb as O,Vc as b5,W as O2,Wa as oe,Wb as R,Wc as _1,X as $1,Xa as R2,Z as Zi,Za as g3,_a as R1,_b as w2,_c as Q1,a as Z1,aa as $,ab as n5,ac as W,b as ge,bb as B2,bc as j2,bd as g5,cc as Q,cd as v5,d as Hi,da as qe,dc as q2,dd as _5,e as f2,ea as z,ec as N1,ed as y5,f as T1,fa as Y,fb as E,fd as M5,gb as X,gd as z5,h as ve,ha as s1,hb as U,hd as x5,ib as $e,id as k5,j as Wi,ja as p3,jb as e1,jc as r4,jd as G2,ka as l,kb as W1,kc as o4,kd as d4,l as u1,lb as a5,lc as c4,m as u2,ma as Ji,mc as v1,md as C3,nb as r5,nc as _e,nd as $2,pa as l1,pb as o5,pc as Z,pd as z1,q as Ui,qa as m1,qc as c1,qd as N,ra as Ve,rc as ye,s as I,sa as t4,sc as d5,sd as un,ta as e2,tb as c5,tc as s4,td as pn,ua as H1,ub as n1,ud as g2,vb as d1,vd as hn,w as S1,wc as l4,wd as bn,xa as C1,xb as f1,xd as q,ya as p1,yb as ce,yc as M3,zc as z3}from"./chunk-7OGAOZO7.js";var F=(function(n){return n[n.State=0]="State",n[n.Transition=1]="Transition",n[n.Sequence=2]="Sequence",n[n.Group=3]="Group",n[n.Animate=4]="Animate",n[n.Keyframes=5]="Keyframes",n[n.Style=6]="Style",n[n.Trigger=7]="Trigger",n[n.Reference=8]="Reference",n[n.AnimateChild=9]="AnimateChild",n[n.AnimateRef=10]="AnimateRef",n[n.Query=11]="Query",n[n.Stagger=12]="Stagger",n})(F||{}),r2="*";function Tn(n,i=null){return{type:F.Sequence,steps:n,options:i}}function h4(n){return{type:F.Style,styles:n,offset:null}}var L2=class{_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_originalOnDoneFns=[];_originalOnStartFns=[];_started=!1;_destroyed=!1;_finished=!1;_position=0;parentPlayer=null;totalTime;constructor(i=0,e=0){this.totalTime=i+e}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(i=>i()),this._onDoneFns=[])}onStart(i){this._originalOnStartFns.push(i),this._onStartFns.push(i)}onDone(i){this._originalOnDoneFns.push(i),this._onDoneFns.push(i)}onDestroy(i){this._onDestroyFns.push(i)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(i=>i()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(i=>i()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(i){this._position=this.totalTime?i*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(i){let e=i=="start"?this._onStartFns:this._onDoneFns;e.forEach(t=>t()),e.length=0}},Se=class{_onDoneFns=[];_onStartFns=[];_finished=!1;_started=!1;_destroyed=!1;_onDestroyFns=[];parentPlayer=null;totalTime=0;players;constructor(i){this.players=i;let e=0,t=0,a=0,r=this.players.length;r==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(o=>{o.onDone(()=>{++e==r&&this._onFinish()}),o.onDestroy(()=>{++t==r&&this._onDestroy()}),o.onStart(()=>{++a==r&&this._onStart()})}),this.totalTime=this.players.reduce((o,c)=>Math.max(o,c.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(i=>i()),this._onDoneFns=[])}init(){this.players.forEach(i=>i.init())}onStart(i){this._onStartFns.push(i)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(i=>i()),this._onStartFns=[])}onDone(i){this._onDoneFns.push(i)}onDestroy(i){this._onDestroyFns.push(i)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(i=>i.play())}pause(){this.players.forEach(i=>i.pause())}restart(){this.players.forEach(i=>i.restart())}finish(){this._onFinish(),this.players.forEach(i=>i.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(i=>i.destroy()),this._onDestroyFns.forEach(i=>i()),this._onDestroyFns=[])}reset(){this.players.forEach(i=>i.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(i){let e=i*this.totalTime;this.players.forEach(t=>{let a=t.totalTime?Math.min(1,e/t.totalTime):1;t.setPosition(a)})}getPosition(){let i=this.players.reduce((e,t)=>e===null||t.totalTime>e.totalTime?t:e,null);return i!=null?i.getPosition():0}beforeDestroy(){this.players.forEach(i=>{i.beforeDestroy&&i.beforeDestroy()})}triggerCallback(i){let e=i=="start"?this._onStartFns:this._onDoneFns;e.forEach(t=>t()),e.length=0}},Ue="!";function Nn(n){return new $(3e3,!1)}function nr(){return new $(3100,!1)}function ar(){return new $(3101,!1)}function rr(n){return new $(3001,!1)}function or(n){return new $(3003,!1)}function cr(n){return new $(3004,!1)}function Pn(n,i){return new $(3005,!1)}function In(){return new $(3006,!1)}function Fn(){return new $(3007,!1)}function Dn(n,i){return new $(3008,!1)}function On(n){return new $(3002,!1)}function Rn(n,i,e,t,a){return new $(3010,!1)}function Bn(){return new $(3011,!1)}function jn(){return new $(3012,!1)}function qn(){return new $(3200,!1)}function Vn(){return new $(3202,!1)}function Gn(){return new $(3013,!1)}function $n(n){return new $(3014,!1)}function Hn(n){return new $(3015,!1)}function Wn(n){return new $(3016,!1)}function Un(n,i){return new $(3404,!1)}function sr(n){return new $(3502,!1)}function Qn(n){return new $(3503,!1)}function Kn(){return new $(3300,!1)}function Yn(n){return new $(3504,!1)}function Xn(n){return new $(3301,!1)}function Zn(n,i){return new $(3302,!1)}function Jn(n){return new $(3303,!1)}function ea(n,i){return new $(3400,!1)}function ta(n){return new $(3401,!1)}function ia(n){return new $(3402,!1)}function na(n,i){return new $(3505,!1)}function E2(n){switch(n.length){case 0:return new L2;case 1:return n[0];default:return new Se(n)}}function _4(n,i,e=new Map,t=new Map){let a=[],r=[],o=-1,c=null;if(i.forEach(s=>{let m=s.get("offset"),f=m==o,d=f&&c||new Map;s.forEach((h,p)=>{let b=p,v=h;if(p!=="offset")switch(b=n.normalizePropertyName(b,a),v){case Ue:v=e.get(p);break;case r2:v=t.get(p);break;default:v=n.normalizeStyleValue(p,b,v,a);break}d.set(b,v)}),f||r.push(d),c=d,o=m}),a.length)throw sr(a);return r}function O3(n,i,e,t){switch(i){case"start":n.onStart(()=>t(e&&b4(e,"start",n)));break;case"done":n.onDone(()=>t(e&&b4(e,"done",n)));break;case"destroy":n.onDestroy(()=>t(e&&b4(e,"destroy",n)));break}}function b4(n,i,e){let t=e.totalTime,a=!!e.disabled,r=R3(n.element,n.triggerName,n.fromState,n.toState,i||n.phaseName,t??n.totalTime,a),o=n._data;return o!=null&&(r._data=o),r}function R3(n,i,e,t,a="",r=0,o){return{element:n,triggerName:i,fromState:e,toState:t,phaseName:a,totalTime:r,disabled:!!o}}function F1(n,i,e){let t=n.get(i);return t||n.set(i,t=e),t}function y4(n){let i=n.indexOf(":"),e=n.substring(1,i),t=n.slice(i+1);return[e,t]}var lr=typeof document>"u"?null:document.documentElement;function B3(n){let i=n.parentNode||n.host||null;return i===lr?null:i}function mr(n){return n.substring(1,6)=="ebkit"}var se=null,An=!1;function aa(n){se||(se=dr()||{},An=se.style?"WebkitAppearance"in se.style:!1);let i=!0;return se.style&&!mr(n)&&(i=n in se.style,!i&&An&&(i="Webkit"+n.charAt(0).toUpperCase()+n.slice(1)in se.style)),i}function dr(){return typeof document<"u"?document.body:null}function M4(n,i){for(;i;){if(i===n)return!0;i=B3(i)}return!1}function z4(n,i,e){if(e)return Array.from(n.querySelectorAll(i));let t=n.querySelector(i);return t?[t]:[]}var fr=1e3,x4="{{",ur="}}",k4="ng-enter",j3="ng-leave",Qe="ng-trigger",Ke=".ng-trigger",w4="ng-animating",q3=".ng-animating";function M2(n){if(typeof n=="number")return n;let i=n.match(/^(-?[\.\d]+)(m?s)/);return!i||i.length<2?0:g4(parseFloat(i[1]),i[2])}function g4(n,i){return i==="s"?n*fr:n}function Ye(n,i,e){return n.hasOwnProperty("duration")?n:hr(n,i,e)}var pr=/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;function hr(n,i,e){let t,a=0,r="";if(typeof n=="string"){let o=n.match(pr);if(o===null)return i.push(Nn(n)),{duration:0,delay:0,easing:""};t=g4(parseFloat(o[1]),o[2]);let c=o[3];c!=null&&(a=g4(parseFloat(c),o[4]));let s=o[5];s&&(r=s)}else t=n;if(!e){let o=!1,c=i.length;t<0&&(i.push(nr()),o=!0),a<0&&(i.push(ar()),o=!0),o&&i.splice(c,0,Nn(n))}return{duration:t,delay:a,easing:r}}function ra(n){return n.length?n[0]instanceof Map?n:n.map(i=>new Map(Object.entries(i))):[]}function o2(n,i,e){i.forEach((t,a)=>{let r=V3(a);e&&!e.has(a)&&e.set(a,n.style[r]),n.style[r]=t})}function Q2(n,i){i.forEach((e,t)=>{let a=V3(t);n.style[a]=""})}function Ce(n){return Array.isArray(n)?n.length==1?n[0]:Tn(n):n}function oa(n,i,e){let t=i.params||{},a=S4(n);a.length&&a.forEach(r=>{t.hasOwnProperty(r)||e.push(rr(r))})}var v4=new RegExp(`${x4}\\s*(.+?)\\s*${ur}`,"g");function S4(n){let i=[];if(typeof n=="string"){let e;for(;e=v4.exec(n);)i.push(e[1]);v4.lastIndex=0}return i}function Le(n,i,e){let t=`${n}`,a=t.replace(v4,(r,o)=>{let c=i[o];return c==null&&(e.push(or(o)),c=""),c.toString()});return a==t?n:a}var br=/-+([a-z0-9])/g;function V3(n){return n.replace(br,(...i)=>i[1].toUpperCase())}function ca(n,i){return n===0||i===0}function sa(n,i,e){if(e.size&&i.length){let t=i[0],a=[];if(e.forEach((r,o)=>{t.has(o)||a.push(o),t.set(o,r)}),a.length)for(let r=1;r<i.length;r++){let o=i[r];a.forEach(c=>o.set(c,G3(n,c)))}}return i}function D1(n,i,e){switch(i.type){case F.Trigger:return n.visitTrigger(i,e);case F.State:return n.visitState(i,e);case F.Transition:return n.visitTransition(i,e);case F.Sequence:return n.visitSequence(i,e);case F.Group:return n.visitGroup(i,e);case F.Animate:return n.visitAnimate(i,e);case F.Keyframes:return n.visitKeyframes(i,e);case F.Style:return n.visitStyle(i,e);case F.Reference:return n.visitReference(i,e);case F.AnimateChild:return n.visitAnimateChild(i,e);case F.AnimateRef:return n.visitAnimateRef(i,e);case F.Query:return n.visitQuery(i,e);case F.Stagger:return n.visitStagger(i,e);default:throw cr(i.type)}}function G3(n,i){return window.getComputedStyle(n)[i]}var G4=(()=>{class n{validateStyleProperty(e){return aa(e)}containsElement(e,t){return M4(e,t)}getParentElement(e){return B3(e)}query(e,t,a){return z4(e,t,a)}computeStyle(e,t,a){return a||""}animate(e,t,a,r,o,c=[],s){return new L2(a,r)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=z({token:n,factory:n.\u0275fac})}return n})(),me=class{static NOOP=new G4},de=class{};var gr=new Set(["width","height","minWidth","minHeight","maxWidth","maxHeight","left","top","bottom","right","fontSize","outlineWidth","outlineOffset","paddingTop","paddingLeft","paddingBottom","paddingRight","marginTop","marginLeft","marginBottom","marginRight","borderRadius","borderWidth","borderTopWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","textIndent","perspective"]),Q3=class extends de{normalizePropertyName(i,e){return V3(i)}normalizeStyleValue(i,e,t,a){let r="",o=t.toString().trim();if(gr.has(e)&&t!==0&&t!=="0")if(typeof t=="number")r="px";else{let c=t.match(/^[+-]?[\d\.]+([a-z]*)$/);c&&c[1].length==0&&a.push(Pn(i,t))}return o+r}};var K3="*";function vr(n,i){let e=[];return typeof n=="string"?n.split(/\s*,\s*/).forEach(t=>_r(t,e,i)):e.push(n),e}function _r(n,i,e){if(n[0]==":"){let s=yr(n,e);if(typeof s=="function"){i.push(s);return}n=s}let t=n.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(t==null||t.length<4)return e.push(Hn(n)),i;let a=t[1],r=t[2],o=t[3];i.push(la(a,o));let c=a==K3&&o==K3;r[0]=="<"&&!c&&i.push(la(o,a))}function yr(n,i){switch(n){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(e,t)=>parseFloat(t)>parseFloat(e);case":decrement":return(e,t)=>parseFloat(t)<parseFloat(e);default:return i.push(Wn(n)),"* => *"}}var $3=new Set(["true","1"]),H3=new Set(["false","0"]);function la(n,i){let e=$3.has(n)||H3.has(n),t=$3.has(i)||H3.has(i);return(a,r)=>{let o=n==K3||n==a,c=i==K3||i==r;return!o&&e&&typeof a=="boolean"&&(o=a?$3.has(n):H3.has(n)),!c&&t&&typeof r=="boolean"&&(c=r?$3.has(i):H3.has(i)),o&&c}}var _a=":self",Mr=new RegExp(`s*${_a}s*,?`,"g");function ya(n,i,e,t){return new A4(n).build(i,e,t)}var ma="",A4=class{_driver;constructor(i){this._driver=i}build(i,e,t){let a=new P4(e);return this._resetContextStyleTimingState(a),D1(this,Ce(i),a)}_resetContextStyleTimingState(i){i.currentQuerySelector=ma,i.collectedStyles=new Map,i.collectedStyles.set(ma,new Map),i.currentTime=0}visitTrigger(i,e){let t=e.queryCount=0,a=e.depCount=0,r=[],o=[];return i.name.charAt(0)=="@"&&e.errors.push(In()),i.definitions.forEach(c=>{if(this._resetContextStyleTimingState(e),c.type==F.State){let s=c,m=s.name;m.toString().split(/\s*,\s*/).forEach(f=>{s.name=f,r.push(this.visitState(s,e))}),s.name=m}else if(c.type==F.Transition){let s=this.visitTransition(c,e);t+=s.queryCount,a+=s.depCount,o.push(s)}else e.errors.push(Fn())}),{type:F.Trigger,name:i.name,states:r,transitions:o,queryCount:t,depCount:a,options:null}}visitState(i,e){let t=this.visitStyle(i.styles,e),a=i.options&&i.options.params||null;if(t.containsDynamicStyles){let r=new Set,o=a||{};t.styles.forEach(c=>{c instanceof Map&&c.forEach(s=>{S4(s).forEach(m=>{o.hasOwnProperty(m)||r.add(m)})})}),r.size&&e.errors.push(Dn(i.name,[...r.values()]))}return{type:F.State,name:i.name,style:t,options:a?{params:a}:null}}visitTransition(i,e){e.queryCount=0,e.depCount=0;let t=D1(this,Ce(i.animation),e),a=vr(i.expr,e.errors);return{type:F.Transition,matchers:a,animation:t,queryCount:e.queryCount,depCount:e.depCount,options:le(i.options)}}visitSequence(i,e){return{type:F.Sequence,steps:i.steps.map(t=>D1(this,t,e)),options:le(i.options)}}visitGroup(i,e){let t=e.currentTime,a=0,r=i.steps.map(o=>{e.currentTime=t;let c=D1(this,o,e);return a=Math.max(a,e.currentTime),c});return e.currentTime=a,{type:F.Group,steps:r,options:le(i.options)}}visitAnimate(i,e){let t=wr(i.timings,e.errors);e.currentAnimateTimings=t;let a,r=i.styles?i.styles:h4({});if(r.type==F.Keyframes)a=this.visitKeyframes(r,e);else{let o=i.styles,c=!1;if(!o){c=!0;let m={};t.easing&&(m.easing=t.easing),o=h4(m)}e.currentTime+=t.duration+t.delay;let s=this.visitStyle(o,e);s.isEmptyStep=c,a=s}return e.currentAnimateTimings=null,{type:F.Animate,timings:t,style:a,options:null}}visitStyle(i,e){let t=this._makeStyleAst(i,e);return this._validateStyleAst(t,e),t}_makeStyleAst(i,e){let t=[],a=Array.isArray(i.styles)?i.styles:[i.styles];for(let c of a)typeof c=="string"?c===r2?t.push(c):e.errors.push(On(c)):t.push(new Map(Object.entries(c)));let r=!1,o=null;return t.forEach(c=>{if(c instanceof Map&&(c.has("easing")&&(o=c.get("easing"),c.delete("easing")),!r)){for(let s of c.values())if(s.toString().indexOf(x4)>=0){r=!0;break}}}),{type:F.Style,styles:t,easing:o,offset:i.offset,containsDynamicStyles:r,options:null}}_validateStyleAst(i,e){let t=e.currentAnimateTimings,a=e.currentTime,r=e.currentTime;t&&r>0&&(r-=t.duration+t.delay),i.styles.forEach(o=>{typeof o!="string"&&o.forEach((c,s)=>{let m=e.collectedStyles.get(e.currentQuerySelector),f=m.get(s),d=!0;f&&(r!=a&&r>=f.startTime&&a<=f.endTime&&(e.errors.push(Rn(s,f.startTime,f.endTime,r,a)),d=!1),r=f.startTime),d&&m.set(s,{startTime:r,endTime:a}),e.options&&oa(c,e.options,e.errors)})})}visitKeyframes(i,e){let t={type:F.Keyframes,styles:[],options:null};if(!e.currentAnimateTimings)return e.errors.push(Bn()),t;let a=1,r=0,o=[],c=!1,s=!1,m=0,f=i.steps.map(D=>{let V=this._makeStyleAst(D,e),K=V.offset!=null?V.offset:kr(V.styles),i1=0;return K!=null&&(r++,i1=V.offset=K),s=s||i1<0||i1>1,c=c||i1<m,m=i1,o.push(i1),V});s&&e.errors.push(jn()),c&&e.errors.push(qn());let d=i.steps.length,h=0;r>0&&r<d?e.errors.push(Vn()):r==0&&(h=a/(d-1));let p=d-1,b=e.currentTime,v=e.currentAnimateTimings,P=v.duration;return f.forEach((D,V)=>{let K=h>0?V==p?1:h*V:o[V],i1=K*P;e.currentTime=b+v.delay+i1,v.duration=i1,this._validateStyleAst(D,e),D.offset=K,t.styles.push(D)}),t}visitReference(i,e){return{type:F.Reference,animation:D1(this,Ce(i.animation),e),options:le(i.options)}}visitAnimateChild(i,e){return e.depCount++,{type:F.AnimateChild,options:le(i.options)}}visitAnimateRef(i,e){return{type:F.AnimateRef,animation:this.visitReference(i.animation,e),options:le(i.options)}}visitQuery(i,e){let t=e.currentQuerySelector,a=i.options||{};e.queryCount++,e.currentQuery=i;let[r,o]=zr(i.selector);e.currentQuerySelector=t.length?t+" "+r:r,F1(e.collectedStyles,e.currentQuerySelector,new Map);let c=D1(this,Ce(i.animation),e);return e.currentQuery=null,e.currentQuerySelector=t,{type:F.Query,selector:r,limit:a.limit||0,optional:!!a.optional,includeSelf:o,animation:c,originalSelector:i.selector,options:le(i.options)}}visitStagger(i,e){e.currentQuery||e.errors.push(Gn());let t=i.timings==="full"?{duration:0,delay:0,easing:"full"}:Ye(i.timings,e.errors,!0);return{type:F.Stagger,animation:D1(this,Ce(i.animation),e),timings:t,options:null}}};function zr(n){let i=!!n.split(/\s*,\s*/).find(e=>e==_a);return i&&(n=n.replace(Mr,"")),n=n.replace(/@\*/g,Ke).replace(/@\w+/g,e=>Ke+"-"+e.slice(1)).replace(/:animating/g,q3),[n,i]}function xr(n){return n?Z1({},n):null}var P4=class{errors;queryCount=0;depCount=0;currentTransition=null;currentQuery=null;currentQuerySelector=null;currentAnimateTimings=null;currentTime=0;collectedStyles=new Map;options=null;unsupportedCSSPropertiesFound=new Set;constructor(i){this.errors=i}};function kr(n){if(typeof n=="string")return null;let i=null;if(Array.isArray(n))n.forEach(e=>{if(e instanceof Map&&e.has("offset")){let t=e;i=parseFloat(t.get("offset")),t.delete("offset")}});else if(n instanceof Map&&n.has("offset")){let e=n;i=parseFloat(e.get("offset")),e.delete("offset")}return i}function wr(n,i){if(n.hasOwnProperty("duration"))return n;if(typeof n=="number"){let r=Ye(n,i).duration;return C4(r,0,"")}let e=n;if(e.split(/\s+/).some(r=>r.charAt(0)=="{"&&r.charAt(1)=="{")){let r=C4(0,0,"");return r.dynamic=!0,r.strValue=e,r}let a=Ye(e,i);return C4(a.duration,a.delay,a.easing)}function le(n){return n?(n=Z1({},n),n.params&&(n.params=xr(n.params))):n={},n}function C4(n,i,e){return{duration:n,delay:i,easing:e}}function $4(n,i,e,t,a,r,o=null,c=!1){return{type:1,element:n,keyframes:i,preStyleProps:e,postStyleProps:t,duration:a,delay:r,totalTime:a+r,easing:o,subTimeline:c}}var Ze=class{_map=new Map;get(i){return this._map.get(i)||[]}append(i,e){let t=this._map.get(i);t||this._map.set(i,t=[]),t.push(...e)}has(i){return this._map.has(i)}clear(){this._map.clear()}},Sr=1,Cr=":enter",Lr=new RegExp(Cr,"g"),Er=":leave",Tr=new RegExp(Er,"g");function Ma(n,i,e,t,a,r=new Map,o=new Map,c,s,m=[]){return new I4().buildKeyframes(n,i,e,t,a,r,o,c,s,m)}var I4=class{buildKeyframes(i,e,t,a,r,o,c,s,m,f=[]){m=m||new Ze;let d=new F4(i,e,m,a,r,f,[]);d.options=s;let h=s.delay?M2(s.delay):0;d.currentTimeline.delayNextStep(h),d.currentTimeline.setStyles([o],null,d.errors,s),D1(this,t,d);let p=d.timelines.filter(b=>b.containsAnimation());if(p.length&&c.size){let b;for(let v=p.length-1;v>=0;v--){let P=p[v];if(P.element===e){b=P;break}}b&&!b.allowOnlyTimelineStyles()&&b.setStyles([c],null,d.errors,s)}return p.length?p.map(b=>b.buildKeyframes()):[$4(e,[],[],[],0,h,"",!1)]}visitTrigger(i,e){}visitState(i,e){}visitTransition(i,e){}visitAnimateChild(i,e){let t=e.subInstructions.get(e.element);if(t){let a=e.createSubContext(i.options),r=e.currentTimeline.currentTime,o=this._visitSubInstructions(t,a,a.options);r!=o&&e.transformIntoNewTimeline(o)}e.previousNode=i}visitAnimateRef(i,e){let t=e.createSubContext(i.options);t.transformIntoNewTimeline(),this._applyAnimationRefDelays([i.options,i.animation.options],e,t),this.visitReference(i.animation,t),e.transformIntoNewTimeline(t.currentTimeline.currentTime),e.previousNode=i}_applyAnimationRefDelays(i,e,t){for(let a of i){let r=a?.delay;if(r){let o=typeof r=="number"?r:M2(Le(r,a?.params??{},e.errors));t.delayNextStep(o)}}}_visitSubInstructions(i,e,t){let r=e.currentTimeline.currentTime,o=t.duration!=null?M2(t.duration):null,c=t.delay!=null?M2(t.delay):null;return o!==0&&i.forEach(s=>{let m=e.appendInstructionToTimeline(s,o,c);r=Math.max(r,m.duration+m.delay)}),r}visitReference(i,e){e.updateOptions(i.options,!0),D1(this,i.animation,e),e.previousNode=i}visitSequence(i,e){let t=e.subContextCount,a=e,r=i.options;if(r&&(r.params||r.delay)&&(a=e.createSubContext(r),a.transformIntoNewTimeline(),r.delay!=null)){a.previousNode.type==F.Style&&(a.currentTimeline.snapshotCurrentStyles(),a.previousNode=Y3);let o=M2(r.delay);a.delayNextStep(o)}i.steps.length&&(i.steps.forEach(o=>D1(this,o,a)),a.currentTimeline.applyStylesToKeyframe(),a.subContextCount>t&&a.transformIntoNewTimeline()),e.previousNode=i}visitGroup(i,e){let t=[],a=e.currentTimeline.currentTime,r=i.options&&i.options.delay?M2(i.options.delay):0;i.steps.forEach(o=>{let c=e.createSubContext(i.options);r&&c.delayNextStep(r),D1(this,o,c),a=Math.max(a,c.currentTimeline.currentTime),t.push(c.currentTimeline)}),t.forEach(o=>e.currentTimeline.mergeTimelineCollectedStyles(o)),e.transformIntoNewTimeline(a),e.previousNode=i}_visitTiming(i,e){if(i.dynamic){let t=i.strValue,a=e.params?Le(t,e.params,e.errors):t;return Ye(a,e.errors)}else return{duration:i.duration,delay:i.delay,easing:i.easing}}visitAnimate(i,e){let t=e.currentAnimateTimings=this._visitTiming(i.timings,e),a=e.currentTimeline;t.delay&&(e.incrementTime(t.delay),a.snapshotCurrentStyles());let r=i.style;r.type==F.Keyframes?this.visitKeyframes(r,e):(e.incrementTime(t.duration),this.visitStyle(r,e),a.applyStylesToKeyframe()),e.currentAnimateTimings=null,e.previousNode=i}visitStyle(i,e){let t=e.currentTimeline,a=e.currentAnimateTimings;!a&&t.hasCurrentStyleProperties()&&t.forwardFrame();let r=a&&a.easing||i.easing;i.isEmptyStep?t.applyEmptyStep(r):t.setStyles(i.styles,r,e.errors,e.options),e.previousNode=i}visitKeyframes(i,e){let t=e.currentAnimateTimings,a=e.currentTimeline.duration,r=t.duration,c=e.createSubContext().currentTimeline;c.easing=t.easing,i.styles.forEach(s=>{let m=s.offset||0;c.forwardTime(m*r),c.setStyles(s.styles,s.easing,e.errors,e.options),c.applyStylesToKeyframe()}),e.currentTimeline.mergeTimelineCollectedStyles(c),e.transformIntoNewTimeline(a+r),e.previousNode=i}visitQuery(i,e){let t=e.currentTimeline.currentTime,a=i.options||{},r=a.delay?M2(a.delay):0;r&&(e.previousNode.type===F.Style||t==0&&e.currentTimeline.hasCurrentStyleProperties())&&(e.currentTimeline.snapshotCurrentStyles(),e.previousNode=Y3);let o=t,c=e.invokeQuery(i.selector,i.originalSelector,i.limit,i.includeSelf,!!a.optional,e.errors);e.currentQueryTotal=c.length;let s=null;c.forEach((m,f)=>{e.currentQueryIndex=f;let d=e.createSubContext(i.options,m);r&&d.delayNextStep(r),m===e.element&&(s=d.currentTimeline),D1(this,i.animation,d),d.currentTimeline.applyStylesToKeyframe();let h=d.currentTimeline.currentTime;o=Math.max(o,h)}),e.currentQueryIndex=0,e.currentQueryTotal=0,e.transformIntoNewTimeline(o),s&&(e.currentTimeline.mergeTimelineCollectedStyles(s),e.currentTimeline.snapshotCurrentStyles()),e.previousNode=i}visitStagger(i,e){let t=e.parentContext,a=e.currentTimeline,r=i.timings,o=Math.abs(r.duration),c=o*(e.currentQueryTotal-1),s=o*e.currentQueryIndex;switch(r.duration<0?"reverse":r.easing){case"reverse":s=c-s;break;case"full":s=t.currentStaggerTime;break}let f=e.currentTimeline;s&&f.delayNextStep(s);let d=f.currentTime;D1(this,i.animation,e),e.previousNode=i,t.currentStaggerTime=a.currentTime-d+(a.startTime-t.currentTimeline.startTime)}},Y3={},F4=class n{_driver;element;subInstructions;_enterClassName;_leaveClassName;errors;timelines;parentContext=null;currentTimeline;currentAnimateTimings=null;previousNode=Y3;subContextCount=0;options={};currentQueryIndex=0;currentQueryTotal=0;currentStaggerTime=0;constructor(i,e,t,a,r,o,c,s){this._driver=i,this.element=e,this.subInstructions=t,this._enterClassName=a,this._leaveClassName=r,this.errors=o,this.timelines=c,this.currentTimeline=s||new X3(this._driver,e,0),c.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(i,e){if(!i)return;let t=i,a=this.options;t.duration!=null&&(a.duration=M2(t.duration)),t.delay!=null&&(a.delay=M2(t.delay));let r=t.params;if(r){let o=a.params;o||(o=this.options.params={}),Object.keys(r).forEach(c=>{(!e||!o.hasOwnProperty(c))&&(o[c]=Le(r[c],o,this.errors))})}}_copyOptions(){let i={};if(this.options){let e=this.options.params;if(e){let t=i.params={};Object.keys(e).forEach(a=>{t[a]=e[a]})}}return i}createSubContext(i=null,e,t){let a=e||this.element,r=new n(this._driver,a,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(a,t||0));return r.previousNode=this.previousNode,r.currentAnimateTimings=this.currentAnimateTimings,r.options=this._copyOptions(),r.updateOptions(i),r.currentQueryIndex=this.currentQueryIndex,r.currentQueryTotal=this.currentQueryTotal,r.parentContext=this,this.subContextCount++,r}transformIntoNewTimeline(i){return this.previousNode=Y3,this.currentTimeline=this.currentTimeline.fork(this.element,i),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(i,e,t){let a={duration:e??i.duration,delay:this.currentTimeline.currentTime+(t??0)+i.delay,easing:""},r=new D4(this._driver,i.element,i.keyframes,i.preStyleProps,i.postStyleProps,a,i.stretchStartingKeyframe);return this.timelines.push(r),a}incrementTime(i){this.currentTimeline.forwardTime(this.currentTimeline.duration+i)}delayNextStep(i){i>0&&this.currentTimeline.delayNextStep(i)}invokeQuery(i,e,t,a,r,o){let c=[];if(a&&c.push(this.element),i.length>0){i=i.replace(Lr,"."+this._enterClassName),i=i.replace(Tr,"."+this._leaveClassName);let s=t!=1,m=this._driver.query(this.element,i,s);t!==0&&(m=t<0?m.slice(m.length+t,m.length):m.slice(0,t)),c.push(...m)}return!r&&c.length==0&&o.push($n(e)),c}},X3=class n{_driver;element;startTime;_elementTimelineStylesLookup;duration=0;easing=null;_previousKeyframe=new Map;_currentKeyframe=new Map;_keyframes=new Map;_styleSummary=new Map;_localTimelineStyles=new Map;_globalTimelineStyles;_pendingStyles=new Map;_backFill=new Map;_currentEmptyStepKeyframe=null;constructor(i,e,t,a){this._driver=i,this.element=e,this.startTime=t,this._elementTimelineStylesLookup=a,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(e),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(e,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.hasCurrentStyleProperties();default:return!0}}hasCurrentStyleProperties(){return this._currentKeyframe.size>0}get currentTime(){return this.startTime+this.duration}delayNextStep(i){let e=this._keyframes.size===1&&this._pendingStyles.size;this.duration||e?(this.forwardTime(this.currentTime+i),e&&this.snapshotCurrentStyles()):this.startTime+=i}fork(i,e){return this.applyStylesToKeyframe(),new n(this._driver,i,e||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=new Map,this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=Sr,this._loadKeyframe()}forwardTime(i){this.applyStylesToKeyframe(),this.duration=i,this._loadKeyframe()}_updateStyle(i,e){this._localTimelineStyles.set(i,e),this._globalTimelineStyles.set(i,e),this._styleSummary.set(i,{time:this.currentTime,value:e})}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(i){i&&this._previousKeyframe.set("easing",i);for(let[e,t]of this._globalTimelineStyles)this._backFill.set(e,t||r2),this._currentKeyframe.set(e,r2);this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(i,e,t,a){e&&this._previousKeyframe.set("easing",e);let r=a&&a.params||{},o=Nr(i,this._globalTimelineStyles);for(let[c,s]of o){let m=Le(s,r,t);this._pendingStyles.set(c,m),this._localTimelineStyles.has(c)||this._backFill.set(c,this._globalTimelineStyles.get(c)??r2),this._updateStyle(c,m)}}applyStylesToKeyframe(){this._pendingStyles.size!=0&&(this._pendingStyles.forEach((i,e)=>{this._currentKeyframe.set(e,i)}),this._pendingStyles.clear(),this._localTimelineStyles.forEach((i,e)=>{this._currentKeyframe.has(e)||this._currentKeyframe.set(e,i)}))}snapshotCurrentStyles(){for(let[i,e]of this._localTimelineStyles)this._pendingStyles.set(i,e),this._updateStyle(i,e)}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){let i=[];for(let e in this._currentKeyframe)i.push(e);return i}mergeTimelineCollectedStyles(i){i._styleSummary.forEach((e,t)=>{let a=this._styleSummary.get(t);(!a||e.time>a.time)&&this._updateStyle(t,e.value)})}buildKeyframes(){this.applyStylesToKeyframe();let i=new Set,e=new Set,t=this._keyframes.size===1&&this.duration===0,a=[];this._keyframes.forEach((c,s)=>{let m=new Map([...this._backFill,...c]);m.forEach((f,d)=>{f===Ue?i.add(d):f===r2&&e.add(d)}),t||m.set("offset",s/this.duration),a.push(m)});let r=[...i.values()],o=[...e.values()];if(t){let c=a[0],s=new Map(c);c.set("offset",0),s.set("offset",1),a=[c,s]}return $4(this.element,a,r,o,this.duration,this.startTime,this.easing,!1)}},D4=class extends X3{keyframes;preStyleProps;postStyleProps;_stretchStartingKeyframe;timings;constructor(i,e,t,a,r,o,c=!1){super(i,e,o.delay),this.keyframes=t,this.preStyleProps=a,this.postStyleProps=r,this._stretchStartingKeyframe=c,this.timings={duration:o.duration,delay:o.delay,easing:o.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let i=this.keyframes,{delay:e,duration:t,easing:a}=this.timings;if(this._stretchStartingKeyframe&&e){let r=[],o=t+e,c=e/o,s=new Map(i[0]);s.set("offset",0),r.push(s);let m=new Map(i[0]);m.set("offset",da(c)),r.push(m);let f=i.length-1;for(let d=1;d<=f;d++){let h=new Map(i[d]),p=h.get("offset"),b=e+p*t;h.set("offset",da(b/o)),r.push(h)}t=o,e=0,a="",i=r}return $4(this.element,i,this.preStyleProps,this.postStyleProps,t,e,a,!0)}};function da(n,i=3){let e=Math.pow(10,i-1);return Math.round(n*e)/e}function Nr(n,i){let e=new Map,t;return n.forEach(a=>{if(a==="*"){t??=i.keys();for(let r of t)e.set(r,r2)}else for(let[r,o]of a)e.set(r,o)}),e}function fa(n,i,e,t,a,r,o,c,s,m,f,d,h){return{type:0,element:n,triggerName:i,isRemovalTransition:a,fromState:e,fromStyles:r,toState:t,toStyles:o,timelines:c,queriedElements:s,preStyleProps:m,postStyleProps:f,totalTime:d,errors:h}}var L4={},Z3=class{_triggerName;ast;_stateStyles;constructor(i,e,t){this._triggerName=i,this.ast=e,this._stateStyles=t}match(i,e,t,a){return Ar(this.ast.matchers,i,e,t,a)}buildStyles(i,e,t){let a=this._stateStyles.get("*");return i!==void 0&&(a=this._stateStyles.get(i?.toString())||a),a?a.buildStyles(e,t):new Map}build(i,e,t,a,r,o,c,s,m,f){let d=[],h=this.ast.options&&this.ast.options.params||L4,p=c&&c.params||L4,b=this.buildStyles(t,p,d),v=s&&s.params||L4,P=this.buildStyles(a,v,d),D=new Set,V=new Map,K=new Map,i1=a==="void",k1={params:za(v,h),delay:this.ast.options?.delay},I1=f?[]:Ma(i,e,this.ast.animation,r,o,b,P,k1,m,d),y1=0;return I1.forEach(b1=>{y1=Math.max(b1.duration+b1.delay,y1)}),d.length?fa(e,this._triggerName,t,a,i1,b,P,[],[],V,K,y1,d):(I1.forEach(b1=>{let x2=b1.element,be=F1(V,x2,new Set);b1.preStyleProps.forEach(ne=>be.add(ne));let qi=F1(K,x2,new Set);b1.postStyleProps.forEach(ne=>qi.add(ne)),x2!==e&&D.add(x2)}),fa(e,this._triggerName,t,a,i1,b,P,I1,[...D.values()],V,K,y1))}};function Ar(n,i,e,t,a){return n.some(r=>r(i,e,t,a))}function za(n,i){let e=Z1({},i);return Object.entries(n).forEach(([t,a])=>{a!=null&&(e[t]=a)}),e}var O4=class{styles;defaultParams;normalizer;constructor(i,e,t){this.styles=i,this.defaultParams=e,this.normalizer=t}buildStyles(i,e){let t=new Map,a=za(i,this.defaultParams);return this.styles.styles.forEach(r=>{typeof r!="string"&&r.forEach((o,c)=>{o&&(o=Le(o,a,e));let s=this.normalizer.normalizePropertyName(c,e);o=this.normalizer.normalizeStyleValue(c,s,o,e),t.set(c,o)})}),t}};function Pr(n,i,e){return new R4(n,i,e)}var R4=class{name;ast;_normalizer;transitionFactories=[];fallbackTransition;states=new Map;constructor(i,e,t){this.name=i,this.ast=e,this._normalizer=t,e.states.forEach(a=>{let r=a.options&&a.options.params||{};this.states.set(a.name,new O4(a.style,r,t))}),ua(this.states,"true","1"),ua(this.states,"false","0"),e.transitions.forEach(a=>{this.transitionFactories.push(new Z3(i,a,this.states))}),this.fallbackTransition=Ir(i,this.states)}get containsQueries(){return this.ast.queryCount>0}matchTransition(i,e,t,a){return this.transitionFactories.find(o=>o.match(i,e,t,a))||null}matchStyles(i,e,t){return this.fallbackTransition.buildStyles(i,e,t)}};function Ir(n,i,e){let t=[(o,c)=>!0],a={type:F.Sequence,steps:[],options:null},r={type:F.Transition,animation:a,matchers:t,options:null,queryCount:0,depCount:0};return new Z3(n,r,i)}function ua(n,i,e){n.has(i)?n.has(e)||n.set(e,n.get(i)):n.has(e)&&n.set(i,n.get(e))}var Fr=new Ze,B4=class{bodyNode;_driver;_normalizer;_animations=new Map;_playersById=new Map;players=[];constructor(i,e,t){this.bodyNode=i,this._driver=e,this._normalizer=t}register(i,e){let t=[],a=[],r=ya(this._driver,e,t,a);if(t.length)throw Qn(t);this._animations.set(i,r)}_buildPlayer(i,e,t){let a=i.element,r=_4(this._normalizer,i.keyframes,e,t);return this._driver.animate(a,r,i.duration,i.delay,i.easing,[],!0)}create(i,e,t={}){let a=[],r=this._animations.get(i),o,c=new Map;if(r?(o=Ma(this._driver,e,r,k4,j3,new Map,new Map,t,Fr,a),o.forEach(f=>{let d=F1(c,f.element,new Map);f.postStyleProps.forEach(h=>d.set(h,null))})):(a.push(Kn()),o=[]),a.length)throw Yn(a);c.forEach((f,d)=>{f.forEach((h,p)=>{f.set(p,this._driver.computeStyle(d,p,r2))})});let s=o.map(f=>{let d=c.get(f.element);return this._buildPlayer(f,new Map,d)}),m=E2(s);return this._playersById.set(i,m),m.onDestroy(()=>this.destroy(i)),this.players.push(m),m}destroy(i){let e=this._getPlayer(i);e.destroy(),this._playersById.delete(i);let t=this.players.indexOf(e);t>=0&&this.players.splice(t,1)}_getPlayer(i){let e=this._playersById.get(i);if(!e)throw Xn(i);return e}listen(i,e,t,a){let r=R3(e,"","","");return O3(this._getPlayer(i),t,r,a),()=>{}}command(i,e,t,a){if(t=="register"){this.register(i,a[0]);return}if(t=="create"){let o=a[0]||{};this.create(i,e,o);return}let r=this._getPlayer(i);switch(t){case"play":r.play();break;case"pause":r.pause();break;case"reset":r.reset();break;case"restart":r.restart();break;case"finish":r.finish();break;case"init":r.init();break;case"setPosition":r.setPosition(parseFloat(a[0]));break;case"destroy":this.destroy(i);break}}},pa="ng-animate-queued",Dr=".ng-animate-queued",E4="ng-animate-disabled",Or=".ng-animate-disabled",Rr="ng-star-inserted",Br=".ng-star-inserted",jr=[],xa={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},qr={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0},c2="__ng_removed",Je=class{namespaceId;value;options;get params(){return this.options.params}constructor(i,e=""){this.namespaceId=e;let t=i&&i.hasOwnProperty("value"),a=t?i.value:i;if(this.value=Gr(a),t){let r=i,{value:o}=r,c=Hi(r,["value"]);this.options=c}else this.options={};this.options.params||(this.options.params={})}absorbOptions(i){let e=i.params;if(e){let t=this.options.params;Object.keys(e).forEach(a=>{t[a]==null&&(t[a]=e[a])})}}},Xe="void",T4=new Je(Xe),j4=class{id;hostElement;_engine;players=[];_triggers=new Map;_queue=[];_elementListeners=new Map;_hostClassName;constructor(i,e,t){this.id=i,this.hostElement=e,this._engine=t,this._hostClassName="ng-tns-"+i,X1(e,this._hostClassName)}listen(i,e,t,a){if(!this._triggers.has(e))throw Zn(t,e);if(t==null||t.length==0)throw Jn(e);if(!$r(t))throw ea(t,e);let r=F1(this._elementListeners,i,[]),o={name:e,phase:t,callback:a};r.push(o);let c=F1(this._engine.statesByElement,i,new Map);return c.has(e)||(X1(i,Qe),X1(i,Qe+"-"+e),c.set(e,T4)),()=>{this._engine.afterFlush(()=>{let s=r.indexOf(o);s>=0&&r.splice(s,1),this._triggers.has(e)||c.delete(e)})}}register(i,e){return this._triggers.has(i)?!1:(this._triggers.set(i,e),!0)}_getTrigger(i){let e=this._triggers.get(i);if(!e)throw ta(i);return e}trigger(i,e,t,a=!0){let r=this._getTrigger(e),o=new e3(this.id,e,i),c=this._engine.statesByElement.get(i);c||(X1(i,Qe),X1(i,Qe+"-"+e),this._engine.statesByElement.set(i,c=new Map));let s=c.get(e),m=new Je(t,this.id);if(!(t&&t.hasOwnProperty("value"))&&s&&m.absorbOptions(s.options),c.set(e,m),s||(s=T4),!(m.value===Xe)&&s.value===m.value){if(!Ur(s.params,m.params)){let v=[],P=r.matchStyles(s.value,s.params,v),D=r.matchStyles(m.value,m.params,v);v.length?this._engine.reportError(v):this._engine.afterFlush(()=>{Q2(i,P),o2(i,D)})}return}let h=F1(this._engine.playersByElement,i,[]);h.forEach(v=>{v.namespaceId==this.id&&v.triggerName==e&&v.queued&&v.destroy()});let p=r.matchTransition(s.value,m.value,i,m.params),b=!1;if(!p){if(!a)return;p=r.fallbackTransition,b=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:i,triggerName:e,transition:p,fromState:s,toState:m,player:o,isFallbackTransition:b}),b||(X1(i,pa),o.onStart(()=>{Ee(i,pa)})),o.onDone(()=>{let v=this.players.indexOf(o);v>=0&&this.players.splice(v,1);let P=this._engine.playersByElement.get(i);if(P){let D=P.indexOf(o);D>=0&&P.splice(D,1)}}),this.players.push(o),h.push(o),o}deregister(i){this._triggers.delete(i),this._engine.statesByElement.forEach(e=>e.delete(i)),this._elementListeners.forEach((e,t)=>{this._elementListeners.set(t,e.filter(a=>a.name!=i))})}clearElementCache(i){this._engine.statesByElement.delete(i),this._elementListeners.delete(i);let e=this._engine.playersByElement.get(i);e&&(e.forEach(t=>t.destroy()),this._engine.playersByElement.delete(i))}_signalRemovalForInnerTriggers(i,e){let t=this._engine.driver.query(i,Ke,!0);t.forEach(a=>{if(a[c2])return;let r=this._engine.fetchNamespacesByElement(a);r.size?r.forEach(o=>o.triggerLeaveAnimation(a,e,!1,!0)):this.clearElementCache(a)}),this._engine.afterFlushAnimationsDone(()=>t.forEach(a=>this.clearElementCache(a)))}triggerLeaveAnimation(i,e,t,a){let r=this._engine.statesByElement.get(i),o=new Map;if(r){let c=[];if(r.forEach((s,m)=>{if(o.set(m,s.value),this._triggers.has(m)){let f=this.trigger(i,m,Xe,a);f&&c.push(f)}}),c.length)return this._engine.markElementAsRemoved(this.id,i,!0,e,o),t&&E2(c).onDone(()=>this._engine.processLeaveNode(i)),!0}return!1}prepareLeaveAnimationListeners(i){let e=this._elementListeners.get(i),t=this._engine.statesByElement.get(i);if(e&&t){let a=new Set;e.forEach(r=>{let o=r.name;if(a.has(o))return;a.add(o);let s=this._triggers.get(o).fallbackTransition,m=t.get(o)||T4,f=new Je(Xe),d=new e3(this.id,o,i);this._engine.totalQueuedPlayers++,this._queue.push({element:i,triggerName:o,transition:s,fromState:m,toState:f,player:d,isFallbackTransition:!0})})}}removeNode(i,e){let t=this._engine;if(i.childElementCount&&this._signalRemovalForInnerTriggers(i,e),this.triggerLeaveAnimation(i,e,!0))return;let a=!1;if(t.totalAnimations){let r=t.players.length?t.playersByQueriedElement.get(i):[];if(r&&r.length)a=!0;else{let o=i;for(;o=o.parentNode;)if(t.statesByElement.get(o)){a=!0;break}}}if(this.prepareLeaveAnimationListeners(i),a)t.markElementAsRemoved(this.id,i,!1,e);else{let r=i[c2];(!r||r===xa)&&(t.afterFlush(()=>this.clearElementCache(i)),t.destroyInnerAnimations(i),t._onRemovalComplete(i,e))}}insertNode(i,e){X1(i,this._hostClassName)}drainQueuedTransitions(i){let e=[];return this._queue.forEach(t=>{let a=t.player;if(a.destroyed)return;let r=t.element,o=this._elementListeners.get(r);o&&o.forEach(c=>{if(c.name==t.triggerName){let s=R3(r,t.triggerName,t.fromState.value,t.toState.value);s._data=i,O3(t.player,c.phase,s,c.callback)}}),a.markedForDestroy?this._engine.afterFlush(()=>{a.destroy()}):e.push(t)}),this._queue=[],e.sort((t,a)=>{let r=t.transition.ast.depCount,o=a.transition.ast.depCount;return r==0||o==0?r-o:this._engine.driver.containsElement(t.element,a.element)?1:-1})}destroy(i){this.players.forEach(e=>e.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,i)}},q4=class{bodyNode;driver;_normalizer;players=[];newHostElements=new Map;playersByElement=new Map;playersByQueriedElement=new Map;statesByElement=new Map;disabledNodes=new Set;totalAnimations=0;totalQueuedPlayers=0;_namespaceLookup={};_namespaceList=[];_flushFns=[];_whenQuietFns=[];namespacesByHostElement=new Map;collectedEnterElements=[];collectedLeaveElements=[];onRemovalComplete=(i,e)=>{};_onRemovalComplete(i,e){this.onRemovalComplete(i,e)}constructor(i,e,t){this.bodyNode=i,this.driver=e,this._normalizer=t}get queuedPlayers(){let i=[];return this._namespaceList.forEach(e=>{e.players.forEach(t=>{t.queued&&i.push(t)})}),i}createNamespace(i,e){let t=new j4(i,e,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,e)?this._balanceNamespaceList(t,e):(this.newHostElements.set(e,t),this.collectEnterElement(e)),this._namespaceLookup[i]=t}_balanceNamespaceList(i,e){let t=this._namespaceList,a=this.namespacesByHostElement;if(t.length-1>=0){let o=!1,c=this.driver.getParentElement(e);for(;c;){let s=a.get(c);if(s){let m=t.indexOf(s);t.splice(m+1,0,i),o=!0;break}c=this.driver.getParentElement(c)}o||t.unshift(i)}else t.push(i);return a.set(e,i),i}register(i,e){let t=this._namespaceLookup[i];return t||(t=this.createNamespace(i,e)),t}registerTrigger(i,e,t){let a=this._namespaceLookup[i];a&&a.register(e,t)&&this.totalAnimations++}destroy(i,e){i&&(this.afterFlush(()=>{}),this.afterFlushAnimationsDone(()=>{let t=this._fetchNamespace(i);this.namespacesByHostElement.delete(t.hostElement);let a=this._namespaceList.indexOf(t);a>=0&&this._namespaceList.splice(a,1),t.destroy(e),delete this._namespaceLookup[i]}))}_fetchNamespace(i){return this._namespaceLookup[i]}fetchNamespacesByElement(i){let e=new Set,t=this.statesByElement.get(i);if(t){for(let a of t.values())if(a.namespaceId){let r=this._fetchNamespace(a.namespaceId);r&&e.add(r)}}return e}trigger(i,e,t,a){if(W3(e)){let r=this._fetchNamespace(i);if(r)return r.trigger(e,t,a),!0}return!1}insertNode(i,e,t,a){if(!W3(e))return;let r=e[c2];if(r&&r.setForRemoval){r.setForRemoval=!1,r.setForMove=!0;let o=this.collectedLeaveElements.indexOf(e);o>=0&&this.collectedLeaveElements.splice(o,1)}if(i){let o=this._fetchNamespace(i);o&&o.insertNode(e,t)}a&&this.collectEnterElement(e)}collectEnterElement(i){this.collectedEnterElements.push(i)}markElementAsDisabled(i,e){e?this.disabledNodes.has(i)||(this.disabledNodes.add(i),X1(i,E4)):this.disabledNodes.has(i)&&(this.disabledNodes.delete(i),Ee(i,E4))}removeNode(i,e,t){if(W3(e)){let a=i?this._fetchNamespace(i):null;a?a.removeNode(e,t):this.markElementAsRemoved(i,e,!1,t);let r=this.namespacesByHostElement.get(e);r&&r.id!==i&&r.removeNode(e,t)}else this._onRemovalComplete(e,t)}markElementAsRemoved(i,e,t,a,r){this.collectedLeaveElements.push(e),e[c2]={namespaceId:i,setForRemoval:a,hasAnimation:t,removedBeforeQueried:!1,previousTriggersValues:r}}listen(i,e,t,a,r){return W3(e)?this._fetchNamespace(i).listen(e,t,a,r):()=>{}}_buildInstruction(i,e,t,a,r){return i.transition.build(this.driver,i.element,i.fromState.value,i.toState.value,t,a,i.fromState.options,i.toState.options,e,r)}destroyInnerAnimations(i){let e=this.driver.query(i,Ke,!0);e.forEach(t=>this.destroyActiveAnimationsForElement(t)),this.playersByQueriedElement.size!=0&&(e=this.driver.query(i,q3,!0),e.forEach(t=>this.finishActiveQueriedAnimationOnElement(t)))}destroyActiveAnimationsForElement(i){let e=this.playersByElement.get(i);e&&e.forEach(t=>{t.queued?t.markedForDestroy=!0:t.destroy()})}finishActiveQueriedAnimationOnElement(i){let e=this.playersByQueriedElement.get(i);e&&e.forEach(t=>t.finish())}whenRenderingDone(){return new Promise(i=>{if(this.players.length)return E2(this.players).onDone(()=>i());i()})}processLeaveNode(i){let e=i[c2];if(e&&e.setForRemoval){if(i[c2]=xa,e.namespaceId){this.destroyInnerAnimations(i);let t=this._fetchNamespace(e.namespaceId);t&&t.clearElementCache(i)}this._onRemovalComplete(i,e.setForRemoval)}i.classList?.contains(E4)&&this.markElementAsDisabled(i,!1),this.driver.query(i,Or,!0).forEach(t=>{this.markElementAsDisabled(t,!1)})}flush(i=-1){let e=[];if(this.newHostElements.size&&(this.newHostElements.forEach((t,a)=>this._balanceNamespaceList(t,a)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let t=0;t<this.collectedEnterElements.length;t++){let a=this.collectedEnterElements[t];X1(a,Rr)}if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){let t=[];try{e=this._flushAnimations(t,i)}finally{for(let a=0;a<t.length;a++)t[a]()}}else for(let t=0;t<this.collectedLeaveElements.length;t++){let a=this.collectedLeaveElements[t];this.processLeaveNode(a)}if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(t=>t()),this._flushFns=[],this._whenQuietFns.length){let t=this._whenQuietFns;this._whenQuietFns=[],e.length?E2(e).onDone(()=>{t.forEach(a=>a())}):t.forEach(a=>a())}}reportError(i){throw ia(i)}_flushAnimations(i,e){let t=new Ze,a=[],r=new Map,o=[],c=new Map,s=new Map,m=new Map,f=new Set;this.disabledNodes.forEach(y=>{f.add(y);let S=this.driver.query(y,Dr,!0);for(let L=0;L<S.length;L++)f.add(S[L])});let d=this.bodyNode,h=Array.from(this.statesByElement.keys()),p=ga(h,this.collectedEnterElements),b=new Map,v=0;p.forEach((y,S)=>{let L=k4+v++;b.set(S,L),y.forEach(G=>X1(G,L))});let P=[],D=new Set,V=new Set;for(let y=0;y<this.collectedLeaveElements.length;y++){let S=this.collectedLeaveElements[y],L=S[c2];L&&L.setForRemoval&&(P.push(S),D.add(S),L.hasAnimation?this.driver.query(S,Br,!0).forEach(G=>D.add(G)):V.add(S))}let K=new Map,i1=ga(h,Array.from(D));i1.forEach((y,S)=>{let L=j3+v++;K.set(S,L),y.forEach(G=>X1(G,L))}),i.push(()=>{p.forEach((y,S)=>{let L=b.get(S);y.forEach(G=>Ee(G,L))}),i1.forEach((y,S)=>{let L=K.get(S);y.forEach(G=>Ee(G,L))}),P.forEach(y=>{this.processLeaveNode(y)})});let k1=[],I1=[];for(let y=this._namespaceList.length-1;y>=0;y--)this._namespaceList[y].drainQueuedTransitions(e).forEach(L=>{let G=L.player,g1=L.element;if(k1.push(G),this.collectedEnterElements.length){let w1=g1[c2];if(w1&&w1.setForMove){if(w1.previousTriggersValues&&w1.previousTriggersValues.has(L.triggerName)){let ae=w1.previousTriggersValues.get(L.triggerName),G1=this.statesByElement.get(L.element);if(G1&&G1.has(L.triggerName)){let d3=G1.get(L.triggerName);d3.value=ae,G1.set(L.triggerName,d3)}}G.destroy();return}}let d2=!d||!this.driver.containsElement(d,g1),O1=K.get(g1),F2=b.get(g1),a1=this._buildInstruction(L,t,F2,O1,d2);if(a1.errors&&a1.errors.length){I1.push(a1);return}if(d2){G.onStart(()=>Q2(g1,a1.fromStyles)),G.onDestroy(()=>o2(g1,a1.toStyles)),a.push(G);return}if(L.isFallbackTransition){G.onStart(()=>Q2(g1,a1.fromStyles)),G.onDestroy(()=>o2(g1,a1.toStyles)),a.push(G);return}let $i=[];a1.timelines.forEach(w1=>{w1.stretchStartingKeyframe=!0,this.disabledNodes.has(w1.element)||$i.push(w1)}),a1.timelines=$i,t.append(g1,a1.timelines);let ir={instruction:a1,player:G,element:g1};o.push(ir),a1.queriedElements.forEach(w1=>F1(c,w1,[]).push(G)),a1.preStyleProps.forEach((w1,ae)=>{if(w1.size){let G1=s.get(ae);G1||s.set(ae,G1=new Set),w1.forEach((d3,Jt)=>G1.add(Jt))}}),a1.postStyleProps.forEach((w1,ae)=>{let G1=m.get(ae);G1||m.set(ae,G1=new Set),w1.forEach((d3,Jt)=>G1.add(Jt))})});if(I1.length){let y=[];I1.forEach(S=>{y.push(na(S.triggerName,S.errors))}),k1.forEach(S=>S.destroy()),this.reportError(y)}let y1=new Map,b1=new Map;o.forEach(y=>{let S=y.element;t.has(S)&&(b1.set(S,S),this._beforeAnimationBuild(y.player.namespaceId,y.instruction,y1))}),a.forEach(y=>{let S=y.element;this._getPreviousPlayers(S,!1,y.namespaceId,y.triggerName,null).forEach(G=>{F1(y1,S,[]).push(G),G.destroy()})});let x2=P.filter(y=>va(y,s,m)),be=new Map;ba(be,this.driver,V,m,r2).forEach(y=>{va(y,s,m)&&x2.push(y)});let ne=new Map;p.forEach((y,S)=>{ba(ne,this.driver,new Set(y),s,Ue)}),x2.forEach(y=>{let S=be.get(y),L=ne.get(y);be.set(y,new Map([...S?.entries()??[],...L?.entries()??[]]))});let Zt=[],Vi=[],Gi={};o.forEach(y=>{let{element:S,player:L,instruction:G}=y;if(t.has(S)){if(f.has(S)){L.onDestroy(()=>o2(S,G.toStyles)),L.disabled=!0,L.overrideTotalTime(G.totalTime),a.push(L);return}let g1=Gi;if(b1.size>1){let O1=S,F2=[];for(;O1=O1.parentNode;){let a1=b1.get(O1);if(a1){g1=a1;break}F2.push(O1)}F2.forEach(a1=>b1.set(a1,g1))}let d2=this._buildAnimation(L.namespaceId,G,y1,r,ne,be);if(L.setRealPlayer(d2),g1===Gi)Zt.push(L);else{let O1=this.playersByElement.get(g1);O1&&O1.length&&(L.parentPlayer=E2(O1)),a.push(L)}}else Q2(S,G.fromStyles),L.onDestroy(()=>o2(S,G.toStyles)),Vi.push(L),f.has(S)&&a.push(L)}),Vi.forEach(y=>{let S=r.get(y.element);if(S&&S.length){let L=E2(S);y.setRealPlayer(L)}}),a.forEach(y=>{y.parentPlayer?y.syncPlayerEvents(y.parentPlayer):y.destroy()});for(let y=0;y<P.length;y++){let S=P[y],L=S[c2];if(Ee(S,j3),L&&L.hasAnimation)continue;let G=[];if(c.size){let d2=c.get(S);d2&&d2.length&&G.push(...d2);let O1=this.driver.query(S,q3,!0);for(let F2=0;F2<O1.length;F2++){let a1=c.get(O1[F2]);a1&&a1.length&&G.push(...a1)}}let g1=G.filter(d2=>!d2.destroyed);g1.length?Hr(this,S,g1):this.processLeaveNode(S)}return P.length=0,Zt.forEach(y=>{this.players.push(y),y.onDone(()=>{y.destroy();let S=this.players.indexOf(y);this.players.splice(S,1)}),y.play()}),Zt}afterFlush(i){this._flushFns.push(i)}afterFlushAnimationsDone(i){this._whenQuietFns.push(i)}_getPreviousPlayers(i,e,t,a,r){let o=[];if(e){let c=this.playersByQueriedElement.get(i);c&&(o=c)}else{let c=this.playersByElement.get(i);if(c){let s=!r||r==Xe;c.forEach(m=>{m.queued||!s&&m.triggerName!=a||o.push(m)})}}return(t||a)&&(o=o.filter(c=>!(t&&t!=c.namespaceId||a&&a!=c.triggerName))),o}_beforeAnimationBuild(i,e,t){let a=e.triggerName,r=e.element,o=e.isRemovalTransition?void 0:i,c=e.isRemovalTransition?void 0:a;for(let s of e.timelines){let m=s.element,f=m!==r,d=F1(t,m,[]);this._getPreviousPlayers(m,f,o,c,e.toState).forEach(p=>{let b=p.getRealPlayer();b.beforeDestroy&&b.beforeDestroy(),p.destroy(),d.push(p)})}Q2(r,e.fromStyles)}_buildAnimation(i,e,t,a,r,o){let c=e.triggerName,s=e.element,m=[],f=new Set,d=new Set,h=e.timelines.map(b=>{let v=b.element;f.add(v);let P=v[c2];if(P&&P.removedBeforeQueried)return new L2(b.duration,b.delay);let D=v!==s,V=Wr((t.get(v)||jr).map(y1=>y1.getRealPlayer())).filter(y1=>{let b1=y1;return b1.element?b1.element===v:!1}),K=r.get(v),i1=o.get(v),k1=_4(this._normalizer,b.keyframes,K,i1),I1=this._buildPlayer(b,k1,V);if(b.subTimeline&&a&&d.add(v),D){let y1=new e3(i,c,v);y1.setRealPlayer(I1),m.push(y1)}return I1});m.forEach(b=>{F1(this.playersByQueriedElement,b.element,[]).push(b),b.onDone(()=>Vr(this.playersByQueriedElement,b.element,b))}),f.forEach(b=>X1(b,w4));let p=E2(h);return p.onDestroy(()=>{f.forEach(b=>Ee(b,w4)),o2(s,e.toStyles)}),d.forEach(b=>{F1(a,b,[]).push(p)}),p}_buildPlayer(i,e,t){return e.length>0?this.driver.animate(i.element,e,i.duration,i.delay,i.easing,t):new L2(i.duration,i.delay)}},e3=class{namespaceId;triggerName;element;_player=new L2;_containsRealPlayer=!1;_queuedCallbacks=new Map;destroyed=!1;parentPlayer=null;markedForDestroy=!1;disabled=!1;queued=!0;totalTime=0;constructor(i,e,t){this.namespaceId=i,this.triggerName=e,this.element=t}setRealPlayer(i){this._containsRealPlayer||(this._player=i,this._queuedCallbacks.forEach((e,t)=>{e.forEach(a=>O3(i,t,void 0,a))}),this._queuedCallbacks.clear(),this._containsRealPlayer=!0,this.overrideTotalTime(i.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(i){this.totalTime=i}syncPlayerEvents(i){let e=this._player;e.triggerCallback&&i.onStart(()=>e.triggerCallback("start")),i.onDone(()=>this.finish()),i.onDestroy(()=>this.destroy())}_queueEvent(i,e){F1(this._queuedCallbacks,i,[]).push(e)}onDone(i){this.queued&&this._queueEvent("done",i),this._player.onDone(i)}onStart(i){this.queued&&this._queueEvent("start",i),this._player.onStart(i)}onDestroy(i){this.queued&&this._queueEvent("destroy",i),this._player.onDestroy(i)}init(){this._player.init()}hasStarted(){return this.queued?!1:this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(i){this.queued||this._player.setPosition(i)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(i){let e=this._player;e.triggerCallback&&e.triggerCallback(i)}};function Vr(n,i,e){let t=n.get(i);if(t){if(t.length){let a=t.indexOf(e);t.splice(a,1)}t.length==0&&n.delete(i)}return t}function Gr(n){return n??null}function W3(n){return n&&n.nodeType===1}function $r(n){return n=="start"||n=="done"}function ha(n,i){let e=n.style.display;return n.style.display=i??"none",e}function ba(n,i,e,t,a){let r=[];e.forEach(s=>r.push(ha(s)));let o=[];t.forEach((s,m)=>{let f=new Map;s.forEach(d=>{let h=i.computeStyle(m,d,a);f.set(d,h),(!h||h.length==0)&&(m[c2]=qr,o.push(m))}),n.set(m,f)});let c=0;return e.forEach(s=>ha(s,r[c++])),o}function ga(n,i){let e=new Map;if(n.forEach(c=>e.set(c,[])),i.length==0)return e;let t=1,a=new Set(i),r=new Map;function o(c){if(!c)return t;let s=r.get(c);if(s)return s;let m=c.parentNode;return e.has(m)?s=m:a.has(m)?s=t:s=o(m),r.set(c,s),s}return i.forEach(c=>{let s=o(c);s!==t&&e.get(s).push(c)}),e}function X1(n,i){n.classList?.add(i)}function Ee(n,i){n.classList?.remove(i)}function Hr(n,i,e){E2(e).onDone(()=>n.processLeaveNode(i))}function Wr(n){let i=[];return ka(n,i),i}function ka(n,i){for(let e=0;e<n.length;e++){let t=n[e];t instanceof Se?ka(t.players,i):i.push(t)}}function Ur(n,i){let e=Object.keys(n),t=Object.keys(i);if(e.length!=t.length)return!1;for(let a=0;a<e.length;a++){let r=e[a];if(!i.hasOwnProperty(r)||n[r]!==i[r])return!1}return!0}function va(n,i,e){let t=e.get(n);if(!t)return!1;let a=i.get(n);return a?t.forEach(r=>a.add(r)):i.set(n,t),e.delete(n),!0}var Te=class{_driver;_normalizer;_transitionEngine;_timelineEngine;_triggerCache={};onRemovalComplete=(i,e)=>{};constructor(i,e,t){this._driver=e,this._normalizer=t,this._transitionEngine=new q4(i.body,e,t),this._timelineEngine=new B4(i.body,e,t),this._transitionEngine.onRemovalComplete=(a,r)=>this.onRemovalComplete(a,r)}registerTrigger(i,e,t,a,r){let o=i+"-"+a,c=this._triggerCache[o];if(!c){let s=[],m=[],f=ya(this._driver,r,s,m);if(s.length)throw Un(a,s);c=Pr(a,f,this._normalizer),this._triggerCache[o]=c}this._transitionEngine.registerTrigger(e,a,c)}register(i,e){this._transitionEngine.register(i,e)}destroy(i,e){this._transitionEngine.destroy(i,e)}onInsert(i,e,t,a){this._transitionEngine.insertNode(i,e,t,a)}onRemove(i,e,t){this._transitionEngine.removeNode(i,e,t)}disableAnimations(i,e){this._transitionEngine.markElementAsDisabled(i,e)}process(i,e,t,a){if(t.charAt(0)=="@"){let[r,o]=y4(t),c=a;this._timelineEngine.command(r,e,o,c)}else this._transitionEngine.trigger(i,e,t,a)}listen(i,e,t,a,r){if(t.charAt(0)=="@"){let[o,c]=y4(t);return this._timelineEngine.listen(o,e,c,r)}return this._transitionEngine.listen(i,e,t,a,r)}flush(i=-1){this._transitionEngine.flush(i)}get players(){return[...this._transitionEngine.players,...this._timelineEngine.players]}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}afterFlushAnimationsDone(i){this._transitionEngine.afterFlushAnimationsDone(i)}};function Qr(n,i){let e=null,t=null;return Array.isArray(i)&&i.length?(e=N4(i[0]),i.length>1&&(t=N4(i[i.length-1]))):i instanceof Map&&(e=N4(i)),e||t?new Kr(n,e,t):null}var Kr=(()=>{class n{_element;_startStyles;_endStyles;static initialStylesByElement=new WeakMap;_state=0;_initialStyles;constructor(e,t,a){this._element=e,this._startStyles=t,this._endStyles=a;let r=n.initialStylesByElement.get(e);r||n.initialStylesByElement.set(e,r=new Map),this._initialStyles=r}start(){this._state<1&&(this._startStyles&&o2(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(o2(this._element,this._initialStyles),this._endStyles&&(o2(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(n.initialStylesByElement.delete(this._element),this._startStyles&&(Q2(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(Q2(this._element,this._endStyles),this._endStyles=null),o2(this._element,this._initialStyles),this._state=3)}}return n})();function N4(n){let i=null;return n.forEach((e,t)=>{Yr(t)&&(i=i||new Map,i.set(t,e))}),i}function Yr(n){return n==="display"||n==="position"}var J3=class{element;keyframes;options;_specialStyles;_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_duration;_delay;_initialized=!1;_finished=!1;_started=!1;_destroyed=!1;_finalKeyframe;_originalOnDoneFns=[];_originalOnStartFns=[];domPlayer=null;time=0;parentPlayer=null;currentSnapshot=new Map;constructor(i,e,t,a){this.element=i,this.keyframes=e,this.options=t,this._specialStyles=a,this._duration=t.duration,this._delay=t.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(i=>i()),this._onDoneFns=[])}init(){this._buildPlayer()&&this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return this.domPlayer;this._initialized=!0;let i=this.keyframes,e=this._triggerWebAnimation(this.element,i,this.options);if(!e)return this._onFinish(),null;this.domPlayer=e,this._finalKeyframe=i.length?i[i.length-1]:new Map;let t=()=>this._onFinish();return e.addEventListener("finish",t),this.onDestroy(()=>{e.removeEventListener("finish",t)}),e}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer?.pause()}_convertKeyframesToObject(i){let e=[];return i.forEach(t=>{e.push(Object.fromEntries(t))}),e}_triggerWebAnimation(i,e,t){let a=this._convertKeyframesToObject(e);try{return i.animate(a,t)}catch(r){return null}}onStart(i){this._originalOnStartFns.push(i),this._onStartFns.push(i)}onDone(i){this._originalOnDoneFns.push(i),this._onDoneFns.push(i)}onDestroy(i){this._onDestroyFns.push(i)}play(){let i=this._buildPlayer();i&&(this.hasStarted()||(this._onStartFns.forEach(e=>e()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),i.play())}pause(){this.init(),this.domPlayer?.pause()}finish(){this.init(),this.domPlayer&&(this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish())}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}_resetDomPlayerState(){this.domPlayer?.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(i=>i()),this._onDestroyFns=[])}setPosition(i){this.domPlayer||this.init(),this.domPlayer&&(this.domPlayer.currentTime=i*this.time)}getPosition(){return this.domPlayer?+(this.domPlayer.currentTime??0)/this.time:this._initialized?1:0}get totalTime(){return this._delay+this._duration}beforeDestroy(){let i=new Map;this.hasStarted()&&this._finalKeyframe.forEach((t,a)=>{a!=="offset"&&i.set(a,this._finished?t:G3(this.element,a))}),this.currentSnapshot=i}triggerCallback(i){let e=i==="start"?this._onStartFns:this._onDoneFns;e.forEach(t=>t()),e.length=0}},et=class{validateStyleProperty(i){return!0}validateAnimatableStyleProperty(i){return!0}containsElement(i,e){return M4(i,e)}getParentElement(i){return B3(i)}query(i,e,t){return z4(i,e,t)}computeStyle(i,e,t){return G3(i,e)}animate(i,e,t,a,r,o=[]){let c=a==0?"both":"forwards",s={duration:t,delay:a,fill:c};r&&(s.easing=r);let m=new Map,f=o.filter(p=>p instanceof J3);ca(t,a)&&f.forEach(p=>{p.currentSnapshot.forEach((b,v)=>m.set(v,b))});let d=ra(e).map(p=>new Map(p));d=sa(i,d,m);let h=Qr(i,d);return new J3(i,d,s,h)}};var U3="@",wa="@.disabled",tt=class{namespaceId;delegate;engine;_onDestroy;\u0275type=0;constructor(i,e,t,a){this.namespaceId=i,this.delegate=e,this.engine=t,this._onDestroy=a}get data(){return this.delegate.data}destroyNode(i){this.delegate.destroyNode?.(i)}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.engine.afterFlushAnimationsDone(()=>{queueMicrotask(()=>{this.delegate.destroy()})}),this._onDestroy?.()}createElement(i,e){return this.delegate.createElement(i,e)}createComment(i){return this.delegate.createComment(i)}createText(i){return this.delegate.createText(i)}appendChild(i,e){this.delegate.appendChild(i,e),this.engine.onInsert(this.namespaceId,e,i,!1)}insertBefore(i,e,t,a=!0){this.delegate.insertBefore(i,e,t),this.engine.onInsert(this.namespaceId,e,i,a)}removeChild(i,e,t,a){if(a){this.delegate.removeChild(i,e,t,a);return}this.parentNode(e)&&this.engine.onRemove(this.namespaceId,e,this.delegate)}selectRootElement(i,e){return this.delegate.selectRootElement(i,e)}parentNode(i){return this.delegate.parentNode(i)}nextSibling(i){return this.delegate.nextSibling(i)}setAttribute(i,e,t,a){this.delegate.setAttribute(i,e,t,a)}removeAttribute(i,e,t){this.delegate.removeAttribute(i,e,t)}addClass(i,e){this.delegate.addClass(i,e)}removeClass(i,e){this.delegate.removeClass(i,e)}setStyle(i,e,t,a){this.delegate.setStyle(i,e,t,a)}removeStyle(i,e,t){this.delegate.removeStyle(i,e,t)}setProperty(i,e,t){e.charAt(0)==U3&&e==wa?this.disableAnimations(i,!!t):this.delegate.setProperty(i,e,t)}setValue(i,e){this.delegate.setValue(i,e)}listen(i,e,t,a){return this.delegate.listen(i,e,t,a)}disableAnimations(i,e){this.engine.disableAnimations(i,e)}},V4=class extends tt{factory;constructor(i,e,t,a,r){super(e,t,a,r),this.factory=i,this.namespaceId=e}setProperty(i,e,t){e.charAt(0)==U3?e.charAt(1)=="."&&e==wa?(t=t===void 0?!0:!!t,this.disableAnimations(i,t)):this.engine.process(this.namespaceId,i,e.slice(1),t):this.delegate.setProperty(i,e,t)}listen(i,e,t,a){if(e.charAt(0)==U3){let r=Xr(i),o=e.slice(1),c="";return o.charAt(0)!=U3&&([o,c]=Zr(o)),this.engine.listen(this.namespaceId,r,o,c,s=>{let m=s._data||-1;this.factory.scheduleListenerCallback(m,t,s)})}return this.delegate.listen(i,e,t,a)}};function Xr(n){switch(n){case"body":return document.body;case"document":return document;case"window":return window;default:return n}}function Zr(n){let i=n.indexOf("."),e=n.substring(0,i),t=n.slice(i+1);return[e,t]}var it=class{delegate;engine;_zone;_currentId=0;_microtaskId=1;_animationCallbacksBuffer=[];_rendererCache=new Map;_cdRecurDepth=0;constructor(i,e,t){this.delegate=i,this.engine=e,this._zone=t,e.onRemovalComplete=(a,r)=>{r?.removeChild(null,a)}}createRenderer(i,e){let a=this.delegate.createRenderer(i,e);if(!i||!e?.data?.animation){let m=this._rendererCache,f=m.get(a);if(!f){let d=()=>m.delete(a);f=new tt("",a,this.engine,d),m.set(a,f)}return f}let r=e.id,o=e.id+"-"+this._currentId;this._currentId++,this.engine.register(o,i);let c=m=>{Array.isArray(m)?m.forEach(c):this.engine.registerTrigger(r,o,i,m.name,m)};return e.data.animation.forEach(c),new V4(this,o,a,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){queueMicrotask(()=>{this._microtaskId++})}scheduleListenerCallback(i,e,t){if(i>=0&&i<this._microtaskId){this._zone.run(()=>e(t));return}let a=this._animationCallbacksBuffer;a.length==0&&queueMicrotask(()=>{this._zone.run(()=>{a.forEach(r=>{let[o,c]=r;o(c)}),this._animationCallbacksBuffer=[]})}),a.push([e,t])}end(){this._cdRecurDepth--,this._cdRecurDepth==0&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}componentReplaced(i){this.engine.flush(),this.delegate.componentReplaced?.(i)}};var e8=(()=>{class n extends Te{constructor(e,t,a){super(e,t,a)}ngOnDestroy(){this.flush()}static \u0275fac=function(t){return new(t||n)(p3(H1),p3(me),p3(de))};static \u0275prov=z({token:n,factory:n.\u0275fac})}return n})();function t8(){return new Q3}function i8(){return new it(l(v5),l(Te),l(p1))}var Sa=[{provide:de,useFactory:t8},{provide:Te,useClass:e8},{provide:g3,useFactory:i8}],$s=[{provide:me,useClass:G4},{provide:i4,useValue:"NoopAnimations"},...Sa],n8=[{provide:me,useFactory:()=>new et},{provide:i4,useFactory:()=>"BrowserAnimations"},...Sa];function Ca(){return i5("NgEagerAnimations"),[...n8]}var La=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,a){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return n})(),a8={passive:!0},Ea=(()=>{class n{_platform=l(B1);_ngZone=l(p1);_renderer=l(g3).createRenderer(null,null);_styleLoader=l(n2);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Ui;this._styleLoader.load(La);let t=d4(e),a=this._monitoredElements.get(t);if(a)return a.subject;let r=new u1,o="cdk-text-field-autofilled",c=m=>{m.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(o)?(t.classList.add(o),this._ngZone.run(()=>r.next({target:m.target,isAutofilled:!0}))):m.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(o)&&(t.classList.remove(o),this._ngZone.run(()=>r.next({target:m.target,isAutofilled:!1})))},s=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",c,a8)));return this._monitoredElements.set(t,{subject:r,unlisten:s}),r}stopMonitoring(e){let t=d4(e),a=this._monitoredElements.get(t);a&&(a.unlisten(),a.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=z({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ta=(()=>{class n{_elementRef=l(r1);_platform=l(B1);_ngZone=l(p1);_renderer=l(R1);_resizeEvents=new u1;_previousValue;_initialHeight;_destroyed=new u1;_listenerCleanups;_minRows;_maxRows;_enabled=!0;_previousMinRows=-1;_textareaElement;get minRows(){return this._minRows}set minRows(e){this._minRows=G2(e),this._setMinHeight()}get maxRows(){return this._maxRows}set maxRows(e){this._maxRows=G2(e),this._setMaxHeight()}get enabled(){return this._enabled}set enabled(e){this._enabled!==e&&((this._enabled=e)?this.resizeToFitContent(!0):this.reset())}get placeholder(){return this._textareaElement.placeholder}set placeholder(e){this._cachedPlaceholderHeight=void 0,e?this._textareaElement.setAttribute("placeholder",e):this._textareaElement.removeAttribute("placeholder"),this._cacheTextareaPlaceholderHeight()}_cachedLineHeight;_cachedPlaceholderHeight;_document=l(H1);_hasFocus=!1;_isViewInited=!1;constructor(){l(n2).load(La),this._textareaElement=this._elementRef.nativeElement}_setMinHeight(){let e=this.minRows&&this._cachedLineHeight?`${this.minRows*this._cachedLineHeight}px`:null;e&&(this._textareaElement.style.minHeight=e)}_setMaxHeight(){let e=this.maxRows&&this._cachedLineHeight?`${this.maxRows*this._cachedLineHeight}px`:null;e&&(this._textareaElement.style.maxHeight=e)}ngAfterViewInit(){this._platform.isBrowser&&(this._initialHeight=this._textareaElement.style.height,this.resizeToFitContent(),this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[this._renderer.listen("window","resize",()=>this._resizeEvents.next()),this._renderer.listen(this._textareaElement,"focus",this._handleFocusEvent),this._renderer.listen(this._textareaElement,"blur",this._handleFocusEvent)],this._resizeEvents.pipe(Qi(16)).subscribe(()=>{this._cachedLineHeight=this._cachedPlaceholderHeight=void 0,this.resizeToFitContent(!0)})}),this._isViewInited=!0,this.resizeToFitContent(!0))}ngOnDestroy(){this._listenerCleanups?.forEach(e=>e()),this._resizeEvents.complete(),this._destroyed.next(),this._destroyed.complete()}_cacheTextareaLineHeight(){if(this._cachedLineHeight)return;let e=this._textareaElement.cloneNode(!1),t=e.style;e.rows=1,t.position="absolute",t.visibility="hidden",t.border="none",t.padding="0",t.height="",t.minHeight="",t.maxHeight="",t.top=t.bottom=t.left=t.right="auto",t.overflow="hidden",this._textareaElement.parentNode.appendChild(e),this._cachedLineHeight=e.clientHeight,e.remove(),this._setMinHeight(),this._setMaxHeight()}_measureScrollHeight(){let e=this._textareaElement,t=e.style.marginBottom||"",a=this._platform.FIREFOX,r=this._hasFocus,o=a?"cdk-textarea-autosize-measuring-firefox":"cdk-textarea-autosize-measuring";r&&(e.style.marginBottom=`${e.clientHeight}px`),e.classList.add(o);let c=e.scrollHeight-4;return e.classList.remove(o),r&&(e.style.marginBottom=t),c}_cacheTextareaPlaceholderHeight(){if(!this._isViewInited||this._cachedPlaceholderHeight!=null)return;if(!this.placeholder){this._cachedPlaceholderHeight=0;return}let e=this._textareaElement.value;this._textareaElement.value=this._textareaElement.placeholder,this._cachedPlaceholderHeight=this._measureScrollHeight(),this._textareaElement.value=e}_handleFocusEvent=e=>{this._hasFocus=e.type==="focus"};ngDoCheck(){this._platform.isBrowser&&this.resizeToFitContent()}resizeToFitContent(e=!1){if(!this._enabled||(this._cacheTextareaLineHeight(),this._cacheTextareaPlaceholderHeight(),!this._cachedLineHeight))return;let t=this._elementRef.nativeElement,a=t.value;if(!e&&this._minRows===this._previousMinRows&&a===this._previousValue)return;let r=this._measureScrollHeight(),o=Math.max(r,this._cachedPlaceholderHeight||0);t.style.height=`${o}px`,this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame<"u"?requestAnimationFrame(()=>this._scrollToCaretPosition(t)):setTimeout(()=>this._scrollToCaretPosition(t))}),this._previousValue=a,this._previousMinRows=this._minRows}reset(){this._initialHeight!==void 0&&(this._textareaElement.style.height=this._initialHeight)}_noopInputHandler(){}_scrollToCaretPosition(e){let{selectionStart:t,selectionEnd:a}=e;!this._destroyed.isStopped&&this._hasFocus&&e.setSelectionRange(t,a)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=U({type:n,selectors:[["textarea","cdkTextareaAutosize",""]],hostAttrs:["rows","1",1,"cdk-textarea-autosize"],hostBindings:function(t,a){t&1&&B("input",function(){return a._noopInputHandler()})},inputs:{minRows:[0,"cdkAutosizeMinRows","minRows"],maxRows:[0,"cdkAutosizeMaxRows","maxRows"],enabled:[2,"cdkTextareaAutosize","enabled",J],placeholder:"placeholder"},exportAs:["cdkTextareaAutosize"]})}return n})();var nt=new s1("MAT_INPUT_VALUE_ACCESSOR");var o8=["button","checkbox","file","hidden","image","radio","range","reset","submit"],c8=new s1("MAT_INPUT_CONFIG"),at=(()=>{class n{_elementRef=l(r1);_platform=l(B1);ngControl=l(P5,{optional:!0,self:!0});_autofillMonitor=l(Ea);_ngZone=l(p1);_formField=l(Q5,{optional:!0});_renderer=l(R1);_uid=l(C2).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=l(c8,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new u1;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=z1(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(A5.required)??!1}set required(e){this._required=z1(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&f4().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=z1(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>f4().has(e));constructor(){let e=l(I5,{optional:!0}),t=l(D5,{optional:!0}),a=l(Y5),r=l(nt,{optional:!0,self:!0}),o=this._elementRef.nativeElement,c=o.nodeName.toLowerCase();r?r5(r.value)?this._signalBasedValueAccessor=r:this._inputValueAccessor=r:this._inputValueAccessor=o,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(o,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new X5(a,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=c==="select",this._isTextarea=c==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=o.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&h3(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){o8.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=U({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,a){t&1&&B("focus",function(){return a._focusChanged(!0)})("blur",function(){return a._focusChanged(!1)})("input",function(){return a._onInput()}),t&2&&(p2("id",a.id)("disabled",a.disabled&&!a.disabledInteractive)("required",a.required),n1("name",a.name||null)("readonly",a._getReadonlyAttribute())("aria-disabled",a.disabled&&a.disabledInteractive?"true":null)("aria-invalid",a.empty&&a.required?null:a.errorState)("aria-required",a.required)("id",a.id),W("mat-input-server",a._isServer)("mat-mdc-form-field-textarea-control",a._isInFormField&&a._isTextarea)("mat-mdc-form-field-input-control",a._isInFormField)("mat-mdc-input-disabled-interactive",a.disabledInteractive)("mdc-text-field__input",a._isInFormField)("mat-mdc-native-select-inline",a._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",J]},exportAs:["matInput"],features:[v1([{provide:U5,useExisting:n}]),Ge]})}return n})();function s8(n,i){if(n&1&&H(0,"input",0),n&2){let e=T();C("id",e.id)("name",e.field.name)("type",e.type||"text")("readonly",e.props.readonly)("required",e.required)("errorStateMatcher",e.errorStateMatcher)("formControl",e.formControl)("formlyAttributes",e.field)("tabIndex",e.props.tabindex)("placeholder",e.props.placeholder)}}function l8(n,i){if(n&1&&H(0,"input",1),n&2){let e=T();C("id",e.id)("name",e.field.name)("readonly",e.props.readonly)("required",e.required)("errorStateMatcher",e.errorStateMatcher)("formControl",e.formControl)("formlyAttributes",e.field)("tabIndex",e.props.tabindex)("placeholder",e.props.placeholder)}}var m8=(()=>{class n extends Y1{get type(){return this.props.type||"text"}static{this.\u0275fac=(()=>{let e;return function(a){return(e||(e=M(n)))(a||n)}})()}static{this.\u0275cmp=E({type:n,selectors:[["formly-field-mat-input"]],standalone:!1,features:[e1],decls:2,vars:1,consts:[["matInput","",3,"id","name","type","readonly","required","errorStateMatcher","formControl","formlyAttributes","tabIndex","placeholder"],["matInput","","type","number",3,"id","name","readonly","required","errorStateMatcher","formControl","formlyAttributes","tabIndex","placeholder"]],template:function(t,a){t&1&&d1(0,s8,1,10,"input",0)(1,l8,1,9,"input",1),t&2&&f1(a.type!=="number"?0:1)},dependencies:[k3,F5,h2,V2,b2,at,K1],encapsulation:2,changeDetection:0})}}return n})();function Aa(){return{types:[{name:"input",component:m8,wrappers:["form-field"]},{name:"string",extends:"input"},{name:"number",extends:"input",defaultOptions:{props:{type:"number"}}},{name:"integer",extends:"input",defaultOptions:{props:{type:"number"}}}]}}var d8=(()=>{class n extends Y1{constructor(){super(...arguments),this.defaultOptions={props:{cols:1,rows:1}}}static{this.\u0275fac=(()=>{let e;return function(a){return(e||(e=M(n)))(a||n)}})()}static{this.\u0275cmp=E({type:n,selectors:[["formly-field-mat-textarea"]],standalone:!1,features:[v1([{provide:nt,useExisting:n}]),e1],decls:1,vars:16,consts:[["matInput","",3,"id","name","readonly","required","formControl","errorStateMatcher","cols","rows","formlyAttributes","placeholder","tabindex","cdkTextareaAutosize","cdkAutosizeMinRows","cdkAutosizeMaxRows"]],template:function(t,a){t&1&&H(0,"textarea",0),t&2&&(W("cdk-textarea-autosize",a.props.autosize),C("id",a.id)("name",a.field.name)("readonly",a.props.readonly)("required",a.required)("formControl",a.formControl)("errorStateMatcher",a.errorStateMatcher)("cols",a.props.cols)("rows",a.props.rows)("formlyAttributes",a.field)("placeholder",a.props.placeholder)("tabindex",a.props.tabindex)("cdkTextareaAutosize",a.props.autosize)("cdkAutosizeMinRows",a.props.autosizeMinRows)("cdkAutosizeMaxRows",a.props.autosizeMaxRows))},dependencies:[k3,h2,V2,b2,at,Ta,K1],encapsulation:2,changeDetection:0})}}return n})();function Pa(){return{types:[{name:"textarea",component:d8,wrappers:["form-field"]}]}}var f8=["input"],u8=["formField"],p8=["*"],ot=class{source;value;constructor(i,e){this.source=i,this.value=e}},h8={provide:x3,useExisting:qe(()=>i3),multi:!0},Ia=new s1("MatRadioGroup"),b8=new s1("mat-radio-default-options",{providedIn:"root",factory:()=>({color:"accent",disabledInteractive:!1})}),i3=(()=>{class n{_changeDetector=l(L1);_value=null;_name=l(C2).getId("mat-radio-group-");_selected=null;_isInitialized=!1;_labelPosition="after";_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new C1;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e==="before"?"before":"after",this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck()}_disabledInteractive=!1;constructor(){}ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(t=>{t.checked=this.value===t.value,t.checked&&(this._selected=t)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new ot(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=U({type:n,selectors:[["mat-radio-group"]],contentQueries:function(t,a,r){if(t&1&&U1(r,H4,5),t&2){let o;O(o=R())&&(a._radios=o)}},hostAttrs:["role","radiogroup",1,"mat-mdc-radio-group"],inputs:{color:"color",name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:[2,"disabled","disabled",J],required:[2,"required","required",J],disabledInteractive:[2,"disabledInteractive","disabledInteractive",J]},outputs:{change:"change"},exportAs:["matRadioGroup"],features:[v1([h8,{provide:Ia,useExisting:n}])]})}return n})(),H4=(()=>{class n{_elementRef=l(r1);_changeDetector=l(L1);_focusMonitor=l(S2);_radioDispatcher=l(Z5);_defaultOptions=l(b8,{optional:!0});_ngZone=l(p1);_renderer=l(R1);_uniqueId=l(C2).getId("mat-radio-");_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||"accent"}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new C1;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=a2();_injector=l(e2);constructor(){l(n2).load(H2);let e=l(Ia,{optional:!0}),t=l(new M3("tabindex"),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,t&&(this.tabIndex=He(t,0))}focus(e,t){t?this._focusMonitor.focusVia(this._inputElement,t,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,"click",this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new ot(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent())}}_onTouchTargetClick(e){this._onInputInteraction(e),(!this.disabled||this.disabledInteractive)&&this._inputElement?.nativeElement.focus()}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,t;if(!e||!e.selected||this.disabled?t=this.tabIndex:t=e.selected===this?this.tabIndex:-1,t!==this._previousTabIndex){let a=this._inputElement?.nativeElement;a&&(a.setAttribute("tabindex",t+""),this._previousTabIndex=t,oe(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===a&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===a&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["mat-radio-button"]],viewQuery:function(t,a){if(t&1&&h1(f8,5)(u8,7,r1),t&2){let r;O(r=R())&&(a._inputElement=r.first),O(r=R())&&(a._rippleTrigger=r.first)}},hostAttrs:[1,"mat-mdc-radio-button"],hostVars:19,hostBindings:function(t,a){t&1&&B("focus",function(){return a._inputElement.nativeElement.focus()}),t&2&&(n1("id",a.id)("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),W("mat-primary",a.color==="primary")("mat-accent",a.color==="accent")("mat-warn",a.color==="warn")("mat-mdc-radio-checked",a.checked)("mat-mdc-radio-disabled",a.disabled)("mat-mdc-radio-disabled-interactive",a.disabledInteractive)("_mat-animation-noopable",a._noopAnimations))},inputs:{id:"id",name:"name",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],disableRipple:[2,"disableRipple","disableRipple",J],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:He(e)],checked:[2,"checked","checked",J],value:"value",labelPosition:"labelPosition",disabled:[2,"disabled","disabled",J],required:[2,"required","required",J],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",J]},outputs:{change:"change"},exportAs:["matRadioButton"],ngContentSelectors:p8,decls:13,vars:17,consts:[["formField",""],["input",""],["mat-internal-form-field","",3,"labelPosition"],[1,"mdc-radio"],["aria-hidden","true",1,"mat-mdc-radio-touch-target",3,"click"],["type","radio","aria-invalid","false",1,"mdc-radio__native-control",3,"change","id","checked","disabled","required"],["aria-hidden","true",1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"],["mat-ripple","","aria-hidden","true",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mdc-label",3,"for"]],template:function(t,a){t&1&&(o1(),g(0,"div",2,0)(2,"div",3)(3,"div",4),B("click",function(o){return a._onTouchTargetClick(o)}),_(),g(4,"input",5,1),B("change",function(o){return a._onInputInteraction(o)}),_(),g(6,"div",6),H(7,"div",7)(8,"div",8),_(),g(9,"div",9),H(10,"div",10),_()(),g(11,"label",11),j(12),_()()),t&2&&(C("labelPosition",a.labelPosition),x(2),W("mdc-radio--disabled",a.disabled),x(2),C("id",a.inputId)("checked",a.checked)("disabled",a.disabled&&!a.disabledInteractive)("required",a.required),n1("name",a.name)("value",a.value)("aria-label",a.ariaLabel)("aria-labelledby",a.ariaLabelledby)("aria-describedby",a.ariaDescribedby)("aria-disabled",a.disabled&&a.disabledInteractive?"true":null),x(5),C("matRippleTrigger",a._rippleTrigger.nativeElement)("matRippleDisabled",a._isRippleDisabled())("matRippleCentered",!0),x(2),C("for",a.inputId))},dependencies:[Me,L3],styles:[`.mat-mdc-radio-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-radio-button .mdc-radio {
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  cursor: pointer;
  will-change: opacity, transform, border-color, color;
  padding: calc((var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]):not(:focus) ~ .mdc-radio__background::before {
  opacity: 0.04;
  transform: scale(1);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-hover-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-pressed-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__background {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  position: absolute;
  transform: scale(0, 0);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
  top: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
  left: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio__outer-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-radio-button .mdc-radio__inner-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transform: scale(0);
  border-radius: 50%;
  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
@media (forced-colors: active) {
  .mat-mdc-radio-button .mdc-radio__inner-circle {
    background-color: CanvasText !important;
  }
}
.mat-mdc-radio-button .mdc-radio__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  top: 0;
  right: 0;
  left: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:focus + .mdc-radio__background::before {
  transform: scale(1);
  opacity: 0.12;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled {
  pointer-events: auto;
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-radio-button label {
  cursor: pointer;
}
.mat-mdc-radio-button label:empty {
  display: none;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before {
  background-color: var(--mat-radio-checked-ripple-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before {
  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mat-internal-form-field {
  color: var(--mat-radio-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-radio-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-radio-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-radio-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-radio-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-radio-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-radio-button .mdc-radio--disabled + label {
  color: var(--mat-radio-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-radio-button .mat-radio-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: 50%;
}
.mat-mdc-radio-button .mat-radio-ripple > .mat-ripple-element {
  opacity: 0.14;
}
.mat-mdc-radio-button .mat-radio-ripple::before {
  border-radius: 50%;
}
.mat-mdc-radio-button .mdc-radio > .mdc-radio__native-control:focus:enabled:not(:checked) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-focus-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-radio-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-radio-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-radio-touch-target-size, 48px);
  width: var(--mat-radio-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-radio-touch-target-display, block);
}
[dir=rtl] .mat-mdc-radio-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2,changeDetection:0})}return n})();var v8=(()=>{class n{transform(e,t){return e instanceof Wi?this.dispose():e=this.observableOf(e,t),e.pipe(S1(a=>this.transformOptions(a,t)))}ngOnDestroy(){this.dispose()}transformOptions(e,t){let a=this.transformSelectProps(t),r=[],o={};return e?.forEach(c=>{let s=this.transformOption(c,a);if(s.group){let m=o[s.label];m===void 0?o[s.label]=r.push(s)-1:s.group.forEach(f=>r[m].group.push(f))}else r.push(s)}),r}transformOption(e,t){let a=t.groupProp(e);return Array.isArray(a)?{label:t.labelProp(e),group:a.map(r=>this.transformOption(r,t))}:(e={label:t.labelProp(e),value:t.valueProp(e),disabled:!!t.disabledProp(e)},a?{label:a,group:[e]}:e)}transformSelectProps(e){let t=e?.props||e?.templateOptions||{},a=r=>typeof r=="function"?r:o=>o[r];return{groupProp:a(t.groupProp||"group"),labelProp:a(t.labelProp||"label"),valueProp:a(t.valueProp||"value"),disabledProp:a(t.disabledProp||"disabled")}}dispose(){this._options&&(this._options.complete(),this._options=null),this._subscription&&(this._subscription.unsubscribe(),this._subscription=null)}observableOf(e,t){return this.dispose(),t&&t.options&&t.options.fieldChanges&&(this._subscription=t.options.fieldChanges.pipe(J1(({property:a,type:r,field:o})=>r==="expressionChanges"&&(a.indexOf("templateOptions.options")===0||a.indexOf("props.options")===0)&&o===t&&Array.isArray(o.props.options)&&!!this._options),Zi(()=>this._options.next(t.props.options))).subscribe()),this._options=new u2(e),this._options.asObservable()}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275pipe=$e({name:"formlySelectOptions",type:n,pure:!0})}}return n})(),Ae=(()=>{class n extends v8{static{this.\u0275fac=(()=>{let e;return function(a){return(e||(e=M(n)))(a||n)}})()}static{this.\u0275pipe=$e({name:"formlySelectOptions",type:n,pure:!0,standalone:!1})}}return n})();function y8(n,i){if(n&1&&(g(0,"mat-radio-button",1),Q(1),_()),n&2){let e=i.$implicit,t=i.$index,a=T();C("id",a.id+"_"+t)("color",a.props.color)("labelPosition",a.props.labelPosition)("disabled",e.disabled)("value",e.value),x(),N1(" ",e.label," ")}}var M8=(()=>{class n extends Y1{constructor(){super(...arguments),this.defaultOptions={props:{hideFieldUnderline:!0,floatLabel:"always",tabindex:-1}}}ngAfterViewInit(){this.focusObserver=w3(this.field,["focus"],({currentValue:e})=>{this.props.tabindex===-1&&e&&this.radioGroup._radios.length>0&&setTimeout(()=>{(this.radioGroup.selected?this.radioGroup.selected:this.radioGroup._radios.first).focus()})})}onContainerClick(){}ngOnDestroy(){super.ngOnDestroy(),this.focusObserver&&this.focusObserver.unsubscribe()}static{this.\u0275fac=(()=>{let e;return function(a){return(e||(e=M(n)))(a||n)}})()}static{this.\u0275cmp=E({type:n,selectors:[["formly-field-mat-radio"]],viewQuery:function(t,a){if(t&1&&h1(i3,7),t&2){let r;O(r=R())&&(a.radioGroup=r.first)}},standalone:!1,features:[e1],decls:5,vars:9,consts:[[3,"formControl","formlyAttributes","required","tabindex"],[3,"id","color","labelPosition","disabled","value"]],template:function(t,a){t&1&&(g(0,"mat-radio-group",0),t2(1,y8,2,6,"mat-radio-button",1,ce),Z(3,"formlySelectOptions"),Z(4,"async"),_()),t&2&&(C("formControl",a.formControl)("formlyAttributes",a.field)("required",a.required)("tabindex",a.props.tabindex),x(),i2(c1(4,7,ye(3,4,a.props.options,a.field))))},dependencies:[h2,V2,b2,i3,H4,K1,_1,Ae],encapsulation:2,changeDetection:0})}}return n})();function Fa(){return{types:[{name:"radio",component:M8,wrappers:["form-field"]}]}}var z8=["input"],x8=["label"],k8=["*"],U4={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},w8=new s1("mat-checkbox-default-options",{providedIn:"root",factory:()=>U4}),E1=(function(n){return n[n.Init=0]="Init",n[n.Checked=1]="Checked",n[n.Unchecked=2]="Unchecked",n[n.Indeterminate=3]="Indeterminate",n})(E1||{}),Q4=class{source;checked},Y2=(()=>{class n{_elementRef=l(r1);_changeDetectorRef=l(L1);_ngZone=l(p1);_animationsDisabled=a2();_options=l(w8,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new Q4;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new C1;indeterminateChange=new C1;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=E1.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){l(n2).load(H2);let e=l(new M3("tabindex"),{optional:!0});this._options=this._options||U4,this.color=this._options.color||U4.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=l(C2).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(E1.Indeterminate):this._transitionCheckState(this.checked?E1.Checked:E1.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=k2(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,a=this._getAnimationTargetElement();if(!(t===e||!a)&&(this._currentAnimationClass&&a.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){a.classList.add(this._currentAnimationClass);let r=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{a.classList.remove(r)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?E1.Checked:E1.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return"";switch(e){case E1.Init:if(t===E1.Checked)return this._animationClasses.uncheckedToChecked;if(t==E1.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case E1.Unchecked:return t===E1.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case E1.Checked:return t===E1.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case E1.Indeterminate:return t===E1.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["mat-checkbox"]],viewQuery:function(t,a){if(t&1&&h1(z8,5)(x8,5),t&2){let r;O(r=R())&&(a._inputElement=r.first),O(r=R())&&(a._labelElement=r.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(t,a){t&2&&(p2("id",a.id),n1("tabindex",null)("aria-label",null)("aria-labelledby",null),j2(a.color?"mat-"+a.color:"mat-accent"),W("_mat-animation-noopable",a._animationsDisabled)("mdc-checkbox--disabled",a.disabled)("mat-mdc-checkbox-disabled",a.disabled)("mat-mdc-checkbox-checked",a.checked)("mat-mdc-checkbox-disabled-interactive",a.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",J],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",J],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",J],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:He(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",J],checked:[2,"checked","checked",J],disabled:[2,"disabled","disabled",J],indeterminate:[2,"indeterminate","indeterminate",J]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[v1([{provide:x3,useExisting:qe(()=>n),multi:!0},{provide:N5,useExisting:n,multi:!0}]),Ge],ngContentSelectors:k8,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(t,a){if(t&1&&(o1(),g(0,"div",3),B("click",function(o){return a._preventBubblingFromLabel(o)}),g(1,"div",4,0)(3,"div",5),B("click",function(){return a._onTouchTargetClick()}),_(),g(4,"input",6,1),B("blur",function(){return a._onBlur()})("click",function(){return a._onInputClick()})("change",function(o){return a._onInteractionEvent(o)}),_(),H(6,"div",7),g(7,"div",8),Ve(),g(8,"svg",9),H(9,"path",10),_(),t4(),H(10,"div",11),_(),H(11,"div",12),_(),g(12,"label",13,2),j(14),_()()),t&2){let r=w2(2);C("labelPosition",a.labelPosition),x(4),W("mdc-checkbox--selected",a.checked),C("checked",a.checked)("indeterminate",a.indeterminate)("disabled",a.disabled&&!a.disabledInteractive)("id",a.inputId)("required",a.required)("tabIndex",a.disabled&&!a.disabledInteractive?-1:a.tabIndex),n1("aria-label",a.ariaLabel||null)("aria-labelledby",a.ariaLabelledby)("aria-describedby",a.ariaDescribedby)("aria-checked",a.indeterminate?"mixed":null)("aria-controls",a.ariaControls)("aria-disabled",a.disabled&&a.disabledInteractive?!0:null)("aria-expanded",a.ariaExpanded)("aria-owns",a.ariaOwns)("name",a.name)("value",a.value),x(7),C("matRippleTrigger",r)("matRippleDisabled",a.disableRipple||a.disabled)("matRippleCentered",!0),x(),C("for",a.inputId)}},dependencies:[Me,L3],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-checkbox-state-layer-size, 40px);
  height: var(--mat-checkbox-state-layer-size, 40px);
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
    color: GrayText;
  }
}
.mat-mdc-checkbox label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-checkbox-touch-target-size, 48px);
  width: var(--mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return n})();function C8(n,i){n&1&&(g(0,"span",1),Q(1,"*"),_())}var L8=(()=>{class n extends Y1{constructor(e,t){super(),this.renderer=e,this.focusMonitor=t,this.defaultOptions={props:{hideFieldUnderline:!0,indeterminate:!0,floatLabel:"always",hideLabel:!0,color:"accent"}}}onContainerClick(e){this.checkbox.focus(),super.onContainerClick(e)}ngAfterViewInit(){this.checkbox&&this.focusMonitor.monitor(this.checkbox._inputElement,!0).subscribe(e=>{this.field.focus=!!e,this.stateChanges.next(),e?this.props.focus&&this.props.focus(this.field):this.props.blur&&this.props.blur(this.field)})}ngAfterViewChecked(){if(this.required!==this._required&&this.checkbox&&this.checkbox._inputElement){this._required=this.required;let e=this.checkbox._inputElement.nativeElement;this.required?this.renderer.setAttribute(e,"required","required"):this.renderer.removeAttribute(e,"required")}}ngOnDestroy(){super.ngOnDestroy(),this.checkbox&&this.focusMonitor.stopMonitoring(this.checkbox._inputElement)}static{this.\u0275fac=function(t){return new(t||n)(n4(R1),n4(S2))}}static{this.\u0275cmp=E({type:n,selectors:[["formly-field-mat-checkbox"]],viewQuery:function(t,a){if(t&1&&h1(Y2,7),t&2){let r;O(r=R())&&(a.checkbox=r.first)}},standalone:!1,features:[e1],decls:3,vars:10,consts:[[3,"formControl","id","name","formlyAttributes","tabIndex","indeterminate","color","labelPosition"],["aria-hidden","true",1,"mat-form-field-required-marker","mat-mdc-form-field-required-marker"]],template:function(t,a){t&1&&(g(0,"mat-checkbox",0),Q(1),d1(2,C8,2,0,"span",1),_()),t&2&&(C("formControl",a.formControl)("id",a.id)("name",a.field.name)("formlyAttributes",a.field)("tabIndex",a.props.tabindex)("indeterminate",a.props.indeterminate&&a.formControl.value==null)("color",a.props.color)("labelPosition",a.props.labelPosition),x(),N1(" ",a.props.label," "),x(),f1(a.props.required&&a.props.hideRequiredMarker!==!0?2:-1))},dependencies:[h2,b2,Y2,K1],encapsulation:2,changeDetection:0})}}return n})();function Oa(){return{types:[{name:"checkbox",component:L8,wrappers:["form-field"]},{name:"boolean",extends:"checkbox"}]}}function E8(n,i){if(n&1){let e=M1();g(0,"mat-checkbox",1),B("change",function(a){let r=l1(e).$implicit,o=T();return m1(o.onChange(r.value,a.checked))}),Q(1),_()}if(n&2){let e=i.$implicit,t=i.$index,a=T();C("id",a.id+"_"+t)("formlyAttributes",a.field)("tabIndex",a.props.tabindex)("color",a.props.color)("labelPosition",a.props.labelPosition)("checked",a.isChecked(e))("disabled",a.formControl.disabled||e.disabled),x(),N1(" ",e.label," ")}}var T8=(()=>{class n extends Y1{constructor(){super(...arguments),this.defaultOptions={props:{hideFieldUnderline:!0,floatLabel:"always",color:"accent"}}}onChange(e,t){this.formControl.markAsDirty(),this.props.type==="array"?this.formControl.patchValue(t?[...this.formControl.value||[],e]:[...this.formControl.value||[]].filter(a=>a!==e)):this.formControl.patchValue(ge(Z1({},this.formControl.value),{[e]:t})),this.formControl.markAsTouched()}onContainerClick(){}isChecked(e){let t=this.formControl.value;return t&&(this.props.type==="array"?t.indexOf(e.value)!==-1:t[e.value])}static{this.\u0275fac=(()=>{let e;return function(a){return(e||(e=M(n)))(a||n)}})()}static{this.\u0275cmp=E({type:n,selectors:[["formly-field-mat-multicheckbox"]],viewQuery:function(t,a){if(t&1&&h1(Y2,5),t&2){let r;O(r=R())&&(a.checkboxes=r)}},hostVars:1,hostBindings:function(t,a){t&2&&p2("id",a.id)},standalone:!1,features:[e1],decls:4,vars:5,consts:[[3,"id","formlyAttributes","tabIndex","color","labelPosition","checked","disabled"],[3,"change","id","formlyAttributes","tabIndex","color","labelPosition","checked","disabled"]],template:function(t,a){t&1&&(t2(0,E8,2,8,"mat-checkbox",0,ce),Z(2,"formlySelectOptions"),Z(3,"async")),t&2&&i2(c1(3,3,ye(2,0,a.props.options,a.field)))},dependencies:[Y2,K1,_1,Ae],encapsulation:2,changeDetection:0})}}return n})();function Ra(){return{types:[{name:"multicheckbox",component:T8,wrappers:["form-field"]}]}}var N8=n=>({selectOptions:n});function A8(n,i){if(n&1){let e=M1();g(0,"mat-option",2),B("click",function(){let a=l1(e).selectOptions,r=T();return m1(r.toggleSelectAll(a))}),H(1,"mat-pseudo-checkbox",3),Q(2),_()}if(n&2){let e=i.selectOptions,t=T();x(),C("state",t.getSelectAllState(e)),x(),N1(" ",t.props.selectAllOption," ")}}function P8(n,i){if(n&1&&l5(0,4),n&2){let e=T();T();let t=w2(1);C("ngTemplateOutlet",t)("ngTemplateOutletContext",_e(2,N8,e))}}function I8(n,i){if(n&1&&(g(0,"mat-option",6),Q(1),_()),n&2){let e=i.$implicit;C("value",e.value)("disabled",e.disabled),x(),N1(" ",e.label," ")}}function F8(n,i){if(n&1&&(g(0,"mat-optgroup",5),t2(1,I8,2,3,"mat-option",6,ce),_()),n&2){let e=T().$implicit;C("label",e.label),x(),i2(e.group)}}function D8(n,i){if(n&1&&(g(0,"mat-option",6),Q(1),_()),n&2){let e=T().$implicit;C("value",e.value)("disabled",e.disabled),x(),q2(e.label)}}function O8(n,i){if(n&1&&d1(0,F8,3,1,"mat-optgroup",5)(1,D8,2,3,"mat-option",6),n&2){let e=i.$implicit;f1(e.group?0:1)}}function R8(n,i){if(n&1&&(d1(0,P8,1,4,"ng-container",4),t2(1,O8,2,1,null,null,ce)),n&2){let e=T();f1(e.props.multiple&&e.props.selectAllOption?0:-1),x(),i2(i)}}var B8=(()=>{class n extends Y1{constructor(){super(...arguments),this.defaultOptions={props:{compareWith(e,t){return e===t}}}}set select(e){w3(e,["_parentFormField","_textField"],({currentValue:t})=>{t&&(e._preferredOverlayOrigin=e._parentFormField.getConnectedOverlayOrigin())})}getSelectAllState(e){return this.empty||this.value.length===0?null:this.value.length!==this.getSelectAllValue(e).length?"indeterminate":"checked"}toggleSelectAll(e){let t=this.getSelectAllValue(e);this.formControl.markAsDirty(),this.formControl.setValue(!this.value||this.value.length!==t.length?t:[])}change(e){this.props.change?.(this.field,e)}_getAriaLabelledby(){return this.props.attributes?.["aria-labelledby"]?this.props.attributes["aria-labelledby"]:this.formField?._labelId}_getAriaLabel(){return this.props.attributes?.["aria-label"]}getSelectAllValue(e){if(!this.selectAllValue||e!==this.selectAllValue.options){let t=[];e.forEach(a=>a.group?t.push(...a.group):t.push(a)),this.selectAllValue={options:e,value:t.filter(a=>!a.disabled).map(a=>a.value)}}return this.selectAllValue.value}static{this.\u0275fac=(()=>{let e;return function(a){return(e||(e=M(n)))(a||n)}})()}static{this.\u0275cmp=E({type:n,selectors:[["formly-field-mat-select"]],viewQuery:function(t,a){if(t&1&&h1(T3,7),t&2){let r;O(r=R())&&(a.select=r.first)}},standalone:!1,features:[e1],decls:6,vars:20,consts:[["selectAll",""],[3,"selectionChange","id","formControl","formlyAttributes","placeholder","tabIndex","required","compareWith","multiple","errorStateMatcher","aria-label","aria-labelledby","disableOptionCentering","typeaheadDebounceInterval","panelClass"],[3,"click"],[1,"mat-option-pseudo-checkbox",3,"state"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"label"],[3,"value","disabled"]],template:function(t,a){if(t&1&&(W1(0,A8,3,2,"ng-template",null,0,s4),g(2,"mat-select",1),B("selectionChange",function(o){return a.change(o)}),d1(3,R8,3,1),Z(4,"formlySelectOptions"),Z(5,"async"),_()),t&2){let r;x(2),C("id",a.id)("formControl",a.formControl)("formlyAttributes",a.field)("placeholder",a.props.placeholder)("tabIndex",a.props.tabindex)("required",a.required)("compareWith",a.props.compareWith)("multiple",a.props.multiple)("errorStateMatcher",a.errorStateMatcher),c5("aria-label",a._getAriaLabel())("aria-labelledby",a._getAriaLabelledby()),C("disableOptionCentering",a.props.disableOptionCentering)("typeaheadDebounceInterval",a.props.typeaheadDebounceInterval)("panelClass",a.props.panelClass),x(),f1((r=c1(5,18,ye(4,15,a.props.options,a.field)))?3:-1,r)}},dependencies:[b5,h2,V2,b2,T3,dn,mn,ln,K1,_1,Ae],encapsulation:2,changeDetection:0})}}return n})();function Ba(){return{types:[{name:"select",component:B8,wrappers:["form-field"]},{name:"enum",extends:"select"}]}}function ja(){return[K5(),Aa(),Pa(),Fa(),Oa(),Ra(),Ba()]}var qa=n=>l(ke).fetchApiOne$(n.params.item);var Va=[{path:"",loadComponent:()=>import("./chunk-RBQX6INV.js").then(n=>n.ItemListComponent)},{path:"",loadComponent:()=>import("./chunk-EWXYDCN2.js").then(n=>n.ItemFiltersComponent),outlet:"bottom-bar"}],Ga=[gn];var $a=n=>{let i=l(we),e=l(ke);return l(P3).fetchApiOne$(n.params.machine).pipe(O2(t=>f3([I(t),i.fetchApiOne$(t.move.name),e.fetchApiOne$(t.item.name)])),S1(([t,a,r])=>({machine:t,move:a,item:r})))};var Ha=[{path:"",loadComponent:()=>import("./chunk-5BCYQ6LH.js").then(n=>n.MachineListComponent)},{path:"",loadComponent:()=>import("./chunk-6R6NJHLK.js").then(n=>n.MachineFiltersComponent),outlet:"bottom-bar"}],Wa=[zn];var Ua=n=>l(we).fetchApiOne$(n.params.move);var Qa=[{path:"",loadComponent:()=>import("./chunk-SFXY37KJ.js").then(n=>n.MoveListComponent)},{path:"",loadComponent:()=>import("./chunk-3MZRCOMA.js").then(n=>n.MoveFiltersComponent),outlet:"bottom-bar"}],Ka=[kn];var ct=class n extends bn{get name(){return"evolution-chain"}static \u0275fac=(()=>{let i;return function(t){return(i||(i=M(n)))(t||n)}})();static \u0275prov=z({token:n,factory:n.\u0275fac,providedIn:"root"})};var st=class n extends q{get name(){return"pokemon-species"}versionGroupService=l(xe);_parseOneTranslation(i){let e=new N;i.genera.forEach(r=>e.merge(r.language.name,{species:{[i.name]:{genus:r.genus}}}));let t=i.flavor_text_entries.find(r=>r.language.name==="en")?.flavor_text??i.flavor_text_entries[0]?.flavor_text??"SPECIE_TRANSLATE_ERROR_001",a=this.versionGroupService.getAll();return a.forEach(r=>{e.merge("en",{species:{[i.name]:{flavor_text:{[r.name]:t}}}})}),i.flavor_text_entries.forEach(r=>{let o=a.find(c=>c.name==r.version.name);o&&e.merge(r.language.name,{species:{[i.name]:{flavor_text:{[o.name]:r.flavor_text}}}})}),I(e)}static \u0275fac=(()=>{let i;return function(t){return(i||(i=M(n)))(t||n)}})();static \u0275prov=z({token:n,factory:n.\u0275fac,providedIn:"root"})};var Ya=n=>{let i=l(I3),e=l(st),t=l(ct);return i.fetchApiOne$(n.params.pokemon).pipe(O2(a=>e.fetchApiOne$(a.species.name).pipe(O2(r=>t.fetchApiOne$(Sn(r.evolution_chain.url)).pipe(S1(o=>({pokemon:a,species:r,evolutionChain:o})))))))};var Xa=[{path:"",loadComponent:()=>import("./chunk-5IV2ZUDN.js").then(n=>n.PokemonListComponent)},{path:"",loadComponent:()=>import("./chunk-JSVLD7VX.js").then(n=>n.PokemonFiltersComponent),outlet:"bottom-bar"}],Za=[Cn];var Ja=[{path:"",redirectTo:"pokemon",pathMatch:"full"},{path:"pokemon",children:Xa,providers:Za,data:{title:"Pokemon"}},{path:"pokemon/:pokemon",loadComponent:()=>import("./chunk-56F7XDKG.js").then(n=>n.PokemonDetailComponent),outlet:"sidebar",resolve:{pokemonDetail:Ya}},{path:"move",children:Qa,providers:Ka,data:{title:"Move"}},{path:"move/:move",loadComponent:()=>import("./chunk-4RW7H7SP.js").then(n=>n.MoveDetailComponent),outlet:"sidebar",resolve:{move:Ua}},{path:"item",children:Va,providers:Ga,data:{title:"Item"}},{path:"item/:item",loadComponent:()=>import("./chunk-I7SEMCWV.js").then(n=>n.ItemDetailComponent),outlet:"sidebar",resolve:{item:qa}},{path:"machine",children:Ha,providers:Wa,data:{title:"Machine"}},{path:"machine/:machine",loadComponent:()=>import("./chunk-G2SI6A5O.js").then(n=>n.MachineDetailComponent),outlet:"sidebar",resolve:{machineDetail:$a}}];var P1=class n{breakpointObserver=l(j5);isHandset=this.breakpointObserver.observe(W5.Handset).pipe(Yi(),S1(i=>i.matches),Xi());get isMobile$(){return this.isHandset}get isDesktop$(){return this.isHandset.pipe(S1(i=>!i))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=z({token:n,factory:n.\u0275fac,providedIn:"root"})};var X2=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=X({type:n});static \u0275inj=Y({providers:[P1]})};var j1=class{templateRef=l(R2);viewContainer=l(B2);isMobileService=l(P1);context={isMobile:!1,$implicit:!1};embeddedViewRef;ngOnInit(){this.embeddedViewRef=this.viewContainer.createEmbeddedView(this.templateRef,this.context),this.isMobileService.isMobile$.pipe(y2(this)).subscribe(i=>{this.context.$implicit=this.context.isMobile=i,this.embeddedViewRef?.rootNodes?.forEach(e=>e.classList?.toggle("mobile",i)),this.embeddedViewRef?.markForCheck()})}static ngTemplateContextGuard(i,e){return!0}};T1(j1,"\u0275fac",function(e){return new(e||j1)}),T1(j1,"\u0275dir",U({type:j1,selectors:[["","isMobile",""]]})),j1=f2([_2()],j1);var T2=class{templateRef=l(R2);viewContainer=l(B2);isMobileService=l(P1);ngOnInit(){this.isMobileService.isDesktop$.pipe(y2(this)).subscribe(i=>{i&&!this.viewContainer.length?this.viewContainer.createEmbeddedView(this.templateRef):this.viewContainer.clear()})}};T1(T2,"\u0275fac",function(e){return new(e||T2)}),T1(T2,"\u0275dir",U({type:T2,selectors:[["","ifIsDesktop",""]]})),T2=f2([_2()],T2);var N2=class{templateRef=l(R2);viewContainer=l(B2);isMobileService=l(P1);ngOnInit(){this.isMobileService.isMobile$.pipe(y2(this)).subscribe(i=>{i&&!this.viewContainer.length?this.viewContainer.createEmbeddedView(this.templateRef):this.viewContainer.clear()})}};T1(N2,"\u0275fac",function(e){return new(e||N2)}),T1(N2,"\u0275dir",U({type:N2,selectors:[["","ifIsMobile",""]]})),N2=f2([_2()],N2);var s2=class{isMobileService=l(P1);cdr=l(L1);isMobile=!1;constructor(){this.isMobileService.isMobile$.pipe(y2(this)).subscribe(i=>{this.isMobile=i,this.cdr.markForCheck()})}};T1(s2,"\u0275fac",function(e){return new(e||s2)}),T1(s2,"\u0275dir",U({type:s2,selectors:[["","isMobileClass",""]],hostVars:2,hostBindings:function(e,t){e&2&&W("mobile",t.isMobile)}})),s2=f2([_2()],s2);var Pe=class n{_darkMode$=new u2(!1);get darkMode$(){return this._darkMode$}get darkMode(){return this._darkMode$.value}set darkMode(i){this._darkMode$.next(i)}toggleDarkMode(){this.darkMode=!this.darkMode}static \u0275fac=function(e){return new(e||n)};static \u0275prov=z({token:n,factory:n.\u0275fac,providedIn:"root"})};var q8=["*"],V8=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,G8=["unscopedContent"],$8=["text"],H8=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],W8=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var U8=new s1("ListOption"),Q8=(()=>{class n{_elementRef=l(r1);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=U({type:n,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return n})(),K8=(()=>{class n{_elementRef=l(r1);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=U({type:n,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return n})(),Y8=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=U({type:n,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return n})(),t0=(()=>{class n{_listOption=l(U8,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(t){return new(t||n)};static \u0275dir=U({type:n,hostVars:4,hostBindings:function(t,a){t&2&&W("mdc-list-item__start",a._isAlignedAtStart())("mdc-list-item__end",!a._isAlignedAtStart())}})}return n})(),X8=(()=>{class n extends t0{static \u0275fac=(()=>{let e;return function(a){return(e||(e=M(n)))(a||n)}})();static \u0275dir=U({type:n,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[e1]})}return n})(),Z8=(()=>{class n extends t0{static \u0275fac=(()=>{let e;return function(a){return(e||(e=M(n)))(a||n)}})();static \u0275dir=U({type:n,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[e1]})}return n})(),J8=new s1("MAT_LIST_CONFIG"),K4=(()=>{class n{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=z1(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(z1(e))}_disabled=k2(!1);_defaultOptions=l(J8,{optional:!0});static \u0275fac=function(t){return new(t||n)};static \u0275dir=U({type:n,hostVars:1,hostBindings:function(t,a){t&2&&n1("aria-disabled",a.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return n})(),eo=(()=>{class n{_elementRef=l(r1);_ngZone=l(p1);_listBase=l(K4,{optional:!0});_platform=l(B1);_hostElement;_isButtonElement;_noopAnimations=a2();_avatars;_icons;set lines(e){this._explicitLines=G2(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=z1(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(z1(e))}_disabled=k2(!1);_subscriptions=new ve;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){l(n2).load(H2);let e=l(en,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new J5(this,this._ngZone,this._hostElement,this._platform,l(e2)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(D2(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let t=this._explicitLines??this._inferLinesFromContent(),a=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",t<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",t<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",t===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",t===3),this._hasUnscopedTextContent){let r=this._titles.length===0&&t===1;a.classList.toggle("mdc-list-item__primary-text",r),a.classList.toggle("mdc-list-item__secondary-text",!r)}else a.classList.remove("mdc-list-item__primary-text"),a.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=U({type:n,contentQueries:function(t,a,r){if(t&1&&U1(r,X8,4)(r,Z8,4),t&2){let o;O(o=R())&&(a._avatars=o),O(o=R())&&(a._icons=o)}},hostVars:4,hostBindings:function(t,a){t&2&&(n1("aria-disabled",a.disabled)("disabled",a._isButtonElement&&a.disabled||null),W("mdc-list-item--disabled",a.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return n})();var i0=(()=>{class n extends eo{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=z1(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(a){return(e||(e=M(n)))(a||n)}})();static \u0275cmp=E({type:n,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(t,a,r){if(t&1&&U1(r,K8,5)(r,Q8,5)(r,Y8,5),t&2){let o;O(o=R())&&(a._lines=o),O(o=R())&&(a._titles=o),O(o=R())&&(a._meta=o)}},viewQuery:function(t,a){if(t&1&&h1(G8,5)($8,5),t&2){let r;O(r=R())&&(a._unscopedContent=r.first),O(r=R())&&(a._itemText=r.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(t,a){t&2&&(n1("aria-current",a._getAriaCurrent()),W("mdc-list-item--activated",a.activated)("mdc-list-item--with-leading-avatar",a._avatars.length!==0)("mdc-list-item--with-leading-icon",a._icons.length!==0)("mdc-list-item--with-trailing-meta",a._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",a._hasBothLeadingAndTrailing())("_mat-animation-noopable",a._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[e1],ngContentSelectors:W8,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(t,a){t&1&&(o1(H8),j(0),g(1,"span",1),j(2,1),j(3,2),g(4,"span",2,0),B("cdkObserveContent",function(){return a._updateItemLines(!0)}),j(6,3),_()(),j(7,4),j(8,5),H(9,"div",3))},dependencies:[q5],encapsulation:2,changeDetection:0})}return n})();var n0=(()=>{class n extends K4{_isNonInteractive=!1;static \u0275fac=(()=>{let e;return function(a){return(e||(e=M(n)))(a||n)}})();static \u0275cmp=E({type:n,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[v1([{provide:K4,useExisting:n}]),e1],ngContentSelectors:q8,decls:1,vars:0,template:function(t,a){t&1&&(o1(),j(0))},styles:[V8],encapsulation:2,changeDetection:0})}return n})();var a0=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=X({type:n});static \u0275inj=Y({imports:[V5,E3,fn,$2,vn]})}return n})();var dt=["*"],io=["content"],no=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],ao=["mat-drawer","mat-drawer-content","*"];function ro(n,i){if(n&1){let e=M1();g(0,"div",1),B("click",function(){l1(e);let a=T();return m1(a._onBackdropClicked())}),_()}if(n&2){let e=T();W("mat-drawer-shown",e._isShowingBackdrop())}}function oo(n,i){n&1&&(g(0,"mat-drawer-content"),j(1,2),_())}var co=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],so=["mat-sidenav","mat-sidenav-content","*"];function lo(n,i){if(n&1){let e=M1();g(0,"div",1),B("click",function(){l1(e);let a=T();return m1(a._onBackdropClicked())}),_()}if(n&2){let e=T();W("mat-drawer-shown",e._isShowingBackdrop())}}function mo(n,i){n&1&&(g(0,"mat-sidenav-content"),j(1,2),_())}var fo=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var uo=new s1("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),J4=new s1("MAT_DRAWER_CONTAINER"),lt=(()=>{class n extends ze{_platform=l(B1);_changeDetectorRef=l(L1);_container=l(X4);constructor(){let e=l(r1),t=l(u4),a=l(p1);super(e,t,a)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:t}=this._container;return e!=null&&e.mode!=="over"&&e.opened||t!=null&&t.mode!=="over"&&t.opened}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(t,a){t&2&&(y3("margin-left",a._container._contentMargins.left,"px")("margin-right",a._container._contentMargins.right,"px"),W("mat-drawer-content-hidden",a._shouldBeHidden()))},features:[v1([{provide:ze,useExisting:n}]),e1],ngContentSelectors:dt,decls:1,vars:0,template:function(t,a){t&1&&(o1(),j(0))},encapsulation:2,changeDetection:0})}return n})(),Y4=(()=>{class n{_elementRef=l(r1);_focusTrapFactory=l($5);_focusMonitor=l(S2);_platform=l(B1);_ngZone=l(p1);_renderer=l(R1);_interactivityChecker=l(G5);_doc=l(H1);_container=l(J4,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=z1(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=z1(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(z1(e))}_opened=k2(!1);_openedVia=null;_animationStarted=new u1;_animationEnd=new u1;openedChange=new C1(!0);_openedStream=this.openedChange.pipe(J1(e=>e),S1(()=>{}));openedStart=this._animationStarted.pipe(J1(()=>this.opened),e4(void 0));_closedStream=this.openedChange.pipe(J1(e=>!e),S1(()=>{}));closedStart=this._animationStarted.pipe(J1(()=>!this.opened),e4(void 0));_destroyed=new u1;onPositionChanged=new C1;_content;_modeChanged=new u1;_injector=l(e2);_changeDetectorRef=l(L1);constructor(){this.openedChange.pipe($1(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return[e.listen(t,"keydown",a=>{a.keyCode===27&&!this.disableClose&&!S3(a)&&this._ngZone.run(()=>{this.close(),a.stopPropagation(),a.preventDefault()})}),e.listen(t,"transitionend",this._handleTransitionEvent),e.listen(t,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let a=()=>{r(),o(),e.removeAttribute("tabindex")},r=this._renderer.listen(e,"blur",a),o=this._renderer.listen(e,"mousedown",a)})),e.focus(t)}_focusByCssSelector(e,t){let a=this._elementRef.nativeElement.querySelector(e);a&&this._forceFocus(a,t)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":oe(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let a=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),a}_setOpen(e,t,a){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&t&&this._restoreFocus(a),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(r=>{this.openedChange.pipe(u3(1)).subscribe(o=>r(o?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,a=t.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),a.insertBefore(this._anchor,t)),a.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["mat-drawer"]],viewQuery:function(t,a){if(t&1&&h1(io,5),t&2){let r;O(r=R())&&(a._content=r.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(t,a){t&2&&(n1("align",null)("tabIndex",a.mode!=="side"?"-1":null),y3("visibility",!a._container&&!a.opened?"hidden":null),W("mat-drawer-end",a.position==="end")("mat-drawer-over",a.mode==="over")("mat-drawer-push",a.mode==="push")("mat-drawer-side",a.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:dt,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,a){t&1&&(o1(),g(0,"div",1,0),j(2),_())},dependencies:[ze],encapsulation:2,changeDetection:0})}return n})(),X4=(()=>{class n{_dir=l(C3,{optional:!0});_element=l(r1);_ngZone=l(p1);_changeDetectorRef=l(L1);_animationDisabled=a2();_transitionsEnabled=!1;_allDrawers;_drawers=new b3;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=z1(e)}_autosize=l(uo);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:z1(e)}_backdropOverride=null;backdropClick=new C1;_start=null;_end=null;_left=null;_right=null;_destroyed=new u1;_doCheckSubject=new u1;_contentMargins={left:null,right:null};_contentMarginChanges=new u1;get scrollable(){return this._userContent||this._content}_injector=l(e2);constructor(){let e=l(B1),t=l(p4);this._dir?.change.pipe($1(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),t.change().pipe($1(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(re(this._allDrawers),$1(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(re(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Ki(10),$1(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let a=this._left._getWidth();e+=a,t-=a}}if(this._right&&this._right.opened){if(this._right.mode=="side")t+=this._right._getWidth();else if(this._right.mode=="push"){let a=this._right._getWidth();t+=a,e-=a}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe($1(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe($1(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe($1(this._drawers.changes)).subscribe(()=>{oe({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe($1(D2(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,a="mat-drawer-container-has-open";e?t.add(a):t.remove(a)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["mat-drawer-container"]],contentQueries:function(t,a,r){if(t&1&&U1(r,lt,5)(r,Y4,5),t&2){let o;O(o=R())&&(a._content=o.first),O(o=R())&&(a._allDrawers=o)}},viewQuery:function(t,a){if(t&1&&h1(lt,5),t&2){let r;O(r=R())&&(a._userContent=r.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,a){t&2&&W("mat-drawer-container-explicit-backdrop",a._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[v1([{provide:J4,useExisting:n}])],ngContentSelectors:ao,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,a){t&1&&(o1(no),d1(0,ro,1,2,"div",0),j(1),j(2,1),d1(3,oo,2,0,"mat-drawer-content")),t&2&&(f1(a.hasBackdrop?0:-1),x(3),f1(a._content?-1:3))},dependencies:[lt],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2,changeDetection:0})}return n})(),mt=(()=>{class n extends lt{static \u0275fac=(()=>{let e;return function(a){return(e||(e=M(n)))(a||n)}})();static \u0275cmp=E({type:n,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[v1([{provide:ze,useExisting:n}]),e1],ngContentSelectors:dt,decls:1,vars:0,template:function(t,a){t&1&&(o1(),j(0))},encapsulation:2,changeDetection:0})}return n})(),ei=(()=>{class n extends Y4{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=z1(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=G2(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=G2(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(a){return(e||(e=M(n)))(a||n)}})();static \u0275cmp=E({type:n,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(t,a){t&2&&(n1("tabIndex",a.mode!=="side"?"-1":null)("align",null),y3("top",a.fixedInViewport?a.fixedTopGap:null,"px")("bottom",a.fixedInViewport?a.fixedBottomGap:null,"px"),W("mat-drawer-end",a.position==="end")("mat-drawer-over",a.mode==="over")("mat-drawer-push",a.mode==="push")("mat-drawer-side",a.mode==="side")("mat-sidenav-fixed",a.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[v1([{provide:Y4,useExisting:n}]),e1],ngContentSelectors:dt,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,a){t&1&&(o1(),g(0,"div",1,0),j(2),_())},dependencies:[ze],encapsulation:2,changeDetection:0})}return n})(),r0=(()=>{class n extends X4{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(a){return(e||(e=M(n)))(a||n)}})();static \u0275cmp=E({type:n,selectors:[["mat-sidenav-container"]],contentQueries:function(t,a,r){if(t&1&&U1(r,mt,5)(r,ei,5),t&2){let o;O(o=R())&&(a._content=o.first),O(o=R())&&(a._allDrawers=o)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(t,a){t&2&&W("mat-drawer-container-explicit-backdrop",a._backdropOverride)},exportAs:["matSidenavContainer"],features:[v1([{provide:J4,useExisting:n},{provide:X4,useExisting:n}]),e1],ngContentSelectors:so,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,a){t&1&&(o1(co),d1(0,lo,1,2,"div",0),j(1),j(2,1),d1(3,mo,2,0,"mat-sidenav-content")),t&2&&(f1(a.hasBackdrop?0:-1),x(3),f1(a._content?-1:3))},dependencies:[mt],styles:[fo],encapsulation:2,changeDetection:0})}return n})(),o0=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=X({type:n});static \u0275inj=Y({imports:[We,$2,We]})}return n})();function si(n,i){(i==null||i>n.length)&&(i=n.length);for(var e=0,t=Array(i);e<i;e++)t[e]=n[e];return t}function ho(n){if(Array.isArray(n))return n}function bo(n){if(Array.isArray(n))return si(n)}function go(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}function c0(n,i){for(var e=0;e<i.length;e++){var t=i[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,B0(t.key),t)}}function vo(n,i,e){return i&&c0(n.prototype,i),e&&c0(n,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function pt(n,i){var e=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(!e){if(Array.isArray(n)||(e=xi(n))||i&&n&&typeof n.length=="number"){e&&(n=e);var t=0,a=function(){};return{s:a,n:function(){return t>=n.length?{done:!0}:{done:!1,value:n[t++]}},e:function(s){throw s},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var r,o=!0,c=!1;return{s:function(){e=e.call(n)},n:function(){var s=e.next();return o=s.done,s},e:function(s){c=!0,r=s},f:function(){try{o||e.return==null||e.return()}finally{if(c)throw r}}}}function A(n,i,e){return(i=B0(i))in n?Object.defineProperty(n,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[i]=e,n}function _o(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function yo(n,i){var e=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(e!=null){var t,a,r,o,c=[],s=!0,m=!1;try{if(r=(e=e.call(n)).next,i===0){if(Object(e)!==e)return;s=!1}else for(;!(s=(t=r.call(e)).done)&&(c.push(t.value),c.length!==i);s=!0);}catch(f){m=!0,a=f}finally{try{if(!s&&e.return!=null&&(o=e.return(),Object(o)!==o))return}finally{if(m)throw a}}return c}}function Mo(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function s0(n,i){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);i&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),e.push.apply(e,t)}return e}function u(n){for(var i=1;i<arguments.length;i++){var e=arguments[i]!=null?arguments[i]:{};i%2?s0(Object(e),!0).forEach(function(t){A(n,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):s0(Object(e)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))})}return n}function yt(n,i){return ho(n)||yo(n,i)||xi(n,i)||Mo()}function m2(n){return bo(n)||_o(n)||xi(n)||zo()}function xo(n,i){if(typeof n!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var t=e.call(n,i||"default");if(typeof t!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(n)}function B0(n){var i=xo(n,"string");return typeof i=="symbol"?i:i+""}function gt(n){"@babel/helpers - typeof";return gt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},gt(n)}function xi(n,i){if(n){if(typeof n=="string")return si(n,i);var e={}.toString.call(n).slice(8,-1);return e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set"?Array.from(n):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?si(n,i):void 0}}var l0=function(){},ki={},j0={},q0=null,V0={mark:l0,measure:l0};try{typeof window<"u"&&(ki=window),typeof document<"u"&&(j0=document),typeof MutationObserver<"u"&&(q0=MutationObserver),typeof performance<"u"&&(V0=performance)}catch(n){}var ko=ki.navigator||{},m0=ko.userAgent,d0=m0===void 0?"":m0,J2=ki,t1=j0,f0=q0,ft=V0,Mu=!!J2.document,I2=!!t1.documentElement&&!!t1.head&&typeof t1.addEventListener=="function"&&typeof t1.createElement=="function",G0=~d0.indexOf("MSIE")||~d0.indexOf("Trident/"),ti,wo=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,So=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,$0={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},Co={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},H0=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],x1="classic",c3="duotone",W0="sharp",U0="sharp-duotone",Q0="chisel",K0="etch",Y0="graphite",X0="jelly",Z0="jelly-duo",J0="jelly-fill",e6="notdog",t6="notdog-duo",i6="slab",n6="slab-press",a6="thumbprint",r6="utility",o6="utility-duo",c6="utility-fill",s6="whiteboard",Lo="Classic",Eo="Duotone",To="Sharp",No="Sharp Duotone",Ao="Chisel",Po="Etch",Io="Graphite",Fo="Jelly",Do="Jelly Duo",Oo="Jelly Fill",Ro="Notdog",Bo="Notdog Duo",jo="Slab",qo="Slab Press",Vo="Thumbprint",Go="Utility",$o="Utility Duo",Ho="Utility Fill",Wo="Whiteboard",l6=[x1,c3,W0,U0,Q0,K0,Y0,X0,Z0,J0,e6,t6,i6,n6,a6,r6,o6,c6,s6],zu=(ti={},A(A(A(A(A(A(A(A(A(A(ti,x1,Lo),c3,Eo),W0,To),U0,No),Q0,Ao),K0,Po),Y0,Io),X0,Fo),Z0,Do),J0,Oo),A(A(A(A(A(A(A(A(A(ti,e6,Ro),t6,Bo),i6,jo),n6,qo),a6,Vo),r6,Go),o6,$o),c6,Ho),s6,Wo)),Uo={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},Qo={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},Ko=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Yo={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},m6=["fak","fa-kit","fakd","fa-kit-duotone"],u0={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Xo=["kit"],Zo="kit",Jo="kit-duotone",e7="Kit",t7="Kit Duotone",xu=A(A({},Zo,e7),Jo,t7),i7={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},n7={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},a7={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},p0={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},ii,ut={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},r7=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],o7="classic",c7="duotone",s7="sharp",l7="sharp-duotone",m7="chisel",d7="etch",f7="graphite",u7="jelly",p7="jelly-duo",h7="jelly-fill",b7="notdog",g7="notdog-duo",v7="slab",_7="slab-press",y7="thumbprint",M7="utility",z7="utility-duo",x7="utility-fill",k7="whiteboard",w7="Classic",S7="Duotone",C7="Sharp",L7="Sharp Duotone",E7="Chisel",T7="Etch",N7="Graphite",A7="Jelly",P7="Jelly Duo",I7="Jelly Fill",F7="Notdog",D7="Notdog Duo",O7="Slab",R7="Slab Press",B7="Thumbprint",j7="Utility",q7="Utility Duo",V7="Utility Fill",G7="Whiteboard",ku=(ii={},A(A(A(A(A(A(A(A(A(A(ii,o7,w7),c7,S7),s7,C7),l7,L7),m7,E7),d7,T7),f7,N7),u7,A7),p7,P7),h7,I7),A(A(A(A(A(A(A(A(A(ii,b7,F7),g7,D7),v7,O7),_7,R7),y7,B7),M7,j7),z7,q7),x7,V7),k7,G7)),$7="kit",H7="kit-duotone",W7="Kit",U7="Kit Duotone",wu=A(A({},$7,W7),H7,U7),Q7={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},K7={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},li={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},Y7=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],d6=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(r7,Y7),X7=["solid","regular","light","thin","duotone","brands","semibold"],f6=[1,2,3,4,5,6,7,8,9,10],Z7=f6.concat([11,12,13,14,15,16,17,18,19,20]),J7=["aw","fw","pull-left","pull-right"],ec=[].concat(m2(Object.keys(K7)),X7,J7,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",ut.GROUP,ut.SWAP_OPACITY,ut.PRIMARY,ut.SECONDARY]).concat(f6.map(function(n){return"".concat(n,"x")})).concat(Z7.map(function(n){return"w-".concat(n)})),tc={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},A2="___FONT_AWESOME___",mi=16,u6="fa",p6="svg-inline--fa",ue="data-fa-i2svg",di="data-fa-pseudo-element",ic="data-fa-pseudo-element-pending",wi="data-prefix",Si="data-icon",h0="fontawesome-i2svg",nc="async",ac=["HTML","HEAD","STYLE","SCRIPT"],h6=["::before","::after",":before",":after"],b6=(function(){try{return!0}catch(n){return!1}})();function s3(n){return new Proxy(n,{get:function(e,t){return t in e?e[t]:e[x1]}})}var g6=u({},$0);g6[x1]=u(u(u(u({},{"fa-duotone":"duotone"}),$0[x1]),u0.kit),u0["kit-duotone"]);var rc=s3(g6),fi=u({},Yo);fi[x1]=u(u(u(u({},{duotone:"fad"}),fi[x1]),p0.kit),p0["kit-duotone"]);var b0=s3(fi),ui=u({},li);ui[x1]=u(u({},ui[x1]),a7.kit);var Ci=s3(ui),pi=u({},Q7);pi[x1]=u(u({},pi[x1]),i7.kit);var Su=s3(pi),oc=wo,v6="fa-layers-text",cc=So,sc=u({},Uo),Cu=s3(sc),lc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ni=Co,mc=[].concat(m2(Xo),m2(ec)),a3=J2.FontAwesomeConfig||{};function dc(n){var i=t1.querySelector("script["+n+"]");if(i)return i.getAttribute(n)}function fc(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}t1&&typeof t1.querySelector=="function"&&(g0=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],g0.forEach(function(n){var i=yt(n,2),e=i[0],t=i[1],a=fc(dc(e));a!=null&&(a3[t]=a)}));var g0,_6={styleDefault:"solid",familyDefault:x1,cssPrefix:u6,replacementClass:p6,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};a3.familyPrefix&&(a3.cssPrefix=a3.familyPrefix);var De=u(u({},_6),a3);De.autoReplaceSvg||(De.observeMutations=!1);var k={};Object.keys(_6).forEach(function(n){Object.defineProperty(k,n,{enumerable:!0,set:function(e){De[n]=e,r3.forEach(function(t){return t(k)})},get:function(){return De[n]}})});Object.defineProperty(k,"familyPrefix",{enumerable:!0,set:function(i){De.cssPrefix=i,r3.forEach(function(e){return e(k)})},get:function(){return De.cssPrefix}});J2.FontAwesomeConfig=k;var r3=[];function uc(n){return r3.push(n),function(){r3.splice(r3.indexOf(n),1)}}var Z2=mi,z2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function pc(n){if(!(!n||!I2)){var i=t1.createElement("style");i.setAttribute("type","text/css"),i.innerHTML=n;for(var e=t1.head.childNodes,t=null,a=e.length-1;a>-1;a--){var r=e[a],o=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(t=r)}return t1.head.insertBefore(i,t),n}}var hc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function v0(){for(var n=12,i="";n-- >0;)i+=hc[Math.random()*62|0];return i}function Oe(n){for(var i=[],e=(n||[]).length>>>0;e--;)i[e]=n[e];return i}function Li(n){return n.classList?Oe(n.classList):(n.getAttribute("class")||"").split(" ").filter(function(i){return i})}function y6(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function bc(n){return Object.keys(n||{}).reduce(function(i,e){return i+"".concat(e,'="').concat(y6(n[e]),'" ')},"").trim()}function Mt(n){return Object.keys(n||{}).reduce(function(i,e){return i+"".concat(e,": ").concat(n[e].trim(),";")},"")}function Ei(n){return n.size!==z2.size||n.x!==z2.x||n.y!==z2.y||n.rotate!==z2.rotate||n.flipX||n.flipY}function gc(n){var i=n.transform,e=n.containerWidth,t=n.iconWidth,a={transform:"translate(".concat(e/2," 256)")},r="translate(".concat(i.x*32,", ").concat(i.y*32,") "),o="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),s={transform:"".concat(r," ").concat(o," ").concat(c)},m={transform:"translate(".concat(t/2*-1," -256)")};return{outer:a,inner:s,path:m}}function vc(n){var i=n.transform,e=n.width,t=e===void 0?mi:e,a=n.height,r=a===void 0?mi:a,o=n.startCentered,c=o===void 0?!1:o,s="";return c&&G0?s+="translate(".concat(i.x/Z2-t/2,"em, ").concat(i.y/Z2-r/2,"em) "):c?s+="translate(calc(-50% + ".concat(i.x/Z2,"em), calc(-50% + ").concat(i.y/Z2,"em)) "):s+="translate(".concat(i.x/Z2,"em, ").concat(i.y/Z2,"em) "),s+="scale(".concat(i.size/Z2*(i.flipX?-1:1),", ").concat(i.size/Z2*(i.flipY?-1:1),") "),s+="rotate(".concat(i.rotate,"deg) "),s}var _c=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function M6(){var n=u6,i=p6,e=k.cssPrefix,t=k.replacementClass,a=_c;if(e!==n||t!==i){var r=new RegExp("\\.".concat(n,"\\-"),"g"),o=new RegExp("\\--".concat(n,"\\-"),"g"),c=new RegExp("\\.".concat(i),"g");a=a.replace(r,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(c,".".concat(t))}return a}var _0=!1;function ai(){k.autoAddCss&&!_0&&(pc(M6()),_0=!0)}var yc={mixout:function(){return{dom:{css:M6,insertCss:ai}}},hooks:function(){return{beforeDOMElementCreation:function(){ai()},beforeI2svg:function(){ai()}}}},P2=J2||{};P2[A2]||(P2[A2]={});P2[A2].styles||(P2[A2].styles={});P2[A2].hooks||(P2[A2].hooks={});P2[A2].shims||(P2[A2].shims=[]);var l2=P2[A2],z6=[],x6=function(){t1.removeEventListener("DOMContentLoaded",x6),vt=1,z6.map(function(i){return i()})},vt=!1;I2&&(vt=(t1.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(t1.readyState),vt||t1.addEventListener("DOMContentLoaded",x6));function Mc(n){I2&&(vt?setTimeout(n,0):z6.push(n))}function l3(n){var i=n.tag,e=n.attributes,t=e===void 0?{}:e,a=n.children,r=a===void 0?[]:a;return typeof n=="string"?y6(n):"<".concat(i," ").concat(bc(t),">").concat(r.map(l3).join(""),"</").concat(i,">")}function y0(n,i,e){if(n&&n[i]&&n[i][e])return{prefix:i,iconName:e,icon:n[i][e]}}var zc=function(i,e){return function(t,a,r,o){return i.call(e,t,a,r,o)}},ri=function(i,e,t,a){var r=Object.keys(i),o=r.length,c=a!==void 0?zc(e,a):e,s,m,f;for(t===void 0?(s=1,f=i[r[0]]):(s=0,f=t);s<o;s++)m=r[s],f=c(f,i[m],m,i);return f};function k6(n){return m2(n).length!==1?null:n.codePointAt(0).toString(16)}function M0(n){return Object.keys(n).reduce(function(i,e){var t=n[e],a=!!t.icon;return a?i[t.iconName]=t.icon:i[e]=t,i},{})}function hi(n,i){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=e.skipHooks,a=t===void 0?!1:t,r=M0(i);typeof l2.hooks.addPack=="function"&&!a?l2.hooks.addPack(n,M0(i)):l2.styles[n]=u(u({},l2.styles[n]||{}),r),n==="fas"&&hi("fa",i)}var o3=l2.styles,xc=l2.shims,w6=Object.keys(Ci),kc=w6.reduce(function(n,i){return n[i]=Object.keys(Ci[i]),n},{}),Ti=null,S6={},C6={},L6={},E6={},T6={};function wc(n){return~mc.indexOf(n)}function Sc(n,i){var e=i.split("-"),t=e[0],a=e.slice(1).join("-");return t===n&&a!==""&&!wc(a)?a:null}var N6=function(){var i=function(r){return ri(o3,function(o,c,s){return o[s]=ri(c,r,{}),o},{})};S6=i(function(a,r,o){if(r[3]&&(a[r[3]]=o),r[2]){var c=r[2].filter(function(s){return typeof s=="number"});c.forEach(function(s){a[s.toString(16)]=o})}return a}),C6=i(function(a,r,o){if(a[o]=o,r[2]){var c=r[2].filter(function(s){return typeof s=="string"});c.forEach(function(s){a[s]=o})}return a}),T6=i(function(a,r,o){var c=r[2];return a[o]=o,c.forEach(function(s){a[s]=o}),a});var e="far"in o3||k.autoFetchSvg,t=ri(xc,function(a,r){var o=r[0],c=r[1],s=r[2];return c==="far"&&!e&&(c="fas"),typeof o=="string"&&(a.names[o]={prefix:c,iconName:s}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:c,iconName:s}),a},{names:{},unicodes:{}});L6=t.names,E6=t.unicodes,Ti=zt(k.styleDefault,{family:k.familyDefault})};uc(function(n){Ti=zt(n.styleDefault,{family:k.familyDefault})});N6();function Ni(n,i){return(S6[n]||{})[i]}function Cc(n,i){return(C6[n]||{})[i]}function fe(n,i){return(T6[n]||{})[i]}function A6(n){return L6[n]||{prefix:null,iconName:null}}function Lc(n){var i=E6[n],e=Ni("fas",n);return i||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function ee(){return Ti}var P6=function(){return{prefix:null,iconName:null,rest:[]}};function Ec(n){var i=x1,e=w6.reduce(function(t,a){return t[a]="".concat(k.cssPrefix,"-").concat(a),t},{});return l6.forEach(function(t){(n.includes(e[t])||n.some(function(a){return kc[t].includes(a)}))&&(i=t)}),i}function zt(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=i.family,t=e===void 0?x1:e,a=rc[t][n];if(t===c3&&!n)return"fad";var r=b0[t][n]||b0[t][a],o=n in l2.styles?n:null,c=r||o||null;return c}function Tc(n){var i=[],e=null;return n.forEach(function(t){var a=Sc(k.cssPrefix,t);a?e=a:t&&i.push(t)}),{iconName:e,rest:i}}function z0(n){return n.sort().filter(function(i,e,t){return t.indexOf(i)===e})}var x0=d6.concat(m6);function xt(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=i.skipLookups,t=e===void 0?!1:e,a=null,r=z0(n.filter(function(p){return x0.includes(p)})),o=z0(n.filter(function(p){return!x0.includes(p)})),c=r.filter(function(p){return a=p,!H0.includes(p)}),s=yt(c,1),m=s[0],f=m===void 0?null:m,d=Ec(r),h=u(u({},Tc(o)),{},{prefix:zt(f,{family:d})});return u(u(u({},h),Ic({values:n,family:d,styles:o3,config:k,canonical:h,givenPrefix:a})),Nc(t,a,h))}function Nc(n,i,e){var t=e.prefix,a=e.iconName;if(n||!t||!a)return{prefix:t,iconName:a};var r=i==="fa"?A6(a):{},o=fe(t,a);return a=r.iconName||o||a,t=r.prefix||t,t==="far"&&!o3.far&&o3.fas&&!k.autoFetchSvg&&(t="fas"),{prefix:t,iconName:a}}var Ac=l6.filter(function(n){return n!==x1||n!==c3}),Pc=Object.keys(li).filter(function(n){return n!==x1}).map(function(n){return Object.keys(li[n])}).flat();function Ic(n){var i=n.values,e=n.family,t=n.canonical,a=n.givenPrefix,r=a===void 0?"":a,o=n.styles,c=o===void 0?{}:o,s=n.config,m=s===void 0?{}:s,f=e===c3,d=i.includes("fa-duotone")||i.includes("fad"),h=m.familyDefault==="duotone",p=t.prefix==="fad"||t.prefix==="fa-duotone";if(!f&&(d||h||p)&&(t.prefix="fad"),(i.includes("fa-brands")||i.includes("fab"))&&(t.prefix="fab"),!t.prefix&&Ac.includes(e)){var b=Object.keys(c).find(function(P){return Pc.includes(P)});if(b||m.autoFetchSvg){var v=Ko.get(e).defaultShortPrefixId;t.prefix=v,t.iconName=fe(t.prefix,t.iconName)||t.iconName}}return(t.prefix==="fa"||r==="fa")&&(t.prefix=ee()||"fas"),t}var Fc=(function(){function n(){go(this,n),this.definitions={}}return vo(n,[{key:"add",value:function(){for(var e=this,t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(c){e.definitions[c]=u(u({},e.definitions[c]||{}),o[c]),hi(c,o[c]);var s=Ci[x1][c];s&&hi(s,o[c]),N6()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,t){var a=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(a).map(function(r){var o=a[r],c=o.prefix,s=o.iconName,m=o.icon,f=m[2];e[c]||(e[c]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(e[c][d]=m)}),e[c][s]=m}),e}}])})(),k0=[],Ie={},Fe={},Dc=Object.keys(Fe);function Oc(n,i){var e=i.mixoutsTo;return k0=n,Ie={},Object.keys(Fe).forEach(function(t){Dc.indexOf(t)===-1&&delete Fe[t]}),k0.forEach(function(t){var a=t.mixout?t.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(e[o]=a[o]),gt(a[o])==="object"&&Object.keys(a[o]).forEach(function(c){e[o]||(e[o]={}),e[o][c]=a[o][c]})}),t.hooks){var r=t.hooks();Object.keys(r).forEach(function(o){Ie[o]||(Ie[o]=[]),Ie[o].push(r[o])})}t.provides&&t.provides(Fe)}),e}function bi(n,i){for(var e=arguments.length,t=new Array(e>2?e-2:0),a=2;a<e;a++)t[a-2]=arguments[a];var r=Ie[n]||[];return r.forEach(function(o){i=o.apply(null,[i].concat(t))}),i}function pe(n){for(var i=arguments.length,e=new Array(i>1?i-1:0),t=1;t<i;t++)e[t-1]=arguments[t];var a=Ie[n]||[];a.forEach(function(r){r.apply(null,e)})}function te(){var n=arguments[0],i=Array.prototype.slice.call(arguments,1);return Fe[n]?Fe[n].apply(null,i):void 0}function gi(n){n.prefix==="fa"&&(n.prefix="fas");var i=n.iconName,e=n.prefix||ee();if(i)return i=fe(e,i)||i,y0(I6.definitions,e,i)||y0(l2.styles,e,i)}var I6=new Fc,Rc=function(){k.autoReplaceSvg=!1,k.observeMutations=!1,pe("noAuto")},Bc={i2svg:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return I2?(pe("beforeI2svg",i),te("pseudoElements2svg",i),te("i2svg",i)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=i.autoReplaceSvgRoot;k.autoReplaceSvg===!1&&(k.autoReplaceSvg=!0),k.observeMutations=!0,Mc(function(){qc({autoReplaceSvgRoot:e}),pe("watch",i)})}},jc={icon:function(i){if(i===null)return null;if(gt(i)==="object"&&i.prefix&&i.iconName)return{prefix:i.prefix,iconName:fe(i.prefix,i.iconName)||i.iconName};if(Array.isArray(i)&&i.length===2){var e=i[1].indexOf("fa-")===0?i[1].slice(3):i[1],t=zt(i[0]);return{prefix:t,iconName:fe(t,e)||e}}if(typeof i=="string"&&(i.indexOf("".concat(k.cssPrefix,"-"))>-1||i.match(oc))){var a=xt(i.split(" "),{skipLookups:!0});return{prefix:a.prefix||ee(),iconName:fe(a.prefix,a.iconName)||a.iconName}}if(typeof i=="string"){var r=ee();return{prefix:r,iconName:fe(r,i)||i}}}},q1={noAuto:Rc,config:k,dom:Bc,parse:jc,library:I6,findIconDefinition:gi,toHtml:l3},qc=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=i.autoReplaceSvgRoot,t=e===void 0?t1:e;(Object.keys(l2.styles).length>0||k.autoFetchSvg)&&I2&&k.autoReplaceSvg&&q1.dom.i2svg({node:t})};function kt(n,i){return Object.defineProperty(n,"abstract",{get:i}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(t){return l3(t)})}}),Object.defineProperty(n,"node",{get:function(){if(I2){var t=t1.createElement("div");return t.innerHTML=n.html,t.children}}}),n}function Vc(n){var i=n.children,e=n.main,t=n.mask,a=n.attributes,r=n.styles,o=n.transform;if(Ei(o)&&e.found&&!t.found){var c=e.width,s=e.height,m={x:c/s/2,y:.5};a.style=Mt(u(u({},r),{},{"transform-origin":"".concat(m.x+o.x/16,"em ").concat(m.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:i}]}function Gc(n){var i=n.prefix,e=n.iconName,t=n.children,a=n.attributes,r=n.symbol,o=r===!0?"".concat(i,"-").concat(k.cssPrefix,"-").concat(e):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},a),{},{id:o}),children:t}]}]}function $c(n){var i=["aria-label","aria-labelledby","title","role"];return i.some(function(e){return e in n})}function Ai(n){var i=n.icons,e=i.main,t=i.mask,a=n.prefix,r=n.iconName,o=n.transform,c=n.symbol,s=n.maskId,m=n.extra,f=n.watchable,d=f===void 0?!1:f,h=t.found?t:e,p=h.width,b=h.height,v=[k.replacementClass,r?"".concat(k.cssPrefix,"-").concat(r):""].filter(function(k1){return m.classes.indexOf(k1)===-1}).filter(function(k1){return k1!==""||!!k1}).concat(m.classes).join(" "),P={children:[],attributes:u(u({},m.attributes),{},{"data-prefix":a,"data-icon":r,class:v,role:m.attributes.role||"img",viewBox:"0 0 ".concat(p," ").concat(b)})};!$c(m.attributes)&&!m.attributes["aria-hidden"]&&(P.attributes["aria-hidden"]="true"),d&&(P.attributes[ue]="");var D=u(u({},P),{},{prefix:a,iconName:r,main:e,mask:t,maskId:s,transform:o,symbol:c,styles:u({},m.styles)}),V=t.found&&e.found?te("generateAbstractMask",D)||{children:[],attributes:{}}:te("generateAbstractIcon",D)||{children:[],attributes:{}},K=V.children,i1=V.attributes;return D.children=K,D.attributes=i1,c?Gc(D):Vc(D)}function w0(n){var i=n.content,e=n.width,t=n.height,a=n.transform,r=n.extra,o=n.watchable,c=o===void 0?!1:o,s=u(u({},r.attributes),{},{class:r.classes.join(" ")});c&&(s[ue]="");var m=u({},r.styles);Ei(a)&&(m.transform=vc({transform:a,startCentered:!0,width:e,height:t}),m["-webkit-transform"]=m.transform);var f=Mt(m);f.length>0&&(s.style=f);var d=[];return d.push({tag:"span",attributes:s,children:[i]}),d}function Hc(n){var i=n.content,e=n.extra,t=u(u({},e.attributes),{},{class:e.classes.join(" ")}),a=Mt(e.styles);a.length>0&&(t.style=a);var r=[];return r.push({tag:"span",attributes:t,children:[i]}),r}var oi=l2.styles;function vi(n){var i=n[0],e=n[1],t=n.slice(4),a=yt(t,1),r=a[0],o=null;return Array.isArray(r)?o={tag:"g",attributes:{class:"".concat(k.cssPrefix,"-").concat(ni.GROUP)},children:[{tag:"path",attributes:{class:"".concat(k.cssPrefix,"-").concat(ni.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(k.cssPrefix,"-").concat(ni.PRIMARY),fill:"currentColor",d:r[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:i,height:e,icon:o}}var Wc={found:!1,width:512,height:512};function Uc(n,i){!b6&&!k.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(i,'" is missing.'))}function _i(n,i){var e=i;return i==="fa"&&k.styleDefault!==null&&(i=ee()),new Promise(function(t,a){if(e==="fa"){var r=A6(n)||{};n=r.iconName||n,i=r.prefix||i}if(n&&i&&oi[i]&&oi[i][n]){var o=oi[i][n];return t(vi(o))}Uc(n,i),t(u(u({},Wc),{},{icon:k.showMissingIcons&&n?te("missingIconAbstract")||{}:{}}))})}var S0=function(){},yi=k.measurePerformance&&ft&&ft.mark&&ft.measure?ft:{mark:S0,measure:S0},n3='FA "7.2.0"',Qc=function(i){return yi.mark("".concat(n3," ").concat(i," begins")),function(){return F6(i)}},F6=function(i){yi.mark("".concat(n3," ").concat(i," ends")),yi.measure("".concat(n3," ").concat(i),"".concat(n3," ").concat(i," begins"),"".concat(n3," ").concat(i," ends"))},Pi={begin:Qc,end:F6},ht=function(){};function C0(n){var i=n.getAttribute?n.getAttribute(ue):null;return typeof i=="string"}function Kc(n){var i=n.getAttribute?n.getAttribute(wi):null,e=n.getAttribute?n.getAttribute(Si):null;return i&&e}function Yc(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(k.replacementClass)}function Xc(){if(k.autoReplaceSvg===!0)return bt.replace;var n=bt[k.autoReplaceSvg];return n||bt.replace}function Zc(n){return t1.createElementNS("http://www.w3.org/2000/svg",n)}function Jc(n){return t1.createElement(n)}function D6(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=i.ceFn,t=e===void 0?n.tag==="svg"?Zc:Jc:e;if(typeof n=="string")return t1.createTextNode(n);var a=t(n.tag);Object.keys(n.attributes||[]).forEach(function(o){a.setAttribute(o,n.attributes[o])});var r=n.children||[];return r.forEach(function(o){a.appendChild(D6(o,{ceFn:t}))}),a}function e9(n){var i=" ".concat(n.outerHTML," ");return i="".concat(i,"Font Awesome fontawesome.com "),i}var bt={replace:function(i){var e=i[0];if(e.parentNode)if(i[1].forEach(function(a){e.parentNode.insertBefore(D6(a),e)}),e.getAttribute(ue)===null&&k.keepOriginalSource){var t=t1.createComment(e9(e));e.parentNode.replaceChild(t,e)}else e.remove()},nest:function(i){var e=i[0],t=i[1];if(~Li(e).indexOf(k.replacementClass))return bt.replace(i);var a=new RegExp("".concat(k.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){var r=t[0].attributes.class.split(" ").reduce(function(c,s){return s===k.replacementClass||s.match(a)?c.toSvg.push(s):c.toNode.push(s),c},{toNode:[],toSvg:[]});t[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",r.toNode.join(" "))}var o=t.map(function(c){return l3(c)}).join(`
`);e.setAttribute(ue,""),e.innerHTML=o}};function L0(n){n()}function O6(n,i){var e=typeof i=="function"?i:ht;if(n.length===0)e();else{var t=L0;k.mutateApproach===nc&&(t=J2.requestAnimationFrame||L0),t(function(){var a=Xc(),r=Pi.begin("mutate");n.map(a),r(),e()})}}var Ii=!1;function R6(){Ii=!0}function Mi(){Ii=!1}var _t=null;function E0(n){if(f0&&k.observeMutations){var i=n.treeCallback,e=i===void 0?ht:i,t=n.nodeCallback,a=t===void 0?ht:t,r=n.pseudoElementsCallback,o=r===void 0?ht:r,c=n.observeMutationsRoot,s=c===void 0?t1:c;_t=new f0(function(m){if(!Ii){var f=ee();Oe(m).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!C0(d.addedNodes[0])&&(k.searchPseudoElements&&o(d.target),e(d.target)),d.type==="attributes"&&d.target.parentNode&&k.searchPseudoElements&&o([d.target],!0),d.type==="attributes"&&C0(d.target)&&~lc.indexOf(d.attributeName))if(d.attributeName==="class"&&Kc(d.target)){var h=xt(Li(d.target)),p=h.prefix,b=h.iconName;d.target.setAttribute(wi,p||f),b&&d.target.setAttribute(Si,b)}else Yc(d.target)&&a(d.target)})}}),I2&&_t.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function t9(){_t&&_t.disconnect()}function i9(n){var i=n.getAttribute("style"),e=[];return i&&(e=i.split(";").reduce(function(t,a){var r=a.split(":"),o=r[0],c=r.slice(1);return o&&c.length>0&&(t[o]=c.join(":").trim()),t},{})),e}function n9(n){var i=n.getAttribute("data-prefix"),e=n.getAttribute("data-icon"),t=n.innerText!==void 0?n.innerText.trim():"",a=xt(Li(n));return a.prefix||(a.prefix=ee()),i&&e&&(a.prefix=i,a.iconName=e),a.iconName&&a.prefix||(a.prefix&&t.length>0&&(a.iconName=Cc(a.prefix,n.innerText)||Ni(a.prefix,k6(n.innerText))),!a.iconName&&k.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=n.firstChild.data)),a}function a9(n){var i=Oe(n.attributes).reduce(function(e,t){return e.name!=="class"&&e.name!=="style"&&(e[t.name]=t.value),e},{});return i}function r9(){return{iconName:null,prefix:null,transform:z2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function T0(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=n9(n),t=e.iconName,a=e.prefix,r=e.rest,o=a9(n),c=bi("parseNodeAttributes",{},n),s=i.styleParser?i9(n):[];return u({iconName:t,prefix:a,transform:z2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:s,attributes:o}},c)}var o9=l2.styles;function B6(n){var i=k.autoReplaceSvg==="nest"?T0(n,{styleParser:!1}):T0(n);return~i.extra.classes.indexOf(v6)?te("generateLayersText",n,i):te("generateSvgReplacementMutation",n,i)}function c9(){return[].concat(m2(m6),m2(d6))}function N0(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!I2)return Promise.resolve();var e=t1.documentElement.classList,t=function(d){return e.add("".concat(h0,"-").concat(d))},a=function(d){return e.remove("".concat(h0,"-").concat(d))},r=k.autoFetchSvg?c9():H0.concat(Object.keys(o9));r.includes("fa")||r.push("fa");var o=[".".concat(v6,":not([").concat(ue,"])")].concat(r.map(function(f){return".".concat(f,":not([").concat(ue,"])")})).join(", ");if(o.length===0)return Promise.resolve();var c=[];try{c=Oe(n.querySelectorAll(o))}catch(f){}if(c.length>0)t("pending"),a("complete");else return Promise.resolve();var s=Pi.begin("onTree"),m=c.reduce(function(f,d){try{var h=B6(d);h&&f.push(h)}catch(p){b6||p.name==="MissingIcon"&&console.error(p)}return f},[]);return new Promise(function(f,d){Promise.all(m).then(function(h){O6(h,function(){t("active"),t("complete"),a("pending"),typeof i=="function"&&i(),s(),f()})}).catch(function(h){s(),d(h)})})}function s9(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;B6(n).then(function(e){e&&O6([e],i)})}function l9(n){return function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=(i||{}).icon?i:gi(i||{}),a=e.mask;return a&&(a=(a||{}).icon?a:gi(a||{})),n(t,u(u({},e),{},{mask:a}))}}var m9=function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.transform,a=t===void 0?z2:t,r=e.symbol,o=r===void 0?!1:r,c=e.mask,s=c===void 0?null:c,m=e.maskId,f=m===void 0?null:m,d=e.classes,h=d===void 0?[]:d,p=e.attributes,b=p===void 0?{}:p,v=e.styles,P=v===void 0?{}:v;if(i){var D=i.prefix,V=i.iconName,K=i.icon;return kt(u({type:"icon"},i),function(){return pe("beforeDOMElementCreation",{iconDefinition:i,params:e}),Ai({icons:{main:vi(K),mask:s?vi(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:D,iconName:V,transform:u(u({},z2),a),symbol:o,maskId:f,extra:{attributes:b,styles:P,classes:h}})})}},d9={mixout:function(){return{icon:l9(m9)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=N0,e.nodeCallback=s9,e}}},provides:function(i){i.i2svg=function(e){var t=e.node,a=t===void 0?t1:t,r=e.callback,o=r===void 0?function(){}:r;return N0(a,o)},i.generateSvgReplacementMutation=function(e,t){var a=t.iconName,r=t.prefix,o=t.transform,c=t.symbol,s=t.mask,m=t.maskId,f=t.extra;return new Promise(function(d,h){Promise.all([_i(a,r),s.iconName?_i(s.iconName,s.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(p){var b=yt(p,2),v=b[0],P=b[1];d([e,Ai({icons:{main:v,mask:P},prefix:r,iconName:a,transform:o,symbol:c,maskId:m,extra:f,watchable:!0})])}).catch(h)})},i.generateAbstractIcon=function(e){var t=e.children,a=e.attributes,r=e.main,o=e.transform,c=e.styles,s=Mt(c);s.length>0&&(a.style=s);var m;return Ei(o)&&(m=te("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),t.push(m||r.icon),{children:t,attributes:a}}}},f9={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.classes,r=a===void 0?[]:a;return kt({type:"layer"},function(){pe("beforeDOMElementCreation",{assembler:e,params:t});var o=[];return e(function(c){Array.isArray(c)?c.map(function(s){o=o.concat(s.abstract)}):o=o.concat(c.abstract)}),[{tag:"span",attributes:{class:["".concat(k.cssPrefix,"-layers")].concat(m2(r)).join(" ")},children:o}]})}}}},u9={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.title,r=a===void 0?null:a,o=t.classes,c=o===void 0?[]:o,s=t.attributes,m=s===void 0?{}:s,f=t.styles,d=f===void 0?{}:f;return kt({type:"counter",content:e},function(){return pe("beforeDOMElementCreation",{content:e,params:t}),Hc({content:e.toString(),title:r,extra:{attributes:m,styles:d,classes:["".concat(k.cssPrefix,"-layers-counter")].concat(m2(c))}})})}}}},p9={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.transform,r=a===void 0?z2:a,o=t.classes,c=o===void 0?[]:o,s=t.attributes,m=s===void 0?{}:s,f=t.styles,d=f===void 0?{}:f;return kt({type:"text",content:e},function(){return pe("beforeDOMElementCreation",{content:e,params:t}),w0({content:e,transform:u(u({},z2),r),extra:{attributes:m,styles:d,classes:["".concat(k.cssPrefix,"-layers-text")].concat(m2(c))}})})}}},provides:function(i){i.generateLayersText=function(e,t){var a=t.transform,r=t.extra,o=null,c=null;if(G0){var s=parseInt(getComputedStyle(e).fontSize,10),m=e.getBoundingClientRect();o=m.width/s,c=m.height/s}return Promise.resolve([e,w0({content:e.innerHTML,width:o,height:c,transform:a,extra:r,watchable:!0})])}}},j6=new RegExp('"',"ug"),A0=[1105920,1112319],P0=u(u(u(u({},{FontAwesome:{normal:"fas",400:"fas"}}),Qo),tc),n7),zi=Object.keys(P0).reduce(function(n,i){return n[i.toLowerCase()]=P0[i],n},{}),h9=Object.keys(zi).reduce(function(n,i){var e=zi[i];return n[i]=e[900]||m2(Object.entries(e))[0][1],n},{});function b9(n){var i=n.replace(j6,"");return k6(m2(i)[0]||"")}function g9(n){var i=n.getPropertyValue("font-feature-settings").includes("ss01"),e=n.getPropertyValue("content"),t=e.replace(j6,""),a=t.codePointAt(0),r=a>=A0[0]&&a<=A0[1],o=t.length===2?t[0]===t[1]:!1;return r||o||i}function v9(n,i){var e=n.replace(/^['"]|['"]$/g,"").toLowerCase(),t=parseInt(i),a=isNaN(t)?"normal":t;return(zi[e]||{})[a]||h9[e]}function I0(n,i){var e="".concat(ic).concat(i.replace(":","-"));return new Promise(function(t,a){if(n.getAttribute(e)!==null)return t();var r=Oe(n.children),o=r.filter(function(I1){return I1.getAttribute(di)===i})[0],c=J2.getComputedStyle(n,i),s=c.getPropertyValue("font-family"),m=s.match(cc),f=c.getPropertyValue("font-weight"),d=c.getPropertyValue("content");if(o&&!m)return n.removeChild(o),t();if(m&&d!=="none"&&d!==""){var h=c.getPropertyValue("content"),p=v9(s,f),b=b9(h),v=m[0].startsWith("FontAwesome"),P=g9(c),D=Ni(p,b),V=D;if(v){var K=Lc(b);K.iconName&&K.prefix&&(D=K.iconName,p=K.prefix)}if(D&&!P&&(!o||o.getAttribute(wi)!==p||o.getAttribute(Si)!==V)){n.setAttribute(e,V),o&&n.removeChild(o);var i1=r9(),k1=i1.extra;k1.attributes[di]=i,_i(D,p).then(function(I1){var y1=Ai(u(u({},i1),{},{icons:{main:I1,mask:P6()},prefix:p,iconName:V,extra:k1,watchable:!0})),b1=t1.createElementNS("http://www.w3.org/2000/svg","svg");i==="::before"?n.insertBefore(b1,n.firstChild):n.appendChild(b1),b1.outerHTML=y1.map(function(x2){return l3(x2)}).join(`
`),n.removeAttribute(e),t()}).catch(a)}else t()}else t()})}function _9(n){return Promise.all([I0(n,"::before"),I0(n,"::after")])}function y9(n){return n.parentNode!==document.head&&!~ac.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(di)&&(!n.parentNode||n.parentNode.tagName!=="svg")}var M9=function(i){return!!i&&h6.some(function(e){return i.includes(e)})},z9=function(i){if(!i)return[];var e=new Set,t=i.split(/,(?![^()]*\))/).map(function(s){return s.trim()});t=t.flatMap(function(s){return s.includes("(")?s:s.split(",").map(function(m){return m.trim()})});var a=pt(t),r;try{for(a.s();!(r=a.n()).done;){var o=r.value;if(M9(o)){var c=h6.reduce(function(s,m){return s.replace(m,"")},o);c!==""&&c!=="*"&&e.add(c)}}}catch(s){a.e(s)}finally{a.f()}return e};function F0(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(I2){var e;if(i)e=n;else if(k.searchPseudoElementsFullScan)e=n.querySelectorAll("*");else{var t=new Set,a=pt(document.styleSheets),r;try{for(a.s();!(r=a.n()).done;){var o=r.value;try{var c=pt(o.cssRules),s;try{for(c.s();!(s=c.n()).done;){var m=s.value,f=z9(m.selectorText),d=pt(f),h;try{for(d.s();!(h=d.n()).done;){var p=h.value;t.add(p)}}catch(v){d.e(v)}finally{d.f()}}}catch(v){c.e(v)}finally{c.f()}}catch(v){k.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(v.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(v){a.e(v)}finally{a.f()}if(!t.size)return;var b=Array.from(t).join(", ");try{e=n.querySelectorAll(b)}catch(v){}}return new Promise(function(v,P){var D=Oe(e).filter(y9).map(_9),V=Pi.begin("searchPseudoElements");R6(),Promise.all(D).then(function(){V(),Mi(),v()}).catch(function(){V(),Mi(),P()})})}}var x9={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=F0,e}}},provides:function(i){i.pseudoElements2svg=function(e){var t=e.node,a=t===void 0?t1:t;k.searchPseudoElements&&F0(a)}}},D0=!1,k9={mixout:function(){return{dom:{unwatch:function(){R6(),D0=!0}}}},hooks:function(){return{bootstrap:function(){E0(bi("mutationObserverCallbacks",{}))},noAuto:function(){t9()},watch:function(e){var t=e.observeMutationsRoot;D0?Mi():E0(bi("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}},O0=function(i){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return i.toLowerCase().split(" ").reduce(function(t,a){var r=a.toLowerCase().split("-"),o=r[0],c=r.slice(1).join("-");if(o&&c==="h")return t.flipX=!0,t;if(o&&c==="v")return t.flipY=!0,t;if(c=parseFloat(c),isNaN(c))return t;switch(o){case"grow":t.size=t.size+c;break;case"shrink":t.size=t.size-c;break;case"left":t.x=t.x-c;break;case"right":t.x=t.x+c;break;case"up":t.y=t.y-c;break;case"down":t.y=t.y+c;break;case"rotate":t.rotate=t.rotate+c;break}return t},e)},w9={mixout:function(){return{parse:{transform:function(e){return O0(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var a=t.getAttribute("data-fa-transform");return a&&(e.transform=O0(a)),e}}},provides:function(i){i.generateAbstractTransformGrouping=function(e){var t=e.main,a=e.transform,r=e.containerWidth,o=e.iconWidth,c={transform:"translate(".concat(r/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),m="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(s," ").concat(m," ").concat(f)},h={transform:"translate(".concat(o/2*-1," -256)")},p={outer:c,inner:d,path:h};return{tag:"g",attributes:u({},p.outer),children:[{tag:"g",attributes:u({},p.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:u(u({},t.icon.attributes),p.path)}]}]}}}},ci={x:0,y:0,width:"100%",height:"100%"};function R0(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||i)&&(n.attributes.fill="black"),n}function S9(n){return n.tag==="g"?n.children:[n]}var C9={hooks:function(){return{parseNodeAttributes:function(e,t){var a=t.getAttribute("data-fa-mask"),r=a?xt(a.split(" ").map(function(o){return o.trim()})):P6();return r.prefix||(r.prefix=ee()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides:function(i){i.generateAbstractMask=function(e){var t=e.children,a=e.attributes,r=e.main,o=e.mask,c=e.maskId,s=e.transform,m=r.width,f=r.icon,d=o.width,h=o.icon,p=gc({transform:s,containerWidth:d,iconWidth:m}),b={tag:"rect",attributes:u(u({},ci),{},{fill:"white"})},v=f.children?{children:f.children.map(R0)}:{},P={tag:"g",attributes:u({},p.inner),children:[R0(u({tag:f.tag,attributes:u(u({},f.attributes),p.path)},v))]},D={tag:"g",attributes:u({},p.outer),children:[P]},V="mask-".concat(c||v0()),K="clip-".concat(c||v0()),i1={tag:"mask",attributes:u(u({},ci),{},{id:V,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,D]},k1={tag:"defs",children:[{tag:"clipPath",attributes:{id:K},children:S9(h)},i1]};return t.push(k1,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(K,")"),mask:"url(#".concat(V,")")},ci)}),{children:t,attributes:a}}}},L9={provides:function(i){var e=!1;J2.matchMedia&&(e=J2.matchMedia("(prefers-reduced-motion: reduce)").matches),i.missingIconAbstract=function(){var t=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:u(u({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},r),{},{attributeName:"opacity"}),c={tag:"circle",attributes:u(u({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||c.children.push({tag:"animate",attributes:u(u({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),t.push(c),t.push({tag:"path",attributes:u(u({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||t.push({tag:"path",attributes:u(u({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},E9={hooks:function(){return{parseNodeAttributes:function(e,t){var a=t.getAttribute("data-fa-symbol"),r=a===null?!1:a===""?!0:a;return e.symbol=r,e}}}},T9=[yc,d9,f9,u9,p9,x9,k9,w9,C9,L9,E9];Oc(T9,{mixoutsTo:q1});var Lu=q1.noAuto,q6=q1.config,Eu=q1.library,V6=q1.dom,G6=q1.parse,Tu=q1.findIconDefinition,Nu=q1.toHtml,$6=q1.icon,Au=q1.layer,N9=q1.text,A9=q1.counter;var P9=["*"],I9=(()=>{class n{defaultPrefix="fas";fallbackIcon=null;fixedWidth;set autoAddCss(e){q6.autoAddCss=e,this._autoAddCss=e}get autoAddCss(){return this._autoAddCss}_autoAddCss=!0;static \u0275fac=function(t){return new(t||n)};static \u0275prov=z({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),F9=(()=>{class n{definitions={};addIcons(...e){for(let t of e){t.prefix in this.definitions||(this.definitions[t.prefix]={}),this.definitions[t.prefix][t.iconName]=t;for(let a of t.icon[2])typeof a=="string"&&(this.definitions[t.prefix][a]=t)}}addIconPacks(...e){for(let t of e){let a=Object.keys(t).map(r=>t[r]);this.addIcons(...a)}}getIconDefinition(e,t){return e in this.definitions&&t in this.definitions[e]?this.definitions[e][t]:null}static \u0275fac=function(t){return new(t||n)};static \u0275prov=z({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),D9=n=>{throw new Error(`Could not find icon with iconName=${n.iconName} and prefix=${n.prefix} in the icon library.`)},O9=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},W6=n=>n!=null&&(n===90||n===180||n===270||n==="90"||n==="180"||n==="270"),R9=n=>{let i=W6(n.rotate),e={[`fa-${n.animation}`]:n.animation!=null&&!n.animation.startsWith("spin"),"fa-spin":n.animation==="spin"||n.animation==="spin-reverse","fa-spin-pulse":n.animation==="spin-pulse"||n.animation==="spin-pulse-reverse","fa-spin-reverse":n.animation==="spin-reverse"||n.animation==="spin-pulse-reverse","fa-pulse":n.animation==="spin-pulse"||n.animation==="spin-pulse-reverse","fa-fw":n.fixedWidth,"fa-border":n.border,"fa-inverse":n.inverse,"fa-layers-counter":n.counter,"fa-flip-horizontal":n.flip==="horizontal"||n.flip==="both","fa-flip-vertical":n.flip==="vertical"||n.flip==="both",[`fa-${n.size}`]:n.size!==null,[`fa-rotate-${n.rotate}`]:i,"fa-rotate-by":n.rotate!=null&&!i,[`fa-pull-${n.pull}`]:n.pull!==null,[`fa-stack-${n.stackItemSize}`]:n.stackItemSize!=null};return Object.keys(e).map(t=>e[t]?t:null).filter(t=>t!=null)},Fi=new WeakSet,H6="fa-auto-css";function B9(n,i){if(!i.autoAddCss||Fi.has(n))return;if(n.getElementById(H6)!=null){i.autoAddCss=!1,Fi.add(n);return}let e=n.createElement("style");e.setAttribute("type","text/css"),e.setAttribute("id",H6),e.innerHTML=V6.css();let t=n.head.childNodes,a=null;for(let r=t.length-1;r>-1;r--){let o=t[r],c=o.nodeName.toUpperCase();["STYLE","LINK"].indexOf(c)>-1&&(a=o)}n.head.insertBefore(e,a),i.autoAddCss=!1,Fi.add(n)}var j9=n=>n.prefix!==void 0&&n.iconName!==void 0,q9=(n,i)=>j9(n)?n:Array.isArray(n)&&n.length===2?{prefix:n[0],iconName:n[1]}:{prefix:i,iconName:n},V9=(()=>{class n{stackItemSize=z3("1x");size=z3();_effect=h3(()=>{if(this.size())throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')});static \u0275fac=function(t){return new(t||n)};static \u0275dir=U({type:n,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:[1,"stackItemSize"],size:[1,"size"]}})}return n})(),G9=(()=>{class n{size=z3();classes=l4(()=>{let e=this.size(),t=e?{[`fa-${e}`]:!0}:{};return ge(Z1({},t),{"fa-stack":!0})});static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["fa-stack"]],hostVars:2,hostBindings:function(t,a){t&2&&j2(a.classes())},inputs:{size:[1,"size"]},ngContentSelectors:P9,decls:1,vars:0,template:function(t,a){t&1&&(o1(),j(0))},encapsulation:2,changeDetection:0})}return n})(),U6=(()=>{class n{icon=A1();title=A1();animation=A1();mask=A1();flip=A1();size=A1();pull=A1();border=A1();inverse=A1();symbol=A1();rotate=A1();fixedWidth=A1();transform=A1();a11yRole=A1();renderedIconHTML=l4(()=>{let e=this.icon()??this.config.fallbackIcon;if(!e)return O9(),"";let t=this.findIconDefinition(e);if(!t)return"";let a=this.buildParams();B9(this.document,this.config);let r=$6(t,a);return this.sanitizer.bypassSecurityTrustHtml(r.html.join(`
`))});document=l(H1);sanitizer=l(k5);config=l(I9);iconLibrary=l(F9);stackItem=l(V9,{optional:!0});stack=l(G9,{optional:!0});constructor(){this.stack!=null&&this.stackItem==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x" />.')}findIconDefinition(e){let t=q9(e,this.config.defaultPrefix);if("icon"in t)return t;let a=this.iconLibrary.getIconDefinition(t.prefix,t.iconName);return a??(D9(t),null)}buildParams(){let e=this.fixedWidth(),t={flip:this.flip(),animation:this.animation(),border:this.border(),inverse:this.inverse(),size:this.size(),pull:this.pull(),rotate:this.rotate(),fixedWidth:typeof e=="boolean"?e:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize():void 0},a=this.transform(),r=typeof a=="string"?G6.transform(a):a,o=this.mask(),c=o!=null?this.findIconDefinition(o):null,s={},m=this.a11yRole();m!=null&&(s.role=m);let f={};return t.rotate!=null&&!W6(t.rotate)&&(f["--fa-rotate-angle"]=`${t.rotate}`),{title:this.title(),transform:r,classes:R9(t),mask:c??void 0,symbol:this.symbol(),attributes:s,styles:f}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(t,a){t&2&&(p2("innerHTML",a.renderedIconHTML(),e5),n1("title",a.title()??void 0))},inputs:{icon:[1,"icon"],title:[1,"title"],animation:[1,"animation"],mask:[1,"mask"],flip:[1,"flip"],size:[1,"size"],pull:[1,"pull"],border:[1,"border"],inverse:[1,"inverse"],symbol:[1,"symbol"],rotate:[1,"rotate"],fixedWidth:[1,"fixedWidth"],transform:[1,"transform"],a11yRole:[1,"a11yRole"]},outputs:{icon:"iconChange",title:"titleChange",animation:"animationChange",mask:"maskChange",flip:"flipChange",size:"sizeChange",pull:"pullChange",border:"borderChange",inverse:"inverseChange",symbol:"symbolChange",rotate:"rotateChange",fixedWidth:"fixedWidthChange",transform:"transformChange",a11yRole:"a11yRoleChange"},decls:0,vars:0,template:function(t,a){},encapsulation:2,changeDetection:0})}return n})();var Q6={prefix:"fab",iconName:"github",icon:[512,512,[],"f09b","M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};var Re=class n{isMobileService=l(P1);_isOpen$=new u2(!0);constructor(){this.isMobileService.isMobile$.subscribe(i=>this._isOpen$.next(!i))}get isOpen$(){return this._isOpen$.asObservable()}toggle(i=!this._isOpen$.value){this._isOpen$.next(i)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=z({token:n,factory:n.\u0275fac,providedIn:"root"})};var $9=["*"];function H9(n,i){if(n&1&&(g(0,"mat-sidenav-container",2)(1,"mat-sidenav",3,0),Z(3,"async"),g(4,"mat-nav-list")(5,"a",4),Q(6,"Pokemon"),_(),g(7,"a",5),Q(8,"Moves"),_(),g(9,"a",6),Q(10,"Items"),_(),g(11,"a",7),Q(12,"Machines"),_(),H(13,"div",8),g(14,"a",9),H(15,"fa-icon",10),Q(16," Github "),_()()(),g(17,"mat-sidenav-content"),j(18),_()()),n&2){let e=i.$implicit,t=T();x(),C("fixedInViewport",!1)("mode",e?"over":"side")("opened",c1(3,5,t.sidenavService.isOpen$)),n1("role",e?"dialog":"navigation"),x(14),C("icon",t.faGithub)}}var wt=class n{sidenavService=l(Re);faGithub=Q6;static \u0275fac=function(e){return new(e||n)};static \u0275cmp=E({type:n,selectors:[["pokedex-sidenav"]],ngContentSelectors:$9,decls:1,vars:0,consts:[["drawer",""],["class","sidenav-container",4,"isMobile"],[1,"sidenav-container"],[1,"sidenav",3,"fixedInViewport","mode","opened"],["mat-list-item","","routerLink","/pokemon"],["mat-list-item","","routerLink","/move"],["mat-list-item","","routerLink","/item"],["mat-list-item","","routerLink","/machine"],[1,"flex"],["mat-list-item","","href","https://github.com/frango9000/pokedex-md"],[3,"icon"]],template:function(e,t){e&1&&(o1(),W1(0,H9,19,7,"mat-sidenav-container",1))},dependencies:[Q1,o0,ei,r0,mt,a0,n0,i0,v2,g2,X2,j1,L5,U6,_1],styles:["[_nghost-%COMP%]{overflow:auto;height:100%}[_nghost-%COMP%]   .mat-mdc-list-base[_ngcontent-%COMP%]{display:flex;flex-direction:column;box-sizing:border-box;height:100%}[_nghost-%COMP%]   .sidenav-container[_ngcontent-%COMP%]{height:100%}[_nghost-%COMP%]   .sidenav-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]{width:200px}[_nghost-%COMP%]   .sidenav-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]{position:sticky;background:inherit;top:0;z-index:1}[_nghost-%COMP%]   .mat-sidenav-content[_ngcontent-%COMP%]{display:flex;overflow-x:hidden}[_nghost-%COMP%]   .flex[_ngcontent-%COMP%]{flex:1 1 auto}"]})};var W9=["*",[["mat-toolbar-row"]]],U9=["*","mat-toolbar-row"],Q9=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=U({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return n})(),K6=(()=>{class n{_elementRef=l(r1);_platform=l(B1);_document=l(H1);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["mat-toolbar"]],contentQueries:function(t,a,r){if(t&1&&U1(r,Q9,5),t&2){let o;O(o=R())&&(a._toolbarRows=o)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,a){t&2&&(j2(a.color?"mat-"+a.color:""),W("mat-toolbar-multiple-rows",a._toolbarRows.length>0)("mat-toolbar-single-row",a._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:U9,decls:2,vars:0,template:function(t,a){t&1&&(o1(W9),j(0),j(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var Y6=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=X({type:n});static \u0275inj=Y({imports:[$2]})}return n})();var es=["mat-menu-item",""],ts=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],is=["mat-icon, [matMenuItemIcon]","*"];function ns(n,i){n&1&&(Ve(),g(0,"svg",2),H(1,"polygon",3),_())}var as=["*"];function rs(n,i){if(n&1){let e=M1();a4(0,"div",0),m5("click",function(){l1(e);let a=T();return m1(a.closed.emit("click"))})("animationstart",function(a){l1(e);let r=T();return m1(r._onAnimationStart(a.animationName))})("animationend",function(a){l1(e);let r=T();return m1(r._onAnimationDone(a.animationName))})("animationcancel",function(a){l1(e);let r=T();return m1(r._onAnimationDone(a.animationName))}),a4(1,"div",1),j(2),s5()()}if(n&2){let e=T();j2(e._classList),W("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),p2("id",e.panelId),n1("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var Oi=new s1("MAT_MENU_PANEL"),he=(()=>{class n{_elementRef=l(r1);_document=l(H1);_focusMonitor=l(S2);_parentMenu=l(Oi,{optional:!0});_changeDetectorRef=l(L1);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new u1;_focused=new u1;_highlighted=!1;_triggersSubmenu=!1;constructor(){l(n2).load(H2),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let a=0;a<t.length;a++)t[a].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,a){t&1&&B("click",function(o){return a._checkDisabled(o)})("mouseenter",function(){return a._handleMouseEnter()}),t&2&&(n1("role",a.role)("tabindex",a._getTabIndex())("aria-disabled",a.disabled)("disabled",a.disabled||null),W("mat-mdc-menu-item-highlighted",a._highlighted)("mat-mdc-menu-item-submenu-trigger",a._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",J],disableRipple:[2,"disableRipple","disableRipple",J]},exportAs:["matMenuItem"],attrs:es,ngContentSelectors:is,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,a){t&1&&(o1(ts),j(0),g(1,"span",0),j(2,1),_(),H(3,"div",1),d1(4,ns,2,0,":svg:svg",2)),t&2&&(x(3),C("matRippleDisabled",a.disableRipple||a.disabled)("matRippleTrigger",a._getHostElement()),x(),f1(a._triggersSubmenu?4:-1))},dependencies:[Me],encapsulation:2,changeDetection:0})}return n})();var os=new s1("MatMenuContent");var cs=new s1("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),Di="_mat-menu-enter",St="_mat-menu-exit",ie=(()=>{class n{_elementRef=l(r1);_changeDetectorRef=l(L1);_injector=l(e2);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=a2();_allItems;_directDescendantItems=new b3;_classList={};_panelAnimationState="void";_animationDone=new u1;_isAnimating=k2(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(e){let t=this._previousPanelClass,a=Z1({},this._classList);t&&t.length&&t.split(" ").forEach(r=>{a[r]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(r=>{a[r]=!0}),this._elementRef.nativeElement.className=""),this._classList=a}_previousPanelClass;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new C1;close=this.closed;panelId=l(C2).getId("mat-menu-panel-");constructor(){let e=l(cs);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new H5(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(re(this._directDescendantItems),O2(e=>D2(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let a=e.toArray(),r=Math.max(0,Math.min(a.length-1,t.activeItemIndex||0));a[r]&&!a[r].disabled?t.setActiveItem(r):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(re(this._directDescendantItems),O2(t=>D2(...t.map(a=>a._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,a=this._keyManager;switch(t){case 27:S3(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&a.setFocusOrigin("keyboard"),a.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=oe(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let a=this._keyManager;a.setFocusOrigin(e).setFirstItemActive(),!a.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=ge(Z1({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===St;(t||e===Di)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===Di||e===St)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(St),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?Di:St)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(re(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["mat-menu"]],contentQueries:function(t,a,r){if(t&1&&U1(r,os,5)(r,he,5)(r,he,4),t&2){let o;O(o=R())&&(a.lazyContent=o.first),O(o=R())&&(a._allItems=o),O(o=R())&&(a.items=o)}},viewQuery:function(t,a){if(t&1&&h1(R2,5),t&2){let r;O(r=R())&&(a.templateRef=r.first)}},hostVars:3,hostBindings:function(t,a){t&2&&n1("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",J],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:J(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[v1([{provide:Oi,useExisting:n}])],ngContentSelectors:as,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,a){t&1&&(o1(),a5(0,rs,3,12,"ng-template"))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));
  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));
  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--mat-menu-item-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--mat-menu-item-spacing, 12px);
  height: var(--mat-menu-item-icon-size, 24px);
  width: var(--mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2,changeDetection:0})}return n})(),ss=new s1("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let n=l(e2);return()=>nn(n)}});var Be=new WeakMap,ls=(()=>{class n{_canHaveBackdrop;_element=l(r1);_viewContainerRef=l(B2);_menuItemInstance=l(he,{optional:!0,self:!0});_dir=l(C3,{optional:!0});_focusMonitor=l(S2);_ngZone=l(p1);_injector=l(e2);_scrollStrategy=l(ss);_changeDetectorRef=l(L1);_animationsDisabled=a2();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=ve.EMPTY;_menuCloseSubscription=ve.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=l(Oi,{optional:!0});this._parentMaterialMenu=t instanceof ie?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&Be.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let a=Be.get(t);Be.set(t,this),a&&a!==this&&a._closeMenu();let r=this._createOverlay(t),o=r.getConfig(),c=o.positionStrategy;this._setPosition(t,c),this._canHaveBackdrop?o.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:o.hasBackdrop=t.hasBackdrop??!1,r.hasAttached()||(r.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),t instanceof ie&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe($1(t.close)).subscribe(()=>{c.withLockedPosition(!1).reapplyLastPosition(),c.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,a=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),a instanceof ie&&this._ownsMenu(a)?(this._pendingRemoval=a._animationDone.pipe(u3(1)).subscribe(()=>{t.detach(),Be.has(a)||a.lazyContent?.detach()}),a._setIsOpen(!1)):(t.detach(),a?.lazyContent?.detach()),a&&this._ownsMenu(a)&&Be.delete(a),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=cn(this._injector,t),this._overlayRef.keydownEvents().subscribe(a=>{this._menu instanceof ie&&this._menu._handleKeydown(a)})}return this._overlayRef}_getOverlayConfig(e){return new an({positionStrategy:on(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(a=>{this._ngZone.run(()=>{let r=a.connectionPair.overlayX==="start"?"after":"before",o=a.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(r,o)})})}_setPosition(e,t){let[a,r]=e.xPosition==="before"?["end","start"]:["start","end"],[o,c]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[s,m]=[o,c],[f,d]=[a,r],h=0;if(this._triggersSubmenu()){if(d=a=e.xPosition==="before"?"start":"end",r=f=a==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let p=this._parentMaterialMenu.items.first;this._parentInnerPadding=p?p._getHostElement().offsetTop:0}h=o==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(s=o==="top"?"bottom":"top",m=c==="top"?"bottom":"top");t.withPositions([{originX:a,originY:s,overlayX:f,overlayY:o,offsetY:h},{originX:r,originY:s,overlayX:d,overlayY:o,offsetY:h},{originX:a,originY:m,overlayX:f,overlayY:c,offsetY:-h},{originX:r,originY:m,overlayX:d,overlayY:c,offsetY:-h}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),a=this._parentMaterialMenu?this._parentMaterialMenu.closed:I(),r=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(J1(o=>this._menuOpen&&o!==this._menuItemInstance)):I();return D2(e,a,r,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new tn(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return Be.get(e)===this}_triggerIsAriaDisabled(){return J(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(t){n5()};static \u0275dir=U({type:n})}return n})(),Ct=(()=>{class n extends ls{_cleanupTouchstart;_hoverSubscription=ve.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new C1;onMenuOpen=this.menuOpened;menuClosed=new C1;onMenuClose=this.menuClosed;constructor(){super(!0);let e=l(R1);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",t=>{B5(t)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){R5(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=U({type:n,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,a){t&1&&B("click",function(o){return a._handleClick(o)})("mousedown",function(o){return a._handleMousedown(o)})("keydown",function(o){return a._handleKeydown(o)}),t&2&&n1("aria-haspopup",a.menu?"menu":null)("aria-expanded",a.menuOpen)("aria-controls",a.menuOpen?a.menu==null?null:a.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[e1]})}return n})();var Lt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=X({type:n});static \u0275inj=Y({imports:[E3,sn,$2,We]})}return n})();var Et=class n{transform(i,e=-1,t=" ",a=""){return i.split(t).map(r=>r?.[0]).join(a).slice(0,e).toUpperCase()}static \u0275fac=function(e){return new(e||n)};static \u0275pipe=$e({name:"initials",type:n,pure:!0})};var ds=(n,i)=>i.id;function fs(n,i){if(n&1){let e=M1();g(0,"button",5),B("click",function(){let a=l1(e).$implicit,r=T(2);return m1(r.service.versionGroup=a)}),Q(1),_()}if(n&2){let e=i.$implicit,t=T().$implicit;x(),N1(" ",t(e.name)," ")}}function us(n,i){if(n&1&&(v3(0),g(1,"button",2)(2,"span",3),Q(3),Z(4,"async"),Z(5,"initials"),_()(),g(6,"mat-menu",null,0),t2(8,fs,2,1,"button",4,ds),Z(10,"async"),_(),_3()),n&2){let e,t=i.$implicit,a=w2(7),r=T();x(),C("matMenuTriggerFor",a),x(2),q2(d5(5,4,t(((e=c1(4,2,r.service.versionGroup$))==null?null:e.name)+""),3," / ","/")),x(5),i2(c1(10,9,r.service.getAll$()))}}var Tt=class n{service=new xe;static \u0275fac=function(e){return new(e||n)};static \u0275cmp=E({type:n,selectors:[["pokedex-version-group-picker"]],decls:1,vars:1,consts:[["menu","matMenu"],[4,"transloco","translocoPrefix"],["mat-icon-button","","aria-label","Version Group Picker",3,"matMenuTriggerFor"],[1,"version-group-initials"],["mat-menu-item",""],["mat-menu-item","",3,"click"]],template:function(e,t){e&1&&W1(0,us,11,11,"ng-container",1),e&2&&C("translocoPrefix","version-group")},dependencies:[Q1,U2,W2,Lt,ie,he,Ct,v2,g2,un,_1,Et],styles:["[_nghost-%COMP%]   .mdc-icon-button[_ngcontent-%COMP%]{padding:0;display:flex;justify-content:center;align-items:center}[_nghost-%COMP%]   .version-group-initials[_ngcontent-%COMP%]{font-size:16px}"]})};var Nt=class n{router=l(C5);titleService=l(x5);_title$=new u2("");constructor(){this.router.events.pipe(J1(i=>i instanceof w5),S1(()=>{let i=this.router.routerState.root,e="";for(;i.firstChild;)i=i.firstChild;return i.snapshot.data.title&&(e=i.snapshot.data.title),e})).subscribe(i=>this.title=i)}get title$(){return this._title$.asObservable()}set title(i){this.titleService.setTitle(`Pokedex ${i}`),this._title$.next(i)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=z({token:n,factory:n.\u0275fac,providedIn:"root"})};var je=class n extends q{DEFAULT_LANGUAGE={name:"en",id:9,iso3166:"us",names:{}};_activeLanguage$=new u2(this.DEFAULT_LANGUAGE);get name(){return"language"}get activeLanguage$(){return this._activeLanguage$.asObservable()}get activeLanguageName$(){return this._activeLanguage$.pipe(S1(i=>i.name))}set activeLanguage(i){let e=this.resources$.value.find(t=>t.name===i);e&&(this.translocoService.setActiveLang(e.name),this._activeLanguage$.next(e))}refresh(){this.activeLanguage=this._activeLanguage$.value.name}_parseAllTranslations(i){return I(N.ofMultipleResources(i,"names",(e,t)=>({LANGUAGE:{[e.name]:{NAME:t}}})))}static \u0275fac=(()=>{let i;return function(t){return(i||(i=M(n)))(t||n)}})();static \u0275prov=z({token:n,factory:n.\u0275fac,providedIn:"root"})};var ps=(n,i)=>i.id;function hs(n,i){if(n&1&&(g(0,"button",1),H(1,"img",3),_()),n&2){let e=i;T();let t=w2(3);C("matMenuTriggerFor",t),x(),C("src",o4("https://flagcdn.com/20x15/",e.iso3166,".png"),t5)("srcset",c4("https://flagcdn.com/40x30/",e.iso3166,".png 2x, https://flagcdn.com/60x45/",e.iso3166,".png 3x"))("alt",r4(e.name))}}function bs(n,i){if(n&1){let e=M1();g(0,"button",4),B("click",function(){let a=l1(e).$implicit,r=T();return m1(r.languageService.activeLanguage=a.name)}),H(1,"img",5),g(2,"span"),Q(3),Z(4,"transloco"),_()()}if(n&2){let e=i.$implicit;x(),C("ngSrc",o4("https://flagcdn.com/16x12/",e.iso3166,".png"))("srcset",c4("https://flagcdn.com/32x24/",e.iso3166,".png 2x,https://flagcdn.com/48x36/",e.iso3166,".png 3x"))("alt",r4(e.name)),x(2),N1(" ",c1(4,8,"LANGUAGE."+e.name+".NAME"))}}var At=class n{languageService=l(je);static \u0275fac=function(e){return new(e||n)};static \u0275cmp=E({type:n,selectors:[["pokedex-language-picker"]],decls:7,vars:5,consts:[["menu","matMenu"],["mat-icon-button","","aria-label","Change the active language",3,"matMenuTriggerFor"],["mat-menu-item",""],["width","20","height","15",1,"active-language-button",3,"src","srcset","alt"],["mat-menu-item","",3,"click"],["width","16","height","12",3,"ngSrc","srcset","alt"]],template:function(e,t){if(e&1&&(d1(0,hs,2,8,"button",1),Z(1,"async"),g(2,"mat-menu",null,0),t2(4,bs,5,10,"button",2,ps),Z(6,"async"),_()),e&2){let a;f1((a=c1(1,1,t.languageService.activeLanguage$))?0:-1,a),x(4),i2(c1(6,3,t.languageService.getAll$()))}},dependencies:[Q1,Lt,ie,he,Ct,v2,U2,W2,g2,g5,_1,pn],styles:["[_nghost-%COMP%]   .active-language-button[_ngcontent-%COMP%]{height:auto}"]})};function _s(n,i){if(n&1){let e=M1();g(0,"div",1)(1,"button",2),B("click",function(){l1(e);let a=T();return m1(a.themeService.toggleDarkMode())}),g(2,"mat-icon"),Q(3),_()()()}if(n&2){let e=i.ngLet;x(3),q2(e?"brightness_5":"bedtime")}}var Pt=class n{themeService=l(Pe);static \u0275fac=function(e){return new(e||n)};static \u0275cmp=E({type:n,selectors:[["pokedex-theme-picker"]],decls:2,vars:3,consts:[["class","theme-picker",4,"ngLet"],[1,"theme-picker"],["mat-icon-button","","aria-label","Theme Toggle",3,"click"]],template:function(e,t){e&1&&(W1(0,_s,4,1,"div",0),Z(1,"async")),e&2&&C("ngLet",c1(1,1,t.themeService.darkMode$))},dependencies:[Q1,v2,N3,U2,W2,F3,D3,_1],encapsulation:2})};function ys(n,i){if(n&1){let e=M1();g(0,"button",5),B("click",function(){l1(e);let a=T();return m1(a.sidebarService.toggle())}),g(1,"mat-icon"),Q(2),Z(3,"async"),_()()}if(n&2){let e=T();x(2),q2(c1(3,1,e.sidebarService.isOpen$)?"keyboard_double_arrow_right":"keyboard_double_arrow_left")}}var It=class n{sidenavService=l(Re);sidebarService=l(A3);titleService=l(Nt);static \u0275fac=function(e){return new(e||n)};static \u0275cmp=E({type:n,selectors:[["pokedex-toolbar"]],decls:13,vars:6,consts:[["color","primary","isMobileClass",""],["type","button","aria-label","Toggle side Nav","mat-icon-button","",3,"click"],["aria-label","Side Nav toggle icon"],[1,"flex-stretch"],["mat-icon-button","","aria-label","Toggle Side Bar"],["mat-icon-button","","aria-label","Toggle Side Bar",3,"click"]],template:function(e,t){e&1&&(g(0,"mat-toolbar",0)(1,"button",1),B("click",function(){return t.sidenavService.toggle()}),g(2,"mat-icon",2),Q(3,"menu"),_()(),g(4,"span"),Q(5),Z(6,"async"),_(),H(7,"div",3)(8,"pokedex-version-group-picker")(9,"pokedex-language-picker")(10,"pokedex-theme-picker"),d1(11,ys,4,3,"button",4),Z(12,"async"),_()),e&2&&(x(5),N1(" ",c1(6,2,t.titleService.title$)," "),x(6),f1(c1(12,4,t.sidebarService.isActive$)?11:-1))},dependencies:[Q1,Y6,K6,v2,N3,U2,W2,g2,X2,s2,At,Pt,Tt,_1],styles:["[_nghost-%COMP%]   mat-toolbar[_ngcontent-%COMP%]{display:flex;align-items:center;padding:0 8px;width:100%}[_nghost-%COMP%]   mat-toolbar.mobile[_ngcontent-%COMP%]{padding:0 4px}[_nghost-%COMP%]   mat-toolbar[_ngcontent-%COMP%]   .flex-stretch[_ngcontent-%COMP%]{flex:1 0 auto}"]})};var Ms=n=>({mobile:n}),er=n=>({"sidebar-open":n});function zs(n,i){if(n&1&&(v3(0),g(1,"main",1)(2,"section"),H(3,"router-outlet"),_()(),g(4,"aside",1)(5,"section"),H(6,"router-outlet",3),_()(),_3()),n&2){let e=i.ngLet;x(),C("ngClass",_e(2,er,e)),x(3),C("ngClass",_e(4,er,e))}}function xs(n,i){if(n&1&&(g(0,"pokedex-sidenav",1),W1(1,zs,7,6,"ng-container",2),Z(2,"async"),_()),n&2){let e=i.$implicit,t=T();C("ngClass",_e(4,Ms,e)),x(),C("ngLet",c1(2,2,t.sidebarService.isOpen$))}}var V1=class{sidebarService=l(A3);overlay=l(rn);bottomBarService=l(_n);themeService=l(Pe);darkModeClass=!1;ngOnInit(){this._subscribeToThemeChanges()}_subscribeToThemeChanges(){this.themeService.darkMode$.pipe(y2(this)).subscribe(i=>{let e="dark-mode";this.darkModeClass=i,this.darkModeClass?this.overlay.getContainerElement().classList.add(e):this.overlay.getContainerElement().classList.remove(e)})}};T1(V1,"\u0275fac",function(e){return new(e||V1)}),T1(V1,"\u0275cmp",E({type:V1,selectors:[["pokedex-root"]],hostVars:2,hostBindings:function(e,t){e&2&&W("dark-mode",t.darkModeClass)},decls:2,vars:0,consts:[[3,"ngClass",4,"isMobile"],[3,"ngClass"],[4,"ngLet"],["name","sidebar"]],template:function(e,t){e&1&&(H(0,"pokedex-toolbar"),W1(1,xs,3,6,"pokedex-sidenav",0))},dependencies:[Q1,h5,T5,S5,It,wt,X2,j1,F3,D3,_1],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;overflow:hidden;height:100%}[_nghost-%COMP%]   pokedex-sidenav[_ngcontent-%COMP%]{height:100%}[_nghost-%COMP%]   pokedex-sidenav[_ngcontent-%COMP%]   main[_ngcontent-%COMP%], [_nghost-%COMP%]   pokedex-sidenav[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]{box-sizing:border-box;transition:width .3s ease-in-out;opacity:1}[_nghost-%COMP%]   pokedex-sidenav[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%], [_nghost-%COMP%]   pokedex-sidenav[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;overflow:auto}[_nghost-%COMP%]   pokedex-sidenav[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{margin:0;padding:12px;height:100%;min-height:100%;width:100%}[_nghost-%COMP%]   pokedex-sidenav[_ngcontent-%COMP%]   main.sidebar-open[_ngcontent-%COMP%]{width:70%}[_nghost-%COMP%]   pokedex-sidenav[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]{background-color:#fafafa;min-height:calc(100% - 24px);height:calc(100% - 24px);margin:12px 0;padding:0;width:0}[_nghost-%COMP%]   pokedex-sidenav[_ngcontent-%COMP%]   aside.sidebar-open[_ngcontent-%COMP%]{width:30%}[_nghost-%COMP%]   pokedex-sidenav.mobile[_ngcontent-%COMP%]   main[_ngcontent-%COMP%], [_nghost-%COMP%]   pokedex-sidenav.mobile[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]{height:100%;padding:0;border-radius:0;margin:0;transition:opacity .3s ease-in-out}[_nghost-%COMP%]   pokedex-sidenav.mobile[_ngcontent-%COMP%]   main.sidebar-open[_ngcontent-%COMP%]{width:0;opacity:0}[_nghost-%COMP%]   pokedex-sidenav.mobile[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]{opacity:0;border:none}[_nghost-%COMP%]   pokedex-sidenav.mobile[_ngcontent-%COMP%]   aside.sidebar-open[_ngcontent-%COMP%]{width:100%;opacity:1}.dark-mode[_nghost-%COMP%]   pokedex-sidenav[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]{background-color:#303030}"]})),V1=f2([_2()],V1);var Ft=class n extends q{get name(){return"evolution-trigger"}_parseAllTranslations(i){return I(N.ofMultipleResources(i,"names",(e,t)=>({evolution_trigger:{[e.name]:t}})))}static \u0275fac=(()=>{let i;return function(t){return(i||(i=M(n)))(t||n)}})();static \u0275prov=z({token:n,factory:n.\u0275fac,providedIn:"root"})};var Dt=class n extends q{get name(){return"version"}_parseAllTranslations(i){return I(N.ofMultipleResources(i,"names",(e,t)=>({version:{[e.name]:t}})))}static \u0275fac=(()=>{let i;return function(t){return(i||(i=M(n)))(t||n)}})();static \u0275prov=z({token:n,factory:n.\u0275fac,providedIn:"root"})};var Ot=class n extends q{get name(){return"item-attribute"}_parseAllTranslations(i){return I(N.mergeMaps(N.ofMultipleResources(i,"names",(e,t)=>({item_attribute:{[e.name]:{name:t}}})),N.ofMultipleResources(i,"descriptions",(e,t)=>({item_attribute:{[e.name]:{description:t}}}))))}static \u0275fac=(()=>{let i;return function(t){return(i||(i=M(n)))(t||n)}})();static \u0275prov=z({token:n,factory:n.\u0275fac,providedIn:"root"})};var Rt=class n extends q{get name(){return"region"}_parseAllTranslations(i){return I(N.ofMultipleResources(i,"names",(e,t)=>({region:{[e.name]:t}})))}static \u0275fac=(()=>{let i;return function(t){return(i||(i=M(n)))(t||n)}})();static \u0275prov=z({token:n,factory:n.\u0275fac,providedIn:"root"})};var Bt=class n extends q{get name(){return"move-ailment"}_parseAllTranslations(i){return I(N.ofMultipleResources(i,"names",(e,t)=>({move_ailment:{[e.name]:t}})))}static \u0275fac=(()=>{let i;return function(t){return(i||(i=M(n)))(t||n)}})();static \u0275prov=z({token:n,factory:n.\u0275fac,providedIn:"root"})};var jt=class n extends q{get name(){return"move-category"}_parseAllTranslations(i){return I(N.ofMultipleResources(i,"descriptions",(e,t)=>({move_category:{[e.name]:t,[e.name.replace("+","-")]:t}})))}static \u0275fac=(()=>{let i;return function(t){return(i||(i=M(n)))(t||n)}})();static \u0275prov=z({token:n,factory:n.\u0275fac,providedIn:"root"})};var qt=class n extends q{get name(){return"move-damage-class"}_parseAllTranslations(i){return I(N.mergeMaps(N.ofMultipleResources(i,"names",(e,t)=>({move_damage_class:{[e.name]:{name:t}}})),N.ofMultipleResources(i,"descriptions",(e,t)=>({move_damage_class:{[e.name]:{description:t}}}))))}static \u0275fac=(()=>{let i;return function(t){return(i||(i=M(n)))(t||n)}})();static \u0275prov=z({token:n,factory:n.\u0275fac,providedIn:"root"})};var Vt=class n extends q{get name(){return"move-learn-method"}_parseAllTranslations(i){return I(N.mergeMaps(N.ofMultipleResources(i,"names",(e,t)=>({move_learn_method:{[e.name]:{name:t}}})),N.ofMultipleResources(i,"descriptions",(e,t)=>({move_learn_method:{[e.name]:{description:t}}}))))}static \u0275fac=(()=>{let i;return function(t){return(i||(i=M(n)))(t||n)}})();static \u0275prov=z({token:n,factory:n.\u0275fac,providedIn:"root"})};var Gt=class n extends q{get name(){return"move-target"}_parseAllTranslations(i){return I(N.mergeMaps(N.ofMultipleResources(i,"names",(e,t)=>({move_target:{[e.name]:{name:t}}})),N.ofMultipleResources(i,"descriptions",(e,t)=>({move_target:{[e.name]:{description:t}}}))))}static \u0275fac=(()=>{let i;return function(t){return(i||(i=M(n)))(t||n)}})();static \u0275prov=z({token:n,factory:n.\u0275fac,providedIn:"root"})};var $t=class n extends q{get name(){return"egg-group"}_parseAllTranslations(i){return I(N.ofMultipleResources(i,"names",(e,t)=>({egg_group:{[e.name]:t}})))}static \u0275fac=(()=>{let i;return function(t){return(i||(i=M(n)))(t||n)}})();static \u0275prov=z({token:n,factory:n.\u0275fac,providedIn:"root"})};var Ht=class n extends q{get name(){return"growth-rate"}_parseAllTranslations(i){return I(N.ofMultipleResources(i,"descriptions",(e,t)=>({growth_rate:{[e.name]:{description:t,formula:e.formula}}})))}static \u0275fac=(()=>{let i;return function(t){return(i||(i=M(n)))(t||n)}})();static \u0275prov=z({token:n,factory:n.\u0275fac,providedIn:"root"})};var Wt=class n extends q{get name(){return"pokemon-color"}_parseAllTranslations(i){return I(N.ofMultipleResources(i,"names",(e,t)=>({pokemon_color:{[e.name]:t}})))}static \u0275fac=(()=>{let i;return function(t){return(i||(i=M(n)))(t||n)}})();static \u0275prov=z({token:n,factory:n.\u0275fac,providedIn:"root"})};var Ut=class n extends q{get name(){return"pokemon-habitat"}_parseAllTranslations(i){return I(N.ofMultipleResources(i,"names",(e,t)=>({pokemon_habitat:{[e.name]:t}})))}static \u0275fac=(()=>{let i;return function(t){return(i||(i=M(n)))(t||n)}})();static \u0275prov=z({token:n,factory:n.\u0275fac,providedIn:"root"})};var Qt=class n extends q{get name(){return"pokemon-shape"}_parseAllTranslations(i){return I(N.mergeMaps(N.ofMultipleResources(i,"names",(e,t)=>({pokemon_shape:{[e.name]:{name:t}}})),N.ofMultipleResources(i,"awesome_names",(e,t)=>({pokemon_shape:{[e.name]:{awesome_name:t}}}))))}static \u0275fac=(()=>{let i;return function(t){return(i||(i=M(n)))(t||n)}})();static \u0275prov=z({token:n,factory:n.\u0275fac,providedIn:"root"})};var Kt=class n extends q{get name(){return"stat"}_parseAllTranslations(i){return I(N.ofMultipleResources(i,"names",(e,t)=>({STAT:{[e.name]:t}})))}static \u0275fac=(()=>{let i;return function(t){return(i||(i=M(n)))(t||n)}})();static \u0275prov=z({token:n,factory:n.\u0275fac,providedIn:"root"})};var Bi=class n{pokemonService=l(I3);pokemonAbilityService=l(Ln);pokemonTypeService=l(xn);generationService=l(wn);languageService=l(je);versionService=l(Dt);versionGroupService=l(xe);eggGroupService=l($t);growthRateService=l(Ht);pokemonColorService=l(Wt);pokemonShapeService=l(Qt);pokemonHabitatService=l(Ut);statService=l(Kt);itemService=l(ke);itemCategoryService=l(yn);itemAttributeService=l(Ot);itemPocketService=l(Mn);evolutionTriggerService=l(Ft);moveService=l(we);moveLearnMethodService=l(Vt);moveTargetService=l(Gt);moveCategoryService=l(jt);moveAilmentService=l(Bt);moveDamageClassService=l(qt);locationService=l(En);regionService=l(Rt);machineService=l(P3);initialize(){return f3([this.machineService.initialize(),this.languageService.initialize(),...this._itemServices(),...this._pokemonServices(),...this._gameServices(),...this._locationServices(),...this._speciesServices(),...this._moveServices(),this.evolutionTriggerService.initialize()])}_pokemonServices(){return[this.pokemonService.initialize(),this.pokemonTypeService.initialize(),this.statService.initialize(),this.pokemonAbilityService.initialize()]}_gameServices(){return[this.generationService.initialize(),this.versionService.initialize(),this.versionGroupService.initialize()]}_moveServices(){return[this.moveService.initialize(),this.moveLearnMethodService.initialize(),this.moveTargetService.initialize(),this.moveCategoryService.initialize(),this.moveAilmentService.initialize(),this.moveDamageClassService.initialize()]}_locationServices(){return[this.regionService.initialize(),this.locationService.initialize()]}_speciesServices(){return[this.eggGroupService.initialize(),this.growthRateService.initialize(),this.pokemonColorService.initialize(),this.pokemonShapeService.initialize(),this.pokemonHabitatService.initialize()]}_itemServices(){return[this.itemService.initialize(),this.itemCategoryService.initialize(),this.itemAttributeService.initialize(),this.itemPocketService.initialize()]}static \u0275fac=function(e){return new(e||n)};static \u0275prov=z({token:n,factory:n.\u0275fac,providedIn:"root"})};function ks(n){return()=>n.initialize()}var tr={provide:o5,useFactory:ks,deps:[Bi],multi:!0};var ji=class n{http=l(y5);baseHref=l(m4);getTranslation(i){return this.http.get(`${this.baseHref}assets/i18n/${i}.json`)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=z({token:n,factory:n.\u0275fac,providedIn:"root"})},Yt=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=X({type:n});static \u0275inj=Y({providers:[hn({config:{availableLangs:["en","es","ja-Hrkt","roomaji","ko","zh-Hant","fr","de","it"],defaultLang:"en",fallbackLang:"en",missingHandler:{logMissingKey:!1,useFallbackTranslation:!0},reRenderOnLangChange:!0,prodMode:!u5()},loader:ji}),{provide:m4,useFactory:i=>i.getBaseHrefFromDOM(),deps:[p5]}],imports:[g2]})};var Xt=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=X({type:n});static \u0275inj=Y({providers:[tr,E5(Ja),Ca(),M5(z5()),O5(ja())],imports:[V1,Yt]})};_5(V1,{providers:[f5({eventCoalescing:!0}),Ji(Xt)]}).catch(n=>console.error(n));
