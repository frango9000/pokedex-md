"use strict";(self.webpackChunkpokedex=self.webpackChunkpokedex||[]).push([[673],{5542:(g,l,e)=>{e.d(l,{A:()=>d});var n=e(5879),p=e(9786),M=e(3997),v=e(7398),i=e(2089);let d=(()=>{var t;class r extends i.i{constructor(){super(...arguments),this.translocoService=(0,n.f3M)(p.Vn)}get filters$(){return super.filterModel$.pipe((0,M.x)(),(0,v.U)(c=>{const{search:s,types:f,generations:m,power:E,pp:y,accuracy:u}=c,o={};return s&&(o.search=[{property:"names",type:"contains",value:s,locale:this.translocoService.getActiveLang()},{property:"id",type:"contains",value:s}]),f?.length&&(o.type=[{property:"type",type:"among",value:f}]),m?.length&&(o.generation=[{property:"generation",type:"among",value:m}]),(E?.start||E?.end)&&(o.power=[{property:"power",type:"in-range",range:E}]),(y?.start||y?.end)&&(o.pp=[{property:"pp",type:"in-range",range:y}]),(u?.start||u?.end)&&(o.accuracy=[{property:"accuracy",type:"in-range",range:u}]),o}))}}return(t=r).\u0275fac=function(){let a;return function(s){return(a||(a=n.n5z(t)))(s||t)}}(),t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac}),r})()},2673:(g,l,e)=>{e.r(l),e.d(l,{MoveHomeModule:()=>d});var n=e(6814),p=e(1896),M=e(5542),v=e(5879);const i=[{path:"",loadComponent:()=>Promise.all([e.e(195),e.e(986),e.e(100)]).then(e.bind(e,1100)).then(t=>t.MoveListComponent)},{path:"",loadComponent:()=>Promise.all([e.e(341),e.e(277)]).then(e.bind(e,2277)).then(t=>t.MoveFiltersComponent),outlet:"bottom-bar"}];let d=(()=>{var t;class r{}return(t=r).\u0275fac=function(c){return new(c||t)},t.\u0275mod=v.oAB({type:t}),t.\u0275inj=v.cJS({providers:[M.A],imports:[n.ez,p.Bz.forChild(i)]}),r})()}}]);