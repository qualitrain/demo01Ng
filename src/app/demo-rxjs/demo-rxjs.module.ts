import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRxjsRoutingModule } from './demo-rxjs-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { ListaDemosBasicosComponent } from './lista-demos-basicos/lista-demos-basicos.component';
import { EditorComponent } from './editor/editor.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PrincipalComponent,
    ListaDemosBasicosComponent,
    EditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DemoRxjsRoutingModule
  ]
})
export class DemoRxjsModule { }
