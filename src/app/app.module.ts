import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';

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
import { TestRxjs07Component } from './test-rxjs07/test-rxjs07.component';
import { TestRxjs08Component } from './test-rxjs08/test-rxjs08.component'
import { Canvas01Component } from './canvas01/canvas01.component';
import { TestRxjs09Component } from './test-rxjs09/test-rxjs09.component';
import { TestRxjs11Component } from './test-rxjs11/test-rxjs11.component';
import { TestRxjs13Component } from './test-rxjs13/test-rxjs13.component';
import { TestRxjs12BComponent } from './test-rxjs12-b/test-rxjs12-b.component';
import { TestRxjs14Component } from './test-rxjs14/test-rxjs14.component';
import { TestRxjs17SchedulerComponent } from './test-rxjs17-scheduler/test-rxjs17-scheduler.component';
import { DemoRxjsModule } from './demo-rxjs/demo-rxjs.module';
import { PagNoExisteComponent } from './pag-no-existe/pag-no-existe.component';
import { DemoInyDepModule } from './demo-iny-dep/demo-iny-dep.module';
import { DemoLoginModule } from './demo-login/demo-login.module';
import { Router } from '@angular/router';

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
    TestRxjs07Component,
    TestRxjs08Component,
    Canvas01Component,
    TestRxjs09Component,
    TestRxjs11Component,
    TestRxjs13Component,
    TestRxjs12BComponent,
    TestRxjs14Component,
    TestRxjs17SchedulerComponent,
    PagNoExisteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DemoRxjsModule,
    DemoLoginModule,
    AppRoutingModule,
    DemoInyDepModule
  ],
  // Prueba a comentar o descomentar una de las líneas de providers...
  // providers: [],
  // providers: [ { provide:ProvDatPersonasService, useClass:Prov2DatPersonasService} ],
  providers: [ ProvDatPersonasService ],

  bootstrap: [AppComponent]
})
export class AppModule { 
  
  constructor(router:Router){
    const replacer = (key: any, value: { name: any; }) => (typeof value === 'function') ? value.name : value;

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));   
  }
}
