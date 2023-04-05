import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRxjsRoutingModule } from './demo-rxjs-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { ListaDemosBasicosComponent } from './lista-demos-basicos/lista-demos-basicos.component';


@NgModule({
  declarations: [
    PrincipalComponent,
    ListaDemosBasicosComponent
  ],
  imports: [
    CommonModule,
    DemoRxjsRoutingModule
  ]
})
export class DemoRxjsModule { }
