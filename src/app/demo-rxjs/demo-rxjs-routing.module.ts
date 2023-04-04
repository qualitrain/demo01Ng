import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { TestRxjs01Component } from './test-rxjs01/test-rxjs01.component';

const routes: Routes = [
  { 
    path:'testRxjs', 
    title:'demo RxJs y observables', 
    component:PrincipalComponent,
    children:[
      { path:'basicos',component:TestRxjs01Component}
    ]
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRxjsRoutingModule { }
