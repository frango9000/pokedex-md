"use strict";(self.webpackChunkpokedex=self.webpackChunkpokedex||[]).push([[592],{9221:(B,b,c)=>{c.d(b,{J:()=>C});var i=c(4755),u=c(1728),g=c(430),o=c(2223);let f=(()=>{class n{transform(e,t=!1,r=""){let a=this.getTypeColor(e);if(r?.length){const p=this.getTypeColor(r);a=this.blendColors(a,p)}return t?this.invertColor(a):a}invertColor(e){if(0===e.indexOf("#")&&(e=e.slice(1)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),6!==e.length)throw new Error("Invalid HEX color.");const t=(255-parseInt(e.slice(0,2),16)).toString(16),r=(255-parseInt(e.slice(2,4),16)).toString(16),a=(255-parseInt(e.slice(4,6),16)).toString(16);return"#"+this.padZero(t)+this.padZero(r)+this.padZero(a)}padZero(e,t){return t=t||2,(new Array(t).join("0")+e).slice(-t)}blendColors(e,t,r=.5){const[a,p,d]=e.match(/\w\w/g)?.map(l=>parseInt(l,16))||[],[m,T,h]=t.match(/\w\w/g)?.map(l=>parseInt(l,16))||[];return"#"+Math.round(a+(m-a)*r).toString(16).padStart(2,"0")+Math.round(p+(T-p)*r).toString(16).padStart(2,"0")+Math.round(d+(h-d)*r).toString(16).padStart(2,"0")}getTypeColor(e){let t="#000";switch(e){case"normal":t="#9C9C63";break;case"fighting":t="#AE2A24";break;case"flying":t="#8E6FEB";break;case"poison":t="#923A92";break;case"ground":t="#DBB54D";break;case"rock":t="#A48F32";break;case"bug":t="#97A51D";break;case"ghost":t="#644E88";break;case"steel":t="#A0A0C0";break;case"fire":t="#ED6D12";break;case"water":t="#4578ED";break;case"grass":t="#69C23D";break;case"electric":t="#F6C913";break;case"psychic":t="#F73670";break;case"ice":t="#7ECECE";break;case"dragon":t="#5D1EF7";break;case"dark":t="#644e40";break;case"fairy":t="#E87890";break;case"unknown":t="#888";break;case"shadow":t="#444"}return t}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=o.Yjl({name:"typeColor",type:n,pure:!0,standalone:!0}),n})();function k(n,s){if(1&n&&(o.TgZ(0,"button",2),o.ALo(1,"typeColor"),o.TgZ(2,"b"),o._uU(3),o.ALo(4,"uppercase"),o.qZA()()),2&n){const e=s.$implicit,t=o.oxw().$implicit;o.Udp("background-color",o.lcZ(1,3,e)),o.xp6(3),o.hij(" ",o.lcZ(4,5,t("TYPE."+e+".NAME"))," ")}}function y(n,s){if(1&n&&(o.ynx(0),o.YNc(1,k,5,7,"button",1),o.BQk()),2&n){const e=o.oxw();o.xp6(1),o.Q6J("ngForOf",e.types)}}let C=(()=>{class n{constructor(){this.types=[]}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=o.Xpm({type:n,selectors:[["pokedex-type-button"]],inputs:{types:"types"},standalone:!0,features:[o.jDz],decls:1,vars:0,consts:[[4,"transloco"],["mat-flat-button","",3,"background-color",4,"ngFor","ngForOf"],["mat-flat-button",""]],template:function(e,t){1&e&&o.YNc(0,y,2,1,"ng-container",0)},dependencies:[i.ez,i.sg,i.gd,u.ot,u.lW,g.y4,g.KI,f],styles:["[_nghost-%COMP%]   .mdc-button[_ngcontent-%COMP%]{padding-left:6px;padding-right:6px;height:24px;min-width:24px}"]}),n})()}}]);