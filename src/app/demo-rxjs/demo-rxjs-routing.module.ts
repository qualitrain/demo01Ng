import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { TestRxjs01Component } from './test-rxjs01/test-rxjs01.component';
import { TestRxjs05Component } from './test-rxjs05/test-rxjs05.component';
import { TestRxjs06Component } from './test-rxjs06/test-rxjs06.component';

const routes: Routes = [
  { 
    path:'testRxjs', 
    title:'demo RxJs y observables', 
    component:PrincipalComponent,
    children:[
      { path:'basicos',component:TestRxjs01Component},
      { path:'creacion', component:TestRxjs05Component},
      { path:'filtros' , component:TestRxjs06Component}
    ]
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRxjsRoutingModule { }
