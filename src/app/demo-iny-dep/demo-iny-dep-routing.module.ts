import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjmID01Component } from './ejm-id01/ejm-id01.component';

const routes: Routes = [
  {
    path:'inydep',component:EjmID01Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoInyDepRoutingModule { }
