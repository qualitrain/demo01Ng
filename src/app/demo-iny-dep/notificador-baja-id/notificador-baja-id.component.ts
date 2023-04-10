import { Component } from '@angular/core';
import { IPersona } from 'src/app/negocio/ipersona';
import { ProvDatPersonasService } from 'src/app/servicios/prov-dat-persona.service';

@Component({
  selector: 'app-notificador-baja-id',
  templateUrl: './notificador-baja-id.component.html',
  styleUrls: ['./notificador-baja-id.component.css'],

})
export class NotificadorBajaIDComponent {
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
