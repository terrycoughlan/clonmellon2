"use strict";(self.webpackChunkclonmellon=self.webpackChunkclonmellon||[]).push([[270],{2270:(y,m,e)=>{e.r(m),e.d(m,{SupportModule:()=>l,routes:()=>x});var u=e(6895),r=e(9132),v=e(4163),d=e(4333),f=e(2887),t=e(4650),A=e(5412),Z=e(1576),h=e(4859),C=e(3546),T=e(7392),I=e(4850),U=e(266),S=e(6660);function O(n,i){if(1&n){const o=t.EpF();t.TgZ(0,"div",7)(1,"div",8),t._uU(2),t.qZA(),t.TgZ(3,"div",8),t._uU(4),t.ALo(5,"filterById"),t.qZA(),t.TgZ(6,"div",8),t._uU(7),t.qZA(),t.TgZ(8,"div",8),t._uU(9),t.qZA(),t.TgZ(10,"div",8),t._uU(11),t.qZA(),t.TgZ(12,"div",8),t._uU(13),t.ALo(14,"filterById"),t.qZA(),t.TgZ(15,"div",8),t._uU(16),t.ALo(17,"filterById"),t.qZA(),t.TgZ(18,"div",8),t._uU(19),t.ALo(20,"date"),t.qZA(),t.TgZ(21,"div",8)(22,"div",9)(23,"button",10)(24,"mat-icon"),t._uU(25,"reply_all"),t.qZA()(),t.TgZ(26,"button",11),t.NdJ("click",function(){const p=t.CHM(o).$implicit,g=t.oxw();return t.KtG(g.remove(p))}),t.TgZ(27,"mat-icon"),t._uU(28,"delete"),t.qZA()()()()()}if(2&n){const o=i.$implicit,s=t.oxw();let a,p,g;t.xp6(2),t.Oqu(o.code),t.xp6(2),t.Oqu(null==(a=t.xi3(5,8,s.spportCategories,o.supportCategoryId))?null:a.name),t.xp6(3),t.Oqu(o.issue),t.xp6(2),t.hij("Order ",o.order,""),t.xp6(2),t.Oqu(o.customer),t.xp6(2),t.Oqu(null==(p=t.xi3(14,11,s.stores,o.storeId))?null:p.name),t.xp6(3),t.Oqu(null==(g=t.xi3(17,14,s.statuses,o.statusId))?null:g.name),t.xp6(3),t.Oqu(t.xi3(20,17,o.date,"dd MMMM, yyyy 'at' HH:mm"))}}function w(n,i){if(1&n){const o=t.EpF();t.TgZ(0,"div",12)(1,"div",13)(2,"mat-card",14)(3,"pagination-controls",15),t.NdJ("pageChange",function(a){t.CHM(o);const p=t.oxw();return t.KtG(p.onPageChanged(a))}),t.qZA()()()()}}const q=function(n,i){return{itemsPerPage:n,currentPage:i}};class c{constructor(i){this.dialog=i,this.tickets=[{id:1,statusId:1,code:"#000625",supportCategoryId:1,issue:"lorem ipsum",order:"#1556",customer:"Andy Warhol",storeId:1,date:new Date(2020,1,15,10,45)},{id:2,statusId:2,code:"#002350",supportCategoryId:2,issue:"lorem ipsum",order:"#5214",customer:"Luisa Styles",storeId:2,date:new Date(2020,2,8,22,12)},{id:3,statusId:3,code:"#007852",supportCategoryId:3,issue:"lorem ipsum",order:"#4285",customer:"Michael Blair",storeId:2,date:new Date(2020,3,29,14,30)},{id:4,statusId:4,code:"#009621",supportCategoryId:4,issue:"lorem ipsum",order:"#3658",customer:"Julia Aniston",storeId:1,date:new Date(2020,4,18,8,20)}],this.statuses=[{id:1,name:"In Progress"},{id:2,name:"Pending"},{id:3,name:"Solved"},{id:4,name:"Closed"}],this.spportCategories=[{id:1,name:"Pre-Sale Question"},{id:2,name:"Order Question"},{id:3,name:"Shipping"},{id:4,name:"Product Availability"}],this.stores=[{id:1,name:"Store 1"},{id:2,name:"Store 2"}],this.count=6}ngOnInit(){}onPageChanged(i){this.page=i,window.scrollTo(0,0)}remove(i){this.dialog.open(f.$,{maxWidth:"400px",data:{title:"Confirm Action",message:"Are you sure you want remove this ticket?"}}).afterClosed().subscribe(s=>{if(s){const a=this.tickets.indexOf(i);-1!==a&&this.tickets.splice(a,1)}})}}c.\u0275fac=function(i){return new(i||c)(t.Y36(A.uw))},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-support"]],decls:28,vars:8,consts:[[1,"p-2"],["fxLayout","row wrap","fxLayoutAlign","space-between center",1,"w-100","p-3"],[1,"mat-mdc-table","admin-table"],[1,"mat-mdc-header-row"],[1,"mat-mdc-header-cell"],["class","mat-mdc-row",4,"ngFor","ngForOf"],["fxLayout","row wrap",4,"ngIf"],[1,"mat-mdc-row"],[1,"mat-mdc-cell"],[1,"p-2","actions"],["mat-mini-fab","","color","primary","matTooltip","Reply"],["mat-mini-fab","","color","warn","matTooltip","Delete",1,"mx-1",3,"click"],["fxLayout","row wrap"],["fxFlex","100"],[1,"text-center"],["autoHide","true","maxSize","5",1,"product-pagination",3,"pageChange"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0)(1,"mat-card")(2,"div",1)(3,"h2"),t._uU(4,"Support Tickets"),t.qZA()(),t._UZ(5,"mat-divider"),t.TgZ(6,"div",2)(7,"div",3)(8,"div",4),t._uU(9,"Ticket"),t.qZA(),t.TgZ(10,"div",4),t._uU(11,"Category"),t.qZA(),t.TgZ(12,"div",4),t._uU(13,"Issue"),t.qZA(),t.TgZ(14,"div",4),t._uU(15,"Item"),t.qZA(),t.TgZ(16,"div",4),t._uU(17,"Customer"),t.qZA(),t.TgZ(18,"div",4),t._uU(19,"Store"),t.qZA(),t.TgZ(20,"div",4),t._uU(21,"Status"),t.qZA(),t.TgZ(22,"div",4),t._uU(23,"Date"),t.qZA(),t._UZ(24,"div",4),t.qZA(),t.YNc(25,O,29,20,"div",5),t.ALo(26,"paginate"),t.qZA()(),t.YNc(27,w,4,0,"div",6),t.qZA()),2&i&&(t.xp6(25),t.Q6J("ngForOf",t.xi3(26,2,o.tickets,t.WLB(5,q,o.count,o.page))),t.xp6(2),t.Q6J("ngIf",o.tickets.length>0))},dependencies:[u.sg,u.O5,Z.xw,Z.Wh,Z.yH,h.nh,C.a8,T.Hw,I.d,U.gM,d.LS,u.uU,S.H,d._s]});const x=[{path:"",component:c,pathMatch:"full"}];class l{}l.\u0275fac=function(i){return new(i||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[u.ez,r.Bz.forChild(x),v.m,d.JX]})},6660:(y,m,e)=>{e.d(m,{H:()=>r});var u=e(4650);class r{transform(d,f){return d.filter(t=>t.id==f)[0]}}r.\u0275fac=function(d){return new(d||r)},r.\u0275pipe=u.Yjl({name:"filterById",type:r,pure:!0})}}]);