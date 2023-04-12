import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjmID01Component } from './ejm-id01/ejm-id01.component';
import { EjmID02Component } from './ejm-id02/ejm-id02.component';
import { EjmID03Component } from './ejm-id03/ejm-id03.component';
import { EjmID04Component } from './ejm-id04/ejm-id04.component';
import { EjmID05Component } from './ejm-id05/ejm-id05.component';
import { EjmID06Component } from './ejm-id06/ejm-id06.component';
import { PrincipalIDComponent } from './principal-id/principal-id.component';

const routes: Routes = [
  {
 //   path:'inydep',
    path:'',
    component:PrincipalIDComponent,
    children:[
      { path:'ejm01',component:EjmID01Component },
      { path:'ejm02',component:EjmID02Component },
      { path:'ejm03',component:EjmID03Component },
      { path:'ejm04',component:EjmID04Component },
      { path:'ejm05',component:EjmID05Component },
      { path:'ejm06',component:EjmID06Component },

      { path:'', redirectTo:'ejm01', pathMatch:'full'}
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoInyDepRoutingModule { }
