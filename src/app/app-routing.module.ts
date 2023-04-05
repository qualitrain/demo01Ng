import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagNoExisteComponent } from './pag-no-existe/pag-no-existe.component';
import { SelecColorComponent } from './selec-color/selec-color.component';
const routes: Routes = [
   { path: '', title:'raiz App demo Angular', component: SelecColorComponent },
   { path:'**',component: PagNoExisteComponent}
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes, {enableTracing:true} )],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  
