import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoInyDepRoutingModule } from './demo-iny-dep-routing.module';
import { EjmID01Component } from './ejm-id01/ejm-id01.component';
import { ConsultaPersonasIDComponent } from './consulta-personas-id/consulta-personas-id.component';
import { EjmID02Component } from './ejm-id02/ejm-id02.component';
import { ContenedorIDComponent } from './contenedor-id/contenedor-id.component';
import { NotificadorBajaIDComponent } from './notificador-baja-id/notificador-baja-id.component';
import { ProvDatPersonasService } from '../servicios/prov-dat-persona.service';
import { PrincipalIDComponent } from './principal-id/principal-id.component';
import { EjmID03Component } from './ejm-id03/ejm-id03.component';
import { EjmID04Component } from './ejm-id04/ejm-id04.component';
import { DropDownIDComponent } from './drop-down-id/drop-down-id.component';


@NgModule({
  declarations: [
    EjmID01Component,
    ConsultaPersonasIDComponent,
    EjmID02Component,
    ContenedorIDComponent,
    NotificadorBajaIDComponent,
    PrincipalIDComponent,
    EjmID03Component,
    EjmID04Component,
    DropDownIDComponent 
  ],
  imports: [
    CommonModule,
    DemoInyDepRoutingModule
  ],
  providers: [
    ProvDatPersonasService
  ]
})
export class DemoInyDepModule { }
