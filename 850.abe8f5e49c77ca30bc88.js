(self.webpackChunkamabless=self.webpackChunkamabless||[]).push([[850],{9850:(t,e,s)=>{"use strict";s.r(e),s.d(e,{CredentialsModule:()=>D});var i=s(8583),r=s(3679),n=s(2789),a=s(6813),o=s(3423),c=s(7716);let l=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-credentials"]],decls:1,vars:0,template:function(t,e){1&t&&c._UZ(0,"router-outlet")},directives:[o.lC],encapsulation:2}),t})();var d=s(945),h=s(9761),u=s(3190);class p{}var g=s(6215),b=s(2624);function Z(t,e){1&t&&(c.ynx(0),c._uU(1,"Save Changes"),c.BQk())}function m(t,e){1&t&&(c.ynx(0),c.TgZ(1,"span",17),c._uU(2),c._UZ(3,"span",18),c.qZA(),c.BQk()),2&t&&(c.xp6(1),c.Udp("display","block"),c.xp6(1),c.hij(" Please wait..."," "," "))}let f=(()=>{class t{constructor(t,e,s){this.dataService=t,this.modalService=e,this.cdr=s,this.branchs=new p,this.isLoading$=new g.X(!1),this.unsubscribe=[];const i=this.isLoading$.asObservable().subscribe(t=>this.isLoading=t);this.unsubscribe.push(i)}ngOnInit(){}InsertData(){this.dataService.createBranch(this.branchs).subscribe(t=>{}),this.modalService.dismissAll()}close(){this.modalService.dismissAll()}saveSettings(){this.isLoading$.next(!0),setTimeout(()=>{this.isLoading$.next(!1),this.cdr.detectChanges()},1500)}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(b.D),c.Y36(a.FF),c.Y36(c.sBO))},t.\u0275cmp=c.Xpm({type:t,selectors:[["create-or-edit-branch"]],decls:21,vars:4,consts:[[1,"card"],[1,"card-body"],[1,"container-fluid",3,"ngSubmit"],["myForm","ngForm"],["role","button","data-bs-toggle","collapse","data-bs-target","#kt_account_profile_details","aria-expanded","true","aria-controls","kt_account_profile_details",1,"card-header","border-0","cursor-pointer"],[1,"card-title","m-0"],[1,"fw-bolder","m-0"],["id","kt_account_profile_details",1,"collapse","show"],[1,"card-body","border-top","p-9"],[1,"row","mb-6"],[1,"col-lg-4","col-form-label","required","fw-bold","fs-6"],[1,"col-lg-8","fv-row"],["type","text","placeholder","First name","name","name",1,"form-control","form-control-lg","form-control-solid",3,"ngModel","ngModelChange"],[1,"card-footer","d-flex","justify-content-end","py-6","px-9"],["type","submit",1,"btn","btn-primary",3,"disabled"],[4,"ngIf"],["type","button",1,"btn","btn-danger",3,"click"],["clas","indicator-progress"],[1,"spinner-border","spinner-border-sm","align-middle","ms-2"]],template:function(t,e){1&t&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.TgZ(2,"form",2,3),c.NdJ("ngSubmit",function(){return e.InsertData()}),c.TgZ(4,"div",4),c.TgZ(5,"div",5),c.TgZ(6,"h3",6),c._uU(7,"Profile Details"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(8,"div",7),c.TgZ(9,"div",8),c.TgZ(10,"div",9),c.TgZ(11,"label",10),c._uU(12,"Branch Name"),c.qZA(),c.TgZ(13,"div",11),c.TgZ(14,"input",12),c.NdJ("ngModelChange",function(t){return e.branchs.name=t}),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(15,"div",13),c.TgZ(16,"button",14),c.YNc(17,Z,2,0,"ng-container",15),c.YNc(18,m,4,3,"ng-container",15),c.qZA(),c.TgZ(19,"button",16),c.NdJ("click",function(){return e.close()}),c._uU(20,"Exit"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&t&&(c.xp6(14),c.Q6J("ngModel",e.branchs.name),c.xp6(2),c.Q6J("disabled",e.isLoading),c.xp6(1),c.Q6J("ngIf",!e.isLoading),c.xp6(1),c.Q6J("ngIf",e.isLoading))},directives:[r._Y,r.JL,r.F,r.Fj,r.JJ,r.On,i.O5],encapsulation:2}),t})();function v(t,e){1&t&&(c.ynx(0),c._uU(1,"Save Changes"),c.BQk())}function C(t,e){1&t&&(c.ynx(0),c.TgZ(1,"span",16),c._uU(2),c._UZ(3,"span",17),c.qZA(),c.BQk()),2&t&&(c.xp6(1),c.Udp("display","block"),c.xp6(1),c.hij(" Please wait..."," "," "))}let A=(()=>{class t{constructor(t,e,s,i){this.dataService=t,this.cdr=e,this.route=s,this.router=i,this.branchs=new p,this.isLoading$=new g.X(!1),this.unsubscribe=[];const r=this.isLoading$.asObservable().subscribe(t=>this.isLoading=t);this.unsubscribe.push(r)}ngOnInit(){this.id=this.route.snapshot.params.id,this.getAll(),(0,d.F)(2e3).pipe((0,h.O)(0),(0,u.w)(()=>this.dataService.getBranches())).subscribe(t=>{this.branch=t,this.cdr.detectChanges()})}updateBranch(){this.dataService.updateBranch(this.id,this.branchs).subscribe(t=>{}),this.router.navigate(["/crafted/pages/credentials/branches/branch"])}getAll(){this.dataService.getBranch(this.id).subscribe(t=>{console.log(t),this.branchs=t,this.cdr.detectChanges()})}close(){this.router.navigate(["/crafted/pages/credentials/branches"])}saveSettings(){this.isLoading$.next(!0),setTimeout(()=>{this.isLoading$.next(!1),this.cdr.detectChanges()},1500)}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(b.D),c.Y36(c.sBO),c.Y36(o.gz),c.Y36(o.F0))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-edit-branch"]],inputs:{branchData:"branchData"},decls:21,vars:4,consts:[[1,"card"],[1,"card-body"],[1,"container-fluid",3,"ngSubmit"],["role","button","data-bs-toggle","collapse","data-bs-target","#kt_account_profile_details","aria-expanded","true","aria-controls","kt_account_profile_details",1,"card-header","border-0","cursor-pointer"],[1,"card-title","m-0"],[1,"fw-bolder","m-0"],["id","kt_account_profile_details",1,"collapse","show"],[1,"card-body","border-top","p-9"],[1,"row","mb-6"],[1,"col-lg-4","col-form-label","required","fw-bold","fs-6"],[1,"col-lg-8","fv-row"],["type","text","name","firstname",1,"form-control","form-control-lg","form-control-solid",3,"ngModel","ngModelChange"],[1,"card-footer","d-flex","justify-content-end","py-6","px-9"],["type","submit",1,"btn","btn-primary",3,"disabled"],[4,"ngIf"],["type","button",1,"btn","btn-danger",3,"click"],["clas","indicator-progress"],[1,"spinner-border","spinner-border-sm","align-middle","ms-2"]],template:function(t,e){1&t&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.TgZ(2,"form",2),c.NdJ("ngSubmit",function(){return e.updateBranch()}),c.TgZ(3,"div",3),c.TgZ(4,"div",4),c.TgZ(5,"h3",5),c._uU(6,"Profile Details"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(7,"div",6),c.TgZ(8,"div",7),c.TgZ(9,"div",8),c.TgZ(10,"label",9),c._uU(11,"Branch Name"),c.qZA(),c.TgZ(12,"div",10),c.TgZ(13,"input",11),c.NdJ("ngModelChange",function(t){return e.branchs.name=t}),c.qZA(),c.qZA(),c._UZ(14,"div"),c.qZA(),c.TgZ(15,"div",12),c.TgZ(16,"button",13),c.YNc(17,v,2,0,"ng-container",14),c.YNc(18,C,4,3,"ng-container",14),c.qZA(),c.TgZ(19,"button",15),c.NdJ("click",function(){return e.close()}),c._uU(20,"Exit"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&t&&(c.xp6(13),c.Q6J("ngModel",e.branchs.name),c.xp6(3),c.Q6J("disabled",e.isLoading),c.xp6(1),c.Q6J("ngIf",!e.isLoading),c.xp6(1),c.Q6J("ngIf",e.isLoading))},directives:[r._Y,r.JL,r.F,r.Fj,r.JJ,r.On,i.O5],encapsulation:2}),t})();function T(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"tr"),c.TgZ(1,"td",13),c._uU(2),c.qZA(),c.TgZ(3,"td",14),c.TgZ(4,"button",15),c.NdJ("click",function(){const e=c.CHM(t).$implicit;return c.oxw().openEditView(e.id)}),c._UZ(5,"span",16),c.qZA(),c.TgZ(6,"div",14),c.TgZ(7,"button",17),c.NdJ("click",function(){const e=c.CHM(t).$implicit;return c.oxw().deleteData(e.id)}),c._UZ(8,"span",16),c.qZA(),c.qZA(),c.qZA(),c.qZA()}if(2&t){const t=e.$implicit;c.xp6(2),c.hij(" ",t.name," "),c.xp6(3),c.Q6J("inlineSVG","./assets/media/icons/duotune/art/art005.svg"),c.xp6(3),c.Q6J("inlineSVG","./assets/media/icons/duotune/general/gen027.svg")}}let q=(()=>{class t{constructor(t,e,s,i){this.dataService=t,this.cdr=e,this.modalService=s,this.router=i,this.branchs=[],this.branch=[],this.showCreateButton=!0,this.showOtherButton=!0,this.nameFilter="",this.data=[],this.filter="",this.selectedRole="",this.selectedCourse="",this.filterOptions={roles:"",course:""},this.searchTerm=""}ngOnInit(){this.getAll(),(0,d.F)(5e3).pipe((0,h.O)(0),(0,u.w)(()=>this.dataService.getBranches())).subscribe(t=>{this.branchs=t,this.cdr.detectChanges()})}getAll(){this.dataService.getBranches().subscribe(t=>{this.branchs=t,this.cdr.detectChanges()})}openCreateOrEditModal(){this.modalService.open(f,{size:"xl"})}openEditView(t){this.router.navigate(["/crafted/pages/credentials/branches",t])}openViewModal(){this.modalService.open(A,{size:"xl"})}deleteData(t){confirm("Are you sure you want to delete this item?")&&this.dataService.deleteBranch(t).subscribe(t=>{this.getAll(),this.cdr.detectChanges()})}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(b.D),c.Y36(c.sBO),c.Y36(a.FF),c.Y36(o.F0))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-branch"]],decls:20,vars:1,consts:[[1,"card"],[1,"card-header","border-0","pt-5"],[1,"card-title","align-items-start","flex-column"],[1,"card-label","fw-bolder","fs-3","mb-1"],[1,"card-toolbar"],["data-bs-toggle","modal","data-bs-target","#kt_modal_create_app","id","kt_toolbar_primary_button",1,"btn","btn-sm","btn-primary","cursor-pointer",3,"click"],[1,"card-body","py-3"],[1,"table-responsive"],[1,"table","table-row-bordered","table-row-gray-100","align-middle","gs-0","gy-3"],[1,"fw-bolder","text-muted"],[1,"min-w-150px"],[1,"min-w-100px","text-end"],[4,"ngFor","ngForOf"],[1,"text-dark","fw-bolder","text-hover-primary","fs-6"],[1,"text-end"],["type","button",1,"btn","btn-icon","btn-bg-light","btn-active-color-primary","btn-sm","me-1",3,"click"],[1,"svg-icon","svg-icon-3",3,"inlineSVG"],["type","button",1,"btn","btn-icon","btn-bg-light","btn-active-color-primary","btn-sm",3,"click"]],template:function(t,e){1&t&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.TgZ(2,"h3",2),c.TgZ(3,"span",3),c._uU(4,"Branches"),c.qZA(),c.qZA(),c.TgZ(5,"div",4),c._uU(6," \xa0 "),c.TgZ(7,"a",5),c.NdJ("click",function(){return e.openCreateOrEditModal()}),c._uU(8," Create "),c.qZA(),c.qZA(),c.qZA(),c.TgZ(9,"div",6),c.TgZ(10,"div",7),c.TgZ(11,"table",8),c.TgZ(12,"thead"),c.TgZ(13,"tr",9),c.TgZ(14,"th",10),c._uU(15,"Branch Name"),c.qZA(),c.TgZ(16,"th",11),c._uU(17,"Actions"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(18,"tbody"),c.YNc(19,T,9,3,"tr",12),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&t&&(c.xp6(19),c.Q6J("ngForOf",e.branchs))},directives:[i.sg,n.d$],encapsulation:2}),t})();class y{}function _(t,e){1&t&&(c.ynx(0),c._uU(1,"Save Changes"),c.BQk())}function x(t,e){1&t&&(c.ynx(0),c.TgZ(1,"span",17),c._uU(2),c._UZ(3,"span",18),c.qZA(),c.BQk()),2&t&&(c.xp6(1),c.Udp("display","block"),c.xp6(1),c.hij(" Please wait..."," "," "))}let U=(()=>{class t{constructor(t,e,s){this.dataService=t,this.modalService=e,this.cdr=s,this.courses=new y,this.isLoading$=new g.X(!1),this.unsubscribe=[];const i=this.isLoading$.asObservable().subscribe(t=>this.isLoading=t);this.unsubscribe.push(i)}ngOnInit(){}InsertData(){this.dataService.createCourse(this.courses).subscribe(t=>{}),this.modalService.dismissAll()}close(){this.modalService.dismissAll()}saveSettings(){this.isLoading$.next(!0),setTimeout(()=>{this.isLoading$.next(!1),this.cdr.detectChanges()},1500)}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(b.D),c.Y36(a.FF),c.Y36(c.sBO))},t.\u0275cmp=c.Xpm({type:t,selectors:[["create-or-edit-course"]],decls:21,vars:4,consts:[[1,"card"],[1,"card-body"],[1,"container-fluid",3,"ngSubmit"],["myForm","ngForm"],["role","button","data-bs-toggle","collapse","data-bs-target","#kt_account_profile_details","aria-expanded","true","aria-controls","kt_account_profile_details",1,"card-header","border-0","cursor-pointer"],[1,"card-title","m-0"],[1,"fw-bolder","m-0"],["id","kt_account_profile_details",1,"collapse","show"],[1,"card-body","border-top","p-9"],[1,"row","mb-6"],[1,"col-lg-4","col-form-label","required","fw-bold","fs-6"],[1,"col-lg-8","fv-row"],["type","text","placeholder","First name","name","name",1,"form-control","form-control-lg","form-control-solid",3,"ngModel","ngModelChange"],[1,"card-footer","d-flex","justify-content-end","py-6","px-9"],["type","submit",1,"btn","btn-primary",3,"disabled"],[4,"ngIf"],["type","button",1,"btn","btn-danger",3,"click"],["clas","indicator-progress"],[1,"spinner-border","spinner-border-sm","align-middle","ms-2"]],template:function(t,e){1&t&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.TgZ(2,"form",2,3),c.NdJ("ngSubmit",function(){return e.InsertData()}),c.TgZ(4,"div",4),c.TgZ(5,"div",5),c.TgZ(6,"h3",6),c._uU(7,"Profile Details"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(8,"div",7),c.TgZ(9,"div",8),c.TgZ(10,"div",9),c.TgZ(11,"label",10),c._uU(12,"Course Name"),c.qZA(),c.TgZ(13,"div",11),c.TgZ(14,"input",12),c.NdJ("ngModelChange",function(t){return e.courses.name=t}),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(15,"div",13),c.TgZ(16,"button",14),c.YNc(17,_,2,0,"ng-container",15),c.YNc(18,x,4,3,"ng-container",15),c.qZA(),c.TgZ(19,"button",16),c.NdJ("click",function(){return e.close()}),c._uU(20,"Exit"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&t&&(c.xp6(14),c.Q6J("ngModel",e.courses.name),c.xp6(2),c.Q6J("disabled",e.isLoading),c.xp6(1),c.Q6J("ngIf",!e.isLoading),c.xp6(1),c.Q6J("ngIf",e.isLoading))},directives:[r._Y,r.JL,r.F,r.Fj,r.JJ,r.On,i.O5],encapsulation:2}),t})();function S(t,e){1&t&&(c.ynx(0),c._uU(1,"Save Changes"),c.BQk())}function $(t,e){1&t&&(c.ynx(0),c.TgZ(1,"span",16),c._uU(2),c._UZ(3,"span",17),c.qZA(),c.BQk()),2&t&&(c.xp6(1),c.Udp("display","block"),c.xp6(1),c.hij(" Please wait..."," "," "))}let w=(()=>{class t{constructor(t,e,s,i){this.dataService=t,this.cdr=e,this.route=s,this.router=i,this.courses=new y,this.isLoading$=new g.X(!1),this.unsubscribe=[];const r=this.isLoading$.asObservable().subscribe(t=>this.isLoading=t);this.unsubscribe.push(r)}ngOnInit(){this.id=this.route.snapshot.params.id,this.getAll(),(0,d.F)(2e3).pipe((0,h.O)(0),(0,u.w)(()=>this.dataService.getCourses())).subscribe(t=>{this.course=t,this.cdr.detectChanges()})}updateCourse(){this.dataService.updateCourse(this.id,this.courses).subscribe(t=>{}),this.router.navigate(["/crafted/pages/credentials/courses"])}getAll(){this.dataService.getCourse(this.id).subscribe(t=>{console.log(t),this.courses=t,this.cdr.detectChanges()})}close(){this.router.navigate(["/crafted/pages/credentials/courses/course"])}saveSettings(){this.isLoading$.next(!0),setTimeout(()=>{this.isLoading$.next(!1),this.cdr.detectChanges()},1500)}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(b.D),c.Y36(c.sBO),c.Y36(o.gz),c.Y36(o.F0))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-edit-course"]],inputs:{courseData:"courseData"},decls:21,vars:4,consts:[[1,"card"],[1,"card-body"],[1,"container-fluid",3,"ngSubmit"],["role","button","data-bs-toggle","collapse","data-bs-target","#kt_account_profile_details","aria-expanded","true","aria-controls","kt_account_profile_details",1,"card-header","border-0","cursor-pointer"],[1,"card-title","m-0"],[1,"fw-bolder","m-0"],["id","kt_account_profile_details",1,"collapse","show"],[1,"card-body","border-top","p-9"],[1,"row","mb-6"],[1,"col-lg-4","col-form-label","required","fw-bold","fs-6"],[1,"col-lg-8","fv-row"],["type","text","name","firstname",1,"form-control","form-control-lg","form-control-solid",3,"ngModel","ngModelChange"],[1,"card-footer","d-flex","justify-content-end","py-6","px-9"],["type","submit",1,"btn","btn-primary",3,"disabled"],[4,"ngIf"],["type","button",1,"btn","btn-danger",3,"click"],["clas","indicator-progress"],[1,"spinner-border","spinner-border-sm","align-middle","ms-2"]],template:function(t,e){1&t&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.TgZ(2,"form",2),c.NdJ("ngSubmit",function(){return e.updateCourse()}),c.TgZ(3,"div",3),c.TgZ(4,"div",4),c.TgZ(5,"h3",5),c._uU(6,"Profile Details"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(7,"div",6),c.TgZ(8,"div",7),c.TgZ(9,"div",8),c.TgZ(10,"label",9),c._uU(11,"Course Name"),c.qZA(),c.TgZ(12,"div",10),c.TgZ(13,"input",11),c.NdJ("ngModelChange",function(t){return e.courses.name=t}),c.qZA(),c.qZA(),c._UZ(14,"div"),c.qZA(),c.TgZ(15,"div",12),c.TgZ(16,"button",13),c.YNc(17,S,2,0,"ng-container",14),c.YNc(18,$,4,3,"ng-container",14),c.qZA(),c.TgZ(19,"button",15),c.NdJ("click",function(){return e.close()}),c._uU(20,"Exit"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&t&&(c.xp6(13),c.Q6J("ngModel",e.courses.name),c.xp6(3),c.Q6J("disabled",e.isLoading),c.xp6(1),c.Q6J("ngIf",!e.isLoading),c.xp6(1),c.Q6J("ngIf",e.isLoading))},directives:[r._Y,r.JL,r.F,r.Fj,r.JJ,r.On,i.O5],encapsulation:2}),t})();function J(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"tr"),c.TgZ(1,"td",13),c._uU(2),c.qZA(),c.TgZ(3,"td",14),c.TgZ(4,"button",15),c.NdJ("click",function(){const e=c.CHM(t).$implicit;return c.oxw().openEditView(e.id)}),c._UZ(5,"span",16),c.qZA(),c.TgZ(6,"div",14),c.TgZ(7,"button",17),c.NdJ("click",function(){const e=c.CHM(t).$implicit;return c.oxw().deleteData(e.id)}),c._UZ(8,"span",16),c.qZA(),c.qZA(),c.qZA(),c.qZA()}if(2&t){const t=e.$implicit;c.xp6(2),c.hij(" ",t.name," "),c.xp6(3),c.Q6J("inlineSVG","./assets/media/icons/duotune/art/art005.svg"),c.xp6(3),c.Q6J("inlineSVG","./assets/media/icons/duotune/general/gen027.svg")}}const k=[{path:"branches/:id",component:A},{path:"courses/:id",component:w},{path:"",component:l,children:[{path:"courses",component:(()=>{class t{constructor(t,e,s,i){this.dataService=t,this.cdr=e,this.modalService=s,this.router=i,this.courses=[],this.course=[],this.showCreateButton=!0,this.showOtherButton=!0,this.nameFilter="",this.data=[],this.filter="",this.selectedRole="",this.selectedCourse="",this.filterOptions={roles:"",course:""},this.searchTerm=""}ngOnInit(){this.getAll(),(0,d.F)(5e3).pipe((0,h.O)(0),(0,u.w)(()=>this.dataService.getCourses())).subscribe(t=>{this.courses=t,this.cdr.detectChanges()})}getAll(){this.dataService.getCourses().subscribe(t=>{this.courses=t,this.cdr.detectChanges()})}openCreateOrEditModal(){this.modalService.open(U,{size:"xl"})}openEditView(t){this.router.navigate(["/crafted/pages/credentials/courses",t])}openViewModal(){this.modalService.open(w,{size:"xl"})}deleteData(t){confirm("Are you sure you want to delete this item?")&&this.dataService.deleteCourse(t).subscribe(t=>{this.getAll(),this.cdr.detectChanges()})}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(b.D),c.Y36(c.sBO),c.Y36(a.FF),c.Y36(o.F0))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-course"]],decls:20,vars:1,consts:[[1,"card"],[1,"card-header","border-0","pt-5"],[1,"card-title","align-items-start","flex-column"],[1,"card-label","fw-bolder","fs-3","mb-1"],[1,"card-toolbar"],["data-bs-toggle","modal","data-bs-target","#kt_modal_create_app","id","kt_toolbar_primary_button",1,"btn","btn-sm","btn-primary","cursor-pointer",3,"click"],[1,"card-body","py-3"],[1,"table-responsive"],[1,"table","table-row-bordered","table-row-gray-100","align-middle","gs-0","gy-3"],[1,"fw-bolder","text-muted"],[1,"min-w-150px"],[1,"min-w-100px","text-end"],[4,"ngFor","ngForOf"],[1,"text-dark","fw-bolder","text-hover-primary","fs-6"],[1,"text-end"],["type","button",1,"btn","btn-icon","btn-bg-light","btn-active-color-primary","btn-sm","me-1",3,"click"],[1,"svg-icon","svg-icon-3",3,"inlineSVG"],["type","button",1,"btn","btn-icon","btn-bg-light","btn-active-color-primary","btn-sm",3,"click"]],template:function(t,e){1&t&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.TgZ(2,"h3",2),c.TgZ(3,"span",3),c._uU(4,"Courses"),c.qZA(),c.qZA(),c.TgZ(5,"div",4),c._uU(6," \xa0 "),c.TgZ(7,"a",5),c.NdJ("click",function(){return e.openCreateOrEditModal()}),c._uU(8," Create "),c.qZA(),c.qZA(),c.qZA(),c.TgZ(9,"div",6),c.TgZ(10,"div",7),c.TgZ(11,"table",8),c.TgZ(12,"thead"),c.TgZ(13,"tr",9),c.TgZ(14,"th",10),c._uU(15,"Course Name"),c.qZA(),c.TgZ(16,"th",11),c._uU(17,"Actions"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(18,"tbody"),c.YNc(19,J,9,3,"tr",12),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&t&&(c.xp6(19),c.Q6J("ngForOf",e.courses))},directives:[i.sg,n.d$],encapsulation:2}),t})()},{path:"branches",component:q}]}];let F=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[o.Bz.forChild(k)],o.Bz]}),t})(),B=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[i.ez,n.vi,r.u5]]}),t})();var O=s(3274);let D=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[i.ez,F,r.UX,n.vi,a.HK,O.J,B,a.IJ]]}),t})()},2624:(t,e,s)=>{"use strict";s.d(e,{D:()=>n});var i=s(7716),r=s(1841);let n=(()=>{class t{constructor(t){this.httpClient=t,this.baseUrl="http://localhost:44301/api",this.apiUrlCoaches="http://localhost:44301/api/courses",this.apiUrlStudents="http://localhost:44301/api/user",this.apiFilter="http://localhost:44301/api/users/filter"}getData(t,e){return this.httpClient.get(`${this.apiUrlStudents}?roles=${t}&course=${e}`)}getUserData(){return this.httpClient.get("http://localhost:44301/api/user")}getUserDatabyId(t){return this.httpClient.get("http://localhost:44301/api/user/"+t)}insertUserData(t){return this.httpClient.post("http://localhost:44301/api/addUser",t)}updateUserData(t,e){return this.httpClient.put("http://localhost:44301/api/updateUser/"+t,e)}deleteUserData(t){return this.httpClient.delete("http://localhost:44301/api/deleteUser/"+t)}getSocialData(){return this.httpClient.get("http://localhost:44301/api/social")}getSocialDatabyId(t){return this.httpClient.get("http://localhost:44301/api/social/"+t)}insertSocialData(t){return this.httpClient.post("http://localhost:44301/api/addSocial",t)}updateSocialData(t,e){return this.httpClient.put("http://localhost:44301/api/updateSocial/"+t,e)}deleteSocialData(t){return this.httpClient.delete("http://localhost:44301/api/deleteSocial/"+t)}getScheduleData(){return this.httpClient.get("http://localhost:44301/api/schedule")}getScheduleDatabyId(t){return this.httpClient.get("http://localhost:44301/api/schedule/"+t)}insertScheduleData(t){return this.httpClient.post("http://localhost:44301/api/addSchedule",t)}updateScheduleData(t,e){return this.httpClient.put("http://localhost:44301/api/updateSchedule/"+t,e)}deleteScheduleData(t){return this.httpClient.delete("http://localhost:44301/api/deleteSchedule/"+t)}getUserDetails(t){return this.httpClient.get("http://localhost:44301/api/user/"+t)}getCoachesbyEmployment(t){return this.httpClient.get(`${this.apiUrlCoaches}/${t}/coaches`)}getCoachbyEmployment(t,e){return this.httpClient.get(`${this.apiUrlCoaches}/${t}/coaches/${e}`)}createCoachbyEmployment(t,e){return this.httpClient.post(`${this.apiUrlCoaches}/${t}/coaches`,e)}updateCoachbyEmployment(t,e,s){return this.httpClient.put(`${this.apiUrlCoaches}/${t}/coaches/${e}`,s)}deleteCoachbyEmployment(t,e){return this.httpClient.delete(`${this.apiUrlCoaches}/${t}/coaches/${e}`)}getBranches(){return this.httpClient.get(`${this.baseUrl}/branches/branch`)}getBranch(t){return this.httpClient.get(`${this.baseUrl}/branches/${t}`)}createBranch(t){return this.httpClient.post(`${this.baseUrl}/branches`,t)}updateBranch(t,e){return this.httpClient.put(`${this.baseUrl}/branches/${t}`,e)}deleteBranch(t){return this.httpClient.delete(`${this.baseUrl}/branches/${t}`)}getCourses(){return this.httpClient.get(`${this.baseUrl}/courses/course`)}getCourse(t){return this.httpClient.get(`${this.baseUrl}/courses/${t}`)}createCourse(t){return this.httpClient.post(`${this.baseUrl}/courses`,t)}updateCourse(t,e){return this.httpClient.put(`${this.baseUrl}/courses/${t}`,e)}deleteCourse(t){return this.httpClient.delete(`${this.baseUrl}/courses/${t}`)}getStudents(){return this.httpClient.get(`${this.baseUrl}/students/student`)}getStudent(t){return this.httpClient.get(`${this.baseUrl}/students/${t}`)}createStudent(t){return this.httpClient.post(`${this.baseUrl}/students`,t)}updateStudent(t,e){return this.httpClient.put(`${this.baseUrl}/students/${t}`,e)}deleteStudent(t){return this.httpClient.delete(`${this.baseUrl}/students/${t}`)}getCoaches(){return this.httpClient.get(`${this.baseUrl}/coaches/coach`)}getCoach(t){return this.httpClient.get(`${this.baseUrl}/coaches/${t}`)}createCoach(t){return this.httpClient.post(`${this.baseUrl}/coaches`,t)}updateCoach(t,e){return this.httpClient.put(`${this.baseUrl}/coaches/${t}`,e)}deleteCoach(t){return this.httpClient.delete(`${this.baseUrl}/coaches/${t}`)}getStudentsbyEnrollment(t){return this.httpClient.get(`${this.apiUrlStudents}/${t}/students`)}getStudentbyEnrollment(t,e){return this.httpClient.get(`${this.apiUrlStudents}/${t}/students/${e}`)}createStudentbyEnrollment(t,e){return this.httpClient.post(`${this.apiUrlStudents}/${t}/students`,e)}updateStudentbyEnrollment(t,e,s){return this.httpClient.put(`${this.apiUrlStudents}/${t}/students/${e}`,s)}deleteStudentbyEnrollment(t,e){return this.httpClient.delete(`${this.apiUrlStudents}/${t}/students/${e}`)}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(r.eN))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);