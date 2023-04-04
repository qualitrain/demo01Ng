import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagNoExisteComponent } from './pag-no-existe/pag-no-existe.component';
import { SelecColorComponent } from './selec-color/selec-color.component';
const routes: Routes = [
   { path: '', component: SelecColorComponent },
   { path:'**',component: PagNoExisteComponent}
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  
