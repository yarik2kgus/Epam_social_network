"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[557],{5557:(T,c,n)=>{n.r(c),n.d(c,{default:()=>D});var r=n(6814),l=n(9281),p=n(4814),m=n(5799),a=n(7110),u=n(8954),d=n(1227),E=n(1674),P=n(6287),t=n(5678),f=n(9503);function O(o,s){if(1&o&&t._UZ(0,"epm-contact-about",2)(1,"epm-contact-interests",3),2&o){const e=t.oxw();t.Q6J("about",e.user.about),t.xp6(1),t.Q6J("interests",e.user.interests)}}function M(o,s){if(1&o&&(t.TgZ(0,"epm-contact-no-details")(1,"span",4)(2,"a",5),t._uU(3,"Edit profile"),t.qZA(),t.TgZ(4,"span"),t._uU(5," to fill this section."),t.qZA()()()),2&o){const e=t.oxw();t.xp6(2),t.Q6J("routerLink",e.editProfileLink)}}const h=(o,s)=>[o,s],C=()=>({width:"100%"});let D=(()=>{class o{constructor(e,_){this.mainApiService=e,this.router=_,this.buttonThemes=a.uY,this.editProfileLink=`/${a.zV.Main}/${a.zV.ProfileSettings}`}ngOnInit(){this.user=this.mainApiService.getExpandedPersonalData()}onOpenEdit(){this.router.navigateByUrl(this.editProfileLink)}static#t=this.\u0275fac=function(_){return new(_||o)(t.Y36(f.T),t.Y36(l.F0))};static#n=this.\u0275cmp=t.Xpm({type:o,selectors:[["epm-profile"]],standalone:!0,features:[t.jDz],decls:6,vars:10,consts:[[3,"user","editableAvatar"],[1,"action-button",3,"additionalStyles","click"],[1,"about",3,"about"],[3,"interests"],[1,"empty__text"],[1,"empty__link",3,"routerLink"]],template:function(_,i){1&_&&(t.TgZ(0,"epm-contact"),t._UZ(1,"epm-contact-head",0),t.TgZ(2,"epm-button",1),t.NdJ("click",function(){return i.onOpenEdit()}),t._uU(3,"Edit Profile"),t.qZA(),t.YNc(4,O,2,2)(5,M,6,1),t.qZA()),2&_&&(t.xp6(1),t.Q6J("user",i.user)("editableAvatar",!0),t.xp6(1),t.Tol(t.WLB(6,h,i.buttonThemes.Secondary,i.buttonThemes.Small)),t.Q6J("additionalStyles",t.DdM(9,C)),t.xp6(2),t.um2(4,i.user.about||i.user.interests.length?4:5))},dependencies:[r.ez,p.r,m.X,u.c,d.X,E.z,P.B,l.rH],styles:["[_nghost-%COMP%]{padding:0 16px;display:block}.action-button[_ngcontent-%COMP%]{width:100%;margin:24px 0 32px}.about[_ngcontent-%COMP%]{margin-bottom:32px}.empty__text[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-weight:500;font-size:16px;line-height:20px;color:#65697e}.empty__link[_ngcontent-%COMP%]{color:#0078ff}"]})}return o})()}}]);