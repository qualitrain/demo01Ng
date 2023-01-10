import { Component, Inject, Input } from '@angular/core';
import { PARAMS_CIA } from '../servicios/InyectoresExtra';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
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
