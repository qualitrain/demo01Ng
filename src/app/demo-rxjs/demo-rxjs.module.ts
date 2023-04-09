import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRxjsRoutingModule } from './demo-rxjs-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { ListaDemosBasicosComponent } from './lista-demos-basicos/lista-demos-basicos.component';
import { EditorComponent } from './editor/editor.component';
import { FormsModule } from '@angular/forms';
import { TestRxjs01Component } from './test-rxjs01/test-rxjs01.component';
import { TestRxjs02Component } from './test-rxjs02/test-rxjs02.component';
import { TestRxjs03Component } from './test-rxjs03/test-rxjs03.component';
import { TestRxjs04Component } from './test-rxjs04/test-rxjs04.component';
import { TestRxjs05Component } from './test-rxjs05/test-rxjs05.component';
import { TestRxjs06Component } from './test-rxjs06/test-rxjs06.component';
import { TestRxjs10Component } from './test-rxjs10/test-rxjs10.component';
import { TestRxjs12Component } from './test-rxjs12/test-rxjs12.component';
import { TestRxjs15AjaxComponent } from './test-rxjs15-ajax/test-rxjs15-ajax.component';
import { TestRxjs16SubjectComponent } from './test-rxjs16-subject/test-rxjs16-subject.component';
import { AvisadorComponent } from './avisador/avisador.component';


@NgModule({
  declarations: [
    PrincipalComponent,
    TestRxjs01Component,
    TestRxjs02Component,
    TestRxjs03Component,
    TestRxjs04Component,
    TestRxjs05Component,
    TestRxjs06Component,
    TestRxjs10Component,
    TestRxjs12Component,
    TestRxjs15AjaxComponent,
    TestRxjs16SubjectComponent,
    ListaDemosBasicosComponent,
    EditorComponent,
    AvisadorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DemoRxjsRoutingModule
  ],
  exports:[
    TestRxjs01Component,
    TestRxjs02Component,
    TestRxjs03Component,
    TestRxjs04Component,
    TestRxjs05Component,
    TestRxjs06Component,
    TestRxjs10Component,
    TestRxjs12Component,
    TestRxjs15AjaxComponent,
    TestRxjs16SubjectComponent
  ]
})
export class DemoRxjsModule { }
