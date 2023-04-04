import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { TestRxjs01Component } from './test-rxjs01/test-rxjs01.component';
import { TestRxjs05Component } from './test-rxjs05/test-rxjs05.component';
import { TestRxjs06Component } from './test-rxjs06/test-rxjs06.component';
import { TestRxjs10Component } from './test-rxjs10/test-rxjs10.component';
import { TestRxjs12Component } from './test-rxjs12/test-rxjs12.component';
import { TestRxjs15AjaxComponent } from './test-rxjs15-ajax/test-rxjs15-ajax.component';
import { TestRxjs16SubjectComponent } from './test-rxjs16-subject/test-rxjs16-subject.component';

const routes: Routes = [
  { 
    path:'testRxjs', 
    title:'demo RxJs y observables', 
    component:PrincipalComponent,
    children:[
      { path:'basicos',component:TestRxjs01Component},
      { path:'creacion', component:TestRxjs05Component},
      { path:'filtros' , component:TestRxjs06Component},
      { path:'acumReduc', component:TestRxjs10Component},
      { path:'combinacion', component:TestRxjs12Component},
      { path:'ajax', component:TestRxjs15AjaxComponent},
      { path:'avanzados',component:TestRxjs16SubjectComponent}
    ]
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRxjsRoutingModule { }
