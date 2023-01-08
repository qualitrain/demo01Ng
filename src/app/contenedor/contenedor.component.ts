import { Component, Input, OnInit } from '@angular/core';
import { ProvDatPersonasService } from '../servicios/prov-dat-persona.service'
import { Prov2DatPersonasService } from '../servicios/prov2-dat-persona.service'

@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.css'],
//  providers: [ ProvDatPersonasService ]
  providers: [ { provide:ProvDatPersonasService, useClass:Prov2DatPersonasService} ]

})
export class ContenedorComponent implements OnInit{
  @Input()
  notificarBajas:string="false";
  
  notificacionesOn:boolean=false;

    constructor(){
    console.log("ContenedorComponent.contructor()");
  }
  ngOnInit(): void {
   if(this.notificarBajas==="true"){
     this.notificacionesOn = true;
   }
  }
}
