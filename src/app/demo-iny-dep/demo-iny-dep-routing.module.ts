import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjmID01Component } from './ejm-id01/ejm-id01.component';
import { EjmID02Component } from './ejm-id02/ejm-id02.component';
import { EjmID03Component } from './ejm-id03/ejm-id03.component';
import { PrincipalIDComponent } from './principal-id/principal-id.component';

const routes: Routes = [
  {
    path:'inydep',
    component:PrincipalIDComponent,
    children:[
      { path:'ejm01',component:EjmID01Component },
      { path:'ejm02',component:EjmID02Component },
      { path:'ejm03',component:EjmID03Component },

      { path:'', redirectTo:'ejm01', pathMatch:'full'}
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoInyDepRoutingModule { }
