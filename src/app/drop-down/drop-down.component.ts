import { Component, Host, Optional, SkipSelf } from '@angular/core';
import { IGestorOpcionesService } from '../servicios/IGestorOpciones';
import { GestorOpcionesLibroService } from "../servicios/GestorOpcionesLibro.service";
import { GestorOpcionesDemoIDService } from "../servicios/GestorOpcionesDemoID.service";

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css'],
  providers:[{provide:GestorOpcionesDemoIDService,useExisting:GestorOpcionesLibroService}]
//  providers:[{provide:GestorOpcionesDemoIDService,useClass:GestorOpcionesLibroService}]
})
export class DropDownComponent {
 nombreBoton:string="Indefinido";
 nomOpciones:string[]=["opcion 0", "opcion 1"];
 hRefOpciones:string[]=["#","#"];
 nInstancia:number=0;

 constructor(
 //  @Host() // Terminar busqueda en Host
   @SkipSelf() //Empezar busqueda en el padre
     @Optional()
     private provDropDown:GestorOpcionesDemoIDService) 
   {
     if(provDropDown){

       this.nombreBoton = provDropDown.getNombreBoton();
       this.nomOpciones = provDropDown.getNombresOpciones();
       this.hRefOpciones = provDropDown.getLinks();
       this.nInstancia = provDropDown.getNinstancia();
      }
 }
 publicarEleccion(opcionElegida:string){
   this.provDropDown.publicar(opcionElegida);
 }
}
