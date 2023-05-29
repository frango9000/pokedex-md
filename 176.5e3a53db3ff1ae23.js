"use strict";(self.webpackChunkpokedex=self.webpackChunkpokedex||[]).push([[176],{176:(re,v,o)=>{o.r(v),o.d(v,{PokemonDetailComponent:()=>de});var m=o(4755),p=o(6012),e=o(2223),P=o(418),g=o(1692),u=o(7579),C=o(727);let U=0;const _=new e.OlP("CdkAccordion");let B=(()=>{class t{constructor(){this._stateChanges=new u.x,this._openCloseAllActions=new u.x,this.id="cdk-accordion-"+U++,this._multi=!1}get multi(){return this._multi}set multi(n){this._multi=(0,g.Ig)(n)}openAll(){this._multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(n){this._stateChanges.next(n)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=e.lG2({type:t,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:"multi"},exportAs:["cdkAccordion"],features:[e._Bn([{provide:_,useExisting:t}]),e.TTD]}),t})(),N=0,R=(()=>{class t{get expanded(){return this._expanded}set expanded(n){n=(0,g.Ig)(n),this._expanded!==n&&(this._expanded=n,this.expandedChange.emit(n),n?(this.opened.emit(),this._expansionDispatcher.notify(this.id,this.accordion?this.accordion.id:this.id)):this.closed.emit(),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled}set disabled(n){this._disabled=(0,g.Ig)(n)}constructor(n,a,s){this.accordion=n,this._changeDetectorRef=a,this._expansionDispatcher=s,this._openCloseAllSubscription=C.w0.EMPTY,this.closed=new e.vpe,this.opened=new e.vpe,this.destroyed=new e.vpe,this.expandedChange=new e.vpe,this.id="cdk-accordion-child-"+N++,this._expanded=!1,this._disabled=!1,this._removeUniqueSelectionListener=()=>{},this._removeUniqueSelectionListener=s.listen((d,h)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===h&&this.id!==d&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(n=>{this.disabled||(this.expanded=n)})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(_,12),e.Y36(e.sBO),e.Y36(P.A8))},t.\u0275dir=e.lG2({type:t,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:"expanded",disabled:"disabled"},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[e._Bn([{provide:_,useValue:void 0}])]}),t})(),F=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({}),t})();var b=o(8023),E=o(1217),T=o(706),Y=o(1884),w=o(8675),x=o(9300),j=o(5698),A=o(2840),z=o(515),Q=o(6451),r=o(1591);const G=["body"];function L(t,i){}const q=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],X=["mat-expansion-panel-header","*","mat-action-row"];function $(t,i){if(1&t&&e._UZ(0,"span",2),2&t){const n=e.oxw();e.Q6J("@indicatorRotate",n._getExpandedState())}}const J=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],V=["mat-panel-title","mat-panel-description","*"],y=new e.OlP("MAT_ACCORDION"),D="225ms cubic-bezier(0.4,0.0,0.2,1)",Z={indicatorRotate:(0,r.X$)("indicatorRotate",[(0,r.SB)("collapsed, void",(0,r.oB)({transform:"rotate(0deg)"})),(0,r.SB)("expanded",(0,r.oB)({transform:"rotate(180deg)"})),(0,r.eR)("expanded <=> collapsed, void => collapsed",(0,r.jt)(D))]),bodyExpansion:(0,r.X$)("bodyExpansion",[(0,r.SB)("collapsed, void",(0,r.oB)({height:"0px",visibility:"hidden"})),(0,r.SB)("expanded",(0,r.oB)({height:"*",visibility:"visible"})),(0,r.eR)("expanded <=> collapsed, void => collapsed",(0,r.jt)(D))])},H=new e.OlP("MAT_EXPANSION_PANEL");let K=(()=>{class t{constructor(n,a){this._template=n,this._expansionPanel=a}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(e.Rgc),e.Y36(H,8))},t.\u0275dir=e.lG2({type:t,selectors:[["ng-template","matExpansionPanelContent",""]]}),t})(),W=0;const I=new e.OlP("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS");let O=(()=>{class t extends R{get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(n){this._hideToggle=(0,g.Ig)(n)}get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(n){this._togglePosition=n}constructor(n,a,s,d,h,M,f){super(n,a,s),this._viewContainerRef=d,this._animationMode=M,this._hideToggle=!1,this.afterExpand=new e.vpe,this.afterCollapse=new e.vpe,this._inputChanges=new u.x,this._headerId="mat-expansion-panel-header-"+W++,this._bodyAnimationDone=new u.x,this.accordion=n,this._document=h,this._bodyAnimationDone.pipe((0,Y.x)((c,l)=>c.fromState===l.fromState&&c.toState===l.toState)).subscribe(c=>{"void"!==c.fromState&&("expanded"===c.toState?this.afterExpand.emit():"collapsed"===c.toState&&this.afterCollapse.emit())}),f&&(this.hideToggle=f.hideToggle)}_hasSpacing(){return!!this.accordion&&this.expanded&&"default"===this.accordion.displayMode}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe((0,w.O)(null),(0,x.h)(()=>this.expanded&&!this._portal),(0,j.q)(1)).subscribe(()=>{this._portal=new b.UE(this._lazyContent._template,this._viewContainerRef)})}ngOnChanges(n){this._inputChanges.next(n)}ngOnDestroy(){super.ngOnDestroy(),this._bodyAnimationDone.complete(),this._inputChanges.complete()}_containsFocus(){if(this._body){const n=this._document.activeElement,a=this._body.nativeElement;return n===a||a.contains(n)}return!1}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(y,12),e.Y36(e.sBO),e.Y36(P.A8),e.Y36(e.s_b),e.Y36(m.K0),e.Y36(e.QbO,8),e.Y36(I,8))},t.\u0275cmp=e.Xpm({type:t,selectors:[["mat-expansion-panel"]],contentQueries:function(n,a,s){if(1&n&&e.Suo(s,K,5),2&n){let d;e.iGM(d=e.CRH())&&(a._lazyContent=d.first)}},viewQuery:function(n,a){if(1&n&&e.Gf(G,5),2&n){let s;e.iGM(s=e.CRH())&&(a._body=s.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:6,hostBindings:function(n,a){2&n&&e.ekj("mat-expanded",a.expanded)("_mat-animation-noopable","NoopAnimations"===a._animationMode)("mat-expansion-panel-spacing",a._hasSpacing())},inputs:{disabled:"disabled",expanded:"expanded",hideToggle:"hideToggle",togglePosition:"togglePosition"},outputs:{opened:"opened",closed:"closed",expandedChange:"expandedChange",afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[e._Bn([{provide:y,useValue:void 0},{provide:H,useExisting:t}]),e.qOj,e.TTD],ngContentSelectors:X,decls:7,vars:4,consts:[["role","region",1,"mat-expansion-panel-content",3,"id"],["body",""],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(n,a){1&n&&(e.F$t(q),e.Hsn(0),e.TgZ(1,"div",0,1),e.NdJ("@bodyExpansion.done",function(d){return a._bodyAnimationDone.next(d)}),e.TgZ(3,"div",2),e.Hsn(4,1),e.YNc(5,L,0,0,"ng-template",3),e.qZA(),e.Hsn(6,2),e.qZA()),2&n&&(e.xp6(1),e.Q6J("@bodyExpansion",a._getExpandedState())("id",a.id),e.uIk("aria-labelledby",a._headerId),e.xp6(4),e.Q6J("cdkPortalOutlet",a._portal))},dependencies:[b.Pl],styles:['.mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-content[style*="visibility: hidden"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}'],encapsulation:2,data:{animation:[Z.bodyExpansion]},changeDetection:0}),t})();class ee{}const ne=(0,E.sb)(ee);let S=(()=>{class t extends ne{constructor(n,a,s,d,h,M,f){super(),this.panel=n,this._element=a,this._focusMonitor=s,this._changeDetectorRef=d,this._animationMode=M,this._parentChangeSubscription=C.w0.EMPTY;const c=n.accordion?n.accordion._stateChanges.pipe((0,x.h)(l=>!(!l.hideToggle&&!l.togglePosition))):z.E;this.tabIndex=parseInt(f||"")||0,this._parentChangeSubscription=(0,Q.T)(n.opened,n.closed,c,n._inputChanges.pipe((0,x.h)(l=>!!(l.hideToggle||l.disabled||l.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),n.closed.pipe((0,x.h)(()=>n._containsFocus())).subscribe(()=>s.focusVia(a,"program")),h&&(this.expandedHeight=h.expandedHeight,this.collapsedHeight=h.collapsedHeight)}get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){const n=this._isExpanded();return n&&this.expandedHeight?this.expandedHeight:!n&&this.collapsedHeight?this.collapsedHeight:null}_keydown(n){switch(n.keyCode){case A.L_:case A.K5:(0,A.Vb)(n)||(n.preventDefault(),this._toggle());break;default:return void(this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(n))}}focus(n,a){n?this._focusMonitor.focusVia(this._element,n,a):this._element.nativeElement.focus(a)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(n=>{n&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(O,1),e.Y36(e.SBq),e.Y36(T.tE),e.Y36(e.sBO),e.Y36(I,8),e.Y36(e.QbO,8),e.$8M("tabindex"))},t.\u0275cmp=e.Xpm({type:t,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:15,hostBindings:function(n,a){1&n&&e.NdJ("click",function(){return a._toggle()})("keydown",function(d){return a._keydown(d)}),2&n&&(e.uIk("id",a.panel._headerId)("tabindex",a.tabIndex)("aria-controls",a._getPanelId())("aria-expanded",a._isExpanded())("aria-disabled",a.panel.disabled),e.Udp("height",a._getHeaderHeight()),e.ekj("mat-expanded",a._isExpanded())("mat-expansion-toggle-indicator-after","after"===a._getTogglePosition())("mat-expansion-toggle-indicator-before","before"===a._getTogglePosition())("_mat-animation-noopable","NoopAnimations"===a._animationMode))},inputs:{tabIndex:"tabIndex",expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight"},features:[e.qOj],ngContentSelectors:V,decls:5,vars:3,consts:[[1,"mat-content"],["class","mat-expansion-indicator",4,"ngIf"],[1,"mat-expansion-indicator"]],template:function(n,a){1&n&&(e.F$t(J),e.TgZ(0,"span",0),e.Hsn(1),e.Hsn(2,1),e.Hsn(3,2),e.qZA(),e.YNc(4,$,1,1,"span",1)),2&n&&(e.ekj("mat-content-hide-toggle",!a._showToggle()),e.xp6(4),e.Q6J("ngIf",a._showToggle()))},dependencies:[m.O5],styles:['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}'],encapsulation:2,data:{animation:[Z.indicatorRotate]},changeDetection:0}),t})(),te=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=e.lG2({type:t,selectors:[["mat-panel-description"]],hostAttrs:[1,"mat-expansion-panel-header-description"]}),t})(),ae=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=e.lG2({type:t,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]}),t})(),ie=(()=>{class t extends B{constructor(){super(...arguments),this._ownHeaders=new e.n_E,this._hideToggle=!1,this.displayMode="default",this.togglePosition="after"}get hideToggle(){return this._hideToggle}set hideToggle(n){this._hideToggle=(0,g.Ig)(n)}ngAfterContentInit(){this._headers.changes.pipe((0,w.O)(this._headers)).subscribe(n=>{this._ownHeaders.reset(n.filter(a=>a.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new T.Em(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(n){this._keyManager.onKeydown(n)}_handleHeaderFocus(n){this._keyManager.updateActiveItem(n)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}}return t.\u0275fac=function(){let i;return function(a){return(i||(i=e.n5z(t)))(a||t)}}(),t.\u0275dir=e.lG2({type:t,selectors:[["mat-accordion"]],contentQueries:function(n,a,s){if(1&n&&e.Suo(s,S,5),2&n){let d;e.iGM(d=e.CRH())&&(a._headers=d)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(n,a){2&n&&e.ekj("mat-accordion-multi",a.multi)},inputs:{multi:"multi",hideToggle:"hideToggle",displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[e._Bn([{provide:y,useExisting:t}]),e.qOj]}),t})(),oe=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[m.ez,E.BQ,F,b.eL]}),t})();var k=o(6924),se=o(2480);let de=(()=>{class t{constructor(n){this.route=n,this.route.data.subscribe(({pokemon:a})=>console.log(a))}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(se.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["pokedex-pokemon-detail"]],standalone:!0,features:[e.jDz],decls:76,vars:0,consts:[[1,"example-card"],["mat-card-avatar","",1,"example-header-image"],["mat-card-image","","src","https://material.angular.io/assets/img/examples/shiba2.jpg","alt","Photo of a Shiba Inu"]],template:function(n,a){1&n&&(e.TgZ(0,"mat-card",0)(1,"mat-card-header"),e._UZ(2,"div",1),e.TgZ(3,"mat-card-title"),e._uU(4,"Shiba Inu"),e.qZA(),e.TgZ(5,"mat-card-subtitle"),e._uU(6,"Dog Breed"),e.qZA()(),e._UZ(7,"img",2),e.TgZ(8,"mat-card-content")(9,"p"),e._uU(10," The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. "),e.qZA()()(),e.TgZ(11,"mat-accordion")(12,"mat-expansion-panel")(13,"mat-expansion-panel-header")(14,"mat-panel-title"),e._uU(15," Info"),e.qZA(),e.TgZ(16,"mat-panel-description"),e._uU(17," \xa0 "),e.TgZ(18,"mat-icon"),e._uU(19,"account_circle"),e.qZA()()()(),e.TgZ(20,"mat-expansion-panel")(21,"mat-expansion-panel-header")(22,"mat-panel-title"),e._uU(23," Species"),e.qZA(),e.TgZ(24,"mat-panel-description"),e._uU(25," \xa0 "),e.TgZ(26,"mat-icon"),e._uU(27,"map"),e.qZA()()()(),e.TgZ(28,"mat-expansion-panel")(29,"mat-expansion-panel-header")(30,"mat-panel-title"),e._uU(31," Evolution Chain"),e.qZA(),e.TgZ(32,"mat-panel-description"),e._uU(33," \xa0 "),e.TgZ(34,"mat-icon"),e._uU(35,"date_range"),e.qZA()()()(),e.TgZ(36,"mat-expansion-panel")(37,"mat-expansion-panel-header")(38,"mat-panel-title"),e._uU(39," Stats"),e.qZA(),e.TgZ(40,"mat-panel-description"),e._uU(41," \xa0 "),e.TgZ(42,"mat-icon"),e._uU(43,"date_range"),e.qZA()()()(),e.TgZ(44,"mat-expansion-panel")(45,"mat-expansion-panel-header")(46,"mat-panel-title"),e._uU(47," Type Damages"),e.qZA(),e.TgZ(48,"mat-panel-description"),e._uU(49," \xa0 "),e.TgZ(50,"mat-icon"),e._uU(51,"date_range"),e.qZA()()()(),e.TgZ(52,"mat-expansion-panel")(53,"mat-expansion-panel-header")(54,"mat-panel-title"),e._uU(55," Abilities"),e.qZA(),e.TgZ(56,"mat-panel-description"),e._uU(57," \xa0 "),e.TgZ(58,"mat-icon"),e._uU(59,"date_range"),e.qZA()()()(),e.TgZ(60,"mat-expansion-panel")(61,"mat-expansion-panel-header")(62,"mat-panel-title"),e._uU(63," Moves"),e.qZA(),e.TgZ(64,"mat-panel-description"),e._uU(65," \xa0 "),e.TgZ(66,"mat-icon"),e._uU(67,"date_range"),e.qZA()()()(),e.TgZ(68,"mat-expansion-panel")(69,"mat-expansion-panel-header")(70,"mat-panel-title"),e._uU(71," Machines Moves"),e.qZA(),e.TgZ(72,"mat-panel-description"),e._uU(73," \xa0 "),e.TgZ(74,"mat-icon"),e._uU(75,"date_range"),e.qZA()()()()())},dependencies:[m.ez,oe,ie,O,S,ae,te,k.Ps,k.Hw,p.QW,p.a8,p.kc,p.dn,p.dk,p.G2,p.$j,p.n5],styles:["[_nghost-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%]{margin-bottom:16px}[_nghost-%COMP%]   .mat-accordion[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%]{flex:5}[_nghost-%COMP%]   .mat-accordion[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%]{justify-content:space-between;align-items:center}"]}),t})()}}]);