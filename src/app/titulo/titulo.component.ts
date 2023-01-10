import { Component, Inject, Input } from '@angular/core';
import { PARAMS_CIA } from '../servicios/InyectoresExtra';

let getParams = function (){
  return {nombre:"Mueblería Zaza", rutaLogo:"./assets/img/sillon.png"};
}

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css'],
  providers: [ { provide:PARAMS_CIA, useFactory:getParams  }]
})
export class TituloComponent {
  @Input()
  titSecundario:string="";
  
  empresa:string="Indefinida";
  rutaLogo:string="";
  constructor(
    @Inject( PARAMS_CIA )
    private params:any){
      this.empresa = params.nombre;
      this.rutaLogo= params.rutaLogo;
 }

}
