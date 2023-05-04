import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { IParamsAviso } from 'src/app/lib-qtx/despl-error/IParamsAviso';
import { IPersona } from 'src/app/negocio/ipersona';
import { ProvDatPersonahttpService } from '../prov-dat-personahttp.service';
import { Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-consulta-persona-http',
  templateUrl: './consulta-persona-http.component.html',
  styleUrls: ['./consulta-persona-http.component.css']
})
export class ConsultaPersonaHttpComponent implements AfterViewInit, OnDestroy {
  persona?:IPersona;
  hayErrores:boolean;
  avisoError:IParamsAviso;
  inputIdPersona?:HTMLInputElement;
  idInput:string="";
  suscIdPersona: Subscription | undefined;
  suscGetPersona: Subscription | undefined 

  constructor(private provDatPersona:ProvDatPersonahttpService ) {
    this.hayErrores = false;
    this.avisoError = { tipo:"Error", descripcion:"", sugerencia:"" };
    this.idInput = "id_cp_Persona" + Math.round(Math.random() * 10000);
  }
  ngOnDestroy(): void {
    this.suscIdPersona?.unsubscribe();
    this.suscGetPersona?.unsubscribe();
  }
  ngAfterViewInit(): void {
    this.inputIdPersona = document.getElementById(this.idInput) as HTMLInputElement;
    this.suscIdPersona = fromEvent(this.inputIdPersona,'change')
            .subscribe(evt => this.consultarPersona(evt))
  }

  consultarPersona(evt:Event){
    console.log("consultarPersona " + this.inputIdPersona?.value);
    this.persona = undefined;
    this.hayErrores = false;
    let id:number = Number.parseInt(this.inputIdPersona!.value);
    this.suscGetPersona = this.provDatPersona.getPersona(id)
        .subscribe ( persI => this.procesarDatosRespuesta(persI));
  }
  procesarDatosRespuesta(personaI:IPersona):void{
    if(personaI==null || personaI==undefined){
      this.hayErrores = true;
      this.avisoError.tipo = "Aviso";
      this.avisoError.descripcion = "No se encontró una persona con el Id " + this.inputIdPersona!.value;
      this.avisoError.sugerencia = "Intente con otro Id";
      return;
    }

    if(personaI.idPersona < 0){
      this.hayErrores = true;
      this.avisoError.tipo = "Error";
      this.avisoError.descripcion = personaI.nombres;
      this.avisoError.sugerencia = "Avise a su área de soporte";
      return;  
    }
    this.hayErrores = false;
    this.persona = personaI;
    return;
  }

}
