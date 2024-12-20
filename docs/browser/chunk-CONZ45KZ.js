import{a as K}from"./chunk-GQX7I2UA.js";import{b as J}from"./chunk-NNJS5C44.js";import{a as z,b as O,c as V,d as Z,e as U,f as B}from"./chunk-UTW2SPDG.js";import"./chunk-JED2XIVW.js";import{b as M,c as t,d as P,e as q,f as A,g as u,h as k,i as G,j as R,l as L,m as D,n as $,o as H}from"./chunk-ADPH24XE.js";import{c as j}from"./chunk-FC7JWW5L.js";import{g as I}from"./chunk-MEDQAGYX.js";import{s as T,t as N}from"./chunk-GHB5YFEX.js";import{Cb as E,Db as e,Eb as y,Fb as g,Gb as S,Hb as b,Ia as s,Ja as h,Ya as F,_a as a,ab as x,da as _,db as w,hb as n,ib as p,jb as l,ob as C,xb as f}from"./chunk-LUDRP624.js";var W=()=>({text:"User Name is required",error:"required"}),X=()=>({text:"Enter a letter and number only and no spaces",error:"pattern"}),Y=()=>({text:"min length is 4",error:"minlength"}),ee=()=>({text:"max length is 20",error:"maxlength"}),re=(o,c,i,m)=>[o,c,i,m],te=()=>({text:"First Name is required",error:"required"}),Q=()=>({text:"Enter letters only",error:"pattern"}),v=(o,c)=>[o,c],oe=()=>({text:"Last Name is required",error:"required"}),ie=()=>({text:"Email is required",error:"required"}),ne=()=>({text:"Enter Valid Email",error:"email"}),se=()=>({text:"Password is required",error:"required"}),ae=()=>({text:"At least one uppercase letter.",error:"pattern"}),pe=()=>({text:"At least one lowercase letter.",error:"pattern"}),me=()=>({text:"At least one number.",error:"pattern"}),le=()=>({text:"At least one special character.",error:"pattern"}),ue=()=>({text:"The text must be at least 8 characters long.",error:"pattern"}),ce=(o,c,i,m,r,d)=>[o,c,i,m,r,d],de=()=>({text:"rePassword is required",error:"required"}),fe=o=>[o],ge=()=>({text:"phone is required",error:"required"}),he=()=>({text:"Enter egyption phone number",error:"pattern"});function ve(o,c){o&1&&(n(0,"div"),f(1,"Password is not matching"),p())}function Fe(o,c){o&1&&(n(0,"p-messages",12),F(1,ve,2,0,"ng-template",18),p())}var Ie=(()=>{class o{constructor(i,m,r){this._AuthLipService=i,this._Router=m,this._ToasterNgService=r,this.registerForm=new A({username:new u(null,[t.required,t.pattern(/^[a-zA-Z0-9]+$/),t.minLength(4),t.maxLength(20)]),firstName:new u(null,[t.required,t.pattern(/^[a-zA-Z]+$/)]),lastName:new u(null,[t.required,t.pattern(/^[a-zA-Z]+$/)]),email:new u(null,[t.required,t.email]),password:new u(null,[t.required,t.minLength(6),t.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]),rePassword:new u(null,[t.required]),phone:new u(null,[t.required,t.pattern(/^01[0125][0-9]{8}$/)])},this.confirmPassword),this.isDisabled=!1}confirmPassword(i){return i.get("password")?.value===i.get("rePassword")?.value?null:{mismatch:!0}}registerSumbit(){this.registerForm.valid?(this.isDisabled=!0,this._AuthLipService.register(this.registerForm.value).subscribe({next:i=>{this._ToasterNgService.toasterSecsses(i.message),this.isDisabled=!1,console.log(i),this.errMessage="",this._Router.navigate(["/auth/login"])},error:i=>{this.isDisabled=!1,this.errMessage=i.error.message}})):this.registerForm.markAllAsTouched()}static{this.\u0275fac=function(m){return new(m||o)(h(H),h(T),h(K))}}static{this.\u0275cmp=_({type:o,selectors:[["app-register"]],standalone:!0,features:[E],decls:35,vars:78,consts:[[1,"register"],[1,"inner"],[3,"ngSubmit","formGroup"],[1,"gap-5","flex","flex-column"],[1,"card"],["pInputText","","formControlName","username","type","text","placeholder","Username",1,"w-full"],[3,"errorText","formGroupErr","formControlErr"],["pInputText","","formControlName","firstName","type","text","placeholder","First Name",1,"w-full"],["pInputText","","formControlName","lastName","type","text","placeholder","Last Name",1,"w-full"],["pInputText","","formControlName","email","type","email","placeholder","Email",1,"w-full"],["formControlName","password","placeholder","Password",3,"toggleMask","feedback"],["formControlName","rePassword","placeholder","Confirm Password",3,"toggleMask","feedback"],["severity","error"],["pInputText","","formControlName","phone","type","tel","placeholder","phone number",1,"w-full"],[1,"text-center","pt-3"],[3,"apiResponeErr"],["routerLink","/auth/login",1,"cursor-pointer"],[3,"text","classes","divClasses"],["pTemplate",""]],template:function(m,r){if(m&1&&(n(0,"div",0)(1,"div",1)(2,"h1"),f(3,"Sign up"),p(),n(4,"form",2),C("ngSubmit",function(){return r.registerSumbit()}),n(5,"div",3)(6,"div",4),l(7,"input",5)(8,"app-error-message",6),p(),n(9,"div",4),l(10,"input",7)(11,"app-error-message",6),p(),n(12,"div",4),l(13,"input",8)(14,"app-error-message",6),p(),n(15,"div",4),l(16,"input",9)(17,"app-error-message",6),p(),n(18,"div",4),l(19,"p-password",10)(20,"app-error-message",6),p(),n(21,"div",4),l(22,"p-password",11)(23,"app-error-message",6),F(24,Fe,2,0,"p-messages",12),p(),n(25,"div",4),l(26,"input",13)(27,"app-error-message",6),n(28,"div",14),l(29,"app-api-response-error",15),n(30,"span"),f(31,"Already have an account? "),n(32,"a",16),f(33,"Login"),p()()()(),l(34,"app-button",17),p()()()()),m&2){let d;s(4),a("formGroup",r.registerForm),s(4),a("errorText",S(37,re,e(33,W),e(34,X),e(35,Y),e(36,ee)))("formGroupErr",r.registerForm)("formControlErr","username"),s(3),a("errorText",g(44,v,e(42,te),e(43,Q)))("formGroupErr",r.registerForm)("formControlErr","firstName"),s(3),a("errorText",g(49,v,e(47,oe),e(48,Q)))("formGroupErr",r.registerForm)("formControlErr","lastName"),s(3),a("errorText",g(54,v,e(52,ie),e(53,ne)))("formGroupErr",r.registerForm)("formControlErr","email"),s(2),a("toggleMask",!0)("feedback",!1),s(),a("errorText",b(63,ce,e(57,se),e(58,ae),e(59,pe),e(60,me),e(61,le),e(62,ue)))("formGroupErr",r.registerForm)("formControlErr","password"),s(2),a("toggleMask",!0)("feedback",!1),s(),a("errorText",y(71,fe,e(70,de)))("formGroupErr",r.registerForm)("formControlErr","rePassword"),s(),w(24,r.registerForm.getError("mismatch")&&((d=r.registerForm.get("rePassword"))!=null&&d.touched)?24:-1),s(3),a("errorText",g(75,v,e(73,ge),e(74,he)))("formGroupErr",r.registerForm)("formControlErr","phone"),s(2),a("apiResponeErr",r.errMessage),s(5),x("disabled",r.isDisabled),a("text","Create Account")("classes","w-full")("divClasses","pb-4")}},dependencies:[J,I,L,k,M,P,q,G,R,j,O,z,$,D,U,Z,V,N,B],styles:["h1[_ngcontent-%COMP%]{font-size:24.78px;line-height:29.99px}input[_ngcontent-%COMP%]{box-shadow:0 10px 20px #4461f20d}.register[_ngcontent-%COMP%]{display:flex;justify-content:center}.inner[_ngcontent-%COMP%]{min-width:50%}a[_ngcontent-%COMP%]{color:var(--main-color);text-decoration:none;font-family:Poppins}  .p-password{display:block}  input{width:100%;background-color:#f9f9f9}"]})}}return o})();export{Ie as RegisterComponent};