"use strict";(self.webpackChunkpokedex=self.webpackChunkpokedex||[]).push([[100],{1100:($,l,_)=>{_.r(l),_.d(l,{MoveListComponent:()=>I});var p=_(6814),s=_(5195),m=_(3566),a=_(5313),u=_(1896),f=_(9786),d=_(6283),g=_(8180),C=_(3754),v=_(4942),M=_(5154),t=_(5879),h=_(6278),T=_(5542);function O(e,n){1&e&&(t.TgZ(0,"th",15),t._uU(1,"No."),t.qZA())}function D(e,n){if(1&e&&(t.TgZ(0,"td",16),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Oqu(o.id)}}function x(e,n){1&e&&(t.TgZ(0,"th",15),t._uU(1,"Name"),t.qZA())}function P(e,n){if(1&e&&(t.TgZ(0,"td",16),t._uU(1),t.qZA()),2&e){const o=n.$implicit,c=t.oxw().$implicit;t.xp6(1),t.Oqu(c("move."+o.name+".name"))}}function L(e,n){1&e&&(t.TgZ(0,"th",15),t._uU(1,"Gen."),t.qZA())}function E(e,n){if(1&e&&(t.TgZ(0,"td",16),t._uU(1),t.qZA()),2&e){const o=n.$implicit,c=t.oxw().$implicit;t.xp6(1),t.Oqu(c("generation."+o.generation))}}function A(e,n){1&e&&(t.TgZ(0,"th",17),t._uU(1,"Type"),t.qZA())}const Z=function(e){return[e]};function y(e,n){if(1&e&&(t.TgZ(0,"td",16),t._UZ(1,"pokedex-type-button",18),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Q6J("types",t.VKq(3,Z,o.type))("clickable",!0)("attacking",!0)}}function U(e,n){1&e&&(t.TgZ(0,"th",15),t._uU(1,"Power"),t.qZA())}function S(e,n){if(1&e&&(t.TgZ(0,"td",16),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Oqu(o.power)}}function B(e,n){1&e&&(t.TgZ(0,"th",15),t._uU(1,"PP"),t.qZA())}function R(e,n){if(1&e&&(t.TgZ(0,"td",16),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Oqu(o.pp)}}function b(e,n){1&e&&(t.TgZ(0,"th",15),t._uU(1,"Accuracy"),t.qZA())}function K(e,n){if(1&e&&(t.TgZ(0,"td",16),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Oqu(o.accuracy)}}function k(e,n){1&e&&t._UZ(0,"tr",19)}const w=function(e){return["move",e]},N=function(e){return{sidebar:e}},Y=function(e){return{outlets:e}},W=function(e){return["/",e]};function Q(e,n){1&e&&t._UZ(0,"tr",20),2&e&&t.Q6J("routerLink",t.VKq(8,W,t.VKq(6,Y,t.VKq(4,N,t.VKq(2,w,n.$implicit.name)))))("routerLinkActive","mat-row-selected")}function q(e,n){if(1&e){const o=t.EpF();t.ynx(0),t.TgZ(1,"mat-card",1),t.NdJ("scrolled",function(){t.CHM(o);const i=t.oxw();return t.KtG(i.dataSource.nextPage())}),t.TgZ(2,"table",2),t.NdJ("matSortChange",function(i){t.CHM(o);const r=t.oxw();return t.KtG(r.dataSource.sort=i)}),t.ynx(3,3),t.YNc(4,O,2,0,"th",4),t.YNc(5,D,2,1,"td",5),t.BQk(),t.ynx(6,6),t.YNc(7,x,2,0,"th",4),t.YNc(8,P,2,1,"td",5),t.BQk(),t.ynx(9,7),t.YNc(10,L,2,0,"th",4),t.YNc(11,E,2,1,"td",5),t.BQk(),t.ynx(12,8),t.YNc(13,A,2,0,"th",9),t.YNc(14,y,2,5,"td",5),t.BQk(),t.ynx(15,10),t.YNc(16,U,2,0,"th",4),t.YNc(17,S,2,1,"td",5),t.BQk(),t.ynx(18,11),t.YNc(19,B,2,0,"th",4),t.YNc(20,R,2,1,"td",5),t.BQk(),t.ynx(21,12),t.YNc(22,b,2,0,"th",4),t.YNc(23,K,2,1,"td",5),t.BQk(),t.YNc(24,k,1,0,"tr",13),t.YNc(25,Q,1,10,"tr",14),t.qZA(),t._UZ(26,"pokedex-bottom-bar-fab"),t.qZA(),t.BQk()}if(2&e){const o=t.oxw();t.xp6(1),t.Q6J("infiniteScrollDistance",2)("infiniteScrollThrottle",50)("scrollWindow",!1),t.xp6(1),t.Q6J("dataSource",o.dataSource)("fixedLayout",!0),t.xp6(22),t.Q6J("matHeaderRowDef",o.displayedColumns)("matHeaderRowDefSticky",!0),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns)}}let I=(()=>{var e;class n{constructor(c,i){this.moveService=c,this.filterService=i,this.dataSource=new v.l,this.displayedColumns=["id","name","generation","type","power","pp","accuracy"],this.moveService.getAll$().pipe((0,g.q)(1)).subscribe(r=>this.dataSource.resources=r),this.filterService.filters$.subscribe(r=>this.dataSource.filters=r)}}return(e=n).\u0275fac=function(c){return new(c||e)(t.Y36(h.q),t.Y36(T.A))},e.\u0275cmp=t.Xpm({type:e,selectors:[["pokedex-move-list"]],standalone:!0,features:[t.jDz],decls:1,vars:0,consts:[[4,"transloco"],["appearance","outlined","infiniteScroll","",1,"table-container",3,"infiniteScrollDistance","infiniteScrollThrottle","scrollWindow","scrolled"],["mat-table","","matSort","","matSortActive","id","matSortDirection","asc","aria-describedby","move list",3,"dataSource","fixedLayout","matSortChange"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","generation"],["matColumnDef","type"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","power"],["matColumnDef","pp"],["matColumnDef","accuracy"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",3,"routerLink","routerLinkActive",4,"matRowDef","matRowDefColumns"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],[3,"types","clickable","attacking"],["mat-header-row",""],["mat-row","",3,"routerLink","routerLinkActive"]],template:function(c,i){1&c&&t.YNc(0,q,27,8,"ng-container",0)},dependencies:[p.ez,C.n,d.Rq,d.Ry,s.QW,s.a8,m.JX,m.YE,m.nU,a.p0,a.BZ,a.fO,a.as,a.w1,a.Dz,a.nj,a.ge,a.ev,a.XQ,a.Gk,f.KI,M.J,u.rH,u.Od],styles:["[_nghost-%COMP%]{height:100%;flex:1}[_nghost-%COMP%]   .table-container[_ngcontent-%COMP%]{height:100%;max-height:100%;overflow-y:auto}[_nghost-%COMP%]   .table-container[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover{background-color:#f0f0f0}[_nghost-%COMP%]   .table-container[_ngcontent-%COMP%]   .mat-mdc-row.mat-row-selected[_ngcontent-%COMP%]{background-color:#e0e0e0}.dark-mode   [_nghost-%COMP%]   .table-container[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover{background-color:#585858}.dark-mode   [_nghost-%COMP%]   .table-container[_ngcontent-%COMP%]   .mat-mdc-row.mat-row-selected[_ngcontent-%COMP%]{background-color:#686868}"]}),n})()}}]);