import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoHttpRoutingModule } from './demo-http-routing.module';
import { MainModHttpComponent } from './main-mod-http/main-mod-http.component';


@NgModule({
  declarations: [
    MainModHttpComponent
  ],
  imports: [
    CommonModule,
    DemoHttpRoutingModule
  ],
  exports: [
    MainModHttpComponent
  ]
})
export class DemoHttpModule { }
