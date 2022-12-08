import { Component } from '@angular/core';
import { IPersona } from '../negocio/ipersona';

@Component({
  selector: 'app-editor-personas',
  templateUrl: './editor-personas.component.html',
  styleUrls: ['./editor-personas.component.css']
})
export class EditorPersonasComponent {
  funcionActual : string;
  persona : IPersona;
  constructor() { 
    this.persona = {
      idPersona:0,
      apPaterno:"Apellido01",
      apMaterno:"Apellido02",
      nombres:"Nombre01",
      fechaNacAAAAMMDD:""
    }
    this.funcionActual = "Alta de Personas";
  }
}
