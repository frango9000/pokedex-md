"use strict";(self.webpackChunkpokedex=self.webpackChunkpokedex||[]).push([[213],{7213:(k,P,o)=>{o.r(P),o.d(P,{MachineFiltersComponent:()=>M});var m=o(7582),f=o(6814),y=o(6223),u=o(8791),h=o(5545),C=o(8716),s=o(7414),O=o(3342),b=o(1181),t=o(4693),c=o(5879);let M=class _{constructor(l,g){this.filterService=l,this.bottomBarService=g,this.model=this.filterService.filterModel,this.fields=[{key:"search",type:"input",props:{label:"Search",placeholder:"Search"}},{key:"cost",type:"range-slider",props:{label:"Cost",discrete:!0,step:20,max:1e5}},{key:"types",type:"pokemon-type-select"},{key:"power",type:"range-slider",props:{label:"Power",discrete:!0,max:300}},{key:"pp",type:"range-slider",props:{label:"PP",discrete:!0,max:40}},{key:"accuracy",type:"range-slider",props:{label:"Accuracy",discrete:!0}}],this.bottomBarService.onClear$.pipe((0,u.t)(this)).subscribe(()=>{this.model={},this.filterService.filterModel=this.model})}static#t=this.\u0275fac=function(g){return new(g||_)(c.Y36(t.z),c.Y36(s.U))};static#e=this.\u0275cmp=c.Xpm({type:_,selectors:[["pokedex-machine-filters"]],standalone:!0,features:[c.jDz],decls:2,vars:2,consts:[[3,"fields","model","modelChange"]],template:function(g,p){1&g&&(c.TgZ(0,"form")(1,"formly-form",0),c.NdJ("modelChange",function(i){return p.filterService.filterModel=i}),c.qZA()()),2&g&&(c.xp6(1),c.Q6J("fields",p.fields)("model",p.model))},dependencies:[f.ez,y.UX,y._Y,y.JL,h.X0,h.T7,C.o,b.U,O.e]})};M=(0,m.gn)([(0,u.c)(),(0,m.w6)("design:paramtypes",[t.z,s.U])],M)},5154:(k,P,o)=>{o.d(P,{J:()=>p});var m=o(6814),f=o(2296),y=o(3680),u=o(9347),h=o(617),C=o(9605),s=o(7715),O=o(4664),b=o(7398),t=o(5879);let c=(()=>{class r{constructor(e){this.dialog=e}openTypesDialog({types:e=[],attacking:n=!1,defending:a=!1}){(0,s.D)(Promise.all([o.e(195),o.e(592),o.e(775)]).then(o.bind(o,7775))).pipe((0,b.U)(d=>Object.values(d)[0]),(0,O.w)(d=>this.dialog.open(d,{data:{types:e,attacking:n,defending:a}}).afterClosed())).subscribe()}static#t=this.\u0275fac=function(n){return new(n||r)(t.LFG(u.uw))};static#e=this.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac})}return r})(),M=(()=>{class r{transform(e,n="",a=!1){let d=this.getTypeColor(e);if(n?.length){const v=this.getTypeColor(n);d=this.blendColors(d,v)}return a?this.invertColor(d):d}invertColor(e){if(0===e.indexOf("#")&&(e=e.slice(1)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),6!==e.length)throw new Error("Invalid HEX color.");const n=(255-parseInt(e.slice(0,2),16)).toString(16),a=(255-parseInt(e.slice(2,4),16)).toString(16),d=(255-parseInt(e.slice(4,6),16)).toString(16);return"#"+this.padZero(n)+this.padZero(a)+this.padZero(d)}padZero(e,n){return n=n||2,(new Array(n).join("0")+e).slice(-n)}blendColors(e,n,a=.5){const[d,v,D]=e.match(/\w\w/g)?.map(T=>parseInt(T,16))||[],[A,B,S]=n.match(/\w\w/g)?.map(T=>parseInt(T,16))||[];return"#"+Math.round(d+(A-d)*a).toString(16).padStart(2,"0")+Math.round(v+(B-v)*a).toString(16).padStart(2,"0")+Math.round(D+(S-D)*a).toString(16).padStart(2,"0")}getTypeColor(e){let n="#000";switch(e){case"normal":n="#9C9C63";break;case"fighting":n="#AE2A24";break;case"flying":n="#8E6FEB";break;case"poison":n="#923A92";break;case"ground":n="#DBB54D";break;case"rock":n="#A48F32";break;case"bug":n="#97A51D";break;case"ghost":n="#644E88";break;case"steel":n="#A0A0C0";break;case"fire":n="#ED6D12";break;case"water":n="#4578ED";break;case"grass":n="#69C23D";break;case"electric":n="#F6C913";break;case"psychic":n="#F73670";break;case"ice":n="#7ECECE";break;case"dragon":n="#5D1EF7";break;case"dark":n="#644e40";break;case"fairy":n="#E87890";break;case"unknown":n="#888";break;case"shadow":n="#444"}return n}static#t=this.\u0275fac=function(n){return new(n||r)};static#e=this.\u0275pipe=t.Yjl({name:"typeColor",type:r,pure:!0,standalone:!0})}return r})();function E(r,i){if(1&r&&(t.TgZ(0,"button",4),t.ALo(1,"typeColor"),t.TgZ(2,"b"),t._uU(3),t.ALo(4,"uppercase"),t.qZA()()),2&r){const e=i.ngIf,n=t.oxw().$implicit;t.Udp("background-color",t.lcZ(1,3,e)),t.xp6(3),t.hij(" ",t.lcZ(4,5,n("type."+e+".name"))," ")}}function l(r,i){if(1&r&&(t.ynx(0),t.TgZ(1,"mat-icon",5),t.ALo(2,"typeColor"),t._uU(3,"merge"),t.qZA(),t.TgZ(4,"button",6),t.ALo(5,"typeColor"),t.TgZ(6,"b"),t._uU(7),t.ALo(8,"uppercase"),t.qZA()(),t.BQk()),2&r){const e=i.ngIf,n=t.oxw().$implicit,a=t.oxw();t.xp6(1),t.Udp("background-color",t.xi3(2,5,a.types[0],a.types[1])),t.xp6(3),t.Udp("background-color",t.lcZ(5,8,e)),t.xp6(3),t.hij(" ",t.lcZ(8,10,n("type."+e+".name"))," ")}}function g(r,i){if(1&r){const e=t.EpF();t.ynx(0),t.TgZ(1,"span",1),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.clickable&&(a.attacking||a.defending)&&a.typeDetailService.openTypesDialog({types:a.types,attacking:a.attacking,defending:a.defending}))}),t.YNc(2,E,5,7,"button",2),t.YNc(3,l,9,12,"ng-container",3),t.qZA(),t.BQk()}if(2&r){const e=t.oxw();t.xp6(1),t.ekj("multi-type",e.types.length>1)("clickable",e.clickable)("full-width",e.fullWidth),t.xp6(1),t.Q6J("ngIf",null==e.types?null:e.types[0]),t.xp6(1),t.Q6J("ngIf",null==e.types?null:e.types[1])}}let p=(()=>{class r{constructor(e){this.typeDetailService=e,this.types=[],this.clickable=!1,this.fullWidth=!1,this.defending=!1,this.attacking=!1}static#t=this.\u0275fac=function(n){return new(n||r)(t.Y36(c))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["pokedex-type-button"]],inputs:{types:"types",clickable:"clickable",fullWidth:"fullWidth",defending:"defending",attacking:"attacking"},standalone:!0,features:[t._Bn([c]),t.jDz],decls:1,vars:0,consts:[[4,"transloco"],["matRipple","",1,"types-container",3,"click"],["mat-flat-button","","class","type-1",3,"background-color",4,"ngIf"],[4,"ngIf"],["mat-flat-button","",1,"type-1"],[1,"type-merge"],["mat-flat-button","",1,"type-2"]],template:function(n,a){1&n&&t.YNc(0,g,4,8,"ng-container",0)},dependencies:[m.ez,m.O5,m.gd,f.ot,f.lW,u.Is,C.y4,C.KI,M,h.Ps,h.Hw,y.si,y.wG],styles:["[_nghost-%COMP%]   span.mat-mdc-button-ripple[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   .types-container[_ngcontent-%COMP%]{display:inline-flex;cursor:pointer}[_nghost-%COMP%]   .types-container[_ngcontent-%COMP%]   .mdc-button[_ngcontent-%COMP%]{padding-left:6px;padding-right:6px;height:24px;min-width:24px}[_nghost-%COMP%]   .types-container.multi-type[_ngcontent-%COMP%]   .type-1[_ngcontent-%COMP%]{border-bottom-right-radius:0;border-top-right-radius:0}[_nghost-%COMP%]   .types-container.multi-type[_ngcontent-%COMP%]   .type-2[_ngcontent-%COMP%]{border-bottom-left-radius:0;border-top-left-radius:0}[_nghost-%COMP%]   .types-container[_ngcontent-%COMP%]:not(.clickable)   .type-1[_ngcontent-%COMP%], [_nghost-%COMP%]   .types-container[_ngcontent-%COMP%]:not(.clickable)   .type-merge[_ngcontent-%COMP%], [_nghost-%COMP%]   .types-container[_ngcontent-%COMP%]:not(.clickable)   .type-2[_ngcontent-%COMP%]{cursor:default}[_nghost-%COMP%]   .types-container.full-width[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .types-container.full-width[_ngcontent-%COMP%]   .mdc-button[_ngcontent-%COMP%]{width:100%}"]})}return r})()},3342:(k,P,o)=>{o.d(P,{e:()=>E});var m=o(6814),f=o(6223),y=o(8525),u=o(5545),h=o(6072),C=o(5154),s=o(5879),O=o(2751),b=o(3680);const t=function(l){return[l]};function c(l,g){if(1&l&&(s.TgZ(0,"mat-option",2),s._UZ(1,"pokedex-type-button",3),s.qZA()),2&l){const p=g.$implicit;s.Q6J("value",p.name),s.xp6(1),s.Q6J("types",s.VKq(2,t,p.name))}}let M=(()=>{class l extends h.f{constructor(){super(...arguments),this.service=(0,s.f3M)(O.S)}static#t=this.\u0275fac=function(){let p;return function(i){return(p||(p=s.n5z(l)))(i||l)}}();static#e=this.\u0275cmp=s.Xpm({type:l,selectors:[["pokedex-pokemon-type-select"]],features:[s.qOj],decls:3,vars:13,consts:[[3,"id","formControl","formlyAttributes","placeholder","tabIndex","required","multiple","errorStateMatcher","aria-label","disableOptionCentering"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[3,"types"]],template:function(r,i){1&r&&(s.TgZ(0,"mat-select",0),s.YNc(1,c,2,4,"mat-option",1),s.ALo(2,"async"),s.qZA()),2&r&&(s.Q6J("id",i.id)("formControl",i.formControl)("formlyAttributes",i.field)("placeholder",i.props.placeholder||"Select Types")("tabIndex",i.props.tabindex)("required",!1)("multiple",!0)("errorStateMatcher",i.errorStateMatcher)("aria-label","Select Pokemon Types")("disableOptionCentering",!0),s.xp6(1),s.Q6J("ngForOf",s.lcZ(2,11,i.service.getAll$())))},dependencies:[m.sg,f.JJ,f.Q7,f.oH,y.gD,b.ey,u.JD,C.J,m.Ov],changeDetection:0})}return l})(),E=(()=>{class l{static#t=this.\u0275fac=function(r){return new(r||l)};static#e=this.\u0275mod=s.oAB({type:l});static#n=this.\u0275inj=s.cJS({imports:[m.ez,f.UX,y.LD,h.n,u.X0.forChild({types:[{name:"pokemon-type-select",component:M,wrappers:["form-field"]}]}),C.J]})}return l})()}}]);