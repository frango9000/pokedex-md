import{f as se}from"./chunk-5S2N76E5.js";import{a as me}from"./chunk-5NF3QCEK.js";import{d as le}from"./chunk-BOUMNSZX.js";import{$c as re,Ab as G,Ba as I,Bb as H,Cb as P,Cd as ie,Ea as F,Hb as f,Kc as ne,Ld as oe,Ma as s,Pc as te,Rb as E,Sa as A,Sb as b,Tb as U,Ub as q,Vb as h,Wb as M,Xb as W,Za as C,Zc as ae,_a as R,ab as z,ca as w,cb as N,ea as X,fc as J,gc as v,ha as c,hc as K,ic as Q,lb as V,lc as Y,mb as u,ob as _,qb as j,rb as L,sb as Z,ta as S,tb as g,ua as B,ub as p,vb as d,wb as $,wc as ee,xb as x,yb as k,zb as y,zc as D}from"./chunk-AVU34DEK.js";function fe(n,i){n&1&&y(0,"div",2)}var ue=new X("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var Se=(()=>{class n{_elementRef=c(F);_ngZone=c(B);_changeDetectorRef=c(ee);_renderer=c(A);_cleanupTransitionEnd;constructor(){let e=oe(),t=c(ue,{optional:!0});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),t&&(t.color&&(this.color=this._defaultColor=t.color),this.mode=t.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=ce(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=ce(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new S;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(t,r){t&2&&(V("aria-valuenow",r._isIndeterminate()?null:r.value)("mode",r.mode),q("mat-"+r.color),U("_mat-animation-noopable",r._isNoopAnimation)("mdc-linear-progress--animation-ready",!r._isNoopAnimation)("mdc-linear-progress--indeterminate",r._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",D],bufferValue:[2,"bufferValue","bufferValue",D],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(t,r){t&1&&(x(0,"div",0),y(1,"div",1),u(2,fe,1,0,"div",2),k(),x(3,"div",3),y(4,"span",4),k(),x(5,"div",5),y(6,"span",4),k()),t&2&&(s(),b("flex-basis",r._getBufferBarFlexBasis()),s(),_(r.mode==="buffer"?2:-1),s(),b("transform",r._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--mat-progress-bar-track-height, 4px);
  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();function ce(n,i=0,e=100){return Math.max(i,Math.min(e,n))}var de=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=R({type:n});static \u0275inj=w({imports:[ie]})}return n})();var T=class n{transform(i){switch(i){case 0:return"#05F";case .25:return"#007a0c";case .5:return"#7ba600";case 2:return"#F50";case 4:return"#F00";default:return"#000"}}static \u0275fac=function(e){return new(e||n)};static \u0275pipe=z({name:"typeDamagesMultiplierColor",type:n,pure:!0})};var O=(n,i)=>({title:n,damages:i}),_e=n=>[n];function ye(n,i){if(n&1&&(p(0,"div",2)(1,"span",3),h(2),d(),p(3,"div",4),P(4,5)(5,5),d()()),n&2){let e=f().$implicit,t=f(),r=E(2);s(2),M(e("type.damages.attacking.title")),s(2),g("ngTemplateOutlet",r)("ngTemplateOutletContext",v(5,O,e("type.damages.attacking.weaknesses"),t.typeDamages.attacking.weaknesses)),s(),g("ngTemplateOutlet",r)("ngTemplateOutletContext",v(8,O,e("type.damages.attacking.strengths"),t.typeDamages.attacking.strengths))}}function be(n,i){if(n&1&&(p(0,"div",2)(1,"span",3),h(2),d(),p(3,"div",4),P(4,5)(5,5),d()()),n&2){let e=f().$implicit,t=f(),r=E(2);s(2),M(e("type.damages.defending.title")),s(2),g("ngTemplateOutlet",r)("ngTemplateOutletContext",v(5,O,e("type.damages.defending.weaknesses"),t.typeDamages.defending.weaknesses)),s(),g("ngTemplateOutlet",r)("ngTemplateOutletContext",v(8,O,e("type.damages.defending.resistances"),t.typeDamages.defending.resistances))}}function he(n,i){if(n&1&&(G(0),u(1,ye,6,11,"div",2),u(2,be,6,11,"div",2),H()),n&2){let e=f();s(),_(e.attacking&&(e.typeDamages!=null&&e.typeDamages.attacking)?1:-1),s(),_(e.defending&&(e.typeDamages!=null&&e.typeDamages.defending)?2:-1)}}function ve(n,i){if(n&1&&(p(0,"div",8),$(1,"pokedex-type-button",9),p(2,"span",10),K(3,"typeDamagesMultiplierColor"),h(4),d()()),n&2){let e=i.$implicit;s(),g("types",J(7,_e,e.name+""))("fullWidth",!0),s(),b("color",Q(3,5,e.multiplier)),s(2),W("x",e.multiplier)}}function Ce(n,i){if(n&1&&(p(0,"div",6)(1,"span",7),h(2),d(),L(3,ve,5,9,"div",8,j),d()),n&2){let e=i.title,t=i.damages;s(2),M(e),s(),Z(t)}}var ge=class n{types=[];defending=!1;attacking=!1;clickableTitle=!1;clickableEntries=!1;typeDamages;typeService=c(me);generateTypeDamages(){let i=this.typeService.getAll(),e=i.filter(a=>this.types.includes(a.name)),t=i.map(a=>({name:a.name,multiplier:1}));e.forEach(a=>{a.damage_relations.double_damage_from.forEach(o=>{let m=t.findIndex(l=>l.name===o);t[m].multiplier*=2}),a.damage_relations.half_damage_from.forEach(o=>{let m=t.findIndex(l=>l.name===o);t[m].multiplier*=.5}),a.damage_relations.no_damage_from.forEach(o=>{let m=t.findIndex(l=>l.name===o);t[m].multiplier*=0})});let r=i.map(a=>({name:a.name,multiplier:1}));return e.forEach(a=>{a.damage_relations.double_damage_to.forEach(o=>{let m=r.findIndex(l=>l.name===o);r[m].multiplier*=2}),a.damage_relations.half_damage_to.forEach(o=>{let m=r.findIndex(l=>l.name===o);r[m].multiplier*=.5}),a.damage_relations.no_damage_to.forEach(o=>{let m=r.findIndex(l=>l.name===o);r[m].multiplier*=0})}),{attacking:{weaknesses:r.filter(a=>a.multiplier<1).sort((a,o)=>o.multiplier-a.multiplier),strengths:r.filter(a=>a.multiplier>1).sort((a,o)=>a.multiplier-o.multiplier)},defending:{weaknesses:t.filter(a=>a.multiplier>1).sort((a,o)=>o.multiplier-a.multiplier),resistances:t.filter(a=>a.multiplier<1).sort((a,o)=>a.multiplier-o.multiplier)}}}ngOnChanges(i){i.types&&(this.typeDamages=this.generateTypeDamages())}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["pokedex-type-damages"]],inputs:{types:"types",defending:"defending",attacking:"attacking",clickableTitle:"clickableTitle",clickableEntries:"clickableEntries"},features:[I],decls:3,vars:0,consts:[["typeDamagesTemplate",""],[4,"transloco"],[1,"type-damages-type"],[1,"type-damages-title"],[1,"type-damages"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"type-damages-block"],[1,"type-damages-block-title"],[1,"type-damage"],[3,"types","fullWidth"],[1,"type-damage-multiplier"]],template:function(e,t){e&1&&N(0,he,3,2,"ng-container",1)(1,Ce,5,1,"ng-template",null,0,Y)},dependencies:[te,ne,se,de,re,ae,le,T],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:16px}[_nghost-%COMP%]   .type-damages-type[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}[_nghost-%COMP%]   .type-damages-type[_ngcontent-%COMP%]   .type-damages-title[_ngcontent-%COMP%]{width:100%;text-align:center;font-weight:700}[_nghost-%COMP%]   .type-damages-type[_ngcontent-%COMP%]   .type-damages[_ngcontent-%COMP%]{display:flex;gap:16px}[_nghost-%COMP%]   .type-damages-type[_ngcontent-%COMP%]   .type-damages[_ngcontent-%COMP%]   .type-damages-block[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;gap:4px}[_nghost-%COMP%]   .type-damages-type[_ngcontent-%COMP%]   .type-damages[_ngcontent-%COMP%]   .type-damages-block[_ngcontent-%COMP%]   .type-damages-block-title[_ngcontent-%COMP%]{width:100%;text-align:center}[_nghost-%COMP%]   .type-damages-type[_ngcontent-%COMP%]   .type-damages[_ngcontent-%COMP%]   .type-damages-block[_ngcontent-%COMP%]   .type-damage[_ngcontent-%COMP%]{display:flex}[_nghost-%COMP%]   .type-damages-type[_ngcontent-%COMP%]   .type-damages[_ngcontent-%COMP%]   .type-damages-block[_ngcontent-%COMP%]   .type-damage[_ngcontent-%COMP%]   pokedex-type-button[_ngcontent-%COMP%]{flex:1}[_nghost-%COMP%]   .type-damages-type[_ngcontent-%COMP%]   .type-damages[_ngcontent-%COMP%]   .type-damages-block[_ngcontent-%COMP%]   .type-damage[_ngcontent-%COMP%]   .type-damage-multiplier[_ngcontent-%COMP%]{width:40px;margin-left:8px;text-align:end;font-weight:700}"]})};export{Se as a,de as b,ge as c};
