"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[879],{5879:(C,c,i)=>{i.r(c),i.d(c,{default:()=>P});var _=i(6814),p=i(9281),o=i(95),u=i(8645),g=i(9773),h=i(9397),v=i(8180),d=i(6306),y=i(2570),l=i(7110),t=i(5678),f=i(9045),m=i(9503);let P=(()=>{class s{get account(){return this.privacyStatusForm.get("account")}get age(){return this.privacyStatusForm.get("privacyItems.age")}get location(){return this.privacyStatusForm.get("privacyItems.location")}get description(){return this.privacyStatusForm.get("privacyItems.description")}constructor(a,n,e,r){this.fb=a,this.apiService=n,this.mainApiService=e,this.router=r,this.destroyed=new u.x,this.appRoutes=l.zV,this.destroyed$=this.destroyed.asObservable()}ngOnInit(){this.user=this.apiService.currentUser(),this.initPrivacyStatusForm(),this.initAccountChangesSubscription(),this.setInitialFormValues()}onPrivacyChange(){setTimeout(()=>{this.updateUser()})}initPrivacyStatusForm(){this.privacyStatusForm=this.fb.group({account:[!1],privacyItems:this.fb.group({age:[!1],location:[!1],description:[!1]})})}initAccountChangesSubscription(){this.account.valueChanges.pipe((0,g.R)(this.destroyed$),(0,h.b)(()=>{this.handlePrivacyValueChange(this.account.value)})).subscribe()}handlePrivacyValueChange(a){a?(this.privacyStatusForm.get("privacyItems")?.setValue(y.xS),this.privacyStatusForm.get("privacyItems")?.disable()):this.privacyStatusForm.get("privacyItems")?.enable()}setInitialFormValues(){const{age:a,location:n,description:e,account:r}=this.user.privacy;this.privacyStatusForm.setValue({account:r,privacyItems:{age:a??!1,location:n??!1,description:e??!1}})}updateUser(){const{account:a,privacyItems:n}=this.privacyStatusForm.value;this.mainApiService.updateUser({privacy:{account:a,...n}}).pipe((0,v.q)(1),(0,d.K)(()=>this.router.navigateByUrl(`/${l.zV.NotFound}`))).subscribe()}static#t=this.\u0275fac=function(n){return new(n||s)(t.Y36(o.j3),t.Y36(f.s),t.Y36(m.T),t.Y36(p.F0))};static#i=this.\u0275cmp=t.Xpm({type:s,selectors:[["epm-privacy"]],standalone:!0,features:[t.jDz],decls:30,vars:5,consts:[["routerLink","../",1,"catalogue"],["src","/assets/icons/chevron-blue.svg","width","16","height","16","alt","navigate to previous page"],[1,"privacy__title"],[1,"privacy__card",3,"formGroup"],[1,"privacy__field"],[1,"privacy__support-text"],[1,"privacy__description"],[1,"privacy__informer"],[1,"privacy__switcher"],["type","checkbox","name","account",3,"formControl","click"],["type","checkbox","name","age",3,"formControl","click"],["type","checkbox","name","location",3,"formControl","click"],["type","checkbox","name","description",3,"formControl","click"]],template:function(n,e){1&n&&(t.TgZ(0,"a",0),t._UZ(1,"img",1),t.TgZ(2,"span"),t._uU(3,"Settings"),t.qZA()(),t.TgZ(4,"h2",2),t._uU(5,"Account details"),t.qZA(),t.TgZ(6,"form",3)(7,"div",4)(8,"div",5)(9,"h4",6),t._uU(10,"Private Account"),t.qZA(),t.TgZ(11,"p",7),t._uU(12,"The private account is not viewable to users who are not logged in"),t.qZA()(),t.TgZ(13,"label",8)(14,"input",9),t.NdJ("click",function(){return e.onPrivacyChange()}),t.qZA()()(),t.TgZ(15,"div",4)(16,"h4",6),t._uU(17,"Age"),t.qZA(),t.TgZ(18,"label",8)(19,"input",10),t.NdJ("click",function(){return e.onPrivacyChange()}),t.qZA()()(),t.TgZ(20,"div",4)(21,"h4",6),t._uU(22,"Location"),t.qZA(),t.TgZ(23,"label",8)(24,"input",11),t.NdJ("click",function(){return e.onPrivacyChange()}),t.qZA()()(),t.TgZ(25,"div",4)(26,"h4",6),t._uU(27,"Description"),t.qZA(),t.TgZ(28,"label",8)(29,"input",12),t.NdJ("click",function(){return e.onPrivacyChange()}),t.qZA()()()()),2&n&&(t.xp6(6),t.Q6J("formGroup",e.privacyStatusForm),t.xp6(8),t.Q6J("formControl",e.account),t.xp6(5),t.Q6J("formControl",e.age),t.xp6(5),t.Q6J("formControl",e.location),t.xp6(5),t.Q6J("formControl",e.description))},dependencies:[_.ez,p.rH,o.UX,o._Y,o.Wl,o.JJ,o.JL,o.oH,o.sg],styles:['[_nghost-%COMP%]{padding:0 16px;display:block}.catalogue[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-weight:500;display:inline-flex;gap:4px;padding:16px 0;font-size:16px;line-height:20px;color:#0078ff}.privacy__title[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-weight:700;margin-bottom:16px;font-size:24px;line-height:34px;color:#2c2c2d}.privacy__card[_ngcontent-%COMP%]{padding:24px 16px 32px;background-color:#fff;border-radius:12px;box-shadow:0 4px 4px #1414140a}.privacy__field[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:16px}.privacy__field[_ngcontent-%COMP%]:has(input:disabled)   .privacy__description[_ngcontent-%COMP%]{color:#a5a8ba}.privacy__description[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-weight:600;font-size:16px;line-height:20px;color:#090a0a;transition:all .3s}.privacy__informer[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-weight:300;width:255px;padding-top:8px;font-size:14px;line-height:20px;color:#2c2c2d}.privacy__switcher[_ngcontent-%COMP%]{position:relative;width:48px;height:24px;background-color:#a5a8ba;border-radius:12px;transition:all .3s;cursor:pointer}.privacy__switcher[_ngcontent-%COMP%]:before{content:"";position:absolute;top:6px;bottom:6px;left:6px;width:12px;height:12px;background-color:#fff;border-radius:100%;transition:all .3s}.privacy__switcher[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none}.privacy__switcher[_ngcontent-%COMP%]:has(input:checked){background-color:#6168e4}.privacy__switcher[_ngcontent-%COMP%]:has(input:checked):before{transform:translate(24px)}.privacy__switcher[_ngcontent-%COMP%]:has(input:disabled){background-color:#e8e9f0}']})}return s})()}}]);