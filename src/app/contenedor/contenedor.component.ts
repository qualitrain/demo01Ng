import { Component } from '@angular/core';
import { ProvDatPersonasService } from '../servicios/prov-dat-persona.service'
import { Prov2DatPersonasService } from '../servicios/prov2-dat-persona.service'

@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.css'],
//  providers: [ ProvDatPersonasService ]
  providers: [ { provide:ProvDatPersonasService, useClass:Prov2DatPersonasService} ]

})
export class ContenedorComponent {
    constructor(){
      console.log("ContenedorComponent.contructor()");
    }
}
