"use strict";(self.webpackChunkclonmellon=self.webpackChunkclonmellon||[]).push([[351],{7351:(w,g,o)=>{o.r(g),o.d(g,{FollowersModule:()=>r,routes:()=>h});var d=o(6895),l=o(9132),p=o(4163),s=o(4333),f=o(2887),e=o(4650),x=o(5412),u=o(1576),Z=o(4859),A=o(3546),C=o(7392),F=o(4850),y=o(266),T=o(6660);function I(n,t){if(1&n){const a=e.EpF();e.TgZ(0,"div",8)(1,"div",9),e._UZ(2,"img",10),e.qZA(),e.TgZ(3,"div",11),e._uU(4),e.qZA(),e.TgZ(5,"div",11),e._uU(6),e.ALo(7,"filterById"),e.qZA(),e.TgZ(8,"div",11)(9,"div",12)(10,"button",13),e.NdJ("click",function(){const v=e.CHM(a).$implicit,U=e.oxw();return e.KtG(U.remove(v))}),e.TgZ(11,"mat-icon"),e._uU(12,"delete"),e.qZA()()()()()}if(2&n){const a=t.$implicit,c=e.oxw();let i;e.xp6(2),e.Q6J("src",a.image,e.LSH),e.xp6(2),e.Oqu(a.name),e.xp6(2),e.Oqu(null==(i=e.xi3(7,3,c.stores,a.storeId))?null:i.name)}}function L(n,t){if(1&n){const a=e.EpF();e.TgZ(0,"div",14)(1,"div",15)(2,"mat-card",16)(3,"pagination-controls",17),e.NdJ("pageChange",function(i){e.CHM(a);const v=e.oxw();return e.KtG(v.onPageChanged(i))}),e.qZA()()()()}}const M=function(n,t){return{itemsPerPage:n,currentPage:t}};class m{constructor(t){this.dialog=t,this.followers=[{id:1,image:"assets/images/profile/michael.jpg",name:"Michael Blair",storeId:1},{id:2,image:"assets/images/profile/tereza.jpg",name:"Tereza Stiles",storeId:2},{id:3,image:"assets/images/profile/adam.jpg",name:"Adam Sandler",storeId:1},{id:4,image:"assets/images/profile/julia.jpg",name:"Julia Aniston",storeId:2},{id:5,image:"assets/images/profile/bruno.jpg",name:"Bruno Vespa",storeId:2},{id:6,image:"assets/images/profile/ashley.jpg",name:"Ashley Ahlberg",storeId:1},{id:7,image:"assets/images/avatars/avatar-5.png",name:"Michelle Ormond",storeId:1}],this.stores=[{id:1,name:"Store 1"},{id:2,name:"Store 2"}],this.count=6}ngOnInit(){}onPageChanged(t){this.page=t,window.scrollTo(0,0)}remove(t){this.dialog.open(f.$,{maxWidth:"400px",data:{title:"Confirm Action",message:"Are you sure you want remove this follower?"}}).afterClosed().subscribe(c=>{if(c){const i=this.followers.indexOf(t);-1!==i&&this.followers.splice(i,1)}})}}m.\u0275fac=function(t){return new(t||m)(e.Y36(x.uw))},m.\u0275cmp=e.Xpm({type:m,selectors:[["app-followers"]],decls:18,vars:8,consts:[[1,"p-2"],["fxLayout","row wrap","fxLayoutAlign","space-between center",1,"w-100","p-3"],[1,"mat-mdc-table","admin-table"],[1,"mat-mdc-header-row"],[1,"mat-mdc-header-cell","image"],[1,"mat-mdc-header-cell"],["class","mat-mdc-row",4,"ngFor","ngForOf"],["fxLayout","row wrap",4,"ngIf"],[1,"mat-mdc-row"],[1,"mat-mdc-cell","image"],["alt","","width","50",3,"src"],[1,"mat-mdc-cell"],[1,"p-2","actions"],["mat-mini-fab","","color","warn","matTooltip","Delete",1,"mx-1",3,"click"],["fxLayout","row wrap"],["fxFlex","100"],[1,"text-center"],["autoHide","true","maxSize","5",1,"product-pagination",3,"pageChange"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"mat-card")(2,"div",1)(3,"h2"),e._uU(4,"Followers List"),e.qZA()(),e._UZ(5,"mat-divider"),e.TgZ(6,"div",2)(7,"div",3)(8,"div",4),e._uU(9,"Image"),e.qZA(),e.TgZ(10,"div",5),e._uU(11,"Name"),e.qZA(),e.TgZ(12,"div",5),e._uU(13,"Store"),e.qZA(),e._UZ(14,"div",5),e.qZA(),e.YNc(15,I,13,6,"div",6),e.ALo(16,"paginate"),e.qZA()(),e.YNc(17,L,4,0,"div",7),e.qZA()),2&t&&(e.xp6(15),e.Q6J("ngForOf",e.xi3(16,2,a.followers,e.WLB(5,M,a.count,a.page))),e.xp6(2),e.Q6J("ngIf",a.followers.length>0))},dependencies:[d.sg,d.O5,u.xw,u.Wh,u.yH,Z.nh,A.a8,C.Hw,F.d,y.gM,s.LS,T.H,s._s]});const h=[{path:"",component:m,pathMatch:"full"}];class r{}r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[d.ez,l.Bz.forChild(h),p.m,s.JX]})},6660:(w,g,o)=>{o.d(g,{H:()=>l});var d=o(4650);class l{transform(s,f){return s.filter(e=>e.id==f)[0]}}l.\u0275fac=function(s){return new(s||l)},l.\u0275pipe=d.Yjl({name:"filterById",type:l,pure:!0})}}]);