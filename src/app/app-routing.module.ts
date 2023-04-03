import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelecColorComponent } from './selec-color/selec-color.component';
const routes: Routes = [
   { path: '', component: SelecColorComponent },
   /* 
    { path: 'producto/:id', component: ProductDetailComponent },
    */
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  
