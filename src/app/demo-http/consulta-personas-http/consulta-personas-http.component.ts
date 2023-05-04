import { Component, OnInit,OnDestroy } from '@angular/core';
import { ProvDatPersonahttpService } from '../prov-dat-personahttp.service';
import { IParamsAviso } from 'src/app/lib-qtx/despl-error/IParamsAviso';
import { IPersona } from 'src/app/negocio/ipersona';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-consulta-personas-http',
  templateUrl: './consulta-personas-http.component.html',
  styleUrls: ['./consulta-personas-http.component.css']
})
export class ConsultaPersonasHttpComponent implements OnInit {
  personas:IPersona[]=[];
  hayErrores:boolean;
  avisoError:IParamsAviso;
  suscGetPersonas: Subscription | undefined;

  constructor(private provDatPersona: ProvDatPersonahttpService) { 
    this.hayErrores = false;
    this.avisoError = {tipo:"Error", descripcion:"", sugerencia:""};
  }

  ngOnInit(): void {
    this.getPersonas();
  }
  getPersonas(){
   this.suscGetPersonas = this.provDatPersona.getPersonas()
                      .subscribe ( pers => this.procesarDatosRespuesta(pers));
  }
  procesarDatosRespuesta(respPersonas:IPersona[]){
    if(respPersonas.length == 1){ // Posible error
      if(respPersonas[0].idPersona < 0){ // Error en respuesta a petición
        this.avisoError.descripcion = respPersonas[0].nombres;
        this.avisoError.sugerencia = "Informe a su área de Soporte ";
        this.hayErrores = true;
        return;
      }
    }
    this.personas = respPersonas;
  }
  getFechaFormateada(fecha:Date):string{
    let opcionesFormato:any = {dateStyle:'long'};
    let formatoFecha:Intl.DateTimeFormat = new Intl.DateTimeFormat('es-MX', opcionesFormato);
    return formatoFecha.format(fecha);
  }
  getNombreCompleto(persona:IPersona):string{
    return  persona.apPaterno + " " + persona.apMaterno + " " + persona.nombres;
  }
}
