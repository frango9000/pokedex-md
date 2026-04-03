import{I as yt,J as Ct,S as vt,T as Dt,U as At,Z as xt,ca as kt,ma as wt,na as Mt,o as ft,oa as Pt,pa as It,qa as St,r as _t,ra as Et,ta as Rt,ua as Ft,y as G}from"./chunk-R4JMH6OL.js";import{$b as A,B as $,Db as s,E as Y,Eb as c,F as p,Fa as nt,Ga as it,Ia as at,Jb as dt,Kb as ct,L as _,Mb as mt,Nb as gt,Ob as D,Qb as m,Ua as d,V as X,W as K,Yc as ut,_c as ht,a as f,ac as x,b as q,cc as k,ea as b,ec as z,fa as Q,fb as C,gb as ot,ha as y,hb as rt,ib as st,jb as lt,jd as V,ka as o,kb as v,l as R,n as F,nd as bt,pa as J,pc as g,qa as tt,qc as u,r as U,rc as pt,sd as Tt,ta as L,ub as B,ud as Ot,vb as N,w as Z,xa as et,xb as j}from"./chunk-7OGAOZO7.js";function $t(e,a){}var O=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},H="mdc-dialog--open",Lt="mdc-dialog--opening",Bt="mdc-dialog--closing",Yt=150,Xt=75,Kt=(()=>{class e extends It{_animationStateChanged=new et;_animationsEnabled=!G();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?jt(this._config.enterAnimationDuration)??Yt:0;_exitAnimationDuration=this._animationsEnabled?jt(this._config.exitAnimationDuration)??Xt:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Nt,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Lt,H)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(H),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(H),this._animationsEnabled?(this._hostElement.style.setProperty(Nt,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Bt)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(t){this._actionSectionCount+=t,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Lt,Bt)}_waitForAnimationToComplete(t,n){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(n,t)}_requestAnimationFrame(t){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(t):t()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:t})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(t){let n=super.attachComponentPortal(t);return n.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),n}static \u0275fac=(()=>{let t;return function(i){return(t||(t=it(e)))(i||e)}})();static \u0275cmp=C({type:e,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(n,i){n&2&&(gt("id",i._config.id),B("aria-modal",i._config.ariaModal)("role",i._config.role)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledByQueue[0])("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null),x("_mat-animation-noopable",!i._animationsEnabled)("mat-mdc-dialog-container-with-actions",i._actionSectionCount>0))},features:[lt],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(n,i){n&1&&(s(0,"div",0)(1,"div",1),v(2,$t,0,0,"ng-template",2),c()())},dependencies:[vt],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return e})(),Nt="--mat-dialog-transition-duration";function jt(e){return e==null?null:typeof e=="number"?e:e.endsWith("ms")?V(e.substring(0,e.length-2)):e.endsWith("s")?V(e.substring(0,e.length-1))*1e3:e==="0"?0:null}var T=(function(e){return e[e.OPEN=0]="OPEN",e[e.CLOSING=1]="CLOSING",e[e.CLOSED=2]="CLOSED",e})(T||{}),w=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new F(1);_beforeClosed=new F(1);_result;_closeFallbackTimeout;_state=T.OPEN;_closeInteractionType;constructor(a,t,n){this._ref=a,this._config=t,this._containerInstance=n,this.disableClose=t.disableClose,this.id=a.id,a.addPanelClass("mat-mdc-dialog-panel"),n._animationStateChanged.pipe(p(i=>i.state==="opened"),_(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),n._animationStateChanged.pipe(p(i=>i.state==="closed"),_(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),a.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Y(this.backdropClick(),this.keydownEvents().pipe(p(i=>i.keyCode===27&&!this.disableClose&&!ft(i)))).subscribe(i=>{this.disableClose||(i.preventDefault(),zt(this,i.type==="keydown"?"keyboard":"mouse"))})}close(a){let t=this._config.closePredicate;t&&!t(a,this._config,this.componentInstance)||(this._result=a,this._containerInstance._animationStateChanged.pipe(p(n=>n.state==="closing"),_(1)).subscribe(n=>{this._beforeClosed.next(a),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),n.totalTime+100)}),this._state=T.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(a){let t=this._ref.config.positionStrategy;return a&&(a.left||a.right)?a.left?t.left(a.left):t.right(a.right):t.centerHorizontally(),a&&(a.top||a.bottom)?a.top?t.top(a.top):t.bottom(a.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(a="",t=""){return this._ref.updateSize(a,t),this}addPanelClass(a){return this._ref.addPanelClass(a),this}removePanelClass(a){return this._ref.removePanelClass(a),this}getState(){return this._state}_finishDialogClose(){this._state=T.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function zt(e,a,t){return e._closeInteractionType=a,e.close(t)}var Qt=new y("MatMdcDialogData"),Jt=new y("mat-mdc-dialog-default-options"),te=new y("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let e=o(L);return()=>At(e)}}),M=(()=>{class e{_defaultOptions=o(Jt,{optional:!0});_scrollStrategy=o(te);_parentDialog=o(e,{optional:!0,skipSelf:!0});_idGenerator=o(_t);_injector=o(L);_dialog=o(St);_animationsDisabled=G();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new R;_afterOpenedAtThisLevel=new R;dialogConfigClass=O;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=$(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(X(void 0)));constructor(){this._dialogRefConstructor=w,this._dialogContainerType=Kt,this._dialogDataToken=Qt}open(t,n){let i;n=f(f({},this._defaultOptions||new O),n),n.id=n.id||this._idGenerator.getId("mat-mdc-dialog-"),n.scrollStrategy=n.scrollStrategy||this._scrollStrategy();let l=this._dialog.open(t,q(f({},n),{positionStrategy:xt(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||n.enterAnimationDuration?.toLocaleString()==="0"||n.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:n},{provide:Pt,useValue:n}]},templateContext:()=>({dialogRef:i}),providers:(r,S,h)=>(i=new this._dialogRefConstructor(r,n,h),i.updatePosition(n?.position),[{provide:this._dialogContainerType,useValue:h},{provide:this._dialogDataToken,useValue:S.data},{provide:this._dialogRefConstructor,useValue:i}])}));return i.componentRef=l.componentRef,i.componentInstance=l.componentInstance,this.openDialogs.push(i),this.afterOpened.next(i),i.afterClosed().subscribe(()=>{let r=this.openDialogs.indexOf(i);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||this._getAfterAllClosed().next())}),i}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(n=>n.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let n=t.length;for(;n--;)t[n].close()}static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),xe=(()=>{class e{dialogRef=o(w,{optional:!0});_elementRef=o(at);_dialog=o(M);ariaLabel;type="button";dialogResult;_matDialogClose;constructor(){}ngOnInit(){this.dialogRef||(this.dialogRef=ee(this._elementRef,this._dialog.openDialogs))}ngOnChanges(t){let n=t._matDialogClose||t._matDialogCloseResult;n&&(this.dialogResult=n.currentValue)}_onButtonClick(t){zt(this.dialogRef,t.screenX===0&&t.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(n){return new(n||e)};static \u0275dir=rt({type:e,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(n,i){n&1&&D("click",function(r){return i._onButtonClick(r)}),n&2&&B("aria-label",i.ariaLabel||null)("type",i.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[nt]})}return e})();function ee(e,a){let t=e.nativeElement.parentElement;for(;t&&!t.classList.contains("mat-mdc-dialog-container");)t=t.parentElement;return t?a.find(n=>n.id===t.id):null}var Vt=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=ot({type:e});static \u0275inj=Q({providers:[M],imports:[Et,kt,Dt,bt]})}return e})();var P=class e{dialog=o(M);openTypesDialog({types:a=[],attacking:t=!1,defending:n=!1}){U(import("./chunk-7VMAOOME.js")).pipe(Z(i=>Object.values(i)[0]),K(i=>this.dialog.open(i,{data:{types:a,attacking:t,defending:n}}).afterClosed())).subscribe()}static \u0275fac=function(t){return new(t||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})};var I=class e{transform(a,t="",n=!1){let i=this.getTypeColor(a);if(t?.length){let l=this.getTypeColor(t);i=this.blendColors(i,l)}return n?this.invertColor(i):i}invertColor(a){if(a.indexOf("#")===0&&(a=a.slice(1)),a.length===3&&(a=a[0]+a[0]+a[1]+a[1]+a[2]+a[2]),a.length!==6)throw new Error("Invalid HEX color.");let t=(255-parseInt(a.slice(0,2),16)).toString(16),n=(255-parseInt(a.slice(2,4),16)).toString(16),i=(255-parseInt(a.slice(4,6),16)).toString(16);return"#"+this.padZero(t)+this.padZero(n)+this.padZero(i)}padZero(a,t){return t=t||2,(new Array(t).join("0")+a).slice(-t)}blendColors(a,t,n=.5){let[i,l,r]=a.match(/\w\w/g)?.map(E=>parseInt(E,16))||[],[S,h,Ht]=t.match(/\w\w/g)?.map(E=>parseInt(E,16))||[],Wt=Math.round(i+(S-i)*n).toString(16).padStart(2,"0"),qt=Math.round(l+(h-l)*n).toString(16).padStart(2,"0"),Ut=Math.round(r+(Ht-r)*n).toString(16).padStart(2,"0");return"#"+Wt+qt+Ut}getTypeColor(a){let t="#000";switch(a){case"normal":t="#9C9C63";break;case"fighting":t="#AE2A24";break;case"flying":t="#8E6FEB";break;case"poison":t="#923A92";break;case"ground":t="#DBB54D";break;case"rock":t="#A48F32";break;case"bug":t="#97A51D";break;case"ghost":t="#644E88";break;case"steel":t="#A0A0C0";break;case"fire":t="#ED6D12";break;case"water":t="#4578ED";break;case"grass":t="#69C23D";break;case"electric":t="#F6C913";break;case"psychic":t="#F73670";break;case"ice":t="#7ECECE";break;case"dragon":t="#5D1EF7";break;case"dark":t="#644e40";break;case"fairy":t="#E87890";break;case"unknown":t="#888";break;case"shadow":t="#444";break;default:break}return t}static \u0275fac=function(t){return new(t||e)};static \u0275pipe=st({name:"typeColor",type:e,pure:!0})};function ne(e,a){if(e&1&&(s(0,"button",3),g(1,"typeColor"),s(2,"b"),k(3),g(4,"uppercase"),c()()),e&2){let t=a,n=m().$implicit;A("background-color",u(1,3,t)),d(3),z(" ",u(4,5,n("type."+t+".name"))," ")}}function ie(e,a){if(e&1&&(s(0,"mat-icon",4),g(1,"typeColor"),k(2,"merge"),c(),s(3,"button",5),g(4,"typeColor"),s(5,"b"),k(6),g(7,"uppercase"),c()()),e&2){let t=a,n=m().$implicit,i=m();A("background-color",pt(1,5,i.types[0],i.types[1])),d(3),A("background-color",u(4,8,t)),d(3),z(" ",u(7,10,n("type."+t+".name"))," ")}}function ae(e,a){if(e&1){let t=mt();dt(0),s(1,"span",1),D("click",function(){J(t);let i=m();return tt(i.clickable&&(i.attacking||i.defending)&&i.typeDetailService.openTypesDialog({types:i.types,attacking:i.attacking,defending:i.defending}))}),N(2,ne,5,7,"button",2),N(3,ie,8,12),c(),ct()}if(e&2){let t,n,i=m();d(),x("multi-type",i.types.length>1)("clickable",i.clickable)("full-width",i.fullWidth),d(),j((t=i.types[0])?2:-1,t),d(),j((n=i.types[1])?3:-1,n)}}var Gt=class e{types=[];clickable=!1;fullWidth=!1;defending=!1;attacking=!1;typeDetailService=o(P);static \u0275fac=function(t){return new(t||e)};static \u0275cmp=C({type:e,selectors:[["pokedex-type-button"]],inputs:{types:"types",clickable:"clickable",fullWidth:"fullWidth",defending:"defending",attacking:"attacking"},decls:1,vars:0,consts:[[4,"transloco"],["matRipple","",1,"types-container",3,"click"],["mat-flat-button","",1,"type-1",3,"background-color"],["mat-flat-button","",1,"type-1"],[1,"type-merge"],["mat-flat-button","",1,"type-2"]],template:function(t,n){t&1&&v(0,ae,4,8,"ng-container",0)},dependencies:[ht,Ft,Rt,Vt,Ot,Tt,Mt,wt,Ct,yt,ut,I],styles:["[_nghost-%COMP%]   span.mat-mdc-button-ripple[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   .types-container[_ngcontent-%COMP%]{display:inline-flex;cursor:pointer}[_nghost-%COMP%]   .types-container[_ngcontent-%COMP%]   .mdc-button[_ngcontent-%COMP%]{padding-left:6px;padding-right:6px;height:24px;min-width:24px}[_nghost-%COMP%]   .types-container.multi-type[_ngcontent-%COMP%]   .type-1[_ngcontent-%COMP%]{border-bottom-right-radius:0;border-top-right-radius:0}[_nghost-%COMP%]   .types-container.multi-type[_ngcontent-%COMP%]   .type-2[_ngcontent-%COMP%]{border-bottom-left-radius:0;border-top-left-radius:0}[_nghost-%COMP%]   .types-container[_ngcontent-%COMP%]:not(.clickable)   .type-1[_ngcontent-%COMP%], [_nghost-%COMP%]   .types-container[_ngcontent-%COMP%]:not(.clickable)   .type-merge[_ngcontent-%COMP%], [_nghost-%COMP%]   .types-container[_ngcontent-%COMP%]:not(.clickable)   .type-2[_ngcontent-%COMP%]{cursor:default}[_nghost-%COMP%]   .types-container.full-width[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .types-container.full-width[_ngcontent-%COMP%]   .mdc-button[_ngcontent-%COMP%]{width:100%}"]})};export{Qt as a,xe as b,Vt as c,Gt as d};
