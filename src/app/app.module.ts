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
import { TestRxjs02Component } from './test-rxjs02/test-rxjs02.component';
import { TestRxjs03Component } from './test-rxjs03/test-rxjs03.component';
import { TestRxjs04Component } from './test-rxjs04/test-rxjs04.component';
import { TestRxjs05Component } from './test-rxjs05/test-rxjs05.component';
import { TestRxjs06Component } from './test-rxjs06/test-rxjs06.component';
import { TestRxjs07Component } from './test-rxjs07/test-rxjs07.component';
import { TestRxjs08Component } from './test-rxjs08/test-rxjs08.component'
import { Canvas01Component } from './canvas01/canvas01.component';
import { TestRxjs09Component } from './test-rxjs09/test-rxjs09.component';
import { TestRxjs10Component } from './test-rxjs10/test-rxjs10.component';
import { TestRxjs11Component } from './test-rxjs11/test-rxjs11.component';
import { TestRxjs12Component } from './test-rxjs12/test-rxjs12.component';
import { TestRxjs13Component } from './test-rxjs13/test-rxjs13.component';

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
    TestRxjs02Component,
    TestRxjs03Component,
    TestRxjs04Component,
    TestRxjs05Component,
    TestRxjs06Component,
    TestRxjs07Component,
    TestRxjs08Component,
    Canvas01Component,
    TestRxjs09Component,
    TestRxjs10Component,
    TestRxjs11Component,
    TestRxjs12Component,
    TestRxjs13Component
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
