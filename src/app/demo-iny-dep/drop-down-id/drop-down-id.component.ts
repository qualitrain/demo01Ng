import { Component, Host, Optional, SkipSelf } from '@angular/core';
import { GestorOpcionesDemoIDService } from 'src/app/servicios/GestorOpcionesDemoID.service';
import { GestorOpcionesLibroService } from 'src/app/servicios/GestorOpcionesLibro.service';

@Component({
  selector: 'app-drop-down-id',
  templateUrl: './drop-down-id.component.html',
  styleUrls: ['./drop-down-id.component.css'],
  providers:[{provide:GestorOpcionesDemoIDService,useExisting:GestorOpcionesLibroService}]
//  providers:[{provide:GestorOpcionesDemoIDService,useClass:GestorOpcionesLibroService}]
})
export class DropDownIDComponent {
 nombreBoton:string="Indefinido";
 nomOpciones:string[]=["opcion 0", "opcion 1"];
 hRefOpciones:string[]=["#","#"];
 nInstancia:number=0;

 constructor(
 //    @Host() // Terminar busqueda en Host
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
