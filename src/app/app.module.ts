import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ListaB4Component } from './lista-b4/lista-b4.component';
import { SeleccionadorComponent } from './seleccionador/seleccionador.component';
import { EditorPersonasComponent } from './editor-personas/editor-personas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaB4Component,
    SeleccionadorComponent,
    EditorPersonasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
