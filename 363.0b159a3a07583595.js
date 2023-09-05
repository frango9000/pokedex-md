"use strict";(self.webpackChunkpokedex=self.webpackChunkpokedex||[]).push([[363],{2363:(F,h,r)=>{r.r(h),r.d(h,{PokemonListComponent:()=>R});var l,g=r(7582),y=r(6814),u=r(5195),f=r(3566),_=r(5313),p=r(1896),P=r(9786),M=r(8791),D=r(6283),n=r(8180),O=r(720),v=r(3754),x=r(629),A=r(247),L=r(5154),T=r(5702),t=r(5879);function c(a,i){1&a&&(t.TgZ(0,"th",13),t._uU(1,"No."),t.qZA())}function o(a,i){if(1&a&&(t.TgZ(0,"td",14),t._uU(1),t.qZA()),2&a){const s=i.$implicit;t.xp6(1),t.Oqu(s.id)}}function e(a,i){1&a&&t._UZ(0,"th",15)}function d(a,i){if(1&a&&(t.TgZ(0,"td",14),t._UZ(1,"img",16),t.qZA()),2&a){const s=i.$implicit;t.xp6(1),t.MGl("ngSrc","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",s.id,".png"),t.s9C("alt",s.name)}}function m(a,i){1&a&&(t.TgZ(0,"th",13),t._uU(1,"Name"),t.qZA())}function k(a,i){if(1&a&&(t.TgZ(0,"td",14),t._uU(1),t.qZA()),2&a){const s=i.$implicit,C=t.oxw().$implicit;t.xp6(1),t.Oqu(C("pokemon."+s.name))}}function E(a,i){1&a&&(t.TgZ(0,"th",13),t._uU(1,"Gen."),t.qZA())}function Z(a,i){if(1&a&&(t.TgZ(0,"td",14),t._uU(1),t.qZA()),2&a){const s=i.$implicit,C=t.oxw().$implicit;t.xp6(1),t.Oqu(C("generation."+s.generation))}}function B(a,i){1&a&&(t.TgZ(0,"th",15),t._uU(1,"Types"),t.qZA())}function S(a,i){if(1&a&&(t.TgZ(0,"td",14),t._UZ(1,"pokedex-type-button",17),t.qZA()),2&a){const s=i.$implicit;t.xp6(1),t.Q6J("types",s.types)("clickable",!0)("defending",!0)}}function I(a,i){1&a&&t._UZ(0,"tr",18)}const U=function(a){return["pokemon",a]},w=function(a){return{sidebar:a}},b=function(a){return{outlets:a}},W=function(a){return["/",a]};function Y(a,i){1&a&&t._UZ(0,"tr",19),2&a&&t.Q6J("routerLink",t.VKq(8,W,t.VKq(6,b,t.VKq(4,w,t.VKq(2,U,i.$implicit.name)))))("routerLinkActive","mat-row-selected")}function N(a,i){if(1&a){const s=t.EpF();t.ynx(0),t.TgZ(1,"mat-card",1),t.NdJ("scrolled",function(){t.CHM(s);const K=t.oxw();return t.KtG(K.dataSource.nextPage())}),t.TgZ(2,"table",2),t.NdJ("matSortChange",function(K){t.CHM(s);const Q=t.oxw();return t.KtG(Q.dataSource.sort=K)}),t.ynx(3,3),t.YNc(4,c,2,0,"th",4),t.YNc(5,o,2,1,"td",5),t.BQk(),t.ynx(6,6),t.YNc(7,e,1,0,"th",7),t.YNc(8,d,2,2,"td",5),t.BQk(),t.ynx(9,8),t.YNc(10,m,2,0,"th",4),t.YNc(11,k,2,1,"td",5),t.BQk(),t.ynx(12,9),t.YNc(13,E,2,0,"th",4),t.YNc(14,Z,2,1,"td",5),t.BQk(),t.ynx(15,10),t.YNc(16,B,2,0,"th",7),t.YNc(17,S,2,3,"td",5),t.BQk(),t.YNc(18,I,1,0,"tr",11),t.YNc(19,Y,1,10,"tr",12),t.qZA(),t._UZ(20,"pokedex-bottom-bar-fab"),t.qZA(),t.BQk()}if(2&a){const s=t.oxw();t.xp6(1),t.Q6J("infiniteScrollDistance",2)("infiniteScrollThrottle",50)("scrollWindow",!1),t.xp6(1),t.Q6J("dataSource",s.dataSource)("fixedLayout",!0),t.xp6(16),t.Q6J("matHeaderRowDef",s.displayedColumns)("matHeaderRowDefSticky",!0),t.xp6(1),t.Q6J("matRowDefColumns",s.displayedColumns)}}let R=((l=class{constructor(i,s){this.pokemonService=i,this.filterService=s,this.dataSource=new A.l,this.displayedColumns=["id","sprite","name","generation","types"],this.pokemonService.getAll$().pipe((0,n.q)(1)).subscribe(C=>this.dataSource.resources=C),this.filterService.filters$.subscribe(C=>this.dataSource.filters=C)}}).\u0275fac=function(i){return new(i||l)(t.Y36(O.f),t.Y36(T.r))},l.\u0275cmp=t.Xpm({type:l,selectors:[["pokedex-pokemon-list"]],standalone:!0,features:[t.jDz],decls:1,vars:0,consts:[[4,"transloco"],["appearance","outlined","infiniteScroll","",1,"table-container",3,"infiniteScrollDistance","infiniteScrollThrottle","scrollWindow","scrolled"],["mat-table","","matSort","","matSortActive","id","matSortDirection","asc","aria-describedby","pokemon list",3,"dataSource","fixedLayout","matSortChange"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","sprite"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","name"],["matColumnDef","generation"],["matColumnDef","types"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",3,"routerLink","routerLinkActive",4,"matRowDef","matRowDefColumns"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],["width","48","height","48","priority","","imgFallback","assets/images/default-pokemon.png",3,"ngSrc","alt"],[3,"types","clickable","defending"],["mat-header-row",""],["mat-row","",3,"routerLink","routerLinkActive"]],template:function(i,s){1&i&&t.YNc(0,N,21,8,"ng-container",0)},dependencies:[y.ez,_.p0,_.BZ,_.fO,_.as,_.w1,_.Dz,_.nj,_.ge,_.ev,_.XQ,_.Gk,y.Zd,D.Rq,D.Ry,f.JX,f.YE,f.nU,L.J,P.y4,P.KI,u.QW,u.a8,v.n,p.rH,p.Od,x.Z],styles:["[_nghost-%COMP%]{height:100%;flex:1}[_nghost-%COMP%]   .table-container[_ngcontent-%COMP%]{height:100%;max-height:100%;overflow-y:auto}[_nghost-%COMP%]   .table-container[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover{background-color:#f0f0f0}[_nghost-%COMP%]   .table-container[_ngcontent-%COMP%]   .mat-mdc-row.mat-row-selected[_ngcontent-%COMP%]{background-color:#e0e0e0}.dark-mode   [_nghost-%COMP%]   .table-container[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover{background-color:#585858}.dark-mode   [_nghost-%COMP%]   .table-container[_ngcontent-%COMP%]   .mat-mdc-row.mat-row-selected[_ngcontent-%COMP%]{background-color:#686868}"]}),l);R=(0,g.gn)([(0,M.c)(),(0,g.w6)("design:paramtypes",[O.f,T.r])],R)},5154:(F,h,r)=>{r.d(h,{J:()=>T});var g=r(6814),y=r(2296),u=r(3680),f=r(9347),_=r(617),p=r(9786),P=r(7715),M=r(4664),D=r(7398),n=r(5879);let O=(()=>{var t;class l{constructor(o){this.dialog=o}openTypesDialog({types:o=[],attacking:e=!1,defending:d=!1}){(0,P.D)(Promise.all([r.e(195),r.e(592),r.e(775)]).then(r.bind(r,7775))).pipe((0,D.U)(m=>Object.values(m)[0]),(0,M.w)(m=>this.dialog.open(m,{data:{types:o,attacking:e,defending:d}}).afterClosed())).subscribe()}}return(t=l).\u0275fac=function(o){return new(o||t)(n.LFG(f.uw))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac}),l})(),v=(()=>{var t;class l{transform(o,e="",d=!1){let m=this.getTypeColor(o);if(e?.length){const k=this.getTypeColor(e);m=this.blendColors(m,k)}return d?this.invertColor(m):m}invertColor(o){if(0===o.indexOf("#")&&(o=o.slice(1)),3===o.length&&(o=o[0]+o[0]+o[1]+o[1]+o[2]+o[2]),6!==o.length)throw new Error("Invalid HEX color.");const e=(255-parseInt(o.slice(0,2),16)).toString(16),d=(255-parseInt(o.slice(2,4),16)).toString(16),m=(255-parseInt(o.slice(4,6),16)).toString(16);return"#"+this.padZero(e)+this.padZero(d)+this.padZero(m)}padZero(o,e){return e=e||2,(new Array(e).join("0")+o).slice(-e)}blendColors(o,e,d=.5){const[m,k,E]=o.match(/\w\w/g)?.map(b=>parseInt(b,16))||[],[Z,B,S]=e.match(/\w\w/g)?.map(b=>parseInt(b,16))||[];return"#"+Math.round(m+(Z-m)*d).toString(16).padStart(2,"0")+Math.round(k+(B-k)*d).toString(16).padStart(2,"0")+Math.round(E+(S-E)*d).toString(16).padStart(2,"0")}getTypeColor(o){let e="#000";switch(o){case"normal":e="#9C9C63";break;case"fighting":e="#AE2A24";break;case"flying":e="#8E6FEB";break;case"poison":e="#923A92";break;case"ground":e="#DBB54D";break;case"rock":e="#A48F32";break;case"bug":e="#97A51D";break;case"ghost":e="#644E88";break;case"steel":e="#A0A0C0";break;case"fire":e="#ED6D12";break;case"water":e="#4578ED";break;case"grass":e="#69C23D";break;case"electric":e="#F6C913";break;case"psychic":e="#F73670";break;case"ice":e="#7ECECE";break;case"dragon":e="#5D1EF7";break;case"dark":e="#644e40";break;case"fairy":e="#E87890";break;case"unknown":e="#888";break;case"shadow":e="#444"}return e}}return(t=l).\u0275fac=function(o){return new(o||t)},t.\u0275pipe=n.Yjl({name:"typeColor",type:t,pure:!0,standalone:!0}),l})();function x(t,l){if(1&t&&(n.TgZ(0,"button",4),n.ALo(1,"typeColor"),n.TgZ(2,"b"),n._uU(3),n.ALo(4,"uppercase"),n.qZA()()),2&t){const c=l.ngIf,o=n.oxw().$implicit;n.Udp("background-color",n.lcZ(1,3,c)),n.xp6(3),n.hij(" ",n.lcZ(4,5,o("type."+c+".name"))," ")}}function A(t,l){if(1&t&&(n.ynx(0),n.TgZ(1,"mat-icon",5),n.ALo(2,"typeColor"),n._uU(3,"merge"),n.qZA(),n.TgZ(4,"button",6),n.ALo(5,"typeColor"),n.TgZ(6,"b"),n._uU(7),n.ALo(8,"uppercase"),n.qZA()(),n.BQk()),2&t){const c=l.ngIf,o=n.oxw().$implicit,e=n.oxw();n.xp6(1),n.Udp("background-color",n.xi3(2,5,e.types[0],e.types[1])),n.xp6(3),n.Udp("background-color",n.lcZ(5,8,c)),n.xp6(3),n.hij(" ",n.lcZ(8,10,o("type."+c+".name"))," ")}}function L(t,l){if(1&t){const c=n.EpF();n.ynx(0),n.TgZ(1,"span",1),n.NdJ("click",function(){n.CHM(c);const e=n.oxw();return n.KtG(e.clickable&&(e.attacking||e.defending)&&e.typeDetailService.openTypesDialog({types:e.types,attacking:e.attacking,defending:e.defending}))}),n.YNc(2,x,5,7,"button",2),n.YNc(3,A,9,12,"ng-container",3),n.qZA(),n.BQk()}if(2&t){const c=n.oxw();n.xp6(1),n.ekj("multi-type",c.types.length>1)("clickable",c.clickable)("full-width",c.fullWidth),n.xp6(1),n.Q6J("ngIf",null==c.types?null:c.types[0]),n.xp6(1),n.Q6J("ngIf",null==c.types?null:c.types[1])}}let T=(()=>{var t;class l{constructor(o){this.typeDetailService=o,this.types=[],this.clickable=!1,this.fullWidth=!1,this.defending=!1,this.attacking=!1}}return(t=l).\u0275fac=function(o){return new(o||t)(n.Y36(O))},t.\u0275cmp=n.Xpm({type:t,selectors:[["pokedex-type-button"]],inputs:{types:"types",clickable:"clickable",fullWidth:"fullWidth",defending:"defending",attacking:"attacking"},standalone:!0,features:[n._Bn([O]),n.jDz],decls:1,vars:0,consts:[[4,"transloco"],["matRipple","",1,"types-container",3,"click"],["mat-flat-button","","class","type-1",3,"background-color",4,"ngIf"],[4,"ngIf"],["mat-flat-button","",1,"type-1"],[1,"type-merge"],["mat-flat-button","",1,"type-2"]],template:function(o,e){1&o&&n.YNc(0,L,4,8,"ng-container",0)},dependencies:[g.ez,g.O5,g.gd,y.ot,y.lW,f.Is,p.y4,p.KI,v,_.Ps,_.Hw,u.si,u.wG],styles:["[_nghost-%COMP%]   span.mat-mdc-button-ripple[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   .types-container[_ngcontent-%COMP%]{display:inline-flex;cursor:pointer}[_nghost-%COMP%]   .types-container[_ngcontent-%COMP%]   .mdc-button[_ngcontent-%COMP%]{padding-left:6px;padding-right:6px;height:24px;min-width:24px}[_nghost-%COMP%]   .types-container.multi-type[_ngcontent-%COMP%]   .type-1[_ngcontent-%COMP%]{border-bottom-right-radius:0;border-top-right-radius:0}[_nghost-%COMP%]   .types-container.multi-type[_ngcontent-%COMP%]   .type-2[_ngcontent-%COMP%]{border-bottom-left-radius:0;border-top-left-radius:0}[_nghost-%COMP%]   .types-container[_ngcontent-%COMP%]:not(.clickable)   .type-1[_ngcontent-%COMP%], [_nghost-%COMP%]   .types-container[_ngcontent-%COMP%]:not(.clickable)   .type-merge[_ngcontent-%COMP%], [_nghost-%COMP%]   .types-container[_ngcontent-%COMP%]:not(.clickable)   .type-2[_ngcontent-%COMP%]{cursor:default}[_nghost-%COMP%]   .types-container.full-width[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .types-container.full-width[_ngcontent-%COMP%]   .mdc-button[_ngcontent-%COMP%]{width:100%}"]}),l})()},629:(F,h,r)=>{r.d(h,{Z:()=>y});var g=r(5879);let y=(()=>{var u;class f{constructor(p){this.elementRef=p,this.imgFallback=""}loadFallbackOnError(){this.elementRef.nativeElement.src=this.imgFallback}}return(u=f).\u0275fac=function(p){return new(p||u)(g.Y36(g.SBq))},u.\u0275dir=g.lG2({type:u,selectors:[["img","imgFallback",""]],hostBindings:function(p,P){1&p&&g.NdJ("error",function(){return P.loadFallbackOnError()})},inputs:{imgFallback:"imgFallback"},standalone:!0}),f})()}}]);