import { Component, Inject, Input } from '@angular/core';
import { PARAMS_CIA } from 'src/app/servicios/InyectoresExtra';

let getParams = function (){
  return {nombre:"Mueblería Zaza", rutaLogo:"./assets/img/sillon.png"};
}

@Component({
  selector: 'app-titulo-id',
  templateUrl: './titulo-id.component.html',
  styleUrls: ['./titulo-id.component.css'],
//  providers: [ { provide:PARAMS_CIA, useFactory:getParams  }]
})
export class TituloIDComponent {
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
