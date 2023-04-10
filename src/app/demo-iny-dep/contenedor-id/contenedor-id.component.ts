import { Component, Input, OnInit } from '@angular/core';
import { ProvDatPersonasService } from 'src/app/servicios/prov-dat-persona.service';
import { Prov2DatPersonasService } from 'src/app/servicios/prov2-dat-persona.service';

@Component({
  selector: 'app-contenedor-id',
  templateUrl: './contenedor-id.component.html',
  styleUrls: ['./contenedor-id.component.css'],
//  providers: [ ProvDatPersonasService ]
  providers: [ { provide:ProvDatPersonasService, useClass:Prov2DatPersonasService} ]

})
export class ContenedorIDComponent implements OnInit{
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
