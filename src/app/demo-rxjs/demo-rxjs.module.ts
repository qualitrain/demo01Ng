import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRxjsRoutingModule } from './demo-rxjs-routing.module';
import { PrincipalComponent } from './principal/principal.component';


@NgModule({
  declarations: [
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    DemoRxjsRoutingModule
  ]
})
export class DemoRxjsModule { }
