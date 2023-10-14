"use strict";(self.webpackChunkpokedex=self.webpackChunkpokedex||[]).push([[363],{2363:(W,f,i)=>{i.r(f),i.d(f,{PokemonListComponent:()=>w});var m=i(7582),u=i(6814),p=i(5195),C=i(3566),l=i(5313),g=i(1896),h=i(9605),M=i(8791),b=i(6283),n=i(8180),k=i(720),T=i(3754),v=i(629),x=i(247),A=i(5154),D=i(5702),t=i(5879);function y(a,s){1&a&&(t.TgZ(0,"th",13),t._uU(1,"No."),t.qZA())}function e(a,s){if(1&a&&(t.TgZ(0,"td",14),t._uU(1),t.qZA()),2&a){const r=s.$implicit;t.xp6(1),t.Oqu(r.id)}}function o(a,s){1&a&&t._UZ(0,"th",15)}function c(a,s){if(1&a&&(t.TgZ(0,"td",14),t._UZ(1,"img",16),t.qZA()),2&a){const r=s.$implicit;t.xp6(1),t.MGl("ngSrc","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",r.id,".png"),t.s9C("alt",r.name)}}function _(a,s){1&a&&(t.TgZ(0,"th",13),t._uU(1,"Name"),t.qZA())}function P(a,s){if(1&a&&(t.TgZ(0,"td",14),t._uU(1),t.qZA()),2&a){const r=s.$implicit,d=t.oxw().$implicit;t.xp6(1),t.Oqu(d("pokemon."+r.name))}}function E(a,s){1&a&&(t.TgZ(0,"th",13),t._uU(1,"Gen."),t.qZA())}function L(a,s){if(1&a&&(t.TgZ(0,"td",14),t._uU(1),t.qZA()),2&a){const r=s.$implicit,d=t.oxw().$implicit;t.xp6(1),t.Oqu(d("generation."+r.generation))}}function Z(a,s){1&a&&(t.TgZ(0,"th",15),t._uU(1,"Types"),t.qZA())}function B(a,s){if(1&a&&(t.TgZ(0,"td",14),t._UZ(1,"pokedex-type-button",17),t.qZA()),2&a){const r=s.$implicit;t.xp6(1),t.Q6J("types",r.types)("clickable",!0)("defending",!0)}}function S(a,s){1&a&&t._UZ(0,"tr",18)}const U=function(a){return["pokemon",a]},I=function(a){return{sidebar:a}},O=function(a){return{outlets:a}},F=function(a){return["/",a]};function Y(a,s){1&a&&t._UZ(0,"tr",19),2&a&&t.Q6J("routerLink",t.VKq(8,F,t.VKq(6,O,t.VKq(4,I,t.VKq(2,U,s.$implicit.name)))))("routerLinkActive","mat-row-selected")}function N(a,s){if(1&a){const r=t.EpF();t.ynx(0),t.TgZ(1,"mat-card",1),t.NdJ("scrolled",function(){t.CHM(r);const R=t.oxw();return t.KtG(R.dataSource.nextPage())}),t.TgZ(2,"table",2),t.NdJ("matSortChange",function(R){t.CHM(r);const Q=t.oxw();return t.KtG(Q.dataSource.sort=R)}),t.ynx(3,3),t.YNc(4,y,2,0,"th",4),t.YNc(5,e,2,1,"td",5),t.BQk(),t.ynx(6,6),t.YNc(7,o,1,0,"th",7),t.YNc(8,c,2,2,"td",5),t.BQk(),t.ynx(9,8),t.YNc(10,_,2,0,"th",4),t.YNc(11,P,2,1,"td",5),t.BQk(),t.ynx(12,9),t.YNc(13,E,2,0,"th",4),t.YNc(14,L,2,1,"td",5),t.BQk(),t.ynx(15,10),t.YNc(16,Z,2,0,"th",7),t.YNc(17,B,2,3,"td",5),t.BQk(),t.YNc(18,S,1,0,"tr",11),t.YNc(19,Y,1,10,"tr",12),t.qZA(),t._UZ(20,"pokedex-bottom-bar-fab"),t.qZA(),t.BQk()}if(2&a){const r=t.oxw();t.xp6(1),t.Q6J("infiniteScrollDistance",2)("infiniteScrollThrottle",50)("scrollWindow",!1),t.xp6(1),t.Q6J("dataSource",r.dataSource)("fixedLayout",!0),t.xp6(16),t.Q6J("matHeaderRowDef",r.displayedColumns)("matHeaderRowDefSticky",!0),t.xp6(1),t.Q6J("matRowDefColumns",r.displayedColumns)}}let w=class K{constructor(s,r){this.pokemonService=s,this.filterService=r,this.dataSource=new x.l,this.displayedColumns=["id","sprite","name","generation","types"],this.pokemonService.getAll$().pipe((0,n.q)(1)).subscribe(d=>this.dataSource.resources=d),this.filterService.filters$.subscribe(d=>this.dataSource.filters=d)}static#t=this.\u0275fac=function(r){return new(r||K)(t.Y36(k.f),t.Y36(D.r))};static#n=this.\u0275cmp=t.Xpm({type:K,selectors:[["pokedex-pokemon-list"]],standalone:!0,features:[t.jDz],decls:1,vars:0,consts:[[4,"transloco"],["appearance","outlined","infiniteScroll","",1,"table-container",3,"infiniteScrollDistance","infiniteScrollThrottle","scrollWindow","scrolled"],["mat-table","","matSort","","matSortActive","id","matSortDirection","asc","aria-describedby","pokemon list",3,"dataSource","fixedLayout","matSortChange"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","sprite"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","name"],["matColumnDef","generation"],["matColumnDef","types"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",3,"routerLink","routerLinkActive",4,"matRowDef","matRowDefColumns"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],["width","48","height","48","priority","","imgFallback","assets/images/default-pokemon.png",3,"ngSrc","alt"],[3,"types","clickable","defending"],["mat-header-row",""],["mat-row","",3,"routerLink","routerLinkActive"]],template:function(r,d){1&r&&t.YNc(0,N,21,8,"ng-container",0)},dependencies:[u.ez,l.p0,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,u.Zd,b.Rq,b.Ry,C.JX,C.YE,C.nU,A.J,h.y4,h.KI,p.QW,p.a8,T.n,g.rH,g.Od,v.Z],styles:["[_nghost-%COMP%]{height:100%;flex:1}[_nghost-%COMP%]   .table-container[_ngcontent-%COMP%]{height:100%;max-height:100%;overflow-y:auto}[_nghost-%COMP%]   .table-container[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover{background-color:#f0f0f0}[_nghost-%COMP%]   .table-container[_ngcontent-%COMP%]   .mat-mdc-row.mat-row-selected[_ngcontent-%COMP%]{background-color:#e0e0e0}.dark-mode   [_nghost-%COMP%]   .table-container[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover{background-color:#585858}.dark-mode   [_nghost-%COMP%]   .table-container[_ngcontent-%COMP%]   .mat-mdc-row.mat-row-selected[_ngcontent-%COMP%]{background-color:#686868}"]})};w=(0,m.gn)([(0,M.c)(),(0,m.w6)("design:paramtypes",[k.f,D.r])],w)},5154:(W,f,i)=>{i.d(f,{J:()=>D});var m=i(6814),u=i(2296),p=i(3680),C=i(9347),l=i(617),g=i(9605),h=i(7715),M=i(4664),b=i(7398),n=i(5879);let k=(()=>{class t{constructor(e){this.dialog=e}openTypesDialog({types:e=[],attacking:o=!1,defending:c=!1}){(0,h.D)(Promise.all([i.e(195),i.e(592),i.e(775)]).then(i.bind(i,7775))).pipe((0,b.U)(_=>Object.values(_)[0]),(0,M.w)(_=>this.dialog.open(_,{data:{types:e,attacking:o,defending:c}}).afterClosed())).subscribe()}static#t=this.\u0275fac=function(o){return new(o||t)(n.LFG(C.uw))};static#n=this.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac})}return t})(),T=(()=>{class t{transform(e,o="",c=!1){let _=this.getTypeColor(e);if(o?.length){const P=this.getTypeColor(o);_=this.blendColors(_,P)}return c?this.invertColor(_):_}invertColor(e){if(0===e.indexOf("#")&&(e=e.slice(1)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),6!==e.length)throw new Error("Invalid HEX color.");const o=(255-parseInt(e.slice(0,2),16)).toString(16),c=(255-parseInt(e.slice(2,4),16)).toString(16),_=(255-parseInt(e.slice(4,6),16)).toString(16);return"#"+this.padZero(o)+this.padZero(c)+this.padZero(_)}padZero(e,o){return o=o||2,(new Array(o).join("0")+e).slice(-o)}blendColors(e,o,c=.5){const[_,P,E]=e.match(/\w\w/g)?.map(O=>parseInt(O,16))||[],[L,Z,B]=o.match(/\w\w/g)?.map(O=>parseInt(O,16))||[];return"#"+Math.round(_+(L-_)*c).toString(16).padStart(2,"0")+Math.round(P+(Z-P)*c).toString(16).padStart(2,"0")+Math.round(E+(B-E)*c).toString(16).padStart(2,"0")}getTypeColor(e){let o="#000";switch(e){case"normal":o="#9C9C63";break;case"fighting":o="#AE2A24";break;case"flying":o="#8E6FEB";break;case"poison":o="#923A92";break;case"ground":o="#DBB54D";break;case"rock":o="#A48F32";break;case"bug":o="#97A51D";break;case"ghost":o="#644E88";break;case"steel":o="#A0A0C0";break;case"fire":o="#ED6D12";break;case"water":o="#4578ED";break;case"grass":o="#69C23D";break;case"electric":o="#F6C913";break;case"psychic":o="#F73670";break;case"ice":o="#7ECECE";break;case"dragon":o="#5D1EF7";break;case"dark":o="#644e40";break;case"fairy":o="#E87890";break;case"unknown":o="#888";break;case"shadow":o="#444"}return o}static#t=this.\u0275fac=function(o){return new(o||t)};static#n=this.\u0275pipe=n.Yjl({name:"typeColor",type:t,pure:!0,standalone:!0})}return t})();function v(t,y){if(1&t&&(n.TgZ(0,"button",4),n.ALo(1,"typeColor"),n.TgZ(2,"b"),n._uU(3),n.ALo(4,"uppercase"),n.qZA()()),2&t){const e=y.ngIf,o=n.oxw().$implicit;n.Udp("background-color",n.lcZ(1,3,e)),n.xp6(3),n.hij(" ",n.lcZ(4,5,o("type."+e+".name"))," ")}}function x(t,y){if(1&t&&(n.ynx(0),n.TgZ(1,"mat-icon",5),n.ALo(2,"typeColor"),n._uU(3,"merge"),n.qZA(),n.TgZ(4,"button",6),n.ALo(5,"typeColor"),n.TgZ(6,"b"),n._uU(7),n.ALo(8,"uppercase"),n.qZA()(),n.BQk()),2&t){const e=y.ngIf,o=n.oxw().$implicit,c=n.oxw();n.xp6(1),n.Udp("background-color",n.xi3(2,5,c.types[0],c.types[1])),n.xp6(3),n.Udp("background-color",n.lcZ(5,8,e)),n.xp6(3),n.hij(" ",n.lcZ(8,10,o("type."+e+".name"))," ")}}function A(t,y){if(1&t){const e=n.EpF();n.ynx(0),n.TgZ(1,"span",1),n.NdJ("click",function(){n.CHM(e);const c=n.oxw();return n.KtG(c.clickable&&(c.attacking||c.defending)&&c.typeDetailService.openTypesDialog({types:c.types,attacking:c.attacking,defending:c.defending}))}),n.YNc(2,v,5,7,"button",2),n.YNc(3,x,9,12,"ng-container",3),n.qZA(),n.BQk()}if(2&t){const e=n.oxw();n.xp6(1),n.ekj("multi-type",e.types.length>1)("clickable",e.clickable)("full-width",e.fullWidth),n.xp6(1),n.Q6J("ngIf",null==e.types?null:e.types[0]),n.xp6(1),n.Q6J("ngIf",null==e.types?null:e.types[1])}}let D=(()=>{class t{constructor(e){this.typeDetailService=e,this.types=[],this.clickable=!1,this.fullWidth=!1,this.defending=!1,this.attacking=!1}static#t=this.\u0275fac=function(o){return new(o||t)(n.Y36(k))};static#n=this.\u0275cmp=n.Xpm({type:t,selectors:[["pokedex-type-button"]],inputs:{types:"types",clickable:"clickable",fullWidth:"fullWidth",defending:"defending",attacking:"attacking"},standalone:!0,features:[n._Bn([k]),n.jDz],decls:1,vars:0,consts:[[4,"transloco"],["matRipple","",1,"types-container",3,"click"],["mat-flat-button","","class","type-1",3,"background-color",4,"ngIf"],[4,"ngIf"],["mat-flat-button","",1,"type-1"],[1,"type-merge"],["mat-flat-button","",1,"type-2"]],template:function(o,c){1&o&&n.YNc(0,A,4,8,"ng-container",0)},dependencies:[m.ez,m.O5,m.gd,u.ot,u.lW,C.Is,g.y4,g.KI,T,l.Ps,l.Hw,p.si,p.wG],styles:["[_nghost-%COMP%]   span.mat-mdc-button-ripple[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   .types-container[_ngcontent-%COMP%]{display:inline-flex;cursor:pointer}[_nghost-%COMP%]   .types-container[_ngcontent-%COMP%]   .mdc-button[_ngcontent-%COMP%]{padding-left:6px;padding-right:6px;height:24px;min-width:24px}[_nghost-%COMP%]   .types-container.multi-type[_ngcontent-%COMP%]   .type-1[_ngcontent-%COMP%]{border-bottom-right-radius:0;border-top-right-radius:0}[_nghost-%COMP%]   .types-container.multi-type[_ngcontent-%COMP%]   .type-2[_ngcontent-%COMP%]{border-bottom-left-radius:0;border-top-left-radius:0}[_nghost-%COMP%]   .types-container[_ngcontent-%COMP%]:not(.clickable)   .type-1[_ngcontent-%COMP%], [_nghost-%COMP%]   .types-container[_ngcontent-%COMP%]:not(.clickable)   .type-merge[_ngcontent-%COMP%], [_nghost-%COMP%]   .types-container[_ngcontent-%COMP%]:not(.clickable)   .type-2[_ngcontent-%COMP%]{cursor:default}[_nghost-%COMP%]   .types-container.full-width[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .types-container.full-width[_ngcontent-%COMP%]   .mdc-button[_ngcontent-%COMP%]{width:100%}"]})}return t})()},629:(W,f,i)=>{i.d(f,{Z:()=>u});var m=i(5879);let u=(()=>{class p{constructor(l){this.elementRef=l,this.imgFallback=""}loadFallbackOnError(){this.elementRef.nativeElement.src=this.imgFallback}static#t=this.\u0275fac=function(g){return new(g||p)(m.Y36(m.SBq))};static#n=this.\u0275dir=m.lG2({type:p,selectors:[["img","imgFallback",""]],hostBindings:function(g,h){1&g&&m.NdJ("error",function(){return h.loadFallbackOnError()})},inputs:{imgFallback:"imgFallback"},standalone:!0})}return p})()}}]);