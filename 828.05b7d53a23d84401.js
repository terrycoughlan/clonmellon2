"use strict";(self.webpackChunkclonmellon=self.webpackChunkclonmellon||[]).push([[828],{8828:(Zr,A,i)=>{i.r(A),i.d(A,{AccountModule:()=>u,routes:()=>I});var m=i(6895),l=i(9132),t=i(4006),N=i(4163),r=i(4650),s=i(1576),T=i(5829),d=i(4859),v=i(7392),q=i(3267);const U=["sidenav"],x=function(){return{exact:!0}};function y(o,n){if(1&o&&(r.ynx(0),r.TgZ(1,"a",7)(2,"mat-icon"),r._uU(3),r.qZA(),r._uU(4),r.qZA(),r.BQk()),2&o){const e=n.$implicit;r.xp6(1),r.Q6J("routerLink",e.href)("routerLinkActiveOptions",r.DdM(4,x)),r.xp6(2),r.Oqu(e.icon),r.xp6(1),r.hij(" ",e.name," ")}}function O(o,n){if(1&o){const e=r.EpF();r.TgZ(0,"button",8),r.NdJ("click",function(){r.CHM(e),r.oxw();const _r=r.MAs(2);return r.KtG(_r.toggle())}),r.TgZ(1,"mat-icon"),r._uU(2,"more_vert"),r.qZA()()}}class c{constructor(n){this.router=n,this.sidenavOpen=!0,this.links=[{name:"Account Dashboard",href:"dashboard",icon:"dashboard"},{name:"Account Information",href:"information",icon:"info"},{name:"Addresses",href:"addresses",icon:"location_on"},{name:"Order History",href:"orders",icon:"add_shopping_cart"},{name:"Logout",href:"/sign-in",icon:"power_settings_new"}]}ngOnInit(){window.innerWidth<960&&(this.sidenavOpen=!1)}onWindowResize(){this.sidenavOpen=!(window.innerWidth<960)}ngAfterViewInit(){this.router.events.subscribe(n=>{n instanceof l.m2&&window.innerWidth<960&&this.sidenav.close()})}}c.\u0275fac=function(n){return new(n||c)(r.Y36(l.F0))},c.\u0275cmp=r.Xpm({type:c,selectors:[["app-account"]],viewQuery:function(n,e){if(1&n&&r.Gf(U,7),2&n){let a;r.iGM(a=r.CRH())&&(e.sidenav=a.first)}},hostBindings:function(n,e){1&n&&r.NdJ("resize",function(){return e.onWindowResize()},!1,r.Jf7)},decls:11,vars:4,consts:[[1,"account-sidenav",3,"opened","mode"],["sidenav",""],[4,"ngFor","ngForOf"],["ngClass.gt-sm","p-left",1,"account-content"],["fxLayout","row","fxLayoutAlign","space-between center",1,"header-row","mat-elevation-z1","text-muted"],["mat-icon-button","",3,"click",4,"ngIf"],[1,"account-wrapper","mat-elevation-z1"],["mat-button","","routerLinkActive","horizontal-active-link",3,"routerLink","routerLinkActiveOptions"],["mat-icon-button","",3,"click"]],template:function(n,e){1&n&&(r.TgZ(0,"mat-sidenav-container")(1,"mat-sidenav",0,1),r.YNc(3,y,5,5,"ng-container",2),r.qZA(),r.TgZ(4,"mat-sidenav-content",3)(5,"div",4),r.YNc(6,O,3,0,"button",5),r.TgZ(7,"h3"),r._uU(8,"My Account"),r.qZA()(),r.TgZ(9,"div",6),r._UZ(10,"router-outlet"),r.qZA()()()),2&n&&(r.xp6(1),r.Q6J("opened",e.sidenavOpen)("mode",e.sidenavOpen?"side":"over"),r.xp6(2),r.Q6J("ngForOf",e.links),r.xp6(3),r.Q6J("ngIf",!e.sidenavOpen))},dependencies:[m.sg,m.O5,l.lC,l.rH,l.Od,s.xw,s.Wh,T.oO,d.zs,d.RK,v.Hw,q.JX,q.TM,q.Rh],styles:[".account-sidenav[_ngcontent-%COMP%]{width:280px;padding:2px}.account-sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:100%;place-content:flex-start;font-weight:500;height:42px}.account-content[_ngcontent-%COMP%]{min-height:400px;padding:2px;overflow:hidden}.account-content.p-left[_ngcontent-%COMP%]{padding-left:16px}.account-content[_ngcontent-%COMP%]   .header-row[_ngcontent-%COMP%]{background:#fff;padding:0 16px;height:56px}.account-content[_ngcontent-%COMP%]   .account-wrapper[_ngcontent-%COMP%]{margin-top:16px;padding:16px;background:#fff}"]});var Z=i(3546),P=i(3162);class p{constructor(){}ngOnInit(){}}p.\u0275fac=function(n){return new(n||p)},p.\u0275cmp=r.Xpm({type:p,selectors:[["app-dashboard"]],decls:62,vars:0,consts:[[1,"text-muted"],["fxLayout","row wrap",1,"flex-wrapper"],["fxFlex","33.3","fxFlex.sm","50","fxFlex.xs","100",1,"col"],["fxLayoutAlign","space-between center",1,"p-2","account-card-title"],[1,"m-0"],["mat-icon-button","","routerLink","/account/information"],[1,"divider"],[1,"p-2","text-muted","account-card-content"],["routerLink","/account/information",1,"primary-text"],["mat-icon-button","","routerLink","/account/addresses"],["fxFlex","33.3","fxFlex.sm","100","fxFlex.xs","100",1,"col"],["mat-icon-button","","routerLink","/account/orders"],[1,""],["value","75","color","primary"],[1,"mt-1"],["value","25","color","accent"],["value","65","color","warn"],["value","25","color","primary"]],template:function(n,e){1&n&&(r.TgZ(0,"p",0),r._uU(1,"Hello, "),r.TgZ(2,"b"),r._uU(3,"Terry Coughlan!"),r.qZA(),r._uU(4,"\nFrom your My Account Dashboard you have the ability to view a snapshot of your recent account activity and update your account information. Select a link below to view or edit information."),r.qZA(),r.TgZ(5,"div",1)(6,"div",2)(7,"mat-card")(8,"mat-card-header",3)(9,"mat-card-title",4)(10,"h3"),r._uU(11,"Account Information"),r.qZA()(),r.TgZ(12,"a",5)(13,"mat-icon",0),r._uU(14,"edit"),r.qZA()()(),r._UZ(15,"div",6),r.TgZ(16,"mat-card-content",7)(17,"p"),r._uU(18,"Terry Coughlan"),r.qZA(),r.TgZ(19,"p"),r._uU(20,"terry.coughlan@gmail.com"),r.qZA(),r.TgZ(21,"p")(22,"a",8),r._uU(23,"Change password"),r.qZA()()()()(),r.TgZ(24,"div",2)(25,"mat-card")(26,"mat-card-header",3)(27,"mat-card-title",4)(28,"h3"),r._uU(29,"Addresses"),r.qZA()(),r.TgZ(30,"a",9)(31,"mat-icon",0),r._uU(32,"edit"),r.qZA()()(),r._UZ(33,"div",6),r.TgZ(34,"mat-card-content",7)(35,"p"),r._uU(36,"Billing address"),r.qZA(),r.TgZ(37,"p"),r._uU(38,"Shipping address"),r.qZA()()()(),r.TgZ(39,"div",10)(40,"mat-card")(41,"mat-card-header",3)(42,"mat-card-title",4)(43,"h3"),r._uU(44,"Orders"),r.qZA()(),r.TgZ(45,"a",11)(46,"mat-icon",0),r._uU(47,"edit"),r.qZA()()(),r._UZ(48,"div",6),r.TgZ(49,"mat-card-content",7)(50,"p",12),r._uU(51,"Completed"),r.qZA(),r._UZ(52,"mat-progress-bar",13),r.TgZ(53,"p",14),r._uU(54,"Processing"),r.qZA(),r._UZ(55,"mat-progress-bar",15),r.TgZ(56,"p",14),r._uU(57,"On hold"),r.qZA(),r._UZ(58,"mat-progress-bar",16),r.TgZ(59,"p",14),r._uU(60,"Refunded"),r.qZA(),r._UZ(61,"mat-progress-bar",17),r.qZA()()()())},dependencies:[l.rH,s.xw,s.Wh,s.yH,d.o6,Z.a8,Z.dn,Z.dk,Z.n5,v.Hw,P.pW],styles:[".flex-wrapper[_ngcontent-%COMP%]{margin:8px -8px}.flex-wrapper[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]{padding:8px}.account-card-content[_ngcontent-%COMP%]{height:134px}.account-card-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.account-card-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}"]});var C=i(8955),b=i(7009),F=i(4144),h=i(9549);function J(o,n){1&o&&(r.TgZ(0,"mat-error"),r._uU(1,"First Name is required"),r.qZA())}function M(o,n){1&o&&(r.TgZ(0,"mat-error"),r._uU(1,"First Name isn't long enough, minimum of 3 characters"),r.qZA())}function k(o,n){1&o&&(r.TgZ(0,"mat-error"),r._uU(1,"Last Name is required"),r.qZA())}function Q(o,n){1&o&&(r.TgZ(0,"mat-error"),r._uU(1,"Last Name isn't long enough, minimum of 3 characters"),r.qZA())}function Y(o,n){1&o&&(r.TgZ(0,"mat-error"),r._uU(1,"Email is required"),r.qZA())}function S(o,n){1&o&&(r.TgZ(0,"mat-error"),r._uU(1,"Invalid email address"),r.qZA())}function L(o,n){1&o&&(r.TgZ(0,"mat-error"),r._uU(1,"Current Password is required"),r.qZA())}function B(o,n){1&o&&(r.TgZ(0,"mat-error"),r._uU(1,"Current Password isn't long enough, minimum of 6 characters"),r.qZA())}function z(o,n){1&o&&(r.TgZ(0,"mat-error"),r._uU(1,"New Password is required"),r.qZA())}function E(o,n){1&o&&(r.TgZ(0,"mat-error"),r._uU(1,"New Password isn't long enough, minimum of 6 characters"),r.qZA())}function H(o,n){1&o&&(r.TgZ(0,"mat-error"),r._uU(1,"Confirm New Password is required"),r.qZA())}function D(o,n){1&o&&(r.TgZ(0,"mat-error"),r._uU(1,"Passwords do not match"),r.qZA())}class f{constructor(n,e){this.formBuilder=n,this.snackBar=e}ngOnInit(){this.infoForm=this.formBuilder.group({firstName:["",t.kI.compose([t.kI.required,t.kI.minLength(3)])],lastName:["",t.kI.compose([t.kI.required,t.kI.minLength(3)])],email:["",t.kI.compose([t.kI.required,C.L])]}),this.passwordForm=this.formBuilder.group({currentPassword:["",t.kI.required],newPassword:["",t.kI.required],confirmNewPassword:["",t.kI.required]},{validator:(0,C.z)("newPassword","confirmNewPassword")})}onInfoFormSubmit(n){this.infoForm.valid&&this.snackBar.open("Your account information updated successfully!","\xd7",{panelClass:"success",verticalPosition:"top",duration:3e3})}onPasswordFormSubmit(n){this.passwordForm.valid&&this.snackBar.open("Your password changed successfully!","\xd7",{panelClass:"success",verticalPosition:"top",duration:3e3})}}f.\u0275fac=function(n){return new(n||f)(r.Y36(t.QS),r.Y36(b.ux))},f.\u0275cmp=r.Xpm({type:f,selectors:[["app-information"]],decls:39,vars:14,consts:[["fxLayout","row wrap"],["fxFlex","100","fxFlex.gt-sm","50",1,"p-2"],[1,"text-muted","text-center"],[3,"formGroup","ngSubmit"],[1,"w-100","mt-2"],["matInput","","placeholder","First Name","formControlName","firstName","required",""],[4,"ngIf"],[1,"w-100","mt-1"],["matInput","","placeholder","Last Name","formControlName","lastName","required",""],["matInput","","placeholder","Email","formControlName","email","required",""],[1,"text-center","mt-2"],["mat-raised-button","","color","primary",3,"click"],["fxFlex","100","fxFlex.gt-sm","50","ngClass.sm","mt-2","ngClass.xs","mt-2",1,"p-2"],["matInput","","placeholder","Current Password","formControlName","currentPassword","type","password","minlength","6","required",""],["matInput","","placeholder","New Password","formControlName","newPassword","type","password","minlength","6","required",""],["matInput","","placeholder","Confirm New Password","formControlName","confirmNewPassword","type","password","required",""]],template:function(n,e){1&n&&(r.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),r._uU(3,"Account details"),r.qZA(),r.TgZ(4,"form",3),r.NdJ("ngSubmit",function(){return e.onInfoFormSubmit(e.infoForm.value)}),r.TgZ(5,"mat-form-field",4),r._UZ(6,"input",5),r.YNc(7,J,2,0,"mat-error",6),r.YNc(8,M,2,0,"mat-error",6),r.qZA(),r.TgZ(9,"mat-form-field",7),r._UZ(10,"input",8),r.YNc(11,k,2,0,"mat-error",6),r.YNc(12,Q,2,0,"mat-error",6),r.qZA(),r.TgZ(13,"mat-form-field",7),r._UZ(14,"input",9),r.YNc(15,Y,2,0,"mat-error",6),r.YNc(16,S,2,0,"mat-error",6),r.qZA(),r.TgZ(17,"div",10)(18,"button",11),r.NdJ("click",function(){return e.onInfoFormSubmit(e.infoForm.value)}),r._uU(19,"Save"),r.qZA()()()(),r.TgZ(20,"div",12)(21,"h2",2),r._uU(22,"Password change"),r.qZA(),r.TgZ(23,"form",3),r.NdJ("ngSubmit",function(){return e.onPasswordFormSubmit(e.passwordForm.value)}),r.TgZ(24,"mat-form-field",4),r._UZ(25,"input",13),r.YNc(26,L,2,0,"mat-error",6),r.YNc(27,B,2,0,"mat-error",6),r.qZA(),r.TgZ(28,"mat-form-field",7),r._UZ(29,"input",14),r.YNc(30,z,2,0,"mat-error",6),r.YNc(31,E,2,0,"mat-error",6),r.qZA(),r.TgZ(32,"mat-form-field",7),r._UZ(33,"input",15),r.YNc(34,H,2,0,"mat-error",6),r.YNc(35,D,2,0,"mat-error",6),r.qZA(),r.TgZ(36,"div",10)(37,"button",11),r.NdJ("click",function(){return e.onPasswordFormSubmit(e.passwordForm.value)}),r._uU(38,"Change"),r.qZA()()()()()),2&n&&(r.xp6(4),r.Q6J("formGroup",e.infoForm),r.xp6(3),r.Q6J("ngIf",null==e.infoForm.controls.firstName.errors?null:e.infoForm.controls.firstName.errors.required),r.xp6(1),r.Q6J("ngIf",e.infoForm.controls.firstName.hasError("minlength")),r.xp6(3),r.Q6J("ngIf",null==e.infoForm.controls.lastName.errors?null:e.infoForm.controls.lastName.errors.required),r.xp6(1),r.Q6J("ngIf",e.infoForm.controls.lastName.hasError("minlength")),r.xp6(3),r.Q6J("ngIf",null==e.infoForm.controls.email.errors?null:e.infoForm.controls.email.errors.required),r.xp6(1),r.Q6J("ngIf",e.infoForm.controls.email.hasError("invalidEmail")),r.xp6(7),r.Q6J("formGroup",e.passwordForm),r.xp6(3),r.Q6J("ngIf",null==e.passwordForm.controls.currentPassword.errors?null:e.passwordForm.controls.currentPassword.errors.required),r.xp6(1),r.Q6J("ngIf",e.passwordForm.controls.currentPassword.hasError("minlength")),r.xp6(3),r.Q6J("ngIf",null==e.passwordForm.controls.newPassword.errors?null:e.passwordForm.controls.newPassword.errors.required),r.xp6(1),r.Q6J("ngIf",e.passwordForm.controls.newPassword.hasError("minlength")),r.xp6(3),r.Q6J("ngIf",null==e.passwordForm.controls.confirmNewPassword.errors?null:e.passwordForm.controls.confirmNewPassword.errors.required),r.xp6(1),r.Q6J("ngIf",e.passwordForm.controls.confirmNewPassword.hasError("mismatchedPasswords")))},dependencies:[m.O5,t._Y,t.Fj,t.JJ,t.JL,t.Q7,t.wO,t.sg,t.u,s.xw,s.yH,T.oO,d.lW,F.Nt,h.KE,h.TO]});var W=i(900),$=i(3238),G=i(4385),w=i(3848);function X(o,n){1&o&&(r.TgZ(0,"mat-error"),r._uU(1,"First name is required"),r.qZA())}function R(o,n){1&o&&(r.TgZ(0,"mat-error"),r._uU(1,"Last name is required"),r.qZA())}function j(o,n){1&o&&(r.TgZ(0,"mat-error"),r._uU(1,"Email is required"),r.qZA())}function K(o,n){1&o&&(r.TgZ(0,"mat-error"),r._uU(1,"Phone is required"),r.qZA())}function V(o,n){if(1&o&&(r.TgZ(0,"mat-option",24),r._uU(1),r.qZA()),2&o){const e=n.$implicit;r.Q6J("value",e),r.xp6(1),r.hij(" ",e.name," ")}}function rr(o,n){1&o&&(r.TgZ(0,"mat-error"),r._uU(1,"Country is required"),r.qZA())}function er(o,n){1&o&&(r.TgZ(0,"mat-error"),r._uU(1,"City is required"),r.qZA())}function or(o,n){1&o&&(r.TgZ(0,"mat-error"),r._uU(1,"Zip/Postal Code is required"),r.qZA())}function nr(o,n){1&o&&(r.TgZ(0,"mat-error"),r._uU(1,"Address is required"),r.qZA())}function tr(o,n){1&o&&(r.TgZ(0,"mat-error"),r._uU(1,"First name is required"),r.qZA())}function ir(o,n){1&o&&(r.TgZ(0,"mat-error"),r._uU(1,"Last name is required"),r.qZA())}function ar(o,n){1&o&&(r.TgZ(0,"mat-error"),r._uU(1,"Email is required"),r.qZA())}function sr(o,n){1&o&&(r.TgZ(0,"mat-error"),r._uU(1,"Phone is required"),r.qZA())}function mr(o,n){if(1&o&&(r.TgZ(0,"mat-option",24),r._uU(1),r.qZA()),2&o){const e=n.$implicit;r.Q6J("value",e),r.xp6(1),r.hij(" ",e.name," ")}}function lr(o,n){1&o&&(r.TgZ(0,"mat-error"),r._uU(1,"Country is required"),r.qZA())}function dr(o,n){1&o&&(r.TgZ(0,"mat-error"),r._uU(1,"City is required"),r.qZA())}function ur(o,n){1&o&&(r.TgZ(0,"mat-error"),r._uU(1,"Zip/Postal Code is required"),r.qZA())}function cr(o,n){1&o&&(r.TgZ(0,"mat-error"),r._uU(1,"Address is required"),r.qZA())}class g{constructor(n,e,a){this.appService=n,this.formBuilder=e,this.snackBar=a,this.countries=[]}ngOnInit(){this.countries=this.appService.getCountries(),this.billingForm=this.formBuilder.group({firstName:["",t.kI.required],lastName:["",t.kI.required],middleName:"",company:"",email:["",t.kI.required],phone:["",t.kI.required],country:["",t.kI.required],city:["",t.kI.required],state:"",zip:["",t.kI.required],address:["",t.kI.required]}),this.shippingForm=this.formBuilder.group({firstName:["",t.kI.required],lastName:["",t.kI.required],middleName:"",company:"",email:["",t.kI.required],phone:["",t.kI.required],country:["",t.kI.required],city:["",t.kI.required],state:"",zip:["",t.kI.required],address:["",t.kI.required]})}onBillingFormSubmit(n){this.billingForm.valid&&this.snackBar.open("Your billing address information updated successfully!","\xd7",{panelClass:"success",verticalPosition:"top",duration:3e3})}onShippingFormSubmit(n){this.shippingForm.valid&&this.snackBar.open("Your shipping address information updated successfully!","\xd7",{panelClass:"success",verticalPosition:"top",duration:3e3})}}g.\u0275fac=function(n){return new(n||g)(r.Y36(W.z),r.Y36(t.QS),r.Y36(b.ux))},g.\u0275cmp=r.Xpm({type:g,selectors:[["app-addresses"]],decls:99,vars:20,consts:[["label","Billing address"],[1,"p-2","mt-1"],[3,"formGroup","ngSubmit"],["fxLayout","row wrap"],["fxFlex","100","fxFlex.gt-sm","33.3",1,"px-1"],[1,"w-100"],["matInput","","placeholder","First name","formControlName","firstName","required",""],[4,"ngIf"],["matInput","","placeholder","Last name","formControlName","lastName","required",""],["matInput","","placeholder","Middle Name/Initial","formControlName","middleName"],["matInput","","placeholder","Company","formControlName","company"],["matInput","","placeholder","Email","formControlName","email","required",""],["matInput","","placeholder","Phone","formControlName","phone","required",""],["fxFlex","100","fxFlex.gt-sm","25",1,"px-1"],["placeholder","Country","formControlName","country","required",""],[3,"value",4,"ngFor","ngForOf"],["matInput","","placeholder","City","formControlName","city","required",""],["matInput","","placeholder","State/Province","formControlName","state"],["matInput","","placeholder","Zip/Postal Code","formControlName","zip","required",""],["fxFlex","100",1,"px-1"],["matInput","","placeholder","Address (street, apartment, suite, unit etc.)","formControlName","address","required",""],["fxFlex","100",1,"text-center","mt-2"],["mat-raised-button","","color","primary",3,"click"],["label","Shipping address"],[3,"value"]],template:function(n,e){1&n&&(r.TgZ(0,"mat-tab-group")(1,"mat-tab",0)(2,"div",1)(3,"form",2),r.NdJ("ngSubmit",function(){return e.onBillingFormSubmit(e.billingForm.value)}),r.TgZ(4,"div",3)(5,"div",4)(6,"mat-form-field",5),r._UZ(7,"input",6),r.YNc(8,X,2,0,"mat-error",7),r.qZA()(),r.TgZ(9,"div",4)(10,"mat-form-field",5),r._UZ(11,"input",8),r.YNc(12,R,2,0,"mat-error",7),r.qZA()(),r.TgZ(13,"div",4)(14,"mat-form-field",5),r._UZ(15,"input",9),r.qZA()(),r.TgZ(16,"div",4)(17,"mat-form-field",5),r._UZ(18,"input",10),r.qZA()(),r.TgZ(19,"div",4)(20,"mat-form-field",5),r._UZ(21,"input",11),r.YNc(22,j,2,0,"mat-error",7),r.qZA()(),r.TgZ(23,"div",4)(24,"mat-form-field",5),r._UZ(25,"input",12),r.YNc(26,K,2,0,"mat-error",7),r.qZA()(),r.TgZ(27,"div",13)(28,"mat-form-field",5)(29,"mat-select",14),r.YNc(30,V,2,2,"mat-option",15),r.qZA(),r.YNc(31,rr,2,0,"mat-error",7),r.qZA()(),r.TgZ(32,"div",13)(33,"mat-form-field",5),r._UZ(34,"input",16),r.YNc(35,er,2,0,"mat-error",7),r.qZA()(),r.TgZ(36,"div",13)(37,"mat-form-field",5),r._UZ(38,"input",17),r.qZA()(),r.TgZ(39,"div",13)(40,"mat-form-field",5),r._UZ(41,"input",18),r.YNc(42,or,2,0,"mat-error",7),r.qZA()(),r.TgZ(43,"div",19)(44,"mat-form-field",5),r._UZ(45,"input",20),r.YNc(46,nr,2,0,"mat-error",7),r.qZA()(),r.TgZ(47,"div",21)(48,"button",22),r.NdJ("click",function(){return e.onBillingFormSubmit(e.billingForm.value)}),r._uU(49,"Save"),r.qZA()()()()()(),r.TgZ(50,"mat-tab",23)(51,"div",1)(52,"form",2),r.NdJ("ngSubmit",function(){return e.onShippingFormSubmit(e.shippingForm.value)}),r.TgZ(53,"div",3)(54,"div",4)(55,"mat-form-field",5),r._UZ(56,"input",6),r.YNc(57,tr,2,0,"mat-error",7),r.qZA()(),r.TgZ(58,"div",4)(59,"mat-form-field",5),r._UZ(60,"input",8),r.YNc(61,ir,2,0,"mat-error",7),r.qZA()(),r.TgZ(62,"div",4)(63,"mat-form-field",5),r._UZ(64,"input",9),r.qZA()(),r.TgZ(65,"div",4)(66,"mat-form-field",5),r._UZ(67,"input",10),r.qZA()(),r.TgZ(68,"div",4)(69,"mat-form-field",5),r._UZ(70,"input",11),r.YNc(71,ar,2,0,"mat-error",7),r.qZA()(),r.TgZ(72,"div",4)(73,"mat-form-field",5),r._UZ(74,"input",12),r.YNc(75,sr,2,0,"mat-error",7),r.qZA()(),r.TgZ(76,"div",13)(77,"mat-form-field",5)(78,"mat-select",14),r.YNc(79,mr,2,2,"mat-option",15),r.qZA(),r.YNc(80,lr,2,0,"mat-error",7),r.qZA()(),r.TgZ(81,"div",13)(82,"mat-form-field",5),r._UZ(83,"input",16),r.YNc(84,dr,2,0,"mat-error",7),r.qZA()(),r.TgZ(85,"div",13)(86,"mat-form-field",5),r._UZ(87,"input",17),r.qZA()(),r.TgZ(88,"div",13)(89,"mat-form-field",5),r._UZ(90,"input",18),r.YNc(91,ur,2,0,"mat-error",7),r.qZA()(),r.TgZ(92,"div",19)(93,"mat-form-field",5),r._UZ(94,"input",20),r.YNc(95,cr,2,0,"mat-error",7),r.qZA()(),r.TgZ(96,"div",21)(97,"button",22),r.NdJ("click",function(){return e.onShippingFormSubmit(e.shippingForm.value)}),r._uU(98,"Save"),r.qZA()()()()()()()),2&n&&(r.xp6(3),r.Q6J("formGroup",e.billingForm),r.xp6(5),r.Q6J("ngIf",null==e.billingForm.controls.firstName.errors?null:e.billingForm.controls.firstName.errors.required),r.xp6(4),r.Q6J("ngIf",null==e.billingForm.controls.lastName.errors?null:e.billingForm.controls.lastName.errors.required),r.xp6(10),r.Q6J("ngIf",null==e.billingForm.controls.email.errors?null:e.billingForm.controls.email.errors.required),r.xp6(4),r.Q6J("ngIf",null==e.billingForm.controls.phone.errors?null:e.billingForm.controls.phone.errors.required),r.xp6(4),r.Q6J("ngForOf",e.countries),r.xp6(1),r.Q6J("ngIf",null==e.billingForm.controls.country.errors?null:e.billingForm.controls.country.errors.required),r.xp6(4),r.Q6J("ngIf",null==e.billingForm.controls.city.errors?null:e.billingForm.controls.city.errors.required),r.xp6(7),r.Q6J("ngIf",null==e.billingForm.controls.zip.errors?null:e.billingForm.controls.zip.errors.required),r.xp6(4),r.Q6J("ngIf",null==e.billingForm.controls.address.errors?null:e.billingForm.controls.address.errors.required),r.xp6(6),r.Q6J("formGroup",e.shippingForm),r.xp6(5),r.Q6J("ngIf",null==e.shippingForm.controls.firstName.errors?null:e.shippingForm.controls.firstName.errors.required),r.xp6(4),r.Q6J("ngIf",null==e.shippingForm.controls.lastName.errors?null:e.shippingForm.controls.lastName.errors.required),r.xp6(10),r.Q6J("ngIf",null==e.shippingForm.controls.email.errors?null:e.shippingForm.controls.email.errors.required),r.xp6(4),r.Q6J("ngIf",null==e.shippingForm.controls.phone.errors?null:e.shippingForm.controls.phone.errors.required),r.xp6(4),r.Q6J("ngForOf",e.countries),r.xp6(1),r.Q6J("ngIf",null==e.shippingForm.controls.country.errors?null:e.shippingForm.controls.country.errors.required),r.xp6(4),r.Q6J("ngIf",null==e.shippingForm.controls.city.errors?null:e.shippingForm.controls.city.errors.required),r.xp6(7),r.Q6J("ngIf",null==e.shippingForm.controls.zip.errors?null:e.shippingForm.controls.zip.errors.required),r.xp6(4),r.Q6J("ngIf",null==e.shippingForm.controls.address.errors?null:e.shippingForm.controls.address.errors.required))},dependencies:[m.sg,m.O5,t._Y,t.Fj,t.JJ,t.JL,t.Q7,t.sg,t.u,s.xw,s.yH,$.ey,d.lW,F.Nt,h.KE,h.TO,G.gD,w.uX,w.SP]});var pr=i(266);function fr(o,n){1&o&&(r.TgZ(0,"button",10)(1,"mat-icon"),r._uU(2,"receipt"),r.qZA()())}function gr(o,n){if(1&o&&(r.TgZ(0,"div",4)(1,"div",5)(2,"span",6),r._uU(3),r.qZA()(),r.TgZ(4,"div",5),r._uU(5),r.qZA(),r.TgZ(6,"div",5),r._uU(7),r.qZA(),r.TgZ(8,"div",5),r._uU(9),r.qZA(),r.TgZ(10,"div",5)(11,"div",7)(12,"button",8)(13,"mat-icon"),r._uU(14,"remove_red_eye"),r.qZA()(),r.YNc(15,fr,3,0,"button",9),r.qZA()()()),2&o){const e=n.$implicit;r.xp6(3),r.Oqu(e.number),r.xp6(2),r.Oqu(e.date),r.xp6(2),r.Oqu(e.status),r.xp6(2),r.Oqu(e.total),r.xp6(6),r.Q6J("ngIf",e.invoice)}}class _{constructor(){this.orders=[{number:"#3258",date:"March 29, 2018",status:"Completed",total:"$140.00 for 2 items",invoice:!0},{number:"#3145",date:"February 14, 2018",status:"On hold",total:"$255.99 for 1 item",invoice:!1},{number:"#2972",date:"January 7, 2018",status:"Processing",total:"$255.99 for 1 item",invoice:!0},{number:"#2971",date:"January 5, 2018",status:"Completed",total:"$73.00 for 1 item",invoice:!0},{number:"#1981",date:"December 24, 2017",status:"Pending Payment",total:"$285.00 for 2 items",invoice:!1},{number:"#1781",date:"September 3, 2017",status:"Refunded",total:"$49.00 for 2 items",invoice:!1}]}ngOnInit(){}}_.\u0275fac=function(n){return new(n||_)},_.\u0275cmp=r.Xpm({type:_,selectors:[["app-orders"]],decls:12,vars:1,consts:[[1,"mat-mdc-table","orders-table"],[1,"mat-mdc-header-row"],[1,"mat-mdc-header-cell"],["class","mat-mdc-row",4,"ngFor","ngForOf"],[1,"mat-mdc-row"],[1,"mat-mdc-cell"],[1,"order"],[1,"p-2","actions"],["mat-mini-fab","","color","primary","matTooltip","View"],["mat-mini-fab","","color","warn","matTooltip","View invoice","class","btn-invoice",4,"ngIf"],["mat-mini-fab","","color","warn","matTooltip","View invoice",1,"btn-invoice"]],template:function(n,e){1&n&&(r.TgZ(0,"div",0)(1,"div",1)(2,"div",2),r._uU(3,"Order"),r.qZA(),r.TgZ(4,"div",2),r._uU(5,"Date"),r.qZA(),r.TgZ(6,"div",2),r._uU(7,"Status"),r.qZA(),r.TgZ(8,"div",2),r._uU(9,"Total"),r.qZA(),r._UZ(10,"div",2),r.qZA(),r.YNc(11,gr,16,5,"div",3),r.qZA()),2&n&&(r.xp6(11),r.Q6J("ngForOf",e.orders))},dependencies:[m.sg,m.O5,d.nh,v.Hw,pr.gM],styles:[".orders-table.mat-mdc-table[_ngcontent-%COMP%]{display:block;overflow-x:auto}.orders-table.mat-mdc-table[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%], .orders-table.mat-mdc-table[_ngcontent-%COMP%]   .mat-mdc-header-row[_ngcontent-%COMP%]{display:flex;border-bottom-width:1px;border-bottom-style:solid;align-items:center;min-height:48px;padding:0 24px;min-width:870px}.orders-table.mat-mdc-table[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%], .orders-table.mat-mdc-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%]{flex:1;overflow:hidden;word-wrap:break-word}.orders-table.mat-mdc-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%]{font-size:14px}.orders-table.mat-mdc-table[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]{color:inherit;text-decoration:none;font-weight:500}.orders-table.mat-mdc-table[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%]   .btn-invoice[_ngcontent-%COMP%]{margin-left:8px}.orders-table.mat-mdc-table[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{text-align:right}"]});const I=[{path:"",component:c,children:[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"dashboard",component:p,data:{breadcrumb:"Dashboard"}},{path:"information",component:f,data:{breadcrumb:"Information"}},{path:"addresses",component:g,data:{breadcrumb:"Addresses"}},{path:"orders",component:_,data:{breadcrumb:"Orders"}}]}];class u{}u.\u0275fac=function(n){return new(n||u)},u.\u0275mod=r.oAB({type:u}),u.\u0275inj=r.cJS({imports:[m.ez,l.Bz.forChild(I),t.UX,N.m]})}}]);