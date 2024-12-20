import './polyfills.server.mjs';
import{a as R,b as $}from"./chunk-K4IBB2YG.mjs";import{c as j}from"./chunk-N6G2IXU4.mjs";import"./chunk-K3ND7XYO.mjs";import{B,q as A}from"./chunk-AGTXZYB7.mjs";import{$a as k,Bb as M,Ha as a,Ia as C,Ma as F,S as x,X as g,Xa as w,Za as d,_a as T,aa as h,cb as f,db as v,eb as b,fb as y,gb as i,hb as o,ib as m,ja as p,ka as u,mb as O,n as S,nb as _,ob as l,sb as D,tb as V,ub as z,wb as s,xb as P,yb as Q,zb as q}from"./chunk-MXOY6KQU.mjs";import"./chunk-VVCT4QZE.mjs";var L=(()=>{class e{static{this.getQuestions="https://exam.elevateegy.com/api/v1/questions?exam="}}return e})();var H=(()=>{class e{constructor(){}questionAdapt(t){return{questions:t.questions.map(n=>({answers:n.answers.map(r=>({answer:r.answer,key:r.key})),_id:n._id,correct:n.correct,question:n.question}))}}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var N=(()=>{class e{constructor(t,n){this._HttpClient=t,this._QuestionsAdapter=n}getQuestions(t){return this._HttpClient.get(L.getQuestions+t).pipe(S(n=>this._QuestionsAdapter.questionAdapt(n)))}static{this.\u0275fac=function(n){return new(n||e)(g(A),g(H))}}static{this.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var Y=["balls"];function Z(e,c){if(e&1){let t=O();i(0,"div",3)(1,"p"),s(2,"Instructions"),o(),i(3,"ul",5)(4,"li"),s(5,"Lorem ipsum dolor sit amet consectetur."),o(),i(6,"li"),s(7,"Lorem ipsum dolor sit amet consectetur."),o(),i(8,"li"),s(9,"Lorem ipsum dolor sit amet consectetur."),o(),i(10,"li"),s(11,"Lorem ipsum dolor sit amet consectetur."),o()(),i(12,"app-button",6),_("click",function(){p(t);let r=l();return u(r.startSection2())}),o()()}e&2&&(a(12),d("text","Start"))}function tt(e,c){if(e&1&&m(0,"span",null,0),e&2){let t=c.$index;T("background-color",t==0?"var(--main-color)":"")}}function et(e,c){if(e&1&&(i(0,"li"),m(1,"input",18),i(2,"label",19),s(3),o()()),e&2){let t=c.$implicit,n=l().$implicit;a(),d("id",t.answer)("name",n.question),a(),d("for",t.answer),a(),P(t.answer)}}function nt(e,c){if(e&1&&(i(0,"div")(1,"p"),s(2),o(),i(3,"ul"),b(4,et,4,4,"li",null,v),o()()),e&2){let t=c.$implicit,n=c.$index,r=l(2);k("hidden",n!==r.indexOfArray),a(2),P(t.question),a(2),y(t.answers)}}function it(e,c){if(e&1){let t=O();i(0,"div",7)(1,"div",8)(2,"span",9),s(3),o(),i(4,"span",10),m(5,"img",11),s(6),o()(),i(7,"div",12),b(8,tt,2,2,"span",13,v),o(),b(10,nt,6,3,"div",14,v),o(),i(12,"div",15)(13,"app-button",16),_("click",function(){p(t);let r=l();return u(r.backBtn())}),o(),i(14,"app-button",17),_("click",function(){p(t);let r=l();return u(r.nextBtn())}),o()()}if(e&2){let t=l();a(3),q("Question ",t.indexOfArray+1," of ",t.questionArray.length,""),a(),T("color",t.minutes<2?"#CE2711":""),a(2),q(" ",t.minutes,":",t.seconds," "),a(2),y(t.questionArray),a(2),y(t.questionArray),a(3),d("text","Back"),a(),d("text","Next")}}function ot(e,c){e&1&&(i(0,"div",4)(1,"h1"),s(2,"exam is done"),o()())}var U=(()=>{class e{constructor(t,n){this._QuestionsService=t,this._Renderer2=n,this.section1=!0,this.section2=!1,this.section3=!1,this.minutes=15,this.seconds=0,this.questionArray=[],this.indexOfArray=0}startSection2(){this.section1=!1,this.section2=!0,this._QuestionsService.getQuestions(this.examId).subscribe({next:t=>{console.log(t.questions),this.questionArray=t.questions,console.log(this.balls),this.startCountdown()},error:t=>{console.log(t)}})}startCountdown(){this.countdownInterval=setInterval(()=>{this.seconds===0?this.minutes===0?(clearInterval(this.countdownInterval),this.section2=!1,this.section3=!0):(this.minutes--,this.seconds=59):this.seconds--},1e3)}nextBtn(){this.indexOfArray<this.questionArray.length-1&&(this.indexOfArray=this.indexOfArray+1,this._Renderer2.setStyle(this.balls.get(this.indexOfArray)?.nativeElement,"background-color","var(--main-color)"))}backBtn(){this.indexOfArray>0&&(this._Renderer2.removeStyle(this.balls.get(this.indexOfArray)?.nativeElement,"background-color"),this.indexOfArray=this.indexOfArray-1)}static{this.\u0275fac=function(n){return new(n||e)(C(N),C(F))}}static{this.\u0275cmp=h({type:e,selectors:[["app-modal"]],viewQuery:function(n,r){if(n&1&&D(Y,5),n&2){let E;V(E=z())&&(r.balls=E)}},inputs:{examId:"examId"},standalone:!0,features:[M],decls:5,vars:3,consts:[["balls",""],[1,"modal__parent"],[1,"diploma__modal"],[1,"section1"],[1,"section3"],[1,"block","list-disc","mb-3"],[3,"click","text"],[1,"section2"],[1,"flex","justify-content-between","align-items-center"],[1,"question_number"],[1,"timer","flex","align-items-center"],["src","./assets/images/image 2.png","alt",""],[1,"balls","pt-4","pb-3","flex","justify-content-between"],[3,"background-color"],[3,"hidden"],[1,"flex","gap-6","mt-4"],[1,"btn__back","w-full",3,"click","text"],[1,"btn__next","w-full",3,"click","text"],["type","radio",3,"id","name"],[3,"for"]],template:function(n,r){n&1&&(i(0,"div",1)(1,"div",2),w(2,Z,13,1,"div",3)(3,it,15,8)(4,ot,3,0,"div",4),o()()),n&2&&(a(2),f(2,r.section1?2:-1),a(),f(3,r.section2?3:-1),a(),f(4,r.section3?4:-1))},dependencies:[j],styles:[".modal__parent[_ngcontent-%COMP%]{position:absolute;width:100%;height:100vh;top:0;left:0;background-color:#0000002d;display:flex;justify-content:center;align-items:center;z-index:10}.diploma__modal[_ngcontent-%COMP%]{width:40%;background-color:#fff;border-radius:20px;padding:24px;box-shadow:0 1px 10px #00000040}.section1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Inter;font-size:24px;font-weight:500;margin:0}.section1[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:10px 15px 10px 0;font-family:Inter;font-size:20px;font-weight:500;margin-left:35px}.section2[_ngcontent-%COMP%]   .question_number[_ngcontent-%COMP%]{font-family:Roboto;font-size:14px;font-weight:500;color:#4461f2}.section2[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%]{color:#11ce19;gap:8px}.section2[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:24px}.section2[_ngcontent-%COMP%]   .balls[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:10px;height:10px;display:block;background-color:#d9d9d9;border-radius:50%}.section2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Inter;font-size:24px;font-weight:500}.section2[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:block}.section2[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background-color:#edeff3;width:100%;border-radius:10px;padding:16px 8px;margin-bottom:10px;cursor:auto}.section2[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-right:10px;cursor:pointer}.section2[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{cursor:pointer}  .btn__back button{background-color:#fff;border:1px solid var(--main-color);color:var(--main-color)}@media (max-width: 992px){.diploma__modal[_ngcontent-%COMP%]{width:80%}}@media (max-width: 576px){.diploma__modal[_ngcontent-%COMP%]{width:100%}}"]})}}return e})();var G=(()=>{class e{constructor(t,n){this._HttpClient=t,this._ExamsAdapter=n}getAllExamsOnSubject(t){return this._HttpClient.get(R.allExamsOnSubject+t).pipe(S(n=>this._ExamsAdapter.getExamOnSubject(n)))}static{this.\u0275fac=function(n){return new(n||e)(g(A),g($))}}static{this.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function rt(e,c){e&1&&m(0,"div",4)}function st(e,c){if(e&1){let t=O();i(0,"div",2)(1,"figure",3),w(2,rt,1,0,"div",4),i(3,"img",5),_("load",function(){p(t);let r=l();return u(r.imageLoaded=!0)}),o()(),i(4,"div")(5,"h3",6),s(6),o(),i(7,"span"),s(8),o()()(),i(9,"div",7)(10,"span"),s(11),o(),i(12,"app-button",8),_("click",function(){let r=p(t).$implicit,E=l();return u(E.startQuiz(r._id))}),o()()}if(e&2){let t=c.$implicit,n=l();a(2),f(2,n.imageLoaded?-1:2),a(),k("hidden",!n.imageLoaded),a(3),P(t.title),a(2),Q(" ",t.numberOfQuestions," Quistion "),a(3),Q("",t.duration," minutes"),a(),d("text","Start")("divClasses","mt-1")("classes","w-fit pt-1 pb-1 ")}}function ct(e,c){e&1&&(i(0,"div"),s(1,"There are no exams in this section at the moment."),o())}function lt(e,c){if(e&1&&m(0,"app-modal",1),e&2){let t=l();d("examId",t.selectedExamId)}}var J=(()=>{class e{constructor(t,n){this._ActivatedRoute=t,this._ExmasService=n,this.modal=!1,this.imageLoaded=!1}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:t=>{this.subjectParamId=t.get("id")}}),this._ExmasService.getAllExamsOnSubject(this.subjectParamId).subscribe({next:t=>{console.log(t.exams),this.diplomaRes=t.exams}})}startQuiz(t){this.selectedExamId=t,this.modal=!0}static{this.\u0275fac=function(n){return new(n||e)(C(B),C(G))}}static{this.\u0275cmp=h({type:e,selectors:[["app-diploma-cards"]],standalone:!0,features:[M],decls:5,vars:2,consts:[[1,"diploma","flex","justify-content-between"],[3,"examId"],[1,"flex","align-items-center","gap-3"],[1,"placeholder-container"],[1,"custom-placeholder"],["alt","Product Image",3,"load","src"],[1,"m-0"],[1,"text-center"],[3,"click","text","divClasses","classes"]],template:function(n,r){n&1&&(i(0,"div",0),b(1,st,13,9,null,null,v,!1,ct,2,0,"div"),o(),w(4,lt,1,1,"app-modal",1)),n&2&&(a(),y(r.diplomaRes),a(3),f(4,r.modal?4:-1))},dependencies:[j,U],styles:['@charset "UTF-8";.diploma[_ngcontent-%COMP%]{padding:16px 24px;gap:24px;border-radius:10px;background-color:#fff}h3[_ngcontent-%COMP%]{font-family:Inter;font-size:16px;font-weight:500}span[_ngcontent-%COMP%]{font-family:Inter;font-size:13px;font-weight:400;color:#535353}.placeholder-container[_ngcontent-%COMP%]{width:70px;height:70px;position:relative;overflow:hidden;background-color:#e0e0e0;border-radius:5px}.custom-placeholder[_ngcontent-%COMP%]{width:100%;height:100%;background:linear-gradient(to right,#e0e0e0,#f5f5f5,#e0e0e0);background-size:200% 100%;animation:_ngcontent-%COMP%_shimmer 1.5s infinite}@keyframes _ngcontent-%COMP%_shimmer{0%{background-position:-200% 0}to{background-position:200% 0}}']})}}return e})();var Mt=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=h({type:e,selectors:[["app-diploma"]],standalone:!0,features:[M],decls:3,vars:0,template:function(n,r){n&1&&(i(0,"h1"),s(1,"Front-End Quiz"),o(),m(2,"app-diploma-cards"))},dependencies:[J],styles:["h1[_ngcontent-%COMP%]{font-family:Inter;font-size:18px;font-weight:500;line-height:21.78px}"]})}}return e})();export{Mt as DiplomaComponent};