import './polyfills.server.mjs';
import{a as f}from"./chunk-IYAFPHNW.mjs";import{F as y,q as h}from"./chunk-VU365YVR.mjs";import{Da as _,Ha as c,Ia as j,S as o,X as d,Za as u,aa as a,cb as v,db as x,eb as C,fb as r,gb as n,hb as s,n as m,vb as p,wb as S,zb as l}from"./chunk-ZP62FUPS.mjs";import"./chunk-VVCT4QZE.mjs";var z=(()=>{class t{constructor(){}allSubjectAdapt(e){return{metadata:{currentPage:e.metadata.currentPage,numberOfPages:e.metadata.numberOfPages,limit:e.metadata.limit},subjects:e.subjects.map(i=>({_id:i._id,name:i.name,icon:i.icon}))}}singleSubjectAdapt(e){return{category:{_id:e.category._id,name:e.category.name,icon:e.category.icon}}}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var A=(()=>{class t{constructor(e,i){this._HttpClient=e,this._ExamsAdapter=i}getAllSubjects(){return this._HttpClient.get(f.getAllSubject).pipe(m(e=>this._ExamsAdapter.allSubjectAdapt(e)))}getSingleSubject(e){return this._HttpClient.get(f.getSingleSubject+e).pipe(m(i=>this._ExamsAdapter.singleSubjectAdapt(i)))}static{this.\u0275fac=function(i){return new(i||t)(d(h),d(z))}}static{this.\u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function I(t,k){if(t&1&&(r(0,"div",1)(1,"div",2)(2,"figure"),s(3,"img",3),n(),r(4,"p",4),p(5),n()()()),t&2){let e=k.$implicit;u("routerLink","/exams/diploma/"+e._id),c(3),u("src",e.icon,_)("alt",e.name),c(2),S(e.name)}}var P=(()=>{class t{constructor(e){this._SubjectQuizesService=e}ngOnInit(){this._SubjectQuizesService.getAllSubjects().subscribe({next:e=>{console.log(e),this.getAllSubject=e.subjects},error:e=>{console.log(e)}})}static{this.\u0275fac=function(i){return new(i||t)(j(A))}}static{this.\u0275cmp=a({type:t,selectors:[["app-quizes-cards"]],standalone:!0,features:[l],decls:3,vars:0,consts:[[1,"grid"],[1,"col-12","sm:col-6","md:col-4","relative",3,"routerLink"],[1,"cursor-pointer","overflow-hidden","subject__card"],[1,"w-full",3,"src","alt"],[1,"card__title","absolute"]],template:function(i,b){i&1&&(r(0,"div",0),x(1,I,6,4,"div",1,v),n()),i&2&&(c(),C(b.getAllSubject))},dependencies:[y],styles:[".subject__card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transition:scale .5s}.subject__card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{scale:1.1}.card__title[_ngcontent-%COMP%]{padding:18px 0;border-radius:8.44px;background:#1935ca66;-webkit-backdrop-filter:blur(27.0135364532px);backdrop-filter:blur(27.0135364532px);text-align:center;bottom:30px;right:24px;left:24px;color:#fff}"]})}}return t})();var T=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=a({type:t,selectors:[["app-quizes"]],standalone:!0,features:[l],decls:4,vars:0,consts:[[1,"container","bg-container"]],template:function(i,b){i&1&&(r(0,"div",0)(1,"h1"),p(2,"Quizes"),n(),s(3,"app-quizes-cards"),n())},dependencies:[P],styles:[".bg-container[_ngcontent-%COMP%]{box-shadow:0 15px 40px #0000000d;background-color:#fff;border-radius:20px}h1[_ngcontent-%COMP%]{color:var(--main-color);font-family:Poppins;font-size:24px;font-weight:500}"]})}}return t})();export{T as QuizesComponent};
