"use strict";(self.webpackChunkpokedex=self.webpackChunkpokedex||[]).push([[114],{629:(N,_,o)=>{o.d(_,{Z:()=>x});var e=o(5879);let x=(()=>{class l{constructor(c){this.elementRef=c,this.imgFallback=""}loadFallbackOnError(){this.elementRef.nativeElement.src=this.imgFallback}static#e=this.\u0275fac=function(g){return new(g||l)(e.Y36(e.SBq))};static#t=this.\u0275dir=e.lG2({type:l,selectors:[["img","imgFallback",""]],hostBindings:function(g,m){1&g&&e.NdJ("error",function(){return m.loadFallbackOnError()})},inputs:{imgFallback:"imgFallback"},standalone:!0})}return l})()},3305:(N,_,o)=>{o.d(_,{pp:()=>ae,To:()=>ie,ib:()=>S,HS:()=>I,u4:()=>te,yz:()=>B,yK:()=>ne});var e=o(5879),x=o(8337),l=o(2495),u=o(8645),c=o(7394);let g=0;const m=new e.OlP("CdkAccordion");let w=(()=>{class a{constructor(){this._stateChanges=new u.x,this._openCloseAllActions=new u.x,this.id="cdk-accordion-"+g++,this._multi=!1}get multi(){return this._multi}set multi(t){this._multi=(0,l.Ig)(t)}openAll(){this._multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(t){this._stateChanges.next(t)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}static#e=this.\u0275fac=function(n){return new(n||a)};static#t=this.\u0275dir=e.lG2({type:a,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:"multi"},exportAs:["cdkAccordion"],features:[e._Bn([{provide:m,useExisting:a}]),e.TTD]})}return a})(),R=0,Y=(()=>{class a{get expanded(){return this._expanded}set expanded(t){t=(0,l.Ig)(t),this._expanded!==t&&(this._expanded=t,this.expandedChange.emit(t),t?(this.opened.emit(),this._expansionDispatcher.notify(this.id,this.accordion?this.accordion.id:this.id)):this.closed.emit(),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled}set disabled(t){this._disabled=(0,l.Ig)(t)}constructor(t,n,i){this.accordion=t,this._changeDetectorRef=n,this._expansionDispatcher=i,this._openCloseAllSubscription=c.w0.EMPTY,this.closed=new e.vpe,this.opened=new e.vpe,this.destroyed=new e.vpe,this.expandedChange=new e.vpe,this.id="cdk-accordion-child-"+R++,this._expanded=!1,this._disabled=!1,this._removeUniqueSelectionListener=()=>{},this._removeUniqueSelectionListener=i.listen((d,s)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===s&&this.id!==d&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(t=>{this.disabled||(this.expanded=t)})}static#e=this.\u0275fac=function(n){return new(n||a)(e.Y36(m,12),e.Y36(e.sBO),e.Y36(x.A8))};static#t=this.\u0275dir=e.lG2({type:a,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:"expanded",disabled:"disabled"},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[e._Bn([{provide:m,useValue:void 0}])]})}return a})(),z=(()=>{class a{static#e=this.\u0275fac=function(n){return new(n||a)};static#t=this.\u0275mod=e.oAB({type:a});static#n=this.\u0275inj=e.cJS({})}return a})();var v=o(8484),y=o(6814),C=o(3680),P=o(4300),j=o(3997),T=o(7921),f=o(2181),L=o(8180),A=o(6028),Q=o(6232),G=o(3019),r=o(6825);const U=["body"];function J(a,F){}const V=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],X=["mat-expansion-panel-header","*","mat-action-row"];function $(a,F){if(1&a&&e._UZ(0,"span",2),2&a){const t=e.oxw();e.Q6J("@indicatorRotate",t._getExpandedState())}}const K=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],Z=["mat-panel-title","mat-panel-description","*"],M=new e.OlP("MAT_ACCORDION"),D="225ms cubic-bezier(0.4,0.0,0.2,1)",H={indicatorRotate:(0,r.X$)("indicatorRotate",[(0,r.SB)("collapsed, void",(0,r.oB)({transform:"rotate(0deg)"})),(0,r.SB)("expanded",(0,r.oB)({transform:"rotate(180deg)"})),(0,r.eR)("expanded <=> collapsed, void => collapsed",(0,r.jt)(D))]),bodyExpansion:(0,r.X$)("bodyExpansion",[(0,r.SB)("collapsed, void",(0,r.oB)({height:"0px",visibility:"hidden"})),(0,r.SB)("expanded",(0,r.oB)({height:"*",visibility:""})),(0,r.eR)("expanded <=> collapsed, void => collapsed",(0,r.jt)(D))])},k=new e.OlP("MAT_EXPANSION_PANEL");let I=(()=>{class a{constructor(t,n){this._template=t,this._expansionPanel=n}static#e=this.\u0275fac=function(n){return new(n||a)(e.Y36(e.Rgc),e.Y36(k,8))};static#t=this.\u0275dir=e.lG2({type:a,selectors:[["ng-template","matExpansionPanelContent",""]]})}return a})(),W=0;const O=new e.OlP("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS");let S=(()=>{class a extends Y{get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(t){this._hideToggle=(0,l.Ig)(t)}get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(t){this._togglePosition=t}constructor(t,n,i,d,s,E,b){super(t,n,i),this._viewContainerRef=d,this._animationMode=E,this._hideToggle=!1,this.afterExpand=new e.vpe,this.afterCollapse=new e.vpe,this._inputChanges=new u.x,this._headerId="mat-expansion-panel-header-"+W++,this._bodyAnimationDone=new u.x,this.accordion=t,this._document=s,this._bodyAnimationDone.pipe((0,j.x)((h,p)=>h.fromState===p.fromState&&h.toState===p.toState)).subscribe(h=>{"void"!==h.fromState&&("expanded"===h.toState?this.afterExpand.emit():"collapsed"===h.toState&&this.afterCollapse.emit())}),b&&(this.hideToggle=b.hideToggle)}_hasSpacing(){return!!this.accordion&&this.expanded&&"default"===this.accordion.displayMode}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe((0,T.O)(null),(0,f.h)(()=>this.expanded&&!this._portal),(0,L.q)(1)).subscribe(()=>{this._portal=new v.UE(this._lazyContent._template,this._viewContainerRef)})}ngOnChanges(t){this._inputChanges.next(t)}ngOnDestroy(){super.ngOnDestroy(),this._bodyAnimationDone.complete(),this._inputChanges.complete()}_containsFocus(){if(this._body){const t=this._document.activeElement,n=this._body.nativeElement;return t===n||n.contains(t)}return!1}static#e=this.\u0275fac=function(n){return new(n||a)(e.Y36(M,12),e.Y36(e.sBO),e.Y36(x.A8),e.Y36(e.s_b),e.Y36(y.K0),e.Y36(e.QbO,8),e.Y36(O,8))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["mat-expansion-panel"]],contentQueries:function(n,i,d){if(1&n&&e.Suo(d,I,5),2&n){let s;e.iGM(s=e.CRH())&&(i._lazyContent=s.first)}},viewQuery:function(n,i){if(1&n&&e.Gf(U,5),2&n){let d;e.iGM(d=e.CRH())&&(i._body=d.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:6,hostBindings:function(n,i){2&n&&e.ekj("mat-expanded",i.expanded)("_mat-animation-noopable","NoopAnimations"===i._animationMode)("mat-expansion-panel-spacing",i._hasSpacing())},inputs:{disabled:"disabled",expanded:"expanded",hideToggle:"hideToggle",togglePosition:"togglePosition"},outputs:{opened:"opened",closed:"closed",expandedChange:"expandedChange",afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[e._Bn([{provide:M,useValue:void 0},{provide:k,useExisting:a}]),e.qOj,e.TTD],ngContentSelectors:X,decls:7,vars:4,consts:[["role","region",1,"mat-expansion-panel-content",3,"id"],["body",""],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(n,i){1&n&&(e.F$t(V),e.Hsn(0),e.TgZ(1,"div",0,1),e.NdJ("@bodyExpansion.done",function(s){return i._bodyAnimationDone.next(s)}),e.TgZ(3,"div",2),e.Hsn(4,1),e.YNc(5,J,0,0,"ng-template",3),e.qZA(),e.Hsn(6,2),e.qZA()),2&n&&(e.xp6(1),e.Q6J("@bodyExpansion",i._getExpandedState())("id",i.id),e.uIk("aria-labelledby",i._headerId),e.xp6(4),e.Q6J("cdkPortalOutlet",i._portal))},dependencies:[v.Pl],styles:['.mat-expansion-panel{--mat-expansion-container-shape:4px;box-sizing:content-box;display:block;margin:0;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative;background:var(--mat-expansion-container-background-color);color:var(--mat-expansion-container-text-color);border-radius:var(--mat-expansion-container-shape)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape);border-top-left-radius:var(--mat-expansion-container-shape)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape);border-bottom-left-radius:var(--mat-expansion-container-shape)}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;font-family:var(--mat-expansion-container-text-font);font-size:var(--mat-expansion-container-text-size);font-weight:var(--mat-expansion-container-text-weight);line-height:var(--mat-expansion-container-text-line-height);letter-spacing:var(--mat-expansion-container-text-tracking)}.mat-expansion-panel-content[style*="visibility: hidden"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color)}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}'],encapsulation:2,data:{animation:[H.bodyExpansion]},changeDetection:0})}return a})();class q{}const ee=(0,C.sb)(q);let B=(()=>{class a extends ee{constructor(t,n,i,d,s,E,b){super(),this.panel=t,this._element=n,this._focusMonitor=i,this._changeDetectorRef=d,this._animationMode=E,this._parentChangeSubscription=c.w0.EMPTY;const h=t.accordion?t.accordion._stateChanges.pipe((0,f.h)(p=>!(!p.hideToggle&&!p.togglePosition))):Q.E;this.tabIndex=parseInt(b||"")||0,this._parentChangeSubscription=(0,G.T)(t.opened,t.closed,h,t._inputChanges.pipe((0,f.h)(p=>!!(p.hideToggle||p.disabled||p.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),t.closed.pipe((0,f.h)(()=>t._containsFocus())).subscribe(()=>i.focusVia(n,"program")),s&&(this.expandedHeight=s.expandedHeight,this.collapsedHeight=s.collapsedHeight)}get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){const t=this._isExpanded();return t&&this.expandedHeight?this.expandedHeight:!t&&this.collapsedHeight?this.collapsedHeight:null}_keydown(t){switch(t.keyCode){case A.L_:case A.K5:(0,A.Vb)(t)||(t.preventDefault(),this._toggle());break;default:return void(this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(t))}}focus(t,n){t?this._focusMonitor.focusVia(this._element,t,n):this._element.nativeElement.focus(n)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(t=>{t&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static#e=this.\u0275fac=function(n){return new(n||a)(e.Y36(S,1),e.Y36(e.SBq),e.Y36(P.tE),e.Y36(e.sBO),e.Y36(O,8),e.Y36(e.QbO,8),e.$8M("tabindex"))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:15,hostBindings:function(n,i){1&n&&e.NdJ("click",function(){return i._toggle()})("keydown",function(s){return i._keydown(s)}),2&n&&(e.uIk("id",i.panel._headerId)("tabindex",i.tabIndex)("aria-controls",i._getPanelId())("aria-expanded",i._isExpanded())("aria-disabled",i.panel.disabled),e.Udp("height",i._getHeaderHeight()),e.ekj("mat-expanded",i._isExpanded())("mat-expansion-toggle-indicator-after","after"===i._getTogglePosition())("mat-expansion-toggle-indicator-before","before"===i._getTogglePosition())("_mat-animation-noopable","NoopAnimations"===i._animationMode))},inputs:{tabIndex:"tabIndex",expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight"},features:[e.qOj],ngContentSelectors:Z,decls:5,vars:3,consts:[[1,"mat-content"],["class","mat-expansion-indicator",4,"ngIf"],[1,"mat-expansion-indicator"]],template:function(n,i){1&n&&(e.F$t(K),e.TgZ(0,"span",0),e.Hsn(1),e.Hsn(2,1),e.Hsn(3,2),e.qZA(),e.YNc(4,$,1,1,"span",1)),2&n&&(e.ekj("mat-content-hide-toggle",!i._showToggle()),e.xp6(4),e.Q6J("ngIf",i._showToggle()))},dependencies:[y.O5],styles:['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1);height:var(--mat-expansion-header-collapsed-state-height);font-family:var(--mat-expansion-header-text-font);font-size:var(--mat-expansion-header-text-size);font-weight:var(--mat-expansion-header-text-weight);line-height:var(--mat-expansion-header-text-line-height);letter-spacing:var(--mat-expansion-header-text-tracking)}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color)}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color)}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color)}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color)}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color)}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color)}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}'],encapsulation:2,data:{animation:[H.indicatorRotate]},changeDetection:0})}return a})(),te=(()=>{class a{static#e=this.\u0275fac=function(n){return new(n||a)};static#t=this.\u0275dir=e.lG2({type:a,selectors:[["mat-panel-description"]],hostAttrs:[1,"mat-expansion-panel-header-description"]})}return a})(),ne=(()=>{class a{static#e=this.\u0275fac=function(n){return new(n||a)};static#t=this.\u0275dir=e.lG2({type:a,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]})}return a})(),ae=(()=>{class a extends w{constructor(){super(...arguments),this._ownHeaders=new e.n_E,this._hideToggle=!1,this.displayMode="default",this.togglePosition="after"}get hideToggle(){return this._hideToggle}set hideToggle(t){this._hideToggle=(0,l.Ig)(t)}ngAfterContentInit(){this._headers.changes.pipe((0,T.O)(this._headers)).subscribe(t=>{this._ownHeaders.reset(t.filter(n=>n.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new P.Em(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(t){this._keyManager.onKeydown(t)}_handleHeaderFocus(t){this._keyManager.updateActiveItem(t)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}static#e=this.\u0275fac=function(){let t;return function(i){return(t||(t=e.n5z(a)))(i||a)}}();static#t=this.\u0275dir=e.lG2({type:a,selectors:[["mat-accordion"]],contentQueries:function(n,i,d){if(1&n&&e.Suo(d,B,5),2&n){let s;e.iGM(s=e.CRH())&&(i._headers=s)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(n,i){2&n&&e.ekj("mat-accordion-multi",i.multi)},inputs:{multi:"multi",hideToggle:"hideToggle",displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[e._Bn([{provide:M,useExisting:a}]),e.qOj]})}return a})(),ie=(()=>{class a{static#e=this.\u0275fac=function(n){return new(n||a)};static#t=this.\u0275mod=e.oAB({type:a});static#n=this.\u0275inj=e.cJS({imports:[y.ez,C.BQ,z,v.eL]})}return a})()}}]);