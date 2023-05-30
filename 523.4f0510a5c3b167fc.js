"use strict";(self.webpackChunkpokedex=self.webpackChunkpokedex||[]).push([[523],{9523:(I,f,o)=>{o.r(f),o.d(f,{TypeDetailComponent:()=>A});var c=o(4755),x=o(1728),r=o(6012),u=o(6286),C=o(3630),T=o(6924),_=o(6868),h=o(430),O=o(4945),e=o(2223);let k=(()=>{class a{transform(t){switch(t){case 0:return"#05F";case.25:return"#007a0c";case.5:return"#7ba600";case 2:return"#F50";case 4:return"#F00";default:return"#000"}}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275pipe=e.Yjl({name:"typeDamagesMultiplierColor",type:a,pure:!0,standalone:!0}),a})();const y=function(a,s){return{title:a,damages:s}};function M(a,s){if(1&a&&(e.TgZ(0,"div",3)(1,"span",4),e._uU(2),e.qZA(),e.TgZ(3,"div",5),e.GkF(4,6)(5,6),e.qZA()()),2&a){const t=e.oxw().$implicit,p=e.oxw(),l=e.MAs(2);e.xp6(2),e.Oqu(t("type.damages.attacking.title")),e.xp6(2),e.Q6J("ngTemplateOutlet",l)("ngTemplateOutletContext",e.WLB(5,y,t("type.damages.attacking.weaknesses"),p.typeDamages.attacking.weaknesses)),e.xp6(1),e.Q6J("ngTemplateOutlet",l)("ngTemplateOutletContext",e.WLB(8,y,t("type.damages.attacking.strengths"),p.typeDamages.attacking.strengths))}}function P(a,s){if(1&a&&(e.TgZ(0,"div",3)(1,"span",4),e._uU(2),e.qZA(),e.TgZ(3,"div",5),e.GkF(4,6)(5,6),e.qZA()()),2&a){const t=e.oxw().$implicit,p=e.oxw(),l=e.MAs(2);e.xp6(2),e.Oqu(t("type.damages.defending.title")),e.xp6(2),e.Q6J("ngTemplateOutlet",l)("ngTemplateOutletContext",e.WLB(5,y,t("type.damages.defending.weaknesses"),p.typeDamages.defending.weaknesses)),e.xp6(1),e.Q6J("ngTemplateOutlet",l)("ngTemplateOutletContext",e.WLB(8,y,t("type.damages.defending.resistances"),p.typeDamages.defending.resistances))}}function D(a,s){if(1&a&&(e.ynx(0),e.YNc(1,M,6,11,"div",2),e.YNc(2,P,6,11,"div",2),e.BQk()),2&a){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.attacking&&(null==t.typeDamages?null:t.typeDamages.attacking)),e.xp6(1),e.Q6J("ngIf",t.defending&&(null==t.typeDamages?null:t.typeDamages.defending))}}const v=function(a){return[a]};function Z(a,s){if(1&a&&(e.TgZ(0,"div",10),e._UZ(1,"pokedex-type-button",11),e.TgZ(2,"span",12),e.ALo(3,"typeDamagesMultiplierColor"),e._uU(4),e.qZA()()),2&a){const t=s.$implicit;e.xp6(1),e.Q6J("types",e.VKq(7,v,t.name+""))("fullWidth",!0),e.xp6(1),e.Udp("color",e.lcZ(3,5,t.multiplier)),e.xp6(2),e.hij("x",t.multiplier,"")}}function b(a,s){if(1&a&&(e.TgZ(0,"div",7)(1,"span",8),e._uU(2),e.qZA(),e.YNc(3,Z,5,9,"div",9),e.qZA()),2&a){const t=s.title,p=s.damages;e.xp6(2),e.Oqu(t),e.xp6(1),e.Q6J("ngForOf",p)}}let w=(()=>{class a{constructor(t){this.typeService=t,this.types=[],this.defending=!1,this.attacking=!1,this.clickableTitle=!1,this.clickableEntries=!1}ngOnInit(){this.typeDamages=this.generateTypeDamages()}generateTypeDamages(){const t=this.typeService.getAll(),p=t.filter(n=>this.types.includes(n.name)),l=t.map(n=>({name:n.name,multiplier:1}));p.forEach(n=>{n.damage_relations.double_damage_from.forEach(i=>{const d=l.findIndex(m=>m.name===i);l[d].multiplier*=2}),n.damage_relations.half_damage_from.forEach(i=>{const d=l.findIndex(m=>m.name===i);l[d].multiplier*=.5}),n.damage_relations.no_damage_from.forEach(i=>{const d=l.findIndex(m=>m.name===i);l[d].multiplier*=0})});const g=t.map(n=>({name:n.name,multiplier:1}));return p.forEach(n=>{n.damage_relations.double_damage_to.forEach(i=>{const d=g.findIndex(m=>m.name===i);g[d].multiplier*=2}),n.damage_relations.half_damage_to.forEach(i=>{const d=g.findIndex(m=>m.name===i);g[d].multiplier*=.5}),n.damage_relations.no_damage_to.forEach(i=>{const d=g.findIndex(m=>m.name===i);g[d].multiplier*=0})}),{attacking:{weaknesses:g.filter(n=>n.multiplier<1).sort((n,i)=>i.multiplier-n.multiplier),strengths:g.filter(n=>n.multiplier>1).sort((n,i)=>n.multiplier-i.multiplier)},defending:{weaknesses:l.filter(n=>n.multiplier>1).sort((n,i)=>i.multiplier-n.multiplier),resistances:l.filter(n=>n.multiplier<1).sort((n,i)=>n.multiplier-i.multiplier)}}}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(O.S))},a.\u0275cmp=e.Xpm({type:a,selectors:[["pokedex-type-damages"]],inputs:{types:"types",defending:"defending",attacking:"attacking",clickableTitle:"clickableTitle",clickableEntries:"clickableEntries"},standalone:!0,features:[e.jDz],decls:3,vars:0,consts:[[4,"transloco"],["typeDamagesTemplate",""],["class","type-damages-type",4,"ngIf"],[1,"type-damages-type"],[1,"type-damages-title"],[1,"type-damages"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"type-damages-block"],[1,"type-damages-block-title"],["class","type-damage",4,"ngFor","ngForOf"],[1,"type-damage"],[3,"types","fullWidth"],[1,"type-damage-multiplier"]],template:function(t,p){1&t&&(e.YNc(0,D,3,2,"ng-container",0),e.YNc(1,b,4,2,"ng-template",null,1,e.W1O))},dependencies:[c.ez,c.sg,c.O5,c.tP,h.y4,h.KI,_.J,k],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:16px}[_nghost-%COMP%]   .type-damages-type[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}[_nghost-%COMP%]   .type-damages-type[_ngcontent-%COMP%]   .type-damages-title[_ngcontent-%COMP%]{width:100%;text-align:center;font-weight:700}[_nghost-%COMP%]   .type-damages-type[_ngcontent-%COMP%]   .type-damages[_ngcontent-%COMP%]{display:flex;gap:16px}[_nghost-%COMP%]   .type-damages-type[_ngcontent-%COMP%]   .type-damages[_ngcontent-%COMP%]   .type-damages-block[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;gap:4px}[_nghost-%COMP%]   .type-damages-type[_ngcontent-%COMP%]   .type-damages[_ngcontent-%COMP%]   .type-damages-block[_ngcontent-%COMP%]   .type-damages-block-title[_ngcontent-%COMP%]{width:100%;text-align:center}[_nghost-%COMP%]   .type-damages-type[_ngcontent-%COMP%]   .type-damages[_ngcontent-%COMP%]   .type-damages-block[_ngcontent-%COMP%]   .type-damage[_ngcontent-%COMP%]{display:flex}[_nghost-%COMP%]   .type-damages-type[_ngcontent-%COMP%]   .type-damages[_ngcontent-%COMP%]   .type-damages-block[_ngcontent-%COMP%]   .type-damage[_ngcontent-%COMP%]   pokedex-type-button[_ngcontent-%COMP%]{flex:1}[_nghost-%COMP%]   .type-damages-type[_ngcontent-%COMP%]   .type-damages[_ngcontent-%COMP%]   .type-damages-block[_ngcontent-%COMP%]   .type-damage[_ngcontent-%COMP%]   .type-damage-multiplier[_ngcontent-%COMP%]{width:50px;text-align:end;font-weight:700}"]}),a})(),A=(()=>{class a{constructor(t){this.data=t}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(u.WI))},a.\u0275cmp=e.Xpm({type:a,selectors:[["pokedex-type-detail"]],standalone:!0,features:[e.jDz],decls:12,vars:4,consts:[[1,"title-icon"],[3,"types"],["mat-icon-button","","aria-label","Close","mat-dialog-close",""],[3,"types","attacking","defending"]],template:function(t,p){1&t&&(e.TgZ(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title")(3,"mat-icon",0),e._uU(4,"title"),e.qZA(),e._UZ(5,"pokedex-type-button",1),e.TgZ(6,"button",2)(7,"mat-icon"),e._uU(8,"close"),e.qZA()()()(),e._UZ(9,"mat-divider"),e.TgZ(10,"mat-card-content"),e._UZ(11,"pokedex-type-damages",3),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("types",p.data.types),e.xp6(6),e.Q6J("types",p.data.types)("attacking",p.data.attacking)("defending",p.data.defending))},dependencies:[c.ez,r.QW,r.a8,r.dn,r.dk,r.n5,T.Ps,T.Hw,x.ot,x.RK,C.t,C.d,w,_.J,u.Is,u.ZT],styles:["pokedex-type-detail .mat-mdc-card-header{padding:4px}pokedex-type-detail .mat-mdc-card-header .mat-mdc-card-header-text{width:100%}pokedex-type-detail .mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title{display:flex;justify-content:space-between;align-items:center}pokedex-type-detail .mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title .title-icon{padding:12px}pokedex-type-detail .mat-mdc-card-content{padding:16px}\n"],encapsulation:2}),a})()}}]);