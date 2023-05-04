import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoHttpRoutingModule } from './demo-http-routing.module';
import { MainModHttpComponent } from './main-mod-http/main-mod-http.component';
import { ConsultaPersonaHttpComponent } from './consulta-persona-http/consulta-persona-http.component';
import { LibQtxModule } from '../lib-qtx/lib-qtx.module';
import { ConsultaPersonasHttpComponent } from './consulta-personas-http/consulta-personas-http.component';


@NgModule({
  declarations: [
    MainModHttpComponent,
    ConsultaPersonaHttpComponent,
    ConsultaPersonasHttpComponent
  ],
  imports: [
    CommonModule,
    LibQtxModule,
    DemoHttpRoutingModule
  ],
  exports: [
    MainModHttpComponent
  ]
})
export class DemoHttpModule { }
