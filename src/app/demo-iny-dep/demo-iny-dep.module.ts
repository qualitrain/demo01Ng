import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoInyDepRoutingModule } from './demo-iny-dep-routing.module';
import { EjmID01Component } from './ejm-id01/ejm-id01.component';
import { ConsultaPersonasIDComponent } from './consulta-personas-id/consulta-personas-id.component';


@NgModule({
  declarations: [
    EjmID01Component,
    ConsultaPersonasIDComponent  
  ],
  imports: [
    CommonModule,
    DemoInyDepRoutingModule
  ]
})
export class DemoInyDepModule { }
