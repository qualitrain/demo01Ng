import { Component } from '@angular/core';
import { IGestorOpcionesService } from '../servicios/IGestorOpciones';
import { GestorOpcionesLibroService } from "../servicios/GestorOpcionesLibro.service";
import { GestorOpcionesDemoIDService } from "../servicios/GestorOpcionesDemoID.service";

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css'],
  providers:[
  //  { provide: IGestorOpcionesService, useExisting: GestorOpcionesLibroService}
    { provide: IGestorOpcionesService, useExisting: GestorOpcionesDemoIDService}

  ]
})
export class DropDownComponent {
 nombreBoton:string="Indefinido";
 nomOpciones:string[]=["opcion 0", "opcion 1"];
 hRefOpciones:string[]=["#","#"]

 constructor(private provDropDown:IGestorOpcionesService) {
   this.nombreBoton = provDropDown.getNombreBoton();
   this.nomOpciones = provDropDown.getNombresOpciones();
   this.hRefOpciones = provDropDown.getLinks();
 }
 publicarEleccion(opcionElegida:string){
   this.provDropDown.publicar(opcionElegida);
 }
}
