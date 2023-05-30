"use strict";(self.webpackChunkpokedex=self.webpackChunkpokedex||[]).push([[592],{6868:(h,f,r)=>{r.d(f,{J:()=>E});var l=r(4755),d=r(1728),p=r(1217),g=r(6286),i=r(6924),u=r(430),m=r(2076),M=r(3900),P=r(4004),t=r(2223);let C=(()=>{class o{constructor(n){this.dialog=n}openTypesDialog({types:n=[],attacking:e=!1,defending:a=!1}){(0,m.D)(Promise.all([r.e(12),r.e(523)]).then(r.bind(r,9523))).pipe((0,P.U)(c=>Object.values(c)[0]),(0,M.w)(c=>this.dialog.open(c,{data:{types:n,attacking:e,defending:a}}).afterClosed())).subscribe()}}return o.\u0275fac=function(n){return new(n||o)(t.LFG(g.uw))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac}),o})(),O=(()=>{class o{transform(n,e="",a=!1){let c=this.getTypeColor(n);if(e?.length){const y=this.getTypeColor(e);c=this.blendColors(c,y)}return a?this.invertColor(c):c}invertColor(n){if(0===n.indexOf("#")&&(n=n.slice(1)),3===n.length&&(n=n[0]+n[0]+n[1]+n[1]+n[2]+n[2]),6!==n.length)throw new Error("Invalid HEX color.");const e=(255-parseInt(n.slice(0,2),16)).toString(16),a=(255-parseInt(n.slice(2,4),16)).toString(16),c=(255-parseInt(n.slice(4,6),16)).toString(16);return"#"+this.padZero(e)+this.padZero(a)+this.padZero(c)}padZero(n,e){return e=e||2,(new Array(e).join("0")+n).slice(-e)}blendColors(n,e,a=.5){const[c,y,k]=n.match(/\w\w/g)?.map(b=>parseInt(b,16))||[],[A,F,B]=e.match(/\w\w/g)?.map(b=>parseInt(b,16))||[];return"#"+Math.round(c+(A-c)*a).toString(16).padStart(2,"0")+Math.round(y+(F-y)*a).toString(16).padStart(2,"0")+Math.round(k+(B-k)*a).toString(16).padStart(2,"0")}getTypeColor(n){let e="#000";switch(n){case"normal":e="#9C9C63";break;case"fighting":e="#AE2A24";break;case"flying":e="#8E6FEB";break;case"poison":e="#923A92";break;case"ground":e="#DBB54D";break;case"rock":e="#A48F32";break;case"bug":e="#97A51D";break;case"ghost":e="#644E88";break;case"steel":e="#A0A0C0";break;case"fire":e="#ED6D12";break;case"water":e="#4578ED";break;case"grass":e="#69C23D";break;case"electric":e="#F6C913";break;case"psychic":e="#F73670";break;case"ice":e="#7ECECE";break;case"dragon":e="#5D1EF7";break;case"dark":e="#644e40";break;case"fairy":e="#E87890";break;case"unknown":e="#888";break;case"shadow":e="#444"}return e}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275pipe=t.Yjl({name:"typeColor",type:o,pure:!0,standalone:!0}),o})();function T(o,s){if(1&o&&(t.TgZ(0,"button",4),t.ALo(1,"typeColor"),t.TgZ(2,"b"),t._uU(3),t.ALo(4,"uppercase"),t.qZA()()),2&o){const n=s.ngIf,e=t.oxw().$implicit;t.Udp("background-color",t.lcZ(1,3,n)),t.xp6(3),t.hij(" ",t.lcZ(4,5,e("TYPE."+n+".NAME"))," ")}}function v(o,s){if(1&o&&(t.ynx(0),t.TgZ(1,"mat-icon",5),t.ALo(2,"typeColor"),t._uU(3,"merge"),t.qZA(),t.TgZ(4,"button",6),t.ALo(5,"typeColor"),t.TgZ(6,"b"),t._uU(7),t.ALo(8,"uppercase"),t.qZA()(),t.BQk()),2&o){const n=s.ngIf,e=t.oxw().$implicit,a=t.oxw();t.xp6(1),t.Udp("background-color",t.xi3(2,5,a.types[0],a.types[1])),t.xp6(3),t.Udp("background-color",t.lcZ(5,8,n)),t.xp6(3),t.hij(" ",t.lcZ(8,10,e("TYPE."+n+".NAME"))," ")}}function D(o,s){if(1&o){const n=t.EpF();t.ynx(0),t.TgZ(1,"span",1),t.NdJ("click",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.clickable&&(a.attacking||a.defending)&&a.typeDetailService.openTypesDialog({types:a.types,attacking:a.attacking,defending:a.defending}))}),t.YNc(2,T,5,7,"button",2),t.YNc(3,v,9,12,"ng-container",3),t.qZA(),t.BQk()}if(2&o){const n=t.oxw();t.xp6(1),t.ekj("multi-type",n.types.length>1)("clickable",n.clickable)("full-width",n.fullWidth),t.xp6(1),t.Q6J("ngIf",null==n.types?null:n.types[0]),t.xp6(1),t.Q6J("ngIf",null==n.types?null:n.types[1])}}let E=(()=>{class o{constructor(n){this.typeDetailService=n,this.types=[],this.clickable=!1,this.fullWidth=!1,this.defending=!1,this.attacking=!1}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(C))},o.\u0275cmp=t.Xpm({type:o,selectors:[["pokedex-type-button"]],inputs:{types:"types",clickable:"clickable",fullWidth:"fullWidth",defending:"defending",attacking:"attacking"},standalone:!0,features:[t._Bn([C]),t.jDz],decls:1,vars:0,consts:[[4,"transloco"],["matRipple","",1,"types-container",3,"click"],["mat-flat-button","","class","type-1",3,"background-color",4,"ngIf"],[4,"ngIf"],["mat-flat-button","",1,"type-1"],[1,"type-merge"],["mat-flat-button","",1,"type-2"]],template:function(n,e){1&n&&t.YNc(0,D,4,8,"ng-container",0)},dependencies:[l.ez,l.O5,l.gd,d.ot,d.lW,g.Is,u.y4,u.KI,O,i.Ps,i.Hw,p.si,p.wG],styles:["[_nghost-%COMP%]   span.mat-mdc-button-ripple[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   .types-container[_ngcontent-%COMP%]{display:inline-flex;cursor:pointer}[_nghost-%COMP%]   .types-container[_ngcontent-%COMP%]   .mdc-button[_ngcontent-%COMP%]{padding-left:6px;padding-right:6px;height:24px;min-width:24px}[_nghost-%COMP%]   .types-container.multi-type[_ngcontent-%COMP%]   .type-1[_ngcontent-%COMP%]{border-bottom-right-radius:0;border-top-right-radius:0}[_nghost-%COMP%]   .types-container.multi-type[_ngcontent-%COMP%]   .type-2[_ngcontent-%COMP%]{border-bottom-left-radius:0;border-top-left-radius:0}[_nghost-%COMP%]   .types-container[_ngcontent-%COMP%]:not(.clickable)   .type-1[_ngcontent-%COMP%], [_nghost-%COMP%]   .types-container[_ngcontent-%COMP%]:not(.clickable)   .type-merge[_ngcontent-%COMP%], [_nghost-%COMP%]   .types-container[_ngcontent-%COMP%]:not(.clickable)   .type-2[_ngcontent-%COMP%]{cursor:default}[_nghost-%COMP%]   .types-container.full-width[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .types-container.full-width[_ngcontent-%COMP%]   .mdc-button[_ngcontent-%COMP%]{width:100%}"]}),o})()},4125:(h,f,r)=>{r.d(f,{Z:()=>d});var l=r(2223);let d=(()=>{class p{constructor(i){this.elementRef=i,this.imgFallback=""}loadFallbackOnError(){this.elementRef.nativeElement.src=this.imgFallback}}return p.\u0275fac=function(i){return new(i||p)(l.Y36(l.SBq))},p.\u0275dir=l.lG2({type:p,selectors:[["img","imgFallback",""]],hostBindings:function(i,u){1&i&&l.NdJ("error",function(){return u.loadFallbackOnError()})},inputs:{imgFallback:"imgFallback"},standalone:!0}),p})()}}]);