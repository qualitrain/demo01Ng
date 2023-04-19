import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Canvas01Component } from './canvas01/canvas01.component';
import { DesplErrorComponent } from './despl-error/despl-error.component';



@NgModule({
  declarations: [
    Canvas01Component,
    DesplErrorComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    Canvas01Component,
    DesplErrorComponent
  ]
})
export class LibQtxModule { }
