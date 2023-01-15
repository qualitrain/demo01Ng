import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ListaB4Component } from './lista-b4/lista-b4.component';
import { SeleccionadorComponent } from './seleccionador/seleccionador.component';
import { EditorPersonasComponent } from './editor-personas/editor-personas.component';
import { SelecColorComponent } from './selec-color/selec-color.component';
import { SelectAlternativaComponent } from './select-alternativa/select-alternativa.component';
import { TogglerComponent } from './toggler/toggler.component';
import { TarjetaComponent, EsRelevante } from './tarjeta/tarjeta.component';
import { ConsultaPersonasComponent } from './consulta-personas/consulta-personas.component';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { Prov2DatPersonasService } from './servicios/prov2-dat-persona.service';
import { ProvDatPersonasService } from './servicios/prov-dat-persona.service';
import { NotificadorBajaComponent } from './notificador-baja/notificador-baja.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { CajaDemoHostComponent } from './caja-demo-host/caja-demo-host.component';
import { TituloComponent } from './titulo/titulo.component';
import { TestRxjs01Component } from './test-rxjs01/test-rxjs01.component';
import { TestRxjs02Component } from './test-rxjs02/test-rxjs02.component'

@NgModule({
  declarations: [
    AppComponent,
    ListaB4Component,
    SeleccionadorComponent,
    EditorPersonasComponent,
    SelecColorComponent,
    SelectAlternativaComponent,
    TogglerComponent,
    TarjetaComponent,
    EsRelevante,
    ConsultaPersonasComponent,
    ContenedorComponent,
    NotificadorBajaComponent,
    DropDownComponent,
    CajaDemoHostComponent,
    TituloComponent,
    TestRxjs01Component,
    TestRxjs02Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  // Prueba a comentar o descomentar una de las líneas de providers...
  // providers: [],
  // providers: [ { provide:ProvDatPersonasService, useClass:Prov2DatPersonasService} ],
  providers: [ ProvDatPersonasService ],

  bootstrap: [AppComponent]
})
export class AppModule { }
