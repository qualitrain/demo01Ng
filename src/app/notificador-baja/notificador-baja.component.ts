import { Component } from '@angular/core';
import { ProvDatPersonasService } from '../servicios/prov-dat-persona.service'
import { IPersona } from '../negocio/ipersona';

@Component({
  selector: 'app-notificador-baja',
  templateUrl: './notificador-baja.component.html',
  styleUrls: ['./notificador-baja.component.css'],

})
export class NotificadorBajaComponent {
  nBajas=0;
  listaBajas:string[]=[];
  bajas:string="";
  mostrarBajas:boolean=false;

  constructor(private motorEventos:ProvDatPersonasService){
    motorEventos.notificador
                .subscribe(bajaI => this.procesarBaja(bajaI) )
  }
  procesarBaja(bajaI:IPersona):void{
    this.nBajas++;
    this.listaBajas.push(bajaI.nombres + " " + bajaI.apPaterno 
                         + " (" + bajaI.idPersona + ")"); 
    this.bajas =  this.listaBajas.join(", ");
  }
}
